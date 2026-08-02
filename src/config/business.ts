/**
 * The only place publishable business facts exist.
 *
 * Sourced verbatim from the approved spec §2 "Verified Business Facts".
 * Anything not present here is NOT to be invented — unknown prices render
 * PRICE_ON_CONSULTATION and the gap is logged in CLIENT-INPUTS.md.
 *
 * Deliberately absent, and enforced by test/guards.test.js:
 *   - the closed Del Mar address
 *   - any star rating or review aggregate
 *   - a surname (Vagaro says "Michaux", an unverified LLC record says "Brown")
 *   - opening hours (never verified; "By appointment only" is universal)
 */

export const PRICE_ON_CONSULTATION = 'Pricing at consultation.';

export const business = {
  name: 'KIAMO Skin & Scalp Health',
  shortName: 'KIAMO Skin',
  /** Public-facing first name only. Never render a surname. */
  ownerName: 'Kiki',
  ownerCredential: 'Licensed Esthetician, California Board of Barbering & Cosmetology',
  experience: '5+ years',

  address: {
    street: '3067 Reynard Way',
    city: 'San Diego',
    region: 'CA',
    postalCode: '92103',
    country: 'US',
    neighborhood: 'Mission Hills',
    full: '3067 Reynard Way, San Diego, CA 92103',
  },

  geo: {
    latitude: 32.7374,
    longitude: -117.169_6,
  },

  phone: {
    display: '(310) 595-0872',
    href: 'tel:+13105950872',
  },

  email: 'kiamoskin@gmail.com',

  /** Vagaro is request-based, not instant. CTAs must read "Request Appointment". */
  bookingUrl: 'https://www.vagaro.com/us02/kiamoskin',
  instagram: {
    handle: '@kiamoskin',
    url: 'https://www.instagram.com/kiamoskin/',
  },
  yelpUrl: 'https://www.yelp.com/biz/kiamo-skin-and-scalp-health-san-diego',

  priceRange: '$$$',

  visit: {
    parking: 'Free parking',
    appointmentOnly: 'By appointment only',
  },

  cancellation:
    'Please give 48 hours notice to reschedule. Cancellations inside 24 hours are charged 50% of the service; no-shows are charged in full.',

  /**
   * Validated against DataForSEO local search demand, capped at ~40 minutes'
   * drive. Replaces the original list, which was seven neighbourhoods inside the
   * city — four of them returning zero local searches.
   *
   * Del Mar is an area served, NOT a location. The Del Mar studio is closed and
   * its address must still appear nowhere; see test/guards.test.js.
   */
  areaServed: [
    'Mission Hills',
    'North Park',
    'Pacific Beach',
    'La Jolla',
    'La Mesa',
    'Chula Vista',
    'Del Mar',
    'Encinitas',
    'Carlsbad',
  ],
} as const;

/**
 * Every verified price. Sourced from the live Vagaro menu, or confirmed directly
 * by the client where Vagaro does not display one.
 *
 * Anything absent here renders PRICE_ON_CONSULTATION. Durations are not listed:
 * Vagaro publishes none, and the guard suite forbids estimating them.
 */
export const verifiedPrices = {
  'first-time-client': '$249',
  hydrafacial: '$259',
  'dermaplane-facial': '$199',
  'dmk-enzyme-1': '$279',
  'lira-light-peel': '$199',
  'keravive-scalp': '$599',
  /** Package total for the series of three, not a per-session rate. */
  'keravive-scalp-series': '$1,499',
  procell: '$475',
  /** Package total for the series of three, not a per-session rate. */
  'procell-series': '$1,199',
  'lira-advanced-peel': '$299',
} as const;
