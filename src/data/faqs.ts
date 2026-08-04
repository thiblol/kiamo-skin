/**
 * Homepage FAQs. Feeds both the accordion and the FAQPage schema, so the
 * visible answer and the structured answer can never drift apart.
 *
 * Every answer is built only from spec §2 verified facts, or is generic to the
 * modality. No hours, no outcome claims, no promised timeframes.
 *
 * The questions added below the original six are the live People Also Ask
 * results for `facials san diego`, `facial mission hills` and `facial near me`,
 * pulled from the San Diego SERP rather than invented. Two were reworded: the
 * PAA phrasing is "How much do you tip for a $100 facial", and an unverified
 * dollar figure fails the price guard. None duplicates a question on any other
 * page — the no-reuse rule in T11 holds across all 43 existing questions.
 */
import { business, verifiedPrices } from '../config/business';

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How much does a facial cost in San Diego?',
    answer: `At KIAMO Skin the first visit is ${verifiedPrices['first-time-client']} and covers a full consultation, skin analysis, a customized HydraFacial, a personalized booster, microcurrent, LED light therapy, a Hydrojelly mask and a long-term treatment plan. After that a HydraFacial is ${verifiedPrices.hydrafacial} and a dermaplane facial is ${verifiedPrices['dermaplane-facial']}. Every price on the treatment menu is published rather than quoted at the door, because comparing studios in San Diego is difficult when nobody lists what they charge.`,
  },
  {
    question: 'Do I need an appointment?',
    answer: `Yes — KIAMO Skin is ${business.visit.appointmentOnly.toLowerCase()}. Requests go through the online booking page, or you can call or text ${business.phone.display}. Booking is request-based, so you’ll receive a confirmation rather than an instant slot.`,
  },
  {
    question: 'What happens at a first visit?',
    answer:
      'A full consultation and skin analysis come first, then a treatment chosen around what your skin is actually doing. You’ll leave with a plan for the at-home routine that supports it, because education, intention and consistency are at the core of everything here.',
  },
  {
    question: 'What kind of facial is most effective?',
    answer:
      'The one selected for what your skin is doing that day, which is why the consultation comes before anything is chosen. A relaxation facial and a corrective one are different categories of treatment: the first is an hour of comfort, the second is chosen to change something — congestion, pigmentation, scarring or a barrier that has stopped holding water. Both can feel good. Only one is built to move the skin.',
  },
  {
    question: 'What should you avoid before a facial?',
    answer:
      'Stop retinoids and exfoliating acids a few days beforehand, and skip waxing, threading or laser on the area. Arrive without makeup where you can, and mention any prescription topical, recent sun exposure or new product at the consultation — those change which treatment is appropriate, and the plan is adjusted rather than pushed through.',
  },
  {
    question: 'Do you work with melanin-rich skin?',
    answer:
      'That is the specialism. Acne, scarring, pigmentation and barrier health in Black and brown skin need protocols chosen for how that skin actually behaves — particularly around post-inflammatory pigmentation. Every treatment and peel is selected with that in mind.',
  },
  {
    question: 'How often should you get a facial?',
    answer:
      'It depends on what is being corrected and on the treatment itself — a maintenance HydraFacial sits on a different rhythm to a peel series, and a Procell microchanneling series is typically scheduled four to six weeks apart. The interval is set at the consultation and adjusted as the skin responds, rather than sold as a fixed package upfront.',
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'It depends entirely on what’s being corrected, which is why the consultation comes first. Skin doesn’t change overnight, but when you stay committed and take care of it properly, it will respond. The approach here is long-term results, not quick fixes.',
  },
  {
    question: 'Do you tip for a facial?',
    answer:
      'Tipping is customary at skin studios in San Diego, and somewhere around fifteen to twenty per cent is the usual range. It is genuinely never expected here, and it changes nothing about the treatment or the plan.',
  },
  {
    question: 'Is KIAMO SKIN a facial spa or a skin care clinic?',
    answer:
      'Neither description is quite right on its own. KIAMO SKIN is a single-treatment-room studio in Mission Hills, San Diego, run by a licensed esthetician — more clinical than a day spa, and not a medical practice. The distinction that matters is the work: treatment is corrective and planned across a series, rather than a one-off relaxing facial. Nothing here is medical, and anything outside an esthetician’s scope is referred on.',
  },
  {
    question: 'Is there parking?',
    answer: `${business.visit.parking} is available at the Mission Hills studio at ${business.address.full}.`,
  },
  {
    question: 'What is the cancellation policy?',
    answer: business.cancellation,
  },
];
