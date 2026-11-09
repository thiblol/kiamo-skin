/**
 * Third-party facts — every figure on the site that is NOT KIAMO's own.
 *
 * WHY THIS FILE EXISTS
 *
 * The "best facial spa in San Diego" answer that AI models give is built from
 * two things: a list of studios, and the facts attached to each one. Every
 * studio that gets cited for that query has those facts in machine-readable
 * form somewhere a crawler can read them. This file is KIAMO's copy of that
 * structure.
 *
 * It also has to be honest. A competitor's rating and review count change
 * every week, and a competitor's prices change with their promotions. So
 * every figure here carries:
 *
 *   - `source` / `ratingSource` — where the figure was read, so it can be
 *     re-checked. Prices come from the studio's own menu; ratings come from
 *     the studio's Google Business Profile. They are different places, so
 *     they are named separately.
 *   - `checkedOn` — the ISO date it was read. The guard suite fails the
 *     build once a figure passes its window, which is what stops a stale
 *     number from shipping as if it were current.
 *   - the fact itself, as the exact string that may be printed
 *
 * NOTHING HERE IS ESTIMATED. A figure that could not be read at source is
 * `null`, and the page renders "not published" rather than guessing. Guessing
 * is worse than silence here: a wrong price on a page that claims to be
 * verified is the kind of error a competitor can point at.
 *
 * Two tables are built from this file:
 *
 *   - /facial/best-facial-san-diego/ — the whole market, relaxation spas
 *     and corrective studios alike. `studios`.
 *   - /facial/facial-for-melanin-rich-skin-san-diego/ — the segment AI
 *     actually names when asked about melanin-rich skin, which is a
 *     different set of studios. `darkSkinStudios`.
 */

/**
 * One entry per thing the site attributes a fact to.
 *
 * `key` is what the page names in `data-fact-source`, and it is what the
 * guard suite looks the figure up by. The fact arrays are the EXACT strings
 * that may be printed for that source — nothing else is permitted, so a
 * price that was never read at source cannot reach a reader.
 */
export interface ThirdPartyFact {
  /** Lookup key. Matches the `data-fact-source` attribute on the page. */
  key: string;
  /** What this source is, for the reader. */
  label: string;
  /** Human name of the source, for attribution. */
  sourceName: string;
  /** URL the price was read from. */
  source: string;
  /** Where the rating and review count came from. */
  ratingSource: string;
  /** ISO date the figures were read. */
  checkedOn: string;
  /** Price strings that may be printed for this source, e.g. '$179'. */
  prices: string[];
  /** Rating strings that may be printed, e.g. '4.9'. */
  ratings: string[];
  /** Review-count strings that may be printed, e.g. '698'. */
  counts: string[];
  /** A range as the source prints it, e.g. '$75–$300'. Market rates only. */
  range?: string;
  /** What the range measures, e.g. 'per facial'. Market rates only. */
  unit?: string;
  /** The median the source reports. Market rates only. */
  median?: string;
  /** The national median the source reports. Market rates only. */
  nationalMedian?: string;
}

/**
 * How long a third-party figure may go unrefreshed before the build fails.
 *
 * A competitor's price and review count both move. Kiwi Spa was running a
 * 40%-off new-client rate when the table was written, and that rate is not
 * there forever. Sixty days is long enough that the table is not a weekly
 * chore and short enough that a figure on the page is never more than one
 * review cycle out of date.
 */
export const MAX_AGE_DAYS = 60;

/**
 * A studio, as published in one of the comparison tables.
 *
 * The list is not a ranking of who is best. It is the set of studios that
 * come up when a reader asks the question the page is answering. `fitFor`
 * says what each one is actually good at — including saying "not known for
 * corrective work", which is the honest description for a relaxation spa.
 *
 * A studio carries ONE rating and ONE review count, so it stores them
 * singularly. The guard-facing arrays are derived from them below, so there
 * is only ever one place a figure is written down.
 */
