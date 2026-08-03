/**
 * FAQs for the membership page.
 *
 * Questions come from live People Also Ask and related searches on
 * `monthly facial`, `are monthly facials worth it`, `facial membership` and
 * `how often should you get a hydrafacial` (DataForSEO, San Diego metro,
 * 2026-08-03).
 *
 * None is reused from faqs.ts, treatment-faqs.ts or melanin-faqs.ts. Note the
 * near-miss: "How often should you get a facial?" already sits on the homepage,
 * so this page takes the sibling long-tail instead — the no-reuse rule holds
 * across all 49 existing questions.
 *
 * Same hard rules as every other FAQ set: no pronouns, no price outside
 * verifiedPrices, no durations, no opening hours, no outcome guarantees.
 */
import type { Faq } from './faqs';
import { verifiedPrices } from '../config/business';

export const membershipFaqs: Faq[] = [
  {
    question: 'Is one facial a month enough?',
    answer:
      'For most corrective work, monthly is the interval that matches how skin actually renews. The often-repeated figure is a 28-day cycle, but the primary literature puts full epidermal turnover closer to 40 to 56 days in adults, and slower with age. That means a single treatment lands inside one incomplete cycle and a monthly rhythm gives each visit something to build on. What one facial a month cannot do is outrun what happens in the other 29 days, which is why every membership here includes the home routine rather than treating it as an upsell.',
  },
  {
    question: 'Is a monthly HydraFacial worth it?',
    answer: `It is worth it where the goal is cumulative and not worth it where the goal is a single event. A HydraFacial cleanses, extracts and hydrates, and those results soften over weeks rather than lasting indefinitely — so a monthly cadence maintains a level that one treatment can only touch. At ${verifiedPrices.hydrafacial} a treatment on the menu against ${verifiedPrices['membership-glow']} a month on the GLOW membership, the arithmetic answers itself for anyone already booking regularly. Booking once before a wedding or an event is a completely reasonable use of a HydraFacial, and a membership would be the wrong purchase for it.`,
  },
  {
    question: 'What is the difference between a facial membership and a package?',
    answer:
      'A package is a fixed number of treatments bought upfront for a single concern; a membership is an ongoing plan that adapts as the skin changes. The series pricing on the treatment pages is the package model — three Procell sessions or a run of peels, bought together because that concern needs that many. A membership is the layer underneath: the monthly rhythm that keeps a corrected result from drifting back. They are not alternatives, and a membership treatment can be applied to an advanced service by paying the difference.',
  },
  {
    question: 'Can I use my membership treatment on a different service?',
    answer:
      'Yes. Apply the value of your monthly treatment to any eligible advanced service and pay only the difference. If the skin needs microchanneling or an advanced peel in a given month, the membership funds part of it rather than sitting unused beside it. This is deliberately how the plan is built: the assessment decides the treatment, and a membership that forced the same protocol every month regardless of what the skin was doing would contradict how everything else here works.',
  },
  {
    question: 'Why is there a six-month commitment?',
    answer:
      'Because six months is roughly four full skin renewal cycles, and corrective work is not visible in fewer. Epidermal turnover in adults runs closer to 40 to 56 days than the 28 days usually quoted, so a three-month trial covers about two cycles — enough to see a change in surface texture, rarely enough to move pigmentation or scarring. The commitment is not there to secure the booking. It is the honest minimum for the outcome, and after it the membership continues month to month and can be cancelled with 30 days notice.',
  },
  {
    question: 'What happens to my membership if I stop coming?',
    answer:
      'Unused treatments roll over while the membership is active, up to three at a time. Past three the monthly rhythm has already broken, and the better options are to gift a single treatment to one guest or, after the first six months, to cancel and restart later at whatever pricing and availability are current. Memberships cannot be paused, and they cannot roll over indefinitely, because a balance of unused treatments is not a skincare plan and pretending otherwise would not be doing anyone a favour.',
  },
  {
    question: 'How do I cancel a facial membership?',
    answer:
      'After the initial six months you may cancel your membership by text or email. I just need 30 days notice before the next month to month cycle. A membership can also be cancelled and restarted later, though pricing and availability at that point are whatever is current rather than the rate held at signup.',
  },
  {
    question: 'Where is the studio, and is a monthly membership realistic if I do not live nearby?',
    answer:
      'The studio is at 3067 Reynard Way in Mission Hills, San Diego — minutes from Hillcrest, Bankers Hill and Little Italy, with free parking on site. There is one location and no mobile service. Clients travel in monthly from North Park, Chula Vista, La Jolla, Pacific Beach and further up the coast, and the honest test is whether the drive is one you will still make in month five. If it is not, a treatment series booked at longer intervals is the better purchase, and that is a reasonable thing to say at the consultation.',
  },
];
