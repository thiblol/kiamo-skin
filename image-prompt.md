# Image prompt — KIAMO Skin

Paste `{scene}` from the library below, then everything from `--- STYLE ---` down.
The style block is fixed and should not be edited between generations: it is what
keeps the whole image set looking like one studio rather than a stock library.

---

## Scene library

### Homepage hero — desktop (16:9, min 2400px → `src/assets/hero-desktop.jpg`)

> A woman with warm tan skin in her early thirties lying back on a treatment bed,
> head resting on soft ivory linen, eyes softly closed, face bare and unmade-up with
> visible natural texture and a healthy sheen. Her hair is natural curls — defined,
> voluminous, spilling loose across the linen around her head and shoulders, a few
> curls catching the light at the edge. She occupies the right third of the frame,
> head upright and clearly readable; the left two-thirds is soft, uncluttered ivory
> wall and the blurred edge of a linen headrest, left empty for a headline. An
> esthetician's hands, out of focus in the near foreground, rest lightly at the very
> edge of frame. Shot slightly above eye level from beside the bed. Calm and
> unhurried — she looks like she has been lying there a while.

### Homepage hero — mobile (9:16, min 1400px → `src/assets/hero-mobile.jpg`)

> Vertical portrait of a woman with warm tan skin in her early thirties lying back on
> a treatment bed, photographed from her side at bed height — her head rests on soft
> ivory linen in the lower third of the tall frame, face upright and clearly readable,
> turned slightly toward the camera, eyes closed, expression calm. Natural curly hair
> fanned out across the linen beneath and around her head. Bare skin, visible pores
> and natural texture, no makeup. Above her the frame is filled with the soft
> out-of-focus ivory of a linen-draped bed and a plain warm wall receding into gentle
> shadow toward the top. Quiet, still, intimate — the emptiness above her carries the
> composition.

**Two rules for both hero frames.** State the head's position in the frame explicitly
and never describe an overhead camera — "from directly above, looking down the length
of the body" is what produced an upside-down face on the first mobile render. And keep
the curls as curls: defined coils and natural volume with individual strands catching
the edge light, never straightened, never a smooth uniform mass.

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

### Journal — "Microneedling on dark skin" (article hero, 3:4 portrait, 1200 × 1600 → `src/assets/journal-microchanneling.jpg`)

Primary — recommended:

> A woman with deep brown skin in her late twenties, seated upright and turned
> three-quarters toward a tall window at camera left, chin lifted slightly, eyes open
> and looking off-frame past the light. Face bare and unmade-up, natural texture and a
> soft sheen along the cheekbone and brow, fine vellus hair rimmed by the light at the
> jaw, natural variation in tone across the cheek left exactly as it is. Hair in
> defined natural coils drawn back from the face with a soft ivory cloth band, a few
> coils loose at the temple. Her head sits about 35% in from the left edge and 35% down
> from the top of a vertical frame — clearly readable, never near an edge. Below and to
> the right, the out-of-focus ivory of a linen-draped treatment bed and one folded sage
> towel recede into warm shadow, with a terracotta wall catching the light behind.
> Late-afternoon light rakes gently from camera left so the surface of the skin is
> legible without being examined. She has just sat up — settled, unhurried, mid-thought.

Alternative — the serum pass, no face:

> An esthetician's hands, ungloved, pressing a few drops of clear serum along a client's
> cheekbone with flat fingertips, the client's face turned away and out of frame past
> the shoulder. 85mm at f/4 — the point of contact crisp, everything else falling away.
> Warm neutral treatment room, folded linen and a terracotta wall in soft focus behind.

**The rule specific to this article: never depict a needle pen, dermaroller, cartridge
tip, or any device touching skin.** KIAMO does not perform needle-pen microneedling, and
the whole argument of the piece is that microchanneling is a different modality. A pen in
the frame would contradict the copy sitting above it. As with the pigmentation article:
no before/after framing, no dark patches presented as a condition, nothing in the
register of clinical documentation.

**Why 3:4 and why 35% / 35%.** The file is cropped twice. The article hero is
`aspect-[0.85]` anchored at `object-[35%_35%]`, which keeps 88% of a 3:4 source's height
and leaves the face sitting at 35%. The journal *index* card is `aspect-4/3` and crops
from **centre**, keeping only the middle 56% of the height — a face at 35% down lands at
roughly 23% down in the card, comfortably inside. Keep the face and both shoulders within
that middle band and one file serves both. Check the index card before accepting a render;
it is the crop that disagrees with the hero.

---

## The one rule specific to "Three kinds of dark mark"

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
detail shots). Rendering reference: warm negative film — Kodak Portra 400. Rich and warm,
never punchy or contrast-crushed.

FOCAL LENGTH / APERTURE / DOF: 50mm at f/2.2 for environmental/portrait shots — subject
sharp, background softly falling off, never fully blown out. 85mm at f/4 for close-up
treatment/hands/skin detail shots — enough depth to keep the point of contact (fingertips,
tool, skin) in crisp focus without flattening texture.

