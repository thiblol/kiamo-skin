import type { ServiceAreaContent } from './service-area-types';

/**
 * The San Diego records — the city the studio is actually in.
 *
 * WHY THIS FILE EXISTS
 *   The area cluster ran from La Jolla to Chula Vista and never included the
 *   city itself. Every neighbourhood page told a client where to drive TO,
 *   and the one question the cluster could not answer was the simplest one:
 *   "is there a facial spa in San Diego?" Measured demand for the treatment
 *   terms alone is large and uncontested — `microneedling san diego` 720/mo at
 *   keyword difficulty 0, `hydrafacial san diego` 390/mo at 0, `chemical
 *   peel san diego` 170/mo at 0, `dermaplaning san diego` 110/mo at 0 — and
 *   every one of them was unranked.
 *
 *   So San Diego is added as the eleventh area, and it is the one area where
 *   the studio is not a drive away but the destination. That changes what
 *   the page has to do: a neighbourhood page argues that the drive is worth
 *   it, and a city page cannot. It has to be the page that says what a
 *   client in San Diego gets, what it costs, and how the plan works.
 *
 * STRUCTURE
 *   One record per treatment, in the same shape as the other forty-seven
 *   pairs, so they build through the same template and the same schema. The
 *   copy is written for San Diego rather than adapted from a neighbourhood
 *   record — the local context here is the city's UV load, its hard water,
 *   its marine layer and its sheer range of skin tones, not a neighbourhood's
 *   salt exposure.
 *
 * THE HOUSE RULE ON ANSWERS
 *   Every FAQ answer names KIAMO Skin. The answer is worth reading before
 *   the brand arrives, and the brand arrives with a specific fact attached —
 *   the device, the protocol, the price, or who performs it. An answer that
 *   could be published by any studio in any city is not an answer this
 *   cluster needs.
 *
 * PRICES
 *   Only the verified figures from `config/business.ts`. A plan assembled
 *   from several modalities has no single price and says so.
 */
