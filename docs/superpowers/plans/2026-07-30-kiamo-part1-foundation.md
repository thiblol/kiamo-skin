# KIAMO Skin — Part 1: Foundation & Chrome — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the design system, the single source of business facts, the automated honesty guards, the page shell with SEO + schema, and the site chrome (header, footer, sticky book bar, motion primitives) — so that Part 2 can drop homepage sections into a proven frame.

**Architecture:** Static Astro 7 site, already scaffolded at the repo root. All design decisions live as Tailwind v4 `@theme` tokens plus nine semantic type classes in one stylesheet. Every publishable business fact is imported from `src/config/business.ts` and nowhere else, so the address, phone and prices exist in exactly one place. A `node:test` suite runs against the built `dist/` and fails the build if a forbidden fact (the dead Del Mar address, a star rating, a surname, an invented price) ever reaches the HTML.

**Tech Stack:** Astro 7.1.6 · Tailwind CSS 4.3.3 (`@tailwindcss/vite`) · GSAP 3.15.0 + ScrollTrigger · Lenis 1.3.25 · `@astrojs/sitemap` 3.7.3 · Node 24.18 · `node:test`

**Source documents** (read before starting, in this order):
1. `docs/superpowers/specs/2026-07-30-kiamo-skin-website-design.md` — the approved spec
2. `docs/research/build-notes.md` — verified versions, working config, and §6 API verification
3. `docs/research/business-research.md` — which facts are VERIFIED vs UNVERIFIED

---

## Starting state (already done — do not redo)

The scaffold exists and builds clean. Verified on 2026-07-30 in this repo:

- `npm create astro@latest` run, files hoisted to the repo root, `package.json` renamed to `kiamo-skin`.
- Dependencies installed: `astro@7.1.6`, `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3`, `@astrojs/sitemap@3.7.3`, `gsap@3.15.0`, `lenis@1.3.25`; dev: `@astrojs/check@0.9.10`, `typescript@6.0.3`.
- `astro.config.mjs` is complete — site URL, sitemap, Tailwind vite plugin, and both Fontsource fonts.
- `tsconfig.json` extends `astro/tsconfigs/strict`.
- `src/pages/index.astro` is the untouched scaffold placeholder. Task 4 replaces it.
- `npm run build` → clean. `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors / 0 warnings / 0 hints.

**Do not install `sharp`** — it is already a dependency of `astro@7.1.6`.
**Do not upgrade `typescript` past 6.x** — `@astrojs/check@0.9.10` peers on `^5 || ^6` and `typescript@latest` is now 7.0.2, which hard-fails ERESOLVE.

---

## Global Constraints

Every task's requirements implicitly include this section. Values are copied verbatim from spec §2 and §4 and must not be paraphrased.

**Publishable facts — these exact strings:**

- Brand: `KIAMO Skin & Scalp Health`
- Owner, public-facing: `Kiki` — **never print a surname.** ("Michaux" per Vagaro conflicts with "Brown" per an unverified LLC record.)
- Credential: `Licensed Esthetician, California Board of Barbering & Cosmetology`
- Experience: `5+ years` (or "over five years")
- Address: `3067 Reynard Way, San Diego, CA 92103` · Neighborhood: `Mission Hills`
- Geo: `32.73740, -117.16960`
- Phone: `(310) 595-0872` · tel href `+13105950872`
- Email: `kiamoskin@gmail.com`
- Booking URL: `https://www.vagaro.com/us02/kiamoskin`
- Instagram: `@kiamoskin` → `https://www.instagram.com/kiamoskin/`
- Parking: `Free parking` · `By appointment only`
- Cancellation: 48hr notice; under 24hr = 50% of service; no-show = 100%

**Only three prices exist. Everything else renders exactly `Pricing at consultation.`**

| Service | Duration | Price |
|---|---|---|
| Express HydraFacial | 60 min | $259 |
| Deluxe HydraFacial | 90 min | $349 |
| HydraFacial Keravive | 60 min | $699 |

**Hard prohibitions — the guard suite in Task 3 enforces all of these:**

- The Del Mar address (`318 9th stret, unit A, Del Mar, CA 92014`) must appear **nowhere**. The branch is closed.
- **No star rating, no aggregate, no `AggregateRating` in schema.** Testimonials are attributed plainly: `— Katarina L., Yelp`.
- **All copy is pronoun-free.** Kiki has never published pronouns. Write "Kiki brings five years…", never "she"/"they".
- CTAs read **`Request Appointment`** — never "Book Instantly", never "Book Now". Vagaro is request-based (`BookText: "Request"`).
- No invented price, duration, membership tier, or hour beyond the table above.

**Design tokens — exact hex:**

```
--ink #2B2B29 · --ink-soft #6B655C · --porcelain #FDFBF7 · --blush #FBEDEF
--ivory #F3EDE4 · --rose #A33B52 · --rose-deep #7C2A3C · --espresso #221F1D · --line #E3DACE
```

- **Terracotta `#C98B6E` and sage `#9CA98C` are photographic colors only** — they appear inside images, never as UI.
- **Rose budget: under 5% of any viewport** — prices, CTA pill, link hover, active tab underline. Nowhere else.
- **Image overlay opacity is always 0.** Photography is never darkened.
- Breakpoints: `640 / 840 / 1200` → `sm: 40rem`, `md: 52.5rem`, `lg: 75rem`. Tailwind defaults are cleared.
- Section padding `112px` mobile → `176px` desktop. Content max-width `1240px`. Prose `62ch`. Gutters `20px` → `40px`.
- Focus ring: `2px --rose`, `3px` offset. **Never removed.**

**Platform notes:**

- `site` in `astro.config.mjs` is `https://kiamo-demo.pages.dev`. **This is deliberately not `kiamoskin.com`** — that is the client's existing live site. Canonical URLs, sitemap and OG tags all derive from this one line; swap it when a real domain is chosen.
- Tailwind v4 emits **range syntax** — `@media (width>=52.5rem)`, not `min-width`. Any assertion against built CSS must match `width>=`.
- `import { z } from 'astro/zod'` — **not** from `astro:content`, which is deprecated in Astro 7 and warns `ts(6385)`.
- `astro check` OOMs at the default heap. Always run it as `NODE_OPTIONS=--max-old-space-size=4096 npx astro check`.

---

## File Structure

Files created in Part 1. Each has one responsibility; files that change together live together.

| Path | Responsibility |
|---|---|
| `src/styles/global.css` | Tailwind import, `@theme` tokens, base element styles, nine semantic type classes, layout helpers |
| `src/config/business.ts` | **The only place** publishable business facts exist. Typed, frozen. |
| `src/config/nav.ts` | Nav link structure, shared by header overlay and footer |
| `test/guards.test.js` | `node:test` suite asserting the Global Constraints against built `dist/` HTML |
| `src/components/Head.astro` | `<head>` contents — title, description, canonical, OG, Twitter, fonts |
| `src/components/schema/LocalBusinessSchema.astro` | `LocalBusiness` + `MedicalBusiness` JSON-LD. No `AggregateRating`. |
| `src/layouts/BaseLayout.astro` | Page shell — skip link, landmarks, header, `<slot />`, footer, sticky bar |
| `src/components/Button.astro` | Primary pill and ghost variants; renders `<a>` or `<button>` |
| `src/components/Header.astro` | 60px sticky bar; transparent over hero → porcelain past 80px |
| `src/components/MenuOverlay.astro` | Full-screen blush overlay, 60ms staggered links, focus trap |
| `src/components/Footer.astro` | Espresso footer — logo, NAP, hours, treatment links, repeat CTA |
| `src/components/NapBlock.astro` | Reusable address/phone/hours block, used by footer and Part 2's §9 |
| `src/components/StickyBookBar.astro` | 56px fixed mobile bar, appears past hero, safe-area inset |
| `src/components/Reveal.astro` | GSAP section fade — `y: 24px → 0`, 600ms |
| `src/components/PanelWipe.astro` | Signature blush panel wipe over images, 900ms `power3.inOut` |
| `src/scripts/lenis-init.ts` | Desktop-only smooth scroll, gated on width + reduced-motion |
| `src/assets/*` | The 17 reviewed images under semantic names (Task 6) |

