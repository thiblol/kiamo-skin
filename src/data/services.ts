import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';

export const categories = ['Facials', 'Scalp', 'Advanced'] as const;
export type Category = (typeof categories)[number];

export interface Service {
  name: string;
  category: Category;
  /** Written copy. Generic to the modality; never claims an outcome or timeframe. */
  description: string;
  price: string;
  href?: string;
}

/** Menu order: the entry point first, then each category from lightest to deepest. */
export const services: Service[] = [
  {
    name: 'First-Time Client Treatment',
    category: 'Facials',
    description:
      'The best place to begin. Includes a comprehensive consultation, skin analysis, customized HydraFacial, personalized booster, microcurrent, LED Light Therapy, Hydrojelly Mask, and a long term treatment plan.',
    price: verifiedPrices['first-time-client'],
    href: '/treatments/hydrafacial',
  },
  {
    name: 'HydraFacial Treatment',
    category: 'Facials',
    description:
      'A customized HydraFacial that deeply cleanses, exfoliates, extracts, and hydrates to support healthy skin and maintain your treatment results.',
    price: verifiedPrices.hydrafacial,
    href: '/treatments/hydrafacial',
  },
  {
    name: 'Dermaplane Facial',
    category: 'Facials',
    description:
      'A surgical blade lifts away dead surface cells and fine facial hair, with extractions as needed. Minimal downtime.',
    price: verifiedPrices['dermaplane-facial'],
  },
  {
    name: 'DMK Level 1 Enzyme Treatment',
    category: 'Facials',
    description:
      'Foundational enzyme therapy. Works with the skin’s own processes to clear what should not be there and rebuild the barrier.',
    price: verifiedPrices['dmk-enzyme-1'],
    href: '/treatments/dmk-enzyme-therapy',
  },
  {
    name: 'LIRA Gentle Renewal Peel',
    category: 'Facials',
    description:
      'A light peel selected for your skin on the day — acne, congestion, uneven texture, dullness or a compromised barrier.',
    price: verifiedPrices['lira-light-peel'],
    href: '/treatments/lira-peels',
  },
  {
    name: 'Keravive Scalp Treatment',
    category: 'Scalp',
    description:
      'Corrective scalp therapy. This isn’t a shampoo — it cleanses, exfoliates and hydrates the scalp itself.',
    price: verifiedPrices['keravive-scalp'],
    href: '/treatments/keravive-scalp',
  },
  {
    name: 'Keravive Scalp — 3 Treatment Series',
    category: 'Scalp',
    description:
      'The same treatment across a series of three, priced as a package. Scalp work is cumulative rather than one-off.',
    price: verifiedPrices['keravive-scalp-series'],
    href: '/treatments/keravive-scalp',
  },
  {
    name: 'Procell Microchanneling',
    category: 'Advanced',
    description:
      'Controlled micro-injury with growth factors, for acne scarring, texture and early laxity. Also treats the scalp.',
    price: verifiedPrices.procell,
    href: '/treatments/procell-microchanneling',
  },
  {
    name: 'Procell Microchanneling — 3 Treatment Series',
    category: 'Advanced',
    description:
      'Designed for clients committed to long-term correction. A series of three treatments supports progressive collagen remodeling and is recommended for concerns such as acne scars, uneven texture, fine lines, and overall skin rejuvenation. Treatments are typically scheduled 4–6 weeks apart.',
    price: verifiedPrices['procell-series'],
    href: '/treatments/procell-microchanneling',
  },
  {
    name: 'DMK Level 2 & 3 Enzyme Treatment',
    category: 'Advanced',
    description:
      'Layered Enzyme 1, 2 and 3 with corrective products. Prescribed only once Level 1 has prepared the skin.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/dmk-enzyme-therapy',
  },
  {
    name: 'LIRA Advanced Peel',
    category: 'Advanced',
    description:
      'A deeper peel for pigmentation and scarring, with strength escalated across a series rather than in one visit.',
    price: verifiedPrices['lira-advanced-peel'],
    href: '/treatments/lira-peels',
  },
];