export const serviceAreaContentSanDiego: Record<string, ServiceAreaContent> = {
  'facial:san-diego': {
    service: 'facial',
    area: 'san-diego',
    title: 'Facial in San Diego, CA | KIAMO Skin',
    description:
      'Facials in San Diego from KIAMO Skin in Mission Hills. HydraFacial $259, dermaplaning $199, peels from $199. First visit $249. Licensed esthetician.',
    h1: 'Facial Treatments in San Diego, CA',
    opener:
      'A facial chosen for the skin in front of the practitioner, not from a menu — because San Diego skin arrives with the city\'s UV load and the city\'s water already on it.',
    intro:
      'KIAMO Skin runs the full facial menu from one treatment room in Mission Hills, because the right modality for a reactive barrier is not the right modality for an oily, congested one. Every treatment is performed by Kiki, a California licensed esthetician with 7+ years in corrective skin work, and every price is published before a booking is made.',
    quickAnswer:
      'KIAMO Skin is a licensed facial spa in Mission Hills, San Diego, at 3067 Reynard Way off Washington Street, with free parking on site. Kiki, a California licensed esthetician with 7+ years of experience, chooses the modality for the skin in front of the practitioner — a HydraFacial at $259, dermaplaning at $199, LIRA chemical peels from $199, or DMK enzyme therapy at $279. The first visit is $249 and includes the consultation and skin analysis that set the plan. Every Fitzpatrick type from I to VI is treated.',
    authority: {
      heading: 'Why KIAMO Skin chooses the modality rather than the treatment',
      body:
        'San Diego runs the highest UV index in the continental United States for much of the year, and the water is among the hardest in California. That combination produces two very different skins in the same city — a client who works outdoors and has accumulated ten years of long, unburning UV exposure, and a client whose barrier has been stripped by hard water and an over-exfoliated routine. The same facial does not suit both. At KIAMO Skin the first visit is an assessment, and the modality comes out of it: a HydraFacial where the skin is congested and dehydrated, dermaplaning where the surface is rough and product is sitting on debris, DMK enzyme therapy where the barrier is compromised, and a LIRA peel series where pigment is the concern. The treatment is never chosen from a menu and never escalated past what the barrier can hold on the day.',
    },
    uniqueness: {
      heading: 'What a facial at KIAMO Skin actually includes',
      body:
        'The price on the menu is the price for the whole appointment, and the appointment is the same shape every time:',
      bullets: [
        'A skin assessment that sets the Fitzpatrick type, the barrier condition and the concern before anything is applied',
        'The modality selected from that assessment, with no upsell and no add-on sold at the door',
        'AI skin analysis on the HydraFacial Syndeo, which reads hydration, congestion and pigment distribution',
        'A home-care routine written for the skin in the room, with SPF guidance for the city\'s UV load',
        'One practitioner throughout, from the consultation to the last step of the treatment',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body:
        'Three stages, in the same order, at every visit. The assessment decides the modality, the treatment executes it, and the home-care plan is what keeps the result between visits. Corrective work runs on a schedule — most clients return monthly for maintenance, and a pigment or barrier plan is usually paced at four to six weeks.',
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates the Fitzpatrick type from I to VI, the barrier condition, and the concern that brought the client in. The assessment accounts for the specific demands of the city: cumulative UV, hard-water mineral deposits at 280–320 ppm, salt exposure for the clients who work on the water, and any corrective work already in progress. On the HydraFacial Syndeo, AI skin analysis reads hydration, congestion and pigmentation patterns.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions run 45 to 75 minutes depending on the modality chosen. HydraFacial Syndeo pairs enzymatic resurfacing with calibrated vortex extraction and infusion of a booster selected from the analysis. LIRA peels use acid concentrations matched to the tone in front of the practitioner. DMK enzyme therapy rebuilds barrier function where the barrier is compromised. Dermaplaning refines the surface before serum infusion. No modality is applied without checking it is safe for the skin type in the room.',
        },
        {
          step: 'Home care',
          description:
            'The treatment is one part of the result and the daily routine is the larger part. KIAMO Skin prescribes a regimen written for the assessment: ceramide-rich moisturisers where the barrier is stripped, tyrosinase inhibitors where pigment is the concern, and broad-spectrum SPF 50+ because San Diego\'s UV load makes daily sunscreen the difference between a correction that holds and one that fades.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in San Diego',
      body:
        'Most clients booking a facial in San Diego are correcting something specific rather than relaxing: pigment from the city\'s UV load, congestion and dehydration from hard water and air-conditioned offices, a barrier that has stopped holding water, uneven texture that no at-home routine has moved, or dull tone ahead of an event. KIAMO Skin fits when the priority is one practitioner who assesses before treating, a published price before a booking, and a plan that says how many sessions and how far apart. For severe or persistent acne, KIAMO Skin works alongside a dermatologist rather than replacing one.',
    },
    faqs: [
      {
        question: 'How much does a facial cost in San Diego?',
        answer:
          'The first visit is $249 and includes the consultation, the skin analysis and the first treatment. After that a HydraFacial is $259, dermaplaning is $199, LIRA chemical peels start at $199 and go to $299 for the advanced protocol, and DMK enzyme therapy is $279. KIAMO Skin publishes every one of those prices on the site, because comparing studios in San Diego is difficult when nobody lists a price — and the monthly memberships run from $199.',
      },
      {
        question: 'What happens at a first facial in San Diego?',
        answer:
          'A consultation and a skin analysis come first, and the treatment is chosen out of that assessment rather than off a menu. Nothing is applied before the skin has been looked at, and no modality is used that is not safe for the Fitzpatrick type in front of the practitioner. At KIAMO Skin the first visit is $249 and includes the consultation, the analysis and the treatment, so the plan is set before the next appointment is booked.',
      },
      {
        question: 'Which facial is right for pigmentation in San Diego?',
        answer:
          'Pigment needs a peel series rather than a single facial, because the marks sit at a depth a surface treatment does not reach — and in San Diego the cause is usually cumulative UV, so daily SPF decides whether the correction holds. KIAMO Skin treats melasma and post-acne marks with LIRA chemical peels, with the strength raised only as the barrier allows, and uses a HydraFacial with a brightening booster between corrective sessions.',
      },
      {
        question: 'How often should a facial be booked in San Diego?',
        answer:
          'Monthly for maintenance, and every four to six weeks for a corrective plan addressing pigment or barrier damage. The interval is set at the consultation and adjusted as the skin responds, rather than sold as a fixed package in advance. KIAMO Skin schedules the whole course at the first appointment, which is what makes a multi-session plan realistic alongside work and travel.',
      },
      {
        question: 'Is there parking near KIAMO Skin in San Diego?',
        answer:
          'Parking is free on site at the studio, at 3067 Reynard Way in Mission Hills, so there is no street parking to find and no garage to pay for. The studio is by appointment only, which means a space is always available on arrival. KIAMO Skin sits off Washington Street, three and a half miles from the city centre and under ten minutes from North Park, Hillcrest, Little Italy and Bankers Hill.',
      },
      {
        question: 'Does KIAMO Skin treat darker skin tones?',
        answer:
          'Yes — every Fitzpatrick type from I to VI, and melanin-rich skin is where the pigment protocols are written most carefully. Standard peels and aggressive exfoliation applied at concentrations designed for lighter skin can trigger post-inflammatory hyperpigmentation on Black and brown skin, so KIAMO Skin starts gently, raises strength only as the barrier allows, and treats tone rather than lightening it.',
      },
    ],
  },

  'hydrafacial:san-diego': {
    service: 'hydrafacial',
    area: 'san-diego',
    title: 'HydraFacial in San Diego, CA | KIAMO Skin',
    description:
      'HydraFacial in San Diego on the Syndeo device. Medical-grade extraction, custom booster, LED included. $259, first visit $249. Request an appointment.',
    h1: 'HydraFacial in San Diego, CA',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with the booster chosen from the skin analysis rather than from a list.',
    intro:
      'KIAMO Skin performs the HydraFacial on a Syndeo device, which runs enzymatic resurfacing, calibrated vortex extraction and precision infusion in one pass — and adds AI skin analysis to choose the booster. LED light therapy and a take-home plan are included in the appointment, not sold as an add-on.',
    quickAnswer:
      'HydraFacial in San Diego at KIAMO Skin is $259, or $249 for a first visit with the consultation and skin analysis included. Kiki, a California licensed esthetician with 7+ years of experience, performs the treatment on a HydraFacial Syndeo at the Mission Hills studio — enzymatic resurfacing, calibrated vortex extraction and precision infusion, with the booster selected from the device\'s AI skin analysis and LED light therapy included. The treatment is safe for every Fitzpatrick type from I to VI.',
    authority: {
      heading: 'Why KIAMO Skin runs the Syndeo and not a consumer device',
      body:
        'The difference between a HydraFacial and a spa facial with a suction wand is the extraction pressure and what it removes. The Syndeo pulls mineral deposits and sebum from the follicle at controlled vortex suction, and San Diego is the market where that matters most: municipal water here runs 280–320 parts per million of dissolved calcium and magnesium, and those minerals bind with sebum into deposits that ordinary cleansing cannot shift. Add salt spray and coastal humidity for the clients who live or work on the water, and a follicle-level extraction is doing something a generic facial cannot. AI skin analysis then reads hydration, congestion and pigment distribution and selects the booster, so the treatment is chosen from the skin on the day rather than from what the client asked for.',
    },
    uniqueness: {
      heading: 'What is included in a HydraFacial at KIAMO Skin',
      body:
        'The appointment at KIAMO Skin is not the four steps and nothing else — the parts that make the result hold are included in the price:',
      bullets: [
        'AI skin analysis on the Syndeo, read before the treatment and used to select the booster',
        'Calibrated vortex extraction at 30–70 mmHg, which lifts mineral deposits from the follicle',
        'A booster chosen for the analysis — brightening for dark marks and melasma, barrier support for compromised skin',
        'LED light therapy every visit, included rather than sold as an add-on',
        'A take-home routine written for the assessment, and the first visit at $249 with the consultation and analysis',
      ],
    },
    depth: {
      heading: 'What happens during a HydraFacial at KIAMO Skin',
      body:
        'Three actions run in sequence on the Syndeo, and the third is what makes the second worth doing — because a follicle is only receptive while its surface is clean. There is no downtime and no recovery window; a client can go straight back to the day.',
      process: [
        {
          step: 'Cleanse and resurface',
          description:
            'A blend of gentle exfoliating acids lifts away the dead surface layer without abrasive scrubbing. This matters more in San Diego than most markets, because the mineral residue here sits on top of the skin as well as in the follicle, and it is what makes a home routine feel like it is doing nothing.',
        },
        {
          step: 'Extract and hydrate',
          description:
            'Vortex extraction removes sebum and debris at controlled pressure before the skin is flooded with hydration and antioxidants while the pores are still receptive. This is the step that reaches the hard-water deposits the city\'s water leaves behind, and it is the reason a HydraFacial is the treatment of record for congested and dehydrated skin here.',
        },
        {
          step: 'Boost and light',
          description:
            'A customised booster is selected from the analysis — Britenol for dark marks, melasma and post-inflammatory pigmentation, which uses alpha-arbutin and bearberry extract rather than hydroquinone because hydroquinone can cause rebound pigment in deeper tones. LED light therapy follows, and the appointment closes with the home-care routine that keeps the result between visits.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in San Diego',
      body:
        'The clients booking a HydraFacial in San Diego are usually maintaining rather than correcting: keeping congestion and dehydration under control between stronger sessions, clearing the mineral buildup that hard water leaves in the follicle, or arriving before an event with a surface that reflects light. KIAMO Skin also uses it as the between-sessions treatment inside a peel or microchanneling plan, where the job is to hold the correction steady while the skin recovers between sessions.',
    },
    faqs: [
      {
        question: 'How much does a HydraFacial cost in San Diego?',
        answer:
          'A HydraFacial is $259 at KIAMO Skin, and the first visit is $249 with the consultation, skin analysis and treatment included. LED light therapy and the take-home routine are in the price rather than added to it.',
      },
      {
        question: 'What does a HydraFacial actually do?',
        answer:
          'Three things at once: enzymatic resurfacing lifts the dead surface layer, calibrated vortex extraction vacuums sebum and mineral deposits out of the follicle, and precision infusion pushes hydration and antioxidants in while the pores are still open. That third step is why it is not the same as a deep-cleansing facial — the extraction would be pointless if the skin could not receive anything afterwards. KIAMO Skin runs it on a Syndeo device with AI skin analysis, and the booster is selected from that analysis.',
      },
      {
        question: 'Is a HydraFacial safe for dark skin?',
        answer:
          'Yes, across the whole Fitzpatrick range from I to VI, because the treatment uses no heat, no laser and no aggressive peeling agents — the acids are at concentrations proven safe on melanin-rich skin, and vortex extraction does not cause the trauma that triggers post-inflammatory hyperpigmentation. KIAMO Skin uses the Britenol brightening booster for dark marks and melasma on deeper tones, which works on alpha-arbutin and bearberry extract rather than hydroquinone, because hydroquinone can cause rebound pigmentation in those tones.',
      },
      {
        question: 'How often should a HydraFacial be booked?',
        answer:
          'Monthly for maintenance, which is what most San Diego clients book. Inside a corrective plan, a HydraFacial is usually the between-sessions treatment that holds the result while a peel series or a microchanneling series does the work — the interval in that case is set by the corrective plan rather than by the HydraFacial itself. KIAMO Skin sets the cadence at the consultation and adjusts it as the skin responds.',
      },
      {
        question: 'Is there downtime after a HydraFacial?',
        answer:
          'None. There may be a little flush for half an hour, but a client can return to work, the beach or an event the same day, which is why so many San Diego clients book it before something important. KIAMO Skin closes the appointment with the take-home routine that keeps the result, and there is nothing to recover from while it works.',
      },
      {
        question: 'Does a HydraFacial work on San Diego\'s hard water buildup?',
        answer:
          'That is the specific problem it is built for here. San Diego\'s municipal water runs 280–320 parts per million of dissolved calcium and magnesium, which binds with sebum into calcium carbonate deposits that sit in the follicle and that ordinary cleansing cannot remove. KIAMO Skin\'s Syndeo extracts those deposits directly at controlled suction pressure, which is why the treatment is the studio\'s most-booked answer to congestion and dullness on skin that has stopped responding to a home routine.',
      },
    ],
  },

  'chemical-peel:san-diego': {
    service: 'chemical-peel',
    area: 'san-diego',
    title: 'Chemical Peels in San Diego, CA | KIAMO Skin',
    description:
      'Chemical peels in San Diego for melasma and post-acne marks. LIRA Gentle Renewal $199, Advanced Peel $299. Calibrated for melanin-rich skin.',
    h1: 'Chemical Peels in San Diego, CA',
    opener:
      'Professional peels with the strength raised only as the barrier allows, and the acid chosen for the tone in front of the practitioner.',
    intro:
      'KIAMO Skin applies the LIRA range in San Diego the way the range is meant to be applied: Gentle Renewal to start, Advanced for the pigmentation that needs depth, and the escalation paced across a series rather than compressed into one appointment. Every price is published and every plan is set at the consultation.',
    quickAnswer:
      'Chemical peels in San Diego at KIAMO Skin cost $199 for a LIRA Gentle Renewal Peel and $299 for the Advanced Peel, the one used for pigmentation and scarring. Kiki, a California licensed esthetician with 7+ years of experience, selects the acid and its strength for the Fitzpatrick type in front of the practitioner and raises it only as the barrier allows. Most San Diego melasma and post-acne mark plans run three to four sessions, four to six weeks apart.',
    authority: {
      heading: 'Why KIAMO Skin paces peels rather than escalating them',
      body:
        'Pigmentation is the reason most San Diego clients book a peel, and it is also where the wrong treatment does lasting damage. Melanin-rich skin responds to trauma by producing more pigment, so a peel that is too strong on a barrier that is not ready does not just fail to work — it adds marks that were not there before, and those marks take longer to clear than the ones the client came in with. The KIAMO Skin method is to start where the barrier can hold, read the response at each visit, and raise the concentration only when the skin has shown it can take it. That is why the Gentle Renewal Peel is the starting point on most San Diego plans and the Advanced Peel is reached over three or four sessions rather than in one.',
    },
    uniqueness: {
      heading: 'How KIAMO Skin runs a peel plan',
      body:
        'The peel is the second step, not the whole plan. KIAMO Skin builds the plan around it:',
      bullets: [
        'A home-prep period before the first acid, so the barrier is ready before anything is applied',
        'Gentle Renewal at $199 to start, Advanced at $299 once the skin has shown it can hold it',
        'Each peel layered and timed to the response on the day, not to a fixed clock',
        'A HydraFacial with a brightening booster between sessions where pigment is the concern',
        'Daily SPF written into the plan — the reason most San Diego pigment corrections fade without it',
      ],
    },
    depth: {
      heading: 'What a peel series involves at KIAMO Skin',
      body:
        'Pigment is corrected in a series — most San Diego plans run three to four sessions, four to six weeks apart, and six to eight for a full result. There is no single-session version of this, and a studio that offers one is offering something that cannot work.',
      process: [
        {
          step: 'Identify the mark',
          description:
            'Melasma, post-acne marks and sun-induced lentigines look similar and respond to completely different treatment. KIAMO Skin establishes which one is present at the consultation, because the depth of the mark and the depth of the required acid depend on it — and because a peel chosen for the wrong mark is what turns a correction into new damage.',
        },
        {
          step: 'Patch and prepare',
          description:
            'Most pigmentation plans begin with a period of home preparation so the skin is ready before any acid is applied. Retinoids and exfoliating acids stop, SPF goes up, and the barrier is allowed to settle. This is the step that decides whether the first peel can be stronger or has to be gentle.',
        },
        {
          step: 'Apply and read',
          description:
            'The peel is layered and timed to the response on the day. KIAMO Skin starts on the Gentle Renewal protocol and moves to the Advanced one only when the skin has demonstrated it can hold the concentration — which is why most San Diego clients see visible change across three to four sessions rather than one.',
        },
        {
          step: 'Protect and hold',
          description:
            'Daily broad-spectrum SPF is what holds the result, and it is the hardest instruction to keep in a city with this much UV. KIAMO Skin writes the SPF and home-care routine into the plan rather than mentioning it at the end, because without it the correction fades and the client concludes the peel did not work.',
        },
      ],
    },
    intent: {
      heading: 'Who books a chemical peel in San Diego',
      body:
        'The clients booking peels in San Diego are correcting pigment — melasma from hormones and sun, post-acne marks from a previous breakout cycle, or the lentigines that a decade of the city\'s UV accumulates. KIAMO Skin fits when the priority is a peel series paced to the skin rather than a single strong treatment, an acid and a strength selected for the tone in front of the practitioner, and a published price. Where a client\'s pigment is severe or has not responded to a first series, KIAMO Skin says so and refers on.',
    },
    faqs: [
      {
        question: 'How much do chemical peels cost in San Diego?',
        answer:
          'A LIRA Gentle Renewal Peel is $199 and the LIRA Advanced Peel — the one used for pigmentation and scarring — is $299 at KIAMO Skin. Most San Diego pigment plans run three to four sessions, and every price is published on the site before a booking is made.',
      },
      {
        question: 'Are chemical peels safe on dark skin?',
        answer:
          'They are, when the strength is paced rather than escalated. Melanin-rich skin responds to trauma by producing more pigment, so a peel applied too strongly to a barrier that is not ready can leave marks that were not there before and that take longer to clear than the original ones. KIAMO Skin starts on the Gentle Renewal protocol, reads the response at each visit, and raises the strength only when the skin has shown it can hold it.',
      },
      {
        question: 'How many peels does it take to clear melasma?',
        answer:
          'Most clients see visible change across three to four sessions, and six to eight for the full result, with sessions four to six weeks apart. Melasma is hormonal as well as solar, so the daily SPF is what holds the correction — KIAMO Skin writes that into the plan at the consultation rather than mentioning it at the end, because a fade without sunscreen is the usual reason a series looks like it did nothing.',
      },
      {
        question: 'What should be avoided after a chemical peel?',
        answer:
          'Retinoids, vitamin A derivatives and strong exfoliating acids while the skin is recovering, and deliberate sun exposure for the first week. KIAMO Skin closes each peel appointment with the home-care routine for the days immediately after, so the recovery period is specified rather than left to guesswork — and the studio is in Mission Hills, so there is no sun exposure involved in getting to the appointment.',
      },
      {
        question: 'Can a peel be combined with other treatments?',
        answer:
          'Some can, and some cannot, and the difference is clinical rather than commercial. A HydraFacial and dermaplaning can share a single appointment. A LIRA peel and Procell microchanneling cannot be layered in one visit, because both work on the skin surface and the recovery periods overlap. KIAMO Skin decides what can safely share an appointment at the consultation and says so plainly, rather than selling a longer appointment.',
      },
      {
        question: 'What is the difference between a peel and a HydraFacial?',
        answer:
          'A HydraFacial works at the surface and in the follicle — it resurfaces, extracts and infuses, with no downtime and no recovery. A peel uses acid to provoke a controlled injury that the skin then repairs, which is what reaches pigment at depth, and which means a recovery period. At KIAMO Skin the two are often used together, with the HydraFacial between peel sessions to hold the correction steady.',
      },
    ],
  },

  'microneedling:san-diego': {
    service: 'microneedling',
    area: 'san-diego',
    title: 'Microneedling in San Diego, CA | KIAMO Skin',
    description:
      'Microneedling in San Diego with Procell. No RF heat, so no pigment trigger. Acne scars and texture, $475, series of three $1,199.',
    h1: 'Microneedling in San Diego, CA',
    opener:
      'Procell microchanneling — mechanical channels and a growth factor serum, with no radiofrequency heat anywhere in the treatment.',
    intro:
      'KIAMO Skin performs Procell microchanneling, which creates thousands of microscopic channels and delivers a stem cytokine growth factor serum directly into them in the same pass. The absence of thermal energy is the reason it is the treatment of record for scarring and texture on melanin-rich skin.',
    quickAnswer:
      'Microneedling in San Diego at KIAMO Skin is Procell microchanneling — $475 for a single session or $1,199 for a series of three. Kiki, a California licensed esthetician with 7+ years of experience, creates thousands of microscopic channels with a precision handpiece and applies a stem cytokine growth factor serum into them in the same pass. There is no radiofrequency heat anywhere in the treatment, which is what makes it safe on Fitzpatrick types IV to VI. Sessions are spaced four to six weeks apart.',
    authority: {
      heading: 'Why KIAMO Skin uses Procell rather than RF microneedling',
      body:
        'RF microneedling devices combine needle penetration with radiofrequency heat delivered through the tip. In lighter skin tones that heat stimulates collagen remodelling without significant risk. In melanin-rich skin — Fitzpatrick IV, V and VI — it activates melanocytes near the treatment zone, and the result can be more dark marks than the ones the client came in to remove. San Diego has a large melanin-rich population and a UV load that makes any new pigment expensive, so the thermal component is not a neutral variable here; it is the main risk in the treatment. KIAMO Skin uses Procell because it creates mechanical channels with no thermal element at all, which makes the inflammatory trigger controlled and predictable. This is not a compromised version of microneedling. It is the correct selection for the population the studio serves.',
    },
    uniqueness: {
      heading: 'What is included in a Procell session at KIAMO Skin',
      body:
        'The price covers the whole appointment, and the appointment is not just the pass:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier or recent retinoid use changes the protocol',
        'Topical numbing for 20 to 30 minutes, so the pass itself is comfortable',
        'A systematic grid pass across forehead, cheeks, chin and perioral area, with depth set region by region',
        'The stem cytokine serum applied directly into the open channels in the same pass',
        'LED light therapy and barrier protection at the end, both included in the price',
      ],
    },
    depth: {
      heading: 'What happens during a Procell microchanneling session',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing and the aftercare — and for a San Diego client on a corrective series, that arc is what matters more than the treatment time.',
      process: [
        {
          step: 'Skin assessment and preparation',
          description:
            'Every session begins with a skin review at KIAMO Skin. Active inflammatory acne, a compromised barrier, or recent use of prescription retinoids may require the protocol to be adjusted. Numbing cream is applied and left for 20 to 30 minutes before anything else begins.',
        },
        {
          step: 'The microchanneling pass',
          description:
            'The Procell handpiece passes across the face in a systematic grid — forehead, cheeks, chin, perioral area. Treatment depth is set region by region rather than uniformly, according to skin thickness and the concern being treated. Most clients describe mild pressure with minimal sensation while numbed.',
        },
        {
          step: 'Growth factor serum application',
          description:
            'Immediately after the channels are created, Procell\'s stem cytokine serums are applied directly into them. This is the step that separates Procell from conventional microneedling: the growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          description:
            'Red and near-infrared LED light therapy follows every session at KIAMO Skin to reduce post-treatment inflammation and support the healing response. It is included in the appointment price rather than sold as an add-on.',
        },
        {
          step: 'Barrier protection and aftercare',
          description:
            'A calming, occlusive barrier product is applied and the client leaves with clean, protected skin. Expect redness similar to a mild sunburn for 24 to 48 hours, and possible dryness or flaking as the skin renews. The channels close within hours, but UV-sensitivity stays elevated for seven to ten days, so SPF is not optional.',
        },
      ],
    },
    intent: {
      heading: 'Who books microneedling in San Diego',
      body:
        'The clients booking Procell in San Diego are usually correcting atrophic acne scarring — the indented kind left by cysts or deep inflammatory breakouts — along with texture, enlarged pores, uneven tone and post-inflammatory dark marks. Others are mid-series, booking the second or third session of a three-treatment course. KIAMO Skin schedules the full course at the first appointment, four to six weeks apart, so the appointments sit around recovery rather than being booked one at a time — and the $1,199 series price costs less than three single sessions.',
    },
    faqs: [
      {
        question: 'How much does microneedling cost in San Diego?',
        answer:
          'A single Procell microchanneling session is $475 at KIAMO Skin, and the three-session series used for scarring and significant post-inflammatory pigmentation is $1,199 — less than three single sessions. Every session includes topical numbing, the growth factor serum, LED light therapy and barrier protection.',
      },
      {
        question: 'Is microneedling safe on dark skin?',
        answer:
          'It is safe when the treatment carries no heat, and that is the whole point of the Procell protocol KIAMO Skin uses. RF microneedling devices activate melanocytes near the treatment zone and can trigger post-inflammatory hyperpigmentation as a response to thermal trauma — which on a San Diego client with a high UV load means new marks on top of the old ones. Procell creates mechanical channels with no thermal component, which makes the inflammatory trigger controlled and predictable.',
      },
      {
        question: 'How many microchanneling sessions are needed for acne scars?',
        answer:
          'A series of three is the usual plan at KIAMO Skin, spaced four to six weeks apart. The depth and the number of passes are set per session based on how the skin responded the last time, so the second appointment is informed by the first. It helps the indented kind — atrophic scars from cysts or deep inflammatory breakouts — by stimulating collagen production; it does not lift a scar the way a surgical revision would, and it is not the treatment for active inflammatory acne, which has to be controlled first.',
      },
      {
        question: 'What is the recovery like after microchanneling?',
        answer:
          'Expect redness similar to a mild sunburn for 24 to 48 hours, and mild dryness or flaking as the skin renews. Retinoids, vitamin A derivatives and strong exfoliants are avoided while the skin recovers, and so is direct sun — UV-sensitivity stays elevated for seven to ten days even though the channels close within hours. KIAMO Skin sends clients home with a barrier product applied and the aftercare specified for those days.',
      },
      {
        question: 'How long does a microchanneling appointment take?',
        answer:
          'The pass itself takes 20 to 30 minutes. The appointment is longer than that, because the skin review comes first, the numbing sits for 20 to 30 minutes before anything starts, and LED light therapy and barrier protection close it out. KIAMO Skin builds the three-session series around those intervals so the appointments sit around recovery rather than being booked one at a time.',
      },
      {
        question: 'Can microchanneling be combined with a HydraFacial?',
        answer:
          'Not in the same appointment, but they are used together in the right order. The two treatments work on the same surface, and layering them in one visit means two recovery periods overlapping. KIAMO Skin uses the HydraFacial between microchanneling sessions to hold the correction steady, and dermaplaning can share a visit with a HydraFacial because it is a surface refinement rather than a controlled injury.',
      },
    ],
  },

  'dermaplaning:san-diego': {
    service: 'dermaplaning',
    area: 'san-diego',
    title: 'Dermaplaning in San Diego, CA | KIAMO Skin',
    description:
      'Dermaplaning in San Diego at KIAMO Skin. Sterile blade, no downtime, $199 as a full facial. Safe for every skin tone.',
    h1: 'Dermaplaning in San Diego, CA',
    opener:
      'A sterile surgical blade lifting the dead surface layer and fine vellus hair, so everything applied afterwards reaches live tissue.',
    intro:
      'KIAMO Skin performs dermaplaning as a full facial — cleanse, dermaplane, treat, protect — at $199. The blade angle and pressure are set for the tone in front of the practitioner, which is what makes it safe on the darker skin tones the studio treats.',
    quickAnswer:
      'Dermaplaning in San Diego at KIAMO Skin is $199 as a full facial — cleanse, dermaplane, treat and protect — with no downtime. Kiki, a California licensed esthetician with 7+ years of experience, uses a sterile single-use surgical blade held at a fixed angle and drawn across the skin in short controlled strokes. KIAMO Skin has treated Fitzpatrick types IV to VI for over seven years, and correct blade angle and pressure are what make the treatment safe on those tones.',
    authority: {
      heading: 'What makes dermaplaning safe on darker skin',
      body:
        'The safety question on dermaplaning is not the blade, it is the technique. A sterile surgical blade held at the wrong angle or pushed too hard abrades the skin rather than lifting the dead layer, and abrasion is inflammation, and inflammation on melanin-rich skin is post-inflammatory hyperpigmentation. KIAMO Skin performs the pass on a completely dry surface, because residual moisture changes how the blade sits, works section by section in short controlled strokes, and works around active or pustular acne rather than over it. The vellus hair grows back exactly as it was — same texture, same colour — because the blade never touches the follicle. There is no version of this treatment where the hair comes back thicker.',
    },
    uniqueness: {
      heading: 'What a dermaplane facial at KIAMO Skin includes',
      body:
        'The price is for the whole facial, and the blade is only the middle of it:',
      bullets: [
        'A full cleanse before anything else, because dermaplaning is performed on a dry surface',
        'A sterile single-use surgical blade, section by section, at an angle set for the skin type',
        'Active and pustular acne worked around rather than over',
        'Serums applied while absorption is at its highest, on the cleared surface',
        'SPF to close the treatment, which matters more in San Diego than almost anywhere',
      ],
    },
    depth: {
      heading: 'How a dermaplane facial works at KIAMO Skin',
      body:
        'Three steps, no downtime, and an immediate result. KIAMO Skin performs it as a full facial rather than as a bare blade pass, because a cleared surface with nothing applied to it is not a treatment — it is a preparation.',
      process: [
        {
          step: 'Cleanse and dry',
          description:
            'The skin is cleansed and taken completely dry. This is not a formality: dermaplaning is performed on a dry surface, and any residual moisture changes how the blade sits and how much it takes with it. KIAMO Skin takes the drying step seriously for exactly that reason.',
        },
        {
          step: 'The pass',
          description:
            'The blade is held at a fixed angle and drawn across the skin in short, controlled strokes, section by section. KIAMO Skin works around active or pustular acne rather than over it, and the angle and pressure are set for the skin tone in front of the practitioner — which is the whole of the safety argument on darker skin.',
        },
        {
          step: 'Treat and protect',
          description:
            'With the dead surface layer removed, serums are applied while absorption is at its highest, and the treatment closes with SPF. Daily sunscreen is what holds the result in a city running the highest UV index in the continental United States, and KIAMO Skin writes the SPF guidance into the aftercare rather than leaving it as an afterthought.',
        },
      ],
    },
    intent: {
      heading: 'Who books dermaplaning in San Diego',
      body:
        'Dermaplaning in San Diego is booked for events and for texture. Clients book it before a wedding, a graduation, a conference or a shoot because there is no downtime and the glow is immediate — makeup sits on a smooth surface instead of catching on texture. Others book it because product has stopped absorbing and the barrier of dead cells is in the way, or because they need a low-inflammation exfoliation that does not carry the pigment risk of an acid peel. KIAMO Skin also pairs dermaplaning with a peel where pigment and surface refinement are both in the plan.',
    },
    faqs: [
      {
        question: 'How much does dermaplaning cost in San Diego?',
        answer:
          'A dermaplane facial is $199 at KIAMO Skin, and that price is for the whole appointment — cleanse, dermaplane, treat and protect — not a bare blade pass. The first visit is $249 with the consultation and skin analysis included. Every price is published on the site before a booking is made.',
      },
      {
        question: 'Is dermaplaning safe on dark skin?',
        answer:
          'Yes, when the blade angle and pressure are correct, and that is the entire technique. A blade pushed too hard abrades the skin, and abrasion is inflammation, and inflammation on melanin-rich skin is post-inflammatory hyperpigmentation. KIAMO Skin has treated Fitzpatrick types IV to VI for over seven years, works on a completely dry surface, and works around active or pustular acne rather than over it.',
      },
      {
        question: 'Does the hair grow back thicker after dermaplaning?',
        answer:
          'No. The blade removes hair at the surface and never touches the follicle, so the hair grows back at exactly the same texture and the same colour. Thicker or darker regrowth after dermaplaning is a myth that does not survive contact with the biology. At KIAMO Skin the expectation is set at the consultation so that nobody books the treatment expecting a permanent change.',
      },
      {
        question: 'Is there downtime after dermaplaning?',
        answer:
          'None, which is the reason so many San Diego clients book it before an event. The glow is immediate because the dead surface layer is gone and product reaches live tissue. KIAMO Skin closes the treatment with SPF, and the one thing worth adding is not scheduling it in the two or three days before sun exposure.',
      },
      {
        question: 'Can dermaplaning be combined with a chemical peel?',
        answer:
          'Yes, and it is a good combination — a cleared surface lets the acid work evenly instead of sitting on debris. KIAMO Skin often pairs dermaplaning with a LIRA peel where pigment and surface refinement are both in the plan. What cannot share an appointment is a peel with Procell microchanneling, because both work on the same surface and their recovery periods would overlap.',
      },
      {
        question: 'Is dermaplaning suitable if there is active acne?',
        answer:
          'It is skipped over active or pustular lesions rather than performed across them, because abrading an inflamed lesion spreads the inflammation. Where acne is the main concern, KIAMO Skin treats the phase the skin is actually in — congestion is cleared with a HydraFacial, a compromised barrier is rebuilt with DMK enzyme therapy, and the marks left behind are handled with peels or microchanneling. The consultation is what establishes which of those applies.',
      },
    ],
  },

  'scalp-therapy:san-diego': {
    service: 'scalp-therapy',
    area: 'san-diego',
    title: 'Scalp Treatment in San Diego, CA | KIAMO Skin',
    description:
      'Keravive scalp treatment in San Diego for flaking, buildup and hard water residue. $599, series of three $1,499. Take-home spray included.',
    h1: 'Scalp Treatments in San Diego, CA',
    opener:
      'The scalp treated as skin — cleansed, exfoliated and hydrated, with the buildup that shampoo cannot reach actually removed.',
    intro:
      'KIAMO Skin performs HydraFacial Keravive in Mission Hills: deep cleansing, exfoliation and hydration of the scalp, with a peptide complex supporting the environment hair grows in. Every treatment includes a take-home peptide spray, and the price covers the whole appointment.',
    quickAnswer:
      'Scalp treatment in San Diego at KIAMO Skin is Keravive scalp therapy — $599 a session or $1,499 for a series of three. Kiki, a California licensed esthetician with 7+ years of experience, deeply cleanses, exfoliates and hydrates the scalp and clears the buildup shampoo cannot reach, then applies a peptide complex and a take-home spray. San Diego water runs about 16 grains per gallon, so hard water mineral buildup is the rule here rather than the exception.',
    authority: {
      heading: 'Why KIAMO Skin treats the scalp as skin',
      body:
        'Most people invest heavily in facial skincare and have never treated their scalp, which is skin and behaves like it. The scalp is the one part of the head that takes direct UV through the part line, it collects salt from ocean water, and it is where the hard water in this city actually shows up — San Diego\'s supply runs around 16 grains per gallon, and those minerals bind with sebum and product into a film that shampoo cannot shift. The visible results are flaking, itching, tightness and shedding, and they are frequently mistaken for a hair problem when they are a scalp-surface problem. KIAMO Skin treats it with the same clinical logic used on the face: cleanse, exfoliate, hydrate, and then support the environment with a peptide complex between visits.',
    },
    uniqueness: {
      heading: 'What a Keravive scalp treatment at KIAMO Skin includes',
      body:
        'The appointment removes what shampoo cannot, and the take-home product extends what the appointment started:',
      bullets: [
        'Deep cleansing that lifts oil, dead skin, product buildup and mineral deposit',
        'Exfoliation of the scalp itself, not just the hair',
        'A concentrated peptide complex supporting the sebaceous glands and the environment hair grows in',
        'Hydration of the scalp skin, which is the part most routines skip entirely',
        'A take-home peptide spray to continue supporting the scalp between visits',
      ],
    },
    depth: {
      heading: 'What happens during a Keravive scalp treatment',
      body:
        'Three stages in the room and one that continues afterwards. KIAMO Skin includes the take-home spray in the price, because scalp work is cumulative and the between-visit period is where the result is actually built.',
      process: [
        {
          step: 'Cleanse',
          description:
            'Oil, dead skin, product buildup and mineral deposit are lifted from the scalp. This is where San Diego\'s hard water shows up — at roughly 16 grains per gallon, the supply leaves a mineral film that shampoo removes on the day and rebuilds by the next, so what is removed here is a layer that has been building for weeks rather than overnight.',
        },
        {
          step: 'Nourish',
          description:
            'A concentrated peptide complex is applied to nourish the scalp and support a healthier environment for hair growth. It works on the sebaceous glands and the scalp skin itself, which is why flaking, itching and tightness improve alongside the shedding that follows them.',
        },
        {
          step: 'Continue at home',
          description:
            'A take-home peptide spray extends the work between treatments, and it is included in the $599 rather than sold separately. KIAMO Skin recommends a series of three for scalp conditions because one treatment clears what has accumulated and the series is what re-establishes the environment — and the series total is $1,499.',
        },
      ],
    },
    intent: {
      heading: 'Who books scalp treatment in San Diego',
      body:
        'The clients booking scalp therapy in San Diego are usually dealing with flaking, itching or tightness that has been treated with a stronger shampoo for years without a change, with shedding alongside visible buildup or irritation, or with product buildup that is affecting how the hair sits. Coastal clients add daily salt exposure and inland clients add wind and UV. KIAMO Skin fits when the priority is that the buildup is actually removed rather than dissolved, and that the scalp is treated with the same clinical equipment as the face rather than as an accessory to it.',
    },
    faqs: [
      {
        question: 'How much does a scalp treatment cost in San Diego?',
        answer:
          'A Keravive scalp treatment is $599 at KIAMO Skin, and a series of three is $1,499 in total. The take-home peptide spray is included in the price rather than sold as an add-on. KIAMO Skin recommends a series for scalp conditions because one treatment clears what has accumulated while the series re-establishes the environment scalp hair grows in.',
      },
      {
        question: 'What causes scalp buildup in San Diego?',
        answer:
          'Mostly the water. San Diego\'s municipal supply runs about 16 grains per gallon — among the hardest in California — and those minerals bind with sebum and styling product into a film that shampoo cannot fully shift. Coastal clients add salt from ocean water, and everyone adds UV exposure along the part line. KIAMO Skin removes the buildup at the appointment rather than dissolving it, which is why the result lasts between visits instead of resetting with the next wash.',
      },
      {
        question: 'Will scalp therapy help with flaking and shedding?',
        answer:
          'Flaking, itching and tightness usually improve once the buildup and irritation are cleared, and shedding that is driven by a compromised scalp environment often settles with it. Hair-thinning that is medical rather than environmental is a different matter, and KIAMO Skin says so at the consultation and refers on where that is what is going on. The treatment supports the scalp environment; it does not treat a medical cause of hair loss.',
      },
      {
        question: 'How often should a scalp treatment be booked?',
        answer:
          'Monthly for maintenance, and a course of three where the buildup is significant or the flaking is established. KIAMO Skin sets the cadence at the consultation, and the take-home peptide spray included in every visit is what maintains the result between appointments.',
      },
      {
        question: 'Can a scalp treatment be combined with a facial?',
        answer:
          'Yes, and clients often book them together. A HydraFacial and a Keravive scalp treatment work on different surfaces and recover independently, so they share an appointment well. KIAMO Skin combines them where the plan calls for both, which is a common pairing for clients whose scalp and face are exposed to the same salt, hard water and UV.',
      },
      {
        question: 'Is scalp therapy suitable for sensitive or inflamed scalps?',
        answer:
          'It is generally the right first move, because the exfoliation and cleansing are what remove the irritant rather than adding to it. Where the scalp is actively inflamed, KIAMO Skin adjusts the protocol at the consultation, and any condition that needs medical attention is referred on rather than treated.',
      },
    ],
  },

  'dmk-enzyme-therapy:san-diego': {
    service: 'dmk-enzyme-therapy',
    area: 'san-diego',
    title: 'DMK Enzyme Therapy in San Diego, CA | KIAMO Skin',
    description:
      'DMK enzyme therapy in San Diego to rebuild a damaged skin barrier. Level 1 $279, deeper levels by consultation. Licensed esthetician.',
    h1: 'DMK Enzyme Therapy in San Diego, CA',
    opener:
      'Enzymatic resurfacing that rebuilds a compromised barrier rather than stripping a healthy one.',
    intro:
      'KIAMO Skin runs DMK Enzyme Therapy as a barrier treatment — Level 1 at $279, and Levels 2 and 3 prescribed only once Level 1 has prepared the skin. The protocol and the price for the deeper levels are set at the consultation.',
    quickAnswer:
      'DMK Enzyme Therapy in San Diego at KIAMO Skin is $279 for Level 1, with Levels 2 and 3 prescribed at consultation once Level 1 has prepared the skin. Kiki, a California licensed esthetician with 7+ years of experience, selects the protocol for the skin on the day rather than from a fixed menu. The treatment supports barrier function, circulation and lymphatic activity, and every Level 1 visit includes the personalised home routine that keeps the work going between appointments.',
    authority: {
      heading: 'Why KIAMO Skin starts DMK at Level 1',
      body:
        'DMK is a system, not a single treatment. Level 1 is where the barrier is rebuilt and skin function is restored; Levels 2 and 3 layer the enzymes for deeper correction, and they are only prescribed once Level 1 has done its work. Starting deeper on a barrier that has not held water yet is what produces the sensitised, over-exfoliated state people bring into an esthetician\'s room. KIAMO Skin runs Level 1 at $279 as the entry point for exactly that reason — a barrier that has been stripped by salt water, wind, hard water or an aggressive home routine needs function restored before anything else is layered on it.',
    },
    uniqueness: {
      heading: 'What the DMK protocol at KIAMO Skin includes',
      body:
        'The treatment and the home routine that follows it are one system, and KIAMO Skin prices and prescribes them together:',
      bullets: [
        'A protocol selected for the skin on the day, not a fixed sequence',
        'Level 1 at $279, with Levels 2 and 3 prescribed only once Level 1 has prepared the skin',
        'The enzyme masque, with its tightening and pulsing sensation explained before it starts',
        'A personalised home routine to support the work between visits — part of the treatment, not an extra',
        'One practitioner throughout, from assessment to the home-care plan',
      ],
    },
    depth: {
      heading: 'What happens during a DMK treatment at KIAMO Skin',
      body:
        'Three stages, and the third is the one that decides the result. A barrier rebuilds over months, so the home routine is written into the plan at the same appointment as the treatment.',
      process: [
        {
          step: 'Assess',
          description:
            'Every DMK treatment at KIAMO Skin is customised to what the skin needs that day — not a fixed protocol. The assessment establishes whether the barrier is compromised, how compromised it is, and what stripped it: salt water, wind, hard water, a strong at-home active, or an over-exfoliated routine. That answer is what sets the level.',
        },
        {
          step: 'The masque',
          description:
            'As the enzyme masque sets, a tightening and rhythmic pulsing sensation is felt. KIAMO Skin explains this before it begins, because it is an expected part of the treatment and it varies from person to person. The enzymes work with the skin\'s own processes to support barrier function, circulation and lymphatic activity rather than stripping the surface.',
        },
        {
          step: 'Home care',
          description:
            'DMK is designed as a complete system, and the personalised home routine is part of the treatment rather than a recommendation attached to it. KIAMO Skin prescribes it at the same appointment, and the barrier rebuilds over months of consistent use — which is what makes the monthly memberships a natural fit for this work.',
        },
      ],
    },
    intent: {
      heading: 'Who books DMK enzyme therapy in San Diego',
      body:
        'The clients booking DMK in San Diego are usually the ones whose skin has been over-treated — by actives, by exfoliation, by a strong product, or by years of sun. They arrive with skin that stings, reddens, feels tight, stays dehydrated despite moisturiser, or breaks out in ways that do not respond to spot treatment. KIAMO Skin fits when the priority is restoring function before adding anything else, and when the person treating the skin is the person who assessed it.',
    },
    faqs: [
      {
        question: 'How much does DMK enzyme therapy cost in San Diego?',
        answer:
          'Level 1 is $279 at KIAMO Skin. Levels 2 and 3 are priced at consultation, because they are prescribed only once Level 1 has prepared the skin, and the protocol is set from the assessment rather than from a fixed sequence. Every price is published on the site before a booking is made.',
      },
      {
        question: 'What is DMK enzyme therapy actually for?',
        answer:
          'For skin that has lost function — skin that stings, reddens, feels tight, stays dehydrated despite moisturiser, or reacts to products it used to tolerate. The enzymes work with the skin\'s own processes to support barrier function, circulation and lymphatic activity. At KIAMO Skin DMK is the treatment of record for a barrier stripped by salt water, wind, hard water or an aggressive at-home routine, because function has to come back before anything else is layered on it.',
      },
      {
        question: 'What does the enzyme masque feel like?',
        answer:
          'A tightening and rhythmic pulsing sensation as the masque sets. It is an expected part of the treatment and it varies from person to person. KIAMO Skin explains it before it begins rather than after, and the appointment is built around it — the treatment is not a passive hour on a bed.',
      },
      {
        question: 'How many DMK treatments are needed?',
        answer:
          'A barrier rebuilds over months rather than visits, so DMK is treatment that suits a standing monthly slot, and most clients at KIAMO Skin treat it that way. The monthly memberships start at $199 and a membership treatment can be applied to DMK by paying the difference. The exact number of sessions is set at the consultation and adjusted as the skin responds.',
      },
      {
        question: 'Does DMK work on acne-prone skin?',
        answer:
          'It is often the right first step, because a compromised barrier keeps breakouts active, and rebuilding it is what stops the cycle rather than treating each spot as it appears. KIAMO Skin treats the phase the skin is actually in — barrier work first, then congestion with a HydraFacial, then the marks left behind with peels or microchanneling. Where acne is severe or persistent, KIAMO Skin works alongside a dermatologist rather than replacing one.',
      },
      {
        question: 'Can DMK be combined with a HydraFacial?',
        answer:
          'They can be booked together where the plan calls for it, since they work on different aspects of the same skin and recover independently. What cannot share an appointment is a LIRA peel with Procell microchanneling, because both work on the surface and their recovery periods would overlap. KIAMO Skin decides what can safely share a visit at the consultation.',
      },
    ],
  },

  'acne-treatment:san-diego': {
    service: 'acne-treatment',
    area: 'san-diego',
    title: 'Acne Treatment in San Diego, CA | KIAMO Skin',
    description:
      'Acne treatment in San Diego from KIAMO Skin. HydraFacial for congestion, peels for dark marks, microchanneling for scarring. From $199.',
    h1: 'Acne Treatment in San Diego, CA',
    opener:
      'Three different problems treated with three different instruments — breakouts, congestion, and the marks and scarring they leave behind.',
    intro:
      'KIAMO Skin treats acne in phases, because acne is not one condition. HydraFacial clears congestion without the manual pressure that spreads inflammation, DMK enzyme therapy rebuilds a barrier that is keeping breakouts active, and peels or microchanneling work through the marks and scarring left behind.',
    quickAnswer:
      'Acne treatment in San Diego at KIAMO Skin starts with the phase the skin is actually in. Kiki, a California licensed esthetician with 7+ years of experience, uses HydraFacial at $259 to clear congestion without aggravating active breakouts, DMK enzyme therapy at $279 to rebuild a barrier that is keeping breakouts active, a LIRA chemical peel at $199 for post-acne dark marks, and Procell microchanneling at $475 for scarring. Every protocol is designed to clear acne without triggering the dark marks that outlast the breakout.',
    authority: {
      heading: 'Why KIAMO Skin treats acne in phases',
      body:
        'Acne is three problems wearing one name, and each needs a different instrument. Active inflammation and cystic lesions need something that clears without pressing; congestion — blackheads and whiteheads — responds to extraction; and the marks and scarring that follow need collagen work and pigment correction, not more cleansing. More than that, the ordering matters. A compromised barrier keeps breakouts active, so a skin that is stripped and inflamed is not ready for extraction or acid, and treating it as though it were is what produces the post-inflammatory hyperpigmentation that then outlasts the original breakout by a year or more. KIAMO Skin establishes the phase at the consultation, treats that phase, and moves on. Where acne is severe or persistent, the studio works alongside a dermatologist rather than replacing one.',
    },
    uniqueness: {
      heading: 'What KIAMO Skin does for each phase of acne',
      body:
        'The treatment is matched to the phase, and each phase has its own instrument and its own price:',
      bullets: [
        'Congestion and active breakouts — HydraFacial at $259, extracting without manual pressure',
        'A barrier that is keeping breakouts active — DMK enzyme therapy at $279',
        'Post-acne dark marks — a LIRA chemical peel at $199, applied to avoid triggering more pigment',
        'Atrophic scarring and texture — Procell microchanneling at $475, a series of three at $1,199',
        'A home routine and a schedule, set at the consultation and adjusted as the skin responds',
      ],
    },
    depth: {
      heading: 'How acne is treated at KIAMO Skin',
      body:
        'Four stages, and the plan moves through them in the order the skin allows. Acne is managed over time rather than cleared in one visit, and the schedule is set at the first appointment.',
      process: [
        {
          step: 'Assess and identify the phase',
          description:
            'Every acne treatment at KIAMO Skin starts by identifying which phase the skin is in — active inflammatory breakouts, congestion, or the post-acne marks and scarring — and which modality matches that phase. That assessment is also what establishes how much pigment risk the skin carries, which decides how hard the treatment can push.',
        },
        {
          step: 'Treat the root cause',
          description:
            'HydraFacial clears congestion and hydrates without aggravating active breakouts. DMK enzyme therapy strengthens a compromised barrier that is allowing bacteria to thrive. A LIRA chemical peel fades post-inflammatory hyperpigmentation, applied at a strength that does not create new marks. Each of these is a separate treatment because they work on different problems.',
        },
        {
          step: 'Address scarring',
          description:
            'Procell microchanneling stimulates collagen production for atrophic acne scars — the indented kind — and for the texture irregularities left by past breakouts. It is a series of three at $1,199, spaced four to six weeks apart. KIAMO Skin uses Procell rather than an RF device because thermal trauma is itself a pigment trigger on the skin tones that most often book for acne scarring.',
        },
        {
          step: 'Maintain and prevent',
          description:
            'Acne is managed over time, not cured in one visit. A consistent schedule prevents new breakouts while the existing congestion and marks are worked through, and the home routine is written to support that. KIAMO Skin schedules the whole course at the first appointment rather than booking visit by visit.',
        },
      ],
    },
    intent: {
      heading: 'Who books acne treatment in San Diego',
      body:
        'The clients booking acne treatment in San Diego are at one of three points: dealing with active hormonal acne and cystic lesions, struggling with congestion that nothing has cleared, or living with the marks and scarring that a previous breakout cycle left behind. KIAMO Skin fits when the priority is clearing acne without leaving the dark marks that outlast it, when the price is published before a booking, and when the same practitioner handles the consultation and every session of the course.',
    },
    faqs: [
      {
        question: 'How much does acne treatment cost in San Diego?',
        answer:
          'It depends on the phase, and KIAMO Skin prices each phase separately. A HydraFacial for congestion is $259, DMK enzyme therapy for barrier repair is $279, a LIRA chemical peel for post-acne dark marks is $199, and Procell microchanneling for scarring is $475 — with a three-session series at $1,199. The first visit is $249 with the consultation and skin analysis included.',
      },
      {
        question: 'Can facials make acne worse?',
        answer:
          'They can, and it is usually a matter of sequencing. A treatment that presses or abrades an inflamed area, or that applies acid to a barrier that is not ready, can spread inflammation and leave dark marks behind it — which is how a breakout cycle ends up lasting a year. At KIAMO Skin the phase is established first, and extraction and acid are only applied to skin that can take them that day.',
      },
      {
        question: 'How long does it take to clear acne?',
        answer:
          'It depends on the phase and on how long the skin has been dealing with it. Active congestion usually responds within a session or two; the marks that follow take longer, because pigment clears at the speed the skin renews. KIAMO Skin gives a realistic timeline at the consultation rather than a fixed promise, and sets the schedule — most commonly monthly, sometimes every four to six weeks — so the course fits around work and travel.',
      },
      {
        question: 'Will the dark marks left by acne go away?',
        answer:
          'Most of them do, and how long they take depends on the depth and on how much UV the skin takes in the meantime. Post-inflammatory hyperpigmentation fades as the skin renews, and a LIRA chemical peel at $199 accelerates it. The important variable is sun exposure — in San Diego the marks fade faster with daily SPF and slower without it, which is why KIAMO Skin writes the SPF guidance into the plan.',
      },
      {
        question: 'Can KIAMO Skin treat cystic acne?',
        answer:
          'Cystic and nodular acne is one of the phases KIAMO Skin treats, and it is the phase that most needs a dermatologist alongside esthetician work rather than instead of it. Where the condition is severe or persistent, the studio recommends working with a dermatologist in parallel, because the two roles treat it differently and both matter. The consultation is where that is determined and said plainly.',
      },
      {
        question: 'What treatment is best for acne scarring?',
        answer:
          'It depends on the kind of scar. Atrophic scarring — the indented kind from cysts or deep inflammatory breakouts — responds to collagen stimulation, and KIAMO Skin treats it with Procell microchanneling at $475, a series of three at $1,199. A facial alone will not change an indented scar. Where a scar is hypertrophic or a different kind entirely, the consultation is what establishes that, and KIAMO Skin says so rather than selling a treatment that cannot help.',
      },
    ],
  },

  'hyperpigmentation-treatment:san-diego': {
    service: 'hyperpigmentation-treatment',
    area: 'san-diego',
    title: 'Hyperpigmentation Treatment in San Diego, CA | KIAMO Skin',
    description:
      'Hyperpigmentation treatment in San Diego from KIAMO Skin. Peels, microchanneling and HydraFacial for dark marks, on every skin tone. Request a visit.',
    h1: 'Hyperpigmentation Treatment in San Diego, CA',
    opener:
      'Post-acne marks, sun-induced dark spots and uneven tone, treated with the instrument that matches the depth of the pigment.',
    intro:
      'KIAMO Skin treats hyperpigmentation by first identifying which of three things the mark is — post-acne, sun-induced, or hormonal — because each one responds to a different treatment. The plan is assembled from peels, microchanneling and HydraFacial, and priced at consultation.',
    quickAnswer:
      'Hyperpigmentation treatment in San Diego at KIAMO Skin starts by identifying which kind of dark mark is present — post-acne, sun-induced or hormonal — because each responds to a different treatment. Kiki, a California licensed esthetician with 7+ years of experience, assembles a plan from LIRA chemical peels, Procell microchanneling and a HydraFacial with a brightening booster, and treats every Fitzpatrick type from I to VI. The plan and its price are set at the consultation.',
    authority: {
      heading: 'Why KIAMO Skin identifies the mark before treating it',
      body:
        'Post-acne marks, sun-induced lentigines and melasma look alike in a photograph and respond to completely different treatment. Post-acne marks sit where a lesion was and clear as the skin renews. Sun-induced lentigines are the accumulated result of years of UV and need surface-level correction plus protection. Hormonal melasma is deeper, is driven by more than sun, and gets worse with heat and aggressive treatment. Treating the wrong one with the wrong instrument is what turns a correction into new damage — and in a city running the highest UV index in the continental United States, any inflammation from the treatment itself becomes more pigment. KIAMO Skin establishes which mark is present at the consultation, then chooses from LIRA chemical peels, Procell microchanneling, a HydraFacial with a brightening booster, DMK enzyme therapy and dermaplaning.',
    },
    uniqueness: {
      heading: 'How KIAMO Skin builds a pigmentation plan',
      body:
        'No single treatment clears hyperpigmentation, so the plan is assembled from several and sequenced:',
      bullets: [
        'The kind of mark identified first — post-acne, sun-induced or hormonal — because the treatment differs',
        'A LIRA chemical peel at $199 for the pigment itself, with strength raised only as the barrier allows',
        'Procell microchanneling at $475 where the mark is deeper or scarring is part of it',
        'A HydraFacial with a brightening booster between corrective sessions to hold the result',
        'SPF written into the plan, because in this UV load the correction fades without it',
      ],
    },
    depth: {
      heading: 'How hyperpigmentation is corrected at KIAMO Skin',
      body:
        'Three stages: identify what the mark is, correct it at the depth it sits, and hold the result. The last stage is the one most often skipped, and in San Diego it is the one that decides whether the correction lasts.',
      process: [
        {
          step: 'Identify which kind of mark it is',
          description:
            'Post-acne marks, sun-induced dark spots and melasma each respond to different treatment, and the difference is visible at the consultation. KIAMO Skin establishes which one is present before anything is applied, because the depth of the pigment and the depth of the required treatment depend on it — and because a treatment chosen for the wrong mark is what turns a correction into new damage.',
        },
        {
          step: 'Assess the condition of the skin',
          description:
            'The barrier condition is established alongside the mark, because pigment cannot be corrected on a barrier that is not holding. Where the barrier is compromised, KIAMO Skin treats that first with DMK enzyme therapy at $279 — otherwise the peel that follows does more harm than good. In a city with this UV load and this much hard water, that ordering is frequently the difference between a plan that works and one that stalls.',
        },
        {
          step: 'Correct, then hold it',
          description:
            'A LIRA chemical peel at $199 is the instrument for the pigment itself, with strength raised across the series only as the barrier allows; Procell microchanneling at $475 is used where the pigment is deeper or scarring is part of the picture; and a HydraFacial with a brightening booster sits between corrective sessions to hold the result. The plan is then held by daily SPF, which KIAMO Skin writes into the plan rather than mentioning at the end.',
        },
      ],
    },
    intent: {
      heading: 'Who books hyperpigmentation treatment in San Diego',
      body:
        'The clients booking hyperpigmentation treatment in San Diego are correcting marks that will not fade on their own: post-acne marks left behind by a previous breakout cycle, sun-induced lentigines from years of cumulative UV, or melasma driven by hormones and sun together. The city\'s UV load is the reason it is the most common concern KIAMO Skin is booked for. KIAMO Skin fits when the priority is that the mark is identified before it is treated, that the treatment is selected for the depth of the pigment, and that the tone is treated for evenness rather than lightened.',
    },
    faqs: [
      {
        question: 'How much does hyperpigmentation treatment cost in San Diego?',
        answer:
          'The plan is assembled from several treatments, so the price is set at the consultation — KIAMO Skin does not quote a single figure for a condition that needs more than one instrument. The components are published: a LIRA chemical peel at $199, Procell microchanneling at $475 or $1,199 for a series of three, a HydraFacial at $259, DMK enzyme therapy at $279, and dermaplaning at $199.',
      },
      {
        question: 'How do I tell the difference between acne marks, sun spots and melasma?',
        answer:
          'Post-acne marks appear exactly where a lesion was and are usually flat and slightly darker or redder; sun-induced lentigines are discrete, well-defined spots that cluster on chronically exposed skin; melasma is larger, patchier and symmetrical across the cheeks, nose and forehead, and it is hormonal as well as solar. KIAMO Skin establishes which one is present at the consultation, because the treatment for one can make another worse.',
      },
      {
        question: 'Can hyperpigmentation be treated on dark skin?',
        answer:
          'Yes, and it is where careful pacing matters most. Melanin-rich skin responds to trauma by producing more pigment, so an aggressive peel on an unready barrier can leave marks that were not there before. KIAMO Skin starts on the Gentle Renewal protocol, raises strength only as the barrier allows, and uses the Britenol brightening booster for dark marks and melasma on deeper tones — which works on alpha-arbutin and bearberry extract rather than hydroquinone, because hydroquinone can cause rebound pigmentation in those tones.',
      },
      {
        question: 'How long does it take to fade dark marks?',
        answer:
          'Post-acne marks fade as the skin renews, which is a matter of weeks to months depending on depth; sun-induced lentigines respond to a peel series over three to four sessions; melasma takes longer still and is held by daily SPF. KIAMO Skin gives a realistic timeline at the consultation and adjusts the plan as the skin responds, rather than promising a fixed number of sessions in advance.',
      },
      {
        question: 'Why does the SPF instruction matter so much?',
        answer:
          'Because in San Diego the correction is won and lost on sun exposure, not on the treatment. The city runs the highest UV index in the continental United States for much of the year, and pigment that is being corrected re-darkens with daily exposure. KIAMO Skin writes the SPF guidance into the plan at the consultation rather than mentioning it at the end, because a fade without sunscreen is the usual reason a series looks like it did nothing.',
      },
      {
        question: 'Does KIAMO Skin offer a consultation before the plan?',
        answer:
          'Yes, and for hyperpigmentation the consultation is not a formality — it is where the kind of mark is identified and where the plan is assembled from the treatments that will actually be used. At KIAMO Skin the first visit is $249 with the consultation, skin analysis and treatment included, and the plan and its price are set before the next appointment is booked.',
      },
    ],
  },

  'melasma-treatment:san-diego': {
    service: 'melasma-treatment',
    area: 'san-diego',
    title: 'Melasma Treatment in San Diego, CA | KIAMO Skin',
    description:
      'Melasma treatment in San Diego at KIAMO Skin. Peel series paced to the barrier, no heat. Corrective, not lightening. Request an appointment.',
    h1: 'Melasma Treatment in San Diego, CA',
    opener:
      'Melasma corrected with a paced peel series and held with daily SPF — never with heat, and never by lightening the skin.',
    intro:
      'KIAMO Skin treats melasma with LIRA chemical peels at $199, the strength raised only as the barrier allows, and a HydraFacial with a brightening booster between sessions. The aim is even tone on the skin\'s own terms, not a lighter skin.',
    quickAnswer:
      'Melasma treatment in San Diego at KIAMO Skin is a paced series of LIRA chemical peels at $199, with strength raised only as the barrier allows and a HydraFacial with a brightening booster between corrective sessions. Kiki, a California licensed esthetician with 7+ years of experience, treats melasma without heat, because heat is itself a pigment trigger, and works toward even tone rather than lightening. Most plans run three to four sessions, four to six weeks apart.',
    authority: {
      heading: 'Why KIAMO Skin treats melasma without heat and without lightening',
      body:
        'Melasma is hormonal as well as solar, and both drivers are still active after the treatment ends — which is why melasma recurs and why a "quick fix" approach fails. It is also the condition most likely to be made worse by the wrong treatment: heat and aggressive exfoliation are recognised triggers, and on melanin-rich skin they can deepen the very patches they were applied to correct. KIAMO Skin therefore approaches melasma in three ways at once — gentle acid peels at concentrations the barrier can hold, no thermal energy in any part of the protocol, and a home routine built around daily SPF. The objective is even tone on the skin\'s own terms. KIAMO Skin does not lighten skin, and the consultation says so plainly if that is what a client is actually asking for.',
    },
    uniqueness: {
      heading: 'How KIAMO Skin treats melasma',
      body:
        'The melasma plan at KIAMO Skin is deliberately conservative, because the fastest route to a deeper patch is the one that looks boldest:',
      bullets: [
        'A LIRA chemical peel at $199, starting gentle and raising strength only as the barrier allows',
        'No heat and no laser anywhere in the protocol, because thermal trauma is a melasma trigger',
        'A HydraFacial with a brightening booster between corrective sessions to hold the result',
        'Daily SPF written into the plan, which is what keeps the correction from recolding',
        'Even tone as the goal — KIAMO Skin does not lighten skin',
      ],
    },
    depth: {
      heading: 'What a melasma plan involves at KIAMO Skin',
      body:
        'Three stages, over three to four sessions, four to six weeks apart. Melasma is a chronic condition and the plan is written for that rather than as a one-off correction.',
      process: [
        {
          step: 'Identify the type and the depth',
          description:
            'Melasma is not one pattern. It presents as superficial epidermal pigment, deeper dermal pigment, or a mix, and the depth decides how much is reachable by surface treatment alone and how long the plan has to run. KIAMO Skin establishes that at the consultation, and it is also where the hormonal drivers — pregnancy, contraception, thyroid medication — are asked about, because those change how the plan is paced.',
        },
        {
          step: 'Pace the correction',
          description:
            'The plan starts with the LIRA Gentle Renewal Peel at $199, and strength is raised to the Advanced protocol only when the skin has demonstrated it can hold the concentration. Most San Diego clients see visible change across three to four sessions. Nothing in the protocol introduces heat, because heat is one of the recognised triggers for melasma and the fastest way to make a patch deeper is to treat it hard.',
        },
        {
          step: 'Hold the result with daily SPF',
          description:
            'This is the stage that decides whether the plan worked. Melasma has hormonal drivers that do not stop, so the correction has to be protected against daily UV — and San Diego runs the highest UV index in the continental United States for much of the year, which is why melasma is one of the most common concerns the studio is booked for. KIAMO Skin writes the SPF guidance into the plan at the consultation, together with the home routine, rather than mentioning it at the end.',
        },
      ],
    },
    intent: {
      heading: 'Who books melasma treatment in San Diego',
      body:
        'The clients booking melasma treatment in San Diego are mostly women in their twenties to forties with patches across the cheeks, nose and forehead that have spread or darkened over years. Many have already had peels elsewhere and watched the melasma return, or have been told to "just use SPF" without being told how that changes the treatment plan. KIAMO Skin fits when the priority is a protocol that will not trigger the condition, a plan that acknowledges the hormonal drivers rather than pretending they are not there, and an objective of even tone rather than a lighter skin.',
    },
    faqs: [
      {
        question: 'How much does melasma treatment cost in San Diego?',
        answer:
          'A LIRA chemical peel is $199 at KIAMO Skin, and the Gentle Renewal protocol is where most melasma plans start, moving to the Advanced Peel at $299 once the skin can hold the concentration. Most plans run three to four sessions, four to six weeks apart, with a HydraFacial at $259 between corrective sessions. The first visit is $249 with the consultation and skin analysis included.',
      },
      {
        question: 'Will melasma come back after treatment?',
        answer:
          'It can, because the hormonal drivers that produce it do not stop when the correction does — pregnancy, contraception and thyroid medication all factor in. That is why KIAMO Skin writes the daily SPF and the home routine into the plan at the consultation rather than mentioning them at the end, and why the plan is written for maintenance rather than as a one-off. The realistic goal is even tone that holds with protection, not a permanent cure.',
      },
      {
        question: 'Is it safe to treat melasma on dark skin?',
        answer:
          'It is, when the treatment carries no heat and the strength is paced. Heat and aggressive exfoliation are recognised melasma triggers, and on melanin-rich skin they can deepen the patches they were applied to correct. KIAMO Skin uses no thermal energy anywhere in the protocol, starts on the gentle protocol, and raises strength only as the barrier allows.',
      },
      {
        question: 'Should I use hydroquinone for melasma?',
        answer:
          'It is a prescription option and it is a dermatologist\'s call, not an esthetician\'s. What matters here is that hydroquinone can cause rebound pigmentation in deeper skin tones, and that rebound is difficult to clear. At KIAMO Skin the brightening booster used between peel sessions is Britenol, which works on alpha-arbutin and bearberry extract rather than hydroquinone — and any question about prescription topicals is referred on at the consultation.',
      },
      {
        question: 'How many peel sessions does melasma need?',
        answer:
          'Most San Diego clients see visible change across three to four sessions, four to six weeks apart, with six to eight for the full result. The number depends on the depth of the pigment, which is established at the consultation, and KIAMO Skin adjusts the plan as the skin responds rather than selling a fixed package up front.',
      },
      {
        question: 'Can melasma be treated while pregnant?',
        answer:
          'That is a question for the client\'s doctor, and KIAMO Skin asks about it at the consultation before anything is applied. The peel plan is set around the answer, and where the answer is that treatment should wait, KIAMO Skin says so and keeps the home-care plan in place instead. The consultation is where that is raised, not at the treatment.',
      },
    ],
  },

  'corrective-skin-treatments:san-diego': {
    service: 'corrective-skin-treatments',
    area: 'san-diego',
    title: 'Corrective Skin Treatments in San Diego, CA | KIAMO Skin',
    description:
      'Corrective skin treatments in San Diego from KIAMO Skin. Plans assembled from HydraFacial, peels, microchanneling and scalp therapy. Request a visit.',
    h1: 'Corrective Skin Treatments in San Diego, CA',
    opener:
      'One treatment rarely fixes one problem. The plan is assembled from the modalities that address the concern, and priced at consultation.',
    intro:
      'KIAMO Skin assembles corrective plans from six modalities — HydraFacial, DMK enzyme therapy, LIRA chemical peels, Procell microchanneling, dermaplaning and Keravive scalp therapy. The first visit is $249 and includes the consultation that decides which combination the skin needs.',
    quickAnswer:
      'Corrective skin treatments in San Diego at KIAMO Skin are plans assembled from the modalities the skin actually needs — HydraFacial at $259, DMK enzyme therapy at $279, LIRA chemical peels from $199, Procell microchanneling at $475, dermaplaning at $199 and Keravive scalp therapy at $599. Kiki, a California licensed esthetician with 7+ years of experience, assesses the concern and the barrier first, then sets the plan. The first visit is $249 with the consultation and skin analysis included.',
    authority: {
      heading: 'How KIAMO Skin assembles a corrective plan',
      body:
        'One treatment rarely fixes one problem, and the honest version of a corrective plan says which modalities are in it and why. A barrier that has stopped holding water needs function restored before anything is layered on it. Pigment needs correction at the depth it sits. Texture and scarring need collagen work. Congestion needs extraction. And several of these run in a sequence, not in parallel — peeling an unready barrier does more harm than good, which is why KIAMO Skin assesses the barrier before the concern. The plan names each treatment, the interval between them, and the total number of sessions, and it is set before the next appointment is booked rather than emerging visit by visit.',
    },
    uniqueness: {
      heading: 'What a corrective plan from KIAMO Skin contains',
      body:
        'The plan is specific, priced, and sequenced — six modalities are available to build it from:',
      bullets: [
        'HydraFacial at $259 for congestion, dehydration and maintenance between corrective sessions',
        'DMK enzyme therapy at $279 where the barrier is compromised',
        'LIRA chemical peels from $199 for pigment, with strength paced across a series',
        'Procell microchanneling at $475 for scarring and texture, no thermal energy',
        'Dermaplaning at $199 for surface refinement, and Keravive scalp therapy at $599 for the scalp',
      ],
    },
    depth: {
      heading: 'How a corrective plan is built and run',
      body:
        'Four stages, and the last one is the reason the plan works. A corrective plan is a sequence with intervals, not a list of treatments — and the intervals are what allow the skin to respond.',
      process: [
        {
          step: 'Identify the primary concern',
          description:
            'KIAMO Skin starts from what the client actually wants changed — pigment, scarring, congestion, barrier damage, scalp condition — and then checks whether that is the whole picture. Often it is not: a client booking for dark marks may have a barrier problem underneath that is part of why the marks keep returning. The primary concern is named first, and what is underneath it is named second.',
        },
        {
          step: 'Assess the current condition of the skin',
          description:
            'The barrier condition is established before the plan is written, because it determines what can safely be done and in what order. Where the barrier is compromised, KIAMO Skin treats that first. In San Diego that is frequently the deciding factor: hard water at 280–320 ppm, the highest UV index in the continental United States, and salt exposure for the clients who live or work on the water.',
        },
        {
          step: 'Select the treatment',
          description:
            'The modalities in the plan are chosen against the concern and the barrier, and each one is chosen for a reason rather than added for variety. KIAMO Skin then sets the intervals — most commonly four to six weeks for a corrective series, monthly for maintenance — and the number of sessions in advance. The plan is scheduled at the first appointment so the appointments sit around recovery rather than being booked one at a time.',
        },
        {
          step: 'Adjust as the skin changes',
          description:
            'The plan is reviewed as it runs and adjusted where the skin calls for it. A peel that needs to be gentler gets gentler; a booster that is not doing enough gets changed; an interval stretches when a client\'s calendar demands it. The full series is scheduled at the first appointment, and the price of each treatment in it is published before the first one is booked.',
        },
      ],
    },
    intent: {
      heading: 'Who books corrective skin treatments in San Diego',
      body:
        'The clients booking corrective treatment in San Diego have usually tried the single-treatment route and found it does not hold. They have had facials that made the barrier worse, peels that left marks, or a home routine that stopped working after a year. They are looking for a sequence rather than an appointment, and for the person doing the work to be the person who assessed it. KIAMO Skin fits when the priority is a plan with named treatments, named intervals and a published price, and where more than one modality is often involved.',
    },
    faqs: [
      {
        question: 'How much do corrective skin treatments cost in San Diego?',
        answer:
          'A corrective plan is assembled from several treatments, so the price is set at the consultation — KIAMO Skin does not quote a single figure for a plan that uses more than one modality. Every component is published: HydraFacial $259, DMK enzyme therapy $279, LIRA chemical peels from $199, Procell microchanneling $475 or $1,199 for a series of three, dermaplaning $199, Keravive scalp therapy $599. The first visit is $249 with the consultation, analysis and treatment included.',
      },
      {
        question: 'How do I know which corrective treatment I need?',
        answer:
          'That is what the first visit is for, and it is why the consultation comes before any treatment. The concern is named first — pigment, scarring, congestion, barrier damage, scalp condition — and then the barrier is assessed, because the barrier often explains the concern. KIAMO Skin then writes a plan with named treatments, named intervals and a session count, and it is set before the next appointment is booked.',
      },
      {
        question: 'How long does a corrective plan take?',
        answer:
          'Most plans run three to four sessions at four-to-six-week intervals, and longer for deeper pigment or established scarring. Skin does not change overnight, and a plan that claims otherwise is selling something. KIAMO Skin gives a realistic timeline at the consultation — including how much is visible at each stage — and adjusts the plan as the skin responds.',
      },
      {
        question: 'Can I do corrective treatments if I travel for work?',
        answer:
          'Yes, and the plan is built around the travel rather than against it. The full course is scheduled at the first appointment, which means the appointments sit around a calendar instead of being booked one at a time, and a membership treatment can be applied to a course by paying the difference. KIAMO Skin is at 3067 Reynard Way in Mission Hills with free parking on site, so there is no street parking or garage to factor into a tight schedule.',
      },
      {
        question: 'Does KIAMO Skin treat the scalp as well as the face?',
        answer:
          'Yes. Keravive scalp therapy at $599 is one of the six modalities KIAMO Skin builds plans from, and it is often paired with a facial in the same appointment because the scalp and face are frequently exposed to the same salt, hard water and UV. Where a client invests in facial skincare and has never treated the scalp, that gap is usually part of what is driving the concern.',
      },
      {
        question: 'What happens at the first visit?',
        answer:
          'A consultation, a skin analysis and the first treatment, for $249. The consultation names the primary concern, assesses the barrier, and produces a written plan with the modalities in it, the intervals and the session count. At KIAMO Skin the consultation is not a sales conversation — it is the part of the treatment that decides the rest of it, and it is included in the first visit price.',
      },
    ],
  },
};
