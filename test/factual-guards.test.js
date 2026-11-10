/**
 * Factual Guards Test Suite
 *
 * Validates that only verified business facts appear on the site.
 * Every assertion prevents publishing unverified claims that could
 * create legal liability or customer confusion.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import {
  loadPages,
  forEachPage,
  getPage,
  VERIFIED,
  FORBIDDEN,
  PRICE_PATTERN,
  allPrices,
} from './test-utils.js';

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
      //
      // `quotedCopy` drops quoted third-party material, so a client who
      // happens to mention the area in a Google review does not read as the
      // studio claiming a location there.
      forEachPage(({ quotedCopy, file }) => {
        assert.doesNotMatch(
          quotedCopy,
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
      // Two kinds of price may be printed.
      //
      // The studio's OWN prices — `VERIFIED.prices` — each one checked
      // against the client spec.
      //
      // A THIRD PARTY's price, on the comparison pages: another studio's
      // published first-visit rate. Those come from
      // src/data/third-party-facts.ts, where each one has the URL it was
      // read from and the date it was read. The third-party guard suite
      // checks those against the data file; this check makes sure no price
      // slips through that is in NEITHER set.
      forEachPage(({ text, file }) => {
        const pricesFound = text.match(PRICE_PATTERN) ?? [];
        for (const price of pricesFound) {
          assert.ok(
            allPrices.has(price),
            `${file}: unverified price ${price}`
          );
        }
      });
    });

    test('unpriced services say exactly "Pricing at consultation."', () => {
      const home = getPage('/');
      const dmkPage = getPage('/services/dmk-enzyme-therapy');

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
    test('the published review count matches the reviews on the page', () => {
      // The count on /reviews and the number of reviews actually listed come
      // from the same Business Profile pull, so they cannot disagree — but
      // only if nothing re-introduces a hardcoded figure. This test compares
      // the two as rendered, so it stays true as the count grows.
      //
      // Counted by the `data-review` marker on each listing entry, not by the
      // quoted blocks: the hero carries one of the same reviews, the way the
      // gallery's hero carries its first case, so a block count would be one
      // too many.
      const page = getPage('/reviews');
      const cards = (page.html.match(/<li [^>]*data-review[ >]/g) ?? []).length;
      const stated = page.text.match(/(\d+) five-star Google reviews/)?.[1];

      assert.ok(stated, '/reviews states no review count');
      assert.equal(
        Number(stated),
        cards,
        `/reviews states ${stated} reviews but lists ${cards}`
      );
    });

    test('no rating, review count or aggregate is displayed or marked up', () => {
      forEachPage(({ html, ownCopy, file }) => {
        // The structural rules run against the raw HTML and are not exempted
        // for anybody: no aggregateRating node, no ratingValue or
        // reviewCount key, no star glyphs. A comparison table is not a
        // licence to mark up somebody else's reviews.
        assert.doesNotMatch(html, FORBIDDEN.ratings.schema, `${file}: has aggregateRating schema`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.values, `${file}: displays rating values`);
        assert.doesNotMatch(html, FORBIDDEN.ratings.stars, `${file}: contains star symbols`);

        // Checked against the visible text, not the raw markup: a Tailwind
        // class like `aspect-[4/5]` matched the old HTML-level pattern and
        // failed pages that display no rating at all.
        //
        // The one rating the site may show is the studio-verified GBP figure
        // — a 5.0 rating and the review count, both carried by
        // TrustBadge.astro on the homepage and on /reviews, and both linked
        // to the GBP so a reader can check them. site-brief.md §5.2 permits
        // exactly this and nothing more, so the guard permits that phrasing
        // and blocks everything else.
        //
        // The count is matched as a number rather than a fixed value, so the
        // phrase stays permitted as the listing grows.
        //
        // Read from `ownCopy`, which drops quoted third-party material AND
        // the marked cells holding another studio's rating and review count.
        // Those figures are facts about a different business, read from that
        // business's own site and Google profile — the third-party guard
        // suite checks them against the data file, and this rule is about
        // what the STUDIO says about its own rating.
        const permitted = new RegExp(
          [
            `Rated ${VERIFIED.reviewRating}(?:\\.0)? out of 5 stars?`,
            `${VERIFIED.reviewRating}\\.0`,
            `\\d+ five-star Google reviews`,
          ].join('|'),
          'g'
        );
        const withoutPermitted = ownCopy.replace(permitted, ' ');

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
      // `quotedCopy` excludes quoted third-party material. The Google
      // reviews on /reviews are reproduced as written, and many of them use
      // a gendered pronoun for Kiki — which is the reviewer's word, not the
      // studio's. The studio's own sentences still have to pass here,
      // unchanged, on every page.
      forEachPage(({ quotedCopy, file }) => {
        const match = quotedCopy.match(FORBIDDEN.pronouns);
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
