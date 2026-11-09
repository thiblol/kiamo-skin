# AI Citation Content Programme — P4 to P8

> **Read this before starting.** It is the handoff for the remaining content
> pieces in the AI-citation programme. P1, P2 and P3 are built and tested.
> This file states what is left, what the research says, and the rules the
> guard suite enforces.

**Goal:** get KIAMO Skin cited by AI assistants for facial queries in San
Diego — as a *source* the answer is built from, and eventually inside the
entity list itself.

**Programme status:** Phase 1 shipped 2026-11-09. P1, P2 and P3 are live in
the repo. P4–P8 are specified below but not built.

---

## What is already built (do not rebuild)

| Piece | URL | Shape |
|---|---|---|
| **P1** market comparison | `/facial/best-facial-san-diego/` | 9 studios, table-first, byline + dates, Sources & references, related-guides cluster, ItemList + Article + FAQPage schema |
| **P2** price article | `/journal/how-much-does-a-facial-cost-san-diego/` | 2,412 words, 2 price tables, 36 attributed figures, Sources & references |
| **P3** dark-skin comparison | `/facial/facial-for-melanin-rich-skin-san-diego/` | 7 studios, table-first, 19 attributed figures |

Supporting code:

- `src/data/third-party-facts.ts` — **the single source of truth for every
  third-party figure on the site.** Two studio lists (`studios` for the
  market table, `darkSkinStudios` for the segment table) plus two market-rate
  entries. Every entry carries a price source, a rating source and a
  `checkedOn` date.
- `src/components/StudioComparisonTable.astro` — the table. Takes a `studios`
  array, a `caption` and a `comparison` footnote.
- `src/data/facial-cost-article.ts` — P2, kept separate from `articles.ts`
  because it is the one piece carrying third-party figures.
- `test/third-party-guards.test.js` — the guard suite for third-party facts.

---

## The rules the guard suite enforces

These are not optional. `npm test` fails the build on any of them.

1. **Fidelity.** Every third-party figure on a page must match
   `third-party-facts.ts` exactly. A price that was never read at source
   cannot reach a reader.
2. **Attribution.** A third-party figure only appears inside an element
   carrying `data-fact-source`, `data-fact` and `data-fact-value`. The
   visible text and the attribute must be the same string.
3. **Coverage.** Every studio in the data file appears on a comparison page.
   No page names a studio the file does not have.
4. **Freshness.** No figure older than `MAX_AGE_DAYS` (60). The build fails
   when figures go stale. **This is a nag, not an outage** — re-read from the
   source URLs and bump `checkedOn`.

To publish a new competitor fact: **add it to `third-party-facts.ts` first**,
then render it. A price typed straight into a page fails the build.

### Markup contract

```astro
<span
  data-fact-source="studio-key"
  data-fact="price"          <!-- price | rating | count | note -->
  data-fact-value="$179"
>
  $179
</span>
```

The element must be a `<td>` or a `<span>`, and its inner text must be the
figure with no nested tags.

For journal table cells the cell must use the object form, because cells
render as escaped text:

```ts
{ text: '$179', source: 'studio-key', fact: 'price' }
```

---

## Live AI findings (measured 2026-11-09)

Pull these again before building P4–P8 — they may have moved, and the whole
programme is built on them.

**KIAMO already wins the concern-modifier queries:**

| Query | KIAMO position | AI cites |
|---|---|---|
| best facial spa for dark skin in San Diego | **#1** | `/about/`, `/melanin-rich-skin/`, `/` |
| facial for melasma in San Diego | **#1** | `/treatments/melasma/` |
| best facial for hyperpigmentation in San Diego | **#1** | `/treatments/melasma/` |
| black owned facial spa san diego | **#1** | `/about/` |

**KIAMO is absent from the generic query:**

| Query | Result |
|---|---|
| best facial spa in San Diego | absent from the entity list |
| best facial san diego | absent from the entity list |
| best facial san diego reviews | absent — 6 competitors listed, 332–556 reviews each |

