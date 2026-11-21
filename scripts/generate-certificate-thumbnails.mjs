/**
 * generate-certificate-thumbnails.mjs
 * ----------------------------------
 * Cuts a small, optimised copy of each certificate for the thumbnail that
 * links to the full-size one.
 *
 * WHY THIS EXISTS
 * The certificate thumbnails render at 80 pixels tall. They were being
 * served from the full-size scans — 71KB and 117KB, at 1000 pixels wide —
 * so every visitor who reached the About page or the homepage downloaded a
 * quarter of a megabyte to look at a thumbnail the size of a postage stamp.
 * The full-size file was also loaded twice on the page, once for the
 * thumbnail and once for the modal that the thumbnail opens.
 *
 * A 160-pixel-wide WebP is enough for the thumbnail at twice the density,
 * and is about a fiftieth of the bytes. The modal still opens the original.
 *
 * Run it with `npm run build:assets`, or directly:
 *   node scripts/generate-certificate-thumbnails.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SOURCES = [
  {
    from: 'public/images/hydrafacial-certified-provider-san-diego.jpg',
    to: 'public/images/certificates/hydrafacial-certified-provider-160.webp',
    width: 160,
  },
  {
    from: 'public/images/dmk-certified-skin-therapist-kiki-kiamo.jpg',
    to: 'public/images/certificates/dmk-certified-skin-therapist-160.webp',
    width: 160,
  },
];

await mkdir('public/images/certificates', { recursive: true });

for (const source of SOURCES) {
  const info = await sharp(source.from).metadata();
  const buffer = await sharp(source.from)
    .resize({ width: source.width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  await sharp(buffer).toFile(source.to);
  console.log(
    `${source.to}: ${info.width}x${info.height} → ${source.width}px wide, ${Math.round(
      buffer.length / 1024,
    )}KB`,
  );
}
