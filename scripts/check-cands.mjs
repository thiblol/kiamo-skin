// Measure candidate title/description strings.
const cands = [
  ['T', 'Facial in Mission Hills, San Diego | KIAMO Skin'],
  ['D', 'Facials in Mission Hills, San Diego from KIAMO Skin. HydraFacial, peels, dermaplaning, enzyme therapy for every Fitzpatrick type. Request an appointment.'],
  ['D', 'Facials in La Jolla from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning, enzyme therapy. Licensed esthetician. Request an appointment.'],
  ['D', 'Facials in Del Mar from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning, enzyme therapy for every Fitzpatrick type. Request an appointment.'],
  ['D', 'Facials in Encinitas from KIAMO Skin in Mission Hills. HydraFacial, peels, DMK, enzyme therapy for surf barrier repair. Request an appointment.'],
  ['D', 'Facials in Carlsbad from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning, enzyme therapy for every skin type. Request an appointment.'],
  ['D', 'Facials in Pacific Beach from KIAMO Skin in Mission Hills. HydraFacial, peels, DMK for salt air and UV damage. Request an appointment.'],
  ['D', 'Facials in Point Loma from KIAMO Skin in Mission Hills. HydraFacial, peels, enzyme therapy for maritime skin. Request an appointment.'],
  ['D', 'Facials in Coronado from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning for coastal skin. Request an appointment.'],
  ['D', 'Facials in North Park from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning for pigmentation and acne scarring. Request an appointment.'],
  ['D', 'Facials in Hillcrest from KIAMO Skin in Mission Hills. HydraFacial, peels, dermaplaning, enzyme therapy. Request an appointment.'],
];
for (const [k, s] of cands) {
  const limit = k === 'T' ? 60 : 155;
  const flag = s.length > limit ? 'FAIL' : 'ok';
  console.log(`${k} ${String(s.length).padStart(4)}/${limit} ${flag}  ${s}`);
}
