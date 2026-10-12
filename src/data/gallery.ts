import type { ImageMetadata } from 'astro';
import { business, verifiedPrices } from '../config/business';
import hyperpigmentationBefore from '../assets/hyperpigmentation-before-treatment-melanin-rich-skin-san-diego.jpg';
import hyperpigmentationAfter from '../assets/hyperpigmentation-after-treatment-results-san-diego.jpg';
import keraviveBefore from '../assets/keravive-scalp-treatment-before-san-diego.jpg';
import keraviveAfter from '../assets/keravive-scalp-treatment-after-results-san-diego.jpg';
import keraviveHair from '../assets/keravive-scalp-treatment-hair-growth-san-diego.jpg';

import baBackCongestion from '../assets/back-congestion-pigmentation-before-and-after-san-diego.png';
import baBarrierDamage from '../assets/barrier-damage-active-overuse-treatment-before-and-after-san-diego.png';
import baMelasmaChemical from '../assets/melasma-chemical-peel-before-and-after-san-diego.png';
import baAcneHealth from '../assets/acne-skin-health-treatment-before-and-after-san-diego.png';
import baAcneScarring from '../assets/acne-scarring-treatment-before-and-after-san-diego.png';
import hydrafacialInProgress from '../assets/kiamoskin-hydrafacial-treatment-in-progress-san-diego.png';
import kikiPortrait from '../assets/kiki-esthetician-portrait-mission-hills-front-desk-san-diego.jpg';
import kikiTreatment from '../assets/kiki-esthetician-vacuum-treatment-mission-hills-san-diego.jpg';

/**
 * Case records for the before/after gallery.
 *
 * Three display modes, by design, because real studio work produces all three:
 *
 * - `composite`  — a single photograph with both states in-frame, labelled
 *                  by the studio. The preferred format.
 * - `paired`     — two separate photographs taken months apart in the same
 *                  room, revealed by the BeforeAfter slider.
 * - `after-only` — a single result photograph, used when the change is
 *                  too subtle for a paired side-by-side to read.
 *
 * No synthetic cases. No stock imagery. Every record names the treatment,
 * the concern, the number of sessions, the elapsed time, and the
 * fitzpatrick band only.
 */
export type ConcernFilter =
  | 'pigmentation'
  | 'melasma'
  | 'barrier'
  | 'scalp'
  | 'acne';

export type FitzpatrickBand = 'I-II' | 'III-IV' | 'V-VI';

export interface GalleryCase {
  id: string;
  /** Image alt text and content URL slug fragment — used in schema URLs. */
  slug: string;
  eyebrow: string;
  title: string;
  narrative: string;
  caseNote?: string;
  concern: ConcernFilter;
  /** The canonical schema.org reference for the condition being treated. */
  conditionSchemaId: string;
  kind: 'paired' | 'composite' | 'after-only';
  treatmentSlug: string;
  treatmentName: string;
  fitzpatrick: FitzpatrickBand;
  sessions: number;
  timeframe: string;
  composite?: ImageMetadata;
  compositeAlt?: string;
  before?: ImageMetadata;
  after: ImageMetadata;
  beforeAlt?: string;
  afterAlt: string;
}

/**
 * Medical condition taxonomy — referenced from each case's
 * `conditionSchemaId` so the `Case` → `MedicalCondition` link is real
 * schema, not just a string.
 */
