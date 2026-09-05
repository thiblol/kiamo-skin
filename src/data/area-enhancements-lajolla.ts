/**
 * ENHANCED AREA DATA - LA JOLLA COMPLETE EXAMPLE
 *
 * This file contains the complete revamp for La Jolla as the gold standard.
 * After review/approval, this same structure will be applied to all 9 areas.
 *
 * Framework compliance:
 * - GMB Crush LLM Optimization Agent (AUDIO framework)
 * - Trust Signal Gap Hunter (authority, social proof, risk reversal)
 * - Local Entity Injection PRO (9-12 entities per 500 words)
 * - FAQ Money Printer PRO (AIO-triggering format)
 */

export interface AreaEnhancement {
  /** Quick Answer for AI Overview - 2-3 sentences, entity-dense */
  quickAnswer: string;

  /** Service Area paragraph - geo-entity injection */
  serviceAreaParagraph: string;

  /** Navigation landmarks paragraph */
  navigationContext: string;

  /** City modifiers - climate, building, demographic */
  cityModifiers: string;

  /** Authority/credentials block */
  authority: {
    heading: string;
    body: string;
  };

  /** What makes KIAMO different */
  uniqueness: {
    heading: string;
    points: string[];
  };

  /** Technical process descriptions */
  processes: Array<{
    slug: string;
    name: string;
    heading: string;
    intro: string;
    steps: Array<{ title: string; description: string }>;
    footer: string;
  }>;

  /** Guarantee/commitment block */
  guarantee: {
    heading: string;
    commitments: Array<{ title: string; body: string }>;
  };

  /** Enhanced FAQs - 3 new + reformatted existing */
  newFaqs: Array<{
    question: string;
    answer: string;
    entityCount: number;
  }>;

  /** Geographic entities for schema */
  geoData: {
    zipCodes: string[];
    landmarks: string[];
    highways: string[];
    exits: string[];
    adjacentCities: string[];
  };

  /** Trust signals */
  trust: {
    yearsInBusiness: string;
    licenseNumber: string;
    certifications: string[];
    reviewCount: number;
    reviewRating: number;
    gbpUrl: string;
    responseTime: string;
  };

  /** Review highlights - 2-3 relevant excerpts from actual GBP reviews */
  reviewHighlights?: Array<{
    author: string;
    text: string;
    daysAgo: string;
  }>;
}

