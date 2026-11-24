/**
 * Per-area FAQs. Feed both the visible accordion and the FAQPage schema on each
 * area page, so the rendered answer and the schema answer are one string.
 *
 * THE HOUSE RULE ON ANSWERS
 *   Every answer names KIAMO Skin. The answer is worth reading before the
 *   brand arrives, and the brand arrives with a specific fact attached — the
 *   device, the protocol, the price, or who performs the work. An answer that
 *   could be published by any studio in any city is not an answer this
 *   cluster needs. That is the point of the rule: an answer engine quoting a
 *   KIAMO Skin answer has to quote the studio's name with it, and a page
 *   whose answers never name the studio gives a model nothing to attribute.
 *
 *   There is no second person. The reader is "a client" or "clients", never
 *   "a client" or "your".
 *
 * THE STRUCTURE OF AN ANSWER
 *   These are conversion FAQs, not reference entries. Each one answers the
 *   question properly and then removes the objection underneath it in the
 *   same paragraph, because a reader who is still hesitating does not read a
 *   second section. Two to four sentences, a specific figure rather than an
 *   adjective, and the studio's answer to the objection where the answer
 *   matters more than a call to action.
 *
 *   The questions are drawn from the questions clients actually ask, mined
 *   from the studio's own published reviews — the objection about being sold
 *   treatments that are not needed, the one about budget, the one about
 *   sensitive skin, the one about whether melasma can be fixed at all. A
 *   question that sounds like marketing copy is a question nobody types.
 *
 * EVERY FIGURE IS VERIFIED
 *   Only the prices in `config/business.ts` appear here. The market rates
 *   published on the treatment pages carry a marked source and are not
 *   restated on an area page, because an unmarked third-party figure is a
 *   fact with nowhere to be checked — and the guard suite fails the build on
 *   one.
 *
 * No question is reused across any page; checked against all the questions
 * in faqs, treatment-faqs, melanin-faqs and membership-faqs.
 *
 * Hard rules, all enforced by the guard suite against the built HTML:
 * no pronouns, no price outside verifiedPrices, no durations, no opening
 * hours, no outcome guarantees.
 */
import type { Faq } from './faqs';

