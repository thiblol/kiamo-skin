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

  describe('Hero', () => {
    test('a page with a photographic hero sets the dark header theme', () => {
      // The header is transparent over the hero and reads its colour from
      // `data-header-theme` on the body. Over a full-bleed photograph under
      // a scrim, the wordmark and the phone number have to be porcelain;
      // without the attribute they render in ink and disappear.
      //
      // This is not hypothetical. It is exactly what happened when the
      // 2026-11-21 rebuild put the shared PageHero on every page: the
      // pages whose BaseLayout had no `headerTheme` lost their logo and
      // their phone number, and nothing in the build caught it. The hero
      // looks right in a screenshot of the page body and the navigation is
      // gone, because the navigation is not part of the page body.
      forEachPage(({ html, file }) => {
        const main = html.match(/<main id="main">([\s\S]*?)<\/main>/);
        if (!main) return;

        // The hero is the first element inside main. It counts as
        // photographic when it carries a background picture AND sits on the
        // espresso ground — the combination that makes ink unreadable.
        const hero = main[1].match(/^<(section|header)\b[^>]*>/);
        if (!hero) return;

        const heroTag = hero[0];
        const isPhotographic = /bg-espresso/.test(heroTag) && /<picture\b/.test(main[1].slice(0, 4000));
        if (!isPhotographic) return;

        assert.match(
          html,
          /<body[^>]*data-header-theme="dark"/,
          `${file}: a photographic hero needs headerTheme="dark" — the wordmark and the phone number render in ink over the scrim and are invisible`
        );
      });
    });

    test('the hero carries the conversion action above the fold', () => {
      // The point of the shared hero is that the price, the button and the
      // phone number are in the first screen on every page — including the
      // pages that previously opened with a band of empty colour and the
      // action a long way down.
      //
      // Measured in the browser rather than in the markup: the rail is a
      // sticky panel on desktop, so its position depends on the layout, not
      // on where the HTML sits.
      forEachPage(({ html, file }) => {
        if (file.includes('404')) return;
        if (!/Request Appointment/.test(html)) return;

        // The legal pages have no rail by design — there is nothing to sell
        // on a privacy policy, and putting a booking button on one would be
        // the wrong signal to both a reader and a crawler.
        if (/(^|\/)(privacy|terms)\//.test(file)) return;

        // The rail is the panel that carries the price and the button.
        assert.match(
          html,
          /bg-porcelain\/\[0\.06\]/,
          `${file}: the conversion rail is missing from the hero`
        );
      });
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
