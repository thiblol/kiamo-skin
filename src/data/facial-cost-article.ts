/**
 * The price article, kept separate from the comparison table on
 * /facial/best-facial-san-diego/.
 *
 * WHY IT IS SEPARATE
 *
 * "How much does a facial cost" is the highest-volume AI search term this
 * site can reach — 6,385 searches a month in AI answers, against 1,900 on
 * Google — and the answer AI gives it is a price table with no local source.
 * The whole table comes from national directories.
 *
 * So the page that owns that answer has to be the page that publishes real
 * prices, and it has to be about PRICE rather than about comparison. One
 * page, one intent: the comparison page for "best facial spa", this one for
 * "what does a facial cost".
 *
 * The two link to each other. This one points at the comparison for the
 * studio-by-studio table; the comparison points here for the market-rate
 * context. Neither tries to do both jobs.
 *
 * ATTRIBUTION
 *
 * Every third-party figure in this piece — a competitor's published price, a
 * market rate read from a directory — is wrapped in the `data-fact-source`
 * attributes the guard suite checks against src/data/third-party-facts.ts.
 * The figure, the source URL and the date it was read all live in that file,
 * and the build fails if a figure here is not in it.
 */

import type { Article } from './articles';
import consultation from '../assets/corrective-skin-treatment-consultation-mission-hills-san-diego.jpg';

