import { loadPages, pages } from '../test/test-utils.js';

await loadPages();
for (const p of pages) {
  const d = p.html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const t = p.html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const flags = [];
  if (d.length > 155) flags.push(`DESC ${d.length}`);
  if (t.length > 60) flags.push(`TITLE ${t.length}`);
  if (flags.length) {
    console.log(`### ${p.route}  [${flags.join(', ')}]`);
    console.log(`TITLE: ${t}`);
    console.log(`DESC:  ${d}`);
    console.log('');
  }
}
