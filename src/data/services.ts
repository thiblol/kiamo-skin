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
    name: 'First Time Client Treatment',
    category: 'Facials',
    description:
      'A consultation and skin analysis, then a HydraFacial tailored to what comes out of it — booster, LED and jelly mask included.',
    price: verifiedPrices['first-time-client'],
    href: '/treatments/hydrafacial',
  },
  {
    name: 'HydraFacial Treatment',
    category: 'Facials',
    description:
      'Cleanse, extract and hydrate in one pass. Non-irritating, customised to your skin, and no downtime after it.',
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