**Task order and dependencies:**

```
1 tokens ─┬─> 4 shell ──> 7 header ──> 9 sticky bar
2 facts ──┤              8 footer
3 guards ─┘   5 schema
              6 images ──> (Part 2)
                          10 motion
```

Tasks 1–3 have no dependencies and may run in any order. Task 4 needs 1 and 2. Tasks 7–9 need 4. Task 6 is independent and blocks Part 2, not Part 1.

---

## Conventions for every task

- **Verify before claiming done.** Run the stated command and read the output. Never report a pass you did not see.
- Build command: `npm run build`. Typecheck: `NODE_OPTIONS=--max-old-space-size=4096 npx astro check`. Guards: `npm test`.
- Commit at the end of each task with the exact message given.
- **Git identity is not configured on this machine.** Before the first commit, run:
  ```bash
  git config user.email "you@example.com"
  git config user.name "Your Name"
  ```
  Ask the user for the values — do not invent them.

---

## Task 1: Design tokens & the nine type classes

**Files:**
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro` (temporary token-proof page; Task 4 replaces it)

**Step 1: Write the stylesheet**

- [ ] Create `src/styles/global.css`:

```css
@import "tailwindcss";

/* ---------------------------------------------------------------
   Design tokens — spec §4.1, §4.3
   Terracotta #C98B6E and sage #9CA98C are deliberately absent.
   They are photographic colors; giving them a token invites UI use.
   --------------------------------------------------------------- */
@theme {
  --color-ink: #2b2b29;
  --color-ink-soft: #6b655c;
  --color-porcelain: #fdfbf7;
  --color-blush: #fbedef;
  --color-ivory: #f3ede4;
  --color-rose: #a33b52;
  --color-rose-deep: #7c2a3c;
  --color-espresso: #221f1d;
  --color-line: #e3dace;

  /* Clear Tailwind's defaults, then set spec §4.3's 640 / 840 / 1200. */
  --breakpoint-*: initial;
  --breakpoint-sm: 40rem;
  --breakpoint-md: 52.5rem;
  --breakpoint-lg: 75rem;
}

/* Astro's Fonts API already defines --font-display and --font-sans from
   astro.config.mjs. `inline` makes Tailwind emit `font-family: var(--font-display)`
   rather than redefining the variable and shadowing Astro's value. */
@theme inline {
  --font-display: var(--font-display);
  --font-sans: var(--font-sans);
}

@layer base {
  html {
    background-color: var(--color-porcelain);
    color: var(--color-ink);
    font-family: var(--font-sans);
    font-weight: 300;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  /* Spec §4.4: 2px rose, 3px offset. Never removed. */
  :focus-visible {
    outline: 2px solid var(--color-rose);
    outline-offset: 3px;
  }

  ::selection {
    background-color: var(--color-blush);
    color: var(--color-ink);
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
  }
}

/* ---------------------------------------------------------------
   Nine semantic type classes — spec §4.2, values verbatim.
   Components use these instead of re-deriving sizes inline, so the
   scale can only ever change in one place.
   --------------------------------------------------------------- */
@layer components {
  .t-hero {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.5rem, 6.5vw, 4.5rem);
    letter-spacing: -0.01em;
    line-height: 1.08;
  }

  .t-h2 {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    letter-spacing: -0.005em;
    line-height: 1.15;
  }

  .t-h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .t-service {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 1.3125rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .t-body {
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 0.01em;
    line-height: 1.65;
    max-width: 62ch;
  }

  @media (width >= 52.5rem) {
    .t-body {
      font-size: 1.0625rem;
    }
  }

  /* The luxury mechanic, spec §4.2: 11px uppercase at 0.22em does all
     the signalling, so headings can stay light and sentence-case. */
  .t-eyebrow {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 0.6875rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    line-height: 1.2;
  }

  .t-button {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    line-height: 1;
  }

  .t-price {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.9375rem;
    letter-spacing: 0.02em;
  }

  .t-meta {
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }
}

/* ---------------------------------------------------------------
   Layout helpers — spec §4.3
   --------------------------------------------------------------- */
@layer components {
  .wrap {
    width: 100%;
    max-width: 1240px;
    margin-inline: auto;
    padding-inline: 20px;
  }

  @media (width >= 52.5rem) {
    .wrap {
      padding-inline: 40px;
    }
  }

  .section-y {
    padding-block: 112px;
  }

  @media (width >= 52.5rem) {
    .section-y {
      padding-block: 176px;
    }
  }
}

/* Spec §9: reduced motion turns every transform into an instant swap. */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Step 2: Prove the tokens compile into utilities**

Tailwind only emits a utility it finds referenced in source, so verification needs a page that uses them. This file is temporary — Task 4 replaces it with the real shell.

- [ ] Replace `src/pages/index.astro` entirely:

```astro
---
import '../styles/global.css';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Token proof</title>
  </head>
  <body class="bg-porcelain text-ink">
    <main class="wrap section-y">
      <p class="t-eyebrow text-rose">San Diego · Mission Hills</p>
      <h1 class="t-hero font-display">Skin that behaves like itself again.</h1>
      <p class="t-body text-ink-soft">Token proof page.</p>
      <div class="bg-blush md:bg-ivory h-24"></div>
    </main>
  </body>
</html>
```

**Step 3: Verify**

- [ ] `npm run build` → exits 0.
- [ ] Confirm the tokens reached the output. Tailwind lowercases hex and emits **range** media syntax:

```bash
grep -o '\-\-color\-rose:#a33b52' dist/_astro/*.css
grep -o '\.bg-blush{background-color:var(--color-blush)}' dist/_astro/*.css
grep -o '\.font-display{font-family:var(--font-display)}' dist/_astro/*.css
grep -o '@media (width>=52\.5rem)' dist/_astro/*.css
```
  Each must print at least one match. **If a grep returns nothing, use the Grep tool with an escaped pattern before concluding the utility is missing** — bracket and brace escaping in shell greps produced two false negatives during config verification.

- [ ] Confirm the cleared defaults actually cleared — Tailwind's stock `64rem`/`80rem` breakpoints must be gone:
```bash
grep -c '(width>=64rem)' dist/_astro/*.css   # expect 0
```

- [ ] `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors, 0 warnings, 0 hints.

- [ ] Commit: `Add design tokens and semantic type classes`

---

## Task 2: Single-source business facts

Everything publishable lives here and is imported everywhere. The address, phone and the three real prices exist in exactly one place, which is what makes the Task 3 guards enforceable and directly mitigates spec §12's "client sees the wrong address" risk.

**Files:**
- Create: `src/config/business.ts`
- Create: `src/config/nav.ts`

**Step 1: The facts**

- [ ] Create `src/config/business.ts`. Every value is copied from spec §2 — **do not add a field that section does not contain.**

```ts
/**
 * The only place publishable business facts exist.
 *
 * Sourced verbatim from the approved spec §2 "Verified Business Facts".
 * Anything not present here is NOT to be invented — unknown prices render
 * `PRICE_ON_CONSULTATION` and the gap is logged in CLIENT-INPUTS.md.
 *
 * Deliberately absent, and enforced by test/guards.test.js:
 *   - the closed Del Mar address
 *   - any star rating or review aggregate
 *   - a surname (Vagaro says "Michaux", an unverified LLC record says "Brown")
 */

export const PRICE_ON_CONSULTATION = 'Pricing at consultation.';

export const business = {
  name: 'KIAMO Skin & Scalp Health',
  shortName: 'KIAMO Skin',
  /** Public-facing first name only. Never render a surname. */
  ownerName: 'Kiki',
  ownerTitle: 'Licensed Esthetician',
  ownerCredential: 'Licensed Esthetician, California Board of Barbering & Cosmetology',
  experience: '5+ years',

  address: {
    street: '3067 Reynard Way',
    city: 'San Diego',
    region: 'CA',
    postalCode: '92103',
    country: 'US',
    neighborhood: 'Mission Hills',
    /** Single line, for display. */
    full: '3067 Reynard Way, San Diego, CA 92103',
  },

  geo: {
    latitude: 32.7374,
    longitude: -117.1696,
  },

  phone: {
    display: '(310) 595-0872',
    href: 'tel:+13105950872',
  },

  email: 'kiamoskin@gmail.com',

  /** Vagaro is request-based, not instant. CTAs must read "Request Appointment". */
  bookingUrl: 'https://www.vagaro.com/us02/kiamoskin',
  instagram: {
    handle: '@kiamoskin',
    url: 'https://www.instagram.com/kiamoskin/',
  },
  yelpUrl: 'https://www.yelp.com/biz/kiamo-skin-and-scalp-health-san-diego',

  priceRange: '$$$',

  visit: {
    parking: 'Free parking',
    appointmentOnly: 'By appointment only',
  },

  cancellation:
    'Please give 48 hours notice to reschedule. Cancellations inside 24 hours are charged 50% of the service; no-shows are charged in full.',

  /** Spec §8 areaServed. */
  areaServed: [
    'Mission Hills',
    'Hillcrest',
    'Bankers Hill',
    'Little Italy',
    'North Park',
    'Pacific Beach',
    'La Jolla',
  ],
} as const;

/**
 * The ONLY three verified prices. Everything else is PRICE_ON_CONSULTATION.
 * Hours are NOT here: they were never verified. Location copy says
 * "By appointment only" instead, and hours are logged in CLIENT-INPUTS.md.
 */
export const verifiedPrices = {
  'hydrafacial-express': { duration: '60 min', price: '$259' },
  'hydrafacial-deluxe': { duration: '90 min', price: '$349' },
  'keravive-scalp': { duration: '60 min', price: '$699' },
} as const;

export type VerifiedPriceKey = keyof typeof verifiedPrices;
```

**Note on hours:** spec §2 verifies no opening hours, so `openingHoursSpecification` in Task 5's schema is omitted rather than guessed. This is deliberate — flag it in `CLIENT-INPUTS.md` (Part 3). Spec §8 lists the property, but inventing hours would violate §12's first risk, which outranks it.

**Step 2: Navigation**

- [ ] Create `src/config/nav.ts`:

```ts
/** Shared by the header overlay (Task 7) and the footer (Task 8). */
export const treatmentLinks = [
  { label: 'HydraFacial', href: '/treatments/hydrafacial' },
  { label: 'Keravive Scalp Therapy', href: '/treatments/keravive-scalp' },
  { label: 'DMK Enzyme Therapy', href: '/treatments/dmk-enzyme-therapy' },
  { label: 'Procell Microchanneling', href: '/treatments/procell-microchanneling' },
  { label: 'Lira Chemical Peels', href: '/treatments/lira-peels' },
] as const;

export const primaryNav = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book', href: '/book' },
] as const;

