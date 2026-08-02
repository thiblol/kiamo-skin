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
   * One sentence linking to /melanin-rich-skin, rendered under localConcern. Set
   * only where the area's own concern is genuinely a melanin-rich-skin one, so
   * the link stays editorial rather than becoming sitewide boilerplate.
   */
  melaninNote?: string;
  /** One sentence for the Service schema node. */
  schemaDescription: string;
  /**
   * Distance and drive time to the studio, condensed from `gettingHere` for the
   * homepage proximity list. Off-peak, and every figure is already stated on the
   * area page — this field restates, it never introduces a new claim.
   */
  proximity: string;
  /** Exactly three treatment slugs, most relevant to this area's concern. */
  featured: string[];
}

export const areas: Area[] = [
  {
    slug: 'mission-hills',
    name: 'Mission Hills',
    title: 'Facials in Mission Hills, San Diego | KIAMO Skin',
    description:
      'Corrective facials in Mission Hills, San Diego. A one-room studio at 3067 Reynard Way with free parking on site, by appointment only.',
    h1: 'Facials in Mission Hills',
    intro:
      'Looking for a facial in Mission Hills? KIAMO SKIN is a single-treatment-room studio at 3067 Reynard Way, and every appointment is one-to-one with Kiki, a licensed esthetician. Parking is free on site, and the studio runs by appointment only.',
    gettingHere:
      'Reynard Way runs between the Washington Street end of Mission Hills and Middletown, so most of the neighborhood is inside a five-minute drive. From I-5, take the Washington Street exit and turn east. From I-8 or SR-163, come west along Washington Street.',
    localConcern: {
      heading: 'Who will be treating your skin?',
      body: 'KIAMO SKIN has one treatment room. There is no rotating roster and no handoff — the same licensed esthetician assesses your skin, performs the treatment and adjusts the plan at the next visit. That continuity is the point, because corrective work depends on knowing how your skin responded last time rather than on a fixed protocol. Most first appointments are built around a HydraFacial, with a full consultation and skin analysis before anything else is chosen.',
    },
    schemaDescription:
      'Corrective facials and scalp therapy at the KIAMO SKIN studio on Reynard Way in Mission Hills, San Diego, with free parking on site.',
    proximity: 'The studio itself — five minutes across the neighborhood',
    featured: ['hydrafacial', 'dmk-enzyme-therapy', 'dermaplaning'],
  },
  {
    slug: 'la-jolla',
    name: 'La Jolla',
    title: 'Facials in La Jolla | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for La Jolla clients, at the KIAMO SKIN studio in Mission Hills, San Diego. About twenty minutes down I-5.',
    h1: 'Facials in La Jolla',
    intro:
      'Looking for a facial in La Jolla? KIAMO SKIN is a one-room corrective studio in Mission Hills, about twenty minutes south on I-5, treating pigmentation, acne and barrier damage in melanin-rich skin. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'From the Village, drop down La Jolla Parkway to I-5 south and stay on it past Rose Canyon and Old Town — around twelve miles, roughly twenty minutes outside the commute. Exit at Washington Street. Southbound I-5 stacks up through UTC and Sorrento Valley on the morning run, so mid-morning and early afternoon are the easier windows.',
    localConcern: {
      heading: 'What does year-round ocean swimming do to skin?',
      body: 'Repeated salt water and direct sun strip the barrier, and they land hardest on the scalp, where the part line takes UV with nothing on it. La Jolla has a genuine year-round ocean swimming culture — the Cove has hosted an open-water swim since 1916, and a pod swims there every day of the year. Keravive scalp therapy clears the buildup and rehydrates that skin, and a HydraFacial does the same work on the face — both non-abrasive, which matters when skin is already sensitized by exposure.',
    },
    schemaDescription:
      'Corrective facials and scalp therapy for La Jolla clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'About twelve miles — roughly twenty minutes south on I-5',
    featured: ['keravive-scalp', 'hydrafacial', 'lira-peels'],
  },
  {
    slug: 'chula-vista',
    name: 'Chula Vista',
    title: 'Pigmentation Facials in Chula Vista | KIAMO Skin',
    description:
      'Melasma and pigmentation treatment for Chula Vista clients, at the KIAMO SKIN studio in Mission Hills, San Diego. Peels selected for melanin-rich skin.',
    h1: 'Pigmentation Facials in Chula Vista',
    intro:
      'Looking for melasma or pigmentation treatment in Chula Vista? KIAMO SKIN is a one-room corrective studio in Mission Hills, about twenty-five minutes north, and pigmentation in melanin-rich skin is the work it is built around. Melanin-rich skin answers trauma by producing more pigment, so strength and pacing are chosen deliberately.',
    gettingHere:
      'From western Chula Vista, I-5 north through National City to the Washington Street exit is about thirteen miles. From Eastlake or Rancho del Rey, SR-54 west to I-805 north is usually the faster line. Either way it is twenty to twenty-five minutes off-peak, and closer to forty once the South Bay starts moving north.',
    localConcern: {
      heading: 'Why is melasma so common in the South Bay?',
      body: 'Chula Vista is San Diego County’s second-largest city, and roughly six in ten residents are Hispanic or Latino. Melasma concentrates in Fitzpatrick types III to V, and chronic UV is its most consistent trigger — so the county’s largest melanin-rich population is also its strongest melasma catchment. Lira chemical peels answer that, because strength escalates across a series rather than in one visit and the acid is matched to the skin at consultation. Aggressive resurfacing on this skin produces post-inflammatory pigment, which is the problem you walked in with, only worse.',
    },
    melaninNote:
      'Pigmentation in melanin-rich skin is what this studio was built around:',
    schemaDescription:
      'Pigmentation, melasma and corrective facial treatment for Chula Vista clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'About thirteen miles — twenty to twenty-five minutes north off-peak',
    featured: ['lira-peels', 'dmk-enzyme-therapy', 'hydrafacial'],
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    title: 'Barrier Repair Facials in Encinitas | KIAMO Skin',
    description:
      'Barrier repair, scalp therapy and corrective facials for Encinitas clients, at the KIAMO SKIN studio in Mission Hills, San Diego — half an hour down I-5.',
    h1: 'Facials in Encinitas',
    intro:
      'Looking for a facial in Encinitas? KIAMO SKIN is a one-room corrective studio in Mission Hills, half an hour south on I-5, and barrier repair is the most common reason Encinitas clients book. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'I-5 south from Encinitas Boulevard or Leucadia Boulevard covers about twenty-five miles to Mission Hills, exiting at Washington Street. Clear roads make that near thirty minutes; the southbound commute through Sorrento Valley pushes it to forty-five or more. Coast Highway 101 is the slower line and is not worth it for an appointment.',
    localConcern: {
      heading: 'Why does surfing leave skin reactive?',
      body: 'Encinitas surfs year-round — Swami’s and Moonlight hold water in every season, and Surfer ranked the town third in the country. Salt water, wind off the bluffs and a rinse afterwards take away far more than they put back, and skin ends up tight, reactive and stinging under products it used to tolerate. DMK Enzyme Therapy is built for exactly that state, working with the skin’s own function to rebuild the barrier instead of exfoliating a surface that is already raw. Keravive handles the same problem on the scalp, where salt dries and daily rinsing never quite clears the buildup.',
    },
    schemaDescription:
      'Barrier repair, scalp therapy and corrective facials for Encinitas clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'About twenty-five miles — near thirty minutes on a clear I-5',
    featured: ['dmk-enzyme-therapy', 'keravive-scalp', 'hydrafacial'],
  },
  {
    slug: 'del-mar',
    name: 'Del Mar',
    title: 'Facials for Del Mar Clients | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for Del Mar clients. KIAMO SKIN is in Mission Hills, San Diego — twenty-five minutes south on I-5.',
    h1: 'Facials for Del Mar Clients',
    intro:
      'Looking for a facial in Del Mar? Clients travel from Del Mar to Mission Hills, about twenty-five minutes south on I-5, for corrective facials and scalp therapy with Kiki, a licensed esthetician. Treatment is one-to-one in a single room, by appointment only.',
    gettingHere:
      'I-5 south from Del Mar Heights Road is about twenty-two miles to Mission Hills, exiting at Washington Street. Off-peak that is a twenty-five minute drive. Through race season, and on the southbound merge past Sorrento Valley, add fifteen or twenty. I-805 south runs about the same and is the inland alternative.',
    localConcern: {
      heading: 'What does a season at the Fairgrounds do to skin?',
      body: 'Del Mar Fairgrounds set the local calendar. The county fair runs from June into early July and the summer race meet from mid-July into September — weeks of long afternoons in open sun, on a stretch of coast where the morning marine layer clears by early afternoon and the UV underneath it was never low. Exposure like that reads as uneven tone and rough texture rather than a burn, and it lands on the scalp as much as the face. Procell Microchanneling rebuilds texture across a series, Keravive clears and rehydrates the scalp, and a HydraFacial holds the result between them.',
    },
    // Worded so "Del Mar" and "studio" sit more than 40 characters apart: the
    // guard regex scans in both directions and the spec's own draft failed it.
    schemaDescription:
      'Corrective facials and scalp therapy at the KIAMO SKIN studio in Mission Hills, San Diego, for clients travelling from Del Mar.',
    proximity: 'About twenty-two miles — twenty-five minutes south on I-5',
    featured: ['hydrafacial', 'procell-microchanneling', 'keravive-scalp'],
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    title: 'Facials in Carlsbad | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for Carlsbad clients, at the KIAMO SKIN studio in Mission Hills, San Diego. Thirty-five miles south on I-5.',
    h1: 'Facials in Carlsbad',
    intro:
      'Looking for a facial in Carlsbad? KIAMO SKIN is a one-room corrective studio in Mission Hills, San Diego — a genuine thirty-five to forty-five minute drive south, not a quick trip. Carlsbad clients plan around that, and the treatment plan is built to suit it.',
    gettingHere:
      'I-5 south from Carlsbad Village or Palomar Airport Road covers about thirty-five miles to Mission Hills, exiting at Washington Street. Clear roads make that thirty-five to forty minutes; the southbound morning commute pushes it past an hour. The COASTER runs Carlsbad Village to Santa Fe Depot in under an hour if you would rather not drive.',
    localConcern: {
      heading: 'How do you plan treatment around the drive?',
      body: 'The drive is the constraint that shapes a Carlsbad plan. Corrective work runs on intervals — Procell Microchanneling is usually three sessions spaced four to six weeks apart, and Keravive scalp therapy is also designed as a series of three. The honest approach is to set the series first and place the appointments around it, rather than booking whenever the skin flares. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway, and what can safely be combined is decided at consultation.',
    },
    schemaDescription:
      'Corrective facials and scalp therapy for Carlsbad clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'About thirty-five miles — a genuine thirty-five to forty-five minutes',
    featured: ['procell-microchanneling', 'keravive-scalp', 'hydrafacial'],
  },
  {
    slug: 'pacific-beach',
    name: 'Pacific Beach',
    title: 'Sun Damage Facials in Pacific Beach | KIAMO Skin',
    description:
      'Sun damage, barrier repair and scalp therapy for Pacific Beach clients, at the KIAMO SKIN studio in Mission Hills, San Diego. Fifteen minutes east.',
    h1: 'Facials in Pacific Beach',
    intro:
      'Looking for a facial in Pacific Beach? KIAMO SKIN is a one-room corrective studio in Mission Hills, about fifteen minutes east, and sun damage is the reason most Pacific Beach clients book. Treatment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'Garnet or Grand Avenue east to I-5 south, then off at Washington Street — roughly seven miles and about fifteen minutes. Summer afternoons and weekend beach traffic clog Garnet and the Ingraham Street approach both ways, so an earlier appointment is usually the shorter drive.',
    localConcern: {
      heading: 'Why does sun damage build without a burn?',
      body: 'The damage here is rarely an obvious sunburn. It is May Gray and June Gloom, when the marine layer sits over the coast all morning, burns off by early afternoon and never once lowers the UV underneath it. Pacific Beach lives outdoors, and the boardwalk runs more than three miles from Law Street down to Mission Bay. Gray sky is the usual reason SPF gets skipped, and it accumulates as uneven tone over a barrier already stripped by salt and wind. A Lira peel is paced across a series to lift the pigment, DMK Enzyme Therapy rebuilds the barrier beneath it, and Keravive does the same for the scalp, which takes direct sun through the part.',
    },
    schemaDescription:
      'Sun damage, barrier repair and scalp therapy for Pacific Beach clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'Roughly seven miles — about fifteen minutes east',
    featured: ['lira-peels', 'dmk-enzyme-therapy', 'keravive-scalp'],
  },
  {
    slug: 'la-mesa',
    name: 'La Mesa',
    title: 'Facials for Sun Damage in La Mesa | KIAMO Skin',
    description:
      'Facials for sun damage and pigmentation for La Mesa clients, at the KIAMO SKIN studio in Mission Hills, San Diego. About twenty minutes west on I-8.',
    h1: 'Facials in La Mesa',
    intro:
      'Looking for a facial in La Mesa? KIAMO SKIN treats cumulative sun damage and pigmentation at a one-room studio in Mission Hills, about twenty minutes west on I-8. Every plan is built for how your skin tone actually responds, not to a fixed protocol.',
    gettingHere:
      'I-8 west from La Mesa Boulevard or the SR-125 interchange runs roughly eleven miles through Mission Valley. Stay on I-8 past SR-163 and exit at Taylor Street or Hotel Circle, then climb into Mission Hills — fifteen to twenty minutes on a clear freeway, twenty-five to thirty-five on the westbound commute.',
    localConcern: {
      heading: 'Why is sun exposure worse inland?',
      body: 'La Mesa sits about ten miles from the coast, which is far enough to miss the marine layer that keeps the beach gray through May and June. Summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach, and La Mesa falls inside the valley heat advisories the coast never gets. More clear days means more UV, year after year, and cumulative UV is the most consistent driver of melasma and uneven tone. Lira chemical peels answer that, because strength escalates across a series rather than in one visit — and daily SPF is what holds the result.',
    },
    schemaDescription:
      'Corrective facials for cumulative sun exposure and pigmentation, for La Mesa clients, at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'Roughly eleven miles — fifteen to twenty minutes west on I-8',
    featured: ['lira-peels', 'hydrafacial', 'dmk-enzyme-therapy'],
  },
  {
    slug: 'north-park',
    name: 'North Park',
    title: 'Facials in North Park, San Diego | KIAMO Skin',
    description:
      'Corrective facials and scalp therapy for North Park clients, ten minutes away at the KIAMO SKIN studio in Mission Hills, San Diego. By appointment only.',
    h1: 'Facials in North Park',
    intro:
      'Looking for a facial in North Park? KIAMO SKIN is a one-room corrective studio in Mission Hills, about ten minutes away and the shortest trip of any area served. Every appointment is one-to-one with Kiki, a licensed esthetician, by appointment only.',
    gettingHere:
      'North Park and Mission Hills are both Uptown neighborhoods with Hillcrest between them — three and a half miles, no freeway needed. University Avenue west through Hillcrest, then onto Washington Street, puts you on Reynard Way in about ten minutes. Parking is free on site.',
    localConcern: {
      heading: 'Does living ten minutes away change the plan?',
      body: 'North Park is the only area served that needs no freeway to reach Mission Hills, and that changes what is realistic. Corrective work runs on intervals — Lira peels escalate in strength across a series with home care between visits, and there is no single-session version of pigmentation treatment. The people who finish a course are almost always the ones for whom a visit costs ten minutes rather than an afternoon. Dermaplaning is the treatment that fits a short window, and it pairs with a peel, because a cleared surface lets the acid work evenly.',
    },
    schemaDescription:
      'Corrective facials and scalp therapy for North Park clients, ten minutes away at the KIAMO SKIN studio in Mission Hills, San Diego.',
    proximity: 'Three and a half miles — about ten minutes, no freeway needed',
    featured: ['lira-peels', 'dermaplaning', 'hydrafacial'],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
