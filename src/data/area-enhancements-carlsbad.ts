/**
 * ENHANCED AREA DATA - CARLSBAD COMPLETE
 *
 * Gold standard implementation following La Jolla/Pacific Beach/North Park/Encinitas/Del Mar template.
 *
 * Framework compliance:
 * - GMB Crush LLM Optimization Agent (AUDIO framework, 800-1000 words, city mentioned 6-8x)
 * - Local Entity Injection PRO (9-12 entities per 500 words = 18-24 total)
 * - Brave AI Indexing Skill PRO (Quick Answer ≤150 words, entity paragraph above fold)
 * - FAQ Money Printer PRO (5-7 conversion FAQs, answers ≤150 words, objection removal)
 * - Local SEO Schema Generator (complete LocalBusiness schema)
 *
 * Carlsbad Focus:
 * - Primary concern: Distance constraint (35 miles, 35-40 min) requires series planning at consultation
 * - Geographic: Carlsbad Village, La Costa, Aviara, Bressi Ranch, Calavera Hills, Batiquitos Lagoon
 * - Unique positioning: Series-first planning (Procell 3-session, Keravive 3-session scheduled as block)
 * - Demographics: North County coastal, affluent, values planning/efficiency
 * - Featured treatments: Procell Microchanneling, Keravive, HydraFacial (all series-based)
 */

import type { AreaEnhancement } from './area-enhancements-lajolla';

