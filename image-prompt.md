# Image prompt — KIAMO Skin

Paste `{scene}` from the library below, then everything from `--- STYLE ---` down.
The style block is fixed and should not be edited between generations: it is what
keeps the whole image set looking like one studio rather than a stock library.

---

## Scene library

### Journal — "Three kinds of dark mark" (article hero, 21:9 safe)

Primary — recommended:

> A woman with deep brown skin in her mid-thirties in three-quarter profile near a
> large window, eyes closed, face bare and unmade-up, natural variation in tone
> visible across the cheek and along the jaw. Soft daylight rakes across the cheek
> from camera left so the surface of the skin is legible rather than flattened.
> Plain warm-ivory wall well behind, thrown out of focus. Generous empty space to
> the right of the head for a headline overlay.

Alternative — the diagnostic angle, hands-and-mirror:

> Close crop of a woman with medium-brown skin holding a small round hand mirror
> just off-centre, examining her own cheekbone, fingertips resting lightly against
> the jaw without pressing. Focus falls on the reflected cheek in the mirror glass.
> Soft window light from camera left, warm ivory and terracotta surroundings.

Alternative — the consultation, no faces:

> An esthetician's hands, gloves off, holding a small handheld magnifying lamp over
> a client's cheek during a skin consultation, client's face turned away from camera
> and out of frame past the shoulder. Warm neutral treatment room, folded linen
> towel in soft focus behind. Point of contact crisp; everything else falls away.

### Social — square crop for the same article

> Overhead flat lay on a warm ivory linen surface: an unbranded tube of tinted
> mineral sunscreen with the cap off, a small amber glass dropper bottle, and a
> single folded sage-green cotton towel, arranged with generous space between the
> objects. Soft diffused daylight from the upper left, gentle shadows falling to
> the lower right. No labels, no text on any object.

---

## The one rule specific to this article

The article is about telling three kinds of pigmentation apart. **Do not generate
"before and after" imagery, visible dark patches presented as a condition to be
corrected, or anything that reads as a dermatology case photo.** The site publishes
no untrue results and the guard suite blocks outcome claims. The image should read
as a person, calmly lit — not as a symptom.

Real, natural variation in skin tone is welcome and should not be retouched out.
That is the difference between an honest image and a whitewashed one.

---

--- STYLE (do not change) ---

CAMERA: Shot on Sony A7IV, 50mm f/1.8 prime lens (85mm macro for close-up skin/treatment
detail shots).

FOCAL LENGTH / APERTURE / DOF: 50mm at f/2.2 for environmental/portrait shots — subject
sharp, background softly falling off, never fully blown out. 85mm at f/4 for close-up
treatment/hands/skin detail shots — enough depth to keep the point of contact (fingertips,
tool, skin) in crisp focus without flattening texture.

LIGHTING: Soft, diffused natural light from a large north-facing window or softbox
equivalent, key light at 45 degrees, gentle fill to lift shadows on skin — no harsh
specular highlights, no ring-light catchlights, no clinical fluorescent overhead. Time of
day reads as soft midday or early-afternoon light — bright but never harsh.

COLOR GRADE / WHITE BALANCE: Warm-neutral white balance (5200–5600K), true-to-skin color
rendering — no green or magenta cast. Grade lifts warmly into the ivory/terracotta palette
(#F3EDE4, #C98B6E) in highlights and midtones, with charcoal (#2B2B29) reserved for deep
shadow and any wardrobe/props. Sage (#9CA98C) appears only as a small accent (a plant,
a folded towel, a product cap) — never dominant. Skin tones stay accurate and warm, never
desaturated or blue-shifted — the ivory and terracotta cast lives in the light, linens and
surroundings, never pushed onto the skin itself. Deep and medium skin tones render with
their true undertone and natural luminosity, never ashy, never orange.

COMPOSITION: Generous negative space, subject off-center per rule of thirds, headroom left
for text overlay when needed. Horizontal orientation for hero/service shots, square-safe
crop for social reuse. Frames feel unhurried — nothing crowded, nothing staged-busy.

TEXTURE / FINISH: Clean editorial finish. Real skin texture is visible and celebrated — no
skin-smoothing, no HDR halos, no oversharpening, no glossy "stock photo" sheen. Fabrics,
towels, and surfaces show natural texture and slight imperfection.

NEGATIVE (exclude always): no visible text, no logos, no watermarks, no distorted or extra
fingers/hands, no uncanny-valley faces, no generic "stocky" spa cheesiness (no bamboo/zen
gong cliches, no candles-and-rose-petals tropes), no harsh clinical white light, no
oversaturated skin, no visible product branding unless explicitly requested.

--- END STYLE ---

---

## After generating

Save as `src/assets/journal-pigmentation.jpg`, then point the article at it:

```ts
// src/data/articles.ts
import pigmentationHero from '../assets/journal-pigmentation.jpg';
// …
image: pigmentationHero,
imageAlt: 'Portrait in soft daylight showing natural variation in skin tone across the cheek',
```

The article currently reuses `concern-pigmentation.jpg`, which is an honest match but
not a specific one — the same gap `CLIENT-INPUTS.md` records for the dermaplaning page.
