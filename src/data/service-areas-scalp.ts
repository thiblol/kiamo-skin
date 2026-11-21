import type { ServiceAreaContent } from './service-area-types';

/**
 * Scalp therapy for the four coastal catchments.
 *
 * Four pages: scalp therapy in La Jolla, Encinitas, Carlsbad and Pacific
 * Beach. All four are coastal, so the copy could easily have been assembled
 * by swapping the city name — which is exactly why each one is written
 * against what that catchment actually does to a scalp.
 *
 * La Jolla swims in January. Encinitas surfs year-round and wears sunscreen
 * to the roots. Carlsbad has the same county water and more sun than salt.
 * Pacific Beach has all three exposures stacked, under a marine layer that
 * looks like protection and is not.
 *
 * The clinical spine is common to all four and comes from the Keravive
 * service entry and the hard water journal article: San Diego tap water runs
 * about 16 grains per gallon, the mineral film it leaves is not a fungal
 * condition, and a scalp is skin that has been neglected. The differences
 * between the pages are the exposure, the drive, and what a client is
 * actually asking for when they book.
 */
export const serviceAreaContentScalp: Record<string, ServiceAreaContent> = {
  'scalp-therapy:la-jolla': {
    service: 'scalp-therapy',
    area: 'la-jolla',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Scalp Therapy in La Jolla | KIAMO Skin',
    description:
      "Keravive scalp therapy for La Jolla clears salt and hard water buildup. San Diego tap water runs 16 grains per gallon. $599. Request an appointment.",
    h1: 'Scalp Therapy in La Jolla — For People Who Swim in January',
    opener:
      "A clinical scalp treatment that clears salt and hard water residue at the follicle, written for people who swim at the Cove all year. Performed by Kiki, a California licensed esthetician.",
    intro:
      "La Jolla swims in January. The Cove has hosted a group open-water swim since 1916 and the lineup meets there through the winter, Windansea keeps a year-round surf community, and La Jolla Shores draws swimmers and divers. That is the useful fact about scalp health in this neighbourhood: the exposure is not seasonal, so the buildup is not either. Salt water rinses out of hair but leaves its residue at the follicle opening, San Diego tap water runs about 16 grains per gallon and lays calcium and magnesium over the top of it, and the blufftop above the Cove takes direct afternoon sun with nothing over the part line. KIAMO Skin is in Mission Hills at 3067 Reynard Way — about twelve miles and twenty minutes south of the Village on I-5, with free parking on site.",
    quickAnswer:
      "Keravive scalp therapy at KIAMO Skin clears the salt, hard water minerals and oxidised sebum that collect at the follicle on a La Jolla scalp, then applies a peptide complex to support the environment hair grows in. The studio is at 3067 Reynard Way in Mission Hills, about twelve miles and twenty minutes south of the Village on I-5, with free parking on site. A treatment is $599, or $1,499 for a series of three.",
    authority: {
      heading: 'Why scalp work needs a clinical appointment, not another shampoo',
      body:
        "The usual response to a flaky scalp is an anti-dandruff shampoo, and that is the wrong instrument for what most San Diego scalps carry. Anti-dandruff formulas control yeast. The residue forming here is mineral — calcium and magnesium reacting with shampoo surfactants to leave an insoluble film that does not rinse away cleanly — and stripping an already dry scalp makes the flaking return within a fortnight. The tell is texture, not inflammation: buildup feels like a coating that comes back a day or two after washing, and the scalp is tight rather than sore. That is a cleansing and hydration problem, and it responds to being treated as skin. Kiki has 7+ years of experience and is licensed by the California Board of Barbering & Cosmetology, and every treatment here is performed by one practitioner.",
    },
    uniqueness: {
      heading: 'What a La Jolla scalp carries that an inland scalp does not',
      body:
        "La Jolla is one of four coastal catchments this treatment serves, and each carries a different load. La Jolla's is the salt of open water used year-round, with the Cove and Shores producing a daily rinse that never quite clears the follicle:",
      bullets: [
        'Open-water salt that accumulates all year — the Cove has hosted a group swim since 1916, and the lineup meets through the winter',
        'Hard water underneath it — San Diego tap water runs about 16 grains per gallon, so minerals layer on top of the salt',
        'Direct UV on the part line — the blufftop above the Cove has no tree cover and takes full afternoon sun',
        'Divers and swimmers at Shores — water that stays in the hair for hours after leaving the beach',
        'One practitioner throughout — the same person reads the scalp and performs every session in the series',
      ],
    },
    depth: {
      heading: 'What a scalp treatment does in the room',
      body:
        "A Keravive treatment takes twenty to twenty-five minutes and has no downtime, which is why it fits around a swim schedule rather than displacing one. The scalp is cleansed, exfoliated and extracted section by section, a peptide complex is applied to nourish the sebaceous glands and support the environment hair grows in, and a take-home peptide spray goes home with the client for the weeks in between. One session deeply cleanses and hydrates; a series gives scalp work its best chance, because the mineral load in this county returns within weeks.",
      process: [
        {
          step: 'Cleanse',
          description:
            "The scalp is worked section by section — partings opened, hairline and part line included — so the cleansing and exfoliation reach the follicle openings where the salt and mineral film has formed. Keravive lifts that residue from the scalp skin rather than from the hair shaft, which is the difference between a treatment that lasts a week and one that resets the surface.",
        },
        {
          step: 'Nourish',
          description:
            "A concentrated peptide complex is applied to the scalp to nourish the sebaceous glands and support a healthier environment for hair growth. The areas that receive the most attention are the ones taking the most exposure — the part line, the hairline and the crown — because that is where the salt settles and the UV lands.",
        },
        {
          step: 'Continue at home',
          description:
            "Every treatment ends with a take-home peptide spray to use nightly between sessions. In a city where the water puts the minerals back within weeks, this is the step that holds the interval together. Most La Jolla clients apply it to a dry scalp at night rather than straight after a swim, because salt water dilutes it.",
        },
      ],
    },
    intent: {
      heading: 'Who books scalp therapy in La Jolla',
      body:
        "The clients who book from La Jolla arrive with different complaints. The swimmers and surfers come because the hair feels dry and heavy at once and the product has stopped working, which is how a coated scalp feels from the inside. The others come because the flakes keep returning and no shampoo has fixed it, or because the part line has been tight and itchy since the sun came back. A third group never swims but lives or works near the water and sits inside the same salt air year round. What they share is that the problem is cyclical and not fungal, which is why a clearing and hydrating treatment works where a medicated shampoo has not.",
    },
    faqs: [
      {
        question: 'Can I swim at the Cove the same day as a scalp treatment?',
        answer:
          "Yes. A scalp treatment has no downtime — nothing peels, nothing flushes and nothing needs to settle, so a morning swim and a later appointment both work. The one consideration is the peptide work: give the serum a few hours to absorb before salt water rinses it away. The ideal spacing is a swim, a treatment, and the next swim the following day rather than a swim straight out of the chair. The treatment does not put the residue back.",
      },
      {
        question: 'Is the drive from La Jolla to Mission Hills worth it for scalp work?',
        answer:
          "About twelve miles, roughly twenty minutes south on I-5 from La Jolla Village Drive, with free parking at the studio, so the round trip costs less than an hour. That is short enough to make a monthly appointment practical and long enough to be worth doing properly rather than in ten-minute increments elsewhere. The reason to travel is the treatment — a clinical extraction at the follicle, a peptide complex applied to the scalp skin, and a take-home serum to hold it.",
      },
      {
        question: 'Why does my scalp keep flaking even when I use anti-dandruff shampoo?',
        answer:
          "Because the two problems look the same from the outside and are not the same underneath. Anti-dandruff shampoo controls yeast. What builds up on San Diego scalps is mineral — calcium and magnesium from water running about 16 grains per gallon, reacting with shampoo surfactants to leave an insoluble film at the follicle opening. Stripping a dry scalp makes it drier, and the flaking returns within a fortnight. The tell is texture: buildup feels like a coating that reappears a day or two after washing, with a scalp tight rather than inflamed.",
      },
      {
        question: 'What does scalp therapy actually change for a La Jolla swimmer?',
        answer:
          "It removes what shampoo cannot reach. Keravive cleanses, exfoliates and extracts the scalp rather than the hair, so the salt film, the mineral deposit and the oxidised sebum come out of the follicle opening rather than down the hair shaft. A peptide complex follows, applied to the scalp to nourish the sebaceous glands and support the environment hair grows in. Hair under a coating feels dry and heavy at once; once the coating is gone, the product already in the bathroom starts working again. A take-home spray extends the effect between sessions.",
      },
      {
        question: 'How many scalp treatments does it take in La Jolla?',
        answer:
          "A single session deeply cleanses and hydrates the scalp, and the difference is noticeable the same day. A series of three, spaced about a month apart, is the plan that gives the best chance of longer-term scalp health, because the mineral load in this county rebuilds within weeks of every shower. The series is $1,499 rather than three separate sessions at $599. Most La Jolla clients book the first treatment after a consultation and schedule the remaining two before leaving, which is what makes the interval workable around a swim schedule.",
      },
    ],
    body: `<h2 class="t-h3 mt-12 mb-6">What a year of open-water swimming does to a scalp</h2>
<p>
  The Cove has hosted a group swim since 1916, and the group meets through the winter. Windansea has a year-round surf community, La Jolla Shores draws swimmers and divers, and Scripps Institution of Oceanography sits at the base of the bluffs near the water. The exposure is the ordinary condition of the neighbourhood rather than a seasonal event, and that is what makes it a scalp problem worth treating rather than a bad week.
</p>
<p>
  Salt water leaves the hair but not the scalp. As the water dries it crystallises at the follicle opening, and the daily rinse that carries it away does not carry away what it leaves behind. Underneath that, San Diego tap water carries calcium and magnesium at about 16 grains per gallon, which reacts with the surfactants in shampoo to form an insoluble film — the same residue that leaves spots on clean glassware. The two layers build together, at the follicle, over weeks.
</p>
<p>
  A scalp in that state does not behave like a dry scalp. It feels coated. It flakes and it itches, and the flaking comes back within days of a wash because the film was never removed. Anti-dandruff shampoo controls yeast rather than dissolving minerals, so it addresses the wrong thing — and stripping a dry scalp makes it drier. The <a href="/journal/san-diego-hard-water-and-your-scalp/">journal guide to hard water and the scalp</a> sets out that mechanism in full.
</p>`,
  },
  'scalp-therapy:encinitas': {
    service: 'scalp-therapy',
    area: 'encinitas',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Scalp Therapy in Encinitas | KIAMO Skin',
    description:
      "Keravive scalp therapy for Encinitas clears salt and sunscreen residue at the follicle. Tap water runs 16 grains per gallon. $599. Request an appointment.",
    h1: 'Scalp Therapy in Encinitas — Salt and Sunscreen, Treated at the Follicle',
    opener:
      "For surfers and swimmers: a clinical scalp treatment that clears salt and zinc-oxide sunscreen residue from the follicle, not another bottle of medicated shampoo. Performed by Kiki, a California licensed esthetician.",
    intro:
      "Encinitas surfs in every month of the year. Swami's is the most consistently surfed break on this stretch of coast — a long right point that holds in most swells, with a lineup on almost any day the ocean is moving — and Cardiff Reef and Moonlight sit at either end. What a year of that does to a scalp is specific: salt water at the roots, zinc-oxide sunscreen that rinses out of the lengths of the hair but not out of the scalp, and wind off the bluff drying the skin underneath. San Diego tap water adds about 16 grains per gallon of calcium and magnesium on top of the salt. KIAMO Skin is in Mission Hills at 3067 Reynard Way — about twenty-five miles and thirty minutes south on I-5, with free parking on site.",
    quickAnswer:
      "Keravive scalp therapy at KIAMO Skin treats the salt, sunscreen residue and hard water minerals that build up at the follicle on Encinitas scalps, and applies a peptide complex to support the environment hair grows in. The studio is at 3067 Reynard Way in Mission Hills, about twenty-five miles and thirty minutes south of downtown Encinitas on I-5, with free parking on site. A treatment is $599, or $1,499 for a series of three.",
    authority: {
      heading: 'Why surfers end up needing scalp work at all',
      body:
        "The scalp is the part of a surfer that the ocean works on longest. Water sits in the hair, salt crystallises as it dries, and the sun reaches the part line and the crown with nothing over them — a surfboard does not shade a head. Sunscreen compounds it: it goes on the face and the ears and rinses out of the lengths of the hair while leaving zinc oxide behind at the roots. Shampoo cannot fix that, because shampoo is designed for the hair shaft. Hard water makes it worse — San Diego runs about 16 grains per gallon, so every rinse at home puts calcium and magnesium back onto what was just cleared. That is the cycle Keravive is built for: cleanse, extract at the follicle, nourish the scalp with a peptide complex, and support it at home. Kiki has 7+ years and is licensed by the California Board of Barbering & Cosmetology.",
    },
    uniqueness: {
      heading: 'What the Encinitas scalp carries',
      body:
        "Encinitas is the most surf-intensive of the four coastal catchments this treatment serves. Its load is salt and sunscreen in equal measure, and it arrives on a schedule that does not follow the calendar:",
      bullets: [
        "A break that holds year-round — Swami's has a morning lineup on almost any day the ocean is moving",
        'Sunscreen left at the roots — zinc oxide is not water soluble, so it rinses out of the lengths and stays at the scalp',
        'Wind off the bluffs — it dries the scalp skin underneath the hair, where nobody thinks to apply anything',
        'Hard water on top of salt — San Diego tap water runs about 16 grains per gallon and rebuilds the mineral layer',
        "Two more breaks inside the catchment — Cardiff Reef and Moonlight add exposure the drive does not explain",
        'A treatment that fits after a session — no downtime, so it is booked for after the water rather than instead of it',
      ],
    },
    depth: {
      heading: 'What a scalp treatment does in the room',
      body:
        "A Keravive treatment takes twenty to twenty-five minutes, and the whole appointment is a scalp treatment. The scalp is cleansed, exfoliated and extracted section by section, the peptide complex goes on to nourish the sebaceous glands, and the take-home spray leaves with you for the weeks between. For a surf-intense client that last part matters more than usual, because the water is still putting minerals back after every session in the ocean.",
      process: [
        {
          step: 'Cleanse',
          description:
            "Keravive cleanses, exfoliates and extracts the scalp section by section, working the partings open so the treatment reaches the follicle openings rather than the lengths of the hair. For Encinitas clients this is where the salt film and the sunscreen residue come out — the zinc that has been sitting at the roots since the last beach day, and the mineral layer the shower put back.",
        },
        {
          step: 'Nourish',
          description:
            "A concentrated peptide complex is applied to the scalp to nourish the sebaceous glands and support a healthier environment for hair growth. On a scalp that has been rinsed with salt water several times a week and dried by wind off the bluff, that hydration is doing more work than it would on a scalp that has been indoors.",
        },
        {
          step: 'Continue at home',
          description:
            "Each treatment includes a take-home peptide spray for nightly use between sessions, and the salt water is the reason it matters. Applied to a dry scalp at night rather than straight after a session in the ocean, it keeps the barrier supported while the minerals rebuild between appointments. Most Encinitas clients book mid-morning after the morning lineup or late in the afternoon, so the treatment follows the surf rather than replacing it.",
        },
      ],
    },
    intent: {
      heading: 'Who books scalp therapy in Encinitas',
      body:
        "Most Encinitas clients are surfers, swimmers and paddleboarders, and the complaint is nearly always the same: the hair feels dry and heavy at once and nothing put into it does anything. That combination is a coating rather than a dryness problem, and it is why the treatment that helps is a clearing one. Others come for flakes that return a few days after every wash, or for an itchy, tight scalp along the part line that has been irritated by sun and salt since spring. Some are not in the water daily but live close enough to the coast for the salt air to be constant, and the inland catchment around Olivenhain brings the same hard water without the salt. What they share is a cyclical problem no shampoo has interrupted.",
    },
    faqs: [
      {
        question: 'Can I surf the same day after a scalp treatment in Encinitas?',
        answer:
          "Yes, and most Encinitas clients do. A scalp treatment has no downtime — nothing peels, nothing flushes and there is no recovery window. The only reason to wait is the peptide work, because the serum needs time to absorb before salt water rinses it away. Book it after the session rather than before. The residue the treatment removed is not re-applied by the treatment, so a surf later the same day costs very little. The salt water goes back on, and that is what the home spray and the next appointment are for.",
      },
      {
        question: "How far is the studio from Swami's and Moonlight Beach?",
        answer:
          "About twenty-five miles, roughly thirty minutes south on I-5 from downtown Encinitas, with free parking on site at 3067 Reynard Way in Mission Hills. From Leucadia it is two miles and three minutes farther. The coastal stretch of I-5 has few exits and moves quickly outside the commute, so the practical windows are mid-morning after the morning lineup or mid-afternoon. From Cardiff, Birmingham Drive and Manchester Avenue lead to the same freeway. Half an hour each way is not what decides it.",
      },
      {
        question: 'Does scalp therapy clear the white residue surfers get along the hairline?',
        answer:
          "That crusty white line along the hairline and the part is three things at once: salt crystals from dried ocean water, calcium and magnesium deposits from San Diego water at 16 grains per gallon, and dried sebum oxidising along the part. Shampoo cannot remove it: the minerals bind to the hair shaft and the follicle opening at a level surfactants do not reach. Keravive uses vacuum-based extraction to pull it from the follicle level, not the surface, and the white that comes away in a first session is the coating that was never removed.",
      },
      {
        question: 'Will scalp therapy help with shedding?',
        answer:
          "Where shedding comes with visible buildup, irritation or a tight, flaky scalp, clearing the scalp is the treatment, because the environment around the follicle is what can actually be changed. Keravive removes the congestion and the mineral film, and the peptide complex is applied to nourish the sebaceous glands and support the environment hair grows in. That is the limit of what an esthetician can honestly say. Shedding has many causes, some medical, and anything outside esthetician scope is referred on rather than treated here. A coated scalp cannot be assessed properly.",
      },
      {
        question: 'How much does a scalp series cost for Encinitas surfers?',
        answer:
          "A treatment is $599. A series of three is $1,499, the number most Encinitas clients work with, because the mineral load rebuilds within weeks of every shower and one session clears rather than corrects. Sessions are spaced about a month apart, and the take-home peptide spray is included at each one so the interval does the work between appointments. If you are new, the first visit is $249 and covers the consultation and a treatment. Booking is a request, not a confirmed slot.",
      },
    ],
    body: `<h2 class="t-h3 mt-12 mb-6">Where the residue actually sits</h2>
<p>
  Salt collects at the follicle opening, and it does so faster in Encinitas than almost anywhere else in the county, because the water sits in the hair while the client is in it and the sun works on the scalp while they are out. A surf at Swami's is an hour of salt water in the hair with the part line in direct sun. Cardiff Reef and Moonlight add the same a few miles apart.
</p>
<p>
  Sunscreen compounds it. Zinc oxide is not water soluble. It rinses out of the lengths of the hair — which is why the hair feels clean and the scalp does not — and it stays at the roots, where it mixes with sebum and salt and forms a layer along the part line and the hairline. The white crust surfers find along the hairline is that mixture with the minerals from the water built into it.
</p>
<p>
  That is the state Keravive is built for: extract at the follicle rather than washing the hair, nourish the scalp skin, and give the client something to use at home between appointments so the minerals do not simply rebuild. The mechanics are set out in the <a href="/journal/san-diego-hard-water-and-your-scalp/">journal guide to hard water and the scalp</a>.
</p>`,
  },
  'scalp-therapy:carlsbad': {
    service: 'scalp-therapy',
    area: 'carlsbad',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Scalp Therapy in Carlsbad | KIAMO Skin',
    description:
      "Keravive scalp therapy for Carlsbad clears hard water buildup from the follicle. Tap water runs 16 grains per gallon. $599. Request an appointment.",
    h1: 'Scalp Therapy in Carlsbad — A Series Scheduled as One Block',
    opener:
      "A three-session scalp series for a catchment spread across Carlsbad Village, La Costa and Bressi Ranch, with all three appointments in the calendar before the first one ends. Performed by Kiki, a California licensed esthetician.",
    intro:
      "Two different things reach a Carlsbad scalp. The first is the water: every tap in the county runs hard, at around 16 grains per gallon, and the mineral film that leaves behind is the same whether the client lives at Carlsbad Village or forty minutes inland in Bressi Ranch. The second is the sun. Carlsbad is a community that spends its weekends outside — the flower fields in spring, Legoland through the summer, the sand at Tamarack and Carlsbad State Beach — and the inland neighbourhoods of Calavera Hills and La Costa get more clear-sky hours than the coast. Less salt in the hair than Encinitas, more ultraviolet on the part line. KIAMO Skin is in Mission Hills at 3067 Reynard Way — about thirty-five miles and thirty-five to forty minutes south on I-5, or nearer thirty minutes from La Costa and Aviara.",
    quickAnswer:
      "Keravive scalp therapy at KIAMO Skin clears hard water mineral buildup, oxidised sebum and product residue from the follicle, then applies a peptide complex to support the environment hair grows in — a series of three spaced about a month apart. The studio is at 3067 Reynard Way in Mission Hills, about thirty-five miles and thirty-five to forty minutes south of Carlsbad Village on I-5, with free parking on site. A treatment is $599, or $1,499 for the series.",
    authority: {
      heading: 'Why a Carlsbad plan is built around the drive',
      body:
        "Thirty-five miles does not decide the treatment — that is the same wherever the client drives from — but it does decide the plan. Keravive is a series of three, spaced about a month apart, and each session is short. A client making that drive twice in three months will finish a course if the appointments are scheduled together at the first visit rather than taken one at a time. The studio books all three into the calendar before the client leaves, the practical difference between completing a series and abandoning it at the second appointment. On the treatment itself, Kiki has 7+ years and is licensed by the California Board of Barbering & Cosmetology, works across the full range of skin types, and treats the scalp as skin rather than washing the hair.",
    },
    uniqueness: {
      heading: 'What a Carlsbad scalp carries',
      body:
        "Carlsbad is the inland-and-family catchment of the four, and its scalp profile differs from the surf towns to the south. The mineral load is identical; the exposure is not:",
      bullets: [
        'County-wide hard water — the same 16 grains per gallon applies in Carlsbad Village, Bressi Ranch and Calavera Hills alike',
        'More sun, less salt — families here spend weekends outdoors without the daily rinse a surf session brings',
        'An open part line — a scalp exposed at the flower fields or on the ballfield takes ultraviolet the way a forehead does',
        'A catchment, not a coastline — clients travel in from La Costa, Aviara, Bressi Ranch and Calavera Hills, so the series has to be scheduled rather than squeezed in',
        'The COASTER as an option — Carlsbad Village to Santa Fe Depot is fifty-two minutes, then a short rideshare',
      ],
    },
    depth: {
      heading: 'What a scalp treatment does in the room',
      body:
        "The appointment is twenty to twenty-five minutes of scalp work with no downtime, which makes it easy to place a series around a family and a work schedule rather than in place of one. The scalp is cleansed, exfoliated and extracted section by section, the peptide complex is applied to nourish the sebaceous glands, and a take-home spray goes home with the client. Most Carlsbad clients add a facial to the same visit, because a scalp treatment and a facial do not interfere with each other the way a resurfacing treatment would.",
      process: [
        {
          step: 'Assessment and the series plan',
          description:
            "The first visit is where the series is set. Kiki looks at the scalp — the flaking pattern, the part line, how the hair feels at the root — sets the interval and the plan, then books all three sessions before the client leaves, so the thirty-five mile drive is planned around rather than negotiated three times. For a new client the first visit is $249, covering the consultation and a treatment.",
        },
        {
          step: 'Cleanse, exfoliate and extract',
          description:
            "Keravive works the scalp section by section with the partings opened, so the cleansing and exfoliation reach the follicle openings where the mineral film and the oxidised sebum have built up. Calibrated suction is used at the follicle level rather than scrubbing the surface, which is what makes it workable on a scalp that is already tight and flaking.",
        },
        {
          step: 'Nourish and continue at home',
          description:
            "A concentrated peptide complex is applied to the scalp to nourish the sebaceous glands and support a healthier environment for hair growth, and a take-home spray goes home for nightly use between sessions. Three treatments, spaced about a month apart, give scalp work its best chance — the mineral load in this county comes back with every shower, so the interval does as much work as the appointment.",
        },
      ],
    },
    intent: {
      heading: 'Who books scalp therapy in Carlsbad',
      body:
        "Two groups arrive from Carlsbad. The first is the outdoor family — parents and teenagers who spend the weekend at the beach, the flower fields or the ballfields, and who notice flakes and a tight scalp rather than a dramatic problem. The second is the clinical one: clients who have been dealing with a coating for years, whose hair feels dry and heavy at once and whose products have stopped working, and who have read that the answer is a clarifying wash but cannot make it work from home. A third is newer — clients who have had a facial and noticed that nobody had ever looked at the scalp. What they share is that the plan is a series, and the series needs to be in the calendar before the first appointment.",
    },
    faqs: [
      {
        question: 'How far is KIAMO Skin from Carlsbad Village?',
        answer:
          "About thirty-five miles, roughly thirty-five to forty minutes south on I-5 off-peak, with free parking on site at 3067 Reynard Way in Mission Hills. From La Costa and Aviara the drive is nearer thirty miles and thirty-five minutes. The spring flower fields back up Palomar Airport Road on weekends, and the southbound morning commute through Encinitas adds time, so early morning and midday are the easier windows. The distance is the reason the three sessions are booked together rather than one at a time.",
      },
      {
        question: 'Is the COASTER a practical alternative to driving from Carlsbad?',
        answer:
          "It is possible, and some regular clients use it: Carlsbad Village station to Santa Fe Depot is about fifty-two minutes, then a short rideshare from downtown to Mission Hills. Door to door that is closer to an hour and a quarter, roughly double the driving time, and the train runs weekdays with limited weekend service, so it does not suit a three-session series spread across three months. The realistic use is a single appointment on a day the drive would be bad. For a series, the car is usually the better tool.",
      },
      {
        question: 'Does scalp therapy do anything if I do not surf or swim every day?',
        answer:
          "It does, and the reason is the water rather than the ocean. Carlsbad tap water is the same hard supply as everywhere in the county, at about sixteen grains per gallon, and it leaves a mineral film at the follicle that shampoo does not dissolve. The tell is flaking that returns a day or two after washing, with a scalp that feels tight rather than inflamed. Add the sun — the flower fields, the sand at Tamarack — and the part line takes exposure with nothing over it. Less salt, more ultraviolet, same minerals underneath.",
      },
      {
        question: 'How much does a scalp series cost in Carlsbad?',
        answer:
          "A treatment is $599. The series of three is $1,499, and it is the number most Carlsbad clients choose, because one session clears the scalp and does not rebuild it. The sessions are spaced about a month apart and each one includes a take-home peptide spray for nightly use in between. A first visit for a new client is $249 and covers the consultation and a treatment. Every price is set before the appointment rather than quoted at the door.",
      },
      {
        question: 'Can I have a scalp treatment and a facial in the same visit?',
        answer:
          "Yes. A scalp treatment and a HydraFacial, which is $259, can be done in the same appointment, and for a client driving thirty-five miles that is often the difference between one trip and two. What cannot be combined on the same day is anything that needs healing first, such as Procell microchanneling, because that creates micro-injuries that require several days before the skin is worked again. What can be combined, and in what order, is decided at the consultation rather than at the door.",
      },
    ],
    body: `<h2 class="t-h3 mt-12 mb-6">The part of the problem that is not the ocean</h2>
<p>
  Carlsbad is the catchment where the water does more of the work than the sea does. The mineral load is county-wide — about 16 grains per gallon from Carlsbad Village to Bressi Ranch — and it is the layer anti-dandruff shampoo cannot touch. What Carlsbad adds is sun rather than salt: the flower fields in spring, the beach at Tamarack and Carlsbad State Beach through the summer, the ballfields and trails inland from La Costa and Calavera Hills, and the clear-sky afternoons past the marine layer.
</p>
<p>
  The part line is the part nobody covers. It takes the same light as the forehead and none of the attention, and it is where an untreated scalp tends to be tight, flaky and reactive first.
</p>
<p>
  None of that is complicated to treat. It needs a plan with three sessions in it and the dates in the calendar before the first appointment ends — which is how a thirty-five mile drive stays workable. The <a href="/journal/san-diego-hard-water-and-your-scalp/">journal guide to hard water and the scalp</a> covers the mineral layer in detail.
</p>`,
  },
  'scalp-therapy:pacific-beach': {
    service: 'scalp-therapy',
    area: 'pacific-beach',
    datePublished: '2026-11-21',
    dateModified: '2026-11-21',
    title: 'Scalp Therapy in Pacific Beach | KIAMO Skin',
    description:
      "Keravive scalp therapy for Pacific Beach clears salt, sunscreen and hard water buildup from the follicle. $599. Request an appointment.",
    h1: 'Scalp Therapy in Pacific Beach — Sunscreen, Salt and the Part Line',
    opener:
      "A clinical scalp treatment for a neighbourhood that wears sunscreen to the roots and swims before the marine layer burns off. Performed by Kiki, a California licensed esthetician.",
    intro:
      "Pacific Beach has a specific kind of scalp day. The boardwalk runs three miles from Law Street to Mission Bay, Crystal Pier anchors the ocean end, and the neighbourhood is outdoors regardless of season — Tourmaline Surf Park at the north end, Sail Bay for paddleboards and kayaks, Crown Point on a dry afternoon. Then there is the sunscreen: zinc oxide goes on the face and the ears and into the roots, and it does not rinse out of the scalp. And the marine layer: the mornings in May and June look overcast, the cloud does not stop UVA, and the part line takes the same exposure as the cheeks. KIAMO Skin is in Mission Hills at 3067 Reynard Way — seven miles and fifteen minutes east, with free parking on site.",
    quickAnswer:
      "Keravive scalp therapy at KIAMO Skin clears zinc-oxide sunscreen, salt and hard water minerals from the follicle on Pacific Beach scalps, then applies a peptide complex to support the environment hair grows in. The studio is at 3067 Reynard Way in Mission Hills, about seven miles and fifteen minutes east of Crystal Pier via Garnet Avenue and I-5, with free parking on site. A treatment is $599, or $1,499 for a series of three.",
    authority: {
      heading: 'Why a Pacific Beach scalp needs more than a clarifying shampoo',
      body:
        "Two things happen on a Pacific Beach scalp that a shampoo cannot fix. The first is sunscreen. Mineral SPF is not water soluble, and it rinses out of the lengths of the hair while staying at the roots, where it mixes with sebum and salt and sets into a layer along the part line. The second is the marine layer. Through May Gray and June Gloom the sky reads as overcast and the assumption is that nothing is getting through, but UVA passes through thin cloud with very little loss, and the part line — the one part of the head nobody thinks to cover — is exposed every morning of it. Hard water is the third layer under both: about sixteen grains per gallon, so the minerals rebuild at the follicle with every shower. Kiki has 7+ years and is licensed by the California Board of Barbering & Cosmetology, and works across the full range of skin types.",
    },
    uniqueness: {
      heading: 'What the Pacific Beach scalp carries',
      body:
        "This is the densest and the youngest of the four coastal catchments, and the exposure is daily rather than seasonal. What reaches the scalp here is a combination, not a single cause:",
      bullets: [
        'Sunscreen left at the roots — zinc oxide is not water soluble, so it rinses out of the lengths and remains at the scalp',
        'UVA through the marine layer — a gray morning in May and June is not an absence of ultraviolet exposure',
        'An uncovered part line — the one part of the head that is exposed without anyone thinking to protect it',
        'Salt from three kinds of water — Tourmaline, Sail Bay and the bay itself, all a short walk from the boardwalk',
        'Fifteen minutes rather than thirty — the drive is short enough that monthly maintenance is genuinely easy to keep',
      ],
    },
    depth: {
      heading: 'What a scalp treatment does in the room',
      body:
        "A Keravive treatment takes twenty to twenty-five minutes and has no downtime, which matters in a neighbourhood where the beach is part of the day rather than an event. The scalp is cleansed, exfoliated and extracted section by section, a peptide complex is applied to nourish the sebaceous glands and support the environment hair grows in, and a take-home spray leaves with the client. Most Pacific Beach clients pair it with a facial on the same visit, because a scalp treatment and a facial do not interfere with each other.",
      process: [
        {
          step: 'Assessment',
          description:
            "The first visit reads the scalp and the plan together. Kiki looks at the part line, the hairline and the roots, asks how much time goes into the water and how the sun exposure runs through the week, and decides whether one treatment or a series of three is the honest answer. For a new client the first visit is $249, covering the consultation and a treatment.",
        },
        {
          step: 'Cleanse, exfoliate and extract',
          description:
            "Keravive works the scalp section by section with the partings opened, so the cleansing and exfoliation reach the follicle openings where the sunscreen residue, the salt and the mineral film have built up. Calibrated suction works at the follicle level rather than scrubbing the surface, which makes it tolerable on a scalp that is already tight and flaking. The section with the most to gain is usually the part line and the hairline.",
        },
        {
          step: 'Nourish and continue at home',
          description:
            "A concentrated peptide complex is applied to the scalp to nourish the sebaceous glands and support a healthier environment for hair growth, and a take-home peptide spray is included for nightly use between sessions. A series of three, spaced about a month apart, gives scalp work its best chance; the minerals come back with every shower, and the spray is what holds the interval.",
        },
      ],
    },
    intent: {
      heading: 'Who books scalp therapy in Pacific Beach',
      body:
        "The Pacific Beach book is largely a young one, and the complaint is usually the same: flakes that come back two days after a wash, an itchy part line, and product that has stopped working. Some of that is sunscreen and salt from the water, and some of it is the marine layer doing its quiet work through the spring. A second group comes for shedding that has appeared alongside visible buildup and irritation. A third is the visitor who has had a facial and realised that nobody had ever looked at the scalp. The studio being fifteen minutes away is the reason this can be a standing monthly appointment here rather than an occasional effort.",
    },
    faqs: [
      {
        question: 'Why does my scalp get flaky when the Pacific Beach sky is gray?',
        answer:
          "Because the gray is not the absence of ultraviolet exposure. Through May Gray and June Gloom the marine layer sits over the coast, and UVA passes through thin cloud with very little loss — the wavelength that drives pigment and collagen breakdown. The scalp is the part people forget: nobody covers the part line, so it takes the same morning light as the cheeks and none of the protection. Add the salt and sunscreen, and the flaking returns within days of washing, with a scalp tight rather than sore.",
      },
      {
        question: 'Can I go to the beach after a scalp treatment in Pacific Beach?',
        answer:
          "Yes, and at fifteen minutes there is no practical reason not to. A scalp treatment has no downtime — nothing peels, nothing flushes, no recovery window to schedule around. The one thing worth doing is giving the peptide serum a few hours to absorb before salt water rinses it away, so a midday treatment and an afternoon swim work better than one straight out of the water. The removal is what the treatment did; the salt water goes back on, and that is what the home spray and the next appointment are for.",
      },
      {
        question: 'How far is KIAMO Skin from Crystal Pier and the boardwalk?',
        answer:
          "About seven miles and fifteen minutes east off-peak. From Crystal Pier at the west end of Garnet Avenue it is straight east on Garnet, over I-5, then south to the Washington Street exit, and Reynard Way is the first right after the overpass. From Crown Point and Sail Bay, add about five minutes to reach Garnet first. Beach traffic backs up Garnet and Ingraham west of the freeway through the afternoon in late May and summer, so an early morning or an evening appointment avoids it. Parking at the studio is free.",
      },
      {
        question: 'Will scalp therapy clear zinc-oxide sunscreen from the roots?',
        answer:
          "Yes, because Keravive works on the scalp, not the hair. Mineral sunscreen is not water soluble, so it rinses out of the lengths while staying at the roots, where it mixes with sebum and salt and sets along the part line. Calibrated vacuum extraction at the follicle level lifts it, and the cleansing step reaches it because the partings are worked section by section. Scrubbing the hair does not do it, nor does medicated shampoo. The scalp also gets the peptide complex afterwards, which supports the skin rather than only removing the layer.",
      },
      {
        question: 'How often should I come in from Pacific Beach?',
        answer:
          "A single treatment is $599, and it clears the scalp on the day. The series of three, spaced about a month apart, is $1,499 and is the plan that gives scalp work its best chance, because hard water puts the mineral layer back within weeks of every shower. At fifteen minutes, a monthly appointment is easy to keep, and many Pacific Beach clients continue at that interval after the series rather than stopping. If you are new, the first visit is $249 for the consultation and a treatment. Booking is a request.",
      },
    ],
    body: `<h2 class="t-h3 mt-12 mb-6">Sunscreen, salt, and the part line nobody covers</h2>
<p>
  A Pacific Beach scalp day is not one exposure, it is three stacked. Mineral sunscreen goes on the face and the ears and into the roots, and because zinc oxide is not water soluble it stays there while the salt dries around it. The surf and paddleboard sessions at Tourmaline and Sail Bay add the salt itself. And the marine layer, sitting over the coast through May and June, filters almost nothing: UVA passes through thin cloud with very little loss, so the part line takes a full morning of exposure on a morning that looks like nothing.
</p>
<p>
  The result is a scalp that flakes within a couple of days of washing, feels tight rather than inflamed, and holds product that has stopped doing anything. Hair that is dry and heavy at the same time is the signature of a coating rather than of dryness.
</p>
<p>
  The residue is mineral rather than fungal, and it does not respond to a treatment aimed at the other. The <a href="/journal/san-diego-hard-water-and-your-scalp/">journal guide to hard water and the scalp</a> sets out the difference between mineral buildup and dandruff, and why anti-dandruff shampoo keeps failing on it.
</p>`,
  },
};
