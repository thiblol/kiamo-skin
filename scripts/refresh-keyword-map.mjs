// Refresh keyword-map.csv with DataForSEO data pulled 2026-11-08.
// Volumes: San Diego metro (location_code 1014218). KD: Labs, US level.
// Adds an ai_search_volume column (Oct 2026 AI/LLM query volume).
//
// Reads the immutable baseline (keyword-map.baseline.csv) and always writes the
// full map from scratch, so re-running is idempotent and never appends to a
// previously generated file.
import { readFileSync, writeFileSync } from 'node:fs';

const BASELINE = 'local_seo_info/keyword-map.baseline.csv';
const SRC = 'local_seo_info/keyword-map.csv';
const lines = readFileSync(BASELINE, 'utf8').trim().split('\n');
const header = lines[0];
const rows = lines.slice(1);

// keyword -> { vol, kd, cpc, pos }
const U = {
  'facial near me': { vol: 2400, kd: 12, cpc: 5.43 },
  'facials san diego': { vol: 1300, kd: 14, cpc: 5.03 },
  'facial san diego': { vol: 1300, kd: 14, cpc: 5.03 },
  'facial in san diego': { vol: 1300, kd: 14, cpc: 5.03 },
  'facials in san diego': { vol: 1300, kd: 14, cpc: 5.03 },
  'san diego facial': { vol: 1300, kd: 14, cpc: 5.03 },
  'san diego facials': { vol: 1300, kd: 14, cpc: 5.03 },
  'facial san diego ca': { vol: 1300, kd: 14, cpc: 5.03 },
  'facial treatment san diego': { vol: 1300, kd: 14, cpc: 5.03 },
  'best facial san diego': { vol: 210, kd: 16, cpc: 5.45 },
  'best facial in san diego': { vol: 140, kd: 16, cpc: 5.16 },
  'best facials san diego': { vol: 140, kd: 21, cpc: 5.16 },
  'best facials in san diego': { vol: 140, kd: 16, cpc: 5.16 },
  'best san diego facial': { vol: 210, kd: 16, cpc: 5.45 },
  'best facial san diego ca': { vol: 210, kd: 16, cpc: 5.45 },
  'korean facial san diego': { vol: 260, kd: 1, cpc: 2.12, pos: '47' },
  'facial and massage san diego': { vol: 0 },
  'facial massage san diego': { vol: 0 },
  'facial spa san diego': { vol: 140, kd: 17, cpc: 4.0 },
  'spa facial san diego': { vol: 140, kd: 17, cpc: 4.0 },
  'facial spa in san diego': { vol: 140, kd: 17, cpc: 4.0 },
  'facial spas san diego': { vol: 140, kd: 17, cpc: 4.0 },
  'san diego facial spa': { vol: 140, kd: 17, cpc: 4.0 },
  'mens facial san diego': { vol: 10 },
  'extraction facial san diego': { vol: 10, kd: 2 },
  'facial extractions san diego': { vol: 10, kd: 2 },
  'deep pore cleansing facial san diego': { vol: 10 },
  'facial membership san diego': { vol: 10 },
  'facial san diego cost': { vol: 10 },
  'cheap facial san diego': { vol: 10, cpc: 1.07 },
  'couples facial san diego': { vol: 10, kd: 12 },
  'microneedling san diego': { vol: 720, kd: 0, cpc: 10.38 },
  'microneedling in san diego': { vol: 720, kd: 0, cpc: 10.38 },
  'san diego microneedling': { vol: 720, kd: 0, cpc: 10.38 },
  'microneedling near me': { vol: 320, cpc: 12.57 },
  'best microneedling san diego': { vol: 40, cpc: 13.57 },
  'procell microchanneling': { vol: 40 },
  'microneedling cost san diego': { vol: 20 },
  'procell microchanneling san diego': { vol: 10 },
  'microneedling san diego reddit': { vol: 20 },
  'hydrafacial san diego': { vol: 390, kd: 0, cpc: 4.56 },
  'hydrafacial in san diego': { vol: 390, kd: 0, cpc: 4.56 },
  'san diego hydrafacial': { vol: 390, kd: 0, cpc: 4.56 },
  'hydra facial san diego': { vol: 390, kd: 0, cpc: 4.56 },
  'hydrafacial san diego ca': { vol: 390, kd: 0, cpc: 4.56 },
  'hydrafacial near me': { vol: 260, cpc: 5.48 },
  'best hydrafacial san diego': { vol: 30, cpc: 12.65 },
  'best hydrafacial in san diego': { vol: 10 },
  'hydrafacial san diego cost': { vol: 10 },
  'diamond glow facial san diego': { vol: 20 },
  'head spa san diego': { vol: 1000, cpc: 1.1 },
  'scalp treatment san diego': { vol: 90, kd: 2, cpc: 2.52 },
  'scalp treatment near me': { vol: 30, cpc: 1.59 },
  'scalp facial san diego': { vol: 10 },
  'korean scalp treatment san diego': { vol: 20, kd: 2 },
  'japanese scalp treatment san diego': { vol: 10, kd: 2 },
  'asian scalp treatment san diego': { vol: 10, kd: 0 },
  'keravive': { vol: 10, kd: 0 },
  'keravive near me': { vol: 10, kd: 0 },
  'keravive scalp treatment': { vol: 10, kd: 1 },
  'keravive scalp treatment near me': { vol: 10, kd: 0 },
  'hydrafacial keravive': { vol: 10, kd: 0 },
  'hair loss treatment san diego': { vol: 10, cpc: 61.93 },
  'chemical peel san diego': { vol: 170, kd: 0, cpc: 8.15 },
  'chemical peel in san diego': { vol: 170, kd: 0, cpc: 8.15 },
  'san diego chemical peel': { vol: 170, kd: 0, cpc: 8.15 },
  'chemical peel san diego ca': { vol: 170, kd: 0, cpc: 8.15 },
  'chemical peel near me': { vol: 90, cpc: 9.79 },
  'back facial san diego': { vol: 30, kd: 0, cpc: 2.35 },
  'melasma treatment san diego': { vol: 10, kd: 0, cpc: 3.54 },
  'melasma treatment in san diego': { vol: 10, kd: 0, cpc: 3.54 },
  'hyperpigmentation treatment san diego': { vol: 10 },
  'dark spot treatment san diego': { vol: 0 },
  'black esthetician san diego': { vol: 10, kd: 2, cpc: 2.0 },
  'black owned spa san diego': { vol: 10 },
  'facials for black skin': { vol: 10 },
  'facial for dark skin': { vol: 10, kd: 2 },
  'chemical peel san diego cost': { vol: 10, kd: 0 },
  'best chemical peel san diego': { vol: 10 },
  'facial peel san diego': { vol: 10, kd: 39 },
  'dermaplaning near me': { vol: 140, cpc: 3.26 },
  'dermaplaning san diego': { vol: 110, kd: 0, cpc: 4.45, pos: '43' },
  'dermaplaning in san diego': { vol: 110, kd: 0, cpc: 4.45 },
  'san diego dermaplaning': { vol: 110, kd: 0, cpc: 4.45 },
  'dermaplaning facial san diego': { vol: 10, cpc: 12.34 },
  'dermaplane facial san diego': { vol: 10, kd: 0 },
  'esthetician near me': { vol: 140, cpc: 6.56 },
  'esthetician san diego': { vol: 110, kd: 2, cpc: 5.03 },
  'esthetician in san diego': { vol: 110, kd: 2, cpc: 5.03 },
  'san diego esthetician': { vol: 110, kd: 2, cpc: 5.03 },
  'best esthetician san diego': { vol: 20, cpc: 2.25 },
  'best esthetician in san diego': { vol: 10 },
  'dmk enzyme therapy': { vol: 10, kd: 0, cpc: 0.93 },
  'dmk enzyme treatment': { vol: 10, kd: 0 },
  'dmk enzyme treatments': { vol: 10, kd: 0 },
  'enzyme therapy dmk': { vol: 10, kd: 0 },
  'dmk enzyme therapy near me': { vol: 10, kd: 0 },
  'dmk enzyme facial near me': { vol: 10, kd: 0 },
  'dmk enzyme therapy facial': { vol: 10, kd: 0 },
  'dmk enzyme treatment near me': { vol: 10, kd: 0 },
  'skin care san diego': { vol: 210, kd: 17, cpc: 5.06 },
  'skin care in san diego': { vol: 210, kd: 24, cpc: 5.06 },
  'san diego skin care': { vol: 210, kd: 17, cpc: 5.06 },
  'skin care san diego ca': { vol: 210, kd: 17, cpc: 5.06 },
  'facial rejuvenation san diego': { vol: 10, kd: 0 },
  'san diego facial rejuvenation': { vol: 10, kd: 0 },
  'san diego advanced skin care': { vol: 20, kd: 3 },
  'skin clinic san diego': { vol: 20, kd: 23, cpc: 6.46 },
  'facial la jolla': { vol: 140, kd: 0, cpc: 5.67 },
  'facial la jolla ca': { vol: 140, kd: 0, cpc: 5.67 },
  'la jolla facial': { vol: 140, kd: 0, cpc: 5.67 },
  'best facial la jolla': { vol: 20, kd: 3 },
  'facial chula vista': { vol: 50, kd: 0, cpc: 3.83 },
  'facial eastlake chula vista': { vol: 10, kd: 1 },
  'facial del mar': { vol: 40, kd: 0, cpc: 4.24 },
  'del mar facial': { vol: 40, kd: 0, cpc: 4.24 },
  'facial north park': { vol: 40, kd: 0, cpc: 1.86 },
  'north park facial': { vol: 40, kd: 0 },
  'facial encinitas': { vol: 20, kd: 0, cpc: 7.87 },
  'encinitas facial': { vol: 20, kd: 0, cpc: 7.87 },
  'facial encinitas ca': { vol: 20, kd: 0, cpc: 7.87 },
  'facial pacific beach': { vol: 30, kd: 0, cpc: 5.28 },
  'pacific beach facial': { vol: 30, kd: 0 },
  'facial la mesa': { vol: 30, kd: 0, cpc: 1.91 },
  'facial carlsbad': { vol: 20, kd: 0, cpc: 3.56 },
  'carlsbad facial': { vol: 20, kd: 0 },
  'facial carlsbad ca': { vol: 20, kd: 12 },
  'facial point loma': { vol: 20, kd: 3, cpc: 2.47 },
  'facial coronado': { vol: 10, cpc: 1.86 },
  'facial downtown san diego': { vol: 10, cpc: 1.23 },
  'facial hillcrest san diego': { vol: 10, cpc: 2.42 },
  'facial mission hills': { vol: 0 },
  'esthetician mission hills': { vol: 0 },
  'esthetician for black skin': { vol: 10 },
  'black esthetician near me': { vol: 10, cpc: 1.16 },
};

