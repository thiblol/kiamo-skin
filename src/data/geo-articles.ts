/**
 * GeoArticles — service + city long-form content for AI Overview inclusion
 *
 * These are 1,000-1,500 word articles that combine:
 * - A service (HydraFacial, Lira Peels, etc.)
 * - A city (La Jolla, Chula Vista, etc.)
 * - A local concern or context (ocean swimming, inland UV, etc.)
 *
 * GeoArticles drive:
 * - AI Overview citations
 * - Featured snippets
 * - Long-tail keyword capture
 * - Semantic depth supporting Location Service Pages
 */

export interface GeoArticle {
  slug: string;
  areaSlug: string; // Parent area page
  serviceSlug?: string; // Parent service page (optional)

  title: string;
  description: string;
  h1: string;

  /** 2-3 sentence Quick Answer block for AI Overview extraction */
  quickAnswer: string;

  /** 5 FAQs in voice search format */
  faqs: Array<{
    question: string;
    answer: string;
  }>;

  /** Related internal links */
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;

  /** Publication date (YYYY-MM-DD format) */
  datePublished: string;

  /** Last modified date (YYYY-MM-DD format) */
  dateModified: string;

  /** Primary keyword for SEO */
  primaryKeyword: string;

  /** Word count (for Article schema) */
  wordCount: number;
}

export const geoArticles: GeoArticle[] = [
  {
    slug: 'hydrafacial-ocean-swimmers',
    areaSlug: 'la-jolla',
    serviceSlug: 'hydrafacial',
    title: 'HydraFacial for Ocean Swimmers La Jolla | KIAMO Barrier Repair',
    description: 'Daily ocean swimming strips your barrier. HydraFacial at KIAMO in Mission Hills rebuilds hydration for La Jolla Cove swimmers. Clinical-grade extraction + repair.',
    h1: 'HydraFacial for Ocean Swimmers in La Jolla: Barrier Repair After Salt Water',
    quickAnswer: 'Daily ocean swimming at La Jolla Cove, Windansea, and La Jolla Shores strips the skin barrier with salt water and repeated rinsing. HydraFacial at KIAMO SKIN in Mission Hills uses vortex extraction to remove salt deposits from follicles and peptide infusion to rebuild hydration—twenty minutes south on I-5 from La Jolla Village.',
    faqs: [
      {
        question: 'How soon after swimming can I get a HydraFacial?',
        answer: 'Same day is fine if the skin is not actively irritated. Most swimmers book morning appointments before their swim, or afternoon appointments a few hours after getting out. If your skin is red, stinging, or visibly inflamed from a long session in rough water, wait twenty-four hours to let the acute inflammation settle. The HydraFacial will not make inflamed skin worse, but it works better on skin that is damaged but calm.',
      },
      {
        question: 'Will HydraFacial prevent salt buildup or just treat it?',
        answer: 'It treats existing buildup and temporarily prevents accumulation by clearing the follicles, but it does not stop salt from bonding with sebum the next time you swim. Think of it as resetting the baseline. Monthly treatments keep the buildup from reaching the point where it affects how your skin feels and functions. Between treatments, barrier repair serums and thorough rinsing after swimming help slow the rate at which salt re-accumulates.',
      },
      {
        question: 'How often do La Jolla ocean swimmers need HydraFacial?',
        answer: 'Monthly maintenance is the standard plan for swimmers in the water four to six days a week year-round. If you swim less frequently—two to three times a week, or only during warmer months—every six to eight weeks may be enough. The cadence is set at consultation based on how quickly your barrier recovers between sessions, not on a fixed protocol.',
      },
      {
        question: 'Can I swim the same day after HydraFacial treatment?',
        answer: 'You can, but most people wait twenty-four hours. The vortex extraction and peptide infusion leave the skin more receptive than usual, which also means more vulnerable to irritation for the first few hours. Swimming immediately after treatment will not undo the HydraFacial, but it does mean you are stripping the barrier again before it has had a chance to stabilize. If you must swim the same day, wait at least six hours and apply a barrier cream before entering the water.',
      },
      {
        question: 'What is the difference between this and a spa facial after swimming?',
        answer: 'Spa facials use steam, manual extraction, and massage. Steam opens pores but does not remove mineral deposits. Manual extraction can traumatize skin that is already compromised from salt exposure. Massage feels good but does not address the barrier damage that is causing the tightness in the first place. HydraFacial Syndeo uses a medical-grade device with controlled vacuum pressure calibrated to remove salt and mineral buildup without trauma. The peptide infusion is delivered under pressure, which drives hydration deeper than topical application. This is clinical equipment designed for barrier repair, not relaxation. The goal is functional skin, not a relaxing hour.',
      },
    ],
    relatedLinks: [
      {
        label: 'HydraFacial Treatment in San Diego',
        href: '/treatments/hydrafacial/',
      },
      {
        label: 'DMK Enzyme Therapy for Barrier Repair',
        href: '/treatments/dmk-enzyme-therapy/',
      },
      {
        label: 'Keravive Scalp Treatment',
        href: '/treatments/keravive-scalp/',
      },
      {
        label: 'Corrective Facials in La Jolla',
        href: '/service-areas/la-jolla/',
      },
      {
        label: 'Barrier Repair Facials for Encinitas Surfers',
        href: '/service-areas/encinitas/',
      },
      {
        label: 'Facials in Pacific Beach',
        href: '/service-areas/pacific-beach/',
      },
    ],
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    primaryKeyword: 'HydraFacial for ocean swimmers La Jolla',
    wordCount: 1450,
  },
];

export const getGeoArticle = (areaSlug: string, articleSlug: string) =>
  geoArticles.find((a) => a.areaSlug === areaSlug && a.slug === articleSlug);

export const getGeoArticlesByArea = (areaSlug: string) =>
  geoArticles.filter((a) => a.areaSlug === areaSlug);