/** Spec §2: Vagaro is request-based. This string is asserted by the guards. */
export const CTA_LABEL = 'Request Appointment';
```

**Step 3: Verify**

- [ ] `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors. (These are types-only files; nothing renders yet.)
- [ ] Confirm the forbidden facts are genuinely absent from the config:
```bash
grep -ri 'del mar\|michaux\|brown\|aggregaterating' src/config/ ; echo "exit=$?"
```
  Expect no matches (`exit=1`). A match here means a prohibited fact was introduced.

- [ ] Commit: `Add single-source business config and nav`

---

## Task 3: Honesty guards (write these before any page copy)

This is the TDD spine of the whole build. Spec §12's top risk is "a fabricated fact reaches the client," and the only durable defence is a check that fails the build. Written now, in Part 1, it guards every line of copy that Parts 2 and 3 add later.

The suite asserts against **built HTML in `dist/`**, not source, so it catches a forbidden fact no matter which layer introduced it — config, markdown frontmatter, a component, or a hand-typed string.

**Files:**
- Create: `test/guards.test.js`
- Modify: `package.json` (add the `test` script)

**Step 1: Add the script**

- [ ] In `package.json`, add to `scripts`:

```json
"test": "astro build && node --test test/"
```

Build-then-assert is deliberate: the tests are meaningless against a stale `dist/`.

**Step 2: Write the suite**

- [ ] Create `test/guards.test.js`:

```js
/**
 * Honesty guards — spec §2 "Hard constraints" and §12 "Risks".
 *
 * These assert against BUILT HTML, so a forbidden fact is caught regardless of
 * which layer introduced it. Do NOT weaken a guard to make copy pass: rewrite
 * the copy. That inversion is the entire point of the file.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';

const entries = await readdir(DIST, { recursive: true });
const pages = await Promise.all(
  entries
    .filter((f) => f.endsWith('.html'))
    .map(async (f) => ({ file: f, html: await readFile(join(DIST, f), 'utf8') })),
);

test('the build produced pages to check', () => {
  assert.ok(pages.length > 0, 'no HTML found in dist/ — run the build first');
});

/** Assert no page matches `pattern`. Reports every offending file at once. */
function forbid(pattern, why) {
  const hits = pages.filter((p) => pattern.test(p.html)).map((p) => p.file);
  assert.deepEqual(hits, [], `${why} — found in: ${hits.join(', ')}`);
}

test('the closed Del Mar location appears nowhere', () => {
  forbid(/del\s*mar/i, 'The Del Mar branch is closed (spec §2)');
  forbid(/92014/, 'Del Mar postal code');
  forbid(/9th\s*str?et/i, 'Del Mar street, including the typo on the live site');
});

test('no surname is ever printed', () => {
  // "Michaux" (Vagaro) conflicts with "Brown" (unverified LLC record), so the
  // public-facing name is "Kiki" alone. Bare "brown" is allowed: copy legitimately
  // says "Black and brown skin". Only the name pairing is forbidden.
  forbid(/michaux/i, 'Unverifiable surname');
  forbid(/\b(kiki|kiarra)\s+brown\b/i, 'Unverifiable surname');
});

test('no star rating or review aggregate', () => {
  forbid(/aggregateRating/i, 'Spec §2: no AggregateRating in schema');
  forbid(/"?ratingValue"?/i, 'Implies a rating');
  forbid(/"?reviewCount"?/i, 'Implies an aggregate');
  forbid(/[★☆]/, 'Star glyph');
  forbid(/&#9733;|&#9734;/, 'Escaped star glyph');
  forbid(/\b\d(\.\d)?\s*(out of|\/)\s*5\b/i, 'Numeric rating');
});

test('CTAs never promise instant booking', () => {
  // Vagaro is request-based (BookText: "Request").
  forbid(/book\s+instantly/i, 'Vagaro cannot book instantly');
  forbid(/book\s+now/i, 'Implies instant confirmation — use "Request Appointment"');
  forbid(/instant(ly)?\s+confirm/i, 'Implies instant confirmation');
});

test('all copy is pronoun-free', () => {
  // Kiki has never published pronouns. There is no other referent on the site,
  // so a blanket ban is safe. If a Yelp quote uses a pronoun, TRIM THE QUOTE —
  // do not add an exception here.
  forbid(/\bshe\b/i, 'Kiki\'s pronouns are unpublished (spec §2)');
  forbid(/\bhers?\b/i, 'Kiki\'s pronouns are unpublished (spec §2)');
  forbid(/\bherself\b/i, 'Kiki\'s pronouns are unpublished (spec §2)');
});

test('only the three verified prices appear', () => {
  const ALLOWED = new Set(['$259', '$349', '$699']);
  for (const { file, html } of pages) {
    // `$$$` (priceRange) has no digit and is correctly ignored by this pattern.
    const found = html.match(/\$\d[\d,]*/g) ?? [];
    const invented = [...new Set(found)].filter((p) => !ALLOWED.has(p));
    assert.deepEqual(
      invented,
      [],
      `Unverified price in ${file}: ${invented.join(', ')} — only $259/$349/$699 are verified. Use "Pricing at consultation."`,
    );
  }
});

test('the address is correct and complete wherever it appears', () => {
  const withAddress = pages.filter((p) => /Reynard/i.test(p.html));
  assert.ok(withAddress.length > 0, 'the address should appear on at least one page');
  for (const { file, html } of withAddress) {
    assert.match(html, /3067\s+Reynard\s+Way/i, `${file}: wrong or partial street`);
    assert.match(html, /92103/, `${file}: missing postal code`);
  }
});

test('the phone number is exact wherever it appears', () => {
  for (const { file, html } of pages) {
    if (!/\b310\b/.test(html)) continue;
    assert.match(html, /\(310\)\s*595-0872|tel:\+13105950872/, `${file}: malformed phone`);
    // A digit-run that is not the real number means a second number was invented.
    const runs = [...new Set(html.match(/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g) ?? [])];
    const bad = runs.filter((r) => r.replace(/\D/g, '') !== '3105950872');
    assert.deepEqual(bad, [], `${file}: unexpected phone-like number: ${bad.join(', ')}`);
  }
});

test('opening hours are never invented', () => {
  // No hours were ever verified (spec §2 has no hours row). "By appointment only"
  // is the honest substitute; see CLIENT-INPUTS.md.
  forbid(/openingHours/i, 'Hours are unverified — omit the property entirely');
  forbid(/\bmon(day)?\s*[-–]\s*fri(day)?\b/i, 'Invented hours');
  forbid(/\b\d{1,2}(:\d{2})?\s*(am|pm)\s*[-–]\s*\d{1,2}(:\d{2})?\s*(am|pm)\b/i, 'Invented hours');
});
```

