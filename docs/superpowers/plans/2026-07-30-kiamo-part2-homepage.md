# KIAMO Skin — Part 2: Homepage Sections — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Prerequisite:** Part 1 (`2026-07-30-kiamo-part1-foundation.md`) is complete and its "Part 1 is done when" checklist passes. **Read Part 1's "Global Constraints" section before writing a single line of copy — it applies verbatim here and is not repeated in full.**

**Goal:** Build homepage sections 2–9 from spec §6 into the shell Part 1 produced. Sections 1 and 10 (header, footer) and the mobile sticky bar already exist.

**Architecture:** Each section is one component in `src/components/sections/`, composed in order by `src/pages/index.astro`. Service data moves into `src/data/services.ts` so the homepage menu and Part 3's treatment pages read the same rows. Sections consume Part 1's `Reveal` and `PanelWipe` primitives rather than defining their own motion.

---

## The field rhythm is the acceptance criterion

Spec §4.1 fixes the background of every section, and no two adjacent sections may share one. Build them in order and check the rhythm after each:

| # | Section | Field | Status |
|---|---|---|---|
| 1 | Header (past hero) | `--porcelain` | done in Part 1 |
| 2 | Hero | full-bleed image | Task 1 |
| 3 | Positioning | `--blush` | Task 2 |
| 4 | Concern tiles | `--porcelain` | Task 3 |
| 5 | Service menu | `--ivory` | Task 5 |
| 6 | Meet Kiki | `--blush` | Task 6 |
| 7 | Results & words | `--porcelain` | Task 7 |
| 8 | San Diego context | `--espresso` | Task 8 |
| 9 | FAQ + Location | `--ivory` | Task 9 |
| 10 | Footer | `--espresso` | done in Part 1 |

Three blush, two ivory, two porcelain, two espresso. **Rose stays under 5% of any viewport** — prices, the CTA pill, link hover, the active tab underline. Nowhere else.

---

## Spec inconsistency to resolve before Task 8

**The conflict:** spec §6 section 8 specifies three San Diego context columns (June Gloom / hard water / Santa Ana) and says "each links to a journal article." But spec §5 defines only **two** journal articles, and §10 budgets only **two** journal header images. Three columns cannot each link to one of two articles.

**Resolution used by this plan:**

| Column | Links to |
|---|---|
| June Gloom is not sun protection | `/journal/june-gloom-is-not-sun-protection` |
| Very hard water, 16 grains per gallon | `/journal/san-diego-hard-water-and-your-scalp` |
| Santa Ana season | `/treatments/dmk-enzyme-therapy` |

Santa Ana season is barrier collapse and dehydration, and DMK enzyme therapy is the barrier-repair treatment — so the third link is thematically correct rather than a compromise, and it sends the visitor to a conversion page instead of an article. This holds the image count at 17 and adds no unbudgeted content.

- [ ] **Surface this to the user before implementing Task 8.** State the deviation and the reasoning; do not silently change what the spec says. If they want a third article instead, that adds one route and one 16:9 image to Part 3's scope.

---

## File Structure

| Path | Responsibility |
|---|---|
| `src/data/services.ts` | Every service row: name, category, description, duration, price. Shared with Part 3. |
| `src/data/faqs.ts` | The six homepage FAQ entries, consumed by both the accordion and `FAQPage` schema |
| `src/data/testimonials.ts` | Three Yelp quotes, plainly attributed |
| `src/components/sections/Hero.astro` | §2 — art-directed full-bleed hero |
| `src/components/sections/Positioning.astro` | §3 — her verbatim positioning statement |
| `src/components/sections/ConcernTiles.astro` | §4 — four 3:4 concern tiles |
| `src/components/sections/ServiceMenu.astro` | §5 — tabbed, text-only service rows |
| `src/components/sections/MeetKiki.astro` | §6 — asymmetric portrait + copy |
| `src/components/sections/Results.astro` | §7 — before/after slider + testimonials |
| `src/components/BeforeAfter.astro` | The draggable comparison control |
| `src/components/sections/SanDiegoContext.astro` | §8 — three espresso columns |
| `src/components/sections/FaqLocation.astro` | §9 — accordion + NAP + static map |
| `src/components/schema/FaqSchema.astro` | `FAQPage` JSON-LD, fed from `faqs.ts` |
| `src/pages/index.astro` | Composes all nine in order |

