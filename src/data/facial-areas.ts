/**
 * Facial location pages - umbrella-category geo targeting.
 *
 * Mirrors src/data/hydrafacial-areas.ts exactly so the /facial/[slug].astro
 * dynamic route can copy the page template one-for-one. The /facial/ hub is the
 * umbrella category answer ("facial san diego" / "facial treatment san diego" /
 * "best facial san diego"); /hydrafacial/ owns the device-specific intent.
 *
 * Per the S-tier plan, the 9 cities chosen here match the cities that already
 * have /hydrafacial/{slug}/ pages where they exist — that is what makes the
 * cross-cluster internal-link map work.
 */

export interface FacialArea {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  authority: {
    heading: string;
    body: string;
  };
  uniqueness: {
    heading: string;
    body: string;
    bullets?: string[];
  };
  depth: {
    heading: string;
    body: string;
    process?: { step: string; description: string }[];
  };
  intent: {
    heading: string;
    body: string;
  };
  gettingHere: string;
  landmarks: string[];
  adjacentAreas: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  geoRadius: string;
  cityModifiers: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  postalCodes: string[];
  schemaDescription: string;
}

export const facialAreas: FacialArea[] = [
  {
    slug: 'la-jolla',
    name: 'La Jolla',
    title: 'Facial in La Jolla, San Diego — All Skin Types | KIAMO',
    description:
      'Facial treatments serving La Jolla from KIAMO Skin Mission Hills. HydraFacial, chemical peels, dermaplaning, enzyme therapy. Safe for every Fitzpatrick I-VI skin tone. Licensed esthetician.',
    h1: 'Facial in La Jolla, San Diego',
    intro: `KIAMO Skin provides facial treatments to La Jolla residents and the surrounding coastal communities. Located in Mission Hills at 3067 Reynard Way, our studio is reachable from La Jolla Village Drive via I-5 south to Washington Street. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, in a private one-room studio. Treatments are calibrated for every Fitzpatrick type I-VI — including melanin-rich skin where aggressive exfoliation risks post-inflammatory hyperpigmentation.`,
    authority: {
      heading: 'Why La Jolla clients trust KIAMO for facials',
      body: `La Jolla's coastal exposure, year-round UV, and proximity to UCSD create a specific set of skin concerns — barrier damage from coastal humidity, pigmentation from constant UV reflection off the ocean, and post-inflammatory recovery from active outdoor lifestyles. KIAMO Skin uses HydraFacial Syndeo with AI-powered skin analysis (the current-generation device, not older consumer-grade equipment), Lira chemical peels at Fitzpatrick-calibrated concentrations, DMK Enzyme Therapy for barrier-first protocols, and dermaplaning when surface refinement is the goal. Kiki has 7+ years of experience treating every skin tone. The one-practitioner model means the person who assesses your skin is the one who treats it — no rotation between junior staff, no handoff between consultation and treatment.`,
    },
    uniqueness: {
      heading: 'Facials customized for La Jolla skin and lifestyle',
      body: `La Jolla clients choose KIAMO for facials that respect both the skin and the coastal lifestyle. The approach addresses:`,
      bullets: [
        'All Fitzpatrick types (I-VI) — protocols calibrated per skin tone, no one-size-fits-all peels',
        'Coastal barrier repair — hydration and lipid replacement for salt air and wind exposure',
        'UV-driven pigmentation support — paired with corrective plans when needed',
        'Pre-event facials — same-day or next-day availability for galas, weddings, and UCSD events',
        'No downtime — return to work, beach, or social plans the same day',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial at KIAMO follows a three-step structure: assessment, treatment, and homecare. The assessment uses HydraFacial Syndeo's AI skin analysis or a manual Fitzpatrick-and-concern evaluation depending on the modality. The treatment is calibrated to the skin on the day — not a generic protocol. The homecare plan extends the result between visits.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone (Fitzpatrick I-VI), primary concern (congestion, dehydration, dullness, sun damage, hyperpigmentation, barrier damage), and the modality that fits — HydraFacial Syndeo, Lira chemical peel, DMK enzyme therapy, or dermaplaning. For La Jolla clients, the assessment factors in coastal UV exposure from Village Drive walks, beach time at Windansea or La Jolla Shores, and any current corrective plan.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions run 45-75 minutes depending on modality. HydraFacial Syndeo pairs Vortex-Fusion extraction with AI analysis and selected boosters. Lira peels use lactic, mandelic, or TCA at concentrations matched to your skin tone. DMK enzyme therapy rebuilds barrier function. Dermaplaning removes the surface layer of dead skin and vellus hair before serum infusion. No modality is selected without checking it is safe for your Fitzpatrick type.',
        },
        {
          step: 'Homecare',
          description:
            'Medical-grade homecare extends the result. Kiki prescribes a daily regimen — tyrosinase inhibitors for hyperpigmentation-prone skin, ceramide-rich moisturizers for barrier repair, broad-spectrum SPF 50+ for La Jolla outdoor lifestyle. Homecare represents the majority of long-term result; clinic treatments accelerate what daily maintenance preserves.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in La Jolla',
      body: `La Jolla clients book facials for pre-event preparation (galas at the Museum of Contemporary Art, weddings at La Jolla Cove hotels, UCSD functions), monthly maintenance against coastal environmental stress, recovery from travel or sun exposure, or as the foundation of a longer corrective plan addressing pigmentation, texture, or aging concerns. KIAMO is the right fit when the priority is one practitioner, no upsells, and protocols safe across every skin tone — including melanin-rich skin, where standard peels risk post-inflammatory hyperpigmentation.`,
    },
    gettingHere:
      'From La Jolla Village Drive, take I-5 south to the Washington Street exit, head west on Washington Street to Reynard Way and turn right. The studio is at 3067 Reynard Way. From UCSD, take Gilman Drive to I-5 south. From La Jolla Shores, take Torrey Pines Road to La Jolla Village Drive, then I-5 south. Free parking on site.',
    landmarks: [
      'La Jolla Cove',
      'La Jolla Village Drive',
      'Prospect Place',
      'Girard Avenue',
      'Museum of Contemporary Art San Diego',
      'UCSD',
      'Windansea Beach',
      'La Jolla Playhouse',
      'Coast Walk',
      'Torrey Pines',
    ],
    adjacentAreas: ['pacific-beach', 'del-mar', 'downtown-san-diego'],
    geo: {
      latitude: 32.8328,
      longitude: -117.2713,
    },
    geoRadius: '3000',
    cityModifiers: [
      'Coastal cliff microclimate with persistent marine layer',
      'Direct Pacific Ocean exposure at cove and Shores',
      'UCSD and research-corridor professional population',
      'Affluent demographic with discretionary skin spend',
      'Year-round UV reflection off ocean intensifies sun damage',
      'Walkable village core with high foot-traffic exposure',
    ],
    postalCodes: ['92037', '92093', '92122'],
    faqs: [
      {
        question: 'Is a facial safe before a La Jolla beach event?',
        answer:
          'Yes. HydraFacial Syndeo has zero downtime — you can attend a beach event, gallery opening, or wedding the same day. Dermaplaning and Lira chemical peels may leave mild flush for a few hours; Kiki will advise based on the specific event timing. Most La Jolla clients book facials 1-2 days before major events for the best glow window.',
      },
      {
        question: 'How far is KIAMO Skin from La Jolla?',
        answer:
          'KIAMO Skin is about 15-20 minutes from most La Jolla addresses via I-5 south to Washington Street. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly visits are realistic for clients who live or work along Prospect Street, Girard Avenue, or La Jolla Village Drive.',
      },
      {
        question: 'What facial addresses sun damage from La Jolla coastal exposure?',
        answer:
          'For cumulative sun damage, KIAMO pairs HydraFacial Syndeo maintenance with Lira chemical peels calibrated to your Fitzpatrick type. Brightening boosters in the HydraFacial step (Britenol, peptides, growth factors) address tone, while a series of peels targets pigment at the cellular level. Homecare includes broad-spectrum SPF 50+ and tyrosinase inhibitors where appropriate.',
      },
      {
        question: 'Do you offer evening appointments for La Jolla professionals?',
        answer:
          'Yes. Many La Jolla clients work in the UTC business district, the research corridor, or downtown and book after-work appointments. Evening slots are limited because the studio is single-room and single-practitioner — booking 2-3 weeks ahead is recommended for specific times.',
      },
      {
        question: 'Can I get a facial if I am visiting La Jolla from out of town?',
        answer:
          'Yes. KIAMO regularly sees visitors who book a facial during a La Jolla stay. Same-week appointments are often available, and a single session provides a visible result that lasts 5-7 days. Call (310) 595-0872 or request online.',
      },
    ],
    schemaDescription:
      'Facial treatments serving La Jolla from KIAMO Skin Mission Hills. HydraFacial Syndeo, Lira chemical peels, dermaplaning, DMK enzyme therapy. Safe for every Fitzpatrick I-VI skin tone. Licensed esthetician.',
  },
  {
    slug: 'del-mar',
    name: 'Del Mar',
    title: 'Facial in Del Mar, San Diego — Licensed Esthetician | KIAMO',
    description:
      'Facial treatments for Del Mar residents from KIAMO Skin Mission Hills. 20 minutes via I-5. HydraFacial, peels, dermaplaning, enzyme therapy. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Del Mar, San Diego',
    intro: `KIAMO Skin provides facial treatments to Del Mar residents seeking protocols calibrated for every Fitzpatrick type I-VI. Located in Mission Hills at 3067 Reynard Way, the studio is reachable via I-5 south to Washington Street — about 20 minutes from most Del Mar addresses. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, in a private one-room studio. Del Mar clients choose KIAMO for fair-season UV recovery, pre-event preparation, and corrective plans that respect the skin.`,
    authority: {
      heading: 'Facials that match Del Mar skin and the fair-season calendar',
      body: `Del Mar's coastal climate, horse-racing social calendar, and fair-season UV produce a specific skin rhythm — increased UV exposure between mid-July and Labor Day, indoor events the rest of the year, and constant coastal humidity. KIAMO Skin offers the full facial menu (HydraFacial Syndeo, Lira chemical peels, dermaplaning, DMK enzyme therapy) with protocols calibrated to your Fitzpatrick type. Kiki has 7+ years treating the full spectrum of skin tones, including melanin-rich skin where standard peels trigger post-inflammatory hyperpigmentation. The single-practitioner studio means continuity across every visit — the same person assessing your skin and treating it.`,
    },
    uniqueness: {
      heading: 'Facials for Del Mar coastal and fair-season lifestyles',
      body: `KIAMO's facials for Del Mar clients account for the specific environmental and social rhythms of the area:`,
      bullets: [
        'Fair-season UV recovery — barrier repair and pigmentation support after summer exposure',
        'Pre-event facials — for opening day, races, weddings at L\'Auberge or the Del Mar Plaza',
        'All Fitzpatrick types — including melanin-rich skin protocols',
        'Single-practitioner consistency — Kiki performs every treatment',
        'No franchise overhead or upsells — pricing published and confirmed at booking',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows the same three-step structure, with modality selected to match your concern.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, primary concern, and the modality that fits. For Del Mar clients, this includes accounting for fair-season UV history, current event calendar, and any ongoing corrective work.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction with AI analysis and selected boosters. Lira peels use Fitzpatrick-calibrated acid concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture before serum infusion.',
        },
        {
          step: 'Homecare',
          description:
            'Daily regimen extends the result between visits. Broad-spectrum SPF 50+ is non-negotiable for Del Mar outdoor lifestyle. Tyrosinase inhibitors and ceramide moisturizers are added when the skin needs them.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Del Mar',
      body: `Del Mar clients book facials for fair-season UV recovery, pre-event preparation at L'Auberge, weddings at the Del Mar Plaza, social events at the fairgrounds, or as the foundation of a longer corrective plan. Many are second-homeowners whose skin rhythm shifts between Del Mar summers and inland winters. KIAMO is the right fit when the priority is one practitioner, no upsells, and protocols calibrated for the skin on the day — including melanin-rich skin tones that need deliberate care to avoid post-inflammatory hyperpigmentation.`,
    },
    gettingHere:
      'From Del Mar, take I-5 south to the Washington Street exit, head west on Washington Street to Reynard Way and turn right. About 20 minutes without traffic. From Del Mar Heights, take Carmel Valley Road to I-5 south. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Del Mar Plaza',
      'L\'Auberge Del Mar',
      'Del Mar Racetrack',
      'Crest Canyon',
      'Powerhouse Park',
      'Del Mar Village',
      'Camino Del Mar',
      'Stratford Court',
      'Del Mar Heights',
      'Torrey Pines State Beach',
    ],
    adjacentAreas: ['la-jolla', 'carlsbad', 'encinitas'],
    geo: {
      latitude: 32.9575,
      longitude: -117.2625,
    },
    geoRadius: '3000',
    cityModifiers: [
      'Coastal climate with year-round ocean influence',
      'Fair-season UV peak between mid-July and Labor Day',
      'Affluent demographic with seasonal residents',
      'Horse-racing and social calendar driving event preparation',
      'Beach lifestyle with high salt-air exposure',
    ],
    postalCodes: ['92014', '92075'],
    faqs: [
      {
        question: 'When should Del Mar clients book facials around the fair?',
        answer:
          'Most Del Mar clients book a HydraFacial Syndeo 1-2 weeks before opening day and another 2 weeks after closing day for UV recovery. Lira chemical peels are scheduled 4-6 weeks apart, so a series aligns naturally with the racing calendar. Kiki will plan the cadence with you at the consultation.',
      },
      {
        question: 'How far is KIAMO Skin from Del Mar?',
        answer:
          'About 20 minutes via I-5 south to the Washington Street exit. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Del Mar residents.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Del Mar?',
        answer:
          'Yes — every modality at KIAMO is calibrated to the skin tone, including melanin-rich skin (Fitzpatrick IV-VI). Standard peels and aggressive exfoliation can trigger post-inflammatory hyperpigmentation in darker skin tones. Kiki has 7+ years of experience across every Fitzpatrick type and uses concentrations and protocols matched to the skin on the day.',
      },
      {
        question: 'Can I get a facial before a Del Mar wedding or event?',
        answer:
          'Yes. HydraFacial Syndeo is the most popular pre-event facial — zero downtime, visible glow within hours, results last 5-7 days. Book 1-2 days before the event for the best window. Same-week appointments are often available.',
      },
      {
        question: 'Do you treat Del Mar seasonal residents?',
        answer:
          'Yes. Many Del Mar clients are seasonal residents whose skin care shifts with their location. KIKI coordinates a treatment plan that works whether you are in Del Mar full-time, part-time, or visiting.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Del Mar from KIAMO Skin Mission Hills. Fair-season UV recovery, pre-event facials, protocols calibrated for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    title: 'Facial in Encinitas, San Diego — Coastal Skin Specialists | KIAMO',
    description:
      'Facial treatments serving Encinitas from KIAMO Skin Mission Hills. 25 minutes via I-5. Salt air, surfer barrier repair, UV recovery. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Encinitas, San Diego',
    intro: `KIAMO Skin provides facial treatments to Encinitas residents facing daily coastal exposure from Moonlight Beach, Swami's, and the Cardiff border. Located in Mission Hills at 3067 Reynard Way, the studio is about 25 minutes south via I-5. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, calibrated for every Fitzpatrick type I-VI. Encinitas clients choose KIAMO for surfer barrier repair, UV-driven pigmentation support, and pre-event facials that respect the skin.`,
    authority: {
      heading: 'Coastal and surfer-lifestyle facial protocols',
      body: `Encinitas is one of San Diego's most surf-intensive communities — Swami's, Cardiff Reef, and the Moonlight Beach breaks produce clients who spend hours in salt water daily. That lifestyle creates barrier breakdown, mineral and zinc-oxide buildup, and accelerated photoaging. KIAMO Skin uses HydraFacial Syndeo with AI skin analysis to identify and treat coastal damage, Lira chemical peels at Fitzpatrick-calibrated concentrations for pigmentation, and DMK enzyme therapy for barrier repair. Kiki has 7+ years treating coastal skin and understands the difference between daily surfers and occasional beachgoers. The single-practitioner model means continuity — the person who reads your skin today is the one who treats it.`,
    },
    uniqueness: {
      heading: 'Facials for Encinitas coastal living',
      body: `Encinitas clients choose KIAMO for facials that address the specific effects of coastal and surf lifestyle on the skin:`,
      bullets: [
        'Surfer barrier repair — hydration and lipid replacement after daily salt exposure',
        'Mineral SPF buildup clearance — extraction for sunscreen-loaded pores',
        'UV-driven pigmentation support — paired with corrective plans when needed',
        'All Fitzpatrick types — melanin-rich skin protocols calibrated per session',
        'Single-practitioner model — no rotation between staff',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows a three-step structure with modality chosen to match your skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone (Fitzpatrick I-VI), concern, and the right modality. For Encinitas clients, this includes salt-exposure history, current surf or beach frequency, and UV history.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers for barrier repair, broad-spectrum SPF 50+ for coastal lifestyle, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Encinitas',
      body: `Encinitas clients book facials for surfer barrier repair, UV-driven pigmentation support, pre-event preparation (weddings at the Encinitas Ranch or coastal venues), or as the foundation of a longer corrective plan addressing sun damage, melasma, or barrier breakdown. KIAMO is the right fit when the priority is one practitioner who understands coastal skin, protocols safe across every Fitzpatrick type, and treatment plans that respect the surf or beach lifestyle rather than fighting it.`,
    },
    gettingHere:
      'From Encinitas, take I-5 south to the Washington Street exit, head west on Washington Street to Reynard Way and turn right. About 25 minutes without traffic. From Leucadia, take Coast Highway 101 to I-5 south. From Cardiff, take Birmingham Drive to I-5 south. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Moonlight Beach',
      'Swami\'s',
      'Cardiff Reef',
      'Encinitas Ranch',
      'Coast Highway 101',
      'San Elijo Lagoon',
      'Downtown Encinitas',
      'Leucadia',
      'Self-Realization Fellowship',
      'Botanical Garden',
    ],
    adjacentAreas: ['carlsbad', 'del-mar', 'la-jolla'],
    geo: {
      latitude: 33.037,
      longitude: -117.292,
    },
    geoRadius: '4000',
    cityModifiers: [
      'Heavy surf culture with daily salt water exposure',
      'Coastal climate with year-round ocean influence',
      'Leucadia and Cardiff surf-break proximity',
      'Affluent demographic with active outdoor lifestyle',
      'Botanical-garden and yoga-wellness culture',
    ],
    postalCodes: ['92024', '92007'],
    faqs: [
      {
        question: 'How does daily surfing affect my skin in Encinitas?',
        answer:
          'Daily salt exposure strips the skin barrier with every session, and mineral SPF buildup clogs pores along the hairline and forehead. Combined with UV reflection off the water, this creates barrier breakdown, pigmentation, and accelerated photoaging. KIAMO\'s facials address all three — barrier repair, extraction of mineral buildup, and pigmentation support.',
      },
      {
        question: 'How far is KIAMO Skin from Encinitas?',
        answer:
          'About 25 minutes via I-5 south to the Washington Street exit. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Encinitas residents.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Encinitas?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Standard peels and aggressive exfoliation can trigger post-inflammatory hyperpigmentation in melanin-rich skin. Kiki has 7+ years of experience across every Fitzpatrick type and uses concentrations matched to the skin on the day.',
      },
      {
        question: 'Can I get a facial if I surf every morning in Encinitas?',
        answer:
          'Yes — and the treatment plan will account for your surf schedule. Kiki typically schedules facials on lower-exposure days or post-sunscreen-recovery windows. Homecare focuses on barrier repair and mineral buildup clearance.',
      },
      {
        question: 'What facial helps with melasma from Encinitas sun exposure?',
        answer:
          'Lira chemical peels at Fitzpatrick-calibrated concentrations are the workhorse treatment for melasma. HydraFacial Syndeo maintenance between peels keeps the barrier hydrated. Daily homecare includes broad-spectrum SPF 50+ and tyrosinase inhibitors (kojic acid, tranexamic acid, alpha arbutin). Most Encinitas clients see measurable fading in 8-12 weeks with monthly treatments.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Encinitas from KIAMO Skin Mission Hills. Surfer barrier repair, coastal UV support, protocols calibrated for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    title: 'Facial in Carlsbad, San Diego — Coastal Skin Specialists | KIAMO',
    description:
      'Facial treatments serving Carlsbad from KIAMO Skin Mission Hills. 30 minutes via I-5. Salt air, family-friendly beach lifestyle. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Carlsbad, San Diego',
    intro: `KIAMO Skin provides facial treatments to Carlsbad residents — a coastal community with active outdoor lifestyle between the flower fields and the Pacific. Located in Mission Hills at 3067 Reynard Way, the studio is reachable via I-5 south to Washington Street, about 30 minutes from most Carlsbad addresses. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, in a private one-room studio. Treatments are calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Facials for Carlsbad coastal and family-lifestyle skin',
      body: `Carlsbad clients include young families, beach-regular professionals, and retirees whose skin rhythm reflects year-round coastal exposure. KIAMO Skin offers the full facial menu (HydraFacial Syndeo, Lira chemical peels, dermaplaning, DMK enzyme therapy) with protocols calibrated to each client's skin tone and concern. Kiki has 7+ years treating every Fitzpatrick type, including melanin-rich skin where aggressive exfoliation risks post-inflammatory hyperpigmentation. The one-practitioner model means your skin gets consistent attention — the same person assessing, treating, and adjusting the plan over time.`,
    },
    uniqueness: {
      heading: 'Facials for Carlsbad coastal skin',
      body: `Carlsbad clients choose KIAMO for facials that address their specific lifestyle:`,
      bullets: [
        'Coastal barrier repair — hydration and lipid replacement for salt air exposure',
        'Pre-event facials — weddings at the Carlsbad Flower Fields, Omni La Costa, or coastal venues',
        'All Fitzpatrick types — melanin-rich skin protocols per session',
        'Single-practitioner consistency — Kiki performs every treatment',
        'No franchise overhead — pricing published and confirmed at booking',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows a three-step structure, with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, primary concern, and the modality that fits. For Carlsbad clients, this includes accounting for beach frequency, UV history, and any current corrective work.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction with AI analysis and selected boosters. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Carlsbad',
      body: `Carlsbad clients book facials for coastal barrier repair, pre-event preparation, recovery from sun exposure, or as the foundation of a longer corrective plan addressing pigmentation, texture, or aging concerns. KIAMO is the right fit when the priority is one practitioner, no upsells, and protocols safe across every skin tone.`,
    },
    gettingHere:
      'From Carlsbad, take I-5 south to the Washington Street exit, head west on Washington Street to Reynard Way and turn right. About 30 minutes without traffic. From Carlsbad Village, take Carlsbad Village Drive to I-5 south. From La Costa, take El Camino Real to I-5 south. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Carlsbad Village',
      'Carlsbad Flower Fields',
      'Omni La Costa Resort',
      'Tamarack Beach',
      'Carlsbad State Beach',
      'Legoland',
      'Batiquitos Lagoon',
      'Carlsbad Premium Outlets',
      'Agua Hedionda Lagoon',
      'Carlsbad Village Drive',
    ],
    adjacentAreas: ['encinitas', 'del-mar', 'la-jolla'],
    geo: {
      latitude: 33.1581,
      longitude: -117.3505,
    },
    geoRadius: '5000',
    cityModifiers: [
      'Coastal climate with year-round ocean influence',
      'Family-oriented community with active outdoor lifestyle',
      'Flower-fields and beach-event social calendar',
      'Affluent demographic with discretionary skin spend',
      'Mixed family, retiree, and professional population',
    ],
    postalCodes: ['92008', '92009', '92010', '92011'],
    faqs: [
      {
        question: 'How does Carlsbad coastal living affect my skin?',
        answer:
          'Year-round salt air exposure strips the skin barrier, mineral SPF buildup clogs pores, and UV reflection off the water intensifies photoaging. KIAMO\'s facials address barrier repair, extraction, and pigmentation support — calibrated to your Fitzpatrick type.',
      },
      {
        question: 'How far is KIAMO Skin from Carlsbad?',
        answer:
          'About 30 minutes via I-5 south to the Washington Street exit. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Carlsbad residents.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Carlsbad?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Standard peels and aggressive exfoliation can trigger post-inflammatory hyperpigmentation in melanin-rich skin. Kiki has 7+ years of experience across every Fitzpatrick type.',
      },
      {
        question: 'Can I get a facial before a Carlsbad wedding or event?',
        answer:
          'Yes. HydraFacial Syndeo is the most popular pre-event facial — zero downtime, visible glow within hours. Book 1-2 days before the event for the best window. Same-week appointments are often available.',
      },
      {
        question: 'Do you offer facials for sensitive skin in Carlsbad?',
        answer:
          'Yes. DMK enzyme therapy is the gentlest corrective option for sensitive, reactive, or barrier-compromised skin. HydraFacial Syndeo is also safe for sensitive skin — the AI analysis calibrates pressure and serum selection to avoid irritation.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Carlsbad from KIAMO Skin Mission Hills. Coastal barrier repair, pre-event facials, protocols calibrated for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'pacific-beach',
    name: 'Pacific Beach',
    title: 'Facial in Pacific Beach, San Diego — Beach-Lifestyle Specialists | KIAMO',
    description:
      'Facial treatments serving Pacific Beach from KIAMO Skin Mission Hills. 15 minutes via I-8. Salt air, UV, beach-lifestyle skin. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Pacific Beach, San Diego',
    intro: `KIAMO Skin provides facial treatments to Pacific Beach residents living the beach-lifestyle between Crystal Pier and Tourmaline Surfing Park. Located about 15 minutes away in Mission Hills at 3067 Reynard Way, our studio addresses the specific skin challenges that come with daily beach exposure — salt air, UV reflection off the water, mineral SPF buildup, and the dehydration that ocean wind creates. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Beach-lifestyle facial specialists',
      body: `Pacific Beach sits directly on the Pacific Ocean between Mission Bay and La Jolla, which means year-round exposure to salt air, ocean wind, and UV intensified by water reflection. KIAMO Skin uses HydraFacial Syndeo with AI-powered skin analysis to customize treatments for the specific barrier breakdown, dehydration, and sun-related pigmentation that beach-lifestyle skin develops. Kiki has 7+ years treating coastal skin and understands the difference between beach-area clients who swim, surf, or run on the boardwalk daily and those whose exposure is occasional. The 15-minute drive from Pacific Beach via I-8 east makes monthly barrier maintenance realistic.`,
    },
    uniqueness: {
      heading: 'Facials for beach-lifestyle skin in Pacific Beach',
      body: `Pacific Beach clients face skin challenges that inland neighborhoods do not. KIAMO's facials address:`,
      bullets: [
        'Salt air dehydration — ocean wind and salt strip the skin barrier with every beach day',
        'Mineral SPF buildup — zinc oxide and chemical SPF accumulate in pores along the hairline and forehead',
        'UV reflection off water — sun damage accumulates faster on boardwalk, beach, and bay-side skin',
        'Barrier repair focus — strengthens the protective layer against ongoing coastal stress',
        'Anti-aging protocols — addresses accumulated photoaging from years of beach exposure',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin for coastal skin',
      body: `Every facial follows a three-step structure with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, concern, and the right modality. For Pacific Beach clients, this includes salt-exposure history, current beach or surf frequency, and UV history.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction to clear mineral SPF and sebum from pores. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+ (mineral preferred for beach lifestyle), tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Pacific Beach',
      body: `Pacific Beach clients book facials for barrier repair after constant beach exposure, anti-aging support for accumulated UV reflection damage, pre-event preparation, or as the foundation of a corrective plan addressing sun damage, melasma, or texture concerns. Many are surfers, paddleboarders, runners on the boardwalk, or simply residents who walk their dog on the beach every morning. KIAMO is the right fit when the priority is one practitioner who understands coastal skin and protocols safe across every Fitzpatrick type.`,
    },
    gettingHere:
      'From Pacific Beach, take Garnet Avenue east to Ingraham Street, continue to Mission Boulevard, take I-8 east to Highway 163 south, exit Washington Street and head west. About 15 minutes. From Crystal Pier or the boardwalk, take Garnet Avenue east. From Tourmaline or north Pacific Beach, take La Jolla Mesa Drive to La Jolla Village Drive, then I-5 south to I-8 east. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Crystal Pier',
      'Garnet Avenue',
      'Pacific Beach Boardwalk',
      'Tourmaline Surfing Park',
      'Mission Bay',
      'Kate Sessions Park',
      'Pacific Beach Drive',
      'North Pacific Beach',
      'Ocean Front Walk',
      'Mission Boulevard',
    ],
    adjacentAreas: ['la-jolla', 'point-loma', 'downtown-san-diego'],
    geo: {
      latitude: 32.7978,
      longitude: -117.2522,
    },
    geoRadius: '3000',
    cityModifiers: [
      'Direct Pacific Ocean exposure with daily salt spray',
      'UV reflection off water intensifies sun damage',
      'Mineral SPF buildup common from beach days',
      'Active outdoor lifestyle — surfing, paddleboarding, running',
      'Higher year-round UV than inland San Diego neighborhoods',
    ],
    postalCodes: ['92109'],
    faqs: [
      {
        question: 'How far is KIAMO Skin from Pacific Beach?',
        answer:
          'About 15 minutes via I-8 east to Highway 163 south, exiting Washington Street. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Pacific Beach residents.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Pacific Beach?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Kiki has 7+ years of experience across every skin tone, and the protocol is the same regardless of beach exposure level.',
      },
      {
        question: 'What facial addresses sun damage from beach living in Pacific Beach?',
        answer:
          'HydraFacial Syndeo with brightening boosters (Britenol for tone, peptides for firmness, growth factors for barrier repair) addresses accumulated sun damage. For significant photoaging, KIAMO pairs HydraFacial maintenance with Lira chemical peels — HydraFacial between peel sessions keeps the barrier hydrated against ongoing UV.',
      },
      {
        question: 'How often should Pacific Beach residents get facials?',
        answer:
          'Monthly treatments maintain the barrier against constant coastal exposure. Pacific Beach clients who swim, surf, or spend daily time on the beach often notice their skin becomes reactive or tight between monthly sessions — that is the salt air and UV compromising the barrier. Regular facials keep the protective layer strong.',
      },
      {
        question: 'Can I get a facial and go back to the beach the same day?',
        answer:
          'Yes — HydraFacial Syndeo has zero downtime. Dermaplaning and Lira chemical peels may leave mild flush for a few hours; Kiki will advise based on the specific treatment and your beach plans for the day. Most Pacific Beach clients book facials in the morning and return to beach activities in the afternoon.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Pacific Beach from KIAMO Skin Mission Hills. 15 minutes via I-8, beach-lifestyle skin specialists. Safe for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'point-loma',
    name: 'Point Loma',
    title: 'Facial in Point Loma, San Diego — Maritime Skin Specialists | KIAMO',
    description:
      'Facial treatments serving Point Loma from KIAMO Skin Mission Hills. 10 minutes via Rosecrans. Salt air, UV reflection, coastal skin. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Point Loma, San Diego',
    intro: `KIAMO Skin provides facial treatments to Point Loma residents facing peninsula-level exposure to salt air from both the Pacific Ocean and San Diego Bay. Located about 10 minutes away in Mission Hills at 3067 Reynard Way, our studio addresses the barrier damage, dehydration, and accelerated photoaging that maritime living produces. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Maritime climate facial specialists',
      body: `Point Loma's peninsula location means year-round exposure to salt air from both the Pacific Ocean and San Diego Bay, ocean wind, and UV intensified by water reflection off both sides of the peninsula. KIAMO Skin uses HydraFacial Syndeo with AI skin analysis to customize treatments for barrier-compromised skin common in maritime areas. Kiki has 7+ years treating coastal skin and understands the specific challenges of living near Ocean Beach, Liberty Station, and the Cabrillo peninsula. The 10-minute drive from Point Loma via Rosecrans Street makes monthly barrier maintenance realistic.`,
    },
    uniqueness: {
      heading: 'Facials for Point Loma maritime living',
      body: `Point Loma and Harbor Island residents face skin challenges that inland neighborhoods do not. KIAMO's facials address:`,
      bullets: [
        'Salt air dehydration from both Pacific and bay exposure',
        'UV reflection off water on both sides of the peninsula',
        'Wind damage from coastal exposure',
        'Barrier repair focus — strengthens the protective layer against ongoing maritime stress',
        'Anti-aging protocols — addresses accumulated photoaging from years of coastal living',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin for coastal skin',
      body: `Every facial follows a three-step structure with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, concern, and the right modality. For Point Loma clients, this includes maritime exposure history, current beach or boat frequency, and UV history.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Point Loma',
      body: `Point Loma clients book facials for barrier repair after maritime exposure, anti-aging support for accumulated UV reflection damage, pre-event preparation, or as the foundation of a corrective plan addressing sun damage, melasma, or texture concerns. Many live near Ocean Beach, Sunset Cliffs, Liberty Station, or Shelter Island. KIAMO is the right fit when the priority is one practitioner who understands maritime skin and protocols safe across every Fitzpatrick type.`,
    },
    gettingHere:
      'From Liberty Station, take Rosecrans Street east to Washington Street and turn left. About 10 minutes. From Ocean Beach or Sunset Cliffs, take Sunset Cliffs Boulevard to Point Loma Avenue, continue to Rosecrans and turn left, then follow to Washington Street. From Shelter Island, take Rosecrans Street east. From the Cabrillo peninsula, take Catalina Boulevard north to Rosecrans. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Liberty Station',
      'Ocean Beach',
      'Sunset Cliffs',
      'Cabrillo National Monument',
      'Point Loma Lighthouse',
      'Shelter Island',
      'Fort Rosecrans National Cemetery',
      'Point Loma Nazarene University',
      'Rosecrans Street corridor',
      'Naval Base Point Loma',
    ],
    adjacentAreas: ['pacific-beach', 'downtown-san-diego', 'harbor-island'],
    geo: {
      latitude: 32.7157,
      longitude: -117.2197,
    },
    geoRadius: '3000',
    cityModifiers: [
      'Peninsula location with ocean and bay exposure on both sides',
      'Constant salt air from Pacific and San Diego Bay',
      'High wind exposure year-round',
      'Intense UV reflection off water on both sides',
      'Maritime lifestyle with boating and beach activities',
    ],
    postalCodes: ['92106', '92107'],
    faqs: [
      {
        question: 'How does Point Loma maritime living affect skin?',
        answer:
          'Point Loma\'s peninsula location means constant salt air from both the Pacific and San Diego Bay. Salt draws moisture from the skin barrier with every exposure, leading to dehydration, sensitivity, and accelerated aging. Wind compounds the damage. KIAMO\'s facials counteract this with intensive hydration and barrier repair.',
      },
      {
        question: 'How long does it take to get to KIAMO Skin from Point Loma?',
        answer:
          'About 10 minutes from Liberty Station via Rosecrans Street to Washington Street. From Ocean Beach or Sunset Cliffs, plan 12-15 minutes. The studio is at 3067 Reynard Way in Mission Hills with free parking.',
      },
      {
        question: 'Can a facial help with sun damage in Point Loma?',
        answer:
          'Yes. HydraFacial Syndeo includes antioxidant and brightening serums that address sun damage. For significant photoaging, it is paired with Lira chemical peels. Point Loma clients dealing with beach sun and water reflection often notice brighter tone and reduced dark spots with consistent monthly treatment.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Point Loma?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Kiki has 7+ years of experience across every skin tone.',
      },
      {
        question: 'What should Point Loma residents expect after a facial?',
        answer:
          'No downtime — return to beach or boat activities immediately. Skin may look slightly flushed for 30-60 minutes. Most Point Loma clients notice smoother texture, smaller pores, and a glow lasting 5-7 days. The hydration and barrier protection is especially noticeable if you have been dealing with coastal dryness.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Point Loma from KIAMO Skin Mission Hills. 10 minutes from Liberty Station, maritime skin specialists. Safe for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'coronado',
    name: 'Coronado',
    title: 'Facial in Coronado, San Diego — Coastal Skin Specialists | KIAMO',
    description:
      'Facial treatments serving Coronado from KIAMO Skin Mission Hills. 15 minutes via the Coronado Bridge. Salt air, UV reflection, island skin. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Coronado, San Diego',
    intro: `KIAMO Skin provides facial treatments to Coronado residents and the surrounding Silver Strand, living with constant Pacific Ocean exposure and the salt air that comes with island living. Located about 15 minutes away in Mission Hills at 3067 Reynard Way, the studio is reachable via the Coronado Bridge and I-5. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Island-coastal facial protocols for Coronado',
      body: `Coronado is a peninsula surrounded by the Pacific Ocean and San Diego Bay, with the Silver Strand extending south to Imperial Beach. Constant maritime exposure produces barrier breakdown, mineral SPF buildup, and accelerated photoaging. KIAMO Skin uses HydraFacial Syndeo with AI skin analysis to customize treatments for island coastal skin. Kiki has 7+ years treating maritime and beach-lifestyle skin. The single-practitioner studio means continuity across every visit — the person who assesses your skin is the one who treats it.`,
    },
    uniqueness: {
      heading: 'Facials for Coronado island-coastal skin',
      body: `Coronado clients choose KIAMO for facials that address the specific effects of island living on the skin:`,
      bullets: [
        'Pacific Ocean and bay salt air exposure — barrier repair and hydration',
        'UV reflection off water on both sides — pigmentation support',
        'Naval and military family population — consistent scheduling',
        'Pre-event facials — for Hotel del Coronado events, weddings, galas',
        'All Fitzpatrick types — melanin-rich skin protocols calibrated per session',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows a three-step structure with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, concern, and the right modality. For Coronado clients, this includes maritime exposure history, beach or boat frequency, and any current corrective work.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Coronado',
      body: `Coronado clients book facials for barrier repair after maritime exposure, pre-event preparation at Hotel del Coronado or the Beach Village, anti-aging support for accumulated UV reflection damage, or as the foundation of a corrective plan addressing sun damage, melasma, or texture concerns. Many are military families, retirees, and professionals who value consistency. KIAMO is the right fit when the priority is one practitioner who understands coastal skin and protocols safe across every Fitzpatrick type.`,
    },
    gettingHere:
      'From Coronado, take the Coronado Bridge (State Route 75) north to I-5 south, exit Washington Street, head west on Washington Street to Reynard Way and turn right. About 15 minutes. From the Hotel del Coronado, take Orange Avenue north to the bridge. From the Silver Strand, take State Route 75 north. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      'Hotel del Coronado',
      'Coronado Bridge',
      'Orange Avenue',
      'Coronado Beach',
      'Silver Strand',
      'Coronado Municipal Golf Course',
      'Spreckels Park',
      'Coronado Ferry Landing',
      'Naval Air Station North Island',
      'Star Park',
    ],
    adjacentAreas: ['downtown-san-diego'],
    geo: {
      latitude: 32.6859,
      longitude: -117.1831,
    },
    geoRadius: '4000',
    cityModifiers: [
      'Island peninsula surrounded by Pacific and bay',
      'Constant maritime exposure year-round',
      'Military and naval family population',
      'Affluent demographic with high event attendance',
      'UV reflection off water on multiple sides',
    ],
    postalCodes: ['92118', '92155'],
    faqs: [
      {
        question: 'How does Coronado island living affect skin?',
        answer:
          'Coronado is surrounded by water on multiple sides, producing constant salt air exposure and UV reflection. The barrier breaks down with every beach day, mineral SPF accumulates in pores, and photoaging accelerates. KIAMO\'s facials address barrier repair, extraction, and pigmentation support.',
      },
      {
        question: 'How far is KIAMO Skin from Coronado?',
        answer:
          'About 15 minutes via the Coronado Bridge to I-5 south, exiting Washington Street. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Coronado residents.',
      },
      {
        question: 'Can I get a facial before a Hotel del Coronado event?',
        answer:
          'Yes. HydraFacial Syndeo is the most popular pre-event facial — zero downtime, visible glow within hours. Book 1-2 days before the event for the best window. Same-week appointments are often available.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Coronado?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Kiki has 7+ years of experience across every skin tone.',
      },
      {
        question: 'Do you treat military families from Naval Base Coronado?',
        answer:
          'Yes. Many Coronado clients are military families whose skin rhythm shifts with deployments and travel. KIKI coordinates a treatment plan that works whether you are stationed at Coronado full-time, transitioning, or visiting.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Coronado from KIAMO Skin Mission Hills. 15 minutes via the Coronado Bridge, island-coastal skin specialists. Safe for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'north-park',
    name: 'North Park',
    title: 'Facial in North Park, San Diego — Urban Village Specialists | KIAMO',
    description:
      'Facial treatments serving North Park from KIAMO Skin Mission Hills. 10 minutes via 30th Street. Brewery patios, walkable urban skin. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in North Park, San Diego',
    intro: `KIAMO Skin provides facial treatments to North Park residents — San Diego's most walkable urban village, with brewery patios, restaurant culture, and year-round outdoor exposure from University Avenue and 30th Street. Located about 10 minutes away in Mission Hills at 3067 Reynard Way, our studio addresses the skin concerns that come with urban-village lifestyle. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Urban-village facial protocols for North Park',
      body: `North Park's walkable urban culture means year-round outdoor exposure — brewery patios on 30th Street, restaurant dining on University Avenue, farmers market weekends, and Balboa Park adjacency for outdoor recreation. KIAMO Skin offers the full facial menu (HydraFacial Syndeo, Lira chemical peels, dermaplaning, DMK enzyme therapy) with protocols calibrated to each client's skin tone. Kiki has 7+ years treating every Fitzpatrick type, including melanin-rich skin where standard peels trigger post-inflammatory hyperpigmentation. The 10-minute drive from North Park via 30th Street makes monthly maintenance realistic.`,
    },
    uniqueness: {
      heading: 'Facials for North Park urban-village skin',
      body: `North Park clients choose KIAMO for facials that address their specific urban-village lifestyle:`,
      bullets: [
        'Year-round outdoor dining and brewery patio exposure',
        'Walkable urban skin rhythm — high daily UV from street time',
        'Pre-event facials — concerts at The Observatory, gallery nights, restaurant openings',
        'All Fitzpatrick types — melanin-rich skin protocols per session',
        'Single-practitioner consistency — Kiki performs every treatment',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows a three-step structure with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, concern, and the right modality. For North Park clients, this includes outdoor lifestyle, UV history, and any current corrective work.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in North Park',
      body: `North Park clients book facials for pre-event preparation (concerts at The Observatory, gallery nights, restaurant openings), monthly maintenance against urban environmental stress, recovery from sun exposure, or as the foundation of a corrective plan addressing pigmentation, texture, or aging concerns. Many are creative professionals, service-industry workers, and young families who value consistent care. KIAMO is the right fit when the priority is one practitioner, no upsells, and protocols safe across every skin tone.`,
    },
    gettingHere:
      'From North Park, take 30th Street north to University Avenue west, then Washington Street west to Reynard Way and turn right. About 10 minutes. From El Cajon Boulevard, head west to 30th Street, then north. From University Avenue, head west to Washington Street. Free parking on site at 3067 Reynard Way.',
    landmarks: [
      '30th Street corridor',
      'University Avenue',
      'North Park Sign',
      'Balboa Park (west)',
      'El Cajon Boulevard',
      'Ray Street',
      'North Park Water Tower',
      'North Park Theatre',
      'Observatory North Park',
      'Birch North Park Theatre',
    ],
    adjacentAreas: ['hillcrest', 'mission-hills', 'university-heights'],
    geo: {
      latitude: 32.7417,
      longitude: -117.1294,
    },
    geoRadius: '2000',
    cityModifiers: [
      'Walkable urban neighborhood with brewery patio culture',
      'High UV exposure from outdoor dining and walking',
      'Diverse community requiring protocols for all Fitzpatrick types',
      'Urban density heat exposure',
      'Creative and service-industry professional population',
    ],
    postalCodes: ['92104'],
    faqs: [
      {
        question: 'How does North Park outdoor culture affect facial skin?',
        answer:
          'North Park\'s brewery patios and outdoor dining mean constant UV exposure year-round. UV is the primary trigger that worsens pigmentation and accelerates photoaging. KIAMO\'s facials emphasize daily SPF 50+ and barrier protection specifically for high-UV urban lifestyles.',
      },
      {
        question: 'How far is KIAMO Skin from North Park?',
        answer:
          'About 10 minutes via 30th Street to Washington Street. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for North Park residents.',
      },
      {
        question: 'Can I get a facial before an Observatory concert or gallery night?',
        answer:
          'Yes. HydraFacial Syndeo has zero downtime — you can attend an Observatory show, gallery opening, or restaurant event the same day. Book 1-2 days before for the best glow window.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in North Park?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Kiki has 7+ years of experience across every skin tone.',
      },
      {
        question: 'Do you offer evening appointments for North Park professionals?',
        answer:
          'Yes. Many North Park clients work in service, creative, or hospitality industries with non-traditional schedules. Evening slots are limited because the studio is single-room and single-practitioner — booking 2-3 weeks ahead is recommended for specific times.',
      },
    ],
    schemaDescription:
      'Facial treatments serving North Park from KIAMO Skin Mission Hills. 10 minutes via 30th Street, urban-village skin specialists. Safe for every Fitzpatrick I-VI skin tone.',
  },
  {
    slug: 'hillcrest',
    name: 'Hillcrest',
    title: 'Facial in Hillcrest, San Diego — LGBTQ+ Welcoming | KIAMO',
    description:
      'Facial treatments serving Hillcrest from KIAMO Skin Mission Hills. 5 minutes via University Avenue. LGBTQ+ welcoming, urban village. Safe for every Fitzpatrick type I-VI.',
    h1: 'Facial in Hillcrest, San Diego',
    intro: `KIAMO Skin provides facial treatments to Hillcrest residents — San Diego's iconic LGBTQ+ urban village, anchored by University Avenue and adjacent to Balboa Park. Located just 5 minutes away in Mission Hills at 3067 Reynard Way, our studio is easily reachable via University Avenue or Washington Street. Every facial is performed by Kiki, a California licensed esthetician with 7+ years of experience, in an LGBTQ+ welcoming environment. Treatments are calibrated for every Fitzpatrick type I-VI.`,
    authority: {
      heading: 'Hillcrest-trusted facial protocols',
      body: `Hillcrest's urban village location means year-round foot traffic, restaurant exposure, and a diverse community with specific skincare needs. KIAMO Skin offers the full facial menu (HydraFacial Syndeo, Lira chemical peels, dermaplaning, DMK enzyme therapy) with protocols calibrated to each client's skin tone. Kiki has 7+ years of experience treating Hillcrest's diverse community and understands the importance of safe, inclusive skincare — including melanin-rich skin where standard peels risk post-inflammatory hyperpigmentation. The 5-minute drive from University Avenue makes monthly maintenance realistic.`,
    },
    uniqueness: {
      heading: 'Facials for Hillcrest urban-village skin',
      body: `Hillcrest clients choose KIAMO for facials that respect both the skin and the community:`,
      bullets: [
        'LGBTQ+ welcoming environment — inclusive, affirming care',
        'All Fitzpatrick types — melanin-rich skin protocols per session',
        'Single-practitioner consistency — Kiki performs every treatment',
        'Pre-event facials — Hillcrest Farmers Market, restaurant events, Pride',
        '5 minutes from University Avenue with evening appointments available',
      ],
    },
    depth: {
      heading: 'How a facial works at KIAMO Skin',
      body: `Every facial follows a three-step structure with modality selected to match the skin on the day.`,
      process: [
        {
          step: 'Assessment',
          description:
            'Kiki evaluates your skin tone, concern, and the right modality. For Hillcrest clients, this includes outdoor lifestyle on University Avenue, UV history, and any current corrective work.',
        },
        {
          step: 'Treatment',
          description:
            'Sessions are 45-75 minutes. HydraFacial Syndeo uses Vortex-Fusion extraction. Lira peels use Fitzpatrick-calibrated concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture.',
        },
        {
          step: 'Homecare',
          description:
            'Daily homecare extends the result. Ceramide-rich moisturizers, broad-spectrum SPF 50+, tyrosinase inhibitors when pigmentation is a concern.',
        },
      ],
    },
    intent: {
      heading: 'Who books a facial in Hillcrest',
      body: `Hillcrest clients book facials for pre-event preparation (Pride, restaurant openings, Farmers Market mornings), monthly maintenance against urban environmental stress, recovery from sun exposure, or as the foundation of a corrective plan addressing pigmentation, texture, or aging concerns. KIAMO is the right fit when the priority is one practitioner, no upsells, and an inclusive environment where every skin tone is treated safely.`,
    },
    gettingHere:
      'From University Avenue in Hillcrest, head west toward Mission Hills, turn right on Washington Street. The studio is at 3067 Reynard Way, first left after the small commercial strip. About 5 minutes. From Fifth Avenue near the Hillcrest sign, take Fifth north to Washington and turn left. From Balboa Park side of Hillcrest, take Park Boulevard to University, continue west to Washington. Free parking on site.',
    landmarks: [
      'University Avenue',
      'Hillcrest Sign',
      'Fifth Avenue corridor',
      'Whole Foods Hillcrest',
      'Balboa Park (adjacent)',
      'Upas Street',
      'Washington Street',
      'Trader Joe\'s Hillcrest',
      'Hillcrest Farmers Market',
      'Pride Flag',
    ],
    adjacentAreas: ['mission-hills', 'north-park', 'bankers-hill'],
    geo: {
      latitude: 32.7473,
      longitude: -117.1661,
    },
    geoRadius: '2000',
    cityModifiers: [
      'Urban village with high foot traffic',
      'LGBTQ+ community hub',
      'Dense restaurant and nightlife scene',
      'Diverse professional and creative community',
      'Adjacent to Balboa Park brings outdoor exposure',
    ],
    postalCodes: ['92103', '92104'],
    faqs: [
      {
        question: 'Is KIAMO Skin LGBTQ+ welcoming for facials in Hillcrest?',
        answer:
          'Yes. KIAMO Skin provides inclusive, affirming care for every client. Kiki has served Hillcrest\'s LGBTQ+ community for years and understands the importance of safe, affirming skincare environments. Every client receives the same expert, respectful care regardless of gender identity or expression.',
      },
      {
        question: 'How far is KIAMO Skin from Hillcrest?',
        answer:
          'KIAMO Skin is 5 minutes from University Avenue in Hillcrest via Washington Street. The studio is at 3067 Reynard Way in Mission Hills with free parking. Monthly maintenance is realistic for Hillcrest residents.',
      },
      {
        question: 'Can I get a facial before Pride or a Hillcrest event?',
        answer:
          'Yes. HydraFacial Syndeo has zero downtime — you can attend the Pride parade, a Hillcrest Farmers Market morning, or a restaurant event the same day. Book 1-2 days before for the best glow window.',
      },
      {
        question: 'Is a facial safe for melanin-rich skin in Hillcrest?',
        answer:
          'Yes. Every modality at KIAMO is calibrated to your Fitzpatrick type. Kiki has 7+ years of experience across every skin tone.',
      },
      {
        question: 'Do you offer evening appointments near Hillcrest?',
        answer:
          'Yes. Many Hillcrest clients work in service, hospitality, or creative industries with non-traditional schedules. The 5-minute proximity makes after-work appointments realistic. Book online or call (310) 595-0872.',
      },
    ],
    schemaDescription:
      'Facial treatments serving Hillcrest from KIAMO Skin Mission Hills. 5 minutes via University Avenue, LGBTQ+ welcoming. Safe for every Fitzpatrick I-VI skin tone.',
  },
];