**Step 3: Verify the guards actually fire**

A guard suite that has never failed is not known to work. Prove each direction:

- [ ] `npm test` → all tests pass against the current build.
- [ ] Temporarily add `<p>Del Mar 92014 — 4.9 out of 5 — $199 — she is great</p>` to `src/pages/index.astro`.
- [ ] `npm test` → **must fail**, and the output must name at least the Del Mar, rating, price, and pronoun guards. Read the failures; confirm each names the offending file.
- [ ] Remove the temporary paragraph. `npm test` → passes again.

- [ ] Commit: `Add honesty guard suite asserting spec hard constraints`

---

## Task 4: Page shell — `<head>`, layout, button

**Note on build order:** `BaseLayout` starts as skip-link + `<main>` only. Tasks 7, 8 and 9 each add one import and one element to it. This keeps every task's build green instead of committing a layout that references components that do not exist yet.

**Files:**
- Create: `src/components/Head.astro`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Button.astro`
- Modify: `src/pages/index.astro` (replaces the Task 1 token-proof page)
- Modify: `test/guards.test.js` (add the title/description length guard)

**Step 1: `<head>`**

- [ ] Create `src/components/Head.astro`:

```astro
---
import { Font } from 'astro:assets';
import { business } from '../config/business';

interface Props {
  /** ≤60 characters — asserted by the guard suite. */
  title: string;
  /** ≤155 characters — asserted by the guard suite. */
  description: string;
  /** Site-relative path to a 1200×630 image. */
  ogImage?: string;
  noindex?: boolean;
}

const { title, description, ogImage = '/og-default.jpg', noindex = false } = Astro.props;

// Astro.site comes from astro.config.mjs. Changing that one line moves every
// canonical, OG url and sitemap entry.
const canonical = new URL(Astro.url.pathname, Astro.site);
const ogUrl = new URL(ogImage, Astro.site);
---

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical.href} />
{noindex && <meta name="robots" content="noindex, nofollow" />}

{/* Spec §4.2: display face preloaded, body face not. */}
<Font cssVariable="--font-display" preload />
<Font cssVariable="--font-sans" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content={business.name} />
<meta property="og:locale" content="en_US" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical.href} />
<meta property="og:image" content={ogUrl.href} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogUrl.href} />

<link rel="sitemap" href="/sitemap-index.xml" />
```

**Step 2: The layout**

- [ ] Create `src/layouts/BaseLayout.astro`:

```astro
---
import '../styles/global.css';
import Head from '../components/Head.astro';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
}

const props = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <Head {...props} />
  </head>
  <body class="bg-porcelain text-ink">
    <a
      href="#main"
      class="t-button sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-porcelain focus:px-4 focus:py-3"
    >
      Skip to content
    </a>

    <main id="main">
      <slot />
    </main>
  </body>
</html>
```

**Step 3: The button**

- [ ] Create `src/components/Button.astro`. Renders an `<a>` when given `href`, a `<button>` otherwise. Values from spec §4.4:

```astro
---
interface Props {
  variant?: 'primary' | 'ghost';
  href?: string;
  /** Set for the Vagaro link — external, request-based booking. */
  external?: boolean;
  type?: 'button' | 'submit';
  class?: string;
}

const { variant = 'primary', href, external = false, type = 'button', class: className = '' } = Astro.props;

// 44px minimum touch target (spec §8) — 32px inline padding, 14px block.
const base =
  't-button inline-flex items-center justify-center rounded-full px-[32px] py-[14px] transition-all duration-300 ease-out';

const variants = {
  primary: 'bg-rose text-porcelain hover:bg-rose-deep hover:-translate-y-px',
  ghost: 'border border-ink text-ink hover:bg-ink hover:text-porcelain',
};

const cls = `${base} ${variants[variant]} ${className}`;
const external_attrs = external ? { target: '_blank', rel: 'noopener' } : {};
---

{
  href ? (
    <a href={href} class={cls} {...external_attrs}>
      <slot />
    </a>
  ) : (
    <button {type} class={cls}>
      <slot />
    </button>
  )
}
```

**Step 4: Real homepage stub**

Replace the token-proof page with the actual homepage, empty of sections. Part 2 fills it in.

- [ ] Replace `src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Button from '../components/Button.astro';
import { business } from '../config/business';
import { CTA_LABEL } from '../config/nav';
---

<BaseLayout
  title="KIAMO Skin | Corrective Facials & Scalp Health, San Diego"
  description="Corrective facials and scalp therapy for acne, scarring and pigmentation in Mission Hills, San Diego. Licensed esthetician specialising in melanin-rich skin and barrier health."
>
  <section class="wrap section-y">
    <p class="t-eyebrow text-ink-soft">San Diego · {business.address.neighborhood}</p>
    <h1 class="t-hero mt-4">Skin that behaves like itself again.</h1>
    <p class="t-body mt-6">
      Corrective facials and scalp therapy for acne, scarring and pigmentation — built around
      how your skin actually functions.
    </p>
    <div class="mt-10 flex flex-wrap gap-4">
      <Button href={business.bookingUrl} external>{CTA_LABEL}</Button>
      <Button variant="ghost" href="/treatments">View treatments</Button>
    </div>
  </section>
</BaseLayout>
```

**Step 5: Guard the SEO limits**

- [ ] Append to `test/guards.test.js`:

```js
test('titles are ≤60ch and descriptions ≤155ch (spec §8)', () => {
  for (const { file, html } of pages) {
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    assert.ok(title.length > 0, `${file}: missing <title>`);
    assert.ok(title.length <= 60, `${file}: title is ${title.length}ch — "${title}"`);

    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
    assert.ok(desc.length > 0, `${file}: missing meta description`);
    assert.ok(desc.length <= 155, `${file}: description is ${desc.length}ch`);
  }
});

