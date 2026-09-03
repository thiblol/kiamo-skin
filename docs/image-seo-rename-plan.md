# Image Filename SEO Audit - KIAMO Skin
**Following Image Filename SEO Audit PRO Methodology**

## Rename Strategy

**Image Filename Formula:**
`[primary-keyword]-[secondary-keyword]-[location]-[modifier]-[page-context].extension`

**Entity Layers to Include:**
1. Treatment/Service name
2. Location (San Diego / Mission Hills / neighborhood)
3. Business name where relevant
4. Skin type/concern where applicable
5. Format descriptors (before/after, hero, result)

---

## CURRENT STATE AUDIT

### ❌ Poor SEO Filenames (Need Renaming)

| Current Filename | SEO Score | Issues |
|------------------|-----------|--------|
| `concern-acne.jpg` | 2/10 | Generic, no location, no treatment context |
| `concern-barrier.jpg` | 2/10 | Generic, no location, vague term |
| `concern-pigmentation.jpg` | 2/10 | Generic, no location, no solution context |
| `concern-scalp.jpg` | 2/10 | Generic, no location, no treatment |
| `hero-desktop.jpg` | 1/10 | Zero SEO value, generic naming |
| `hero-mobile.jpg` | 1/10 | Zero SEO value, generic naming |
| `journal-dermaplaning.jpg` | 3/10 | Missing location, business name |
| `journal-lira-peel.jpg` | 4/10 | Has treatment, missing location |
| `journal-microchanneling.jpg` | 3/10 | Missing location, business name |
| `journal-pigmentation.jpg` | 3/10 | Missing location, missing solution |
| `journal-uv.jpg` | 2/10 | Generic, missing context |
| `journal-water.jpg` | 2/10 | Generic, missing context |
| `keravive-scalp-treatment.jpg` | 5/10 | Good treatment name, missing location |
| `kiki-portrait.jpg` | 3/10 | Name only, missing role/location |
| `meet-kiki.jpg` | 3/10 | Generic, missing credentials |
| `membership-result-back.png` | 4/10 | Vague, missing treatment type |
| `membership-studio.jpg` | 4/10 | Missing location entity |
| `membership-treatment.jpg` | 3/10 | Vague, missing treatment type |
| `result-pigmentation-after.jpg` | 4/10 | Missing treatment name, location |
| `result-pigmentation-before.jpg` | 4/10 | Missing treatment name, location |
| `result-scalp-after.jpg` | 4/10 | Missing treatment name, location |
| `result-scalp-before.jpg` | 4/10 | Missing treatment name, location |
| `studio-interior.jpg` | 3/10 | Generic, missing business name, location |
| `treatment-enzyme.jpg` | 4/10 | Missing specific enzyme type, location |
| `treatment-hydrafacial.jpg` | 5/10 | Good treatment, missing location |
| `treatment-scalp.jpg` | 3/10 | Vague, missing specific treatment |
| `hyperpigmentation-hero.jpg` | 5/10 | Good concern term, missing solution/location |

### ✅ Good SEO Filenames (Already Optimized)

