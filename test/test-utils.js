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
      pages.push({ route, file: rel, html, text });
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
 * Execute callback for each page with better error context
 */
export function forEachPage(callback) {
  for (const page of pages) {
    try {
      callback(page);
    } catch (error) {
      // Enhance error message with page context
      if (error.message && !error.message.includes(page.file)) {
        error.message = `${page.file}: ${error.message}`;
      }
      throw error;
    }
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
  name: 'KIAMO SKIN',
  address: {
    street: '3067 Reynard Way',
    city: 'San Diego',
    region: 'CA',
    postalCode: '92103',
  },
  phone: '(310) 595-0872',
  email: 'hello@kiamoskin.com',
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
  pronouns: /\b(she|her|hers|he|him|his|they|them|their|ze|zir)\b/i,
  ratings: {
    schema: /aggregateRating/i,
    values: /ratingValue|reviewCount/i,
    stars: /[★☆]/u,
    text: /\b\d(\.\d)?\s*(out of 5|\/\s*5|stars?)\b/i,
  },
  openingHours: {
    schema: /openingHours/i,
    schedule: /\b(mon|tue|wed|thu|fri|sat|sun)(day)?\b\s*[-–:]\s*\d/i,
  },
  closedLocation: /\bDel\s+Mar\b.*\b(location|studio|address|suite)\b/i,
  instantBooking: {
    now: /book\s+(now|instantly)/i,
    instant: /instant\s+(booking|confirmation)/i,
  },
};
