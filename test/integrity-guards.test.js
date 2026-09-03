/**
 * Integrity Guards Test Suite
 *
 * Validates internal link integrity, accessibility requirements,
 * and technical implementation details.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { loadPages, forEachPage, getPage, DIST, routes } from './test-utils.js';

describe('Integrity Guards', () => {
  before(async () => {
    await loadPages();
  });

  describe('Links & Navigation', () => {
    test('no internal link 404s', () => {
      const skip = /^(#|mailto:|tel:|https?:)/;
      const assets = /\.(xml|jpe?g|png|webp|avif|svg|ico|css|js|woff2?)$/;

      forEachPage(({ html, file }) => {
        const hrefs = [...html.matchAll(/href="([^"]+)"/g)];

        for (const [, href] of hrefs) {
          // Skip external links, anchors, and assets
          if (skip.test(href) || assets.test(href)) continue;

          // Clean URL: remove query strings and fragments, normalize trailing slash
          const clean = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';

          assert.ok(
            routes.has(clean),
            `${file}: dead internal link "${href}" (resolves to ${clean})`
          );
        }
      });
    });
  });

  describe('Accessibility', () => {
    test('every content image has alt text', () => {
      forEachPage(({ html, file }) => {
        const images = [...html.matchAll(/<img\b[^>]*>/g)];

        for (const [tag] of images) {
          assert.match(
            tag,
            /\salt="/,
            `${file}: <img> missing alt attribute:\n${tag.slice(0, 100)}...`
          );
        }
      });
    });
  });

  describe('Disclaimers', () => {
    test('the AI before/after images carry the results disclaimer', () => {
      const home = getPage('/');
      assert.match(
        home.text,
        /Results vary/i,
        'homepage missing "Results vary" disclaimer for before/after images'
      );
    });
  });

  describe('Technical Implementation', () => {
    test('reveal animations are gated so no-JS never hides content', async () => {
      const cssFiles = await readdir(join(DIST, '_astro'));
      const stylesheet = cssFiles.find((f) => f.endsWith('.css'));

      assert.ok(stylesheet, 'no CSS file found in _astro/');

      const contents = await readFile(join(DIST, '_astro', stylesheet), 'utf8');

      // Animations should be gated behind [data-js] attribute
      assert.match(
        contents,
        /\[data-js\]\s*\[data-reveal\]/,
        'reveal animations not properly gated - they will hide content when JS is disabled'
      );
    });
  });

  describe('Build Artifacts', () => {
    test('sitemap exists and is valid', async () => {
      const files = await readdir(DIST);
      assert.ok(
        files.includes('sitemap-index.xml'),
        'sitemap-index.xml not found in dist/'
      );
    });

    test('robots.txt exists', async () => {
      const files = await readdir(DIST);
      assert.ok(
        files.includes('robots.txt'),
        'robots.txt not found in dist/'
      );
    });
  });
});