export interface Studio {
  /** Lookup key. Matches the `data-fact-source` attribute on the page. */
  key: string;
  /** Display name as the studio writes it. */
  name: string;
  /** San Diego neighborhood the studio operates from. */
  area: string;
  /** The studio's own website. */
  url: string;
  /** Human name of the source, for attribution. */
  sourceName: string;
  /** URL the price was read from. */
  source: string;
  /**
   * Where the rating and review count came from.
   *
   * Separate from `source` because they are read from different places: the
   * price from the studio's own menu, the rating from its Google Business
   * Profile. A row that carries both needs both sources named.
   */
  ratingSource: string;
  /** ISO date the figures were read. */
  checkedOn: string;
  /**
   * Lowest price a first-time client is quoted on their own site, as
   * published. `null` when the studio publishes no price at all — which is
   * most of them, and is the whole point of the comparison.
   */
  firstVisitPrice: string | null;
  /**
   * Every price string that may be printed for this studio.
   *
   * A studio that publishes a new-client rate almost always publishes it
   * against a higher regular rate, and a comparison that quotes only one of
   * the two is misleading in whichever direction it is cut. So the data file
   * carries every figure that may be shown, and the guard suite checks that
   * the page shows only these and shows them exactly.
   */
  publishedPrices: string[];
  /**
   * What the price covers, in the studio's own framing. `null` when there
   * is no price to describe.
   */
  priceNote: string | null;
  /** Google rating as a display string ("4.9", "5.0"). */
  rating: string | null;
  /** Google review count as a display string. */
  reviewCount: string | null;
  /** What this studio is actually good at. */
  fitFor: string;
}

/**
 * The studios in the whole-market comparison on
 * /facial/best-facial-san-diego/.
 *
 * These are the studios AI names when asked for the best facial in San Diego.
 * Relaxation and day spas are in it because they are what the answer
 * actually contains — a page that omitted them would not match the question
 * being asked.
 */
export const studios: Studio[] = [
  {
    key: 'kiwi-spa',
    name: 'Kiwi Spa Organic Facial Innovation',
    area: 'Pacific Beach',
    url: 'https://kiwi-spa.com/',
    sourceName: 'Kiwi Spa Organic Facial Innovation',
    source: 'https://kiwi-spa.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$179',
    publishedPrices: ['$179'],
    priceNote:
      'Published first-visit rate for the 75-minute custom facial. The studio runs a standing new-client discount, so this price moves — it is not the regular rate.',
    rating: '4.9',
    reviewCount: '430',
    fitFor:
      'Long organic facials and a relaxation-first experience. The studio also runs a VIP lounge and a 10-year sale on a 90-minute facial bar.',
  },
  {
    key: 'skyn-alchemy',
    name: 'Skyn Alchemy',
    area: 'North Park',
    url: 'https://skynalchemy.co/',
    sourceName: 'Skyn Alchemy',
    source: 'https://skynalchemy.co/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '5.0',
    reviewCount: '82',
    fitFor:
      'HydraFacial-led skincare with a Black Diamond provider credential, and one of the two studios in San Diego that hold it. Pricing is not published — the menu is on the booking platform.',
  },
  {
    key: 'honest-skin',
    name: 'Honest Skin',
    area: 'Point Loma',
    url: 'https://honestskin.co/',
    sourceName: 'Honest Skin',
    source: 'https://honestskin.co/services',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$135',
    publishedPrices: ['$135', '$275'],
    priceNote:
      'Published price for a 60-minute facial. A second 60-minute service is listed at $275.',
    rating: '5.0',
    reviewCount: '192',
    fitFor:
      'Personalised skin analysis with treatments chosen per client. Two locations — Point Loma and Rancho Bernardo — and a published Essential Facial built on add-ons.',
  },
  {
    key: 'vasseur-skin-clinic',
    name: 'Vasseur Skin Clinic & Spa',
    area: 'Downtown',
    url: 'https://www.vasseurdayspa.com/',
    sourceName: 'Vasseur Skin Clinic & Spa',
    source: 'https://www.vasseurdayspa.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '4.9',
    reviewCount: '197',
    fitFor:
      'Boutique-spa atmosphere with HydraFacial, acne and anti-ageing services. The service menu is on the booking platform rather than the site.',
  },
  {
    key: 'skin-habit',
    name: 'Skin Habit',
    area: 'North Park',
    url: 'https://skinhabit.com/',
    sourceName: 'Skin Habit',
    source: 'https://skinhabit.com/north-park/services/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$175',
    publishedPrices: ['$175'],
    priceNote: 'Published price for a facial at the North Park location.',
    rating: '4.9',
    reviewCount: '395',
    fitFor:
      'Customised facials with microcurrent and anti-ageing options, on a membership model — the studio publishes a monthly rate as well as a per-facial price.',
  },
  {
    key: 'spa-kingston',
    name: 'Spa Kingston',
    area: 'Bankers Hill',
    url: 'https://www.spakingston.com/',
    sourceName: 'Spa Kingston',
    source: 'https://www.spakingston.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '4.8',
    reviewCount: '261',
    fitFor:
      'Full day-spa rather than a facial clinic: aromatherapy, massage and customised facials, with a membership programme.',
  },
  {
    key: 'peel-simply-skin',
    name: 'Peel Simply Skin',
    area: 'North Park',
    url: 'https://peelsimplyskin.com/',
    sourceName: 'Peel Simply Skin',
    source: 'https://peelsimplyskin.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '4.9',
    reviewCount: '115',
    fitFor:
      'Corrective facials, chemical peels and dermaplaning, plus microcurrent and LED. The closest peer to KIAMO in what it does — pricing is not published.',
  },
  {
    key: 'rose-and-honey',
    name: 'Rose + Honey Skincare',
    area: 'Solana Beach',
    url: 'https://www.roseandhoney.com/',
    sourceName: 'Rose + Honey Skincare',
    source: 'https://www.roseandhoney.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '5.0',
    reviewCount: '96',
    fitFor:
      'Corrective skincare with a strong local profile — a Top 10 Skin Care Clinic listing and a SDVoyager feature. Two locations, Solana Beach and Pacific Beach.',
  },
];