export const galleryConditions: ReadonlyArray<{
  id: string;
  name: string;
  alternateName?: string[];
  description: string;
  associatedAnatomy: string;
  riskFactor?: string[];
  epidemiology?: string;
}> = [
  {
    id: 'melasma',
    name: 'Melasma',
    alternateName: ['chloasma', 'pregnancy mask'],
    description:
      'A chronic, symmetrical hyperpigmentation driven by UV exposure, hormonal triggers, and heat. Most common on the cheeks, forehead, upper lip, and chin. Treated as a series, not a single visit.',
    associatedAnatomy: 'Face — cheeks, forehead, upper lip, chin',
    riskFactor: [
      'UV exposure through marine layer',
      'Hormonal change (pregnancy, birth control, perimenopause)',
      'Visible light from indoor and outdoor sources',
      'Heat exposure — including infrared and cooking',
    ],
    epidemiology:
      'Most common in Fitzpatrick III–V and in melanated skin across sun-exposed climates.',
  },
  {
    id: 'post-inflammatory-hyperpigmentation',
    name: 'Post-inflammatory hyperpigmentation',
    alternateName: ['PIH', 'post-acne marks', 'post-inflammatory marks'],
    description:
      'Dark marks left after an inflammatory event — acne, eczema, shaving, ingrown hair, or an over-aggressive peel. The skin produced pigment in response to the trigger; the mark is what is left over.',
    associatedAnatomy: 'Face, neck, back, chest — wherever the trigger occurred',
    riskFactor: [
      'Active acne and inflamed lesions',
      'Over-exfoliation with active products',
      'Shaving and ingrown hair',
      'Eczema and inflammatory rashes',
    ],
    epidemiology:
      'Most prevalent in Fitzpatrick IV–VI. People with acne and melanin-rich skin see PIH at rates as high as 65%.',
  },
  {
    id: 'compromised-skin-barrier',
    name: 'Compromised skin barrier',
    alternateName: ['barrier damage', 'overuse reaction', 'sensitised skin'],
    description:
      'The acid mantle and lipid layer weakened by over-cleansing, layered actives, or peeling agents used beyond what the barrier can sustain. Skin stings, flushes, holds product, and recovers slowly.',
    associatedAnatomy: 'Face and any area of frequent product contact',
    riskFactor: [
      'Layering multiple actives at once',
      'Cleansing with products that strip the lipid layer',
      'Daily use of medium or deep peels without supervision',
      'Hot, dry environments — including Santa Ana winds',
    ],
  },
  {
    id: 'scalp-buildup',
    name: 'Hard water mineral buildup on the scalp',
    alternateName: ['scalp flaking', 'scalp congestion', 'product buildup'],
    description:
      'Mineral film from San Diego hard water (averaging 280–320 ppm calcium and magnesium) and styling product accumulates on the scalp the way it accumulates on a shower door. Standard shampoo removes oil, not mineral deposit.',
    associatedAnatomy: 'Scalp',
    riskFactor: [
      'Municipal water hardness above 180 ppm',
      'Daily leave-on styling products',
      'Hard plastic water lines in older buildings',
    ],
  },
  {
    id: 'post-acne-scarring',
    name: 'Acne scarring',
    alternateName: ['atrophic scarring', 'ice-pick scars', 'boxcar scars', 'rolling scars'],
    description:
      'Permanent textural changes left after acne resolves. Treated by stimulating collagen production through controlled injury — microneedling, laser, or chemical reconstruction — over a series of months.',
    associatedAnatomy: 'Face — cheeks, temples, jawline; back and chest when applicable',
    riskFactor: [
      'Severity and duration of original acne',
      'Delay in starting corrective treatment',
      'Genetic predisposition to scarring',
    ],
  },
];