**Task order:** 1 → 2 → 3 → 4 (service data) → 5 → 6 → 7 → 8 → 9 → 10 (integration). Tasks 2, 6 and 8 are copy-only and can be done out of order if an image is still pending regeneration.

---

## Copy rules for this part

Part 2 is where almost all of the site's prose gets written, so the honesty constraints bite hardest here.

- **Her verbatim lines from spec §2 are the best copy available.** Use them. Anything you write yourself must sit in the same register: clinical but kind, educational, anti-hype, explicitly inclusive. Not spa-luxury, not woo-holistic.
- **Pronoun-free throughout.** The guard suite fails the build on `she`/`her`. If a Yelp quote contains a pronoun, trim the quote — never weaken the guard.
- **No claim of a specific outcome or timeframe** unless spec §2 contains it. "Skin doesn't change overnight" is hers; "results in 3 treatments" is invented.
- **Every price that is not $259, $349 or $699 renders `Pricing at consultation.`**
- **The before/after pairs are AI-generated illustrations.** A "Results vary" disclaimer sits adjacent to the slider, and replacement with real consented client photos is a `CLIENT-INPUTS.md` line.

---

## Task 1: Hero (§2)

Full-bleed, **separate mobile 9:16 and desktop 16:9 crops**, zero overlay. This is the LCP element and the first thing the client sees on her phone, so it gets the most care of any section.

**Two verified constraints from build-notes §6 that shape the code:**
- Astro's built-in `<Picture>` only switches *format and size*, not the source image. Art direction needs a hand-built `<picture>` fed by `getImage()`.
- `<Image widths={[…]}>` emits the *original* file's intrinsic `width`/`height`. Harmless for CLS (the ratio is right) but do not use it where the numbers matter.

**Deliberate deviation from spec §8:** the fallback is JPEG, not WebP. AVIF covers every browser that matters in 2026 and a third encode of a 2400px hero costs build time and bytes for no reachable audience. Flag it if the client's analytics later show otherwise.

**Files:**
- Create: `src/components/sections/Hero.astro`
- Modify: `src/pages/index.astro`

**Step 1: Build it**

- [ ] Create `src/components/sections/Hero.astro`:

