/**
 * Factual Guards Test Suite
 *
 * Validates that only verified business facts appear on the site.
 * Every assertion prevents publishing unverified claims that could
 * create legal liability or customer confusion.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { loadPages, forEachPage, getPage, VERIFIED, FORBIDDEN } from './test-utils.js';

describe('Factual Guards', () => {
  before(async () => {
    await loadPages();
  });

  describe('Location & Contact', () => {
    test('the closed Del Mar location appears nowhere', () => {
      forEachPage(({ text, file }) => {
        assert.doesNotMatch(
          text,
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
        const pricesFound = text.match(/\$\d[\d,]*/g) ?? [];
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
      forEachPage(({ html, file }) => {
        assert.doesNotMatch(html, FORBIDDEN.ratings.schema, `${file}: has aggregateRating schema`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.values, `${file}: displays rating values`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.stars, `${file}: contains star symbols`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.text, `${file}: displays rating text`);
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
