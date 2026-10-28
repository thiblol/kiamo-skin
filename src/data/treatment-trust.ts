/**
 * Per-treatment trust data.
 *
 * Why a separate file and not fields on `treatments.ts`:
 *   `treatments.ts` owns the treatment itself — the headline, the opener, the
 *   steps, the pricing. What lives here is the PROOF around the treatment:
 *   the quick answer an AI engine lifts, the three claims that sit under the
 *   hero, and the risk reversal that sits next to the booking form.
 *
 *   Splitting them keeps one file about the treatment and one about the
 *   evidence for it. A reader who changes a treatment's headline should not
 *   have to hunt through proof claims to find the one that belongs to it.
 *
 * The rules every entry follows:
 *   - No ratings, no review counts, no star graphics. The studio verified a
 *     GBP rating and it lives on the homepage only; the guard suite blocks
 *     it everywhere else.
 *   - No urgency or immediacy language. The site brief forbids "Same-day"
 *     and any implied immediacy, so no claim here mentions speed.
 *   - No invented prices. Only the rates in `config/business.ts`, or the
 *     exact string "Pricing at consultation."
 *   - No pronouns for Kiki. "Kiki" or "the studio" only.
 *   - No invented credentials or awards. Every one of these is a fact the
 *     studio already publishes.
 */
import { business } from '../config/business';
import { PRICE_ON_CONSULTATION } from '../config/business';
import { testimonials } from './testimonials';
import type { Testimonial } from './testimonials';

export interface GuaranteeCommitment {
  title: string;
  body: string;
}

export interface TreatmentTrust {
  /**
   * The 2-3 sentence entity-dense answer an AI engine lifts verbatim.
   * Names the treatment, the location, the studio, and one specific fact.
   * Kept under 150 words so it is extractable as a standalone answer.
   */
  quickAnswer: string;
  /**
   * The three claims under the hero. Specific and checkable, never
   * categories.
   */
  claims: Array<{ label: string; detail?: string }>;
  /**
   * Risk reversal, placed next to the booking form. These answer the
   * "what if it doesn't work" question that stops a first-time visitor.
   *
   * A satisfaction guarantee is deliberately NOT claimed. No such guarantee
   * has been offered by the business, and inventing one would be a
   * fabrication. What is offered is what the studio actually publishes:
   * the price before the appointment, the assessment before the treatment,
   * and the cancellation window.
   */
  guarantee: {
    heading: string;
    commitments: GuaranteeCommitment[];
  };
  /**
   * Which published case to point at, if this treatment has one. Null when
   * it does not — better no outcome than a mismatched one.
   */
  outcomeConcern: string | null;
}

/**
 * The claims shared by every treatment, because they describe the studio
 * rather than any one treatment. Writing them per page would produce ten
 * slightly different versions of the same three claims.
 */
const studioClaims: TreatmentTrust['claims'] = [
  {
    label: 'Licensed esthetician — California Board of Barbering & Cosmetology',
    detail: `${business.ownerName} performs every treatment, in a one-to-one private studio in ${business.address.neighborhood}.`,
  },
  {
    label: `${business.experience} of corrective skin work`,
    detail: 'Advanced training in HydraFacial Syndeo, Procell microchanneling, DMK enzyme therapy, and LIRA Clinical peels.',
  },
  {
    label: 'Prices published before you book',
    detail: 'Nothing is quoted at the door, and the first visit includes the consultation that decides the plan.',
  },
];

/**
 * The risk reversal shared by every treatment, for the same reason.
 * `priceLine` is the one that varies — some treatments publish a rate, some
 * are quoted at consultation.
 */
function guaranteeWith(priceLine: string): TreatmentTrust['guarantee'] {
  return {
    heading: 'Before you commit',
    commitments: [
      {
        title: 'The price comes first',
        body: priceLine,
      },
      {
        title: 'Nothing is treated before it is assessed',
        body: 'A full consultation and skin analysis come first, and the treatment is chosen around what your skin is doing that day.',
      },
      {
        title: 'A stated cancellation window',
        body: business.cancellation,
      },
    ],
  };
}

