# KIAMO Skin — Website Design Spec

**Date:** 2026-07-30
**Client:** KIAMO Skin & Scalp Health — Kiarra "Kiki" Michaux, San Diego CA
**Deliverable:** Demo marketing website (pitch asset for a website + local SEO package)
**Status:** Approved for implementation

---

## 1. Purpose & Success Criteria

Build a demo website convincing enough to close a website + local SEO engagement. The client is design-led ("she loves good looking websites") and will review **on her phone**, so mobile fidelity is the primary acceptance surface.

Success criteria:

1. Client reaction on mobile is "this looks expensive." Reads as bespoke, not templated.
2. Every service row has a working booking path into her real Vagaro account.
3. Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95, SEO = 100.
4. Valid `LocalBusiness` schema with correct Mission Hills NAP, verifiable in Google Rich Results Test.
5. Zero fabricated business facts rendered on the site.

Explicit non-goals: no CMS, no real payment/booking backend, no email capture backend, no analytics.

---

## 2. Verified Business Facts

Everything in this section is research-confirmed and may be published. Anything not listed here is **not** to be invented.

| Field | Value |
|---|---|
| Brand | KIAMO Skin & Scalp Health |
| Owner | Kiarra "Kiki" Michaux — Licensed Esthetician, CA Board of Barbering & Cosmetology |
| Experience | 5+ years (per her own site) |
| Address | 3067 Reynard Way, San Diego, CA 92103 |
| Neighborhood | Mission Hills (relocated May 2025) |
| Geo | 32.73740, -117.16960 |
| Phone | (310) 595-0872 |
| Email | kiamoskin@gmail.com |
| Booking | https://www.vagaro.com/us02/kiamoskin (request-based) |
| Instagram | @kiamoskin |
| Positioning | Acne, scarring + pigmentation specialist; melanin-rich skin + barrier health |
| Ownership | Black-owned business (self-declared) |
| Parking | Free parking |
| Policy | 48hr notice; <24hr = 50% charge; no-show = 100% |

### Verified pricing — publish exactly

| Service | Duration | Price |
|---|---|---|
| Express HydraFacial | 60 min | $259 |
| Deluxe HydraFacial | 90 min | $349 |
| HydraFacial Keravive (scalp) | 60 min | $699 |

All other services render **"Pricing at consultation."**

### Services confirmed to exist, price unknown

DMK Enzyme Therapy · Lira Peels · Procell Microchanneling · LightStim LED · Microcurrent · Dermaplaning · Back Facial · Compression Therapy · First-Time Client Treatment · 6-month memberships

### Brand voice — her verbatim words, usable as copy

- "This isn't just a 'spa facial.' This is strategy, correction, intention."
- "Relaxing always, but results come first."
- "This isn't a shampoo. It's corrective scalp therapy."
- "Long-term results — not quick fixes."
- "Education, intention, and consistency are at the core of everything we do."
- "Your scalp is telling you that it needs support. Listen to it."
- "Trust the process. Your skin CAN heal."
- "Skin doesn't change overnight, but when you stay committed and take care of it properly, it will respond."

Register: **clinical but kind.** Educational, anti-hype, warm, explicitly inclusive. Not spa-luxury, not woo-holistic.

### Hard constraints

- **Del Mar location is CLOSED.** The Del Mar address must appear nowhere. Her current live site still publishes it (with a typo) — this is a pitch point, not content.
- **Do not display any star rating.** Yelp's 15 reviews are all filtered as "not recommended"; Vagaro has zero. Testimonials are attributed plainly (`— Katarina L., Yelp`) with no stars, no aggregate, and **no `AggregateRating` in schema**.
- **Kiki's pronouns are not published.** All copy is written pronoun-free ("Kiki brings five years…"). Never guess.
- **Never print a surname** — "Michaux" (Vagaro) conflicts with "Brown" (an unverified LLC record). Public-facing name is "Kiki."
- CTAs say **"Request Appointment"**, never "Book Instantly" — Vagaro is request-based.

---

## 3. Tech Stack

**Astro 7 · Tailwind CSS v4 · GSAP 3 + ScrollTrigger · Lenis · @astrojs/sitemap · Cloudflare Pages**

Versions verified live on 2026-07-30 and confirmed to build together in a throwaway probe project: `astro@7.1.6`, `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3`, `gsap@3.15.0`, `lenis@1.3.25`, `@astrojs/sitemap@3.7.3`. Node 24.18.0.

