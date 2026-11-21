/**
 * generate-og-images.mjs
 * ----------------------
 * Builds one social card per page.
 *
 * WHY THIS EXISTS
 * Every one of the site's pages shared a single `og-default.jpg`. That is the
 * card every social share and every AI preview used, so the flagship
 * comparison page, the gallery and the journal all previewed as the same
 * generic image — and the share that would have won the click was won by
 * whatever that file happened to show.
 *
 * HOW IT WORKS
 * The script reads the BUILT site, takes each page's own title and meta
 * description, and renders a card for it: the espresso ground, the porcelain
 * display face, the rose accent and the blush bloom that the site already
 * uses. Because the content comes from the built HTML, a card can never
 * describe a page that does not exist or quote a title the page does not
 * carry.
 *
 * It runs between two builds. The first build produces the HTML to read; the
 * script writes the cards into `public/og/`; the second build copies them
 * into `dist/` and points the pages at them. `npm run build` does both.
 *
 * THE TYPEFACES
 * The site's own faces — Cormorant Garamond and Jost — are served as woff2
 * for the browser, and woff2 cannot be rasterised. The cards therefore set a
 * serif and a sans by family, which every platform has. The pairing reads
 * the same way the site does: an editorial serif for the claim, a letterspaced
 * sans for the label.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import sharp from 'sharp';

const DIST = 'dist';
const OUT = join('public', 'og');

const COLORS = {
  espresso: '#221f1d',
  porcelain: '#fdfbf7',
  blush: '#fbedef',
  rose: '#a33b52',
  ivory: '#f3ede4',
};

const WIDTH = 1200;
const HEIGHT = 630;

/** The card's file name for a route. `/` becomes `home`. */
export const ogSlug = (pathname) => {
  const clean = pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  return clean === '' ? 'home' : clean;
};

/** Escape the five characters that matter inside an XML text node. */
const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

/**
 * Break a title into at most three lines.
 *
 * A title that runs past the card's edge is worse than a short one, because
 * it gets truncated by the platform anyway — and the truncation lands
 * mid-word. The break is on word boundaries, and the last line is kept
 * short so the block reads as a shape rather than as a paragraph.
 */
const wrap = (text, maxChars) => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  if (lines.length <= 3) return lines;
  return [...lines.slice(0, 2), lines.slice(2).join(' ')];
};

/** The serif size shrinks as the title gets longer, so three long lines fit. */
const titleSize = (lines) => (lines.length >= 3 ? 58 : lines.length === 2 ? 68 : 78);

const svg = ({ title, description }) => {
  const lines = wrap(title, 26);
  const size = titleSize(lines);
  const lineHeight = Math.round(size * 1.14);
  const titleBlock = lines
    .map(
      (line, i) =>
        `<text x="80" y="${286 + i * lineHeight}" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" fill="${COLORS.porcelain}" letter-spacing="-1">${escapeXml(line)}</text>`,
    )
    .join('');

  const descLines = wrap(description, 62);
  // A card that ends mid-word is worse than one that ends early: the
  // platform shows the whole card, so a clipped sentence reads as a mistake.
  // If the description did not fit, it is cut at a word and marked.
  const descTruncated = descLines.length > 2;
  const shown = descLines.slice(0, 2);
  if (descTruncated) {
    const last = shown[1];
    shown[1] = `${last.replace(/[,.;:—-]$/, '')}…`;
  }
  const descBlock = shown
    .map(
      (line, i) =>
        `<text x="80" y="${286 + lines.length * lineHeight + 26 + i * 34}" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="${COLORS.porcelain}" opacity="0.72">${escapeXml(line)}</text>`,
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <radialGradient id="bloom" cx="78%" cy="88%" r="62%">
      <stop offset="0%" stop-color="${COLORS.rose}" stop-opacity="0.34"/>
      <stop offset="55%" stop-color="${COLORS.blush}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${COLORS.espresso}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2b2724"/>
      <stop offset="100%" stop-color="${COLORS.espresso}"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ground)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bloom)"/>

  <text x="80" y="88" font-family="Helvetica, Arial, sans-serif" font-size="21" letter-spacing="7" fill="${COLORS.porcelain}" opacity="0.82">KIAMO SKIN</text>
  <text x="1120" y="88" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="21" letter-spacing="7" fill="${COLORS.rose}">SAN DIEGO</text>
  <rect x="80" y="116" width="1040" height="1" fill="${COLORS.porcelain}" opacity="0.2"/>

  ${titleBlock}
  ${descBlock}

  <rect x="80" y="548" width="54" height="3" fill="${COLORS.rose}"/>
  <text x="80" y="592" font-family="Helvetica, Arial, sans-serif" font-size="19" letter-spacing="4.5" fill="${COLORS.porcelain}" opacity="0.6">CORRECTIVE FACIAL &amp; SCALP SPA</text>
</svg>`;
};

/** Every HTML file in dist, with the route it serves. */
const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
};

const routeOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  return `/${rel.replace(/index\.html$/, '').replace(/\.html$/, '')}`;
};

const pick = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? '';

const main = async () => {
  await mkdir(OUT, { recursive: true });
  const files = await walk(DIST);
  let written = 0;

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const route = routeOf(file);

    // The 404 page is not a share target.
    if (route === '/404/' || route === '/404') continue;

    const title = pick(html, /<title>([^<]*)<\/title>/i);
    if (!title) continue;

    // The description is the card's second line. The brand suffix is dropped
    // from the title — the card already carries the wordmark.
    const cleanTitle = title.replace(/\s*\|\s*KIAMO Skin\s*$/i, '').trim();
    const description = pick(html, /<meta name="description" content="([^"]*)"/i);

    const buffer = await sharp(Buffer.from(svg({ title: cleanTitle, description })))
      .png({ quality: 88, compressionLevel: 9 })
      .toBuffer();

    await writeFile(join(OUT, `${ogSlug(route)}.png`), buffer);
    written += 1;
  }

  console.log(`og images: ${written} cards written to ${OUT}`);
};

await main();
