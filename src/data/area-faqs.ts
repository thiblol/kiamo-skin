/**
 * Per-area FAQs. Feed both the visible accordion and the FAQPage schema on each
 * area page, so the rendered answer and the schema answer are one string.
 *
 * Two of every three questions are explicitly about the place — distance, route,
 * traffic, transport. That is deliberate: a question that would read the same on
 * all nine pages is a duplicate-content signal, and "how far is it from X" is the
 * query an area page exists to answer. The third ties the area's own concern to
 * a treatment, drawn from `localConcern` on the same record.
 *
 * Every figure here already appears in `areas.ts` — this file restates verified
 * claims, it never introduces a new one. No question is reused across any page;
 * checked against all 65 questions already live in faqs, treatment-faqs,
 * melanin-faqs and membership-faqs.
 *
 * Del Mar: answers name Mission Hills and Reynard Way rather than "the studio".
 * The guard suite fails the build when studio, location, located or "visit us"
 * lands within 40 characters of "Del Mar", scanning in both directions.
 *
 * Hard rules, all enforced by test/guards.test.js against the built HTML:
 * no pronouns, no price outside verifiedPrices, no durations, no opening hours,
 * no outcome guarantees.
 */
import type { Faq } from './faqs';

export const areaFaqs: Record<string, Faq[]> = {
  'mission-hills': [
    {
      question: 'How far is KIAMO SKIN from the rest of Mission Hills?',
      answer:
        'Most of Mission Hills is inside a five-minute drive. The studio is at 3067 Reynard Way, which runs between the Washington Street end of the neighborhood and Middletown, and parking is free on site.',
    },
    {
      question: 'Which freeway exit is closest to Reynard Way?',
      answer:
        'From I-5, take the Washington Street exit and turn east. Coming from I-8 or SR-163, head west along Washington Street instead. Both approaches put you on Reynard Way without doubling back through Middletown.',
    },
    {
      question: 'Will the same esthetician treat me at every visit?',
      answer:
        'Yes. KIAMO SKIN has one treatment room and no rotating roster, so the same licensed esthetician assesses your skin, performs the treatment and adjusts the plan next time. That continuity is the point of corrective work, because what to do next depends on how your skin responded last.',
    },
  ],

  'la-jolla': [
    {
      question: 'How far is KIAMO SKIN from La Jolla?',
      answer:
        'Around twelve miles, or roughly twenty minutes outside the commute. From the Village, drop down La Jolla Parkway to I-5 south, stay on it past Rose Canyon and Old Town, and exit at Washington Street.',
    },
    {
      question: 'When is the easiest time to drive down from La Jolla?',
      answer:
        'Mid-morning and early afternoon. Southbound I-5 stacks up through UTC and Sorrento Valley on the morning run, so an appointment either side of that window is a materially shorter drive than the same trip at eight in the morning.',
    },
    {
      question: 'Does year-round ocean swimming affect the scalp?',
      answer:
        'Repeated salt water and direct sun strip the barrier, and the scalp takes it hardest because the part line receives UV with nothing on it. Keravive scalp therapy clears the buildup and rehydrates that skin. It is non-abrasive, which matters when exposure has already sensitized the area.',
    },
  ],

  'chula-vista': [
    {
      question: 'How long is the drive from Chula Vista to Mission Hills?',
      answer:
        'Twenty to twenty-five minutes off-peak, and closer to forty once the South Bay starts moving north. From western Chula Vista it is about thirteen miles up I-5 through National City to the Washington Street exit.',
    },
    {
      question: 'What is the fastest route from Eastlake or Rancho del Rey?',
      answer:
        'SR-54 west to I-805 north is usually quicker than dropping down to I-5 first. Exit at Washington Street either way. The I-805 line avoids the National City stretch of I-5, which is where the northbound delay tends to build.',
    },
    {
      question: 'Why is melasma so common in the South Bay?',
      answer:
        'Melasma concentrates in Fitzpatrick types III to V, and chronic UV is its most consistent trigger. Chula Vista is the county’s second-largest city and roughly six in ten residents are Hispanic or Latino, so the largest melanin-rich population is also the strongest melasma catchment. Lira peels answer it because strength escalates across a series rather than in one visit.',
    },
  ],

  encinitas: [
    {
      question: 'How far is Encinitas from the studio?',
      answer:
        'About twenty-five miles down I-5, exiting at Washington Street. Clear roads make that near thirty minutes, while the southbound commute through Sorrento Valley pushes it to forty-five or more.',
    },
    {
      question: 'Is Coast Highway 101 a good route to Mission Hills?',
      answer:
        'No — 101 is the slower line and is not worth it for an appointment. I-5 south from Encinitas Boulevard or Leucadia Boulevard is the route to take, even when the freeway is busy.',
    },
    {
      question: 'Can salt water and wind damage the skin barrier?',
      answer:
        'Yes. Salt water, wind and the rinse afterwards take away more than they put back, and skin ends up tight, reactive and stinging under products it used to tolerate. DMK Enzyme Therapy is built for that state, working with the skin’s own function rather than exfoliating a surface that is already raw.',
    },
  ],

  'del-mar': [
    {
      question: 'How far is Mission Hills from Del Mar?',
      answer:
        'About twenty-two miles south on I-5 from Del Mar Heights Road, exiting at Washington Street. Off-peak that is a twenty-five minute drive.',
    },
    {
      question: 'Does race season make the drive south longer?',
      answer:
        'Yes. Through race season, and on the southbound merge past Sorrento Valley, add fifteen or twenty minutes to the usual run. I-805 south takes about the same time and is the inland alternative when I-5 is stacked.',
    },
    {
      question: 'Can sun exposure show up as texture rather than a burn?',
      answer:
        'Often, yes. Long afternoons in open sun read as uneven tone and rough texture rather than an obvious burn, and the scalp takes as much of it as the face. Procell Microchanneling rebuilds texture across a series, Keravive clears and rehydrates the scalp, and a HydraFacial holds the result between them.',
    },
  ],

  carlsbad: [
    {
      question: 'How long does it take to drive from Carlsbad to Mission Hills?',
      answer:
        'Thirty-five to forty minutes on clear roads, and past an hour on the southbound morning commute. It is about thirty-five miles down I-5 from Carlsbad Village or Palomar Airport Road, exiting at Washington Street.',
    },
    {
      question: 'Is there a train from Carlsbad instead of driving?',
      answer:
        'Yes. The COASTER runs from Carlsbad Village to Santa Fe Depot in under an hour, which is a reasonable alternative to sitting in the I-5 commute.',
    },
    {
      question: 'How do you plan a treatment series around a long drive?',
      answer:
        'Set the series first and place the appointments around it, rather than booking whenever the skin flares. Procell Microchanneling is usually three sessions spaced four to six weeks apart, and Keravive scalp therapy is also designed as a series of three. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway, and what can safely be combined is decided at consultation.',
    },
  ],

  'pacific-beach': [
    {
      question: 'How far is Pacific Beach from the studio?',
      answer:
        'Roughly seven miles, or about fifteen minutes. Take Garnet or Grand Avenue east to I-5 south, then come off at Washington Street.',
    },
    {
      question: 'Does beach traffic affect the drive from Pacific Beach?',
      answer:
        'Summer afternoons and weekend beach traffic clog Garnet and the Ingraham Street approach in both directions. An earlier appointment is usually the shorter drive, even though the distance never changes.',
    },
    {
      question: 'Can you accumulate sun damage on a gray day?',
      answer:
        'Yes, and it is the more common way it happens here. May Gray and June Gloom sit over the coast all morning, burn off by early afternoon and never once lower the UV underneath. Gray sky is the usual reason SPF gets skipped, and it accumulates as uneven tone over a barrier already stripped by salt and wind.',
    },
  ],

  'la-mesa': [
    {
      question: 'How far is La Mesa from Mission Hills?',
      answer:
        'Roughly eleven miles west on I-8 through Mission Valley. Fifteen to twenty minutes on a clear freeway, and twenty-five to thirty-five on the westbound commute.',
    },
    {
      question: 'Which exit do you take heading west on I-8?',
      answer:
        'Stay on I-8 past SR-163 and exit at Taylor Street or Hotel Circle, then climb into Mission Hills. Coming from La Mesa Boulevard or the SR-125 interchange, that is the whole route.',
    },
    {
      question: 'Is sun exposure worse inland than at the coast?',
      answer:
        'Yes. La Mesa sits about ten miles inland, far enough to miss the marine layer that keeps the beach gray through May and June, and summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach. More clear days means more UV year after year, and cumulative UV is the most consistent driver of melasma and uneven tone.',
    },
  ],

  'north-park': [
    {
      question: 'How far is North Park from Mission Hills?',
      answer:
        'Three and a half miles, or about ten minutes — the shortest trip of any area served. Both are Uptown neighborhoods with Hillcrest between them, and parking is free on site.',
    },
    {
      question: 'Can you get there from North Park without a freeway?',
      answer:
        'Yes, and it is the only area served that needs no freeway at all. University Avenue west through Hillcrest, then onto Washington Street, puts you on Reynard Way.',
    },
    {
      question: 'Which treatment fits into a short appointment window?',
      answer:
        'Dermaplaning is the treatment built for a short visit, and it pairs well with a peel because a cleared surface lets the acid work evenly. Pigmentation work still runs on intervals — Lira peels escalate in strength across a series with home care between visits, and there is no single-session version.',
    },
  ],
};
