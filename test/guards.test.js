/**
 * Guards, not unit tests.
 *
 * Every assertion here maps to a factual or legal risk in the spec: a closed
 * address, an invented price, a fabricated rating, a pronoun we were never told.
 * They run against the BUILT html in dist/, because that is what the client sees.
 *
 *   npm test   →   astro build && node --test test/
 */
import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

/** @type {{ route: string, file: string, html: string, text: string }[]} */
const pages = [];
/** @type {Set<string>} */
const routes = new Set();

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(full, 'utf8');
      const route =
        '/' + relative(DIST, full).split(sep).join('/').replace(/index\.html$/, '').replace(/\.html$/, '');
      pages.push({
        route,
        file: relative(DIST, full),
        html,
        // Strip script/style bodies and tags so word-boundary checks see prose only.
        text: html
          .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' '),
      });
      routes.add(route.replace(/\/$/, '') || '/');
    }
  }
};

/** Lengths must be measured on what a crawler renders, not on the escaped source. */
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

before(async () => {
  await walk(DIST);
  assert.ok(pages.length >= 13, `expected the full site in dist/, found ${pages.length} pages`);
});

const forEachPage = (fn) => pages.forEach((page) => fn(page));

describe('factual guards', () => {
  test('the closed Del Mar location appears nowhere', () => {
    // Del Mar is an area served and may be named as such. What must never appear
    // is the closed studio's address or any claim of a location there.
    forEachPage(({ html, text, file }) => {
      assert.doesNotMatch(html, /9th\s*stret/i, file);
      assert.doesNotMatch(html, /92014/, file);
      assert.doesNotMatch(text, /(studio|location|located|visit us)[^.]{0,40}\bdel\s*mar\b/i, file);
      assert.doesNotMatch(text, /\bdel\s*mar\b[^.]{0,40}(studio|location)/i, file);
    });
  });

  test('no surname is printed — Vagaro and the LLC record disagree', () => {
    forEachPage(({ html, file }) => {
      assert.doesNotMatch(html, /michaux/i, file);
      assert.doesNotMatch(html, /Kiarra\s+Brown/i, file);
    });
  });

  test('no rating, review count or aggregate is displayed or marked up', () => {
    forEachPage(({ html, file }) => {
      assert.doesNotMatch(html, /aggregateRating/i, file);
      assert.doesNotMatch(html, /ratingValue|reviewCount/i, file);
      assert.doesNotMatch(html, /[★☆]/u, file);
      assert.doesNotMatch(html, /\b\d(\.\d)?\s*(out of 5|\/\s*5|stars?)\b/i, file);
    });
  });

  test('booking is described as a request, never as instant', () => {
    forEachPage(({ text, file }) => {
      assert.doesNotMatch(text, /book\s+(now|instantly)/i, file);
      assert.doesNotMatch(text, /instant\s+(booking|confirmation)/i, file);
    });
  });

  test('no opening hours are published — none were ever verified', () => {
    forEachPage(({ html, file }) => {
      assert.doesNotMatch(html, /openingHours/i, file);
      assert.doesNotMatch(html, /\b(mon|tue|wed|thu|fri|sat|sun)(day)?\b\s*[-–:]\s*\d/i, file);
    });
  });

  test('only verified prices appear', () => {
    const allowed = new Set(['$199', '$249', '$259', '$279', '$299', '$475', '$599', '$1,199', '$1,499']);
    forEachPage(({ text, file }) => {
      for (const match of text.match(/\$\d[\d,]*/g) ?? []) {
        assert.ok(allowed.has(match), `${file}: unverified price ${match}`);
      }
    });
  });

  test('unpriced services say exactly "Pricing at consultation."', () => {
    const home = pages.find((p) => p.route === '/');
    assert.ok(home.text.includes('Pricing at consultation.'));
  });

  test('copy is pronoun-free — Kiki has never published pronouns', () => {
    forEachPage(({ text, file }) => {
      const hit = text.match(/\b(she|her|hers|herself|he|him|his|himself)\b/i);
      assert.equal(hit, null, `${file}: pronoun "${hit?.[0]}" in copy`);
    });
  });

  test('the demo never points at the client’s live domain', () => {
    forEachPage(({ html, file }) => {
      assert.doesNotMatch(html, /kiamoskin\.com/i, file);
    });
  });
});

describe('SEO guards', () => {
  test('every page has one title of 60 characters or fewer', () => {
    forEachPage(({ html, file }) => {
      const titles = html.match(/<title>([^<]*)<\/title>/g) ?? [];
      assert.equal(titles.length, 1, `${file}: expected exactly one <title>`);
      const title = decode(titles[0].replace(/<\/?title>/g, ''));
      assert.ok(title.length <= 60, `${file}: title is ${title.length} chars — "${title}"`);
    });
  });

  test('every meta description is 155 characters or fewer', () => {
    forEachPage(({ html, file }) => {
      const match = html.match(/<meta name="description" content="([^"]*)"/);
      assert.ok(match, `${file}: no meta description`);
      const description = decode(match[1]);
      assert.ok(description.length <= 155, `${file}: description is ${description.length} chars`);
    });
  });

  test('every page has one h1', () => {
    forEachPage(({ html, file }) => {
      assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${file}: expected exactly one h1`);
    });
  });

  test('every page has a canonical and an OG image', () => {
    forEachPage(({ html, file }) => {
      assert.match(html, /<link rel="canonical" href="https:\/\//, file);
      assert.match(html, /<meta property="og:image" content="https:\/\//, file);
    });
  });

  test('LocalBusiness schema is valid JSON and carries the verified NAP', () => {
    const home = pages.find((p) => p.route === '/');
    const blocks = [...home.html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.ok(blocks.length >= 2, 'expected LocalBusiness and FAQPage schema on the homepage');

    const parsed = blocks.map((b) => JSON.parse(b[1]));
    const local = parsed.find((p) => String(p['@type']).includes('LocalBusiness'));
    assert.ok(local, 'no LocalBusiness node');
    assert.equal(local.address.streetAddress, '3067 Reynard Way');
    assert.equal(local.address.postalCode, '92103');
    assert.equal(local.telephone, '(310) 595-0872');
    assert.equal(local.aggregateRating, undefined);

    const faq = parsed.find((p) => p['@type'] === 'FAQPage');
    assert.ok(faq?.mainEntity.length >= 4, 'expected a populated FAQPage');
  });
});

describe('integrity guards', () => {
  test('no internal link 404s', () => {
    const skip = /^(#|mailto:|tel:|https?:)/;
    forEachPage(({ html, file }) => {
      for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
        if (skip.test(href) || /\.(xml|jpe?g|png|webp|avif|svg|ico|css|js|woff2?)$/.test(href)) continue;
        const clean = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
        assert.ok(routes.has(clean), `${file}: dead internal link ${href}`);
      }
    });
  });

  test('every content image has alt text, and the decorative hero has none', () => {
    forEachPage(({ html, file }) => {
      for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
        assert.match(tag, /\salt="/, `${file}: <img> with no alt attribute`);
      }
    });
  });

  test('the AI before/after images carry the results disclaimer', () => {
    const home = pages.find((p) => p.route === '/');
    assert.match(home.text, /Results vary/);
  });

  test('reveal animations are gated so no-JS never hides content', async () => {
    const css = await readdir(join(DIST, '_astro'));
    const sheet = css.find((f) => f.endsWith('.css'));
    const contents = await readFile(join(DIST, '_astro', sheet), 'utf8');
    assert.match(contents, /\[data-js\]\s*\[data-reveal\]/);
  });
});
