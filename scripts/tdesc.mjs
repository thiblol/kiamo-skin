import { readFileSync } from 'node:fs';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const file = process.argv[2];
const lines = readFileSync(file, 'utf8').split(/\r?\n/);
for (let i = 0; i < lines.length; i++) {
  const t = lines[i].match(/^    title: '(.*)',$/);
  if (t) console.log(`${String(i + 1).padStart(5)} T ${String(esc(t[1]).length).padStart(4)}  ${t[1]}`);
  if (/^    description:$/.test(lines[i])) {
    const n = (lines[i + 1] || '').trim().replace(/^'/, '').replace(/',$/, '');
    console.log(`${String(i + 2).padStart(5)} D ${String(esc(n).length).padStart(4)}  ${n.slice(0, 120)}`);
  }
}
