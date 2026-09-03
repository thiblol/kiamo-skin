/**
 * SEO Guards Test Suite
 *
 * Validates SEO requirements: title/description length, h1 structure,
 * canonical URLs, and essential meta tags.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { loadPages, forEachPage } from './test-utils.js';

describe('SEO Guards', () => {
  before(async () => {
    await loadPages();
  });

  describe('Meta Tags', () => {
    test('every page has one title of 60 characters or fewer', () => {
      forEachPage(({ html, file }) => {
        const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)];
        assert.equal(titles.length, 1, `${file}: found ${titles.length} <title> tags, expected 1`);

        const text = titles[0][1];
        assert.ok(
          text.length <= 60,
          `${file}: title is ${text.length} chars — "${text}"`
        );
      });
    });

    test('every meta description is 155 characters or fewer', () => {
      forEachPage(({ html, file }) => {
        const match = html.match(/<meta name="description" content="([^"]+)"/);
        assert.ok(match, `${file}: no meta description found`);

        const content = match[1];
        assert.ok(
          content.length <= 155,
          `${file}: description is ${content.length} chars`
        );
      });
    });

    test('every page has a canonical and an OG image', () => {
      forEachPage(({ html, file }) => {
        assert.match(
          html,
          /<link rel="canonical" href="https:\/\//,
          `${file}: missing canonical link`
        );
        assert.match(
          html,
          /<meta property="og:image" content="https:\/\//,
          `${file}: missing og:image`
        );
      });
    });
  });

  describe('Heading Structure', () => {
    test('every page has one h1', () => {
      forEachPage(({ html, file }) => {
        const h1s = [...html.matchAll(/<h1\b[^>]*>/g)];
        assert.equal(
          h1s.length,
          1,
          `${file}: found ${h1s.length} <h1> tags, expected exactly 1`
        );
      });
    });
  });

  describe('Schema Validation', () => {
    test('LocalBusiness schema is valid JSON and carries the verified NAP', () => {
      const { getPage, getJsonLdBlocks, VERIFIED } = await import('./test-utils.js');
      const home = getPage('/');
      const blocks = getJsonLdBlocks(home.html);

      assert.ok(blocks.length >= 2, 'expected LocalBusiness and WebSite schema on homepage');

      const local = blocks.find((p) => String(p['@type']).includes('LocalBusiness'));
      assert.ok(local, 'no LocalBusiness schema found');

      // Verify NAP (Name, Address, Phone)
      assert.equal(local.name, VERIFIED.name, 'business name mismatch');
      assert.equal(local.address.streetAddress, VERIFIED.address.street, 'street address mismatch');
      assert.equal(local.address.postalCode, VERIFIED.address.postalCode, 'postal code mismatch');
      assert.equal(local.telephone, VERIFIED.phone, 'phone number mismatch');

      // Ensure no rating aggregate
      assert.equal(local.aggregateRating, undefined, 'schema contains unverified aggregateRating');
    });

    test('homepage has FAQ schema with at least 4 questions', () => {
      const { getPage, getJsonLdBlocks } = await import('./test-utils.js');
      const home = getPage('/');
      const blocks = getJsonLdBlocks(home.html);

      const faq = blocks.find((p) => p['@type'] === 'FAQPage');
      assert.ok(faq, 'no FAQPage schema found on homepage');
      assert.ok(
        faq.mainEntity?.length >= 4,
        `FAQPage has ${faq.mainEntity?.length ?? 0} questions, expected at least 4`
      );
    });
  });
});
