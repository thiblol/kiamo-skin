/**
 * The hero for every service-and-city page.
 *
 * WHY THIS FILE EXISTS
 *   The hero on a service-and-city page was assembled from two shared
 *   strings: the service's own `hero.claim`, which is identical on every
 *   page for that treatment, and the service's `hero.paragraph`, which is
 *   also identical. The only thing that varied was a single sentence of
 *   city context appended from the area shell — and that sentence was shared
 *   by every treatment in the same city. The result was that "HydraFacial in
 *   La Jolla" and "HydraFacial in Carlsbad" opened with the same claim and
 *   the same paragraph, differing by one clause.
 *
 *   That is the copy-paste pattern Google's doorway-page guidance describes,
 *   and it was measurable: 1,329 of 2,395 page pairs in the location cluster
 *   shared more than a quarter of their five-word shingles, and the worst
 *   pair sat at 76%.
 *
 * WHAT IS HERE
 *   One claim and one paragraph per `service:area` pair. The claim is the
 *   line under the H1; the paragraph is the two or three sentences above the
 *   fold. Both are written for that treatment in that city, and both name
 *   KIAMO Skin — a hero that could be published by any studio in any city
 *   is the thing this file exists to remove.
 *
 * THE HOUSE RULES IN THE PARAGRAPH
 *   Answer the reader's question first, then name the studio and say what it
 *   specifically does. No second person: the reader is "a client" or "clients",
 *   not "a client". Every price is a verified one.
 *
 * THE FALLBACK
 *   A pair with no entry here falls back to the service's own hero, so a
 *   treatment added later still builds. The San Diego records carry their own
 *   hero text inside the record itself and are not listed here.
 */
export interface ServiceAreaHero {
  /** The line under the H1. One sentence, no more than about eight words. */
  claim: string;
  /** Two or three sentences above the fold. */
  paragraph: string;
}

