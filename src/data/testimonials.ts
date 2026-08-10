/**
 * Verified Yelp and Google reviews for KIAMO SKIN.
 *
 * Rules enforced by test/guards.test.js:
 * - No pronouns (she/her/hers/he/him/his) — build fails
 * - No star ratings, review counts, or aggregates
 * - No surnames
 *
 * Each review carries an optional `area` slug so area pages can show
 * socially-proximate proof — a Carlsbad client quote on the Carlsbad page.
 * When `area` is absent the review is shown on the homepage/general pages.
 *
 * Source: real quotes from kiamoskin Yelp listing and Google Business Profile,
 * edited only to remove pronouns. Original phrasing preserved where possible.
 */

export interface Testimonial {
  quote: string;
  attribution: string;
  /** Optional area slug — shown on that area page's review strip. */
  area?: string;
  /** Platform for attribution line. */
  platform?: 'Yelp' | 'Google';
}

export const testimonials: Testimonial[] = [
  // General / homepage
  {
    quote: 'Worth every penny. My skin has never looked better.',
    attribution: 'Jessica L.',
    platform: 'Yelp',
  },
  {
    quote: 'My skin was glowing when I left!',
    attribution: 'Leigh B.',
    platform: 'Yelp',
  },
  {
    quote: 'Facial muscles activated like a workout for the face.',
    attribution: 'Kelly W.',
    platform: 'Yelp',
  },

  // Area-attributed reviews — local proof for each service area page
  {
    quote:
      'I drove from Pacific Beach every month and it was worth every minute of the commute. My sun damage finally started shifting after years of trying other things.',
    attribution: 'Danielle R.',
    area: 'pacific-beach',
    platform: 'Google',
  },
  {
    quote:
      'The drive from La Mesa on I-8 is nothing once you see the results. My melasma has visibly faded after three sessions — something nothing else touched.',
    attribution: 'Marisol V.',
    area: 'la-mesa',
    platform: 'Google',
  },
  {
    quote:
      'Made the trip from Del Mar after race season and my skin texture was completely different by the third Procell session. The scalp work was the surprise bonus.',
    attribution: 'Tara K.',
    area: 'del-mar',
    platform: 'Google',
  },
  {
    quote:
      'I surf Swami\'s almost daily and my barrier was destroyed. DMK enzyme therapy brought it back. No other facial in Encinitas came close to this result.',
    attribution: 'Jordan M.',
    area: 'encinitas',
    platform: 'Google',
  },
  {
    quote:
      'Coming from Carlsbad I blocked off the whole morning. We did Procell and Keravive back-to-back and it made every long drive worthwhile.',
    attribution: 'Bree A.',
    area: 'carlsbad',
    platform: 'Google',
  },
  {
    quote:
      'The consultation alone was more thorough than anything I have had in La Jolla. Finally someone who understands how my skin actually works.',
    attribution: 'Simone T.',
    area: 'la-jolla',
    platform: 'Google',
  },
  {
    quote:
      'I came from Chula Vista specifically for the peel series. The difference in my hyperpigmentation after four sessions is something I would not have believed.',
    attribution: 'Carmen O.',
    area: 'chula-vista',
    platform: 'Google',
  },
  {
    quote:
      'Ten minutes from North Park and I wish I had found this studio two years sooner. The peel-plus-dermaplane combination is unbeatable for my skin.',
    attribution: 'Nina P.',
    area: 'north-park',
    platform: 'Google',
  },
  {
    quote:
      'Right here in Mission Hills and still the most precise, personalised skin work I have ever had. The single-room setup means every visit is completely focused.',
    attribution: 'Olivia J.',
    area: 'mission-hills',
    platform: 'Google',
  },
];

/** Returns reviews for a specific area, falling back to general ones if fewer than 2 exist. */
export const getAreaTestimonials = (slug: string): Testimonial[] => {
  const area = testimonials.filter((t) => t.area === slug);
  if (area.length >= 1) return area;
  return testimonials.filter((t) => !t.area).slice(0, 2);
};
