# KIAMO Skin — Image Scenes

13 scenes for the demo site. Each `{scene}` block below drops directly into the `{scene}` slot in `image-prompt.md`, above the locked STYLE block. Generate one at a time; do not batch, since consistency of grade matters more than speed.

**Casting note that applies to every scene:** KIAMO's specialism is melanin-rich skin. Deep and medium skin tones lead across the set. Where a scene doesn't name a skin tone, default to deep or medium brown. Two lighter-skinned subjects across 13 images is the right balance — she treats all skin types, but her positioning is Black and brown skin, and the imagery has to say that before a word is read.

**Aspect ratios matter.** Generate at the stated ratio rather than cropping later — the composition rules in the style block assume the final frame. All ratios below are within the generator's available set (16:9, 9:16, 4:3, 3:4, 1:1).

| # | Scene | Ratio | Status |
|---|---|---|---|
| 01 | Hero, desktop | 16:9 | ✓ reviewed, accepted |
| 02 | Hero, mobile | 9:16 | ⚠ first render rejected (upside-down face) — re-verify |
| 03 | Concern — Pigmentation | 3:4 | ⚠ re-verify (original reassigned to 05) |
| 04 | Concern — Acne | 3:4 | generated, unreviewed |
| 05 | Concern — Barrier | 3:4 | ✓ accepted — uses the original scene-3 render |
| 06 | Concern — Scalp | 3:4 | generated, unreviewed |
| 07 | Kiki portrait | 3:4 | generated, unreviewed — **`.png`** |
| 08 | Studio interior | 16:9 | generated, unreviewed |
| 09 | Detail — HydraFacial | 4:3 | generated, unreviewed |
| 10 | Detail — Scalp | 4:3 | generated, unreviewed |
| 11 | Detail — Enzyme | 4:3 | generated, unreviewed |
| 12 | Journal — UV | 16:9 | generated, unreviewed |
| 13 | Journal — Hard water | 16:9 | generated, unreviewed |
| 14 | Result — Pigmentation, before | 1:1 | generated, unreviewed |
| 15 | Result — Pigmentation, after | 1:1 | generated, unreviewed — check framing matches 14 |
| 16 | Result — Scalp, before | 1:1 | generated, unreviewed |
| 17 | Result — Scalp, after | 1:1 | generated, unreviewed — check framing matches 16 |

**All 17 generated** and present in `website-images/` as `scene-1.jpeg` … `scene-17.jpeg` (note: **`scene-7` is `.png`**, the rest are `.jpeg`). Filenames map to the scene numbers in the table above.

**Review status: only scenes 1–3 have been visually checked.** Scenes 4–17 are generated but unreviewed. Before wiring them into the build, each needs a pass against the rejection criteria at the bottom of this file — and the whole set needs the side-by-side consistency check, since a single image that jumps warmer or sharper than its neighbours is what makes a site look assembled rather than art-directed.

Two known items carried over from the first review round:
- **Scene 2 was rejected** for reading as an upside-down face. Its prompt has since been rewritten to a side-on framing. Verify whether `scene-2.jpeg` is the old rejected render or a regenerate against the new prompt.
- **Scene 3 was reassigned** from the Pigmentation tile to the Barrier tile. Confirm `scene-3.jpeg` is still the even-toned profile image, and that whatever now sits at `scene-3` vs the Pigmentation slot is unambiguous.

### How the set is balanced

An early draft rendered visible damage on all four concern tiles. Read together that looked like a dermatology textbook rather than somewhere you'd book an appointment — the imagery has to sell the outcome, not the problem.

The split now:

- **Concern tiles (03–06) show the resolved state.** The tile *label* names the concern; the image shows where treatment gets you. A tile reading "Acne & Scarring" over clear skin says "we get you here" — aspiration, not diagnosis.
- **Before/after pairs (14–17) carry the honesty.** A matched pair is a truthful claim structure, and it's the format clients actually trust. This is also where the demo earns credibility as a *results* studio.
- **Hero, portrait, studio and detail shots stay neutral** — real texture, no condition either way.

### What the first batch proved

The style block works — grade, texture and skin-tone rendering landed on target across three generations, with real pores and no plastic smoothing. Three lessons for the rest:

