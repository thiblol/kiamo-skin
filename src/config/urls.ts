/**
 * Absolute URLs for schema and meta.
 *
 * Astro renders with build.format 'directory', so canonicals carry a trailing
 * slash. Schema URLs have to match them byte for byte or Google treats the two
 * forms as separate entities, so every absolute URL on the site goes through here.
 *
 * The domain itself lives in one place only: `site` in astro.config.mjs.
 *
 * The route builders below are the relative-path half of the same rule. Every
 * internal link on the site is written through one of them, so a URL change
 * is a one-line edit rather than a find-and-replace across thirty-seven files.
 * They are dependency-free on purpose: `src/data/*.ts` imports them inside
 * template-literal HTML strings, and those files are also loaded by the Node
 * test runner, which cannot resolve Astro imports.
 */

/** `/treatments` → `https://host/treatments/`. Root stays `https://host/`. */
export const absolute = (path: string, site: URL | undefined) => {
  const origin = site?.href.replace(/\/$/, '') ?? '';
  const clean = path.replace(/^\/|\/$/g, '');
  return clean ? `${origin}/${clean}/` : `${origin}/`;
};

/** The one LocalBusiness node every other node points at. */
export const businessId = (site: URL | undefined) => `${absolute('/', site)}#business`;

export const websiteId = (site: URL | undefined) => `${absolute('/', site)}#website`;

/**
 * Google Business Profile deep links, built from the verified place ID.
 *
 * The place ID is the stable identifier for the listing, so these survive a name
 * or category change on the profile. `reviews` opens the listing's review tab —
 * it publishes no count and no rating, which is what keeps it inside the spec.
 */
const MAPS = 'https://www.google.com/maps';

export const gbpListingUrl = (placeId: string) => `${MAPS}/place/?q=place_id:${placeId}`;

export const gbpReviewsUrl = (placeId: string) =>
  'https://maps.app.goo.gl/hi8rJcWbu53JcN3s7';

export const gbpDirectionsUrl = (placeId: string, address: string) =>
  `${MAPS}/dir/?api=1&destination=${encodeURIComponent(address)}&destination_place_id=${placeId}`;

// ---------------------------------------------------------------------------
// Route builders
//
// The site is area-first, and the URL says so:
//
//   /services/{service}/            the national, location-neutral service page
//   /service-areas/                 the area index
//   /service-areas/{area}/          the area hub — "Facials in Carlsbad"
//   /service-areas/{area}/{service}/ the money page — "HydraFacial in Carlsbad"
//
// The service×city page hangs under its AREA, not under its service. That is
// the model the reference project uses, and it is the right one here: a
// reader's intent is "a treatment, where I live", and the URL should read
// that way round. It also means the area hub is the natural parent of every
// service page for that city, so the link graph is a tree with lateral
// edges rather than a set of service clusters competing with each other.
//
// Every builder returns the trailing-slash form, matching
// `trailingSlash: 'always'` in astro.config.mjs.
// ---------------------------------------------------------------------------

/** The service index — every treatment with its published price. */
export const servicesPath = () => '/services/';

/** The national service page — "HydraFacial". */
export const servicePath = (service: string) => `/services/${service}/`;

/** The area index. */
export const areasPath = () => '/service-areas/';

/** The area hub — "Facials in Carlsbad". */
export const areaPath = (area: string) => `/service-areas/${area}/`;

/** The money page — "HydraFacial in Carlsbad". */
export const areaServicePath = (area: string, service: string) =>
  `/service-areas/${area}/${service}/`;

/**
 * Legacy treatment slug → service slug.
 *
 * The treatment pages became service pages, and four of them were renamed to
 * match the term people actually search: "chemical peel" (260/mo) rather than
 * "lira peels", "microneedling" (1,000/mo) rather than "procell
 * microchanneling" (10/mo), "scalp treatment" (170/mo) rather than "keravive
 * scalp", and the two concern pages picked up the treatment suffix their titles
 * already used. The brand names stay in the copy — only the URL changed.
 */
export const TREATMENT_TO_SERVICE: Record<string, string> = {
  hydrafacial: 'hydrafacial',
  'lira-peels': 'chemical-peel',
  'procell-microchanneling': 'microneedling',
  dermaplaning: 'dermaplaning',
  'keravive-scalp': 'scalp-therapy',
  'dmk-enzyme-therapy': 'dmk-enzyme-therapy',
  acne: 'acne-treatment',
  hyperpigmentation: 'hyperpigmentation-treatment',
  melasma: 'melasma-treatment',
  'corrective-skin-treatments': 'corrective-skin-treatments',
};

/** The three landing pages that keep their original `/facial/` URLs. */
export const facialLandingPath = (slug: string) => `/facial/${slug}/`;

/** A journal article. */
export const journalPath = (slug: string) => `/journal/${slug}/`;
