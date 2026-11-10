/**
 * Rewrites the `title` and `description` of article records keyed by slug.
 * Handles both the single-line and the `field:` / next-line-string shapes.
 *
 * Usage: node scripts/set-article-meta.mjs <file> <json-file>
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
  const slugRe = new RegExp(`^    slug: '${slug}',$`, 'm');
  const slugMatch = slugRe.exec(text);
  if (!slugMatch) throw new Error(`slug not found in ${file}: ${slug}`);

  // The record runs until the next record's `    slug: '`.
  const rest = text.slice(slugMatch.index + slugMatch[0].length);
  const nextSlug = rest.search(/^    slug: '/m);
  const end = nextSlug === -1 ? rest.length : nextSlug;
  let body = rest.slice(0, end);

  if (title !== undefined) {
    const re = /^    title: ('|')(.*)\1,$/m;
    if (!re.test(body)) throw new Error(`title not found for ${slug} in ${file}`);
    body = body.replace(re, `    title: ${quote(title)},`);
  }

  if (description !== undefined) {
    const oneLine = /^    description: ('|')(.*)\1,$/m;
    const twoLine = /^    description:\r?\n      ('|')(.*)\1,$/m;
    if (oneLine.test(body)) {
      body = body.replace(oneLine, `    description: ${quote(description)},`);
    } else if (twoLine.test(body)) {
      body = body.replace(twoLine, `    description:\n      ${quote(description)},`);
    } else {
      throw new Error(`description not found for ${slug} in ${file}`);
    }
  }

  text = text.slice(0, slugMatch.index + slugMatch[0].length) + body + rest.slice(end);
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
console.log(`\n${Object.keys(updates).length} records updated in ${file}`);
