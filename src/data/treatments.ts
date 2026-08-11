import type { ImageMetadata } from 'astro';
import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';
import hydrafacial from '../assets/treatment-hydrafacial.jpg';
import scalp from '../assets/treatment-scalp.jpg';
import enzyme from '../assets/treatment-enzyme.jpg';
import acne from '../assets/concern-acne.jpg';
import pigmentation from '../assets/concern-pigmentation.jpg';
// No dedicated dermaplaning photograph exists yet. The barrier image is the
// closest honest match — a clear, even skin surface. Swap when one is shot.
import dermaplane from '../assets/concern-barrier.jpg';

export interface Treatment {
  slug: string;
  name: string;
  /** <title> and H1 differ: the H1 is a claim, the title is a search string. */
  title: string;
  description: string;
  headline: string;
  /**
   * Query-restatement opener, rendered above `intro`. Answers the search the
   * visitor just typed, in their words, before the page says anything else.
   * Each one carries a fact only this page can carry — never interchangeable.
   */
  opener: string;
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  goodFor: string[];
  steps: { title: string; body: string }[];
  pricing: { label: string; price: string; description?: string }[];
  /** Honest caveats. Rendered as a closing note, never omitted where present. */
  note?: string;
  /**
   * One sentence linking to /membership, rendered under the note. Set only on
   * treatments whose own copy already argues that results are cumulative —
   * a link on every page would be sitewide boilerplate, which is the thing hub
   * anchors exist to avoid.
   *
   * `membershipAnchor` is the link label. Each one differs: three pages
   * carrying the identical anchor is a footprint, and the anchor should
   * describe what the reader gets from *this* page's angle.
   */
  membershipNote?: string;
  membershipAnchor?: string;
  /**
   * One sentence linking to /melanin-rich-skin, rendered under the note. Set only
   * where the specialism genuinely bears on the treatment — a link on every page
   * would be sitewide boilerplate, which is the thing hub anchors exist to avoid.
   */
  melaninNote?: string;
  /**
   * Optional link to a journal article that explains the concern behind this
   * treatment. Set only where the article genuinely answers a question the
   * treatment page raises but does not have room to settle.
   */
  guide?: { label: string; href: string; lead: string };
  /** schema.org Service fields. Not rendered — structured data only. */
  serviceType: string;
  category: string;
  alternateName?: string;
  /** Area pages this treatment links to. Drives the treatment→area link graph. */
  areas: string[];
}

