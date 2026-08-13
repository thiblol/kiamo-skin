# KIAMO Skin — Image Generation System

One brand. One consistent grade. Every image in this repo was generated from this
system. The Style Block is the spine — never edit it between scenes. The Scene Library
gives you the subject. The Graphic Layer system gives you the design-in-image elements.

---

## How to use

1. Copy the scene description you want.
2. Paste `--- STYLE BLOCK (always append) ---` verbatim below it.
3. If the scene needs a graphic element, append the relevant Graphic Layer spec.
4. Add the aspect ratio parameter for your tool: `--ar 16:9` (Midjourney), `ratio: 16:9` (Flux/Imagen).
5. For Midjourney: append `--style raw --v 7 --q 2`.
6. For DALL-E 4 / GPT-Image: paste as a single block. Do not split.

---

## The cardinal rules — never break these

1. **Melanin-rich skin leads.** Every portrait features Black or brown skin. This is not
   diversity casting — it is the business's stated specialism and every image must prove it.
2. **No heat, no clinical documentation.** No harsh raking low-angle light. No before/after.
   No conditions presented as flaws. Natural variation in skin tone is celebrated, not corrected.
3. **No text in the image** — except when a Graphic Layer is explicitly requested (§ Graphic Layers).
4. **No touching the follicle.** No visible needle pens, rollers, or any device penetrating skin.
5. **The style block never changes.** Consistency across the whole set is more valuable than
   any single perfect image.

---

## Scene Library

### S1 · Homepage hero — desktop (16:9, min 2400px → `hero-desktop.jpg`)

A woman with warm deep-brown skin in her early thirties lying back on a treatment bed,
head resting on soft ivory linen, eyes softly closed, face bare and unmade-up with
visible natural texture and a healthy surface sheen. Natural coils — defined volume,
individual strands catching the edge light, a few loose across the linen. She occupies
the right third of the frame, head upright and clearly readable; the left two-thirds is
soft, uncluttered ivory wall, left empty for a headline. An esthetician's hands —
ungloved — rest lightly just at the near foreground edge of frame, out of focus.
Shot slightly above eye level from beside the bed. Calm, unhurried. She has been there
a while.

**Must-states:** head position stated explicitly in the prompt. Camera never described
as overhead or "looking down the length of the body" — that produces an inverted face.
Keep curls as defined coils with individual strand detail, never a smooth uniform mass.

### S2 · Homepage hero — mobile (9:16, min 1400px → `hero-mobile.jpg`)

Vertical portrait of the same woman at bed height — head rests on ivory linen in the
lower third of the tall frame, face turned slightly toward camera, eyes closed, expression
calm. Natural coils fanned out. Bare skin, visible pores and natural texture. The upper
two-thirds of the frame is soft out-of-focus ivory linen and a warm wall receding into
shadow — empty space that carries the composition and holds a headline.

### S3 · Journal · Three kinds of dark mark (3:4 → `journal-pigmentation.jpg`)

Primary: A woman with deep brown skin in her mid-thirties in three-quarter profile
near a large window, eyes closed, face bare and unmade-up, natural variation in tone
visible across the cheek and along the jaw. Soft daylight rakes across the cheek from
camera left. Plain warm-ivory wall behind, thrown out of focus. Generous empty space
to the right of the head for a headline overlay.

**Rule:** No before/after framing. No dark patches presented as a condition. Real natural
variation in skin tone is present and beautiful — not documented.

### S4 · Journal · June Gloom is not sun protection (16:9 → `journal-uv.jpg`)

Overcast San Diego coastline. Marine layer sky — white, diffuse, luminous. A wide shot
showing the grey glare of a June morning in a coastal neighbourhood: rooftops or a long
wide street running toward the ocean, the sky heavy with cloud but bright. No people in
the primary frame — the point is the environmental light and the deceptive brightness of
a sky that reads as safe. One or two small distant figures are acceptable. Warm foreground,
cool mid-sky. The image asks a question: "you thought that was protection?"

### S5 · Journal · San Diego hard water and your scalp (16:9 → `journal-water.jpg`)

Close macro: water — still, not running — pooling in the palm or resting on the back
of a hand with warm brown skin. Shot from above or a slight angle at 85mm macro.
Late-afternoon warm light, one strong directional source catches the water's surface
tension. The focus falls on where the water contacts the skin — that edge. Nothing else
in the frame but skin, water, and the warm shadow behind. Quiet and mineral.

### S6 · Journal · Microneedling on dark skin (3:4 portrait → `journal-microchanneling.jpg`)

A woman with deep brown skin in her late twenties, seated upright and turned three-quarters
toward a tall window at camera left, chin lifted slightly, eyes open and looking off-frame
past the light. Face bare and unmade-up, natural texture and a soft sheen along the
cheekbone and brow, fine vellus hair rimmed by the light at the jaw, natural variation
in tone across the cheek left exactly as it is. Hair in defined natural coils drawn back
from the face with a soft ivory cloth band. Her head sits 35% in from the left edge and
35% down from the top of the vertical frame. Below and to the right: out-of-focus ivory
linen treatment bed and one folded sage towel receding into warm shadow, terracotta wall
behind. She has just sat up — settled, unhurried, mid-thought.

