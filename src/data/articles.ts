import type { ImageMetadata } from 'astro';
import uv from '../assets/journal-uv.jpg';
import water from '../assets/journal-water.jpg';

export interface Article {
  slug: string;
  /** H1. */
  headline: string;
  title: string;
  description: string;
  /** Editorial standfirst under the H1. */
  standfirst: string;
  readingTime: string;
  /** ISO date. Taken from git history, never invented — Article schema needs it. */
  datePublished: string;
  dateModified: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Simple ordered blocks — enough for two demo articles, no CMS needed. */
  body: ({ h2: string } | { p: string } | { ul: string[] })[];
  /** Internal link out at the end of the piece. */
  cta: { label: string; href: string };
}

export const articles: Article[] = [
  {
    slug: 'june-gloom-is-not-sun-protection',
    headline: 'June gloom is not sun protection',
    title: 'June Gloom Is Not Sun Protection | KIAMO Skin San Diego',
    description:
      'San Diego’s marine layer hides UV, it does not block it. Why overcast mornings are the most common cause of pigmentation we treat, and what to do about it.',
    standfirst:
      'The marine layer is the single most expensive misunderstanding in San Diego skincare. It looks like cover. It is not cover.',
    readingTime: '4 min read',
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    image: uv,
    imageAlt: 'Overcast San Diego coastline under a bright marine layer',
    body: [
      {
        p: 'Every May and June, the same conversation happens in the treatment room. Someone has been diligent all winter, their pigmentation has visibly lifted, and then it comes back over a few grey weeks. The assumption is that something in the routine stopped working. Almost always, what actually happened is that the sunscreen came off the counter because the sky went white.',
      },
      { h2: 'What the marine layer actually does' },
      {
        p: 'Cloud cover scatters visible light, which is why an overcast morning feels dim and cool. Ultraviolet radiation behaves differently. UVA in particular passes through thin cloud with very little loss, and the UV index across San Diego regularly sits at 8 to 10 through late spring and summer — including on mornings when it never feels bright. The light your eyes use to judge risk and the light your skin responds to are not the same light.',
      },
      {
        p: 'That gap matters more the more melanin you have. Pigment cells respond to UVA and to heat as well as to UVB, and in melanin-rich skin they respond enthusiastically. Melasma in particular is driven by a combination of hormones, heat and UVA — which is exactly the combination a mild, overcast San Diego day supplies without ever announcing itself.',
      },
      { h2: 'Why this undoes treatment specifically' },
      {
        p: 'Any corrective work on pigmentation — peels, microchanneling, brightening protocols — briefly makes the skin more reactive while it repairs. Ask that skin to also handle unprotected UVA exposure and you get rebound pigmentation, often darker than what you started with. This is the mechanism behind most of the stories that begin "I had a peel once and it made my dark spots worse."',
      },
      {
        p: 'It is also why pigmentation is treated here as a series with home care between visits, rather than as a single dramatic session. The treatment lifts the pigment. The sunscreen is what decides whether it stays lifted.',
      },
      { h2: 'What to do instead' },
      {
        ul: [
          'Apply broad-spectrum SPF 30 or higher every morning, regardless of what the sky is doing — make it part of getting dressed, not a weather decision.',
          'Use enough. Roughly two finger-lengths for the face and neck. Most people apply a third of what they need and get a third of the protection.',
          'Reapply if you are outdoors, and treat a car commute as outdoors — window glass filters UVB well and UVA poorly.',
          'Add a tinted formula if you are treating melasma. Iron oxides block visible light, which contributes to pigmentation in a way clear sunscreens do not address.',
          'Do not stop in winter. San Diego’s UV index does not drop to zero in December.',
        ],
      },
      {
        p: 'None of this is exciting, and that is rather the point. The most effective step in a pigmentation plan is the one you repeat two hundred times a year without thinking about it.',
      },
    ],
    cta: { label: 'See peels for pigmentation', href: '/treatments/lira-peels' },
  },
  {
    slug: 'san-diego-hard-water-and-your-scalp',
    headline: 'San Diego hard water and your scalp',
    title: 'Hard Water and Your Scalp in San Diego | KIAMO Skin',
    description:
      'San Diego tap water runs around 16 grains per gallon. What that mineral load does to your scalp, and why flaking and buildup are so common locally.',
    standfirst:
      'If your scalp flakes, itches, or feels coated no matter what shampoo you buy, the shampoo may not be the variable worth changing.',
    readingTime: '4 min read',
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    image: water,
    imageAlt: 'Water falling over a hand, lit from the side',
    body: [
      {
        p: 'San Diego imports most of its water, and it arrives hard. Depending on the season and the source, local supply runs in the region of 16 grains per gallon — comfortably in the "hard" band, and high enough that the effects are visible on glassware, on fixtures, and on you.',
      },
      { h2: 'What hardness actually means' },
      {
        p: 'Hard water carries dissolved calcium and magnesium. Those minerals react with the surfactants in shampoo and with the oils on your skin to form an insoluble residue — the same film that leaves spots on a clean glass. On the scalp it does not rinse away cleanly. It layers.',
      },
      {
        p: 'Over weeks that film builds at the follicle opening alongside sebum and dead skin. The scalp responds the way any occluded skin does: it flakes, it itches, and its barrier stops holding water properly. Hair coming through that environment picks up the same residue, which is why it can feel simultaneously dry and heavy, and why product suddenly seems to stop working.',
      },
      { h2: 'Why this gets mistaken for dandruff' },
      {
        p: 'Flaking has several possible causes, and mineral buildup with barrier dryness looks a great deal like seborrheic dermatitis from the outside. The usual response is an anti-dandruff shampoo, which is formulated to control yeast rather than dissolve mineral residue. Sometimes it helps a little, by stripping. Often it makes a dry scalp drier, and the flaking returns within a fortnight.',
      },
      {
        p: 'The tell is texture. Buildup feels like a coating that returns a day or two after washing, usually with the scalp tight rather than inflamed. That is a cleansing and hydration problem, not a fungal one.',
      },
      { h2: 'What actually helps' },
      {
        ul: [
          'Clarify deliberately rather than constantly — a chelating or clarifying wash every one to two weeks removes mineral residue that daily shampoo leaves behind.',
          'Hydrate the scalp itself, not just the hair. Leave-on scalp serums reach skin that conditioner is designed to avoid.',
          'Consider a shower filter. It will not soften water fully, but it reduces the load.',
          'Do not scratch flakes off. That damages the barrier and starts the cycle again.',
          'Treat the scalp properly if it has been neglected for years. A professional treatment resets the surface in a way home washing cannot.',
        ],
      },
      {
        p: 'That last point is what HydraFacial Keravive is for: it cleanses, exfoliates and hydrates the scalp itself, section by section, then sends you home with the spray that keeps the result. In a city with water this hard, scalp care is not a luxury add-on. It is maintenance.',
      },
    ],
    cta: { label: 'See Keravive scalp therapy', href: '/treatments/keravive-scalp' },
  },
];
