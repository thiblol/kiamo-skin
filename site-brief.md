# Site brief — KIAMO SKIN

Built from `local_seo_info/strategy.md`, `keyword-research-data.md`,
`src/config/business.ts` and the live site. Nothing here is inferred where a
verified source existed; anything that could not be verified is marked.

---

## Business

**Name:** KIAMO SKIN
**What it sells, in one sentence:** Corrective skin and scalp treatments for
melanin-rich skin, performed by a licensed esthetician in a private studio.

**Address:** 3067 Reynard Way, San Diego, CA 92103 (Mission Hills)
**Phone:** (310) 595-0872
**Booking:** Vagaro, request-based — never describe booking as instant.
**Market / language:** United States, en-US. San Diego County.

**Services — the complete verified menu. Nothing outside this list exists:**

| Service | Verified price |
|---|---|
| HydraFacial | $259 |
| HydraFacial Keravive (scalp) | $599 · $1,499 series of three |
| DMK Enzyme Therapy | $279 |
| ProCell Microchanneling | $475 · $1,199 series of three |
| Lira Gentle Renewal Peel | $199 |
| Lira Advanced Peel | $299 |
| Dermaplane facial | $199 |
| First-time client | $249 |

**Not offered, and must never be implied:** lasers, IPL, injectables, prescriptions,
hydroquinone dispensing, massage, Korean-method facials, microneedling by pen.

**Areas served:** Mission Hills, North Park, Pacific Beach, La Jolla, La Mesa,
Chula Vista, Del Mar, Encinitas, Carlsbad.

---

## Reader

Someone with dark marks on their face who has already tried something that did not
work — usually a drugstore brightening product, sometimes a peel elsewhere that made
things worse.

**What they are afraid of:**

- That treatment will make the pigmentation darker, not lighter. This fear is
  well-founded and is the single most important thing the copy must address.
- That the practitioner will not have treated skin like theirs before.
- That they will spend hundreds of dollars and see nothing.

---

## Proof KIAMO can legitimately claim

- Licensed Esthetician, California Board of Barbering & Cosmetology
- 5+ years experience
- Specialism in melanin-rich skin and barrier health
- Published prices — a genuine differentiator; most competitors hide them
- Private, single-practitioner studio with free parking

**Cannot claim, and the build fails if attempted:** any star rating, any review
count, opening hours, treatment durations, outcome guarantees, a surname, a case
history (no consented one exists yet).

---

## Competitors

`skinhabit.com`, `roseandhoney.com`, `sdbotox.com` — the last is the direct content
competitor, ranking #2 for `facial for hyperpigmentation`.

---

## Voice

Plain declaratives. Short sentences. Second person. Concrete nouns. British-leaning
spelling is *not* used — this is US English. No adjective inflation, no hype.

The existing treatment copy sets the standard: *"HydraFacial does three things at
once…"* · *"Peels on Black and brown skin are chosen differently — the pacing is the
whole point."*

### Say / don't say

| Say | Never say |
|---|---|
| melanin-rich skin, Black and brown skin | "ethnic skin", "problem skin" |
| pigmentation, dark marks | "blemishes", "flaws", "imperfections" |
| request an appointment | "book instantly", "same-day" |
| managed | "cured", "erased", "eliminated" |
| a series | "one and done", "quick fix" |
| Pricing at consultation. | any invented price |

### Hard rules, enforced by `test/guards.test.js`

- **No pronouns anywhere.** `she/her/hers/he/him/his` fail the build. Refer to Kiki
  by name or write around it.
- Title tag ≤ 60 characters. Meta description ≤ 155.
- Exactly one H1 per page.
- No internal link may 404. External `https:` links are exempt.
- Every image needs alt text.
- No price outside the verified table above.

---

## Author

**Kiki** — first name only, never a surname. Licensed Esthetician, California Board
of Barbering & Cosmetology. Author node lives at `/about#kiki`.

---

## CTA

Primary: **Request Appointment** → `https://www.vagaro.com/kiamoskin` (external).
Secondary: an internal link to the most relevant treatment page.

Soft CTAs only on journal articles, and only after the value has been delivered.