```astro
---
import { getImage } from 'astro:assets';
import Button from '../Button.astro';
import heroTall from '../../assets/hero-mobile.jpg';
import heroWide from '../../assets/hero-desktop.jpg';
import { business } from '../../config/business';
import { CTA_LABEL } from '../../config/nav';

const tallAvif = await getImage({
  src: heroTall,
  format: 'avif',
  widths: [640, 828, 1080],
  quality: 72,
});
const wideAvif = await getImage({
  src: heroWide,
  format: 'avif',
  widths: [1280, 1920, 2400],
  quality: 72,
});
const fallback = await getImage({
  src: heroWide,
  format: 'jpeg',
  width: 1920,
  quality: 72,
});
---

<section class="relative isolate min-h-[92svh] overflow-hidden md:min-h-[88svh]">
  {/* Spec §4.1: image overlay opacity is always 0. Legibility comes from the
      image's own empty wall on the left two-thirds, not from a scrim. */}
  <picture>
    <source
      media="(max-width: 639px)"
      srcset={tallAvif.srcSet.attribute}
      type="image/avif"
    />
    <source
      media="(min-width: 640px)"
      srcset={wideAvif.srcSet.attribute}
      type="image/avif"
    />
    <img
      src={fallback.src}
      width={1920}
      height={1080}
      alt=""
      fetchpriority="high"
      decoding="async"
      class="ken-burns absolute inset-0 size-full object-cover"
    />
  </picture>

  <div class="wrap relative flex min-h-[92svh] flex-col justify-end pb-20 md:min-h-[88svh] md:pb-28">
    <p class="t-eyebrow text-ink">San Diego · {business.address.neighborhood}</p>
    <h1 class="t-hero mt-5 max-w-[18ch]">Skin that behaves like itself again.</h1>
    <p class="t-body mt-6">
      Corrective facials and scalp therapy for acne, scarring and pigmentation — built
      around how your skin actually functions.
    </p>
    <div class="mt-9 flex flex-wrap gap-3">
      <Button href={business.bookingUrl} external>{CTA_LABEL}</Button>
      <Button variant="ghost" href="/treatments">View treatments</Button>
    </div>
  </div>
</section>

<style>
  /* Spec §9: ken-burns scale 1 → 1.06 over 20s. */
  .ken-burns {
    animation: ken-burns 20s ease-out forwards;
    transform-origin: 60% 50%;
  }

  @keyframes ken-burns {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ken-burns {
      animation: none;
    }
  }
</style>
```

**Note on the empty `alt`:** the hero is decorative — the h1 beside it carries the meaning, and describing the image would duplicate that for a screen reader. This is correct, not an oversight. Every *content* image in later sections gets a real `alt`.

**Step 2: Compose**

- [ ] In `src/pages/index.astro`, replace the Part 1 stub section with `<Hero />`. Keep the `BaseLayout` title and description exactly as Part 1 set them.

**Step 3: Verify**

- [ ] `npm run build` → 0. Confirm both crops were processed:
```bash
ls dist/_astro/ | grep -E 'hero-(mobile|desktop)' | head
```
  Expect AVIF variants of both, plus one JPEG of the desktop crop.
- [ ] At 375px, confirm the **9:16 mobile crop** is served, not a squashed desktop crop. Check the Network panel for the actual file requested — this is the single most likely thing to be silently wrong.
- [ ] At 1400px, confirm the 16:9 crop is served.
- [ ] Confirm the headline is legible over the image at 375px, 640px and 1400px. If it is not, **do not add an overlay** — spec §4.1 forbids it. Reposition the text into the image's empty region or mark the hero image `regenerate` in `IMAGE-SCENES.md`.
- [ ] Confirm the ken-burns drift is barely perceptible. 6% over 20 seconds should read as stillness that happens to breathe; if it reads as movement, something else is wrong.
- [ ] With reduce-motion on, the image is static.
- [ ] Lighthouse mobile: check the LCP element is the hero image and LCP is under 2.5s. If not, add a `<link rel="preload" as="image" imagesrcset=… imagesizes=…>` to `Head.astro` via a new optional prop — but measure first.
- [ ] `npm test` → passes.

- [ ] Commit: `Add art-directed hero section`

---

## Task 2: Positioning (§3)

`--blush`, centred, 765px max. Her voice verbatim — this is the strongest copy on the site and none of it is invented.

**Files:**
- Create: `src/components/sections/Positioning.astro`
- Modify: `src/pages/index.astro`

**Step 1: Build it**

- [ ] Create `src/components/sections/Positioning.astro`:

```astro
---
import Reveal from '../Reveal.astro';
---

<Reveal as="section" class="bg-blush">
  <div class="wrap section-y">
    <div class="mx-auto max-w-[765px] text-center">
      <p class="t-eyebrow text-ink-soft">The approach</p>
      {/* Spec §2, her words verbatim. Do not paraphrase or shorten. */}
      <blockquote class="t-h2 mt-7 [text-wrap:balance]">
        This isn’t just a spa facial. This is strategy, correction, intention. Every step
        has a purpose. Every product has a reason. Relaxing always — but results come first.
      </blockquote>
    </div>
  </div>
</Reveal>
```

