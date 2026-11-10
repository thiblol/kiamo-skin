import { loadPages, VERIFIED, pages } from '../test/test-utils.js';

await loadPages();
const PR = /\$(?:\d{1,3}(?:,\d{3})+|\d+)/g;
for (const p of pages) {
  const all = [...new Set(p.text.match(PR) || [])];
  const bad = all.filter((x) => !VERIFIED.prices.has(x));
  if (bad.length) {
    console.log(`### ${p.route}`);
    console.log(`  BAD: ${bad.join(' ')}`);
    console.log(`  ALL: ${all.join(' ')}`);
  }
}
