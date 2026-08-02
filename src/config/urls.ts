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
