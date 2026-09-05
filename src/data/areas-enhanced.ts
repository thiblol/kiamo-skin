/**
 * COMPLETE ENHANCED AREA DATA - ALL 9 AREAS
 * GMB Crush + Brave AI + Local Entity Injection Framework Implementation
 *
 * Each area has:
 * - Optimized title (≤60 chars), H1, meta description (≤155 chars)
 * - Quick Answer block for AI Overview extraction
 * - Service Area paragraph with 20+ geo-entities
 * - Navigation context with landmarks and exits
 * - City modifiers (climate, building, demographic data)
 * - Process blocks for featured treatments
 * - 6 enhanced FAQs in AIO-triggering format
 * - Geographic entity data for schema
 */

import { areas } from './areas';

// Import the complete enhanced data for completed areas
import { laJollaEnhanced } from './area-enhancements-lajolla';
import { pacificBeachEnhanced } from './area-enhancements-pacificbeach';
import { northParkEnhanced } from './area-enhancements-northpark';
import { encinitasEnhanced } from './area-enhancements-encinitas';
import { delMarEnhanced } from './area-enhancements-delmar';
import { carlsbadEnhanced } from './area-enhancements-carlsbad';
import { laMesaEnhanced } from './area-enhancements-lamesa';
import { missionHillsEnhanced } from './area-enhancements-missionhills';

export interface EnhancedArea {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  gettingHere: string;
  localConcern: { heading: string; body: string };
  keywordContext: {
    primaryKeyword: string;
    treatmentPhrases: string[];
    neighborhoodMentions: string[];
  };
  melaninNote?: string;
  schemaDescription: string;
  allAbout: { body: string; facts: { label: string; value: string }[] };
  proximity: string;
  pricingNote: string;
  featured: string[];
  crossLinkLabel: string;
  services?: {
    name: string;
    slug: string;
    description: string;
  }[];

  // Enhanced fields
  quickAnswer?: string;
  serviceAreaParagraph?: string;
  navigationContext?: string;
  cityModifiers?: string;
  authorityBlock?: {
    heading: string;
    body: string;
  };
  uniquenessBlock?: {
    heading: string;
    points: string[];
  };
  processBlocks?: Array<{
    slug: string;
    name: string;
    heading: string;
    intro: string;
    steps: Array<{ title: string; description: string }>;
    footer?: string;
  }>;
  guaranteeBlock?: {
    heading: string;
    commitments: Array<{ title: string; body: string }>;
  };
  enhancedFaqs?: Array<{
    question: string;
    answer: string;
    entityCount?: number;
  }>;
  geoData?: {
    zipCodes: string[];
    landmarks: string[];
    highways: string[];
    exits: string[];
    adjacentCities: string[];
  };
  trustSignals?: {
    yearsInBusiness: string;
    licenseNumber: string;
    certifications: string[];
    reviewCount: number;
    reviewRating: number;
    gbpUrl: string;
    responseTime: string;
  };
}

// Shared trust signals (will be updated with real data)
const sharedTrustSignals = {
  yearsInBusiness: '7+ years',
  licenseNumber: 'PLACEHOLDER_LICENSE',
  certifications: [
    'California Board of Barbering and Cosmetology Licensed Esthetician',
    'DMK Certified Skin Revision Specialist',
    'HydraFacial Syndeo Advanced Protocol Provider',
    'Keravive Scalp Treatment Certified Practitioner',
    'San Diego County Department of Environmental Health Permitted Facility',
  ],
  reviewCount: 0,
  reviewRating: 0,
  gbpUrl: 'https://g.page/r/CQiLcJCN-DxkEAI',
  responseTime: 'Within 24 hours on business days',
};

// Shared uniqueness differentiators
const sharedUniquenessBlock = {
  heading: 'What makes this different from spa facials',
  points: [
    'Clinical-grade equipment — HydraFacial Syndeo with medical-grade vacuum calibration and peptide infusion under pressure, not manual extraction with steam',
    'Melanin-rich skin specialization — treatment strength, pacing, and product selection based on Fitzpatrick type and barrier condition, not a universal protocol',
    'Series planning at consultation — full course mapped and scheduled at the first appointment, with treatment intervals set by recovery time, not convenience',
    'One practitioner, one room — same esthetician assesses, treats, and adjusts the plan at every visit based on how your skin responded',
  ],
};

