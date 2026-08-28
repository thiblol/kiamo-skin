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
    {
      question: 'What skin concerns do Mission Hills clients most often book for?',
      answer:
        'The most common first appointments from Mission Hills are HydraFacials, typically with a full consultation and skin analysis built in. From there, many plans extend into DMK Enzyme Therapy for barrier repair or a Lira peel series for pigmentation and uneven tone — proximity makes a multi-visit corrective plan realistic in a way it is not from the outer suburbs. Some clients settle into a maintenance routine of HydraFacials spaced four to six weeks apart. What the plan looks like is always decided at the first visit.',
    },
    {
      question: 'Is there parking at the studio on Reynard Way?',
      answer:
        'Yes — free parking on site at 3067 Reynard Way. Street parking on Reynard is also available in the immediate blocks. Most Mission Hills and Middletown clients can walk or drive a few minutes, and the Washington Street bus line stops nearby if you prefer not to drive.',
    },
  ],

  'la-jolla': [
    {
      question: 'How far is KIAMO SKIN from La Jolla?',
      answer:
        'About twelve miles, or roughly twenty minutes outside the commute. From the Village near Prospect Street, Torrey Pines Road south connects to I-5 past UCSD and Rose Canyon — stay on to Washington Street. From Bird Rock, La Jolla Boulevard north to La Jolla Parkway east reaches I-5 in about five minutes. From La Jolla Shores, Torrey Pines Road south picks up the same I-5 entrance near UCSD.',
    },
    {
      question: 'What is the easiest time to drive down from La Jolla?',
      answer:
        'Mid-morning or early afternoon. Southbound I-5 stacks through UTC and Sorrento Valley during the morning commute — roughly seven to nine. After ten the traffic clears significantly, and early afternoon is consistently the fastest window. The same distance that takes twenty minutes at eleven takes thirty-five or forty at eight, particularly on weekdays.',
    },
    {
      question: 'What does year-round ocean swimming do to the scalp?',
      answer:
        'Salt water dissolves the lipid barrier on both the scalp skin and the hair shaft. Repeated exposure — daily or near-daily, which is typical for La Jolla Cove swimmers, Windansea surfers and regular Shores swimmers — means the scalp never fully recovers between sessions. Daily rinsing removes the salt but also strips the oils that hold the barrier together. What accumulates is a cycle of dryness, microflaking and follicle buildup that ordinary shampoo addresses only superficially. Keravive scalp therapy clears the buildup at the follicle and delivers growth factors directly into the scalp skin — it is a corrective treatment for that specific state, not a deep conditioning session.',
    },
    {
      question: 'Is Keravive scalp therapy the same as a head spa?',
      answer:
        'No. A head spa — the Japanese-origin scalp massage and steam treatment — addresses scalp tension, relaxation and light cleansing. Keravive is a clinical, three-step treatment developed by the makers of HydraFacial specifically for scalp health: it extracts buildup from the follicle, delivers a growth-factor serum into the scalp skin, and leaves behind a take-home solution for daily use between sessions. It is designed as a series of three treatments, and its results are structural rather than temporary. The mechanism and the outcome are different from a head spa.',
    },
    {
      question: 'What does repeated salt water exposure do to the skin barrier on the face?',
      answer:
        'Salt breaks down the lipid layer that holds the outermost skin cells together. Each session strips some of that layer, and the freshwater rinse afterward removes what remains. Over time — particularly with daily or near-daily ocean exposure — the barrier becomes compromised: skin is tight after washing, reactive to products it previously tolerated, and more sensitive to UV because the barrier that ordinarily diffuses some of it is thinner. HydraFacial is the appropriate response because it works without abrasion — it cleanses, extracts and infuses hydration without adding further stress to a barrier already under load. DMK Enzyme Therapy addresses the same problem from a repair angle, working with the skin\'s own function rather than exfoliating a surface that is already raw.',
    },
  ],

  'chula-vista': [
    {
      question: 'How long is the drive from Chula Vista to Mission Hills?',
      answer:
        'Twenty to twenty-five minutes off-peak from most of western and central Chula Vista. From eastern neighbourhoods like Eastlake or Otay Ranch, SR-125 north to SR-54 west to I-805 north is usually the faster line than dropping to I-5 first. Once the South Bay starts moving north — generally from seven to nine in the morning — add fifteen to twenty minutes to any of those routes.',
    },
    {
      question: 'Which neighbourhoods in Chula Vista are closest to Mission Hills?',
      answer:
        'Western Chula Vista — the Third Avenue Village corridor, the bayfront near H Street and the marina district — is the closest, about thirteen miles up I-5. Eastlake and Rancho del Rey add two or three miles but run faster via SR-125 and I-805, avoiding the National City stretch of I-5. Otay Ranch, the furthest inland, is still inside thirty minutes off-peak on SR-125 north.',
    },
    {
      question: 'Why is melasma so much more common in the South Bay than in coastal San Diego?',
      answer:
        'Two factors work together. First, Chula Vista is the county\'s largest concentration of Hispanic and Latino residents, and melasma concentrates in Fitzpatrick skin types III to V. Second, the inland neighbourhoods — Eastlake, Rancho del Rey, Otay Ranch — sit past the marine layer that keeps the coast gray and UV-diffused through May and June. Inland summers run eight to fifteen degrees warmer, with more clear days and no cloud buffer between skin and the sun. Cumulative UV over years is the most consistent trigger for melasma, and that UV load is simply higher here than on the coast.',
    },
    {
      question: 'Can a chemical peel make dark marks worse on darker skin?',
      answer:
        'Yes, if the acid is too aggressive or applied before the skin is ready. Melanin-rich skin responds to trauma — including a poorly chosen peel — by producing more pigment, a reaction called post-inflammatory hyperpigmentation. This is the same process that causes the dark mark after a pimple, just driven by the peel instead of the breakout. Lira peels are chosen and paced differently for Fitzpatrick types III to V: the strength is matched to the skin at consultation and escalated across a series rather than maximised on the first visit. The pacing is the treatment, not a cautious compromise.',
    },
    {
      question: 'How many peel sessions does it take to see results on melasma?',
      answer:
        'Most clients notice visible change after two sessions, with the full result apparent across three to four. Melasma is a chronic condition driven by UV exposure, so the series addresses the pigment that has already formed while home care — specifically daily SPF — prevents new formation between visits. A plan without consistent SPF will not hold, because new UV exposure will continue triggering the same pathway the peels are working to clear.',
    },
  ],

  encinitas: [
    {
      question: 'How far is Encinitas from the studio?',
      answer:
        'About twenty-five miles down I-5, exiting at Washington Street. Clear roads make that near thirty minutes, while the southbound commute through Sorrento Valley pushes it to forty-five or more.',
    },
    {
      question: 'Can salt water and wind damage the skin barrier?',
      answer:
        "Yes. Salt water, wind and the rinse afterwards take away more than they put back, and skin ends up tight, reactive and stinging under products it used to tolerate. DMK Enzyme Therapy is built for that state, working with the skin's own function rather than exfoliating a surface that is already raw.",
    },
    {
      question: 'Does DMK Enzyme Therapy work on skin that is already reactive from surfing?',
      answer:
        "That is exactly the state it is designed for. DMK Enzyme Therapy works by activating the skin's own repair function rather than removing surface layers — there is no abrasion, no acid and nothing that adds stress to a barrier that is already compromised. Reactive, sensitised skin responds to it precisely because it does not exfoliate; it supports. The treatment addresses the barrier from the inside out, which is the opposite of what a peel or scrub does and why it is the appropriate plan when the surface is already raw.",
    },
  ],

  'del-mar': [
    {
      question: 'How far is Mission Hills from Del Mar?',
      answer:
        'About twenty-two miles south on I-5 from Del Mar Heights Road, exiting at Washington Street. Off-peak that is a twenty-five minute drive. From Del Mar Village near 15th Street, Del Mar Heights Road east connects to I-5 in about three minutes. From the Fairgrounds on Jimmy Durante Boulevard, Via de la Valle west reaches I-5 directly.',
    },
    {
      question: 'Does the race meet make the southbound drive longer?',
      answer:
        'Yes, noticeably. The thoroughbred meet runs mid-July through September, and Opening Day and major stakes races push midday and afternoon traffic onto I-5 from both directions. The southbound merge past Sorrento Valley — which already backs up on commute mornings — adds fifteen to twenty minutes on race days. I-805 south from Del Mar Heights Road runs a similar distance and avoids that pinch point when I-5 is stacked.',
    },
    {
      question: 'Can sun exposure from the Fairgrounds season show up as texture rather than a burn?',
      answer:
        'Often, yes. The county fair and the race meet together account for nearly three months of long outdoor afternoons in direct sun — the Grandstand faces southwest, the infield is open, and afternoon UV on the coast is at its highest after the marine layer burns off. That kind of sustained, cumulative exposure does not produce a single visible burn; it produces uneven tone, rough texture and a scalp that is drier and more flaky than it was in spring. Procell Microchanneling addresses texture at the collagen level across a series of three. Keravive clears and rehydrates the scalp. A HydraFacial holds both results between treatment intervals.',
    },
    {
      question: 'What treatments work best after weeks of outdoor event exposure?',
      answer:
        'The starting point is always a full skin assessment, because cumulative UV shows differently depending on skin type, barrier condition and how consistently SPF was used. For texture and tone, Procell Microchanneling or a Lira peel series addresses the result of that exposure at different depths. For scalp dryness and buildup, Keravive works through the follicle rather than on the surface. What can safely be combined in one visit depends on the skin\'s current state and is decided at consultation.',
    },
    {
      question: 'How does scalp damage from sun exposure differ from facial damage?',
      answer:
        'The mechanism is the same — UV drives melanin production and collagen breakdown — but the scalp is harder to protect and rarely treated. Most people never apply SPF to their part line, and the part receives direct overhead UV on every clear afternoon. Salt, wind and daily rinsing also affect the scalp more than the face, because shampoo strips the lipid barrier repeatedly. The result is a scalp that is drier, more flaky and slower to recover than it should be. Keravive addresses that specifically: it clears follicle buildup, delivers growth factors at the follicle level, and rehydrates the scalp skin.',
    },
  ],

  carlsbad: [
    {
      question: 'How long does it take to drive from Carlsbad to Mission Hills?',
      answer:
        'Thirty-five to forty minutes on clear roads, and past an hour on the southbound morning commute. It is about thirty-five miles down I-5 from Carlsbad Village or Palomar Airport Road, exiting at Washington Street.',
    },
    {
      question: 'How do you plan a treatment series around a long drive?',
      answer:
        'Set the series first and place the appointments around it, rather than booking whenever the skin flares. Procell Microchanneling is usually three sessions spaced four to six weeks apart, and Keravive scalp therapy is also designed as a series of three. Pairing two things into one visit is often the difference between finishing a course and abandoning it halfway, and what can safely be combined is decided at consultation.',
    },
    {
      question: 'Does Procell Microchanneling require much recovery time?',
      answer:
        'Minimal. The treated skin is pink for about twenty-four hours, and most clients schedule around that rather than needing a full recovery window. The larger logistics question from Carlsbad is the series itself — three sessions spaced four to six weeks apart — and that is what the first consultation addresses. Whether Procell can be paired with another treatment on the same visit depends on the skin condition and is decided then.',
    },
  ],

  'pacific-beach': [
    {
      question: 'How far is Pacific Beach from the studio?',
      answer:
        'Roughly seven miles, or about fifteen minutes off-peak. From the main Garnet Avenue strip, head east to I-5 south and exit at Washington Street. From Crown Point or Sail Bay, Ingraham Street south to Grand Avenue east is the same distance. Summer weekend traffic on Garnet and Ingraham west of I-5 can add ten to fifteen minutes from mid-morning onward — an earlier appointment clears that.',
    },
    {
      question: 'Can you accumulate sun damage on a gray day in Pacific Beach?',
      answer:
        'Yes — and it is the more common way damage builds here. May Gray and June Gloom keep the coast overcast every morning, sometimes into early afternoon, without once lowering the UV index underneath. UVA penetrates cloud cover and fog; it is the wavelength responsible for pigmentation and collagen breakdown, and it keeps working whether or not the sky looks sunny. Pacific Beach lives outdoors year-round — the boardwalk, the surf breaks at Tourmaline, the bay launch at Crown Point — and gray mornings are precisely when SPF gets skipped.',
    },
    {
      question: 'What does salt water do to the skin barrier over time?',
      answer:
        'Repeated salt water exposure strips the lipid barrier — the oils that hold the outermost skin layer together. Salt dissolves those lipids efficiently, and the freshwater rinse afterward removes whatever the ocean left behind but also washes away the barrier it was sitting on. Over time the skin becomes tight and reactive, stinging under products it once tolerated and sensitised to the sun it is also being exposed to. DMK Enzyme Therapy works with the skin\'s own repair function rather than exfoliating a surface that is already raw — it is the appropriate treatment for that state, not a stronger peel.',
    },
    {
      question: 'What is the difference between a HydraFacial and a chemical peel for sun damage?',
      answer:
        'A HydraFacial cleanses, extracts and infuses hydration in one visit — it is restorative without removing skin, and it works on a sensitised, UV-damaged barrier without irritating it further. A Lira chemical peel works at a deeper level to address uneven pigmentation and texture over a series of visits. They serve different stages: a HydraFacial supports the barrier and delivers immediate results, while a peel series addresses the accumulated pigment that a HydraFacial alone will not shift. Many Pacific Beach clients do both, using the HydraFacial to maintain the barrier between peel intervals.',
    },
    {
      question: 'Does the June Gloom affect the scalp as well as the face?',
      answer:
        'Directly. The part line receives UV from above with nothing covering it, and on overcast mornings when SPF is skipped, the scalp accumulates the same UV the face does. Salt water from ocean swimming or surfing compounds it: the part line and hairline take repeated direct sun while the scalp skin dries out under daily rinsing. Keravive scalp therapy addresses both — it clears the buildup at the follicle and rehydrates the scalp skin without any of the abrasion that sensitive skin cannot take.',
    },
  ],

  'la-mesa': [
    {
      question: 'How far is La Mesa from Mission Hills?',
      answer:
        'Roughly eleven miles west on I-8 through Mission Valley. Fifteen to twenty minutes on a clear freeway, and twenty-five to thirty-five on the westbound commute.',
    },
    {
      question: 'Is sun exposure worse inland than at the coast?',
      answer:
        'Yes. La Mesa sits about ten miles inland, far enough to miss the marine layer that keeps the beach gray through May and June, and summer afternoons run roughly eight to fifteen degrees warmer than La Jolla or Mission Beach. More clear days means more UV year after year, and cumulative UV is the most consistent driver of melasma and uneven tone.',
    },
    {
      question: 'How does cumulative inland UV affect pigmentation over time?',
      answer:
        'It builds gradually and without obvious incident — there is no single afternoon that looks like the cause. The pattern is months and years of clear-sky afternoons with less SPF than the UV required, and the result is uneven tone or melasma that appears to have arrived all at once. Inland areas like La Mesa accumulate more UV annually than the coast because the marine layer is absent for most of the day. A Lira peel series addresses the pigment that has already formed, and daily SPF is the variable that determines whether the result holds. Without it, new UV exposure continues triggering the same pathway the peels are working to clear.',
    },
  ],

  'north-park': [
    {
      question: 'How far is North Park from Mission Hills?',
      answer:
        'Three and a half miles — about ten minutes via University Avenue west through Hillcrest to Washington Street, then Reynard Way. No freeway, no on-ramp, no merge. It is the shortest trip of any area served, and the only one where the whole route stays on surface streets. Parking is free on site.',
    },
    {
      question: 'How does being close actually change the treatment plan?',
      answer:
        'Corrective work runs on intervals — a Lira peel series typically calls for three to four sessions spaced four to six weeks apart, with specific home care between each. The interval is fixed by how the skin recovers, not by the drive. But whether someone finishes a course depends heavily on how much it costs them in time. From North Park, a visit is a ten-minute errand on a weekday afternoon. From Carlsbad, it is a logistics decision that involves an hour of driving. The same plan has a much higher completion rate for someone three miles away, and the completed plan is the one that produces results.',
    },
    {
      question: 'Which treatment is most popular from North Park?',
      answer:
        'Peel series paired with dermaplaning — and proximity is the reason. The peel series requires multiple visits, and a ten-minute trip from University Avenue is what makes it realistic rather than aspirational. Dermaplaning is used either as a preparation step before a peel or as a standalone maintenance treatment between peel intervals. The combination is more effective than either alone, and it is the plan most clients from this area stay consistent with.',
    },
  ],
};
