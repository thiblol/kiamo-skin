/**
 * GeoArticles — service + city long-form content for AI Overview inclusion
 *
 * These are 1,000-1,500 word articles that combine:
 * - A service (HydraFacial, Lira Peels, etc.)
 * - A city (La Jolla, Chula Vista, etc.)
 * - A local concern or context (ocean swimming, inland UV, etc.)
 *
 * GeoArticles drive:
 * - AI Overview citations
 * - Featured snippets
 * - Long-tail keyword capture
 * - Semantic depth supporting Location Service Pages
 */

export interface GeoArticle {
  slug: string;
  areaSlug: string; // Parent area page
  serviceSlug?: string; // Parent service page (optional)

  title: string;
  description: string;
  h1: string;

  /** 2-3 sentence Quick Answer block for AI Overview extraction */
  quickAnswer: string;

  /** 5 FAQs in voice search format */
  faqs: Array<{
    question: string;
    answer: string;
  }>;

  /** Related internal links */
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;

  /** Publication date (YYYY-MM-DD format) */
  datePublished: string;

  /** Last modified date (YYYY-MM-DD format) */
  dateModified: string;

  /** Primary keyword for SEO */
  primaryKeyword: string;

  /** Word count (for Article schema) */
  wordCount: number;
  /** Article body HTML — H2 sections with paragraphs, inline links. Rendered with set:html. */
  body: string;
}

