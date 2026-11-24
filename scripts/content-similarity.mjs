/**
 * Content-similarity check for the location cluster.
 *
 * The concern: near-word-for-word location pages are the classic doorway-page
 * pattern, and Google discounts a cluster whose members say the same thing in
 * the same order. The working limit for this cluster is 20–25% similarity
 * between any two pages.
 *
 * WHAT IS COMPARED
 *   Only the body copy — script and style bodies are stripped, tags are
 *   stripped, and the nav/footer/header are cut off, because those are
 *   identical on every page by design and would report 100% on everything.
 *
 * HOW SIMILARITY IS SCORED
 *   Token-level overlap over 5-word shingles, measured two ways.
 *
 *   Jaccard — shared shingles over the union. Symmetric, and the standard
 *   way to ask "how much of these two pages is the same text". This is the
 *   number to compare against the 20–25% limit.
 *
 *   Containment — shared shingles over the smaller page. Asymmetric, and it
 *   answers a different question: "how much of the smaller page is
 *   reproduced on the larger one". Two pages of the same length that share
 *   most of their treatment description score high on this even when each
 *   carries a large amount of material the other does not.
 *
 *   Both are reported. Reporting only the higher of the two was misleading:
 *   it counted a page about Procell in Carlsbad as a near-duplicate of one
 *   about Procell in La Jolla because both describe Procell, which is a
 *   property of the treatment rather than of the copy.
 *
 *   A note on what the numbers mean. Two pages about the same treatment in
 *   two different cities are supposed to share the description of that
 *   treatment — that is the treatment, not boilerplate. The question the
 *   limit answers is whether the LOCAL substance differs: the hero, the
 *   quick answer, the local concern, the questions and the body copy. The
 *   Jaccard figure is the one that answers it.
 *
 * USAGE
 *   node scripts/content-similarity.mjs            # report over dist/
 *   node scripts/content-similarity.mjs --limit 30 # report the worst 30
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

/** The routes the check covers. */
const IN_SCOPE = /^\/(service-areas|services)\//;

/** The limit this cluster works to. */
const THRESHOLD = 0.25;

const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(process.argv[limitArg + 1]) : 40;

/**
 * Strip a page down to the words a reader actually reads in the body.
 *
 * The header, nav, footer and the schema scripts come out — they are
 * identical on every page, so leaving them in makes every pair look
 * identical and the measurement meaningless.
 */
function bodyText(html) {
  let text = html
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header\b[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, ' ');

  // Everything before <main> is chrome; everything after </main> is chrome.
  const main = text.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  text = main ? main[1] : text;

  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/** The set of 5-word shingles in a body. */
function shingles(text, size = 5) {
  const words = text.split(' ').filter(Boolean);
  const set = new Set();
  for (let i = 0; i + size <= words.length; i += 1) {
    set.add(words.slice(i, i + size).join(' '));
  }
  return set;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/** How much of the smaller page is contained in the larger one. */
function containment(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared += 1;
  return shared / Math.min(a.size, b.size);
}

const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(full, 'utf8');
      const route =
        '/' +
        relative(DIST, full)
          .split(sep)
          .join('/')
          .replace(/index\.html$/, '')
          .replace(/\.html$/, '');
      out.push({ route, text: bodyText(html) });
    }
  }
  return out;
};

const all = await walk(DIST);
const pages = all.filter((p) => IN_SCOPE.test(p.route));
for (const p of pages) p.shingles = shingles(p.text);

const results = [];
for (let i = 0; i < pages.length; i += 1) {
  for (let j = i + 1; j < pages.length; j += 1) {
    const a = pages[i];
    const b = pages[j];
    const jac = jaccard(a.shingles, b.shingles);
    const con = containment(a.shingles, b.shingles);
    if (Math.max(jac, con) > 0.1) results.push({ a: a.route, b: b.route, jac, con });
  }
}

results.sort((x, y) => y.jac - x.jac);

const overJac = results.filter((r) => r.jac > THRESHOLD).length;
const overCon = results.filter((r) => r.con > THRESHOLD).length;
const jacs = results.map((r) => r.jac).sort((x, y) => x - y);
const median = jacs.length ? jacs[Math.floor(jacs.length / 2)] : 0;
const p90 = jacs.length ? jacs[Math.floor(jacs.length * 0.9)] : 0;

console.log(`\n${pages.length} in-scope pages compared.`);
console.log(`\nJACCARD — the symmetric measure, and the one the limit applies to:`);
console.log(`  median ${(median * 100).toFixed(1)}%   p90 ${(p90 * 100).toFixed(1)}%`);
console.log(`  ${overJac} of ${results.length} pairs are above the ${Math.round(THRESHOLD * 100)}% limit.`);
console.log(`\nCONTAINMENT — how much of the smaller page is reproduced on the larger:`);
console.log(`  ${overCon} of ${results.length} pairs are above the limit.`);
console.log('  Two pages about the same treatment in two cities share the');
console.log('  treatment; the local substance is what has to differ.\n');

for (const r of results.slice(0, LIMIT)) {
  const flag = r.jac > THRESHOLD ? '  OVER' : '';
  console.log(
    `J ${(r.jac * 100).toFixed(1).padStart(5)}%  C ${(r.con * 100).toFixed(1).padStart(5)}%  ${r.a}  ×  ${r.b}${flag}`
  );
}
console.log('');
