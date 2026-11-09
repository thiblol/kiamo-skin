/**
 * Test Configuration & Shared Utilities
 *
 * Provides test infrastructure for guard tests that validate business rules
 * and legal constraints against the built HTML in dist/.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import {
  studios,
  darkSkinStudios,
  thirdPartyFacts,
  thirdPartyPrices,
  thirdPartyRatings,
  MAX_AGE_DAYS,
} from '../src/data/third-party-facts.ts';

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
      /**
       * The page's own copy, with quoted third-party material removed.
       *
       * A few copy rules — no gendered pronouns, no claim that the studio
       * sits in Del Mar, no display of a rating — are about what the STUDIO
       * tells a reader. They do not describe a review somebody else wrote and
       * the studio merely reproduces.
       *
       * Twenty-six of the forty-one Google reviews on the listing contain a
       * gendered pronoun, nearly all of them referring to Kiki. Copying those
       * reviews verbatim therefore trips the pronoun rule on its face, and
       * the alternative — editing a reviewer's words to remove a pronoun —
       * would misquote them, which is a worse problem than the rule it
       * avoids.
       *
       * So the rules that describe the studio's own claims are checked
       * against `quotedCopy`, which drops any region marked
       * `data-quoted` before the copy is read. The studio's own sentences
       * still have to pass, unchanged, on every page.
       *
       * The marker is a <blockquote> carrying `data-quoted`. Blockquotes do
       * not nest in this site's markup, so the non-greedy match below cannot
       * stop early on an inner tag. The structural rules — no
       * `aggregateRating` in the schema, no `ratingValue` or `reviewCount`
       * anywhere in the HTML, no star glyphs — still run against the raw
       * HTML and are not exempted by this.
       */
      const quotedCopy = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<blockquote[^>]*data-quoted[^>]*>[\s\S]*?<\/blockquote>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ');
      /**
       * The studio's own copy, with quoted material AND third-party facts
       * removed.
       *
       * The comparison pages carry another studio's rating and review count
       * in table cells. Those are facts about somebody else's business, read
       * from their own site and their Google profile, and the studio has no
       * control over them — so the rule that governs how the STUDIO talks
       * about its own rating does not apply to them.
       *
       * The cells are marked with `data-fact-source`, and the third-party
       * guard suite checks those separately and strictly: the figure must
       * match the data file, and it may only be printed inside a marked
       * element that names its source.
       */
      const ownCopy = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<blockquote[^>]*data-quoted[^>]*>[\s\S]*?<\/blockquote>/gi, ' ')
        .replace(/<(td|span)\b[^>]*data-fact-source="[^"]*"[^>]*>[^<]*</gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ');
      pages.push({ route, file: rel, html, text, copy, quotedCopy, ownCopy });
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
   * The one rating the site is allowed to display.
   *
   * site-brief.md §5.2: "only display if a real, earned GBP rating exists.
   * Check the live Google Business Profile before publishing any rating or
   * review count." The GBP carries a 5.0 rating.
   *
   * The review COUNT is deliberately not a constant here. It changes every
   * time a client leaves a review, so it is derived from the same Business
   * Profile pull that produces the review list on /reviews
   * (src/data/review-stats.ts). Nothing in the guard suite hardcodes a
   * number that will go stale — the count is checked against the reviews
   * actually on the page instead.
   *
   * `TrustBadge.astro` renders the rating on the homepage as visible HTML
   * and links out to the GBP, so a reader can verify the figure. No
   * `aggregateRating` node is emitted anywhere — schema-claimed review
   * counts are a separate, still-forbidden thing.
   */
  reviewRating: 5,
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
 * Third-party facts the site is allowed to publish.
 *
 * Re-exported from the site data file so the guard suite and the pages read
 * the same list. The file carries the source URL and the date each figure was
 * read; `MAX_AGE_DAYS` turns that date into a check, so a comparison table
 * cannot keep publishing a price that was true eight months ago.
 */
export { studios, darkSkinStudios, thirdPartyFacts, thirdPartyPrices, thirdPartyRatings, MAX_AGE_DAYS };

/**
 * Prices the site may print for a third party.
 *
 * A competitor price is a fact about somebody else's business, so it cannot
 * come from `VERIFIED.prices` — that set is the studio's own prices, each
 * one checked against the client spec. These come from
 * `src/data/third-party-facts.ts` instead, where each figure has a source
 * URL and a date it was read.
 *
 * Both sets are allowed in a page's text. Which one applies depends on
 * whether the page is about the studio or about the market, which is why the
 * price guard checks the union and the third-party guard checks the
 * third-party subset separately.
 */
export const allPrices = new Set([...VERIFIED.prices, ...thirdPartyPrices]);

/**
 * Ratings and review counts the site may print for a third party.
 *
 * `VERIFIED.reviewRating` is the studio's own rating, which the site may
 * display. A competitor's rating is a third-party fact and lives here.
 */
export const allRatings = new Set([...thirdPartyRatings, String(VERIFIED.reviewRating)]);

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
