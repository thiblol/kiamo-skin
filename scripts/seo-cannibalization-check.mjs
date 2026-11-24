/**
 * seo-cannibalization-check.mjs
 * ------------------------------
 * The cannibalization and orphan audit, as a script you can re-run.
 *
 *   npm run build:once && node scripts/seo-cannibalization-check.mjs
 *
 * WHY IT EXISTS
 *   Two pages on this site answered "corrective facials in San Diego" with
 *   the identical H1 for a while, and every national service page opened its
 *   meta description with the same "…in San Diego" phrase as its San Diego
 *   twin. Neither showed up in the guard suite, because nothing was broken —
 *   the pages were individually valid and collectively competing.
 *
 *   This checks the two things the guard suite does not: whether two pages
 *   claim the same query, and whether a page has any path to it.
 *
 * WHAT IT REPORTS
 *   1. Duplicate H1s and duplicate titles across the build.
 *   2. Pages that are orphans, near-orphans or buried more than three clicks
 *      from the homepage.
 *   3. The description similarity between each national /services/<x>/ page
 *      and its /service-areas/san-diego/<x>/ twin. Above 0.45 the two pages
 *      are close enough to compete, and the national page's description is
 *      the one that should give way — the city page is the one that should
 *      own the "in San Diego" query.
 *   4. National service pages whose description still carries a geo phrase.
 *
 * READ THE OUTPUT BEFORE CHANGING COPY
 *   Similarity is a warning, not a verdict. Two pages about the same
 *   treatment will always share vocabulary; what must not be shared is the
 *   query. Check that the geo phrase sits on exactly one of the pair.
 */
import fs from 'fs';
import path from 'path';

const root = 'dist';
const pages = {};
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) {
      const html = fs.readFileSync(p, 'utf8');
      const canonical =
        (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/) ||
          html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/) || [])[1] || '';
      const rel = '/' + path.relative(root, p).split(path.sep).join('/').replace(/index\.html$/, '');
      const url = canonical ? canonical.replace('https://kiamoskin.com', '') : rel;
      const body = html
        .replace(/<nav[\s\S]*?<\/nav>/g, '')
        .replace(/<footer[\s\S]*?<\/footer>/g, '')
        .replace(/<header[\s\S]*?<\/header>/g, '');
      pages[url] = {
        url,
        title: (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '',
        desc: (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '',
        h1: strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ''),
        links: [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1]),
        bodyLinks: [...body.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1]),
      };
    }
  }
};
walk(root);

const internal = (u) => u && (u.startsWith('/') || u.startsWith('https://kiamoskin.com'));
const norm = (u) => (u.startsWith('https://kiamoskin.com') ? u.replace('https://kiamoskin.com', '') : u).split('#')[0];

const inbound = {};
const inboundBody = {};
for (const p of Object.values(pages)) {
  for (const l of p.links) if (internal(l)) inbound[norm(l)] = (inbound[norm(l)] || 0) + 1;
  for (const l of p.bodyLinks) if (internal(l)) inboundBody[norm(l)] = (inboundBody[norm(l)] || 0) + 1;
}

/* ---- the sitemap Google actually reads ----
   robots.txt names one sitemap. If it is an index, the parts it lists are
   the real URLs — not the index's own <loc> entries, and not any other
   sitemap file that happens to sit in dist/. */
function readSitemap(file) {
  const xml = fs.readFileSync(path.join(root, file), 'utf8');
  if (/<sitemapindex/i.test(xml)) {
    const parts = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].split('/').pop());
    return parts.flatMap((p) => (fs.existsSync(path.join(root, p)) ? readSitemap(p) : []));
  }
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://kiamoskin.com', ''));
}

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
const declared = (robots.match(/^Sitemap:\s*(\S+)/m) || [])[1] || '';
const sitemapFile = declared.split('/').pop() || 'sitemap-index.xml';
const sitemap = fs.existsSync(path.join(root, sitemapFile))
  ? readSitemap(sitemapFile)
  : [];
const inSitemap = new Set(sitemap);

/* ---- crawl depth ---- */
const adjacency = {};
for (const p of Object.values(pages)) {
  adjacency[p.url] = [...new Set(p.links.filter(internal).map(norm))].filter((t) => pages[t]);
}
const depth = { '/': 0 };
const queue = ['/'];
while (queue.length) {
  const cur = queue.shift();
  for (const next of adjacency[cur] || []) {
    if (depth[next] === undefined) {
      depth[next] = depth[cur] + 1;
      queue.push(next);
    }
  }
}

