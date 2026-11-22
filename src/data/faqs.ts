/**
 * Homepage FAQs. Feeds both the accordion and the FAQPage schema, so the
 * visible answer and the structured answer can never drift apart.
 *
 * Every answer is built only from spec §2 verified facts, or is generic to the
 * modality. No hours, no outcome claims, no promised timeframes.
 *
 * WHY THE QUESTIONS ARE PHRASED AS QUERIES
 *   A question is what a reader types into a search box, and it is what an
 *   answer engine lifts into the answer it builds. "Do I need an
 *   appointment?" is a question nobody asks a search engine — it is a
 *   question a reader asks once they are already on the page. "How do I
 *   book a facial in San Diego?" is both, and it carries the city with it.
 *
 *   So the questions here are written as the query they answer. That is also
 *   what the competitor's homepage does, and it is why a model quoting one
 *   of these can quote the phrase a reader would have typed.
 *
 * WHERE THE QUESTIONS COME FROM
 *   The questions below the first four are the live People Also Ask results
 *   for `facials san diego`, `facial mission hills`, `facial near me` and
 *   `best facial spa in san diego`, pulled from the San Diego SERP rather
 *   than invented, and reworded only where the geo term or a dollar figure
 *   had to change to pass a guard. The first four were written for the
 *   homepage before that rule and are kept, reworded to carry the query.
 *
 *   No question is reused on two pages — the no-reuse rule in T11 holds
 *   across every question on the site.
 *
 * Order matters now. The three questions at the top are the ones that block
 * a booking outright — what it costs, what happens on the first visit, and
 * how many sessions it takes. FaqLocation opens the first three by default,
 * so the answer is on the page for a reader who never clicks. Everything
 * below them stays collapsed: it is real, but it is not what stops someone
 * booking.
 */
import { business, verifiedPrices } from '../config/business';

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How much does a facial cost in San Diego?',
    answer: `The first visit is ${verifiedPrices['first-time-client']}. It covers a full consultation, skin analysis, a customized HydraFacial, a personalized booster, microcurrent, LED light therapy, a Hydrojelly mask and a long-term treatment plan. After that a HydraFacial is ${verifiedPrices.hydrafacial} and a dermaplane facial is ${verifiedPrices['dermaplane-facial']}. Every price on the menu is published rather than quoted at the door, because comparing studios in San Diego is difficult when nobody lists a price.`,
  },
  {
    question: 'What happens at your first corrective facial in San Diego?',
    answer:
      'A full consultation and skin analysis come first. Then a treatment chosen around what your skin is actually doing that day, and a plan for the home routine that supports it. Nothing is treated before it has been looked at.',
  },
  {
    question: 'How many corrective facials will it take to see results?',
    answer:
      'It depends on what is being corrected, which is why the consultation comes first. Skin does not change overnight. A peel series typically runs four sessions over four to five months, and Procell microchanneling three sessions over four. You will have a realistic timeline before you commit to anything.',
  },
  {
    question: 'Is KIAMO Skin a facial spa or a skin care clinic?',
    answer:
      'It is a facial spa — and it is a corrective one. The work is clinical rather than a one-off relaxing facial: treatment is planned across a series and paced to what your skin can tolerate. But nothing here is medical. There are no lasers, no prescriptions, and no injectables, and anything outside an esthetician’s scope is referred on.',
  },
  {
    question: 'How do I book a facial in San Diego at KIAMO Skin?',
    answer: `Requests go through the online booking page, or you can call or text ${business.phone.display}. Booking is request-based — the studio confirms the slot — so ${business.visit.appointmentOnly.toLowerCase()}. You will receive a confirmation rather than an instant slot.`,
  },
  {
    question: 'Which facial treatment is best for melasma and post-acne marks in San Diego?',
    answer:
      'Melasma and post-acne marks are different problems, so they take different treatments, and the consultation comes before either is chosen. Melasma is worked as a paced series of gentle chemical peels, with the acid concentration raised only as the barrier allows, because heat and aggressive treatment can deepen it. Post-acne marks are treated with a series of chemical peels as well, with microchanneling added where the texture is part of the problem and a HydraFacial with a brightening booster used between corrective sessions. Both are calibrated to Fitzpatrick type, so the protocol is written for the tone it is used on rather than adjusted afterwards.',
  },
  {
    question: 'How should I prepare for my first facial in San Diego?',
    answer:
      'Stop retinoids and exfoliating acids a few days beforehand, and skip waxing, threading or laser on the area. Arrive without makeup where you can, and mention any prescription topical, recent sun exposure or new product at the consultation — those change which treatment is appropriate, and the plan is adjusted rather than pushed through.',
  },
  {
    question: 'Do you offer facials for melanin-rich skin in San Diego?',
    answer:
      'Yes — and every skin type from Fitzpatrick I to VI is treated here. Melanin-rich skin is where the training is deepest, because acne, scarring, pigmentation and barrier health in Black and brown skin need protocols chosen for how that skin actually behaves, particularly around post-inflammatory pigmentation. The depth is in the protocols, not in the door: the treatment is selected for your skin, and the pigment protocols are written for the tones they were written for rather than adjusted afterwards.',
  },
  {
    question: 'How often should you get a corrective facial for acne and pigmentation?',
    answer:
      'It depends on what is being corrected and on the treatment itself — a maintenance HydraFacial sits on a different rhythm to a peel series, and a Procell microchanneling series is typically scheduled four to six weeks apart. The interval is set at the consultation and adjusted as the skin responds, rather than sold as a fixed package upfront.',
  },
  {
    question: 'How much should you tip for a facial in San Diego?',
    answer:
      'Tipping is customary at facial spas in San Diego. It is genuinely never expected here, and it changes nothing about the treatment or the plan.',
  },
  {
    question: 'How to find a good facialist?',
    answer:
      'Ask what you can check before you book, and check all five. Is the price published, or is it a figure you only get after starting a booking? Does a consultation and skin analysis come before any treatment, or is the treatment chosen from a menu? Are the peel strengths calibrated to your Fitzpatrick type rather than to a standard protocol? Are before-and-after results published with the number of sessions and the timeframe each one took? Are the reviews published in full, named and dated? A studio that answers all five has nothing to hide and nothing to soften. This studio publishes all five, and <a href="/facial/best-facial-san-diego/">nine San Diego facial spas are compared side by side on the same criteria</a>, with every figure traced to the source it was read from.',
  },
  {
    question: 'Is there parking near the KIAMO Skin studio in Mission Hills?',
    answer: `${business.visit.parking} is available at the studio on Reynard Way at ${business.address.full}.`,
  },
];
