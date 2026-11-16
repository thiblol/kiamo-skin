/**
 * Scroll depth, with the section the reader was in.
 *
 * The homepage is over 16,000px tall on desktop. GA4's built-in
 * `scroll_depth` event reports a percentage and never fires for a reader who
 * does not scroll at all, so it cannot answer the only question the page
 * raises: which block was the last one they saw?
 *
 * Four thresholds, each fired once. The event carries the section that
 * occupies the viewport at that depth, so the report can say "the reader
 * stopped in the areas list" rather than "73%".
 *
 * The thresholds are read from the document height at the moment they are
 * crossed, not from the page load, because the reels rail and the treatment
 * images change the document height as they load.
 *
 * On desktop, Lenis animates the scroll, so the first scroll event can
 * arrive some way past a threshold. The threshold still fires — every one at
 * or below the current depth fires at once — and the section label is read at
 * the moment the event fired, which is the section the reader was actually in.
 */
const THRESHOLDS = [25, 50, 75, 90];

/** The GA4 global, declared here because the site has no analytics typings. */
declare function gtag(
  command: string,
  event: string,
  params?: Record<string, unknown>,
): void;

/** The section headings, used to name the block the reader was in. */
const labelFor = (y: number) => {
  const headings = [...document.querySelectorAll<HTMLElement>('main h2')];
  let current = 'hero';
  for (const heading of headings) {
    if (heading.getBoundingClientRect().top + window.scrollY <= y) {
      current = heading.textContent?.replace(/\s+/g, ' ').trim().slice(0, 60) ?? current;
    }
  }
  return current;
};

if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
  const reached = new Set<number>();

  const check = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    for (const threshold of THRESHOLDS) {
      if (reached.has(threshold)) continue;
      if ((window.scrollY / scrollable) * 100 < threshold) continue;

      reached.add(threshold);
      gtag('event', 'scroll_depth', {
        event_category: 'engagement',
        event_label: `${threshold}% — ${labelFor(window.scrollY)}`,
        value: threshold,
        transport_type: 'beacon',
      });
    }
  };

  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check, { passive: true });
  check();
}
