/**
 * Pull the live Google Business Profile reviews for KIAMO Skin.
 *
 * Source: the Google Business Profile API, reached through the studio's
 * Zernio connection (`GET /v1/accounts/{id}/gmb-reviews`). This is the
 * business's own API against its own listing, so the reviews, the reviewer
 * names and the profile photos are all first-party data — not scraped, and
 * not a copy of anyone's Google page.
 *
 * Writes scripts/gbp-reviews.json — the source the curated copy in
 * src/data/reviews.ts is generated from — and downloads each reviewer
 * profile photo to public/images/reviews/ so the page does not depend on
 * Google's CDN staying up.
 *
 * Usage: node scripts/fetch-gbp-reviews.mjs
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const configPath = path.join(os.homedir(), '.zernio', 'config.json');
if (!fs.existsSync(configPath)) {
  console.error(`Error: No Zernio config found at ${configPath}`);
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
if (!config.apiKey) {
  console.error('Error: No Zernio API key in ~/.zernio/config.json');
  process.exit(1);
}

/** The studio's own GBP account. */
const ACCOUNT_ID = '6a704ecddf17280d93022b3a';

const res = await fetch(
  `https://zernio.com/api/v1/accounts/${ACCOUNT_ID}/gmb-reviews?page_size=50`,
  { headers: { Authorization: `Bearer ${config.apiKey}` } },
);
if (!res.ok) {
  console.error(`Error: gmb-reviews returned ${res.status}`);
  process.exit(1);
}
const body = await res.json();

const payload = {
  locationId: body.locationId ?? null,
  averageRating: body.averageRating ?? null,
  totalReviewCount: body.totalReviewCount ?? null,
  fetchedAt: new Date().toISOString(),
  reviews: (body.reviews ?? []).map((r) => ({
    id: r.id,
    author: r.reviewer?.displayName ?? null,
    avatar: r.reviewer?.profilePhotoUrl ?? null,
    isAnonymous: r.reviewer?.isAnonymous ?? false,
    rating: r.rating ?? null,
    comment: r.comment ?? null,
    createTime: r.createTime ?? null,
    updateTime: r.updateTime ?? null,
    ownerReply: r.reviewReply?.comment ?? null,
    ownerReplyTime: r.reviewReply?.updateTime ?? null,
    photoCount: r.photoCount ?? 0,
    photos: r.photos ?? [],
  })),
};

const outPath = new URL('./gbp-reviews.json', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));

/* ------------------------------------------------------------------ */
/* Profile photos — downloaded locally so the page never hotlinks     */
/* Google's CDN. The filename is the review id, which is stable.       */
/* ------------------------------------------------------------------ */

const photoDir = new URL('../public/images/reviews/', import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  '$1',
);
fs.mkdirSync(photoDir, { recursive: true });

let saved = 0;
for (const review of payload.reviews) {
  if (!review.avatar || !review.id) continue;

  const file = path.join(photoDir, `${review.id}.jpg`);
  if (fs.existsSync(file)) {
    saved += 1;
    continue;
  }

  /* Ask Google for the largest crop it will serve.
     The size suffix also carries a variant flag: `mo-ba12-br100` is Google's
     BLURRED placeholder for an account with no public photo, while
     `mo-br100` is the real image. Dropping the flag returns the real
     profile photo where one exists, and the letter disc where none does —
     which is what the reviewer actually has on their profile either way.

     160px is the ceiling on purpose: the avatar renders at 52px, so 160
     covers a 3x display, and asking for more only inflates the commit. */
  const url = review.avatar.replace(/=s\d+-c-rp-mo-[a-z0-9]+-br\d+$/, '=s160-c-rp-mo-br100');
  try {
    const img = await fetch(url);
    if (!img.ok) throw new Error(String(img.status));
    fs.writeFileSync(file, Buffer.from(await img.arrayBuffer()));
    saved += 1;
  } catch (error) {
    console.warn(`  photo failed for ${review.author}: ${error.message}`);
  }
}

console.log(`Wrote ${payload.reviews.length} reviews to ${outPath}`);
console.log(`Average rating: ${payload.averageRating} · Total review count: ${payload.totalReviewCount}`);
console.log(`Location: ${payload.locationId}`);
console.log(`Profile photos on disk: ${saved}/${payload.reviews.length}`);

/* ------------------------------------------------------------------ */
/* Photos the reviewers attached to their reviews — also downloaded,   */
/* because Google's photo CDN URLs are signed and expire.              */
/* ------------------------------------------------------------------ */

let photos = 0;
for (const review of payload.reviews) {
  if (!review.photoCount || !review.id) continue;

  for (let i = 0; i < review.photos.length; i++) {
    const file = path.join(photoDir, `${review.id}-${i}.jpg`);
    if (fs.existsSync(file)) {
      photos += 1;
      continue;
    }
    try {
      const img = await fetch(review.photos[i].url);
      if (!img.ok) throw new Error(String(img.status));
      fs.writeFileSync(file, Buffer.from(await img.arrayBuffer()));
      photos += 1;
    } catch (error) {
      console.warn(`  review photo failed for ${review.author}: ${error.message}`);
    }
  }
}

console.log(`Review photos on disk: ${photos}`);
