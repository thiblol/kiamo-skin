import { readFileSync } from 'node:fs';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/**
 * Reports the escaped length of `title` and `description` on every article
 * record in a data file. Handles both the single-line and the
 * `field:` / next-line-string shapes.
 */
const file = process.argv[2];
const lines = readFileSync(file, 'utf8').split(/\r?\n/);
let slug = '';

for (let i = 0; i < lines.length; i++) {
  const s = lines[i].match(/^    slug: '(.*)',$/);
  if (s) slug = s[1];

  const t = lines[i].match(/^    title: ('|')(.*)\1,$/);
  if (t) {
    const n = esc(t[2]).length;
    console.log(`${n > 60 ? 'TITLE FAIL' : 'title ok  '} ${String(n).padStart(4)}/60  ${slug}`);
  }

  // Multi-line shape: `description:` then the string on the next line.
  if (/^    description:$/.test(lines[i])) {
    const m = (lines[i + 1] || '').match(/^      ('|')(.*)\1,$/);
    if (m) {
      const n = esc(m[2]).length;
      console.log(`${n > 155 ? 'DESC FAIL ' : 'desc ok   '} ${String(n).padStart(4)}/155 ${slug}`);
    }
  }
}
