const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const cands = [
  'Chemical peels in San Diego: KIAMO Skin charges $199 for the Lira Gentle Renewal Peel and $299 for the Advanced. Which peel is safe on melanin-rich skin.',
  'Chemical peel cost in San Diego: KIAMO Skin charges $199 for the Lira Gentle Renewal Peel and $299 for the Advanced Peel. Which peel is safe on melanin-rich skin.',
  'Glycolic, mandelic, Cosmelan, Jessner — which chemical peel works for melasma on melanin-rich skin, and why protocol matters more than the acid name.',
];

for (const s of cands) {
  const n = esc(s).length;
  console.log(`${n > 155 ? 'FAIL' : 'ok  '} ${String(n).padStart(4)}/155  ${s}`);
}