**Step 2: Verify**

- [ ] Add `<Positioning />` after `<Hero />` in `src/pages/index.astro`.
- [ ] `npm run build` → 0.
- [ ] Confirm the quote renders in Cormorant 300 at H2 scale, sentence case, and reads as a statement rather than a pull-quote ornament.
- [ ] Confirm the blush field sits directly against the hero image with no gap or seam.
- [ ] Confirm the typographic apostrophes render correctly (`isn’t`, not `isn&rsquo;t` or a mojibake glyph).
- [ ] Scroll past: the section fades up once, 24px, and does not replay.
- [ ] `npm test` → passes. This is the first prose on the site; the pronoun guard now has something real to check.

- [ ] Commit: `Add positioning statement section`

---

## Task 3: Concern-led tiles (§4)

`--porcelain`. Four 3:4 tiles, 2-col mobile / 4-col desktop, each linking to the treatment that resolves it. Spec §6 marks this the one addition beyond both reference sites: people search by concern, not treatment name, so it is simultaneously the SEO entry layer and the conversion funnel.

**The imagery rule that is easy to get wrong:** tiles show the **resolved** state. The tile *label* names the concern; the image shows where treatment gets you. A tile reading "Acne & Scarring" over clear skin says "we get you here." Visible damage appears only in Task 7's matched before/after pairs. An earlier draft rendered damage across all four tiles and read like a dermatology textbook.

**Files:**
- Create: `src/components/sections/ConcernTiles.astro`
- Modify: `src/pages/index.astro`

**Step 1: Build it**

- [ ] Create `src/components/sections/ConcernTiles.astro`:

```astro
---
import { Image } from 'astro:assets';
import Reveal from '../Reveal.astro';
import PanelWipe from '../PanelWipe.astro';
import pigmentation from '../../assets/concern-pigmentation.jpg';
import acne from '../../assets/concern-acne.jpg';
import barrier from '../../assets/concern-barrier.jpg';
import scalp from '../../assets/concern-scalp.jpg';

// Alt text describes the resolved state the image actually shows — not the
// concern in the label. Describing damage that isn't in the frame would be wrong.
const tiles = [
  {
    label: 'Pigmentation & Melasma',
    href: '/treatments/lira-peels',
    image: pigmentation,
    alt: 'Close portrait of even, clear skin in warm natural light',
  },
  {
    label: 'Acne & Scarring',
    href: '/treatments/procell-microchanneling',
    image: acne,
    alt: 'Profile portrait of smooth, healthy cheek and jawline',
  },
  {
    label: 'Barrier & Dehydration',
    href: '/treatments/dmk-enzyme-therapy',
    image: barrier,
    alt: 'Side-lit portrait of calm, well-hydrated skin with visible natural texture',
  },
  {
    label: 'Scalp Health',
    href: '/treatments/keravive-scalp',
    image: scalp,
    alt: 'Detail of a healthy scalp and hairline at the part',
  },
];
---

<section class="bg-porcelain">
  <div class="wrap section-y">
    <p class="t-eyebrow text-ink-soft">Where to start</p>
    <h2 class="t-h2 mt-5 max-w-[24ch]">Tell us what your skin is doing.</h2>

    <ul class="mt-14 grid list-none grid-cols-2 gap-x-5 gap-y-10 p-0 md:grid-cols-4 md:gap-x-8">
      {
        tiles.map((tile, i) => (
          <Reveal as="li">
            <a href={tile.href} class="group block">
              <PanelWipe from={i % 2 === 0 ? 'left' : 'right'} class="aspect-3/4">
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  widths={[400, 800, 1200]}
                  sizes="(min-width: 840px) 22vw, 45vw"
                  loading="lazy"
                  class="size-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </PanelWipe>
              <p class="t-service mt-5 text-[1rem] transition-colors duration-300 group-hover:text-rose">
                {tile.label}
              </p>
            </a>
          </Reveal>
        ))
      }
    </ul>
  </div>
</section>
```

