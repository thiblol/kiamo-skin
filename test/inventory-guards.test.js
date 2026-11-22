/**
 * Site inventory guard suite.
 *
 * The homepage's WebSite schema node carries a `hasPart` array: the map of
 * the site, as a machine-readable list of pages with a URL, a name and a
 * one-line description. It exists so a crawler landing on the homepage does
 * not have to guess which of a hundred pages answers its question.
 *
 * The array is generated, not written by hand — it is built from the same
 * data files that build the pages — so the interesting failure is not that
 * somebody typed a wrong URL. It is that a page was ADDED and the inventory
 * did not follow, or that a description picked up a figure it should not
 * carry. These guards make five promises:
 *
 *   1. THE INVENTORY EXISTS — it is present, it is an array, and it is
 *      large enough to be a map rather than a sample.
 *   2. EVERY ENTRY IS WELL-FORMED — an absolute URL on the live domain, a
 *      name, a description, and no forbidden schema key.
 *   3. EVERY ENTRY POINTS AT A PAGE — the URL resolves to a route that was
 *      actually built. An inventory that names a page that does not exist
 *      is worse than one that is missing the page.
 *   4. NO PAGE IS MISSING — every content route in the build appears in
 *      the inventory. This is the anti-staleness check, and it fires the
 *      moment somebody publishes an article or adds a treatment.
 *   5. NO THIRD-PARTY FIGURE — a description may carry the studio's own
 *      published price and nothing else. The homepage carries no marked
 *      source for a competitor's figure, so one reaching the homepage's
 *      schema would be a fact with nowhere to be checked.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import {
  loadPages,
  getPage,
  getJsonLdBlocks,
  pages,
  routes,
  VERIFIED,
  PRICE_PATTERN,
} from './test-utils.js';

/**
 * The routes that belong in the inventory: the site's editorial spine.
 *
 * The `routes` set holds routes WITHOUT a trailing slash — `/journal/x`,
 * not `/journal/x/` — so the pattern must not ask for one.
 */
const CONTENT_ROUTE = /^\/(services|service-areas|journal|facial)\/[^/]+$/;

/** The homepage is the only page that carries the inventory. */
const HOME = '/';

const inventory = () => {
  const home = getPage(HOME);
  const blocks = getJsonLdBlocks(home.html);
  const website = blocks.find((block) => block['@type'] === 'WebSite');
  assert.ok(website, 'no WebSite node on the homepage');
  return website;
};

/** The route a built URL corresponds to, in the form `routes` holds. */
const routeOf = (url) => {
  const path = url.replace('https://kiamoskin.com', '').replace(/\/$/, '');
  return path === '' ? '/' : path;
};

describe('Site inventory', () => {
  before(async () => {
    await loadPages();
  });

  describe('Presence', () => {
    test('the homepage publishes a site inventory', () => {
      const website = inventory();
      assert.ok(
        Array.isArray(website.hasPart),
        'the WebSite node has no hasPart array — the inventory is missing'
      );
      assert.ok(
        website.hasPart.length >= 30,
        `the inventory holds ${website.hasPart.length} entries, which is too few to be a map`
      );
    });

    test('the inventory is on the homepage only', () => {
      // The gallery page has a `hasPart` of its own — a CreativeWork list of
      // the published cases, which is a different thing with a different
      // shape. So this checks for the site inventory specifically rather
      // than for the key.
      for (const page of pages) {
        if (page.route === HOME) continue;

        const website = getJsonLdBlocks(page.html).find(
          (block) => block['@type'] === 'WebSite'
        );
        assert.ok(
          !Array.isArray(website?.hasPart) || website.hasPart.length < 30,
          `${page.file}: carries the site inventory, which belongs on the homepage`
        );
      }
    });
  });

  describe('Well-formedness', () => {
    test('every entry has an absolute URL, a name and a description', () => {
      for (const entry of inventory().hasPart) {
        assert.ok(
          typeof entry.url === 'string' && entry.url.startsWith('https://kiamoskin.com/'),
          `inventory entry has no absolute URL on the live domain: ${JSON.stringify(entry.url)}`
        );
        assert.ok(entry.name?.trim(), `inventory entry has no name: ${entry.url}`);
        assert.ok(
          entry.description?.trim(),
          `inventory entry has no description: ${entry.url}`
        );
      }
    });

    test('no entry carries a forbidden schema key', () => {
      for (const entry of inventory().hasPart) {
        const serialised = JSON.stringify(entry);
        assert.ok(
          !/aggregateRating|ratingValue|reviewCount/.test(serialised),
          `inventory entry carries a rating key: ${entry.url}`
        );
      }
    });
  });

  describe('Coverage', () => {
    test('every inventory URL resolves to a built route', () => {
      for (const entry of inventory().hasPart) {
        const route = routeOf(entry.url);
        assert.ok(
          routes.has(route),
          `the inventory names a page that was not built: ${route}`
        );
      }
    });

    test('every content route in the build is in the inventory', () => {
      const listed = new Set(inventory().hasPart.map((entry) => routeOf(entry.url)));
      const missing = [...routes]
        .filter((route) => CONTENT_ROUTE.test(route))
        .filter((route) => !listed.has(route));

      assert.deepEqual(
        missing,
        [],
        `these pages were built but are missing from the site inventory: ${missing.join(', ')}`
      );
    });
  });

  describe('Figures', () => {
    test('no description carries a third-party price', () => {
      // The homepage carries no marked source for a competitor's figure, so
      // a competitor's price reaching the homepage's schema would be a fact
      // with nowhere to be checked. The studio's own published prices are
      // fine — they are verified, and the attribution guard skips them.
      for (const entry of inventory().hasPart) {
        for (const price of entry.description.match(PRICE_PATTERN) ?? []) {
          assert.ok(
            VERIFIED.prices.has(price),
            `the inventory description for ${entry.url} carries ${price}, which is not one of the studio's verified prices`
          );
        }
      }
    });
  });
});
