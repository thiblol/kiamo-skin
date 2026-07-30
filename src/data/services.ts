import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';

export const categories = ['Facials', 'Scalp', 'Advanced', 'Add-ons'] as const;
export type Category = (typeof categories)[number];

export interface Service {
  name: string;
  category: Category;
  /** Written copy. Generic to the modality; never claims an outcome or timeframe. */
  description: string;
  /** Only set where spec §2 verified it. Omitted otherwise — never estimated. */
  duration?: string;
  price: string;
  href?: string;
}

const deluxe = verifiedPrices['hydrafacial-deluxe'];
const keravive = verifiedPrices['keravive-scalp'];
const express = verifiedPrices['hydrafacial-express'];

/** Spec §6 §5 order: Deluxe → Keravive → Express → Procell → DMK → Lira → add-ons. */
export const services: Service[] = [
  {
    name: 'Deluxe HydraFacial',
    category: 'Facials',
    description:
      'Cleanse, extract and hydrate, with the boosters, LED and microcurrent your skin is actually asking for.',
    duration: deluxe.duration,
    price: deluxe.price,
    href: '/treatments/hydrafacial',
  },
  {
    name: 'HydraFacial Keravive',
    category: 'Scalp',
    description:
      'Corrective scalp therapy. This isn’t a shampoo — it cleanses, exfoliates and hydrates the scalp itself.',
    duration: keravive.duration,
    price: keravive.price,
    href: '/treatments/keravive-scalp',
  },
  {
    name: 'Express HydraFacial',
    category: 'Facials',
    description: 'The core three steps without the add-ons. A maintenance visit between corrections.',
    duration: express.duration,
    price: express.price,
    href: '/treatments/hydrafacial',
  },
  {
    name: 'Procell Microchanneling',
    category: 'Advanced',
    description: 'Controlled micro-injury with growth factors, for acne scarring and texture.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/procell-microchanneling',
  },
  {
    name: 'DMK Enzyme Therapy',
    category: 'Advanced',
    description: 'Enzymatic resurfacing that works with the skin’s own function to rebuild the barrier.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/dmk-enzyme-therapy',
  },
  {
    name: 'Lira Chemical Peels',
    category: 'Advanced',
    description: 'Professional peels selected for melanin-rich skin and pigmentation.',
    price: PRICE_ON_CONSULTATION,
    href: '/treatments/lira-peels',
  },
  {
    name: 'First-Time Client Treatment',
    category: 'Facials',
    description:
      'A full consultation and treatment plan, plus a deep dive into the right at-home routine for your skin.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Back Facial',
    category: 'Facials',
    description: 'The same cleanse, extract and treat approach, for the back.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'LightStim LED',
    category: 'Add-ons',
    description: 'Targeted LED, added to any treatment.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Microcurrent',
    category: 'Add-ons',
    description: 'Low-level current to tone and lift, added to any facial.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Dermaplaning',
    category: 'Add-ons',
    description: 'Manual exfoliation that removes surface debris and vellus hair.',
    price: PRICE_ON_CONSULTATION,
  },
  {
    name: 'Compression Therapy',
    category: 'Add-ons',
    description: 'Added on for circulation and recovery.',
    price: PRICE_ON_CONSULTATION,
  },
];
