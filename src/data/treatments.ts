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
      'HydraFacial San Diego - Mission Hills studio. Deep extraction + customized booster + LED therapy for your skin concerns. Licensed esthetician. First visit $249.',
    headline: 'HydraFacial in San Diego — Deep Cleansing, Extraction & Hydration',
    opener:
      'Looking for a HydraFacial in San Diego? KIAMO SKIN is a licensed corrective skin studio in Mission Hills, five minutes from Hillcrest and Little Italy. The HydraFacial here is performed on the HydraFacial Syndeo platform—the latest generation device with enhanced suction, real-time skin impedance analysis, and precision serum delivery. First-time clients pay $249 for a comprehensive consultation, skin analysis, customized HydraFacial with booster, microcurrent, LED light therapy, and Hydrojelly mask. Return visits are $259.',
    intro:
      'The HydraFacial Syndeo platform does three things at once: lifts away dead surface cells, vacuums out congestion, and floods the skin with serum while it is still open enough to take it. It is the most forgiving corrective treatment on the menu, which is why it is usually where a new plan starts. <a href="/service-areas/mission-hills/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Mission Hills clients</a> are steps from the studio, while those from <a href="/service-areas/north-park/" class="border-b border-ink/40 hover:border-rose hover:text-rose">North Park</a>, Hillcrest, and Bankers Hill are minutes away. Coastal clients from <a href="/service-areas/la-jolla/" class="border-b border-ink/40 hover:border-rose hover:text-rose">La Jolla</a> and <a href="/service-areas/del-mar/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Del Mar</a> book HydraFacial for congestion and dehydration from sun and salt exposure—proximity that makes regular maintenance realistic.',
    image: hydrafacial,
    imageAlt: 'A HydraFacial treatment in progress in the KIAMO Skin studio',
    goodFor: [
      'Congested pores and blackheads',
      'Dull, dehydrated skin',
      'Uneven skin texture',
      'The foundation of a corrective treatment plan',
      'Melanin-rich skin — no heat, no laser, safe for Fitzpatrick Types IV–VI',
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
        body: 'A customized booster is selected based on your skin\'s unique needs—from brightening to barrier support.',
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
    title: 'Keravive Scalp Treatment San Diego | Mission Hills Studio',
    description:
      'Keravive scalp treatment San Diego - clinical therapy for dandruff, flaking, hair thinning & hard water buildup. Mission Hills studio. Ocean swimmers welcome. $599.',
    headline: "HydraFacial Keravive — your scalp is skin. Treat it that way.",
    opener:
      "Looking for professional scalp treatment in San Diego? Keravive is clinical scalp therapy for buildup, flaking, dandruff, and the hard water mineral residue that accumulates on San Diego scalps. Performed at KIAMO SKIN in Mission Hills, serving clients from Pacific Beach to Carlsbad.",
    intro:
      'HydraFacial Keravive deeply cleanses, exfoliates, and hydrates the scalp while removing buildup that contributes to dryness, flaking, and irritation. The Keravive Peptide Complex nourishes sebaceous glands and supports a healthier environment for hair growth. In San Diego, hard water — averaging 16 grains per gallon — makes scalp buildup especially common. From <a href="/service-areas/la-jolla/" class="border-b border-ink/40 hover:border-rose hover:text-rose">La Jolla ocean swimmers</a> dealing with daily salt water exposure to <a href="/service-areas/encinitas/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Encinitas surfers</a> facing wind and UV damage, scalp conditions here are shaped by year-round outdoor living. Inland clients from <a href="/service-areas/chula-vista/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Chula Vista</a> and <a href="/service-areas/la-mesa/" class="border-b border-ink/40 hover:border-rose hover:text-rose">La Mesa</a> book Keravive for hard water mineral deposits that shampoo cannot clear. Every treatment includes a take-home peptide spray to continue supporting scalp health between visits.',
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
      'DMK Enzyme Therapy is designed to restore healthy skin function rather than simply exfoliating the surface. By supporting the skin\'s natural processes, it helps strengthen the skin barrier while encouraging healthy circulation and lymphatic activity. It\'s especially beneficial for skin that feels over-exfoliated, sensitized, inflamed, or slow to heal—common states for <a href="/service-areas/encinitas/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Encinitas surfers</a>, <a href="/service-areas/pacific-beach/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Pacific Beach residents</a>, and anyone whose barrier has been stripped by salt water, wind, or aggressive product use.',
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
        body: 'As the enzyme masque sets, you will feel a tightening and rhythmic pulsing sensation. This is an expected part of the treatment and varies from person to person.',
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
    alternateName: 'Microneedling San Diego',
    areas: ['la-jolla', 'carlsbad', 'del-mar', 'encinitas'],
    title: 'Microneedling San Diego — Procell Microchanneling | KIAMO',
    description:
      'Procell microchanneling in San Diego — safe for melanin-rich and dark skin. No RF heat, no PIH risk. KIAMO Skin, Mission Hills. Acne scars, hyperpigmentation, texture. Book online or call (310) 595-0872.',
    headline: "Microneedling in San Diego — Acne Scars, Hyperpigmentation & Texture",
    opener:
      'Most microneedling providers in San Diego use devices that work well on lighter skin tones but carry real risk for Black and brown skin. The radiofrequency heat in RF microneedling systems — Morpheus8, Vivace, Potenza — stimulates melanocytes in darker Fitzpatrick skin types and can produce post-inflammatory hyperpigmentation: new dark marks caused by the very treatment meant to clear them. At KIAMO Skin, we use Procell microchanneling. No RF heat. Mechanical channels only. Growth factor serums delivered directly into the treatment zones. The mechanism matches what melanin-rich skin actually needs.',
    intro:
      'Procell Therapies microchanneling is a skin resurfacing treatment that creates thousands of microscopic channels in the skin surface using a precision-engineered handpiece. Those channels trigger the skin\'s natural wound-healing response — collagen production, elastin remodeling, and controlled surface cell renewal. What separates Procell from conventional microneedling is what happens immediately after the channels are created. Procell\'s proprietary stem cytokine growth factor serums are applied directly into the open channels, communicating with skin cells to direct the repair process toward specific outcomes: collagen synthesis, pigment correction, and texture resurfacing. The result is faster recovery and more targeted correction than standard microneedling alone. Ideal candidates include those with acne scarring (ice pick, boxcar, and rolling scar types), post-inflammatory hyperpigmentation (PIH) — dark marks left after acne, injury, or trauma, uneven skin tone and diffuse sun damage, skin texture irregularities and enlarged pores, fine lines and mild skin laxity, and Fitzpatrick Type IV, V, and VI skin tones. For clients traveling from <a href="/service-areas/carlsbad/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Carlsbad</a>, <a href="/service-areas/del-mar/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Del Mar</a>, or <a href="/service-areas/encinitas/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Encinitas</a>, the series is planned as a block at consultation — scheduling all three sessions at once accounts for the drive and makes completion realistic.',
    image: acne,
    imageAlt: 'Portrait of smooth, healthy skin along the cheek and jaw',
    goodFor: [
      'Acne scarring — ice pick, boxcar, and rolling scar types',
      'Post-inflammatory hyperpigmentation (PIH) — dark marks left after acne, injury, or trauma',
      'Uneven skin tone and diffuse sun damage',
      'Skin texture irregularities and enlarged pores',
      'Fine lines and mild skin laxity',
      'Fitzpatrick Type IV, V, and VI skin tones',
    ],
    steps: [
      {
        title: 'Skin assessment and prep',
        body: 'Every session begins with a skin review. Active inflammatory acne, compromised barrier, or recent use of prescription retinoids may require protocol adjustment. Numbing cream is applied to the treatment area and left for 20–30 minutes.',
      },
      {
        title: 'Microchanneling pass',
        body: 'The Procell handpiece passes across the face in a systematic grid pattern — forehead, cheeks, chin, perioral area. Most clients describe mild pressure with minimal sensation during numbing. Treatment time: approximately 20–30 minutes.',
      },
      {
        title: 'Growth factor serum application',
        body: 'Immediately after channeling, Procell\'s stem cytokine serums are applied directly into the open channels. This is the step that differentiates Procell outcomes — the growth factors direct cellular repair toward collagen synthesis and pigment correction rather than leaving healing to chance.',
      },
      {
        title: 'LED light therapy',
        body: 'Red and near-infrared LED light therapy follows every session at KIAMO Skin to reduce post-treatment inflammation and support the healing response. This is included in every appointment, not an add-on.',
      },
      {
        title: 'Barrier protection and post-care',
        body: 'A calming, occlusive barrier product is applied. You leave with clean, protected skin — no foundation, no active products on day of treatment. Expect redness similar to a mild sunburn for 24-48 hours. Mild dryness or flaking may occur as your skin renews itself. SPF is non-negotiable post-treatment. The channels close within hours, but skin UV-sensitivity is elevated for 7–10 days after microchanneling.',
      },
    ],
    pricing: [
      {
        label: 'Procell Microchanneling — Single Session',
        price: verifiedPrices.procell,
        description:
          'Visible improvement for mild texture and tone irregularity. Topical numbing cream, Procell microchanneling treatment with proprietary stem cytokine growth factor serums, LED light therapy, and barrier protection included.',
      },
      {
        label: 'Procell Microchanneling — 3 Treatment Series',
        price: verifiedPrices['procell-series'],
        description:
          'Recommended for acne scarring, moderate to significant PIH, and textural concerns. Sessions spaced 4–6 weeks apart. Save $226 compared to three single sessions. Growth factor serums and LED therapy included at each session.',
      },
    ],
    note: 'RF microneedling devices combine needle penetration with radiofrequency heat energy delivered through the tip. In lighter skin tones, the thermal effect stimulates collagen remodeling without significant risk. In melanin-rich skin — Fitzpatrick Type IV (olive to light brown), Type V (brown), and Type VI (deep brown to dark brown) — that heat activates melanocytes near the treatment zone, which can trigger post-inflammatory hyperpigmentation as a response to thermal trauma. Procell microchanneling creates mechanical channels without any thermal component. The inflammatory trigger is controlled and predictable. Combined with protocols designed for melanin-rich skin and growth factor serums that direct repair, the treatment corrects existing pigmentation without creating new dark marks. This is not a compromised version of microneedling. It is the correct selection for the patient population KIAMO serves.',
    melaninNote:
      'Microchanneling works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. Procell uses mechanical channels only with no thermal component, making it significantly lower-risk for Fitzpatrick Types IV, V, and VI.',
    membershipNote:
      'A series of three is the usual plan, and membership treatments can be applied to it by paying the difference.',
    membershipAnchor: 'Membership pricing and what each plan includes',
    guide: {
      lead: 'Is microchanneling safe on dark skin?',
      label: 'Microneedling on dark skin in San Diego — what matters',
      href: '/journal/microneedling-on-dark-skin-san-diego/',
    },
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
      'Pigmentation is the reason most people book, and it is also where the wrong treatment does lasting damage. Melanin-rich skin responds to trauma by producing more pigment, so the strength, the acid and the pacing all have to be selected deliberately. Lira\'s professional range is built for that kind of control. <a href="/service-areas/chula-vista/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Chula Vista clients</a> and those from <a href="/service-areas/la-mesa/" class="border-b border-ink/40 hover:border-rose hover:text-rose">La Mesa</a> book this treatment most often, where inland UV and melanin-rich skin demographics make melasma the county\'s most common pigmentation concern. Read more about <a href="/treatments/melasma/" class="border-b border-ink/40 hover:border-rose hover:text-rose">correcting melasma and post-inflammatory hyperpigmentation</a>.',
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
        body: 'The peel is layered and timed to your skins response on the day. Strength escalates across a series rather than in one visit.',
      },
      {
        title: 'Protect',
        body: 'Daily SPF is what holds the result. Without it, pigmentation returns — and San Diegos overcast mornings are the usual reason people stop applying it.',
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
    title: 'Dermaplaning in San Diego — Safe for Dark Skin | KIAMO Skin',
    description:
      'Dermaplaning in San Diego at KIAMO Skin, Mission Hills. Expert technique on melanin-rich and dark skin. $199 per session. By appointment.',
    headline: 'Dermaplaning — a clean surface changes what everything else can do.',
    opener:
      'Looking for dermaplaning in San Diego? The dermaplane facial at KIAMO SKIN is performed by a licensed esthetician in Mission Hills, and it is $199.',
    intro:
      'Dermaplaning uses a sterile surgical blade to remove dead surface cells and the fine vellus hair that sits on top of them. Nothing is pulled from the follicle and nothing penetrates the skin. What changes is the surface: product reaches live tissue instead of sitting on debris, and makeup stops catching on texture. Clients from <a href="/service-areas/mission-hills/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Mission Hills</a>, <a href="/service-areas/north-park/" class="border-b border-ink/40 hover:border-rose hover:text-rose">North Park</a>, and <a href="/service-areas/la-jolla/" class="border-b border-ink/40 hover:border-rose hover:text-rose">La Jolla</a> book dermaplaning for events and before important occasions because there is zero downtime and the glow is immediate.',
    image: dermaplane,
    imageAlt: 'A close portrait of smooth, even skin across the cheekbone',
    goodFor: [
      'Rough or uneven surface texture',
      'Makeup that clings to fine facial hair',
      'Skincare that seems to sit on the surface instead of absorbing',
      'Anyone wanting a corrective treatment with no recovery time',
      'Melanin-rich skin requiring a low-inflammation exfoliation option',
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
    note: 'Dermaplaning is not appropriate over active or inflamed acne, and it is skipped in those areas. Vellus hair grows back exactly as it was — same texture, same colour. It cannot grow back thicker, because the blade does not touch the follicle. Dermaplaning on melanin-rich skin requires correct blade angle and pressure to prevent post-inflammatory hyperpigmentation (PIH) — the studio has treated Fitzpatrick Type IV–VI skin for 7+ years.',
    guide: {
      lead: 'Is dermaplaning safe on darker skin?',
      label: 'Dermaplaning for dark skin in San Diego — what actually matters',
      href: '/journal/dermaplaning-safe-dark-skin-san-diego/',
    },
  },
  {
    slug: 'acne',
    name: 'Acne Treatment',
    serviceType: 'Acne facial treatment',
    category: 'Facial treatment',
    areas: ['mission-hills', 'north-park', 'la-jolla', 'pacific-beach', 'chula-vista'],
    title: 'Acne Treatment San Diego | Acne Facials Mission Hills | KIAMO Skin',
    description:
      'Acne treatment San Diego - HydraFacial for breakouts, chemical peels for dark marks, microchanneling for scars. Corrective approach for all skin types. Mission Hills studio.',
    headline: 'Acne Treatment in San Diego — clear breakouts, fade marks, smooth scars.',
    opener:
      'Looking for acne treatment in San Diego? KIAMO SKIN offers corrective acne facials in Mission Hills — HydraFacial for active breakouts, DMK Enzyme Therapy for congestion, chemical peels for post-inflammatory hyperpigmentation, and Procell Microchanneling for acne scarring. Every treatment is customized for your skin type and concern.',
    intro:
      'Acne treatment at KIAMO SKIN addresses three phases: active breakouts, congestion (blackheads and whiteheads), and post-acne concerns like hyperpigmentation and scarring. The treatment plan depends on what stage your skin is in. HydraFacial extracts congestion without manual pressure, DMK Enzyme Therapy rebuilds a compromised barrier that is keeping breakouts active, and chemical peels or microchanneling work through the marks and texture left behind. Every protocol is designed to clear acne without triggering post-inflammatory hyperpigmentation — the dark marks that last longer than the breakout itself.',
    image: acne,
    imageAlt: 'Clear, healthy skin along the cheek showing improved texture after acne treatment',
    goodFor: [
      'Active hormonal acne and inflammatory breakouts',
      'Cystic acne and nodular acne lesions',
      'Blackheads, whiteheads, and congested pores',
      'Post-inflammatory hyperpigmentation (dark marks after acne)',
      'Acne scarring and uneven texture',
      'Oily, acne-prone skin prone to recurrent breakouts',
    ],
    steps: [
      {
        title: 'Assess & identify',
        body: 'Every acne treatment starts with identifying what phase the skin is in — active breakouts, congestion, or post-acne marks — and which treatment modality matches that phase.',
      },
      {
        title: 'Treat the root cause',
        body: 'HydraFacial clears congestion and hydrates without aggravating active breakouts. DMK Enzyme Therapy strengthens a compromised barrier that is allowing bacteria to thrive. Chemical peels fade post-inflammatory hyperpigmentation.',
      },
      {
        title: 'Address scarring (if present)',
        body: 'Procell Microchanneling stimulates collagen production to improve atrophic acne scars (indented scars) and texture irregularities left by past breakouts.',
      },
      {
        title: 'Maintain & prevent',
        body: 'Acne is managed over time, not cured in one visit. A consistent treatment schedule prevents new breakouts while working through existing congestion and marks.',
      },
    ],
    pricing: [
      {
        label: 'HydraFacial (active breakouts/congestion)',
        price: verifiedPrices.hydrafacial,
        description:
          'Deep pore cleansing and extraction for blackheads, whiteheads, and active breakouts. Reduces congestion without manual pressure that can worsen inflammation.',
      },
      {
        label: 'DMK Enzyme Therapy Level 1 (barrier repair)',
        price: verifiedPrices['dmk-enzyme-1'],
        description:
          'Enzymatic treatment that rebuilds a compromised skin barrier contributing to recurrent breakouts. Addresses inflammation and supports long-term skin health.',
      },
      {
        label: 'LIRA Chemical Peel (hyperpigmentation)',
        price: verifiedPrices['lira-light-peel'],
        description:
          'Professional-grade peel formulated to fade post-inflammatory hyperpigmentation (dark marks) left after acne clears. Applied correctly to minimize risk of worsening pigmentation.',
      },
      {
        label: 'Procell Microchanneling (acne scarring)',
        price: verifiedPrices.procell,
        description:
          'Collagen-stimulating treatment for atrophic acne scars (indented scars). A series of three treatments ($1,199) is typically needed to see measurable improvement in scar depth and texture.',
      },
    ],
    note: 'Acne treatment is not one-size-fits-all. Active cystic acne requires a different approach than blackhead congestion, and both differ from treating post-acne hyperpigmentation. The first consultation identifies which phase the skin is in and which treatment matches that phase. For severe or persistent acne, working with a dermatologist alongside corrective facials produces the best results — estheticians and dermatologists treat acne differently, and both roles matter.',
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