test('every page has exactly one h1 and a canonical', () => {
  for (const { file, html } of pages) {
    const h1s = html.match(/<h1[\s>]/g) ?? [];
    assert.equal(h1s.length, 1, `${file}: found ${h1s.length} h1 elements, expected 1`);
    assert.match(html, /<link rel="canonical" href="https:\/\//, `${file}: missing canonical`);
  }
});
```

**Step 6: Verify**

- [ ] `npm run build` → exits 0.
- [ ] `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors, 0 warnings, 0 hints.
- [ ] `npm test` → all guards pass, including the two new ones.
- [ ] Confirm exactly two font preloads were emitted for the display face and none for the body face:
```bash
grep -o 'rel="preload"[^>]*font' dist/index.html | wc -l   # expect 2
```
- [ ] Open `dist/index.html` and confirm the canonical is `https://kiamo-demo.pages.dev/` — **not** `kiamoskin.com`.
- [ ] `npm run dev`, tab into the page, confirm the skip link becomes visible on focus and the focus ring is rose with a 3px offset.

- [ ] Commit: `Add page shell, head component and button`

---

## Task 5: `LocalBusiness` + `MedicalBusiness` schema

Spec §1 success criterion 4 is a valid `LocalBusiness` with the correct Mission Hills NAP, verifiable in Google's Rich Results Test. Two deliberate omissions, both load-bearing:

- **No `AggregateRating`** — spec §2. All 15 Yelp reviews are filtered as "not recommended" and Vagaro has none, so any aggregate would be fabricated.
- **No `openingHoursSpecification`** — spec §8 lists the property, but §2 verifies no hours. Inventing them would violate §12's top risk, which outranks the §8 checklist. `"By appointment only"` carries the meaning honestly; the gap is logged in `CLIENT-INPUTS.md`.

**Files:**
- Create: `src/components/schema/LocalBusinessSchema.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `test/guards.test.js`

**Step 1: The schema component**

- [ ] Create `src/components/schema/LocalBusinessSchema.astro`:

```astro
---
import { business, verifiedPrices } from '../../config/business';

const site = Astro.site?.href ?? '';
const entityId = `${site}#business`;

/** Only the three verified prices carry an `offers` node. The rest are listed
    so the catalogue is complete, but with no invented price. */
const services = [
  { name: 'Deluxe HydraFacial', url: 'treatments/hydrafacial', priced: 'hydrafacial-deluxe' },
  { name: 'HydraFacial Keravive Scalp Treatment', url: 'treatments/keravive-scalp', priced: 'keravive-scalp' },
  { name: 'Express HydraFacial', url: 'treatments/hydrafacial', priced: 'hydrafacial-express' },
  { name: 'Procell Microchanneling', url: 'treatments/procell-microchanneling', priced: null },
  { name: 'DMK Enzyme Therapy', url: 'treatments/dmk-enzyme-therapy', priced: null },
  { name: 'Lira Chemical Peels', url: 'treatments/lira-peels', priced: null },
] as const;

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': entityId,
  name: business.name,
  description:
    'Corrective facials and scalp therapy for acne, scarring and pigmentation, specialising in melanin-rich skin and barrier health.',
  url: site,
  telephone: business.phone.display,
  email: business.email,
  priceRange: business.priceRange,
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  areaServed: business.areaServed.map((name) => ({ '@type': 'Place', name })),
  // Vagaro is request-based; this is the request entry point, not instant booking.
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: business.bookingUrl,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: { '@type': 'Reservation', name: 'Appointment request' },
  },
  sameAs: [business.instagram.url, business.bookingUrl, business.yelpUrl],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Treatments',
    itemListElement: services.map((s) => {
      const item = {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${site}${s.url}`,
          provider: { '@id': entityId },
        },
      };
      if (!s.priced) return item;
      const { price, duration } = verifiedPrices[s.priced];
      return {
        ...item,
        price: price.replace('$', ''),
        priceCurrency: 'USD',
        itemOffered: { ...item.itemOffered, termsOfService: duration },
      };
    }),
  },
  // NOTE: no aggregateRating (spec §2), no openingHoursSpecification (unverified).
  publicAccess: false,
  isAccessibleForFree: false,
};
---

<script type="application/ld+json" is:inline set:html={JSON.stringify(schema)} />
```

**Step 2: Mount it site-wide**

- [ ] In `src/layouts/BaseLayout.astro`, add the import and render it inside `<head>`, immediately after `<Head />`:

```diff
 import Head from '../components/Head.astro';
+import LocalBusinessSchema from '../components/schema/LocalBusinessSchema.astro';
```

```diff
     <Head {...props} />
+    <LocalBusinessSchema />
```

**Step 3: Guard the omissions**

- [ ] Append to `test/guards.test.js`:

```js
test('LocalBusiness schema is present and correctly shaped', () => {
  for (const { file, html } of pages) {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.ok(blocks.length > 0, `${file}: no JSON-LD found`);

    const parsed = blocks.map((m) => JSON.parse(m[1])); // throws on malformed JSON-LD
    const biz = parsed.find((p) => [].concat(p['@type']).includes('LocalBusiness'));
    assert.ok(biz, `${file}: no LocalBusiness node`);

    assert.equal(biz.address.streetAddress, '3067 Reynard Way');
    assert.equal(biz.address.postalCode, '92103');
    assert.equal(biz.geo.latitude, 32.7374);
    assert.equal(biz.geo.longitude, -117.1696);
    assert.equal(biz.aggregateRating, undefined, `${file}: AggregateRating is forbidden`);
    assert.equal(biz.openingHoursSpecification, undefined, `${file}: hours are unverified`);
  }
});
```

**Step 4: Verify**

- [ ] `npm run build` → exits 0.
- [ ] `npm test` → passes, including the new JSON-LD test. The `JSON.parse` doubles as a syntax check.
- [ ] Confirm the schema is a single line of valid JSON in the output:
```bash
grep -o 'application/ld+json' dist/index.html
```
- [ ] Paste the rendered `<script type="application/ld+json">` contents into <https://validator.schema.org/> → **0 errors, 0 warnings**. Record the result; spec §1 criterion 4 depends on it.
- [ ] Re-read the output and confirm the strings `aggregateRating`, `ratingValue` and `openingHours` appear nowhere.

- [ ] Commit: `Add LocalBusiness and MedicalBusiness schema`

---

## Task 6: Review and install the 17 images

Independent of Tasks 4–5, but it **blocks Part 2** — every homepage section needs its asset. Do this early.

Spec §10 requires each image to be checked against the live design and rejected if it reads as stock, and IMAGE-SCENES.md records that **only scenes 1–3 have been visually reviewed.** Wiring 14 unreviewed images into the build would contradict both. The review is therefore a gate inside this task, not a follow-up.

**Files:**
- Create: `src/assets/` (17 renamed images)
- Modify: `IMAGE-SCENES.md` (correct the `.png` error; record review outcomes)

**Step 1: Correct a known documentation error**

- [ ] `IMAGE-SCENES.md` states twice that scene 07 is a `.png`. It is not — `file website-images/scene-7.jpeg` reports `JPEG image data, 1792x2400`. **All 17 sources are `.jpeg`.** Fix both claims:
  - the table row for `07` — drop the `**\`.png\`**` note
  - the paragraph beginning "All 17 generated" — drop the parenthetical about `scene-7`

**Step 2: Review scenes 4–17**

- [ ] Read the rejection criteria at the bottom of `IMAGE-SCENES.md`.
- [ ] View each of scenes 4–17 and judge against those criteria. Record `accepted` or `regenerate` plus a one-line reason in the status column.
- [ ] Resolve the two open questions the file flags:
  - **Scene 2** — is `scene-2.jpeg` the rejected upside-down render, or a regenerate against the rewritten side-on prompt? If it is still inverted, mark it `regenerate`; the hero mobile crop cannot ship broken.
  - **Scene 3 vs scene 5** — scene 05 (Barrier) is documented as using the `scene-3.jpeg` render, yet `scene-5.jpeg` also exists. View both and decide which file serves Pigmentation and which serves Barrier. **Do not guess from filenames** — the reassignment means the numbering no longer matches the slots. Record the decision in IMAGE-SCENES.md.
- [ ] Lay the full set side by side for the consistency pass spec §10 requires: "consistency of grade across the set matters more than any single image being perfect." Anything that jumps warmer, cooler or sharper than its neighbours gets `regenerate`.

**Step 3: Install with semantic names**

Rename on copy — `scene-11.jpeg` tells a future reader nothing. Target names are the ones already specified per-scene in IMAGE-SCENES.md. Extension becomes `.jpg`; the bytes are JPEG either way.

- [ ] Copy into `src/assets/` using this mapping. **Fill the two Pigmentation/Barrier rows from your Step 2 decision, not from the numbering:**

| Source | Target |
|---|---|
| `scene-1.jpeg` | `src/assets/hero-desktop.jpg` |
| `scene-2.jpeg` | `src/assets/hero-mobile.jpg` |
| _(per Step 2)_ | `src/assets/concern-pigmentation.jpg` |
| `scene-4.jpeg` | `src/assets/concern-acne.jpg` |
| _(per Step 2)_ | `src/assets/concern-barrier.jpg` |
| `scene-6.jpeg` | `src/assets/concern-scalp.jpg` |
| `scene-7.jpeg` | `src/assets/kiki-portrait.jpg` |
| `scene-8.jpeg` | `src/assets/studio-interior.jpg` |
| `scene-9.jpeg` | `src/assets/treatment-hydrafacial.jpg` |
| `scene-10.jpeg` | `src/assets/treatment-scalp.jpg` |
| `scene-11.jpeg` | `src/assets/treatment-enzyme.jpg` |
| `scene-12.jpeg` | `src/assets/journal-uv.jpg` |
| `scene-13.jpeg` | `src/assets/journal-water.jpg` |
| `scene-14.jpeg` | `src/assets/result-pigmentation-before.jpg` |
| `scene-15.jpeg` | `src/assets/result-pigmentation-after.jpg` |
| `scene-16.jpeg` | `src/assets/result-scalp-before.jpg` |
| `scene-17.jpeg` | `src/assets/result-scalp-after.jpg` |

`website-images/` stays as the untouched source of record. Do not move the originals.

**Step 4: Verify dimensions meet the stated minimums**

- [ ] Confirm every file meets the per-scene "Min width" in IMAGE-SCENES.md (hero desktop 2400px, Kiki 1600px, details 1800px, etc.):
```bash
for f in src/assets/*.jpg; do echo "$f: $(file -b "$f" | grep -o '[0-9]*x[0-9]*')"; done
```
- [ ] Anything under its minimum is a `regenerate`, not a resize — upscaling will read as cheap on a retina phone, which is spec §1's primary acceptance surface.

**Step 5: Verify they process**

- [ ] `npm run build`. Astro only optimizes images that are imported, so nothing is emitted yet — this only confirms nothing broke.
- [ ] Confirm `sharp` handles the set by importing one temporarily in `src/pages/index.astro` and building:
```astro
import { Image } from 'astro:assets';
import hero from '../assets/hero-desktop.jpg';
...
<Image src={hero} widths={[640, 1280, 2400]} alt="" />
```
- [ ] `npm run build`, then confirm optimized variants were written:
```bash
ls dist/_astro/ | grep -c 'hero-desktop'   # expect ≥ 1
```
- [ ] **Known behaviour, do not treat as a bug:** `<Image widths={[…]}>` writes `width`/`height` attributes from the *original* file's intrinsic size, not the largest requested width. Verified during config testing. It holds CLS at 0 correctly because the ratio is right.
- [ ] Remove the temporary import — Part 2 adds the real hero.

- [ ] Commit: `Install reviewed imagery as semantically named assets`

**If any image is marked `regenerate`:** do not block Part 1 on it. Record it in IMAGE-SCENES.md, carry it into Part 2's section task, and use the accepted images to build the sections meanwhile. A section built against a placeholder-free accepted image still exercises the layout.

---

## Task 7: Sticky header & menu overlay

Spec §6 §1. Hamburger **at every breakpoint** — this is Savanna's restraint move and a deliberate departure from the usual desktop nav bar.

**Note on the logo:** `brand-asset/logo.jpg` is a raster mark on a blush field, so it cannot sit over the hero image or the espresso footer without a visible box. The header and footer use a Cormorant wordmark instead. Getting a transparent SVG or PNG of the mark is a `CLIENT-INPUTS.md` item.

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/MenuOverlay.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: The header**

- [ ] Create `src/components/Header.astro`:

```astro
---
import Button from './Button.astro';
import MenuOverlay from './MenuOverlay.astro';
import { business } from '../config/business';
import { CTA_LABEL } from '../config/nav';
---

<header
  id="site-header"
  data-scrolled="false"
  class="fixed inset-x-0 top-0 z-40 h-[60px] border-b border-transparent transition-colors duration-300 ease-out data-[scrolled=true]:border-line data-[scrolled=true]:bg-porcelain"
>
  <div class="wrap flex h-full items-center justify-between">
    <a href="/" class="font-display text-[1.25rem] uppercase tracking-[0.14em]">
      Kiamo
      <span class="sr-only">— {business.name}, home</span>
    </a>

    <div class="flex items-center gap-2">
      {/* Hidden on the smallest screens — the sticky bottom bar carries the CTA there. */}
      <Button href={business.bookingUrl} external class="hidden sm:inline-flex">
        {CTA_LABEL}
      </Button>

      <button
        type="button"
        id="menu-open"
        aria-expanded="false"
        aria-controls="menu-overlay"
        class="flex size-11 items-center justify-center"
      >
        <span class="sr-only">Open menu</span>
        <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
          <path d="M0 1h20M0 9h20" stroke="currentColor" stroke-width="1" />
        </svg>
      </button>
    </div>
  </div>
</header>

<MenuOverlay />

<script>
  // Spec §6 §1: transparent over the hero, porcelain + hairline past 80px.
  const header = document.getElementById('site-header');
  if (header) {
    const sync = () => {
      header.dataset.scrolled = String(window.scrollY > 80);
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }
</script>
```

**Step 2: The overlay**

- [ ] Create `src/components/MenuOverlay.astro`:

```astro
---
import { primaryNav, treatmentLinks, CTA_LABEL } from '../config/nav';
import { business } from '../config/business';
---

<div
  id="menu-overlay"
  hidden
  class="fixed inset-0 z-50 overflow-y-auto bg-blush"
>
  <div class="wrap flex h-[60px] items-center justify-between">
    <span class="font-display text-[1.25rem] uppercase tracking-[0.14em]">Kiamo</span>
    <button type="button" id="menu-close" class="flex size-11 items-center justify-center">
      <span class="sr-only">Close menu</span>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" stroke-width="1" />
      </svg>
    </button>
  </div>

  <nav class="wrap pt-12 pb-20" aria-label="Main">
    <ul class="m-0 list-none p-0">
      {
        primaryNav.map((item, i) => (
          <li class="stagger border-b border-line/70" style={`--i:${i}`}>
            <a href={item.href} class="t-h3 block py-5">{item.label}</a>
          </li>
        ))
      }
    </ul>

    <p class="t-eyebrow mt-12 text-ink-soft">Treatments</p>
    <ul class="m-0 mt-4 list-none p-0">
      {
        treatmentLinks.map((item, i) => (
          <li class="stagger" style={`--i:${i + primaryNav.length}`}>
            <a href={item.href} class="t-body block py-2 hover:text-rose">{item.label}</a>
          </li>
        ))
      }
    </ul>

    <a
      href={business.bookingUrl}
      target="_blank"
      rel="noopener"
      class="t-button mt-12 inline-flex rounded-full bg-rose px-[32px] py-[14px] text-porcelain"
    >
      {CTA_LABEL}
    </a>
  </nav>
</div>

<style>
  /* Spec §6 §1: links stagger in at 60ms. */
  .stagger {
    opacity: 0;
    transform: translateY(12px);
  }

  #menu-overlay[data-open='true'] .stagger {
    animation: stagger-in 420ms cubic-bezier(0, 0, 0.3, 1) forwards;
    animation-delay: calc(var(--i) * 60ms);
  }

  @keyframes stagger-in {
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stagger {
      opacity: 1;
      transform: none;
    }
    #menu-overlay[data-open='true'] .stagger {
      animation: none;
    }
  }
</style>

<script>
  const overlay = document.getElementById('menu-overlay');
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');

  if (overlay && openBtn && closeBtn) {
    const focusable = () =>
      [...overlay.querySelectorAll<HTMLElement>('a[href], button')].filter(
        (el) => !el.hasAttribute('hidden'),
      );

    const open = () => {
      overlay.hidden = false;
      overlay.dataset.open = 'true';
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      focusable()[0]?.focus();
    };

    const close = () => {
      overlay.hidden = true;
      delete overlay.dataset.open;
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      openBtn.focus();
    };

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (overlay.hidden) return;
      if (e.key === 'Escape') {
        close();
        return;
      }
      // Trap focus inside the overlay while it is open.
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }
</script>
```

**Step 3: Mount and offset**

- [ ] In `src/layouts/BaseLayout.astro` add the import and render `<Header />` immediately before `<main>`. The header is fixed and 60px tall, so pages that do not open with a full-bleed hero need the offset — leave `<main>` unpadded here and let the hero own the top of the homepage.

```diff
 import LocalBusinessSchema from '../components/schema/LocalBusinessSchema.astro';
+import Header from '../components/Header.astro';
```

```diff
+    <Header />
     <main id="main">
```

**Step 4: Verify**

- [ ] `npm run build` → 0. `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors.
- [ ] `npm run dev`, then in the browser:
  - [ ] Header is transparent at rest; scroll past 80px → porcelain background plus a `--line` hairline appears. Scroll back → returns to transparent.
  - [ ] Hamburger is present at 375px, 840px **and** 1400px. It never turns into a horizontal nav.
  - [ ] Click it: full-screen blush overlay, links fade up in sequence rather than all at once.
  - [ ] Keyboard only: `Tab` reaches the hamburger, `Enter` opens, focus lands on the first link, `Tab` cycles inside the overlay and cannot escape to the page behind, `Escape` closes and focus returns to the hamburger.
  - [ ] With OS "reduce motion" enabled, the links appear instantly with no transform.
  - [ ] Every tappable target measures ≥44px (spec §8). Check the hamburger and close button in devtools.
- [ ] `npm test` → still passes. The overlay adds nav copy; confirm no guard trips on it.

- [ ] Commit: `Add sticky header and full-screen menu overlay`

---

## Task 8: Footer & reusable NAP block

Spec §6 §10. The NAP block is extracted because it appears twice — here and in the homepage's §9 Location panel (Part 2) — and a second hand-typed address is exactly how the wrong one reaches the client.

**Files:**
- Create: `src/components/NapBlock.astro`
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: The NAP block**

- [ ] Create `src/components/NapBlock.astro`:

```astro
---
import { business } from '../config/business';

interface Props {
  /** `dark` inverts type for the espresso footer. */
  tone?: 'light' | 'dark';
  showCancellation?: boolean;
}

const { tone = 'light', showCancellation = false } = Astro.props;

const muted = tone === 'dark' ? 'text-porcelain/70' : 'text-ink-soft';
const link = tone === 'dark' ? 'hover:text-blush' : 'hover:text-rose';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name}, ${business.address.full}`,
)}`;
---

<address class="not-italic">
  <a href={mapsUrl} target="_blank" rel="noopener" class={`t-body ${link}`}>
    {business.address.street}<br />
    {business.address.city}, {business.address.region} {business.address.postalCode}
  </a>

  <p class={`t-meta mt-3 ${muted}`}>{business.address.neighborhood}</p>

  <p class="t-body mt-5">
    <a href={business.phone.href} class={link}>{business.phone.display}</a>
  </p>
  <p class="t-body">
    <a href={`mailto:${business.email}`} class={link}>{business.email}</a>
  </p>

  {/* No opening hours: none were ever verified. This is the honest substitute. */}
  <p class={`t-meta mt-5 ${muted}`}>
    {business.visit.appointmentOnly} · {business.visit.parking}
  </p>

  {
    showCancellation && (
      <p class={`t-body mt-5 text-[0.9375rem] ${muted}`}>{business.cancellation}</p>
    )
  }
</address>
```

**Step 2: The footer**

- [ ] Create `src/components/Footer.astro`:

```astro
---
import NapBlock from './NapBlock.astro';
import { business } from '../config/business';
import { treatmentLinks, primaryNav, CTA_LABEL } from '../config/nav';

const year = 2026;
---

<footer class="bg-espresso text-porcelain">
  <div class="wrap grid gap-14 pt-[112px] pb-16 md:grid-cols-[1.2fr_1fr_1fr] md:pt-[176px]">
    <div>
      <p class="font-display text-[1.5rem] uppercase tracking-[0.14em]">Kiamo</p>
      <p class="t-eyebrow mt-3 text-porcelain/60">Skin &amp; Scalp Health</p>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener"
        class="t-button mt-9 inline-flex rounded-full bg-rose px-[32px] py-[14px] text-porcelain transition-colors duration-300 hover:bg-rose-deep"
      >
        {CTA_LABEL}
      </a>
    </div>

    <div>
      <p class="t-eyebrow text-porcelain/60">Visit</p>
      <div class="mt-5">
        <NapBlock tone="dark" showCancellation />
      </div>
    </div>

    <div>
      <p class="t-eyebrow text-porcelain/60">Treatments</p>
      <ul class="m-0 mt-5 list-none p-0">
        {
          treatmentLinks.map((t) => (
            <li>
              <a href={t.href} class="t-body block py-1 hover:text-blush">{t.label}</a>
            </li>
          ))
        }
      </ul>

      <p class="t-eyebrow mt-10 text-porcelain/60">More</p>
      <ul class="m-0 mt-5 list-none p-0">
        {
          primaryNav.map((n) => (
            <li>
              <a href={n.href} class="t-body block py-1 hover:text-blush">{n.label}</a>
            </li>
          ))
        }
        <li>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener"
            class="t-body block py-1 hover:text-blush"
          >
            Instagram {business.instagram.handle}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="wrap border-t border-porcelain/15 py-8">
    <p class="t-meta text-porcelain/50">
      © {year} {business.name} · Black-owned, {business.address.neighborhood}, San Diego
    </p>
  </div>
</footer>
```

**Step 3: Mount**

- [ ] In `src/layouts/BaseLayout.astro`, import `Footer` and render it immediately after `</main>`.

**Step 4: Verify**

- [ ] `npm run build` → 0. `npx astro check` (with the heap flag) → 0 errors.
- [ ] `npm test` → passes. The footer is the first place the real address renders, so the "address is correct and complete" and "phone is exact" guards now have something to assert against. **Confirm those two tests actually ran and passed rather than skipping** — before this task no page contained "Reynard", so the address test's `assert.ok(withAddress.length > 0)` was the only thing holding it honest.
- [ ] In the browser: contrast of `text-porcelain/70` on `--espresso` is legible; the maps link opens the correct Mission Hills location; `tel:` and `mailto:` work.
- [ ] Confirm no hours appear anywhere in the footer.

- [ ] Commit: `Add footer and reusable NAP block`

---

## Task 9: Mobile sticky book bar

Spec §6: 56px, fixed bottom, appears past the hero, `env(safe-area-inset-bottom)`. Neither reference site has one; it is the highest-leverage mobile conversion element available, and mobile is the acceptance surface.

**Files:**
- Create: `src/components/StickyBookBar.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: Build it**

- [ ] Create `src/components/StickyBookBar.astro`:

```astro
---
import { business } from '../config/business';
import { CTA_LABEL } from '../config/nav';
---

<div
  id="sticky-book"
  data-visible="false"
  class="fixed inset-x-0 bottom-0 z-30 translate-y-full transition-transform duration-[400ms] ease-out data-[visible=true]:translate-y-0 sm:hidden"
  style="padding-bottom: env(safe-area-inset-bottom);"
>
  <a
    href={business.bookingUrl}
    target="_blank"
    rel="noopener"
    class="t-button flex h-[56px] items-center justify-center bg-rose text-porcelain"
  >
    {CTA_LABEL}
  </a>
</div>

<script>
  // "Past the hero" is approximated as 60% of the first viewport. The hero is
  // full-bleed on every page that has one, so this is stable without coupling
  // the bar to a hero element that inner pages do not have.
  const bar = document.getElementById('sticky-book');
  if (bar) {
    const sync = () => {
      bar.dataset.visible = String(window.scrollY > window.innerHeight * 0.6);
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync, { passive: true });
  }
</script>
```

**Step 2: Mount**

- [ ] In `src/layouts/BaseLayout.astro`, import `StickyBookBar` and render it after `<Footer />`.

**Step 3: Verify**

- [ ] `npm run build` → 0.
- [ ] In devtools at 375px width: bar is absent at the top of the page, slides up once you scroll past ~60% of the viewport, and its tap target is a full 56px tall.
- [ ] At 840px and above the bar never appears (`sm:hidden`) — the header pill covers the CTA there.
- [ ] In the iPhone device preset, confirm the bar clears the home indicator rather than sitting under it.
- [ ] Confirm the bar does not cover the footer's own CTA at the very bottom of the page. If it does, add `pb-[56px]` to the footer's bottom bar rather than hiding the sticky bar.
- [ ] Label reads exactly `Request Appointment`. `npm test` → the "never promise instant booking" guard passes.

- [ ] Commit: `Add mobile sticky book bar`

---

## Task 10: Motion primitives

Spec §9. Two reusable behaviours plus smooth scroll. Part 2's sections consume these rather than each defining its own animation, which is what keeps the motion "restrained" in practice instead of only in intent.

Astro bundles a component's `<script>` once per page regardless of how many instances render, so each primitive uses one document-wide query rather than a per-instance handler.

**Files:**
- Create: `src/components/Reveal.astro`
- Create: `src/components/PanelWipe.astro`
- Create: `src/scripts/lenis-init.ts`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`

**Step 1: No-JS safety first**

Animated elements start at `opacity: 0`, which would leave them permanently invisible if JS fails. Gate the hidden state on JS being alive.

- [ ] In `src/layouts/BaseLayout.astro`, add as the first thing inside `<head>`, before `<Head />`:

```astro
<script is:inline>
  document.documentElement.dataset.js = 'true';
</script>
```

- [ ] In `src/styles/global.css`, append:

```css
/* Only hide animated elements when JS is present to reveal them again. */
@layer base {
  [data-js] [data-reveal],
  [data-js] [data-wipe] > [data-wipe-panel] {
    will-change: transform, opacity;
  }

  [data-js] [data-reveal] {
    opacity: 0;
  }
}
```

**Step 2: Section fade**

- [ ] Create `src/components/Reveal.astro`:

```astro
---
interface Props {
  /** Element to render. Use `section` so the wrapper is not an extra div. */
  as?: 'div' | 'section' | 'li' | 'article';
  class?: string;
}

const { as: Tag = 'div', class: className = '' } = Astro.props;
---

<Tag data-reveal class={className}><slot /></Tag>

<script>
  // Spec §9: y 24px → 0, 600ms. `power2.out` is GSAP's closest named ease to the
  // spec's cubic-bezier(0,0,.3,1); GSAP has no built-in cubic-bezier string, and
  // pulling in CustomEase for a 24px move is not worth the payload.
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (els.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => (el.style.opacity = '1'));
    } else {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      els.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });
    }
  }
