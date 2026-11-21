import type { ServiceAreaContent } from './service-area-types';

/**
 * Melasma treatment by city, batch B.
 *
 * Four pairs written for the combination rather than adapted from another
 * service's page: La Mesa, North Park, Pacific Beach and Point Loma.
 *
 * The clinical source is the `melasma-treatment` entry in services.ts — gentle
 * LIRA peels spaced four to six weeks apart, Procell added where texture or
 * scarring is part of the picture, a HydraFacial with a brightening booster
 * between corrective sessions, and daily broad-spectrum SPF with iron oxides
 * holding the result. The geography comes from the area shells, and every
 * page makes the case for the drive rather than implying the treatment room
 * is in the city it is written for.
 *
 * Prices are the verified ones in config/business.ts: LIRA chemical peels
 * $199 and $299, HydraFacial $259, DMK enzyme therapy $279, Procell
 * microchanneling $475, first-time consultation and treatment $249, monthly
 * membership $199.
 */
export const serviceAreaContentMelasmaB: Record<string, ServiceAreaContent> = {
  // ---------------------------------------------------------------------
  // La Mesa — inland heat, a marine layer that never arrives, and a drive
  // that is longer than it looks in the morning commute.
  // ---------------------------------------------------------------------
  'melasma-treatment:la-mesa': {
    service: 'melasma-treatment',
    area: 'la-mesa',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Melasma Treatment in La Mesa | KIAMO Skin',
    description:
      'Melasma treatment in La Mesa — gentle LIRA peels from $199, paced four to six weeks apart. Eleven miles, 20 minutes on I-8. Request an appointment.',
    h1: 'Melasma Treatment in La Mesa — Heat as Much as Sun',
    opener:
      'Melasma built on inland heat as well as sunlight, corrected with a paced series of gentle LIRA peels and held with daily SPF that contains iron oxides. Performed by Kiki, a California licensed esthetician.',
    intro:
      'La Mesa sits about ten miles inland, and ten miles is far enough to miss the marine layer that keeps the coast gray through May and June. Summer afternoons there run eight to fifteen degrees warmer than Mission Beach, and the neighbourhood falls inside the valley heat advisories the coast never gets. Mt. Helix and the Fletcher Hills ridges add clear-sky days at altitude on top of that. Heat is the part of melasma that gets overlooked, and it is a genuine trigger in its own right — it raises pigment-cell activity independently of UV, which is how a client who applies sunscreen every morning still watches the melasma deepen each summer. Most La Mesa clients arrive with melasma that began with a hormonal change and has been sustained ever since by two exposures, one of which a bottle cannot reach. The treatment is a paced series of gentle LIRA chemical peels selected for the skin tone in front of you, with daily broad-spectrum SPF that contains iron oxides holding the result. The one-room studio is at 3067 Reynard Way in Mission Hills — eleven miles and fifteen to twenty minutes west on I-8 off-peak, with free parking on site.',
    quickAnswer:
      'Melasma treatment in La Mesa is a paced series of gentle LIRA chemical peels — $199 for the Gentle Renewal and $299 for the Advanced — spaced four to six weeks apart, performed by Kiki, a California licensed esthetician with 7+ years. The one-room studio is at 3067 Reynard Way in Mission Hills, about eleven miles and fifteen to twenty minutes west of La Mesa Village on I-8, with free parking on site. La Mesa sits ten miles inland, past the marine layer, so heat as well as UV is driving the pigment — which is why the series stays conservative and is paired with daily SPF containing iron oxides.',
    authority: {
      heading: 'Why inland heat makes La Mesa melasma harder to hold',
      body:
        'Heat is the trigger most clients have not counted. Melasma is triggered by hormonal change and sustained by UV, and the usual framing puts the whole problem on sunlight — but heat raises pigment-cell activity on its own, which is why a diligent sunscreen user can still watch the pigment deepen through a La Mesa summer. Ten miles inland is enough to miss the marine layer that keeps the coast gray through May and June, and summer afternoons here run eight to fifteen degrees warmer than Mission Beach. Mt. Helix and the Fletcher Hills ridges add more clear days than the coast gets, and the stucco and concrete of the village around La Mesa Boulevard and the shopping centre at Grossmont Center reflect warmth back toward the skin. The clinical consequence is that a La Mesa client is being treated for two exposures at once, and a sunscreen addresses only one of them. So the plan addresses both: gentle LIRA peels to fade what is already there, and a home protocol that treats heat as a trigger rather than as weather. It is also why the series is placed where the recovery window can be honoured, and why Kiki performs every session personally and sets the next peel from what the last one showed.',
    },
    uniqueness: {
      heading: 'What a La Mesa melasma plan involves',
      body: 'The sequence matters more than any single appointment:',
      bullets: [
        'A first visit that classifies the Fitzpatrick type and separates melasma from post-inflammatory marks and sun damage, which are corrected in a different order',
        'A heat history in the assessment — how much of the week is spent in direct sun, and how hot the afternoons get where the client actually lives',
        'A gentle first peel, with strength raised only across the series and never inside one visit',
        'A home protocol that treats heat as a trigger, because SPF does nothing about an inland afternoon in the nineties',
        'A recovery window placed in the cooler months for anyone whose work keeps the face in the sun',
        'One practitioner across the whole course, so the plan is adjusted from the response rather than reassessed from scratch each visit',
      ],
    },
    depth: {
      heading: 'How a melasma series runs at KIAMO Skin',
      body:
        'Three steps, and the first one decides whether the other two hold. Melasma is managed rather than cured — the pigment is faded and the triggers are reduced — and a strong session on melanin-rich skin is how a client ends up with a mark worse than the one they arrived with.',
      process: [
        {
          step: 'Assess and map',
          description:
            'The first visit is a consultation with skin analysis, and the treatment happens in the same appointment rather than a separate one. Kiki classifies the Fitzpatrick type, maps where the pigment sits — cheeks, forehead, nose bridge or upper lip — and separates melasma from post-inflammatory marks and sun damage, which respond to different things. For La Mesa clients the exposure record is specific: which part of the town the drive starts from, whether the work is outdoors, and how the skin behaves on a hot afternoon. A first-time consultation and treatment is $249.',
        },
        {
          step: 'Correct in a paced series',
          description:
            'The correction is done with LIRA chemical peels — $199 for the Gentle Renewal, $299 for the Advanced — layered and timed to the skin on the day, spaced four to six weeks apart, with strength escalating across the series and never inside one visit. Where texture or scarring is part of the picture, Procell microchanneling at $475 is added, and a HydraFacial with a brightening booster at $259 sits between corrective sessions to hold the result. Where the skin arrives sensitised — tight, reactive, stinging under products it used to tolerate — DMK enzyme therapy at $279 comes first, because pigment correction on a compromised barrier produces unpredictable results.',
        },
        {
          step: 'Hold the result',
          description:
            'The peel fades the pigment; the daily SPF holds it. Broad-spectrum sunscreen with iron oxides every morning, including on the clear days the coast does not get, plus a pigment-calming serum chosen for what the skin showed. On top of that, heat gets managed deliberately: the series placed in the cooler months for anyone working outdoors, the car kept cool, the walk scheduled for the morning rather than the middle of the afternoon. Melasma is driven by hormones and sustained by UV and heat, so clearing it and stopping the trigger are two separate jobs, and here the second one is the harder half.',
        },
      ],
    },
    intent: {
      heading: 'Who books melasma treatment from La Mesa',
      body:
        'The most common La Mesa client is in their thirties or forties, and their melasma started with a pregnancy, a change in contraception or the onset of menopause. They are diligent about sunscreen and it has not been enough, because the afternoon heat at ninety degrees is doing work that the bottle was never built to do. The second common client already has post-inflammatory marks from a peel taken elsewhere at a strength the skin tone could not carry, and those marks are darker than the original melasma. The third is someone who works outdoors — construction, landscaping, delivery driving, coaching — and needs the series placed around the working year rather than through it. All of them need the same first answer: how many sessions, at what interval, and what has to happen at home between them. Kiki gives that number at the first visit and dates the series before the client leaves, because an eleven-mile drive across Mission Valley in the dark of the morning commute is a different proposition from the same drive at midday, and a plan that fails on the drive is a plan that fails.',
    },
    faqs: [
      {
        question: 'Why is melasma worse in La Mesa than on the coast, when they are ten miles apart?',
        answer:
          'Because the marine layer is the difference. La Mesa sits far enough inland to miss the cloud cover that keeps the coast gray through May and June, and its summer afternoons run eight to fifteen degrees warmer than Mission Beach. Heat raises pigment-cell activity independently of UV, so a client can be rigorous about sunscreen and still watch the pigment deepen. The coast gets a different shape of exposure, not a safer one. The assessment maps both, which is why heat is treated as a trigger here rather than as weather.',
      },
      {
        question: 'How long is the drive from La Mesa Village, and is the trolley realistic for a peel series?',
        answer:
          'About eleven miles and fifteen to twenty minutes west on I-8 off-peak, exiting at Taylor Street or Hotel Circle, with free parking on site. The MTS Orange Line runs from the Spring Street stop to downtown in about half an hour, but the studio is then another ten to twelve minutes by rideshare, so the journey lands nearer forty-five minutes each way. The trolley avoids the westbound morning congestion, which makes it a sensible way to reach a monthly appointment. For the peel series itself, driving is the more reliable option.',
      },
      {
        question: 'I work outdoors in La Mesa most of the year — when should I schedule peels?',
        answer:
          'In the cooler months, and the reason is the recovery window rather than preference. A peel leaves the skin more reactive to sun for a week or more afterwards, and that window needs no direct exposure. Clients whose work keeps them outside are usually scheduled between October and March, when the days are shorter and the UV index is lower. Where the exposure cannot be avoided, the first step is a HydraFacial at $259 or DMK enzyme therapy at $279 rather than a peel, since neither causes photosensitivity and both can be done year-round.',
      },
      {
        question: 'How much does melasma treatment cost, and how many sessions will it take?',
        answer:
          'A first-time consultation and treatment is $249, with the assessment and the first peel in the same visit. After that, LIRA chemical peels are $199 for the Gentle Renewal and $299 for the Advanced. Most clients see visible change across three to four sessions spaced four to six weeks apart, with the fuller result across six to eight. Because every visit crosses Mission Valley twice, a monthly membership at $199 is often the cheaper way to stay on schedule, and membership treatments can be applied toward peels or HydraFacials.',
      },
      {
        question: 'What happens if a peel elsewhere left me darker than before I started?',
        answer:
          'That is post-inflammatory hyperpigmentation, and it changes the plan rather than ending it. A peel taken too deep, or taken too close together, drives inflammation that the skin answers with more pigment — often darker and more persistent than the melasma it was meant to clear. The first visit maps the two layers separately: what is melasma, and what is the mark left behind. Correcting them at the same time and the same strength is how a second mark happens. So the first peel here starts gently, and the home protocol covers the recovery window.',
      },
    ],
    primaryKeyword: 'melasma treatment La Mesa',
  },

  // ---------------------------------------------------------------------
  // North Park — the shortest drive of the four, and the neighbourhood where
  // proximity is the thing that decides whether a series gets finished.
  // ---------------------------------------------------------------------
  'melasma-treatment:north-park': {
    service: 'melasma-treatment',
    area: 'north-park',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Melasma Treatment in North Park | KIAMO Skin',
    description:
      'Melasma treatment in North Park — gentle LIRA peels from $199, four to six weeks apart. 3.5 miles, 10 minutes, surface streets only. Request a visit.',
    h1: 'Melasma Treatment in North Park — A Series That Gets Finished',
    opener:
      'A melasma plan completed in three or four visits instead of abandoned after the second, which is what a ten-minute drive allows. Performed by Kiki, a California licensed esthetician.',
    intro:
      'North Park is three and a half miles from the studio, and that distance is the most useful fact on this page. A melasma plan runs three to four sessions spaced four to six weeks apart, and the clients who finish it are almost always the ones for whom a visit costs ten minutes rather than an afternoon. The route is surface streets only — University Avenue west from 30th, then Washington Street, then Reynard Way — with no freeway merge anywhere, which is true of no other area this studio serves. The neighbourhood is dense, walkable and younger than most of the county, with the restaurant and brewery strip along 30th Street drawing people out of doors on summer evenings and a genuinely diverse population where melanin-rich skin is well represented. For melasma that combination changes the picture twice over: the hormonal trigger is common in a client base of this age, and the outdoor exposure is social rather than occupational, which makes it the hardest kind to schedule around. The treatment is a paced series of gentle LIRA chemical peels selected for the skin tone in front of you, with daily broad-spectrum SPF that contains iron oxides holding the result. The one-room studio is at 3067 Reynard Way in Mission Hills, with free parking on site.',
    quickAnswer:
      'Melasma treatment in North Park is a paced series of gentle LIRA chemical peels — $199 for the Gentle Renewal and $299 for the Advanced — spaced four to six weeks apart, performed by Kiki, a California licensed esthetician with 7+ years. The one-room studio is at 3067 Reynard Way in Mission Hills, three and a half miles and about ten minutes west of 30th and University on surface streets only, with free parking on site. Because the drive is ten minutes rather than half an hour, a client can actually complete the three or four sessions the plan needs instead of stopping after the second.',
    authority: {
      heading: 'Why the ten-minute drive is the clinical variable',
      body:
        'Proximity is not a convenience here; it is the thing that decides whether the correction happens. A melasma series is three to four sessions over two to three months, and each session depends on the last one — the strength of the second peel is set by what the first showed, and the barrier has to have recovered in between. When a visit costs ten minutes, the appointments get made and the interval is not the thing that breaks. When a visit costs half an hour each way, the series tends to stop at the second appointment and the client is left with a partly-corrected face and a plan that never got tested. North Park is also the only area served where the route involves no freeway on-ramp at all, which matters for anyone who would rather not do the 5 and 163 twice in a day. The clinical reason to be careful is unchanged by any of this. Melanin-rich skin answers trauma with more pigment, and a peel taken too deep produces post-inflammatory hyperpigmentation that is darker and more persistent than the melasma it was meant to clear. Kiki has seven-plus years working with that skin and keeps the pacing conservative, so the short drive buys a plan that is both completable and correctly paced.',
    },
    uniqueness: {
      heading: 'What a North Park melasma plan involves',
      body: 'The sequence matters more than any single appointment:',
      bullets: [
        'A first visit that classifies the Fitzpatrick type and separates melasma from post-inflammatory marks and sun damage, which are corrected in a different order',
        'A hormonal history taken seriously, because for a younger client a change in contraception or a pregnancy is often the trigger rather than decades of sun',
        'A gentle first peel, with strength raised only across the series and never inside one visit',
        'Appointments placed around the 30th Street dinner hours rather than against them, so the series survives a social calendar',
        'A recovery window arranged so the walk home does not undo the session, since a peel followed by direct sun on the pavement is a wasted visit',
        'One practitioner across the whole course, so the next peel is set from what the last one showed',
      ],
    },
    depth: {
      heading: 'How a melasma series runs at KIAMO Skin',
      body:
        'Three steps, and the first one decides whether the other two hold. Melasma is managed rather than cured — the pigment is faded and the triggers are reduced — and on melanin-rich skin that sequence is not optional, because skipping the pacing is what produces a mark worse than the original.',
      process: [
        {
          step: 'Assess and map',
          description:
            'The first visit is a consultation with skin analysis, and the treatment happens in the same appointment rather than a separate one. Kiki classifies the Fitzpatrick type, maps where the pigment sits — cheeks, forehead, nose bridge or upper lip — and separates melasma from post-inflammatory marks and sun damage, which respond to different things. For North Park clients the history is where the useful detail lives: the hormonal change that started it, the summers spent on the 30th Street patios and in Golden Hill, and whether anyone has already treated the skin with something strong. A first-time consultation and treatment is $249.',
        },
        {
          step: 'Correct in a paced series',
          description:
            'The correction is done with LIRA chemical peels — $199 for the Gentle Renewal, $299 for the Advanced — layered and timed to the skin on the day, spaced four to six weeks apart, with strength escalating across the series and never inside one visit. Where texture or scarring is part of the picture, Procell microchanneling at $475 is added, and a HydraFacial with a brightening booster at $259 sits between corrective sessions to hold the result. Where the skin arrives sensitised, DMK enzyme therapy at $279 comes first, because pigment correction on a compromised barrier produces results nobody can predict.',
        },
        {
          step: 'Hold the result',
          description:
            'The peel fades the pigment; the daily SPF holds it. Broad-spectrum sunscreen with iron oxides every morning, plus a pigment-calming serum chosen for what the skin showed. On top of that, the recovery window is treated as part of the treatment rather than as time lost to it: an appointment that ends before the walk home is a better choice here than one that puts the walk in the middle of the day, and the reapplication schedule is written for a day spent walking rather than sitting in an office. Melasma is driven by hormones and sustained by UV and heat, so clearing it and stopping the trigger are two separate jobs.',
        },
      ],
    },
    intent: {
      heading: 'Who books melasma treatment from North Park',
      body:
        'The North Park client is usually in their twenties, thirties or forties, working in the creative, hospitality and technology economy that runs along 30th Street, and the melasma almost always has a hormonal date on it. A change in contraception, a pregnancy, the start of menopause, and occasionally a stress-driven cycle that no one can name precisely. Many have already tried over-the-counter products, some have tried a peel at a med spa that left them with a mark darker than the one they came in with, and a good number have simply been told to be patient for years. What they want is a plan, stated plainly, that fits a working week and does not require an afternoon off every six weeks. The second group is the one that has been through a series somewhere else and needs it finished properly — someone else set the strength, the barrier is reactive, and the pigment is mixed with post-inflammatory marks that have to be separated out before the melasma work resumes. Kiki runs every session personally and dates the series at the first visit, because the ten-minute drive is the best thing this neighbourhood has going for a treatment that only works when it is finished.',
    },
    faqs: [
      {
        question: 'Does living ten minutes away actually change how a melasma series goes?',
        answer:
          'It changes whether the series happens at all, which is the part that matters. A peel course runs three to four sessions spaced four to six weeks apart, and each session is set by what the previous one showed. When a visit costs ten minutes, the appointments get made and the interval stops being the reason a course stops. There is a second effect, smaller but real: at ten minutes, a client can sit in the room for the whole appointment rather than watching the clock.',
      },
      {
        question: 'Can I walk or take the bus to the studio after a peel?',
        answer:
          'You can walk it, with one caveat. The route from 30th and University is University Avenue west to Washington Street and then Reynard Way, about three and a half miles, or sixty-five to seventy-five minutes on foot. The Route 7 bus covers the same ground in about twenty minutes. The caveat is the recovery window: a peel leaves the skin more reactive to sun, and a walk home in direct midday sun spends the first hour of that window in the one place it should not be.',
      },
      {
        question: 'Is melasma safe to treat in melanin-rich skin, and what goes wrong when it is not?',
        answer:
          'It is safe when the peel is selected for the tone and the pacing is right. The failure mode is not that peels cannot work on brown skin — it is that a peel chosen too strongly produces post-inflammatory hyperpigmentation. The skin answers trauma with more pigment, so on Fitzpatrick IV through VI the new mark is often darker and more persistent than the melasma it was meant to remove, and the client ends up further from the goal than when they started. The LIRA range is built around that control.',
      },
      {
        question: 'How much does melasma treatment cost, and how many sessions will it take?',
        answer:
          'A first-time consultation and treatment is $249, with the assessment and the first peel in the same visit. After that, LIRA chemical peels are $199 for the Gentle Renewal and $299 for the Advanced. Most clients see visible change across three to four sessions spaced four to six weeks apart, with the fuller result across six to eight. Because the series is the point, a monthly membership at $199 is often the cheaper way to stay on schedule, and membership treatments can be applied toward peels or HydraFacials.',
      },
      {
        question: 'Is my melasma caused by hormones or by the sun?',
        answer:
          'Usually both, and the first visit is where that gets worked out. Melasma is triggered by hormonal change and sustained by UV and heat, so the two are rarely exclusive. In North Park the hormonal trigger is often the more visible one — a change in contraception, a pregnancy, or the onset of menopause — and it usually dates the appearance of the pigment to a specific year. The sun and heat then keep it switched on: the 30th Street patios, the walk to Balboa Park, the hours on a terrace.',
      },
    ],
    primaryKeyword: 'melasma treatment North Park',
  },

  // ---------------------------------------------------------------------
  // Pacific Beach — daily outdoor life, marine layer mornings that pass UVA
  // through, and a client who is not going to stop going to the water.
  // ---------------------------------------------------------------------
  'melasma-treatment:pacific-beach': {
    service: 'melasma-treatment',
    area: 'pacific-beach',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Melasma Treatment in Pacific Beach | KIAMO Skin',
    description:
      'Melasma treatment in Pacific Beach — gentle LIRA peels from $199 for year-round UV and salt exposure. 7 miles, 15 minutes. Request an appointment.',
    h1: 'Melasma Treatment in Pacific Beach — Damage Without a Visible Burn',
    opener:
      'Melasma built by year-round open air, corrected with gentle LIRA peels spaced four to six weeks apart and held with daily SPF containing iron oxides. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Pacific Beach lives outdoors, and that is what separates this page from the others. The boardwalk runs more than three miles from Law Street down to Mission Bay, Crystal Pier anchors the ocean end, Tourmaline Surf Park takes waves at the north end, and Sail Bay and Crown Point fill with paddleboarders and kayakers on any dry afternoon. The exposure is not seasonal and not an occasional weekend; it is a daily habit in a place where the marine layer sits over the coast through May and June and burns off by early afternoon without ever lowering the UV underneath it. UVA passes through cloud, which is exactly what gets skipped when the sky looks grey. Salt water and wind then strip the barrier on the same mornings the UV is quietly accumulating, so what arrives at the studio is uneven tone across the cheeks and forehead, texture no product has moved, and skin that reacts to what it used to tolerate. The treatment is a paced series of gentle LIRA chemical peels selected for the skin tone in front of you, with daily broad-spectrum SPF that contains iron oxides holding the result. The one-room studio is at 3067 Reynard Way in Mission Hills, seven miles and about fifteen minutes east via Garnet Avenue and I-5, with free parking on site.',
    quickAnswer:
      'Melasma treatment in Pacific Beach is a paced series of gentle LIRA chemical peels — $199 for the Gentle Renewal and $299 for the Advanced — spaced four to six weeks apart, performed by Kiki, a California licensed esthetician with 7+ years. The one-room studio is at 3067 Reynard Way in Mission Hills, seven miles and about fifteen minutes east of Crystal Pier via Garnet Avenue and I-5, with free parking on site. Pacific Beach exposure is daily and year-round rather than seasonal, and the marine layer passes UVA through on overcast mornings, so the plan pairs gentle peels with daily SPF containing iron oxides and a recovery window that respects the surf and beach calendar.',
    authority: {
      heading: 'Why Pacific Beach pigment arrives without a visible burn',
      body:
        'The exposure here is continuous, and that is the reason the pigment arrives in a shape the coast does not always produce. Crystal Pier, Tourmaline Surf Park, the Sail Bay launch and the Crown Point stretch all see daily use regardless of season, and every one of those hours is a dose. The marine layer is the part that misleads: it sits over the coast from May into June, makes the morning look safe, and passes UVA through the whole time. UVA is the wavelength that drives pigmentation and collagen breakdown, and it is the one people leave home for. Then salt spray and wind work on the barrier during the same hours, and a compromised barrier holds pigment longer than an intact one. The consequence is a face that never looked sunburned and never had a bad weekend, and still carries pigment and texture that no product has moved. The answer is the same as anywhere else — a gentle first peel, strength raised only as the barrier allows across the series, daily sunscreen with iron oxides — except that the plan here is built around a client who is not going to stop going to the water, so the recovery window is negotiated rather than assumed.',
    },
    uniqueness: {
      heading: 'What a Pacific Beach melasma plan involves',
      body: 'The sequence matters more than any single appointment:',
      bullets: [
        'A first visit that maps the pigment and separates melasma from post-inflammatory marks and sun damage, which respond differently',
        'A read on year-round exposure — surf sessions, paddleboarding, running the boardwalk, beach volleyball — rather than on a single beach day',
        'A barrier check before the first peel, because salt water and wind leave the skin sensitised long before the pigment shows',
        'A gentle first peel, with strength raised only across the series and never inside one visit',
        'Recovery windows placed around the water instead of against it, with the tide and the season both in view',
        'A plan for the sunscreen itself, because daily mineral sunscreen leaves a film on the skin that has to be cleared',
      ],
    },
    depth: {
      heading: 'How a melasma series runs at KIAMO Skin',
      body:
        'Three steps, and the first one decides whether the other two hold. Melasma is managed rather than cured — the pigment is faded and the triggers are reduced — and the triggers for a Pacific Beach client do not stop because the series ended, which is why the home protocol is written to keep running afterwards.',
      process: [
        {
          step: 'Assess and map',
          description:
            'The first visit is a consultation with skin analysis, and the treatment happens in the same appointment rather than a separate one. Kiki classifies the Fitzpatrick type, maps where the pigment sits — cheeks, forehead, nose bridge or upper lip — and separates melasma from post-inflammatory marks and sun damage, which respond to different things. For Pacific Beach clients the exposure record is the useful part: how many mornings in the water, whether the sport is a swim or a surf, and what the skin does by the afternoon after a session. A first-time consultation and treatment is $249.',
        },
        {
          step: 'Correct in a paced series',
          description:
            'The correction is done with LIRA chemical peels — $199 for the Gentle Renewal, $299 for the Advanced — layered and timed to the skin on the day, spaced four to six weeks apart, with strength escalating across the series and never inside one visit. Where texture or scarring is part of the picture, Procell microchanneling at $475 is added, and a HydraFacial with a brightening booster at $259 sits between corrective sessions to hold the result. Where the salt has left the barrier tight and reactive, DMK enzyme therapy at $279 comes first, because pigment correction on a compromised barrier produces results nobody can predict.',
        },
        {
          step: 'Hold the result',
          description:
            'The peel fades the pigment; the daily SPF holds it. Broad-spectrum sunscreen with iron oxides every morning, applied on the grey marine layer mornings that look safe and reapplied through a day spent on the sand, plus a pigment-calming serum chosen for what the skin showed. The water is managed rather than forbidden: a barrier cream before entering, a rinse that does not leave the skin raw afterwards, and the recognition that the session and the swim do not share a day. Melasma is driven by hormones and sustained by UV and heat, so clearing it and stopping the trigger are two separate jobs.',
        },
      ],
    },
    intent: {
      heading: 'Who books melasma treatment from Pacific Beach',
      body:
        'The first Pacific Beach client is someone whose whole year is outdoors. A surfer at Tourmaline, a paddler on Sail Bay, a runner covering the boardwalk from Law Street to Mission Bay, a beach volleyball regular at the north end — the exposure is not a season, it is a habit, and it keeps the pigment active between the visits as well as during them. Those clients need a plan that assumes the lifestyle continues, which means recovery windows placed around the water and a series timed for the months when the surf and the sun cooperate least. The second group is the client whose melasma arrived with a hormonal change and who lives a life with no fixed indoor hours — a bartender, a server, a teacher whose break is the only flexible part of the day. The third is the client with post-inflammatory marks from a strong peel elsewhere, arriving with a face marked twice and needing the two layers separated before the original work resumes. All of them need the same thing spelled out at the first visit: how many sessions, at what interval, and what has to happen at home between them.',
    },
    faqs: [
      {
        question: 'Does the May Gray and June Gloom marine layer protect my skin from UV?',
        answer:
          'No, and this is the single most common misunderstanding among Pacific Beach clients. The marine layer sits over the coast from May into June and makes the morning look safe, and UVA passes through it more or less intact. UVA is the wavelength that drives pigmentation and collagen breakdown, which is precisely why people skip protection on a grey morning and are still carrying the dose by autumn. The layer also tempts a second mistake — that the cool overcast weather means the day is over — when the sun comes back by early afternoon.',
      },
      {
        question: 'Can I keep surfing and swimming between peels?',
        answer:
          'Between peels, yes, and the plan is built around that rather than against it. The restriction applies in the days either side of a peel, where the skin is sensitised and salt water would strip a barrier that is already recovering; how long that window runs depends on the depth of the peel on the day. Most clients plan around the tide rather than against it — an early session, then the treatment later in the same week, so the water and the peel never share a day. A barrier cream before entering the water helps.',
      },
      {
        question: 'Does salt water and daily mineral sunscreen change the treatment plan?',
        answer:
          'They change it in two ways. The first is the barrier: salt and wind strip the lipids that hold it together, and sensitised skin holds pigment for longer than intact skin, so a client whose skin stings under a product it once tolerated gets a barrier assessment before the first peel rather than a peel on the day. DMK enzyme therapy at $279 comes first in that case. The second is the film: daily mineral sunscreen leaves a layer on the skin that has to be cleared properly.',
      },
      {
        question: 'How much does melasma treatment cost, and how many sessions will it take?',
        answer:
          'A first-time consultation and treatment is $249, with the assessment and the first peel in the same visit. After that, LIRA chemical peels are $199 for the Gentle Renewal and $299 for the Advanced. Most clients see visible change across three to four sessions spaced four to six weeks apart, with the fuller result across six to eight. Because the series is the point, a monthly membership at $199 is often the cheaper way to stay on schedule, and membership treatments can be applied toward peels or HydraFacials.',
      },
      {
        question: 'Why does my face get darker every summer even though I reapply sunscreen all day?',
        answer:
          'Two reasons, and they are stacked. The first is the dose: a day on the boardwalk or in the water is hours of exposure, and reapplication every ninety minutes only works if the product does two jobs — visible light is an independent trigger for pigment, and only the iron oxides in a tinted mineral formula block it. The second is heat, which raises pigment-cell activity independently of UV and is not addressed by sunscreen at all. A client diligent about the bottle who still darkens every summer has a heat component they have not counted.',
      },
    ],
    primaryKeyword: 'melasma treatment Pacific Beach',
  },

  // ---------------------------------------------------------------------
  // Point Loma — a peninsula with water on both sides, a barrier that has to
  // be rebuilt first, and pigment that has had years to settle.
  // ---------------------------------------------------------------------
  'melasma-treatment:point-loma': {
    service: 'melasma-treatment',
    area: 'point-loma',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Melasma Treatment in Point Loma | KIAMO Skin',
    description:
      'Melasma treatment in Point Loma — barrier first, then gentle LIRA peels from $199. 12 miles, 12 minutes on Rosecrans. Request an appointment.',
    h1: 'Melasma Treatment in Point Loma — Rebuild Before You Correct',
    opener:
      'A barrier rebuilt before the pigment is touched, then gentle LIRA peels spaced four to six weeks apart. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Point Loma is a peninsula with water on both sides, and the skin there pays for it in a way inland neighbourhoods never do. The Pacific side brings salt spray and a wind that comes straight off the water; the bay side brings reflected UV off the surface at midday; and the two together strip the lipids that hold the barrier together. The result is skin that has been buffeted for years and now reacts to a product it once tolerated without complaint. The peninsula also has a long institutional history — Naval Base Point Loma, Fort Rosecrans National Cemetery, the university at the west end, Liberty Station along the Rosecrans corridor — so a good share of residents have worked outdoors on these headlands for decades rather than spending a weekend on the sand. That distinction matters for melasma specifically: pigment that has been present for years tends to sit deeper, and deep pigment answers to a different plan than surface pigment. The treatment is a paced series of gentle LIRA chemical peels selected for the skin tone in front of you, preceded by barrier work where the salt air has left the skin compromised, with daily broad-spectrum SPF that contains iron oxides holding the result. The one-room studio is at 3067 Reynard Way in Mission Hills, about twelve miles and twelve minutes east on Rosecrans Street, with free parking on site.',
    quickAnswer:
      'Melasma treatment in Point Loma is a paced series of gentle LIRA chemical peels — $199 for the Gentle Renewal and $299 for the Advanced — spaced four to six weeks apart, performed by Kiki, a California licensed esthetician with 7+ years. The one-room studio is at 3067 Reynard Way in Mission Hills, about twelve miles and twelve minutes east of the peninsula on Rosecrans Street, with free parking on site. Because the peninsula has ocean on one side and bay on the other, the plan usually rebuilds the barrier before the first peel and adds Procell microchanneling at $475 where years-old pigment has settled deeper than a peel reaches.',
    authority: {
      heading: 'Why the barrier has to be rebuilt before the pigment is touched',
      body:
        'On most of the peninsula the barrier is the first problem, not the pigment. Salt air from the Pacific and from the bay, and the wind that comes off both, remove the lipids that hold the barrier together, and skin that has been buffeted for years is skin that reacts to what it used to tolerate. Peel on that kind of skin and the inflammation produces more pigment, which is how a client can arrive at the second appointment darker than at the first. So DMK enzyme therapy at $279 comes before the first peel for a Point Loma client whose skin is tight, reactive and slow to settle. The second reason to work carefully here is duration. The peninsula has a long-standing institutional presence — Naval Base Point Loma, the university, the cemetery, and the older neighbourhoods along Rosecrans and Voltaire — so much of the pigment arriving here is not new. It has had years to settle, and pigment that has moved into the deeper layers is the reason Procell microchanneling at $475 is added to some plans alongside the peels.',
    },
    uniqueness: {
      heading: 'What a Point Loma melasma plan involves',
      body: 'The sequence matters more than any single appointment:',
      bullets: [
        'A first visit that separates melasma from post-inflammatory marks and sun damage, and reads how deep the pigment actually sits',
        'A barrier assessment before any peel, because salt air and wind strip the lipids that hold the barrier together',
        'DMK enzyme therapy at $279 first where the skin is tight, reactive and slow to settle',
        'A gentle first peel, with strength raised only across the series and never inside one visit',
        'Procell microchanneling at $475 where the pigment has been present for years and has moved deeper than a peel reaches',
        'One practitioner across the whole course, so the next peel is set from what the last one showed',
      ],
    },
    depth: {
      heading: 'How a melasma series runs at KIAMO Skin',
      body:
        'Three steps, and on this peninsula the order matters more than usual: the barrier is put back before the pigment is corrected, because pigment work on a compromised barrier produces results nobody can predict. Melasma is managed rather than cured, and on skin that marks easily the difference between a sensible order and an ambitious one is the difference between a fade and a new mark.',
      process: [
        {
          step: 'Assess and map',
          description:
            'The first visit is a consultation with skin analysis, and the treatment happens in the same appointment rather than a separate one. Kiki classifies the Fitzpatrick type, maps where the pigment sits — cheeks, forehead, nose bridge or upper lip — and separates melasma from post-inflammatory marks and sun damage, which respond to different things. For Point Loma clients two questions carry more weight than usual: how long the pigment has been there, because years-old pigment behaves differently from recent pigment, and how the skin behaves against salt and wind, because that is what decides whether the plan starts with the barrier or with the peel. A first-time consultation and treatment is $249.',
        },
        {
          step: 'Correct in a paced series',
          description:
            'The correction is done with LIRA chemical peels — $199 for the Gentle Renewal, $299 for the Advanced — layered and timed to the skin on the day, spaced four to six weeks apart, with strength escalating across the series and never inside one visit. Where the pigment is deep, Procell microchanneling at $475 is added alongside the peels rather than afterwards. A HydraFacial with a brightening booster at $259 sits between corrective sessions to hold the result. Where the barrier is compromised, DMK enzyme therapy at $279 runs first, because the peel that follows has to be applied to skin that can carry it.',
        },
        {
          step: 'Hold the result',
          description:
            'The peel fades the pigment; the daily SPF holds it. Broad-spectrum sunscreen with iron oxides every morning, plus a pigment-calming serum chosen for what the skin showed. On a peninsula with water on both sides, the barrier is managed on purpose as well: a barrier cream before the water, wind protection on the exposed side of the head, and the recognition that the skin has to keep functioning between appointments. Melasma is driven by hormones and sustained by UV and heat, and for a client whose exposure runs all year, clearing it and stopping the trigger are two separate jobs.',
        },
      ],
    },
    intent: {
      heading: 'Who books melasma treatment from Point Loma',
      body:
        'There are two distinct clients on this peninsula and they need different things. The first lives with the maritime exposure — Ocean Beach, Sunset Cliffs, Shelter Island, Harbor Island, the Rosecrans corridor — and their skin arrives tight, reactive and short of water, with pigment that has been building for years on top of a barrier that wind and salt have been dismantling the whole time. Their first appointment is usually barrier work, and the peel series follows once the skin can carry it. The second client has pigment with a specific date on it that is not a date of origin: a pregnancy, a change in contraception, menopause, or a decade of standing outdoor work on the headlands. Their pigment is entrenched rather than recent, which is where Procell microchanneling earns its place in the plan. Both groups are asking the same question underneath — can this be managed without making it worse — and the answer is a plan that is paced, conservative from the first session, and run by the same person from the first appointment to the last.',
    },
    faqs: [
      {
        question: 'Why does the wind on the peninsula matter as much as the sun?',
        answer:
          'Because wind is a barrier problem, and pigment sits worse in a barrier that is not working. Salt air from the Pacific and the bay draws moisture out of the stratum corneum, and the wind between them strips the lipids that hold the barrier together. Skin buffeted for years stops tolerating what it once tolerated — tightness, reactivity, flaking that no moisturiser holds. A peel on that skin produces inflammation the skin answers with more pigment, so a client can leave darker than they arrived for the first. That is why the barrier is rebuilt first.',
      },
      {
        question: 'Is the drive from Ocean Beach or Sunset Cliffs worth it for a peel series?',
        answer:
          'About twelve miles and roughly twelve minutes east on Rosecrans Street to Washington Street, so the drive is not the obstacle — the calendar is. A peel course needs three or four sessions over two to three months, and each one needs a recovery window without direct sun and salt, which takes arranging rather than driving. From the Pacific side the route runs east on Voltaire Street to the Rosecrans corridor and then straight in. Call or text (310) 595-0872 and the series is dated as a block at the first visit.',
      },
      {
        question: 'My melasma has been there for years — why might the plan include Procell microchanneling?',
        answer:
          'Because pigment that has had years to settle does not stay where it started. Melasma begins in the surface layers, and over a long stretch it moves deeper, where a peel has less reach. LIRA chemical peels still help — they lift what is in the upper layers and reset the surface — but on their own they cannot clear pigment that has been there for a decade. Procell microchanneling at $475 works at a different depth, and it is added alongside the peels when the map shows pigment in both places.',
      },
      {
        question: 'Does the salt air mean the barrier has to be repaired before any peel?',
        answer:
          'Often, yes. When the skin arrives tight, reactive to products it once tolerated, flaking despite hydration or pink for hours after a windy afternoon on the water, the plan starts with DMK enzyme therapy at $279 rather than a peel. That treatment works with the skin\'s plasmatic system rather than exfoliating the surface, and it rebuilds the lipid barrier so that the peel which follows lands on skin that can carry it. The barrier work comes with a prescribed home protocol, and it decides whether the series progresses cleanly or stalls.',
      },
      {
        question: 'How much does melasma treatment cost, and how many sessions will it take?',
        answer:
          'A first-time consultation and treatment is $249, with the assessment and the first treatment in the same visit. After that, LIRA chemical peels are $199 for the Gentle Renewal and $299 for the Advanced, and Procell microchanneling is $475 per session or $1,199 for a series of three. Most clients see visible change across three to four peels spaced four to six weeks apart, with the fuller result across six to eight. A monthly membership at $199 is often the cheaper way to stay on schedule.',
      },
    ],
    primaryKeyword: 'melasma treatment Point Loma',
  },
};
