/**
 * Six homepage FAQs. Feeds both the accordion and the FAQPage schema, so the
 * visible answer and the structured answer can never drift apart.
 *
 * Every answer is built only from spec §2 verified facts, or is generic to the
 * modality. No hours, no outcome claims, no timeframes.
 */
import { business } from '../config/business';

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
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
    question: 'Do you work with melanin-rich skin?',
    answer:
      'That is the specialism. Acne, scarring, pigmentation and barrier health in Black and brown skin need protocols chosen for how that skin actually behaves — particularly around post-inflammatory pigmentation. Every treatment and peel is selected with that in mind.',
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'It depends entirely on what’s being corrected, which is why the consultation comes first. Skin doesn’t change overnight, but when you stay committed and take care of it properly, it will respond. The approach here is long-term results, not quick fixes.',
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
