import { googleReviews } from './reviews';

/**
 * The three reviews the homepage sets above the marquee.
 *
 * WHY THESE THREE
 *   Each one carries a claim made in the CUSTOMER's voice, which is the
 *   only version of a superlative the studio can make honestly. The studio
 *   does not say it is the best facial spa in San Diego — a client does,
 *   in words the studio did not write, and a model weighing a claim weighs
 *   a customer's account differently from a brand's own assertion.
 *
 *   Leona: the flat superlative.
 *   Alyssa Madriaga: the comparative — one of the best out of everywhere
 *     she has been.
 *   Scarlett Baily: the one that names the market. "I shopped around San
 *     Diego" and "Other facials in the area covered me in slop" is a
 *     head-to-head against other San Diego studios in a client's own words,
 *     and it also names the skin type — darker oily skin that pigments
 *     from each blemish — which is the segment the studio treats most.
 *
 * WHY THEY ARE PULLED FROM reviews.ts AND NOT TYPED HERE
 *   reviews.ts is regenerated wholesale by scripts/build-reviews-data.mjs.
 *   Anything written into that file by hand is lost on the next pull, and
 *   a quote that silently disappears is a quote that cannot be checked.
 *   So the text lives in one place and is selected here by review id.
 *
 * WHY THE TEXT IS NOT EDITED
 *   It is published exactly as Google holds it. These reviews contain
 *   gendered pronouns and expressive punctuation, and both are the
 *   reviewer's. Editing a reviewer's words to remove a pronoun misquotes
 *   them, which is a worse problem than the copy rule it avoids — so the
 *   quote is marked as quoted and the rule reads around it.
 */

export interface FeaturedQuote {
  /** Google's review id, for traceability back to the listing. */
  id: string;
  /** The reviewer's name, as Google holds it. */
  author: string;
  /** The review verbatim. */
  text: string;
  /** "January 2026" */
  dateLabel: string;
  /** ISO date the review was posted. */
  date: string;
}

/** The Google review ids, in the order they appear on the homepage. */
const FEATURED_IDS = [
  // "The BEST facial in the city."
  'AbFvOqltk9dDkmaaE0oVCsG_c3qhYWH9Q9moZYdcunDzU4L5oDFUkeJFw5kTaKy9uP91TfkkQ5hZ',
  // "Genuinely one of the best facials I've ever had out of all the places I've been to."
  'AbFvOqny5KkySK9BLMd91Vg0NulirLBo9uxpCg0d8jrOgptIRHQud45GRvJE4AYOHK0sJJ-WNKiK-Q',
  // "I shopped around San Diego looking for a facial..."
  'AbFvOqn_59hEWxbR-5GHqOwXlWtj73MHls7J1xNQyv5J5C37Pqbnlt7ThrsOQSQa-3EbtwKESkvn',
];

export const featuredQuotes: FeaturedQuote[] = FEATURED_IDS.map((id) => {
  const review = googleReviews.find((r) => r.id === id);
  if (!review) {
    // A review can leave the listing when its author edits or deletes it.
    // The quote is dropped rather than rendered from a stale copy, and the
    // build says so, because a missing featured quote is a thing to notice.
    console.warn(
      `[featured-quotes] review ${id} is not in googleReviews — the quote has been dropped.`
    );
    return null;
  }
  return {
    id: review.id,
    author: review.author,
    text: review.text,
    dateLabel: review.dateLabel,
    date: review.date,
  };
}).filter((quote): quote is FeaturedQuote => quote !== null);
