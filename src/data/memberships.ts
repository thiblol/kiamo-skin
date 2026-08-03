/**
 * The three membership tiers, their shared benefits, and the billing terms.
 *
 * Prices are client-supplied and live in `verifiedPrices` like every other
 * figure on the site — the guard suite fails the build on anything else.
 *
 * Two rules specific to this file:
 *
 * 1. No tier states its own saving. The a-la-carte prices are published on the
 *    treatment pages and repeated in `ledger` below; the reader does the
 *    arithmetic. Printing a computed "you save $X" would assert a number no
 *    menu item carries, which is exactly what the price guard exists to stop.
 * 2. `terms` is rendered as a real section, never as fine print. California's
 *    Automatic Renewal Law (Bus. & Prof. Code §17600 et seq., as amended by
 *    AB 2863, effective 2025-07-01) requires the recurring amount, the
 *    frequency, the minimum term and the cancellation method to be clear and
 *    conspicuous. Signup and affirmative consent happen on Vagaro, so the
 *    consent checkbox is theirs; the disclosure is ours.
 */
import { verifiedPrices } from '../config/business';

export interface Tier {
  slug: string;
  /** Roman numeral rendered as the tier's index mark. */
  numeral: string;
  name: string;
  /** The tier's role in a plan, not a sales adjective. */
  position: string;
  price: string;
  /** One line on who this is actually for. */
  summary: string;
  includes: string[];
  /** Treatment pages whose a-la-carte price this tier should be read against. */
  compare?: { label: string; href: string; price: string }[];
  recommended?: boolean;
}

export const tiers: Tier[] = [
  {
    slug: 'glow',
    numeral: 'I',
    name: 'GLOW',
    position: 'Foundation',
    price: verifiedPrices['membership-glow'],
    summary:
      'For skin that is already stable and needs to stay that way. A monthly HydraFacial holds a corrected result rather than chasing a new one.',
    includes: ['A customized HydraFacial each month', 'A personalized Hydrojelly mask'],
    compare: [
      {
        label: 'HydraFacial Treatment',
        href: '/treatments/hydrafacial',
        price: verifiedPrices.hydrafacial,
      },
    ],
  },
  {
    slug: 'lux',
    numeral: 'II',
    name: 'LUX',
    position: 'Refine',
    price: verifiedPrices['membership-lux'],
    summary:
      'For skin being actively worked on rather than maintained. Two treatments in one visit, with the booster chosen for what the skin is doing that month.',
    includes: [
      'A customized HydraFacial each month',
      'Dermaplaning or microcurrent, your choice',
      'A corrective booster selected for your concern',
      'LED light therapy',
      'A personalized Hydrojelly mask',
    ],
    compare: [
      {
        label: 'HydraFacial Treatment',
        href: '/treatments/hydrafacial',
        price: verifiedPrices.hydrafacial,
      },
      {
        label: 'Dermaplane Facial',
        href: '/treatments/dermaplaning',
        price: verifiedPrices['dermaplane-facial'],
      },
    ],
    recommended: true,
  },
  {
    slug: 'opulence',
    numeral: 'III',
    name: 'OPULENCE',
    position: 'Transform',
    price: verifiedPrices['membership-opulence'],
    summary:
      'For long-term correction across the whole treated area. The face is where most studios stop; the neck and décolleté age faster and are usually the giveaway.',
    includes: [
      'A customized HydraFacial each month',
      'Neck and décolleté included, not extra',
      'Facial lymphatic drainage',
      'Dermaplaning or microcurrent, your choice',
      'An advanced corrective booster',
      'LED light therapy',
      'A personalized Hydrojelly mask',
    ],
  },
];

/**
 * Benefits every tier carries. Confirmed with the client as universal rather
 * than tier-gated, so they render once beneath the cards instead of being
 * repeated three times.
 */