/**
 * The studios in the melanin-rich-skin comparison on
 * /facial/facial-for-melanin-rich-skin-san-diego/.
 *
 * This is a DIFFERENT set of studios from the market table above, and that is
 * the point. When a reader asks AI for a facial for dark skin in San Diego,
 * the answer does not come back with Kiwi Spa or Spa Kingston — it comes back
 * with the studios that actually advertise to this audience, and the prices
 * and protocols differ. The tables are deliberately not the same table.
 */
export const darkSkinStudios: Studio[] = [
  {
    key: 'onyeka-tefari',
    name: 'Onyeka Tefari Wellness and Spa',
    area: 'Serra Mesa',
    url: 'https://onyekatefari.com/',
    sourceName: 'Onyeka Tefari Wellness and Spa',
    source: 'https://onyekatefari.com/services/skincare-services/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$135',
    publishedPrices: ['$135', '$145', '$155', '$160', '$165', '$175', '$185'],
    priceNote:
      'Published facial menu. The Vitamin C Brightening Peel is $145 and the Advanced Resurfacing Peel $165. The 90-minute Tefari Ritual is $185.',
    rating: '5.0',
    reviewCount: '67',
    fitFor:
      'A full wellness spa built around facials, lymphatic drainage and massage, with a published facial menu and a Black-owned business. The spa day rather than the corrective appointment.',
  },
  {
    key: 'sculpt-by-rind',
    name: 'Sculpt by Rind',
    area: 'Bankers Hill',
    url: 'https://www.sculptbyrind.com/',
    sourceName: 'Sculpt by Rind',
    source: 'https://www.sculptbyrind.com/organic-skincare-facial-services',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$145',
    publishedPrices: ['$145', '$185'],
    priceNote:
      'Published facial menu. The 60-minute facials are $145 and the 75-minute Evolve facial is $185.',
    rating: '5.0',
    reviewCount: '97',
    fitFor:
      'Facial massage and contouring — buccal, lymphatic and sculpting work on jaw tension. A facial-massage boutique rather than a pigment-correction studio.',
  },
  {
    key: 'formula-skin-lab',
    name: 'The Formula Skin Lab',
    area: 'Mission Valley',
    url: 'https://www.formulaskinlab.com/',
    sourceName: 'The Formula Skin Lab',
    source: 'https://www.formulaskinlab.com/services',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '4.8',
    reviewCount: '47',
    fitFor:
      'Acne and hyperpigmentation correction run as a programme with homecare, from a Black-owned studio that states a focus on melanated skin. Pricing is not published — the menu is on the booking platform.',
  },
  {
    key: 'derma-lab',
    name: 'The Derma Lab: Beauty Lounge',
    area: 'Bay Ho',
    url: 'https://thedermalab.com/',
    sourceName: 'The Derma Lab: Beauty Lounge',
    source: 'https://www.fresha.com/a/the-derma-lab-beauty-lounge-san-diego-4141-jutland-drive-bvmshiyp',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$125',
    publishedPrices: ['$125', '$145', '$150', '$175', '$200'],
    priceNote:
      'Published service menu. The hydrating facial is $125, the acne facial $145 and the enzyme dermaplaning treatment $150.',
    rating: '5.0',
    reviewCount: '23',
    fitFor:
      'Anti-ageing, hyperpigmentation and scarring, with graded chemical peels from $125 to $200. A Black-owned studio in Bay Ho.',
  },
  {
    key: 'mixed-esthetics',
    name: 'Mixed Esthetics',
    area: 'Mission Valley',
    url: 'https://www.mixedesthetics.com/',
    sourceName: 'Mixed Esthetics',
    source: 'https://www.mixedesthetics.com/vajacial/san-diego-ca',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$150',
    publishedPrices: ['$150', '$250'],
    priceNote:
      'Published service menu. The Perfect Derma Peel is $150 for 60 minutes, and the Acne Boot Camp programme is $250.',
    rating: '5.0',
    reviewCount: '178',
    fitFor:
      'A waxing and facial studio from a Black-owned business, with a published peel menu and an acne programme.',
  },
  {
    key: 'monet-esthetics',
    name: 'Monet Esthetics and Skincare',
    area: 'Mission Valley',
    url: 'https://monetesthetics.glossgenius.com/',
    sourceName: 'Monet Esthetics and Skincare',
    source: 'https://monetesthetics.glossgenius.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: null,
    publishedPrices: [],
    priceNote: null,
    rating: '5.0',
    reviewCount: '14',
    fitFor:
      'A small studio with a wide listed service menu — acne facials, glycolic and lactic peels, rosacea facials and lymphatic drainage. Pricing is not published on the site.',
  },
  {
    key: 'sandalwood-skin',
    name: 'Sandalwood Skin',
    area: 'North Park',
    url: 'https://sandalwoodskin.com/',
    sourceName: 'Sandalwood Skin',
    source: 'https://sandalwoodskin.com/',
    ratingSource: 'Google Business Profile',
    checkedOn: '2026-11-09',
    firstVisitPrice: '$99',
    publishedPrices: ['$99'],
    priceNote:
      'Published rate for the routine facial. The studio also publishes a brightening radiance facial and brow and lash services.',
    rating: '5.0',
    reviewCount: '1',
    fitFor:
      'A quiet, appointment-only studio in North Park running fully customised facials with enzyme exfoliation and extractions.',
  },
];