**Must-not:** no needle pen, no dermaroller, no cartridge tip, no device touching skin.

**Crop rule:** face and both shoulders must sit within the middle 56% of the height — the
journal index card crops the 3:4 asset to 4:3 from centre and the face must survive that.

### S7 · Journal · Dermaplaning for dark skin — GRAPHIC LAYER scene (3:4 → `journal-dermaplaning.jpg`)

*(See Graphic Layer G1 for the composited element.)*

Extreme close-up at 85mm f/4 — the left cheekbone and jawline of a woman with deep
brown skin, Fitzpatrick V. The skin texture is fully visible: natural pores, fine vellus
hair lit at the edge by a single tall window source at camera left. The cheekbone surface
occupies the upper half of the frame, the jaw curving down and out of focus in the lower
half. No face visible — this is pure skin, specific, tactile, and warm. A dermaplaning
blade — held by an esthetician's thumb and forefinger — is positioned above the cheekbone,
mid-air, not touching. The blade is sharp and clean. The esthetician's knuckles and wrist
are visible but softly out of focus above the blade. Camera angle is level with the
cheekbone surface. Late-afternoon key light from camera left catches the blade's edge as
a thin highlight line. Ivory and warm terracotta in the background.

The lower-left quadrant of the frame has intentional visual breathing room — open skin
with no blade, softly lit — to receive the graphic overlay described in G1.

---

## Graphic Layers

A Graphic Layer is a design element composited into or requested as part of the image
generation prompt. These are what separate an editorial image from a stock photo.

Each Graphic Layer spec below is appended to the scene description when requested.
For AI generation: describe the graphic as part of the image prompt, not as post-production.
For real post-production: generate the base scene clean, then composite the layer in Figma
or Photoshop at the specified opacity and color.

### G1 · The Angle Annotation (for dermaplaning article)

Composited in the lower-left quadrant of the image — the breathing-room zone described
in S7 — is a minimal technical annotation in the style of a precision diagram:

Two clean lines drawn at different angles from a common origin point:
- A long thin line at exactly 45° upward-right, labeled with the numeral `45°` in a
  clean, lightweight sans-serif (Jost 300 equivalent), approximately 13px at final render
  size. This line is ivory (`#FDFBF7`) at 90% opacity.
- A shorter line at approximately 20° from horizontal — nearly flat — labeled with a
  small × mark at its endpoint. Same color at 60% opacity, reading as secondary.

A single thin horizontal baseline connects the two origin points. The whole diagram
reads as a precision instrument annotation — not a slide, not a medical graphic — the
kind of detail you would see in a high-end magazine spread about technique. It should
feel designed, not added. The typography is minimal and confident.

**Generation note:** Request the diagram as part of the scene — "a subtle geometric
angle annotation composited in the lower left, two lines from a common origin, one
at 45° labeled '45°', one near-flat labeled with a small x, in pale ivory, precision
style." For best results in Midjourney use `--style raw` so it does not soften the graphic.

### G2 · The Fitzpatrick Gradient (for melanin-specialism pages)

A horizontal strip of six circular swatches, each approximately 24px diameter at
final render size, sitting at the bottom of the image in a single row with equal spacing.
The swatches range from Fitzpatrick I (light ivory-beige) to Fitzpatrick VI (very deep
brown), using accurate skin tone values, not cartoon colors. A thin ivory hairline sits
above the strip. No labels, no numbers — the range communicates without text.
Color: the strip background matches the image's lightest area.

### G3 · The Data Strip (for statistics/cost articles)

A clean horizontal bar anchored to the bottom edge of the image, approximately 48px
tall at final render size, in `rgba(43,43,41,0.75)` — near-black at 75% opacity.
Inside: a single line of data in Jost 300, approximately 12px, in ivory. Example:
`$199 · Mission Hills, San Diego · Licensed Esthetician, CA Board`.
This is a caption bar, not a CTA. Use only when the article has a specific price or
statistic worth surfacing in the image itself.

### G4 · The Rule Line (minimal editorial, any article)

A single thin horizontal ivory line at exactly one-third of the image height from the
bottom, running the full width at 30% opacity. Acts as a compositional anchor and
editorial signal. No text. Easiest to composite; use when the other layers feel too heavy.

---

## Portrait system — how to specify the subject

Use these as slots. They are interchangeable across scenes:

**P1 · Window portrait, face visible:**
`A woman with [SKIN TONE] skin in her [AGE DECADE], in [POSITION], eyes [open/closed],
face bare and unmade-up with natural texture, [HAIR DESCRIPTION]. [LIGHT DIRECTION]
window light. Bare skin, visible pores and natural sheen. No makeup.`

**P2 · No-face, hands and surface:**
`An esthetician's hands — ungloved — [ACTION] over [BODY PART] with [SKIN TONE] skin.
The client's face turned away and out of frame past the shoulder. 85mm at f/4.
[LIGHT DIRECTION]. [SETTING].`