Rationale — chosen specifically because this is a local SEO play:

- **Zero JS by default.** Core Web Vitals are ranking signals and the local pack is mobile-first. This is where competing Squarespace/Wix beauty sites lose.
- **Static output.** Instant TTFB, free hosting, nothing to maintain.
- **Content collections.** Treatments and journal articles as typed markdown with schema-validated frontmatter.
- **`astro:assets`.** Automatic AVIF/WebP with responsive `srcset` — critical given high-res AI imagery.
- **Islands.** GSAP ships only on animated components, so motion costs nothing on static sections.
- **Full head control.** Hand-authored JSON-LD; Squarespace actively fights this.

Lenis is capped to desktop only — native iOS momentum scrolling beats any JS smoothing, and smooth-scroll libraries degrade INP on mobile.

---

## 4. Design System

### 4.1 Color

Two fixed inputs: the logo (deep rose mark on blush) and the photography grade in `image-prompt.md` (ivory/terracotta highlights, charcoal shadow, sage accent).

**Blush and ivory alternate down the page.** Blush carries the brand and keeps the site unmistakably KIAMO; ivory gives the eye somewhere to rest and keeps it reading expensive rather than sweet. Neither dominates — the rhythm is what makes it feel considered. Rose stays punctuation, never a wash, which is how the reference sites achieve luxury (Savanna Boda uses its dusty rose almost exclusively on interaction states).

**Governing rule: terracotta `#C98B6E` and sage `#9CA98C` are photographic colors, not UI colors.** They live inside images only, so image highlights resolve to the same ivory as the fields behind them.

```css
--ink:        #2B2B29;  /* all type — charcoal, exact match to photo shadow */
--ink-soft:   #6B655C;  /* secondary text, durations */
--porcelain:  #FDFBF7;  /* page bg — warm off-white, never #fff */
--blush:      #FBEDEF;  /* brand field — logo background */
--ivory:      #F3EDE4;  /* rest field — exact match to photo highlight */
--rose:       #A33B52;  /* brand accent — prices, links, CTA */
--rose-deep:  #7C2A3C;  /* button hover */
--espresso:   #221F1D;  /* footer */
--line:       #E3DACE;  /* hairlines */
```

Contrast: `--ink` on `--porcelain` ≈ 14.2:1, on `--blush` ≈ 13.1:1, on `--ivory` ≈ 12.6:1. `--rose` on `--porcelain` ≈ 6.9:1, on `--blush` ≈ 6.4:1, on `--ivory` ≈ 6.1:1. All pass AA for text and UI.

### Field rhythm

Section backgrounds alternate so no two adjacent sections share a field:

| Section | Field |
|---|---|
| 1 Header (past hero) | `--porcelain` |
| 2 Hero | full-bleed image |
| 3 Positioning | `--blush` |
| 4 Concern tiles | `--porcelain` |
| 5 Service menu | `--ivory` |
| 6 Meet Kiki | `--blush` |
| 7 Reviews | `--porcelain` |
| 8 San Diego context | `--espresso` |
| 9 FAQ + Location | `--ivory` |
| 10 Footer | `--espresso` |

Three blush fields, two ivory, two porcelain, two espresso. The brand color is present throughout without any one screen being saturated in it.

**Rose budget: under 5% of any viewport** — prices, CTA pill, link hover, active tab underline. Nowhere else.

**Rule: image overlay opacity is always 0.** Photography is never muddied.

### 4.2 Typography

**Cormorant Garamond** (300/400, display) + **Jost** (300/400/500, UI & body), served via Astro 7's native Fonts API with `fontProviders.fontsource()` — self-hosted, subsetted, auto-optimized fallback metrics. Display face preloaded; body face not.

Cormorant echoes the wordmark's high-contrast Didone bones. Jost holds up at 11px under heavy tracking. Deliberately avoiding Playfair + Inter — the signature of a template.