export const treatments: Treatment[] = [
  {
    slug: 'hydrafacial',
    name: 'HydraFacial',
    serviceType: 'HydraFacial',
    category: 'Facial treatment',
    areas: ['la-jolla', 'pacific-beach', 'del-mar', 'mission-hills', 'north-park', 'chula-vista'],
    title: 'HydraFacial in San Diego | KIAMO Skin',
    description:
      'HydraFacial in Mission Hills, San Diego. Cleanse, extract and hydrate, with the booster and LED therapy selected for your skin. From $249.',
    headline: 'HydraFacial — the foundation of healthy skin.',
    opener:
      'Looking for a HydraFacial in San Diego? KIAMO SKIN is a licensed corrective skin studio in Mission Hills, five minutes from Hillcrest and Little Italy, and the HydraFacial here is $259.',
    intro:
      'HydraFacial does three things at once: lifts away dead surface cells, vacuums out congestion, and floods the skin with serum while it is still open enough to take it. It is the most forgiving corrective treatment on the menu, which is why it is usually where a new plan starts.',
    image: hydrafacial,
    imageAlt: 'A HydraFacial treatment in progress in the KIAMO Skin studio',
    goodFor: [
      'Congested pores and blackheads',
      'Dull, dehydrated skin',
      'Uneven skin texture',
      'The foundation of a corrective treatment plan',
    ],
    steps: [
      {
        title: 'Cleanse & resurface',
        body: 'A blend of gentle exfoliating acids lifts away dead skin cells—no scrubs, no harsh abrasion.',
      },
      {
        title: 'Extract & hydrate',
        body: 'Gentle vortex extraction removes oil and debris before hydrating ingredients and antioxidants are infused into the skin.',
      },
      {
        title: 'Boost',
        body: 'A customized booster is selected based on your skin’s unique needs—from brightening to barrier support.',
      },
    ],
    pricing: [
      {
        label: 'First-Time Client Treatment',
        price: verifiedPrices['first-time-client'],
        description:
          'The best place to begin. Includes a comprehensive consultation, skin analysis, customized HydraFacial, personalized booster, microcurrent, LED Light Therapy, Hydrojelly Mask, and a long term treatment plan.',
      },
      {
        label: 'HydraFacial Treatment',
        price: verifiedPrices.hydrafacial,
        description:
          'A customized HydraFacial that deeply cleanses, exfoliates, extracts, and hydrates to support healthy skin and maintain your treatment results.',
      },
    ],
    membershipNote:
      'The HydraFacial is the treatment included in every membership tier, from $199 a month against $259 booked one visit at a time.',
    membershipAnchor: 'Compare the three membership tiers',
  },
  {
    slug: 'keravive-scalp',
    name: 'HydraFacial Keravive',
    serviceType: 'Scalp treatment',
    category: 'Scalp therapy',
    areas: ['pacific-beach', 'la-jolla', 'encinitas', 'del-mar', 'carlsbad'],
    title: 'Keravive Scalp Treatment in San Diego | KIAMO Skin',
    description:
      'Keravive scalp therapy in Mission Hills, San Diego. Corrective treatment for flaking, buildup and thinning of the scalp. $599, or $1,499 for three.',
    headline: "HydraFacial Keravive — your scalp is skin. Treat it that way.",
    opener:
      "Looking for a head spa or scalp treatment in San Diego? Keravive is the clinical alternative — a corrective protocol for buildup, flaking and the hard water mineral residue that accumulates at the scalp, performed at a single studio in Mission Hills.",
    intro:
      'Keravive deeply cleanses, exfoliates, and hydrates the scalp while removing buildup that can contribute to dryness, flaking, and irritation. A healthier scalp creates a better environment for healthy hair growth. In San Diego, hard water can make scalp buildup especially common, making regular scalp care an important part of maintaining a healthy scalp. Every treatment includes a take home peptide spray to continue supporting scalp health between visits.',
    image: scalp,
    imageAlt: 'Scalp therapy being performed at the part line',
    goodFor: [
      'Flaking, itching, or scalp tightness',
      'Product buildup and hard water mineral deposits',
      'Shedding accompanied by visible scalp buildup or irritation',
      'Anyone who invests in their skincare but has never treated their scalp',
    ],
    steps: [
      {
        title: 'Cleanse',
        body: 'Gently removes oil, dead skin, product buildup, and mineral buildup from the scalp.',
      },
      {
        title: 'Nourish',
        body: 'A concentrated peptide complex nourishes the scalp to support a healthier environment for healthy hair growth.',
      },
      {
        title: 'Continue at home',
        body: 'Your take-home peptide spray helps nourish the scalp between treatments to extend and support your results.',
      },
    ],
    pricing: [
      { label: 'Keravive Scalp Treatment', price: verifiedPrices['keravive-scalp'] },
      { label: '3 Treatment Series — total', price: verifiedPrices['keravive-scalp-series'] },
    ],
    note: 'Healthy scalp takes consistency. While one treatment deeply cleanses and hydrates the scalp, a series provides the best opportunity to support long term scalp health.',
    membershipNote:
      'Scalp work is cumulative, which is the same reason the monthly plans exist — a membership treatment can be applied to scalp therapy by paying the difference.',
    membershipAnchor: 'How the monthly membership works',
    guide: {
      lead: 'Why does San Diego cause so much scalp buildup?',
      label: 'San Diego hard water and your scalp',
      href: '/journal/san-diego-hard-water-and-your-scalp/',
    },
  },
  {
    slug: 'dmk-enzyme-therapy',
    name: 'DMK Enzyme Therapy',
    serviceType: 'Enzyme therapy',
    category: 'Corrective skin treatment',
    areas: ['mission-hills', 'la-jolla', 'la-mesa', 'chula-vista', 'encinitas', 'carlsbad'],
    title: 'DMK Enzyme Therapy in San Diego | KIAMO Skin',
    description:
      'DMK enzyme therapy in Mission Hills, San Diego. Enzymatic resurfacing that rebuilds a damaged barrier. Level 1 is $279; Level 2 and 3 at consultation.',
    headline: 'DMK Enzyme Therapy — restore skin function from within.',
    opener:
      'Looking for DMK enzyme therapy in San Diego? Level 1 is $279 at the KIAMO SKIN studio in Mission Hills, and it is the treatment used when a barrier is too compromised to tolerate anything stronger.',
    intro:
      'DMK Enzyme Therapy is designed to restore healthy skin function rather than simply exfoliating the surface. By supporting the skin’s natural processes, it helps strengthen the skin barrier while encouraging healthy circulation and lymphatic activity. It’s especially beneficial for skin that feels over-exfoliated, sensitized, inflamed, or slow to heal.',
    image: enzyme,
    imageAlt: 'An enzyme masque setting during a treatment',
    goodFor: [
      'A compromised skin barrier — stinging, redness, or tightness after products',
      'Skin recovering from over-exfoliation or aggressive at-home products',
      'Skin that stays dehydrated despite moisturizer',
      'Congested, sensitive skin that needs a gentler corrective approach',
    ],
    steps: [
      {
        title: 'Assess',
        body: 'Every DMK treatment is customized to what your skin needs that day — not a fixed protocol.',
      },
      {
        title: 'The masque',
        body: 'As the enzyme masque sets, you’ll feel a tightening and rhythmic pulsing sensation. This is an expected part of the treatment and varies from person to person.',
      },
      {
        title: 'Home care',
        body: 'DMK is designed as a complete system. Your personalized home routine supports the work done in the treatment room, helping you achieve the best possible results between visits.',
      },
    ],
    pricing: [
      { label: 'DMK Level 1 Enzyme Treatment', price: verifiedPrices['dmk-enzyme-1'] },
      { label: 'DMK Level 2 & 3 Enzyme Treatment', price: PRICE_ON_CONSULTATION },
    ],
    note: 'Level 1 comes first. Levels 2 and 3 layer the enzymes for deeper correction and are prescribed only once Level 1 has prepared the skin — so the protocol and the price are set at consultation.',
    membershipNote:
      'A barrier rebuilds over months rather than visits, so this is treatment that suits a standing monthly slot.',
    membershipAnchor: 'See the monthly membership plans',
  },
  {
    slug: 'procell-microchanneling',
    name: 'Procell Microchanneling',
    serviceType: 'Microchanneling',
    category: 'Corrective skin treatment',
    alternateName: 'Microneedling alternative',
    areas: ['la-jolla', 'carlsbad', 'del-mar', 'encinitas'],
    title: 'Procell Microchanneling for Scarring | KIAMO Skin San Diego',
    description:
      'Procell microchanneling in Mission Hills, San Diego for acne scarring and texture in melanin-rich skin. $475, or $1,199 for a series of three.',
    headline: "Procell Microchanneling — stimulate your skin’s natural repair process.",
    opener:
      'Looking for microneedling in San Diego? Procell microchanneling is the alternative offered here — a different modality from a needle pen, performed by a licensed esthetician in Mission Hills, <a href="/journal/microneedling-on-dark-skin-san-diego/">with depth adjusted for melanin-rich skin</a>.',
    intro:
      'Procell Microchanneling creates controlled microchannels that activate your skin’s natural repair response while delivering a specialized growth factor serum. Over time, new collagen helps improve acne scars, fine lines, wrinkles, and uneven skin texture for smoother, healthier-looking skin. Every treatment is customized for your skin goals and skin tone.',
    image: acne,
    imageAlt: 'Portrait of smooth, healthy skin along the cheek and jaw',
    goodFor: [
      'Acne scars and uneven skin texture',
      'Enlarged pores and rough skin texture',
      'Fine lines and early loss of firmness',
      'Skin that benefits from collagen stimulation without heat or light',
    ],
    steps: [
      {
        title: 'Prepare',
        body: 'Your skin is thoroughly cleansed and prepared before treatment. Every Procell session is customized to your skin goals and concerns.',
      },
      {
        title: 'The pass',
        body: 'Treatment depth is adjusted for each area of your skin — deeper where correction is needed and lighter where skin is naturally thinner. A specialized growth factor serum is applied throughout the treatment to support your skin’s natural repair process.',
      },
      {
        title: 'Recover',
        body: 'Expect redness similar to a mild sunburn for 24–48 hours. Mild dryness or flaking may occur as your skin renews itself. Following your post-care instructions including daily SPF is essential to support healing and help minimize the risk of unwanted pigmentation, especially in melanin rich skin.',
      },
    ],
    pricing: [
      {
        label: 'Procell Microchanneling',
        price: verifiedPrices.procell,
        description:
          'The best results are typically achieved with a series rather than a single treatment. Most clients begin with three sessions spaced 4–6 weeks apart, though your treatment plan is customized during your consultation based on your skin goals, concerns, and how your skin responds.',
      },
      {
        label: 'Procell Microchanneling 3-Treatment Series',
        price: verifiedPrices['procell-series'],
        description:
          'Designed for clients committed to long-term correction. A series of three treatments supports progressive collagen remodeling and is recommended for concerns such as acne scars, uneven texture, fine lines, and overall skin rejuvenation. Treatments are typically scheduled 4–6 weeks apart.',
      },
    ],
    melaninNote:
      'Microchanneling works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger.',
    membershipNote:
      'A series of three is the usual plan, and membership treatments can be applied to it by paying the difference.',
    membershipAnchor: 'Membership pricing and what each plan includes',
  },
  {
    slug: 'lira-peels',
    name: 'Lira Chemical Peels',
    serviceType: 'Chemical peel',
    category: 'Corrective skin treatment',
    areas: ['chula-vista', 'la-jolla', 'north-park', 'pacific-beach', 'la-mesa'],
    title: 'Chemical Peels for Melanin-Rich Skin | KIAMO Skin San Diego',
    description:
      'Lira chemical peels in Mission Hills, San Diego for pigmentation and melasma in melanin-rich skin. Gentle Renewal $199, Advanced Peel $299.',
    headline: 'Lira Chemical Peels — designed to brighten without compromising skin health.',
    opener:
      'Looking for a chemical peel in San Diego that is safe on melanin-rich skin? That is the work this studio was built around.',
    intro:
      'Pigmentation is the reason most people book, and it is also where the wrong treatment does lasting damage. Melanin-rich skin responds to trauma by producing more pigment, so the strength, the acid and the pacing all have to be selected deliberately. Lira’s professional range is built for that kind of control.',
    image: pigmentation,
    imageAlt: 'Close portrait of even, clear skin in warm natural light',
    goodFor: [
      'Melasma and hormonal pigmentation',
      'Post-inflammatory marks left behind by acne',
      'Uneven tone and sun damage',
      'Dullness and rough surface texture',
    ],
    steps: [
      {
        title: 'Patch and prep',
        body: 'Most pigmentation plans begin with a period of home prep so the skin is ready before any acid is applied.',
      },
      {
        title: 'Apply',
        body: 'The peel is layered and timed to your skin’s response on the day. Strength escalates across a series rather than in one visit.',
      },
      {
        title: 'Protect',
        body: 'Daily SPF is what holds the result. Without it, pigmentation returns — and San Diego’s overcast mornings are the usual reason people stop applying it.',
      },
    ],
    pricing: [
      { label: 'LIRA Gentle Renewal Peel', price: verifiedPrices['lira-light-peel'] },
      { label: 'LIRA Advanced Peel', price: verifiedPrices['lira-advanced-peel'] },
    ],
    note: 'Peel strength is matched to your skin at consultation. The Gentle Renewal Peel refreshes and maintains; the Advanced Peel goes deeper for pigmentation and scarring. Pigmentation is treated as a series with home care between visits — there is no single-session version of this.',
    membershipNote:
      'Because pigmentation is only ever treated as a series, a monthly membership is usually the cheaper way to run one.',
    membershipAnchor: 'Monthly facial memberships in San Diego',
    melaninNote:
      'Peels on Black and brown skin are chosen differently — the pacing is the whole point.',
    guide: {
      lead: 'Not sure which kind of pigmentation you have?',
      label: 'How to tell post-inflammatory marks, melasma and sun damage apart',
      href: '/journal/three-kinds-of-dark-mark/',
    },
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplane Facial',
    serviceType: 'Dermaplaning',
    category: 'Facial treatment',
    areas: ['mission-hills', 'la-jolla', 'north-park'],
    title: 'Dermaplaning in San Diego | KIAMO Skin',
    description:
      'Dermaplaning in Mission Hills, San Diego. Smoother texture and better product absorption with no downtime, performed by a licensed esthetician. $199.',
    headline: 'Dermaplaning — a clean surface changes what everything else can do.',
    opener:
      'Looking for dermaplaning in San Diego? The dermaplane facial at KIAMO SKIN is performed by a licensed esthetician in Mission Hills, and it is $199.',
    intro:
      'Dermaplaning uses a sterile surgical blade to remove dead surface cells and the fine vellus hair that sits on top of them. Nothing is pulled from the follicle and nothing penetrates the skin. What changes is the surface: product reaches live tissue instead of sitting on debris, and makeup stops catching on texture.',
    image: dermaplane,
    imageAlt: 'A close portrait of smooth, even skin across the cheekbone',
    goodFor: [
      'Rough or uneven surface texture',
      'Makeup that clings to fine facial hair',
      'Skincare that seems to sit on the surface instead of absorbing',
      'Anyone wanting a corrective treatment with no recovery time',
    ],
    steps: [
      {
        title: 'Cleanse and dry',
        body: 'The skin is cleansed and taken completely dry. Dermaplaning is performed on a dry surface — any residual moisture changes how the blade sits.',
      },
      {
        title: 'The pass',
        body: 'The blade is held at a fixed angle and drawn across the skin in short, controlled strokes, section by section. Active or pustular acne is worked around rather than over.',
      },
      {
        title: 'Treat and protect',
        body: 'With the surface barrier of dead cells removed, serums are applied while absorption is at its highest, and the treatment closes with SPF.',
      },
    ],
    pricing: [
      {
        label: 'Dermaplane Facial',
        price: verifiedPrices['dermaplane-facial'],
        description:
          'A full facial with dermaplaning included — cleanse, dermaplane, treat and protect. Often paired with a peel, because a cleared surface lets the acid work evenly.',
      },
    ],
    note: 'Dermaplaning is not appropriate over active or inflamed acne, and it is skipped in those areas. Vellus hair grows back exactly as it was — same texture, same colour. It cannot grow back thicker, because the blade does not touch the follicle.',
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
