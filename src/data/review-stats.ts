/**
 * Verified Google review statistics for the KIAMO Skin Google Business Profile.
 *
 * The count and rating below are the verified values reported by the studio on
 * 2026-10-03 (40 five-star Google reviews). They are not stored in
 * config/business.ts because that file is reserved for facts that survive a
 * schema rebuild without review — NAP, license, prices, the GBP place ID.
 * Review counts drift and are re-verified periodically; living in their own
 * file keeps the freshness signal and the verification date visible.
 *
 * No `aggregateRating` schema is emitted from this file. The GBP
 * Optimization Checklist and the Trust Signal Gap Hunter both warn that
 * fabricated or stale aggregate ratings in JSON-LD are a disqualifier; the
 * count lives only in visible HTML (TrustBadge.astro) and is read by humans,
 * not by the schema graph. The GBP page itself remains the source of truth
 * for the live number.
 *
 * `lastVerified` is the date the studio reported the count. When the studio
 * confirms a new number, update the count, the rating (if it ever changes),
 * and `lastVerified` together. The TrustBadge surfaces `lastVerified` so the
 * freshness of the claim is visible on the page.
 */
import { gbpReviewsUrl } from '../config/urls';
import { business } from '../config/business';

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
  count: 40,
  lastVerified: '2026-10-03',
  reviewsUrl: gbpReviewsUrl(business.gbpPlaceId),
  allFiveStar: true,
};
