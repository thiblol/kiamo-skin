import { readFileSync } from 'node:fs';

// Usage: node scripts/descs.mjs <file>
const file = process.argv[2];
const lines = readFileSync(file, 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\s*description:\s*'(.*)',?\s*$/);
  if (m) {
    console.log(`[${i + 1}] (${m[1].length}) ${m[1]}`);
    continue;
  }
  if (/^\s*description:\s*$/.test(line)) {
    // gather until the line ending with `,` or `;`
    let buf = '';
    let j = i + 1;
    for (; j < lines.length; j++) {
      const t = lines[j].trim();
      if (t.startsWith("'")) buf = t.replace(/^'/, '');
      else if (t.startsWith('`')) buf = t.replace(/^`/, '');
      else if (buf && t.endsWith("',")) { buf = buf.replace(/',$/, ''); break; }
      else if (buf && t.endsWith("';")) { buf = buf.replace(/';/, ''); break; }
      else if (buf && t.endsWith("'")) { buf = buf.replace(/'$/, ''); break; }
      else if (buf && t.endsWith('`')) { buf = buf.replace(/`$/, ''); break; }
    }
    console.log(`[${i + 2}] (${buf.length}) ${buf}`);
    i = j;
  }
}
