import type { AreaShell } from './service-area-types';

/**
 * The two area shells that had no `areas.ts` record.
 *
 * Point Loma and Hillcrest existed only inside the two cluster files, which
 * carried the geography but not the area shell — the local concern, the
 * hyperlocal band, the drive-time summary, the pricing note. Those fields are
 * written here, once, so both service×city pages that use an area read the
 * same place.
 *
 * The geography itself is taken from the cluster records by the generator; only
 * the fields that had no source anywhere are authored.
 */
export const authoredShells: Record<string, Partial<AreaShell>> = {

  'chula-vista': {
    adjacentAreas: ['san-diego', 'national-city', 'imperial-beach', 'otay-ranch'],
    geo: { latitude: 32.6401, longitude: -117.0842 },
    cityModifiers: [
      'Bay to inland hills — the old walkable grid of Third Avenue Village and the bayfront waterfront in the west, master-planned Eastlake, Rancho del Rey and Otay Ranch inland',
      'The most demographically distinct major city in the county, with a large melanin-rich population',
      'Past the marine layer east of I-805, so UV exposure runs higher than the coastal strip',
      'Summer afternoons inland run eight to fifteen degrees warmer than the coast',
      'Planned communities with stucco exteriors, concrete slab foundations and minimal landscaping, which reflect heat back into the skin',
    ],
  },

  'la-mesa': {
    adjacentAreas: ['el-cajon', 'lemon-grove', 'spring-valley', 'santee'],
    geo: { latitude: 32.7676, longitude: -117.0231 },
    cityModifiers: [
      'Inland hills around a walkable village on La Mesa Boulevard, with the Spring Street trolley stop and a weekly farmers market',
      'Mt. Helix rising to the southeast, one of the few genuine topographic features in the eastern county, with its cross visible from I-8',
      'Grossmont Center anchoring the commercial north end at Jackson Drive and Grossmont Center Drive',
      'Past the marine layer, so summer afternoons run eight to fifteen degrees warmer than the coast',
      'Fletcher Hills and the Jackson Drive corridor among the areas with the highest UV load in the eastern county',
    ],
  },
  'point-loma': {
    name: 'Point Loma',
    localConcern: {
      heading: 'What a decade of salt air does to a skin barrier',
      body: 'Point Loma has water on both sides, and the skin pays for it in a way inland neighbourhoods never do. The Pacific side brings salt spray and year-round wind; the bay side brings reflected UV off the water at midday. Wind is the underrated one — it strips the lipids that hold the barrier together, and the skin that has been buffeted for years is the skin that reacts to a product it used to tolerate. That is why the barrier work usually comes first here, and why a peel before the skin is ready does more harm than good.',
    },
    allAbout: {
      body:
        'Point Loma is a peninsula, and clients come from both of its coastlines — Ocean Beach and Sunset Cliffs on the Pacific side, Shelter Island and Harbor Island across the bay. Rosecrans Street runs its length, and the Point Loma Lighthouse and Cabrillo National Monument sit at the far western tip. The studio is reached from the Rosecrans corridor in about twelve minutes, which is short enough that a corrective series at four-to-six-week intervals stays workable.',
      facts: [
        { label: 'To the studio', value: 'Twelve miles, about twelve minutes' },
        { label: 'Setting', value: 'Peninsula with ocean and bay exposure on both sides' },
        { label: 'Booked most', value: 'Barrier repair and HydraFacial' },
      ],
    },
    proximity: 'Twelve miles — about twelve minutes via Rosecrans Street',
    pricingNote:
      'A HydraFacial is $259. DMK Enzyme Therapy Level 1 is $279. Dermaplaning starts at $199. Full pricing is on each service page.',
    featured: ['hydrafacial', 'dmk-enzyme-therapy', 'dermaplaning'],
    crossLinkLabel: 'Point Loma — 12 minutes via Rosecrans Street',
    keywordContext: {
      primaryKeyword: 'facial point loma',
      treatmentPhrases: [
        'HydraFacial in Point Loma',
        'barrier repair Point Loma',
        'facial near Ocean Beach',
      ],
      neighborhoodMentions: ['Ocean Beach', 'Sunset Cliffs', 'Shelter Island', 'Old Town'],
    },
    melaninNote:
      'Salt air and wind are hard on a melanin-rich barrier, and the recovery has to be paced around the skin rather than the calendar.',
    schemaDescription:
      'Corrective facials for Point Loma clients — barrier repair, HydraFacial, and dermaplaning at a one-room facial spa in San Diego, about twelve minutes via Rosecrans Street.',
    quickAnswer:
      'KIAMO Skin treats Point Loma clients at a one-room facial spa in San Diego, about twelve minutes away via Rosecrans Street. Kiki, a California licensed esthetician with 7+ years of experience, works on barrier damage first — Point Loma has ocean on one side and bay on the other, and the wind strips the lipids that hold the barrier together. DMK Enzyme Therapy at $279 is usually the first step, with HydraFacial at $259 for maintenance and dermaplaning at $199 for surface refinement.',
    serviceAreaParagraph:
      'KIAMO Skin serves clients from across the Point Loma peninsula, including Ocean Beach and Sunset Cliffs on the Pacific side, Shelter Island and Harbor Island across the bay, and the Rosecrans Street corridor at the centre. The studio is in San Diego, reachable from Rosecrans Street in about twelve minutes, with free parking on site.',
    navigationContext:
      'From Liberty Station, take Rosecrans Street east to Washington Street and turn left — about twelve minutes. From Ocean Beach and Sunset Cliffs, come east on Voltaire Street or Catalina Drive to the Rosecrans corridor, then continue on Rosecrans to Washington Street. From Shelter Island and Harbor Island, take the Rosecrans Street off-ramp from I-5 north.',
    enhancedFaqs: [
      {
        question: 'How far is KIAMO Skin from Point Loma?',
        answer:
          'About twelve miles, roughly twelve minutes via Rosecrans Street to Washington Street, with free parking on site at the studio. It is a short drive, which is what makes a four-to-six-week corrective series realistic from the peninsula.',
      },
      {
        question: 'What skin concern do Point Loma clients book for most?',
        answer:
          'Barrier damage from salt air and wind. The Pacific side brings salt spray and the bay side brings reflected UV, and the wind between them strips the lipids that hold the barrier together. That shows up as skin that is tight, reactive to products it used to tolerate, and slow to settle.',
      },
      {
        question: 'What treatment is right for wind-damaged skin?',
        answer:
          'DMK Enzyme Therapy usually comes first, because it rebuilds skin function rather than resurfacing a surface that is not ready for it. A HydraFacial at $259 maintains the result, and dermaplaning at $199 refines the surface once the barrier is stable.',
      },
    ],
  },

  hillcrest: {
    name: 'Hillcrest',
    localConcern: {
      heading: 'What Hillcrest clients ask for, and what they actually need',
      body: 'Hillcrest is five minutes from the studio, and its clients tend to arrive with a good skincare routine and a specific problem that routine has not solved. The most common requests are uneven tone and texture that no product has moved, and pigment that sits deeper than a home treatment can reach. Because the drive is short, the studio can work the way corrective work actually needs to — a series at four-to-six-week intervals, a plan mapped before the first appointment — rather than the occasional one-off that resets nothing.',
    },
    allAbout: {
      body:
        'Hillcrest is the urban village immediately north of the studio: University Avenue with its cafés and shopfronts, the Fifth Avenue corridor, the farmers market, and the vintage sign at the corner of University and Euclid. Balboa Park sits just to the north, and the residential streets behind it — Upas, Delaware, Florida — are where most clients come from. Five minutes on Washington Street puts the studio at the southern edge of the neighbourhood, close enough that proximity genuinely changes what a treatment plan can look like.',
      facts: [
        { label: 'To the studio', value: 'Five minutes on Washington Street' },
        { label: 'Setting', value: 'Urban village north of the studio, adjacent to Balboa Park' },
        { label: 'Booked most', value: 'HydraFacial and peel series' },
      ],
    },
    proximity: 'Five minutes — the closest neighbourhood to the studio',
    pricingNote:
      'A HydraFacial is $259. DMK Enzyme Therapy Level 1 is $279. Dermaplaning starts at $199. Full pricing is on each service page.',
    featured: ['hydrafacial', 'dermaplaning', 'dmk-enzyme-therapy'],
    crossLinkLabel: 'Hillcrest — five minutes away',
    keywordContext: {
      primaryKeyword: 'facial hillcrest',
      treatmentPhrases: [
        'HydraFacial in Hillcrest',
        'facial near University Avenue',
        'corrective facials Balboa Park',
      ],
      neighborhoodMentions: ['University Avenue', 'North Park', 'Bankers Hill', 'Balboa Park'],
    },
    melaninNote:
      'Hillcrest clients with melanin-rich skin are treated on protocols selected for the tone in front of you, not on a general pigment protocol.',
    schemaDescription:
      'Corrective facials for Hillcrest clients — HydraFacial, peel series, and dermaplaning at a one-room facial spa in San Diego, five minutes away on Washington Street.',
    quickAnswer:
      'KIAMO Skin is five minutes from Hillcrest on Washington Street, with free parking on site. Kiki, a California licensed esthetician with 7+ years of experience, treats uneven tone, texture, and pigment with HydraFacial at $259, dermaplaning at $199, and LIRA chemical peels from $199 for pigmentation. Because the drive is short, corrective series at four-to-six-week intervals are practical from Hillcrest — the schedule is mapped before the first appointment.',
    serviceAreaParagraph:
      'KIAMO Skin serves clients from across Hillcrest, including the University Avenue village, the Fifth Avenue corridor, the residential streets behind Balboa Park along Upas and Delaware, and the eastern edges toward North Park. The studio is in San Diego, five minutes away on Washington Street, with free parking on site.',
    navigationContext:
      'From University Avenue in Hillcrest, head west toward Mission Hills and turn right on Washington Street — about five minutes. From the Balboa Park residential streets, come south on Park or Upas to Date Street, then west to Washington Street. From North Park, take University Avenue west or Morena Boulevard south to Washington Street.',
    enhancedFaqs: [
      {
        question: 'How close is KIAMO Skin to Hillcrest?',
        answer:
          'About five minutes on Washington Street, with free parking on site at the studio. It is the closest neighbourhood to the studio, and the reason a corrective series at four-to-six-week intervals is realistic from here.',
      },
      {
        question: 'What facial is right for uneven tone?',
        answer:
          'It depends on whether the pigment sits at the surface or deeper, which the consultation establishes. A HydraFacial at $259 maintains the skin and clears congestion. LIRA chemical peels from $199 correct pigment at depth, with strength escalated across a series. Dermaplaning at $199 refines the surface.',
      },
      {
        question: 'Can I book a series from Hillcrest?',
        answer:
          'Yes, and the five-minute drive is what makes it workable. The full course is mapped and scheduled at the first appointment — number of sessions, intervals, and total timeline — so the appointments sit around recovery rather than around convenience.',
      },
    ],
  },
};