let problems = 0;
const section = (title) => console.log(`\n${'='.repeat(64)}\n${title}\n${'='.repeat(64)}`);

/* ---- 1. duplicate headings ---- */
section('1. HEADINGS AND TITLES');
const byH1 = {};
const byTitle = {};
for (const p of Object.values(pages)) {
  (byH1[p.h1] = byH1[p.h1] || []).push(p.url);
  (byTitle[p.title] = byTitle[p.title] || []).push(p.url);
}
let dupes = 0;
for (const [h, urls] of Object.entries(byH1)) {
  if (urls.length > 1) {
    dupes++;
    console.log(`  DUPLICATE H1  ${JSON.stringify(h)}\n      ${urls.join('\n      ')}`);
  }
}
for (const [t, urls] of Object.entries(byTitle)) {
  if (urls.length > 1) {
    dupes++;
    console.log(`  DUPLICATE TITLE  ${JSON.stringify(t)}\n      ${urls.join('\n      ')}`);
  }
}
if (!dupes) console.log('  ok — every page has its own H1 and title');
problems += dupes;

/* ---- 2. orphans and depth ---- */
section('2. LINK GRAPH');
/* The 404 is a fallback, not a page — it is deliberately out of the sitemap
   and nothing links to it, so it is excluded from every check here. */
const isRealPage = (u) => u !== '/404/';
const orphans = Object.keys(pages).filter((u) => isRealPage(u) && (inbound[u] || 0) === 0 && inSitemap.has(u));
const near = Object.keys(pages).filter((u) => isRealPage(u) && inbound[u] === 1);
const deep = Object.keys(pages).filter((u) => isRealPage(u) && (depth[u] ?? 99) > 3);
const noBody = Object.keys(pages).filter((u) => isRealPage(u) && (inboundBody[u] || 0) === 0 && (inbound[u] || 0) > 0);
const notInSitemap = Object.keys(pages).filter((u) => isRealPage(u) && !inSitemap.has(u));
console.log(`  pages built: ${Object.keys(pages).length}   sitemap (${sitemapFile}): ${sitemap.length}`);
console.log(`  orphans: ${orphans.length}${orphans.length ? ' -> ' + orphans.join(', ') : ''}`);
console.log(`  near-orphans (1 link): ${near.length}${near.length ? ' -> ' + near.join(', ') : ''}`);
console.log(`  deeper than 3 clicks: ${deep.length}${deep.length ? ' -> ' + deep.join(', ') : ''}`);
console.log(`  no body link in (nav/footer only): ${noBody.length}${noBody.length ? ' -> ' + noBody.join(', ') : ''}`);
console.log(`  built but not in the sitemap: ${notInSitemap.length}${notInSitemap.length ? ' -> ' + notInSitemap.join(', ') : ''}`);
problems += orphans.length + near.length + deep.length + notInSitemap.length;

/* ---- 3. national vs city twins ---- */
section('3. NATIONAL SERVICE PAGES vs THEIR SAN DIEGO TWINS');
const tokens = (s) =>
  new Set(
    s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 2)
  );
const jaccard = (a, b) => {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / (A.size + B.size - inter);
};

let geoInNational = 0;
for (const url of Object.keys(pages)) {
  const m = url.match(/^\/services\/([a-z-]+)\/$/);
  if (!m) continue;
  const twin = `/service-areas/san-diego/${m[1]}/`;
  if (!pages[twin]) continue;
  const national = pages[url];
  const city = pages[twin];
  const score = jaccard(national.desc, city.desc);
  const flag = score > 0.45 ? '  <-- CLOSE' : '';
  console.log(`  ${m[1].padEnd(28)} ${score.toFixed(2)}${flag}`);
  if (/san diego/i.test(national.desc)) {
    geoInNational++;
    console.log(`      national description still carries a geo phrase: ${national.desc}`);
  }
}
if (geoInNational) {
  console.log(`\n  ${geoInNational} national description(s) still carry "in San Diego".`);
  console.log('  The city twin should own that query; the national page should not.');
  problems += geoInNational;
} else {
  console.log('\n  ok — no national service description carries a geo phrase');
}

console.log(`\n${problems === 0 ? 'PASS — no cannibalization or orphan problems found.' : `${problems} problem(s) found.`}`);
process.exit(problems === 0 ? 0 : 1);