export const galleryCases: GalleryCase[] = [
  {
    id: 'melasma-chemical-peel-composite',
    slug: 'melasma-lira-chemical-peel-composite',
    eyebrow: 'Melasma · chemical peel',
    title: 'Melasma treated across a Lira Chemical Peel series.',
    narrative:
      'Melasma is the most-searched skin concern at this studio, and the case is also the clearest demonstration of how a Lira series works in practice. Depth of pigment, skin tone, sun exposure, and home routine all decided the work — the result is one possible outcome, not a guaranteed one.',
    caseNote:
      'The series ran over four months with a daily tinted SPF carrying iron oxide between visits. The home routine did as much of the work as the in-room treatment — that is the case almost every time.',
    concern: 'melasma',
    conditionSchemaId: 'melasma',
    kind: 'composite',
    treatmentSlug: 'lira-peels',
    treatmentName: 'Lira Chemical Peels',
    fitzpatrick: 'III-IV',
    sessions: 4,
    timeframe: 'Over 4 months',
    composite: baMelasmaChemical,
    compositeAlt:
      'Before and after melasma treatment at KIAMO Skin in Mission Hills - four Lira Chemical Peel sessions across four months.',
    after: baMelasmaChemical,
    afterAlt:
      'Before and after melasma treatment at KIAMO Skin in Mission Hills - four Lira Chemical Peel sessions across four months.',
  },
  {
    id: 'pih-lira-series-paired',
    slug: 'pih-lira-chemical-peel-paired',
    eyebrow: 'Post-inflammatory hyperpigmentation',
    title: 'Four Lira Chemical Peels across five months on melanin-rich skin.',
    narrative:
      'Dark marks from acne and shaving that had been raised over years. The plan escalated the peel strength only as the barrier was ready. Daily tinted SPF with iron oxide between visits did as much work as the in-room treatment.',
    caseNote:
      'The home-care routine carried the result between visits. Post-peal SPF and a pigment-inhibiting serum were not optional — they were the protocol.',
    concern: 'pigmentation',
    conditionSchemaId: 'post-inflammatory-hyperpigmentation',
    kind: 'paired',
    treatmentSlug: 'lira-peels',
    treatmentName: 'Lira Chemical Peels',
    fitzpatrick: 'V-VI',
    sessions: 4,
    timeframe: 'Over 5 months',
    before: hyperpigmentationBefore,
    after: hyperpigmentationAfter,
    beforeAlt:
      'Before Lira Chemical Peel treatment at KIAMO Skin in Mission Hills - post-inflammatory hyperpigmentation on melanin-rich skin.',
    afterAlt:
      'After four Lira Chemical Peel sessions at KIAMO Skin in Mission Hills - dark marks from acne and shaving cleared over a five-month series.',
  },
  {
    id: 'back-congestion-procell-composite',
    slug: 'back-congestion-pigmentation-procell-composite',
    eyebrow: 'Pigmentation · back',
    title: 'Back congestion and pigmentation after Procell Microchanneling.',
    narrative:
      'Back congestion and post-inflammatory pigmentation, often left untreated through a long San Diego summer. Procell works mechanically with no RF heat, which matters on the body where melanin responds to thermal trauma with more pigmentation of its own.',
    caseNote:
      'Three sessions, four to six weeks apart. LED light therapy after each pass. Numbing cream applied before.',
    concern: 'pigmentation',
    conditionSchemaId: 'post-inflammatory-hyperpigmentation',
    kind: 'composite',
    treatmentSlug: 'procell-microchanneling',
    treatmentName: 'Procell Microchanneling',
    fitzpatrick: 'III-IV',
    sessions: 3,
    timeframe: 'Over 4 months',
    composite: baBackCongestion,
    compositeAlt:
      'Before and after Procell Microchanneling at KIAMO Skin in Mission Hills - back congestion and pigmentation cleared across three sessions.',
    after: baBackCongestion,
    afterAlt:
      'Before and after Procell Microchanneling at KIAMO Skin in Mission Hills - back congestion and pigmentation cleared across three sessions.',
  },
  {
    id: 'acne-scarring-composite',
    slug: 'acne-scarring-procell-composite',
    eyebrow: 'Acne scarring',
    title: 'Acne scarring softened across a Procell series.',
    narrative:
      'Atrophic scarring, the kind that lingers long after the breakouts have closed. Procell creates mechanical channels without RF heat, then the studio applies stem cytokine growth factor serums into the open channels. Result over three sessions, in the same room, on the same client.',
    caseNote:
      'Acne scars often need six months of patient work. Three sessions is the floor, not the typical course.',
    concern: 'acne',
    conditionSchemaId: 'post-acne-scarring',
    kind: 'composite',
    treatmentSlug: 'procell-microchanneling',
    treatmentName: 'Procell Microchanneling',
    fitzpatrick: 'V-VI',
    sessions: 3,
    timeframe: 'Over 4 months',
    composite: baAcneScarring,
    compositeAlt:
      'Before and after Procell Microchanneling at KIAMO Skin in Mission Hills - acne scarring softened over three sessions.',
    after: baAcneScarring,
    afterAlt:
      'Before and after Procell Microchanneling at KIAMO Skin in Mission Hills - acne scarring softened over three sessions.',
  },
  {
    id: 'acne-skin-health-composite',
    slug: 'acne-skin-health-composite',
    eyebrow: 'Acne · skin health',
    title: 'Acne and skin health after corrective treatment.',
    narrative:
      'Active cystic acne across the chin, jawline, and cheeks. The case cleared across a course that combined extractions, enzyme therapy to rebuild the compromised barrier that was allowing the inflammation to keep returning, and a paced home-care routine.',
    caseNote:
      'For severe or persistent acne, the studio works alongside a dermatologist rather than replacing one. Severe acne is a medical condition; estheticians and dermatologists treat it differently, and both roles matter.',
    concern: 'acne',
    conditionSchemaId: 'compromised-skin-barrier',
    kind: 'composite',
    treatmentSlug: 'acne',
    treatmentName: 'Acne Treatment',
    fitzpatrick: 'III-IV',
    sessions: 6,
    timeframe: 'Over 5 months',
    composite: baAcneHealth,
    compositeAlt:
      'Before and after acne treatment at KIAMO Skin in Mission Hills - active cystic acne cleared over six corrective sessions.',
    after: baAcneHealth,
    afterAlt:
      'Before and after acne treatment at KIAMO Skin in Mission Hills - active cystic acne cleared over six corrective sessions.',
  },
  {
    id: 'barrier-damage-composite',
    slug: 'barrier-damage-dmk-enzyme-composite',
    eyebrow: 'Barrier repair · active overuse',
    title: 'Barrier repair after active product overuse.',
    narrative:
      'A barrier damaged by aggressive at-home products — over-exfoliation, multiple actives layered, the cumulative pattern the studio sees most often. DMK Enzyme Therapy rebuilt the barrier before any corrective work began, with the home routine pared back to a cleanser and SPF for the duration of the case.',
    caseNote:
      'Treating pigmentation on a damaged barrier is how marks get worse, not better. Barrier work is the foundation, not the bonus.',
    concern: 'barrier',
    conditionSchemaId: 'compromised-skin-barrier',
    kind: 'composite',
    treatmentSlug: 'dmk-enzyme-therapy',
    treatmentName: 'DMK Enzyme Therapy',
    fitzpatrick: 'I-II',
    sessions: 4,
    timeframe: 'Over 3 months',
    composite: baBarrierDamage,
    compositeAlt:
      'Before and after DMK Enzyme Therapy at KIAMO Skin in Mission Hills - barrier repair after active product overuse over four sessions.',
    after: baBarrierDamage,
    afterAlt:
      'Before and after DMK Enzyme Therapy at KIAMO Skin in Mission Hills - barrier repair after active product overuse over four sessions.',
  },
  {
    id: 'keravive-scalp-paired',
    slug: 'keravive-scalp-buildup-paired',
    eyebrow: 'Scalp · buildup & flaking',
    title: 'Keravive scalp therapy across three sessions.',
    narrative:
      'San Diego hard water — averaging 280–320 ppm calcium and magnesium — leaves a mineral film on the scalp that ordinary shampoo cannot remove. Keravive vortex extraction lifted it, then the peptide complex nourished the skin underneath. Three sessions three months apart, take-home peptide spray between each one.',
    caseNote:
      'A standard clarifying shampoo removes oil, not mineral deposit. Keravive extracts the mineral film at 30–70 mmHg controlled suction and feeds the peptide complex into the scalp in the same visit.',
    concern: 'scalp',
    conditionSchemaId: 'scalp-buildup',
    kind: 'paired',
    treatmentSlug: 'keravive-scalp',
    treatmentName: 'Keravive Scalp Therapy',
    fitzpatrick: 'I-II',
    sessions: 3,
    timeframe: 'Over 4 months',
    before: keraviveBefore,
    after: keraviveAfter,
    beforeAlt:
      'Before Keravive scalp therapy at KIAMO Skin in Mission Hills - hard water mineral buildup and flaking.',
    afterAlt:
      'After three Keravive scalp therapy sessions at KIAMO Skin in Mission Hills - cleaner scalp with reduced flaking.',
  },
  {
    id: 'keravive-hair-support-after',
    slug: 'keravive-hair-support-after',
    eyebrow: 'Hair-thinning support',
    title: 'Keravive series supporting hair-thinning concerns.',
    narrative:
      'Keravive was originally developed as a scalp-health protocol with hair-thinning support as a secondary outcome. The peptide complex nourishes sebaceous glands and supports the environment for healthy growth. The photo here is taken at the end of a six-month protocol with the home-care routine.',
    caseNote:
      'After-only image: the change is too subtle for a side-by-side comparison to read. The home-care protocol is the difference.',
    concern: 'scalp',
    conditionSchemaId: 'scalp-buildup',
    kind: 'after-only',
    treatmentSlug: 'keravive-scalp',
    treatmentName: 'Keravive Scalp Therapy',
    fitzpatrick: 'I-II',
    sessions: 3,
    timeframe: 'Over 6 months',
    after: keraviveHair,
    afterAlt:
      'Keravive scalp therapy at KIAMO Skin in Mission Hills - hair-thinning support at the end of a six-month protocol.',
  },
];

