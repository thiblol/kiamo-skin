/**
 * Real Yelp reviews, plainly attributed. No stars, no aggregate, no schema
 * rating — spec §2: all 15 Yelp reviews are filtered as "not recommended" and
 * Vagaro has none, so any rating would be fabricated.
 *
 * Selection constraint: spec §2 requires pronoun-free copy, and several of the
 * strongest quotes ("She's truly gifted!", "makes you feel like you're her only
 * client") name a pronoun. Those are excluded rather than edited. This is also
 * why the spec's illustrative attribution — "Katarina L., Yelp" — isn't used:
 * that reviewer's quotable fragment contains "her".
 *
 * These reviews are ~5 years old and predate the Mission Hills studio.
 * Replacing them with the current Instagram "Reviews" story highlight is a
 * CLIENT-INPUTS.md item.
 */

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Worth every penny. My skin has never looked better.',
    attribution: 'Jessica L., Yelp',
  },
  {
    quote: 'My skin was glowing when I left!',
    attribution: 'Leigh B., Yelp',
  },
  {
    quote: 'Facial muscles activated like a workout for the face.',
    attribution: 'Kelly W., Yelp',
  },
];