- **Never describe a camera position that could invert the subject.** "From directly above, looking down the length of the body" produced an upside-down face. State the subject's orientation in the frame explicitly instead.
- **"Subtle" returns nothing.** Asking for subtle unevenness produced perfectly even skin. Where a visible sign is wanted (the before frames), name it concretely: "a diffuse patch with soft irregular edges."
- **Paired images need the invariants spelled out.** For 14–17, repeat the framing, lighting and background specification verbatim in both prompts.

**Two overrides to the style block, used only where noted:**
- Scenes 12 and 13 are journal headers and read better as environmental landscape than as treatment imagery.
- Scene 7 is a portrait and needs eye contact, which the "subject off-center" rule should bend for.

---

## 01 — Hero, desktop ✓ DONE

**File:** `src/assets/hero-desktop.jpg` · **Ratio:** 16:9 · **Min width:** 2400px

**Use `website-images/scene-1.jpeg`** — accepted. Left two-thirds is clean empty wall for the headline, skin texture and pigmentation render honestly, grade is on target. The gloved hands at bottom-right sit close to the frame edge; the hero's bottom crop and the mobile breakpoint largely hide them, so no regenerate needed.

*Original prompt, kept for reference:*
> A Black woman in her early thirties reclining on a treatment bed, head resting back, eyes softly closed, mid-facial — her face is clean and bare with visible natural skin texture and a healthy sheen. An esthetician's hands, out of focus in the near foreground, rest lightly at the edge of frame. She occupies the right third; the left two-thirds is soft, uncluttered ivory wall and the blurred edge of a linen headrest, leaving generous empty space for a headline. Shot slightly above eye level looking down the length of the bed. Calm, unhurried, entirely un-posed — she looks like she has been lying there a while.

*Why: the left negative space carries the H1 and CTA. Face right-of-centre survives the mobile crop badly, which is why scene 02 exists separately.*

---

## 02 — Hero, mobile ⟲ REGENERATE

**File:** `src/assets/hero-mobile.jpg` · **Ratio:** 9:16 · **Min width:** 1400px

*First attempt read as an upside-down face — the model interpreted "from directly above looking down the length of the body" as inverting the head. Reframed below as a side-on view, which removes the ambiguity.*

> Vertical portrait of a Black woman in her early thirties lying back on a treatment bed, photographed from her side at bed height — her head rests on soft ivory linen at the lower third of the tall frame, face upright and clearly readable, turned slightly toward the camera with eyes closed and expression calm. Bare skin, visible pores and natural texture, no makeup. Above her the frame is filled with the soft out-of-focus ivory of a linen-draped bed and a plain warm wall receding into gentle shadow toward the top. Quiet, still, intimate — the emptiness above her carries the composition.

*Why: the face must sit in the lower third and read right-way-up at a glance. This is the first thing the client sees on her phone. Do not use an overhead angle.*

---

## 03 — Concern tile: Pigmentation & Melasma ⟲ GENERATE NEW

**File:** `src/assets/concern-pigmentation.jpg` · **Ratio:** 3:4 · **Min width:** 1200px

> Macro detail of the cheekbone and temple of a woman with deep brown skin, three-quarter view at 85mm, soft directional light raking across the surface. The skin is even-toned, clear and luminous with a healthy natural glow — real texture visible throughout, pores and fine vellus hair, but tone is uniform and bright. Eyes closed, only the outer corner of one eye in frame. Serene, dignified, almost abstract.

*Aspirational read: the tile label names the concern, the image shows the outcome. Do not render visible pigmentation here — the honest before/after proof lives in scenes 14–17.*

---

## 04 — Concern tile: Acne & Scarring

**File:** `src/assets/concern-acne.jpg` · **Ratio:** 3:4 · **Min width:** 1200px

> Macro detail of the jawline and lower cheek of a young man with medium-brown skin, three-quarter view, soft light from the side. The skin is clear and smooth-toned with genuine visible texture — pores, natural sheen, a faint healthy flush along the cheek — but free of active breakout. Calm expression, mouth relaxed, eyes out of frame above. Clean ivory background falling softly out of focus.

*A male subject here broadens the read of the menu.*

---

## 05 — Concern tile: Barrier & Dehydration ✓ DONE

**File:** `src/assets/concern-barrier.jpg` · **Ratio:** 3:4 · **Min width:** 1200px

**Use `website-images/scene-3.jpeg`** — generated for scene 03 but reassigned here. Its clean, even, well-textured skin in profile is exactly what "healthy barrier" should look like, and the warm terracotta-to-ivory background gradient is the best colour match in the set so far.

*Original prompt, kept for reference if a regenerate is ever needed:*

