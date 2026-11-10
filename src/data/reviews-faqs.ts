/**
 * FAQs for the reviews page.
 *
 * These answer the questions a reader actually has about a page of copied
 * Google reviews: where they came from, whether they were tampered with, how
 * to leave one, and what a wall of five-star reviews does and does not prove.
 *
 * None of them duplicate a question on another page — the no-reuse rule
 * across the site's FAQ set still holds.
 *
 * Every answer is site copy, so the pronoun and location guards apply to
 * them in full. The words inside a review do not: that material is quoted
 * third-party text and is marked `data-quoted` on the page.
 */
import { business } from '../config/business';

export interface Faq {
  question: string;
  answer: string;
}

export const reviewFaqs: Faq[] = [
  {
    question: 'Where do the reviews on this page come from?',
    answer: `They come from the KIAMO Skin Google Business Profile — the listing that appears when someone searches for a facial in San Diego. The studio's own listing is read directly through the Google Business Profile API, and every review it holds is reproduced here word for word, with the reviewer's name and the month it was posted. Nothing is edited, shortened, or picked for tone.`,
  },
  {
    question: 'Are the reviews on this page edited or shortened?',
    answer:
      'No. Each one appears exactly as it was written, including the punctuation, the capital letters and the run-on sentences. If a review reads as a single breathless paragraph, it reads that way here too. The listing on Google is the original, and every review links back to it, so you can compare the two side by side.',
  },
  {
    question: 'How do I leave a review for KIAMO Skin?',
    answer:
      'Through Google. Reviews for the studio live on the Google Business Profile, and Google is the only place a review there can be written — the button on this page opens the write-a-review form for the listing. A review is worth more than a testimonial for a simple reason: anyone can read it, and anyone can check it.',
  },
  {
    question: 'Why does every review on this page show five stars?',
    answer:
      "Because the listing currently holds no review below five — every review published on the KIAMO Skin profile so far is a five-star review. The page publishes the listing as it stands rather than curating it, and the listing is one click away, so you can see the complete picture, including anything written since this page was last generated.",
  },
];
