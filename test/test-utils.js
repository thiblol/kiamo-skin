/**
 * Test Configuration & Shared Utilities
 *
 * Provides test infrastructure for guard tests that validate business rules
 * and legal constraints against the built HTML in dist/.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

export const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

/** @typedef {{ route: string, file: string, html: string, text: string }} Page */

/** @type {Page[]} */
export const pages = [];

/** @type {Set<string>} */
export const routes = new Set();

/**
 * Recursively walk directory and collect HTML files
 */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '_astro') {
      await walk(full);
    } else if (entry.name.endsWith('.html')) {
      const rel = relative(DIST, full).split(sep).join('/');
      const route = rel === 'index.html' ? '/' : '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
      routes.add(route);
      const html = await readFile(full, 'utf8');
      const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      /**
       * The same text with script and style blocks removed.
       *
       * `text` keeps the contents of <script> tags, because the JSON-LD has to
       * be inspected — the schema guards read it. But JSON-LD is not COPY, and
       * a copy rule that runs over it produces false positives: the area
       * schema for Del Mar carries a "Del Mar" Place name next to an
       * "address" key, which matched the closed-location rule even though no
       * sentence on the page claims a studio there. The closed-location rule
       * is about what a reader is told, so it reads `copy`.
       */
      const copy = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ');
      pages.push({ route, file: rel, html, text, copy });
    }
  }
}

/**
 * Load all pages from dist/ - call once before running tests
 */
export async function loadPages() {
  if (pages.length > 0) return; // Already loaded
  await walk(DIST);
  if (pages.length === 0) {
    throw new Error('No pages found in dist/ - did build complete?');
  }
}

/**
 * Execute callback for each page, collecting every failure rather than
 * stopping at the first.
 *
 * The previous version rethrew on the first failing page, so a single bad
 * page hid every other one. That mattered: the closed-location false
 * positive on `404.html` aborted the run before a single treatment page was
 * reached, and the pronoun violations on `/treatments/melasma` stayed
 * invisible for the same reason. Now every page is checked and the failures
 * are reported together.
 */
export function forEachPage(callback) {
  const failures = [];

  for (const page of pages) {
    try {
      callback(page);
    } catch (error) {
      // Enhance error message with page context
      if (error.message && !error.message.includes(page.file)) {
        error.message = `${page.file}: ${error.message}`;
      }
      failures.push(error);
    }
  }

  if (failures.length === 1) {
    throw failures[0];
  }

  if (failures.length > 1) {
    const detail = failures.map((f) => `  - ${f.message}`).join('\n');
    throw new Error(
      `${failures.length} pages failed:\n${detail}`
    );
  }
}

/**
 * Get a specific page by route
 */
export function getPage(route) {
  const page = pages.find((p) => p.route === route);
  if (!page) {
    throw new Error(`Page not found: ${route}`);
  }
  return page;
}

/**
 * Get all pages matching a pattern
 */
export function getPages(pattern) {
  return pages.filter((p) => pattern.test(p.route));
}

/**
 * Extract all JSON-LD blocks from HTML
 */
export function getJsonLdBlocks(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  return blocks.map((block) => {
    try {
      return JSON.parse(block[1]);
    } catch (error) {
      throw new Error(`Invalid JSON-LD: ${error.message}`);
    }
  });
}

/**
 * Verified business data - single source of truth
 */
export const VERIFIED = {
  name: 'KIAMO Skin',
  address: {
    street: '3067 Reynard Way',
    city: 'San Diego',
    region: 'CA',
    postalCode: '92103',
  },
  phone: '(310) 595-0872',
  email: 'hello@kiamoskin.com',
  /**
   * The one rating the site is allowed to display, and the one review count.
   *
   * site-brief.md §5.2: "only display if a real, earned GBP rating exists.
   * Check the live Google Business Profile before publishing any rating or
   * review count." The GBP carries a 5.0 rating, and the studio confirmed 40
   * five-star Google reviews on 2026-10-03 (src/data/review-stats.ts).
   *
   * `TrustBadge.astro` renders these on the homepage as visible HTML and
   * links out to the GBP, so a reader can verify the figure. No
   * `aggregateRating` node is emitted anywhere — schema-claimed review
   * counts are a separate, still-forbidden thing.
   */
  reviewRating: 5,
  reviewCount: 40,
  prices: new Set([
    '$199',
    '$249',
    '$259',
    '$279',
    '$299',
    '$399',
    '$475',
    '$475,',
    '$599',
    '$599,',
    '$1,199',
    '$1,499',
  ]),
};

/**
 * Forbidden patterns that indicate legal/factual violations
 */
export const FORBIDDEN = {
  /**
   * Kiki's pronouns have never been published, so no gendered pronoun may
   * appear in copy.
   *
   * `they`/`them`/`their` are NOT in this list. They are singular-neutral and
   * are used throughout the site for inanimate subjects — devices, treatments,
   * clinical-grade systems, "these are not consumer devices... they are
   * clinical-grade systems". Banning them flagged every one of those as a
   * violation of a rule that was only ever about Kiki, and it did so while
   * passing the actual violations below: `melasma.astro` said "makes her the
   * safest choice" and "means she knows how to pace treatments".
   */
  pronouns: /\b(she|her|hers|he|him|his|ze|zir)\b/i,
  ratings: {
    schema: /aggregateRating/i,
    values: /ratingValue|reviewCount/i,
    stars: /[★☆]/u,
    /**
     * Rating text, as a reader would see it.
     *
     * Tested against the page TEXT, not the raw HTML. The previous check ran
     * against `html`, where a Tailwind class such as `aspect-[4/5]` matched
     * the `4/5` branch and failed every page that used that utility — none
     * of which displayed a rating.
     */
    text: /\b\d(?:\.\d)?\s*(?:out of 5|\/\s*5|stars?)\b/i,
  },
  openingHours: {
    schema: /openingHours/i,
    schedule: /\b(mon|tue|wed|thu|fri|sat|sun)(day)?\b\s*[-–:]\s*\d/i,
  },
  /**
   * The closed Del Mar studio.
   *
   * The intent, documented in `src/data/areas.ts`: the words "studio",
   * "location", "located" or "visit us" must not appear within 40 characters
   * of "Del Mar", in either direction. Del Mar is a legitimate AREA SERVED —
   * clients travel from there — so the name itself is fine, and it appears in
   * the `areaServed` schema on every page.
   *
   * The previous pattern was `/\bDel\s+Mar\b.*\b(location|studio|address|suite)\b/i`,
   * where `.*` matches across newlines. On a minified page that meant the
   * first "Del Mar" in the JSON-LD could pair with a "location" hundreds of
   * characters later, in unrelated copy. Every page carrying Del Mar in
   * `areaServed` failed for that reason, which masked the pages that really
   * did have a problem.
   */
  closedLocation:
    /\bDel\s+Mar\b.{0,40}\b(studio|location|located|address|suite|visit us)\b|\b(studio|location|located|address|suite|visit us)\b.{0,40}\bDel\s+Mar\b/i,
  instantBooking: {
    now: /book\s+(now|instantly)/i,
    instant: /instant\s+(booking|confirmation)/i,
  },
};

/**
 * Prices, matched the way a reader sees them.
 *
 * `\$\d[\d,]*` swallowed a trailing comma, so the list
 * "Gentle Renewal $199, Advanced Peel $299" tokenised as "$199," and failed
 * the verified-price check even though $199 is a verified price. Commas are
 * only part of a number when they are thousands separators — a comma
 * followed by exactly three digits.
 */
export const PRICE_PATTERN = /\$(?:\d{1,3}(?:,\d{3})+|\d+)/g;
