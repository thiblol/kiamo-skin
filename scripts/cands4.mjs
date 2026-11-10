const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// [kind, text]
const cands = [
  ['T', 'Professional Scalp Treatment San Diego | KIAMO Skin'],
  ['D', 'Expert scalp treatment in Mission Hills, San Diego. Keravive therapy for dandruff, flaking and hair thinning. Request an appointment.'],
  ['T', 'San Diego Scalp Treatments: How Keravive Works | KIAMO Skin'],
  ['D', 'How Keravive scalp treatment works for San Diego clients dealing with hard water buildup, ocean salt, and sun damage. Request an appointment.'],
  ['T', 'Hyperpigmentation Treatment: What Works | KIAMO Skin'],
  ['D', 'Evidence-based guide to treating hyperpigmentation, melasma and PIH. Learn which ingredients work and which treatments are safe for darker skin.'],
  ['T', 'Acne Scars in San Diego: Facial vs Microneedling | KIAMO'],
  ['D', 'Acne scars fall into categories that respond to different treatments. A San Diego guide to which scars a facial improves and which need Procell.'],
  ['T', 'HydraFacial for Ocean Swimmers La Jolla | KIAMO Skin'],
  ['D', 'Daily ocean swimming strips your barrier. HydraFacial at KIAMO Skin in Mission Hills rebuilds hydration for La Jolla Cove swimmers. Request an appointment.'],
  ['T', 'HydraFacial for Pacific Beach Sun Damage | KIAMO Skin'],
  ['T', 'Lira Chemical Peel for La Mesa Melasma | KIAMO Skin'],
  ['T', 'Procell Microchanneling in North Park | KIAMO Skin'],
  ['D', 'Acne scar revision in melanin-rich skin needs depth-controlled microchanneling. Procell at KIAMO Skin serves North Park. Request an appointment.'],
];

for (const [k, s] of cands) {
  const limit = k === 'T' ? 60 : 155;
  const n = esc(s).length;
  console.log(`${n > limit ? 'FAIL' : 'ok  '} ${String(n).padStart(4)}/${limit} ${k}  ${s}`);
}