**P3 · Close-up skin detail (no face, no hands):**
`Extreme close-up of [BODY PART] with [SKIN TONE] skin. Natural texture visible: pores,
fine vellus hair rimmed by edge light, [SPECIFIC SURFACE FEATURE]. [LIGHT DIRECTION]
from camera left. No other elements. The image is entirely about this surface.`

Skin tone vocabulary (use accurately):
- warm ivory-beige (Fitzpatrick I–II)
- warm tan (Fitzpatrick III)
- medium brown (Fitzpatrick IV)
- deep brown (Fitzpatrick V)
- very deep brown (Fitzpatrick VI)

KIAMO's primary subject range: Fitzpatrick IV–VI. This is the whole practice.

---

## After generating

**Save naming convention:**
- Hero desktop: `src/assets/hero-desktop.jpg`
- Hero mobile: `src/assets/hero-mobile.jpg`
- Journal articles: `src/assets/journal-[slug].jpg`
- Treatment pages: `src/assets/treatment-[slug].jpg`
- Concern tiles: `src/assets/concern-[name].jpg`

**Check at two crops before accepting:**
- Article hero: `aspect-[0.85]` anchored at `object-[35%_35%]`
- Journal index card: `aspect-4/3` cropped from centre

If the face lands outside both crop windows, regenerate. Do not move the crop.

**Then update `articles.ts`:**
```ts
import dermaplaning from '../assets/journal-dermaplaning.jpg';
// in the article object:
image: dermaplaning,
imageAlt: 'Close-up of a dermaplaning blade at 45 degrees above deep brown skin, with angle annotation',
```

---

## Style Block — append to every prompt, never edit

```
CAMERA: Sony A7IV, 50mm f/1.8 prime for environmental/portrait. 85mm f/4 macro for
close-up skin/treatment/hands detail. Never wide-angle distortion. Never fisheye.

FILM EMULATION: Kodak Portra 400. Warm negative film character — slight grain, rich
shadow detail, no crushed blacks, no blown highlights. Not desaturated. Not HDR.
Not cinematic teal-orange. Warm and alive.

APERTURE/DOF: f/2.2 for portraits — subject sharp, background softly falling off
without blowing out. f/4 for skin detail — enough depth to keep the contact zone in
crisp focus without flattening texture.

LIGHT SOURCE: One large soft source — a tall window or large diffused equivalent —
placed 60–75 degrees off the camera axis and slightly behind the subject's plane.
Light wraps around the form and leaves a bright edge along the cheekbone, jaw or
shoulder. Late-afternoon quality: warm, angled, with somewhere for the shadows to go.
Contrast ratio approximately 3:1 — the shadow side stays readable, never filled flat.
Fill from ambient bounce off ivory walls and linens only. Never a ring light. Never
on-camera flash. Never clinical fluorescent overhead.

SPECULARS: Soft speculars are wanted — sheen along the cheekbone, the brow, the bridge
of the nose, the lower lip. On deep melanin-rich skin, matte renders as ashy — the
sheen is non-negotiable. Speculars stay soft and shaped by the large source, never
blown to paper white, never a hard hotspot.

BACKGROUND: Light lands on the background — a gradient across the wall, falloff into
shadow at the frame edge. Air in the room. Faint atmosphere. Never a flat painted backdrop.

COLOR GRADE: Warm key around 5600K against cooler ambient shadow — lit side warm, shadow
side drifting slightly to skylight blue. No green or magenta cast.

PALETTE: Ivory #F3EDE4 and terracotta #C98B6E in walls, linens and props. Charcoal
#2B2B29 for deep shadow and dark wardrobe. Sage #9CA98C as a small accent only — never
dominant. Something in every frame reaches near-black so the highlights have somewhere
to sing from.

SKIN TONES: Accurate and warm. Never desaturated. Never blue-shifted. Deep and medium
tones render with true undertone, natural luminosity and surface sheen. Never ashy.
Never orange. Never matte. The palette lives in the surroundings, never pushed onto
the skin itself.

COMPOSITION: Subject off-center, rule of thirds. Headroom for text overlay when needed.
Open space is lit space — a gradient, a falloff, light on a wall — never a dead flat area.

PRESENCE: One moment lifted out of a longer one, not a pose. Something is underway.
Where a face is visible: eyes open, gaze off-camera and occupied, expression composed
and warm. A face at rest still has someone behind it.

TEXTURE: Clean editorial finish, not clean digital. Real skin texture celebrated — pores,
fine vellus hair rimmed by key light, flyaway hairs catching edge light. No skin-smoothing.
No oversharpening. No glossy stock-photo plastic. Fine film grain. Slight corner falloff.

EXCLUDE ALWAYS: no visible text or logos unless a Graphic Layer specifies it, no distorted
or extra fingers, no uncanny-valley faces, no spa clichés (bamboo, candles, white robe),
no harsh clinical white light, no oversaturated skin, no product branding, no matte or
powdery skin, no flat frontal fill light, no featureless backdrop, no waxy CGI skin,
no vacant expression, no clinical documentation of a skin condition, no ring-light
catchlights, no needle pens or dermarollers touching skin.
```