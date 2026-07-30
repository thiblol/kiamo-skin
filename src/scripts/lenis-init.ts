/**
 * Spec §3: Lenis is desktop-only. Native iOS momentum beats any JS smoothing and
 * smooth-scroll libraries measurably degrade INP on mobile.
 *
 * ScrollTrigger must be driven from Lenis's scroll event, or reveals fire against
 * the browser's scroll position while the page renders at Lenis's — the two
 * desync and triggers land early.
 */
export {}; // marks this a module so the top-level await below is legal

const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (isDesktop && !reduce) {
  const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
    import('lenis'),
    import('gsap/ScrollTrigger'),
  ]);

  const lenis = new Lenis({ duration: 1.1 });

  lenis.on('scroll', ScrollTrigger.update);

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}
