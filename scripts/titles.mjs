import { readFileSync } from 'node:fs';

// Usage: node scripts/titles.mjs <file...>
// Prints slug + title/description blocks with lengths, for TS data files.
for (const file of process.argv.slice(2)) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');
  console.log(`\n########## ${file} ##########`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*(slug|title):\s*'(.*)',?\s*$/);
    if (m && (m[1] === 'title' || m[1] === 'slug')) {
      const len = m[1] === 'title' ? m[2].length : '';
      console.log(`${String(i + 1).padStart(5)} ${m[1].padEnd(6)} ${String(len).padStart(4)}  ${m[2]}`);
    }
    // description on its own line (next-line form)
    if (/^\s*description:$/.test(lines[i])) {
      const nxt = (lines[i + 1] || '').trim().replace(/,$/, '');
      const s = nxt.replace(/^'/, '').replace(/'$/, '');
      console.log(`${String(i + 2).padStart(5)} desc   ${String(s.length).padStart(4)}  ${s.slice(0, 200)}`);
    }
    if (/^\s*description:\s*'(.*)',?\s*$/.test(lines[i])) {
      const s = lines[i].trim().match(/^description:\s*'(.*)',?\s*$/)[1];
      console.log(`${String(i + 1).padStart(5)} desc   ${String(s.length).padStart(4)}  ${s.slice(0, 200)}`);
    }
  }
}
