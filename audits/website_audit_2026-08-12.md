# KIAMO Skin — Local SEO Audit
**Date:** 2026-08-12 | **Site:** kiamoskin.com | **Location:** Mission Hills, San Diego CA 92103

---

## Coverage Verdict: 🟡 YELLOW — Minor gaps. Fix indexation first, then optimize.

The site has all 6 treatment pages and 9 service-area pages built. Structure is solid. The blocker right now is that **15 of 20 money pages are not indexed** — Google has found them but chosen not to index them yet. This is an authority problem, not a content problem. The priority order is:
1. Fix GBP website URL → kiamoskin.com (5-min fix, direct authority signal)
2. Build backlinks to break the 30-domain ceiling
3. Optimize the 2 area pages Google doesn't know exist yet (chula-vista, la-mesa)
4. Schema gaps (openingHours + aggregateRating)

---

## 1. Indexation

| Status | Pages |
|---|---|
| ✅ Indexed | / , /treatments/ , /treatments/hydrafacial/ , /melanin-rich-skin/ , /membership/ |
| ⚠️ Discovered – not indexed | /treatments/dermaplaning/ , /treatments/dmk-enzyme-therapy/ , /treatments/keravive-scalp/ , /treatments/lira-peels/ , /treatments/procell-microchanneling/ , /service-areas/ , /service-areas/la-jolla/ , /service-areas/pacific-beach/ , /service-areas/north-park/ , /service-areas/mission-hills/ , /service-areas/del-mar/ , /service-areas/encinitas/ , /service-areas/carlsbad/ |
| ❌ URL unknown to Google | /service-areas/chula-vista/ , /service-areas/la-mesa/ |

**Root cause:** "Discovered – not indexed" = Google found the URLs (via sitemap/internal links) but hasn't crawled them yet due to low domain authority. The site has only 30 referring domains, all recently acquired. Google is prioritising the homepage and a handful of strong pages. This is an authority/crawl-budget problem — not a content problem.

**The two unknowns** (chula-vista, la-mesa) were added in the recent batch and haven't been submitted/re-sitemapped properly yet.

**What's NOT the problem:** Internal linking is fine — every page links to every other page via the nav. Titles, meta, H1s are all clean (zero issues detected). No noindex, no redirect anomalies, no canonical mismatches.

---

## 2. Authority Gap

