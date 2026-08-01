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
  pricing: { label: string; price: string }[];
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
    headline: 'Cleanse, extract, hydrate — in one pass.',
    intro:
      'HydraFacial does three things at once: lifts away dead surface cells, vacuums out congestion, and floods the skin with serum while it is still open enough to take it. It is the most forgiving corrective treatment on the menu, which is why it is usually where a new plan starts.',
    image: hydrafacial,
    imageAlt: 'A HydraFacial treatment in progress in the KIAMO Skin studio',
    goodFor: [
      'Congestion and blackheads across the nose, chin and forehead',
      'Dull, dehydrated skin that no longer holds product',
      'Sensitive skin that reacts badly to manual extraction',
      'A first corrective treatment before deciding on a longer plan',
    ],
    steps: [
      {
        title: 'Cleanse and resurface',
        body: 'A gentle acid blend loosens dead cells so the skin underneath is reachable. No scrub, no grit.',
      },
      {
        title: 'Extract and hydrate',
        body: 'Suction clears the pore of sebum and debris, then hyaluronic acid and antioxidants go straight back in.',
      },
      {
        title: 'Boost',
        body: 'A targeted booster is chosen for what your skin is doing that week — brightening, calming or barrier support.',
      },
    ],
    pricing: [
      { label: 'First Time Client Treatment', price: verifiedPrices['first-time-client'] },
      { label: 'HydraFacial Treatment', price: verifiedPrices.hydrafacial },
    ],
    note: 'The First Time Client treatment adds a full consultation, a customised booster with LED therapy and a jelly mask. It is the better first visit if you have not been treated here before.',
  },
  {
    slug: 'keravive-scalp',
    name: 'HydraFacial Keravive',
    title: 'Keravive Scalp Treatment in San Diego | KIAMO Skin',
    description:
      'Keravive scalp therapy in Mission Hills, San Diego. Corrective treatment for flaking, buildup and thinning — cleanse, exfoliate and hydrate the scalp.',
    headline: 'Your scalp is skin. Treat it that way.',
    intro:
      'Keravive is not a shampoo and not a scalp massage. It cleanses, exfoliates and hydrates the scalp itself, then leaves you with a take-home spray that keeps the work going between visits. San Diego’s hard water makes buildup a genuine local problem, and buildup is where flaking, itch and weak growth usually start.',
    image: scalp,
    imageAlt: 'Scalp therapy being performed at the part line',
    goodFor: [
      'Flaking, itching or tightness across the scalp',
      'Heavy product and mineral buildup from hard water',
      'Thinning or shedding where the scalp looks congested',
      'Anyone who treats their face carefully and has never treated their scalp',
    ],
    steps: [
      {
        title: 'Cleanse',
        body: 'Detachable tips work section by section, lifting sebum, dead skin and mineral residue off the scalp.',
      },
      {
        title: 'Stimulate',
        body: 'Peptides and growth factors are delivered directly to the follicle rather than sitting on the hair.',
      },
      {
        title: 'Continue at home',
        body: 'You leave with the Keravive take-home spray. Using it is not optional — it is most of the result.',
      },
    ],
    pricing: [
      { label: 'Keravive Scalp Treatment', price: verifiedPrices['keravive-scalp'] },
      { label: '3 Treatment Series — per session', price: verifiedPrices['keravive-scalp-series'] },
    ],
    note: 'Scalp work is cumulative. A single session cleans; a series changes how the scalp behaves, which is why it is priced lower per session.',
  },
  {
    slug: 'dmk-enzyme-therapy',
    name: 'DMK Enzyme Therapy',
    title: 'DMK Enzyme Therapy in San Diego | KIAMO Skin',
    description:
      'DMK enzyme therapy in Mission Hills, San Diego. Enzymatic resurfacing that works with the skin’s own function to rebuild a damaged barrier.',
    headline: 'Rebuild the barrier instead of stripping it.',
    intro:
      'DMK works on a different premise to most resurfacing: rather than removing tissue and waiting for repair, the enzyme masque puts the skin through a controlled flush that clears what should not be there and leaves what should. It is the treatment for skin that has been over-exfoliated, over-treated, or is reacting to everything.',
    image: enzyme,
    imageAlt: 'An enzyme masque setting during a treatment',
    goodFor: [
      'A compromised barrier — stinging, redness, tightness after products',
      'Skin damaged by aggressive at-home acids or scrubs',
      'Dehydration that does not respond to moisturiser',
      'Congestion alongside sensitivity, where a peel would be too much',
    ],
    steps: [
      {
        title: 'Assess',
        body: 'The protocol is chosen from what the skin is doing on the day, not from a fixed menu.',
      },
      {
        title: 'The masque',
        body: 'The enzyme masque sets firm and holds for the duration. You will feel a strong pulsing — that is the intended effect, not a reaction.',
      },
      {
        title: 'Home prescriptive',
        body: 'DMK is a system. The in-studio work is paired with a home routine, and results track how closely that is followed.',
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
    headline: 'For scarring, the skin has to be asked to rebuild.',
    intro:
      'Microchanneling makes thousands of controlled micro-channels in the skin and delivers growth factors through them. The channels close within hours; the repair response runs for weeks. It is the most direct answer on the menu for acne scarring and textural change, and it is dose-controlled — which matters when you are treating deeper skin tones.',
    image: acne,
    imageAlt: 'Portrait of smooth, healthy skin along the cheek and jaw',
    goodFor: [
      'Acne scarring and post-inflammatory texture',
      'Enlarged pores and uneven surface',
      'Fine lines and early laxity',
      'Skin that needs collagen stimulation without heat or light',
    ],
    steps: [
      {
        title: 'Prepare',
        body: 'The skin is cleansed and, in most protocols, numbed before the pass begins.',
      },
      {
        title: 'The pass',
        body: 'Depth is set for the area and for your skin — deeper through scarred tissue, lighter across thinner areas.',
      },
      {
        title: 'Recover',
        body: 'Expect to look flushed for a day or two. Sun protection for the following week is not negotiable, particularly in melanin-rich skin.',
      },
    ],
    pricing: [{ label: 'Procell Microchanneling', price: verifiedPrices.procell }],
    note: 'Scarring responds to a series rather than a single session — three treatments spaced four to six weeks apart is the usual recommendation. The number is set at consultation, once the depth of the scarring is clear.',
  },
  {
    slug: 'lira-peels',
    name: 'Lira Chemical Peels',
    title: 'Chemical Peels for Melanin-Rich Skin | KIAMO Skin San Diego',
    description:
      'Lira professional chemical peels in Mission Hills, San Diego, selected for pigmentation, melasma and post-inflammatory marks in melanin-rich skin.',
    headline: 'Peels chosen for how your skin pigments.',
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
