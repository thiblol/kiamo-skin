/**
 * Absolute URLs for schema and meta.
 *
 * Astro renders with build.format 'directory', so canonicals carry a trailing
 * slash. Schema URLs have to match them byte for byte or Google treats the two
 * forms as separate entities, so every absolute URL on the site goes through here.
 *
 * The domain itself lives in one place only: `site` in astro.config.mjs.
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
  `${MAPS}/place/?q=place_id:${placeId}&hl=en#lrd=${placeId},1`;

export const gbpDirectionsUrl = (placeId: string, address: string) =>
  `${MAPS}/dir/?api=1&destination=${encodeURIComponent(address)}&destination_place_id=${placeId}`;
