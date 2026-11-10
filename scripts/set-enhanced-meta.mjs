/**
 * Rewrites the `title` and `description` of the `switch (area.slug)` cases in
 * src/data/areas-enhanced.ts.
 *
 * Usage: node scripts/set-enhanced-meta.mjs <file> <json-file>
 */
import { readFileSync, writeFileSync } from 'node:fs';

const [file, jsonFile] = process.argv.slice(2);
const updates = JSON.parse(readFileSync(jsonFile, 'utf8'));

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const quote = (s) => {
  if (!s.includes("'") && !s.includes('`') && !s.includes('${')) return "'" + s + "'";
  const escaped = s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return '`' + escaped + '`';
};

let text = readFileSync(file, 'utf8');

for (const [slug, { title, description }] of Object.entries(updates)) {
  const caseRe = new RegExp(`^    case '${slug}':$`, 'm');
  const caseMatch = caseRe.exec(text);
  if (!caseMatch) throw new Error(`case not found in ${file}: ${slug}`);

  // The case body runs until the next `    case '` or the end of the switch.
  const rest = text.slice(caseMatch.index + caseMatch[0].length);
  const nextCase = rest.search(/^    case '/m);
  const bodyEnd = nextCase === -1 ? rest.length : nextCase;
  let body = rest.slice(0, bodyEnd);

  if (title !== undefined) {
    const re = /^        title: ('|`)[\s\S]*?\1,$/m;
    if (!re.test(body)) throw new Error(`title not found for ${slug} in ${file}`);
    body = body.replace(re, `        title: ${quote(title)},`);
  }

  if (description !== undefined) {
    const re = /^        description: ('|`)[\s\S]*?\1,$/m;
    if (!re.test(body)) throw new Error(`description not found for ${slug} in ${file}`);
    body = body.replace(re, `        description: ${quote(description)},`);
  }

  text = text.slice(0, caseMatch.index + caseMatch[0].length) + body + rest.slice(bodyEnd);
}

writeFileSync(file, text);

for (const [slug, { title, description }] of Object.entries(updates)) {
  if (title !== undefined) {
    const n = esc(title).length;
    console.log(`${n > 60 ? 'TITLE FAIL' : 'title ok  '} ${String(n).padStart(4)}/60  ${slug}`);
  }
  if (description !== undefined) {
    const n = esc(description).length;
    console.log(`${n > 155 ? 'DESC FAIL ' : 'desc ok   '} ${String(n).padStart(4)}/155 ${slug}`);
  }
}
console.log(`\n${Object.keys(updates).length} cases updated in ${file}`);
