/**
 * The nine areas KIAMO serves, and the pages that target them.
 *
 * There is ONE studio, in Mission Hills. The other eight are places clients
 * travel from — never locations. Del Mar especially: a previous studio there is
 * closed, and the guard suite fails the build if the words studio, location,
 * located or "visit us" appear within 40 characters of "Del Mar", in either
 * direction. The del-mar copy below is worded to keep that distance.
 *
 * Copy is deliberately unique per area. Near-identical schema across nine pages
 * is legitimate; near-identical body copy is thin content. The test: swap the
 * place name for another and if the page still reads as true, it has no reason
 * to exist. Drive times and local claims were verified, not estimated.
 */

export interface Area {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  /** Opens by restating the query — the capsule an AI engine lifts. */
  intro: string;
  gettingHere: string;
  localConcern: { heading: string; body: string };
  /**
   * Local transactional keywords to weave into H2s, service descriptions, and body copy.
   * Based on DataForSEO research for each area.
   */
  keywordContext?: {
    /** Primary transactional keyword for H2 treatment section (e.g., "HydraFacial in La Jolla") */
    primaryKeyword: string;
    /** Treatment+location phrases to weave into service descriptions and body */
    treatmentPhrases: string[];
    /** Neighborhood names to mention in allAbout and gettingHere sections */
    neighborhoodMentions: string[];
  };
  /**
   * One sentence linking to /melanin-rich-skin, rendered under localConcern. Set
   * only where the area's own concern is genuinely a melanin-rich-skin one, so
   * the link stays editorial rather than becoming sitewide boilerplate.
   */
  melaninNote?: string;
  /** One sentence for the Service schema node. */
  schemaDescription: string;
  /**
   * The hyperlocal band. `body` is the place itself — geography, character, how
   * people live there — where `localConcern` is the skin problem. Both draw on
   * the same verified facts; neither invents one.
   *
   * `facts` is always three rows, same three labels across all nine areas, so
   * the section reads as one system rather than nine one-offs. Every value
   * restates something already stated elsewhere on the same page.
   *
   * Note the label is "To Mission Hills", never "the studio": on the Del Mar
   * page the guard suite fails the build when studio, location, located or
   * "visit us" lands within 40 characters of "Del Mar".
   */
  allAbout: {
    body: string;
    facts: { label: string; value: string }[];
  };
  /**
   * Distance and drive time to the studio, condensed from `gettingHere` for the
   * homepage proximity list. Off-peak, and every figure is already stated on the
   * area page — this field restates, it never introduces a new claim.
   */
  proximity: string;
  /**
   * One sentence stating starting prices for the treatments most booked from this
   * area. Answers the Money Page MUST "what will it cost" without committing to a
   * full menu. Every price restates a value already in `verifiedPrices` — never
   * introduces a new one. Rendered above the featured treatments list.
   */
  pricingNote: string;
  /** Exactly three treatment slugs, most relevant to this area's concern. */
  featured: string[];
  /**
   * Short concern-specific label for the cross-area link on other pages.
   * Replaces the generic "Facials in {name}" pattern. Each one names the
   * specific reason clients travel from that area (the actual differentiator).
   */
  crossLinkLabel: string;
}