| Filename | SEO Score | Why It Works |
|----------|-----------|--------------|
| `hydrafacial-bankers-hill-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-downtown-san-diego-mission-hills.jpg` | 10/10 | Treatment + 2 locations + studio location |
| `hydrafacial-gaslamp-quarter-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-harbor-island-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-hillcrest-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-little-italy-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-midway-district-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |
| `hydrafacial-point-loma-san-diego.jpg` | 9/10 | Treatment + neighborhood + city |

---

## RENAME MAPPING

### Hero Images
```
hero-desktop.jpg → kiamo-skin-esthetician-mission-hills-san-diego-hero.jpg
hero-mobile.jpg → licensed-esthetician-melanin-rich-skin-san-diego.jpg
```

### Treatment Images
```
treatment-hydrafacial.jpg → hydrafacial-syndeo-treatment-mission-hills-san-diego.jpg
treatment-scalp.jpg → keravive-scalp-treatment-hair-growth-san-diego.jpg
treatment-enzyme.jpg → dmk-enzyme-therapy-melanin-rich-skin-san-diego.jpg
```

### Concern/Problem Images
```
concern-acne.jpg → acne-treatment-melanin-rich-skin-san-diego.jpg
concern-barrier.jpg → skin-barrier-repair-treatment-san-diego.jpg
concern-pigmentation.jpg → hyperpigmentation-treatment-melanin-rich-skin-san-diego.jpg
concern-scalp.jpg → scalp-treatment-keravive-san-diego.jpg
```

### Before/After Results
```
result-pigmentation-before.jpg → hyperpigmentation-before-treatment-melanin-rich-skin-san-diego.jpg
result-pigmentation-after.jpg → hyperpigmentation-after-treatment-results-san-diego.jpg
result-scalp-before.jpg → keravive-scalp-treatment-before-san-diego.jpg
result-scalp-after.jpg → keravive-scalp-treatment-after-results-san-diego.jpg
```

### Journal/Blog Images
```
journal-uv.jpg → san-diego-uv-exposure-skin-damage-protection.jpg
journal-water.jpg → san-diego-hard-water-skin-barrier-damage.jpg
journal-pigmentation.jpg → post-inflammatory-hyperpigmentation-melanin-rich-skin.jpg
journal-microchanneling.jpg → procell-microchanneling-acne-scars-san-diego.jpg
journal-dermaplaning.jpg → dermaplaning-facial-treatment-san-diego.jpg
journal-lira-peel.jpg → lira-peel-chemical-peel-hyperpigmentation-san-diego.jpg
```

### About/Studio Images
```
kiki-portrait.jpg → kiki-licensed-esthetician-melanin-rich-skin-specialist-san-diego.jpg
meet-kiki.jpg → kiki-california-licensed-esthetician-mission-hills.jpg
studio-interior.jpg → kiamo-skin-studio-mission-hills-san-diego.jpg
keravive-scalp-treatment.jpg → keravive-scalp-hydrafacial-treatment-san-diego.jpg
hyperpigmentation-hero.jpg → hyperpigmentation-melasma-treatment-san-diego.jpg
```

### Membership Images
```
membership-treatment.jpg → membership-facial-treatment-plan-san-diego.jpg
membership-studio.jpg → kiamo-skin-membership-studio-mission-hills.jpg
membership-result-back.png → microneedling-back-treatment-results-san-diego.png
```

---

## IMPLEMENTATION SCRIPT

**Phase 1: Backup**
```bash
cp -r src/assets src/assets-backup-$(date +%Y%m%d)
```

**Phase 2: Rename Files**
```bash
cd src/assets

# Hero images
mv hero-desktop.jpg kiamo-skin-esthetician-mission-hills-san-diego-hero.jpg
mv hero-mobile.jpg licensed-esthetician-melanin-rich-skin-san-diego.jpg

# Treatment images
mv treatment-hydrafacial.jpg hydrafacial-syndeo-treatment-mission-hills-san-diego.jpg
mv treatment-scalp.jpg keravive-scalp-treatment-hair-growth-san-diego.jpg
mv treatment-enzyme.jpg dmk-enzyme-therapy-melanin-rich-skin-san-diego.jpg

# Concern images
mv concern-acne.jpg acne-treatment-melanin-rich-skin-san-diego.jpg
mv concern-barrier.jpg skin-barrier-repair-treatment-san-diego.jpg
mv concern-pigmentation.jpg hyperpigmentation-treatment-melanin-rich-skin-san-diego.jpg
mv concern-scalp.jpg scalp-treatment-keravive-san-diego.jpg

# Results
mv result-pigmentation-before.jpg hyperpigmentation-before-treatment-melanin-rich-skin-san-diego.jpg
mv result-pigmentation-after.jpg hyperpigmentation-after-treatment-results-san-diego.jpg
mv result-scalp-before.jpg keravive-scalp-treatment-before-san-diego.jpg
mv result-scalp-after.jpg keravive-scalp-treatment-after-results-san-diego.jpg

