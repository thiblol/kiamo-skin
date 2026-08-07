import type { ImageMetadata } from 'astro';
import type { Faq } from './faqs';
import uv from '../assets/journal-uv.jpg';
import water from '../assets/journal-water.jpg';
import pigmentation from '../assets/journal-pigmentation.jpg';
import microchanneling from '../assets/journal-microchanneling.jpg';

export interface Article {
  slug: string;
  /** H1. */
  headline: string;
  title: string;
  description: string;
  /** Editorial standfirst under the H1. */
  standfirst: string;
  readingTime: string;
  /** ISO date. Taken from git history, never invented — Article schema needs it. */
  datePublished: string;
  dateModified: string;
  image: ImageMetadata;
  imageAlt: string;
  /**
   * Simple ordered blocks — no CMS needed.
   *
   * `answer` renders the two-sentence direct answer that opens a section. It is
   * the block AI Overviews and featured snippets lift, so it always states the
   * whole answer before any nuance follows in the paragraphs beneath it.
   *
   * `p` and `answer` are rendered with set:html so citations can sit inline on
   * the claim they support. A detached source list at the foot of the page does
   * not win citations; a link next to the sentence does. Authored content only.
   */
  body: (
    | { h2: string }
    | { h3: string }
    | { p: string }
    | { ul: string[] }
    | { answer: string }
    | { table: { caption: string; head: string[]; rows: string[][] } }
  )[];
  /** Questions come from live People Also Ask data, never invented. */
  faqs?: Faq[];
  /**
   * Heading above the FAQ block. Defaults to the pigmentation wording the first
   * article shipped with, so an article on another subject does not render an
   * H2 about hyperpigmentation over questions that are not about it.
   */
  faqHeading?: string;
  /** Internal link out at the end of the piece. */
  cta: { label: string; href: string };
}