export const geoArticles: GeoArticle[] = [
  {
    slug: 'hydrafacial-ocean-swimmers',
    areaSlug: 'la-jolla',
    serviceSlug: 'hydrafacial',
    title: 'HydraFacial for Ocean Swimmers La Jolla | KIAMO Barrier Repair',
    description: 'Daily ocean swimming strips your barrier. HydraFacial at KIAMO in Mission Hills rebuilds hydration for La Jolla Cove swimmers. Clinical-grade extraction + repair.',
    h1: 'HydraFacial for Ocean Swimmers in La Jolla: Barrier Repair After Salt Water',
    quickAnswer: 'Daily ocean swimming at La Jolla Cove, Windansea, and La Jolla Shores strips the skin barrier with salt water and repeated rinsing. HydraFacial at KIAMO SKIN in Mission Hills uses vortex extraction to remove salt deposits from follicles and peptide infusion to rebuild hydration—twenty minutes south on I-5 from La Jolla Village.',
    faqs: [
      {
        question: 'How soon after swimming can I get a HydraFacial?',
        answer: 'Same day is fine if the skin is not actively irritated. Most swimmers book morning appointments before their swim, or afternoon appointments a few hours after getting out. If your skin is red, stinging, or visibly inflamed from a long session in rough water, wait twenty-four hours to let the acute inflammation settle. The HydraFacial will not make inflamed skin worse, but it works better on skin that is damaged but calm.',
      },
      {
        question: 'Will HydraFacial prevent salt buildup or just treat it?',
        answer: 'It treats existing buildup and temporarily prevents accumulation by clearing the follicles, but it does not stop salt from bonding with sebum the next time you swim. Think of it as resetting the baseline. Monthly treatments keep the buildup from reaching the point where it affects how your skin feels and functions. Between treatments, barrier repair serums and thorough rinsing after swimming help slow the rate at which salt re-accumulates.',
      },
      {
        question: 'How often do La Jolla ocean swimmers need HydraFacial?',
        answer: 'Monthly maintenance is the standard plan for swimmers in the water four to six days a week year-round. If you swim less frequently—two to three times a week, or only during warmer months—every six to eight weeks may be enough. The cadence is set at consultation based on how quickly your barrier recovers between sessions, not on a fixed protocol.',
      },
      {
        question: 'Can I swim the same day after HydraFacial treatment?',
        answer: 'You can, but most people wait twenty-four hours. The vortex extraction and peptide infusion leave the skin more receptive than usual, which also means more vulnerable to irritation for the first few hours. Swimming immediately after treatment will not undo the HydraFacial, but it does mean you are stripping the barrier again before it has had a chance to stabilize. If you must swim the same day, wait at least six hours and apply a barrier cream before entering the water.',
      },
      {
        question: 'What is the difference between this and a spa facial after swimming?',
        answer: 'Spa facials use steam, manual extraction, and massage. Steam opens pores but does not remove mineral deposits. Manual extraction can traumatize skin that is already compromised from salt exposure. Massage feels good but does not address the barrier damage that is causing the tightness in the first place. HydraFacial Syndeo uses a medical-grade device with controlled vacuum pressure calibrated to remove salt and mineral buildup without trauma. The peptide infusion is delivered under pressure, which drives hydration deeper than topical application. This is clinical equipment designed for barrier repair, not relaxation. The goal is functional skin, not a relaxing hour.',
      },
    ],
    relatedLinks: [
      {
        label: 'HydraFacial Treatment in San Diego',
        href: '/treatments/hydrafacial/',
      },
      {
        label: 'DMK Enzyme Therapy for Barrier Repair',
        href: '/treatments/dmk-enzyme-therapy/',
      },
      {
        label: 'Keravive Scalp Treatment',
        href: '/treatments/keravive-scalp/',
      },
      {
        label: 'Corrective Facials in La Jolla',
        href: '/service-areas/la-jolla/',
      },
      {
        label: 'Barrier Repair Facials for Encinitas Surfers',
        href: '/service-areas/encinitas/',
      },
      {
        label: 'Facials in Pacific Beach',
        href: '/service-areas/pacific-beach/',
      },
    ],
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    primaryKeyword: 'HydraFacial for ocean swimmers La Jolla',
    wordCount: 1450,
    body: `<h2 class="t-h3 mt-12 mb-6">Why Ocean Swimming Damages Skin</h2>
<p>
  The Pacific Ocean contains roughly 35 parts per thousand of dissolved salt—primarily
  sodium chloride, but also magnesium, calcium, and potassium salts. When salt water
  dries on skin, those minerals bond with sebum, the natural oil your skin produces to
  protect itself. The rinse you take after swimming removes the salt, but it also
  washes away the sebum-salt complex. Over one session, that is manageable. Over weeks
  and months of daily swimming, the cumulative effect leaves skin tight, reactive, and
  chronically dehydrated.
</p>
<p>
  The problem is not the salt alone—it is the cycle. Swim, rinse, repeat. Each rinse
  strips a little more of the barrier, and the skin never fully recovers between
  sessions. La Jolla swimmers face this year-round, not seasonally. The Cove is
  swimmable in January, and Windansea holds surf in every month. There is no off-season
  where the barrier gets a chance to rebuild on its own.
</p>
<p>
  Wind off the bluffs compounds the issue. The cliffs above the Cove and the open
  exposure at Windansea mean wind hits wet skin while you are still dripping,
  accelerating evaporation and pulling moisture out before you even towel off. The
  combination of salt, wind, and repeated rinsing creates a state dermatologists call
  transepidermal water loss—the skin cannot hold hydration because the barrier that
  would normally prevent evaporation is no longer intact.
</p>
<p>
  UV adds the final layer. The blufftop above the Cove receives direct afternoon sun
  with no tree cover, and swimmers coming out of the water stand in full sun while they
  dry off. UVA penetrates the marine layer even on gray mornings, and it drives
  oxidative stress in skin that is already compromised. Sun damage and barrier damage
  are not the same problem, but they reinforce each other—one makes the other worse.
</p>

<h2 class="t-h3 mt-12 mb-6">How HydraFacial Addresses Salt Water Damage</h2>
<p>
  HydraFacial Syndeo performs three actions simultaneously, and all three matter for
  salt-damaged skin. First, enzymatic resurfacing lifts the layer of dead cells and
  salt residue that builds up on the surface. This is not mechanical scrubbing—it is a
  chemical process that loosens debris without the abrasion a compromised barrier cannot
  handle.
</p>
<p>
  Second, vortex extraction vacuums salt deposits and mineral buildup out of follicles
  at controlled pressure—30 to 70 millimeters of mercury, calibrated to remove
  congestion without traumatizing the skin. San Diego's municipal water contains 280 to
  320 parts per million of dissolved minerals, which means even the rinse you take after
  swimming leaves calcium and magnesium deposits in your pores. Standard cleansing does
  not clear those. Vortex extraction does.
</p>
<p>
  Third, peptide infusion floods the skin with hydration and growth factors while pores
  are still open and receptive. The booster serum is selected based on what your skin
  needs that day—for swimmers, that usually means hyaluronic acid to bind water into the
  tissue and peptides to support barrier repair. The infusion happens under the same
  vacuum pressure that just cleared the follicles, which drives the active ingredients
  deeper than topical application alone would reach.
</p>
<p>
  The treatment takes roughly forty-five minutes, and there is no downtime. You can swim
  the next day if the skin feels ready, though most people wait twenty-four hours to let
  the barrier settle. The result is immediate hydration, reduced tightness, and skin
  that stops stinging under products. One session addresses the acute damage. A series
  addresses the cumulative state most year-round swimmers are in—where the barrier has
  been eroding for months and needs more than one rebuild cycle to stabilize.
</p>
<p>
  LED light therapy follows every HydraFacial at KIAMO SKIN. Red and near-infrared
  wavelengths reduce inflammation from wind and UV exposure, and they support the
  cellular repair the peptides just initiated. This is included in every session, not an
  add-on.
</p>

<h2 class="t-h3 mt-12 mb-6">What La Jolla Swimmers Should Expect</h2>
<p>
  The first HydraFacial will feel like relief. Skin that was tight and reactive before
  treatment feels plump and calm afterward, and the tightness that used to set in within
  hours of swimming takes longer to return. That immediate response is hydration—the
  vortex infusion replaced what salt and rinsing stripped away.
</p>
<p>
  The deeper repair happens over a series. Barrier function rebuilds in layers, not in
  one session, and swimmers who are in the water four to six days a week are stripping
  the barrier faster than a single treatment can rebuild it. Most La Jolla swimmers book
  monthly maintenance during active swimming season—the season being year-round here,
  which is the whole reason this treatment exists in the first place.
</p>
<p>
  Home care between sessions matters. A barrier repair serum applied morning and night
  supports the work the HydraFacial started, and mineral sunscreen prevents UV from
  undoing it. The serum recommendation is specific to what your skin showed during the
  treatment—KIAMO does not sell a fixed product line, so the recommendation is clinical,
  not commercial.
</p>
<p>
  The timeline for full barrier restoration depends on how compromised the skin is when
  you start. Two to three treatments over two to three months is the usual plan for
  swimmers with moderate damage. Severe cases—skin that stings under everything, flakes
  despite moisturizer, or stays red for hours after swimming—may need enzyme therapy
  instead of or in addition to HydraFacial. That is a consultation call, not something
  you can self-diagnose.
</p>
<p>
  Results hold as long as you maintain them. A monthly HydraFacial during swimming
  season keeps the barrier ahead of the damage cycle. Stop the maintenance, and the
  tightness returns within weeks. This is not a cure—it is management of an ongoing
  exposure.
</p>

<h2 class="t-h3 mt-12 mb-6">When HydraFacial Is Not Enough</h2>
<p>
  HydraFacial works for barriers that are damaged but still functional. If your skin has
  crossed into a state where it reacts to almost everything—stinging under plain
  moisturizer, staying red for hours after swimming, flaking despite hydration—that is a
  compromised barrier that needs enzymatic repair, not just hydration.
</p>
<p>
  <a href="/treatments/dmk-enzyme-therapy/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">
    DMK Enzyme Therapy
  </a> rebuilds barrier function at a deeper level than HydraFacial reaches. The enzyme masque
  works with the skin's own processes to restore healthy circulation and lymphatic activity,
  which supports long-term barrier integrity rather than just replacing lost hydration.
  It is the treatment for swimmers whose skin has been reactive for months and nothing topical
  has fixed it.
</p>
<p>
  The decision between HydraFacial and enzyme therapy is made at consultation based on
  what the skin shows that day. If the barrier is intact but dehydrated, HydraFacial is
  the answer. If the barrier is compromised to the point of chronic reactivity, enzyme
  therapy comes first. Both can be part of the same plan—enzyme therapy to rebuild, then
  HydraFacial to maintain once the barrier stabilizes.
</p>
<p>
  <a href="/treatments/keravive-scalp/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">
    Keravive scalp therapy
  </a> addresses the same salt buildup on the scalp that HydraFacial clears from the face.
  The part line takes as much salt and UV as the cheeks, and daily rinsing never fully clears
  it. Keravive uses the same vortex technology to extract buildup from the scalp and deliver
  peptides directly to the follicles. If your scalp feels tight, flaky, or dry despite regular
  shampooing, that is salt residue and mineral deposits—not dandruff.
</p>

<h2 class="t-h3 mt-12 mb-6">Drive Time and Logistics from La Jolla</h2>
<p>
  From La Jolla Village near Prospect Street and the Cove, take Torrey Pines Road
  south—not Coast Highway—to I-5 past UCSD and Rose Canyon, exiting at Washington
  Street. Twelve miles, roughly twenty minutes outside the commute. From Bird Rock, head
  north on La Jolla Boulevard to La Jolla Parkway east to I-5 south. From La Jolla
  Shores near Scripps Institution, Torrey Pines Road south picks up I-5 near UCSD.
</p>
<p>
  Southbound I-5 stacks through UTC and Sorrento Valley during the morning commute.
  Mid-morning and early afternoon are consistently the easier windows for the drive
  down. Most La Jolla swimmers book morning appointments before hitting the water, or
  early afternoon after a morning swim.
</p>
<p>
  The studio is at 3067 Reynard Way in Mission Hills, off Washington Street. Free
  parking on site. By appointment only, so a space is always available when you arrive.
  Appointments are one-to-one with Kiki, a California licensed esthetician with seven
  years treating barrier damage and pigmentation in all skin types, including
  melanin-rich skin.
</p>
<p>
  Full directions, neighborhood context, and what to expect at a first visit are on the{' '}
  <a href="/service-areas/la-jolla/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">
    La Jolla service area page
  </a>.
</p>`,
  },
  {
    slug: 'hydrafacial-pacific-beach-sun-damage',
    areaSlug: 'pacific-beach',
    serviceSlug: 'hydrafacial',
    title: 'HydraFacial for Pacific Beach Sun Damage: Reversing May Gray UV | KIAMO',
    description:
      'Pacific Beach sits inside the May Gray marine layer belt. HydraFacial at KIAMO in Mission Hills reverses the UV-loaded surface layer. From $199.',
    h1: 'HydraFacial for Pacific Beach Sun Damage: Reversing May Gray UV Exposure',
    quickAnswer:
      'Pacific Beach sits inside the May Gray marine layer belt, and the UV that penetrates thin cloud is the most consistent cause of new pigmentation in the clients we see from the neighborhood. HydraFacial at KIAMO SKIN in Mission Hills uses enzymatic resurfacing and peptide infusion to lift the UV-loaded surface cells and replace hydration, with LED light therapy included in every session — about fifteen minutes east on I-8 from Pacific Beach.',
    faqs: [
      {
        question: 'How soon after sun exposure should I book a HydraFacial?',
        answer:
          'Same week is ideal. The pigment that UV exposure drives upward is still close to the surface in the first seven to ten days, and the HydraFacial vortex extraction lifts it before it sets. Waiting a month means the pigment has migrated deeper and the protocol needs to be more aggressive. Pacific Beach clients who book in August after a summer of May Gray exposure see faster results than clients who wait until October.',
      },
      {
        question: 'Will HydraFacial prevent May Gray pigmentation or just treat it?',
        answer:
          'It treats existing surface pigment and supports the barrier, but it does not stop UV from driving new pigment the next time the marine layer sits overhead. Think of it as resetting the baseline. Monthly treatments during May through October keep the surface layer ahead of the UV cycle, but the home-care protocol — a pigment-calming serum and a mineral sunscreen with iron oxides — is what decides whether the pigment stays lifted between visits. The treatment is half the protocol. The home care is the other half.',
      },
      {
        question: 'How often do Pacific Beach clients need HydraFacial?',
        answer:
          'Monthly maintenance during May through October is the standard plan for clients in the neighborhood year-round. Off-season, every six to eight weeks is often enough. The cadence is set at consultation based on how the skin is responding and how much cumulative exposure the calendar is asking for, not on a fixed protocol. Clients who are also in the water at Tourmaline or Crystal Pier need a different cadence than clients whose Pacific Beach exposure is boardwalk and Belmont Park, and the studio adjusts accordingly.',
      },
      {
        question: 'Can I go to the beach the same day after a HydraFacial?',
        answer:
          'You can, but most clients wait twenty-four hours. The enzymatic resurfacing and peptide infusion leave the skin more receptive than usual, which also means more vulnerable to UV for the first few hours. Going to the beach the same day will not undo the HydraFacial, but it does mean you are asking the freshly treated skin to do the UV work it was just reset to avoid. If the beach is unavoidable the same day, mineral sunscreen with iron oxides is non-negotiable, and a hat is worth the effort.',
      },
      {
        question: 'What is the difference between this and the standard spa facial?',
        answer:
          'Spa facials use steam, manual extraction, and massage. Steam opens pores but does not remove oxidized surface pigment or mineral residue. Manual extraction can traumatize skin that has been working overtime in UV. Massage feels good but does not address the pigment the UV has been driving. HydraFacial Syndeo uses a medical-grade device with controlled vacuum pressure calibrated to remove UV-loaded surface cells without trauma. The peptide infusion is delivered under pressure, which drives hydration and pigment-calming actives deeper than topical application. This is clinical equipment designed for UV reversal, not relaxation. The goal is functional skin, not a relaxing hour.',
      },
    ],
    relatedLinks: [
      {
        label: 'HydraFacial Treatment in San Diego',
        href: '/treatments/hydrafacial/',
      },
      {
        label: 'Lira Chemical Peels for Pigmentation',
        href: '/treatments/lira-peels/',
      },
      {
        label: 'Procell Microchanneling in San Diego',
        href: '/treatments/procell-microchanneling/',
      },
      {
        label: 'Facials in Pacific Beach',
        href: '/service-areas/pacific-beach/',
      },
      {
        label: 'Barrier Repair Facials in Encinitas',
        href: '/service-areas/encinitas/',
      },
      {
        label: 'Melasma Treatment in La Mesa',
        href: '/service-areas/la-mesa/',
      },
    ],
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    primaryKeyword: 'HydraFacial Pacific Beach',
    wordCount: 1400,
    body: `<h2 class="t-h3 mt-12 mb-6">Why Pacific Beach Skin Shows UV Damage</h2>
<p>
  Pacific Beach sits inside the May Gray belt, the stretch of San Diego coastline where the marine layer sits heaviest from late May through July. The light looks dim and the air feels cool, and the natural assumption is that there is nothing to protect against. The UV index across Pacific Beach in those months still hits 8 to 10, and UVA passes through thin marine layer with very little loss. Pigment cells respond to UVA and to heat as well as to UVB, and in melanin-rich skin that response is enthusiastic.
</p>
<p>
  The damage is cumulative rather than acute. A single overcast morning on the boardwalk does not produce a visible change. The pattern that produces pigmentation is the one that runs for six to eight weeks: daily exposure without the sensory cue that would normally trigger sunscreen, followed by a clear-signal day that arrives without warning. The pigment shows up in August, by which point the exposure that caused it is months behind you and the trigger is invisible.
</p>
<p>
  Pacific Beach adds heat to the equation. The boardwalk and the Belmont Park area run several degrees warmer than the cliffs at La Jolla, and heat is its own pigmentation driver independent of UV. Melasma in particular responds to a combination of UVA, heat, and hormones. Pacific Beach is a more aggressive UV environment than the geography suggests, and the skin that lives in it year-round is paying for the misread.
</p>
<p>
  Salt adds another layer. Surfers and open-water swimmers at Tourmaline, Crystal Pier, and the Pacific Beach pier get the same salt-and-rinse cycle as La Jolla swimmers, and the same mineral buildup in the follicles. For non-surfers, the Pacific Beach afternoon at the beach is enough exposure to count. The barrier is being asked to do more than it can keep up with.
</p>

<h2 class="t-h3 mt-12 mb-6">How HydraFacial Reverses the Surface Layer</h2>
<p>
  HydraFacial Syndeo at KIAMO SKIN performs three actions, and all three matter for UV-loaded Pacific Beach skin. First, enzymatic resurfacing lifts the layer of dead cells and surface pigment that the UV exposure has been driving upward. This is not mechanical scrubbing — it is a chemical process that loosens debris without the abrasion a barrier that has been working overtime cannot afford.
</p>
<p>
  Second, vortex extraction vacuums mineral deposits and oxidized sebum out of follicles at controlled pressure. Pacific Beach residents who are also in the water get the same salt buildup as La Jolla swimmers. Residents who are not in the water still get the mineral residue from San Diego's hard water — local supply runs 16 grains per gallon, which means every rinse leaves calcium and magnesium in the pores. Standard cleansing does not clear it.
</p>
<p>
  Third, peptide infusion floods the skin with hydration while the pores are still open and receptive. The booster serum is selected at consultation based on what your skin is doing that day — for Pacific Beach clients in late summer, that usually means a pigment-calming peptide stack layered over hyaluronic acid. The infusion happens under the same vacuum pressure that just cleared the follicles, which drives the active ingredients deeper than topical application alone would reach.
</p>
<p>
  LED light therapy follows every HydraFacial at KIAMO. Red and near-infrared wavelengths reduce the inflammation UV has been driving at the cellular level, and they support the repair the peptides just initiated. This is included in every session, not an add-on.
</p>
<p>
  The treatment takes about forty-five minutes, and there is no downtime. You can be back at the beach the next day if the skin feels ready, though most clients wait twenty-four hours to let the barrier settle. The result is immediate hydration, reduced reactivity, and skin that stops stinging under products that were stinging before. One session addresses the acute state. A series addresses the cumulative state most Pacific Beach residents are in by the time they book.
</p>

<h2 class="t-h3 mt-12 mb-6">What Pacific Beach Clients Should Expect</h2>
<p>
  The first HydraFacial will feel like reset. Skin that was tight and reactive feels plump and calm afterward, and the reactivity that used to set in within hours of sun exposure takes longer to return. That immediate response is hydration, and the pigment work is just beginning. Pigment reversal happens over a series, not in one session.
</p>
<p>
  Most Pacific Beach clients book monthly maintenance during the high-UV months — May through October, roughly. The cadence is set at consultation based on how the skin is responding and how much cumulative exposure the calendar is asking for. Off-season, every six to eight weeks is often enough to hold the gains.
</p>
<p>
  Home care between sessions matters more in Pacific Beach than in most neighborhoods, because the daily exposure does not stop. A pigment-calming serum applied morning and night supports the work the HydraFacial started, and a broad-spectrum mineral sunscreen reapplied every two hours during beach time is the single most important variable. The sunscreen recommendation at KIAMO is specific to the skin in front of the esthetician — the studio does not sell a fixed product line, so the recommendation is clinical, not commercial.
</p>
<p>
  The timeline for visible pigment reduction depends on how deep the pigment sits and how long it has been accumulating. Two to three treatments over two to three months is a reasonable starting point. More entrenched pigment — the kind that has been building for years — may need a <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peel</a> or <a href="/treatments/procell-microchanneling/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Procell microchanneling</a> layered in. That is a consultation call, not a self-diagnosis.
</p>

<h2 class="t-h3 mt-12 mb-6">When HydraFacial Is Not Enough</h2>
<p>
  HydraFacial works for skin that is UV-loaded but still functional. If the barrier has crossed into a state where it reacts to almost everything — stinging under plain moisturizer, staying pink for hours after sun exposure, flaking despite hydration — the skin needs enzymatic repair before any pigment work can hold.
</p>
<p>
  <a href="/treatments/dmk-enzyme-therapy/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">DMK Enzyme Therapy</a> rebuilds barrier function at a deeper level than HydraFacial reaches. The enzyme masque works with the skin's own processes to restore healthy circulation and lymphatic activity, which supports the long-term barrier integrity that lets pigment work stay put. It is the treatment for Pacific Beach skin that has been reactive for months and nothing topical has fixed it.
</p>
<p>
  The decision between HydraFacial and enzyme therapy is made at consultation based on what the skin shows that day. If the barrier is intact but the pigment is the concern, HydraFacial is the answer. If the barrier is compromised to the point of chronic reactivity, enzyme therapy comes first. Both can be part of the same plan — enzyme therapy to rebuild, then HydraFacial to maintain once the barrier stabilizes.
</p>
<p>
  For pigment that sits deeper than the surface layer — melasma, post-inflammatory marks that did not fade over a summer, sun damage that has been accumulating for years — a <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peel</a> is the more direct intervention. The peel drives controlled injury to the pigmented layer, and the skin's repair response brings fresh, even-toned cells to the surface. Lira peels are calibrated for melanin-rich skin, which matters for the Pacific Beach client base specifically.
</p>

<h2 class="t-h3 mt-12 mb-6">Drive Time and Logistics from Pacific Beach</h2>
<p>
  From Pacific Beach, take Grand Avenue east to I-5 north, or take Garnet Avenue to I-805 north. The I-805 route skips downtown and is consistently the faster option, about fifteen minutes outside the commute. From the Crystal Pier area, Garnet east to I-805 picks up the freeway in under five minutes. From the north end near Tourmaline, take La Jolla Boulevard south to I-5.
</p>
<p>
  Mid-morning and early afternoon are the easier windows for the drive. The morning rush from Pacific Beach into Mission Hills stacks on I-5 through La Jolla, and the evening commute reverses it. Most Pacific Beach clients book mid-morning appointments and are back home within the hour.
</p>
<p>
  The studio is at 3067 Reynard Way in Mission Hills, off Washington Street. Free parking on site. By appointment only, so a space is always available when you arrive. Appointments are one-to-one with Kiki, a California licensed esthetician with seven years treating UV damage and pigmentation in all skin types, including melanin-rich skin.
</p>
<p>
  Full directions, neighborhood context, and what to expect at a first visit are on the <a href="/service-areas/pacific-beach/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Pacific Beach service area page</a>.
</p>`,
  },
  {
    slug: 'lira-peel-la-mesa-melasma',
    areaSlug: 'la-mesa',
    serviceSlug: 'lira-peels',
    title: 'Lira Chemical Peel for La Mesa Melasma: Inland Valley Heat Protocol | KIAMO',
    description:
      'La Mesa heat is inland heat — different UV than the coast. Lira peels at KIAMO in Mission Hills recalibrate melasma in melanin-rich skin. From $199.',
    h1: 'Lira Chemical Peel for La Mesa Melasma: The Inland Valley Heat Protocol',
    quickAnswer:
      'La Mesa is far enough inland that the marine layer no longer moderates its UV. Summer temperatures push 95°F and the heat-driven component of melasma kicks in for clients with Fitzpatrick III-V skin. The Lira peel at KIAMO SKIN in Mission Hills is calibrated to lift pigment without triggering post-inflammatory hyperpigmentation in melanin-rich skin — roughly twenty minutes south on I-15 from La Mesa.',
    faqs: [
      {
        question: 'How does La Mesa heat make melasma worse?',
        answer:
          'Melasma is driven by three triggers acting together: hormones, UVA, and heat. La Mesa supplies the second and third reliably from May through September, and the combination is what produces the symmetric darkening on the upper lip, cheeks, and forehead that melasma is known for. The marine layer that moderates coastal UV does not reach La Mesa most summer mornings, and the temperature differential between the coast and La Mesa is what produces the heat-driven pigment that the coastline does not see at the same rate.',
      },
      {
        question: 'Why is the Lira peel calibrated differently for melanin-rich skin?',
        answer:
          'Depth determines whether a peel helps or hurts. A peel that goes too deep triggers the wound response that produces post-inflammatory hyperpigmentation, and the resulting pigment is often darker and more persistent than the melasma it was meant to treat. The Lira protocol is built around staying above that threshold, and the consultation determines the starting depth based on the Fitzpatrick type and the depth of the pigment. For Fitzpatrick III-V skin — the most common La Mesa client base — the depth is set shallower than it would be for Fitzpatrick I-II skin, and the home-care protocol includes a pigment-calming serum with arbutin and a mineral sunscreen with iron oxides.',
      },
      {
        question: 'How many Lira peels does it take to lift melasma?',
        answer:
          'One peel produces a measurable change. Three peels over six months is the standard protocol for entrenched melasma, and the results compound. The protocol is set at consultation based on how the first peel responds, and the cadence is adjusted as the pigment lifts. Most La Mesa clients see visible reduction by the second peel, with continued improvement through the third. The expectation is reduction, not elimination — melasma is managed, not cured, and the La Mesa client who understands that is the one who gets the result they came for.',
      },
      {
        question: 'Can I be in the sun during Lira peel recovery?',
        answer:
          'No, not for seven to ten days post-peel. The peel leaves the skin temporarily more reactive to UV, and unprotected exposure during that window can undo the work and produce rebound hyperpigmentation. The studio schedules peels with the recovery window in mind, and the home-care protocol during recovery includes a pigment-calming serum and a mineral sunscreen with iron oxides reapplied every two hours during any outdoor time. Iron oxides block visible light, which is its own pigmentation driver that clear sunscreens do not address.',
      },
      {
        question: 'What happens if the melasma has been present for years?',
        answer:
          'Melasma that has been present for more than three or four summers often has dermal as well as epidermal pigment. A peel still helps — it lifts the epidermal layer and resets the surface — but it does not reach the dermal layer on its own. The protocol at KIAMO combines a Lira peel series with <a href="/treatments/procell-microchanneling/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Procell microchanneling</a> for entrenched cases, and the consultation determines whether the combination is needed. The honest answer is that deep melasma takes longer to lift than surface melasma, and the timeline is six to twelve months rather than three.',
      },
    ],
    relatedLinks: [
      {
        label: 'Lira Chemical Peels for Pigmentation',
        href: '/treatments/lira-peels/',
      },
      {
        label: 'Hyperpigmentation Treatment in San Diego',
        href: '/treatments/hyperpigmentation/',
      },
      {
        label: 'Procell Microchanneling in San Diego',
        href: '/treatments/procell-microchanneling/',
      },
      {
        label: 'Melasma Treatment in La Mesa',
        href: '/service-areas/la-mesa/',
      },
      {
        label: 'Pigmentation Treatment in North Park',
        href: '/service-areas/north-park/',
      },
      {
        label: 'Barrier Repair Facials in Encinitas',
        href: '/service-areas/encinitas/',
      },
    ],
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    primaryKeyword: 'chemical peel La Mesa melasma',
    wordCount: 1400,
    body: `<h2 class="t-h3 mt-12 mb-6">Why La Mesa Heat Drives Melasma Differently</h2>
<p>
  La Mesa sits far enough inland that the marine layer no longer moderates its UV. The neighborhood runs ten to fifteen degrees hotter than the coast through July and August, and the heat component of melasma — independent of UV — kicks in for clients with Fitzpatrick III to V skin. Melasma concentrates in the pigment cells that respond enthusiastically to three triggers at once: hormones, heat, and UVA. La Mesa supplies two of those three on a regular afternoon in August.
</p>
<p>
  The geography matters. Coastal San Diego gets a temperature ceiling from the ocean. La Mesa, in the foothills east of the city, does not. Summer temperatures at the KIAMO studio on the day a La Mesa client walks in will typically be in the mid-eighties, and the temperature differential between the coast and La Mesa is what produces the heat-driven component of melasma that is rarer in the marine layer neighborhoods.
</p>
<p>
  La Mesa's population is also the demographic reality. The neighborhood is one of the more diverse in the county, and melasma in melanin-rich skin is the single most common pigmentation concern treated at the studio. The combination of heat, UV, and Fitzpatrick III-V skin is the clinical context that <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peels</a> are built to address, and the reason La Mesa clients respond to them at a rate the coastline does not always match.
</p>
<p>
  The pattern is predictable. A La Mesa client comes in after a summer of gradual darkening on the upper lip, the cheeks, or the forehead. The darkening is symmetric — the signature of melasma rather than post-inflammatory hyperpigmentation. Sunscreen has been applied, but it has not been enough, and the heat is doing work the sunscreen is not built to stop. The Lira peel is calibrated for this exact state.
</p>

<h2 class="t-h3 mt-12 mb-6">How the Lira Peel Is Calibrated for Melasma</h2>
<p>
  The Lira peel is a medium-depth chemical peel designed to drive controlled injury to the pigmented layer without crossing into the dermis. The formulation includes a pigment-calming stack alongside the resurfacing acids, and the protocol is set to a depth that lifts melasma pigment while keeping the inflammatory response within the range melanin-rich skin can resolve cleanly.
</p>
<p>
  Depth is the variable that determines whether a peel helps or hurts. A peel that goes too deep triggers the wound response that produces post-inflammatory hyperpigmentation, and the resulting pigment is often darker and more persistent than the melasma it was meant to treat. The Lira protocol is built around staying above that threshold, and the consultation determines the starting depth based on the Fitzpatrick type and the depth of the pigment.
</p>
<p>
  The peel itself takes about twenty minutes of contact time, and the immediate response is a frosting pattern that maps to the pigmented areas. The skin then progresses through the standard peel recovery — darkened, then flaking, then fresh — over seven to ten days. Most La Mesa clients see visible lifting at the two-week mark, with continued improvement over the next month as the pigment continues to resolve.
</p>
<p>
  Sun avoidance is non-negotiable during recovery. A Lira peel leaves the skin temporarily more reactive to UV, and unprotected exposure during that window can undo the work. The studio schedules peels with the recovery window in mind, and the home-care protocol includes a pigment-calming serum and a mineral sunscreen with iron oxides — the iron oxides block visible light, which is its own pigmentation driver that clear sunscreens do not address.
</p>
<p>
  One peel produces a measurable change. Three peels over six months is the standard protocol for entrenched melasma, and the results compound. The protocol is set at consultation based on how the first peel responds, and the cadence is adjusted as the pigment lifts.
</p>

<h2 class="t-h3 mt-12 mb-6">What La Mesa Clients Should Expect</h2>
<p>
  The first Lira peel is the diagnostic. It tells the studio how the skin responds to a controlled peel — how quickly the frosting pattern appears, how the recovery progresses, how much pigment lifts at the two-week mark. The second peel is calibrated based on what the first one showed. The third is where most La Mesa clients see the change that makes the protocol worth repeating.
</p>
<p>
  Recovery is real. The first three to five days are the most visible — the skin darkens where the pigment sat, and there is flaking that can be managed but not hidden. The studio gives a specific home-care protocol, and following it determines how clean the lift is at the end. Skipping the sunscreen or the pigment-calming serum during the recovery window compromises the result.
</p>
<p>
  Maintenance between peels is the part most clients underestimate. Melasma is a chronic condition driven by triggers that do not stop when the peel ends. The home-care routine that supported the first peel needs to continue supporting the skin between peels, or the pigment returns. The studio's pigment-calming serum recommendation is specific to what the first peel showed, and the sunscreen is non-negotiable year-round.
</p>
<p>
  La Mesa heat returns every summer. The protocol is built to address what the heat does, and the maintenance phase is built to hold the gains the peel produced. The clinical expectation is reduction, not elimination — melasma is managed, not cured, and the La Mesa client who understands that is the one who gets the result they came for.
</p>

<h2 class="t-h3 mt-12 mb-6">When Lira Is Not Enough</h2>
<p>
  Lira peels work for melasma that sits in the epidermal layer. When the pigment has descended into the dermal layer — which happens over years of unprotected exposure — the peel still helps, but it is not the only intervention needed.
</p>
<p>
  <a href="/treatments/procell-microchanneling/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Procell microchanneling</a> reaches deeper than a peel can. The controlled micro-injuries trigger a collagen response that can lift dermal pigment over multiple sessions, and the depth is calibrated per treatment to stay within the range melanin-rich skin can resolve without rebound hyperpigmentation. For La Mesa clients with melasma that has been present for more than three or four summers, the protocol often combines a Lira peel series with Procell layered in.
</p>
<p>
  Barrier integrity comes first. If the La Mesa client walks in with a barrier that is reactive — stinging under moisturizer, flaking despite hydration, pink for hours after a hot day — the protocol starts with <a href="/treatments/dmk-enzyme-therapy/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">DMK Enzyme Therapy</a> before any peel or microchanneling. Pigment work on a compromised barrier produces unpredictable results, and the enzyme therapy rebuilds the foundation the pigment work depends on.
</p>

<h2 class="t-h3 mt-12 mb-6">Drive Time and Logistics from La Mesa</h2>
<p>
  From La Mesa, take I-15 south to I-805 south, or take Highway 94 west directly to the studio. The Highway 94 route is roughly twenty minutes outside the commute and avoids the freeway interchange. From the Grossmont area, take Fletcher Parkway to Highway 94. From the Mt. Helix area, take Spring Street down to Highway 94.
</p>
<p>
  Mid-morning and early afternoon are the easier windows. The evening commute on I-15 north from Mission Hills back to La Mesa stacks in the Santee area, and the morning rush reverses it. Most La Mesa clients book mid-morning and are home before the heat of the afternoon.
</p>
<p>
  The studio is at 3067 Reynard Way in Mission Hills, off Washington Street. Free parking on site. By appointment only, so a space is always available when you arrive. Appointments are one-to-one with Kiki, a California licensed esthetician with seven years treating melasma in all skin types, including melanin-rich skin.
</p>
<p>
  Full directions, neighborhood context, and what to expect at a first visit are on the <a href="/service-areas/la-mesa/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">La Mesa service area page</a>.
</p>`,
  },
  {
    slug: 'procell-microchanneling-north-park-acne-scars',
    areaSlug: 'north-park',
    serviceSlug: 'procell-microchanneling',
    title: 'Procell Microchanneling in North Park for Acne Scars | KIAMO Skin',
    description:
      'Acne scar revision in melanin-rich skin needs depth-controlled microchanneling. Procell at KIAMO in Mission Hills serves North Park with safe-for-Fitzpatrick I-VI protocols. From $599.',
    h1: 'Procell Microchanneling for North Park Acne Scars: Depth-Controlled Revision for All Skin Types',
    quickAnswer:
      'Acne scar revision in melanin-rich skin is depth-controlled work. Too shallow and the scars do not respond. Too deep and you risk post-inflammatory hyperpigmentation that is worse than the scars. Procell microchanneling at KIAMO SKIN in Mission Hills is set to a depth calibrated at consultation based on scar type and Fitzpatrick — the same studio, ten minutes south of North Park via I-805.',
    faqs: [
      {
        question: 'Can microchanneling make acne scars worse on dark skin?',
        answer:
          'Yes, if the depth is set too deep. The default depth on most microchanneling devices is calibrated for Fitzpatrick I-III skin, and applying that default to Fitzpatrick IV-VI skin can trigger post-inflammatory hyperpigmentation that is darker and more persistent than the original scarring. The protocol at KIAMO stays within a narrower depth window for melanin-rich skin, and the depth is recorded per session so the next session can be calibrated against the response. A studio that uses a default depth on darker skin without calibration is the studio to avoid.',
      },
      {
        question: 'How many Procell sessions does acne scar revision take?',
        answer:
          'Three to six sessions spaced four to six weeks apart is the standard plan, with visible change by the third or fourth session and continued improvement through the sixth. The wound-healing cascade the microchanneling initiates continues for weeks after each session, and the collagen remodeling that fills atrophic scars is cumulative. A client who expects one session and quits after two misses the result the protocol was built to produce. PIH responds faster — often within two to three peel sessions — and the consultation determines which protocol fits the concern.',
      },
      {
        question: 'Is microchanneling safe with active acne?',
        answer:
          'No. Microchanneling over active breakouts spreads inflammation and risks driving bacteria deeper into the skin. The protocol requires that active acne be controlled before the series begins, which often means a separate <a href="/treatments/hydrafacial/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">HydraFacial</a> series or <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peel</a> protocol to clear the active state before microchanneling begins. The studio sequences the protocols based on what the skin shows at consultation, and the timeline runs from the active-clear phase through the scar-revision phase.',
      },
      {
        question: 'What is the difference between Procell and other microchanneling devices?',
        answer:
          'The device is the tool, not the treatment. Procell, SkinPen, Vivace, and Dermapen are all motorized microchanneling devices that create controlled micro-injuries. The treatment is the depth, and the depth is set per session based on the scar type and the Fitzpatrick type. A studio that uses the most expensive device at a default depth that does not match the scar is performing a different service than a studio that uses a less expensive device at a calibrated depth. The protocol at KIAMO uses Procell because the cartridge system allows precise depth adjustment per pass, and that adjustability is what the acne scar revision protocol depends on.',
      },
      {
        question: 'Will my acne scars come back after the series?',
        answer:
          'No. Atrophic scars that have been revised through collagen remodeling do not return. The collagen the microchanneling stimulated is structural, and it persists. Active acne can produce new scars in the same area, which is why the protocol requires that active acne be controlled before the series begins. The maintenance phase after the series is a pigment-calming home-care protocol and a mineral sunscreen, not ongoing microchanneling. The work is done when the scars are filled.',
      },
    ],
    relatedLinks: [
      {
        label: 'Procell Microchanneling in San Diego',
        href: '/treatments/procell-microchanneling/',
      },
      {
        label: 'HydraFacial Treatment in San Diego',
        href: '/treatments/hydrafacial/',
      },
      {
        label: 'Lira Chemical Peels for Pigmentation',
        href: '/treatments/lira-peels/',
      },
      {
        label: 'Pigmentation & Acne Scar Treatment in North Park',
        href: '/service-areas/north-park/',
      },
      {
        label: 'Three kinds of dark mark, and why one facial cannot fix all three',
        href: '/journal/three-kinds-of-dark-mark/',
      },
      {
        label: 'Microneedling on dark skin: is it safe?',
        href: '/journal/microneedling-on-dark-skin-san-diego/',
      },
    ],
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    primaryKeyword: 'microneedling North Park acne scars',
    wordCount: 1500,
    body: `<h2 class="t-h3 mt-12 mb-6">Why Acne Scars in North Park Need Depth-Controlled Work</h2>
<p>
  Acne scars come in categories that respond to different treatments, and choosing the right one depends on what the scar actually is. Post-inflammatory hyperpigmentation — the dark mark left after a pimple heals — fades with time and a pigment-calming peel. Atrophic or pitted scars — icepick, boxcar, rolling — sit below the surface and need controlled injury to the dermis to respond. Hypertrophic scars sit above the surface and need a different protocol entirely. North Park clients come in with all three, often on the same face.
</p>
<p>
  Depth is the variable that determines whether microchanneling helps or hurts. Too shallow and the micro-injuries never reach the depth the scar needs to remodel. Too deep and the wound response produces post-inflammatory hyperpigmentation that is worse than the scar. The Procell device at KIAMO is set per treatment based on the scar type and the Fitzpatrick type, and the depth is recorded so the next session can be calibrated against the response.
</p>
<p>
  Melanin-rich skin adds a constraint that many devices are not designed to address. The default depth on most microchanneling devices is set for Fitzpatrick I-III skin, and applying that setting to Fitzpatrick IV-VI skin produces inconsistent results. The Procell protocol at the studio is calibrated at consultation to a starting depth that stays within the window melanin-rich skin can resolve cleanly, and the depth is adjusted based on how the first session responds.
</p>
<p>
  North Park's proximity to the studio — ten minutes south via I-805 — matters for a protocol that runs in a series. Three to six sessions spaced four to six weeks apart is the standard plan, and a location that requires a long drive each time compromises adherence. The studio sees the same North Park clients across the full series, which is what the protocol depends on.
</p>

<h2 class="t-h3 mt-12 mb-6">How Procell Microchanneling Revises Acne Scars</h2>
<p>
  Procell microchanneling uses a motorized tip with sterile single-use needle cartridges to create controlled micro-injuries at a precise depth in the skin. The injuries trigger the wound-healing cascade — inflammation, proliferation, remodeling — and the remodeling phase is what produces the collagen that fills atrophic scars over a series of sessions.
</p>
<p>
  The depth setting is the clinical lever. For icepick scars, which are narrow and deep, the depth is set to reach the base of the scar. For boxcar scars, which are wider and shallower, the depth is set to the floor of the scar. For rolling scars, which connect to underlying fibrous bands, the depth is set to break the bands, and the protocol may include subcision as a complement. Each scar type gets a different depth, and the same face often gets multiple depths across different scars in the same session.
</p>
<p>
  The session takes about sixty to ninety minutes depending on the area treated and the number of scars. The skin is numbed topically beforehand, and the discomfort during the session is manageable — most clients describe it as pressure with intermittent sharpness rather than sustained pain. The skin is red and slightly swollen immediately after, and the visible response resolves over three to five days.
</p>
<p>
  Hyaluronic acid serum is applied during the session to flood the microchannels while they are open, and the studio sends a specific aftercare serum home. The microchannels close within hours, but the wound response the injuries initiated continues for weeks. The visible result is cumulative across sessions, with most North Park clients seeing meaningful change by the third session.
</p>

<h2 class="t-h3 mt-12 mb-6">What North Park Clients Should Expect</h2>
<p>
  The first session is the diagnostic. The studio maps the scar types, sets the depth per area, applies the protocol, and photographs the starting point. The second session is calibrated against how the first one responded, and the depth is adjusted up or down based on what the skin showed at the two-week follow-up. The third and subsequent sessions are where the cumulative change becomes visible.
</p>
<p>
  Active acne is a contraindication. Microchanneling over active breakouts spreads inflammation and risks driving bacteria deeper. The protocol requires that active acne be controlled before the series begins, which often means a separate <a href="/treatments/hydrafacial/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">HydraFacial</a> series or <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peel</a> to clear the active state before the microchanneling begins. The studio sequences the protocols based on what the skin shows at consultation.
</p>
<p>
  Hyperpigmentation is a separate concern from scarring, and the two are often addressed in the same plan. PIH that sits in the epidermal layer fades with peels and pigment-calming serums. PIH that has been present for months and sits deeper responds to the same microchanneling protocol, with the depth set to reach the pigment without over-treating the underlying scar. For melanin-rich skin specifically, the protocol is built to address both in the same series without producing rebound hyperpigmentation.
</p>
<p>
  The timeline is real. Acne scar revision is not a one-session result. Most North Park clients see the visible change they came for by the third or fourth session, with continued improvement through the sixth. The studio is honest about the timeline because the protocol depends on the client understanding it — a client who expects one session and quits after two misses the result the protocol was built to produce.
</p>

<h2 class="t-h3 mt-12 mb-6">When Microchanneling Is Not Enough</h2>
<p>
  Microchanneling works for atrophic scars. It does not work for active acne, and it does not work for hypertrophic scars or keloids. The protocol for those scar types is different, and the studio refers out for cases that fall outside what microchanneling can address.
</p>
<p>
  For post-inflammatory hyperpigmentation that is the primary concern — not the scar itself but the dark mark left after — the protocol may not need microchanneling at all. A <a href="/treatments/lira-peels/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">Lira peel</a> series with a pigment-calming home-care protocol often resolves PIH in two to three sessions without the downtime microchanneling requires. The studio's consultation determines which protocol fits the concern.
</p>
<p>
  Barrier integrity comes first. If the North Park client walks in with a barrier that is reactive — common after years of over-exfoliating in response to acne — the protocol starts with <a href="/treatments/dmk-enzyme-therapy/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">DMK Enzyme Therapy</a> before any scar work. Microchanneling on a compromised barrier produces unpredictable results, and the enzyme therapy rebuilds the foundation the scar work depends on.
</p>

<h2 class="t-h3 mt-12 mb-6">Drive Time and Logistics from North Park</h2>
<p>
  From North Park, take I-805 south to Highway 163 south, exiting at Washington Street. The drive is roughly ten minutes outside the commute, and the route skips downtown entirely. From the North Park core around 30th and University, take University Avenue east to I-805. From the south end near El Cajon Boulevard, take I-805 directly.
</p>
<p>
  Mid-morning and early afternoon are the easier windows. The evening commute on I-805 north from Mission Hills back to North Park stacks in the Hillcrest area, and the morning rush reverses it. Most North Park clients book mid-morning and are back home before the afternoon heat builds.
</p>
<p>
  The studio is at 3067 Reynard Way in Mission Hills, off Washington Street. Free parking on site. By appointment only, so a space is always available when you arrive. Appointments are one-to-one with Kiki, a California licensed esthetician with seven years treating acne scarring and pigmentation in all skin types, including melanin-rich skin.
</p>
<p>
  Full directions, neighborhood context, and what to expect at a first visit are on the <a href="/service-areas/north-park/" class="border-b border-ink pb-1 hover:border-rose hover:text-rose">North Park service area page</a>.
</p>`,
  },
];

export const getGeoArticle = (areaSlug: string, articleSlug: string) =>
  geoArticles.find((a) => a.areaSlug === areaSlug && a.slug === articleSlug);

export const getGeoArticlesByArea = (areaSlug: string) =>
  geoArticles.filter((a) => a.areaSlug === areaSlug);
