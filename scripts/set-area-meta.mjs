/**
 * Rewrites the `title` and `description` fields of area entries in a data
 * file, keyed by slug. Only touches top-level `    title:` / `    description:`
 * keys (exactly four spaces of indent) so nested fields like
 * `schemaDescription`, `steps[].description` and FAQ answers are left alone.
 *
 * Usage: node scripts/set-area-meta.mjs <file> <json-file>
 */
import { readFileSync, writeFileSync } from 'node:fs';

const [file, jsonFile] = process.argv.slice(2);
const updates = JSON.parse(readFileSync(jsonFile, 'utf8'));

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/**
 * Quote a value for a TypeScript string literal. A value containing an
 * apostrophe cannot go in a single-quoted string — the apostrophe closes it
 * and the file stops parsing — so those go in a backtick template literal,
 * matching the style already used by the neighbouring `name` and `h1` fields
 * on the same records.
 */
const quote = (s) => {
  if (!s.includes("'") && !s.includes('`') && !s.includes('${')) return "'" + s + "'";
  const escaped = s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return '`' + escaped + '`';
};

let text = readFileSync(file, 'utf8');
let changed = 0;

for (const [slug, { title, description }] of Object.entries(updates)) {
  // Locate the entry: `    slug: '<slug>',`
  const slugRe = new RegExp(`^    slug: '${slug}',$`, 'm');
  const slugMatch = slugRe.exec(text);
  if (!slugMatch) throw new Error(`slug not found in ${file}: ${slug}`);

  // The entry body runs until the next `  },` at two-space indent.
  const entryStart = slugMatch.index;
  const entryEnd = text.indexOf('\n  },', entryStart);
  if (entryEnd === -1) throw new Error(`entry end not found for ${slug} in ${file}`);
  let entry = text.slice(entryStart, entryEnd);

  if (title !== undefined) {
    // Either quote style: '...' or `...`.
    const re = /^    title: ('|`)[\s\S]*?\1,$/m;
    if (!re.test(entry)) throw new Error(`title not found for ${slug} in ${file}`);
    entry = entry.replace(re, `    title: ${quote(title)},`);
  }

  if (description !== undefined) {
    // Two shapes: `description: '...',` on one line, or `description:` then
    // the string on the next line. Either quote style is accepted.
    const oneLine = /^    description: ('|`)[\s\S]*?\1,$/m;
    const twoLine = /^    description:\r?\n      ('|`)[\s\S]*?\1,$/m;
    if (oneLine.test(entry)) {
      entry = entry.replace(oneLine, `    description: ${quote(description)},`);
    } else if (twoLine.test(entry)) {
      entry = entry.replace(twoLine, `    description:\n      ${quote(description)},`);
    } else {
      throw new Error(`description not found for ${slug} in ${file}`);
    }
  }

  text = text.slice(0, entryStart) + entry + text.slice(entryEnd);
  changed++;
}

writeFileSync(file, text);

// Report the escaped lengths so they can be checked against the limits.
for (const [slug, { title, description }] of Object.entries(updates)) {
  if (title !== undefined) {
    const n = esc(title).length;
    console.log(`${n > 60 ? 'TITLE FAIL' : 'title ok  '} ${String(n).padStart(4)}/60  ${slug}: ${title}`);
  }
  if (description !== undefined) {
    const n = esc(description).length;
    console.log(`${n > 155 ? 'DESC FAIL ' : 'desc ok   '} ${String(n).padStart(4)}/155 ${slug}: ${description}`);
  }
}
console.log(`\n${changed} entries updated in ${file}`);
