import type { Faq } from './faqs';
import { business } from '../config/business';
import { verifiedPrices } from '../config/business';

/**
 * The journal's own questions.
 *
 * A journal index is a landing page that happens to be made of articles. A
 * reader lands on it from a search, reads two cards and either clicks one or
 * leaves, and the questions that stop them are the same ones that stop them
 * on any page: is this studio for me, who wrote this, what does it cost, and
 * what happens if I book.
 *
 * The answers are visible text rather than a collapsed accordion, because the
 * index is an SEO page and visible answers are what get indexed and
 * surfaced. The article pages open their first three answers for the same
 * reason.
 */
export const journalFaqs: Faq[] = [
  {
    question: 'Who writes these notes?',
    answer:
      'Every one is written by Kiki, the licensed esthetician who owns KIAMO Skin, and every article carries the date it was published and the date it was last updated. Where a piece draws on a clinical source, the source is linked at the point the claim is made rather than listed at the end.',
  },
  {
    question: 'Do these notes apply to my skin type?',
    answer:
      'They are written for every Fitzpatrick type, I to VI, and a good number of them are specifically about what happens to melanin-rich skin: how inflammation drives pigment, why a peel strength that would be unremarkable on some skin darkens a mark on other skin, and how a series is paced differently. The studio treats all skin types; the specialism is melanin-rich skin.',
  },
  {
    question: 'How much does a treatment cost?',
    answer: `Every price is published rather than quoted at the door, because comparing studios in San Diego is difficult when nobody lists a price. A first visit is ${verifiedPrices['first-time-client']} and includes the consultation and skin analysis. A HydraFacial is ${verifiedPrices.hydrafacial}, a chemical peel ${verifiedPrices['lira-light-peel']}, and the treatment menu lists the rest.`,
  },
  {
    question: 'What happens if I book?',
    answer:
      'The first visit is a consultation and skin analysis, and it is not always the treatment. If the barrier is compromised or the skin has reacted to something before, the first session is often preparation, and the treatment comes after. That is the same protocol for every client, and it is why a plan is mapped before anything is booked.',
  },
  {
    question: 'How do I choose which article is for me?',
    answer:
      'If you are here for pigmentation, start with the article on the three kinds of dark mark, because the kind decides the treatment. If you are deciding between two treatments, the comparison pieces are the ones to read. If you are simply wondering whether a facial is worth it in San Diego, the price article is the honest place to start.',
  },
];