export const serviceAreaHeroes: Record<string, ServiceAreaHero> = {
  /* ---------------------------------------------------------------- La Jolla */
  'facial:la-jolla': {
    claim: 'A facial built for ocean-exposed skin.',
    paragraph:
      'Salt water strips the lipids that hold a barrier together, and the rinse afterward takes the rest with it. KIAMO Skin treats that pattern — tight, reactive skin that has stopped tolerating the products it used to — with a modality chosen at the assessment rather than from a menu. A HydraFacial is $259 and a first visit with the consultation is $249.',
  },
  'hydrafacial:la-jolla': {
    claim: 'Extraction that reaches what salt leaves behind.',
    paragraph:
      'La Jolla swims year-round — the Cove has hosted a group swim since 1916 — and the minerals in the water bind with sebum into deposits a home routine cannot shift. KIAMO Skin runs the HydraFacial on a Syndeo device, which extracts at controlled vortex pressure and chooses the booster from an AI skin analysis. $259, or $249 for a first visit with the consultation.',
  },
  'chemical-peel:la-jolla': {
    claim: 'Peels paced for skin that marks easily.',
    paragraph:
      'Ocean exposure and a high UV index mean La Jolla skin accumulates pigment steadily, and pigment on a barrier that has been stripped by salt is what a peel can make worse. KIAMO Skin starts on the Gentle Renewal protocol and raises the strength only as the barrier allows. $199 for the Gentle Renewal Peel, $299 for the Advanced one.',
  },
  'microneedling:la-jolla': {
    claim: 'Scarring corrected without thermal pigment.',
    paragraph:
      'Heat is itself a pigment trigger, and La Jolla skin is already carrying ocean exposure on top of it. KIAMO Skin uses Procell microchanneling, which creates mechanical channels with no radiofrequency component at all, and applies a stem cytokine serum directly into them in the same pass. $475 a session, or $1,199 for a series of three.',
  },
  'dermaplaning:la-jolla': {
    claim: 'A cleared surface, before the beach and after.',
    paragraph:
      'Salt air leaves the surface rough and the product sitting on top of it rather than in it. KIAMO Skin performs dermaplaning on a dry surface with a sterile single-use blade, section by section, at an angle set for the skin type. $199 as a full facial, with no downtime and serums applied while absorption is highest.',
  },
  'scalp-therapy:la-jolla': {
    claim: 'The scalp, treated for swimmers.',
    paragraph:
      'The part line takes direct UV, salt builds up under the hair, and a daily rinse never fully clears either. KIAMO Skin treats the scalp as skin — cleansing, exfoliating and hydrating it, with a peptide complex supporting the environment hair grows in. Keravive scalp therapy is $599, or $1,499 for a series of three.',
  },

  /* --------------------------------------------------------------- Encinitas */
  'facial:encinitas': {
    claim: 'Barrier work before anything is layered on.',
    paragraph:
      'Surf, salt and wind take the lipids out of the barrier and put the skin into a reactive state that a stronger product only makes worse. KIAMO Skin rebuilds that function first — enzyme therapy where the barrier is compromised — and only then resurfaces. $279 for DMK enzyme therapy, $259 for a HydraFacial, $249 for a first visit.',
  },
  'hydrafacial:encinitas': {
    claim: 'Extraction calibrated to surf and salt air.',
    paragraph:
      'Salt air and ocean water leave a film on the skin that cleansing removes on the day and rebuilds by the next. KIAMO Skin runs the HydraFacial on a Syndeo, where vortex extraction lifts mineral and sebum deposits from the follicle at controlled pressure and the booster is chosen from an AI skin analysis. $259, or $249 for a first visit.',
  },
  'chemical-peel:encinitas': {
    claim: 'A peel series that does not trigger more pigment.',
    paragraph:
      'Encinitas skin has the coastal UV load and the salt exposure together, which is exactly the combination where a peel applied to an unready barrier leaves marks behind it. KIAMO Skin starts gentle, reads the response at each visit, and raises the strength only when the skin can hold it. $199 for the Gentle Renewal Peel, $299 for the Advanced one.',
  },
  'microneedling:encinitas': {
    claim: 'Depth control, and no heat with it.',
    paragraph:
      'Scars need collagen stimulation, and the tool that delivers it should not be adding a pigment trigger at the same time. KIAMO Skin uses Procell, where depth is set region by region and the handpiece carries no radiofrequency heat at all. $475 a session, or $1,199 for a series of three.',
  },
  'scalp-therapy:encinitas': {
    claim: 'Scalp therapy for people who live in the water.',
    paragraph:
      'Salt, UV through the part line and hard-water minerals all collect on the scalp, and shampoo removes the film without removing what is underneath it. KIAMO Skin treats it clinically — cleanse, exfoliate, hydrate, and support the environment with a peptide complex. Keravive scalp therapy is $599, or $1,499 for three.',
  },

  /* ---------------------------------------------------------------- Carlsbad */
  'facial:carlsbad': {
    claim: 'A plan that fits the drive, and the skin.',
    paragraph:
      'Corrective work runs on intervals — most series are three or four sessions four to six weeks apart — and the calendar has to hold it. KIAMO Skin schedules the whole course at the first appointment so it sits around recovery, with the modality chosen from the assessment. $249 for a first visit, $259 for a HydraFacial, dermaplaning from $199.',
  },
  'hydrafacial:carlsbad': {
    claim: 'Extraction that clears what the coast leaves behind.',
    paragraph:
      'North County coastal air and hard water do the same thing to the follicle that they do further south: minerals bind with sebum into deposits that a home routine cannot shift. KIAMO Skin runs the HydraFacial on a Syndeo with vortex extraction and an AI-read booster. $259 a session, or $249 for a first visit with the consultation.',
  },
  'chemical-peel:carlsbad': {
    claim: 'Pigment corrected at the depth it sits.',
    paragraph:
      'Melasma, post-acne marks and sun spots are three different problems with three different depths, and the peel has to match the mark rather than the other way round. KIAMO Skin identifies which one is present at the consultation and paces the strength across a series. $199 for the Gentle Renewal Peel, $299 for the Advanced one.',
  },
  'microneedling:carlsbad': {
    claim: 'A series, scheduled before the first one.',
    paragraph:
      'Scar tissue responds to a course, not an appointment, and a course is hard to finish when each visit needs a drive. KIAMO Skin schedules all three sessions at the first one, four to six weeks apart, so recovery sits in the calendar rather than around it. Procell microchanneling is $475 a session or $1,199 for the series.',
  },
  'hyperpigmentation-treatment:carlsbad': {
    claim: 'The mark identified before it is treated.',
    paragraph:
      'Post-acne marks, sun spots and melasma look alike and behave nothing alike, and treating the wrong one with the wrong instrument is what turns a correction into new damage. KIAMO Skin establishes which is present at the consultation, then builds the plan from peels, microchanneling and brightening HydraFacials. The plan and its price are set there.',
  },
  'melasma-treatment:carlsbad': {
    claim: 'Melasma, treated without triggering more of it.',
    paragraph:
      'Heat and aggressive exfoliation are recognised melasma triggers, and this is a coastline where skin already carries the UV load. KIAMO Skin uses no thermal energy anywhere in the protocol, starts on the Gentle Renewal Peel at $199, and raises strength only as the barrier allows. A HydraFacial at $259 sits between corrective sessions.',
  },
  'scalp-therapy:carlsbad': {
    claim: 'The scalp, cleared of what shampoo cannot.',
    paragraph:
      'A North County coastline and hard water do the same thing to a scalp as they do to a face, and the flaking that follows is usually treated with a stronger shampoo rather than a proper removal. KIAMO Skin treats the scalp as skin. Keravive scalp therapy is $599, or $1,499 for a series of three.',
  },

  /* -------------------------------------------------------------- Chula Vista */
  'facial:chula-vista': {
    claim: 'Melasma and uneven tone, treated properly.',
    paragraph:
      'Past the marine layer the UV load runs higher and cumulative, and Chula Vista carries a large melanin-rich population — the two together make melasma the most common concern the studio is booked for here. KIAMO Skin writes the peel protocols for those tones rather than adapting them afterwards. $199 for a peel, $259 for a HydraFacial, $249 for a first visit.',
  },
  'hydrafacial:chula-vista': {
    claim: 'A booster chosen for the tone in front of it.',
    paragraph:
      'On deeper skin tones the brightening booster matters more than the device, because what works on one tone can cause rebound pigment on another. KIAMO Skin uses Britenol, which works on alpha-arbutin and bearberry extract rather than hydroquinone, and selects it from the Syndeo\'s AI skin analysis. $259, or $249 for a first visit.',
  },
  'chemical-peel:chula-vista': {
    claim: 'Peels written for the skin they are used on.',
    paragraph:
      'Melanin-rich skin responds to trauma by producing more pigment, so a peel applied too strongly to a barrier that is not ready leaves marks that outlast the ones it was meant to clear. KIAMO Skin starts on the Gentle Renewal protocol and raises the strength only as the barrier allows. $199 for Gentle Renewal, $299 for the Advanced Peel.',
  },
  'microneedling:chula-vista': {
    claim: 'The correction that does not add a trigger.',
    paragraph:
      'RF microneedling is the standard answer for scarring, and on melanin-rich skin the heat in it activates melanocytes and can leave more marks than it removes. KIAMO Skin uses Procell, which creates mechanical channels with no thermal component. $475 a session, or $1,199 for a series of three.',
  },
  'hyperpigmentation-treatment:chula-vista': {
    claim: 'Pigment protocols written for deeper tones.',
    paragraph:
      'Post-inflammatory hyperpigmentation is the dark mark that outlives the breakout, and it is the one that responds best to correction when the treatment does not add more. KIAMO Skin uses gentle peels, a brightening booster that works without hydroquinone, and no heat anywhere in the protocol. The plan and its price are set at the consultation.',
  },
  'melasma-treatment:chula-vista': {
    claim: 'Even tone, without lightening the skin.',
    paragraph:
      'Melasma is hormonal as well as solar, and the drivers do not stop when the correction does — so the plan is written for maintenance rather than as a one-off. KIAMO Skin treats it with gentle peels at $199, a HydraFacial at $259 between sessions, and a daily SPF plan that holds the result.',
  },

  /* ----------------------------------------------------------------- Del Mar */
  'facial:del-mar': {
    claim: 'A season of sun, treated on the schedule it sets.',
    paragraph:
      'Fair-season exposure and open-sun afternoons produce a specific kind of cumulative damage, and it wants correcting over a series rather than in one strong appointment. KIAMO Skin paces the plan — a peel series for pigment, a HydraFacial for the barrier and the surface between them. $249 for a first visit, $259 for a HydraFacial, peels from $199.',
  },
  'hyperpigmentation-treatment:del-mar': {
    claim: 'Sun marks, corrected and then protected.',
    paragraph:
      'Cumulative UV produces the mottled tone and the discrete spots that show up in a photograph years later, and those need surface correction plus daily protection or they simply return. KIAMO Skin builds the plan from peels, microchanneling and brightening HydraFacials, and writes the SPF into it. The plan and its price are set at the consultation.',
  },
  'melasma-treatment:del-mar': {
    claim: 'A melasma plan that accounts for the sun.',
    paragraph:
      'Here the sun is the half of melasma the client can act on, and the hormonal half the plan has to work around. KIAMO Skin treats it with gentle peels at $199 and no thermal energy anywhere, because heat is itself a trigger. A HydraFacial at $259 between sessions, and daily SPF as part of the plan.',
  },

  /* ----------------------------------------------------------------- La Mesa */
  'facial:la-mesa': {
    claim: 'Cumulative inland UV, at the depth it sits.',
    paragraph:
      'Past the marine layer the exposure is longer and the temperature is higher, and the damage that builds there is deeper than the coastal kind. KIAMO Skin treats it at that depth — a peel series for pigment, a HydraFacial for the barrier and the surface between sessions. $249 for a first visit, peels from $199, HydraFacial $259.',
  },
  'hydrafacial:la-mesa': {
    claim: 'Extraction and hydration for inland skin.',
    paragraph:
      'Inland skin carries more congestion and more dehydration than coastal skin, and the mineral load does not stop at the coast boundary. KIAMO Skin runs the HydraFacial on a Syndeo, with vortex extraction and an AI-selected booster. $259 a session, or $249 for a first visit with the consultation.',
  },
  'chemical-peel:la-mesa': {
    claim: 'The depth inland UV actually reaches.',
    paragraph:
      'Melasma that develops past the marine layer usually sits deeper than the coastal kind, and a surface-only treatment will not reach it. KIAMO Skin identifies the depth at the consultation and paces the peel strength across a series accordingly. $199 for the Gentle Renewal Peel, $299 for the Advanced one.',
  },
  'hyperpigmentation-treatment:la-mesa': {
    claim: 'Inland pigment, at inland depth.',
    paragraph:
      'Years of high UV past the marine layer produce deeper, more established pigment than the coastal kind, and it responds to a different depth of correction. KIAMO Skin assembles the plan from peels, microchanneling and brightening HydraFacials, and writes the daily SPF into it because the exposure here does not take a day off. The plan and its price are set at the consultation.',
  },
  'melasma-treatment:la-mesa': {
    claim: 'Melasma with the sun factor taken seriously.',
    paragraph:
      'Inland clients usually arrive with more years of high UV behind the melasma, which is why the correction needs a plan and not a session. KIAMO Skin uses gentle peels at $199 with no heat anywhere in the protocol, a HydraFacial at $259 between sessions, and daily SPF as part of the plan rather than an afterthought.',
  },

  /* --------------------------------------------------------------- North Park */
  'facial:north-park': {
    claim: 'A ten-minute drive, and a plan that fits it.',
    paragraph:
      'Close enough that a corrective series at four-to-six-week intervals is genuinely practical, which is why the whole course is scheduled at the first appointment. KIAMO Skin chooses the modality from the assessment — HydraFacial, peel, dermaplaning or enzyme therapy — and publishes the price before a booking is made. $249 for a first visit.',
  },
  'microneedling:north-park': {
    claim: 'A three-session series, ten minutes away.',
    paragraph:
      'The nearest city to the studio, and the distance is what makes finishing a course realistic rather than aspirational. KIAMO Skin schedules all three Procell sessions at the first appointment, four to six weeks apart, with no heat anywhere in the treatment. $475 a session, or $1,199 for the series.',
  },
  'hyperpigmentation-treatment:north-park': {
    claim: 'Dark marks, identified and then corrected.',
    paragraph:
      'The three kinds of dark mark need three different treatments, and the difference is visible at the consultation. KIAMO Skin establishes which one is present, then builds the plan from peels, microchanneling and brightening HydraFacials, with daily SPF written into it. The plan and its price are set there, and the studio is ten minutes away.',
  },
  'melasma-treatment:north-park': {
    claim: 'A melasma plan that survives the calendar.',
    paragraph:
      'Melasma needs three or four sessions, and the reason clients do not finish is not the cost — it is the scheduling. KIAMO Skin maps the whole course at the first appointment, four to six weeks apart, with gentle peels at $199 and a HydraFacial at $259 in between. Ten minutes from North Park, with free parking on site.',
  },

  /* ------------------------------------------------------------- Pacific Beach */
  'facial:pacific-beach': {
    claim: 'Marine-layer damage, treated before it sets.',
    paragraph:
      'The marine layer keeps the coast cool enough to stay outside for hours, and long exposure produces mottled pigment that sits deeper than a sunburn ever reaches. KIAMO Skin treats that pattern with a peel series rather than a stronger single treatment. $249 for a first visit, $199 for a peel, $259 for a HydraFacial.',
  },
  'hydrafacial:pacific-beach': {
    claim: 'Extraction for skin that never dries out.',
    paragraph:
      'Marine-layer humidity keeps the skin in a state where sebum, sunscreen and salt accumulate together, and the congestion that comes with it is what a home routine cannot shift. KIAMO Skin runs the HydraFacial on a Syndeo, where vortex extraction lifts it from the follicle and the booster is chosen from an AI skin analysis. $259, or $249 for a first visit.',
  },
  'hyperpigmentation-treatment:pacific-beach': {
    claim: 'The mottled pigment the marine layer leaves.',
    paragraph:
      'Long, cool, unburning exposure produces the diffuse uneven tone that a single peel will not clear, so the plan is a sequence rather than a session. KIAMO Skin builds it from peels, microchanneling and brightening HydraFacials, with daily SPF written in because the exposure here is daily too. The plan and its price are set at the consultation.',
  },
  'melasma-treatment:pacific-beach': {
    claim: 'Melasma treated without adding a trigger.',
    paragraph:
      'A coastal client brings the UV load and the salt exposure together, and heat is the thing that turns a melasma patch deeper. KIAMO Skin uses no thermal energy anywhere in the protocol, starts on the Gentle Renewal Peel at $199, and raises strength only as the barrier allows. A HydraFacial at $259 sits between sessions.',
  },
  'scalp-therapy:pacific-beach': {
    claim: 'Salt, sun and a scalp that gets neither treatment.',
    paragraph:
      'The part line takes direct UV on the beach, salt builds up under the hair, and the hard water underneath that never fully clears. KIAMO Skin treats the scalp as skin — cleanse, exfoliate, hydrate, and support it with a peptide complex. Keravive scalp therapy is $599, or $1,499 for three.',
  },

  /* --------------------------------------------------------------- Point Loma */
  'facial:point-loma': {
    claim: 'A barrier stripped from both sides, rebuilt first.',
    paragraph:
      'Water on one side and salt air on the other, and the wind between them takes the lipids out of the barrier. KIAMO Skin rebuilds that function before anything is layered on it — enzyme therapy first where the barrier is compromised, then the surface. $279 for DMK, $259 for a HydraFacial, $249 for a first visit.',
  },
  'hyperpigmentation-treatment:point-loma': {
    claim: 'Correction, with a barrier rebuilt underneath.',
    paragraph:
      'Pigment cannot be corrected on a barrier that is not holding, and a peninsula client often arrives with both problems at once. KIAMO Skin treats the barrier first, then corrects the mark with peels, microchanneling and brightening HydraFacials. The plan and its price are set at the consultation, and the studio is twelve minutes away.',
  },
  'melasma-treatment:point-loma': {
    claim: 'Gentle correction on a wind-stripped barrier.',
    paragraph:
      'Reflected UV off the water on one side, salt spray on the other, and the barrier carrying the difference. KIAMO Skin uses no heat in the melasma protocol, starts gentle at $199, and rebuilds the barrier with enzyme therapy where it is compromised. A HydraFacial at $259 sits between corrective sessions.',
  },

  /* ---------------------------------------------------------------- Hillcrest */
  'facial:hillcrest': {
    claim: 'Five minutes away, and the plan still comes first.',
    paragraph:
      'The closest neighbourhood to the studio, which is exactly why a corrective series at four-to-six-week intervals is realistic from here. KIAMO Skin chooses the modality from the assessment — HydraFacial at $259, dermaplaning at $199, a peel series from $199 — and publishes the price before a booking is made.',
  },

  /* --------------------------------------------------------------- San Diego */
  /* The city the studio is in. These pages cannot argue that the drive is
     worth it, because there is no drive — so the hero does the other job
     instead: it says what a San Diego client gets, what it costs, and what
     the city does to skin. */
  'facial:san-diego': {
    claim: 'The right facial for San Diego skin.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> reads the city at the assessment and picks the modality from it. San Diego runs the highest UV index in the continental United States for much of the year, and the water is among the hardest in California, so both are part of the plan — a HydraFacial at $259 for congestion and dehydration, dermaplaning at $199 for texture, a peel series from $199 for pigment. The first visit is $249.',
  },
  'hydrafacial:san-diego': {
    claim: 'Extraction calibrated to San Diego water.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> runs the HydraFacial on a Syndeo, where vortex extraction lifts the deposits from the follicle and the booster is chosen from an AI skin analysis. The municipal supply here runs 280–320 parts per million of dissolved calcium and magnesium, which binds with sebum into deposits ordinary cleansing cannot shift. $259, or $249 for a first visit.',
  },
  'chemical-peel:san-diego': {
    claim: 'Pigment, corrected at its depth.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> identifies which mark is present at the consultation, starts on the Gentle Renewal Peel at $199, and raises the strength only as the barrier allows. Melasma, post-acne marks and sun spots respond to different treatments, and the one that fixes one can deepen another. The Advanced Peel is $299.',
  },
  'microneedling:san-diego': {
    claim: 'Scarring, corrected without the heat.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> uses Procell instead of RF microneedling — mechanical channels with no thermal component and a growth factor serum applied straight into them. RF is the standard answer for scarring, and on melanin-rich skin the heat in it can leave more marks than it removes. $475 a session, or $1,199 for a series of three.',
  },
  'dermaplaning:san-diego': {
    claim: 'A cleared surface, and what follows it.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> sets the blade angle and pressure for the skin tone in front of the practitioner. A sterile single-use blade lifts the dead surface layer and fine vellus hair so serums reach live tissue, then the treatment closes with SPF — which matters more here than almost anywhere. $199 as a full facial, with no downtime.',
  },
  'scalp-therapy:san-diego': {
    claim: 'The scalp, treated as skin.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> clears the build-up at the appointment and supports the environment with a peptide complex and a take-home spray. San Diego\'s water runs about 16 grains per gallon, and that mineral film binds with sebum into a build-up shampoo removes on the day and rebuilds by the next. Keravive scalp therapy is $599, or $1,499 for three.',
  },
  'dmk-enzyme-therapy:san-diego': {
    claim: 'Function restored before anything is added.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> uses DMK enzyme therapy to rebuild a compromised barrier — at $279 for Level 1, with deeper levels prescribed only once Level 1 has prepared the skin. A barrier stripped by hard water, salt, wind or an aggressive home routine has to hold water again before a peel or an extraction will do any good.',
  },
  'acne-treatment:san-diego': {
    claim: 'Three problems, three instruments.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> clears congestion with a HydraFacial at $259, rebuilds the barrier with enzyme therapy at $279, fades dark marks with a peel at $199, and softens scarring with microchanneling at $475 — in that order, because the order is what keeps the correction from making new marks. Active breakouts, congestion, and the marks and scarring left behind each need a different treatment.',
  },
  'hyperpigmentation-treatment:san-diego': {
    claim: 'Which mark it is decides the treatment.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> establishes which mark is present at the consultation, then builds the plan from peels, microchanneling and a HydraFacial with a brightening booster, and writes daily SPF into it. Post-acne marks, sun-induced spots and melasma look alike and behave nothing alike. The plan and its price are set there.',
  },
  'melasma-treatment:san-diego': {
    claim: 'Even tone, without lightening.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> uses no thermal energy anywhere in the protocol, starts on the Gentle Renewal Peel at $199, and raises the strength only as the barrier allows. Melasma is hormonal as well as solar, and heat is one of the triggers that deepens it. A HydraFacial at $259 sits between corrective sessions, and daily SPF holds the result.',
  },
  'corrective-skin-treatments:san-diego': {
    claim: 'One concern, sometimes several causes.',
    paragraph:
      '<a href="/" class="border-b border-blush/60 hover:text-blush">KIAMO Skin</a> assesses the concern and the barrier at the first visit, then sets the plan — treatments, intervals and session count — before the next appointment is booked. A corrective plan is assembled from the modalities the skin actually needs, and the barrier usually explains more of the problem than the client expects. The first visit is $249.',
  },
};