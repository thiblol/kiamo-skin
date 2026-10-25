/**
 * What a correction actually costs in time.
 *
 * Every row here is derived from a case already published, with written consent,
 * on the gallery page. Nothing is invented: the session count and the timeframe
 * are the studio's own record for that case, and the outcome line describes what
 * the client saw in the consented photograph.
 *
 * Why this exists:
 *   The treatment menu lists deliverables — a treatment name, a modality, a
 *   price. A reader cannot tell from that whether a result is a two-visit
 *   change or a two-year commitment. That uncertainty is the thing that stops
 *   people booking, and it was being answered only in collapsed FAQ answers.
 *   This is the "results you can expect" half of the menu, sitting next to it.
 *
 * The guard suite forbids unverified prices and rating values, so no figure
 * appears here that is not in config/business.ts. These rows carry session
 * counts and timeframes only — both are the studio's own records, not claims.
 */

export interface Outcome {
  /** The concern, in the visitor's words rather than the clinical term. */
  concern: string;
  /** What changed, stated as the client would recognise it. */
  outcome: string;
  /** The treatment that produced it. */
  treatment: string;
  /** Where the full consented case lives. */
  href: string;
  /** Sessions completed in the published case. */
  sessions: number;
  /** Elapsed time over those sessions, in the studio's own words. */
  timeframe: string;
}

export const outcomes: Outcome[] = [
  {
    concern: 'Melasma',
    outcome:
      'Pigment across the cheeks, forehead and upper lip, softened by a peel series with the strength raised only as the barrier allowed.',
    treatment: 'Lira Chemical Peels',
    href: '/gallery/#case-melasma-lira-chemical-peel-composite',
    sessions: 4,
    timeframe: 'Over 4 months',
  },
  {
    concern: 'Post-inflammatory hyperpigmentation',
    outcome:
      'Dark marks left by acne and shaving, cleared across a series on melanin-rich skin with daily tinted SPF between visits.',
    treatment: 'Lira Chemical Peels',
    href: '/gallery/#case-pih-lira-chemical-peel-paired',
    sessions: 4,
    timeframe: 'Over 5 months',
  },
  {
    concern: 'Acne scarring',
    outcome:
      'Atrophic softening of the kind that lingers long after the breakouts close — the deepest change in the set, and the slowest.',
    treatment: 'Procell Microchanneling',
    href: '/gallery/#case-acne-scarring-procell-composite',
    sessions: 3,
    timeframe: 'Over 4 months',
  },
  {
    concern: 'Scalp flaking and buildup',
    outcome:
      'Mineral film lifted from the scalp and flaking reduced, where an ordinary clarifying shampoo removes oil and not deposit.',
    treatment: 'Keravive Scalp Therapy',
    href: '/gallery/#case-keravive-scalp-buildup-paired',
    sessions: 3,
    timeframe: 'Over 4 months',
  },
];