// AI/LLM search volume per month (Oct 2026), US.
const AI = {
  'facials san diego': 112, 'facial san diego': 112, 'best facial san diego': 71,
  'spa facial san diego': 7, 'microneedling san diego': 36, 'hydrafacial san diego': 42,
  'chemical peel san diego': 1, 'esthetician san diego': 38, 'skin care san diego': 1,
  'melasma treatment san diego': 2, 'hyperpigmentation treatment san diego': 239,
  'facial for dark skin': 33,
};

function splitCsv(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else { q = false; }
      } else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const esc = (v) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

// Named-field row builder — column order is fixed by the CSV header.
const R = (o) => [
  o.keyword, o.vol ?? '', o.kd ?? '', o.cpc ?? '', o.intent, o.channel, o.cluster,
  o.page, o.target ?? 1, o.pos ?? 'unranked', o.tier, o.why, o.ai ?? '',
].map(esc).join(',');

const out = [header + ',ai_search_volume'];
const seen = new Set();

for (const line of rows) {
  const c = splitCsv(line);
  const kw = c[0];
  seen.add(kw);
  const u = U[kw];
  if (u) {
    c[1] = u.vol;
    if (u.kd !== undefined) c[2] = u.kd;
    if (u.cpc !== undefined) c[3] = u.cpc;
    if (u.pos) c[9] = u.pos;
  }
  c[9] = c[9] === '' ? 'unranked' : c[9];
  out.push([...c.slice(0, 12), AI[kw] ?? ''].map(esc).join(','));
}

