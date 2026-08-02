/**
 * FAQs for the melanin-rich skin specialism page.
 *
 * Questions come from live People Also Ask on `black esthetician san diego`,
 * `black owned spa san diego` and `facials for black skin` (DataForSEO, San
 * Diego metro, 2026-08-02). None is reused from faqs.ts or treatment-faqs.ts.
 *
 * Same hard rules as every other FAQ set: no pronouns, no price outside
 * verifiedPrices, no durations, no opening hours, no outcome guarantees.
 */
import type { Faq } from './faqs';

export const melaninFaqs: Faq[] = [
  {
    question: 'Where can you find a Black esthetician in San Diego?',
    answer:
      'KIAMO SKIN is a Black-owned studio at 3067 Reynard Way in Mission Hills, San Diego, and treatment is one-to-one with Kiki, a licensed esthetician. Melanin-rich skin is the specialism rather than a service line — acne, scarring, pigmentation and barrier health in Black and brown skin. The studio is minutes from Hillcrest, Bankers Hill and Little Italy, with free parking on site, and clients travel in from Chula Vista, La Jolla, North Park and across the county.',
  },
  {
    question: 'Can a Black person get a chemical peel?',
    answer:
      'Yes — chemical peels are safe on Black skin when the acid, the strength and the pacing are chosen for it. The risk is not the peel itself but over-treatment: melanin-rich skin answers inflammation by producing more pigment, so an aggressive peel can create the exact dark marks it was meant to clear. Every peel here is patch-tested and started gently, with strength escalating across a series. Anywhere willing to put a strong peel on Black skin at a first visit is the wrong room.',
  },
  {
    question: 'What kind of facial is best for Black skin?',
    answer:
      'The best facial for Black skin is the one matched to what the skin is actually doing, which is why the first visit is an assessment rather than a fixed protocol. Congestion and dullness usually start with a HydraFacial; post-inflammatory marks and melasma are worked through with a series of gentle peels; acne scarring and texture call for microchanneling; and skin that stings or flushes needs the barrier rebuilt before anything corrective begins. Choosing the treatment before assessing the skin is how melanin-rich skin gets damaged.',
  },
  {
    question: 'What should you not use on melanin-rich skin?',
    answer:
      'Avoid anything that burns, stings or leaves skin raw, because irritation is what triggers dark marks in the first place — the American Academy of Dermatology advises stopping any product that stings on application, since it may darken existing spots. Skip aggressive scrubs, high-strength acids used without guidance, and unregulated fade creams: researchers have found undisclosed steroids and mercury in some imported skin-lightening products, and prolonged steroid use can leave skin permanently discoloured. Gentle and consistent outperforms strong and occasional on this skin, every time.',
  },
  {
    question: 'Why do dark marks last longer on Black and brown skin?',
    answer:
      'Dark marks last longer on Black and brown skin because the melanocytes are more reactive, so any inflammation produces more pigment and produces it for longer. Post-inflammatory hyperpigmentation is most common and most severe in Fitzpatrick types IV to VI, and in people with darker skin who have acne the incidence runs as high as 65 percent. Where the pigment sits also decides the timeline: surface pigment usually clears over six to twelve months, while deeper pigment can take years and is far more resistant to treatment. This is why controlling the cause comes before fading the mark.',
  },
  {
    question: 'Does sunscreen actually help with dark spots on deeper skin tones?',
    answer:
      'Sunscreen is the treatment, not an afterthought — without it, pigment returns faster than any treatment can clear it. For deeper skin tones the specific advice is a tinted sunscreen containing iron oxide at SPF 30 or higher, because visible light worsens melasma and dark spots and a standard UVA/UVB sunscreen does not block it. San Diego makes this harder than it sounds: the overcast mornings are the usual reason people stop applying it, and the UV is still there behind the marine layer.',
  },
];