// Shared authority block
const sharedAuthorityBlock = {
  heading: 'One esthetician, every appointment',
  body: 'Kiki is a California licensed esthetician with over 7 years of experience treating barrier damage and pigmentation in melanin-rich skin. Certified in DMK Enzyme Therapy\'s skin revision system and trained in HydraFacial Syndeo advanced protocols, including Keravive scalp treatment. The studio has one treatment room at 3067 Reynard Way in Mission Hills — no rotating roster, no staffing changes. The same esthetician assesses your skin at the first visit, performs every treatment in a series, and adjusts the plan based on how your skin responded last time.',
};

// Shared guarantee commitments
const createGuaranteeBlock = (areaName: string) => ({
  heading: `Our commitment to ${areaName} clients`,
  commitments: [
    {
      title: 'Consultation-first approach',
      body: 'Every new client receives a full skin analysis before any treatment is booked. No surprises, no upselling mid-session. What you see in the consultation is what happens in the treatment room.',
    },
    {
      title: 'Series planning upfront',
      body: 'If your concern requires multiple visits, we map the full course at the first appointment — number of sessions, treatment intervals, total timeline, and investment. You\'ll know what to expect before you commit.',
    },
    {
      title: 'Same practitioner guarantee',
      body: 'One treatment room, one licensed esthetician. The person who assessed your skin at the first visit performs every treatment and adjusts the plan based on response.',
    },
    {
      title: 'Transparent pricing',
      body: 'All treatment costs are published and confirmed in writing before booking. No hidden fees, no surprise add-ons, no pressure to upgrade mid-treatment.',
    },
  ],
});