// Rows discovered after the August map was written.
const NEW = [
  { keyword: 'facial for melasma', vol: 10, kd: 20, cpc: 2.94, ai: 57, intent: 'transactional', channel: 'ORGANIC', cluster: 'C13 melasma', page: 'treatments/melasma', tier: '1-now',
    why: 'Second head term on the same SERP as melasma treatment; 18,100/mo national with an AI Overview that already says superficial peels and non-heating HydraFacials help melasma on darker skin.' },
  { keyword: 'melasma facial', vol: 10, kd: 20, cpc: 2.94, ai: 57, intent: 'transactional', channel: 'ORGANIC', cluster: 'C13 melasma', page: 'treatments/melasma', tier: '1-now',
    why: 'Alias of facial for melasma; identical volume and SERP.' },
  { keyword: 'dark spots on face', vol: 10, kd: 6, cpc: 2.47, ai: 3075, intent: 'informational', channel: 'ORGANIC', cluster: 'C12 hyperpigmentation', page: 'treatments/hyperpigmentation', tier: '1-now',
    why: '22,200/mo national at KD 6, and the largest AI-search volume of any concern term KIAMO can serve. PAA already asks what causes light spots on African American skin.' },
  { keyword: 'dark spot removal', vol: 10, kd: 13, cpc: 1.59, ai: 12980, intent: 'informational', channel: 'ORGANIC', cluster: 'C12 hyperpigmentation', page: 'treatments/hyperpigmentation', tier: '1-now',
    why: '8,100/mo national and 12,980/mo AI search volume, the highest AI number in the dataset. A removal-service framing the PIH page does not currently own.' },
  { keyword: 'hyperpigmentation treatment', vol: 10, kd: 39, cpc: 3.83, ai: 239, intent: 'informational', channel: 'ORGANIC', cluster: 'C12 hyperpigmentation', page: 'treatments/hyperpigmentation', tier: '2-next',
    why: '12,100/mo national but KD 39 and the SERP is held by dermatology and laser clinics. The local suffix is the winnable slice.' },
  { keyword: 'skin lightening treatment', vol: 0, kd: 9, cpc: 4.07, ai: 105, intent: 'informational', channel: 'ORGANIC', cluster: 'C12 hyperpigmentation', page: 'treatments/hyperpigmentation', tier: '2-next',
    why: '5,400/mo national at KD 9. The wording carries risk, so the page must stay on even tone rather than lightening and use this only as a supporting phrase.' },
  { keyword: 'how much does a facial cost', vol: 10, cpc: 2.96, ai: 6385, intent: 'commercial', channel: 'ORGANIC', cluster: 'C14 price', page: 'treatments', tier: '1-now',
    why: 'Largest AI-search volume of any query in the dataset. We hold 13 verified prices and almost no competitor publishes theirs.' },
  { keyword: 'facial price', vol: 10, cpc: 2.19, ai: 309, intent: 'commercial', channel: 'ORGANIC', cluster: 'C14 price', page: 'treatments', tier: '1-now',
    why: 'Same cost intent in short form, 309/mo AI search volume.' },
  { keyword: 'facial treatment', vol: 10, kd: 25, cpc: 4.84, ai: 3751, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: 'facial', tier: '1-now',
    why: '6,600/mo national and 3,751/mo AI. The treatment wording suits the corrective positioning and is a second framing of the same demand as facials san diego.' },
  { keyword: 'facial treatment near me', vol: 50, kd: 12, cpc: 9.27, intent: 'transactional', channel: 'MAP', cluster: 'C1 core-facial', page: 'facial', tier: '2-next',
    why: 'Competition index 12, the lowest of any near-me term measured. Proximity term, so it is still gated on the local pack.' },
  { keyword: 'skincare near me', vol: 170, cpc: 4.78, intent: 'transactional', channel: 'MAP', cluster: 'C9 skin-care-hub', page: 'treatments', tier: '2-next',
    why: 'Hub-level proximity term with a real local pack. Gated on reviews.' },
  { keyword: 'spa near me', vol: 6600, cpc: 1.44, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'Largest local term in the market and KIAMO is not a day spa. Ranking for a spa query books relaxation clients, not corrective ones.' },
  { keyword: 'salon near me', vol: 2400, cpc: 2.02, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'KIAMO is a single-practitioner treatment studio, not a salon. Framing mismatch.' },
  { keyword: 'best spa san diego', vol: 880, cpc: 1.88, intent: 'commercial', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'Spa framing; same reason as spa near me.' },
  { keyword: 'day spa san diego', vol: 1000, cpc: 1.86, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'Spa framing; KIAMO does not offer day-spa services.' },
  { keyword: 'med spa san diego', vol: 720, kd: 36, cpc: 13.3, intent: 'commercial', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'Highest CPC of any term measured at $13.30 and 720/mo, but med spa implies medical status KIAMO does not hold. Held out pending a client decision on med-spa positioning.' },
  { keyword: 'skin specialist san diego', vol: 20, cpc: 14.7, intent: 'commercial', channel: 'ORGANIC', cluster: 'C1 core-facial', page: '/', target: 0, tier: 'drop',
    why: 'CPC $14.70 signals medical intent. Specialist wording implies clinical status KIAMO does not hold.' },
  { keyword: 'facial for sensitive skin', vol: 10, cpc: 2.31, intent: 'transactional', channel: 'ORGANIC', cluster: 'C8 dmk', page: 'treatments/dmk-enzyme-therapy', tier: '2-next',
    why: '480/mo national, and DMK enzyme therapy is the barrier-repair answer for exactly this skin state.' },
  { keyword: 'enzyme facial treatment', vol: 10, cpc: 2.36, intent: 'informational', channel: 'ORGANIC', cluster: 'C8 dmk', page: 'treatments/dmk-enzyme-therapy', tier: '2-next',
    why: '170/mo national. Descriptive variant for the DMK service that names the modality.' },
  { keyword: 'glow facial', vol: 10, kd: 12, cpc: 3.73, intent: 'transactional', channel: 'ORGANIC', cluster: 'C3 hydrafacial', page: 'treatments/hydrafacial', tier: '2-next',
    why: '2,900/mo national at KD 12. Branded-sounding but generic, and the HydraFacial is the treatment that delivers it.' },
  { keyword: 'blackhead extraction', vol: 10, kd: 2, cpc: 1.62, intent: 'informational', channel: 'ORGANIC', cluster: 'C3 hydrafacial', page: 'treatments/hydrafacial', tier: '3-later',
    why: '8,100/mo national at KD 2. Extractions are a verified part of the HydraFacial protocol, but the intent is largely at-home tools.' },
  { keyword: 'hydrafacial before and after', vol: 10, cpc: 1.76, intent: 'informational', channel: 'ORGANIC', cluster: 'C3 hydrafacial', page: 'gallery', tier: '2-next',
    why: '5,400/mo national. A results gallery answers it directly, and the page already exists.' },
  { keyword: 'sun damage facial', vol: 30, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: 'facial/facial-after-sun-exposure-san-diego', tier: '1-now',
    why: 'Matches the existing after-sun-exposure page. San Diego UV plus hard water makes this a locally true concern.' },
  { keyword: 'facial after sun exposure', vol: 10, intent: 'transactional', channel: 'ORGANIC', cluster: 'C1 core-facial', page: 'facial/facial-after-sun-exposure-san-diego', tier: '2-next',
    why: 'Alias of sun damage facial; matches the same page.' },
  { keyword: 'sunscreen for dark spots', vol: 140, cpc: 0.33, intent: 'informational', channel: 'ORGANIC', cluster: 'C15 journal', page: 'journal/best-sunscreen-for-dark-spots', tier: '1-now',
    why: '140/mo local against a journal article that already exists, and the PIH protocol on the treatment page depends on daily SPF with iron oxides.' },
  { keyword: 'spf for dark skin', vol: 10, cpc: 0.79, intent: 'informational', channel: 'ORGANIC', cluster: 'C15 journal', page: 'journal/best-sunscreen-for-dark-spots', tier: '3-later',
    why: '9,900/mo national. Informational home-care intent rather than booking intent, so it stays on the journal article.' },
  { keyword: 'microneedling cost', vol: 10, cpc: 3.14, intent: 'commercial', channel: 'ORGANIC', cluster: 'C14 price', page: 'treatments/procell-microchanneling', tier: '1-now',
    why: '12,100/mo national cost term. PAA on the live SERP asks how much is microneedling, and we hold $475 and $1,199 verified.' },
  { keyword: 'skin peeling treatment', vol: 10, kd: 24, cpc: 2.96, intent: 'informational', channel: 'ORGANIC', cluster: 'C5 peels-pigment', page: 'treatments/lira-peels', tier: '3-later',
    why: '1,300/mo national. Descriptive wording that names the peel service without the medical framing of a peel clinic.' },
  { keyword: 'melanin rich skin', vol: 10, kd: 12, cpc: 2.12, intent: 'informational', channel: 'ORGANIC', cluster: 'C11 melanin-specialism', page: 'melanin-rich-skin', tier: '2-next',
    why: '390/mo national at KD 12 and LOW competition. It is the phrase people actually use, not the marketing phrase.' },
  { keyword: 'skincare for dark skin', vol: 10, kd: 9, cpc: 1.68, intent: 'commercial', channel: 'ORGANIC', cluster: 'C11 melanin-specialism', page: 'melanin-rich-skin', tier: '2-next',
    why: '320/mo national at KD 9. Skincare framing rather than treatment framing, so it belongs on the specialism page, not a treatment page.' },
  { keyword: 'skincare for black skin', vol: 10, cpc: 2.64, intent: 'commercial', channel: 'ORGANIC', cluster: 'C11 melanin-specialism', page: 'melanin-rich-skin', tier: '3-later',
    why: '390/mo national. Same role as skincare for dark skin.' },
  { keyword: 'hyperpigmentation on dark skin', vol: 10, kd: 36, cpc: 1.35, intent: 'informational', channel: 'ORGANIC', cluster: 'C12 hyperpigmentation', page: 'treatments/hyperpigmentation', tier: '3-later',
    why: '320/mo national. Names the exact overlap between the PIH treatment and the specialism.' },
  { keyword: 'dark skin treatment', vol: 10, kd: 6, cpc: 4.25, intent: 'commercial', channel: 'ORGANIC', cluster: 'C11 melanin-specialism', page: 'melanin-rich-skin', tier: '2-next',
    why: '140/mo national at KD 6 with LOW competition, and the intent is commercial rather than informational.' },
  { keyword: 'adult acne treatment', vol: 10, kd: 41, intent: 'informational', channel: 'ORGANIC', cluster: 'C16 acne', page: 'treatments/acne', tier: '2-next',
    why: 'Matches the existing acne page. Adult onset is the segment a studio sees most.' },
  { keyword: 'best acne treatment', vol: 10, kd: 39, intent: 'informational', channel: 'ORGANIC', cluster: 'C16 acne', page: 'treatments/acne', tier: '3-later',
    why: 'Superlative resolved by dermatology listicles, so the realistic target is presence on page one rather than first place.' },
  { keyword: 'acne face treatment', vol: 10, kd: 35, intent: 'informational', channel: 'ORGANIC', cluster: 'C16 acne', page: 'treatments/acne', tier: '2-next',
    why: 'Descriptive variant that names the treatment type and the site of the concern.' },
  { keyword: 'facial membership', vol: 10, intent: 'commercial', channel: 'ORGANIC', cluster: 'C17 membership', page: 'membership', pos: '41', tier: '2-next',
    why: 'Membership page already ranks #41 for this. Membership tiers are published, so the terms that were previously blocked are now servable.' },
  { keyword: 'facial subscription', vol: 10, intent: 'transactional', channel: 'ORGANIC', cluster: 'C17 membership', page: 'membership', pos: '43', tier: '2-next',
    why: 'Same page, same intent. Subscription is the word some people use for a monthly facial plan.' },
  { keyword: 'spa membership san diego', vol: 10, intent: 'commercial', channel: 'ORGANIC', cluster: 'C17 membership', page: 'membership', pos: '44', tier: '3-later',
    why: 'Ranks already. Spa framing is wrong for the studio, so hold the position without writing for it.' },
  { keyword: 'chemical peel carlsbad', vol: 10, intent: 'transactional', channel: 'ORGANIC', cluster: 'C10 areas', page: 'facial/carlsbad', pos: '38', tier: '2-next',
    why: 'Area plus treatment. The live SERP for chemical peel san diego is where the volume sits, so this is the page that can catch it.' },
  { keyword: 'hydrafacial pacific beach', vol: 50, cpc: 7.36, intent: 'transactional', channel: 'ORGANIC', cluster: 'C10 areas', page: 'hydrafacial/pacific-beach', pos: '6', tier: '1-now',
    why: 'Already #6. The single best-ranking URL on the site, and the only one on page one. Coastal sun and hard-water scalp angle is genuinely differentiated.' },
  { keyword: 'enzyme therapy skin', vol: 10, intent: 'informational', channel: 'ORGANIC', cluster: 'C8 dmk', page: 'treatments/dmk-enzyme-therapy', pos: '46', tier: '3-later',
    why: 'Ranks already. Carries the barrier-repair entity the rest of the silo leans on.' },
  { keyword: 'cost of chemical peel at dermatologist', vol: 10, intent: 'commercial', channel: 'ORGANIC', cluster: 'C15 journal', page: 'journal/chemical-peel-cost-san-diego', pos: '23', tier: '2-next',
    why: 'Journal article ranks #23 for a cost comparison. The verified price is the answer.' },
  { keyword: 'hard water build up on scalp', vol: 10, intent: 'informational', channel: 'ORGANIC', cluster: 'C15 journal', page: 'journal/san-diego-hard-water-and-your-scalp', pos: '27', tier: '2-next',
    why: 'Journal article ranks #27. A genuinely local fact no competitor can copy.' },
  { keyword: 'chemical exfoliation does not typically result in', vol: 10, intent: 'informational', channel: 'ORGANIC', cluster: 'C15 journal', page: 'journal/chemical-peel-cost-san-diego', pos: '27', tier: '3-later',
    why: 'Ranks already. Informational phrasing pulled in by the same article.' },
  { keyword: 'black dermatologist san diego', vol: 10, intent: 'commercial', channel: 'ORGANIC', cluster: 'C11 melanin-specialism', page: 'melanin-rich-skin', pos: '61', tier: 'drop',
    why: 'Ranks at #61 but the query wants a clinician and KIAMO is an esthetician. Do not write for this term; the position is incidental.' },
];

for (const r of NEW) {
  if (seen.has(r.keyword)) continue;
  seen.add(r.keyword);
  out.push(R(r));
}

writeFileSync(SRC, out.join('\n') + '\n');
console.log('rows written:', out.length - 1);
