import { loadPages, pages } from '../test/test-utils.js';

await loadPages();
const re = /\bDel\s+Mar\b.{0,40}\b(studio|location|located|address|suite|visit us)\b|\b(studio|location|located|address|suite|visit us)\b.{0,40}\bDel\s+Mar\b/gi;
for (const p of pages) {
  let m;
  re.lastIndex = 0;
  while ((m = re.exec(p.text)) !== null) {
    console.log(`### ${p.route}`);
    console.log(`   ...${p.text.slice(Math.max(0, m.index - 60), m.index + m[0].length + 60)}...`);
  }
}
