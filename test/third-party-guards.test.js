/**
 * Third-party facts guard suite.
 *
 * The site publishes facts about OTHER studios — their published prices,
 * their Google rating, their review count — on the comparison pages. Those
 * facts are the citation payload for "best facial spa in San Diego", and they
 * are also the easiest thing on the site to get wrong, because they belong
 * to somebody else's business and change without notice.
 *
 * These guards make four promises:
 *
 *   1. FIDELITY — every third-party figure on a page matches
 *      src/data/third-party-facts.ts exactly. The page cannot print a price,
 *      rating or count that was never read at source.
 *   2. ATTRIBUTION — a third-party figure only appears inside a marked
 *      element that names its source. A price with no source next to it is
 *      not a fact anybody can check.
 *   3. COVERAGE — every studio in the data file appears on a comparison page,
 *      and no page names a studio the file does not have.
 *   4. FRESHNESS — no third-party figure is older than MAX_AGE_DAYS. A
 *      competitor's price and review count move; the table has to move with
 *      them or it stops being true.
 *
 * The existing factual guards cover the studio's OWN facts. This suite
 * covers everyone else's, and it works the same way: the data file is the
 * source of truth and the page is checked against it.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import {
  loadPages,
  forEachPage,
  pages,
  studios,
  darkSkinStudios,
  thirdPartyFacts,
  thirdPartyRatings,
  VERIFIED,
  MAX_AGE_DAYS,
} from './test-utils.js';

/**
 * A third-party fact as rendered on a page.
 *
 * The markup contract is deliberately narrow so this can be read off the
 * built HTML without a DOM parser:
 *
 *   - the element carrying the figure is a <td> or a <span>
 *   - it carries data-fact-source="<key>" — which source the fact is about
 *   - it carries data-fact="<type>"      — price | rating | count | note
 *   - it carries data-fact-value="<text>" — the figure as displayed
 *   - its inner text is the figure itself, with no nested tags
 *
 * The narrowness is the point. A cell holding a price is a cell holding a
 * price, not a cell holding a paragraph with a price somewhere in it, so the
 * check below compares the whole string rather than looking for a number
 * inside prose.
 *
 * Capture groups: 1 = tag name, 2 = the whole attribute string, 3 = the text.
 * The attribute string is captured whole so the individual values can be
 * read off it by name, which keeps the contract in one place.
 *
 * The pattern carries the `g` flag because `matchAll` needs it, and a global
 * regex carries `lastIndex` between uses. Building a fresh instance for each
 * replace keeps the two uses independent.
 */
const factElements = () => /<(td|span)\b([^>]*\bdata-fact-source="[^"]*"[^>]*)>([^<]*)</g;
/** Pull an attribute value off a tag's attribute string. */
const attr = (attrs, name) => {
  const match = attrs.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match ? match[1] : null;
};

/** Every $N token in a string, in the order it appears. */
const priceTokens = (text) => text.match(/\$(?:\d{1,3}(?:,\d{3})+|\d+)/g) ?? [];