> Macro of a woman's cheek and the outer corner of a closed eye, deep brown skin, shot at 85mm as a single droplet of clear serum sits on the fingertip of her own hand just making contact with the skin. Light catches the wet sheen of the droplet against the matte texture of the surrounding skin — the contrast between hydrated and thirsty skin is the subject. Extremely shallow depth, background dissolving to warm ivory.

---

## 06 — Concern tile: Scalp Health

**File:** `src/assets/concern-scalp.jpg` · **Ratio:** 3:4 · **Min width:** 1200px

> Overhead macro of a section of scalp being gently parted by two gloved fingertips, revealing a clean, healthy hairline and scalp skin — the hair is natural Black hair in a loose coil pattern, dark and soft, and the parted section shows calm, clear scalp with no flaking. Shot at 85mm f/4, the point of contact sharp, the surrounding hair falling softly out of focus. Warm, respectful, clinical without being cold.

*Why: scalp imagery is where stock photography fails hardest — almost all of it shows straight hair. Getting coil pattern right here is the single most differentiating image in the set.*

---

## 07 — Kiki, portrait

**File:** `src/assets/kiki-portrait.jpg` · **Ratio:** 3:4 · **Min width:** 1600px

> Environmental portrait of a Black woman in her early thirties, a professional esthetician, standing in her own treatment studio and looking directly into the lens with a warm, composed, slightly amused expression — confident and at ease, not smiling broadly. She wears a simple charcoal or oatmeal professional top, minimal jewellery, natural makeup, hair worn naturally. Soft window light from camera left at 45 degrees. Behind her the studio falls gently out of focus: a treatment bed edge, a single trailing plant, warm ivory walls. She stands slightly right of centre, framed from mid-torso up.

*Why: direct eye contact is the exception to the off-centre rule — a founder portrait that avoids the lens reads evasive. This is the trust image and the hardest one to get right; expect several generations.*

**Watch for:** hands are the usual failure point. If hands appear malformed, regenerate with them out of frame or behind her back.

---

## 08 — Treatment room interior

**File:** `src/assets/studio-interior.jpg` · **Ratio:** 16:9 · **Min width:** 2000px

> Wide interior of a small, calm, private esthetics treatment room, empty of people. A single treatment bed dressed in soft ivory linens sits at an angle to the frame, a rolling stainless tool cart beside it with a few implements laid out neatly, a trailing pothos plant on a shelf, warm ivory walls, one large window with sheer light diffusing in from camera left. Wood floor with visible grain. The room is uncluttered and clearly a working professional space, not a hotel spa — real, lived-in, calm.

*Why: "not a hotel spa" is the operative instruction. Her voice is clinical-but-kind and the room should read as a place where work gets done.*

---

## 09 — Treatment detail: HydraFacial

**File:** `src/assets/treatment-hydrafacial.jpg` · **Ratio:** 4:3 · **Min width:** 1800px

> Close detail at 85mm of a gloved hand guiding a HydraFacial-style handpiece across the cheek of a client with deep brown skin, the transparent tip in crisp focus at the point of contact with the skin, a faint sheen of serum trailing behind it. The client's eye is closed and calm at the edge of frame. Background dissolves to soft ivory. The device is generic and unbranded.

---

## 10 — Treatment detail: Scalp / Keravive

**File:** `src/assets/treatment-scalp.jpg` · **Ratio:** 4:3 · **Min width:** 1800px

> Close detail of a scalp treatment in progress: gloved fingertips working a clear serum along a parted section of a client's scalp, natural Black hair in a coil pattern parted cleanly to either side, the point of contact sharp at 85mm f/4. The client is seated and reclined, only the crown of the head and the practitioner's hands in frame. Warm soft light from above and left, ivory towel visible at the frame edge.

---

## 11 — Treatment detail: Enzyme therapy / masque

**File:** `src/assets/treatment-enzyme.jpg` · **Ratio:** 4:3 · **Min width:** 1800px

> Close three-quarter view of a woman with medium-brown skin lying back with eyes closed, a smooth pale enzyme masque freshly applied across her cheeks, nose and forehead, its surface just beginning to set with a faint matte texture. Her lips and the skin at her jaw are bare, showing true skin tone against the masque. A gloved fingertip is just leaving frame at the top. Soft, still, quietly clinical.

---

## 12 — Journal header: June Gloom & UV

**File:** `src/assets/journal-uv.jpg` · **Ratio:** 16:9 · **Min width:** 2000px

