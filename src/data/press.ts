import sdvoyagerLogo from '../assets/sd-voyager-feature-kiamoskin-san-diego.png';

/**
 * The press the studio has been featured in.
 *
 * WHAT THIS IS
 *   A band of outlet logos for the publications that have written about the
 *   studio. It is the third-party endorsement the site cannot write for
 *   itself: a studio saying it is the best facial spa in San Diego is a
 *   claim, and a publication saying so is evidence.
 *
 * WHY IT IS A SEPARATE FILE
 *   A band is only worth anything if every logo in it is a real placement.
 *   An empty band, a placeholder band, or a band holding the studio's own
 *   articles would each be worse than no band — the first two look broken
 *   and the third passes off self-published content as independent
 *   endorsement. So the entries live here, each one carrying the URL it was
 *   published at and the date it was published, and the component renders
 *   nothing at all when the list is empty.
 *
 * THE RULE FOR FILLING IT IN
 *   One entry per real placement. The `url` is the article, not the
 *   publication's homepage — a link to the article is worth more than a
 *   link to a domain, and it is what a reader can check. The `publishedOn`
 *   is the date the piece ran.
 *
 *   Never add the studio's own journal articles to this list. A piece the
 *   studio published appearing under "Featured in" is not a third-party
 *   endorsement of anything.
 *
 * THE NAME IN THE URL
 *   One outlet's URL carries the founder's full name in its slug. That is
 *   the outlet's URL and it cannot be changed from here, so the link points
 *   at it. Nothing the studio renders repeats the name: the visible text
 *   and the alt text name the publication and the studio, and the studio's
 *   own pages carry a first name only. The surname rule — Vagaro and an
 *   unverified LLC record disagree on it — is about what the STUDIO asserts
 *   about itself, not about what a third party's URL happens to contain.
 */

export interface PressPlacement {
  /** The publication's name, as it prints itself. */
  outlet: string;
  /** The URL of the article. */
  url: string;
  /** ISO date the piece was published. */
  publishedOn: string;
  /** "3 August 2026" */
  publishedLabel: string;
  /** The logo. */
  logo: ImageMetadata;
  /**
   * The alt text.
   *
   * It names the publication and the studio, because that is what the image
   * is: the logo of a publication that wrote about this studio. It does NOT
   * carry service keywords — a press logo stamped with "facial spa in San
   * Diego" misrepresents what the image depicts.
   */
  alt: string;
}

export const pressPlacements: PressPlacement[] = [
  {
    outlet: 'SD Voyager',
    url: 'https://sdvoyager.com/interview/inspiring-conversations-with-kiki-kiarra-michaux-of-kiamo-skin/',
    publishedOn: '2026-08-03',
    publishedLabel: '3 August 2026',
    logo: sdvoyagerLogo,
    alt: 'SD Voyager — interview with KIAMO Skin in San Diego',
  },
];