export const memberBenefits = [
  {
    title: 'One personalized treatment every month',
    body: 'Selected for what your skin is doing that month, not booked as the same protocol on repeat.',
  },
  {
    title: '15% off retail',
    body: 'Home care is most of the result. The routine between visits is what the treatments are protecting.',
  },
  {
    title: 'Priority booking',
    body: 'One licensed esthetician, appointment-only. Members are offered times first.',
  },
  {
    title: 'Upgrade by paying the difference',
    body: 'Apply the value of your monthly treatment to any eligible advanced service and pay only the gap.',
  },
  {
    title: 'Progress assessments at no charge',
    body: 'Skin is photographed and reviewed against where it started, so the plan is adjusted on evidence.',
  },
  {
    title: 'Member pricing on select treatments',
    body: 'On enhancements and add-ons beyond what the monthly treatment already covers.',
  },
  {
    title: 'Early access and member events',
    body: 'New treatments, new products and member-only evenings, before they are announced publicly.',
  },
  {
    title: 'Gift a month to one guest',
    body: 'An unused monthly treatment can go to one guest. They book through Vagaro under their own account.',
  },
];

/**
 * The objection-handling section. Every one of these is a reason people give
 * for not joining, answered before it is asked.
 */
export const flexibility = [
  {
    question: 'What if I miss a month?',
    answer:
      'The treatment rolls over and your membership stays active. Up to three can be banked at once — past that the point of a monthly rhythm is gone, and a plan you are three months behind on is a plan that is not working.',
  },
  {
    question: 'What if I want something more advanced?',
    answer:
      'Apply the value of your monthly treatment to any eligible advanced service and pay only the difference. A Procell series or an advanced peel can be run on a membership rather than instead of one.',
  },
  {
    question: 'What if I cannot use it this month?',
    answer:
      'Gift it 1x to one guest. They create a Vagaro account and book their own appointment. It is one guest per treatment, so it stays a gift rather than becoming a second membership.',
  },
  {
    question: 'What if life gets in the way entirely?',
    answer:
      'Memberships cannot be paused but may be canceled after the 6 month and restarted later, subject to current availability and pricing.',
  },
];

/**
 * The comparison ledger. Deliberately placed below the tiers: loss framing
 * persuades people who are already invested, and reads as pressure to someone
 * still deciding.
 *
 * Every figure here is a real published menu price. Nothing is summed.
 */
export const ledger = {
  alacarte: [
    { label: 'HydraFacial Treatment', price: verifiedPrices.hydrafacial },
    { label: 'Dermaplane Facial', price: verifiedPrices['dermaplane-facial'] },
  ],
  member: { label: 'LUX membership, both treatments in one visit', price: verifiedPrices['membership-lux'] },
};

/**
 * The first three months, written as the plan a member is actually buying.
 *
 * This fills the slot every comparable membership page fills with testimonials.
 * No rating or review is displayed anywhere on this site, so the proof here is
 * the protocol itself.
 */
export const firstMonths = [
  {
    month: 'Month one',
    title: 'Baseline and barrier',
    body: 'Nothing corrective happens until the barrier can take it. The first month establishes what the skin is actually doing, photographs it, and starts the home routine that everything after depends on.',
  },
  {
    month: 'Month two',
    title: 'Correction begins',
    body: 'With the barrier holding, the work starts — congestion, pigmentation, texture or scarring, whichever the assessment identified. Strength escalates across visits rather than inside one.',
  },
  {
    month: 'Month three',
    title: 'Assessment against month one',
    body: 'Your skin is reviewed against its own starting photographs, not against anybody else. What is working continues, what is not gets changed. This is the point a plan either earns the next three months or is rewritten.',
  },
];

/**
 * Billing and cancellation, rendered verbatim in the terms section.
 *
 * Cancellation is by text or email with 30 days notice, per the owner. Note
 * that California §17602(d)(1) requires a membership started online to be
 * cancellable online without further obstruction, so this wording is worth a
 * legal read before it stays permanently.
 */
export const terms = [
  'Memberships are billed automatically within the first week of each month.',
  'Membership begins with a six-month commitment, then continues month to month.',
  'After the first six months you may cancel your membership with 30 days notice before the next month to month cycle. Text or email.',
  'Unused monthly treatments roll over while your membership is active, up to three at a time.',
  'Memberships cannot be paused. After the first six months a membership can be cancelled and restarted later, subject to current availability and pricing.',
  'Membership treatments are for one person. A single unused treatment may be gifted to one guest.',
  'Member pricing cannot be combined with other promotions.',
] as const;