**Step 2: Verify**

- [ ] Add `<ConcernTiles />` after `<Positioning />`.
- [ ] `npm run build` → 0. Confirm all four images processed into `dist/_astro/`.
- [ ] Confirm the tile → treatment mapping matches spec §6 exactly. Pigmentation → Lira, Acne → Procell, Barrier → DMK, Scalp → Keravive. A wrong link here sends the highest-intent traffic to the wrong page.
- [ ] **Confirm the Pigmentation and Barrier tiles show the images Part 1 Task 6 assigned**, not the ones the source filenames suggest. This is the reassignment ambiguity; verify visually, not by filename.
- [ ] Confirm every tile shows *resolved* skin. Any tile showing visible damage is wrong for this section regardless of image quality.
- [ ] 2 columns at 375px, 4 at 1400px, all four tiles a true 3:4 with no distortion.
- [ ] Scroll in: the blush panel wipes off each image, alternating direction. Confirm it reads as one deliberate move, not four competing ones — if it feels busy, drop the alternation and wipe all four from the left.
- [ ] Hover a tile: image scales to 1.05 over 1.5s, label shifts to rose. Confirm the rose is momentary punctuation.
- [ ] All four images are `loading="lazy"` with explicit dimensions. Confirm CLS is 0 in Lighthouse.
- [ ] Keyboard: each tile is one tab stop with a visible rose focus ring around the whole link.

- [ ] Commit: `Add concern-led tiles section`

---

## Task 4: Service data

Extracted before the menu is built because Part 3's treatment pages read the same rows. Two rows describing the same service is how a price drifts.

**What is verified and what is not:** the *names* come from spec §2's confirmed-services list. The three prices and durations come from §2's verified table. **Everything else — descriptions and category assignments — is written copy, not client-supplied fact.** Descriptions must be true of the modality generically and must not claim an outcome or a timeframe.

**Files:**
- Create: `src/data/services.ts`

**Step 1: Write it**

- [ ] Create `src/data/services.ts`. Order is spec §6's, deliberately putting high-value services at the top:

```ts
import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';

export const categories = ['Facials', 'Scalp', 'Advanced', 'Add-ons'] as const;
export type Category = (typeof categories)[number];

export interface Service {
  name: string;
  category: Category;
  /** Written copy. Generic to the modality; never claims an outcome or timeframe. */
  description: string;
  /** Only set where spec §2 verified it. Omitted otherwise — never estimated. */
  duration?: string;
  price: string;
  /** Set where a dedicated treatment page exists (Part 3). */
  href?: string;
}

const { 'hydrafacial-deluxe': deluxe, 'keravive-scalp': keravive, 'hydrafacial-express': express } =
  verifiedPrices;

/** Spec §6 §5 order: Deluxe → Keravive → Express → Procell → DMK → Lira → add-ons. */
export const services: Service[] = [
  {
    name: 'Deluxe HydraFacial',
    category: 'Facials',
    description:
      'Cleanse, extract and hydrate, with the boosters and LED your skin is actually asking for.',
    duration: deluxe.duration,
    price: deluxe.price,
    href: '/treatments/hydrafacial',
  },
  {
    name: 'HydraFacial Keravive',
    category: 'Scalp',
    description:
      'Corrective scalp therapy — cleanse, exfoliate and hydrate the scalp itself, not the hair.',
    duration: keravive.duration,
    price: keravive.price,
    href: '/treatments/keravive-scalp',
  },
  {
    name: 'Express HydraFacial',
    category: 'Facials',
    description: 'The core three steps, without the add-ons. A maintenance visit between corrections.',
    duration: express.duration,
    price: express.price,
    href: '/treatments/hydrafacial',
  },
  {
    name: 'Procell Microchanneling',
    category: 'Advanced',
    description: 'Controlled micro-injury with growth factors, for acne scarring and texture.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/procell-microchanneling',
  },
  {
    name: 'DMK Enzyme Therapy',
    category: 'Advanced',
    description: 'Enzymatic resurfacing that works with the skin’s own function to rebuild the barrier.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/dmk-enzyme-therapy',
  },
  {
    name: 'Lira Chemical Peels',
    category: 'Advanced',
    description: 'Professional peels selected for melanin-rich skin and pigmentation.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/lira-peels',
  },
  {
    name: 'First-Time Client Treatment',
    category: 'Facials',
    description: 'A full skin analysis and a first treatment, so the plan starts from your skin.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Back Facial',
    category: 'Facials',
    description: 'The same cleanse, extract and treat approach, for the back.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'LightStim LED',
    category: 'Add-ons',
    description: 'Targeted LED, added to any treatment.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Microcurrent',
    category: 'Add-ons',
    description: 'Low-level current to tone and lift, added to any facial.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Dermaplaning',
    category: 'Add-ons',
    description: 'Manual exfoliation that removes surface debris and vellus hair.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Compression Therapy',
    category: 'Add-ons',
    description: 'Added on for circulation and recovery.',
    price: PRICE_ON_CONSULTATION,
  },
];
```