/**
 * The San Diego market rate for a facial, as published by No BS Med Spa
 * Reviews on 26 October 2026.
 *
 * This is the range an AI model already quotes when it answers "how much
 * does a facial cost in San Diego" — it comes from a directory, not from a
 * studio. Attributing it openly, with the date, is what lets KIAMO's own
 * published prices sit next to the market rate as a fact rather than a
 * boast.
 */
export const marketFacialRates: ThirdPartyFact = {
  key: 'market-facial-rates',
  label: 'Published San Diego market rates for facials',
  sourceName: 'No BS Med Spa Reviews',
  source: 'https://www.nobsmedspareviews.com/treatment/facials-in-san-diego',
  ratingSource: 'Google Business Profile',
  checkedOn: '2026-11-09',
  prices: ['$75', '$300', '$150', '$350', '$800', '$250', '$700'],
  ratings: [],
  counts: [],
  range: '$75–$300',
  unit: 'per facial',
};

/**
 * The San Diego facial rate as published by Facial Finders on 20 October
 * 2026, which reports both a typical range and a median.
 *
 * Kept separate from the entry above because the two sources measure
 * different things — this one is a rate collected across salons, that one is
 * a rate across studios — and because a reader who checks one of them
 * should find the figures attributed to the one they checked.
 */
export const marketFacialRatesFinder: ThirdPartyFact = {
  key: 'market-facial-rates-finder',
  label: 'Published San Diego facial rate and median',
  sourceName: 'Facial Finders',
  source: 'https://www.facialfinders.com/blog/best-facials-san-diego/',
  ratingSource: 'Google Business Profile',
  checkedOn: '2026-11-09',
  prices: ['$110', '$225', '$135', '$120'],
  ratings: [],
  counts: [],
  range: '$110–$225',
  unit: 'typical',
  median: '$135',
  nationalMedian: '$120',
};

/**
 * Every third-party source, keyed for lookup.
 *
 * The studios are converted into the same shape as the market-rate entries
 * here, so the guard suite reads one structure regardless of what kind of
 * source it is. The conversion is derived, never written out twice: a studio
 * has one rating and one review count, so its arrays hold one string each.
 */
export const thirdPartyFacts = new Map<string, ThirdPartyFact>([
  ...[...studios, ...darkSkinStudios].map(
    (studio): [string, ThirdPartyFact] => [
      studio.key,
      {
        key: studio.key,
        label: studio.name,
        sourceName: studio.sourceName,
        source: studio.source,
        ratingSource: studio.ratingSource,
        checkedOn: studio.checkedOn,
        prices: studio.publishedPrices,
        ratings: studio.rating ? [studio.rating] : [],
        counts: studio.reviewCount ? [studio.reviewCount] : [],
      },
    ]
  ),
  [marketFacialRates.key, marketFacialRates],
  [marketFacialRatesFinder.key, marketFacialRatesFinder],
]);

/**
 * Every price string the site may print for a third party.
 */
export const thirdPartyPrices = new Set(
  [...thirdPartyFacts.values()].flatMap((entry) => entry.prices)
);

/**
 * Every rating and review-count string the site may print for a third party.
 */
export const thirdPartyRatings = new Set(
  [...thirdPartyFacts.values()].flatMap((entry) => [...entry.ratings, ...entry.counts])
);
