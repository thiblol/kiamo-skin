import type { ImageMetadata } from 'astro';
import { verifiedPrices, PRICE_ON_CONSULTATION } from '../config/business';
import { servicePath } from '../config/urls';
import hydrafacial from '../assets/hydrafacial-treatment-san-diego.jpg';
import scalp from '../assets/keravive-scalp-treatment-san-diego.jpg';
import enzyme from '../assets/dmk-enzyme-therapy-san-diego.jpg';
import acne from '../assets/acne-treatment-facial-extraction-mission-hills-san-diego.jpg';
import hyperpigmentationTreatment from '../assets/hyperpigmentation-treatment-serum-application-san-diego.jpg';
import correctiveSkin from '../assets/corrective-skin-treatment-consultation-mission-hills-san-diego.jpg';
import dermaplane from '../assets/dermaplaning-facial-treatment-mission-hills-san-diego.jpg';
import procell from '../assets/procell-microchanneling-san-diego.jpg';
import liraPeel from '../assets/lira-chemical-peel-treatment-mission-hills-san-diego.jpg';
import melasmaHero from '../assets/best-facial-san-diego-customized-consultation-mission-hills.jpg';
import melasmaResult from '../assets/hyperpigmentation-melasma-treatment-san-diego.jpg';
import correctiveHero from '../assets/corrective-skin-treatment-melanin-rich-approach-san-diego.jpg';
import pihResult from '../assets/hyperpigmentation-after-treatment-results-san-diego.jpg';

/**
 * The menu grouping, used by ServiceMenu.astro's filter tabs and by the
 * services index page.
 */
export const categories = ['Facials', 'Scalp', 'Peels', 'Advanced', 'Corrective'] as const;
export type Category = (typeof categories)[number];

/**
 * One service. The registry replaces `treatments.ts`.
 *
 * Why a registry rather than a page per service: a service is the parent of
 * its own city pages. `/services/{slug}/` is the national, location-neutral
 * page ("HydraFacial"), and `/service-areas/{area}/{slug}/` are the
 * service-and-city pages beneath it. The service record carries what the
 * national page needs; `service-areas.ts` carries what each city page needs.
 *
 * Two shapes live here, and the difference is deliberate:
 *
 *   - A **modality** (HydraFacial, dermaplaning) has one procedure. It has
 *     steps, a price list, and a set of concerns it addresses.
 *   - A **concern** (melasma, hyperpigmentation, corrective) is a plan, not a
 *     procedure. It has no single price, because the plan is assembled from
 *     several modalities. It carries `planMembers` instead of `pricing`, and
 *     `menu` instead of `goodFor`.
 *
 * The old `/services/` cluster conflated the two — a page for
 * "post-inflammatory hyperpigmentation treatment" sat beside a page for
 * "dermaplaning", and they had nothing structurally in common. Splitting them
 * is what lets one template render both.
 */
export interface Service {
  slug: string;
  name: string;
  /** <title> — the search string. Must be ≤60 chars and contain the brand. */
  title: string;
  /** Meta description. Must be ≤155 chars. */
  description: string;
  /** The H1 — a claim, not a label. */
  headline: string;
  /**
   * The deck under the H1. Answers the search the visitor just typed, in
   * their words, before the page says anything else. Each one carries a fact
   * only this page can carry — never interchangeable.
   */
  opener: string;
  /** The long-form body copy. May contain anchors. */
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Secondary image — a published case, where the service has one. */
  resultImage?: ImageMetadata;
  resultImageAlt?: string;
  resultCaption?: string;
  category: Category;
  /** schema.org Service fields. Not rendered — structured data only. */
  serviceType: string;
  alternateName?: string;

  /**
   * The concerns this service addresses, in the visitor's words rather than
   * the clinical term. Modality pages use this; concern pages do not.
   */
  goodFor?: string[];
  /**
   * The concerns a concern-page addresses. Concern pages use this; modality
   * pages do not.
   */
  concerns?: string[];
  /**
   * The modalities a concern-plan is assembled from. Only concern pages carry
   * this — it is what replaces a price list on a page that has no single price.
   */
  planMembers?: { name: string; description: string; price?: string; href: string }[];
  /**
   * What happens in the room. Modality pages carry the procedure's steps;
   * concern pages carry the steps of the plan.
   */
  steps: { title: string; body: string }[];
  /**
   * The published prices. Only modality pages carry this. Concern pages price
   * at consultation because the plan is assembled from several modalities.
   */
  pricing?: { label: string; price: string; description?: string }[];
  /** Honest caveats. Rendered as a closing note, never omitted where present. */
  note?: string;
  /**
   * One sentence linking to /membership, rendered under the note. Set only on
   * services whose own copy already argues that results are cumulative — a
   * link on every page would be sitewide boilerplate, which is the thing hub
   * anchors exist to avoid.
   */
  membershipNote?: string;
  /** The link label for `membershipNote`. Each one differs. */
  membershipAnchor?: string;
  /**
   * One sentence linking to /melanin-rich-skin, rendered under the note. Set
   * only where the specialism genuinely bears on the treatment.
   */
  melaninNote?: string;
  /**
   * Optional link to a journal article that explains the concern behind this
   * service.
   */
  guide?: { label: string; href: string; lead: string };
  /**
   * The San Diego-specific triggers behind the concern. Concern pages only —
   * this is the part that could not be written for a national chain.
   */
  triggers?: string[];
  /**
   * The hero block.
   *
   * Split from the rest because the hero answers a different question. The
   * eyebrow names three specific attributes of the treatment, the paragraph
   * says what it does and what it costs, and the trust row carries the facts
   * a reader checks. The local context lives further down the page — it is
   * the reason to trust the drive, not the reason to book.
   */
  hero: {
    /** Three short attributes, joined by a middot. */
    eyebrow: string;
    /** The claim that sits under the H1. */
    claim: string;
    /** Two or three lines about the treatment. */
    paragraph: string;
    /** The tick-marked facts. Each one is checkable. */
    trust: { label: string; detail?: string }[];
  };
}

