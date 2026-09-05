/**
 * ENHANCED AREA DATA - PACIFIC BEACH COMPLETE
 *
 * Gold standard implementation following La Jolla template.
 *
 * Framework compliance:
 * - GMB Crush LLM Optimization Agent (AUDIO framework, 800-1000 words, city mentioned 6-8x)
 * - Local Entity Injection PRO (9-12 entities per 500 words = 18-24 total)
 * - Brave AI Indexing Skill PRO (Quick Answer ≤150 words, entity paragraph above fold)
 * - FAQ Money Printer PRO (5-7 conversion FAQs, answers ≤150 words, objection removal)
 * - Local SEO Schema Generator (complete LocalBusiness schema)
 *
 * Pacific Beach Focus:
 * - Primary concern: Sun damage through May Gray/June Gloom (UVA penetrates marine layer)
 * - Geographic: Crystal Pier, Tourmaline, Crown Point, Sail Bay, Mission Bay, Kate Sessions Park
 * - Climate: Marine layer burns off by early afternoon, exposing unprotected skin to cumulative UVA
 * - Demographics: Year-round outdoor lifestyle, boardwalk culture, beach living
 * - Distance: 7 miles east, 15 minutes via Garnet Avenue to I-5
 */

import type { AreaEnhancement } from './area-enhancements-lajolla';

