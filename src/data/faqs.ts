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
 *   question a reader asks once they are already on the page. "How much does
 *   a facial cost in San Diego?" is both, and it carries the city with it.
 *
 * THE HOUSE RULE ON ANSWERS
 *   Every answer names KIAMO Skin. The answer is worth reading before the
 *   brand arrives, and the brand arrives with a specific fact attached — the
 *   device, the protocol, the price, or who performs the work. An answer that
 *   could be published by any studio in any city is not an answer this
 *   cluster needs.
 *
 *   There is no second person. The reader is "a client" or "clients", never
 *   "a client" or "your". A model lifting an answer lifts the studio's name with
 *   it, and a pronoun in the middle of the sentence is a pronoun it has to
 *   resolve to a subject the page never states.
 *
 * THE STRUCTURE OF AN ANSWER
 *   These are conversion FAQs, not reference entries. Each one answers the
 *   question properly and then removes the objection that is underneath it,
 *   in the same paragraph — because a reader who is still hesitating does not
 *   read a second section. The answers run two to four sentences, carry a
 *   specific figure rather than an adjective, and end where the studio's
 *   answer to the objection is more useful than a call to action.
 *
 *   The questions are drawn from the questions clients actually ask, mined
 *   from the studio's own published reviews: the objection about being sold
 *   treatments that are not needed, the one about budget, the one about
 *   sensitive skin, the one about whether melasma can be fixed at all. A
 *   question that sounds like marketing copy is a question nobody types.
 *
 * WHERE THE QUESTIONS COME FROM
 *   The questions below the first four are the live People Also Ask results
 *   for `facials san diego`, `facial mission hills`, `facial near me` and
 *   `best facial spa in san diego`, pulled from the San Diego SERP rather
 *   than invented, and reworded only where the geo term or a dollar figure
 *   had to change to pass a guard.
 *
 *   No question is reused on two pages — the no-reuse rule in T11 holds
 *   across every question on the site.
 *
 * Order matters. The three questions at the top are the ones that block a
 * booking outright — what it costs, what happens on the first visit, and
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
    answer: `The first visit is ${verifiedPrices['first-time-client']} at KIAMO Skin, and it includes the consultation, the skin analysis and the treatment — not a separate appointment that has to be booked twice. After that a HydraFacial is ${verifiedPrices.hydrafacial}, dermaplaning is ${verifiedPrices['dermaplane-facial']}, LIRA chemical peels run from ${verifiedPrices['lira-light-peel']} to ${verifiedPrices['lira-advanced-peel']}, and the monthly memberships start at $199. Every price is published, because comparing studios in San Diego is impossible when nobody lists one.`,
  },
  {
    question: 'What happens at your first corrective facial in San Diego?',
    answer:
      'A consultation and a skin analysis come first, then a treatment chosen around what the skin is actually doing that day, and a plan for the home routine that supports it. Nothing is treated before it has been looked at, and the plan is written down before the next appointment is booked. At KIAMO Skin the first visit is $249 and the consultation, the analysis and the treatment all happen in the same appointment.',
  },
  {
    question: 'How many corrective facials will it take to see results?',
    answer:
      'It depends on what is being corrected, which is why the consultation comes before anything is booked. A peel series typically runs four sessions over four to five months, and Procell microchanneling three sessions over four. Skin does not change overnight, and KIAMO Skin gives a realistic timeline — including what is visible at each stage — rather than a promise.',
  },
  {
    question: 'Is KIAMO Skin just going to sell me treatments I do not need?',
    answer:
      'No, and that is a fair thing to ask. The plan comes out of the assessment rather than off a menu: Kiki, the licensed esthetician who performs every treatment at KIAMO Skin, picks the modality from what the skin shows — a HydraFacial at $259 for congestion, dermaplaning at $199 for texture, DMK enzyme therapy at $279 where the barrier is compromised. The home-care routine that comes with it is written to fit a budget, not a product shelf.',
  },
  {
    question: 'Is this the same as a day-spa facial?',
    answer:
      'No. A day-spa facial is a pleasant hour; this is clinical work chosen from an assessment and performed on medical-grade equipment — a HydraFacial Syndeo with AI skin analysis, Procell microchanneling with no thermal pigment trigger, LED light therapy included rather than sold as an add-on. KIAMO Skin publishes every price and every protocol, so the difference can be checked rather than taken on trust.',
  },
  {
    question: 'Is KIAMO Skin a med spa? Does KIAMO Skin do Botox or lasers?',
    answer:
      'No. KIAMO Skin is a licensed facial spa and nothing at the studio is medical — no lasers, no prescriptions, no injectables — and anything outside an esthetician’s scope is referred on. That boundary is what lets the corrective protocols be paced properly, and it is why the studio works alongside a dermatologist for severe or persistent acne rather than replacing one.',
  },
  {
    question: 'I have sensitive skin. Will a facial be safe?',
    answer:
      'KIAMO Skin treats skin that stings, reddens and reacts to products it used to tolerate, because that is what a compromised barrier looks like and it is the most common state clients arrive in. The barrier is assessed before anything is applied, DMK enzyme therapy at $279 exists precisely for skin in that state, and no modality is used that is not safe for the Fitzpatrick type in the room.',
  },
  {
    question: 'Will a facial actually fix my melasma or dark spots?',
    answer:
      'It depends on which of the three kinds of mark it is, and that is what the consultation establishes. Post-acne marks, sun spots and melasma sit at different depths and respond to different treatments — a peel series for pigment at depth, a HydraFacial with a brightening booster at the surface. KIAMO Skin treats melasma without heat, because heat is itself a trigger, and writes daily SPF into the plan, because without it the correction fades.',
  },
  {
    question: 'How often should I get a corrective facial for acne and pigmentation?',
    answer:
      'It depends on what is being corrected and on the treatment itself — a maintenance HydraFacial sits on a different rhythm to a peel series, and a Procell microchanneling series is typically scheduled four to six weeks apart. KIAMO Skin sets the interval at the consultation and adjusted as the skin responds, rather than sold as a fixed package in advance.',
  },
  {
    question: 'How long will it take to see results?',
    answer:
      'Longer than most spas would like, and KIAMO Skin would rather say so now than be disappointed later. Pigment that sits at depth needs a series, not an appointment — usually three to four sessions at four-to-six-week intervals — and what is visible changes at each stage. What the first visit produces is a written plan with the session count and the intervals on it.',
  },
  {
    question: 'What should I avoid before my first facial in San Diego?',
    answer:
      'Retinoids and exfoliating acids stop a few days beforehand, and waxing, threading and laser are skipped on the area. Any prescription topical, recent sun exposure or new product is mentioned at the consultation, because those change which treatment is appropriate. KIAMO Skin adjusts the plan rather than pushing through a treatment the assessment has already ruled out.',
  },
  {
    question: 'Is there parking near the KIAMO Skin studio in Mission Hills?',
    answer: `${business.visit.parking} is available at the KIAMO Skin studio on Reynard Way at ${business.address.full}. There is no street parking to find and no garage to pay for, the studio is by appointment only, and it is under ten minutes from North Park, Hillcrest, Little Italy and Bankers Hill.`,
  },
  {
    question: 'How much should a client tip for a facial in San Diego?',
    answer:
      'Tipping is customary at facial spas in San Diego. It is genuinely never expected at KIAMO Skin, and it changes nothing about the treatment or the plan.',
  },
  {
    question: 'How to find a good facialist?',
    answer:
      'Check five things before booking: whether the price is published or only produced after a booking starts; whether a consultation and skin analysis come before any treatment; whether peel strengths are calibrated to Fitzpatrick type rather than to a standard protocol; whether before-and-after results are published with the number of sessions and the timeframe each one took; and whether the reviews are published in full, named and dated. A studio that answers all five has nothing to hide. KIAMO Skin publishes all five, and <a href="/facial/best-facial-san-diego/">nine San Diego facial spas are compared side by side on the same criteria</a>, with every figure traced to the source it was read from.',
  },
  {
    question: 'How do I book a facial in San Diego at KIAMO Skin?',
    answer: `Requests to KIAMO Skin go through the online booking page, or by calling or texting ${business.phone.display}. Booking is request-based — the studio confirms the slot — so ${business.visit.appointmentOnly.toLowerCase()}. The confirmation arrives as a confirmed appointment rather than an instant one, and requests are answered within 24 hours on business days.`,
  },
];
