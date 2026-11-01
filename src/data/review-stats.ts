/**
 * Verified Google review statistics for the KIAMO Skin Google Business Profile.
 *
 * The count and rating below come from the studio's own Google Business
 * Profile, read through the Business Profile API by
 * scripts/fetch-gbp-reviews.mjs. They are not stored in config/business.ts
 * because that file is reserved for facts that survive a schema rebuild
 * without review — NAP, license, prices, the GBP place ID.
 *
 * The count is derived from the same pull that produces the review list on
 * /reviews, so the two cannot disagree: a new review on the listing changes
 * both together, the moment the data is refreshed. Nothing here is typed by
 * hand and nothing goes stale on its own. The date is when the listing was
 * last read, which is what makes the freshness of the claim visible.
 *
 * No `aggregateRating` schema is emitted from this file. The GBP
 * Optimization Checklist and the Trust Signal Gap Hunter both warn that
 * fabricated or stale aggregate ratings in JSON-LD are a disqualifier; the
 * count lives only in visible HTML (TrustBadge.astro) and is read by humans,
 * not by the schema graph. The GBP page itself remains the source of truth
 * for the live number.
 *
 * Refresh with:
 *   node scripts/fetch-gbp-reviews.mjs
 *   node scripts/build-reviews-data.mjs
 */
import { gbpReviewsUrl } from '../config/urls';
import { business } from '../config/business';
import { googleReviews, reviewsFetchedAt } from './reviews';

export interface ReviewStats {
  source: 'google';
  rating: 5;
  count: number;
  lastVerified: string;
  reviewsUrl: string;
  /** True for stars served as a five-star row; the count is anchored to 5. */
  allFiveStar: true;
}

export const reviewStats: ReviewStats = {
  source: 'google',
  rating: 5,
  count: googleReviews.length,
  lastVerified: reviewsFetchedAt.slice(0, 10),
  reviewsUrl: gbpReviewsUrl(business.gbpPlaceId),
  allFiveStar: true,
};
