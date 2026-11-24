/**
 * The facts that identify the studio.
 *
 * THE RULE THESE EXIST FOR
 *   Every factual sentence on this site names KIAMO Skin. A sentence that
 *   could be published by any esthetician in any city carries no entity, so
 *   an answer engine quoting it has nothing to attribute — and nothing to
 *   rank. This block is the concentrated form of that rule: five
 *   declarative statements, each one starting with the brand name, each one
 *   carrying a fact a reader can check.
 *
 * WHY A BLOCK AND NOT MORE HERO COPY
 *   The reference site's service pages open with a hero paragraph whose first
 *   link is the brand name pointing at the homepage, and follow it with a
 *   short block of the same shape: "Upstate Auto Detailing is a detailing
 *   shop at 40 North Street…", "…does mobile detailing at homes…", "…is
 *   open 24/7.", each with a "Last updated" date. The brand is not
 *   mentioned once in that block. It is the subject of every sentence.
 *
 *   That block is the entity paragraph. It is what a model asked "who does
 *   corrective facials in San Diego" needs to find, and it is the first
 *   thing under the hero on every page that has one.
 *
 * THE CONSTRAINTS
 *   Every fact below comes from `config/business.ts`, so the guard suite
 *   passes on it the same way it passes on everything else:
 *   - no opening hours (none were ever verified)
 *   - only prices from `verifiedPrices`
 *   - no rating, no review count, no aggregate
 *   - no pronouns for Kiki
 *   - no outcome guarantees
 */
import { business, verifiedPrices } from '../config/business';
import { CONTENT_REVISED, formatReviewDate } from './page-dates';

export const brandFacts: string[] = [
  `KIAMO Skin performs every treatment in one private treatment room at ${business.address.street} in ${business.address.neighborhood}, ${business.address.city}.`,
  `KIAMO Skin is a licensed facial spa. ${business.ownerName}, a California licensed esthetician with ${business.experience} in corrective skin work, performs every treatment personally.`,
  `KIAMO Skin publishes every price before a booking is made — the first visit is ${verifiedPrices['first-time-client']}, and a HydraFacial is ${verifiedPrices.hydrafacial}.`,
  'KIAMO Skin treats every Fitzpatrick type from I to VI, and raises peel strength only as the barrier allows.',
  `KIAMO Skin is ${business.visit.appointmentOnly.toLowerCase()}, with ${business.visit.parking.toLowerCase()} on site and free cancellation up to 48 hours before.`,
];

/** The date the facts were last checked. */
export const brandFactsUpdated = formatReviewDate(CONTENT_REVISED);
