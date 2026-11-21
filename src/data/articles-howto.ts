import type { Article } from './articles';

import pigmentation from '../assets/hyperpigmentation-treatment-melanin-rich-skin-san-diego.jpg';
import peel from '../assets/lira-peel-chemical-peel-hyperpigmentation-san-diego.jpg';
import hydrafacial from '../assets/hydrafacial-treatment-san-diego.jpg';

/**
 * The how-to pieces.
 *
 * WHY THESE EXIST
 * Step-by-step content is 15.7% of the AI citations in the reference
 * research, and HowTo is one of the two highest-return schema types — it
 * explicitly tells a model "here are questions and here are their answers",
 * which is the shape a generated response takes. Sixteen articles existed
 * before this file. Exactly one of them carried a HowTo node.
 *
 * So this file holds three procedures, each written for a reader who is
 * about to book and wants to know what to do before they arrive. Each one
 * carries its steps twice — once as the machine-readable `howTo` block and
 * once as the numbered list in the body — from the same array, so the
 * structured data and the visible page cannot drift apart.
 *
 * THE RULES
 *   - Pronoun-free. Kiki has never published pronouns, and a reviewer's
 *     pronoun is a reviewer's, not the studio's.
 *   - No opening hours. The studio has none; it is by appointment only.
 *   - Only the prices in `config/business.ts`. Nothing estimated.
 *   - No star glyphs, no rating phrasing, no instant-booking language.
 *   - No invented studies, awards, media mentions or statistics. Where a
 *     general fact is used it is one the studio's own protocols already rest
 *     on.
 */