**Why:** the generic query's entity list is built from Google Business
Profiles and ranked by review volume. KIAMO has 41 reviews at 5.0; every
studio AI lists has 82–698. **No content fixes this** — it needs GBP review
acquisition. What content wins is being cited as the *source* of the
comparison, which is the position facialfinders.com and nobsmedspareviews.com
hold. That is the position P1–P3 are built to take.

**Two different competitor sets.** AI answers the two segments from different
businesses, with **no overlap**:

- General market → Kiwi Spa, Skyn Alchemy, Honest Skin, Vasseur, Skin Habit,
  Spa Kingston, Peel Simply, Rose + Honey
- Dark-skin segment → Onyeka Tefari, The Formula Skin Lab, The Derma Lab,
  Mixed Esthetics, Monet Esthetics, Sandalwood Skin, Sculpt by Rind

**Always check which studios AI actually names for the specific query before
building a table.** Do not reuse the previous page's list.

---

## What the AI-cited pages have that ours must also have

Fetched and compared 2026-11-09 against facialfinders.com,
nobsmedspareviews.com and thesandiegolist.com.

1. **Byline with credentials + published and last-updated dates.** P1 and P3
   have them. The dates are the freshness signal.
2. **"Sources & references"** — a link per source figure. Makes the page a
   citable source rather than a claim. P1 and P2 have it.
3. **An internal-link cluster** to related guides. Tells a crawler the page
   is the centre of a topic. P1 has a "Related guides" block.
4. **"How we picked" methodology.** P1 has it.
5. **A price column.** The one thing every cited page has and most studio
   pages do not.

Not copied: nobsmedspareviews has an "AI share" block with pre-formatted
ChatGPT/Perplexity/Claude/Gemini URLs. It is a directory CTA and on a studio's
own page it reads as a gimmick.

---

## P4 — PIH and Fitzpatrick explainer

**Target:** `dark spot removal` — **12,980/mo AI**, the highest AI number in
the dataset, and `skin lightening treatment` (400/mo national, KD 9).

**Why:** AI currently answers "dark spot removal" with **dermatology clinics
only** — UC San Diego Health, La Jolla Cosmetic Laser, Scripps, Dr Rullan. An
esthetician studio is not in that answer at all. But ChatGPT's own answer
carries a caveat it cannot source: *"If you have melasma or darker skin,
avoid booking aggressive IPL, lasers or strong peels without a dermatologist
assessing your skin first. These can sometimes make pigmentation worse."*
That caveat is the opening. It is the esthetician-side, dark-skin-specific
reality, from a practitioner who has done it thousands of times — the thing no
dermatology page and no directory page carries.

**Where:** `/treatments/hyperpigmentation/` already exists at 2,056 words with
**no tables and no FAQ schema**. Rework it rather than adding a page — it is
the assigned page in the keyword map and it currently owns none of the
citation furniture.

**Shape:** 2,000–2,400 words. Lead with the PIH mechanism (why inflammation
becomes pigment), then the Fitzpatrick table, then what a corrective plan
looks like. Add a table — the page has none.

**Also check:** `skin lightening treatment` (400/mo national, KD 9) is
assigned to the same page. The keyword map flags "the wording carries risk" —
it is a claim about skin tone. Read `why_winnable` in the map before using
this phrasing.

---

## P5 — Modality comparison

**Target:** `facial treatment` (3,751/mo AI) and the decision-table intent.

**Why:** AI answers "facial treatment" with a list of modalities and no
explanation of when each is wrong. A page that maps concern → modality → what
it costs is the shape AI lifts.

**Where:** new page, or fold into `/facial/`. Check the keyword map before
creating a URL — `facial treatment` is assigned to `/facial`, and the site
already has 35 area-variant pages, so a new URL has to earn itself.

**Shape:** 1,800–2,200 words. Four modalities, each with what it treats, what
it costs, what it does not treat, and the Fitzpatrick note.

