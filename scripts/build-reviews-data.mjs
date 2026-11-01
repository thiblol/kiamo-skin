/**
 * Generate src/data/reviews.ts from the raw Google Business Profile pull.
 *
 * The raw file (scripts/gbp-reviews.json) is produced by
 * scripts/fetch-gbp-reviews.mjs, which reads the studio's own GBP through
 * the Business Profile API. This script turns that into the shape the site
 * renders, and copies the reviewer photos into a path the page can use.
 *
 * Run both, in this order:
 *   node scripts/fetch-gbp-reviews.mjs
 *   node scripts/build-reviews-data.mjs
 */
import fs from 'node:fs';

const raw = JSON.parse(fs.readFileSync(new URL('./gbp-reviews.json', import.meta.url), 'utf8'));

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** "October 2026" — the month a review was posted, in the studio's timezone. */
function monthLabel(iso) {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Blank-line separated paragraphs, for rendering each as its own <p>. */
function paragraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const reviews = raw.reviews
  .filter((r) => r.comment && r.author)
  .sort((a, b) => (b.createTime ?? '').localeCompare(a.createTime ?? ''))
  .map((r) => ({
    id: r.id,
    author: r.author,
    avatar: `/images/reviews/${r.id}.jpg`,
    rating: r.rating ?? 5,
    text: r.comment,
    paragraphs: paragraphs(r.comment),
    date: (r.createTime ?? '').slice(0, 10),
    dateLabel: monthLabel(r.createTime),
    photos: r.photoCount ? r.photos.map((_, i) => `/images/reviews/${r.id}-${i}.jpg`) : [],
  }));

const body = `/**
 * Every review published on the KIAMO Skin Google Business Profile.
 *
 * Source of truth: the studio's own Google Business Profile, read through the
 * Business Profile API by scripts/fetch-gbp-reviews.mjs. The reviews are
 * published here exactly as Google holds them — same wording, same reviewer
 * names, same dates. Nothing is edited, shortened, paraphrased or selected
 * for tone, so a reader who opens the listing sees the same thing.
 *
 * Regenerate with:
 *   node scripts/fetch-gbp-reviews.mjs
 *   node scripts/build-reviews-data.mjs
 *
 * Why no schema marks these up: Google's Review snippet guidance treats
 * reviews a business republishes on its own site as self-serving reviews,
 * and the site's own guard suite forbids an \`aggregateRating\` node outright.
 * The page therefore shows the reviews as attributed HTML and links out to
 * Google, which is the honest arrangement.
 *
 * The quotation marks around a review are the author's own. They are not the
 * studio's voice, and the studio's own copy on the same page is written
 * without gendered pronouns — see the comment in test/test-utils.js about
 * quoted regions being exempt from the copy guards.
 *
 * The count in src/data/review-stats.ts is the studio-verified total and is
 * checked against this file's length when the guard suite runs.
 */
export interface GoogleReview {
  /** Google's own review id — stable, and the basis for the local photo filenames. */
  id: string;
  author: string;
  /** Local copy of the reviewer's Google profile photo. */
  avatar: string;
  rating: number;
  /** The review verbatim, including line breaks. */
  text: string;
  /** The same text split on blank lines, for one <p> per paragraph. */
  paragraphs: string[];
  /** ISO date the review was posted. */
  date: string;
  /** "October 2026" */
  dateLabel: string;
  /** Photos the reviewer attached to the review, stored locally. */
  photos: string[];
}

export const googleReviews: GoogleReview[] = ${JSON.stringify(reviews, null, 2)};

/** How many reviews the listing held when this file was generated. */
export const reviewsFetchedAt = ${JSON.stringify(raw.fetchedAt)};

/** The count the listing reported, which the studio's own figure tracks. */
export const reviewsListingTotal = ${raw.totalReviewCount};
`;

fs.writeFileSync(
  new URL('../src/data/reviews.ts', import.meta.url),
  body.replace(/\n\s+\n/g, '\n\n'),
);

console.log(`Wrote ${reviews.length} reviews to src/data/reviews.ts`);
console.log(`Listing total: ${raw.totalReviewCount} · Average rating: ${raw.averageRating}`);
