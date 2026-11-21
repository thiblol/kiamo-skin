/**
 * The dates the commercial pages carry.
 *
 * Freshness is the single strongest citation signal — 79.1% of the AI
 * citations in the reference study went to content updated in the current
 * year — and the journal already carried real publication and revision
 * dates. The commercial pages carried none at all: a service page and a
 * service-and-city page had no way to say when their prices, protocols or
 * city detail were last checked, so a reader had no basis to trust them and
 * a search engine had no signal to recrawl on.
 *
 * These are the three dates the site can actually evidence:
 *
 *   STUDIO_LAUNCH  — the studio's own launch, and the anchor the homepage's
 *                    WebPage node already uses. The national service pages
 *                    date from it.
 *   AREA_CLUSTER   — the date the area-first restructure landed, and so the
 *                    date the /service-areas/ URLs came into being. Taken
 *                    from the header of public/_redirects, which documents
 *                    the restructure.
 *   CONTENT_REVISED — the date the service pages, the area pages and the
 *                    area-and-service pages were last revised. These are the
 *                    pages the audit rebuilt: the proof band, the reading
 *                    module, the sibling links and the city detail all
 *                    changed, so this is the honest date.
 *
 * Nothing here is a placeholder to be refreshed at leisure. A revision date
 * that does not track a revision is worse than no date, because it teaches a
 * crawler to trust the field and then find it stale.
 */
export const STUDIO_LAUNCH = '2025-01-01';

/** The date the /service-areas/ URL tree came into being. */
export const AREA_CLUSTER = '2026-11-10';

/** The date the commercial pages were last revised. */
export const CONTENT_REVISED = '2026-11-21';

/** "21 November 2026" — the form a reader reads. */
export const formatReviewDate = (iso: string): string => {
  const [year, month, day] = iso.split('-');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${Number(day)} ${months[Number(month) - 1] ?? month} ${year}`;
};
