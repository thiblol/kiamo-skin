/**
 * Treatment-room clips shot for Instagram, re-encoded for the web.
 *
 * The originals are HEVC at 6–17 Mbps (44.7 MB for the three), which Chrome and
 * Firefox refuse to decode. Each is transcoded to H.264 High at two widths, audio
 * stripped — they autoplay muted, so the track was only weight — and written with
 * `+faststart` so playback starts before the file finishes arriving.
 *
 * `uploadDate` is the source file's container creation_time, not the date it was
 * added to the site. reel-studio's .mov carries no creation tag: the field is
 * omitted rather than guessed, and VideoObject treats it as optional.
 *
 * Durations are read from the encodes and must stay in sync with them — the
 * schema publishes them as ISO 8601, and a wrong figure is a wrong claim.
 */
export interface Reel {
  /** Basename in public/videos: `${slug}-720.mp4`, `-480.mp4`, `-poster.jpg`. */
  slug: string;
  /** Caption under the clip. Doubles as the VideoObject name. */
  title: string;
  /** One line of context. Doubles as the VideoObject description. */
  body: string;
  /** Describes the footage for anyone who cannot see it. */
  alt: string;
  /** Seconds, matching the encode exactly. */
  duration: number;
  /** ISO date from the source container, where one exists. */
  uploadDate?: string;
  /** Deep link to the treatment page, where the clip shows a named service. */
  href?: string;
}

export const reels: Reel[] = [
  {
    slug: 'reel-procell',
    title: 'Procell microchanneling',
    body: 'Controlled micro-channels through active breakout and scarring, on melanin-rich skin.',
    alt: 'A gloved esthetician passing a Procell microchanneling handpiece across a client’s cheek',
    duration: 12.63,
    uploadDate: '2026-06-19',
    href: '/treatments/procell-microchanneling',
  },
  {
    slug: 'reel-keravive',
    title: 'Keravive scalp therapy',
    body: 'HydraFacial Keravive at the scalp, worked through the part in sections.',
    alt: 'A client reclined at the treatment bed while the scalp is worked through in sections',
    duration: 4.9,
    uploadDate: '2026-02-26',
    href: '/treatments/keravive-scalp',
  },
  {
    // The handpiece is not identifiable from the footage, so the copy stays with
    // what is visible — the room and the treatment — and names no device.
    slug: 'reel-studio',
    title: 'Inside the Mission Hills studio',
    body: 'A corrective facial in progress, in the treatment room off Washington Street.',
    alt: 'A facial in progress in the KIAMO Skin treatment room, client reclined under an eye mask',
    duration: 14.27,
  },
];