</script>
```

**Step 3: The signature panel wipe**

- [ ] Create `src/components/PanelWipe.astro`. The blush panel slides off the image on scroll-in, echoing the logo field:

```astro
---
interface Props {
  class?: string;
  /** Direction the panel exits. */
  from?: 'left' | 'right';
}

const { class: className = '', from = 'left' } = Astro.props;
---

<div data-wipe data-wipe-from={from} class={`relative overflow-hidden ${className}`}>
  <slot />
  <div
    data-wipe-panel
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 bg-blush"
  >
  </div>
</div>

<script>
  // Spec §9: --blush panel slides off images on scroll-in, 900ms power3.inOut.
  const wraps = document.querySelectorAll<HTMLElement>('[data-wipe]');

  if (wraps.length) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      wraps.forEach((w) => {
        const panel = w.querySelector<HTMLElement>('[data-wipe-panel]');
        if (panel) panel.style.display = 'none';
      });
    } else {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      wraps.forEach((w) => {
        const panel = w.querySelector<HTMLElement>('[data-wipe-panel]');
        if (!panel) return;
        const exit = w.dataset.wipeFrom === 'right' ? '100%' : '-100%';
        gsap.fromTo(
          panel,
          { xPercent: 0 },
          {
            x: exit,
            duration: 0.9,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: w, start: 'top 80%', once: true },
          },
        );
      });
    }
  }