export const howToArticles: Article[] = [
  {
    slug: 'how-to-fade-dark-spots-at-home',
    headline: 'How to fade dark spots at home, and the three things that make them darker',
    title: 'How to Fade Dark Spots at Home | KIAMO Skin',
    description:
      'How to fade dark spots at home: the order that works, the sunscreen that matters, and the three habits that set dark marks back in. San Diego skin advice.',
    standfirst:
      'Most home routines for dark marks fail in the same three places, and none of them is the product. The order, the light protection, and what happens in the week after a spot clears.',
    readingTime: '8 min read',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    image: pigmentation,
    imageAlt:
      'A brightening serum being applied to the cheek of a client with deep brown skin, in the KIAMO Skin treatment room',
    quickAnswer:
      'Dark spots fade at home when three things line up: a daily sunscreen with iron oxides for visible light, an active applied every day rather than occasionally, and patience measured in months rather than weeks. The habits that set marks back are scratching, picking, and skipping sunscreen on the days the sky looks flat.',
    howTo: {
      name: 'How to fade dark spots at home in eight steps',
      description:
        'The order that fades a dark mark at home, and what to stop doing while it works. Written for San Diego clients, where overcast mornings hide the UV that keeps a mark active.',
      steps: [
        'Start with the sunscreen, not the active. A broad-spectrum SPF 30 or higher with iron oxides for visible light goes on every morning before anything else. A brightening serum applied on top of a bare face is a treatment on an unprotected surface.',
        'Apply sunscreen every morning, in every season. San Diego sits in the very high UV band for most of the year, and the marine layer does not stop UV — it only hides it.',
        'Reapply every two hours outdoors, and after swimming or sweating. Treat the drive as time outside: glass filters UVB well and UVA poorly, so a commute is meaningful one-sided exposure on the driving side of the face.',
        'Use one active at a time, and start at the lowest strength. A retinoid, an azelaic acid and a vitamin C are a reasonable set; using all three at once is how skin gets irritated, and irritated skin makes more pigment.',
        'Give it eight weeks before judging it. Pigment fades as new cells replace marked ones, and the turnover that moves it is slow. A mark that has not shifted in eight weeks has been held in place by something other than the routine.',
        'Do not pick, squeeze or scrub the spot. Every interruption to the skin produces inflammation, and inflammation produces pigment. This is the single fastest way to set a mark back.',
        'Do not use a strong peel at home to speed it up. Over-the-counter acid on its own is how a dark mark becomes a scar, and on melanin-rich skin the response is stronger and lasts longer.',
        'When it has faded, keep the sunscreen going. A mark that clears and then returns is a mark that was never given the daily protection it needed in the first place.',
      ],
    },
    body: [
      {
        p: 'The reason most home routines for dark marks fail is that they start in the wrong place. A brightening serum is opened, and the sunscreen is a thing that gets reapplied when there is a beach in the plan.',
      },
      {
        p: 'That order is backwards for San Diego, where the UV index sits in the very high band for most of the year and the overcast mornings are exactly when people skip it. The marine layer does not block UV. It hides the evidence of it.',
      },
      {
        p: 'There is a version of this that works at home, and it is worth spelling out precisely — not because the studio does not do the work in the room, but because what happens between visits decides what the room can work with.',
      },

      { h2: 'What a dark mark actually is' },
      {
        answer:
          'A dark mark is melanin the skin produced in response to inflammation. The injury sets the pigment off and the pigment stays long after the injury has gone, which is why the mark outlives the spot by months. Three different conditions make marks — post-inflammatory marks, melasma and sun damage — and each one responds to a different part of the routine.',
      },
      {
        p: 'The distinction matters at home, because the first two are driven by what is happening <em>to</em> the skin right now, and the third is driven by what has been happening to it for years. The way to tell them apart is covered in <a href="/journal/three-kinds-of-dark-mark/">which kind of dark mark you have</a>, and it is worth reading before spending anything.',
      },
      {
        table: {
          caption: 'Three kinds of dark mark, and what actually fades each one',
          head: ['Kind', 'What drives it', 'What fades it'],
          rows: [
            [
              'Post-inflammatory',
              'A spot, an injury, an ingrown hair, a nick while shaving',
              'Ending the inflammation, then protecting the skin while it clears',
            ],
            [
              'Melasma',
              'Hormonal change, sustained by UV and heat',
              'A paced series of gentle peels, plus daily visible-light protection',
            ],
            [
              'Sun damage',
              'Years of cumulative exposure',
              'A series, plus daily protection — and the longest timeline of the three',
            ],
          ],
        },
      },

      { h2: 'The order that works' },
      {
        p: 'Sunscreen first, active second, moisturiser third. Not because the sunscreen fades the mark, but because an active applied to unprotected skin is working in the wrong direction.',
      },
      {
        p: 'A retinoid, an azelaic acid and a vitamin C are a reasonable home set. All three have evidence behind them for pigment; all three can irritate skin that is already reactive; and using all three at once is how a barrier gets disrupted, which produces inflammation, which produces more pigment. One at a time, at the lowest strength that does something, is not timidity. It is how the mark is not made worse.',
      },
      {
        p: 'Azelaic acid is the one worth naming for melanin-rich skin specifically: it is well tolerated on deeper tones and addresses both the pigment and the inflammation that keeps producing more of it.',
      },

      { h2: 'The sunscreen that matters in this county' },
      {
        p: 'For a mark that keeps coming back, the number on the bottle matters less than the presence of iron oxides. Visible light is a large part of what keeps melasma and post-inflammatory marks active, and iron oxides are what block it.',
      },
      {
        p: 'A tinted sunscreen carries them. A white or clear mineral sunscreen may not — and mineral filters are exactly the ones people reach for when a mark is flaring, because of the cast. The cast is the reason a lot of people give up on the one product that would have helped.',
      },
      {
        p: 'The way to read a label is covered in <a href="/journal/best-sunscreen-for-dark-spots/">the best sunscreen for dark spots</a>, and the two-hour reapplication rule is in the guide below.',
      },

      { h2: 'What to do in the week after a spot clears' },
      {
        p: 'This is the window that gets missed. A spot has been inflamed for days; it clears; and the mark appears in its place. The instinct at that point is to attack it — with the spot treatment, with the scrub, with the extractor, with a needle.',
      },
      {
        p: 'Every one of those is a fresh injury, and every fresh injury starts the cycle again. The mark that would have faded in eight weeks becomes a mark that fades in a year.',
      },
      {
        p: 'What works instead is the least dramatic option: leave it alone, protect it, and keep the routine going. It is genuinely harder than treating it.',
      },

      { h2: 'How long a mark takes at home' },
      {
        p: 'Weeks for a recent mark that stopped being irritated. Months for a post-inflammatory mark. A year or more for sun damage, and a series is usually what it takes.',
      },
      {
        p: 'The point worth making is that this timeline is the same one the studio works to. A peel series is not a shortcut around the biology; it is the same biology with more control over the pace, and with the inflammation managed rather than avoided.',
      },
      {
        p: 'If the mark has not shifted in eight weeks of a consistent routine, something else is holding it in place — usually the sunscreen, usually on the days the sky looks flat.',
      },
      {
        p: 'At the studio, the same work is done with a <a href="/services/hyperpigmentation-treatment/">plan built around the kind of mark</a> — peels or microchanneling, paced rather than escalated, with the home routine prescribed so the two halves of the plan agree with each other.',
      },

      { h2: 'When a home routine is the wrong answer' },
      {
        p: 'Some marks are not a routine problem. A mark that is getting darker rather than flatter, a mark that is raised or textured, a mark that appeared alongside a change in the skin itself, or a patch that is genuinely irregular in shape and colour — those want an assessment, not a serum.',
      },
      {
        p: 'That is what the first visit is for. It is a consultation and a skin analysis, and the modality is chosen from what the skin is doing that day rather than from what arrived before it. The <a href="/services/melasma-treatment/">melasma page</a> sets out how a pigment plan is paced, and <a href="/services/facial/">what a facial here actually involves</a> covers the assessment itself.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to fade a dark spot at home?',
        answer:
          'A recent mark that has stopped being irritated usually shifts within four to six weeks. A post-inflammatory mark takes a few months. Sun damage takes longer than most people expect, because the pigment sits in the deeper layers and the skin has to turn over around it. If a mark has not moved at all in eight weeks of a consistent routine, the thing holding it in place is usually the daily sunscreen rather than the active.',
      },
      {
        question: 'Can I fade a dark spot with a strong home peel?',
        answer:
          'No, and this is the mistake that turns a mark into a scar. Over-the-counter acid on its own, applied at a strength intended for a different kind of skin, is a fresh injury — and a fresh injury produces more pigment, not less. On melanin-rich skin the response is stronger and lasts longer. A professional peel is different because the strength, the timing and the aftercare are all managed; a home peel has none of the three.',
      },
      {
        question: 'Does vitamin C fade dark spots?',
        answer:
          'It supports the fading process and it is worth using, but it is not what gets rid of a mark on its own. Ascorbic acid inhibits tyrosinase, which slows the production of new melanin, so it works on pigment that has not formed yet and gradually reduces existing ones over months. It cannot reach pigment that has already settled into the deeper layers, which is what the in-studio work is for. The combination that holds a result is a treatment that reaches the existing pigment and a daily routine that stops new pigment forming.',
      },
      {
        question: 'Why does my dark spot keep coming back?',
        answer:
          'Almost always because the daily protection stopped. A mark that clears and returns is a mark that was never given the light protection it needed in the first place, or was given it on the beach days and not on the overcast ones. In San Diego the overcast mornings are the most common reason people stop applying sunscreen, and they are also the ones where UV still passes through the marine layer.',
      },
      {
        question: 'Should I use a retinoid, an azelaic acid or a vitamin C?',
        answer:
          'Any one of them, on its own, at the lowest strength that does something. All three have evidence behind them for pigment, and all three can irritate skin that is already reactive. Using all three at once is the most common route to a disrupted barrier, and a disrupted barrier produces inflammation, which produces more pigment. Azelaic acid is the one worth naming for melanin-rich skin, because it is well tolerated on deeper tones and addresses the inflammation as well as the pigment.',
      },
    ],
    faqHeading: 'Dark spot questions',
    cta: { label: 'Book a consultation', href: '/book/' },
  },

  {
    slug: 'how-to-prepare-for-a-chemical-peel',
    headline: 'How to prepare for a chemical peel, and the week before that does the most work',
    title: 'How to Prepare for a Chemical Peel | KIAMO Skin',
    description:
      'How to prepare for a chemical peel: what to stop, what to start, and the home prep that makes the difference on melanin-rich skin. San Diego.',
    standfirst:
      'A peel is the treatment, but the week before it is what decides how the skin responds to it. On melanin-rich skin that difference is the difference between clearing pigment and making more of it.',
    readingTime: '8 min read',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    image: peel,
    imageAlt:
      'A LIRA chemical peel being applied to the cheek of a client with melanin-rich skin at the KIAMO Skin studio in Mission Hills, San Diego',
    quickAnswer:
      'To prepare for a chemical peel, stop retinoids three to five days before, do not exfoliate or wax the area in the preceding week, start a barrier-supporting routine rather than an active one, and arrive with clean skin. On melanin-rich skin the peel strength is also paced rather than escalated, which is why a series is planned rather than a single session chosen.',
    howTo: {
      name: 'How to prepare for a chemical peel in the week before',
      description:
        'What to stop, what to start, and what to bring to the consultation. Written for clients booked for a LIRA chemical peel at the KIAMO Skin studio in San Diego.',
      steps: [
        'Stop retinoids three to five days before. Tretinoin, Retin-A, adapalene and retinol all come off before a peel, not during it. Retinoids and acids used together strip the barrier faster than either would alone.',
        'Do not exfoliate, wax, thread or laser the area in the seven days before. Every one of those is a small injury, and the peel is applied on top of it.',
        'Stop any other acids in the week before, unless the studio has asked you to keep one running. A brightening serum is usually fine to continue; a second exfoliating acid is not.',
        'Switch to a barrier-supporting routine: a gentle cleanser, a ceramide-rich moisturiser, and sunscreen every morning. Do not start anything new in the week before the appointment.',
        'Send photos of the products you are currently using before the appointment. The routine is read beforehand, which is what lets the recommendation be specific from the first minute rather than assembled in the room.',
        'Arrive with clean skin if you can, and do not wear makeup to the appointment.',
        'Expect the first visit to include the assessment as well as the treatment. The peel strength is set from the skin on the day, not from the booking.',
        'After the peel, do nothing for 48 hours — no actives, no exfoliating acids, no retinoid, and no sauna, hot yoga or a long run in the sun.',
      ],
    },
    body: [
      {
        p: 'The week before a peel decides how the skin responds to it. Not the week after — that one is about protecting what has been done. The week before is about removing everything that would make the barrier unpredictable on the day.',
      },
      {
        p: 'This matters more than most people expect, and it matters most on melanin-rich skin, where an unpredictable barrier does not just feel worse — it changes how the skin pigments in response.',
      },

      { h2: 'Why the prep matters more than the peel' },
      {
        answer:
          'A peel works by making the skin react, and then by controlling how it reacts. If the barrier is already compromised by a retinoid, a recent exfoliation or a strong active, the peel has less to work with and the recovery has more to heal. That is why strength is escalated across a series rather than chosen on the first visit, and it is why the home routine in the week before is prescribed rather than improvised.',
      },
      {
        p: 'The studio will tell you what to do before the first appointment, because the answer depends on the treatment and the skin. What follows is the general shape of it, and it is worth checking against the studio instructions rather than instead of them.',
      },

      { h2: 'What to stop, and when' },
      {
        p: 'Retinoids come off first. Tretinoin, Retin-A, adapalene and retinol all increase cell turnover and, used alongside an acid, they accelerate the loss of the barrier far faster than either would alone. The protocol at this studio is three to five days before the peel and five to seven days afterwards.',
      },
      {
        p: 'Isotretinoin is a different category rather than a longer version of the same rule. Peels are not performed during a course of isotretinoin or soon after one, because the skin is rebuilding from nothing while that is happening, and a peel on rebuilding skin is not a controlled reaction.',
      },
      {
        p: 'Everything that physically touches the skin in the week before is also stopped: waxing, threading, dermaplaning at home, and any laser. A peel is applied to a surface, and the surface should be intact and un-inflamed.',
      },
      {
        p: 'Other acids stop too. A brightening serum is usually fine to keep running — it is not an exfoliant — but a second exfoliating acid is a variable the studio would rather not have on the day.',
      },
      {
        p: 'What to bring to the consultation is covered below.',
      },

      { h2: 'What to start, and what not to' },
      {
        p: 'The week before is not the week to try something. It is the week to be boring and consistent: a gentle cleanser, a ceramide-rich moisturiser, and sunscreen every morning.',
      },
      {
        p: 'Nothing new starts in the seven days before. A product that has not been on the skin for a week is a product whose behaviour is unknown, and the point of the assessment is to know how the skin behaves.',
      },
      {
        p: 'Sunscreen is the exception to "nothing new", and it is the one thing worth being strict about. A peel that fades pigment and a routine that lets UV back in are two halves of the same problem.',
      },

      { h2: 'What happens in the room' },
      {
        p: 'The consultation comes first, every time. Skin tone is recorded, the barrier is assessed on the day rather than assumed, and the kind of mark is identified — because post-inflammatory marks, melasma and sun damage look alike and respond in opposite directions.',
      },
      {
        p: 'Then the peel. It is layered and timed to the skin’s response on the day, and strength escalates across a series rather than in a single visit. On a first visit that often means starting gently, which can feel like less than you came for. It is the opposite.',
      },
      {
        p: 'The full protocol is on the <a href="/services/chemical-peel/">chemical peels page</a>, and the way a peel is chosen against microchanneling is covered in <a href="/journal/chemical-peel-vs-microneedling-san-diego/">peel versus microchanneling</a>.',
      },

      { h2: 'Afterwards' },
      {
        p: 'For 48 hours: nothing. No actives, no exfoliating acids, no retinoid, no sauna, no hot yoga, no long run in the sun, and no other treatments on the same area.',
      },
      {
        p: 'Then the barrier-supporting routine resumes, and the brightening actives come back after the skin has stopped flushing — which is usually a few days, and the studio will tell you when rather than leaving it to a guess.',
      },
      {
        p: 'Daily SPF is what holds the result, and it is the step that gets skipped. Without it the pigment returns, and San Diego overcast mornings are the usual reason people stop applying it.',
      },
      {
        p: 'If a series is planned, the intervals are set at the first appointment and the whole series is scheduled as a block. That is not a scheduling convenience — a peel paced across weeks is doing something different from a peel done as often as the calendar allows.',
      },
    ],
    faqs: [
      {
        question: 'How long before a chemical peel should I stop using retinoids?',
        answer:
          'Three to five days before, and five to seven days afterwards. Retinoids and acids used together strip the barrier faster than either would alone, and a peel is an acid on top of whatever the skin is already carrying. Isotretinoin is a different rule rather than a longer version of the same one: peels are not performed during a course of it or soon after one, because the skin is rebuilding from nothing while that is happening.',
      },
      {
        question: 'Can I wear makeup to my peel appointment?',
        answer:
          'It is better not to. Arrive with clean skin if you can. The peel is applied to the surface, and makeup on the surface at the time of the appointment is something the studio has to work around rather than through. If there is no option other than arriving with makeup on, that is fine — just say so at the consultation so it can be handled properly.',
      },
      {
        question: 'What should I avoid after a chemical peel?',
        answer:
          'For 48 hours: no retinoids, no exfoliating acids, no other treatments on the same area, no sauna, no hot yoga, and no long run in the sun. The skin is rebuilding its barrier, and anything that adds to the inflammation works against that. After that the barrier-supporting routine resumes and the brightening actives come back once the skin has stopped flushing — the studio will tell you when rather than leaving it to a guess.',
      },
      {
        question: 'Why is my first peel gentler than I expected?',
        answer:
          'Because the strength escalates across a series rather than starting high, and the barrier on the day decides where it starts. A first visit that is slightly cautious is not a compromise — it is what makes the second and third visits possible, and it is what keeps a peel from becoming the thing that causes new pigment rather than clearing it. What the studio would rather avoid is a strong first session followed by a reaction that sets the plan back.',
      },
      {
        question: 'How many peels will I need?',
        answer:
          'It depends on the kind of mark and the depth it sits at, and the number is mapped at the first appointment along with the intervals and the total timeline. Most clients see visible change across three to four sessions, with the full result taking longer. The important part is the pacing: a series scheduled as a block with the home routine running alongside it holds its result, and one done sporadically does not.',
      },
    ],
    faqHeading: 'Peel questions',
    cta: { label: 'Book a consultation', href: '/book/' },
  },

  {
    slug: 'how-to-prepare-for-a-hydrafacial',
    headline: 'How to get the most out of a HydraFacial, including what to do the day before',
    title: 'How to Prepare for a HydraFacial | KIAMO Skin',
    description:
      'How to prepare for a HydraFacial: what to do the day before, what to bring, and why the home routine between visits decides the result. San Diego.',
    standfirst:
      'A HydraFacial is a maintenance treatment with a specific job. Doing the day before it right is a short list, and the routine between visits is what decides whether it holds.',
    readingTime: '7 min read',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    image: hydrafacial,
    imageAlt:
      'A HydraFacial treatment in progress at the KIAMO Skin studio in Mission Hills, San Diego — the therapist applying a booster to the client',
    quickAnswer:
      'To get the most out of a HydraFacial, stop retinoids and strong exfoliating acids for two to three days before, do not wax or thread the face in the previous week, arrive with clean skin and no makeup, and bring photos of the products you use. Between visits, the result is held by sunscreen and a barrier-supporting routine rather than by anything done in the room.',
    howTo: {
      name: 'How to prepare for a HydraFacial in six steps',
      description:
        'The short list that makes a HydraFacial work: what to stop, what to send ahead, and what to do in the two days afterwards.',
      steps: [
        'Stop retinoids and strong exfoliating acids for two to three days before. Retinoids increase cell turnover, and extraction on a recently exfoliated face is a rougher experience than it needs to be.',
        'Do not wax, thread or laser the face in the seven days before. Those are small injuries, and the treatment works on the surface.',
        'Do not wear makeup to the appointment. The treatment is applied to bare skin, and arriving with it on changes what can be done.',
        'Send photos of the products you are currently using before the appointment. The routine is read beforehand so the booster can be chosen against it rather than guessed at.',
        'Afterwards, keep it simple for two days: a gentle cleanser, a barrier-supporting moisturiser, and sunscreen every morning. No exfoliating acids, no retinoid, no sauna.',
        'Between visits, keep the sunscreen and the barrier routine running. A HydraFacial holds its result through the routine, not through the appointment.',
      ],
    },
    body: [
      {
        p: 'A HydraFacial is three things at once: enzymatic resurfacing, vortex extraction and infusion of hydration and antioxidants. It is the most forgiving treatment the studio performs, and it is also the one where the preparation makes the least difference to whether it works — which is a compliment to the treatment and a reason not to over-prepare.',
      },
      {
        p: 'The list below is short because the list should be short. A maintenance treatment that needed a complicated preparation would be a different kind of appointment.',
      },

      { h2: 'The day before' },
      {
        answer:
          'Stop retinoids and strong exfoliating acids for two to three days before, leave the face alone for the previous week, and plan on arriving with no makeup. The treatment works on the surface, and a surface that is already irritated is a surface the extraction has to work around.',
      },
      {
        p: 'There is one more thing, and it is the one that pays off most: send photos of the products you are currently using. The routine is read before the appointment so the booster can be chosen against what is actually on the skin, rather than against a category.',
      },
      {
        p: 'The treatment is chosen in the room, on the day, from the skin in front of it — the same way it is for every treatment at the studio. What the photographs do is let that choice start from better information.',
      },

      { h2: 'Why the booster is the point' },
      {
        p: 'A HydraFacial Syndeo performs the extraction and the infusion, but the booster is what makes it a corrective treatment rather than a clean. The extraction clears the follicles; the booster decides what goes back in.',
      },
      {
        p: 'That is why the products matter so much to the preparation. A brightening booster, a barrier-supporting booster and a pore-clearing booster do different things, and choosing between them needs to know what the skin is already using and how it is tolerating it.',
      },
      {
        p: 'For clients treating pigmentation, the booster is selected against the pigment — a brightening formula rather than a general one. For clients whose barrier is compromised, it is selected for barrier support instead, and the treatment does less work on the first visit deliberately. That decision is on the <a href="/services/hydrafacial/">HydraFacial page</a>, along with the rest of the protocol.',
      },

      { h2: 'Why San Diego makes it worth doing' },
      {
        p: 'The municipal water supply runs 280–320 parts per million of dissolved calcium and magnesium. Those minerals bond with sebum and skincare residue into deposits that ordinary cleansing cannot remove.',
      },
      {
        p: 'For a client two miles from the Pacific, that is dual exposure: hard water minerals indoors, salt spray and coastal humidity outdoors. For a client inland, it is the UV rather than the salt, and a different series answers it.',
      },
      {
        p: 'This is why the studio writes for two counties at once — the marine layer inland, the salt water on the coast — and why a treatment that clears the surface and infuses into it suits both better than a treatment that only exfoliates.',
      },

      { h2: 'The two days afterwards' },
      {
        p: 'Gentle cleanser, barrier-supporting moisturiser, sunscreen. No exfoliating acids, no retinoid, no sauna and no heat for a couple of days. There is no downtime and nothing to recover from, but there is a short window where the skin is more receptive than usual, and adding to it is how a routine that should have been easy becomes irritating.',
      },
      {
        p: 'The longer answer is the routine between visits. A HydraFacial is maintenance: it holds its result through daily protection, and the studio prescribes what to use for exactly that reason. A client treating a specific concern usually needs a corrective plan with HydraFacials in it rather than HydraFacials alone, and the <a href="/services/corrective-skin-treatments/">corrective skin treatments page</a> sets out how that plan is assembled.',
      },
      {
        p: 'And if the goal is a monthly rhythm rather than a correction, the <a href="/membership/">membership plans</a> are built around exactly this treatment, because the result of a HydraFacial is what happens between the appointments.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to stop retinoids before a HydraFacial?',
        answer:
          'Two to three days is enough, and it is a gentler requirement than it is before a chemical peel. Retinoids increase cell turnover, and extraction on a face that has recently been turned over is a rougher experience than it needs to be. Beyond that, there is no reason to stop them — the HydraFacial is a maintenance treatment, not a corrective one, and most clients keep using their retinoid throughout.',
      },
      {
        question: 'What should I do after a HydraFacial?',
        answer:
          'Keep it simple for about two days: a gentle cleanser, a barrier-supporting moisturiser and sunscreen every morning. No exfoliating acids, no retinoid, no sauna and no heat for a couple of days. There is no downtime and nothing to recover from, but the skin is more receptive than usual in that window, and adding to it is how a routine that should have been easy becomes irritating.',
      },
      {
        question: 'How often should I get a HydraFacial?',
        answer:
          'Monthly for maintenance, and every four to six weeks as part of a corrective plan. The spacing matters more than the treatment: a HydraFacial holds its result through the routine between appointments, so a schedule that drifts does not just push the next visit back, it gives the work somewhere to go. The monthly membership is built around this rhythm.',
      },
      {
        question: 'Is a HydraFacial the same as a regular facial?',
        answer:
          'No, and the difference is mechanical rather than a matter of degree. A HydraFacial Syndeo performs enzymatic resurfacing, patented vortex extraction at controlled pressure, and precision infusion of hydration and antioxidants, all in one appointment. A conventional facial may exfoliate and may extract, but it does not infuse under pressure. It is also why a HydraFacial suits skin that a scrub does not.',
      },
      {
        question: 'Will a HydraFacial clear my dark spots?',
        answer:
          'On its own, no — a HydraFacial with a brightening booster supports a pigment plan and holds a result between corrective sessions, but it does not reach the pigment that has already settled into the deeper layers. For marks that need to be cleared, the work is done by a paced series of peels or microchanneling, with the HydraFacial holding the result in between. That is why the melasma and hyperpigmentation plans are built around a series with HydraFacials in it, rather than around HydraFacials alone.',
      },
    ],
    faqHeading: 'HydraFacial questions',
    cta: { label: 'Book a consultation', href: '/book/' },
  },
];