export const treatmentTrust: Record<string, TreatmentTrust> = {
  hydrafacial: {
    quickAnswer:
      'A HydraFacial at KIAMO Skin in Mission Hills, San Diego is a medical-grade facial performed on a HydraFacial Syndeo device by Kiki, a California licensed esthetician with 7+ years of experience. It combines cleansing, exfoliation, extraction, and hydration with a customized booster, followed by LED light therapy — $259 per session, or $249 for a first-time client including the consultation that sets the plan.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'A HydraFacial is $259, and the first-time client treatment is $249 including the consultation that decides the plan. Nothing is quoted at the door.'
    ),
    outcomeConcern: null,
  },
  'keravive-scalp': {
    quickAnswer:
      'Keravive scalp therapy at KIAMO Skin in Mission Hills, San Diego treats the scalp as skin — cleansing, extracting, and nourishing a scalp that has flaking, buildup, or thinning. Kiki performs every session. $599 per session, or $1,499 for a series of three.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'Keravive scalp therapy is $599 per session, or $1,499 for a series of three. Nothing is quoted at the door.'
    ),
    outcomeConcern: 'Scalp flaking and buildup',
  },
  'dmk-enzyme-therapy': {
    quickAnswer:
      'DMK enzyme therapy at KIAMO Skin in Mission Hills, San Diego works on skin function rather than surface — enzymatic resurfacing that clears congestion and supports barrier recovery, chosen when a peel would be too much for reactive skin. Kiki performs every session. $279 for Level 1; Levels 2 and 3 are pricing at consultation.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'DMK enzyme therapy Level 1 is $279. Levels 2 and 3 are pricing at consultation — the level is set by what your skin is doing, not by what fits a price list.'
    ),
    outcomeConcern: null,
  },
  'procell-microchanneling': {
    quickAnswer:
      'Procell microchanneling at KIAMO Skin in Mission Hills, San Diego treats acne scarring and textural change with controlled microchannels and a growth factor serum, working mechanically with no heat or light — which is why it suits melanin-rich skin, where heat-based resurfacing can trigger more pigment. Kiki performs every session. $475 per session, or $1,199 for a series of three.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'Procell microchanneling is $475 per session, or $1,199 for a series of three — a series costs less than three single sessions. Nothing is quoted at the door.'
    ),
    outcomeConcern: 'Acne scarring',
  },
  'lira-peels': {
    quickAnswer:
      'LIRA chemical peels at KIAMO Skin in Mission Hills, San Diego are professional-grade peels selected for the concern and the skin tone, with strength escalated across a series rather than in one aggressive visit. Kiki performs every session. $199 for a Gentle Renewal peel, $299 for an Advanced peel.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'LIRA chemical peels are $199 for a Gentle Renewal peel and $299 for an Advanced peel. Nothing is quoted at the door.'
    ),
    outcomeConcern: 'Post-inflammatory hyperpigmentation',
  },
  dermaplaning: {
    quickAnswer:
      'Dermaplaning at KIAMO Skin in Mission Hills, San Diego is a physical exfoliation that removes surface buildup and vellus hair with a sterile blade, creating a smoother surface that lets everything after it work better. Kiki performs every session. $199 as a dermaplane facial.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'The Dermaplane Facial is $199. Nothing is quoted at the door.'
    ),
    outcomeConcern: null,
  },
  'corrective-skin-treatments': {
    quickAnswer:
      'Corrective skin treatments at KIAMO Skin in Mission Hills, San Diego start with the barrier rather than the treatment. Kiki is a California licensed esthetician with 7+ years of experience, and the plan draws on HydraFacial, DMK enzyme therapy, Procell microchanneling, LIRA chemical peels, and dermaplaning — chosen by what your skin is doing, not by what is trending.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'Every treatment price is published on the menu. Nothing is quoted at the door, and the first visit includes the consultation that decides the plan.'
    ),
    outcomeConcern: null,
  },
  acne: {
    quickAnswer:
      'Acne treatment at KIAMO Skin in Mission Hills, San Diego is corrective rather than extraction-only: HydraFacial clears congestion, LIRA chemical peels address the marks acne leaves behind, and Procell microchanneling softens scarring. Kiki is a California licensed esthetician with 7+ years of experience, and treats all skin types from Fitzpatrick I to VI.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'Every treatment price is published on the menu. Nothing is quoted at the door, and the first visit includes the consultation that decides the plan.'
    ),
    outcomeConcern: 'Acne scarring',
  },
  hyperpigmentation: {
    quickAnswer:
      'Post-inflammatory hyperpigmentation treatment at KIAMO Skin in Mission Hills, San Diego targets the dark marks acne, eczema, ingrown hairs, and injury leave behind. Kiki is a California licensed esthetician with 7+ years of experience, and protocols are calibrated for every Fitzpatrick type from I to VI — including melanin-rich skin, where an incorrect peel causes more damage than it repairs.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'Every treatment price is published on the menu. Nothing is quoted at the door, and the first visit includes the consultation that decides the plan.'
    ),
    outcomeConcern: 'Post-inflammatory hyperpigmentation',
  },
  melasma: {
    quickAnswer:
      'Melasma treatment at KIAMO Skin in Mission Hills, San Diego is a paced series of gentle LIRA chemical peels, with Procell microchanneling added where texture is part of the picture and HydraFacial with a brightening booster used for maintenance between corrective sessions. Kiki is a California licensed esthetician with 7+ years of experience. Most clients see change after 3-4 sessions, 6-8 spaced 4-6 weeks apart.',
    claims: studioClaims,
    guarantee: guaranteeWith(
      'LIRA chemical peels run $199 to $299, Procell microchanneling is $475 per session or $1,199 for a series of three, and the monthly facial membership is $199. Nothing is quoted at the door.'
    ),
    outcomeConcern: 'Melasma',
  },
};

export { PRICE_ON_CONSULTATION };

/**
 * The one client quote that sits in the trust band, directly under the hero.
 *
 * The conversion rule is that the best proof appears high, and a reader who
 * scrolls from the headline to the booking form should never do it without
 * meeting a real client. The three claims in the band are the studio
 * asserting things about itself; the quote is somebody else saying it. The
 * band needs both, and the quote is the part that was missing.
 *
 * It is a verified review from the Yelp listing or the Google Business
 * Profile, edited only to remove pronouns. A real first name, a real
 * platform, and no rating attached — the studio's verified rating lives on
 * the homepage only.
 */
export const studioProof: Testimonial =
  testimonials.find((t) => t.attribution === 'Arica L.') ?? testimonials[0];