export const laJollaEnhanced: AreaEnhancement = {
  quickAnswer:
    "KIAMO SKIN treats barrier damage and scalp conditions from year-round ocean exposure at a one-room studio in Mission Hills, San Diego (92103), about 12 miles south of La Jolla Village via I-5. Kiki, a California licensed esthetician with 7+ years specializing in melanin-rich skin, uses HydraFacial Syndeo vortex extraction and Keravive scalp therapy for swimmers from La Jolla Cove, Windansea, and La Jolla Shores. Treatments start at $259, with series planning for ocean swimmers who need multiple visits.",

  serviceAreaParagraph:
    "KIAMO SKIN serves clients from across La Jolla, including the Village near Prospect Street and Girard Avenue (92037), Bird Rock at the southern coastal edge (92037), La Jolla Shores near Scripps Institution of Oceanography and Kellogg Park (92037), the UCSD campus and graduate housing corridor (92093), and Windansea Beach neighborhoods along Neptune Place. Many clients also travel from adjacent UTC near Westfield mall and the Costa Verde shopping district, Torrey Pines Mesa above Torrey Pines Golf Course, the northern Pacific Beach border along Tourmaline Street, and University City east of I-5. The studio is in Mission Hills, San Diego County (92103), making it accessible to all coastal areas via southbound I-5 from La Jolla Village Drive (Exit 28), Gilman Drive (Exit 27), or Genesee Avenue (Exit 26).",

  navigationContext:
    "From La Jolla Cove near Coast Boulevard and the Children's Pool, head east on Torrey Pines Road toward I-5 — you'll pass UCSD Medical Center Hillcrest on the right after about three miles. Merge onto I-5 south just past the Genesee Avenue interchange (Exit 26). Stay in the center lanes through the Sorrento Valley corridor where right lanes stack during commute hours. Washington Street (Exit 17) comes up about 8 miles south of the merge, just past Old Town Transit Center. Turn left at the exit, cross over the freeway, and Reynard Way is the first right turn after you pass through the Washington Street and India Street intersection. The studio at 3067 Reynard Way sits between Mission Hills and Middletown, approximately 0.4 miles from the freeway exit with free parking on site.",

  cityModifiers:
    "La Jolla sits on coastal bluffs facing southwest, where the marine layer burns off by early afternoon most days of the year, exposing skin to direct UVA without the gray-sky warning that might prompt sunscreen application. The town's seven miles of coastline — from the Cove south through Windansea to Bird Rock — maintain year-round water temperatures between 57°F in winter and 68°F in summer, cold enough to drive vasoconstriction but warm enough that wetsuits are optional for many swimmers. This creates a unique exposure pattern: cold water tightens the barrier while salt strips it, then sun exposure immediately after swimming hits compromised skin when it's least protected. Homes built in the 1950s and 1960s along Coast Boulevard and Neptune Place sit on sandstone bluffs with minimal landscaping, meaning there's no shade buffer between the street and the ocean, and UV exposure is direct and cumulative for anyone who spends time outside. The La Jolla Cove Swim Club has operated since 1916, and daily morning swims happen regardless of season — this year-round pattern means barrier damage accumulates without seasonal recovery periods.",

  authority: {
    heading: "One esthetician, every appointment",
    body: "Kiki is a California licensed esthetician with over 7 years of experience treating barrier damage and pigmentation in melanin-rich skin. Certified in DMK Enzyme Therapy's skin revision system and trained in HydraFacial Syndeo advanced protocols, including the Keravive scalp treatment extension. The studio has one treatment room at 3067 Reynard Way in Mission Hills — no rotating roster, no staffing changes. The same esthetician assesses your skin at the first visit, performs every treatment in a series, and adjusts the plan based on how your skin responded last time. For ocean swimmers traveling from La Jolla, that continuity is what makes a barrier repair series viable rather than aspirational — you're not explaining your skin history to a different person at every visit.",
  },

  uniqueness: {
    heading: "What makes this different from spa facials",
    points: [
      "Clinical-grade equipment — HydraFacial Syndeo with medical-grade vacuum calibration and peptide infusion under pressure, not manual extraction with steam",
      "Melanin-rich skin specialization — treatment strength, pacing, and product selection based on Fitzpatrick type and barrier condition, not a universal protocol applied to every client regardless of skin tone",
      "Series planning at consultation — if your barrier damage needs multiple visits, the full course is mapped and scheduled at the first appointment, with treatment intervals set by recovery time, not convenience",
      "One practitioner, one room — the person who saw your skin before the first treatment is the person adjusting the plan at every visit, tracking how your barrier responds between sessions",
      "No upselling mid-treatment — what was discussed and priced at consultation is what happens in the room, with no pressure to add services you didn't agree to",
    ],
  },

  processes: [
    {
      slug: "hydrafacial",
      name: "HydraFacial Syndeo",
      heading: "How HydraFacial works for salt water exposure",
      intro:
        "HydraFacial Syndeo uses a patented vortex extraction system to remove salt deposits and mineral buildup from follicles without the manual pressure that can traumatize already-compromised skin. The treatment addresses barrier damage in five sequential phases, using medical-grade equipment with calibrated vacuum pressure and controlled serum delivery.",
      steps: [
        {
          title: "Vortex cleanse",
          description:
            "Spiral tip with gentle abrasion dislodges oxidized sebum mixed with salt crystals from follicle openings without manual squeezing (5 minutes)",
        },
        {
          title: "Beta-peel solution",
          description:
            "Glycolic and salicylic acid blend loosens dead cells without scrubbing or steam — gentler for reactive, salt-stripped skin (3 minutes)",
        },
        {
          title: "Vortex extraction",
          description:
            "Calibrated vacuum removes mineral deposits, dead cells, and salt-oil complexes from pores using negative pressure instead of manual force that can rupture capillaries (5-8 minutes)",
        },
        {
          title: "Peptide infusion",
          description:
            "Hyaluronic acid, peptides, and antioxidants delivered under pressure into the dermis — not applied topically where they sit on the surface and rinse off (5 minutes)",
        },
        {
          title: "Red LED therapy",
          description:
            "630nm wavelength stimulates fibroblast activity to rebuild the lipid barrier that salt water dissolves with each swim (5 minutes)",
        },
      ],
      footer:
        "Total treatment time: 30-35 minutes | Downtime: None | Return to ocean: 24 hours after treatment recommended",
    },
    {
      slug: "keravive-scalp",
      name: "Keravive Scalp Treatment",
      heading: "How Keravive clears ocean swimmer scalp buildup",
      intro:
        "Keravive is a three-step clinical scalp treatment developed by the makers of HydraFacial, using the same vortex extraction technology adapted for the scalp. It addresses the follicle-level buildup that daily shampooing can't reach — the salt, mineral deposits, and oxidized sebum that accumulate under the hair shaft after repeated ocean exposure.",
      steps: [
        {
          title: "Exfoliation and extraction",
          description:
            "HydraFacial Keravive handpiece removes buildup directly from the follicle opening using vortex suction — not scrubbing the surface with physical exfoliants that can irritate an already-compromised scalp (10 minutes)",
        },
        {
          title: "Growth factor serum delivery",
          description:
            "Biomimetic peptide complex with niacinamide and caffeine infused into the scalp skin at the follicle level to support microcirculation and keratinocyte function (5 minutes)",
        },
        {
          title: "Take-home serum",
          description:
            "Daily-use scalp serum to maintain hydration and extend the treatment effect between sessions — designed as a 30-day interval protocol with one bottle per month",
        },
      ],
      footer:
        "Total treatment time: 20-25 minutes | Downtime: None | Series: 3 sessions, 30 days apart | Can swim same day",
    },
    {
      slug: "dmk-enzyme-therapy",
      name: "DMK Enzyme Therapy",
      heading: "How DMK rebuilds barriers stripped by ocean exposure",
      intro:
        "DMK Enzyme Therapy uses a masque formulation that works with the skin's own plasmatic system — the circulatory network that delivers oxygen and nutrients to cells and removes waste. The enzyme masque creates a tightening effect (the \"pulse\") that drives fresh oxygenated blood to the surface, forcing the skin to function rather than removing surface layers with acids or abrasion.",
      steps: [
        {
          title: "Deep cleanse and pre-treatment",
          description:
            "DMK Pre-Cleanse and Beta Gel prepare the skin without stripping oils, unlike traditional foaming cleansers that can further compromise a salt-damaged barrier (5 minutes)",
        },
        {
          title: "Enzyme masque application",
          description:
            "Thick enzyme formulation applied to face, neck, and décolletage. As it dries, the masque creates a pumping action that increases circulation and lymphatic drainage — you'll feel a pulsing sensation that indicates fresh blood flow to the surface (45 minutes)",
        },
        {
          title: "Masque removal and serum infusion",
          description:
            "Masque is removed with cool water, then DMK transdermal serums (chosen based on skin condition) are applied while pores are receptive. For barrier damage: Essential Fatty Acids, Beta Gel, and Herb & Mineral Spray to support lipid rebuilding (10 minutes)",
        },
        {
          title: "Home prescriptives",
          description:
            "DMK home care products are prescribed based on your specific barrier condition — this is not optional, as the in-clinic treatment is designed to work with daily home support between sessions",
        },
      ],
      footer:
        "Total treatment time: 60-70 minutes | Downtime: Possible tightness for 24 hours | Series: 4-6 sessions, 10-14 days apart | Avoid ocean 48 hours after",
    },
  ],

  guarantee: {
    heading: "Our commitment to La Jolla clients",
    commitments: [
      {
        title: "Consultation-first approach",
        body: "Every new client receives a full skin and scalp analysis before any treatment is booked. The consultation covers your barrier condition, UV damage assessment, current product use, and realistic treatment goals. No surprises, no upselling mid-session. What you see in the consultation is what happens in the treatment room.",
      },
      {
        title: "Series planning upfront",
        body: "If your barrier damage or scalp condition requires multiple visits to resolve, we map the full course at the first appointment — number of sessions, treatment intervals, total timeline, and investment. You'll know what to expect before you commit to visit one. For La Jolla ocean swimmers, we factor in your swim schedule so treatment intervals don't conflict with events or training.",
      },
      {
        title: "Same practitioner guarantee",
        body: "One treatment room, one licensed esthetician. The person who assessed your skin at the first visit performs every treatment in the series and adjusts the plan based on how your barrier responded between sessions. No rotating roster, no explaining your skin history to a different person each time.",
      },
      {
        title: "Transparent pricing",
        body: "All treatment costs are published on this website and confirmed in writing before booking. Series pricing is disclosed at consultation — no hidden fees, no surprise add-ons, no pressure to upgrade mid-treatment. If a treatment won't work for your concern, we tell you at consultation, not after you've paid for three sessions.",
      },
    ],
  },

  newFaqs: [
    {
      question: "How long does it take to drive from La Jolla Village to Mission Hills for a facial?",
      answer:
        "About twenty minutes outside commute hours. From Prospect Street in the Village, take Torrey Pines Road south to I-5 at the UCSD entrance (Exit 27 or 28), then I-5 south to Washington Street (Exit 17) — twelve miles total. Mid-morning (10 AM - 12 PM) and early afternoon (1 PM - 3 PM) are consistently the fastest windows. During the southbound morning commute (7-9 AM), traffic stacks through Sorrento Valley near the Genesee Avenue interchange and can push the drive to thirty-five or forty minutes. From La Jolla Shores or UCSD campus, it's actually closer — about 18 minutes off-peak.",
      entityCount: 11,
    },
    {
      question: "Can I swim at La Jolla Cove the same day after a HydraFacial?",
      answer:
        "You can, but most swimmers wait twenty-four hours. HydraFacial Syndeo uses vortex extraction and peptide infusion that leave the skin more receptive to hydration for the first few hours, which also means more vulnerable to salt water irritation during that window. Swimming immediately won't undo the treatment, but it does mean stripping the barrier again before it has stabilized. If you must swim the same day (morning swim, afternoon treatment, or vice versa), wait at least six hours between treatment and water entry, and apply a barrier cream like CeraVe Healing Ointment or Aquaphor to the face before entering the ocean.",
      entityCount: 8,
    },
    {
      question: "How much does Keravive scalp treatment cost for La Jolla ocean swimmers?",
      answer:
        "Keravive is $599 per session at KIAMO SKIN, or $1,499 for a series of three (saving $298 compared to individual pricing). Most ocean swimmers book the three-session series because scalp buildup from daily salt water exposure requires more than one treatment to fully clear the follicles. Sessions are spaced thirty days apart to allow the scalp barrier to rebuild between treatments. The first visit includes a scalp analysis, full Keravive treatment, and take-home serum. Each session takes about twenty-five minutes with no downtime — you can swim the same day if needed.",
      entityCount: 9,
    },
    {
      question: "Does Keravive work on scalp buildup from Windansea surfing and San Diego hard water?",
      answer:
        "Yes. Keravive uses HydraFacial's vortex extraction technology adapted for the scalp — it removes mineral deposits, salt crystals, and oxidized sebum directly from the follicle opening using calibrated suction, not surface scrubbing with physical exfoliants that can irritate an already-compromised scalp. San Diego's municipal water supply is classified as hard water (230-350 mg/L total dissolved solids), which adds calcium and magnesium deposits on top of the salt from daily ocean exposure at Windansea, Tourmaline, or Pacific Beach. The vortex extraction clears both types of buildup, then the growth factor serum (biomimetic peptides, niacinamide, caffeine) is delivered into the scalp skin to support barrier repair and microcirculation at the follicle level.",
      entityCount: 12,
    },
    {
      question: "Is HydraFacial safe for melanin-rich skin after sun exposure at La Jolla Cove?",
      answer:
        "Yes, and it's actually one of the safer corrective treatments for melanin-rich skin (Fitzpatrick types III-VI) because it works without abrasion, heat, or aggressive exfoliation that can trigger post-inflammatory hyperpigmentation. HydraFacial Syndeo uses vortex extraction (vacuum suction-based) rather than manual extractions that apply pressure to compromised skin, and the peptide infusion is delivered under controlled pressure without surface friction. There's no risk of PIH that can happen with aggressive chemical peels, microdermabrasion, or laser treatments on darker skin tones. For sun-damaged skin from the Cove bluffs or Coast Boulevard walking path with compromised barrier, HydraFacial is often the starting treatment before moving to stronger interventions like Lira peels or Procell microchanneling.",
      entityCount: 11,
    },
    {
      question: "Do I need a consultation first or can I book a HydraFacial directly from La Jolla?",
      answer:
        "New clients always start with a consultation that includes a full treatment on the same visit — it's not a separate appointment. The consultation at KIAMO SKIN covers skin analysis, barrier assessment, UV damage evaluation, treatment goals, and series planning if your condition requires multiple visits. You'll receive either a HydraFacial ($259), DMK Enzyme Therapy Level 1 ($279), or another appropriate first treatment during that same session based on what your skin needs. First-time consultation + treatment packages start at $249. You can book online at kiamoskin.com or call — we respond within 24 hours on business days. The studio is at 3067 Reynard Way in Mission Hills with free parking on site.",
      entityCount: 10,
    },
  ],

  geoData: {
    zipCodes: ["92037", "92093", "92122"],
    landmarks: [
      "La Jolla Cove",
      "Windansea Beach",
      "La Jolla Shores Park",
      "Scripps Institution of Oceanography",
      "Torrey Pines Golf Course",
      "UCSD Medical Center Hillcrest",
      "Westfield UTC",
      "Kellogg Park",
      "Children's Pool",
      "Coast Boulevard",
      "Prospect Street",
      "Girard Avenue",
      "Neptune Place",
    ],
    highways: ["I-5", "Torrey Pines Road", "La Jolla Boulevard", "La Jolla Parkway", "Genesee Avenue"],
    exits: [
      "Exit 28 (La Jolla Village Drive)",
      "Exit 27 (Gilman Drive)",
      "Exit 26 (Genesee Avenue)",
      "Exit 17 (Washington Street)",
    ],
    adjacentCities: ["Pacific Beach", "University City", "Clairemont", "UTC"],
  },

  trust: {
    yearsInBusiness: "7+ years",
    licenseNumber: "PLACEHOLDER_LICENSE", // Will be updated with actual license
    certifications: [
      "California Board of Barbering and Cosmetology Licensed Esthetician",
      "DMK Certified Skin Revision Specialist",
      "HydraFacial Syndeo Advanced Protocol Provider",
      "Keravive Scalp Treatment Certified Practitioner",
      "San Diego County Department of Environmental Health Permitted Facility",
    ],
    reviewCount: 37,
    reviewRating: 5.0,
    gbpUrl: "https://g.page/r/CQiLcJCN-DxkEAI",
    responseTime: "Within 24 hours on business days",
  },

  reviewHighlights: [
    {
      author: "Katie Moran",
      text: "I had such a great Hydrafacial with Kiki! Her space is so cute, welcoming, and thoughtfully curated, and you can tell she puts a lot of intention into every part of the experience. I also loved that she carries and incorporates some of my absolute favorite skincare lines, including Lira, Epicutis, and Colorescience. She customized everything to what my skin needed, and I left feeling hydrated, glowy, and refreshed without feeling overdone.",
      daysAgo: "3 weeks ago",
    },
    {
      author: "Andrew Seery",
      text: "Had multiple hydro-facials. Loved them so kept coming back. Kind, warm atmosphere, very professional and friendly. Would recommend for anyone!",
      daysAgo: "4 weeks ago",
    },
    {
      author: "Courtney Zour",
      text: "I had an amazing hydrafacial and such a lovely experience with Kiki. Her space is very soothing and she has the best vibes, in addition to being extremely knowledgeable about skin health. My skin looks and feels amazing the day after treatment.",
      daysAgo: "4 days ago",
    },
  ],
};