export const articles: Article[] = [
  {
    slug: 'three-kinds-of-dark-mark',
    headline: 'Three kinds of dark mark, and why one facial cannot fix all three',
    title: 'Facials for Hyperpigmentation: Which Kind Do You Have?',
    description:
      'Post-inflammatory marks, melasma and sun damage look alike and respond differently. How to tell them apart, and what a facial can honestly do.',
    standfirst:
      'Choosing a facial for hyperpigmentation before you know which kind you have is the most common reason treatment fails — and occasionally the reason it backfires.',
    readingTime: '9 min read',
    datePublished: '2026-08-03',
    dateModified: '2026-08-03',
    image: pigmentation,
    imageAlt:
      'Portrait in soft window light showing natural variation in tone across the cheek',
    body: [
      {
        p: 'Almost everyone who books here for pigmentation arrives with a product that did not work. Usually a brightening serum, sometimes a hydroquinone cream bought without guidance, occasionally the aftermath of a peel somewhere else that left the marks darker than before. The product is rarely the problem. The problem is that three different conditions produce brown patches on a face, they look similar enough to confuse, and the treatment that clears one can visibly worsen another.',
      },
      {
        p: 'So before choosing a treatment, it is worth working out which one you actually have.',
      },

      { h2: 'What are the three kinds of hyperpigmentation?' },
      {
        answer:
          'The three most common are post-inflammatory hyperpigmentation, which is a mark left behind after a spot or an injury; melasma, which is a hormonal and light-driven pattern of larger symmetrical patches; and sun damage, which is scattered flat spots in the places light hits most. They differ in what triggers them, how deep the pigment sits, and how much a facial can realistically change.',
      },
      {
        table: {
          caption: 'Telling the three apart',
          head: ['', 'Post-inflammatory', 'Melasma', 'Sun damage'],
          rows: [
            [
              'Shape',
              'Individual marks where a spot was',
              'Larger patches, roughly symmetrical on both sides',
              'Scattered separate spots',
            ],
            [
              'Where',
              'Anywhere skin was inflamed or picked',
              'Cheeks, forehead, upper lip, jawline',
              'Forehead, cheekbones, nose, the driving-side temple',
            ],
            [
              'Triggered by',
              'Acne, ingrown hairs, eczema, a scratch, a burn',
              'Hormones plus UV, visible light and heat',
              'Cumulative sun exposure over years',
            ],
            [
              'Behaviour',
              'Fades on its own timeline once inflammation stops',
              'Recurs. Managed rather than cured',
              'Stays until treated',
            ],
            [
              'Responds well to resurfacing',
              'Sometimes. Treat the cause first',
              'Cautiously. Aggressive treatment can worsen it',
              'Yes. This is the one that responds best',
            ],
          ],
        },
      },
      {
        p: 'If more than one row describes your face, that is normal. Mixed presentations are common, which is exactly why a single treatment applied to everything tends to disappoint.',
      },

      { h2: 'How do you know if it is post-inflammatory hyperpigmentation?' },
      {
        answer:
          'Post-inflammatory hyperpigmentation is a flat brown or grey mark sitting exactly where a spot, ingrown hair or scratch used to be. If you can trace each mark back to something that was once inflamed, that is what it is.',
      },
      {
        p: 'This is the most common form in melanin-rich skin by a wide margin. In one study cited in the <a href="https://jcadonline.com/postinflammatory-hyperpigmentation-a-review-of-the-epidemiology-clinical-features-and-treatment-options-in-skin-of-color/" rel="noopener" target="_blank">Journal of Clinical and Aesthetic Dermatology review of PIH in skin of color</a>, 65.3% of African-American patients with acne developed post-inflammatory marks, against 52.7% of Hispanic and 47.4% of Asian patients. The mechanism is not mysterious: inflammation signals pigment cells to overproduce, and the more active those cells are to begin with, the more pigment gets left behind.',
      },
      {
        p: 'Depth decides the timeline. The same review notes that epidermal pigment — the tan to dark brown kind — may take months to years to resolve without treatment, while deeper dermal pigment, which reads blue-grey, may be permanent or resolve only over a protracted period. The American Academy of Dermatology puts a number on the shallower version: a spot a few shades darker than your natural skin tone <a href="https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots" rel="noopener" target="_blank">usually fades within 6 to 12 months</a>, and fading can take years when the colour lies deep.',
      },
      {
        p: 'The important consequence: if acne is still active, treating the marks is treating the symptom. Every new spot deposits a new mark. Clearing the acne comes first, and here that usually means barrier and congestion work rather than anything aggressive.',
      },

      { h2: 'How is melasma different from other hyperpigmentation?' },
      {
        answer:
          'Melasma appears as larger patches with soft edges, usually roughly mirrored on both sides of the face, and it is driven by hormones together with light and heat rather than by a single injury. It is the one form that is managed long-term rather than cured, and it is the one most likely to worsen if treated too aggressively.',
      },
      {
        p: 'The clinical literature is direct about this. <a href="https://www.ncbi.nlm.nih.gov/books/NBK459271/" rel="noopener" target="_blank">StatPearls describes melasma</a> as "a chronic, relapsing pigmentary disorder" best understood as "chronic disease control rather than cure", noting that improvements are "frequently transient in the absence of sustained photoprotection and maintenance therapy". Anyone promising to erase melasma permanently is describing something the evidence does not support.',
      },
      {
        p: 'The part most people have never been told is that visible light matters, not only UV. StatPearls notes that visible light, particularly short-wavelength blue light, "has emerged as a clinically significant contributor, especially in individuals with darker skin phototypes", and that the pigmentation it induces "may be more intense and longer-lasting than UV-induced pigmentation". A clear sunscreen, however high the SPF, does very little about visible light.',
      },
      {
        p: 'This is where tinted sunscreen stops being a cosmetic preference. In a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12475913/" rel="noopener" target="_blank">randomised investigator-blinded trial of 42 women with melasma</a> applying sunscreen twice daily across five months of summer, both a tinted iron-oxide formula and an untinted one with matched UV protection prevented sun-induced darkening. But only the tinted group significantly reduced the colour gap between the melasma patches and the surrounding skin. The AAD gives the same advice in plainer terms: <a href="https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots" rel="noopener" target="_blank">use tinted sunscreen with iron oxide</a>, because iron oxide protects against visible light.',
      },

      { h2: 'Why does melanin-rich skin need a different approach?' },
      {
        answer:
          'Melanin-rich skin produces pigment as its response to injury, so any treatment aggressive enough to inflame the skin can create the exact problem it was meant to solve. The treatment plan has to be slower and gentler than the one used on lighter skin, not because it is more fragile, but because its repair response is more pigmenting.',
      },
      {
        p: 'This is the mechanism behind every story that starts "I had a peel once and it made my dark spots worse". It is also measurable. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11514325/" rel="noopener" target="_blank">systematic review of PIH treatment in skin of colour</a> found that chemical peels accounted for 20% of trauma-induced PIH cases in its dataset, and that after two weeks of salicylic acid peels, 40% of patients showed new hyperpigmentation. The same review concluded that peels "should not be routinely recommended as a first-line treatment in this demographic but may have merit in refractory cases".',
      },
      {
        p: 'That finding is worth sitting with, because it cuts against how pigmentation is usually sold. It does not mean peels have no place. It means the sequence matters: the review lists risk mitigation as "pre- or posttreatment regimens, starting with lower concentrations, and emphasizing sun protection" — which is a description of a prepared, escalating series rather than one strong session.',
      },
      {
        p: 'It is also why <a href="/treatments/lira-peels/">peels here are run as a series with home prep between visits</a>, why strength escalates across the series rather than within a single appointment, and why the first appointment is often spent on preparation rather than on acid.',
      },

      { h2: 'What does a facial for hyperpigmentation actually do?' },
      {
        answer:
          'A professional facial can accelerate the fading of pigment that has already formed, and can improve the surface texture and barrier function that make marks look worse. It cannot stop new pigment forming, which is why daily light protection does more of the work than any treatment in the room.',
      },
      {
        p: 'Set expectations against a genuinely sobering statistic. In that same systematic review, untreated patients showed 62% partial pigment reduction on their own, and treated patients using peels showed 67%. The authors are careful to note that apparent gains may partly reflect spontaneous fading. Professional treatment is worth having — but it is an accelerant applied to a process that is already slow, not a switch.',
      },
      {
        p: 'What the treatments do, honestly stated:',
      },
      {
        ul: [
          '<a href="/treatments/dmk-enzyme-therapy/">Enzyme therapy</a> works on barrier function and circulation. Most useful where inflammation and congestion are still generating new marks.',
          '<a href="/treatments/hydrafacial/">HydraFacial</a> cleanses, exfoliates and hydrates in one pass. Good maintenance and good preparation; not a corrective pigment treatment on its own.',
          '<a href="/treatments/lira-peels/">Lira peels</a> are the corrective option for pigmentation, run as a prepared series at escalating strength rather than as a single strong session.',
          '<a href="/treatments/procell-microchanneling/">Procell microchanneling</a> works without heat or light, which matters here because heat is itself a pigment trigger in melanin-rich skin. <a href="/journal/microneedling-on-dark-skin-san-diego/">Better suited to texture and scarring than to melasma</a>.',
        ],
      },
      {
        p: 'Notice what is absent. No lasers, no IPL, no prescriptions — this is an esthetician studio, not a medical practice. For dermal melasma or anything needing prescription-strength intervention, a dermatologist is the right referral, and saying so is more useful than selling a series that will not reach the depth involved.',
      },

      { h2: 'Does San Diego make pigmentation harder to treat?' },
      {
        answer:
          'Yes, in one specific and under-appreciated way: the overcast mornings feel like sun protection and are not. Cloud cover removes the warmth that people use to judge risk while letting a large share of ultraviolet through.',
      },
      {
        p: 'McGill University\'s Office for Science and Society notes that on an overcast day <a href="https://www.mcgill.ca/oss/article/medical-student-contributors/cloudy-chance-sunburn" rel="noopener" target="_blank">up to 80% of the sun\'s UV rays can still reach your skin</a>, and that people "mistakenly associate UV exposure with temperature and cloud cover" — which produces more sunburn on cool, grey days, not fewer. UVA in particular accounts for 90–99% of the UV reaching the ground and is the fraction least affected by cloud.',
      },
      {
        p: 'May Gray and June Gloom therefore arrive as a pigmentation problem dressed as weather. The sky goes white, the sunscreen comes off the counter, and six weeks of careful correction quietly reverses. Add the visible-light component that drives melasma and a bright overcast morning supplies almost everything pigment cells respond to, while feeling like none of it.',
      },
      {
        p: 'Car windows are the other local blind spot. Glass filters UVB well and UVA poorly, so a daily commute is meaningful exposure on the driving side of the face. If your pigmentation is noticeably worse on one side, that is usually the explanation.',
      },
      {
        p: 'The <a href="/journal/june-gloom-is-not-sun-protection/">longer piece on the marine layer</a> covers this in more detail.',
      },

      { h2: 'What should you do first?' },
      {
        answer:
          'Start by identifying which kind of mark you have, because that decides everything after it. If acne is still active, treat that first; if the pattern is symmetrical and hormonal, build the plan around light protection before booking any resurfacing.',
      },
      {
        p: 'A reasonable order of operations, whether or not you ever book a treatment:',
      },
      {
        ul: [
          'Work out which of the three you have, using the table above. Bring the answer to any consultation.',
          'If spots are still forming, treat the acne before treating the marks.',
          'Wear broad-spectrum SPF 30 or higher every day, and use enough of it — roughly two finger-lengths for face and neck.',
          'If the pattern looks like melasma, make it a tinted sunscreen with iron oxides.',
          'Treat a commute as sun exposure.',
          'Expect months, not weeks. Anything promising faster is describing a different condition than the one you have.',
        ],
      },
      {
        p: 'None of that is dramatic, and that is the point. The treatments accelerate a process; the daily protection decides whether the result holds.',
      },
    ],
    faqs: [
      {
        question: 'What kind of facial is best for hyperpigmentation?',
        answer:
          'It depends on which kind of pigmentation you have. Marks left behind by acne respond best once the acne itself is under control, sun damage responds best to a prepared series of peels, and melasma is managed with gentle treatment plus daily protection against UV and visible light rather than with aggressive resurfacing. A consultation exists to make that distinction before anything is applied.',
      },
      {
        question: 'Can a facial remove hyperpigmentation completely?',
        answer:
          'A facial can accelerate fading and improve the texture and barrier function that make marks more visible, but no facial removes pigmentation permanently on its own. Melasma in particular is a relapsing condition that is managed rather than cured, and new pigment forms whenever the skin is inflamed or exposed to unprotected light.',
      },
      {
        question: 'Is a chemical peel safe on Black or brown skin?',
        answer:
          'Superficial peels can be used safely on melanin-rich skin when the strength is matched to the skin and the skin is prepared beforehand, but the risk of causing further pigmentation is real and documented. That is why peels here are run as a prepared series at escalating strength rather than as a single strong session, and why the first visit is often spent on preparation.',
      },
      {
        question: 'How long does hyperpigmentation take to fade?',
        answer:
          'According to the American Academy of Dermatology, a spot a few shades darker than your natural skin tone usually fades within 6 to 12 months, while pigment that sits deeper in the skin can take years. Treatment can speed that up, but the honest unit of measurement is months rather than weeks.',
      },
      {
        question: 'What fades hyperpigmentation fastest?',
        answer:
          'Consistent daily sun protection does more than any single treatment, because it stops new pigment forming while existing pigment fades. Professional treatment accelerates the fading of pigment that has already formed, so the fastest realistic route is a prepared series combined with daily broad-spectrum SPF, tinted with iron oxides if the pattern is melasma.',
      },
    ],
    cta: { label: 'See peels for pigmentation', href: '/treatments/lira-peels/' },
  },
  {
    slug: 'june-gloom-is-not-sun-protection',
    headline: 'June gloom is not sun protection',
    title: 'June Gloom Is Not Sun Protection | KIAMO Skin San Diego',
    description:
      'San Diego’s marine layer hides UV, it does not block it. Why overcast mornings are the most common cause of pigmentation we treat, and what to do about it.',
    standfirst:
      'The marine layer is the single most expensive misunderstanding in San Diego skincare. It looks like cover. It is not cover.',
    readingTime: '4 min read',
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    image: uv,
    imageAlt: 'Overcast San Diego coastline under a bright marine layer',
    body: [
      {
        p: 'Every May and June, the same conversation happens in the treatment room. Someone has been diligent all winter, their pigmentation has visibly lifted, and then it comes back over a few grey weeks. The assumption is that something in the routine stopped working. Almost always, what actually happened is that the sunscreen came off the counter because the sky went white.',
      },
      { h2: 'What the marine layer actually does' },
      {
        p: 'Cloud cover scatters visible light, which is why an overcast morning feels dim and cool. Ultraviolet radiation behaves differently. UVA in particular passes through thin cloud with very little loss, and the UV index across San Diego regularly sits at 8 to 10 through late spring and summer — including on mornings when it never feels bright. The light your eyes use to judge risk and the light your skin responds to are not the same light.',
      },
      {
        p: 'That gap matters more the more melanin you have. Pigment cells respond to UVA and to heat as well as to UVB, and in melanin-rich skin they respond enthusiastically. Melasma in particular is driven by a combination of hormones, heat and UVA — which is exactly the combination a mild, overcast San Diego day supplies without ever announcing itself.',
      },
      { h2: 'Why this undoes treatment specifically' },
      {
        p: 'Any corrective work on pigmentation — peels, microchanneling, brightening protocols — briefly makes the skin more reactive while it repairs. Ask that skin to also handle unprotected UVA exposure and you get rebound pigmentation, often darker than what you started with. This is the mechanism behind most of the stories that begin "I had a peel once and it made my dark spots worse."',
      },
      {
        p: 'It is also why pigmentation is treated here as a series with home care between visits, rather than as a single dramatic session. The treatment lifts the pigment. The sunscreen is what decides whether it stays lifted.',
      },
      { h2: 'What to do instead' },
      {
        ul: [
          'Apply broad-spectrum SPF 30 or higher every morning, regardless of what the sky is doing — make it part of getting dressed, not a weather decision.',
          'Use enough. Roughly two finger-lengths for the face and neck. Most people apply a third of what they need and get a third of the protection.',
          'Reapply if you are outdoors, and treat a car commute as outdoors — window glass filters UVB well and UVA poorly.',
          'Add a tinted formula if you are treating melasma. Iron oxides block visible light, which contributes to pigmentation in a way clear sunscreens do not address.',
          'Do not stop in winter. San Diego’s UV index does not drop to zero in December.',
        ],
      },
      {
        p: 'None of this is exciting, and that is rather the point. The most effective step in a pigmentation plan is the one you repeat two hundred times a year without thinking about it.',
      },
      {
        p: 'Which step matters most depends on what kind of pigmentation you are treating — <a href="/journal/three-kinds-of-dark-mark/">post-inflammatory marks, melasma and sun damage</a> respond to quite different things.',
      },
    ],
    cta: { label: 'See peels for pigmentation', href: '/treatments/lira-peels/' },
  },
  {
    slug: 'san-diego-hard-water-and-your-scalp',
    headline: 'San Diego hard water and your scalp',
    title: 'Hard Water and Your Scalp in San Diego | KIAMO Skin',
    description:
      'San Diego tap water runs around 16 grains per gallon. What that mineral load does to your scalp, and why flaking and buildup are so common locally.',
    standfirst:
      'If your scalp flakes, itches, or feels coated no matter what shampoo you buy, the shampoo may not be the variable worth changing.',
    readingTime: '4 min read',
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    image: water,
    imageAlt: 'Water falling over a hand, lit from the side',
    body: [
      {
        p: 'San Diego imports most of its water, and it arrives hard. Depending on the season and the source, local supply runs in the region of 16 grains per gallon — comfortably in the "hard" band, and high enough that the effects are visible on glassware, on fixtures, and on you.',
      },
      { h2: 'What hardness actually means' },
      {
        p: 'Hard water carries dissolved calcium and magnesium. Those minerals react with the surfactants in shampoo and with the oils on your skin to form an insoluble residue — the same film that leaves spots on a clean glass. On the scalp it does not rinse away cleanly. It layers.',
      },
      {
        p: 'Over weeks that film builds at the follicle opening alongside sebum and dead skin. The scalp responds the way any occluded skin does: it flakes, it itches, and its barrier stops holding water properly. Hair coming through that environment picks up the same residue, which is why it can feel simultaneously dry and heavy, and why product suddenly seems to stop working.',
      },
      { h2: 'Why this gets mistaken for dandruff' },
      {
        p: 'Flaking has several possible causes, and mineral buildup with barrier dryness looks a great deal like seborrheic dermatitis from the outside. The usual response is an anti-dandruff shampoo, which is formulated to control yeast rather than dissolve mineral residue. Sometimes it helps a little, by stripping. Often it makes a dry scalp drier, and the flaking returns within a fortnight.',
      },
      {
        p: 'The tell is texture. Buildup feels like a coating that returns a day or two after washing, usually with the scalp tight rather than inflamed. That is a cleansing and hydration problem, not a fungal one.',
      },
      { h2: 'What actually helps' },
      {
        ul: [
          'Clarify deliberately rather than constantly — a chelating or clarifying wash every one to two weeks removes mineral residue that daily shampoo leaves behind.',
          'Hydrate the scalp itself, not just the hair. Leave-on scalp serums reach skin that conditioner is designed to avoid.',
          'Consider a shower filter. It will not soften water fully, but it reduces the load.',
          'Do not scratch flakes off. That damages the barrier and starts the cycle again.',
          'Treat the scalp properly if it has been neglected for years. A professional treatment resets the surface in a way home washing cannot.',
        ],
      },
      {
        p: 'That last point is what HydraFacial Keravive is for: it cleanses, exfoliates and hydrates the scalp itself, section by section, then sends you home with the spray that keeps the result. In a city with water this hard, scalp care is not a luxury add-on. It is maintenance.',
      },
    ],
    cta: { label: 'See Keravive scalp therapy', href: '/treatments/keravive-scalp/' },
  },
  {
    slug: 'microneedling-on-dark-skin-san-diego',
    headline: 'Microneedling on dark skin, and why depth decides the outcome',
    title: 'Microneedling on Dark Skin in San Diego: Is It Safe?',
    description:
      'What the evidence says about needling melanin-rich skin, why depth decides the outcome, and the microchanneling offered instead in Mission Hills.',
    standfirst:
      'The question is not really whether needling works on melanin-rich skin. It is whether the person holding the device has set the depth for the skin in front of them.',
    readingTime: '9 min read',
    datePublished: '2026-08-07',
    dateModified: '2026-08-07',
    image: microchanneling,
    imageAlt:
      'Seated portrait beside a window in warm daylight, bare skin showing its natural texture and tone',
    body: [
      {
        p: 'Anyone researching microneedling on dark skin has usually been told two contradictory things: that it is the safest resurfacing option for melanin-rich skin, and that it will leave the marks darker than before. Both claims come from somewhere real. The published evidence does favour needling over heat-based resurfacing on deeper skin tones, and the darkening people describe afterwards is documented, common, and usually temporary. What separates those two outcomes is mostly depth, and who is deciding it.',
      },
      {
        p: 'This is written for people considering corrective work in San Diego. It also states plainly, early, why the treatment offered at this studio in Mission Hills is not a needle pen.',
      },

      { h2: 'Is microneedling safe on dark skin?' },
      {
        answer:
          'The published evidence is cautiously in favour. A review in the Journal of the American Academy of Dermatology concluded that microneedling may offer a more advantageous safety profile in Fitzpatrick skin types IV to VI than conventional resurfacing, largely because it does not rely on heat or acid to injure the skin.',
      },
      {
        p: 'That 2016 <a href="https://pubmed.ncbi.nlm.nih.gov/26549251/" rel="noopener" target="_blank">review of microneedling in skin of color</a> is specific about what it compares against: dermabrasion, chemical peels and laser therapy. Those are described as effective but carrying prolonged recovery and "a higher risk of dyspigmentation and scarring, and unsatisfactory clinical outcomes". Measured against that, needling looked better. The authors listed scarring, melasma, melanosis, skin rejuvenation, acne vulgaris and primary hyperhidrosis as conditions where it showed benefit in this population.',
      },
      {
        p: 'Read the hedge, though. The phrase is "may offer", not "offers", and the paper reviews existing literature rather than reporting a trial. That caution is warranted and it matters more than the headline does.',
      },

      { h2: 'Why does skin get darker after microneedling?' },
      {
        answer:
          'Most of the time it is transient darkening while the skin heals rather than lasting post-inflammatory hyperpigmentation. In one melasma trial, 60% of participants reported temporary darkening that lasted a median of five and a half days. Lasting pigment change tends to follow treatment that went deeper than the skin required, because melanin-rich skin answers injury by producing more pigment.',
      },
      {
        p: 'A 2025 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12456936/" rel="noopener" target="_blank">systematic review of microneedling across fifteen randomised trials</a> describes a "low incidence of adverse effects such as post-inflammatory hyperpigmentation", and says this is what makes the technique "suitable for darker skin types". Its own tables are more interesting than that summary, because they show how far the number moves once the protocol changes.',
      },
      {
        table: {
          caption: 'Reported pigmentation rates move with the protocol, not with skin tone alone',
          head: ['Setting', 'Reported rate', 'Also noted'],
          rows: [
            [
              'Acne, radiofrequency needling against light therapy (types III–IV)',
              '10% against 42%',
              'All resolved within three to six months',
            ],
            [
              'Melasma on the face (types II–V)',
              '60% temporary darkening',
              'Median of 5.5 days',
            ],
            [
              'Vitiligo, needling with and without 5-fluorouracil',
              '48% against 26%',
              'Pain reported by roughly 80%',
            ],
            [
              'Underarm sweating, needling in the axilla',
              '44%',
              'Redness in 68%',
            ],
          ],
        },
      },
      {
        p: 'The pattern is not that melanin-rich skin reacts badly to needling. It is that one device produces very different pigment outcomes depending on depth, energy, body site and whatever is applied alongside it. The same review is candid that its participants skewed to Fitzpatrick types III and IV, so evidence covering the deepest skin tones is still thin.',
      },
      {
        p: '[YOUR EXPERIENCE HERE — the skill will not invent this]',
      },

      { h2: 'Who should avoid microneedling?' },
      {
        answer:
          'Anyone with active acne, an inflamed or compromised barrier, an active skin infection, or a history of keloid scarring should have that addressed before needling is considered at all. On melanin-rich skin the more common question is not who, but when.',
      },
      {
        p: 'Treating over inflammation is how marks get worse instead of better. If the barrier is reactive — stinging, flushing, tight after cleansing — that gets rebuilt first, which is what <a href="/treatments/dmk-enzyme-therapy/">enzyme therapy</a> is for. Corrective work on top of an unstable barrier is the most reliable way to produce the pigmentation it was meant to clear.',
      },
      {
        p: 'Active acne is the other sequencing problem. Every new spot deposits a new mark, so clearing the acne comes before treating what it left behind.',
      },

      { h2: 'What is microchanneling, and how is it different from a needle pen?' },
      {
        answer:
          'Microchanneling creates controlled microchannels and delivers a growth factor serum through them, without heat and without light. A needle pen relies on adjustable needle depth to create the injury, and that depth is the variable most associated with pigment change on deeper skin tones.',
      },
      {
        p: 'KIAMO SKIN does not perform needle-pen microneedling. The treatment offered here is <a href="/treatments/procell-microchanneling/">Procell microchanneling</a>, and that distinction is worth stating rather than blurring, because people arrive asking for one and are offered the other. Anyone who wants a needle pen specifically is better served booking somewhere that performs one.',
      },
      {
        p: 'Microchanneling works without heat or light, which matters on melanin-rich skin because heat is itself a pigment trigger. Depth is still adjusted across the face — deeper where correction is needed, lighter where skin is naturally thinner — and a growth factor serum is applied throughout rather than afterwards.',
      },
      {
        p: 'Expect redness similar to a mild sunburn for 24 to 48 hours, and possibly some dryness or flaking as the skin renews. Daily SPF afterwards is not optional on melanin-rich skin; it is the part that protects the result.',
      },

      { h2: 'Does microneedling help hyperpigmentation and melasma?' },
      {
        answer:
          'It can, but it is not the first tool reached for on pigment at this studio. Needling suits texture and scarring, while melasma is a relapsing condition managed long-term rather than cured, and the evidence for needling it is genuinely mixed.',
      },
      {
        p: 'A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11680975/" rel="noopener" target="_blank">review of microneedling applications in melasma</a> drawing on 64 clinical studies is positive overall, calling the technique "an essential advancement in melasma treatment" with "an excellent safety and tolerability profile". The same paper reports hyperpigmentation across its included studies at rates ranging from 5% to 40%, and notes the research is "hampered by small sample sizes". Both halves of that are true simultaneously, and only quoting the first half would be selling rather than informing.',
      },
      {
        p: 'Which mark you have decides the tool. <a href="/journal/three-kinds-of-dark-mark/">Post-inflammatory marks, melasma and sun damage look alike and behave differently</a>, and for pigment specifically the corrective route here is <a href="/treatments/lira-peels/">a prepared series of peels</a> rather than needling.',
      },

      { h2: 'How much does microneedling cost in San Diego?' },
      {
        answer:
          'Procell microchanneling at KIAMO SKIN is $475 for a single treatment, or $1,199 for a series of three. Most corrective plans use a series rather than one session, spaced four to six weeks apart.',
      },
      {
        p: 'Published prices are unusual in this market. Most studios and med spas ask you to enquire, which makes comparing anything difficult and tends to work in the seller\'s favour. The series price exists because a single session rarely completes the work on scarring or texture, and quoting only the single-session figure would understate what correction actually costs.',
      },
      {
        p: 'What suits your skin is decided at consultation rather than in advance, and appointments here are requested rather than booked instantly.',
      },

      { h2: 'How do you choose a provider for melanin-rich skin in San Diego?' },
      {
        answer:
          'Ask two questions: how treatment depth is decided for your skin, and what happens if pigment darkens afterwards. Anyone who treats melanin-rich skin routinely will answer both without hesitating.',
      },
      {
        p: 'Vague answers on either point are the signal worth acting on. Depth is the variable the literature keeps returning to, so a provider who has not thought about it for your skin specifically has not thought about your skin specifically.',
      },
      {
        p: 'KIAMO SKIN is a private, single-practitioner studio in Mission Hills, San Diego, where <a href="/melanin-rich-skin/">melanin-rich skin is the whole practice rather than a service line</a>. Treatment is one-to-one with a licensed esthetician, in one room, with free parking on site. Clients travel in from across the county, including <a href="/service-areas/chula-vista/">Chula Vista</a>, for exactly this reason.',
      },
    ],
    faqHeading: 'Microneedling questions',
    faqs: [
      {
        question: 'Is microneedling good for African American skin?',
        answer:
          'The review evidence is cautiously positive: microneedling is generally considered to carry a lower risk of pigment change on Fitzpatrick types IV to VI than lasers, dermabrasion or chemical peels, because it does not use heat or acid. That advantage depends entirely on the depth and the protocol being matched to the skin, not on the device itself.',
      },
      {
        question: 'Why did my skin get darker after microneedling?',
        answer:
          'Short-lived darkening while the skin heals is common and usually resolves within days — in one melasma trial 60% of participants reported it, lasting a median of five and a half days. Darkening that persists for weeks is more likely post-inflammatory hyperpigmentation from treatment that went deeper than the skin needed, and it should be reviewed by whoever performed it.',
      },
      {
        question: 'Who cannot get microneedling done?',
        answer:
          'Active acne, an inflamed or compromised barrier, an active skin infection and a history of keloid scarring are all reasons to treat something else first. On melanin-rich skin the timing matters as much as the candidacy, because treating over inflammation is how marks get worse rather than better.',
      },
      {
        question: 'Can Black people have RF microneedling?',
        answer:
          'Radiofrequency microneedling adds heat to the mechanical injury, and heat is itself a pigment trigger in melanin-rich skin, so it is a question worth putting directly to a provider who performs it. It is not offered at KIAMO SKIN. Procell microchanneling is used here instead, and it works without heat or light.',
      },
      {
        question: 'How much do three sessions of microneedling cost?',
        answer:
          'At KIAMO SKIN, a series of three Procell microchanneling treatments is $1,199 and a single treatment is $475. A series spaced four to six weeks apart is the usual plan for scarring and texture, because one session rarely completes the work.',
      },
      {
        question: 'What is the best facial treatment for Black skin?',
        answer:
          'There is no single answer, because it depends on what the skin is doing. Congestion and dullness are usually addressed with a HydraFacial, a reactive barrier with enzyme therapy, pigmentation with a prepared series of peels, and scarring or texture with microchanneling. The first appointment is an assessment rather than a fixed protocol.',
      },
    ],
    cta: { label: 'See Procell microchanneling', href: '/treatments/procell-microchanneling/' },
  },
];
