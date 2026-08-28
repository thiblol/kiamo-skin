# GBP Image Prompts — Style Update Summary

**Date:** 2026-08-28  
**Reference Image:** IMG_7318(1).PNG  
**Updated File:** `docs/gbp-image-prompts.md`

---

## Reference Image Analysis

The reference image demonstrates a **soft, dreamy spa aesthetic** with these key characteristics:

### Visual Characteristics
- **Lighting:** Soft diffused natural window light (NOT artificial softbox)
- **Color Palette:** Highly desaturated, muted spa tones
- **Mood:** Serene, peaceful, meditative — spa tranquility over clinical precision
- **Photography:** Film aesthetic with soft grain, ultra-shallow depth of field
- **Focus:** Dreamy bokeh backgrounds, intimate close-ups
- **Temperature:** Natural daylight 5000-5500K (NOT warm 3200K artificial)
- **Format:** Before/after split-screen with clean vertical division (clinical documentation with spa aesthetic)

---

## Key Changes Made to All Prompts

### 1. Master Style Lock — Complete Rewrite

**BEFORE:** "Warm clinical" aesthetic with warm softbox lighting at 3200K  
**AFTER:** "Serene spa tranquility" with soft natural window light only

**Critical Changes:**
- **Aesthetic:** Changed from "warm clinical" to "serene spa tranquility"
- **Lighting:** Removed all mentions of "3200K softbox" → replaced with "soft diffused natural window light"
- **Color Temperature:** Changed from warm 3200K to natural 5000-5500K daylight
- **Palette:** Changed from "warm cream, near-black floor, amber accents" → "pale cream, soft beige, muted spa neutrals"
- **Floor:** Changed from "near-black contrast floor" → "light blonde wood or soft gray flooring"
- **Film Stock:** Adjusted from "Kodak Portra 400" → "Fuji 400H or Kodak Portra 160 aesthetic" (more muted)
- **Emphasis:** Added "muted saturation," "dreamy quality," "ethereal softness"

### 2. Camera & Technical Specifications

Added to EVERY treatment/portrait prompt:
- "85mm f/1.4 wide open" (previously just "85mm")
- "ultra-shallow depth of field" (more specific than "shallow")
- "background dissolves into creamy bokeh" (describes the exact look)
- "film aesthetic with soft grain" (reinforces non-digital look)
- "muted desaturated spa tones" (color guidance)

### 3. Lighting Specifications

Replaced throughout:
- ❌ "warm 3200K softbox from the left"
- ✅ "soft diffused natural window light from the left"
- ❌ "warm clinical light"
- ✅ "soft diffused natural window light"
- ❌ "warm overhead light"
- ✅ "soft natural ambient light"

### 4. Color Palette Updates

Replaced throughout:
- ❌ "warm cream and blush-white walls"
- ✅ "pale cream and soft white walls"
- ❌ "near-black contrast floor"
- ✅ "light blonde wood or soft gray flooring"
- ❌ "amber and honey accents"
- ✅ "muted spa neutrals with minimal color variation"

### 5. Mood & Aesthetic Language

Added to key prompts:
- "dreamy peaceful serenity"
- "spa tranquility"
- "ethereal softness"
- "meditative stillness"
- "whisper-quiet visual mood"
- "background melts/dissolves into soft bokeh"

---

## Updated Prompt Structure

### Standard Treatment Prompt Format (Now Includes):

```
[Action description]. [Subject details]. Shot from [angle], 85mm f/1.4 wide open, 
soft diffused natural window light from [direction], ultra-shallow depth of field 
[specific focus area]. Muted desaturated spa palette, film grain aesthetic, 
[mood descriptor]. Background dissolves into soft creamy bokeh.
```

### Example Before & After

**BEFORE (T-1):**
> Shot from the foot of the table looking up, 85mm, warm 3200K softbox from the left, shallow depth of field with the esthetician's focused expression sharp and background soft.

**AFTER (T-1):**
> Shot from the foot of the table looking up, 85mm f/1.4 wide open, soft diffused natural window light from the left creating barely-there shadows, ultra-shallow depth of field with the esthetician's focused expression sharp and background dissolving into creamy bokeh. Muted desaturated tones, film aesthetic, dreamy and serene spa mood.

---

## Prompts Updated

### Fully Updated (25+ prompts):
- Master Style Lock (complete rewrite)
- Character Reference Sheet (C-1)
- Studio Environment Reference (S-1)
- Treatment prompts: T-1, T-2, T-3, T-4, T-5, T-7, T-16
- Interior: I-1, I-2
- Client Experience: X-1
- Equipment: Q-1
- Owner Portrait: P-1
- Ambiance: A-1
- **All Before/After Results: R-1, R-2, R-3, R-4, R-5, R-6, R-7, R-8, R-9, R-10**
- **Scalp Before/After: SC-6**

### Before/After Specific Updates:
All before/after prompts now include:
- **"Split-screen comparison"** - matches reference image format
- **"Clean vertical split down the center"** - exact layout specification
- **"Both panels identically framed and lit"** - ensures consistency
- **"85mm f/2.8 macro"** (slightly stopped down from f/1.4 for clinical sharpness across both sides)
- **"Soft diffused natural window light from directly above"** - even clinical documentation
- **"Muted desaturated spa palette, film aesthetic"** - maintains peaceful mood even in clinical shots
- **"No makeup, no retouching on either side"** - authentic results
- Specific labeling for multi-panel grids (e.g., "Week 1," "Week 4," etc.)

### Pattern Established For:
All remaining prompts should follow the same pattern when generating. The key elements are now standardized:
- Natural window light only (no artificial softbox)
- f/1.4 wide open for portraits/treatments, f/2.8 for clinical before/after documentation
- Muted desaturated spa palette
- Film aesthetic language
- Dreamy bokeh descriptions for single shots
- Split-screen format for before/after comparisons

---

## How to Use Updated Prompts with Nano Banana Pro

1. **Paste Master Style Lock first** (completely rewritten)
2. **Generate C-1 (Character Reference)** with new lighting specs
3. **Generate S-1 (Studio Reference)** with pale walls and light flooring
4. **Copy any treatment prompt** — they now include all necessary film aesthetic language
5. **Upload references** to subsequent prompts as before

The prompts now accurately instruct Nano Banana Pro to create images matching the soft, dreamy, spa-like aesthetic of the reference image instead of the previous "warm clinical" look.

---

## Key Takeaway

**The fundamental shift:** From "editorial beauty photography with warm clinical lighting" → to "fine art spa photography with natural light and film aesthetic"

This matches the reference image's soft, peaceful, desaturated, dreamy quality.
