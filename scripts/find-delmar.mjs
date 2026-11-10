import { readFileSync } from 'node:fs';

// Usage: node scripts/find-delmar.mjs <file>
const file = process.argv[2];
const text = readFileSync(file, 'utf8');
const re = /\bDel\s+Mar\b.{0,40}\b(studio|location|located|address|suite|visit us)\b|\b(studio|location|located|address|suite|visit us)\b.{0,40}\bDel\s+Mar\b/gi;
let m;
while ((m = re.exec(text)) !== null) {
  const line = text.slice(0, m.index).split('\n').length;
  console.log(`line ${line}: ...${m[0]}...`);
}
