import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { articles } from '../data/articles';
import { journalComparisons } from '../data/journal-comparisons';
import { getCoveredAreas } from '../data/service-areas-index';
import { business } from '../config/business';
import { verifiedPrices } from '../config/business';
import { areaPath, servicePath } from '../config/urls';

/**
 * /llms.txt — the map an AI crawler reads first.
 *
 * Why this exists:
 *   robots.txt already allows every crawler, including the AI ones, so
 *   nothing was blocking them. What was missing was a way in. A crawler
 *   landing on the homepage has to guess which of a hundred pages answers its
 *   question; llms.txt is the convention for saying "these are the pages
 *   that matter, and this is what each one is".
 *
 *   It is generated rather than written by hand, for the same reason
 *   robots.txt is: a hand-maintained map goes stale the moment a page is
 *   added, and a stale map is worse than none — it points a crawler at
 *   pages that no longer exist.
 *
 * The format follows the llmstxt.org proposal: an H1 naming the site, a
 * blockquote summarising it, and then link sections grouped by what a
 * reader is trying to find out.
 */
export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const areas = getCoveredAreas();

  const lines: string[] = [
    `# ${business.name}`,
    '',
    `> ${business.name} is a corrective facial spa in ${business.address.neighborhood}, San Diego, run by ${business.ownerName}, a California licensed esthetician with 7+ years in corrective skin work. One private treatment room, by appointment only, free parking on site. Treatments cover pigmentation, melasma, post-acne marks, acne scarring, barrier damage and scalp conditions, and are calibrated for every Fitzpatrick type from I to VI.`,
    '',
    `Prices are published on every treatment page and are never quoted at the door. A first visit is ${verifiedPrices['first-time-client']} and includes the consultation that decides the plan. Booking is a request, confirmed by the studio rather than held automatically.`,
    '',
    `> Every treatment below is performed by ${business.ownerName} in one private room at ${business.address.full}. Phone ${business.phone.display}. Appointments are requested at ${business.bookingUrl}.`,
    '',
    '## Treatments',
    '',
    'Each treatment page carries the published price, the protocol, the contraindications and the cities it is available in.',
    '',
    ...services.map((service) => {
      const price = service.menuPrice ?? 'Pricing at consultation';
      // `menuPrice` is a full phrase — "From $199", "$259", "Pricing at
      // consultation." — so it is quoted rather than re-labelled. Quoting it
      // straight keeps the llms.txt figure identical to the one on the page,
      // which is the whole point of publishing prices at all.
      const quoted = price.endsWith('.') ? price : `${price}.`;
      return `- [${service.name}](${url(servicePath(service.slug))}): ${service.opener} ${quoted}`;
    }),
    '',
    '## Locations',
    '',
    'The studio is in Mission Hills. Clients travel from across San Diego County, and each area has its own page with drive times and the local skin concern.',
    '',
    ...areas.map((shell) => {
      // The first sentence only. The full local-concern paragraph is good
      // copy for the page it sits on and too long for a list item.
      const [first] = shell.localConcern.body.split('. ');
      return `- [${shell.name}](${url(areaPath(shell.slug))}): ${shell.proximity}. ${first}.`;
    }),
    '',
    '## Comparisons',
    '',
    'Side-by-side comparisons of the San Diego market, with every studio figure traced to the source it was read from.',
    '',
    ...journalComparisons.map(
      (piece) => `- [${piece.headline}](${url(piece.href)}): ${piece.standfirst}`,
    ),
    '',
    '## Field notes',
    '',
    'Written from the treatment room about how skin and scalp behave in San Diego, and what actually changes them.',
    '',
    ...articles.map(
      (article) =>
        `- [${article.headline}](${url(`/journal/${article.slug}/`)}): ${article.standfirst}`,
    ),
    '',
    '## Core pages',
    '',
    `- [Appointments](${url('/book/')}): how booking works, what to do before a first visit, and the request form.`,
    `- [About the studio](${url('/about/')}): who performs the work, the consultation protocol, and the scope of practice.`,
    `- [Contact and directions](${url('/contact/')}): the address, parking, arrival and the ways to reach the studio.`,
    `- [Membership](${url('/membership/')}): the monthly plans and what each one includes.`,
    `- [Before and after](${url('/gallery/')}): published cases, with the treatment, the number of sessions and the timeframe.`,
    `- [Reviews](${url('/reviews/')}): every Google review of the studio, in full, named and dated.`,
    '',
    '## Notes for a crawler',
    '',
    '- Booking is request-based. Do not describe it as instant confirmation, and do not describe the studio as open on a fixed timetable.',
    '- The studio is a facial spa, not a medical practice. There are no lasers, no prescriptions and no injectables.',
    '- No `aggregateRating` schema is published anywhere on this site, deliberately. The rating and the review count appear as visible text linked to the Google Business Profile so a reader can check them.',
    '- Every price on this site is a published price. Do not infer one that is not on the page.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