export const areas: Area[] = [
  {
    slug: 'mission-hills',
    name: 'Mission Hills',
    title: 'HydraFacial & Corrective Facials, Mission Hills | KIAMO',
    description:
      'Corrective facials, HydraFacial and DMK enzyme therapy at the KIAMO SKIN studio on Reynard Way in Mission Hills, San Diego. One-room, one esthetician, free parking on site. From $199.',
    h1: 'HydraFacial & Enzyme Therapy in Mission Hills, San Diego',
    intro:
      'Looking for a corrective facial in Mission Hills? KIAMO SKIN is the studio — a single treatment room at 3067 Reynard Way, a few minutes from Hillcrest, Bankers Hill, Middletown and Old Town. Every appointment is one-to-one with Kiki, a licensed esthetician. Parking is free on site, and the studio runs by appointment only.',
    gettingHere:
      'From the 5th Avenue and University intersection in Hillcrest, head west on Washington Street to Reynard Way — about five minutes, no freeway. From Bankers Hill near Balboa Park, Washington Street west runs directly there. From Old Town, head east on Washington Street from the transit center; Reynard Way is the first left past the I-5 overpass. From I-5, take the Washington Street exit and turn east. From I-8 or SR-163, come west along Washington Street.',
    localConcern: {
      heading: 'What does corrective skin work actually require?',
      body: 'Most facial treatments are single-visit: one outcome, one session, done. Corrective work is different because the skin problem does not resolve in one appointment — it is managed across a series, and what the next visit looks like depends on how the skin responded to the last one. A peel series, a Procell microchanneling course, a Keravive scalp treatment — all are built on intervals with a plan that adjusts. That is why the studio has one treatment room and no rotating roster. The same licensed esthetician assesses the skin, performs the treatment and adjusts the plan next time. For Mission Hills clients, proximity makes that continuity practical: most of the neighborhood is inside a five-minute drive, and a ten-minute round trip is a different commitment than an afternoon in traffic.',
    },
    keywordContext: {
      primaryKeyword: 'corrective facials in San Diego',
      treatmentPhrases: [
        'HydraFacial in San Diego',
        'DMK enzyme therapy San Diego',
        'corrective skin treatments Mission Hills',
        'facial studio San Diego'
      ],
      neighborhoodMentions: ['Hillcrest', 'Bankers Hill', 'Middletown', 'Old Town', 'Little Italy']
    },
    schemaDescription:
      'HydraFacial, DMK enzyme therapy and corrective facials at the KIAMO SKIN studio on Reynard Way in Mission Hills, San Diego, with free parking on site.',
    allAbout: {
      body:
        "Mission Hills sits on the canyon rim above Old Town, one of San Diego's oldest residential neighborhoods, built on streets that follow the bluff line above Mission Valley. Reynard Way runs down through the neighborhood toward Middletown, which is why five minutes covers most of it. Washington Street is the main connector — Hillcrest runs east, I-5 and Old Town are west, and Bankers Hill sits between Mission Hills and the park. The studio is on Reynard Way between those two poles: close enough to Hillcrest's density to draw from it, close enough to Old Town to catch the western end of the canyon.",
      facts: [
        { label: 'To Mission Hills', value: 'You are here' },
        { label: 'Setting', value: 'Canyon-rim neighborhood above Old Town and Middletown' },
        { label: 'Booked most', value: 'HydraFacial and DMK enzyme therapy' },
      ],
    },
    proximity: 'The studio itself — five minutes across the neighborhood',
    pricingNote:
      'HydraFacial is $259. DMK Enzyme Therapy Level 1 is $279. Dermaplaning starts at $199. Full pricing is on each treatment page.',
    featured: ['hydrafacial', 'dmk-enzyme-therapy', 'dermaplaning'],
    crossLinkLabel: 'Mission Hills — The studio itself',
  },
  {
    slug: 'la-jolla',
    name: 'La Jolla',
    title: 'Corrective Facials & Scalp Therapy in La Jolla | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for La Jolla clients at KIAMO SKIN in Mission Hills, San Diego. Twenty minutes south on I-5. HydraFacial from $259, Keravive from $599.',
    h1: 'Scalp Therapy & Corrective Facials in La Jolla',
    intro:
      'Looking for a facial in La Jolla? KIAMO SKIN is a one-room corrective studio in Mission Hills, about twenty minutes south on I-5, treating pigmentation, barrier damage and scalp conditions driven by year-round ocean exposure. Clients travel from the Village, Bird Rock, La Jolla Shores, Windansea and the UCSD corridor. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'From La Jolla Village near Prospect Street and the Cove, take Torrey Pines Road south — not Coast Highway — to I-5 past UCSD and Rose Canyon, exiting at Washington Street. Twelve miles, roughly twenty minutes outside the commute. From Bird Rock, head north on La Jolla Boulevard to La Jolla Parkway east to I-5 south. From La Jolla Shores near Scripps Institution, Torrey Pines Road south picks up I-5 near UCSD. From the UCSD campus itself, La Jolla Village Drive east drops directly onto I-5 south — the campus is only ten miles from Mission Hills. Southbound I-5 stacks through UTC and Sorrento Valley during the morning commute; mid-morning and early afternoon are consistently the easier windows for the drive down.',
    localConcern: {
      heading: 'What does year-round ocean exposure actually do to skin and scalp?',
      body: 'La Jolla has a genuine, year-round ocean swimming culture — the La Jolla Cove Swim Club has operated since 1916, and a group swims there every morning regardless of season. Windansea has a year-round surf community, La Jolla Shores draws swimmers and divers, and the blufftop above the Cove gets direct afternoon sun with no tree cover. Salt water strips the skin barrier with every session — the rinse afterward removes the salt but also washes away the oils that hold the barrier together. Over weeks and months that leaves skin tight, reactive and prone to sensitivity under products it used to tolerate. The scalp takes it hardest: the part line receives UV directly, salt builds up under hair, and daily rinsing never fully clears it. Keravive scalp therapy was built for exactly that state — it clears the buildup, delivers growth factors into the follicle, and rehydrates the scalp skin. A HydraFacial does the same structural work on the face: cleanse, extract and infuse without the abrasion that sensitised skin cannot handle.',
    },
    keywordContext: {
      primaryKeyword: 'HydraFacial in La Jolla',
      treatmentPhrases: [
        'facial La Jolla',
        'microneedling La Jolla',
        'chemical peel La Jolla',
        'Keravive scalp treatment La Jolla',
        'best esthetician La Jolla'
      ],
      neighborhoodMentions: ['La Jolla Village', 'Bird Rock', 'La Jolla Shores', 'Windansea', 'the Cove', 'UCSD']
    },
    schemaDescription:
      'Corrective facials and scalp therapy for La Jolla clients at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'La Jolla wraps seven miles of coast north of the city — the Village and Prospect Street at the north end, Bird Rock at the south, and La Jolla Shores and the Cove between them. The Cove has hosted an open-water swim since 1916; a group swims there every morning. Windansea has a surf break that works year-round. Scripps Institution of Oceanography sits at the base of the bluffs near Shores, and UCSD occupies the mesa above Torrey Pines Road. That is the useful fact about skin in La Jolla: the ocean is not seasonal, so the exposure that drives barrier damage and scalp conditions is not seasonal either.',
      facts: [
        { label: 'To Mission Hills', value: 'Twelve miles, twenty minutes' },
        { label: 'Setting', value: 'Year-round ocean swimming — Cove, Windansea, Shores' },
        { label: 'Booked most', value: 'Keravive scalp therapy and HydraFacial' },
      ],
    },
    proximity: 'About twelve miles — roughly twenty minutes south on I-5',
    pricingNote:
      'Keravive scalp therapy is $599, or $1,499 for a series of three. HydraFacial is $259. Full pricing is on each treatment page.',
    featured: ['keravive-scalp', 'hydrafacial', 'lira-peels'],
    crossLinkLabel: 'La Jolla — 20 minutes south',
  },
  {
    slug: 'chula-vista',
    name: 'Chula Vista',
    title: 'Melasma & Pigmentation Facials in Chula Vista | KIAMO Skin',
    description:
      'Melasma and pigmentation treatment for Chula Vista clients at KIAMO SKIN in Mission Hills, San Diego. Lira peels matched for melanin-rich skin. From $199.',
    h1: 'Melasma & Pigmentation Facials in Chula Vista',
    intro:
      'Looking for melasma or pigmentation treatment in Chula Vista? KIAMO SKIN is a one-room corrective studio in Mission Hills, about twenty-five minutes north, and pigmentation in melanin-rich skin is the work it is built around. Clients travel from across the city — Eastlake, Rancho del Rey, Otay Ranch, Bonita and the Third Avenue Village corridor. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'From Third Avenue Village, head north on Broadway to SR-54 west, then I-805 north to Washington Street — about twelve miles. From Eastlake or Rancho del Rey, take SR-125 north to SR-54 west to I-805 north; this avoids the National City stretch of I-5 where northbound delays build. From the Chula Vista bayfront near H Street or the marina district, I-5 north runs about thirteen miles to Washington Street. From Otay Ranch Town Center, SR-125 north is the most direct line. Off-peak any of these routes is twenty to twenty-five minutes; once the South Bay starts moving north, plan for forty.',
    localConcern: {
      heading: 'Why does the South Bay see more melasma than anywhere else in the county?',
      body: 'Chula Vista is San Diego County\'s second-largest city, and roughly six in ten residents identify as Hispanic or Latino. Melasma concentrates in Fitzpatrick skin types III to V, and chronic UV exposure is its most consistent trigger — which means the county\'s largest melanin-rich population is also its strongest melasma catchment. Eastlake and Rancho del Rey sit five to ten miles inland from the coast, past the marine layer that keeps the beach gray through May and June. Summers inland run eight to fifteen degrees warmer, and those neighbourhoods fall inside the valley heat advisories the coast never gets. More clear days, year after year, is the mechanism. Lira chemical peels answer it because the acid is matched to the skin at consultation and strength escalates across a series rather than in one visit. Aggressive resurfacing on melanin-rich skin triggers post-inflammatory hyperpigmentation — the exact problem you walked in with, only deeper. Pacing is the treatment.',
    },
    keywordContext: {
      primaryKeyword: 'facial Chula Vista',
      treatmentPhrases: [
        'HydraFacial Chula Vista',
        'chemical peel for melasma Chula Vista',
        'microneedling Chula Vista',
        'pigmentation treatment South Bay',
        'best esthetician Chula Vista'
      ],
      neighborhoodMentions: ['Eastlake', 'Otay Ranch', 'Rancho del Rey', 'Bonita', 'Olympic Training Center']
    },
    melaninNote:
      'Pigmentation in melanin-rich skin is what this studio was built around:',
    schemaDescription:
      'Melasma, pigmentation and corrective facial treatment for Chula Vista clients at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'Chula Vista spans the bay to the foothills — the old walkable grid of Third Avenue Village and the bayfront waterfront in the west, the newer master-planned communities of Eastlake, Rancho del Rey and Otay Ranch spread across the inland hills. Roughly six in ten residents are Hispanic or Latino, making it the most demographically distinct major city in the county. The inland half of the city — east of I-805 — sits past the marine layer that softens UV along the coast, and summer afternoons there run measurably hotter. That combination of melanin-rich skin and cumulative inland UV is why pigmentation is the reason most Chula Vista clients book.',
      facts: [
        { label: 'To Mission Hills', value: 'Thirteen miles, twenty-five minutes' },
        { label: 'Setting', value: 'Bay to inland hills; largest melanin-rich catchment in the county' },
        { label: 'Booked most', value: 'Lira peel series for melasma and pigmentation' },
      ],
    },
    proximity: 'About thirteen miles — twenty to twenty-five minutes north off-peak',
    pricingNote:
      'Lira chemical peels start at $199 for the Gentle Renewal and $299 for the Advanced. A first-time consultation and treatment is $249. Full pricing is on each treatment page.',
    featured: ['lira-peels', 'dmk-enzyme-therapy', 'hydrafacial'],
    crossLinkLabel: 'Chula Vista — 25 minutes north',
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    title: 'Barrier Repair Facials in Encinitas | KIAMO Skin',
    description:
      'Barrier repair, scalp therapy and corrective facials for Encinitas clients, at the KIAMO SKIN studio in Mission Hills, San Diego — half an hour down I-5. DMK Enzyme Therapy from $279.',
    h1: 'Barrier Repair Facials in Encinitas',
    intro:
      "Looking for a facial in Encinitas? KIAMO SKIN is a one-room corrective studio in Mission Hills, half an hour south on I-5, and barrier repair is the most common reason Encinitas clients book. Clients travel from Leucadia, Cardiff-by-the-Sea, downtown Encinitas near Moonlight Beach, Olivenhain and Encinitas Ranch. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.",
    gettingHere:
      "From Swami's Beach at the foot of K Street in Cardiff, head north on Coast Highway 101 to Leucadia Boulevard, then east to I-5 south — about twenty-five miles to Washington Street. From downtown Encinitas near Moonlight Beach, Encinitas Boulevard east reaches I-5 in three minutes. From Olivenhain, El Camino Real south connects to Leucadia Boulevard east to I-5 — add about ten minutes compared to the coast. From Encinitas Ranch, La Costa Avenue east reaches I-5 in under five minutes. Clear roads make the trip near thirty minutes; the southbound commute through Sorrento Valley pushes it to forty-five or more. Coast Highway 101 is the slower line and is not worth it for an appointment.",
    localConcern: {
      heading: 'Why does surfing leave skin reactive?',
      body: "Encinitas surfs year-round — Swami's and Moonlight hold water in every season, and Surfer ranked the town third in the country. Salt water, wind off the bluffs and a rinse afterwards take away far more than they put back, and skin ends up tight, reactive and stinging under products it used to tolerate. DMK Enzyme Therapy is built for exactly that state, working with the skin's own function to rebuild the barrier instead of exfoliating a surface that is already raw. Keravive handles the same problem on the scalp, where salt dries and daily rinsing never quite clears the buildup.",
    },
    keywordContext:     {
          "primaryKeyword": "facial Encinitas",
          "treatmentPhrases": [
                "HydraFacial Encinitas",
                "DMK enzyme therapy for surfers Encinitas",
                "microneedling Encinitas",
                "barrier repair facial Leucadia",
                "best facial Encinitas"
          ],
          "neighborhoodMentions": [
                "Leucadia",
                "Cardiff-by-the-Sea",
                "Moonlight Beach",
                "Swamis",
                "Olivenhain"
          ]
    },
    schemaDescription:
      'Barrier repair, scalp therapy and corrective facials for Encinitas clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        "Encinitas runs five miles of coast north of Del Mar, stacked on bluffs above the sand. Coast Highway 101 threads through Leucadia at the north end, drops into downtown around Moonlight Beach and Encinitas Boulevard, then continues through Cardiff past the San Elijo Lagoon. Swami's is the most consistently surfed break on this stretch — a long right point that holds in most swells, with a morning lineup on almost any day the ocean is moving. Inland, Olivenhain is its own world: horse properties on winding roads past the cell towers and the Olivenhain Road corridor, far enough east to miss most of the marine layer. Skin here is usually reactive rather than pigmented, which is a different problem and a different plan.",
      facts: [
        { label: 'To Mission Hills', value: 'Twenty-five miles, thirty minutes' },
        { label: 'Setting', value: "Bluff-top surf town — Swami's, Moonlight, year-round water" },
        { label: 'Booked most', value: 'DMK enzyme therapy and Keravive for the barrier' },
      ],
    },
    proximity: 'About twenty-five miles — near thirty minutes on a clear I-5',
    pricingNote:
      'DMK Enzyme Therapy Level 1 is $279. A HydraFacial is $259. Full pricing is on each treatment page.',
    featured: ['dmk-enzyme-therapy', 'keravive-scalp', 'hydrafacial'],
    crossLinkLabel: 'Encinitas — 30 minutes south',
  },
  {
    slug: 'del-mar',
    name: 'Del Mar',
    title: 'Corrective Facials for Del Mar Clients | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for Del Mar clients at KIAMO SKIN in Mission Hills, San Diego. Twenty-five minutes south on I-5. Procell and Keravive available.',
    h1: 'Facials for Del Mar Clients',
    intro:
      'Looking for a facial in Del Mar? Clients travel from Del Mar to Mission Hills — about twenty-five minutes south on I-5 — for corrective facials and scalp therapy with Kiki, a licensed esthetician. Del Mar Village, Del Mar Heights, the Fairgrounds corridor and Solana Beach clients all make that drive. Treatment is one-to-one in a single room, by appointment only.',
    gettingHere:
      'From Del Mar Village near 15th Street, take Del Mar Heights Road east to I-5 south — twenty-two miles to Washington Street. From the Fairgrounds on Jimmy Durante Boulevard, Via de la Valle west leads to I-5 south. From the bluffs above Del Mar City Beach, 15th Street east to Del Mar Heights Road then I-5 south is the standard line. From the Torrey Pines area just to the south, Carmel Valley Road east to I-5 connects the same way. Off-peak the drive is twenty-five minutes. Through the summer race meet and county fair season the southbound merge past Sorrento Valley adds fifteen to twenty minutes — I-805 south from Del Mar Heights runs about the same time and avoids that pinch point.',
    localConcern: {
      heading: 'What does a full season at the Fairgrounds do to skin?',
      body: 'The Del Mar social calendar is built around two back-to-back outdoor events: the San Diego County Fair runs from June into early July, and the summer thoroughbred race meet runs from mid-July into September. Both draw long afternoons on the grounds — the Grandstand faces southwest, the infield track is exposed, and Opening Day and major stakes events fill weekdays as well as weekends. The coast here faces southwest and receives direct afternoon sun with no ridge line to soften it; the marine layer clears by early afternoon on most summer days, and the UV it was masking lands on unprotected skin for the rest of the day. That kind of cumulative, sustained exposure does not look like a sunburn. It shows up as uneven tone and rough texture across the face and on the scalp — the part line and the ears take as much sun as the cheeks over a full season. Procell Microchanneling rebuilds that texture across a series of three, Keravive clears and rehydrates the scalp, and a HydraFacial holds the result between them.',
    },
    keywordContext:     {
          "primaryKeyword": "facial Del Mar",
          "treatmentPhrases": [
                "HydraFacial Del Mar",
                "microneedling Del Mar",
                "Procell microchanneling North County",
                "Keravive scalp therapy Del Mar",
                "best esthetician Del Mar"
          ],
          "neighborhoodMentions": [
                "Del Mar Heights",
                "Carmel Valley",
                "Torrey Pines",
                "Fairgrounds"
          ]
    },
    // "Del Mar" is kept more than 40 characters from studio/location/located/visit us
    // in every field — the guard regex scans in both directions.
    schemaDescription:
      'Corrective facials and scalp therapy at the KIAMO SKIN studio in Mission Hills, San Diego, for clients travelling from Del Mar.',
    allAbout: {
      body:
        'Del Mar is two and a half miles of coast between the bluffs and the racetrack, small enough to cross on foot and defined entirely by its calendar. The county fair runs June into early July at the Fairgrounds on Jimmy Durante Boulevard; the summer thoroughbred race meet follows from mid-July through September, drawing Opening Day crowds and stakes races through the season. Del Mar Village clusters around 15th Street and Camino del Mar — small, walkable and oriented toward the beach below the bluffs. Both events mean weeks of long afternoons in open sun on a stretch of coast where the marine layer clears by early afternoon.',
      facts: [
        { label: 'To Mission Hills', value: 'Twenty-two miles, twenty-five minutes' },
        { label: 'Setting', value: 'Bluffs, racetrack and a summer event calendar' },
        { label: 'Booked most', value: 'Procell microchanneling for texture and Keravive for the scalp' },
      ],
    },
    proximity: 'About twenty-two miles — twenty-five minutes south on I-5',
    pricingNote:
      'Procell Microchanneling is $475 per session, or $1,199 for a series of three. Keravive scalp therapy is $599. HydraFacial is $259. Full pricing is on each treatment page.',
    featured: ['procell-microchanneling', 'keravive-scalp', 'hydrafacial'],
    crossLinkLabel: 'Del Mar — 25 minutes south',
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    title: 'Procell & Keravive Facials in Carlsbad | KIAMO Skin',
    description:
      'Procell Microchanneling and Keravive scalp therapy for Carlsbad clients at KIAMO SKIN in Mission Hills, San Diego. Thirty-five miles south on I-5. Series from $1,199.',
    h1: 'Procell & Keravive Treatments in Carlsbad',
    intro:
      'Looking for Procell microchanneling or Keravive scalp therapy in Carlsbad? KIAMO SKIN is a one-room corrective studio in Mission Hills, San Diego — a genuine thirty-five to forty-five minute drive south on I-5. Clients travel from Carlsbad Village, La Costa, Bressi Ranch, Aviara and Calavera Hills. The treatment plan accounts for the distance: series work is scheduled as a block at the start, not booked visit by visit.',
    gettingHere:
      'From Carlsbad Village near the COASTER station on Carlsbad Village Drive, I-5 south runs about thirty-five miles to Washington Street. From La Costa or Aviara near Palomar Airport Road, I-5 south is about thirty miles — the closest part of the city to Mission Hills. From Bressi Ranch, Palomar Airport Road west reaches I-5 in five minutes. From Calavera Hills, College Boulevard south to Cannon Road west connects to I-5 south. The COASTER runs from Carlsbad Village to Santa Fe Depot in under an hour if you would rather not drive.',
    localConcern: {
      heading: 'Why do Carlsbad clients choose series-based treatments?',
      body: 'The drive is the constraint that shapes a Carlsbad plan. Corrective work runs on intervals — Procell Microchanneling is usually three sessions spaced four to six weeks apart, and Keravive scalp therapy is also designed as a series of three. The honest approach is to set the series first and place the appointments around it, rather than booking whenever the skin flares. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway, and what can safely be combined is decided at consultation.',
    },
    keywordContext: {
          "primaryKeyword": "facial Carlsbad",
          "treatmentPhrases": [
                "HydraFacial Carlsbad",
                "chemical peel Carlsbad",
                "microneedling Carlsbad",
                "Procell microchanneling Carlsbad",
                "Keravive scalp therapy Carlsbad"
          ],
          "neighborhoodMentions": [
                "Carlsbad Village",
                "La Costa",
                "Bressi Ranch",
                "Aviara",
                "Calavera Hills"
          ]
    },
    schemaDescription:
      'Procell Microchanneling, Keravive scalp therapy and corrective facials for Carlsbad clients at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'Carlsbad is the top of the county line, seven miles of coast from the Village down through La Costa and Aviara to the southern border near Batiquitos Lagoon. The Village clusters around Carlsbad Village Drive and the COASTER station — small, walkable and directly on I-5. Inland, Bressi Ranch and Calavera Hills spread east past El Camino Real, and La Costa and Aviara sit above Palomar Airport Road in the south half of the city. The flower fields on Palomar Airport Road bloom in spring and briefly back up I-5 in both directions. Distance is the thing that decides whether a treatment series gets finished — and at thirty to thirty-five miles, it is real.',
      facts: [
        { label: 'To Mission Hills', value: 'Thirty to thirty-five miles, thirty-five to forty minutes' },
        { label: 'Setting', value: 'North county coast — Village to Aviara, COASTER line' },
        { label: 'Booked most', value: 'Procell and Keravive series, planned at consultation' },
      ],
    },
    proximity: 'About thirty-five miles — a genuine thirty-five to forty-five minutes',
    pricingNote:
      'Procell Microchanneling is $475, or $1,199 for a series of three. Keravive scalp therapy is $599, or $1,499 for a series. Full pricing is on each treatment page.',
    featured: ['procell-microchanneling', 'keravive-scalp', 'hydrafacial'],
    crossLinkLabel: 'Carlsbad — 35-40 minutes south',
  },
  {
    slug: 'pacific-beach',
    name: 'Pacific Beach',
    title: 'Sun Damage Facials in Pacific Beach, San Diego | KIAMO Skin',
    description:
      'Sun damage, barrier repair and scalp therapy for Pacific Beach clients at KIAMO SKIN in Mission Hills, San Diego. Fifteen minutes east. HydraFacial from $259.',
    h1: 'Sun Damage Facials in Pacific Beach',
    intro:
      'Looking for a facial in Pacific Beach? KIAMO SKIN is a one-room corrective studio in Mission Hills, about fifteen minutes east, and sun damage is the most common reason Pacific Beach clients book. Clients travel from the boardwalk area, Crown Point, Sail Bay, Mission Beach and the residential blocks around Kate Sessions Park. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'From the main strip near Crystal Pier, Garnet Avenue east runs directly to I-5 south — seven miles, fifteen minutes off-peak. From Crown Point or Sail Bay, take Ingraham Street south to Grand Avenue east to I-5 south. From Mission Beach or Belmont Park, head north on Mission Boulevard to Garnet, then east to I-5. From the residential streets around Kate Sessions Park, Grand Avenue east to I-5 south is the cleanest line. Summer afternoons and weekend beach traffic clog Garnet and Ingraham west of I-5 from late morning onward — an appointment before ten or after three avoids the thickest part of it.',
    localConcern: {
      heading: 'Why does sun damage build here without a visible burn?',
      body: 'The Pacific Beach boardwalk runs more than three miles from Law Street down to Mission Bay, and this neighborhood lives outdoors year-round — Crystal Pier, Tourmaline Surf Park, the bay kayak launch at Crown Point and the Fanuel Park stretch of Sail Bay all see daily use regardless of season. The damage accumulates through May Gray and June Gloom, when the marine layer sits over the coast all morning and burns off by early afternoon without ever lowering the UV underneath it. UVA penetrates cloud cover and fog; it is the wavelength that drives pigmentation and collagen breakdown, and it is exactly what gets skipped when the sky looks gray and people leave SPF off. Salt water and wind compound that by stripping the skin barrier on the same mornings the UV is quietly accumulating. What shows up is uneven tone, texture and a scalp that is drier and flakier than it should be — not a burn, and not traceable to any single afternoon. A Lira peel addresses the pigmentation across a series, DMK Enzyme Therapy rebuilds the barrier beneath it, and Keravive scalp therapy does the same for the scalp, where the part line receives the same UVA with nothing protecting it.',
    },
    keywordContext: {
      primaryKeyword: 'HydraFacial Pacific Beach',
      treatmentPhrases: [
        'facial Pacific Beach',
        'chemical peel for sun damage Pacific Beach',
        'microneedling Pacific Beach',
        'DMK enzyme therapy Pacific Beach',
        'best facial Pacific Beach',
        'Keravive scalp treatment Pacific Beach',
        'scalp treatment Pacific Beach',
        'dandruff treatment Pacific Beach'
      ],
      neighborhoodMentions: ['Crystal Pier', 'Garnet Avenue', 'Mission Bay', 'Crown Point', 'Kate Sessions Park']
    },
    schemaDescription:
      'Sun damage, barrier repair and scalp therapy for Pacific Beach clients at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'Pacific Beach runs from Law Street south to Mission Bay — Garnet Avenue cuts through the middle, Crystal Pier anchors the ocean end, and the boardwalk runs more than three miles alongside the sand. It is the part of San Diego that genuinely lives outdoors: Tourmaline Surf Park catches waves at the north end, Sail Bay draws paddleboarders and kayakers year-round, and Crown Point fills on any dry afternoon. May Gray and June Gloom keep the mornings overcast, the sky burns off by early afternoon, and the UV underneath was never low. Damage here accumulates without ever looking like a sunburn.',
      facts: [
        { label: 'To Mission Hills', value: 'Seven miles, fifteen minutes' },
        { label: 'Setting', value: 'Boardwalk, marine layer, outdoor daily — all year' },
        { label: 'Booked most', value: 'Lira peels for uneven tone and barrier repair' },
      ],
    },
    proximity: 'Roughly seven miles — about fifteen minutes east',
    pricingNote:
      'Lira chemical peels start at $199. DMK Enzyme Therapy Level 1 is $279. HydraFacial is $259. Full pricing is on each treatment page.',
    featured: ['lira-peels', 'dmk-enzyme-therapy', 'keravive-scalp'],
    crossLinkLabel: 'Pacific Beach — 15 minutes east',
  },
  {
    slug: 'la-mesa',
    name: 'La Mesa',
    title: 'Sun Damage & Pigmentation Facials in La Mesa | KIAMO Skin',
    description:
      'Sun damage and pigmentation facials for La Mesa clients at KIAMO SKIN in Mission Hills, San Diego. Eleven miles west on I-8. Lira peels from $199, HydraFacial from $259.',
    h1: 'Sun Damage & Pigmentation Facials in La Mesa',
    intro:
      'Looking for a facial in La Mesa? KIAMO SKIN treats cumulative sun damage and pigmentation at a one-room studio in Mission Hills, about twenty minutes west on I-8. Clients travel from La Mesa Village, Mt. Helix, Grossmont, Spring Valley and the neighborhoods east of the SR-125 corridor. Every plan is built for how your skin tone actually responds, not to a fixed protocol.',
    gettingHere:
      'From La Mesa Village on La Mesa Boulevard, take Spring Street west to I-8 westbound — about eleven miles through Mission Valley to Taylor Street or Hotel Circle, then up into Mission Hills. From Grossmont Center near Jackson Drive, head north on Jackson to I-8 west. From Mt. Helix, Fuerte Drive north connects to the Grossmont area and onto I-8. From Spring Valley, SR-125 north leads to I-8 west at the El Cajon interchange. Stay on I-8 past SR-163 and exit at Taylor Street or Hotel Circle — fifteen to twenty minutes on a clear freeway, twenty-five to thirty-five on the westbound commute.',
    localConcern: {
      heading: 'Why is sun exposure worse inland?',
      body: 'La Mesa sits about ten miles from the coast, which is far enough to miss the marine layer that keeps the beach gray through May and June. Summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach, and La Mesa falls inside the valley heat advisories the coast never gets. More clear days, year after year, is what builds the cumulative UV load behind the melasma and uneven tone this area books for. Lira chemical peels answer that, because strength escalates across a series rather than in one visit — and daily SPF is what holds the result.',
    },
    keywordContext:     {
          "primaryKeyword": "facial La Mesa",
          "treatmentPhrases": [
                "HydraFacial La Mesa",
                "chemical peel for pigmentation La Mesa",
                "Lira peels La Mesa",
                "microneedling La Mesa",
                "best esthetician La Mesa"
          ],
          "neighborhoodMentions": [
                "La Mesa Village",
                "Mt. Helix",
                "Grossmont",
                "Spring Valley",
                "Fletcher Hills"
          ]
    },
    schemaDescription:
      'Corrective facials for sun damage and pigmentation, for La Mesa clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'La Mesa sits about ten miles inland, east of Mission Valley and built across hills around the village on La Mesa Boulevard — a walkable main street of older storefronts, the Spring Street trolley stop and a weekly farmers market. Mt. Helix rises to the southeast, one of the few genuine topographic features in the eastern county, with its cross visible from I-8. Grossmont Center, the indoor mall at Jackson Drive and Grossmont Center Drive, anchors the commercial north end. Ten miles is enough to miss the marine layer that keeps the coast gray through May and June, and summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach. More clear days, year after year, is the quiet driver behind the pigmentation this area books for.',
      facts: [
        { label: 'To Mission Hills', value: 'Eleven miles, twenty minutes' },
        { label: 'Setting', value: 'Inland hills, village on La Mesa Boulevard, past the marine layer' },
        { label: 'Booked most', value: 'Lira peels for cumulative sun damage and pigmentation' },
      ],
    },
    proximity: 'Roughly eleven miles — fifteen to twenty minutes west on I-8',
    melaninNote:
      'Pigmentation in melanin-rich skin responds differently to UV and to treatment — the pacing matters most:',
    pricingNote:
      'Lira chemical peels start at $199. A HydraFacial is $259. Full pricing is on each treatment page.',
    featured: ['lira-peels', 'hydrafacial', 'dmk-enzyme-therapy'],
    crossLinkLabel: 'La Mesa — 20 minutes west',
  },
  {
    slug: 'north-park',
    name: 'North Park',
    title: 'Corrective Facials in North Park, San Diego | KIAMO Skin',
    description:
      'Corrective facials and peel series for North Park clients — ten minutes from Mission Hills with no freeway. KIAMO SKIN on Reynard Way. By appointment only.',
    h1: 'Corrective Facials in North Park, San Diego',
    intro:
      'Looking for a facial in North Park? KIAMO SKIN is a one-room corrective studio in Mission Hills, about ten minutes away — the shortest trip of any area served, and the only one that needs no freeway. Clients travel from the 30th and University corridor, South Park, Normal Heights, Golden Hill and the craftsman residential blocks of Park Boulevard. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'From the 30th and University intersection — the heart of North Park — take University Avenue west through Hillcrest, bear left onto Washington Street, then left onto Reynard Way. Three and a half miles, about ten minutes, no freeway. From South Park or Fern Street, head north on 30th to University and follow the same route west. From the Normal Street corridor, University west is the whole route. From Golden Hill, head north on 25th or 28th to University and continue west. North Park is the only area served where no on-ramp is involved — and that matters, because corrective work runs on intervals and ten-minute visits are the ones people keep.',
    localConcern: {
      heading: 'How does living ten minutes away change what is realistic?',
      body: 'Corrective skin work runs on intervals — Lira peels escalate in strength across a series with specific home care between visits, and there is no single-session version of pigmentation or acne scarring treatment. The people who complete a course are almost always the ones for whom a visit costs ten minutes rather than an afternoon. North Park is three and a half miles from Mission Hills with no freeway between them, and that proximity changes the plan: a peel series that would be logistically difficult from Carlsbad or even Del Mar becomes a straightforward six-week cycle from University Avenue. Dermaplaning is the treatment built for a shorter visit — it clears dead skin and fine facial hair in one appointment, and it pairs with a peel because a cleared surface lets the acid penetrate evenly. North Park\'s demographics also matter: the neighbourhood is younger, denser and more diverse than most of the county, and melanin-rich skin is well-represented here — the same work that runs through all KIAMO treatment planning.',
    },
    keywordContext: {
      primaryKeyword: 'corrective facial North Park',
      treatmentPhrases: [
        'facial North Park San Diego',
        'chemical peel North Park',
        'dermaplaning North Park',
        'HydraFacial North Park',
        'best esthetician North Park'
      ],
      neighborhoodMentions: ['30th Street', 'University Heights', 'Normal Heights', 'South Park', 'Observatory']
    },
    schemaDescription:
      'Corrective facials, peel series and scalp therapy for North Park clients, ten minutes away at the KIAMO SKIN studio in Mission Hills, San Diego.',
    allAbout: {
      body:
        'North Park is Uptown\'s eastern half, built around the intersection of University and 30th, dense with craftsman bungalows and one of the few parts of San Diego that is genuinely walkable. South Park sits to the south along Fern Street, Normal Heights to the north, and Hillcrest between North Park and Mission Hills — which is why the two are only three and a half miles apart with no freeway in between. The neighbourhood is younger and more diverse than most of the county, with a bar and restaurant strip on 30th that draws from across the city and an arts presence centred on the North Park Theatre and the Observatory. Distance is the advantage here: corrective work runs on intervals, and a ten-minute trip is the one clients actually make.',
      facts: [
        { label: 'To Mission Hills', value: 'Three and a half miles, ten minutes' },
        { label: 'Setting', value: 'Dense Uptown grid — no freeway, genuinely walkable' },
        { label: 'Booked most', value: 'Peel series with dermaplaning' },
      ],
    },
    proximity: 'Three and a half miles — about ten minutes, no freeway needed',
    pricingNote:
      'Lira chemical peels start at $199. A dermaplane facial is $199. A first-time treatment starts at $249. Full pricing is on each treatment page.',
    featured: ['lira-peels', 'dermaplaning', 'hydrafacial'],
    crossLinkLabel: 'North Park — 10 minutes west',
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
