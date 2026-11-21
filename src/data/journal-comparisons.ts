import type { ImageMetadata } from 'astro';

import studio from '../assets/kiamo-skin-studio-mission-hills-san-diego.jpg';
import uvExposure from '../assets/san-diego-uv-exposure-skin-damage-protection.jpg';
import melaninSkin from '../assets/corrective-skin-treatment-melanin-rich-approach-san-diego.jpg';

/**
 * The comparison pieces.
 *
 * Why they are here rather than in articles.ts:
 *   These three pages are not articles in the template the other sixteen use.
 *   Two are comparison tables built on src/data/third-party-facts.ts, where
 *   every figure belongs to another business and is checked against the file
 *   it was read from. The third is a comparison of the same kind. They have
 *   their own pages, their own schema and their own guard contract, and
 *   folding them into the article template would have meant rewriting them.
 *
 *   They also keep their original /facial/ URLs, deliberately. A previous
 *   session kept them there because they are the site's strongest AI-citation
 *   asset — they rank for "best facial spa in San Diego" and "best facial spa
 *   for dark skin in San Diego". Moving a page that ranks is a risk paid for
 *   a tidier URL tree, and the tidier tree is worth less than the rankings.
 *
 *   What they lacked was a parent. Three pages sitting outside both the
 *   service tree and the journal, linked from nowhere but two sentences of
 *   body copy, is a namespace nobody walks. So the journal index lists them
 *   — they are editorial pieces, which is what the journal is — and the
 *   homepage carries them in its reading module.
 */
export interface JournalComparison {
  slug: string;
  href: string;
  headline: string;
  standfirst: string;
  /** The date the piece was last checked against its sources. */
  dateModified: string;
  readingTime: string;
  image: ImageMetadata;
  imageAlt: string;
  /** The label on the link. */
  linkLabel: string;
}

export const journalComparisons: JournalComparison[] = [
  {
    slug: 'best-facial-san-diego',
    href: '/facial/best-facial-san-diego/',
    headline: 'Best Facial Spas in San Diego: 9 Compared',
    standfirst:
      'Nine San Diego facial spas side by side on published price, rating and review count — and what makes a facial safe for your skin tone.',
    dateModified: '2026-11-19',
    readingTime: '12 min read',
    image: studio,
    imageAlt:
      'The KIAMO Skin treatment room in Mission Hills, San Diego — one treatment room with a single treatment bed',
    linkLabel: 'Compare nine studios',
  },
  {
    slug: 'facial-after-sun-exposure-san-diego',
    href: '/facial/facial-after-sun-exposure-san-diego/',
    headline: 'Facial After Sun Exposure in San Diego',
    standfirst:
      'The 24–72 hour window, what to do and what to leave alone, and how to support barrier recovery without making the redness worse.',
    dateModified: '2026-11-19',
    readingTime: '7 min read',
    image: uvExposure,
    imageAlt:
      'An overcast San Diego coastline under a bright marine layer — the light that makes UV exposure easy to underestimate',
    linkLabel: 'Read the timing guide',
  },
  {
    slug: 'facial-for-melanin-rich-skin-san-diego',
    href: '/facial/facial-for-melanin-rich-skin-san-diego/',
    headline: 'Best Facial Spas for Dark Skin in San Diego',
    standfirst:
      'Seven San Diego studios that treat melanin-rich skin, compared on published price, rating and reviews — and what makes a facial safe for darker tones.',
    dateModified: '2026-11-19',
    readingTime: '9 min read',
    image: melaninSkin,
    imageAlt:
      'A corrective skin treatment performed on melanin-rich skin at the KIAMO Skin studio in Mission Hills, San Diego',
    linkLabel: 'Compare seven studios',
  },
];