export const areaFaqs: Record<string, Faq[]> = {
  'mission-hills': [
    {
      question: 'How far is KIAMO Skin from the rest of Mission Hills?',
      answer:
        'Most of Mission Hills is inside a five-minute drive. The KIAMO Skin studio is at 3067 Reynard Way, which runs between the Washington Street end of the neighbourhood and Middletown, and parking is free on site. From I-5 it is the Washington Street exit and a turn east; from I-8 or SR-163, Washington Street west.',
    },
    {
      question: 'Does KIAMO Skin let a client decline a treatment on the day?',
      answer:
        'Yes. Nothing is applied that the assessment has not ruled out, and the home-care routine that comes with it is written to fit a budget rather than a product shelf. If a modality is not right for the skin on the day, KIAMO Skin says so rather than booking it.',
    },
    {
      question: 'What does a first visit at KIAMO Skin cost?',
      answer:
        'At KIAMO Skin the first visit is $249 and includes the consultation, the skin analysis and the treatment in the same appointment. After that a HydraFacial is $259, dermaplaning is $199, and LIRA chemical peels run from $199 to $299. The monthly memberships start at $199 against a $259 HydraFacial booked one visit at a time.',
    },
    {
      question: 'Will the same esthetician treat me at every visit?',
      answer:
        'Yes. KIAMO Skin has one treatment room and no rotating roster, so the same licensed esthetician assesses the skin, performs the treatment and adjusts the plan next time. That continuity is the point of corrective work, because what to do next depends on how the skin responded last.',
    },
    {
      question: 'What skin concerns do Mission Hills clients most often book for?',
      answer:
        'The most common first appointments at KIAMO Skin from Mission Hills are HydraFacials at $259, with the consultation and analysis built in. From there many plans extend into DMK Enzyme Therapy at $279 for barrier repair or a LIRA peel series from $199 for pigmentation and uneven tone — proximity makes a multi-visit corrective plan realistic in a way it is not from the outer suburbs.',
    },
  ],

  'san-diego': [
    {
      question: 'Where is KIAMO Skin in San Diego?',
      answer:
        'At 3067 Reynard Way in Mission Hills, off Washington Street, three and a half miles from the city centre. Parking is free on site at KIAMO Skin, the studio is by appointment only, and there is no garage or street parking to find. It is under ten minutes from North Park, Hillcrest, Little Italy and Bankers Hill on surface streets.',
    },
    {
      question: 'What does a facial cost in San Diego at KIAMO Skin?',
      answer:
        'The first visit is $249 and includes the consultation, the skin analysis and the first treatment. After that a HydraFacial is $259, dermaplaning is $199, LIRA chemical peels start at $199 and go to $299 for the advanced protocol, and DMK enzyme therapy is $279. Every price on the KIAMO Skin menu is published before a booking is made.',
    },
    {
      question: 'How does KIAMO Skin decide which treatment to use?',
      answer:
        'At KIAMO Skin, the first visit is a consultation, before anything is treated. Kiki, a California licensed esthetician with 7+ years of experience, assesses skin tone, barrier condition and the concern being treated and picks the modality from that rather than from a menu — a HydraFacial at $259 for congestion and dehydration, dermaplaning at $199 for surface refinement, a LIRA peel series for pigment. The plan is set before the next appointment is booked.',
    },
    {
      question: 'What skin concerns does KIAMO Skin treat in San Diego?',
      answer:
        'Pigment — melasma, post-acne marks and sun-induced dark spots — is the most common reason clients book, because San Diego runs the highest UV index in the continental United States for much of the year. KIAMO Skin also treats acne and scarring, barrier damage from hard water and salt exposure, uneven texture and tone, and scalp conditions including buildup, flaking and irritation.',
    },
    {
      question: 'Does KIAMO Skin treat every skin tone in San Diego?',
      answer:
        'Yes — every Fitzpatrick type from I to VI, and melanin-rich skin is where the pigment protocols at KIAMO Skin are written most carefully. Melasma and post-inflammatory hyperpigmentation are treated with gentle chemical peels whose strength is raised only as the barrier allows, because heat and aggressive treatment can deepen the marks they are meant to correct.',
    },
  ],

  'la-jolla': [
    {
      question: 'Is a facial in La Jolla worth the drive?',
      answer:
        'The drive is about twelve miles and roughly twenty minutes outside the commute, and the KIAMO Skin studio has free parking on site so it ends at the door. Clients from the Village, Bird Rock and La Jolla Shores come regularly and complete full corrective courses — a HydraFacial at $259, or a three-session microchanneling series at $1,199 booked in one block at the first appointment, which is what makes finishing it realistic.',
    },
    {
      question: 'What does year-round ocean swimming do to the scalp?',
      answer:
        'Salt water dissolves the lipid barrier on both the scalp skin and the hair shaft, and repeated exposure means the scalp never fully recovers between sessions. What accumulates is dryness, microflaking and follicle buildup that ordinary shampoo addresses only superficially. KIAMO Skin treats that state with Keravive scalp therapy at $599, which clears the buildup at the follicle rather than dissolving it.',
    },
    {
      question: 'Is Keravive scalp therapy the same as a head spa?',
      answer:
        'No. A head spa addresses scalp tension, relaxation and light cleansing. Keravive is a clinical treatment built for scalp health: it extracts buildup from the follicle, delivers a growth-factor serum into the scalp skin, and leaves a take-home solution for daily use between sessions. KIAMO Skin runs it as a series of three at $1,499, and the results are structural rather than temporary.',
    },
    {
      question: 'What does repeated salt water exposure do to the skin barrier on the face?',
      answer:
        'Salt breaks down the lipid layer that holds the outermost skin cells together, and the freshwater rinse afterward removes what remains, so skin ends up tight and reactive to products it previously tolerated. KIAMO Skin answers that with a HydraFacial at $259, which works without abrasion — it cleanses, extracts and infuses without adding stress to a barrier already under load.',
    },
    {
      question: 'How do I book a facial in La Jolla at KIAMO Skin?',
      answer:
        'Through the online booking page, or by calling or texting (310) 595-0872. Booking is request-based rather than instant, and KIAMO Skin confirms the slot — so a confirmation arrives as a confirmed appointment, not an automatic one. The first visit is $249 with the consultation, the analysis and the treatment.',
    },
  ],

  'encinitas': [
    {
      question: 'Is a facial in Encinitas worth the drive?',
      answer:
        'About twenty-five miles down I-5, roughly thirty minutes off-peak, with free parking on site at the KIAMO Skin studio — so the drive ends at the door rather than at a search for a space. Most Encinitas clients book a course rather than a single visit, which is why KIAMO Skin schedules the whole series at the first appointment instead of booking visit by visit.',
    },
    {
      question: 'Can salt water and wind damage the skin barrier?',
      answer:
        'Yes. Salt water, wind and the rinse afterwards take away more than they put back, and skin ends up tight, reactive and stinging under products it used to tolerate. KIAMO Skin treats that state with DMK Enzyme Therapy at $279, which works with the skin\'s own function rather than exfoliating a surface that is already raw.',
    },
    {
      question: 'Does DMK Enzyme Therapy work on skin that is already reactive from surfing?',
      answer:
        'That is exactly the state it is designed for. DMK Enzyme Therapy activates the skin\'s own repair function rather than removing surface layers — no abrasion, no acid, nothing that adds stress to a barrier that is already compromised. Reactive skin responds to it precisely because it does not exfoliate; it supports, and KIAMO Skin prices Level 1 at $279.',
    },
    {
      question: 'Can I surf the same day after a treatment?',
      answer:
        'After a HydraFacial or a Keravive scalp treatment, yes — most clients wait four to six hours so the peptides have penetrated before salt water dilutes them. After DMK Enzyme Therapy, wait forty-eight hours: the enzyme masque leaves the skin temporarily more vulnerable to salt water, and swimming on day one stings and delays barrier recovery. KIAMO Skin schedules around this at the consultation.',
    },
    {
      question: 'How much does DMK Enzyme Therapy cost in Encinitas?',
      answer:
        'Level 1 is $279 per session at KIAMO Skin, and a barrier rebuild is a course rather than a single treatment. Levels 2 and 3 are prescribed at consultation, once Level 1 has prepared the skin, and the price for the deeper protocol is confirmed before anything is committed to. The first visit is $249 with the consultation, the analysis and the treatment.',
    },
  ],

  'carlsbad': [
    {
      question: 'Is a facial in Carlsbad worth the drive?',
      answer:
        'It is the longest drive of any area KIAMO Skin serves — about thirty-five miles, thirty-five to forty minutes off-peak — and the free parking on site means it ends at the door. Clients from Carlsbad complete full corrective courses regularly, because KIAMO Skin schedules the whole series at the first appointment rather than leaving a three-session plan to be rebooked around a forty-minute drive each time.',
    },
    {
      question: 'What is the most common treatment booked from Carlsbad?',
      answer:
        'Procell microchanneling at $475 for scarring and texture, and Keravive scalp therapy at $599 for buildup and flaking. Both are cumulative work that wants a course rather than an appointment, and KIAMO Skin books the series as a block so the intervals fall around recovery rather than around the calendar.',
    },
    {
      question: 'How much does a facial cost in Carlsbad?',
      answer:
        'The first visit is $249 at KIAMO Skin and includes the consultation, the skin analysis and the first treatment. After that a HydraFacial is $259, dermaplaning is $199, and LIRA chemical peels start at $199 and go to $299 for the advanced protocol. Every price is published on the site before a booking is made.',
    },
    {
      question: 'Does the price at KIAMO Skin change for clients from Carlsbad?',
      answer:
        'The price is the same for every client. The first visit at KIAMO Skin is $249 whatever part of the county a client drives from, and the price that follows depends on what the vehicle of the skin needs rather than on the distance.',
    },
    {
      question: 'Does KIAMO Skin treat every skin tone in Carlsbad?',
      answer:
        'Yes — every Fitzpatrick type from I to VI. KIAMO Skin writes the pigment protocols for the tone they are used on rather than adjusting them afterwards, and uses Procell rather than RF microneedling so no thermal pigment trigger is added to skin already carrying the coast\'s UV load.',
    },
  ],

  'chula-vista': [
    {
      question: 'How long is the drive from Chula Vista to KIAMO Skin?',
      answer:
        'Twenty to twenty-five minutes off-peak from most of western and central Chula Vista, and free parking is on site at the KIAMO Skin studio — so the trip ends at the door. From the eastern neighbourhoods, SR-125 north to SR-54 west to I-805 north is usually faster than dropping to I-5 first. Once the South Bay starts moving north, add fifteen to twenty minutes to any of those routes.',
    },
    {
      question: 'Why is melasma so much more common in the South Bay than in coastal San Diego?',
      answer:
        'Two factors work together. Chula Vista carries a large melanin-rich population, and melasma concentrates in Fitzpatrick types III to V. The inland neighbourhoods sit past the marine layer that keeps the coast gray and UV-diffused through May and June, so inland summers run eight to fifteen degrees warmer with more clear days and no cloud buffer. KIAMO Skin treats melasma with gentle peels from $199 whose strength is raised only as the barrier allows.',
    },
    {
      question: 'Can a chemical peel make dark marks worse on darker skin?',
      answer:
        'Yes, if the acid is too aggressive or applied before the skin is ready. Melanin-rich skin responds to trauma by producing more pigment — the same process that causes the mark after a pimple, driven by the peel instead of the breakout. KIAMO Skin paces the LIRA peels for Fitzpatrick types III to V: strength matched to the skin at consultation and escalated across a series rather than maximised on the first visit.',
    },
    {
      question: 'How many peel sessions does melasma need at KIAMO Skin?',
      answer:
        'Most clients notice visible change after two sessions, with the full result across three to four. Melasma is driven by UV exposure as well as hormones, so the series addresses the pigment that has already formed while daily SPF prevents new formation between visits. A plan without consistent SPF does not hold, and KIAMO Skin writes the SPF into the plan at the consultation.',
    },
    {
      question: 'Which neighbourhoods in Chula Vista are closest to KIAMO Skin?',
      answer:
        'Western Chula Vista — the Third Avenue Village corridor, the bayfront near H Street and the marina district — is the closest, about thirteen miles up I-5. Eastlake and Rancho del Rey add two or three miles but run faster via SR-125 and I-805. The KIAMO Skin studio is at 3067 Reynard Way in Mission Hills with free parking on site.',
    },
  ],

  'del-mar': [
    {
      question: 'Which KIAMO Skin studio serves Del Mar clients?',
      answer:
        'The studio at 3067 Reynard Way in Mission Hills, with free parking on site. Del Mar clients come north on I-5 to the Washington Street exit, and the KIAMO Skin studio is the second right after it. The same corrective plan applies as for every area: the modalities, the intervals and the session count are set at the first consultation.',
    },
    {
      question: 'Is a facial in Del Mar worth the drive?',
      answer:
        'Roughly twenty-five to thirty minutes off-peak on I-5 north, and the studio has free parking on site so the drive ends at the door. A client who visited Del Mar once wrote that the trip was worth it, and the reason KIAMO Skin publishes every price is that the comparison can be made before anyone books — the first visit is $249 with the consultation and treatment included.',
    },
    {
      question: 'How does the coastal UV in Del Mar affect skin?',
      answer:
        'Cumulative UV produces mottled tone and discrete lentigines, and San Diego runs the highest UV index in the continental United States for much of the year. KIAMO Skin treats that with a LIRA peel series — the Gentle Renewal Peel at $199 to start, the Advanced at $299 once the barrier allows — and a HydraFacial at $259 between corrective sessions.',
    },
    {
      question: 'Can a HydraFacial be booked before a beach event?',
      answer:
        'Yes, and it is the right treatment for the week before an event rather than the day before it. A HydraFacial at KIAMO Skin has no downtime, and the booster is selected from the Syndeo device\'s AI skin analysis rather than from a fixed menu. A peel needs a recovery window and does not belong next to deliberate sun exposure.',
    },
    {
      question: 'Does KIAMO Skin treat every skin tone in Del Mar?',
      answer:
        'Yes — every Fitzpatrick type from I to VI, with the pigment protocols written for the tone they are used on. On skin that has accumulated years of coastal UV, KIAMO Skin starts with the barrier and a gentle protocol rather than escalating straight to the Advanced peel.',
    },
  ],

  'la-mesa': [
    {
      question: 'How far is KIAMO Skin from La Mesa?',
      answer:
        'About fourteen miles east, roughly twenty to twenty-five minutes off-peak via I-8 west to the Washington Street exit, with free parking on site at the studio. It is a straight run with no ferry traffic or coastal detour, and KIAMO Skin schedules the whole corrective course at the first appointment so the intervals fall around recovery.',
    },
    {
      question: 'Why does inland skin need a different approach to pigment?',
      answer:
        'Past the marine layer the exposure is longer and the temperature is higher, and the damage that builds there sits deeper than the coastal kind. KIAMO Skin treats it at that depth — a LIRA peel series from $199 for pigment, a HydraFacial at $259 for the barrier and the surface between sessions — and establishes the depth of the pigment at the consultation rather than guessing at it.',
    },
    {
      question: 'How many sessions does melasma treatment take at KIAMO Skin?',
      answer:
        'Three to four for most clients, four to six weeks apart. Melasma that has developed past the marine layer usually sits deeper and responds more slowly than the coastal kind, so KIAMO Skin gives a realistic timeline at the consultation rather than a fixed promise, and holds the result with daily SPF.',
    },
    {
      question: 'What does the first visit at KIAMO Skin include?',
      answer:
        'A full consultation, a skin analysis and the first treatment, for $249 at KIAMO Skin. The consultation names the concern, assesses the barrier, and produces a written plan with the modalities in it, the intervals and the session count — all before the next appointment is booked, and with no upsell added at the door.',
    },
    {
      question: 'Is a HydraFacial enough, or does the pigment need a peel?',
      answer:
        'A HydraFacial at KIAMO Skin works at the surface and in the follicle, and it holds a correction steady between sessions. Pigment sitting deeper than the surface needs a peel. The consultation establishes which of the two the mark is, and KIAMO Skin says so plainly rather than selling the more expensive treatment by default.',
    },
  ],

  'north-park': [
    {
      question: 'How far is KIAMO Skin from North Park?',
      answer:
        'About three and a half miles, under ten minutes on surface streets with no freeway. University Avenue west or Morena Boulevard south leads to Washington Street, and the KIAMO Skin studio is at 3067 Reynard Way with free parking on site. It is the closest area to the studio, which is why a four-to-six-week corrective series is practical from here.',
    },
    {
      question: 'How does a nearby location change the treatment plan?',
      answer:
        'It changes the schedule rather than the treatment. KIAMO Skin maps the whole course at the first consultation — sessions, intervals and total timeline — and the ten-minute drive is what makes finishing a three-session microchanneling series realistic rather than aspirational. A series that has to be rebooked around a forty-minute drive is a series that gets abandoned.',
    },
    {
      question: 'What do North Park clients book for most?',
      answer:
        'HydraFacials at $259 as the foundation and the maintenance treatment, and Procell microchanneling at $475 for scarring and texture. KIAMO Skin schedules a microchanneling series as three sessions four to six weeks apart, booked together at the first appointment, so the whole course is visible from the start.',
    },
    {
      question: 'Is there parking at KIAMO Skin?',
      answer:
        'Free parking is on site at the KIAMO Skin studio, so there is no street parking to find and no garage to pay for. The studio is by appointment only, which means a space is always available on arrival.',
    },
    {
      question: 'Is the price at KIAMO Skin the same for North Park clients?',
      answer:
        'The price is the same for every client. The first visit at KIAMO Skin is $249 whatever part of the county a client drives from, and the price that follows depends on what the skin needs rather than on the distance. A HydraFacial is $259, dermaplaning is $199, and LIRA chemical peels run from $199 to $299. Every price is published before a booking is made.',
    },
  ],

  'pacific-beach': [
    {
      question: 'How far is KIAMO Skin from Pacific Beach?',
      answer:
        'About five miles south, ten to fifteen minutes depending on the stretch of Mission Boulevard and the traffic on it. Free parking is on site at the KIAMO Skin studio at 3067 Reynard Way, so the drive ends at the door. A HydraFacial at $259 with no downtime is the treatment most clients book before a beach day.',
    },
    {
      question: 'What does the marine layer do to skin?',
      answer:
        'It keeps the coast cool enough to stay outside for hours, and long exposure produces mottled pigment that sits deeper than a sunburn ever reaches. KIAMO Skin treats that with a LIRA peel series — $199 for the Gentle Renewal Peel, $299 for the Advanced — and a HydraFacial at $259 between corrective sessions.',
    },
    {
      question: 'Can a facial be booked before a beach day?',
      answer:
        'Yes, and the order matters. A HydraFacial at KIAMO Skin works without abrasion, so it can be booked close to the water; a peel needs a recovery window and should not sit next to deliberate sun exposure. KIAMO Skin sets that spacing at the consultation rather than after the fact.',
    },
    {
      question: 'What do Pacific Beach clients book for scalp issues?',
      answer:
        'Keravive scalp therapy at $599, and a series of three at $1,499 is the usual plan. Salt, UV through the part line and hard water all collect on the scalp, and KIAMO Skin clears the buildup at the follicle rather than dissolving it, which is what makes the result last between visits.',
    },
    {
      question: 'Does KIAMO Skin treat every skin tone in Pacific Beach?',
      answer:
        'Yes — every Fitzpatrick type from I to VI, with the pigment protocols written for the tone they are used on. On Pacific Beach skin, which carries a high UV load, KIAMO Skin starts on the gentle protocol and raises strength only as the barrier allows.',
    },
  ],

  'point-loma': [
    {
      question: 'How far is KIAMO Skin from Point Loma?',
      answer:
        'About twelve miles, roughly twelve minutes via Rosecrans Street east to Washington Street. The KIAMO Skin studio is at 3067 Reynard Way with free parking on site, which is short enough that a corrective series at four-to-six-week intervals stays workable, and short enough that the drive is never the reason a course gets abandoned.',
    },
    {
      question: 'Why does Point Loma skin need the barrier treated first?',
      answer:
        'There is water on both sides of the peninsula, and the wind between them strips the lipids that hold the barrier together. KIAMO Skin rebuilds that function before anything is layered on it — DMK Enzyme Therapy at $279 where the barrier is compromised, then the surface work. A peel on a barrier that is not ready does more harm than good.',
    },
    {
      question: 'Can a chemical peel be done on Point Loma skin?',
      answer:
        'Yes, and KIAMO Skin uses no thermal energy anywhere in the pigment protocol, because heat is a recognised trigger for melasma. The Gentle Renewal Peel is $199 and the Advanced is $299, and the strength is raised across a series only as the barrier allows.',
    },
    {
      question: 'What is the first visit at KIAMO Skin?',
      answer:
        'A full consultation, a skin analysis and the first treatment, for $249 at KIAMO Skin. Kiki, a California licensed esthetician with 7+ years of experience, assesses the barrier and the concern, then writes a plan with the modalities in it, the intervals and the session count — all before the next appointment is booked.',
    },
    {
      question: 'Does KIAMO Skin treat every skin tone in Point Loma?',
      answer:
        'Yes — every Fitzpatrick type from I to VI. On a peninsula where reflected UV and salt exposure arrive together, KIAMO Skin writes the pigment protocols for the tone they are used on and uses no heat anywhere in them.',
    },
  ],

  'hillcrest': [
    {
      question: 'How close is KIAMO Skin to Hillcrest?',
      answer:
        'About five minutes on Washington Street, with free parking on site at the studio. It is the closest neighbourhood to KIAMO Skin at 3067 Reynard Way, and the reason a corrective series at four-to-six-week intervals is realistic from here. No freeway, no on-ramp, no merge.',
    },
    {
      question: 'Which treatments are available for Hillcrest clients?',
      answer:
        'Every treatment on the KIAMO Skin menu — HydraFacial at $259, LIRA chemical peels from $199, dermaplaning at $199, Procell microchanneling at $475, DMK enzyme therapy at $279 and Keravive scalp therapy at $599. What the proximity changes is the schedule, not the treatment: KIAMO Skin maps the whole course at the first appointment.',
    },
    {
      question: 'What skin concern do Hillcrest clients book for?',
      answer:
        'Uneven tone and texture that no home routine has moved. KIAMO Skin treats it with clinical equipment — a HydraFacial at $259 for the surface and the follicle, and a LIRA peel series from $199 for the pigment beneath it, with a HydraFacial between corrective sessions.',
    },
    {
      question: 'What does a facial cost for Hillcrest clients?',
      answer:
        'The first visit is $249 at KIAMO Skin and includes the consultation, the skin analysis and the first treatment. A HydraFacial is $259, dermaplaning is $199, and LIRA chemical peels run from $199 to $299. Every price is published on the site before a booking is made.',
    },
    {
      question: 'Is there parking at the KIAMO Skin studio in Mission Hills?',
      answer:
        'Free parking is on site at the KIAMO Skin studio, so there is no street parking to find and no garage to pay for. The studio is by appointment only, which means a space is always available on arrival.',
    },
  ],
};
