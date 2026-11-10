const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const cands = [
  'Chemical peels for melanin-rich skin in San Diego. Gentle Renewal $199, Advanced $299. Safe for Fitzpatrick I-VI. Request an appointment.',
  'Corrective skin treatments in San Diego from KIAMO Skin. Pigmentation, acne, texture, barrier health. Request an appointment.',
  'Hyperpigmentation treatment in San Diego from KIAMO Skin. Melasma, PIH, dark spots. Safe for all skin tones. Request an appointment.',
  'DMK enzyme therapy in San Diego from KIAMO Skin. Barrier-first treatment for sensitive skin. Request an appointment.',
  'Dermaplaning in San Diego from KIAMO Skin. Safe for dark skin. $199. Request an appointment.',
  'Chemical Peels for Melanin-Rich Skin | KIAMO Skin San Diego',
  'Microneedling San Diego — Procell | KIAMO Skin',
];
for (const s of cands) {
  const e = esc(s);
  const limit = s.includes('|') && s.length < 70 ? 60 : 155;
  console.log(`${e.length > limit ? 'FAIL' : 'ok  '} ${String(e.length).padStart(4)}/${limit}  ${s}`);
}