export const pacificBeachEnhanced: AreaEnhancement = {
  quickAnswer:
    "KIAMO SKIN treats sun damage and barrier damage from year-round outdoor exposure at a one-room studio in Mission Hills, San Diego (92103), about 15 minutes east of Pacific Beach via Garnet Avenue and I-5. Kiki, a California licensed esthetician with 7+ years specializing in melanin-rich skin, uses Lira Chemical Peels for UVA-induced pigmentation, DMK Enzyme Therapy for salt-stripped barriers, and Keravive scalp therapy for clients from Crystal Pier, Crown Point, Sail Bay, and the Mission Bay boardwalk. Treatments start at $199, with series planning for May Gray and June Gloom damage that accumulates without visible burns.",

  serviceAreaParagraph:
    "KIAMO SKIN serves clients from across Pacific Beach, including the boardwalk corridor from Law Street south to Mission Beach (92109), the Garnet Avenue commercial district near Crystal Pier and Fanuel Street Cove (92109), Crown Point and Sail Bay neighborhoods surrounding Mission Bay Park (92109), the residential blocks around Kate Sessions Park near Grand Avenue and Lamont Street (92109), Tourmaline Surf Park at the northern edge near Tourmaline Street and La Jolla Boulevard, and the Mission Beach peninsula south toward Belmont Park and the Giant Dipper roller coaster. Many clients also travel from northern Mission Bay near De Anza Cove and Fiesta Island, the Clairemont border along Balboa Avenue, and Bay Park east of Mission Bay Drive. The studio is in Mission Hills, San Diego County (92103), accessible via Garnet Avenue east to I-5 south, exiting at Washington Street (Exit 17), approximately 7 miles and 15 minutes off-peak.",

  navigationContext:
    "From Crystal Pier at the west end of Garnet Avenue near Ocean Boulevard, head east on Garnet Avenue away from the beach — you'll pass the commercial strip, then residential blocks, then cross I-5 after about 3 miles. Once over the freeway, immediately merge onto I-5 south (right lanes). Stay in center lanes through the merge; right lanes back up with beach traffic on summer weekends. Washington Street (Exit 17) comes up in about 4 miles, just past the Old Town Transit Center on your left. Turn right at the exit, cross over the freeway, and Reynard Way is the first right turn after you pass the Washington Street and India Street intersection. From Crown Point or Sail Bay near Riviera Drive, take Ingraham Street south to Grand Avenue east, then merge onto I-5 south — same Washington Street exit. From Mission Beach or Belmont Park, head north on Mission Boulevard to Garnet Avenue, then follow the route above. The studio at 3067 Reynard Way sits between Mission Hills and Middletown, approximately 0.5 miles from the Washington Street exit with free parking on site. Summer beach traffic clogs Garnet and Ingraham west of I-5 from late morning through evening — appointments before 10 AM or after 3 PM avoid the thickest congestion.",

  cityModifiers:
    "Pacific Beach sits directly on the coast facing southwest, where the marine layer creates a false sense of sun safety from May through early July. May Gray and June Gloom are local weather patterns where low-lying stratocumulus clouds blanket the coast each morning, then burn off by early to mid-afternoon without ever reducing the UVA radiation underneath. UVA (320-400 nm wavelength) penetrates cloud cover and fog at 80-90% intensity — it's the wavelength responsible for collagen breakdown, elastin degradation, and melanocyte activation that drives pigmentation. The marine layer provides no UV protection, yet people leave sunscreen off because the sky looks gray and the temperature stays cool until noon. The Pacific Beach boardwalk runs 3.2 miles from Law Street south to Mission Beach with zero shade structures — no trees, no awnings, just open concrete and sand from 6 AM daily use through sunset. Tourmaline Surf Park at the north end draws surfers year-round, Crown Point and Sail Bay attract paddleboarders and kayakers on Mission Bay every morning, and Kate Sessions Park fills with runners and dog walkers who face unobstructed southwestern exposure on the blufftop above Mission Bay. The neighborhood's residential blocks were built in the 1950s-1970s with minimal landscaping and stucco exteriors that reflect UV back onto sidewalks and patios, compounding cumulative exposure. What shows up is uneven tone, rough texture, and scalp dryness along the part line — not a sunburn you can trace to a single afternoon, but chronic photodamage that accumulates silently through overcast mornings when the UVA never stopped.",

  authority: {
    heading: "One esthetician, every appointment",
    body: "Kiki is a California licensed esthetician with over 7 years of experience treating sun damage, barrier compromise, and pigmentation in melanin-rich skin (Fitzpatrick types III-VI). Certified in DMK Enzyme Therapy's skin revision system and trained in HydraFacial Syndeo advanced protocols, including Keravive scalp treatment extension. Trained in Lira Clinical peel protocols designed specifically to treat UVA-induced melasma without triggering post-inflammatory hyperpigmentation in darker skin tones. The studio has one treatment room at 3067 Reynard Way in Mission Hills — no rotating roster, no staffing changes, no front desk scheduling you with whoever's available that day. The same esthetician assesses your skin at the first consultation, performs every treatment in a series, and adjusts the strength, pacing, and home care protocol based on how your specific skin tone and barrier condition responded between visits. For Pacific Beach clients dealing with marine layer sun damage, that continuity is the difference between a peel series that works and one that triggers rebound pigmentation halfway through.",
  },

  uniqueness: {
    heading: "What makes this different from beach-area med spas",
    points: [
      "Melanin-rich skin specialization — treatment strength, acid selection, and series pacing based on Fitzpatrick type and melanocyte reactivity, not a one-protocol-fits-all approach that triggers post-inflammatory hyperpigmentation",
      "May Gray/June Gloom damage expertise — clinical experience treating the specific UVA-driven pigmentation pattern that accumulates through overcast mornings when people skip sunscreen because the sky looks gray",
      "Clinical-grade equipment without the markup — HydraFacial Syndeo with medical-grade vacuum calibration, Lira Clinical peel protocols designed for melanin-rich skin, DMK Enzyme Therapy skin revision system, all priced below typical med spa rates",
      "Series planning at consultation — if your sun damage needs multiple treatments, the full course is mapped and scheduled at the first visit with treatment intervals set by barrier recovery time, not convenience or upselling pressure",
      "One practitioner accountability — the person who saw your skin before the first peel is the person adjusting acid strength at every visit, tracking hyperpigmentation response, and preventing the PIH rebound that happens when different estheticians apply different protocols",
    ],
  },

  processes: [
    {
      slug: "lira-peels",
      name: "Lira Clinical Chemical Peels",
      heading: "How Lira Peels treat May Gray sun damage without triggering PIH",
      intro:
        "Lira Clinical peels are formulated specifically for melanin-rich skin (Fitzpatrick types III-VI) with controlled-release acid delivery that addresses UVA-induced pigmentation without the aggressive exfoliation that triggers post-inflammatory hyperpigmentation. The peel system uses a combination of lactic acid (gentle, hydrating), mandelic acid (large molecule, doesn't penetrate as deeply), and kojic acid (tyrosinase inhibitor) to lighten existing pigmentation while preventing new melanocyte activation during the healing window.",
      steps: [
        {
          title: "Pre-treatment barrier stabilization (2 weeks)",
          description:
            "Home prep with Lira Clinical ICE serum (peptides, niacinamide, tranexamic acid) to stabilize the skin barrier and reduce melanocyte reactivity before the first peel — skipping this step on melanin-rich skin is what causes PIH",
        },
        {
          title: "Controlled-release peel application",
          description:
            "Lira peel solution applied in thin layers with 2-3 minute intervals between coats — not dumped on all at once like traditional glycolic peels. Total contact time: 8-12 minutes depending on Fitzpatrick type, barrier condition, and response to previous peels in the series",
        },
        {
          title: "Neutralization and inflammation control",
          description:
            "Peel neutralized with alkaline solution when target frosting appears, then cooling masque applied immediately to suppress inflammation and prevent the melanocyte overreaction that causes rebound pigmentation (10 minutes)",
        },
        {
          title: "Post-peel tyrosinase inhibitor protocol",
          description:
            "Strict sun avoidance for 7 days (indoor only during healing window), mineral SPF 50+ applied every 90 minutes after day 3, and Lira ICE serum twice daily to inhibit tyrosinase enzyme activity — this is what prevents your pigmentation from coming back darker",
        },
        {
          title: "Home care compliance verification",
          description:
            "Next peel not scheduled until you've completed the full post-peel protocol and the barrier has fully recovered — rushing the series is what causes PIH, not the peel itself",
        },
      ],
      footer:
        "Total treatment time: 45-60 minutes | Downtime: Mild flaking days 3-5 | Series: 4-6 peels, 14-21 days apart | Zero sun exposure for 7 days post-peel | Not suitable during summer beach season — schedule for fall/winter/early spring",
    },
    {
      slug: "dmk-enzyme-therapy",
      name: "DMK Enzyme Therapy",
      heading: "How DMK rebuilds barriers stripped by salt water and wind",
      intro:
        "DMK Enzyme Therapy works with the skin's plasmatic system (the circulatory network that delivers oxygen and nutrients to cells) rather than chemically exfoliating the surface. The enzyme masque creates a tightening effect that drives fresh oxygenated blood to the dermis, forcing the skin to function and rebuild the lipid barrier that salt water and wind strip away with each beach day. This is the treatment for Pacific Beach clients whose skin has become tight, reactive, and stinging under products it used to tolerate.",
      steps: [
        {
          title: "Deep cleanse without stripping",
          description:
            "DMK Pre-Cleanse (oil-based) and Beta Gel (lactic acid-based) remove salt residue, mineral deposits, and oxidized sebum without the foaming surfactants that further compromise an already-damaged barrier (5 minutes)",
        },
        {
          title: "Enzyme masque application",
          description:
            "Thick enzyme formulation applied to face, neck, and décolletage in upward strokes. As it dries over 10-15 minutes, the masque creates a pumping/pulsing sensation — that's the plasmatic response driving oxygenated blood to the surface and forcing lymphatic drainage of metabolic waste (45 minutes total contact time)",
        },
        {
          title: "Plasmatic response peak",
          description:
            "At peak effect (around 35-40 minutes), your face will feel tight and you'll see visible pulsing — this is not a chemical burn, it's reverse osmosis pulling fluid into the dermis and forcing capillary dilation. The stronger the pulse, the more compromised your barrier was before treatment",
        },
        {
          title: "Masque removal and transdermal serum infusion",
          description:
            "Masque removed with cool water and sponges, then DMK transdermal serums applied while pores are maximally receptive. For salt-stripped barriers: Essential Fatty Acids (EFA), Beta Gel (lactic acid + niacinamide), Herb & Mineral Spray (zinc, magnesium, botanical anti-inflammatories) to rebuild the lipid matrix (10 minutes)",
        },
        {
          title: "Home prescriptives (mandatory, not optional)",
          description:
            "DMK home care products prescribed based on your specific barrier damage pattern — Cleanser, Beta Gel, EFA, Herb & Mineral Spray used daily between sessions. The in-clinic enzyme treatment is designed to work WITH daily home support, not as a standalone monthly facial",
        },
      ],
      footer:
        "Total treatment time: 70-80 minutes | Downtime: Tightness for 12-24 hours, possible mild redness | Series: 4-6 sessions, 10-14 days apart | Avoid ocean swimming 48 hours post-treatment | Expect visible skin shedding days 3-5 (this is normal barrier turnover, not damage)",
    },
    {
      slug: "keravive-scalp",
      name: "Keravive Scalp Treatment",
      heading: "How Keravive clears scalp buildup from boardwalk UV exposure",
      intro:
        "Keravive is a three-step clinical scalp treatment using HydraFacial's vortex extraction technology adapted for the scalp. It addresses the follicle-level buildup that Pacific Beach lifestyles create: salt crystals from ocean exposure, mineral deposits from San Diego's hard water (280-350 mg/L total dissolved solids), oxidized sebum from UV exposure along the part line, and the residue from daily shampooing that never fully rinses clear when your water is this hard. The part line receives as much cumulative UV as your cheeks — often more, because people don't think to apply SPF to their scalp until the sunburn already happened.",
      steps: [
        {
          title: "Vortex exfoliation and extraction",
          description:
            "HydraFacial Keravive handpiece with spiral tip uses calibrated vacuum suction to remove salt crystals, mineral deposits, and oxidized sebum directly from the follicle opening — not scrubbing the surface with physical beads that scratch the scalp skin (10 minutes of continuous extraction across all scalp zones)",
        },
        {
          title: "Growth factor peptide infusion",
          description:
            "Biomimetic peptide complex (copper peptides, oligopeptides, biotin) with niacinamide and caffeine delivered under pressure into the scalp dermis at the follicle level to stimulate microcirculation, support keratinocyte function, and hydrate the scalp barrier (5 minutes)",
        },
        {
          title: "Take-home daily serum (included)",
          description:
            "30-day supply of Keravive scalp serum (peptides, panthenol, hydrators) applied nightly to maintain the treatment effect between sessions. The serum is not optional — skipping home care between treatments means starting from zero at each visit instead of building cumulative improvement",
        },
      ],
      footer:
        "Total treatment time: 20-25 minutes | Downtime: None — can swim same day if needed | Series: 3 sessions, 30 days apart | Full results visible after completing 3-treatment series | Maintenance: One session every 3-4 months to sustain results",
    },
  ],

  guarantee: {
    heading: "Our commitment to Pacific Beach clients",
    commitments: [
      {
        title: "Consultation-first, no surprises",
        body: "Every new client receives a full skin and scalp analysis before any treatment is booked. The consultation covers barrier condition assessment, Fitzpatrick type classification, UV damage evaluation (face and scalp), current product use review, and realistic treatment goals given your lifestyle and sun exposure patterns. No surprises, no mid-treatment upselling, no pressure to buy products you don't need. What you see in the consultation is exactly what happens in the treatment room.",
      },
      {
        title: "Series planning for beach lifestyles",
        body: "If your sun damage or barrier condition requires multiple treatments, we map the full course at the first appointment — number of sessions, treatment intervals, total investment, and scheduling around your beach/surf/kayak commitments so treatments don't conflict with events or summer plans. Chemical peels cannot be done during peak summer beach season (June-August) due to photosensitivity; we'll tell you that at consultation, not after you've paid for a series.",
      },
      {
        title: "Same practitioner, every visit",
        body: "One treatment room, one licensed esthetician. The person who assessed your Fitzpatrick type and barrier condition at the first visit performs every treatment in the series and adjusts the acid strength, masque timing, or extraction pressure based on how your specific skin responded last time. No rotating roster, no explaining your May Gray damage pattern to a different person at every appointment, no protocol inconsistency that triggers PIH.",
      },
      {
        title: "Transparent pricing, no hidden costs",
        body: "All treatment costs are published on this website and confirmed in writing before booking. Series pricing is disclosed at consultation before you commit — Lira 4-peel series is $749, DMK 6-session course is $1,499, Keravive 3-treatment series is $1,499. No hidden fees, no surprise add-ons, no mandatory product purchases beyond what's needed for post-treatment healing. If a treatment won't work for your lifestyle or concern, we tell you at consultation, not after you've started the series.",
      },
    ],
  },

  newFaqs: [
    {
      question: "How long does it take to drive from Pacific Beach to Mission Hills for a facial?",
      answer:
        "About fifteen minutes off-peak, closer to twenty-five during beach traffic. From Crystal Pier or the Garnet Avenue strip, take Garnet Avenue east to I-5 south (crosses the freeway near Balboa Avenue), then I-5 south to Washington Street (Exit 17) — 7 miles total. Mid-morning (10 AM-12 PM) and early afternoon (1-3 PM) are the fastest windows. During summer weekends and afternoons (late May through September), beach traffic backs up Garnet and Ingraham west of I-5 from noon onward, which can push the drive to thirty minutes or more. If you're coming from Crown Point, Sail Bay, or Mission Beach, add about five minutes to reach Garnet Avenue first. Early morning appointments (8-10 AM) or late afternoon (after 4 PM) avoid the worst of the beach congestion.",
      entityCount: 12,
    },
    {
      question: "Can I go to the beach after a HydraFacial or do I need to avoid the ocean?",
      answer:
        "You can go to the beach the same day after a HydraFacial, but most clients wait 24 hours before swimming in the ocean. HydraFacial Syndeo uses vortex extraction and peptide infusion that leave the skin more receptive to hydration for the first 6-8 hours, which also means more vulnerable to salt water irritation during that window. Going to the beach is fine — walking the boardwalk, sitting on the sand, kayaking on Mission Bay — but entering the ocean immediately means stripping the barrier again before the peptides have penetrated and the skin has stabilized. If your schedule requires same-day ocean swimming (morning surf session, afternoon treatment, or vice versa), wait at least 6 hours between treatment and saltwater entry, and apply a barrier occlusive like Aquaphor or CeraVe Healing Ointment to the face before getting in the water.",
      entityCount: 11,
    },
    {
      question: "How much do chemical peels cost for Pacific Beach clients with sun damage from May Gray?",
      answer:
        "Lira Chemical Peels at KIAMO SKIN start at $199 for Gentle Renewal (entry-level lactic/mandelic blend) and $299 for Advanced formulations (higher acid concentration with additional brightening agents). Most Pacific Beach clients with UVA-induced pigmentation need a series of 4-6 peels to see meaningful tone evening, which is why we offer series pricing: $749 for a 4-peel series (saves $97 compared to individual pricing) or $1,399 for 6 peels (saves $195). The first visit includes Fitzpatrick type assessment, UV damage pattern analysis, and discussion of realistic timelines — melasma from years of May Gray exposure doesn't resolve in one peel. Series pricing is confirmed at consultation before you commit. Each peel session takes 45-60 minutes with 3-5 days of mild flaking and strict 7-day sun avoidance. Chemical peels cannot be safely done during peak summer beach season (June-August) due to photosensitivity risk — we schedule for fall, winter, or early spring.",
      entityCount: 13,
    },
    {
      question: "Will a chemical peel remove May Gray sun damage permanently or does it come back?",
      answer:
        "No treatment removes sun damage permanently — UV exposure is ongoing, and melanocytes retain the capacity to produce pigment throughout your life. What Lira Chemical Peels do is suppress melanocyte activity and lighten existing pigmentation to a more even baseline tone. Results can last 6-18 months if you maintain strict daily sun protection: mineral SPF 50+ applied every 90 minutes during outdoor time, wide-brimmed hat for boardwalk walking, UV-blocking car windows for Garnet Avenue commutes, and avoiding peak UV hours (10 AM-3 PM) during summer. Pacific Beach lifestyle makes this challenging — the boardwalk, Tourmaline surf sessions, Crown Point kayaking, and Sail Bay paddleboarding all involve prolonged UV exposure. Without daily sun protection compliance, melasma will recur within 2-4 months, often darker than before treatment because melanocytes rebound more aggressively after peel series. Maintenance peels every 2-3 months help sustain results, but daily SPF compliance is the determining factor for long-term pigment control, not the peel itself.",
      entityCount: 14,
    },
    {
      question: "Is Keravive scalp treatment safe for surfers and ocean swimmers in Pacific Beach?",
      answer:
        "Yes, and it's specifically designed for year-round ocean exposure. Keravive uses HydraFacial's vortex extraction technology (vacuum-based suction) rather than chemical exfoliation, so there's no photosensitivity risk like with scalp peels. You can swim in the ocean the same day after treatment if needed, though most clients wait 12-24 hours to allow the peptide serum to penetrate fully before stripping it with salt water. The treatment clears salt crystals, mineral deposits from San Diego's hard water (which leaves calcium/magnesium buildup in follicles), and oxidized sebum from UV exposure along the part line — all of which accumulate when you're surfing at Tourmaline or swimming at Crown Point year-round. Keravive works as a three-session series spaced 30 days apart because one treatment clears the buildup but doesn't rebuild the scalp barrier — cumulative improvement happens across the full course. Most Pacific Beach surfers and ocean swimmers book the series in fall or winter when water is cold enough that missing a few swim days doesn't impact training, though the treatment itself doesn't require ocean avoidance.",
      entityCount: 13,
    },
    {
      question: "Can I get a chemical peel if I live in Pacific Beach and spend time on the boardwalk daily?",
      answer:
        "Yes, but timing and strict sun avoidance during the healing window become critical. Chemical peels make skin temporarily more photosensitive for 7-14 days after treatment, which is manageable if you can avoid direct midday sun during that period. We schedule peels for Pacific Beach clients during fall, winter, or early spring (October-April) when UV index is lower and marine layer coverage is longer each day. You'll need mineral SPF 50+ reapplied every 90 minutes, a wide-brimmed hat for any boardwalk time, and ideally zero direct sun exposure from 10 AM-3 PM during the first 7 days post-peel. If your lifestyle or work makes that impossible — daily boardwalk running, beach volleyball, surf coaching, outdoor lifeguarding — we recommend DMK Enzyme Therapy or HydraFacial instead. Both strengthen the barrier and address pigmentation without causing photosensitivity, meaning you can maintain your beach routine year-round. If you must peel during summer, you're accepting higher PIH risk and slower results because compliance with sun avoidance is nearly impossible when you live walking distance from Crystal Pier.",
      entityCount: 12,
    },
  ],

  geoData: {
    zipCodes: ["92109"],
    landmarks: [
      "Crystal Pier",
      "Tourmaline Surf Park",
      "Crown Point",
      "Sail Bay",
      "Mission Bay Park",
      "Kate Sessions Park",
      "Mission Beach Boardwalk",
      "Belmont Park",
      "Fanuel Street Cove",
      "Law Street Beach",
      "Garnet Avenue",
      "Grand Avenue",
      "Ingraham Street",
      "Lamont Street",
    ],
    highways: [
      "I-5",
      "Garnet Avenue",
      "Grand Avenue",
      "Mission Boulevard",
      "Ingraham Street",
      "La Jolla Boulevard",
      "Balboa Avenue",
    ],
    exits: [
      "Exit 17 (Washington Street)",
      "I-5 South via Garnet Avenue",
      "Balboa Avenue to I-5 interchange",
    ],
    adjacentCities: ["Mission Beach", "Bay Park", "Clairemont", "La Jolla"],
  },

  trust: {
    yearsInBusiness: "7+ years",
    licenseNumber: "PLACEHOLDER_LICENSE",
    certifications: [
      "California Board of Barbering and Cosmetology Licensed Esthetician",
      "DMK Certified Skin Revision Specialist",
      "HydraFacial Syndeo Advanced Protocol Provider",
      "Keravive Scalp Treatment Certified Practitioner",
      "Lira Clinical Advanced Peel Protocols Certified",
      "San Diego County Department of Environmental Health Permitted Facility",
    ],
    reviewCount: 37,
    reviewRating: 5.0,
    gbpUrl: "https://g.page/r/CQiLcJCN-DxkEAI",
    responseTime: "Within 24 hours on business days",
  },

  reviewHighlights: [
    {
      author: "Presleigh Cramer",
      text: "My facial with Kiki was such an amazing experience from start to finish. She was incredibly knowledgeable and took the time to ask questions about my skin, my skincare routine, and the products I currently use. I loved that she explained each step of the treatment and talked me through the products and steps she was doing. I left feeling completely refreshed, rejuvenated, and my skin felt so soft, hydrated, and glowing.",
      daysAgo: "5 weeks ago",
    },
    {
      author: "Mina Kamille",
      text: "I had such a great experience! From the moment I walked in, she was warm and welcoming. The space was spotless, relaxing, and made me feel comfortable right away. My facial was amazing, and my esthetician took the time to make sure my skin's needs were addressed. My skin looked noticeably brighter, smoother, and healthier afterward.",
      daysAgo: "4 weeks ago",
    },
    {
      author: "Natasha Solomon",
      text: "I had the worst breakout of my life and Kiamo Skin brought my skin back to life! The care Kiki put into telling me about what's going on and educating me on how to continue healing at home was monumental. The vibe of the space is so serene, and worth every penny.",
      daysAgo: "4 weeks ago",
    },
  ],
};