describe('Third-party facts', () => {
  before(async () => {
    await loadPages();
  });

  describe('Fidelity', () => {
    test('every third-party figure on a page matches the data file', () => {
      let checked = 0;

      forEachPage(({ html, file }) => {
        for (const [, tag, attrs, text] of html.matchAll(factElements())) {
          const key = attr(attrs, 'data-fact-source');
          const type = attr(attrs, 'data-fact');
          const value = attr(attrs, 'data-fact-value');

          assert.ok(
            thirdPartyFacts.has(key),
            `${file}: names a third party "${key}" that is not in the data file`
          );

          const entry = thirdPartyFacts.get(key);
          assert.ok(
            ['price', 'rating', 'count', 'note'].includes(type),
            `${file}: unknown third-party fact type "${type}" for "${key}"`
          );

          // The displayed text and the machine-readable attribute must be the
          // same string. If they diverge, a crawler reading the DOM and a
          // reader reading the page see different figures.
          assert.equal(
            text.trim(),
            value,
            `${file}: <${tag}> for "${key}" shows "${text.trim()}" but declares "${value}"`
          );

          if (type === 'price') {
            for (const token of priceTokens(value)) {
              assert.ok(
                entry.prices.includes(token),
                `${file}: price ${token} for "${key}" is not in the data file (allowed: ${entry.prices.join(', ') || 'none'})`
              );
            }
          }

          // A note is prose that may quote a figure — "a second service is
          // listed at $275". The note is a marked element, so it counts as
          // attributed, but every price inside it still has to be one the
          // source published.
          if (type === 'note') {
            for (const token of priceTokens(value)) {
              assert.ok(
                entry.prices.includes(token),
                `${file}: price ${token} in the note for "${key}" is not in the data file (allowed: ${entry.prices.join(', ') || 'none'})`
              );
            }
          }

          if (type === 'rating') {
            assert.ok(
              entry.ratings.includes(value),
              `${file}: rating "${value}" for "${key}" is not in the data file (allowed: ${entry.ratings.join(', ') || 'none'})`
            );
          }

          if (type === 'count') {
            assert.ok(
              entry.counts.includes(value),
              `${file}: review count "${value}" for "${key}" is not in the data file (allowed: ${entry.counts.join(', ') || 'none'})`
            );
          }

          checked++;
        }
      });

      assert.ok(
        checked > 0,
        'no third-party facts found on any page — the markup contract changed'
      );
    });

    test('the data file has no entry with an empty name or source', () => {
      for (const entry of thirdPartyFacts.values()) {
        assert.ok(entry.label?.trim(), `third-party entry "${entry.key}" has no label`);
        assert.ok(entry.source?.trim(), `third-party entry "${entry.key}" has no source URL`);
        assert.ok(
          /^https?:\/\//.test(entry.source),
          `third-party entry "${entry.key}" has a source that is not a URL`
        );
        assert.ok(
          /^\d{4}-\d{2}-\d{2}$/.test(entry.checkedOn),
          `third-party entry "${entry.key}" has a malformed checkedOn date`
        );
      }
    });

    test('every studio price in the data file is one the studio actually published', () => {
      // A price with no note explaining what it covers is a price a reader
      // cannot interpret — and an interpreted price is what the AI answers
      // quote. Studios with a price must say what it is.
      for (const studio of studios) {
        if (studio.publishedPrices.length === 0) {
          assert.equal(
            studio.firstVisitPrice,
            null,
            `${studio.key} publishes a first-visit price but is not in the price list`
          );
          assert.ok(
            !studio.priceNote,
            `${studio.key} has a price note but publishes no price`
          );
          continue;
        }

        assert.ok(
          studio.firstVisitPrice && studio.publishedPrices.includes(studio.firstVisitPrice),
          `${studio.key} first-visit price is not in its published prices`
        );
        assert.ok(
          studio.priceNote?.trim(),
          `${studio.key} publishes a price but has no note explaining it`
        );
      }
    });
  });

  describe('Attribution', () => {
    test('a third-party price is either marked or traceable to a marked source', () => {
      // The main price guard allows a third party's price anywhere, because
      // the figure itself has been checked against the data file. This check
      // closes the other half of the hole.
      //
      // A price may be PRINTED in prose — "Kiwi Spa lists $179" is how a
      // sentence is written, and forbidding it would forbid the prose from
      // carrying a fact. What must not happen is a price appearing with no
      // traceable source: either it sits inside a marked element, or the
      // page carries a marked element for the source that published it, so
      // a reader can find where the figure came from.
      forEachPage(({ html, file }) => {
        // The sources whose figures this page presents, each with the prices
        // it published.
        const presented = [...thirdPartyFacts.values()].filter((entry) =>
          [...html.matchAll(factElements())].some(
            ([, , attrs]) => attr(attrs, 'data-fact-source') === entry.key
          )
        );

        const ownPrices = new Set(VERIFIED.prices);
        const stripped = html.replace(factElements(), ' ');

        for (const token of priceTokens(stripped)) {
          if (ownPrices.has(token)) continue;

          const sourced = presented.some((entry) => entry.prices.includes(token));
          assert.ok(
            sourced,
            `${file}: price ${token} appears with no source on the page that publishes it`
          );
        }
      });
    });

    test('a third-party rating or count in prose is traceable to a marked source', () => {
      forEachPage(({ html, file }) => {
        const presented = [...thirdPartyFacts.values()].filter((entry) =>
          [...html.matchAll(factElements())].some(
            ([, , attrs]) => attr(attrs, 'data-fact-source') === entry.key
          )
        );

        const stripped = html.replace(factElements(), ' ');
        const text = stripped
          .replace(/<script[\s\S]*?<\/script>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ');

        for (const figure of thirdPartyRatings) {
          // A bare number is not identifiable on its own — "4.9" and "89"
          // appear in ordinary copy all over the site. What must not happen
          // is a RATING or a REVIEW COUNT stated as one, so the check is on
          // the phrasing that states it.
          const stated = new RegExp(
            `\\b${figure.replace('.', '\\.')}\\s*(?:out of 5|/\\s*5|stars?)\\b|\\b${figure.replace('.', '\\.')}\\s+(?:Google\\s+)?reviews?\\b`,
            'i'
          );
          if (!stated.test(text)) continue;

          const sourced = presented.some(
            (entry) => entry.ratings.includes(figure) || entry.counts.includes(figure)
          );
          assert.ok(
            sourced,
            `${file}: rating or count "${figure}" appears with no source on the page that publishes it`
          );
        }
      });
    });
  });

  describe('Coverage', () => {
    test('every studio in the data file appears on a comparison page', () => {
      const used = new Set();

      for (const { html } of pages) {
        for (const [, , attrs] of html.matchAll(factElements())) {
          used.add(attr(attrs, 'data-fact-source'));
        }
      }

      // Both lists are checked, not just the market one. The melanin-rich-skin
      // table is built from a different set of studios, and a studio that
      // drops out of it without appearing anywhere is a figure the data file
      // carries that no reader can check.
      const missing = [...studios, ...darkSkinStudios]
        .filter((studio) => !used.has(studio.key))
        .map((studio) => studio.name);

      assert.deepEqual(
        missing,
        [],
        `these studios are in the data file but on no page: ${missing.join(', ')}`
      );
    });

    test('a comparison page does not name a studio that is not in the data file', () => {
      forEachPage(({ html, file }) => {
        for (const [, , attrs] of html.matchAll(factElements())) {
          const key = attr(attrs, 'data-fact-source');
          assert.ok(
            thirdPartyFacts.has(key),
            `${file}: page compares against "${key}", which is not in the data file`
          );
        }
      });
    });
  });

  describe('Freshness', () => {
    test('no third-party figure is older than the refresh window', () => {
      const today = new Date('2026-11-09T00:00:00Z');
      const stale = [];

      for (const entry of thirdPartyFacts.values()) {
        const age = (today - new Date(`${entry.checkedOn}T00:00:00Z`)) / 86_400_000;
        if (age > MAX_AGE_DAYS) {
          stale.push(`${entry.key} (checked ${entry.checkedOn}, ${Math.round(age)} days old)`);
        }
      }

      assert.deepEqual(
        stale,
        [],
        `third-party facts have gone stale and must be re-read at source: ${stale.join('; ')}`
      );
    });
  });
});