**Note on memberships:** spec §2 confirms 6-month memberships exist, but a membership has no duration and no verified tier or price, so it cannot honestly render as a menu row. It is deliberately omitted here — **add "membership tiers and pricing" to `CLIENT-INPUTS.md`** (Part 3).

**Step 2: Verify**

- [ ] `npx astro check` (with the heap flag) → 0 errors.
- [ ] Count the rows: exactly three carry a `$` price and a `duration`; the other nine carry `PRICE_ON_CONSULTATION` and **no** `duration` key.
```bash
grep -c 'PRICE_ON_CONSULTATION' src/data/services.ts   # expect 10 (1 import + 9 uses)
grep -c 'duration:' src/data/services.ts               # expect 4 (1 interface + 3 uses)
```
- [ ] Read every description once more against the rule: no outcome, no timeframe, nothing that only the client could confirm.

- [ ] Commit: `Add shared service data`

---

## Task 5: Service menu (§5)

`--ivory`. Spec §6 calls this the conversion core. Lana's structure, Savanna's typography. **Text-only rows, no images** — it scans faster and lets high-value services sit at the top.

Category tabs filter in place with no page load. **All rows render in the HTML and are visible by default**, so the section is fully functional with JS disabled; the tabs are an enhancement that hides rows, never the thing that reveals them.

**Files:**
- Create: `src/components/sections/ServiceMenu.astro`
- Modify: `src/pages/index.astro`

**Step 1: Build it**

- [ ] Create `src/components/sections/ServiceMenu.astro`:

