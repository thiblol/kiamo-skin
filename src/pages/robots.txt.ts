import type { APIRoute } from 'astro';

/**
 * Generated, not static, so the sitemap URL follows `site` in astro.config.mjs.
 * The old public/robots.txt hardcoded the demo domain and would have survived a
 * domain cutover unnoticed.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