export const carlsbadEnhanced: AreaEnhancement = {
  quickAnswer:
    "KIAMO SKIN provides corrective facial treatments at a one-room facility in Mission Hills, San Diego (92103), approximately 35 miles south of Carlsbad via I-5 (35-40 minutes). Kiki, a California licensed esthetician with 7+ years specializing in series-based corrective work, uses Procell Microchanneling for texture and acne scarring (three sessions spaced 4-6 weeks), Keravive scalp therapy for follicle health (three sessions spaced monthly), and HydraFacial for maintenance hydration. Clients travel from Carlsbad Village near the COASTER station, La Costa and Aviara near Palomar Airport Road, Bressi Ranch, and Calavera Hills. Treatments start at $259, with series planning at consultation that accounts for the 35-mile distance — all appointments scheduled as a block upfront, not booked visit-by-visit.",

  serviceAreaParagraph:
    "KIAMO SKIN serves clients traveling from across Carlsbad, including Carlsbad Village along Carlsbad Village Drive near the COASTER station and State Street downtown corridor (92008), La Costa neighborhoods along La Costa Avenue and Aviara Parkway near Omni La Costa Resort & Spa and Carlsbad Golf Center (92009), Aviara community surrounding Park Hyatt Aviara Resort and Aviara Golf Club near Batiquitos Lagoon (92011), Bressi Ranch master-planned community along Palomar Airport Road and Camino Vida Roble east of El Camino Real (92009), Calavera Hills residential neighborhoods along Tamarack Avenue and College Boulevard near Calavera Lake (92010), and the Carlsbad Flower Fields on Palomar Airport Road that bloom each spring (92011). Many clients also travel from neighboring Oceanside to the north and Encinitas to the south along the I-5 corridor. The treatment room is in Mission Hills, San Diego County (92103), accessible via I-5 south from Carlsbad Village Drive, Palomar Airport Road, or Cannon Road — approximately 35 miles and 35-40 minutes off-peak, exiting at Washington Street (Exit 17).",

  navigationContext:
    "From Carlsbad Village near the COASTER station on Carlsbad Village Drive and State Street, take Carlsbad Village Drive east 0.3 miles to I-5 south on-ramp. Merge onto I-5 south and stay in center or right lanes for the entire 35-mile stretch through Encinitas, Solana Beach, Del Mar, Torrey Pines, La Jolla, and UTC. The coastal corridor has minimal exits and moves quickly off-peak. Pass Old Town San Diego and take Exit 17 (Washington Street) after approximately 35 miles total. Turn right onto Washington Street, cross over the freeway overpass, then turn right onto Reynard Way (first right after crossing I-5). The treatment room at 3067 Reynard Way is 0.3 miles south on the right with free parking on site. From La Costa or Aviara near Palomar Airport Road, take Palomar Airport Road west to I-5 south on-ramp (reduces total distance to 30 miles, saves 5 minutes). From Bressi Ranch, take Palomar Airport Road west 4 miles to I-5 south. From Calavera Hills inland areas near College Boulevard, take College Boulevard south to Cannon Road west, then Cannon Road west to I-5 south on-ramp. Off-peak travel time: 35-40 minutes from Village, 30-35 minutes from La Costa/Aviara. During weekday morning commute southbound (7-9 AM) or spring Flower Fields season when Palomar Airport Road backs up (March-May weekends), I-5 can add 10-15 minutes. Early morning appointments (8-9 AM arrive before commute peaks) or midday (11 AM-2 PM) avoid the worst traffic. Alternative: COASTER commuter train runs from Carlsbad Village station to Santa Fe Depot downtown San Diego in 52 minutes (check schedule, limited weekend service).",

  cityModifiers:
    "Carlsbad occupies seven miles of San Diego North County coastline at the northern edge of the county line, between Oceanside to the north and Encinitas to the south. The city stretches from the Pacific Ocean east past El Camino Real, incorporating coastal Carlsbad Village, inland neighborhoods (Bressi Ranch, Calavera Hills), and the southern La Costa and Aviara resort areas near Batiquitos Lagoon. Carlsbad Village clusters around Carlsbad Village Drive and the COASTER commuter rail station — a compact, walkable downtown with restaurants, breweries, and beach access that sits directly on I-5. La Costa and Aviara occupy the city's southern half along Palomar Airport Road, home to Omni La Costa Resort & Spa (built 1965, Golden Door Spa), Park Hyatt Aviara Resort overlooking Batiquitos Lagoon, and Aviara Golf Club. Bressi Ranch is a master-planned community built in the 2000s east of El Camino Real along Palomar Airport Road with mixed-use retail, dining, and residential neighborhoods. Calavera Hills sits further inland near Calavera Lake and nature preserve. The Carlsbad Flower Fields along Palomar Airport Road bloom annually March through May with 50 acres of Tecolote Giant Ranunculus flowers — a regional attraction that briefly backs up I-5 traffic in both directions during spring weekends. Carlsbad is 35 miles north of Mission Hills via I-5 south, making it the farthest North County area served by KIAMO — a genuine 35-40 minute drive off-peak, 45-50 minutes during commute or Flower Fields season. Distance is the constraint that shapes treatment planning for Carlsbad clients: corrective series (Procell Microchanneling, Keravive scalp therapy, Lira peels, DMK Enzyme Therapy) are scheduled as a complete block at the first appointment rather than booked visit-by-visit, because rebooking friction causes clients traveling 35+ miles to abandon series halfway through when logistics become unsustainable. What works: three Procell sessions scheduled at weeks 0, 4, and 8 at consultation. What doesn't: booking one Procell session, hoping the client reschedules for session two a month later, and discovering they never follow through because the drive is too far to coordinate repeatedly. Carlsbad clients who complete corrective series are the ones for whom all appointments are pre-scheduled and calendar-blocked at the start, eliminating the decision fatigue that kills compliance at distance.",

  authority: {
    heading: "One esthetician, every appointment",
    body: "Kiki is a California licensed esthetician with over 7 years of experience treating texture concerns, acne scarring, scalp health, and barrier damage through series-based corrective protocols. Certified in Procell Microchanneling stamping technique (not rolling devices that produce uneven penetration), trained in HydraFacial Syndeo advanced protocols including Keravive scalp treatment, and certified in DMK Enzyme Therapy's plasmatic skin revision system and Lira Clinical peel protocols for melanin-rich skin. The treatment room has one chair at 3067 Reynard Way in Mission Hills — no rotating estheticians, no staffing turnover, no protocol variations between visits. The same esthetician assesses your texture severity or scalp condition at the first consultation, performs every treatment in a series, and adjusts the microchannel depth, peel strength, or enzyme masque timing based on how YOUR specific skin responded between sessions. For Carlsbad clients traveling 35 miles each way, that single-practitioner continuity is essential — protocol inconsistency from rotating staff is what causes uneven results that require corrective treatments, extending a three-session series into five or six sessions because earlier work was applied inconsistently.",
  },

  uniqueness: {
    heading: "What makes this worth the drive from North County",
    points: [
      "Series-first planning that accounts for distance — Procell three-session series, Keravive three-session series, Lira 4-6 peel series all scheduled as a complete block at consultation, not booked visit-by-visit after each treatment",
      "Single practitioner consistency — the person who set your Procell depth or assessed your scalp condition at visit one performs every treatment in the series, eliminating protocol variations that extend series length or produce uneven results",
      "Realistic timeline discussion at consultation — if the distance makes a series unsustainable given your schedule, we tell you before you pay for treatments you won't complete, not after you've started and abandoned it halfway",
      "Treatment pairing to maximize drive efficiency — when appropriate, two complementary treatments in one visit (HydraFacial + dermaplaning, Procell + scalp assessment) to reduce total trips without compromising results",
      "No membership pressure or package upselling — series pricing is transparent and confirmed at consultation, with no pressure to buy annual memberships or product packages beyond essential post-treatment home care",
    ],
  },

  processes: [
    {
      slug: "procell-microchanneling",
      name: "Procell Microchanneling",
      heading: "How Procell rebuilds texture and acne scars across a three-session series",
      intro:
        "Procell Microchanneling uses sterile microchannel stamps with nine tiny needles to create controlled micro-injuries at precise depths (0.25mm-2.0mm) that trigger wound healing cascade, stimulate fibroblast activity, and increase collagen production. The stamps are held perpendicular to skin and pressed firmly to achieve consistent depth across the entire treatment area — not dragged like dermarollers that create uneven penetration. Three sessions spaced 4-6 weeks apart produce cumulative collagen remodeling, with visible results after session two and peak improvement 3-6 months post-series. Safe for all skin tones because it's mechanical (not heat-based), so no PIH risk.",
      steps: [
        {
          title: "Texture assessment and three-session series planning",
          description:
            "First visit includes texture severity grading (mild/moderate/severe), collagen laxity assessment, and complete series scheduling. All three Procell appointments scheduled at consultation as a block (weeks 0, 4-6, and 8-12) to eliminate rebooking friction for clients traveling 35 miles each way. Treatment depth determined at visit one: 1.5-2.0mm for face (collagen stimulation), 0.25-0.5mm for periorbital (avoid excess bleeding), 1.0-1.5mm for neck/décolletage",
        },
        {
          title: "Topical anesthetic application (30 minutes)",
          description:
            "Compounded lidocaine cream (23-30% concentration) applied to entire treatment area and occluded with plastic wrap for 30 minutes to achieve full dermal anesthesia. Procell at collagen-stimulating depths (1.5-2.0mm) is painful without proper numbing — rushing this step means you won't tolerate the depth needed for results",
        },
        {
          title: "Microchanneling with perpendicular stamping technique",
          description:
            "Sterile Procell tip with nine needles stamped perpendicular to skin (90-degree angle) in overlapping passes across entire treatment area. Not dragged or rolled. Stamp pressed firmly to achieve target depth, lifted, moved 2-3mm, and stamped again. Blood spotting indicates proper depth. Full face: 15-20 minutes of active stamping across forehead, cheeks, chin, jawline, periorbital, upper lip, neck if included",
        },
        {
          title: "Growth factor serum infusion while channels are open",
          description:
            "Procell human bone marrow-derived growth factor serum (peptides, cytokines, growth factors) applied immediately while microchannels are open — compounds penetrate to dermal layer (1-2mm depth) where fibroblasts reside. This is NOT hyaluronic acid; growth factors are what trigger collagen production cascade. Serum absorption: 5 minutes while skin is maximally receptive",
        },
        {
          title: "Post-treatment protocol and collagen remodeling timeline",
          description:
            "Redness and swelling for 24-48 hours (like moderate sunburn), flaking/peeling days 3-7 as micro-injuries heal. Zero sun exposure for 7 days, mineral SPF 50+ every 90 minutes after day 7. Collagen production peaks 4-6 weeks post-treatment — sessions are spaced monthly to allow full collagen remodeling before the next injury stimulus. Results visible after session two, peak after session three with continued improvement for 3-6 months post-series",
        },
      ],
      footer:
        "Total treatment time: 60-75 minutes (includes 30-minute numbing) | Downtime: Redness 24-48 hours, flaking days 3-7 | Series: 3 treatments, 4-6 weeks apart | Zero sun exposure 7 days post-treatment | All three appointments scheduled at consultation for Carlsbad clients",
    },
    {
      slug: "keravive-scalp",
      name: "Keravive Scalp Treatment",
      heading: "How Keravive addresses scalp buildup and follicle health across a three-session series",
      intro:
        "Keravive uses HydraFacial's vortex extraction technology adapted for the scalp to clear follicle-level congestion (sebum plugs, product buildup, hard water mineral deposits), hydrate the scalp dermis, and deliver growth factor peptides to support follicle function. Three sessions spaced 30 days apart produce cumulative scalp health improvement, with visible reduction in dryness, flaking, and thinning after completing the full series. Take-home daily serum (included in series) maintains results between sessions and after series completion.",
      steps: [
        {
          title: "Scalp assessment and three-session series planning",
          description:
            "First visit includes scalp condition evaluation (dryness, flaking, follicle congestion, thinning patterns), hard water impact assessment, and complete series scheduling. All three Keravive appointments scheduled at consultation as a block (weeks 0, 4, 8) for Carlsbad clients traveling 35 miles each way — eliminates rebooking friction that causes series abandonment",
        },
        {
          title: "Vortex exfoliation and follicle extraction",
          description:
            "HydraFacial Keravive handpiece with spiral tip uses calibrated vacuum suction to extract sebum plugs, dead cells, and mineral deposits directly from follicle openings. Not surface scrubbing — suction-based extraction at follicle level. Full scalp coverage: 10 minutes continuous extraction across all zones",
        },
        {
          title: "Peptide and hydration infusion at follicle level",
          description:
            "Biomimetic growth factor peptide complex (copper peptides, oligopeptides, biotin, niacinamide, caffeine) delivered under pressure into scalp dermis at 0.5-1mm depth without needles. Stimulates microcirculation, supports keratinocyte function, hydrates scalp barrier (5 minutes)",
        },
        {
          title: "Take-home daily serum (30-day supply included)",
          description:
            "30-day supply of Keravive peptide serum applied nightly to maintain treatment effect between sessions. Not optional — cumulative improvement depends on daily home use, not just monthly in-office treatments. New 30-day supply provided at each of the three sessions",
        },
      ],
      footer:
        "Total treatment time: 20-25 minutes | Downtime: None | Series: 3 sessions, 30 days apart | Full results after completing 3-treatment series | All appointments scheduled at consultation for Carlsbad clients | Maintenance: One session every 3-4 months post-series",
    },
    {
      slug: "hydrafacial",
      name: "HydraFacial Syndeo",
      heading: "How HydraFacial maintains results between corrective series or as standalone monthly treatment",
      intro:
        "HydraFacial Syndeo uses patented vortex extraction technology (vacuum suction paired with spiral tip delivery) to cleanse, extract, and hydrate without manual pressure or abrasive scrubbing. For Carlsbad clients, HydraFacial serves as maintenance between corrective series (keeps skin hydrated during Procell collagen remodeling, maintains scalp between Keravive sessions) or as standalone monthly treatment for clinical hydration without corrective downtime. Safe for all skin tones, zero photosensitivity, can be done year-round.",
      steps: [
        {
          title: "Vortex cleanse and gentle exfoliation",
          description:
            "Spiral tip with mild diamond abrasion dislodges surface debris, oxidized sebum, and sunscreen residue without foaming cleansers that strip lipids. Gentler than manual cleansing (5 minutes)",
        },
        {
          title: "Beta-peel solution (glycolic/salicylic blend)",
          description:
            "Mild acid solution loosens dead cells without the contact time or strength of standalone chemical peels. Can be adjusted or skipped entirely on sensitive skin (3 minutes standard, 1-2 minutes reduced, or omitted)",
        },
        {
          title: "Vortex extraction (vacuum-based, not manual)",
          description:
            "Calibrated vacuum removes blackheads and congestion using negative pressure instead of manual squeezing. Suction strength adjustable for skin sensitivity (5-8 minutes across T-zone and cheeks)",
        },
        {
          title: "Peptide and hyaluronic acid infusion",
          description:
            "Growth factor peptides, hyaluronic acid, niacinamide, and antioxidants delivered under pressure into dermis at 0.5-1mm depth without needles. Bypasses surface barrier and hydrates from beneath (5 minutes)",
        },
        {
          title: "Red LED therapy (optional)",
          description:
            "630nm wavelength stimulates fibroblast activity to support collagen synthesis and reduce inflammation without heat. Safe for all skin tones (5 minutes)",
        },
      ],
      footer:
        "Total treatment time: 30-35 minutes | Downtime: None | Can be done monthly for maintenance | Often paired with corrective series: HydraFacial at weeks 2, 6, 10 between Procell at weeks 0, 4, 8 | Worth the 35-mile drive for consistent clinical results",
    },
  ],

  guarantee: {
    heading: "Commitment to clients traveling from Carlsbad",
    commitments: [
      {
        title: "Series-first planning that accounts for 35-mile distance",
        body: "Every new client consultation includes realistic discussion of treatment timelines given the drive. If your concern requires a series (Procell is three sessions spaced 4-6 weeks, Keravive is three sessions spaced monthly, Lira peels are 4-6 sessions spaced biweekly), all appointments are scheduled as a complete block at the first visit — not booked one at a time after each treatment. This eliminates the rebooking friction that causes Carlsbad clients to abandon series halfway when coordinating the drive repeatedly becomes unsustainable. If the series commitment isn't realistic given your schedule and the distance, we tell you at consultation before you pay.",
      },
      {
        title: "Honest assessment of whether the drive is worth it",
        body: "Not every concern justifies a 35-mile drive. For basic monthly hydration facials, there are many excellent options closer to Carlsbad. For corrective work (Procell for texture, Keravive for scalp health, DMK for barrier rebuild, Lira peels for pigmentation in melanin-rich skin) where protocol consistency determines results and rotating staff causes uneven outcomes — the drive is worth it if the alternative is repeating treatments that don't work. We tell you at consultation which category your concern falls into.",
      },
      {
        title: "Same practitioner, zero protocol variations",
        body: "One treatment room, one licensed esthetician. The person who assessed your texture severity or scalp condition and set your Procell depth or Keravive protocol at visit one performs every treatment in the series and adjusts based on how YOUR specific skin responded between sessions. No rotating staff means no technique variations — critical for Carlsbad clients traveling 70 miles round-trip who cannot afford to extend a three-session series into five sessions because protocol inconsistency required corrective treatments.",
      },
      {
        title: "Transparent series pricing confirmed at consultation",
        body: "All treatment costs published on this website and confirmed in writing before series commitment. Series pricing: Procell 3-treatment series $1,199, Keravive 3-treatment series $1,499, Lira 4-peel series $749, DMK 6-session course $1,499. No hidden fees, no surprise add-ons, no pressure to buy annual memberships or product packages beyond essential post-treatment home care (growth factor serum for Procell, daily peptide serum for Keravive, barrier serums for DMK/Lira). Total series investment confirmed before first payment.",
      },
    ],
  },

  newFaqs: [
    {
      question: "How long does it take to drive from Carlsbad Village to Mission Hills for Procell Microchanneling?",
      answer:
        "About thirty-five to forty minutes off-peak via I-5 south, approximately 35 miles. From Carlsbad Village near the COASTER station on Carlsbad Village Drive, take Carlsbad Village Drive east to I-5 south on-ramp, stay in center lanes through the entire North County coastal stretch (Encinitas, Solana Beach, Del Mar, Torrey Pines, La Jolla, UTC), and exit at Washington Street (Exit 17) in Mission Hills. From La Costa or Aviara near Palomar Airport Road, the drive is shorter (30 miles, 30-35 minutes) because you're 5 miles closer. Early morning (8-9 AM) and midday (11 AM-2 PM) are consistently the fastest windows. During weekday morning commute southbound (7-9 AM peaks), I-5 through Encinitas and Del Mar can add 10 minutes. During spring Flower Fields season (March-May weekends), Palomar Airport Road backs up and adds another 5 minutes. Most Carlsbad clients schedule early morning or midday appointments to avoid commute traffic on the return drive north.",
      entityCount: 12,
    },
    {
      question: "Is Procell Microchanneling worth driving from La Costa or Aviara for texture concerns?",
      answer:
        "It depends on whether you've already tried local North County options and whether your texture requires series-based corrective work. For mild texture that improves with regular facials, probably not — there are many good med spas in Carlsbad and Encinitas closer to home. For moderate-to-severe texture from UV damage, acne scarring, or collagen breakdown that hasn't improved with surface treatments — Procell Microchanneling with consistent stamping technique (not rolling devices) is worth the 30-35 minute drive if the alternative is continuing monthly facials that feel smooth temporarily but never rebuild the underlying collagen matrix. The honest answer: Procell requires three sessions spaced 4-6 weeks apart (all scheduled at consultation as a block for La Costa/Aviara clients), 7 days of strict sun avoidance after each treatment, and cumulative investment of $1,199 for the series. Results are visible after session two, peak after session three with continued improvement for 3-6 months post-series. If that commitment is sustainable given your schedule and the drive, the results justify the distance. If not, we tell you at consultation before you pay.",
      entityCount: 13,
    },
    {
      question: "Can I take the COASTER train from Carlsbad Village instead of driving to Mission Hills?",
      answer:
        "Yes, the COASTER commuter train runs from Carlsbad Village station to Santa Fe Depot in downtown San Diego in approximately 52 minutes, then it's a 10-minute rideshare from Santa Fe Depot to the treatment room at 3067 Reynard Way in Mission Hills. Total travel time via COASTER: about 65-70 minutes one-way versus 35-40 minutes driving. The train runs weekdays only with limited Saturday service (no Sunday service) — typically 5-6 southbound departures in the morning (6 AM-9 AM), then afternoon/evening departures (3 PM-7 PM). Check current COASTER schedule at goNCTD.com before booking appointments. Most Carlsbad clients who use COASTER schedule late morning or early afternoon appointments (10 AM-1 PM) that align with mid-morning southbound and mid-afternoon northbound trains. The train eliminates I-5 traffic stress and parking concerns, though total travel time is nearly double compared to driving. Monthly COASTER pass holders often prefer train over driving for series appointments (Procell three sessions, Keravive three sessions) to avoid 70-mile round-trip drives repeatedly.",
      entityCount: 11,
    },
    {
      question: "How much does a Keravive scalp series cost for Carlsbad clients, and are all three sessions scheduled upfront?",
      answer:
        "Keravive scalp treatment at KIAMO SKIN is $599 per session, or $1,499 for a three-treatment series (saves $298 vs. individual pricing). The series requires three sessions spaced 30 days apart to produce cumulative scalp health improvement — one treatment clears congestion but doesn't rebuild follicle function, so the full course is what delivers visible results (reduced dryness, flaking, improved hair density). For Carlsbad clients traveling 35 miles each way, all three Keravive appointments are scheduled as a complete block at the first consultation (weeks 0, 4, 8) to eliminate rebooking friction. You receive a 30-day supply of Keravive daily peptide serum at each session (included in series pricing, not an add-on) applied nightly between treatments — the serum is what sustains results, not just monthly in-office treatments. Series pricing is confirmed at consultation before you commit. Total investment: $1,499 for three sessions including take-home serums. Maintenance after series completion: one Keravive session every 3-4 months to sustain results long-term.",
      entityCount: 12,
    },
    {
      question: "Can I combine HydraFacial and Procell Microchanneling in the same visit to reduce trips from Bressi Ranch?",
      answer:
        "No, Procell and HydraFacial cannot be done in the same visit because Procell creates micro-injuries that require 7-10 days of healing before any additional treatments can be performed on the same area. However, the treatments are often paired strategically across a series timeline to maximize efficiency: Procell at weeks 0, 4, and 8 for collagen stimulation, with HydraFacial at weeks 2, 6, and 10 for hydration maintenance during the collagen remodeling windows. This allows you to visit biweekly (every 2 weeks) instead of monthly, keeping skin hydrated throughout the Procell series without extending the total timeline. For Bressi Ranch clients traveling 35+ miles, this biweekly pacing (6 total visits over 10 weeks) is more efficient than monthly Procell alone (3 visits over 8 weeks with no maintenance between). What CAN be combined safely in one visit: HydraFacial + dermaplaning, Keravive scalp + HydraFacial face, consultation + first HydraFacial. What cannot: Procell + anything else on the same treatment day. Pairing options are discussed at consultation based on your concern and schedule.",
      entityCount: 11,
    },
    {
      question: "Is the drive from Calavera Hills worth it for a facial, or should I find something closer?",
      answer:
        "It depends on what you're trying to fix and whether your concern requires series-based corrective work with protocol consistency. For monthly relaxation facials or basic hydration, probably not — there are many excellent options in Carlsbad, Encinitas, and Oceanside within 15 minutes of Calavera Hills. For corrective series (Procell for texture, Keravive for scalp thinning, Lira peels for hyperpigmentation in melanin-rich skin, DMK for barrier rebuild) where rotating estheticians cause protocol inconsistency and uneven results — the drive is worth it if you've already tried local options without success. The honest test: if you're booking monthly facials that feel good temporarily but the underlying problem never improves, that's surface treatment, not correction. KIAMO specializes in series-based corrective work with single-practitioner consistency — all sessions scheduled upfront, same person every visit, protocols adjusted based on YOUR response. The 35-40 minute drive from Calavera Hills matters less when you're completing a series that fixes the problem (3 Procell sessions over 8 weeks, 4-6 Lira peels over 8-12 weeks) versus repeating monthly facials indefinitely that never produce lasting change.",
      entityCount: 12,
    },
  ],

  geoData: {
    zipCodes: ["92008", "92009", "92010", "92011"],
    landmarks: [
      "Carlsbad Village",
      "COASTER Station",
      "Carlsbad Village Drive",
      "State Street",
      "La Costa",
      "Aviara",
      "Omni La Costa Resort & Spa",
      "Park Hyatt Aviara Resort",
      "Aviara Golf Club",
      "Bressi Ranch",
      "Calavera Hills",
      "Calavera Lake",
      "Batiquitos Lagoon",
      "Carlsbad Flower Fields",
      "Palomar Airport Road",
    ],
    highways: [
      "I-5",
      "Carlsbad Village Drive",
      "Palomar Airport Road",
      "Cannon Road",
      "College Boulevard",
      "El Camino Real",
      "La Costa Avenue",
      "Aviara Parkway",
    ],
    exits: [
      "Exit 17 (Washington Street)",
      "Carlsbad Village Drive to I-5 South",
      "Palomar Airport Road to I-5 South",
      "Cannon Road to I-5 South",
    ],
    adjacentCities: ["Oceanside", "Encinitas", "Vista"],
  },

  trust: {
    yearsInBusiness: "7+ years",
    licenseNumber: "PLACEHOLDER_LICENSE",
    certifications: [
      "California Board of Barbering and Cosmetology Licensed Esthetician",
      "Procell Microchanneling Certified Practitioner",
      "HydraFacial Syndeo Advanced Protocol Provider",
      "Keravive Scalp Treatment Certified Practitioner",
      "DMK Certified Skin Revision Specialist",
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
      author: "Arica Ladner",
      text: "I've been going to her for 4–5 years now, and I honestly wouldn't trust anyone else with my skin! I get a HydraFacial and dermaplaning every month, and my skin always feels so smooth, hydrated, and refreshed afterward. She's incredibly knowledgeable, professional, and truly cares about her clients.",
      daysAgo: "4 weeks ago",
    },
    {
      author: "Andrew Seery",
      text: "Had multiple hydro-facials. Loved them so kept coming back. Kind, warm atmosphere, very professional and friendly. Would recommend for anyone!",
      daysAgo: "4 weeks ago",
    },
    {
      author: "Brittaney Gandy",
      text: "Incredible work every session. I use the products she recommended me to use at home to help maintain. Highly recommend her for dry skin folks.",
      daysAgo: "4 weeks ago",
    },
  ],
};