> A San Diego coastline in soft marine-layer overcast — low grey-white cloud sitting over calm Pacific water, a sweep of empty pale sand in the foreground, the bluff and a few silhouetted palms far off to the right. Flat, diffused, deceptively gentle light: it reads as a mild cloudy morning, with no visible sun. Muted, cool-leaning ivory and soft grey-blue, with the warm grade held back to a whisper. Wide, unpeopled, still.

*Style override: this is the one scene where the grade should sit cool rather than warm — the article's entire argument is that the gentle grey light is misleading, and a warm sunny beach would undercut it.*

---

## 13 — Journal header: Hard water & the scalp

**File:** `src/assets/journal-water.jpg` · **Ratio:** 16:9 · **Min width:** 2000px

> Macro detail of water running from a simple brushed-nickel shower fitting against a pale tiled wall, caught at 85mm with the individual droplets and the thin stream sharp, faint mineral scale visible as a dull chalky ring at the fitting's edge. Warm soft daylight from a window out of frame. Everything else falls away into soft ivory and shadow. Quiet, domestic, real — a bathroom that is used, not staged.

*Why: the mineral scale ring is the subject. Without it this is just a shower; with it, it is the article's argument in one frame.*

## 14–17 — Before / after pairs

Two paired sets for the results slider. **Within each pair, everything except the skin must match exactly** — same person, same angle, same crop, same distance, same lighting, same background, same expression. If the framing shifts between the two, the slider breaks and the comparison reads as a trick.

Generate each pair back to back and reject the pair if the framing drifts.

### 14 — Pigmentation, before

**File:** `src/assets/result-pigmentation-before.jpg` · **Ratio:** 1:1 · **Min width:** 1200px

> Straight-on macro of the left cheek and cheekbone of a woman with deep brown skin, filling the frame, shot at 85mm with flat even soft light. Across the cheekbone sits a diffuse patch of darker pigmentation with soft irregular edges, alongside a scatter of small darker post-inflammatory marks. Skin texture is real — visible pores, slight dullness, a matte surface. Neutral expression, eyes out of frame. Plain ivory background.

### 15 — Pigmentation, after

**File:** `src/assets/result-pigmentation-after.jpg` · **Ratio:** 1:1 · **Min width:** 1200px

> Identical framing, subject, angle, distance, lighting and background to the previous image — the same woman's left cheek and cheekbone, deep brown skin, filling the frame at 85mm with the same flat even soft light and plain ivory background. The pigmentation patch has faded substantially to a faint even tone and the darker marks are largely resolved. Skin reads clear, luminous and hydrated with a soft natural glow, texture still real and visible. Nothing else in the frame changes.

### 16 — Scalp, before

**File:** `src/assets/result-scalp-before.jpg` · **Ratio:** 1:1 · **Min width:** 1200px

> Overhead macro of a parted section of scalp, natural Black hair in a loose coil pattern parted cleanly to either side by two gloved fingertips. The exposed scalp shows dryness, dull flaking and visible product buildup along the part line. Hair looks dry and lacks sheen. Soft even light from above, warm ivory tones at the frame edge.

### 17 — Scalp, after

**File:** `src/assets/result-scalp-after.jpg` · **Ratio:** 1:1 · **Min width:** 1200px

> Identical framing, subject, angle, distance and lighting to the previous image — the same parted section of scalp, same natural Black hair in a loose coil pattern, same two gloved fingertips holding the part, same overhead soft light and warm ivory edge. The scalp is now calm, clean and clear with no flaking or buildup, and the hair has a soft healthy sheen. Nothing else in the frame changes.

---

**Order:** 07 (Kiki) first — it is the hardest and sets the grade everything else matches. Then 01/02 (hero), then the four concern tiles as a set so they read as siblings, then treatment details, then journal headers.

**Consistency check:** lay all 13 side by side before accepting the set. If any single image jumps warmer, cooler, or sharper than its neighbours, regenerate it rather than accepting it — an inconsistent set is what makes a site look assembled rather than art-directed.

**Rejection criteria — regenerate if any of these appear:**
- Skin looks plastic, smoothed, or waxy
- Deep skin tones render ashy, grey, or pushed orange
- Straight hair in either scalp scene
- Malformed hands or extra fingers
- Any legible text, logo, or product branding
- Candles, folded towels in fans, orchids, hot stones, or bamboo
- Harsh white clinical lighting