/**
 * The eleven services.
 *
 * The slug is the searched term, not the brand name. "Chemical peel" is
 * 260/mo; "lira peels" measures nothing. "Microneedling" is 1,000/mo;
 * "procell microchanneling" is 10. "Scalp treatment" is 170/mo; "keravive
 * scalp" measures nothing. The brand names stay in the headline and the body
 * — only the URL follows the demand.
 */
export const services: Service[] = [
  {
    slug: 'facial',
    name: 'Facial',
    serviceType: 'Facial treatment',
    alternateName: 'Facial treatment San Diego',
    category: 'Facials',
    title: 'Facial in San Diego | All Skin Types | KIAMO Skin',
    description:
      'Facial treatments in San Diego from KIAMO Skin. HydraFacial, peels, dermaplaning and enzyme therapy, calibrated for every skin type. From $199.',
    headline: 'Facial in San Diego — Calibrated to Your Skin, Not a Menu',
    opener:
      'There is no single best facial. The right one depends on your skin tone, your concern, and the condition of your skin on the day. Performed by Kiki, a California licensed esthetician.',
    intro:
      'KIAMO Skin runs the full facial menu rather than a single modality, because the treatment that suits a reactive barrier is not the treatment that suits an oily, congested one. HydraFacial Syndeo with AI skin analysis for maintenance and glow. Lira chemical peels at Fitzpatrick-calibrated concentrations for pigmentation and texture. DMK enzyme therapy for barrier repair. Dermaplaning for surface refinement. The modality is selected to match the skin in front of you, and the price is published before you book. <a href="/services/hydrafacial/" class="border-b border-ink/40 hover:border-rose hover:text-rose">HydraFacial</a>, <a href="/services/chemical-peel/" class="border-b border-ink/40 hover:border-rose hover:text-rose">chemical peels</a>, and <a href="/services/dermaplaning/" class="border-b border-ink/40 hover:border-rose hover:text-rose">dermaplaning</a> each have their own page, and <a href="/services/corrective-skin-treatments/" class="border-b border-ink/40 hover:border-rose hover:text-rose">corrective skin treatments</a> covers how a plan is put together when more than one modality is involved.',
    image: hydrafacial,
    imageAlt:
      'HydraFacial Syndeo treatment in progress at KIAMO Skin San Diego — licensed esthetician performing a medical-grade facial',
    goodFor: [
      'Congested pores from urban pollution, sunscreen, or marine-layer humidity',
      'Dehydration from air-conditioned offices, coastal salt air, or hard water mineral deposits',
      'Dull or uneven tone ahead of an event, presentation, or trip',
      'Monthly maintenance between more intensive corrective treatments',
      'Barrier support for skin recovering from acne, peels, or sun exposure',
      'Hyperpigmentation, melasma, or sun damage — paired with corrective plans when needed',
    ],
    steps: [
      {
        title: 'Assessment',
        body: 'Kiki evaluates skin tone (Fitzpatrick I-VI), the primary concern, and the modality that fits. For San Diego clients the assessment accounts for coastal UV exposure, hard water mineral deposits, and any current corrective work. On the HydraFacial Syndeo, AI skin analysis reads hydration, congestion, and pigmentation patterns.',
      },
      {
        title: 'Treatment',
        body: 'Sessions run 45-75 minutes depending on modality. HydraFacial Syndeo pairs Vortex-Fusion extraction with selected boosters. Lira peels use Fitzpatrick-calibrated acid concentrations. DMK enzyme therapy rebuilds barrier function. Dermaplaning refines surface texture before serum infusion. No modality is selected without checking it is safe for your skin tone.',
      },
      {
        title: 'Homecare',
        body: 'Medical-grade homecare extends the result between visits. Kiki prescribes a daily regimen — ceramide-rich moisturisers for barrier repair, tyrosinase inhibitors when pigmentation is a concern, broad-spectrum SPF 50+ for year-round UV. Daily compliance determines most of the long-term result.',
      },
    ],
    pricing: [
      { label: 'Dermaplane Facial', price: verifiedPrices['dermaplane-facial'] },
      { label: 'HydraFacial', price: verifiedPrices.hydrafacial },
      { label: 'First-time client treatment', price: verifiedPrices['first-time-client'] },
      { label: 'LIRA Chemical Peels', price: verifiedPrices['lira-light-peel'] },
      { label: 'DMK Enzyme Therapy', price: verifiedPrices['dmk-enzyme-1'] },
    ],
    note: 'Sessions run 45-75 minutes depending on the modality selected. Most clients book monthly for maintenance, and every four to six weeks is the usual cadence for a corrective plan addressing pigmentation or barrier damage.',
    membershipNote:
      'The HydraFacial is the treatment included in every membership tier, from $199 a month against $259 booked one visit at a time.',
    membershipAnchor: 'Compare the three membership tiers',
    melaninNote:
      'Every modality here is selected for your Fitzpatrick type, so a facial is safe across the full I-VI spectrum. Standard peels and aggressive exfoliation applied at concentrations designed for lighter skin can trigger post-inflammatory hyperpigmentation in melanin-rich skin.',
    guide: {
      lead: 'Choosing between HydraFacial, a peel, and dermaplaning',
      label: 'Best facial in San Diego: how to choose',
      href: '/facial/best-facial-san-diego/',
    },
    hero: {
      eyebrow: "HydraFacial · Chemical Peels · Dermaplaning",
      claim: "The right facial for your skin tone, your concern, and the day you come in.",
      paragraph: "There is no single best facial. The right one depends on your skin tone, your concern, and the condition of your barrier that day — so Kiki assesses it and picks the modality to match. Dermaplaning starts at $199, a HydraFacial is $259, and the first visit includes the consultation that decides the plan.",
      trust: [
        { label: "Safe for every Fitzpatrick type, I–VI" },
        { label: "Prices published before you book" },
        { label: "Licensed esthetician, 7+ years" },
        { label: "One practitioner, every visit" },
      ],
    },
  },
  {
    slug: 'hydrafacial',
    name: 'HydraFacial',
    serviceType: 'HydraFacial',
    category: 'Facials',
    title: 'HydraFacial in San Diego | KIAMO Skin',
    description:
      'HydraFacial in San Diego on the Syndeo device. Medical-grade extraction, custom booster and LED therapy. First visit $249. Request an appointment.',
    headline: 'HydraFacial in San Diego — Medical-Grade, With a Booster for Your Skin',
    opener:
      'Medical-grade extraction and hydration on a HydraFacial Syndeo, with a booster chosen for your skin. Performed by Kiki, a California licensed esthetician.',
    intro:
      'HydraFacial Syndeo performs three clinical actions simultaneously: enzymatic resurfacing lifts dead surface cells without abrasive scrubbing, patented vortex extraction vacuums mineral deposits and sebum from follicles at controlled pressure, and precision infusion floods skin with hydration and antioxidants while pores remain receptive. This is medical-grade extraction technology, not a spa facial with suction. <a href="/services/facial/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Facial clients</a> across the county book it as the foundation of a maintenance schedule, and for corrective plans it sits between stronger sessions to hold the result. The extractor is calibrated to San Diego\'s own water and climate: the municipal supply runs 280-320 parts per million of dissolved calcium and magnesium, which binds with sebum into deposits ordinary cleansing cannot remove. HydraFacial is the most forgiving corrective treatment available — safe for every Fitzpatrick skin type including melanin-rich skin, with no risk of post-inflammatory hyperpigmentation.',
    image: hydrafacial,
    imageAlt:
      'HydraFacial treatment in progress at KIAMO Skin San Diego — licensed esthetician performing professional facial treatment',
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
    note: 'San Diego\'s municipal water supply contains 280-320 parts per million (ppm) of dissolved minerals—primarily calcium and magnesium—making it among the hardest in California. These minerals bond with sebum (skin oil) and skincare products, forming calcium carbonate deposits that clog pores and create a residue standard cleansing cannot remove. For clients living two miles from the Pacific Ocean, this means dual exposure: hard water minerals indoors and salt spray plus coastal humidity outdoors. The HydraFacial Syndeo\'s patented Vortex-Fusion Technology extracts these mineral deposits directly from follicles using controlled spiral suction at 30-70 mmHg pressure—addressing what at-home cleansing misses. This is follicle-level extraction calibrated to San Diego\'s specific water and climate conditions.',
    membershipNote:
      'The HydraFacial is the treatment included in every membership tier, from $199 a month against $259 booked one visit at a time. Glow tier includes one HydraFacial monthly plus 10% off all products. Lux tier includes one HydraFacial monthly, one additional treatment annually, and 15% off products. Opulence tier includes one HydraFacial monthly, two additional treatments annually, and 20% off products. Membership clients book first and are never waitlisted.',
    membershipAnchor: 'Compare the three membership tiers',
    melaninNote:
      'HydraFacial is safe for all Fitzpatrick skin types (I-VI) because it uses no heat, no lasers, and no aggressive peeling agents. The exfoliating acids are at concentrations proven safe for melanin-rich skin, and the vortex extraction method does not cause the trauma that can trigger post-inflammatory hyperpigmentation (PIH). Booster selection matters: Britenol is the brightening booster used for dark marks, melasma, and PIH on Fitzpatrick IV-VI skin, containing alpha-arbutin and bearberry extract rather than hydroquinone, which can cause rebound pigmentation in darker skin tones.',
    hero: {
      eyebrow: "Syndeo Device · Custom Booster · LED Included",
      claim: "Medical-grade extraction with a booster chosen for your skin.",
      paragraph: "Enzymatic resurfacing, calibrated vortex extraction, and precision infusion of hydration and antioxidants — in one 45-minute appointment with no downtime. The booster is selected from the device’s skin analysis, and LED light therapy is included rather than sold as an add-on. $259 per session, or $249 for a first visit with the consultation.",
      trust: [
        { label: "HydraFacial Syndeo — AI skin analysis" },
        { label: "Safe for melanin-rich skin, no heat or laser" },
        { label: "LED light therapy included every visit" },
        { label: "No downtime — back to your day" },
      ],
    },
  },
  {
    slug: 'chemical-peel',
    name: 'LIRA Chemical Peels',
    serviceType: 'Chemical peel',
    category: 'Peels',
    title: 'Chemical Peels in San Diego | KIAMO Skin',
    description:
      'Chemical peels in San Diego for pigmentation and melasma in melanin-rich skin. LIRA Gentle Renewal $199, Advanced Peel $299. Request an appointment.',
    headline: 'Chemical Peels in San Diego — Brighten Without Damaging Skin',
    opener:
      'Professional peels selected for the skin tone in front of you, with the strength raised only as the barrier allows. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Pigmentation is the reason most people book, and it is also where the wrong treatment does lasting damage. Melanin-rich skin responds to trauma by producing more pigment, so the strength, the acid and the pacing all have to be selected deliberately. Lira\'s professional range is built for that kind of control. Clients from inland San Diego County book this treatment most often, where UV and melanin-rich skin demographics make melasma the county\'s most common pigmentation concern. Read more about <a href="/services/melasma-treatment/" class="border-b border-ink/40 hover:border-rose hover:text-rose">correcting melasma and post-inflammatory hyperpigmentation</a>, or explore KIAMO Skin\'s full approach to <a href="/services/corrective-skin-treatments/" class="border-b border-ink/40 hover:border-rose hover:text-rose">corrective skin treatments</a>.',
    image: liraPeel,
    imageAlt:
      'LIRA chemical peel application in progress at KIAMO Skin San Diego — licensed esthetician applying a professional peel for melanin-rich skin pigmentation',
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
    note: 'Peel strength is matched to your skin at consultation. The Gentle Renewal Peel refreshes and maintains; the Advanced Peel goes deeper for pigmentation and scarring. Pigmentation is treated as a series — most plans run every 4 to 6 weeks — with home care between visits. There is no single-session version of this.',
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
    hero: {
      eyebrow: "Gentle Renewal $199 · Advanced $299",
      claim: "Peels paced across a series, never escalated in one visit.",
      paragraph: "Pigmentation is where the wrong treatment does lasting damage, so strength is raised only as the barrier allows and each peel is layered and timed to your skin’s response that day. LIRA’s range is calibrated for deeper skin tones. Most clients see visible change across three to four sessions, six to eight for the full result.",
      trust: [
        { label: "Calibrated for melanin-rich skin" },
        { label: "Patch-tested and started gently" },
        { label: "Prices from $199 to $299" },
        { label: "Home prep included in the plan" },
      ],
    },
  },
  {
    slug: 'microneedling',
    name: 'Procell Microchanneling',
    serviceType: 'Microchanneling',
    alternateName: 'Microneedling San Diego',
    category: 'Advanced',
    title: 'Microneedling in San Diego — Procell | KIAMO Skin',
    description:
      'Microneedling in San Diego for melanin-rich skin. No RF heat. Acne scars, hyperpigmentation, texture. Procell microchanneling. Request an appointment.',
    headline: 'Procell Microchanneling in San Diego — Reduce Acne Scars and Texture',
    opener:
      'Controlled microchannels and a growth factor serum, with no RF heat at all. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Procell Therapies microchanneling is a skin resurfacing treatment that creates thousands of microscopic channels in the skin surface using a precision-engineered handpiece. Those channels trigger the skin\'s natural wound-healing response — collagen production, elastin remodeling, and controlled surface cell renewal. What separates Procell from conventional microneedling is what happens immediately after the channels are created. Procell\'s proprietary stem cytokine growth factor serums are applied directly into the open channels, communicating with skin cells to direct the repair process toward specific outcomes: collagen synthesis, pigment correction, and texture resurfacing. The result is faster recovery and more targeted correction than standard microneedling alone. Ideal candidates include those with acne scarring (ice pick, boxcar, and rolling scar types), post-inflammatory hyperpigmentation (PIH) — dark marks left after acne, injury, or trauma, uneven skin tone and diffuse sun damage, skin texture irregularities and enlarged pores, fine lines and mild skin laxity, and Fitzpatrick Type IV, V, and VI skin tones. For clients traveling from across the county, the series is planned as a block at consultation — scheduling all three sessions at once accounts for the drive and makes completion realistic.',
    image: procell,
    imageAlt:
      'Procell microchanneling treatment in progress at KIAMO Skin San Diego — licensed esthetician performing corrective microchanneling on a client',
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
          'Recommended for acne scarring, moderate to significant PIH, and textural concerns. Sessions spaced 4–6 weeks apart. The three-session series costs less than three single sessions. Growth factor serums and LED therapy included at each session.',
      },
    ],
    note: 'RF microneedling devices combine needle penetration with radiofrequency heat energy delivered through the tip. In lighter skin tones, the thermal effect stimulates collagen remodeling without significant risk. In melanin-rich skin — Fitzpatrick Type IV (olive to light brown), Type V (brown), and Type VI (deep brown to dark brown) — that heat activates melanocytes near the treatment zone, which can trigger post-inflammatory hyperpigmentation as a response to thermal trauma. Procell microchanneling creates mechanical channels without any thermal component. The inflammatory trigger is controlled and predictable. Combined with protocols designed for melanin-rich skin and growth factor serums that direct repair, the treatment corrects existing pigmentation without creating new dark marks. This is not a compromised version of microneedling. It is the correct selection for the patient population KIAMO Skin serves.',
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
    hero: {
      eyebrow: "No RF Heat · Growth Factor Serum · 3-Session Series",
      claim: "Scarring and texture, corrected without the heat that causes pigment.",
      paragraph: "Procell creates thousands of microscopic channels and delivers its stem cytokine serum straight into them, so the repair is directed rather than left to chance. There is no radiofrequency heat anywhere in the treatment — which is what makes it safe on melanin-rich skin, where thermal trauma is itself a pigment trigger. $475 a session, or $1,199 for a series of three.",
      trust: [
        { label: "No RF heat — no thermal pigment trigger" },
        { label: "Safe for Fitzpatrick types IV–VI" },
        { label: "LED and barrier protection included" },
        { label: "Series pricing: $1,199 for three" },
      ],
    },
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplane Facial',
    serviceType: 'Dermaplaning',
    category: 'Facials',
    title: 'Dermaplaning in San Diego — Safe for Dark Skin | KIAMO Skin',
    description:
      'Dermaplaning in San Diego at KIAMO Skin. Expert technique on melanin-rich and dark skin. $199 per session. By appointment.',
    headline: 'Dermaplaning in San Diego — Smoother Skin, No Downtime',
    opener:
      'Physical exfoliation that clears surface buildup, so everything layered after it works better. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Dermaplaning uses a sterile surgical blade to remove dead surface cells and the fine vellus hair that sits on top of them. Nothing is pulled from the follicle and nothing penetrates the skin. What changes is the surface: product reaches live tissue instead of sitting on debris, and makeup stops catching on texture. Clients book dermaplaning for events and before important occasions because there is zero downtime and the glow is immediate. Dermaplaning is one of several <a href="/services/corrective-skin-treatments/" class="border-b border-ink/40 hover:border-rose hover:text-rose">corrective skin treatments</a> that can be integrated into a broader skincare plan.',
    image: dermaplane,
    imageAlt:
      'Dermaplaning treatment in progress at KIAMO Skin San Diego — licensed esthetician performing precise blade exfoliation technique',
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
    hero: {
      eyebrow: "$199 · No Downtime · All Skin Tones",
      claim: "A cleared surface, so everything applied after it works.",
      paragraph: "A sterile surgical blade removes the dead surface layer and fine vellus hair in one pass, so serums reach live tissue instead of sitting on debris and makeup stops catching on texture. No downtime — the glow is immediate, which is why clients book it before events. Correct blade angle and pressure make it safe on darker skin tones.",
      trust: [
        { label: "Sterile single-use blade" },
        { label: "Safe for melanin-rich skin" },
        { label: "Zero downtime — immediate glow" },
        { label: "$199 as a full facial" },
      ],
    },
  },
  {
    slug: 'scalp-therapy',
    name: 'Keravive Scalp Therapy',
    serviceType: 'Scalp treatment',
    category: 'Scalp',
    title: 'Scalp Treatment in San Diego | KIAMO Skin',
    description:
      'Keravive scalp treatment in San Diego for dandruff, flaking, hair thinning and hard water buildup. $599. Request an appointment.',
    headline: 'Keravive Scalp Therapy in San Diego — Clear Flaking, Buildup, and Irritation',
    opener:
      'Clinical scalp therapy for buildup, flaking, and the hard water residue San Diego scalps collect. Performed by Kiki, a California licensed esthetician.',
    intro:
      'HydraFacial Keravive deeply cleanses, exfoliates, and hydrates the scalp while removing buildup that contributes to dryness, flaking, and irritation. The Keravive Peptide Complex nourishes sebaceous glands and supports a healthier environment for hair growth. In San Diego, hard water — averaging 16 grains per gallon — makes scalp buildup especially common. Coastal clients dealing with daily salt water exposure and inland clients facing wind and UV damage book Keravive for hard water mineral deposits that shampoo cannot clear. Every treatment includes a take-home peptide spray to continue supporting scalp health between visits.',
    image: scalp,
    imageAlt:
      'Licensed esthetician performing Keravive scalp therapy on a client at KIAMO Skin San Diego — clinical scalp treatment for buildup, flaking, and hair-thinning support',
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
    hero: {
      eyebrow: "Hard Water Buildup · Flaking · Hair Support",
      claim: "Your scalp treated as skin, not as an accessory.",
      paragraph: "Keravive cleanses, exfoliates and hydrates the scalp while clearing the buildup shampoo cannot reach, and a peptide complex supports the environment hair grows in. San Diego’s water runs 16 grains per gallon, so that buildup is the rule here, not the exception. $599 a session, or $1,499 for a series of three.",
      trust: [
        { label: "Hard water and mineral buildup cleared" },
        { label: "Peptide complex nourishes the scalp" },
        { label: "Take-home peptide spray included" },
        { label: "Series pricing: $1,499 for three" },
      ],
    },
  },
  {
    slug: 'dmk-enzyme-therapy',
    name: 'DMK Enzyme Therapy',
    serviceType: 'Enzyme therapy',
    category: 'Advanced',
    title: 'DMK Enzyme Therapy in San Diego | KIAMO Skin',
    description:
      'DMK enzyme therapy in San Diego. Enzymatic resurfacing that rebuilds a damaged barrier. Level 1 is $279; Level 2 and 3 at consultation.',
    headline: 'DMK Enzyme Therapy in San Diego — Restore Skin Function',
    opener:
      'Enzymatic resurfacing that rebuilds a damaged barrier instead of stripping a healthy one. Performed by Kiki, a California licensed esthetician.',
    intro:
      'DMK Enzyme Therapy is designed to restore healthy skin function rather than simply exfoliating the surface. By supporting the skin\'s natural processes, it helps strengthen the skin barrier while encouraging healthy circulation and lymphatic activity. It\'s especially beneficial for skin that feels over-exfoliated, sensitized, inflamed, or slow to heal—common states for coastal surfers and anyone whose barrier has been stripped by salt water, wind, or aggressive product use. This approach is part of KIAMO Skin\'s broader <a href="/services/corrective-skin-treatments/" class="border-b border-ink/40 hover:border-rose hover:text-rose">corrective skin treatment</a> philosophy, where treatment selection is based on current skin condition rather than following a fixed protocol.',
    image: enzyme,
    imageAlt:
      'DMK enzyme therapy treatment in progress at KIAMO Skin San Diego — licensed esthetician performing corrective enzyme therapy on a client',
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
    hero: {
      eyebrow: "Barrier Repair · Enzyme Masque · Level 1 $279",
      claim: "Rebuilds a compromised barrier instead of stripping a healthy one.",
      paragraph: "Enzymatic resurfacing that works with the skin’s own processes to restore barrier function, circulation and lymphatic activity — the right first move for skin that stings, reddens or has been stripped by a strong product. Levels 2 and 3 are prescribed only once Level 1 has prepared the skin. Level 1 is $279.",
      trust: [
        { label: "Level 1 from $279" },
        { label: "Customised to your skin that day" },
        { label: "Home-care routine prescribed" },
        { label: "Deeper levels follow, not precede" },
      ],
    },
  },
  {
    slug: 'acne-treatment',
    name: 'Acne Treatment',
    serviceType: 'Acne facial treatment',
    category: 'Facials',
    title: 'Acne Treatment in San Diego | KIAMO Skin',
    description:
      'Acne treatment in San Diego from KIAMO Skin. HydraFacial for breakouts, peels for dark marks, microchanneling for scars. Request an appointment.',
    headline: 'Acne Treatment in San Diego — Clear Breakouts, Fade the Marks',
    opener:
      'Corrective facials, peels for the marks they leave behind, and microchanneling for scarring. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Acne treatment at KIAMO Skin addresses three phases: active breakouts, congestion (blackheads and whiteheads), and post-acne concerns like hyperpigmentation and scarring. The treatment plan depends on what stage your skin is in. HydraFacial extracts congestion without manual pressure, DMK Enzyme Therapy rebuilds a compromised barrier that is keeping breakouts active, and chemical peels or microchanneling work through the marks and texture left behind. Every protocol is designed to clear acne without triggering post-inflammatory hyperpigmentation — the dark marks that last longer than the breakout itself. This multi-phase approach is part of KIAMO Skin\'s <a href="/services/corrective-skin-treatments/" class="border-b border-ink/40 hover:border-rose hover:text-rose">corrective skin treatment</a> philosophy.',
    image: acne,
    imageAlt:
      'Acne treatment in progress at KIAMO Skin San Diego — licensed esthetician performing HydraFacial extraction for congested acne-prone skin',
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
    hero: {
      eyebrow: "Breakouts · Congestion · Scarring",
      claim: "Clear the breakouts, fade the marks, soften the scarring.",
      paragraph: "Acne is three problems, and each needs a different instrument. HydraFacial clears congestion without the pressure that spreads inflammation, enzyme therapy rebuilds the barrier keeping breakouts active, and peels or microchanneling work through what they leave behind. Every protocol avoids triggering the dark marks that last longer than the breakout.",
      trust: [
        { label: "Three phases, three different treatments" },
        { label: "Priced from $199 to $475" },
        { label: "No dark marks left behind" },
        { label: "Dermatologist referral when needed" },
      ],
    },
  },
  {
    slug: 'hyperpigmentation-treatment',
    name: 'Hyperpigmentation Treatment',
    serviceType: 'Post-inflammatory hyperpigmentation treatment',
    category: 'Corrective',
    title: 'Hyperpigmentation Treatment in San Diego | KIAMO Skin',
    description:
      'Hyperpigmentation treatment in San Diego — dark marks after acne faded with a corrective plan, not a routine facial. Licensed esthetician, all skin tones.',
    headline: 'Hyperpigmentation Treatment in San Diego — Clear Post-Acne Marks',
    opener:
      'A series of gentle LIRA peels or Procell microchanneling, paired with daily SPF. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Post-inflammatory hyperpigmentation (PIH) is the most common pigmentation concern clients bring to KIAMO Skin. It is what the skin does in response to inflammation — acne, eczema, an ingrown hair, a nick while shaving, an over-aggressive peel somewhere else. The mark is melanin produced by the injury response, sitting in the surface and mid-layers of the skin. PIH is distinct from melasma (which is hormonal and light-driven) and from sun damage (which is UV-driven and tends to cluster on the highest-exposure areas). Each of those three conditions is treated differently, and choosing the wrong approach is the most common reason treatment fails. For PIH specifically, the right plan is a series of gentle Lira Chemical Peels or Procell Microchanneling, paired with strict daily SPF — see <a href="/services/chemical-peel/" class="border-b border-ink/40 hover:border-rose hover:text-rose">chemical peels</a>, <a href="/services/microneedling/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Procell Microchanneling</a>, and <a href="/melanin-rich-skin/" class="border-b border-ink/40 hover:border-rose hover:text-rose">melanin-rich skin expertise</a> for the protocol details.',
    image: hyperpigmentationTreatment,
    resultImage: pihResult,
    resultImageAlt:
      'Before and after hyperpigmentation treatment at KIAMO Skin, showing dark marks softened across the cheek and jawline',
    resultCaption:
      'A published case, photographed with written consent. Results vary from person to person.',
    imageAlt:
      'Hyperpigmentation treatment in progress at KIAMO Skin San Diego — licensed esthetician applying brightening serum for melanin-rich skin pigmentation correction',
    concerns: [
      'Dark marks left after acne clears',
      'Marks after eczema, psoriasis, or another inflammatory rash',
      'Ingrown hair marks on the face, neck, or body',
      'Shaving nicks that darkened and stayed',
      'Marks from an over-aggressive peel or laser done elsewhere',
      'Uneven tone across the face with no single cause',
    ],
    planMembers: [
      {
        name: 'LIRA Chemical Peels',
        description:
          'The standard first step. Strength is escalated across a series and the peel is selected for the skin tone, which is what keeps a correction from becoming a new mark.',
        href: '/services/chemical-peel/',
      },
      {
        name: 'Procell Microchanneling',
        description:
          'For marks that sit alongside texture or scarring. Works mechanically, with no heat or light — which matters on skin that reacts to both.',
        href: '/services/microneedling/',
      },
      {
        name: 'HydraFacial',
        description:
          'Cleansing, exfoliation, extraction, and hydration, with a brightening booster selected for the pigment. Usually the maintenance layer between corrections.',
        href: '/services/hydrafacial/',
      },
      {
        name: 'DMK Enzyme Therapy',
        description:
          'A different approach, centred on the condition and function of the skin. Considered when the barrier is compromised and a peel would be too much.',
        href: '/services/dmk-enzyme-therapy/',
      },
      {
        name: 'Dermaplaning',
        description:
          'Physical exfoliation that clears surface buildup and gives a smoother-feeling surface, which lets everything after it work better.',
        href: '/services/dermaplaning/',
      },
    ],
    steps: [
      {
        title: 'Identify which kind of mark it is',
        body: 'Post-inflammatory marks, melasma, and sun damage look alike and respond differently. Identifying which one it is comes before choosing anything to do about it — and it is the most common reason treatment fails.',
      },
      {
        title: 'Assess the condition of the skin',
        body: 'Pigmentation does not exist independently of the rest of the skin. Dehydration, congestion, irritation, and barrier disruption all change how the skin responds to treatment.',
      },
      {
        title: 'Correct, then hold it',
        body: 'An appropriate treatment is selected and spaced far enough apart for the skin to recover. Then daily SPF does the holding — because a new mark keeps arriving if the inflammation does.',
      },
    ],
    note: 'Effective PIH care is not about making dark marks disappear as quickly as possible — it is about removing the inflammation source first, then fading the marks in a way the barrier can sustain. For melanin-rich skin, treatment selection deserves additional consideration because the wrong treatment can create new pigmentation rather than correcting existing concerns.',
    melaninNote:
      'PIH is more common and more severe in Fitzpatrick types IV through VI. Melanin-rich skin produces pigment more readily in response to inflammation, and the marks run deeper and last longer. KIAMO Skin\'s protocols on melanin-rich skin are built around avoiding the trigger that caused PIH in the first place — the wrong peel at the wrong strength can turn one mark into three.',
    membershipNote:
      'PIH treatment runs across a series, which makes a monthly membership the practical way to stay on schedule. Membership treatments can be applied to peels or microchanneling by paying the difference.',
    membershipAnchor: 'Monthly membership options',
    hero: {
      eyebrow: "Post-Acne Marks · Melasma · Sun Damage",
      claim: "Dark marks faded without creating new ones.",
      paragraph: "Post-inflammatory hyperpigmentation is what the skin does in response to inflammation, so the inflammation has to be addressed first — otherwise the same marks return. The plan is a series of gentle peels or Procell microchanneling with strict daily SPF, matched to your Fitzpatrick type rather than a generic protocol.",
      trust: [
        { label: "Calibrated for every Fitzpatrick type" },
        { label: "SPF with iron oxides built into the plan" },
        { label: "Addresses the source, not just the mark" },
        { label: "Peels from $199, microchanneling $475" },
      ],
    },
  },
  {
    slug: 'melasma-treatment',
    name: 'Melasma Treatment',
    serviceType: 'Melasma treatment',
    category: 'Corrective',
    title: 'Melasma Treatment in San Diego | KIAMO Skin',
    description:
      'Melasma treatment in San Diego — a paced series of gentle peels, not one aggressive visit. Licensed esthetician, all skin tones. Request an appointment.',
    headline: 'Melasma Treatment in San Diego — Visible Results Without Triggering More',
    opener:
      'Gentle LIRA peels spaced four to six weeks apart, and daily SPF with iron oxides to hold the result. Performed by Kiki, a California licensed esthetician.',
    intro:
      'Melasma appears as brown or grey-brown patches across the cheeks, forehead, nose bridge, and upper lip. Hormonal change triggers it, then UV and heat sustain it — which is why one strong session can make it worse. So the work is in the pacing. Gentle first, correction layered on as the skin tolerates it, and the daily SPF that decides whether pigment stays faded. <a href="/services/chemical-peel/" class="border-b border-ink/40 hover:border-rose hover:text-rose">LIRA chemical peels</a> are the backbone of the plan, <a href="/services/microneedling/" class="border-b border-ink/40 hover:border-rose hover:text-rose">Procell microchanneling</a> is added where texture or scarring is part of the picture, and a <a href="/services/hydrafacial/" class="border-b border-ink/40 hover:border-rose hover:text-rose">HydraFacial with a brightening booster</a> holds the result between corrective sessions.',
    image: melasmaHero,
    resultImage: melasmaResult,
    resultImageAlt:
      'Before and after melasma treatment at KIAMO Skin, showing pigment across the cheeks, forehead, and upper lip softened across four sessions',
    resultCaption:
      'A published case, photographed with written consent. Results vary from person to person.',
    imageAlt:
      'Licensed esthetician performing a corrective facial treatment on melanin-rich skin at KIAMO Skin in San Diego',
    concerns: [
      'Brown or grey-brown patches across the cheeks, forehead, nose bridge, and upper lip',
      'Melasma that appeared with a hormonal change — pregnancy, birth control, menopause',
      'Pigment that deepens with heat as well as with sun exposure',
      'Marks that return within weeks of every treatment',
    ],
    planMembers: [
      {
        name: 'LIRA Chemical Peels',
        description:
          'The backbone of the plan. Strength escalates across a series rather than in one aggressive visit, and the peel is selected for the skin tone in front of you.',
        price: '$199–$299',
        href: '/services/chemical-peel/',
      },
      {
        name: 'Procell Microchanneling',
        description:
          'Adds mechanical collagen induction where texture or scarring is part of the picture. No heat and no light, which is why it suits skin that reacts to both.',
        price: '$475',
        href: '/services/microneedling/',
      },
      {
        name: 'HydraFacial with Brightening Booster',
        description:
          'Sits between corrective sessions to hold the result — gentle extraction, hydration, and a targeted booster for the pigment.',
        price: '$259',
        href: '/services/hydrafacial/',
      },
    ],
    steps: [
      {
        title: 'Identify the type and the depth',
        body: 'Melasma, post-inflammatory marks, and sun damage look alike and respond differently. The assessment establishes which one it is, and how deep it sits.',
      },
      {
        title: 'Pace the correction',
        body: 'Gentle LIRA peels, strength raised only as the barrier allows, spaced four to six weeks apart. Aggressive treatment makes melasma worse, not better.',
      },
      {
        title: 'Hold the result with daily SPF',
        body: 'Broad-spectrum SPF with iron oxides, every morning. Melasma is driven by hormones and sustained by UV — clearing it and stopping the trigger are two separate jobs.',
      },
    ],
    triggers: [
      'Hormonal changes — pregnancy, birth control, menopause',
      'Sun exposure, including the overcast days the marine layer makes look safe',
      'Heat — hot yoga, saunas, and beach walks in direct sun',
      'Certain medications and skincare ingredients',
      'Santa Ana wind events, which destabilise even controlled pigmentation',
      'The May Gray and June Gloom marine layer, which still passes UV through overcast mornings',
      'Hard-water mineral film, which disrupts the barrier and worsens the inflammation melasma lives in',
    ],
    note: 'Because the series is the point, many clients use the monthly facial membership at $199 to keep the plan consistent and affordable. Membership treatments can be applied toward peels, microchanneling, or HydraFacials.',
    membershipNote:
      'Melasma needs a series rather than a single session, so a monthly membership is usually the cheaper way to run one.',
    membershipAnchor: 'Monthly facial memberships in San Diego',
    melaninNote:
      'Melasma is most common in deeper skin tones, and treating it safely there requires training in exactly the cases where the margin for error is smallest.',
    guide: {
      lead: 'What the difference is between melasma, PIH and sun damage',
      label: 'How to tell post-inflammatory marks, melasma and sun damage apart',
      href: '/journal/three-kinds-of-dark-mark/',
    },
    hero: {
      eyebrow: "Hormonal Pigment · Peels · Daily SPF",
      claim: "A paced series that clears pigment and stops it returning.",
      paragraph: "Melasma is driven by hormones and sustained by UV, so it is managed rather than cured — which is why one aggressive session makes it worse. Gentle peels spaced four to six weeks apart, with Procell added for texture and daily SPF with iron oxides to hold the result. Most clients see change after three to four sessions.",
      trust: [
        { label: "Safe for melanin-rich skin" },
        { label: "Paced, never escalated in one visit" },
        { label: "SPF with iron oxides in the plan" },
        { label: "Change typically after 3–4 sessions" },
      ],
    },
  },
  {
    slug: 'corrective-skin-treatments',
    name: 'Corrective Skin Treatments',
    serviceType: 'Corrective skin therapy',
    category: 'Corrective',
    title: 'Corrective Skin Treatments in San Diego | KIAMO Skin',
    description:
      'Corrective skin treatments in San Diego — a plan built around your skin, not a trend. Peels, microchanneling, enzyme therapy. All skin tones.',
    headline: 'Corrective Skin Treatments in San Diego — Built Around Your Skin',
    opener:
      'Every treatment is selected for what your skin is doing, and paced to what it can tolerate. Performed by Kiki, a California licensed esthetician.',
    intro:
      'KIAMO Skin provides corrective skin treatments designed to address specific skin concerns while considering the condition, history, and needs of your skin. Rather than treating every client or concern exactly the same way, the goal is to understand what is happening beneath the surface and select treatments that make sense for your current skin health. Corrective skincare may include treatments such as HydraFacial, DMK Enzyme Therapy, Procell Microchanneling, Lira Chemical Peels, Dermaplaning, and Keravive Scalp Therapy, depending on the concern being addressed.',
    image: correctiveHero,
    resultImage: correctiveSkin,
    resultImageAlt:
      'Corrective skin consultation at KIAMO Skin San Diego — licensed esthetician examining client skin before selecting a treatment',
    imageAlt:
      'Licensed esthetician performing a corrective skin treatment on melanin-rich skin at KIAMO Skin in San Diego',
    concerns: [
      'Hyperpigmentation and uneven skin tone',
      'Melasma and persistent pigmentation',
      'Acne and congestion',
      'Post-inflammatory marks',
      'Uneven skin texture',
      'Dull or rough-looking skin',
      'Dehydration and a compromised skin barrier',
      'Scalp buildup and scalp-health concerns',
    ],
    planMembers: [
      {
        name: 'HydraFacial',
        description:
          'Cleansing, exfoliation, extraction, and hydration for congested, dull, or dehydrated skin. The foundation most corrective plans are built on.',
        href: '/services/hydrafacial/',
      },
      {
        name: 'DMK Enzyme Therapy',
        description:
          'Works on skin barrier function and overall skin health. Considered when the goal is supporting healthier skin rather than a surface refresh.',
        href: '/services/dmk-enzyme-therapy/',
      },
      {
        name: 'Procell Microchanneling',
        description:
          'Targeted treatment for texture and the appearance of acne scarring. Suitability is determined by individual skin condition and goals.',
        href: '/services/microneedling/',
      },
      {
        name: 'LIRA Chemical Peels',
        description:
          'Professional exfoliation for uneven tone, texture, and dullness. Peel selection depends on the skin and the treatment objective.',
        href: '/services/chemical-peel/',
      },
      {
        name: 'Dermaplaning',
        description:
          'Physical exfoliation that removes surface buildup and creates a smoother-feeling surface. Often folded into a broader strategy.',
        href: '/services/dermaplaning/',
      },
      {
        name: 'Keravive Scalp Therapy',
        description:
          'Scalp cleansing and care for scalp-related concerns. Corrective care does not stop at the jawline.',
        href: '/services/scalp-therapy/',
      },
    ],
    steps: [
      {
        title: 'Identify the primary concern',
        body: 'What you want to improve — pigmentation, acne, texture, congestion, dehydration, or another concern — comes first, because the order of everything after it follows from it.',
      },
      {
        title: 'Assess the current condition of the skin',
        body: 'A treatment that suits one person may be wrong for another, particularly when the skin is irritated, sensitized, or barrier-compromised. This step is what keeps a plan from becoming trial and error.',
      },
      {
        title: 'Select the treatment',
        body: 'HydraFacial, DMK enzyme therapy, Procell microchanneling, LIRA peels, or dermaplaning — chosen for the concern and the skin, not because a treatment is trending or because more procedures seem better.',
      },
      {
        title: 'Adjust as the skin changes',
        body: 'Skin changes over time. The plan is adjusted as it responds, and as a different concern becomes the priority.',
      },
    ],
    pricing: [
      {
        label: 'Treatment selection varies by concern',
        price: PRICE_ON_CONSULTATION,
        description:
          'Corrective treatment pricing depends on which modality is selected. HydraFacial, chemical peels, microchanneling, DMK enzyme therapy, and dermaplaning each have different pricing structures based on the concern being addressed.',
      },
    ],
    note: 'A corrective approach should begin with understanding the concern rather than immediately choosing a treatment. For clients with melanin-rich skin, treatment selection deserves additional consideration because pigmentation can be a significant concern.',
    melaninNote:
      'KIAMO Skin\'s treatment philosophy centers on personalized corrective care, with particular attention to melanin-rich skin and concerns commonly associated with pigmentation and uneven tone.',
    membershipNote:
      'Because corrective care is often about consistency over time, a monthly membership can make ongoing treatment more accessible.',
    membershipAnchor: 'Explore monthly facial memberships',
    hero: {
      eyebrow: "Pigmentation · Acne · Barrier Repair",
      claim: "A plan built around your skin, not a package.",
      paragraph: "The first visit is an assessment: what you want to change, and what your skin can currently tolerate. From there the modality is chosen — HydraFacial, peels, microchanneling, enzyme therapy or scalp work — and paced to how your skin responds. Because corrective work runs across a series, the plan is mapped before you commit.",
      trust: [
        { label: "Assessment before any treatment" },
        { label: "Every price published" },
        { label: "Paced to your skin, not a fixed protocol" },
        { label: "One practitioner across the series" },
      ],
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