</script>
```

**Step 4: Desktop-only smooth scroll**

- [ ] Create `src/scripts/lenis-init.ts`:

```ts
/**
 * Spec §3: Lenis is desktop-only. Native iOS momentum beats any JS smoothing and
 * smooth-scroll libraries measurably degrade INP on mobile.
 *
 * ScrollTrigger must be driven from Lenis's scroll event, or reveals fire against
 * the browser's scroll position while the page renders at Lenis's — the two desync
 * and triggers land early.
 */
const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (isDesktop && !reduce) {
  const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
    import('lenis'),
    import('gsap/ScrollTrigger'),
  ]);

  const lenis = new Lenis({ duration: 1.1 });

  lenis.on('scroll', ScrollTrigger.update);

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}
```

- [ ] In `src/layouts/BaseLayout.astro`, add before `</body>`:

```astro
<script>
  import '../scripts/lenis-init';
</script>
```

**Step 5: Verify**

- [ ] `npm run build` → 0. `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors.
- [ ] Confirm GSAP and Lenis are **dynamically** imported, not in the initial bundle. The homepage currently uses neither primitive, so no GSAP chunk should even load:
```bash
grep -rl 'gsap' dist/_astro/*.js | head
```
  GSAP must live in its own chunk file, not inside the entry script.
