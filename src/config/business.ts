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

  /** Spec §8 areaServed. */
  areaServed: [
    'Mission Hills',
    'Hillcrest',
    'Bankers Hill',
    'Little Italy',
    'North Park',
    'Pacific Beach',
    'La Jolla',
  ],
} as const;

/** The ONLY three verified prices. Everything else is PRICE_ON_CONSULTATION. */
export const verifiedPrices = {
  'hydrafacial-express': { duration: '60 min', price: '$259' },
  'hydrafacial-deluxe': { duration: '90 min', price: '$349' },
  'keravive-scalp': { duration: '60 min', price: '$699' },
} as const;