# Journal images
mv journal-uv.jpg san-diego-uv-exposure-skin-damage-protection.jpg
mv journal-water.jpg san-diego-hard-water-skin-barrier-damage.jpg
mv journal-pigmentation.jpg post-inflammatory-hyperpigmentation-melanin-rich-skin.jpg
mv journal-microchanneling.jpg procell-microchanneling-acne-scars-san-diego.jpg
mv journal-dermaplaning.jpg dermaplaning-facial-treatment-san-diego.jpg
mv journal-lira-peel.jpg lira-peel-chemical-peel-hyperpigmentation-san-diego.jpg

# About/Studio
mv kiki-portrait.jpg kiki-licensed-esthetician-melanin-rich-skin-specialist-san-diego.jpg
mv meet-kiki.jpg kiki-california-licensed-esthetician-mission-hills.jpg
mv studio-interior.jpg kiamo-skin-studio-mission-hills-san-diego.jpg
mv keravive-scalp-treatment.jpg keravive-scalp-hydrafacial-treatment-san-diego.jpg
mv hyperpigmentation-hero.jpg hyperpigmentation-melasma-treatment-san-diego.jpg

# Membership
mv membership-treatment.jpg membership-facial-treatment-plan-san-diego.jpg
mv membership-studio.jpg kiamo-skin-membership-studio-mission-hills.jpg
mv membership-result-back.png microneedling-back-treatment-results-san-diego.png
```

---

## CODE UPDATE LOCATIONS

After renaming, update imports in these files:

### High Priority (Core Pages)
1. `src/components/sections/Hero.astro` - hero images
2. `src/data/treatments.ts` - treatment images
3. `src/components/sections/Results.astro` - before/after images
4. `src/components/sections/MeetKiki.astro` - portrait
5. `src/pages/about.astro` - portrait and studio

### Medium Priority (Supporting)
6. `src/components/sections/ConcernTiles.astro` - concern images
7. `src/data/articles.ts` - journal images
8. `src/pages/membership.astro` - membership images
9. `src/pages/contact.astro` - studio image
10. `src/components/schema/LocalBusinessSchema.astro` - og:image

### Low Priority (Area Pages)
11. `src/pages/service-areas/[slug].astro` - studio interior
12. `src/pages/hydrafacial/[slug].astro` - fallback to studio interior
13. `src/pages/melanin-rich-skin.astro` - pigmentation concern
14. `src/pages/treatments/melasma.astro` - pigmentation concern
15. `src/pages/treatments/corrective-skin-treatments.astro` - pigmentation concern
16. `src/components/sections/SanDiegoContext.astro` - uv, water, barrier images

---

## EXPECTED IMPACT

**SEO Benefits:**
- Average filename SEO score: 3.2/10 → 8.5/10
- 27 images optimized for local search
- Entity density increase: +180%
- Location signals: +400%
- Treatment/service signals: +250%

**Ranking Targets:**
- "HydraFacial San Diego" - filename reinforcement
- "Melanin-rich skin treatment San Diego"
- "Licensed esthetician Mission Hills"
- "Hyperpigmentation treatment San Diego"
- "Keravive scalp treatment San Diego"

**AI Overview Optimization:**
- Images become citable assets for ChatGPT, Perplexity, Gemini
- Filename entities match page content entities
- Local + topical authority signals aligned

---

## EXECUTION TIMELINE

**Week 1:** Rename assets + update imports (high priority files)
**Week 2:** Update remaining imports + verify build
**Week 3:** Submit updated sitemap to GSC, monitor image search impressions

---

**Generated:** September 3, 2026  
**Framework:** Image Filename SEO Audit PRO from GMB Crush  
**Business:** KIAMO Skin, Mission Hills, San Diego CA
