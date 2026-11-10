import { loadPages, pages } from '../test/test-utils.js';

await loadPages();
const re = /\bDel\s+Mar\b.{0,40}\b(studio|location|located|address|suite|visit us)\b|\b(studio|location|located|address|suite|visit us)\b.{0,40}\bDel\s+Mar\b/gi;
const only = process.argv[2];
for (const p of pages) {
  if (only && p.route !== only) continue;
  let m;
  re.lastIndex = 0;
  while ((m = re.exec(p.text)) !== null) {
    console.log(`### ${p.route}  (match len ${m[0].length})`);
    console.log(`   ${JSON.stringify(m[0])}`);
  }
}
