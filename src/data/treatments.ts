import type { ImageMetadata } from 'astro';
import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';
import hydrafacial from '../assets/treatment-hydrafacial.jpg';
import scalp from '../assets/treatment-scalp.jpg';
import enzyme from '../assets/treatment-enzyme.jpg';
import acne from '../assets/concern-acne.jpg';
import pigmentation from '../assets/concern-pigmentation.jpg';

export interface Treatment {
  slug: string;
  name: string;
  /** <title> and H1 differ: the H1 is a claim, the title is a search string. */
  title: string;
  description: string;
  headline: string;
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  goodFor: string[];
  steps: { title: string; body: string }[];
  pricing: { label: string; price: string; description?: string }[];
  /** Honest caveats. Rendered as a closing note, never omitted where present. */
  note?: string;
}

export const treatments: Treatment[] = [
  {
    slug: 'hydrafacial',
    name: 'HydraFacial',
    title: 'HydraFacial in San Diego | KIAMO Skin',
    description:
      'HydraFacial in Mission Hills, San Diego. Cleanse, extract and hydrate, with the booster and LED therapy selected for your skin. From $249.',
    headline: 'The foundation of healthy skin.',
    intro:
      'HydraFacial does three things at once: lifts away dead surface cells, vacuums out congestion, and floods the skin with serum while it is still open enough to take it. It is the most forgiving corrective treatment on the menu, which is why it is usually where a new plan starts.',
    image: hydrafacial,
    imageAlt: 'A HydraFacial treatment in progress in the KIAMO Skin studio',
    goodFor: [
      'Congested pores and blackheads',
      'Dull, dehydrated skin',
      'Uneven skin texture',
      'The foundation of a corrective treatment plan',
    ],
    steps: [
      {
        title: 'Cleanse & resurface',
        body: 'A blend of gentle exfoliating acids lifts away dead skin cells—no scrubs, no harsh abrasion.',
      },
      {
        title: 'Extract & hydrate',
        body: 'Gentle vortex extraction removes oil and debris before hydrating ingredients and antioxidants are infused into the skin.',
      },
      {
        title: 'Boost',
        body: 'A customized booster is selected based on your skin’s unique needs—from brightening to barrier support.',
      },
    ],
    pricing: [
      {
        label: 'First-Time Client Treatment',
        price: verifiedPrices['first-time-client'],
        description:
          'The best place to begin. Includes a comprehensive consultation, skin analysis, customized HydraFacial, personalized booster, microcurrent, LED Light Therapy, Hydrojelly Mask, and a long term treatment plan.',
      },
      {
        label: 'HydraFacial Treatment',
        price: verifiedPrices.hydrafacial,
        description:
          'A customized HydraFacial that deeply cleanses, exfoliates, extracts, and hydrates to support healthy skin and maintain your treatment results.',
      },
    ],
  },
  {
    slug: 'keravive-scalp',
    name: 'HydraFacial Keravive',
    title: 'Keravive Scalp Treatment in San Diego | KIAMO Skin',
    description:
      'Keravive scalp therapy in Mission Hills, San Diego. Corrective treatment for flaking, buildup and thinning — cleanse, exfoliate and hydrate the scalp.',
    headline: 'Your scalp is skin. Treat it that way.',
    intro:
      'Keravive deeply cleanses, exfoliates, and hydrates the scalp while removing buildup that can contribute to dryness, flaking, and irritation. A healthier scalp creates a better environment for healthy hair growth. In San Diego, hard water can make scalp buildup especially common, making regular scalp care an important part of maintaining a healthy scalp. Every treatment includes a take home peptide spray to continue supporting scalp health between visits.',
    image: scalp,
    imageAlt: 'Scalp therapy being performed at the part line',
    goodFor: [
      'Flaking, itching, or scalp tightness',
      'Product buildup and hard water mineral deposits',
      'Shedding accompanied by visible scalp buildup or irritation',
      'Anyone who invests in their skincare but has never treated their scalp',
    ],
    steps: [
      {
        title: 'Cleanse',
        body: 'Gently removes oil, dead skin, product buildup, and mineral buildup from the scalp.',
      },
      {
        title: 'Nourish',
        body: 'A concentrated peptide complex nourishes the scalp to support a healthier environment for healthy hair growth.',
      },
      {
        title: 'Continue at home',
        body: 'Your take-home peptide spray helps nourish the scalp between treatments to extend and support your results.',
      },
    ],
    pricing: [
      { label: 'Keravive Scalp Treatment', price: verifiedPrices['keravive-scalp'] },
      { label: '3 Treatment Series — total', price: verifiedPrices['keravive-scalp-series'] },
    ],
    note: 'Healthy scalp takes consistency. While one treatment deeply cleanses and hydrates the scalp, a series provides the best opportunity to support long term scalp health.',
  },
  {
    slug: 'dmk-enzyme-therapy',
    name: 'DMK Enzyme Therapy',
    title: 'DMK Enzyme Therapy in San Diego | KIAMO Skin',
    description:
      'DMK enzyme therapy in Mission Hills, San Diego. Enzymatic resurfacing that works with the skin’s own function to rebuild a damaged barrier.',
    headline: 'Restore skin function from within.',
    intro:
      'DMK Enzyme Therapy is designed to restore healthy skin function rather than simply exfoliating the surface. By supporting the skin’s natural processes, it helps strengthen the skin barrier while encouraging healthy circulation and lymphatic activity. It’s especially beneficial for skin that feels over-exfoliated, sensitized, inflamed, or slow to heal.',
    image: enzyme,
    imageAlt: 'An enzyme masque setting during a treatment',
    goodFor: [
      'A compromised skin barrier — stinging, redness, or tightness after products',
      'Skin recovering from over-exfoliation or aggressive at-home products',
      'Skin that stays dehydrated despite moisturizer',
      'Congested, sensitive skin that needs a gentler corrective approach',
    ],
    steps: [
      {
        title: 'Assess',
        body: 'Every DMK treatment is customized to what your skin needs that day — not a fixed protocol.',
      },
      {
        title: 'The masque',
        body: 'As the enzyme masque sets, you’ll feel a tightening and rhythmic pulsing sensation. This is an expected part of the treatment and varies from person to person.',
      },
      {
        title: 'Home care',
        body: 'DMK is designed as a complete system. Your personalized home routine supports the work done in the treatment room, helping you achieve the best possible results between visits.',
      },
    ],
    pricing: [
      { label: 'DMK Level 1 Enzyme Treatment', price: verifiedPrices['dmk-enzyme-1'] },
      { label: 'DMK Level 2 & 3 Enzyme Treatment', price: PRICE_ON_CONSULTATION },
    ],
    note: 'Level 1 comes first. Levels 2 and 3 layer the enzymes for deeper correction and are prescribed only once Level 1 has prepared the skin — so the protocol and the price are set at consultation.',
  },
  {
    slug: 'procell-microchanneling',
    name: 'Procell Microchanneling',
    title: 'Procell Microchanneling for Scarring | KIAMO Skin San Diego',
    description:
      'Procell microchanneling in Mission Hills, San Diego. Controlled micro-injury with growth factors for acne scarring and uneven texture in melanin-rich skin.',
    headline: 'Stimulate your skin’s natural repair process.',
    intro:
      'Procell Microchanneling creates controlled microchannels that activate your skin’s natural repair response while delivering a specialized growth factor serum. Over time, new collagen helps improve acne scars, fine lines, wrinkles, and uneven skin texture for smoother, healthier-looking skin. Every treatment is customized for your skin goals and skin tone.',
    image: acne,
    imageAlt: 'Portrait of smooth, healthy skin along the cheek and jaw',
    goodFor: [
      'Acne scars and uneven skin texture',
      'Enlarged pores and rough skin texture',
      'Fine lines and early loss of firmness',
      'Skin that benefits from collagen stimulation without heat or light',
    ],
    steps: [
      {
        title: 'Prepare',
        body: 'Your skin is thoroughly cleansed and prepared before treatment. Every Procell session is customized to your skin goals and concerns.',
      },
      {
        title: 'The pass',
        body: 'Treatment depth is adjusted for each area of your skin — deeper where correction is needed and lighter where skin is naturally thinner. A specialized growth factor serum is applied throughout the treatment to support your skin’s natural repair process.',
      },
      {
        title: 'Recover',
        body: 'Expect redness similar to a mild sunburn for 24–48 hours. Mild dryness or flaking may occur as your skin renews itself. Following your post-care instructions including daily SPF is essential to support healing and help minimize the risk of unwanted pigmentation, especially in melanin rich skin.',
      },
    ],
    pricing: [
      {
        label: 'Procell Microchanneling',
        price: verifiedPrices.procell,
        description:
          'The best results are typically achieved with a series rather than a single treatment. Most clients begin with three sessions spaced 4–6 weeks apart, though your treatment plan is customized during your consultation based on your skin goals, concerns, and how your skin responds.',
      },
      {
        label: 'Procell Microchanneling 3-Treatment Series',
        price: verifiedPrices['procell-series'],
        description:
          'Designed for clients committed to long-term correction. A series of three treatments supports progressive collagen remodeling and is recommended for concerns such as acne scars, uneven texture, fine lines, and overall skin rejuvenation. Treatments are typically scheduled 4–6 weeks apart.',
      },
    ],
  },
  {
    slug: 'lira-peels',
    name: 'Lira Chemical Peels',
    title: 'Chemical Peels for Melanin-Rich Skin | KIAMO Skin San Diego',
    description:
      'Lira professional chemical peels in Mission Hills, San Diego, selected for pigmentation, melasma and post-inflammatory marks in melanin-rich skin.',
    headline: 'Designed to brighten without compromising skin health.',
    intro:
      'Pigmentation is the reason most people book, and it is also where the wrong treatment does lasting damage. Melanin-rich skin responds to trauma by producing more pigment, so the strength, the acid and the pacing all have to be selected deliberately. Lira’s professional range is built for that kind of control.',
    image: pigmentation,
    imageAlt: 'Close portrait of even, clear skin in warm natural light',
    goodFor: [
      'Melasma and hormonal pigmentation',
      'Post-inflammatory marks left behind by acne',
      'Uneven tone and sun damage',
      'Dullness and rough surface texture',
    ],
    steps: [
      {
        title: 'Patch and prep',
        body: 'Most pigmentation plans begin with a period of home prep so the skin is ready before any acid is applied.',
      },
      {
        title: 'Apply',
        body: 'The peel is layered and timed to your skin’s response on the day. Strength escalates across a series rather than in one visit.',
      },
      {
        title: 'Protect',
        body: 'Daily SPF is what holds the result. Without it, pigmentation returns — and San Diego’s overcast mornings are the usual reason people stop applying it.',
      },
    ],
    pricing: [
      { label: 'LIRA Gentle Renewal Peel', price: verifiedPrices['lira-light-peel'] },
      { label: 'LIRA Advanced Peel', price: verifiedPrices['lira-advanced-peel'] },
    ],
    note: 'Peel strength is matched to your skin at consultation. The Gentle Renewal Peel refreshes and maintains; the Advanced Peel goes deeper for pigmentation and scarring. Pigmentation is treated as a series with home care between visits — there is no single-session version of this.',
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
