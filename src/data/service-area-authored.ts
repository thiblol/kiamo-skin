import type { ServiceAreaContent } from './service-area-types';

/**
 * The pairs whose service-specific copy had to be written rather than
 * composed.
 *
 * Two groups live here:
 *
 *   1. Twelve pairs with no service-correct source anywhere. These are new
 *      copy, written for the combination rather than adapted from one
 *      service or the other. A page that could be assembled by swapping the
 *      service name into another service's page has no reason to exist —
 *      which is the failure the four old geo clusters had.
 *
 *   2. The pairs that came from a long-form geo article. The article
 *      supplied the headline, the FAQs and the body; the structured blocks —
 *      authority, uniqueness, depth, intent — are written here so the page
 *      has the same shape as every other one.
 *
 * The area shell (geography, drive time, landmarks, the local concern) is
 * NOT repeated here. It lives in areas.ts and areas-enhanced.ts and is merged
 * in when the record is read, so a change to an area's geography is one edit.
 */
export const authored: Record<string, Partial<ServiceAreaContent>> = {
  // ---------------------------------------------------------------------
  // Group 2 — the geo-article pairs.
  // ---------------------------------------------------------------------

  'hydrafacial:la-jolla': {
    opener:
      'Medical-grade extraction and hydration for ocean-exposed skin, with a booster chosen for the barrier. Performed by Kiki, a California licensed esthetician.',
    authority: {
      heading: 'Why La Jolla clients book the HydraFacial Syndeo',
      body:
        'La Jolla has a genuine year-round ocean swimming culture — the Cove Swim Club has run since 1916 and a group swims every morning regardless of season. Windansea has a year-round surf community, La Jolla Shores draws swimmers and divers, and the blufftop above the Cove gets direct afternoon sun with no tree cover. That is a specific combination of exposure, and it is what the Syndeo is built for: enzymatic resurfacing that clears what salt and wind leave behind, vortex extraction calibrated to 30-70 mmHg rather than set to a fixed pressure, and AI skin analysis that reads hydration and congestion before anything is chosen. Kiki has 7+ years performing every session personally, and the protocols are selected for the skin tone in front of you.',
    },
    uniqueness: {
      heading: 'What a HydraFacial in La Jolla actually does',
      body:
        'Three clinical actions at once, calibrated by the device and by the practitioner:',
      bullets: [
        'Enzymatic resurfacing that lifts dead surface cells without abrasive scrubbing',
        'Vortex extraction at controlled suction, clearing the mineral deposits hard water leaves in the follicles',
        'Precision infusion of hydration and antioxidants while the pores remain receptive',
        'A booster selected from the AI reading — brightening where pigment is the concern, barrier support where dehydration is',
        'LED light therapy at every appointment, included rather than sold as an add-on',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes. The order matters: the surface is cleared before anything is driven in, so the booster arrives on receptive skin rather than on debris.',
      process: [
        {
          step: 'Cleanse & resurface',
          body:
            'A blend of gentle exfoliating acids lifts away dead skin cells — no scrubs, no harsh abrasion. On ocean-exposed skin this is where the salt residue and wind damage come off.',
        },
        {
          step: 'Extract & hydrate',
          body:
            'Gentle vortex extraction removes oil, debris, and mineral buildup before hydrating ingredients and antioxidants are infused into the skin.',
        },
        {
          step: 'Boost',
          body:
            'A customised booster is selected from the AI analysis — barrier support where the salt air has left the skin tight, brightening where pigment is the concern. LED light therapy follows, included in every appointment.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in La Jolla',
      body:
        'La Jolla clients book for the damage a life lived in and out of the water produces: skin that is tight after a swim, reactive to products it tolerated before, and carrying the congestion that salt and hard water leave behind. Many also book the HydraFacial as the maintenance layer between corrective sessions, because a cleared surface lets a peel work evenly rather than over debris. KIAMO Skin fits when the priority is a treatment selected for the skin on the day, published pricing, and one practitioner across the whole course.',
    },
  },

  'chemical-peel:la-mesa': {
    opener:
      'Professional peels selected for the skin tone in front of you, with the strength raised only as the barrier allows. Performed by Kiki, a California licensed esthetician.',
    authority: {
      heading: 'Why La Mesa clients book a peel that is paced, not fast',
      body:
        'La Mesa sits about ten miles from the coast, far enough to miss the marine layer that keeps the beach gray through May and June. Summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach, and the area falls inside the valley heat advisories the coast never gets. More clear days, year after year, is what builds the cumulative UV load behind the melasma and uneven tone this area books for. LIRA chemical peels answer that, because strength escalates across a series rather than in one visit — and daily SPF is what holds the result. Kiki has 7+ years treating pigmentation in melanin-rich skin, where an over-aggressive peel causes more damage than it repairs.',
    },
    uniqueness: {
      heading: 'What a chemical peel in La Mesa actually does',
      body:
        'A peel is a sequence, and each session depends on what the last one left behind:',
      bullets: [
        'A period of home prep first, so the skin is ready before any acid is applied',
        'The peel layered and timed to the skin\'s response on the day',
        'Strength escalated across the series, never inside a single visit',
        'Acids selected for the skin tone, not from a fixed menu',
        'Daily SPF as the part that holds the result — without it the pigment returns',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Three steps, and the first one happens at home. Most pigmentation plans begin with a period of preparation so the skin is ready before any acid is applied.',
      process: [
        {
          step: 'Patch and prep',
          body:
            'Most pigmentation plans begin with a period of home prep so the skin is ready before any acid is applied. This is the step that decides whether the series progresses or stalls.',
        },
        {
          step: 'Apply',
          body:
            'The peel is layered and timed to the skin\'s response on the day. Strength escalates across a series rather than in one visit.',
        },
        {
          step: 'Protect',
          body:
            'Daily SPF is what holds the result. Without it, pigmentation returns — and San Diego\'s overcast mornings are the usual reason people stop applying it.',
        },
      ],
    },
    intent: {
      heading: 'Who books a chemical peel in La Mesa',
      body:
        'La Mesa clients most often book for melasma and the uneven tone that inland UV produces, and for sun damage accumulated over years of clear-sky summers rather than one season. Many are mid-series on a corrective plan and book the next peel in the course; others start and need the whole sequence set out before the first appointment. KIAMO Skin fits when the priority is a peel selected for the skin tone, strength that escalates only as the barrier allows, published pricing, and one practitioner for the whole course.',
    },
  },

  'microneedling:north-park': {
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    authority: {
      heading: 'Why North Park clients choose depth control over a fixed setting',
      body:
        'North Park is three and a half miles from the studio with no freeway between them, and that proximity changes what a corrective plan can be. A microchanneling course runs three sessions spaced four to six weeks apart, and the people who complete it are almost always the ones for whom a visit costs ten minutes rather than an afternoon. On the treatment itself, Procell sets the depth of each pass region by region according to skin thickness and the concern being treated — which a fixed-depth device cannot do — and applies the growth factor serum directly into the channels in the same pass, so the repair is directed rather than left to chance. There is no RF heat anywhere in it, which matters on melanin-rich skin where heat is itself a pigment trigger.',
    },
    uniqueness: {
      heading: 'What microchanneling in North Park actually does',
      body:
        'Five stages, with depth control and the serum application being the two that distinguish this treatment:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier, or recent retinoid use may change the protocol',
        'Topical numbing for 20-30 minutes, so the pass itself is comfortable',
        'A grid pass with depth set region by region, according to skin thickness and the concern',
        'Stem cytokine serum applied directly into the open channels in the same pass',
        'LED light therapy and barrier protection at the end, both included in the appointment',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing, and the aftercare — and from ten minutes away, it is worth booking the slot knowing the full arc rather than only the treatment time.',
      process: [
        {
          step: 'Skin assessment and prep',
          body:
            'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied and left for 20-30 minutes.',
        },
        {
          step: 'Microchanneling pass',
          body:
            'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Treatment depth is set region by region rather than uniformly across the face.',
        },
        {
          step: 'Growth factor serum application',
          body:
            'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. The growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          body:
            'Red and near-infrared LED light therapy follows every session to reduce post-treatment inflammation and support the healing response. Included in every appointment, not an add-on.',
        },
        {
          step: 'Barrier protection and post-care',
          body:
            'A calming, occlusive barrier product is applied. Expect redness similar to a mild sunburn for 24-48 hours. SPF is non-negotiable afterwards — UV-sensitivity stays elevated for 7-10 days.',
        },
      ],
    },
    intent: {
      heading: 'Who books microchanneling in North Park',
      body:
        'North Park clients most often book for atrophic acne scarring — the indented kind left by cysts or deep inflammatory breakouts — and for texture and enlarged pores that no exfoliating product has moved. Others are mid-series, booking the second or third session of a three-treatment course, with the series scheduled in full at the first appointment. KIAMO Skin fits when the priority is depth control rather than a fixed setting, a treatment that will not create new marks while correcting the old ones, published pricing, and one practitioner for the whole course.',
    },
  },

  'dermaplaning:la-jolla': {
    opener:
      'Physical exfoliation that clears surface buildup, so everything layered after it works better. Performed by Kiki, a California licensed esthetician.',
    authority: {
      heading: 'Why La Jolla clients book dermaplaning — and what it will not do',
      body:
        'Dermaplaning uses a sterile surgical blade to remove dead surface cells and the fine vellus hair on top of them. Nothing is pulled from the follicle and nothing penetrates the skin. What changes is the surface: product reaches live tissue instead of sitting on debris, and makeup stops catching on texture. But it is surface work only, and the honest limit is as important as the benefit — it does not address pigmentation or scarring, because it never reaches the cellular layer where those live. For La Jolla clients whose concern is sun damage rather than texture, a Lira peel is the right instrument and dermaplaning is the one that makes it work evenly. Kiki has 7+ years performing this on melanin-rich skin, where correct blade angle and pressure are what prevent post-inflammatory hyperpigmentation.',
    },
    uniqueness: {
      heading: 'What dermaplaning in La Jolla actually does',
      body:
        'Three steps, and the constraint on the middle one is deliberate:',
      bullets: [
        'The skin is cleansed and taken completely dry — residual moisture changes how the blade sits',
        'The blade is held at a fixed angle and drawn in short, controlled strokes, section by section',
        'Active or pustular acne is worked around rather than over',
        'Serums applied while absorption is at its highest, and the treatment closes with SPF',
        'Vellus hair returns exactly as it was — it cannot grow back thicker, because the blade does not touch the follicle',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes, with no downtime afterwards — which is why La Jolla clients book dermaplaning for events and before important occasions.',
      process: [
        {
          step: 'Cleanse and dry',
          body:
            'The skin is cleansed and taken completely dry. Dermaplaning is performed on a dry surface — any residual moisture changes how the blade sits.',
        },
        {
          step: 'The pass',
          body:
            'The blade is held at a fixed angle and drawn across the skin in short, controlled strokes, section by section. Active or pustular acne is worked around rather than over.',
        },
        {
          step: 'Treat and protect',
          body:
            'With the surface barrier of dead cells removed, serums are applied while absorption is at its highest, and the treatment closes with SPF.',
        },
      ],
    },
    intent: {
      heading: 'Who books dermaplaning in La Jolla',
      body:
        'La Jolla clients most often book dermaplaning for texture and for makeup that clings to fine facial hair — and for events, because there is zero downtime and the glow is immediate. Others book it as the surface step that makes a peel work evenly, or as maintenance between corrective sessions. KIAMO Skin fits when the priority is a treatment that says plainly what it does and does not do: it refines the surface and prepares it for what comes next, and it is not the answer for melasma or scarring. Published pricing, one practitioner, no downtime.',
    },
  },

  // ---------------------------------------------------------------------
  // Group 1 — the twelve pairs with no service-correct source.
  // ---------------------------------------------------------------------

  'facial:chula-vista': {
    title: 'Facial in Chula Vista, San Diego | KIAMO Skin',
    description:
      'Facials for Chula Vista clients at KIAMO Skin in San Diego. Melasma and pigmentation care for melanin-rich skin. From $199.',
    h1: 'Facial in Chula Vista — Corrective Care for Melanin-Rich Skin',
    opener:
      'A facial that treats the melasma and uneven tone Chula Vista clients come in with, not a refresh that flattens the problem. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Chula Vista is the largest melanin-rich catchment in San Diego County, and it is also inland — far enough from the marine layer that the sun is doing more work here than it does on the coast. That combination is what produces the county\'s most common pigmentation concern: melasma driven by hormones and sustained by UV, on skin that marks easily when a treatment is wrong. KIAMO Skin was built around exactly this. Kiki has 7+ years treating pigmentation in Black and brown skin, where an over-aggressive peel causes more damage than it repairs, and the protocols here are selected for the tone in front of you rather than chosen from a menu. The studio is about thirteen miles north — twenty to twenty-five minutes off-peak — with free parking on site. For a plan that runs across a series, that distance is part of the decision, and it is worth booking the course before the first appointment rather than testing whether the drive is workable.',
    quickAnswer:
      'KIAMO Skin treats melasma and pigmentation for Chula Vista clients at a one-room facial spa in San Diego, about thirteen miles north off-peak. Kiki, a California licensed esthetician with 7+ years in melanin-rich skin, uses LIRA chemical peels, HydraFacial, and DMK enzyme therapy for clients from Eastlake, Otay Ranch, and Rancho del Rey. Peels start at $199, and a first-time consultation and treatment is $249. Every plan is paced to the skin tone and the barrier, because strength escalated too fast is what causes the dark marks clients are trying to clear.',
    authority: {
      heading: 'Why Chula Vista clients choose a studio that specialises in melanin-rich skin',
      body:
        'The question a Chula Vista client is really asking is not "where do I get a facial" but "who understands what my skin does when I am treated". Melanin-rich skin responds to trauma by producing more pigment, so a treatment that is unremarkable on lighter skin can leave more dark marks than it cleared. Kiki\'s seven-plus years have been spent on precisely those cases — Chula Vista is where that experience was built. The single-practitioner model matters here: the same esthetician who assessed the pigmentation at the first visit performs every session in the series and adjusts the strength based on how the skin responded last time. There is no handoff to a junior provider halfway through a peel course.',
    },
    uniqueness: {
      heading: 'What a Chula Vista facial at KIAMO Skin looks like in practice',
      body:
        'The consultation is where the plan is set, and it is not a formality. For a client coming from Eastlake or Otay Ranch with melasma, the assessment establishes whether the pigment is hormonal, inflammatory, or sun-driven, because each is treated differently and choosing wrong is the most common reason a plan fails:',
      bullets: [
        'Pacing set by the barrier, not by a fixed protocol — strength escalates only as the skin tolerates it',
        'Peel strength selected for Fitzpatrick type, so a plan for Type IV–VI skin is not a Type I protocol',
        'Daily SPF with iron oxides built into the plan, because visible light is a trigger most people do not know about',
        'The full series mapped and scheduled at the first appointment, so the thirteen-mile drive is planned around',
        'Prices published before booking — nothing is quoted at the door',
      ],
    },
    depth: {
      heading: 'How a facial works for Chula Vista skin',
      body:
        'Every facial follows the same three-step structure, with the modality selected to match the skin on the day. For Chula Vista clients the assessment is where the inland UV load and the pigment depth are read together, because the two determine whether a peel, an enzyme treatment, or a HydraFacial is the right first move.',
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates skin tone (Fitzpatrick I-VI), the pattern and depth of the pigment, and the current condition of the barrier. For Chula Vista clients the assessment accounts for cumulative inland UV and for any active inflammation, because inflammation still producing pigment has to be addressed before fading what is already there.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions run 45-75 minutes depending on modality. LIRA chemical peels use Fitzpatrick-calibrated acid concentrations with strength escalated across a series. HydraFacial Syndeo pairs Vortex-Fusion extraction with a brightening booster for the maintenance layer. DMK enzyme therapy rebuilds barrier function when the skin is too compromised for a peel. No modality is selected without checking it is safe for your skin tone.',
        },
        {
          step: 'Homecare',
          description:
            'Homecare is where the result is actually held. Kiki prescribes a daily regimen — ceramide-rich moisturisers for barrier repair, tyrosinase inhibitors where pigmentation is the concern, and broad-spectrum SPF 50+ with iron oxides, because visible light is a trigger that UV-only sunscreens do not block. Daily compliance determines most of the long-term result.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Chula Vista',
      body:
        'Chula Vista clients book for the concerns the inland climate produces: melasma that has spread across the cheeks and upper lip, uneven tone that no over-the-counter product has moved, and the sense that a treatment which cleared one patch has darkened another. Many also book simply to have the barrier assessed — a reactive, stinging skin that has been stripped by a strong product is a different problem from dull skin, and it needs a different treatment. KIAMO Skin fits when the priority is one practitioner who knows the skin over time, protocols calibrated to every skin tone, and a plan that is paced rather than aggressive. For a client twenty-five minutes north, that is the difference between completing a course and abandoning it halfway.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Chula Vista?',
        answer:
          'About thirteen miles, twenty to twenty-five minutes north off-peak via I-5, with free parking on site at the studio. Off-peak times are notably lighter than the evening commute, which matters for a client booking a series.',
      },
      {
        question: 'What is the best facial for melasma on melanin-rich skin?',
        answer:
          'A facial that treats pigment rather than exfoliating it. LIRA chemical peels are the backbone of a melasma plan because strength escalates across a series and the peel is selected for the skin tone. HydraFacial with a brightening booster holds the result between corrective sessions, and DMK enzyme therapy comes first when the barrier is too compromised for a peel. A first-time consultation and treatment is $249.',
      },
      {
        question: 'Will a facial make my melasma worse?',
        answer:
          'Not if the treatment is selected for your skin tone and the barrier is assessed first. Melanin-rich skin produces more pigment in response to trauma, and that is exactly why strength is escalated only as the barrier allows, and why nothing is scheduled closer together than the skin can recover from. The KIAMO Skin protocols for melanin-rich skin were built around avoiding the trigger that causes post-inflammatory hyperpigmentation in the first place.',
      },
      {
        question: 'How often should I come in from Chula Vista?',
        answer:
          'Pigment is treated as a series — most plans run every four to six weeks — and the calendar is set at the first appointment so the schedule works around recovery rather than around convenience. A monthly membership at $199 is often the practical way to keep a course consistent, and it applies toward peels and microchanneling by paying the difference.',
      },
      {
        question: 'Do you treat skin types beyond what Chula Vista clients usually have?',
        answer:
          'Yes. Every treatment is calibrated to Fitzpatrick type I through VI, and Kiki has 7+ years treating the full spectrum. The protocols are not written for one population and adjusted for another — the pigment treatment on deeper skin is a different protocol, not the same one with a different booster.',
      },
    ],
  },

  'facial:la-mesa': {
    title: 'Facial in La Mesa, San Diego | KIAMO Skin',
    description:
      'Facials for La Mesa clients at KIAMO Skin in San Diego. Cumulative sun damage and melasma treatment. Lira peels from $199. Request an appointment.',
    h1: 'Facial in La Mesa — Correcting Cumulative Inland Sun Damage',
    opener:
      'A facial that treats the sun damage La Mesa accumulates away from the marine layer, not a refresh that hides it for a day. Performed by Kiki, a California licensed esthetician.',
    intro:
      'La Mesa sits about ten miles from the coast, which is far enough to miss the marine layer that keeps the beach gray through May and June. Summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach, and La Mesa falls inside the valley heat advisories the coast never gets. More clear days, year after year, is what builds the cumulative UV load behind the melasma and uneven tone this area books for. LIRA chemical peels answer that, because strength escalates across a series rather than in one visit — and daily SPF is what holds the result. The studio is about eleven miles west on I-8, fifteen to twenty minutes off-peak, with free parking on site. For a plan that runs across six or eight weeks, that drive is part of the decision, and it is worth booking the course before the first appointment rather than finding out halfway whether the schedule is workable.',
    quickAnswer:
      'KIAMO Skin treats cumulative sun damage and melasma for La Mesa clients at a one-room facial spa in San Diego, about eleven miles west on I-8. Kiki, a California licensed esthetician with 7+ years in corrective skin, uses LIRA chemical peels, HydraFacial, and DMK enzyme therapy for clients from La Mesa Village, Grossmont, and Spring Valley. Peels start at $199 and a HydraFacial is $259. La Mesa is inland enough to miss the marine layer, so the UV load that drives melasma here is higher than on the coast — which is why the plan is paced across a series rather than escalated in one visit.',
    authority: {
      heading: 'Why La Mesa clients book a corrective facial rather than a routine one',
      body:
        'Inland UV is cumulative in a way coastal UV is not, and the damage it leaves is slow to appear and slower to fade. La Mesa clients usually arrive after years of clear-sky summers, and often after a course of over-the-counter products that could not reach pigment sitting below the surface. Kiki has 7+ years treating exactly that — melasma, sun damage, and the uneven tone that follows — in skin tones where an over-aggressive treatment causes more damage than it repairs. The single-practitioner model means the esthetician who assessed the depth of the pigment at the first visit performs every session and adjusts the strength based on how the skin responded last time.',
    },
    uniqueness: {
      heading: 'What a La Mesa facial at KIAMO Skin looks like in practice',
      body:
        'The assessment is what makes the difference here, because cumulative sun damage and melasma need different instruments and are often mistaken for each other. For a La Mesa client the consultation establishes which one it is, and how deep it sits:',
      bullets: [
        'Depth established before anything is applied — surface pigment and pigment in the mid-layers respond differently',
        'LIRA peel strength selected for the skin tone, escalated only as the barrier allows',
        'A brightening booster for the maintenance layer between corrective sessions',
        'Mineral SPF with iron oxides prescribed daily, because visible light is a trigger UV-only sunscreen does not block',
        'The full series mapped at the first appointment, so the eleven-mile drive is planned around',
      ],
    },
    depth: {
      heading: 'How a facial works for La Mesa skin',
      body:
        'Every facial follows the same three-step structure, with the modality selected to match the skin on the day. For La Mesa clients the assessment is where the inland UV history and the pigment depth are read together — that reading is what decides whether a peel, an enzyme treatment, or a HydraFacial is the right first move.',
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates skin tone (Fitzpatrick I-VI), the primary concern, and the condition of the barrier. For La Mesa clients the assessment accounts for cumulative inland UV and for any active inflammation, because inflammation still producing pigment has to be addressed before fading what is already there.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions run 45-75 minutes depending on modality. LIRA chemical peels use Fitzpatrick-calibrated acid concentrations with strength escalated across a series. HydraFacial Syndeo pairs Vortex-Fusion extraction with a brightening booster. DMK enzyme therapy rebuilds barrier function when the skin is too compromised for a peel. No modality is selected without checking it is safe for your skin tone.',
        },
        {
          step: 'Homecare',
          description:
            'Homecare is where the result is held, and for La Mesa it is the part that matters most — the same UV that built the damage is still arriving every clear afternoon. Kiki prescribes a daily regimen — ceramide-rich moisturisers, tyrosinase inhibitors where pigmentation is the concern, and broad-spectrum SPF 50+ with iron oxides. Daily compliance determines most of the long-term result.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in La Mesa',
      body:
        'La Mesa clients most often book for the melasma and uneven tone that inland UV produces, for sun damage accumulated over years rather than one summer, and for a barrier that has been sensitised by products too strong for the climate it is being used in. Others book for maintenance — a HydraFacial every four weeks against the cumulative load, which is a different and less demanding commitment than a corrective course. KIAMO Skin fits when the priority is one practitioner who knows the skin over time, protocols calibrated to every Fitzpatrick type, and a plan paced rather than aggressive. For a client twenty minutes west, that is the difference between finishing a course and stopping halfway.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from La Mesa?',
        answer:
          'About eleven miles, fifteen to twenty minutes west on I-8 off-peak, with free parking on site at the studio. The drive runs through Mission Valley, so the evening commute is the slow part — morning and midday appointments are noticeably quicker.',
      },
      {
        question: 'Why is melasma harder to treat in La Mesa than on the coast?',
        answer:
          'Because the primary trigger never stops. La Mesa misses the marine layer that buffers the coast, so the UV load is higher and the clear days are more frequent. That is why strict daily sunscreen compliance — not just in summer — is the part of the plan that decides whether pigment stays faded or comes back.',
      },
      {
        question: 'What is the best facial for cumulative sun damage?',
        answer:
          'LIRA chemical peels, because the damage sits deeper than a surface treatment reaches and strength escalates across a series rather than in one visit. A HydraFacial with a brightening booster holds the result between corrective sessions. A first-time consultation and treatment is $249, and a peel starts at $199.',
      },
      {
        question: 'Can I come in from La Mesa for maintenance rather than a corrective course?',
        answer:
          'Yes, and for a client twenty minutes west it is often the more sustainable commitment. The HydraFacial at $259 is the maintenance treatment, and the monthly membership at $199 includes one facial per month plus discounts on additional treatments — which for a client on a peel series is usually the cheaper way to stay consistent.',
      },
      {
        question: 'Do you treat all skin tones at this studio?',
        answer:
          'Yes — Fitzpatrick I through VI. Kiki has 7+ years treating the full spectrum, and the pigment protocols are written for melanin-rich skin rather than adjusted for it. The peel protocols in particular are not the same on deeper skin, and that is the case KIAMO Skin was built around.',
      },
    ],
  },

  'hydrafacial:la-mesa': {
    title: 'HydraFacial in La Mesa, San Diego | KIAMO Skin',
    description:
      'HydraFacial in La Mesa from KIAMO Skin. Medical-grade extraction with a brightening booster for inland sun damage. $259.',
    h1: 'HydraFacial in La Mesa — Deep Extraction for Inland Sun Exposure',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with a booster chosen for the skin. Performed by Kiki, a California licensed esthetician.',
    intro:
      'La Mesa\'s climate is the reason a HydraFacial works differently there. The village sits about ten miles inland, beyond the marine layer that keeps the coast gray through May and June, so the summer UV load is heavier and the air is drier than it is at the beach. Both matter to a HydraFacial: drier air means more dehydrated surface skin, and heavier UV means more congestion in the pores and more pigment sitting in the layer the booster is chosen to address. The Syndeo\'s AI skin analysis reads hydration and pigmentation directly, so the booster and the suction are calibrated to what the skin is doing on the day rather than to a fixed protocol. The studio is about eleven miles west on I-8, fifteen to twenty minutes off-peak, with free parking on site — close enough that a monthly maintenance facial is a realistic habit rather than an event.',
    quickAnswer:
      'A HydraFacial in La Mesa from KIAMO Skin runs on the Syndeo device — medical-grade extraction with a booster selected for the skin on the day. Kiki, a California licensed esthetician with 7+ years of experience, performs every session. La Mesa clients are about eleven miles west, fifteen to twenty minutes off-peak, and free parking is on site. $259 per session, or $249 for a first-time client including the consultation that sets the plan. The Syndeo\'s AI analysis reads the dehydration and congestion that inland climate produces, which is what determines the booster.',
    authority: {
      heading: 'Why La Mesa clients choose the Syndeo over a standard facial',
      body:
        'A HydraFacial is a resurfacing and maintenance treatment, not a corrective one — and KIAMO Skin says so plainly rather than selling it as more than it is. What makes the Syndeo worth the drive from La Mesa is the instrumentation: AI-powered skin impedance analysis reads hydration and pigmentation in real time, and the enhanced vortex extraction is calibrated to 30-70 mmHg rather than a fixed setting. For a client in a drier, higher-UV microclimate than the coast, that reading is the difference between a booster chosen for the skin and a booster chosen for the average. Kiki performs every session personally, and there is no rotating roster to explain the difference between visits.',
    },
    uniqueness: {
      heading: 'What a HydraFacial in La Mesa actually does',
      body:
        'Three clinical actions at once, calibrated by the device and by the practitioner:',
      bullets: [
        'Enzymatic resurfacing that lifts dead surface cells without abrasive scrubbing',
        'Vortex extraction at controlled suction, which also clears the hard-water mineral deposits La Mesa clients carry',
        'Precision infusion of hydration and antioxidants while the pores remain receptive',
        'A booster selected from the AI reading — brightening where pigment is the concern, barrier support where dehydration is',
        'LED light therapy at every appointment, included rather than sold as an add-on',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes. The order matters: the surface is cleared before anything is driven in, so the booster arrives on receptive skin rather than on debris.',
      process: [
        {
          step: 'Cleanse & resurface',
          body:
            'A blend of gentle exfoliating acids lifts away dead skin cells — no scrubs, no harsh abrasion. On La Mesa skin this is where the dry surface layer from an inland climate comes off.',
        },
        {
          step: 'Extract & hydrate',
          body:
            'Gentle vortex extraction removes oil and debris before hydrating ingredients and antioxidants are infused into the skin. The suction is calibrated to the skin rather than set to a fixed pressure.',
        },
        {
          step: 'Boost',
          body:
            'A customised booster is selected from the AI analysis — brightening where pigment is the concern, barrier support where dehydration is. LED light therapy follows, and it is included in every appointment.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in La Mesa',
      body:
        'Most La Mesa clients book a HydraFacial as maintenance against the cumulative UV load, or as the first step in a corrective plan that includes peels or microchanneling. The natural fit is the client whose skin is dehydrated and congested rather than deeply pigmented — someone whose concern is texture, congestion, and a dullness that no home product has moved. For those who do have melasma or sun damage, a HydraFacial is the maintenance layer between corrective sessions rather than the treatment itself, and it pairs with a peel series or a monthly membership. KIAMO Skin fits when the priority is published pricing, one practitioner, and a device that reads the skin rather than assuming.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from La Mesa?',
        answer:
          'About eleven miles, fifteen to twenty minutes west on I-8 off-peak, with free parking on site. Morning and midday appointments avoid the Mission Valley commute entirely, which is what makes a regular schedule workable from La Mesa.',
      },
      {
        question: 'What does a HydraFacial cost in San Diego?',
        answer:
          '$259 per session. A first-time client treatment is $249 including the consultation, skin analysis, and the plan for what comes next. The monthly facial membership is $199 a month and includes one HydraFacial monthly plus discounts on additional treatments.',
      },
      {
        question: 'Is a HydraFacial enough for melasma or sun damage?',
        answer:
          'No — it is a resurfacing and maintenance treatment, and saying otherwise would be selling something it is not. For melasma and sun damage the correction is done with LIRA chemical peels or Procell microchanneling, and the HydraFacial is the layer that holds the result between sessions. For dehydration, congestion, and general texture, it is the right treatment on its own.',
      },
      {
        question: 'Can I combine a HydraFacial with a peel?',
        answer:
          'Frequently, and often for good reason — a HydraFacial between peel appointments clears the surface so the acid works evenly rather than over debris. What can safely be combined and when is decided at consultation, because the sequence depends on how the barrier responds.',
      },
      {
        question: 'Is a HydraFacial safe for melanin-rich skin?',
        answer:
          'Yes, because it uses no heat, no lasers, and no aggressive peeling agents. The exfoliating acids are at concentrations proven safe for melanin-rich skin, and the vortex extraction does not cause the trauma that can trigger post-inflammatory hyperpigmentation. The booster is selected for the skin tone in front of you.',
      },
    ],
  },

  'hydrafacial:carlsbad': {
    title: 'HydraFacial in Carlsbad, San Diego | KIAMO Skin',
    description:
      'HydraFacial in Carlsbad from KIAMO Skin in San Diego. Medical-grade extraction for north county skin. $259. Request an appointment.',
    h1: 'HydraFacial in Carlsbad — North County Skin, Treated Properly',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with a booster chosen for your skin. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Carlsbad is a north county catchment with its own weather, and the difference shows in the skin. The fog that sits over the coast most mornings clears further north, and the inland edge of the county runs drier and brighter through the middle of the day — so the UV exposure is intermittent rather than constant, and the dehydration it produces is the kind that arrives on a plane rather than a drive. The Vortex-Fusion extraction handles the mineral side of that: Carlsbad water is hard, and those deposits sit in the follicles where they cause congestion. The AI skin analysis reads the rest. The studio is thirty to thirty-five miles south, about thirty-five to forty minutes off-peak, with free parking on site — a real drive, which is why a HydraFacial here is most often booked as a monthly maintenance slot rather than a spontaneous one.',
    quickAnswer:
      'A HydraFacial in Carlsbad at KIAMO Skin is performed on the Syndeo device by Kiki, a California licensed esthetician with 7+ years of experience — medical-grade extraction, a booster selected from the AI skin analysis, and LED light therapy, $259 per session or $249 for a first-time client including the consultation. Carlsbad clients are about thirty-five minutes south off-peak with free parking on site. The drive is real, so the treatment is usually booked as a monthly maintenance slot rather than a one-off.',
    authority: {
      heading: 'Why a Carlsbad client books the Syndeo rather than a standard facial',
      body:
        'The Syndeo reads the skin instead of assuming what it will find. Its AI impedance analysis measures hydration and pigmentation directly, and the vortex extraction runs at calibrated suction rather than a fixed setting — which matters in north county, where hard water leaves mineral deposits in the follicles and a fixed-pressure extraction either fails to clear them or strips the skin trying. Kiki performs every session personally, so the second visit is informed by the first. For a client making a thirty-five minute drive, the question worth asking is not whether the treatment is good but whether it is worth that drive — and the answer here is that the AI reading means the booster is chosen for the skin rather than for a protocol.',
    },
    uniqueness: {
      heading: 'What a HydraFacial in Carlsbad actually does',
      body:
        'Three clinical actions at once, calibrated by the device and by the practitioner:',
      bullets: [
        'Enzymatic resurfacing that lifts dead surface cells without abrasive scrubbing',
        'Vortex extraction at controlled suction, clearing the mineral deposits hard north county water leaves behind',
        'Precision infusion of hydration and antioxidants while the pores remain receptive',
        'A booster selected from the AI reading rather than from a fixed menu',
        'LED light therapy at every appointment, included rather than sold as an add-on',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes. The order matters: the surface is cleared before anything is driven in, so the booster arrives on receptive skin rather than on debris.',
      process: [
        {
          step: 'Cleanse & resurface',
          body:
            'A blend of gentle exfoliating acids lifts away dead skin cells — no scrubs, no harsh abrasion.',
        },
        {
          step: 'Extract & hydrate',
          body:
            'Gentle vortex extraction removes oil, debris, and mineral buildup before hydrating ingredients and antioxidants are infused into the skin.',
        },
        {
          step: 'Boost',
          body:
            'A customised booster is selected from the AI analysis — brightening where pigment is the concern, barrier support where dehydration is. LED light therapy follows, included in every appointment.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in Carlsbad',
      body:
        'Carlsbad clients most often book a HydraFacial for congestion and dehydration rather than for pigment — the mineral-heavy water and the bright inland afternoons combine into skin that feels rough and looks dull regardless of what is applied to it. Others book it as the maintenance layer in a corrective course, because a corrective plan in north county means a treatment every four to six weeks and the HydraFacial is what makes the schedule survivable. KIAMO Skin fits when the priority is published pricing, one practitioner for the whole course, and a device that reads the skin rather than assuming what it will find. Thirty-five minutes is a real commitment, and the clients who make it are the ones who want the treatment chosen rather than applied.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Carlsbad?',
        answer:
          'About thirty to thirty-five miles, thirty-five to forty minutes south off-peak on I-5, with free parking on site. It is a genuine drive, and it is why a monthly slot is the way most Carlsbad clients use it.',
      },
      {
        question: 'What does a HydraFacial cost in San Diego?',
        answer:
          '$259 per session. A first-time client treatment is $249 including the consultation, skin analysis, and the plan for what comes next. The monthly facial membership is $199 a month and includes one HydraFacial monthly plus discounts on additional treatments.',
      },
      {
        question: 'Is a HydraFacial worth the drive from Carlsbad?',
        answer:
          'It depends what you are booking it for. For congestion, dehydration, and texture it is the right treatment and nothing else in the market does the same thing. For melasma or scarring it is the maintenance layer, not the correction — a peel series or Procell microchanneling does that work, and the HydraFacial holds the result between sessions.',
      },
      {
        question: 'How often should I come in from Carlsbad?',
        answer:
          'Monthly is the usual cadence, and every four to six weeks for a corrective plan. Because the drive is real, the full course is mapped and scheduled at the first appointment so the appointments are placed around recovery rather than booked one at a time.',
      },
      {
        question: 'Is a HydraFacial safe on all skin tones?',
        answer:
          'Yes, for Fitzpatrick I through VI. It uses no heat, no lasers, and no aggressive peeling agents, and the extraction does not cause the trauma that can trigger post-inflammatory hyperpigmentation. The booster is selected for the skin tone in front of you.',
      },
    ],
  },

  'hydrafacial:chula-vista': {
    title: 'HydraFacial in Chula Vista, San Diego | KIAMO Skin',
    description:
      'HydraFacial in Chula Vista from KIAMO Skin in San Diego. Medical-grade extraction with a brightening booster for melanin-rich skin. $259.',
    h1: 'HydraFacial in Chula Vista — Extraction That Respects Melanin-Rich Skin',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with a booster chosen for your skin. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Chula Vista clients bring a specific combination to this treatment: skin that congests easily in the humidity, that marks when products are pushed too hard, and that spends most of the year under inland sun the coast never sees. That combination is where a HydraFacial earns its place. The Syndeo\'s enzymatic resurfacing clears congestion without the abrasion that sensitises deeper skin, the vortex extraction works at calibrated suction rather than a fixed setting, and the AI skin analysis determines the booster — Britenol for pigment on Fitzpatrick IV-VI skin, barrier support where the skin is reactive. Nothing here creates the trauma that produces post-inflammatory hyperpigmentation, which is the failure mode that matters most for this client base. The studio is about thirteen miles north off-peak, with free parking on site.',
    quickAnswer:
      'A HydraFacial in Chula Vista at KIAMO Skin is performed on the Syndeo device by Kiki, a California licensed esthetician with 7+ years in melanin-rich skin — enzymatic resurfacing, calibrated vortex extraction, a booster selected from the AI skin analysis, and LED light therapy. $259 per session, or $249 for a first-time client including the consultation. Chula Vista clients are about thirteen miles north, twenty to twenty-five minutes off-peak, with free parking on site. The booster is the part that matters for deeper skin: it is selected for the tone in front of you, and it contains no hydroquinone.',
    authority: {
      heading: 'Why Chula Vista clients book the Syndeo',
      body:
        'Melanin-rich skin responds to trauma by producing more pigment, so the safest treatment is the one that creates the least. The Syndeo is that treatment: no heat, no lasers, and no aggressive peeling agents, with exfoliating acids at concentrations proven safe on Fitzpatrick IV-VI skin. What remains is the judgement — and Kiki has 7+ years of it in exactly the skin types Chula Vista clients have. The booster is selected from the AI reading, and for deeper skin that means a brightening formula built around alpha-arbutin and bearberry extract rather than hydroquinone, which can cause rebound pigmentation in darker skin tones. One practitioner performs every session, so the second visit is informed by the first.',
    },
    uniqueness: {
      heading: 'What a HydraFacial in Chula Vista actually does',
      body:
        'Three clinical actions at once, calibrated by the device and by the practitioner:',
      bullets: [
        'Enzymatic resurfacing that clears congestion without the abrasion that sensitises deeper skin',
        'Vortex extraction at controlled suction, calibrated to the skin rather than set to a fixed pressure',
        'Precision infusion of hydration and antioxidants while the pores remain receptive',
        'A brightening booster selected for the skin tone — no hydroquinone, which can cause rebound pigment',
        'LED light therapy at every appointment, included rather than sold as an add-on',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes. The order matters: the surface is cleared before anything is driven in, so the booster arrives on receptive skin rather than on debris.',
      process: [
        {
          step: 'Cleanse & resurface',
          body:
            'A blend of gentle exfoliating acids lifts away dead skin cells — no scrubs, no harsh abrasion. On melanin-rich skin this is the difference between a treatment and a reaction.',
        },
        {
          step: 'Extract & hydrate',
          body:
            'Gentle vortex extraction removes oil and debris before hydrating ingredients and antioxidants are infused into the skin. The suction is calibrated to the skin.',
        },
        {
          step: 'Boost',
          body:
            'A customised booster is selected from the AI analysis. For deeper skin that means a brightening formula chosen for the tone in front of you. LED light therapy follows, included in every appointment.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in Chula Vista',
      body:
        'Chula Vista clients most often book for congestion, dehydration, and the dullness that comes with skin that has been worked hard in the sun. Many are already in a corrective plan and book the HydraFacial as the maintenance layer between peel appointments — a cleared surface lets the acid work evenly rather than over debris. Others book it as the first step, because the AI analysis gives them a reading of their own skin that no product has been able to give them. KIAMO Skin fits when the priority is protocols calibrated for the tone in front of you, published pricing, and one practitioner across the whole course.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Chula Vista?',
        answer:
          'About thirteen miles, twenty to twenty-five minutes north off-peak via I-5, with free parking on site. Morning and midday appointments are the quicker option, since the commute through Mission Valley is the slow part.',
      },
      {
        question: 'What does a HydraFacial cost in San Diego?',
        answer:
          '$259 per session. A first-time client treatment is $249 including the consultation, skin analysis, and the plan for what comes next. The monthly facial membership is $199 a month and includes one HydraFacial monthly plus discounts on additional treatments.',
      },
      {
        question: 'Is a HydraFacial safe for melanin-rich skin?',
        answer:
          'Yes — because it uses no heat, no lasers, and no aggressive peeling agents. The exfoliating acids are at concentrations proven safe for melanin-rich skin, and the vortex extraction does not cause the trauma that can trigger post-inflammatory hyperpigmentation. For deeper skin the booster is selected from the AI reading, and it is built around alpha-arbutin and bearberry extract rather than hydroquinone.',
      },
      {
        question: 'Can I get a HydraFacial and a peel in the same month?',
        answer:
          'Frequently, and often for good reason — the HydraFacial clears the surface between peel appointments so the acid works evenly. What can safely be combined and when is decided at consultation, because the sequence depends on how the barrier responds.',
      },
      {
        question: 'Does a HydraFacial fix melasma?',
        answer:
          'No, and it would be wrong to say so. A HydraFacial is a resurfacing and maintenance treatment. Melasma is corrected with LIRA chemical peels, and the HydraFacial is the layer that holds the result between sessions. For dehydration, congestion, and texture, it is the right treatment on its own.',
      },
    ],
  },

  'hydrafacial:encinitas': {
    title: 'HydraFacial in Encinitas, San Diego | KIAMO Skin',
    description:
      'HydraFacial in Encinitas from KIAMO Skin in San Diego. Medical-grade extraction and hydration for surf-exposed skin. $259. Request an appointment.',
    h1: 'HydraFacial in Encinitas — Recovery for Salt-Water Skin',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with a booster chosen for your skin. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Encinitas has a specific relationship with salt water, and it shows up in the skin. The rinse after a surf session removes the salt but also strips the oils that hold the barrier together, and the result is skin that feels tight after the water and reactive to products it tolerated the week before. A HydraFacial is the treatment built for exactly that: enzymatic resurfacing that clears what the ocean and the wind leave behind, calibrated vortex extraction that removes the mineral deposits hard water leaves in the follicles, and precision infusion that puts the hydration back before the barrier can react to the next session. The studio is about twenty-five miles south, roughly thirty minutes off-peak, with free parking on site.',
    quickAnswer:
      'A HydraFacial in Encinitas at KIAMO Skin is performed on the Syndeo device by Kiki, a California licensed esthetician with 7+ years of experience — enzymatic resurfacing, calibrated vortex extraction, a booster selected from the AI skin analysis, and LED light therapy. $259 per session, or $249 for a first-time client including the consultation. Encinitas clients are about twenty-five miles south, roughly thirty minutes off-peak, with free parking on site. For surf-exposed skin the treatment is about restoring the barrier as much as clearing the surface.',
    authority: {
      heading: 'Why Encinitas clients choose the Syndeo for barrier recovery',
      body:
        'Salt water strips the barrier twice over — the salt itself, and then the fresh water rinse that takes the protective oils with it. A treatment that adds more abrasion to that skin makes it worse, so the instrument matters as much as the technique. The Syndeo resurfaces enzymatically rather than by scrubbing, extracts at calibrated suction rather than a fixed setting, and infuses hydration while the pores are still receptive. For skin that reacts to being touched, the gentler instrument is the whole point. Kiki performs every session personally, and has 7+ years treating the skin types Encinitas clients arrive with.',
    },
    uniqueness: {
      heading: 'What a HydraFacial in Encinitas actually does',
      body:
        'Three clinical actions at once, calibrated by the device and by the practitioner:',
      bullets: [
        'Enzymatic resurfacing that clears salt residue and congestion without abrasive scrubbing',
        'Vortex extraction at controlled suction, removing the mineral deposits hard water leaves in the follicles',
        'Precision infusion of hydration and antioxidants while the pores remain receptive',
        'A barrier-support booster where the skin is reactive, brightening where pigment is the concern',
        'LED light therapy at every appointment, included rather than sold as an add-on',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Sessions run 45 minutes. For surf-exposed skin the order is the treatment — the surface is cleared before anything is driven in, so the hydration arrives on receptive skin rather than on debris.',
      process: [
        {
          step: 'Cleanse & resurface',
          body:
            'A blend of gentle exfoliating acids lifts away dead skin cells and the residue salt and wind leave behind — no scrubs, no harsh abrasion.',
        },
        {
          step: 'Extract & hydrate',
          body:
            'Gentle vortex extraction removes oil, debris, and mineral buildup before hydrating ingredients and antioxidants are infused into the skin.',
        },
        {
          step: 'Boost',
          body:
            'A customised booster is selected from the AI analysis — barrier support where the skin is reactive, brightening where pigment is the concern. LED light therapy follows, included in every appointment.',
        },
      ],
    },
    intent: {
      heading: 'Who books a HydraFacial in Encinitas',
      body:
        'Encinitas clients book for the barrier problem the ocean creates: skin that feels tight and reactive in the week after heavy surf exposure, that reacts to products it tolerated before, and that carries congestion the way a city skin does. Others book the HydraFacial as the maintenance layer between peel appointments or alongside a series planned for sun damage and uneven tone. KIAMO Skin fits when the priority is a treatment chosen for the skin on the day, published pricing, and one practitioner across the course rather than a rotation of whoever is free.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Encinitas?',
        answer:
          'About twenty-five miles, roughly thirty minutes south off-peak on I-5, with free parking on site. For a client booking monthly, the appointment is easier to place early in the day, before the north county commute builds.',
      },
      {
        question: 'What does a HydraFacial cost in San Diego?',
        answer:
          '$259 per session. A first-time client treatment is $249 including the consultation, skin analysis, and the plan for what comes next. The monthly facial membership is $199 a month and includes one HydraFacial monthly plus discounts on additional treatments.',
      },
      {
        question: 'Can a HydraFacial fix skin damaged by salt water?',
        answer:
          'It restores the barrier and clears what the ocean leaves behind, which is the treatment for the problem. If the barrier is badly compromised — reactive, stinging, tight after cleansing — DMK enzyme therapy is often the right first move, because it rebuilds skin function rather than resurfacing a surface that is not ready for it.',
      },
      {
        question: 'Is a HydraFacial safe for melanin-rich skin?',
        answer:
          'Yes, because it uses no heat, no lasers, and no aggressive peeling agents. The exfoliating acids are at concentrations proven safe for melanin-rich skin, and the extraction does not cause the trauma that can trigger post-inflammatory hyperpigmentation.',
      },
      {
        question: 'How often should I come in from Encinitas?',
        answer:
          'Monthly is the usual cadence, and every four to six weeks for a corrective plan. The full course is mapped and scheduled at the first appointment, so the appointments sit around recovery rather than being booked one at a time.',
      },
    ],
  },

  'chemical-peel:carlsbad': {
    title: 'Chemical Peel in Carlsbad, San Diego | KIAMO Skin',
    description:
      'Chemical peels in Carlsbad from KIAMO Skin in San Diego. LIRA peels for sun damage and melasma, paced across a series. From $199.',
    h1: 'Chemical Peel in Carlsbad — Pigmentation Correction, Paced for North County',
    opener:
      'Professional peels selected for the skin tone in front of you, with the strength raised only as the barrier allows. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Carlsbad clients book peels for the pigmentation that a bright, dry inland climate produces, and for the specific reason the treatment has to be paced rather than escalated. A LIRA chemical peel is layered and timed to the skin\'s response on the day, and the strength increases across a series — never inside one visit. On melanin-rich skin that pacing is the whole safety mechanism, because the wrong peel at the wrong strength produces exactly the post-inflammatory hyperpigmentation a client came in to clear. The studio is about thirty-five minutes south off-peak with free parking on site, and because a corrective course runs every four to six weeks, the series is scheduled in full at the first appointment.',
    quickAnswer:
      'LIRA chemical peels in Carlsbad are professional-grade peels selected for the skin tone and paced across a series — strength escalated only as the barrier allows, never escalated in one visit. Kiki, a California licensed esthetician with 7+ years in melanin-rich skin, performs every session at the San Diego studio, about thirty-five minutes south off-peak with free parking. $199 for the Gentle Renewal peel and $299 for the Advanced peel. The pacing is the safety mechanism on deeper skin: the wrong peel at the wrong strength produces the dark marks clients are trying to clear.',
    authority: {
      heading: 'Why Carlsbad clients choose a peel that is paced, not fast',
      body:
        'The drive is what shapes a Carlsbad plan, and so is the biology. Corrective work runs on intervals — a peel series, a microchanneling course, a scalp series — and the honest approach is to set the course first and place the appointments around it, rather than booking whenever the skin flares. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway. On the biology side, Kiki has 7+ years treating pigmentation in melanin-rich skin, where an over-aggressive peel causes more damage than it repairs, and the LIRA range is built for exactly the control that requires — strength selected for the tone in front of you, escalated only as the barrier allows.',
    },
    uniqueness: {
      heading: 'What a chemical peel in Carlsbad actually does',
      body:
        'A peel is not one event. It is a sequence, and each session depends on what the last one left behind:',
      bullets: [
        'A period of home prep first, so the skin is ready before any acid is applied',
        'The peel layered and timed to the skin\'s response on the day',
        'Strength escalated across the series, never inside a single visit',
        'Acids selected for the skin tone, not from a fixed menu',
        'Daily SPF as the part that holds the result — without it the pigment returns',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Three steps, and the first one happens at home. Most pigmentation plans begin with a period of preparation so the skin is ready before any acid is applied.',
      process: [
        {
          step: 'Patch and prep',
          body:
            'Most pigmentation plans begin with a period of home prep so the skin is ready before any acid is applied. This is the step that decides whether the series progresses or stalls.',
        },
        {
          step: 'Apply',
          body:
            'The peel is layered and timed to the skin\'s response on the day. Strength escalates across a series rather than in one visit.',
        },
        {
          step: 'Protect',
          body:
            'Daily SPF is what holds the result. Without it, pigmentation returns — and San Diego\'s overcast mornings are the usual reason people stop applying it.',
        },
      ],
    },
    intent: {
      heading: 'Who books a chemical peel in Carlsbad',
      body:
        'Carlsbad clients most often book for melasma, sun damage accumulated over years of bright inland afternoons, and post-inflammatory marks left by acne. Some are mid-series on a corrective plan and book the next peel in the course; others are starting and need the whole sequence set out before the first appointment. KIAMO Skin fits when the priority is a peel selected for the skin tone, strength that escalates only as the barrier allows, published pricing, and one practitioner for the whole course. Thirty-five minutes is a real drive, and the clients who make it are the ones who want the treatment chosen rather than applied.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Carlsbad?',
        answer:
          'About thirty to thirty-five miles, thirty-five to forty minutes south off-peak on I-5, with free parking on site. Because a peel series runs every four to six weeks, the full course is scheduled at the first appointment rather than booked one at a time.',
      },
      {
        question: 'How much does a chemical peel cost in San Diego?',
        answer:
          'The LIRA Gentle Renewal Peel is $199 and the Advanced Peel is $299. A first-time consultation and treatment is $249. Pigmentation is treated as a series — most plans run every four to six weeks — so a monthly membership at $199 is often the cheaper way to stay on schedule.',
      },
      {
        question: 'Are chemical peels safe for melanin-rich skin?',
        answer:
          'Yes, when the peel is selected for the tone and the pacing is right. Melanin-rich skin responds to trauma by producing more pigment, so strength is escalated only as the barrier allows and the first step is usually gentle. The LIRA range is built around that control rather than applied from a fixed menu.',
      },
      {
        question: 'How many peels will I need?',
        answer:
          'It depends on the depth of the pigment and the skin tone. Most clients see visible change across three to four sessions, with the full result across six to eight. The timeline is set at consultation once the skin has been assessed.',
      },
      {
        question: 'What should I do between peel appointments?',
        answer:
          'Home care does as much work as the treatment. Broad-spectrum SPF 50+ daily, no retinoids or acids while the skin is recovering, and the home routine Kiki prescribes at the first appointment. A monthly membership at $199 applies toward peels by paying the difference.',
      },
    ],
  },

  'chemical-peel:la-jolla': {
    title: 'Chemical Peel in La Jolla, San Diego | KIAMO Skin',
    description:
      'Chemical peels in La Jolla from KIAMO Skin in San Diego. LIRA peels for sun damage and melasma in melanin-rich skin. From $199.',
    h1: 'Chemical Peel in La Jolla — Correcting Coastal UV Without New Marks',
    opener:
      'Professional peels selected for the skin tone in front of you, with the strength raised only as the barrier allows. Performed by Kiki, a California licensed esthetician.',
    intro:
      'La Jolla has more than one kind of sun exposure, and they work against each other. There is the year-round ocean swimming — salt water, salt air, and a part line that takes UV directly — and there is the blufftop above the Cove, which gets direct afternoon sun with no tree cover and reflects back off the water. That combination produces a kind of pigmentation that peels can address but cannot fix on their own, because the trigger keeps arriving. The LIRA approach is built for exactly that: strength escalates across a series rather than in one visit, the peel is selected for the skin tone in front of you, and daily SPF is what holds the result. The studio is about twenty minutes south off-peak, with free parking on site.',
    quickAnswer:
      'LIRA chemical peels in La Jolla correct sun damage and melasma on melanin-rich skin, with strength escalated across a series rather than in one visit and the peel selected for the tone in front of you. Kiki, a California licensed esthetician with 7+ years in melanin-rich skin, performs every session at the San Diego studio — about twenty minutes south off-peak, free parking on site. $199 for the Gentle Renewal peel and $299 for the Advanced. La Jolla has two sun exposures at once — ocean swimming and blufftop UV — and the daily SPF in the plan is what decides whether the pigment stays faded.',
    authority: {
      heading: 'Why La Jolla clients need a peel that respects the skin tone',
      body:
        'La Jolla clients spend a lot of time in water and a lot of time in direct sun, and the skin records both. Salt water strips the barrier; blufftop UV drives pigment into it. On melanin-rich skin that combination is where the wrong treatment does lasting damage — an over-aggressive peel creates precisely the post-inflammatory hyperpigmentation the client came in to clear. Kiki has 7+ years treating exactly this, and the LIRA range is built for the control it requires: strength selected for the tone in front of you, escalated only as the barrier allows, and never escalated inside a single visit. The single-practitioner model matters across a series — the esthetician who assessed the pigment performs every session and adjusts the plan from what the skin shows.',
    },
    uniqueness: {
      heading: 'What a chemical peel in La Jolla actually does',
      body:
        'A peel is a sequence, and each session depends on what the last one left behind:',
      bullets: [
        'A period of home prep first, so the skin is ready before any acid is applied',
        'The peel layered and timed to the skin\'s response on the day',
        'Strength escalated across the series, never inside a single visit',
        'Acids selected for the skin tone — on melanin-rich skin the wrong concentration causes the damage it is meant to correct',
        'Daily SPF as the part that holds the result, because the ocean and the bluff are not going to stop',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'Three steps, and the first one happens at home. Most pigmentation plans begin with a period of preparation so the skin is ready before any acid is applied.',
      process: [
        {
          step: 'Patch and prep',
          body:
            'Most pigmentation plans begin with a period of home prep so the skin is ready before any acid is applied. This is the step that decides whether the series progresses or stalls.',
        },
        {
          step: 'Apply',
          body:
            'The peel is layered and timed to the skin\'s response on the day. Strength escalates across a series rather than in one visit.',
        },
        {
          step: 'Protect',
          body:
            'Daily SPF is what holds the result. For La Jolla clients that means a mineral sunscreen with iron oxides, applied on the overcast mornings too — visible light is a trigger that UV-only sunscreen does not block.',
        },
      ],
    },
    intent: {
      heading: 'Who books a chemical peel in La Jolla',
      body:
        'La Jolla clients most often book for melasma, sun damage from a life lived outdoors, and the post-inflammatory marks left behind by acne or by a treatment done elsewhere. Many are already mid-series and book the next peel; others start and need the whole sequence set out before the first appointment. KIAMO Skin fits when the priority is a peel selected for the skin tone, strength that escalates only as the barrier allows, published pricing, and one practitioner for the whole course. Twenty minutes is a short drive, and the clients who make it want the treatment chosen rather than applied.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from La Jolla?',
        answer:
          'About twelve miles, twenty minutes south off-peak on I-5, with free parking on site at the studio. It is a short drive, which is what makes a series at four-to-six-week intervals realistic.',
      },
      {
        question: 'How much does a chemical peel cost in San Diego?',
        answer:
          'The LIRA Gentle Renewal Peel is $199 and the Advanced Peel is $299. A first-time consultation and treatment is $249. Pigmentation is treated as a series — most plans run every four to six weeks — so a monthly membership at $199 is often the cheaper way to stay on schedule.',
      },
      {
        question: 'Are chemical peels safe for melanin-rich skin?',
        answer:
          'Yes, when the peel is selected for the tone and the pacing is right. Melanin-rich skin responds to trauma by producing more pigment, so strength is escalated only as the barrier allows and the first step is usually gentle. The LIRA range is built around that control rather than applied from a fixed menu.',
      },
      {
        question: 'How many peels will I need?',
        answer:
          'It depends on the depth of the pigment and the skin tone. Most clients see visible change across three to four sessions, with the full result across six to eight. The timeline is set at consultation once the skin has been assessed.',
      },
      {
        question: 'Can I keep swimming while I am having peels?',
        answer:
          'Salt water and a peel do not belong in the same week — salt water strips the barrier the peel is working on. The plan sets a recovery window, and how long it runs depends on the peel depth. Getting this wrong is the most common reason a series stalls and the pigment comes back.',
      },
    ],
  },

  'microneedling:encinitas': {
    title: 'Microneedling in Encinitas, San Diego | KIAMO Skin',
    description:
      'Microneedling in Encinitas from KIAMO Skin in San Diego. Procell microchanneling for acne scars and texture, without RF heat. $475.',
    h1: 'Microneedling in Encinitas — Texture and Scarring, Without the Heat',
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Encinitas clients book microchanneling for two things: acne scarring left behind, and texture that no exfoliating product has moved. Procell is the right instrument for both, and the reason is specific. Procell creates thousands of microscopic channels mechanically and delivers its stem cytokine growth factor serum into the open channels in the same pass, so the repair is directed rather than left to chance. There is no radiofrequency heat anywhere in the treatment — which matters here, because heat is itself a pigment trigger on melanin-rich skin, and Encinitas clients who surf, train outdoors, and live in bright coastal light are often exactly the skin types where a thermal treatment would make the marks worse. The studio is about twenty-five miles south, roughly thirty minutes off-peak.',
    quickAnswer:
      'Procell microchanneling in Encinitas is performed by Kiki, a California licensed esthetician with 7+ years of experience — a precision handpiece creates thousands of microscopic channels and a stem cytokine growth factor serum is applied directly into them in the same pass. $475 per session or $1,199 for a series of three. No RF heat anywhere in the treatment, which matters on melanin-rich skin because heat activates melanocytes and can create the dark marks clients are trying to remove. Encinitas clients are about thirty minutes south off-peak with free parking on site.',
    authority: {
      heading: 'Why Encinitas clients choose Procell over RF microneedling',
      body:
        'RF microneedling devices combine needle penetration with radiofrequency heat delivered through the tip. In lighter skin tones the thermal effect stimulates collagen remodelling without significant risk. In melanin-rich skin — Fitzpatrick IV, V, and VI — that heat activates melanocytes near the treatment zone, which can trigger post-inflammatory hyperpigmentation as a response to thermal trauma. The result is more dark marks than the ones that brought the client in. Procell creates mechanical channels without any thermal component, so the inflammatory trigger is controlled and predictable. Kiki has 7+ years treating these cases, and this is not a compromised version of microneedling — it is the correct selection for the population the studio serves.',
    },
    uniqueness: {
      heading: 'What microchanneling in Encinitas actually does',
      body:
        'Five stages, with the serum application being the one that separates Procell from a conventional treatment:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier, or recent retinoid use may change the protocol',
        'Topical numbing for 20-30 minutes, so the pass itself is comfortable',
        'A systematic grid pass across forehead, cheeks, chin, and perioral area',
        'Stem cytokine serum applied directly into the open channels in the same pass — the step that directs the repair',
        'LED light therapy and barrier protection at the end, both included in the appointment',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing, and the aftercare — and for a client making a thirty-minute drive, it is worth booking the slot knowing the full arc rather than only the treatment time.',
      process: [
        {
          step: 'Skin assessment and prep',
          body:
            'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied and left for 20-30 minutes.',
        },
        {
          step: 'Microchanneling pass',
          body:
            'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Most clients describe mild pressure with minimal sensation during numbing.',
        },
        {
          step: 'Growth factor serum application',
          body:
            'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. This is the step that differentiates Procell outcomes — the growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          body:
            'Red and near-infrared LED light therapy follows every session to reduce post-treatment inflammation and support the healing response. Included in every appointment, not an add-on.',
        },
        {
          step: 'Barrier protection and post-care',
          body:
            'A calming, occlusive barrier product is applied. Expect redness similar to a mild sunburn for 24-48 hours. SPF is non-negotiable afterwards — the channels close within hours, but skin UV-sensitivity stays elevated for 7-10 days.',
        },
      ],
    },
    intent: {
      heading: 'Who books microneedling in Encinitas',
      body:
        'Encinitas clients most often book for atrophic acne scarring — the indented kind, from cysts or deep inflammatory breakouts — and for texture and enlarged pores that no exfoliating product has moved. Others are mid-series, booking the second or third session of a three-treatment course, and the series is scheduled in full at the first appointment so the appointments sit around recovery. KIAMO Skin fits when the priority is a treatment that will not create new marks while correcting the old ones, published pricing, and one practitioner for the whole course. Thirty minutes is a real drive, and the clients who make it are usually the ones who have already tried the thermal version and seen what it did.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Encinitas?',
        answer:
          'About twenty-five miles, roughly thirty minutes south off-peak on I-5, with free parking on site at the studio. Microchanneling is usually a series of three, and the full course is scheduled at the first appointment so the appointments sit around recovery rather than being booked one at a time.',
      },
      {
        question: 'How much does microneedling cost in San Diego?',
        answer:
          '$475 for a single session, or $1,199 for a series of three — which costs less than three single sessions. Sessions are spaced four to six weeks apart, and growth factor serums and LED therapy are included at each one.',
      },
      {
        question: 'Is microchanneling safe on dark skin?',
        answer:
          'It works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. RF microneedling devices activate melanocytes near the treatment zone and can trigger post-inflammatory hyperpigmentation. Procell uses mechanical channels only, with no thermal component.',
      },
      {
        question: 'How many treatments will I need for acne scars?',
        answer:
          'A series of three is the usual plan, spaced four to six weeks apart. The depth and number of passes are set per session based on how the skin responded last time, so the second appointment is informed by the first.',
      },
      {
        question: 'What should I avoid after a session?',
        answer:
          'Retinoids, vitamin A derivatives, and strong exfoliants while the skin is recovering, and direct sun — UV-sensitivity stays elevated for 7-10 days after microchanneling even though the channels close within hours. SPF is non-negotiable in that window.',
      },
    ],
  },

  'microneedling:carlsbad': {
    title: 'Microneedling in Carlsbad, San Diego | KIAMO Skin',
    description:
      'Microneedling in Carlsbad from KIAMO Skin in San Diego. Procell microchanneling for acne scars and texture. $475. Request an appointment.',
    h1: 'Microneedling in Carlsbad — Depth-Controlled Correction for Scarring',
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Carlsbad clients book microchanneling for atrophic acne scarring and for texture that has resisted exfoliation, and the reason they travel for it is the depth control. Procell\'s handpiece passes across the face in a systematic grid, and the depth is set region by region based on skin thickness and the concern being treated — which is not something a fixed-depth device can do. The stem cytokine serum goes into the open channels in the same pass, so the repair is directed toward collagen synthesis rather than left to chance. And there is no radiofrequency heat anywhere, which is what makes it safe on melanin-rich skin where a thermal treatment can create more marks than it removes. The studio is about thirty-five minutes south off-peak.',
    quickAnswer:
      'Procell microchanneling in Carlsbad treats atrophic acne scarring and texture with depth controlled region by region rather than fixed across the face, and a stem cytokine growth factor serum applied directly into the open channels in the same pass. Kiki, a California licensed esthetician with 7+ years of experience, performs every session. $475 per session or $1,199 for a series of three. No RF heat anywhere in the treatment, which matters on melanin-rich skin. Carlsbad clients are about thirty-five minutes south off-peak, with free parking on site.',
    authority: {
      heading: 'Why Carlsbad clients book a series rather than a session',
      body:
        'The drive is the constraint that shapes a Carlsbad plan. Corrective work runs on intervals — microchanneling is usually three sessions spaced four to six weeks apart — and the honest approach is to set the series first and place the appointments around it, rather than booking whenever the skin flares. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway, and what can safely be combined is decided at consultation. On the treatment itself, Kiki has 7+ years working on scarred and textured skin across the full Fitzpatrick range, and depth that is set region by region rather than uniformly is what distinguishes this from a device set to one setting.',
    },
    uniqueness: {
      heading: 'What microchanneling in Carlsbad actually does',
      body:
        'Five stages, with depth control and the serum application being the two that distinguish this treatment:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier, or recent retinoid use may change the protocol',
        'Topical numbing for 20-30 minutes, so the pass itself is comfortable',
        'A grid pass with depth set region by region, according to skin thickness and the concern',
        'Stem cytokine serum applied directly into the open channels in the same pass',
        'LED light therapy and barrier protection at the end, both included in the appointment',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing, and the aftercare — and for a client making a thirty-five minute drive, it is worth booking the slot knowing the full arc rather than only the treatment time.',
      process: [
        {
          step: 'Skin assessment and prep',
          body:
            'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied and left for 20-30 minutes.',
        },
        {
          step: 'Microchanneling pass',
          body:
            'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Treatment depth is set region by region rather than uniformly across the face.',
        },
        {
          step: 'Growth factor serum application',
          body:
            'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. The growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          body:
            'Red and near-infrared LED light therapy follows every session to reduce post-treatment inflammation and support the healing response. Included in every appointment, not an add-on.',
        },
        {
          step: 'Barrier protection and post-care',
          body:
            'A calming, occlusive barrier product is applied. Expect redness similar to a mild sunburn for 24-48 hours. SPF is non-negotiable afterwards — UV-sensitivity stays elevated for 7-10 days.',
        },
      ],
    },
    intent: {
      heading: 'Who books microneedling in Carlsbad',
      body:
        'Carlsbad clients most often book for atrophic acne scarring — the indented kind, from cysts or deep inflammatory breakouts — and for texture and enlarged pores that no exfoliating product has moved. Others are mid-series, booking the second or third session of a three-treatment course, and the series is scheduled in full at the first appointment. KIAMO Skin fits when the priority is depth control rather than a fixed setting, a treatment that will not create new marks while correcting the old ones, published pricing, and one practitioner for the whole course.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Carlsbad?',
        answer:
          'About thirty to thirty-five miles, thirty-five to forty minutes south off-peak on I-5, with free parking on site at the studio. Microchanneling is usually a series of three, scheduled in full at the first appointment.',
      },
      {
        question: 'How much does microneedling cost in San Diego?',
        answer:
          '$475 for a single session, or $1,199 for a series of three — which costs less than three single sessions. Sessions are spaced four to six weeks apart, and growth factor serums and LED therapy are included at each one.',
      },
      {
        question: 'Will microchanneling help my acne scars?',
        answer:
          'It helps the indented kind — atrophic scars left by cysts or deep inflammatory breakouts — by stimulating collagen production. Texture irregularities and enlarged pores respond as well. It does not lift a scar the way a surgical revision would, and it is not the treatment for active inflammatory acne, which has to be controlled first.',
      },
      {
        question: 'Is microchanneling safe on melanin-rich skin?',
        answer:
          'It works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. RF microneedling devices activate melanocytes near the treatment zone and can trigger post-inflammatory hyperpigmentation. Procell uses mechanical channels only, with no thermal component.',
      },
      {
        question: 'How many treatments will I need?',
        answer:
          'A series of three is the usual plan, spaced four to six weeks apart. Depth and the number of passes are set per session based on how the skin responded last time, so the second appointment is informed by the first.',
      },
    ],
  },

  'microneedling:la-jolla': {
    title: 'Microneedling in La Jolla, San Diego | KIAMO Skin',
    description:
      'Microneedling in La Jolla from KIAMO Skin in San Diego. Procell microchanneling for acne scars and texture. $475. Request an appointment.',
    h1: 'Microneedling in La Jolla — Texture Correction for Coastal Skin',
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    intro:
      'La Jolla clients arrive at microchanneling for two different things, and the treatment handles both. The first is atrophic acne scarring — the indented kind left by deep inflammatory breakouts — which responds to collagen induction over a series. The second is texture: the general unevenness that comes from years of sun, wind, and salt water, and the enlarged pores that come with it. Procell creates thousands of microscopic channels mechanically and delivers its stem cytokine serum into them in the same pass, so the repair is directed rather than left to chance. Depth is set region by region rather than uniformly, because skin thickness differs across the face and a fixed setting treats the cheekbones and the jaw identically. The studio is about twenty minutes south off-peak, with free parking on site.',
    quickAnswer:
      'Procell microchanneling in La Jolla treats atrophic acne scarring and uneven texture with depth controlled region by region and a stem cytokine growth factor serum applied directly into the open channels in the same pass. Kiki, a California licensed esthetician with 7+ years of experience, performs every session. $475 per session or $1,199 for a series of three. No RF heat anywhere, which matters on melanin-rich skin. La Jolla clients are about twenty minutes south off-peak, with free parking on site.',
    authority: {
      heading: 'Why La Jolla clients choose Procell over RF microneedling',
      body:
        'RF microneedling devices combine needle penetration with radiofrequency heat delivered through the tip. In lighter skin tones the thermal effect stimulates collagen remodelling without significant risk. In melanin-rich skin — Fitzpatrick IV, V, and VI — that heat activates melanocytes near the treatment zone, which can trigger post-inflammatory hyperpigmentation as a response to thermal trauma. La Jolla clients who train outdoors, surf, and live in bright coastal light are often exactly the skin types where a thermal treatment would leave more marks than it removed. Procell creates mechanical channels without any thermal component, so the inflammatory trigger is controlled and predictable. Kiki has 7+ years treating scarring and texture across the full Fitzpatrick range.',
    },
    uniqueness: {
      heading: 'What microchanneling in La Jolla actually does',
      body:
        'Five stages, with depth control and the serum application being the two that distinguish this treatment:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier, or recent retinoid use may change the protocol',
        'Topical numbing for 20-30 minutes, so the pass itself is comfortable',
        'A grid pass with depth set region by region, according to skin thickness and the concern',
        'Stem cytokine serum applied directly into the open channels in the same pass',
        'LED light therapy and barrier protection at the end, both included in the appointment',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing, and the aftercare — and for a client making a twenty-minute drive, it is worth booking the slot knowing the full arc rather than only the treatment time.',
      process: [
        {
          step: 'Skin assessment and prep',
          body:
            'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied and left for 20-30 minutes.',
        },
        {
          step: 'Microchanneling pass',
          body:
            'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Treatment depth is set region by region rather than uniformly across the face.',
        },
        {
          step: 'Growth factor serum application',
          body:
            'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. The growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          body:
            'Red and near-infrared LED light therapy follows every session to reduce post-treatment inflammation and support the healing response. Included in every appointment, not an add-on.',
        },
        {
          step: 'Barrier protection and post-care',
          body:
            'A calming, occlusive barrier product is applied. Expect redness similar to a mild sunburn for 24-48 hours. SPF is non-negotiable afterwards — UV-sensitivity stays elevated for 7-10 days.',
        },
      ],
    },
    intent: {
      heading: 'Who books microneedling in La Jolla',
      body:
        'La Jolla clients most often book for atrophic acne scarring and for texture that no exfoliating product has moved — the general unevenness that years of sun, wind, and salt water leave behind. Others are mid-series, booking the second or third session of a three-treatment course, and the series is scheduled in full at the first appointment so the appointments sit around recovery. KIAMO Skin fits when the priority is depth control rather than a fixed setting, a treatment that will not create new marks while correcting the old ones, published pricing, and one practitioner for the whole course.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from La Jolla?',
        answer:
          'About twelve miles, twenty minutes south off-peak on I-5, with free parking on site at the studio. Microchanneling is usually a series of three spaced four to six weeks apart, scheduled in full at the first appointment.',
      },
      {
        question: 'How much does microneedling cost in San Diego?',
        answer:
          '$475 for a single session, or $1,199 for a series of three — which costs less than three single sessions. Sessions are spaced four to six weeks apart, and growth factor serums and LED therapy are included at each one.',
      },
      {
        question: 'Will microchanneling help my acne scars?',
        answer:
          'It helps the indented kind — atrophic scars left by cysts or deep inflammatory breakouts — by stimulating collagen production. Texture irregularities and enlarged pores respond as well. It does not lift a scar the way a surgical revision would, and it is not the treatment for active inflammatory acne, which has to be controlled first.',
      },
      {
        question: 'Is microchanneling safe on melanin-rich skin?',
        answer:
          'It works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. RF microneedling devices activate melanocytes near the treatment zone and can trigger post-inflammatory hyperpigmentation. Procell uses mechanical channels only, with no thermal component.',
      },
      {
        question: 'How many treatments will I need?',
        answer:
          'A series of three is the usual plan, spaced four to six weeks apart. Depth and the number of passes are set per session based on how the skin responded last time, so the second appointment is informed by the first.',
      },
    ],
  },

  'microneedling:chula-vista': {
    title: 'Microneedling in Chula Vista, San Diego | KIAMO Skin',
    description:
      'Microneedling in Chula Vista from KIAMO Skin in San Diego. Procell microchanneling for acne scars and texture in melanin-rich skin. $475.',
    h1: 'Microneedling in Chula Vista — Scarring Correction Without New Pigment',
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Chula Vista is where the reason Procell exists is clearest. It is the county\'s largest melanin-rich catchment, and the clients who book microchanneling here are usually correcting the marks an earlier treatment left behind — an over-aggressive peel done elsewhere, or inflammation that never settled. When the skin is already pigment-sensitive, the treatment has to be the one that creates no new marks. Procell creates thousands of microscopic channels mechanically and delivers its stem cytokine serum into them in the same pass; there is no radiofrequency heat anywhere in the treatment. Depth is set region by region rather than uniformly, because skin thickness differs across the face. The studio is about thirteen miles north off-peak, with free parking on site.',
    quickAnswer:
      'Procell microchanneling in Chula Vista treats atrophic acne scarring and texture on melanin-rich skin, with depth controlled region by region and a stem cytokine growth factor serum applied directly into the open channels in the same pass. Kiki, a California licensed esthetician with 7+ years in melanin-rich skin, performs every session. $475 per session or $1,199 for a series of three. There is no RF heat anywhere in the treatment — heat activates melanocytes and can create the dark marks clients are trying to remove. Chula Vista clients are about thirteen miles north, twenty to twenty-five minutes off-peak.',
    authority: {
      heading: 'Why Chula Vista clients need a treatment that creates no new marks',
      body:
        'In melanin-rich skin the risk with microchanneling is not the needles — it is the heat. RF microneedling devices combine needle penetration with radiofrequency energy delivered through the tip, and in Fitzpatrick IV, V, and VI skin that heat activates melanocytes near the treatment zone, which can trigger post-inflammatory hyperpigmentation as a response to thermal trauma. For a client whose skin already carries marks from a treatment done elsewhere, adding a thermal element is the one thing that would make things worse. Procell has no thermal component at all, so the inflammatory trigger is controlled and predictable. Kiki has 7+ years treating scarring in exactly these skin types, and the depth of each pass is set region by region rather than uniformly.',
    },
    uniqueness: {
      heading: 'What microchanneling in Chula Vista actually does',
      body:
        'Five stages, with depth control and the serum application being the two that distinguish this treatment:',
      bullets: [
        'A skin review first — active inflammatory acne, a compromised barrier, or recent retinoid use may change the protocol',
        'Topical numbing for 20-30 minutes, so the pass itself is comfortable',
        'A grid pass with depth set region by region, according to skin thickness and the concern',
        'Stem cytokine serum applied directly into the open channels in the same pass',
        'LED light therapy and barrier protection at the end, both included in the appointment',
      ],
    },
    depth: {
      heading: 'What happens in the room',
      body:
        'The pass itself takes 20 to 30 minutes. Most of the appointment is the assessment, the numbing, and the aftercare — and for a client making a twenty-five minute drive, it is worth booking the slot knowing the full arc rather than only the treatment time.',
      process: [
        {
          step: 'Skin assessment and prep',
          body:
            'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied and left for 20-30 minutes.',
        },
        {
          step: 'Microchanneling pass',
          body:
            'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Treatment depth is set region by region rather than uniformly across the face.',
        },
        {
          step: 'Growth factor serum application',
          body:
            'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. The growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
        },
        {
          step: 'LED light therapy',
          body:
            'Red and near-infrared LED light therapy follows every session to reduce post-treatment inflammation and support the healing response. Included in every appointment, not an add-on.',
        },
        {
          step: 'Barrier protection and post-care',
          body:
            'A calming, occlusive barrier product is applied. Expect redness similar to a mild sunburn for 24-48 hours. SPF is non-negotiable afterwards — UV-sensitivity stays elevated for 7-10 days.',
        },
      ],
    },
    intent: {
      heading: 'Who books microneedling in Chula Vista',
      body:
        'Chula Vista clients most often book for atrophic acne scarring — the indented kind left by deep inflammatory breakouts — and for the post-inflammatory marks an over-aggressive peel or laser elsewhere left behind. Others are mid-series, booking the second or third session of a three-treatment course, with the series scheduled in full at the first appointment. KIAMO Skin fits when the priority is a treatment that will not create new marks while correcting the old ones, published pricing, and one practitioner for the whole course. Twenty-five minutes is a real drive, and the clients who make it have usually already learned what the wrong treatment does to their skin.',
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Chula Vista?',
        answer:
          'About thirteen miles, twenty to twenty-five minutes north off-peak via I-5, with free parking on site. Microchanneling is usually a series of three spaced four to six weeks apart, scheduled in full at the first appointment.',
      },
      {
        question: 'How much does microneedling cost in San Diego?',
        answer:
          '$475 for a single session, or $1,199 for a series of three — which costs less than three single sessions. Growth factor serums and LED therapy are included at each one.',
      },
      {
        question: 'Is microchanneling safe on melanin-rich skin?',
        answer:
          'It works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. RF microneedling devices activate melanocytes near the treatment zone and can trigger post-inflammatory hyperpigmentation. Procell uses mechanical channels only, with no thermal component, and the depth of each pass is set region by region.',
      },
      {
        question: 'Can microchanneling remove marks left by another treatment?',
        answer:
          'It can improve them, because the growth factor serum drives collagen synthesis and the renewed turnover brings pigment up and out. How much depends on how deep the pigment sits and how long it has been there, which is established at consultation before the first session.',
      },
      {
        question: 'How many treatments will I need?',
        answer:
          'A series of three is the usual plan, spaced four to six weeks apart. Depth and the number of passes are set per session based on how the skin responded last time, so the second appointment is informed by the first.',
      },
    ],
  },
};
