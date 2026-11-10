const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const titles = [
  'Mission Hills Facials, San Diego | KIAMO Skin',
  'La Jolla Facials, San Diego | KIAMO Skin',
  'Chula Vista Facials, San Diego | KIAMO Skin',
  'La Mesa Facials, San Diego | KIAMO Skin',
  'Carlsbad Facials, San Diego | KIAMO Skin',
  'Del Mar Facials, San Diego | KIAMO Skin',
  'Encinitas Facials, San Diego | KIAMO Skin',
  'North Park Facials, San Diego | KIAMO Skin',
  'Pacific Beach Facials, San Diego | KIAMO Skin',
];

const descs = [
  'Corrective facials in Mission Hills from KIAMO Skin. HydraFacial, DMK, Lira peels, Procell. 5 min from Hillcrest. From $199. Request an appointment.',
  'Facials in La Jolla from KIAMO Skin. HydraFacial Syndeo and Keravive scalp therapy. 12 miles south via I-5. From $259. Request an appointment.',
  'Melasma facials in Chula Vista from KIAMO Skin. Lira peels, DMK enzyme therapy. 13 miles north via I-5. From $199. Request an appointment.',
  'Facials in La Mesa from KIAMO Skin. Lira peels, DMK, HydraFacial for inland UV damage and melasma. 20 min west via I-8. From $199. Request an appointment.',
  'Facials in Carlsbad from KIAMO Skin. Procell microchanneling and Keravive scalp series. 35 min south via I-5. From $599. Request an appointment.',
  'Facials for clients traveling from Del Mar. KIAMO Skin in Mission Hills. Procell, Keravive, HydraFacial. 25 min south. From $259. Request an appointment.',
  'Facials in Encinitas from KIAMO Skin. Barrier repair for surf exposure. DMK, Keravive, HydraFacial. 30 min via I-5. From $259. Request an appointment.',
  'Facials in North Park from KIAMO Skin. Lira peels, dermaplaning, HydraFacial for PIH and acne scars. 10 min. From $199. Request an appointment.',
  'Facials in Pacific Beach from KIAMO Skin. Lira peels, DMK, Keravive for May Gray sun damage. 15 min east. From $199. Request an appointment.',
];

console.log('--- titles ---');
for (const t of titles) {
  const n = esc(t).length;
  console.log(`${n > 60 ? 'FAIL' : 'ok  '} ${String(n).padStart(4)}/60  ${t}`);
}
console.log('--- descriptions ---');
for (const d of descs) {
  const n = esc(d).length;
  console.log(`${n > 155 ? 'FAIL' : 'ok  '} ${String(n).padStart(4)}/155  ${d}`);
}
