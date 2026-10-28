/**
 * Factual Guards Test Suite
 *
 * Validates that only verified business facts appear on the site.
 * Every assertion prevents publishing unverified claims that could
 * create legal liability or customer confusion.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { loadPages, forEachPage, getPage, VERIFIED, FORBIDDEN, PRICE_PATTERN } from './test-utils.js';

describe('Factual Guards', () => {
  before(async () => {
    await loadPages();
  });

  describe('Location & Contact', () => {
    test('the closed Del Mar location appears nowhere', () => {
      // Checked against the page COPY, not the raw HTML: the area schema
      // carries a "Del Mar" Place name next to an "address" key, which is
      // structured data for a service area and not a claim that the studio
      // is there. The rule is about what a reader is told.
      forEachPage(({ copy, file }) => {
        assert.doesNotMatch(
          copy,
          FORBIDDEN.closedLocation,
          `${file}: mentions closed Del Mar location`
        );
      });
    });

    test('no opening hours are published — none were ever verified', () => {
      forEachPage(({ html, file }) => {
        assert.doesNotMatch(html, FORBIDDEN.openingHours.schema, `${file}: has openingHours schema`);
        assert.doesNotMatch(html, FORBIDDEN.openingHours.schedule, `${file}: displays hour schedule`);
      });
    });
  });

  describe('Pricing', () => {
    test('only verified prices appear', () => {
      forEachPage(({ text, file }) => {
        const pricesFound = text.match(PRICE_PATTERN) ?? [];
        for (const price of pricesFound) {
          assert.ok(
            VERIFIED.prices.has(price),
            `${file}: unverified price ${price}`
          );
        }
      });
    });

    test('unpriced services say exactly "Pricing at consultation."', () => {
      const home = getPage('/');
      const dmkPage = getPage('/treatments/dmk-enzyme-therapy');

      assert.ok(
        home.text.includes('Pricing at consultation'),
        'homepage missing consultation pricing language'
      );
      assert.ok(
        dmkPage.text.includes('Pricing at consultation'),
        'DMK page missing consultation pricing language'
      );
    });
  });

  describe('Reviews & Ratings', () => {
    test('no rating, review count or aggregate is displayed or marked up', () => {
      forEachPage(({ html, text, file }) => {
        assert.doesNotMatch(html, FORBIDDEN.ratings.schema, `${file}: has aggregateRating schema`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.values, `${file}: displays rating values`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.stars, `${file}: contains star symbols`);

        // Checked against the visible text, not the raw markup: a Tailwind
        // class like `aspect-[4/5]` matched the old HTML-level pattern and
        // failed pages that display no rating at all.
        //
        // The one rating the site may show is the studio-verified GBP figure
        // — a 5.0 rating and a 40-review count, both carried by
        // TrustBadge.astro on the homepage and both linked to the GBP so a
        // reader can check them. site-brief.md §5.2 permits exactly this and
        // nothing more, so the guard permits that phrasing and blocks
        // everything else.
        const permitted = new RegExp(
          [
            `Rated ${VERIFIED.reviewRating}(?:\\.0)? out of 5 stars?`,
            `${VERIFIED.reviewRating}\\.0`,
            `${VERIFIED.reviewCount} five-star Google reviews`,
          ].join('|'),
          'g'
        );
        const withoutPermitted = text.replace(permitted, ' ');

        assert.doesNotMatch(
          withoutPermitted,
          FORBIDDEN.ratings.text,
          `${file}: displays rating text`
        );
      });
    });
  });

  describe('Booking Language', () => {
    test('booking is described as a request, never as instant', () => {
      forEachPage(({ text, file }) => {
        assert.doesNotMatch(text, FORBIDDEN.instantBooking.now, `${file}: claims instant booking`);
        assert.doesNotMatch(text, FORBIDDEN.instantBooking.instant, `${file}: promises instant confirmation`);
      });
    });
  });

  describe('Privacy & Pronouns', () => {
    test('copy is pronoun-free — Kiki has never published pronouns', () => {
      forEachPage(({ text, file }) => {
        const match = text.match(FORBIDDEN.pronouns);
        assert.ok(
          !match,
          `${file}: pronoun "${match?.[0]}" in copy`
        );
      });
    });
  });

  describe('Domain & URLs', () => {
    test('no page still points at the old demo host', () => {
      forEachPage(({ html, file }) => {
        assert.doesNotMatch(
          html,
          /kiamoskin\.pages\.dev/i,
          `${file}: references old demo domain`
        );
      });
    });

    test('canonical, OG and schema URLs all use the live domain', () => {
      forEachPage(({ html, file }) => {
        const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
        const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]+)"/);

        if (canonicalMatch) {
          assert.ok(
            canonicalMatch[1].startsWith('https://kiamoskin.com'),
            `${file}: canonical uses wrong domain`
          );
        }

        if (ogUrlMatch) {
          assert.ok(
            ogUrlMatch[1].startsWith('https://kiamoskin.com'),
            `${file}: og:url uses wrong domain`
          );
        }
      });
    });
  });
});