---

## P6 — First-visit how-to

**Target:** first-visit and consultation intent. The differentiator is the
process, not the price.

**Why:** KIAMO's four modalities are selected after an assessment rather than
run from a fixed menu. That is a genuine, explainable difference from every
studio in the comparison tables, and it is the reason the $249 sits above the
market rate.

**Shape:** 1,200–1,600 words. Step-by-step, with a HowTo schema block (the
schema component already exists at `src/components/schema/HowToSchema.astro`).

---

## P7 — San Diego climate pillar

**Target:** the topical-authority cluster, and the freshness engine for the
whole programme.

**Why:** KIAMO's climate content is unique — no competitor covers June Gloom,
hard water or Santa Ana winds. It also makes the rest of the site citeable as
a *source* on local conditions.

**Existing assets to consolidate, not rewrite:** `june-gloom-is-not-sun-protection`,
`san-diego-hard-water-and-your-scalp`, `san-diego-scalp-treatments-how-keravive-works`.

**Shape:** 2,000–2,400 words, one dated pillar with the three as supporting
pieces cross-linked to it.

---

## P8 — Freshness cycle

Not a page. A recurring task, and the highest-leverage item in the whole
programme — **79.1% of LLM-cited pages were updated within the current year**
(Ahrefs, 26,283 cited URLs).

**Monthly:** re-read every figure in `third-party-facts.ts` from its source
URL, bump `checkedOn`, and update the visible date on P1 and P3.

**Quarterly:** re-check the competitor SET for each query. Studios enter and
leave the AI answer, and a stale set is worse than a short one.

**Anchors in the existing content:** every page that quotes a year needs it
updated. "Best Facial Spas in San Diego (2026)" goes stale in January.

---

## Watch out for these

- **Astro renders `{cond && (<span/>)}` as empty.** The `&&` form silently
  produces nothing. Use a ternary.
- **Third-party figures must not appear in a standfirst or meta
  description.** They spread to the homepage and journal index where they
  cannot be attributed. Keep them in the body.
- **The `t-meta` class uppercases text.** A case-sensitive check for
  "By Kiki" will miss it.
- **`business_listings_search` needs an EXACT Google Business title.**
  "Honest Skin" returns nothing; "Honest" returns a business in Washington.
  The location filter does not work — filter by parsing the results.
- **Use the direct Google Business API for ratings, not the AI's cached
  cards.** They disagree materially: Kiwi Spa reads 430 direct vs 698 in the
  card; Peel Simply 115 vs 556. The direct figure is current.
- **Do not put competitor ratings or review counts in JSON-LD.** The guard
  forbids `aggregateRating`, `ratingValue` and `reviewCount` site-wide, and
  marking up another business's reviews is wrong regardless. Table text
  only.
- **Never state a competitor's price as current without the date.** Every
  table carries its read-date for this reason.

---

## Method, for the next session

1. Pull the live AI answer for the target query first. The competitor set and
   the cited pages come from there, not from the previous page.
2. Fetch the pages AI cites for that query. Diff their structure against ours.
   Whatever they have that we do not is the work.
3. Write the figure into `third-party-facts.ts` before writing the page.
4. Build the page with the markup contract.
5. `npm test` — all four suites must pass. `npm run build` must be clean.

Verify with `npx astro check` — 41 errors are the pre-existing baseline
(confirmed against a stashed tree on 2026-11-09). Do not introduce new ones.

---

## Research references

- `local_seo_info/keyword-map.csv` — 180 keywords with AI search volume,
  live rankings and page assignments. **Gitignored** — it is local research
  data and is deliberately not committed.
- `local_seo_info/keyword-research-data.md` — the writeup behind the map.
- `local_seo_info/strategy.md` — the reverse-engineered local SEO strategy.
- `src/data/third-party-facts.ts` — the third-party figure registry, with
  every source URL and read-date.
