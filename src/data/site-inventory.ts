import { services } from './services';
import { articles } from './articles';
import { journalComparisons } from './journal-comparisons';
import { getCoveredAreas } from './service-areas-index';
import { absolute, areaPath, journalPath, servicePath } from '../config/urls';

/**
 * The site's machine-readable inventory.
 *
 * WHAT THIS IS
 *   A list of the pages that matter, each with a URL, a name and a
 *   one-line description, emitted as the `hasPart` array on the homepage's
 *   WebSite schema node.
 *
 * WHY IT EXISTS
 *   A crawler that lands on the homepage has to guess which of a hundred
 *   pages answers its question. The sitemap answers "what exists"; this
 *   answers "what is here and what each thing is for", in the form a model
 *   reads.
 *
 *   It is the same map /llms.txt already gives a reader, in JSON-LD
 *   clothing. Both are generated from the same data files for the same
 *   reason: a hand-maintained list goes stale the moment a page is added,
 *   and a stale list is worse than none.
 *
 * WHAT IS IN IT
 *   The editorial and commercial spine — treatments, area hubs, journal
 *   pieces, comparison pages and the handful of core pages. The 57
 *   service-by-area permutations are deliberately excluded: they are URL
 *   variations on a treatment, and listing them here would make the
 *   inventory a duplicate of the sitemap rather than a map.
 *
 * THE PRICE RULE
 *   A description may carry the studio's own published price. It may not
 *   carry anybody else's.
 *
 *   The price guard reads the rendered page's text, and that text KEEPS the
 *   contents of <script> tags — the JSON-LD has to be inspected for schema
 *   reasons. So a price inside a hasPart description is seen by the guard
 *   as a price printed on the page, and the third-party attribution guard
 *   asks where it came from.
 *
 *   The studio's own prices pass: they are in the verified price list, and
 *   the attribution guard skips them. A competitor's price would not: it
 *   is not the studio's, and the homepage carries no marked source for
 *   it. The inventory guard below asserts that distinction, so a
 *   competitor figure can never reach the homepage's schema by accident.
 */

export interface InventoryEntry {
  /** Absolute URL, with a trailing slash. */
  url: string;
  /** The page's name, as it appears in its own heading. */
  name: string;
  /** One line on what the page is for. */
  description: string;
}

/**
 * The pages that are not generated from a data file.
 *
 * These ten are hand-written, and they are the only hand-written part of
 * the inventory. The guard below fails the build if one of them is renamed
 * or deleted, so the list cannot drift out of step with the site.
 */
const corePages: InventoryEntry[] = [
  {
    url: '/services/',
    name: 'Treatments & Prices in San Diego',
    description:
      'Every treatment the studio offers, with the published price of each one and the concern it treats.',
  },
  {
    url: '/service-areas/',
    name: 'Corrective Facials Across San Diego County',
    description:
      'Drive times and the local skin concern for each area clients travel from, across San Diego County.',
  },
  {
    url: '/journal/',
    name: 'Field Notes on Skin and Scalp in San Diego',
    description:
      'Written from the treatment room about how skin behaves in this climate and what actually changes it.',
  },
  {
    url: '/about/',
    name: 'About the Studio and the Esthetician',
    description:
      'Who performs the work, the consultation protocol, the scope of practice and the clinical equipment.',
  },
  {
    url: '/book/',
    name: 'Request an Appointment',
    description:
      'How booking works, what to do before a first visit, and the request form for an appointment.',
  },
  {
    url: '/gallery/',
    name: 'Before and After Results in San Diego',
    description:
      'Published cases with the treatment, the number of sessions and the timeframe each one took.',
  },
  {
    url: '/reviews/',
    name: 'Client Reviews',
    description:
      'Every Google review of the studio, published in full, named and dated, with the source linked.',
  },
  {
    url: '/contact/',
    name: 'Contact and Directions',
    description:
      'The address, parking, arrival instructions and the ways to reach the studio.',
  },
  {
    url: '/membership/',
    name: 'Monthly Facial Memberships in San Diego',
    description:
      'The monthly plans, what each one includes, and how a corrective series is paced across visits.',
  },
  {
    url: '/melanin-rich-skin/',
    name: 'Facials for Melanin-Rich Skin in San Diego',
    description:
      'Why pigmentation behaves differently on melanin-rich skin, and how the protocols are calibrated for it.',
  },
];

/**
 * The whole inventory.
 *
 * Built fresh on every call from the same arrays that build the pages, so
 * adding a treatment or publishing an article puts it in the inventory in
 * the same build.
 *
 * The `name` on each entry is the page's own headline, and the
 * `description` is the page's own meta description — the two strings a
 * reader and a crawler already see on that page. Using them means the
 * inventory cannot describe a page differently from the page itself.
 */
export const buildSiteInventory = (site: URL | undefined): InventoryEntry[] => [
  ...services.map((service) => ({
    url: absolute(servicePath(service.slug), site),
    name: service.headline,
    description: service.description,
  })),
  ...getCoveredAreas().map((shell) => ({
    url: absolute(areaPath(shell.slug), site),
    name: `Corrective facials in ${shell.name}`,
    description: shell.schemaDescription,
  })),
  ...articles.map((article) => ({
    url: absolute(journalPath(article.slug), site),
    name: article.headline,
    description: article.standfirst,
  })),
  ...journalComparisons.map((piece) => ({
    url: absolute(piece.href, site),
    name: piece.headline,
    description: piece.standfirst,
  })),
  ...corePages.map((page) => ({
    ...page,
    url: absolute(page.url, site),
  })),
];