// Map areas to enhanced versions
export const enhancedAreas: EnhancedArea[] = areas.map((area) => {
  const baseArea = {
    ...area,
    authorityBlock: sharedAuthorityBlock,
    uniquenessBlock: sharedUniquenessBlock,
    guaranteeBlock: createGuaranteeBlock(area.name),
    trustSignals: sharedTrustSignals,
  };

  // Area-specific enhancements
  switch (area.slug) {
    case 'mission-hills':
      return {
        ...baseArea,
        title: 'Mission Hills Facials — HydraFacial & DMK Enzyme | KIAMO',
        description: 'KIAMO SKIN corrective facial studio at 3067 Reynard Way, Mission Hills. HydraFacial, DMK, Lira peels, Procell. 5 min from Hillcrest. Free parking. From $199.',
        h1: 'Corrective Facials at KIAMO SKIN Studio in Mission Hills',
        quickAnswer: missionHillsEnhanced.quickAnswer,
        serviceAreaParagraph: missionHillsEnhanced.serviceAreaParagraph,
        navigationContext: missionHillsEnhanced.navigationContext,
        cityModifiers: missionHillsEnhanced.cityModifiers,
        processBlocks: missionHillsEnhanced.processes,
        enhancedFaqs: missionHillsEnhanced.newFaqs,
        geoData: missionHillsEnhanced.geoData,
      };

    case 'la-jolla':
      return {
        ...baseArea,
        title: 'La Jolla Facials — HydraFacial & Keravive | KIAMO SKIN',
        description: 'KIAMO SKIN treats ocean swimmers from La Jolla with HydraFacial Syndeo and Keravive scalp therapy. Mission Hills studio, 12 miles south via I-5. Licensed esthetician. From $259.',
        h1: 'HydraFacial & Barrier Repair Facials for La Jolla Clients',
        quickAnswer: laJollaEnhanced.quickAnswer,
        serviceAreaParagraph: laJollaEnhanced.serviceAreaParagraph,
        navigationContext: laJollaEnhanced.navigationContext,
        cityModifiers: laJollaEnhanced.cityModifiers,
        processBlocks: laJollaEnhanced.processes,
        enhancedFaqs: laJollaEnhanced.newFaqs,
        geoData: laJollaEnhanced.geoData,
      };

    case 'chula-vista':
      return {
        ...baseArea,
        title: 'Chula Vista Facials — Lira Peels & DMK | KIAMO SKIN',
        description: 'KIAMO SKIN treats melasma and hyperpigmentation for Chula Vista clients with Lira Chemical Peels and DMK Enzyme Therapy. Mission Hills studio, 13 miles north via I-5. From $199.',
        h1: 'Chemical Peels & Pigmentation Facials for Chula Vista Clients',
        quickAnswer: 'KIAMO SKIN treats melasma and hyperpigmentation from inland UV exposure at a one-room studio in Mission Hills, San Diego (92103), about 13 miles north of Chula Vista via I-5. Kiki, a California licensed esthetician specializing in melanin-rich skin, uses Lira Chemical Peels and DMK Enzyme Therapy for clients from Eastlake, Otay Ranch, and Rancho del Rey. Treatments start at $199, with series planning for melanin-rich skin types (Fitzpatrick III-VI) to prevent post-inflammatory hyperpigmentation.',
        serviceAreaParagraph: 'KIAMO SKIN serves clients from across Chula Vista, including Eastlake near Olympic Training Center and Terra Nova Plaza (91915), Otay Ranch near Millenia shopping district (91913), Rancho del Rey along Paseo Ranchero (91914), the Bonita border near Sweetwater Reservoir, San Miguel Ranch north of SR-54, and the Rolling Hills Ranch area east of I-805. The studio is in Mission Hills, San Diego County (92103), accessible via northbound I-5 from Palomar Street (Exit 5), Main Street (Exit 6), or Cesar Chavez Parkway (Exit 7A), or via I-805 north to I-5 north through National City.',
        navigationContext: 'From Eastlake near Olympic Parkway and Hunte Parkway, head west on Olympic toward SR-125 north. Merge onto SR-125 north (toll road) toward I-805, passing Sweetwater Reservoir on your right. Exit onto I-805 north near Bonita Road, then continue north past South Bay and National City. Merge onto I-5 north at the interchange near Downtown San Diego, staying in the center lanes. Washington Street (Exit 17) comes up about 3 miles after the merge. Turn right at the exit, then immediate left onto Reynard Way. The studio at 3067 Reynard Way is 0.3 miles from the exit with free parking on site.',
        cityModifiers: 'Chula Vista sits inland from the marine layer that buffers coastal neighborhoods, resulting in higher UV exposure and warmer summer temperatures (85-95°F afternoons May through October) compared to coastal San Diego. The city is San Diego County\'s second-largest and fastest-growing between 1990-2010, with a 60% Hispanic/Latino population and significant melanin-rich demographic (Fitzpatrick types III-VI). Most residential construction post-2000 consists of planned communities with stucco exteriors, concrete slab foundations, and minimal landscaping — resulting in high heat reflection and cumulative UV exposure for residents. Eastlake, Otay Ranch, and Rancho del Rey developments sit 5-8 miles inland from San Diego Bay, where afternoon temperatures run 10-15°F warmer than coastal areas and the inland sun drives higher rates of melasma and pigmentation concerns in melanin-rich skin.',
        processBlocks: [
          {
            slug: 'lira-peels',
            name: 'Lira Clinical Chemical Peels',
            heading: 'How Lira Peels treat melasma without triggering PIH',
            intro: 'Lira Clinical peels are formulated specifically for melanin-rich skin (Fitzpatrick types III-VI) with controlled-release acid delivery that prevents the aggressive exfoliation that can trigger post-inflammatory hyperpigmentation. The peel series addresses melasma at the melanocyte level using tyrosinase inhibitors and anti-inflammatory botanicals.',
            steps: [
              {
                title: 'Pre-treatment preparation',
                description: 'Two-week home prep with Lira Clinical serum to stabilize the barrier and reduce melanocyte reactivity before the first peel (prevents PIH)',
              },
              {
                title: 'Controlled-release peel application',
                description: 'Lira peel solution (lactic, mandelic, kojic acids) applied in thin layers with 2-3 minute intervals between coats — not dumped on all at once (8-12 minutes total contact)',
              },
              {
                title: 'Neutralization and masque',
                description: 'Peel neutralized with alkaline solution, then hydrating masque applied to calm inflammation and prevent rebound pigmentation (10 minutes)',
              },
              {
                title: 'Post-peel protocol',
                description: 'Strict sun avoidance for 7 days, mineral SPF 50+ daily, and Lira ICE serum to inhibit tyrosinase activity during the healing window',
              },
            ],
            footer: 'Total treatment time: 45-60 minutes | Downtime: Mild flaking days 3-5 | Series: 4-6 peels, 14-21 days apart | No sun exposure for 7 days post-peel',
          },
        ],
        enhancedFaqs: [
          {
            question: 'How long does it take to drive from Chula Vista Eastlake to Mission Hills for a chemical peel?',
            answer: 'About twenty-five to thirty minutes outside commute hours. From Eastlake near Olympic Parkway, take SR-125 north (toll road) toward I-805, then I-805 north through National City to the I-5 north merge near Downtown. Exit at Washington Street (Exit 17) — total distance is 13 miles. Mid-morning (10 AM-12 PM) is the fastest window. During the northbound morning commute (7-9 AM), traffic stacks on I-5 near Downtown and can push the drive to forty-five minutes. From Otay Ranch or Bonita, you can bypass SR-125 tolls by taking Bonita Road west to I-805 north directly.',
            entityCount: 10,
          },
          {
            question: 'Are chemical peels safe for melanin-rich skin in Chula Vista?',
            answer: 'Yes, when using peels formulated for melanin-rich skin (Fitzpatrick types III-VI) like Lira Clinical. Standard glycolic or TCA peels can trigger post-inflammatory hyperpigmentation (PIH) on darker skin tones — making the problem worse, not better. Lira peels use controlled-release acids (lactic, mandelic, kojic) with built-in tyrosinase inhibitors that prevent the melanocyte overreaction that causes PIH. The peel series is paced at 14-21 day intervals, not weekly, to allow complete barrier recovery between treatments. Pre-treatment prep with stabilizing serums is mandatory, not optional. This conservative approach takes longer but prevents the rebound pigmentation that aggressive peeling causes on melanin-rich skin.',
            entityCount: 9,
          },
          {
            question: 'How much does a chemical peel cost for Chula Vista clients with melasma?',
            answer: 'Lira Chemical Peels at KIAMO SKIN start at $199 for Gentle Renewal and $299 for Advanced peel formulations. Most clients with melasma or hyperpigmentation need a series of 4-6 peels to see meaningful lightening, which is why we offer series pricing: $749 for a 4-peel series (saves $97) or $1,399 for 6 peels (saves $195). The first visit includes a skin analysis, Fitzpatrick type assessment, and discussion of realistic timelines for pigmentation reduction. Series pricing is confirmed at consultation before you commit. Each peel session takes 45-60 minutes with 3-5 days of mild flaking.',
            entityCount: 8,
          },
          {
            question: 'Will a chemical peel remove melasma from Chula Vista inland sun exposure permanently?',
            answer: 'No treatment removes melasma permanently — it\'s a chronic condition triggered by UV exposure, hormones, and genetic factors. What Lira Chemical Peels do is suppress melanocyte activity and lighten existing pigmentation to a more even baseline. The results can last 6-18 months if you maintain strict sun protection (mineral SPF 50+ daily, wide-brimmed hats, UV-blocking car windows). Chula Vista\'s inland location means higher UV exposure than coastal areas — summer afternoons hit 85-95°F with minimal marine layer protection. Without daily sun protection, melasma will recur within 2-4 months. Maintenance peels every 2-3 months help sustain results, but sun avoidance is the determining factor for long-term pigment control.',
            entityCount: 11,
          },
          {
            question: 'Can I get a chemical peel if I live in Chula Vista and work outdoors?',
            answer: 'Yes, but timing and sun protection become critical. Chemical peels make skin temporarily more photosensitive for 7-14 days after treatment, which is manageable if you can avoid direct midday sun during that window. We schedule peels for Chula Vista clients with outdoor jobs during fall or winter months (October-March) when UV index is lower and days are shorter. You\'ll need mineral SPF 50+ applied every 90 minutes, a wide-brimmed hat, and long sleeves during the post-peel healing period. If your work schedule makes sun avoidance impossible, we recommend DMK Enzyme Therapy or HydraFacial instead — both strengthen the barrier without causing photosensitivity and can be done year-round regardless of outdoor exposure.',
            entityCount: 9,
          },
          {
            question: 'Do I need a consultation before booking a chemical peel from Chula Vista?',
            answer: 'Yes. New clients start with a consultation that includes a skin analysis and first treatment (not a separate appointment). The consultation at KIAMO SKIN covers Fitzpatrick type assessment, melasma pattern analysis (centrofacial, malar, mandibular), current skincare routine review, and realistic timeline for pigment reduction. You\'ll receive either a Lira Chemical Peel, DMK Enzyme Therapy Level 1, or HydraFacial during the same visit based on your skin\'s current condition. First-time consultation + treatment starts at $249. You can book online or call — we respond within 24 hours on business days. The studio is at 3067 Reynard Way in Mission Hills with free parking.',
            entityCount: 10,
          },
        ],
        geoData: {
          zipCodes: ['91910', '91911', '91913', '91914', '91915'],
          landmarks: [
            'Olympic Training Center',
            'Terra Nova Plaza',
            'Millenia shopping center',
            'Sweetwater Reservoir',
            'Eastlake Woods Boulevard',
            'Otay Ranch Town Center',
            'Bonita Golf Course',
            'Paseo Ranchero',
            'Rolling Hills Ranch',
            'San Miguel Ranch',
          ],
          highways: ['I-5', 'I-805', 'SR-125', 'SR-54', 'Bonita Road', 'Olympic Parkway'],
          exits: [
            'Exit 5 (Palomar Street)',
            'Exit 6 (Main Street)',
            'Exit 7A (Cesar Chavez Parkway)',
            'Exit 17 (Washington Street)',
          ],
          adjacentCities: ['National City', 'Bonita', 'Imperial Beach', 'San Ysidro'],
        },
      };

    case 'la-mesa':
      return {
        ...baseArea,
        title: 'La Mesa Facials — Melasma & Sun Damage Treatment | KIAMO',
        description: 'KIAMO SKIN treats inland UV damage and melasma for La Mesa clients. Lira peels, DMK, HydraFacial. 20 min west via I-8. Melanin-rich skin specialization. From $199.',
        h1: 'Melasma & Sun Damage Treatment for La Mesa Clients',
        quickAnswer: laMesaEnhanced.quickAnswer,
        serviceAreaParagraph: laMesaEnhanced.serviceAreaParagraph,
        navigationContext: laMesaEnhanced.navigationContext,
        cityModifiers: laMesaEnhanced.cityModifiers,
        processBlocks: laMesaEnhanced.processes,
        enhancedFaqs: laMesaEnhanced.newFaqs,
        geoData: laMesaEnhanced.geoData,
      };

    case 'carlsbad':
      return {
        ...baseArea,
        title: 'Carlsbad Facials — Procell & Keravive Series | KIAMO',
        description: 'KIAMO SKIN provides Procell microchanneling and Keravive scalp series for Carlsbad clients. Series planned at consultation. 35 min south via I-5. From $599.',
        h1: 'Procell & Keravive Treatment Series for Carlsbad Clients',
        quickAnswer: carlsbadEnhanced.quickAnswer,
        serviceAreaParagraph: carlsbadEnhanced.serviceAreaParagraph,
        navigationContext: carlsbadEnhanced.navigationContext,
        cityModifiers: carlsbadEnhanced.cityModifiers,
        processBlocks: carlsbadEnhanced.processes,
        enhancedFaqs: carlsbadEnhanced.newFaqs,
        geoData: carlsbadEnhanced.geoData,
      };

    case 'del-mar':
      return {
        ...baseArea,
        title: 'Del Mar Facials — Texture & UV Damage Treatment | KIAMO',
        description: 'KIAMO SKIN treats fair and race season UV damage for clients traveling from Del Mar. Procell microchanneling, Keravive, HydraFacial. 25 min south. From $259.',
        h1: 'Texture & UV Damage Treatment for Clients from Del Mar',
        quickAnswer: delMarEnhanced.quickAnswer,
        serviceAreaParagraph: delMarEnhanced.serviceAreaParagraph,
        navigationContext: delMarEnhanced.navigationContext,
        cityModifiers: delMarEnhanced.cityModifiers,
        processBlocks: delMarEnhanced.processes,
        enhancedFaqs: delMarEnhanced.newFaqs,
        geoData: delMarEnhanced.geoData,
      };

    case 'encinitas':
      return {
        ...baseArea,
        title: 'Encinitas Facials — Barrier Repair for Surfers | KIAMO',
        description: 'KIAMO SKIN treats barrier damage from surf exposure for Encinitas clients. DMK Enzyme Therapy, Keravive scalp, HydraFacial. 30 min south via I-5. From $259.',
        h1: 'Barrier Repair & Scalp Therapy for Encinitas Surfers',
        quickAnswer: encinitasEnhanced.quickAnswer,
        serviceAreaParagraph: encinitasEnhanced.serviceAreaParagraph,
        navigationContext: encinitasEnhanced.navigationContext,
        cityModifiers: encinitasEnhanced.cityModifiers,
        processBlocks: encinitasEnhanced.processes,
        enhancedFaqs: encinitasEnhanced.newFaqs,
        geoData: encinitasEnhanced.geoData,
      };

    case 'north-park':
      return {
        ...baseArea,
        title: 'North Park Facials — Pigmentation & Acne Scarring | KIAMO',
        description: 'KIAMO SKIN treats PIH and acne scarring in melanin-rich skin for North Park clients. Lira peels, dermaplaning, HydraFacial. 10 min, no freeway. From $199.',
        h1: 'Pigmentation & Acne Scar Treatment for North Park Clients',
        quickAnswer: northParkEnhanced.quickAnswer,
        serviceAreaParagraph: northParkEnhanced.serviceAreaParagraph,
        navigationContext: northParkEnhanced.navigationContext,
        cityModifiers: northParkEnhanced.cityModifiers,
        processBlocks: northParkEnhanced.processes,
        enhancedFaqs: northParkEnhanced.newFaqs,
        geoData: northParkEnhanced.geoData,
      };

    case 'pacific-beach':
      return {
        ...baseArea,
        title: 'Pacific Beach Facials — Sun Damage & Barrier Repair | KIAMO',
        description: 'KIAMO SKIN treats May Gray sun damage for Pacific Beach clients with Lira Peels, DMK Enzyme Therapy, and Keravive. Mission Hills studio, 15 minutes east. From $199.',
        h1: 'Sun Damage & Barrier Repair Facials for Pacific Beach Clients',
        quickAnswer: pacificBeachEnhanced.quickAnswer,
        serviceAreaParagraph: pacificBeachEnhanced.serviceAreaParagraph,
        navigationContext: pacificBeachEnhanced.navigationContext,
        cityModifiers: pacificBeachEnhanced.cityModifiers,
        processBlocks: pacificBeachEnhanced.processes,
        enhancedFaqs: pacificBeachEnhanced.newFaqs,
        geoData: pacificBeachEnhanced.geoData,
      };

    // Continue with remaining 6 areas... (North Park, etc.)
    // For now, return base enhancement for others
    default:
      return baseArea;
  }
});

export const getEnhancedArea = (slug: string) => enhancedAreas.find((a) => a.slug === slug);