LIGHTING: One large soft source — a tall window, or a big diffused equivalent — placed
around 60–75 degrees off the camera axis and slightly behind the subject's plane, so the
light wraps around the form and leaves a bright edge along the cheekbone, jaw or shoulder.
Late-afternoon light: warm, angled, with somewhere for the shadows to go. Contrast around
3:1 — the shadow side stays readable but is genuinely darker, never filled flat. Fill comes
from ambient bounce off the walls and linens only, never a second lamp.

Soft speculars are wanted, not avoided: sheen along the cheekbone, the brow, the bridge of
the nose, the lower lip. That surface sheen is what makes skin read as living rather than
powdered, and it matters most on deep skin, where matte renders as ashy. Speculars stay soft
and shaped by the large source — never blown to paper white, never a hard hotspot.

Light must also land on the background: a gradient across the wall, a falloff into shadow at
the frame edge, occasionally the soft shadow of a window frame or a plant. Air in the room,
faint atmosphere, never a flat painted backdrop.

The light reveals; it does not examine. No hard low-angle raking across skin — that is
dermatological documentation lighting, and it is the wrong register here. Still no ring-light
catchlights, no on-camera flash, no clinical fluorescent overhead.

COLOR GRADE / WHITE BALANCE: Warm key around 5600K against cooler ambient shadow — the lit
side warm, the shadow side drifting slightly to skylight blue. That split is what gives the
image depth; a single flat white balance across the frame is what kills it. No green or
magenta cast.

Palette: ivory and terracotta (#F3EDE4, #C98B6E) live in the light, walls, linens and props —
terracotta present as a real surface in frame, not only as a tint in the grade. Charcoal
(#2B2B29) for deep shadow and wardrobe. Sage (#9CA98C) as a small accent only (a plant, a
folded towel, a cap) — never dominant. Something in every frame reaches near-black, so the
image has a floor and the highlights have somewhere to sing from.

Skin tones stay accurate and warm, never desaturated or blue-shifted — the ivory and
terracotta cast lives in the surroundings, never pushed onto the skin itself. Deep and medium
skin tones render with their true undertone, natural luminosity and sheen. Never ashy, never
orange, never matte.

COMPOSITION: Subject off-center per rule of thirds, headroom left for text overlay when
needed. Horizontal orientation for hero/service shots, square-safe crop for social reuse.
Open space is lit space — a gradient, a falloff, light on a wall. Air, never a dead flat
area of empty colour.

PRESENCE: Every frame should read as one moment lifted out of a longer one, not a pose held
for the camera. Something is underway — a half-turn, a hand mid-gesture, weight settling on
one hip, fabric still falling, breath. Where a face is visible and the scene does not say
otherwise: eyes open, gaze off-camera and occupied, the expression composed and warm rather
than blank. A face at rest still has someone behind it.

TEXTURE / FINISH: Clean editorial finish, not a clean digital one. Real skin texture is
visible and celebrated — pores, fine vellus hair rimmed by the key light, flyaway hairs
catching the edge light, the natural asymmetry of a real face. No skin-smoothing, no HDR
halos, no oversharpening, no glossy "stock photo" plastic. Fine film grain rather than
sterile digital cleanliness. Gentle optical character: slight corner falloff, a faint bloom
where the light clips the frame edge. Fabrics, towels and surfaces show natural texture and
slight imperfection.

NEGATIVE (exclude always): no visible text, no logos, no watermarks, no distorted or extra
fingers/hands, no uncanny-valley faces, no generic "stocky" spa cheesiness (no bamboo/zen
gong cliches, no candles-and-rose-petals tropes), no harsh clinical white light, no
oversaturated skin, no visible product branding unless explicitly requested. Also: no matte
or powdery skin, no flat frontal fill light, no shadowless midday flatness, no dead
featureless backdrop, no waxy CGI skin, no vacant or sedated expression, and nothing that
reads as clinical documentation of a condition.

--- END STYLE ---

---

## After generating

**Hero:** save the wide render as `src/assets/hero-desktop.jpg` and the tall one as
`src/assets/hero-mobile.jpg`, overwriting what is there. `Hero.astro` imports both by
name, so no code change is needed — but check the headline stays legible at 375px,
640px and 1400px. Spec §4.1 forbids adding a scrim, so if the copy fights the image,
regenerate with more empty wall rather than darkening the photograph.

**Journal:** save as `src/assets/journal-pigmentation.jpg`, then point the article at it:

```ts
// src/data/articles.ts
import pigmentationHero from '../assets/journal-pigmentation.jpg';
// …
image: pigmentationHero,
imageAlt: 'Portrait in soft daylight showing natural variation in skin tone across the cheek',
```

The article currently reuses `concern-pigmentation.jpg`, which is an honest match but
not a specific one — the same gap `CLIENT-INPUTS.md` records for the dermaplaning page.

**Journal — microchanneling:** save as `src/assets/journal-microchanneling.jpg`, then:

```ts
// src/data/articles.ts
import microchanneling from '../assets/journal-microchanneling.jpg';
// …
image: microchanneling,
imageAlt: 'Seated portrait in late-afternoon window light, bare skin showing its natural texture and tone',
```

Check the crop at both aspect ratios — `aspect-[0.85]` on the article hero and `4:3` on
the journal index card — before accepting the render.
