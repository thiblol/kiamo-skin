// Measure title/description length the way the guard does: against the
// ESCAPED HTML that Astro emits. `&` becomes `&amp;` (5 chars) and
// `'` becomes `&#39;` (5 chars), so source-string length understates.
//
// Usage: node scripts/len2.mjs [--title] "text" ...
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const args = process.argv.slice(2);
let isTitle = false;
if (args[0] === '--title') {
  isTitle = true;
  args.shift();
}
const limit = isTitle ? 60 : 155;
for (const s of args) {
  const e = esc(s);
  const flag = e.length > limit ? 'FAIL' : 'ok  ';
  console.log(`${flag} ${String(e.length).padStart(4)}/${limit}  src=${s.length}  ${s}`);
}