export const facialCostArticle: Article = {
  slug: 'how-much-does-a-facial-cost-san-diego',
  headline: 'How much does a facial cost in San Diego in 2026?',
  title: 'Facial Cost in San Diego (2026): Real Prices | KIAMO Skin',
  description:
    'What a facial costs in San Diego: what each price covers, and why KIAMO Skin is $249 for a first visit with consultation.',
  standfirst:
    'The published San Diego market rate for a facial spans a wide range, and the gap between the two ends of it is not quality — it is what the price includes. First-time clients here start at $249.',
  readingTime: '9 min read',
  datePublished: '2026-11-09',
  dateModified: '2026-11-09',
  image: consultation,
  imageAlt:
    'Licensed esthetician conducting a skin consultation with a client in the Mission Hills treatment room',
  faqHeading: 'Facial cost questions',
  body: [
    {
      answer:
        'A facial in San Diego costs between $75 and $300, with a median around $135. KIAMO Skin charges $249 for a first visit, which includes the consultation, the skin analysis and the first treatment, with the modality chosen after your skin is assessed.',
    },
    {
      p: 'That $135 median is worth pausing on, because it is the number most often quoted for a facial in this city and it is accurate — and it describes a different service from the one most studios at that price sell.',
    },
    {
      h2: 'What the published market rates actually say',
    },
    {
      p: 'Two national directories publish San Diego facial rates. No BS Med Spa Reviews put a facial at <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$75">$75</span>–<span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$300">$300</span> per facial, and the same source lists HydraFacial at <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$150">$150</span>–<span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$350">$350</span> per treatment, chemical peels at <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$150">$150</span>–<span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$800">$800</span> per session, and microneedling at <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$250">$250</span>–<span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$700">$700</span> per session. Facial Finders reports <span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$110">$110</span>–<span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$225">$225</span> typical for a facial, with a median of <span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$135">$135</span> in San Diego against a <span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$120">$120</span> national median across 302 US salons.',
    },
    {
      p: 'Both were read on 9 November 2026. Notice what the ranges have in common: the bottom of each is a standard facial, the top of each is a corrective or device-led treatment sold under the same word. A <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$75">$75</span> facial and a <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$300">$300</span> facial are not two prices for the same thing.',
    },
    {
      p: 'It is also worth saying where those numbers do not come from. Neither directory quotes a studio in San Diego; both are national rate guides. They are useful for orientation and useless as a quote, which is why the table below lists what actual studios publish rather than what a directory has collected.',
    },
    {
      h2: 'What each price actually buys',
    },
    {
      p: 'This is the part the range hides. Four studios in San Diego publish a facial price on their own website. Here is what each one covers.',
    },
    {
      table: {
        caption:
          'Published San Diego facial prices, read from each studio\'s own website on 9 November 2026. Every figure links to where it was read.',
        head: ['Studio', 'Area', 'Published price', 'What it covers'],
        rows: [
          [
            'KIAMO Skin',
            'Mission Hills',
            '$249 first visit',
            'Consultation, skin analysis and the first treatment. The modality is selected after the assessment — HydraFacial, Lira peel, DMK enzyme therapy or dermaplaning.',
          ],
          [
            'Kiwi Spa Organic Facial Innovation',
            'Pacific Beach',
            { text: '$179', source: 'kiwi-spa', fact: 'price' },
            {
              text: 'First-visit rate for the 75-minute custom facial. The studio runs a standing new-client discount, so this price moves — it is not the regular rate.',
              source: 'kiwi-spa',
              fact: 'note',
            },
          ],
          [
            'Honest Skin',
            'Point Loma',
            { text: '$135', source: 'honest-skin', fact: 'price' },
            {
              text: 'A 60-minute facial. A second 60-minute service is listed at $275.',
              source: 'honest-skin',
              fact: 'note',
            },
          ],
          [
            'Skin Habit',
            'North Park',
            { text: '$175', source: 'skin-habit', fact: 'price' },
            {
              text: 'A facial at the North Park location. The studio also publishes monthly membership rates.',
              source: 'skin-habit',
              fact: 'note',
            },
          ],
        ],
      },
    },
    {
      p: 'Five other studios in this market publish no price at all — their menus sit on a booking platform, so there is no figure to quote without starting a booking. That is not a criticism of them. It is simply why the comparison below can be checked: every number in it links to the studio that published it.',
    },
    {
      h2: 'Why a first visit here is $249',
    },
    {
      p: 'The honest reason is what the first visit contains. It is a consultation, a skin analysis, and a treatment, and the treatment is not decided before you arrive — it is decided from what the assessment shows. That takes time, and it is why the price sits at the upper end of the published range rather than the middle.',
    },
    {
      p: 'A $135 facial is a real service and a good one. It is a fixed protocol: the same steps in the same order, whoever walks in. It suits maintenance, a glow before an event, and a client who knows their skin and what they want. It does not suit a client whose concern is pigmentation, scarring or a barrier that has been damaged — because a fixed protocol cannot be adjusted to any of those on the day.',
    },
    {
      p: 'So the useful question is not which price is better. It is which one you are buying: a protocol, or an assessment followed by a treatment chosen from it. Both cost what they cost. They are not the same appointment.',
    },
    {
      h2: 'What the modalities cost on their own',
    },
    {
      p: 'Every price below is published on this site, which most studios in this market do not do. A first-time client starts at $249 for consultation and treatment.',
    },
    {
      table: {
        caption:
          'KIAMO Skin published prices. First-time clients start at $249 for consultation and treatment; the prices below are what each treatment costs on its own.',
        head: ['Treatment', 'Price', 'Length', 'What it is for'],
        rows: [
          [
            'HydraFacial Syndeo',
            '$259',
            '45 minutes',
            'Maintenance, monthly glow, pre-event preparation, barrier support between corrective treatments. No downtime.',
          ],
          [
            'DMK Enzyme Therapy',
            'from $279',
            '60-75 minutes',
            'Sensitive and rosacea-prone skin, reactive skin, barrier damage, post-peel and post-sun recovery. None to mild downtime.',
          ],
          [
            'Lira Chemical Peel',
            '$199-$299',
            '45-60 minutes',
            'Melasma, post-inflammatory hyperpigmentation, sun damage, uneven tone. 3-5 days of mild peeling.',
          ],
          [
            'Dermaplaning',
            'from $199',
            '45 minutes',
            'Surface dullness, vellus hair, makeup base preparation. No downtime.',
          ],
          [
            'Procell Microchanneling',
            '$475',
            '60 minutes',
            'Acne scarring, fine lines, skin texture. Series pricing available.',
          ],
          [
            'Keravive Scalp Therapy',
            '$599',
            '60 minutes',
            'Scalp health, thinning hair, post-chemical scalp irritation. Series pricing available.',
          ],
        ],
      },
    },
    {
      p: 'Prices for a corrective course are quoted as a series, because a course is priced as a course. A peel every four weeks and a peel every fortnight are different treatments with different outcomes, and pricing them per-session hides what the series costs. The consultation is where that gets worked out.',
    },
    {
      h2: 'Memberships',
    },
    {
      p: 'Memberships start at $199 a month and include one facial plus discounts on additional treatments. A membership suits a client on a monthly maintenance cadence who wants the cost predictable and the appointment held. It does not suit a client with one specific corrective concern, who is better served by a course.',
    },
    {
      h2: 'What is not included in a facial price',
    },
    {
      p: 'Two things, at every studio in this market including this one.',
    },
    {
      p: 'First, homecare. A facial is an accelerant, not a maintenance plan. The pigment that fades in the room fades because of what you do at home between visits — daily broad-spectrum SPF, iron-oxide-tinted sunscreen if the pattern is melasma, and a retinoid if the skin will take one. A client who buys a series and does not do the homecare gets a fraction of what the series was priced for.',
    },
    {
      p: 'Second, the consultation. It is included in the $249 first visit here, which is unusual in this market. At most studios the consultation is either billed separately or folded invisibly into a treatment you are not sure you need. Including it means the number you are quoted is the number you pay, and the assessment happens whether or not you go ahead with a treatment.',
    },
    {
      h2: 'How to compare two quotes',
    },
    {
      p: 'If you have two prices in front of you — one from this studio and one from somewhere else — these are the questions that make them comparable.',
    },
    {
      ul: [
        'Is the consultation included, and is it billed separately if you decline the treatment?',
        'Is the treatment fixed, or is it selected after the skin is assessed?',
        'Does the price cover one treatment or a session within a course?',
        'Is the quote a first-visit or promotional rate, and what is the regular rate?',
        'Is the price published, or does it only exist once you are on a booking platform?',
      ],
    },
    {
      p: 'The last one is the giveaway. A studio that publishes its prices is telling you what it charges before you spend any time with them. A studio that does not is asking you to commit before you can compare.',
    },
    {
      h2: 'Where the market rate comes from',
    },
    {
      p: 'To compare this studio against the market, here is the short list of San Diego studios with their published prices, their Google ratings and their review counts, with every figure dated and sourced. Two lists, because the answer to "best facial spa in San Diego" and the answer to "best facial spa for dark skin in San Diego" are not the same list:',
    },
    {
      ul: [
        'The full San Diego facial market — nine studios, day spas and corrective facial spas alike — is compared on the main San Diego facial guide.',
        'The studios that treat melanin-rich skin are compared separately, with their own published prices and their own protocols.',
      ],
    },
    {
      p: 'The rates quoted in this article were read from No BS Med Spa Reviews and Facial Finders on 9 November 2026. Studio prices were read from each studio\'s own website on the same date and change as those studios change them — Kiwi Spa was running a standing new-client discount when this was written, and that rate is not there forever.',
    },
    {
      h2: 'Sources & references',
    },
    {
      p: 'Every market rate quoted above is published by one of these two, and both were read on 9 November 2026:',
    },
    {
      ul: [
        '<a href="https://www.nobsmedspareviews.com/treatment/facials-in-san-diego" rel="noopener nofollow" target="_blank">No BS Med Spa Reviews</a> — published San Diego market rates for facials, HydraFacial, chemical peels and microneedling.',
        '<a href="https://www.facialfinders.com/blog/best-facials-san-diego/" rel="noopener nofollow" target="_blank">Facial Finders</a> — published San Diego facial rate and median, collected across salons.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a facial cost in San Diego?',
      answer:
        'Between <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$75">$75</span> and <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$300">$300</span>, with a median around <span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$135">$135</span>. KIAMO Skin charges $249 for a first visit including consultation, skin analysis and the first treatment. Three other studios in San Diego publish a price: Kiwi Spa at <span data-fact-source="kiwi-spa" data-fact="price" data-fact-value="$179">$179</span>, Honest Skin at <span data-fact-source="honest-skin" data-fact="price" data-fact-value="$135">$135</span> for a 60-minute facial, and Skin Habit at <span data-fact-source="skin-habit" data-fact="price" data-fact-value="$175">$175</span>.',
    },
    {
      question: 'Why are facials more expensive at some studios than others?',
      answer:
        'Usually because of what is included rather than the quality of the treatment. A lower-priced facial is usually a fixed protocol run in the same steps every time. A higher-priced one is usually a consultation first, with the treatment selected from what the assessment shows. Both are legitimate services, and they are not comparable line for line.',
    },
    {
      question: 'How much does a first facial cost at KIAMO Skin?',
      answer:
        '$249, which covers the consultation, the skin analysis and the first treatment. The modality is chosen after the assessment, so the first visit may be a HydraFacial, a Lira peel, DMK enzyme therapy or dermaplaning. It is a one-time price, not a membership, and there is no contract.',
    },
    {
      question: 'Do you publish your prices?',
      answer:
        'Every price is published on this site, including what each treatment costs on its own, what the first visit includes, and what memberships are. Most studios in this market publish no price at all — their menus sit on a booking platform, so the figure only appears after you start a booking.',
    },
    {
      question: 'Is the consultation included in the facial price?',
      answer:
        'Yes. At $249 for a first visit, the consultation, the skin analysis and the first treatment are one price. Most studios either bill the consultation separately or fold it invisibly into a treatment you are not sure you need. Including it means the number you are quoted is the number you pay.',
    },
    {
      question: 'How much should I budget for a series of treatments?',
      answer:
        'A corrective course is quoted as a course rather than per session, because a course is priced as a course — a peel every four weeks and a peel every fortnight are different treatments with different outcomes. The consultation is where the series and its price are worked out. Microchanneling and Keravive scalp therapy are also available as series with series pricing.',
    },
    {
      question: 'Are memberships cheaper than booking each visit?',
      answer:
        'Memberships start at $199 a month and include one facial plus discounts on additional treatments. A membership suits a client on a monthly maintenance cadence who wants the cost predictable and the appointment held. It does not suit a client with one specific corrective concern, who is better served by a course.',
    },
    {
      question: 'Do you charge for a consultation if I decide not to book a treatment?',
      answer:
        'No. The consultation is included in the first-visit price, and there is no separate charge if you decide against a treatment after the assessment. The assessment happens either way, because knowing what the skin shows is useful information even when the answer is to wait.',
    },
    {
      question: 'What is the cheapest facial in San Diego?',
      answer:
        'The published market range starts at <span data-fact-source="market-facial-rates" data-fact="price" data-fact-value="$75">$75</span> for a basic facial, and the median is around <span data-fact-source="market-facial-rates-finder" data-fact="price" data-fact-value="$135">$135</span>. The lowest prices in the market belong to short standard facials, usually 30 to 60 minutes, run from a fixed protocol. KIAMO Skin does not offer a $75 facial, because the first visit here includes an assessment that determines the treatment.',
    },
    {
      question: 'Why is KIAMO Skin above the market rate?',
      answer:
        'Because the price covers a consultation and a skin analysis as well as the treatment, and because the treatment is selected from that assessment rather than run from a fixed menu. The rate is published, the modalities are listed with their own prices, and there is no contract and no upsell at the end of the appointment.',
    },
  ],
  cta: { label: 'Compare San Diego facial spas', href: '/facial/best-facial-san-diego/' },
};