```astro
---
import { services, categories } from '../../data/services';
import { business } from '../../config/business';
---

<section class="bg-ivory">
  <div class="wrap section-y">
    <p class="t-eyebrow text-ink-soft">The menu</p>
    <h2 class="t-h2 mt-5">Treatments</h2>

    <div
      role="tablist"
      aria-label="Filter treatments by category"
      class="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-4"
    >
      <button
        type="button"
        role="tab"
        aria-selected="true"
        data-filter="all"
        class="t-eyebrow relative py-2 aria-selected:text-rose"
      >
        All
      </button>
      {
        categories.map((c) => (
          <button
            type="button"
            role="tab"
            aria-selected="false"
            data-filter={c}
            class="t-eyebrow relative py-2 aria-selected:text-rose"
          >
            {c}
          </button>
        ))
      }
    </div>

    <ul id="service-rows" class="m-0 list-none p-0">
      {
        services.map((s) => (
          <li data-category={s.category} class="border-b border-line">
            <div class="group grid grid-cols-1 items-baseline gap-y-2 py-7 transition-colors duration-[280ms] ease-out hover:bg-porcelain md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-x-10">
              <div class="min-w-0">
                <h3 class="t-service text-[1.125rem] md:text-[1.3125rem]">
                  {s.href ? <a href={s.href} class="hover:text-rose">{s.name}</a> : s.name}
                </h3>
                <p class="t-body mt-2 text-[0.9375rem] text-ink-soft">{s.description}</p>
              </div>

              {/* Only rendered where spec §2 verified a duration. */}
              <p class="t-meta md:text-right">{s.duration ?? ''}</p>

              <div class="flex items-center gap-6 md:justify-end">
                <p class="t-price whitespace-nowrap transition-colors duration-[280ms] group-hover:text-rose">
                  {s.price}
                </p>
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  class="t-button shrink-0 border-b border-ink pb-1 hover:border-rose hover:text-rose"
                >
                  Book
                  <span class="sr-only"> {s.name}</span>
                </a>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
</section>

<script>
  // Progressive enhancement: rows are visible in the HTML; tabs only hide.
  const tabs = document.querySelectorAll<HTMLButtonElement>('[role="tab"][data-filter]');
  const rows = document.querySelectorAll<HTMLElement>('#service-rows > li');

  const apply = (filter: string) => {
    rows.forEach((row) => {
      row.hidden = filter !== 'all' && row.dataset.category !== filter;
    });
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.filter === filter)));
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => apply(tab.dataset.filter!));

    // Arrow-key navigation, per the tablist pattern.
    tab.addEventListener('keydown', (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const next = tabs[(i + dir + tabs.length) % tabs.length];
      next.focus();
      apply(next.dataset.filter!);
    });
  });
</script>
```

**Step 2: Verify**

- [ ] Add `<ServiceMenu />` after `<ConcernTiles />`.
- [ ] `npm run build` → 0. `npm test` → **the price guard now has real work to do.** Confirm it passes and that only `$259`, `$349` and `$699` appear.
- [ ] Confirm the nine unpriced rows read exactly `Pricing at consultation.` and show **no duration at all** — not a dash, not "varies".
- [ ] Click each tab: rows filter without a page load, the active tab is rose, and `All` restores everything.
- [ ] Keyboard: `Tab` into the tablist, arrow keys move between tabs and filter as they go, focus ring visible.
- [ ] **Disable JavaScript and reload: all twelve rows are visible.** This is the check that the enhancement is layered correctly.
- [ ] Hover a row: background washes to porcelain, price shifts to rose, 280ms. Confirm the row-level `Book` link is present on **every** row (spec §6 §5).
- [ ] Screen reader: each `Book` link announces the service name via the `sr-only` span, so twelve identical "Book" links are distinguishable.
- [ ] At 375px confirm the row does not wrap into an unreadable stack — name, description, price, Book should still read as one row group.
- [ ] Confirm the top of the menu is Deluxe → Keravive → Express, matching spec §6.

- [ ] Commit: `Add tabbed service menu section`

---

## Part 2 is done when

- [ ] All nine sections render in spec §6 order with the exact fields from the rhythm table.
- [ ] `npm run build` → 0; `NODE_OPTIONS=--max-old-space-size=4096 npx astro check` → 0 errors, 0 warnings, 0 hints.
- [ ] `npm test` passes, including the new `FAQPage` schema assertions.
- [ ] Every interactive control — tabs, accordion, before/after slider — is fully keyboard-operable and works with JS disabled.
- [ ] Lighthouse mobile on the finished homepage: Performance ≥ 95, Accessibility ≥ 95, SEO = 100.
- [ ] Reviewed on an actual phone, not just a devtools preset. Spec §1 says the client reviews on her phone; that is the acceptance surface.
- [ ] Rose is visibly punctuation, not a wash, on every screen.