| Role | Size | Weight | Tracking | Case |
|---|---|---|---|---|
| Hero | `clamp(2.5rem, 6.5vw, 4.5rem)` | Cormorant 300 | `-0.01em` | Sentence |
| H2 | `clamp(1.75rem, 4vw, 2.5rem)` | Cormorant 300 | `-0.005em` | Sentence |
| H3 | `1.25rem` | Cormorant 400 | `0` | Sentence |
| Service name | `1.3125rem` | Jost 400 | `0.02em` | UPPERCASE |
| Body | `1rem → 1.0625rem` | Jost 300 | `0.01em` | Sentence, `lh 1.65`, `max-w 62ch` |
| Eyebrow | `0.6875rem` | Jost 500 | `0.22em` | UPPERCASE |
| Button | `0.75rem` | Jost 500 | `0.16em` | UPPERCASE |
| Price | `0.9375rem` | Jost 400 | `0.02em` | — |
| Meta/duration | `0.75rem` | Jost 300 | `0.08em` | UPPERCASE |

The core luxury mechanic, borrowed from Savanna Boda: **headings stay light and sentence-case; 11px uppercase at `0.22em` does all the signalling.** Inverts the usual giant-hero-headline move.

### 4.3 Spacing & layout

8px base. Section padding `112px` mobile → `176px` desktop. Content max-width `1240px`, prose `62ch`. Gutters `20px` → `40px`. Breakpoints: `640 / 840 / 1200`.

### 4.4 Components

- **Button primary** — pill `999px`, bg `--rose`, text `--porcelain`, `14px/32px`; hover → `--rose-deep`, `translateY(-1px)`, 300ms
- **Button ghost** — 1px `--ink` border, transparent; hover inverts to `--ink` bg
- **Service row** — full-width hairline-separated row; hover washes bg to `--ivory` and shifts price to `--rose`, 280ms
- **Concern tile** — 3:4 image, ivory panel wipe on reveal, caption below
- **Focus** — 2px `--rose` outline, 3px offset. Never removed.

---

## 5. Site Architecture

12 route definitions → 13 rendered pages (the journal `[slug]` route produces 2 articles):

| Route | Title target |
|---|---|
| `/` | KIAMO Skin \| Corrective Facials & Scalp Health, San Diego |
| `/treatments` | Treatments \| HydraFacial, DMK & Scalp Therapy, San Diego |
| `/treatments/hydrafacial` | HydraFacial San Diego \| Express & Deluxe |
| `/treatments/keravive-scalp` | HydraFacial Keravive Scalp Treatment \| San Diego |
| `/treatments/dmk-enzyme-therapy` | DMK Enzyme Therapy \| San Diego |
| `/treatments/procell-microchanneling` | Procell Microchanneling \| Acne Scarring, San Diego |
| `/treatments/lira-peels` | Lira Chemical Peels \| Pigmentation, San Diego |
| `/about` | About Kiki \| Licensed Esthetician, Mission Hills |
| `/book` | Request an Appointment \| KIAMO Skin |
| `/contact` | Visit KIAMO Skin \| Mission Hills, San Diego |
| `/journal` | Journal \| San Diego Skin Notes |
| `/journal/[slug]` | (2 articles) |

Individual treatment pages are the primary SEO engine — they rank for "hydrafacial san diego" and "scalp treatment near me," which a homepage alone cannot.

---

## 6. Homepage — 10 Sections

