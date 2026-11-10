import type { Faq } from './faqs';

/**
 * The service-and-city record types.
 *
 * Split from the data itself so the data files can import them without a
 * circular dependency, and so the shape of a record is documented in one
 * place rather than repeated.
 */

export interface ServiceSlug =
  | 'facial'
  | 'hydrafacial'
  | 'chemical-peel'
  | 'microneedling'
  | 'dermaplaning'
  | 'scalp-therapy'
  | 'dmk-enzyme-therapy'
  | 'acne-treatment'
  | 'hyperpigmentation-treatment'
  | 'melasma-treatment'
  | 'corrective-skin-treatments';

export interface AreaSlug {
  (): void;
}

/**
 * An area shell — what a place IS.
 *
 * Geography, drive time, landmarks, the local skin concern, the hyperlocal
 * band. None of it changes when the service changes, so it lives in one place
 * and the service×city records merge it in at read time.
 */
export interface AreaShell {
  slug: string;
  name: string;
  gettingHere: string;
  localConcern: { heading: string; body: string };
  allAbout: { body: string; facts: { label: string; value: string }[] };
  proximity: string;
  pricingNote: string;
  /** Service slugs available to clients from this area. */
  featured: string[];
  crossLinkLabel: string;
  keywordContext?: {
    primaryKeyword: string;
    treatmentPhrases: string[];
    neighborhoodMentions: string[];
  };
  melaninNote?: string;
  schemaDescription: string;
  landmarks: string[];
  adjacentAreas: string[];
  geo: { latitude: number; longitude: number };
  geoRadius: string;
  postalCodes: string[];
  cityModifiers: string[];
  quickAnswer?: string;
  /**
   * One sentence for the service-and-city hero: why this treatment matters
   * in this city. Written, not derived — the local concern has its own
   * section further down the page, and the hero carries the claim.
   */
  heroCityLine?: string;
  serviceAreaParagraph?: string;
  navigationContext?: string;
  geoData?: {
    zipCodes: string[];
    landmarks: string[];
    highways: string[];
    exits: string[];
    adjacentCities: string[];
  };
  enhancedFaqs?: Faq[];
  processBlocks?: {
    slug: string;
    name: string;
    heading: string;
    intro: string;
    steps: { title: string; description: string }[];
    footer?: string;
  }[];
}

/** The pair-specific half of a record. */
export interface ServiceAreaContent {
  title: string;
  description: string;
  h1: string;
  /** The deck under the H1. Answers the search the visitor just typed. */
  opener: string;
  intro: string;
  /** The capsule an AI engine lifts verbatim. */
  quickAnswer: string;
  authority: { heading: string; body: string };
  uniqueness: { heading: string; body: string; bullets: string[] };
  depth: {
    heading: string;
    body: string;
    process: { step: string; description: string }[];
  };
  intent: { heading: string; body: string };
  faqs: Faq[];
  /** Long-form body, on the five pairs that came from a geo article. */
  body?: string;
  datePublished?: string;
  dateModified?: string;
  primaryKeyword?: string;
  localGuideLead?: string;
}

/**
 * A complete record: the pair-specific content, plus the area shell merged
 * in from areas.ts and areas-enhanced.ts.
 */
export interface ServiceAreaRecord extends ServiceAreaContent {
  service: ServiceSlug;
  area: string;
  /** The area shell. */
  gettingHere: string;
  localConcern: { heading: string; body: string };
  allAbout: { body: string; facts: { label: string; value: string }[] };
  proximity: string;
  pricingNote: string;
  /** Service slugs available to clients from this area. */
  featured: string[];
  crossLinkLabel: string;
  keywordContext?: {
    primaryKeyword: string;
    treatmentPhrases: string[];
    neighborhoodMentions: string[];
  };
  melaninNote?: string;
  schemaDescription: string;
  landmarks: string[];
  adjacentAreas: string[];
  geo: { latitude: number; longitude: number };
  geoRadius: string;
  postalCodes: string[];
  cityModifiers: string[];
  navigationContext?: string;
  serviceAreaParagraph?: string;
  geoData?: {
    zipCodes: string[];
    landmarks: string[];
    highways: string[];
    exits: string[];
    adjacentCities: string[];
  };
}
