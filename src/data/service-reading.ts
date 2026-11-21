import { articles } from './articles';
import { journalComparisons } from './journal-comparisons';

/**
 * The reading each treatment page points at.
 *
 * Why this exists:
 *   The audit found thirteen pages receiving no inbound link from the
 *   homepage, the service pages or the area pages — and nine of them were
 *   journal articles. They had been written, published, indexed and then
 *   left unreferenced from the commercial half of the site.
 *
 *   A service page used to carry a single "read next" link, chosen by hand.
 *   One link out of a forty-six-page cluster is not a topic cluster, and it
 *   left the articles that a reader actually wants — the cost of a peel, the
 *   difference between a peel and microchanneling, how to tell one kind of
 *   dark mark from another — with nothing pointing at them.
 *
 *   These are the articles each treatment genuinely raises, and the
 *   comparison pieces that sit alongside it. Every article on the site
 *   appears in at least one list, so none of them is left outside the
 *   cluster.
 */
export const serviceReading: Record<string, { articles: string[]; comparisons: string[] }> = {
  facial: {
    articles: [
      'how-much-does-a-facial-cost-san-diego',
      'three-kinds-of-dark-mark',
      'june-gloom-is-not-sun-protection',
    ],
    comparisons: ['best-facial-san-diego', 'facial-after-sun-exposure-san-diego'],
  },
  hydrafacial: {
    articles: [
      'best-treatment-for-dark-spots-on-face',
      'june-gloom-is-not-sun-protection',
      'how-much-does-a-facial-cost-san-diego',
    ],
    comparisons: ['best-facial-san-diego'],
  },
  'chemical-peel': {
    articles: [
      'chemical-peel-cost-san-diego',
      'chemical-peel-vs-microneedling-san-diego',
      'melasma-chemical-peel-san-diego',
      'dermaplaning-vs-chemical-peel-san-diego',
    ],
    comparisons: ['facial-after-sun-exposure-san-diego'],
  },
  microneedling: {
    articles: [
      'acne-scars-san-diego',
      'microneedling-on-dark-skin-san-diego',
      'chemical-peel-vs-microneedling-san-diego',
    ],
    comparisons: [],
  },
  dermaplaning: {
    articles: [
      'dermaplaning-safe-dark-skin-san-diego',
      'dermaplaning-vs-chemical-peel-san-diego',
    ],
    comparisons: [],
  },
  'scalp-therapy': {
    articles: [
      'san-diego-hard-water-and-your-scalp',
      'san-diego-scalp-treatments-how-keravive-works',
      'dandruff-treatment-san-diego',
    ],
    comparisons: [],
  },
  'dmk-enzyme-therapy': {
    articles: ['san-diego-hard-water-and-your-scalp', 'june-gloom-is-not-sun-protection'],
    comparisons: [],
  },
  'acne-treatment': {
    articles: ['acne-scars-san-diego', 'microneedling-on-dark-skin-san-diego'],
    comparisons: [],
  },
  'hyperpigmentation-treatment': {
    articles: [
      'hyperpigmentation-treatment-guide',
      'best-treatment-for-dark-spots-on-face',
      'best-sunscreen-for-dark-spots',
    ],
    comparisons: ['facial-for-melanin-rich-skin-san-diego', 'best-facial-san-diego'],
  },
  'melasma-treatment': {
    articles: [
      'melasma-chemical-peel-san-diego',
      'three-kinds-of-dark-mark',
      'best-sunscreen-for-dark-spots',
    ],
    comparisons: ['facial-for-melanin-rich-skin-san-diego'],
  },
  'corrective-skin-treatments': {
    articles: [
      'three-kinds-of-dark-mark',
      'how-much-does-a-facial-cost-san-diego',
      'hyperpigmentation-treatment-guide',
    ],
    comparisons: ['best-facial-san-diego'],
  },
};

export interface ReadingLink {
  href: string;
  label: string;
  note: string;
  date: string;
}

/**
 * The reading module for one treatment.
 *
 * The comparison pieces are listed first: they are the pages an AI answer
 * engine cites for a "best X" query, and they are the ones a reader weighing
 * a treatment against the rest of the market opens next.
 */
export const getReadingLinks = (serviceSlug: string): ReadingLink[] => {
  const map = serviceReading[serviceSlug];
  if (!map) return [];

  const comparisons = map.comparisons
    .map((slug) => journalComparisons.find((piece) => piece.slug === slug))
    .filter((piece): piece is (typeof journalComparisons)[number] => Boolean(piece))
    .map((piece) => ({
      href: piece.href,
      label: piece.headline,
      note: piece.standfirst,
      date: piece.dateModified,
    }));

  const notes = map.articles
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article))
    .map((article) => ({
      href: `/journal/${article.slug}/`,
      label: article.headline,
      note: article.standfirst,
      date: article.dateModified,
    }));

  return [...comparisons, ...notes];
};