| Domain | Referring Domains | Backlinks | DFS Rank |
|---|---|---|---|
| **kiamoskin.com** | **30** | **31** | **0 (unranked)** |
| drnowak.com (ranks #1 keravive SD) | 378 | 640 | 200 |
| skynalchemy.co (ranks #3 keravive SD) | 71 | 2,852 | 248 |
| lajollalaser.com (ranks #2 keravive SD) | 243 | 1,034 | 252 |
| botoxie.co (ranks organically) | 96 | 158 | 146 |

**Gap:** You're at 30 referring domains vs. the weakest organic competitor at 71, and #1 at 378. Skyn Alchemy at 71 RDs outranks you — that's the near-term target. Getting to ~70 clean referring domains should unlock indexation on the treatment pages and push keravive/hydrafacial rankings into page 1.

**Backlink quality issue:** Of your 30 referring domains, the top 10 by recency are almost all spam-score 50–75 (URL shorteners, scraper directories, foreign blogs). You have no authority links from local San Diego sources, beauty industry publications, or supplier sites.

---

## 3. Google Business Profile

| | |
|---|---|
| Name | KIAMO SKIN – Scalp Treatments Keravive, Hydrafacial & Custom Facial treatments |
| Category | Skin care clinic |
| Additional categories | Beauty salon, Facial spa, Medical spa, Hair replacement service, Hair transplantation clinic |
| Rating | ⭐ 5.0 / 33 reviews (all 5-star) |
| Photos | 16 |
| Claimed | ✅ Yes |
| Hours set | ✅ Yes |
| **Website URL on GBP** | ❌ **vagaro.com/kiamoskin** — NOT kiamoskin.com |
| GBP Booking URL | Not set via GBP booking integration |
| GBP Messaging | 0 conversations — turned off or not used |

**Critical GBP finding — website URL mismatch:** The GBP currently points to vagaro.com instead of kiamoskin.com. This means:
- Zero website-click authority passes to your domain
- Google's local algorithm doesn't reinforce kiamoskin.com as the canonical site
- The Knowledge Panel SERP card for "keravive san diego" showed kiamoskin.com (Google auto-resolved it), but the GBP data itself is wrong

**Fix:** In GBP dashboard → Info → Website → change to https://kiamoskin.com/ . Takes 2 minutes.

**GBP Performance (May–Aug 12, 2026):**
- Mobile Search impressions: 327 (trending sharply up — Aug 1–8 saw 14–19/day, up from 3–6/day in May)
- Desktop Search impressions: 100
- Mobile Maps: 198
- Direction requests: 179
- Website clicks: 58 (going to vagaro, not you)
- Call clicks: 4
- GBP Messaging: 0 (disabled)
- GBP Bookings via Google: 0

The surge in mobile search impressions in early August correlates with the recent review push (10 new 5-star reviews Aug 4–11). Reviews are working.

**GBP services on profile vs. site:**
- GBP has: HydraFacial, DMK Enzyme, Dermaplane, Keravive, Acne Treatment, Scalp Detox, Hyperpigmentation correction, Procell Microchanneling
- Site treatment pages: Dermaplaning, DMK Enzyme Therapy, HydraFacial, Keravive Scalp, Lira Peels, Procell Microchanneling
- **Gap:** Lira Chemical Peels is not listed as a GBP service. Add it.

**Reviews:** 33 reviews, 5.0 average, all 5-star. 10 reviews in the last 8 days (Aug 4–11) — excellent velocity. Review topics from GBP: "knowledgeable staff" (11), "glowing skin" (7), "hydrafacial" (5), "relaxing atmosphere" (5). Consistently high-quality, specific reviews. 4 reviews from Jan 2025 or earlier have no reply — worth replying to keep engagement fresh.

---

## 4. Keyword Position & Opportunities

**GSC 90-day snapshot (up from 0 in the prior 90d — site is very new to Google):**
- 18 total clicks, 531 impressions
- Top performing page: Homepage (14 clicks, 429 impressions, avg pos 10.6)
- /melanin-rich-skin/ : 2 clicks, 106 impressions, pos 6.2 — this is your best organic performer after home

**Key ranking positions (from GSC queries):**
- "keravive, san diego, ca" — 0 clicks, 14 impressions, pos 12.1 (page 2, near the fold)
- "scalp treatment san diego" — 4 impressions, pos 8.5
- "hydrafacial san diego" — 5 impressions, pos 2.6 (but tiny volume reaching you)
- "korean head spa san diego" — 2 impressions, pos 7
- "dandruff treatment" — 16 impressions, pos 4.7 (informational, but shows topical authority)
- "hard water scalp/hair" cluster — multiple queries, 7–16 impressions, pos 34–43 (blog working)

**SERP position for key money queries:**
- "keravive san diego" — kiamoskin.com NOT in top 10 organic. Knowledge panel triggered (good). Instagram at pos 6. ClassPass at pos 9 (mentions you).
- "hydrafacial san diego" — NOT in top 10. Competitors: skynalchemy.co, vasseurdayspa.com, lajollalaser.com
- "esthetician san diego melanin rich skin" — kiamoskin.com ranks #10 organic (pos 6 per GSC). Moving up.

**Keyword demand (national search volume — local multiplier ~5–15%):**
| Keyword | Monthly Vol | Difficulty | Your status |
|---|---|---|---|
| facial san diego | 1,900 | 14 | Not ranking |
| keravive scalp treatment | 1,300 | 1 | ~pos 12 locally |
| microneedling san diego | 1,000 | — | Not ranking (no page) |
| hydrafacial san diego | 720 | — | Not ranking |
| scalp spa san diego | 260 | 2 | Not ranking |
| chemical peel san diego | 260 | — | Not ranking |
| scalp treatment san diego | 170 | 3 | ~pos 8.5 |
| dermaplaning san diego | 170 | — | Not ranking |
| korean head spa san diego | 210 | 7 | ~pos 7 |

**Microneedling gap:** 1,000/mo search volume, high purchase intent, and you offer Procell Microchanneling. The page exists at /treatments/procell-microchanneling/ but the title says "Procell Microchanneling for Scarring" — it doesn't target "microneedling san diego" at all. Procell IS a form of microchanneling/microneedling. Adding "microneedling" to the title/H1 is a quick win.

---

## 5. On-Page Analysis

**Site structure:** 28 pages total — 6 treatment pages, 9 service-area pages, 4 journal posts, home, about, contact, book, membership, melanin-rich-skin, treatments hub, service-areas hub, journal hub.

**No structural issues found:**
- All pages: 1 H1 ✅
- All titles within 62 chars ✅ (except lira-peels at 59, procell at 59 — fine)
- All meta descriptions present and within range ✅
- No noindex, no redirect anomalies, no canonical mismatches ✅
- No duplicate/thin location pages (all area pages score Jaccard 0.12–0.15 similarity = genuinely unique) ✅
- No duplicate treatment pages (all score 0.08–0.09 = genuinely unique) ✅
- Word counts: treatment pages 694–863w, area pages 563–635w — above thin threshold ✅

**One title targeting issue:**
- `/treatments/procell-microchanneling/` title: "Procell Microchanneling for Scarring | KIAMO Skin San Diego" — misses the 1,000/mo "microneedling san diego" query entirely
- H1: "Procell Microchanneling — stimulate your skin's natural repair process." — no city targeting

**Area page H1s are generic on some pages:**
- /service-areas/carlsbad/ — H1: "Facials in Carlsbad" (fine, suburb in H1 ✅)
- /service-areas/del-mar/ — H1: "Facials for Del Mar Clients" (slightly weak — "for Del Mar Clients" vs "in Del Mar")
- /service-areas/la-jolla/ — H1: "Facials in La Jolla" ✅
- All others have suburb in both title and H1 ✅

**Phone number:** +13105950872 appears on all 28 pages via tel: links. Consistent. ✅
NAP on GBP matches site phone number. ✅

**robots.txt finding:** Cloudflare's managed robots.txt blocks ClaudeBot, GPTBot, Google-Extended, Amazonbot, Bytespider, CCBot, and Applebot-Extended. This blocks AI search indexing (ChatGPT, Perplexity, AI Overviews via Google-Extended). For a local service business this is low priority right now, but worth knowing.

---

## 6. Schema

| Page | Schema present | Missing |
|---|---|---|
| Home | LocalBusiness / HealthAndBeautyBusiness / DaySpa, FAQPage, WebSite, ItemList | `openingHoursSpecification`, `aggregateRating`, `review` |
| Service pages | LocalBusiness + Service | `openingHoursSpecification`, `aggregateRating` on LocalBusiness; `aggregateRating` on Service |
| Area pages | LocalBusiness | `openingHoursSpecification`, `aggregateRating`, `review` |

**Missing properties:**
- `openingHoursSpecification` — you have hours set in GBP (Sun–Sat 12–18, Thu–Fri 12–14). Not in schema anywhere. Low effort, adds local signal.
- `aggregateRating` — you have 33 reviews, 5.0 average. This is free rich-snippet data sitting unused. Adding `aggregateRating` to LocalBusiness schema on homepage could enable star ratings in SERPs.
- `review` — a single representative review in schema would strengthen E-E-A-T signals.

---

## 7. Speed (Lighthouse Desktop)

| Page | Performance | SEO | Accessibility | Best Practices | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Homepage | 90 | 100 | 100 | 100 | 1,093ms | 0.004 | 207ms |
| /treatments/keravive-scalp/ | 100 | 100 | 100 | 100 | 320ms | 0.008 | 0ms |

Homepage desktop performance 90 — solid but not perfect. TBT of 207ms (caused by JS) is the only concern. Inner pages score 100 across the board. Mobile was not tested (Playwright not available) — run a manual PageSpeed Insights mobile check as the next step.

**GA4/GTM detected on both pages** — analytics is installed. Note: GA4 token not available in this audit so conversion event data couldn't be pulled. Verify in GA4 whether booking/contact form completions are tracked as key events.

---

## 8. Competitive Position Summary

You appear in the Knowledge Panel for "keravive san diego" (good — GBP is working) but are absent from the local pack for both "hydrafacial san diego" and "keravive san diego". The local pack leaders (Skyn Alchemy, Vasseur, Nowak Aesthetics) have 71–378 referring domains vs your 30.

For "esthetician san diego melanin rich skin" you're ranking #10 organically — this is your most differentiated keyword cluster and the one with the least competition. The /melanin-rich-skin/ page is your strongest organic performer (pos 6.2 in GSC). This niche deserves more content investment.

---

## Priority Fix List

### 🔴 Critical (do this week)

1. **Fix GBP website URL** → change vagaro.com to https://kiamoskin.com/ in GBP dashboard. 2-min fix. Direct authority signal to Google.

2. **Submit chula-vista + la-mesa to GSC URL Inspection** — these two pages are "unknown to Google." Open Search Console → URL Inspection → paste each URL → Request Indexing. Takes 5 mins.

3. **Start building real backlinks** — 30 referring domains is the ceiling keeping 13 treatment/area pages unindexed. Target:
   - HydraFacial.com provider directory listing (they already have a "find a provider" page, and you appear in it via their site — confirm your kiamoskin.com URL is listed there, not vagaro)
   - Keravive official provider directory
   - Yelp business page — make sure kiamoskin.com is the URL listed
   - ClassPass listing (currently shows you but links to kiamoskin.com — verify)
   - Local SD directories: sdvoyager.com, sandiegoreader.com, sdcitybeat.com (editorial features)
   - Black-owned business directories (you're listed with that attribute on GBP — lean into it for niche links)

### 🟡 Important (this month)

4. **Add `openingHoursSpecification` and `aggregateRating` to LocalBusiness schema** — hours are known (Sun–Mon–Tue 12–18, Thu–Fri 12–14, Sat closes 18), reviews are 5.0/33. This is a code change in the Astro site.

5. **Update /treatments/procell-microchanneling/ title + H1** to target "microneedling san diego":
   - Title: "Microneedling in San Diego | Procell Microchanneling | KIAMO Skin"
   - H1: something like "Microneedling in San Diego — Procell Microchanneling for skin repair"

6. **Add Lira Chemical Peels as a GBP service** — it's on your site but missing from the GBP services list.

7. **Enable GBP Messaging** — 0 conversations tracked. Messaging is a free booking-intent signal and GBP rewards active profiles.

8. **Reply to the 9 unanswered reviews** (Jan 2026 and earlier) — they're all 5-star. Short genuine replies. GBP engagement signal.

### 🟢 Recommended (next quarter)

9. **Create a /treatments/microneedling/ page** (or update procell page title as above) — 1,000/mo search volume, low competition, and you already perform the treatment.

10. **Mobile Lighthouse audit** — run PageSpeed Insights on mobile for homepage. TBT 207ms on desktop may be worse on mobile.

11. **Add book-online URL to GBP** — currently blank. Link to vagaro booking OR set up Google's native booking integration through Vagaro (Vagaro supports this).

12. **Add `review` schema node** — pull one strong review into JSON-LD on the homepage for E-E-A-T.

13. **Consider AI-bot robots.txt** — Google-Extended is blocked, which limits AI Overview citations. For local services this is low risk now but worth revisiting when AI search traffic becomes meaningful.

---

## What's Working Well (don't touch)

- Content quality is genuinely strong — treatment pages are well-written, differentiated, and correctly targeted. Don't rewrite them.
- Area pages are all unique (Jaccard 0.12–0.15) — no templating risk.
- Review velocity is excellent — 10 new 5-star reviews in 8 days. Keep the momentum.
- GBP is claimed, categories are solid, hours are set, photos exist.
- Schema foundation is good — Service schema with offers/areaServed, WebSite, FAQPage all present.
- Lighthouse 100 on inner pages, 90 on homepage — no speed blocker.
- Internal linking is comprehensive — every page links to every other.
- /melanin-rich-skin/ is a genuine niche differentiator ranking pos 6.2 — protect and expand this.