export const galleryFilters: ReadonlyArray<{
  id: 'all' | ConcernFilter;
  label: string;
}> = [
  { id: 'all', label: 'All cases' },
  { id: 'pigmentation', label: 'Pigmentation' },
  { id: 'melasma', label: 'Melasma' },
  { id: 'acne', label: 'Acne' },
  { id: 'barrier', label: 'Barrier' },
  { id: 'scalp', label: 'Scalp' },
];

export const gallerySupport = {
  kikiPortrait: {
    src: kikiPortrait,
    alt: 'Kiki, the licensed esthetician behind KIAMO Skin, photographed at the front desk in the Mission Hills studio.',
  },
  kikiTreatment: {
    src: kikiTreatment,
    alt: 'Kiki performing a HydraFacial Keravive vortex extraction on a client at KIAMO Skin in Mission Hills.',
  },
  hydrafacialInProgress: {
    src: hydrafacialInProgress,
    alt: 'HydraFacial treatment in progress at KIAMO Skin in Mission Hills - licensed esthetician performing HydraFacial on a client.',
  },
};

export const galleryFaqs = [
  {
    id: 'gallery-faq-consent',
    question: 'Did the clients in these photos consent to being shown?',
    answer:
      'Yes. In writing, on a release form that names where the photos appear and what they will be used for. Consent is revocable — if a client asks for a photo to come down, it comes down. None of these are stock photographs, and none are retouched.',
  },
  {
    id: 'gallery-faq-retouching',
    question: 'Have these photos been edited, filtered, or shot under special lighting?',
    answer:
      'No. Every photo on this page was taken in the same studio room under the same overhead LED, then cropped. We do not soften, brighten, or airbrush skin. We do not stage the lighting. Where the room lighting reads a little warmer in the after photo than in the before — which happens when sessions are months apart — that difference is on the photo, not edited out.',
  },
  {
    id: 'gallery-faq-fairness',
    question: 'Why is each case different — same studio, same concern, different number of sessions?',
    answer:
      'Because the skin on the day decides the work. One client reaches the result in three sessions, another needs five. The series plan is written at the consultation and revised as the skin responds. Showing the actual number of sessions per case is more honest than flattening them to "average".',
  },
  {
    id: 'gallery-faq-results-vary',
    question: 'If I do the same treatment plan, will I look like the after photo?',
    answer:
      'Not necessarily. The skin you start with decides what is possible — depth of pigment, how long it has been there, what triggered it, barrier condition, and how disciplined the home routine is between visits. The after photo shows what was possible for that client in that time. Your plan will be written from your skin on the day, and the result will be yours.',
  },
  {
    id: 'gallery-faq-no-paired',
    question: 'Why are some concerns missing a paired before and after photo?',
    answer:
      'A paired photograph only works when the change is large enough to read at the same scale and the same lighting. Some concerns — texture refinement at series end, hair-thinning support — produce changes too subtle for that to work. For those we publish only the after, with a case note explaining why. We would rather publish one honest after-photo than a paired comparison nobody can read.',
  },
];

/**
 * Verified price catalog used in `MedicalProcedure.offers` blocks so
 * every procedure schema carries a current, single-source price.
 */
export const galleryTreatmentOffers = {
  hydrafacial: verifiedPrices.hydrafacial,
  dermaplane: verifiedPrices['dermaplane-facial'],
  'dmk-level-1': verifiedPrices['dmk-enzyme-1'],
  'lira-light': verifiedPrices['lira-light-peel'],
  'lira-advanced': verifiedPrices['lira-advanced-peel'],
  keravive: verifiedPrices['keravive-scalp'],
  keraviveSeries: verifiedPrices['keravive-scalp-series'],
  procell: verifiedPrices.procell,
  procellSeries: verifiedPrices['procell-series'],
  firstTimeClient: verifiedPrices['first-time-client'],
} as const;