- [ ] Temporarily wrap the homepage section in `<Reveal as="section">` and rebuild. In the browser: the section fades up once on scroll-in and does not replay on scroll-back (`once: true`).
- [ ] In the Network panel, confirm the GSAP chunk is requested only after the reveal is set up — not on first paint.
- [ ] Enable "reduce motion" and reload: content is visible immediately, no transform, and **no GSAP chunk is fetched at all**. This is the check that proves the guard is on the import and not just the animation.
- [ ] Disable JavaScript entirely and reload: all content is still visible. This proves the `data-js` gate.
- [ ] At 1400px confirm scrolling feels smoothed; at 800px confirm it is native. Scroll to the bottom on desktop and confirm reveals still trigger at the right position — a Lenis/ScrollTrigger desync shows up as sections already faded in before you reach them.
- [ ] Remove the temporary `<Reveal>` wrapper. Part 2 adds the real usages.

- [ ] Commit: `Add motion primitives and desktop smooth scroll`

---

## Part 1 is done when

All of these hold simultaneously:

- [ ] `npm run build` exits 0 with no warnings.
- [ ] `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` reports **0 errors, 0 warnings, 0 hints**.
- [ ] `npm test` passes every guard, and each guard has been seen to fail at least once against deliberately bad input (Task 3 Step 3).
- [ ] The rendered JSON-LD validates at <https://validator.schema.org/> with 0 errors and contains no `aggregateRating` and no `openingHoursSpecification`.
- [ ] The homepage canonical is `https://kiamo-demo.pages.dev/`. `kiamoskin.com` appears nowhere in `dist/`.
- [ ] All 17 images sit in `src/assets/` under semantic names, each reviewed, with any `regenerate` verdicts recorded in `IMAGE-SCENES.md`.
- [ ] Keyboard-only: skip link works, the overlay traps focus and returns it, the focus ring is visible everywhere and rose.
- [ ] With JS disabled the page is fully readable; with reduce-motion on, no GSAP chunk is fetched.
- [ ] Lighthouse mobile on the stub homepage: Performance ≥ 95, Accessibility ≥ 95, SEO = 100. Run it now — it is far cheaper to fix a shell than a finished page, and spec §1 criterion 3 is non-negotiable.

**Then run a self-review before starting Part 2:**

- [ ] Re-read the Global Constraints section against the built output. Every prohibition, checked by hand once, not just by the suite.
- [ ] Confirm no file outside `src/config/business.ts` contains the address, phone, email or a price.
- [ ] Confirm no component invented a value the spec does not contain. Anything invented gets removed and logged in `CLIENT-INPUTS.md`.

---

## Carried forward to Part 2 / Part 3

Recorded here so they are not lost:

- **Spec inconsistency to resolve in Part 2.** Spec §6 §8 says all three San Diego context columns link to a journal article, but §5 and §10 provide only **two** articles and two journal header images. Resolution: UV → `/journal/june-gloom-is-not-sun-protection`, hard water → `/journal/san-diego-hard-water-and-your-scalp`, and **Santa Ana → `/treatments/dmk-enzyme-therapy`** (barrier repair), which is thematically correct and keeps the image count at 17. Confirm with the user when Part 2 starts.
- OG images: Part 1 wires a single default 1200×630 image. Per-page generated OG cards are Part 3.
- `CLIENT-INPUTS.md`, `PITCH-NOTES.md`, `README.md` are Part 3 deliverables (spec §11).
- Scenes 07 (Kiki) and 08 (studio) are **inventions, not likenesses** — no reference photo of either exists. Name this when presenting.
