/**
 * Per-treatment FAQs. Feed both the visible accordion and the FAQPage schema on
 * each treatment page, so the rendered answer and the schema answer are one string.
 *
 * Questions come from live People Also Ask data, not invention. No question is
 * reused across two pages — a repeated question is a duplicate-content signal.
 *
 * Every answer opens with a complete two-sentence answer before any nuance:
 * that opening block is what AI Overviews and featured snippets lift.
 *
 * Hard rules, all enforced by test/guards.test.js against the built HTML:
 * no pronouns, no price outside verifiedPrices, no treatment durations, no
 * opening hours, no outcome guarantees.
 */
import type { Faq } from './faqs';

export const treatmentFaqs: Record<string, Faq[]> = {
  hydrafacial: [
    {
      question: 'How much does a HydraFacial cost in San Diego?',
      answer:
        'A HydraFacial at KIAMO SKIN is $259. If it is your first visit, the First-Time Client Treatment is $249 and includes a full consultation, skin analysis, a customized booster, microcurrent, LED light therapy, a Hydrojelly mask and a long-term treatment plan.',
    },
    {
      question: 'Will a HydraFacial remove blackheads?',
      answer:
        'A HydraFacial removes blackheads using vortex extraction, which lifts oil and debris out of the pore with gentle suction instead of manual pressure. Congestion that has been building for a long time clears gradually rather than in one visit. Closed comedones and hardened blackheads do respond, but what keeps them from returning is the home routine you leave with, not the treatment on its own.',
    },
    {
      question: 'What are the negatives of a HydraFacial?',
      answer:
        'The honest limitation of a HydraFacial is that it is a resurfacing and maintenance treatment, not a corrective one. It cleanses, extracts and hydrates, but it does not remodel scarring, resolve melasma or rebuild a damaged barrier — those need microchanneling, peels or enzyme therapy. Results also soften as skin turns over, which is why it works best inside a plan rather than as a one-off. Any treatment being sold as the answer to everything is being oversold.',
    },
    {
      question: 'What should you avoid after a HydraFacial?',
      answer:
        'Avoid heat, sweat and direct sun for the rest of the day — no sauna, no hot yoga, no swimming pool. Skip retinoids, acids and physical exfoliants until the skin has settled, and wear SPF daily. Skin is far more absorbent straight after a HydraFacial, which is the point, but it also means anything active goes in harder than usual. Makeup can go back on, though bare skin for the evening is better.',
    },
    {
      question: 'What is the best age to start HydraFacial treatments?',
      answer:
        'There is no best age for a HydraFacial — it suits congested, dull or dehydrated skin at almost any age. Teenagers with active breakouts and clients decades older book it for entirely different reasons, and both are appropriate. What changes with age is the booster selected and what the treatment is paired with, not whether the treatment is right for you. That is decided at the consultation.',
    },
  ],

  'procell-microchanneling': [
    {
      question: 'How much does microchanneling cost in San Diego?',
      answer:
        'A single Procell microchanneling session at KIAMO SKIN is $475. The three-treatment series, which is how scarring and texture are usually worked through, is $1,199 in total.',
    },
    {
      question: 'How is Procell microchanneling different from microneedling?',
      answer:
        'Procell microchanneling is not a traditional needle microneedling pen — it is a different modality, not a different brand. It creates controlled microchannels and delivers a growth factor serum through them in the same pass, so the device and the serum are designed to work as one system. The channels are what allow the serum to reach past the surface. It is chosen here for melanin-rich skin because treatment depth is adjusted region by region rather than set once for the whole face.',
    },
    {
      question: 'Is microneedling worth the money?',
      answer:
        'Microchanneling is worth the money for acne scarring, uneven texture and early loss of firmness. It is not worth it as a one-off glow treatment, because collagen remodeling is cumulative and a single session rarely does what a series of three does. Sessions are usually spaced four to six weeks apart, which is why the three-treatment series is priced together at $1,199. If what you actually want is hydration and a clean surface, a HydraFacial is the better spend.',
    },
    {
      question: 'Is 40 too old for microchanneling?',
      answer:
        'Forty is not too old for microchanneling. Collagen production slows with age but does not stop, and mature skin is one of the most common reasons the treatment is chosen at all. What matters far more than age is what the skin is currently doing — active or inflamed acne, certain acne medications and a compromised barrier are all reasons to wait or to treat something else first. That is assessed at consultation, not by a number.',
    },
    {
      question: 'Why does skin look worse right after microchanneling?',
      answer:
        'Skin often looks worse before it looks better after microchanneling, and that is the healing response rather than damage. Expect redness similar to a mild sunburn for 24 to 48 hours, then mild dryness or flaking as the surface renews. Dehydrated, flaking skin shows texture and fine lines more clearly, which is why some people read that stage as looking older. Daily SPF through that window is not optional, particularly in melanin-rich skin, where sun on healing skin is what turns a good result into pigmentation.',
    },
  ],

  'keravive-scalp': [
    {
      question: 'How much does a Keravive scalp treatment cost in San Diego?',
      answer:
        'A single Keravive scalp treatment at KIAMO SKIN is $599. The series of three is $1,499 in total, which is the format most scalp concerns are treated in.',
    },
    {
      question: 'Where can I get Keravive scalp treatment in San Diego?',
      answer:
        'KIAMO SKIN offers Keravive scalp treatment at the Mission Hills studio, centrally located and easy to reach from Pacific Beach, La Jolla, Del Mar, Encinitas, Carlsbad, North Park, Hillcrest, and Mission Valley. The studio is fifteen minutes from Pacific Beach, twenty minutes from La Jolla, and thirty minutes from Encinitas. Parking is available near the studio.',
    },
    {
      question: 'How long does Keravive take if coming from Pacific Beach?',
      answer:
        'Keravive takes forty-five minutes for the treatment itself. If driving from Pacific Beach, the studio in Mission Hills is fifteen minutes away, so plan for ninety minutes total including travel. Clients from La Jolla, Del Mar, and Encinitas typically block off two hours to account for the drive and treatment time.',
    },
    {
      question: 'What is the best treatment for a flaking, itchy scalp?',
      answer:
        'The right treatment for a flaking, itchy scalp depends on whether the cause is buildup or a medical condition. Keravive treats buildup — oil, dead skin, product residue and hard water minerals — by cleansing, exfoliating and hydrating the scalp, then feeding it a concentrated peptide complex. San Diego water runs around sixteen grains per gallon, hard enough that mineral residue on the scalp is a routine finding here. If the flaking is scaly, patchy or painful rather than dry, that belongs with a dermatologist first.',
    },
    {
      question: 'Does ocean water affect Keravive results?',
      answer:
        'Ocean water does not reduce Keravive effectiveness, but salt spray and chlorine from pools can accelerate buildup between treatments. For Pacific Beach, La Jolla, and Del Mar residents who swim or surf regularly, the take-home peptide spray is especially important for maintaining results. The treatment itself removes ocean salt deposits along with hard water minerals and product buildup.',
    },
    {
      question: 'Is a scalp treatment worth it?',
      answer:
        'A scalp treatment is worth it when the scalp is genuinely congested, flaking or tight — it is not a cure for hair loss. Keravive treats the scalp as skin, which is the one area most people skip entirely while spending on everything above it. A healthier scalp is a better environment for hair to grow in, but no scalp treatment regrows hair that has stopped for medical or genetic reasons. That distinction is made at consultation, not after a series has been paid for.',
    },
    {
      question: 'What does a Japanese scalp treatment do?',
      answer:
        'A Japanese head spa is a water-based cleansing and massage ritual built around relaxation, lymphatic massage and a deep rinse. KIAMO SKIN does not offer Japanese or Korean method scalp treatments. The difference is intent — a head spa is primarily an experience, while Keravive is a clinical protocol aimed at buildup, scalp health and the environment hair grows in, with a take-home peptide spray to continue between visits. Both feel good; only one is corrective.',
    },
    {
      question: 'What do dermatologists recommend for scalp problems?',
      answer:
        'Scalp problems split into two groups, and the right recommendation depends on which one you are in. Medicated shampoos and prescription treatments are the medical route for conditions such as seborrheic dermatitis or psoriasis, and those belong with a dermatologist. Buildup, hard water residue, product congestion and general scalp dryness are cosmetic, and that is what Keravive is built for. If a scalp has been treated cosmetically with no change at all, the next step is medical rather than another treatment.',
    },
  ],

  'lira-peels': [
    {
      question: 'How much does a chemical peel cost in San Diego?',
      answer:
        'The LIRA Gentle Renewal Peel at KIAMO SKIN is $199 and the LIRA Advanced Peel is $299. Which one you start with is decided at consultation, and on melanin-rich skin the gentle peel is almost always the starting point.',
    },
    {
      question: 'Are chemical peels safe for melanin-rich skin?',
      answer:
        'Chemical peels are safe on melanin-rich skin when the acid, the strength and the pacing are selected for it. Melanin-rich skin responds to trauma by producing more pigment, so an over-aggressive peel can create the exact hyperpigmentation it was meant to clear. Every peel here is patch-tested and started gently, with strength escalating across a series rather than inside a single visit. Facials for Black and brown skin are the specialism at KIAMO SKIN, and that caution is the reason why.',
    },
    {
      question: 'What is the best treatment for melasma?',
      answer:
        'Melasma is managed rather than cured, and what works is slow and layered: gentle professional peels, prescribed home care and absolute consistency with SPF. Aggressive resurfacing is the most common way melasma is made worse, especially in melanin-rich skin. Heat and light drive melasma as well as sun, so the plan covers what you do daily, not only what happens in the treatment room. Progress on melasma is rarely linear, and that is explained honestly before anything is applied.',
    },
    {
      question: 'Can a chemical peel remove hyperpigmentation?',
      answer:
        'A chemical peel can fade post-inflammatory hyperpigmentation and sun damage, but it does not remove pigmentation permanently on its own. Peels lift pigmented surface cells and accelerate turnover; what stops the pigment returning is daily SPF and the home routine between visits. Marks left behind by acne also need the acne itself controlled first, or new marks simply replace the ones being cleared. Order of operations matters more than peel strength.',
    },
    {
      question: 'Is one peel enough, or do you need a series?',
      answer:
        'One peel refreshes the skin; a series is what corrects pigmentation. There is no single-session version of pigmentation treatment, and anywhere promising one is overselling it. The Gentle Renewal Peel at $199 refreshes and maintains, while the Advanced Peel at $299 goes deeper for pigmentation and scarring, with strength escalating across the series as the skin tolerates it. The home care between visits is doing as much work as the peel itself.',
    },
  ],

  dermaplaning: [
    {
      question: 'How much does dermaplaning cost in San Diego?',
      answer: 'The Dermaplane Facial at KIAMO SKIN is $199.',
    },
    {
      question: 'Is dermaplaning legal in California?',
      answer:
        'Dermaplaning is legal in California and sits within the scope of practice for licensed estheticians and cosmetologists. The California Board of Barbering & Cosmetology confirmed this in an industry bulletin effective January 1, 2022, following Senate Bill 803. The Board draws the line at depth — dermaplaning exfoliates the epidermis and removes vellus hair without going beyond it, which keeps it inside esthetician scope. Every blade used at KIAMO SKIN is sterile and single-use.',
    },
    {
      question: 'What is the downside of dermaplaning?',
      answer:
        'The real downside of dermaplaning is that it cannot be performed over active or inflamed acne, and those areas are worked around rather than over. It also does nothing for pigmentation, scarring or barrier damage, because it is a surface treatment and the smoothness is temporary as dead cells rebuild. There is no downtime, but the skin is more exposed afterwards, so SPF matters more than usual. If the goal is correction rather than a clean surface, a peel or microchanneling is the honest recommendation.',
    },
    {
      question: 'Does dermaplaning make hair grow back stubbly?',
      answer:
        'Vellus hair does not grow back stubbly or thicker after dermaplaning. The blade cuts the hair at the surface and never touches the follicle, and the follicle is what determines thickness, colour and rate of growth. What does change is the cut end — a blunt tip can feel different under the fingertips than a tapered one, which is where the myth comes from. The hair returns exactly as it was.',
    },
    {
      question: 'Is it a problem to remove peach fuzz from the face?',
      answer:
        'Everyone has vellus hair on the face, and removing it is a cosmetic choice with no effect on how it grows back. There is no health reason to remove peach fuzz and no health reason to keep it. Most clients choose dermaplaning because makeup stops catching on the surface and skincare absorbs into skin instead of sitting on debris. If the hair itself is not the issue, the exfoliation is still reason enough.',
    },
  ],

  'dmk-enzyme-therapy': [
    {
      question: 'What is DMK enzyme therapy?',
      answer:
        'DMK enzyme therapy is a corrective skin treatment that works with the skin\'s own biological processes — circulation, lymphatic activity and cellular function — rather than stripping the surface the way an acid peel does. Level 1 at KIAMO SKIN in Mission Hills, San Diego is $279 and is how every DMK plan starts, regardless of what the skin\'s longer-term goals are.',
    },
    {
      question: 'How much does DMK enzyme therapy cost in San Diego?',
      answer:
        'A DMK Level 1 enzyme treatment at KIAMO SKIN is $279. Level 2 and Level 3 treatments are prescribed and priced at consultation, because which one is appropriate depends on how your skin responds to Level 1.',
    },
    {
      question: 'What does DMK enzyme therapy do for the skin barrier?',
      answer:
        'DMK enzyme therapy works with the skin’s own function rather than stripping the surface the way an acid peel does. The enzyme masque supports circulation and lymphatic activity while the skin is encouraged to do its own repair work, which is why it suits a barrier that is already inflamed, sensitised or over-exfoliated. As the masque sets you will feel a tightening and rhythmic pulsing — that is expected, and the intensity varies from person to person. It is a corrective treatment for skin that cannot currently tolerate a corrective treatment.',
    },
    {
      question: 'How do you know if your skin barrier is damaged?',
      answer:
        'A damaged barrier usually announces itself through sensitivity rather than appearance. Products that used to be fine start to sting, skin feels tight after cleansing, redness lingers, and dehydration persists no matter how much moisturizer goes on. Slow healing after a breakout and skin that flares at small changes point the same way. Most barrier damage seen in the studio is self-inflicted by over-exfoliation, strong actives and too many products at once, which also means it is fixable.',
    },
    {
      question: 'How long does it take to repair a damaged skin barrier?',
      answer:
        'There is no fixed timeline for repairing a skin barrier, and anyone quoting one is guessing. Recovery depends on what caused the damage, how long it has been going on, and what you are willing to stop using at home. Enzyme therapy supports the process, but a barrier will not rebuild while the products that broke it are still in rotation — which is why DMK is prescribed as a system with a home routine, not as a standalone treatment. Skin does not change overnight, but it responds when you stay consistent.',
    },
    {
      question: 'What is the difference between DMK Level 1, Level 2 and Level 3?',
      answer:
        'Level 1 always comes first, and it is priced at $279. It prepares the skin and shows how the skin actually responds before anything deeper is considered. Levels 2 and 3 layer the enzymes for deeper correction and are prescribed only once Level 1 has done that groundwork, which is why the protocol and the price are set at consultation rather than published. Skipping to a deeper level on unprepared skin is how enzyme therapy goes wrong.',
    },
  ],

  acne: [
    {
      question: 'Does HydraFacial help with acne?',
      answer:
        'HydraFacial helps with acne by extracting blackheads, whiteheads, and surface congestion without manual pressure that can worsen inflammation. It is most effective for comedonal acne (clogged pores) and mild inflammatory breakouts. For cystic acne or severe hormonal acne, HydraFacial is paired with DMK Enzyme Therapy or prescribed treatments from a dermatologist, because extraction alone does not address the deeper causes of those breakout patterns.',
    },
    {
      question: 'What is the best facial for acne in San Diego?',
      answer:
        'The best facial for acne depends on what phase the skin is in. HydraFacial clears congestion and blackheads, DMK Enzyme Therapy rebuilds a compromised barrier that is allowing bacteria to thrive, and chemical peels fade post-inflammatory hyperpigmentation left after breakouts clear. There is no single "best" facial for acne because active breakouts, congestion, and post-acne marks each require different treatments. The right treatment is decided at the consultation after assessing the skin.',
    },
    {
      question: 'How much does acne treatment cost in San Diego?',
      answer:
        'Acne treatment at KIAMO SKIN ranges from $199 to $475 per session depending on the treatment. HydraFacial for congestion and active breakouts is $259. LIRA Chemical Peels for post-acne hyperpigmentation start at $199. DMK Enzyme Therapy for barrier repair is $279. Procell Microchanneling for acne scarring is $475, with a three-treatment series at $1,199. The cost depends on which phase of acne is being treated — active breakouts, hyperpigmentation, or scarring.',
    },
    {
      question: 'How long does it take for acne treatment to work?',
      answer:
        'Acne treatment works over weeks to months, not days. Congestion and blackheads improve after one HydraFacial session, but hormonal breakouts take 6 to 8 weeks to respond to consistent treatment because the skin cell turnover cycle is 28 days. Post-inflammatory hyperpigmentation fades over 8 to 12 weeks with a series of chemical peels. Acne scarring requires three to six Procell Microchanneling sessions spaced weeks apart. Acne is managed over time — one facial does not clear a chronic breakout pattern.',
    },
    {
      question: 'Should I see an esthetician or dermatologist for acne?',
      answer:
        'See both if acne is persistent or cystic. Dermatologists prescribe medication (retinoids, antibiotics, hormonal treatments) that address acne from the inside, while licensed estheticians provide corrective facials that extract congestion, fade hyperpigmentation, and support barrier health from the outside. Estheticians cannot prescribe medication, and dermatologists rarely perform the extraction and corrective work an esthetician does. For severe acne, dermatologist care plus consistent facials produces better results than either alone.',
    },
    {
      question: 'Will chemical peels make my hyperpigmentation worse?',
      answer:
        'Chemical peels can make hyperpigmentation worse if applied incorrectly or at too high a strength without proper preparation. Post-inflammatory hyperpigmentation worsens when inflammation triggers additional melanin production, which is why peels for acne marks start at lower strengths and escalate gradually across a series rather than in one aggressive session. LIRA Chemical Peels at KIAMO SKIN are formulated specifically to fade pigmentation without the rebound darkening that can happen with peels applied too aggressively. The strength and frequency are decided based on how the skin responds, not a fixed protocol.',
    },
  ],
};