**1. Sticky header** — 60px, transparent over hero → `--porcelain` + hairline past 80px. Logo left. Hamburger **at every breakpoint** (Savanna's restraint move). One solid rose pill: `REQUEST APPOINTMENT`. Menu is a full-screen `--blush` overlay, links stagger in at 60ms.

**2. Hero** — full-bleed, separate mobile crop (9:16) and desktop crop (16:9), zero overlay.
- Eyebrow: `SAN DIEGO · MISSION HILLS`
- H1: *Skin that behaves like itself again.*
- Sub: *Corrective facials and scalp therapy for acne, scarring and pigmentation — built around how your skin actually functions.*
- CTA: `REQUEST APPOINTMENT` + ghost `VIEW TREATMENTS`

**3. Positioning** — `--blush`, centered, 765px max. Her voice verbatim:
> "This isn't just a spa facial. This is strategy, correction, intention. Every step has a purpose. Every product has a reason. Relaxing always — but results come first."

**4. Concern-led tiles** ⭐ — `--porcelain` field. Four 3:4 tiles, 2-col mobile / 4-col desktop. Each links to the treatment page that resolves it:

| Tile | Links to |
|---|---|
| Pigmentation & Melasma | `/treatments/lira-peels` |
| Acne & Scarring | `/treatments/procell-microchanneling` |
| Barrier & Dehydration | `/treatments/dmk-enzyme-therapy` |
| Scalp Health | `/treatments/keravive-scalp` |

*Rationale: this is the one addition beyond both references. People search by concern, not treatment name. It serves as both SEO entry layer and conversion funnel, and it directly encodes the `local_seo_info` findings.*

**5. Service menu** ⭐ — `--ivory`. The conversion core. Lana's structure, Savanna's typography.
- Category tabs: `FACIALS · SCALP · ADVANCED · ADD-ONS` — filter in place, no page load
- **Text-only rows, no images** (scans faster; lets high-value services sit top)
- Each row: uppercase name · one-line description · duration · price · **`BOOK` on every row**
- Order: Deluxe HydraFacial → Keravive → Express HydraFacial → Procell → DMK → Lira → add-ons

**6. Meet Kiki** — `--blush`, asymmetric split. Portrait left (3:4), copy right. Five-plus years, CA state licensed, melanin-rich skin and barrier health specialism, Black-owned. Pronoun-free throughout. CTA → `/about`.

**7. Results & words** — `--porcelain`. Two parts:

- **Before/after slider** ⭐ — draggable divider over a matched pair, defaulting to 55% so both states are visible at rest and the control is self-evident. Two pairs, switchable by label (Pigmentation · Scalp). Keyboard-operable (arrow keys move the divider, `role="slider"` with `aria-valuenow`), touch-draggable, and functional without JS — CSS-only fallback shows the "after" frame with a static caption.
- **Testimonials** — three quotes, large Cormorant 300, plainly attributed (`— Katarina L., Yelp`). No stars, no aggregate, no schema rating.

*Rationale: this is the highest-value section on the page for a corrective-results studio, and it is the honest place for "before" imagery — a matched pair is a verifiable claim, where a lone damaged-skin close-up is just unpleasant. Every image must carry a "Results vary" disclaimer near the slider, and the demo pairs are AI-generated illustrations, which `CLIENT-INPUTS.md` flags for replacement with her real consented client photos before launch.*

**8. San Diego skin context** ⭐ — `--espresso`, light type. Three columns from `local_seo_info`:
- **June Gloom is not sun protection** — UV 8–10 through the marine layer
- **Very hard water, 16 grains per gallon** — mineral film, buildup, scalp flaking
- **Santa Ana season** — sudden barrier collapse and dehydration

Each links to a journal article. No competitor in her market has this — it is the clearest demonstration of the SEO half of the package.

**9. FAQ + Location & Hours** — `--ivory`. Six-item accordion (`FAQPage` schema) + real NAP block, correct Mission Hills address, free parking, by-appointment-only, cancellation policy, static map image linking to Google Maps.

*Note: Lana's reference site still ships San Francisco placeholder data here. Doing this properly is free competitive ground.*

**10. Footer** — `--espresso`. Logo, NAP, hours, treatment links, Instagram, repeat CTA.

**Mobile sticky book bar** — 56px, fixed bottom, appears past hero, `env(safe-area-inset-bottom)`. Neither reference has one; it is the highest-leverage mobile conversion element available.

---

## 7. Treatment Page Template

Hero (name, duration, price, CTA) → What it is → Who it's for → What happens, step by step → Results timeline → Aftercare → San Diego context block → Related treatments → FAQ → CTA.

Each carries `Service` + `FAQPage` + `BreadcrumbList` schema.

---

## 8. SEO Implementation

**Schema** — `LocalBusiness` + `MedicalBusiness` on every page: real NAP, geo coordinates, `openingHoursSpecification`, `priceRange: "$$$"`, `areaServed` (Mission Hills, Hillcrest, Bankers Hill, Little Italy, North Park, Pacific Beach, La Jolla), `hasOfferCatalog`, `sameAs` (Instagram, Vagaro, Yelp). **No `AggregateRating`.**

**Per-page** — unique title ≤60ch and description ≤155ch, canonical, OG + Twitter cards with generated 1200×630 images, `sitemap.xml`, `robots.txt`.

**Performance** — hero preloaded as AVIF with WebP fallback; display font preloaded via `<Font preload />`; all below-fold images `loading="lazy"` with explicit dimensions to hold CLS at 0; GSAP dynamically imported per island.

**Accessibility** — semantic landmarks, single h1, visible focus, keyboard-navigable tabs/accordion/menu, `prefers-reduced-motion` disables all transforms, 44px minimum touch targets.

---

## 9. Motion

GSAP + ScrollTrigger, islands only. Deliberately restrained — "a bit less going on" means cutting amplitude, not adding polish.

| Element | Behavior |
|---|---|
| Signature: **panel wipe** | `--blush` panel slides off images on scroll-in, 900ms `power3.inOut` — echoes the logo field |
| Heading reveal | Line-mask, `y: 100%` → `0`, 800ms, 80ms stagger |
| Section fade | `y: 24px` → `0`, 600ms `cubic-bezier(0,0,.3,1)` |
| Hero | Ken-burns `scale 1 → 1.06` over 20s |
| Service row hover | bg → `--ivory`, price → `--rose`, 280ms |
| Image hover | `scale 1.05` over 1.5s |
| Sticky bar | Slide up past hero, 400ms |

**Excluded:** marquees, cursor effects, parallax stacking, page transitions, counters, horizontal scroll. All motion is `transform`/`opacity` only. `prefers-reduced-motion: reduce` → everything becomes an instant opacity swap.

---

## 10. Imagery

No usable real photography exists. Her Instagram is predominantly vertical Reels video, and its CDN URLs are signed and expire within hours — so even the still frames are neither high-resolution nor licensable as production assets. Attempting to mix them with generated imagery would produce visibly inconsistent quality, which is the single fastest way to make a site read as cheap.

**Decision: 100% AI-generated for the demo. No mixed sources.** One consistent grade across every image. Real photography — and real consented client before/afters — are post-signing deliverables, flagged in `CLIENT-INPUTS.md`.

**Balance: aspiration on the surface, honesty in the proof.** Concern tiles show the *resolved* state, with the tile label carrying the concern — a tile reading "Acne & Scarring" over clear skin says "we get you here." Visible damage appears only in the before/after pairs, where a matched comparison is a truthful claim structure rather than a grim close-up. An earlier draft rendered damage across all four tiles and read like a dermatology textbook instead of somewhere you'd book.

Direction — **led by melanin-rich skin**, since her specialism is Black and brown skin and generic white-spa stock would actively contradict her positioning:

- Warm natural light, soft directional shadow, San Diego coastal quality
- Editorial, not stock — asymmetric crops, negative space, a single subject
- Skin texture visible and real: pores, fine hair, natural sheen. No plastic retouching, no airbrushed uniformity
- Deep and medium tones render with true undertone — never ashy, never orange
- Muted warm palette that sits beside `--ivory` and `--porcelain`
- No overlays, no duotone, no lens flare, no visible branding or text

17 images required. The locked style block lives in `image-prompt.md`; per-scene prompts, ratios and acceptance status live in `IMAGE-SCENES.md`.

Hero desktop 16:9 · hero mobile 9:16 · 4 concern tiles 3:4 · Kiki portrait 3:4 · studio interior 16:9 · 3 treatment details 4:3 · 2 journal headers 16:9 · 4 before/after frames 1:1.

Each generated image is placed against the live design and rejected if it reads as stock. Consistency of grade across the set matters more than any single image being perfect.

---

## 11. Deliverables

1. Astro site, 12 routes, production build clean
2. `IMAGE-SCENES.md` — 17 numbered scenes with ratios, target filenames and acceptance status (already written; style block lives in `image-prompt.md`)
3. `CLIENT-INPUTS.md` — every unverified field she must confirm: full Vagaro menu with prices, membership tiers, first-time-client price, current phone number, hours, suite number, pronouns, Google Business Profile status, and real consented client before/after photos to replace the AI-generated demo pairs
4. `README.md` — run, build, deploy
5. `PITCH-NOTES.md` — the SEO findings that justify the engagement: dead Del Mar address still live on her site, suppressed Yelp reviews, no service pages, no schema, no local content

---

## 12. Risks

| Risk | Mitigation |
|---|---|
| Fabricated fact reaches the client | Only §2 facts are publishable; everything else is "Pricing at consultation" and logged in `CLIENT-INPUTS.md` |
| AI imagery looks generic | Melanin-rich, editorial-specific prompts; texture over gloss; every image checked against the live design and regenerated if it reads as stock |
| Inconsistent image quality | Single generated source for all 17 images — no mixing with low-res Instagram frames |
| Motion degrades mobile INP | Islands only, transform/opacity only, Lenis desktop-only |
| Client sees the wrong address | Del Mar appears nowhere; verified Mission Hills NAP is single-sourced in one config file |
| Star rating implied | No stars, no aggregate, no `AggregateRating` — plain attribution only |
