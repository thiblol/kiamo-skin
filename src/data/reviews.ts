/**
 * Every review published on the KIAMO Skin Google Business Profile.
 *
 * Source of truth: the studio's own Google Business Profile, read through the
 * Business Profile API by scripts/fetch-gbp-reviews.mjs. The reviews are
 * published here exactly as Google holds them — same wording, same reviewer
 * names, same dates. Nothing is edited, shortened, paraphrased or selected
 * for tone, so a reader who opens the listing sees the same thing.
 *
 * Regenerate with:
 *   node scripts/fetch-gbp-reviews.mjs
 *   node scripts/build-reviews-data.mjs
 *
 * Why no schema marks these up: Google's Review snippet guidance treats
 * reviews a business republishes on its own site as self-serving reviews,
 * and the site's own guard suite forbids an `aggregateRating` node outright.
 * The page therefore shows the reviews as attributed HTML and links out to
 * Google, which is the honest arrangement.
 *
 * The quotation marks around a review are the author's own. They are not the
 * studio's voice, and the studio's own copy on the same page is written
 * without gendered pronouns — see the comment in test/test-utils.js about
 * quoted regions being exempt from the copy guards.
 *
 * The count in src/data/review-stats.ts is the studio-verified total and is
 * checked against this file's length when the guard suite runs.
 */
export interface GoogleReview {
  /** Google's own review id — stable, and the basis for the local photo filenames. */
  id: string;
  author: string;
  /** Local copy of the reviewer's Google profile photo. */
  avatar: string;
  rating: number;
  /** The review verbatim, including line breaks. */
  text: string;
  /** The same text split on blank lines, for one <p> per paragraph. */
  paragraphs: string[];
  /** ISO date the review was posted. */
  date: string;
  /** "October 2026" */
  dateLabel: string;
  /** Photos the reviewer attached to the review, stored locally. */
  photos: string[];
}

export const googleReviews: GoogleReview[] = [
  {
    "id": "AbFvOqmqY2-aNVU-WzvHgofx0Am2PNRGWgcDe0oT2Xb-_xVOmSnCpEv1PycQXXFVkPRVl9oAQViD4g",
    "author": "Sarah Lancry",
    "avatar": "/images/reviews/AbFvOqmqY2-aNVU-WzvHgofx0Am2PNRGWgcDe0oT2Xb-_xVOmSnCpEv1PycQXXFVkPRVl9oAQViD4g.jpg",
    "rating": 5,
    "text": "Oh my goodness Kiki is AMAZING. I reached out to her with a bunch of different concerns, not really having time or the finances to come in and do an entire appointment and treatment plan. She was super easy to work with, kind, and knowledgeable. I basically sent her pictures of what my skin has looked like in the past, but it looked like currently, and every single product I was using which she recommended. She knew about the ingredients in each products and predicted how they would interact with my skin based off of her analysis of pictures from before. Anyways, I took some things out, and added some recommendation she suggested based off of how much I was able to spend. The result about two weeks later is so different! She explained that I was stripping my skin, natural barrier and the pursuit of getting rid of oiliness and blemishes, which only ended up making them worse. She told me exactly what to do, and when I had questions, I just asked. I’m super happy now!",
    "paragraphs": [
      "Oh my goodness Kiki is AMAZING. I reached out to her with a bunch of different concerns, not really having time or the finances to come in and do an entire appointment and treatment plan. She was super easy to work with, kind, and knowledgeable. I basically sent her pictures of what my skin has looked like in the past, but it looked like currently, and every single product I was using which she recommended. She knew about the ingredients in each products and predicted how they would interact with my skin based off of her analysis of pictures from before. Anyways, I took some things out, and added some recommendation she suggested based off of how much I was able to spend. The result about two weeks later is so different! She explained that I was stripping my skin, natural barrier and the pursuit of getting rid of oiliness and blemishes, which only ended up making them worse. She told me exactly what to do, and when I had questions, I just asked. I’m super happy now!"
    ],
    "date": "2026-10-06",
    "dateLabel": "October 2026",
    "photos": []
  },
  {
    "id": "AbFvOql3tKm2bi1cSkHLWLXq0_AaOHdSKJrz1I4zBkwnVUlM-4YgVBXJGFVGbzkopgIlmpK8-3S8Vw",
    "author": "Esmeralda Routt",
    "avatar": "/images/reviews/AbFvOql3tKm2bi1cSkHLWLXq0_AaOHdSKJrz1I4zBkwnVUlM-4YgVBXJGFVGbzkopgIlmpK8-3S8Vw.jpg",
    "rating": 5,
    "text": "I love coming to get my facials with Kiki! I struggled with dry skin before coming to see her, her hydrating facials and skin care recommendations are 10/10! She’s such a pleasure to work with, can’t recommend her enough!",
    "paragraphs": [
      "I love coming to get my facials with Kiki! I struggled with dry skin before coming to see her, her hydrating facials and skin care recommendations are 10/10! She’s such a pleasure to work with, can’t recommend her enough!"
    ],
    "date": "2026-10-01",
    "dateLabel": "October 2026",
    "photos": []
  },
  {
    "id": "AbFvOqlH3XX4aScVrlfRx5GyYOEC6nu11N4Y3-Iq4v6SBUUYkigvbL5aGaldvlvsHn0SrKkHcGUILA",
    "author": "Nina Vindiola",
    "avatar": "/images/reviews/AbFvOqlH3XX4aScVrlfRx5GyYOEC6nu11N4Y3-Iq4v6SBUUYkigvbL5aGaldvlvsHn0SrKkHcGUILA.jpg",
    "rating": 5,
    "text": "Kiki is absolutely amazing. She has the magic touch that leaves your skin feeling rejuvenated. She is also super kind and funny, she has the most beautiful soul. Getting facials from Kiki has changed my skin and my life for the better 🩷",
    "paragraphs": [
      "Kiki is absolutely amazing. She has the magic touch that leaves your skin feeling rejuvenated. She is also super kind and funny, she has the most beautiful soul. Getting facials from Kiki has changed my skin and my life for the better 🩷"
    ],
    "date": "2026-09-27",
    "dateLabel": "September 2026",
    "photos": []
  },
  {
    "id": "AbFvOqnioB3d-MY7xJul4vdUJ_hW-wr5T6k3IUqym9GazJ8ht9LTpRp23Lf3NUyu5FakjDqGRB6S",
    "author": "Jay Titan",
    "avatar": "/images/reviews/AbFvOqnioB3d-MY7xJul4vdUJ_hW-wr5T6k3IUqym9GazJ8ht9LTpRp23Lf3NUyu5FakjDqGRB6S.jpg",
    "rating": 5,
    "text": "First time getting a facial and I can definitely say I see why people get them now 😂. My skin looked and felt way better immediately after. Kiki made the whole thing comfortable, explained everything she was doing, and you can tell she really knows what she’s doing. Great experience all around — definitely recommend KIAMO Skin 🙌🏽",
    "paragraphs": [
      "First time getting a facial and I can definitely say I see why people get them now 😂. My skin looked and felt way better immediately after. Kiki made the whole thing comfortable, explained everything she was doing, and you can tell she really knows what she’s doing. Great experience all around — definitely recommend KIAMO Skin 🙌🏽"
    ],
    "date": "2026-09-09",
    "dateLabel": "September 2026",
    "photos": [
      "/images/reviews/AbFvOqnioB3d-MY7xJul4vdUJ_hW-wr5T6k3IUqym9GazJ8ht9LTpRp23Lf3NUyu5FakjDqGRB6S-0.jpg"
    ]
  },
  {
    "id": "AbFvOqkr2kHSkmw4NLwmnwOXI3CI6DL2ZPOzo9Z8dFRcV8XHe1NVTkQPmICDxu1tKyGEsVg_7vt7gQ",
    "author": "Courtney Zour",
    "avatar": "/images/reviews/AbFvOqkr2kHSkmw4NLwmnwOXI3CI6DL2ZPOzo9Z8dFRcV8XHe1NVTkQPmICDxu1tKyGEsVg_7vt7gQ.jpg",
    "rating": 5,
    "text": "I had an amazing hydrafacial and such a lovely experience with Kiki. Her space is very soothing and she has the best vibes, in addition to being extremely knowledgeable about skin health. My skin looks and feels amazing the day after treatment.  I highly recommend her and will definitely be going back myself!",
    "paragraphs": [
      "I had an amazing hydrafacial and such a lovely experience with Kiki. Her space is very soothing and she has the best vibes, in addition to being extremely knowledgeable about skin health. My skin looks and feels amazing the day after treatment.  I highly recommend her and will definitely be going back myself!"
    ],
    "date": "2026-09-01",
    "dateLabel": "September 2026",
    "photos": []
  },
  {
    "id": "AbFvOqnZtkotZyLL2Klmf3EsSkTnuezxjW8r_6hlTtrWByEwXrEmAh0loiOOVKB67DljYp89piwW",
    "author": "Megan Versoza",
    "avatar": "/images/reviews/AbFvOqnZtkotZyLL2Klmf3EsSkTnuezxjW8r_6hlTtrWByEwXrEmAh0loiOOVKB67DljYp89piwW.jpg",
    "rating": 5,
    "text": "Kiki is the absolute best - so so knowledgeable and kind. My skin feels so much better after my facial as well.",
    "paragraphs": [
      "Kiki is the absolute best - so so knowledgeable and kind. My skin feels so much better after my facial as well."
    ],
    "date": "2026-08-27",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmUI3ALO2IOvVTFDUlC0uXvCGzp_MUIAef3YuoPWFlPA2xWCF4fLQIfr_FMl9-ZDB7H7W3X",
    "author": "Haley Gibert",
    "avatar": "/images/reviews/AbFvOqmUI3ALO2IOvVTFDUlC0uXvCGzp_MUIAef3YuoPWFlPA2xWCF4fLQIfr_FMl9-ZDB7H7W3X.jpg",
    "rating": 5,
    "text": "Kiki is the best!! I always leave feeling so refreshed. Her facials are the perfect blend of relaxing and effective. Highly recommend",
    "paragraphs": [
      "Kiki is the best!! I always leave feeling so refreshed. Her facials are the perfect blend of relaxing and effective. Highly recommend"
    ],
    "date": "2026-08-24",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqlwERCPdD8xbzUvy5e6CKgRmoKw-fs8CU5EAcTGPinQbZRFzGsHgjLd3pTy9N5RzIr079l3",
    "author": "Katie Moran",
    "avatar": "/images/reviews/AbFvOqlwERCPdD8xbzUvy5e6CKgRmoKw-fs8CU5EAcTGPinQbZRFzGsHgjLd3pTy9N5RzIr079l3.jpg",
    "rating": 5,
    "text": "I had such a great Hydrafacial with Kiki! Her space is so cute, welcoming, and thoughtfully curated, and you can tell she puts a lot of intention into every part of the experience.\n\nI also loved that she carries and incorporates some of my absolute favorite skincare lines, including Lira, Epicutis, and Colorescience. She customized everything to what my skin needed, and I left feeling hydrated, glowy, and refreshed without feeling overdone.\n\nKiki is knowledgeable, sweet, and makes the whole experience feel both elevated and comfortable. Definitely recommend if you’re looking for a personalized facial with great products in the cutest space!",
    "paragraphs": [
      "I had such a great Hydrafacial with Kiki! Her space is so cute, welcoming, and thoughtfully curated, and you can tell she puts a lot of intention into every part of the experience.",
      "I also loved that she carries and incorporates some of my absolute favorite skincare lines, including Lira, Epicutis, and Colorescience. She customized everything to what my skin needed, and I left feeling hydrated, glowy, and refreshed without feeling overdone.",
      "Kiki is knowledgeable, sweet, and makes the whole experience feel both elevated and comfortable. Definitely recommend if you’re looking for a personalized facial with great products in the cutest space!"
    ],
    "date": "2026-08-15",
    "dateLabel": "August 2026",
    "photos": [
      "/images/reviews/AbFvOqlwERCPdD8xbzUvy5e6CKgRmoKw-fs8CU5EAcTGPinQbZRFzGsHgjLd3pTy9N5RzIr079l3-0.jpg"
    ]
  },
  {
    "id": "AbFvOqlEB_3WrDcysnWeVmWEe4A_FcuxRdt1PpFAG96Z5XfGAu_pHja0o6_hLMCg_7ij-Tpas81lKQ",
    "author": "Mina Kamille",
    "avatar": "/images/reviews/AbFvOqlEB_3WrDcysnWeVmWEe4A_FcuxRdt1PpFAG96Z5XfGAu_pHja0o6_hLMCg_7ij-Tpas81lKQ.jpg",
    "rating": 5,
    "text": "I had such a great experience! From the moment I walked in, she was warm and welcoming. The space was spotless, relaxing, and made me feel comfortable right away.\n\nMy facial was amazing, and my esthetician took the time to make sure my skin’s needs were addressed. My skin looked noticeably brighter, smoother, and healthier afterward. You can tell they genuinely care about their clients and the quality of their work. I left feeling refreshed and confident, and I’ll definitely be coming back. Highly recommend!",
    "paragraphs": [
      "I had such a great experience! From the moment I walked in, she was warm and welcoming. The space was spotless, relaxing, and made me feel comfortable right away.",
      "My facial was amazing, and my esthetician took the time to make sure my skin’s needs were addressed. My skin looked noticeably brighter, smoother, and healthier afterward. You can tell they genuinely care about their clients and the quality of their work. I left feeling refreshed and confident, and I’ll definitely be coming back. Highly recommend!"
    ],
    "date": "2026-08-11",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqloOSYxOx308XfLYdkrUzTVkElsVKMVx2bpCmERmiG8ol3RCI204fitrvT2Qy-A6FXkZGBcVg",
    "author": "Arica Ladner",
    "avatar": "/images/reviews/AbFvOqloOSYxOx308XfLYdkrUzTVkElsVKMVx2bpCmERmiG8ol3RCI204fitrvT2Qy-A6FXkZGBcVg.jpg",
    "rating": 5,
    "text": "I’ve been going to her for 4–5 years now, and I honestly wouldn’t trust anyone else with my skin! I get a HydraFacial and dermaplaning every month, and my skin always feels so smooth, hydrated, and refreshed afterward. She’s incredibly knowledgeable, professional, and truly cares about her clients. I highly recommend her to anyone looking for an amazing esthetician! ✨🤍",
    "paragraphs": [
      "I’ve been going to her for 4–5 years now, and I honestly wouldn’t trust anyone else with my skin! I get a HydraFacial and dermaplaning every month, and my skin always feels so smooth, hydrated, and refreshed afterward. She’s incredibly knowledgeable, professional, and truly cares about her clients. I highly recommend her to anyone looking for an amazing esthetician! ✨🤍"
    ],
    "date": "2026-08-07",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqlL9b5-BTuf9gVz996RajW72XxoEb1fECifbQNu3MfV9V9ck4F3N-FayotkSnEnEgguJCSmeA",
    "author": "Nastasha De Luca",
    "avatar": "/images/reviews/AbFvOqlL9b5-BTuf9gVz996RajW72XxoEb1fECifbQNu3MfV9V9ck4F3N-FayotkSnEnEgguJCSmeA.jpg",
    "rating": 5,
    "text": "Kiki did an amazing job!! My skin felt so soft and her space was clean and so soothing. Such a great energy here will definitely refer my friends and also come back soon!!!🥰",
    "paragraphs": [
      "Kiki did an amazing job!! My skin felt so soft and her space was clean and so soothing. Such a great energy here will definitely refer my friends and also come back soon!!!🥰"
    ],
    "date": "2026-08-07",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqlPZKZK-N9sqcwqIFvEzxN1ApRo36DIIRTEoQO3Td-1DcHCnuK68S6m_ZLQ0SXjK0SPtB-hwQ",
    "author": "Natasha Solomon",
    "avatar": "/images/reviews/AbFvOqlPZKZK-N9sqcwqIFvEzxN1ApRo36DIIRTEoQO3Td-1DcHCnuK68S6m_ZLQ0SXjK0SPtB-hwQ.jpg",
    "rating": 5,
    "text": "I had the worst breakout of my life and Kiamo Skin brought my skin back to life! The care Kiki put into telling me about what’s going on and educating me on how to continue healing at home was monumental.\nThe vibe of the space is so serene, and worth every penny. I fell asleep during my service I was so relaxed haha",
    "paragraphs": [
      "I had the worst breakout of my life and Kiamo Skin brought my skin back to life! The care Kiki put into telling me about what’s going on and educating me on how to continue healing at home was monumental.\nThe vibe of the space is so serene, and worth every penny. I fell asleep during my service I was so relaxed haha"
    ],
    "date": "2026-08-07",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmDos64bid93U-HnR0kMv51fdWKooyibNGncJHH273eN0QnD6A5A0XMQM-ZUKVmuru1flH0HQ",
    "author": "simay emir",
    "avatar": "/images/reviews/AbFvOqmDos64bid93U-HnR0kMv51fdWKooyibNGncJHH273eN0QnD6A5A0XMQM-ZUKVmuru1flH0HQ.jpg",
    "rating": 5,
    "text": "I had such a great experience at Kiamo Skin! Kiki is absolutely amazing!! she’s so sweet, welcoming, and really makes you feel comfortable. You can tell she genuinely cares about her clients and what she does. Highly recommend her and Kiamo Skin! 🤍",
    "paragraphs": [
      "I had such a great experience at Kiamo Skin! Kiki is absolutely amazing!! she’s so sweet, welcoming, and really makes you feel comfortable. You can tell she genuinely cares about her clients and what she does. Highly recommend her and Kiamo Skin! 🤍"
    ],
    "date": "2026-08-07",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmtLrjwulBc_9Ltd6I3ZJRD5OcmE3X-xCppoKn4xW7kJYxy7KtBeTED5AN9emCuZIEndhE5cQ",
    "author": "Brittaney Gandy",
    "avatar": "/images/reviews/AbFvOqmtLrjwulBc_9Ltd6I3ZJRD5OcmE3X-xCppoKn4xW7kJYxy7KtBeTED5AN9emCuZIEndhE5cQ.jpg",
    "rating": 5,
    "text": "Incredible work every session. I use the products she recommended me to use at home to help maintain. Highly recommend her for dry skin folks.",
    "paragraphs": [
      "Incredible work every session. I use the products she recommended me to use at home to help maintain. Highly recommend her for dry skin folks."
    ],
    "date": "2026-08-05",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmJQU5ksMsXqmc_fc8R8KnP2A2ouH4uHYRbJjKQMXpgvTAwtvGHguI_p7goaieo0waluSuM5w",
    "author": "Andrew Seery",
    "avatar": "/images/reviews/AbFvOqmJQU5ksMsXqmc_fc8R8KnP2A2ouH4uHYRbJjKQMXpgvTAwtvGHguI_p7goaieo0waluSuM5w.jpg",
    "rating": 5,
    "text": "Had multiple hydro-facials. Loved them so kept coming back. Kind, warm atmosphere, very professional and friendly. Would recommend for anyone!",
    "paragraphs": [
      "Had multiple hydro-facials. Loved them so kept coming back. Kind, warm atmosphere, very professional and friendly. Would recommend for anyone!"
    ],
    "date": "2026-08-05",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqnny5XzYpixqbBeuQ4impLfTJ29pCgyG105JtSILi7COSxWgQRNDwaanlBX_YHVTNsBeOEjFQ",
    "author": "Oneil",
    "avatar": "/images/reviews/AbFvOqnny5XzYpixqbBeuQ4impLfTJ29pCgyG105JtSILi7COSxWgQRNDwaanlBX_YHVTNsBeOEjFQ.jpg",
    "rating": 5,
    "text": "Kiki is truly one of those people who makes you feel comfortable the second you meet them. She’s  warm, kind, and genuine and it feels like you’re catching up with a friend while getting pampered. You can tell she genuinely cares about her clients, not just the treatment being provided.\n\nI never felt rushed, and Kiki took the time to listen to my concerns, explain everything, and make sure I felt completely at ease. Her knowledge and attention to detail gave me so much confidence, and the results spoke for themselves. I left feeling refreshed, glowing, and honestly just happier than when I walked in. If you’re thinking about booking with Kiamo, do it. Your skin and your soul will thank you.",
    "paragraphs": [
      "Kiki is truly one of those people who makes you feel comfortable the second you meet them. She’s  warm, kind, and genuine and it feels like you’re catching up with a friend while getting pampered. You can tell she genuinely cares about her clients, not just the treatment being provided.",
      "I never felt rushed, and Kiki took the time to listen to my concerns, explain everything, and make sure I felt completely at ease. Her knowledge and attention to detail gave me so much confidence, and the results spoke for themselves. I left feeling refreshed, glowing, and honestly just happier than when I walked in. If you’re thinking about booking with Kiamo, do it. Your skin and your soul will thank you."
    ],
    "date": "2026-08-04",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqnsPnuCN0AeZzq34bjyZaFRHiMljAL8mVTX1BwU0Z5t7vbwWl_MuNZOqETwSLjUf2c3RuoSFQ",
    "author": "Rheshanna Coley",
    "avatar": "/images/reviews/AbFvOqnsPnuCN0AeZzq34bjyZaFRHiMljAL8mVTX1BwU0Z5t7vbwWl_MuNZOqETwSLjUf2c3RuoSFQ.jpg",
    "rating": 5,
    "text": "This is your sign to book the service at Kiamo Skin! Kiki is so knowledgeable and the space is so warm and welcoming. You can really feel and trust that you’re in good hands with her.",
    "paragraphs": [
      "This is your sign to book the service at Kiamo Skin! Kiki is so knowledgeable and the space is so warm and welcoming. You can really feel and trust that you’re in good hands with her."
    ],
    "date": "2026-08-04",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmIruSpGjKsnDBijF3kx_ABhPVzn02vRE4rVqVA9nBw8w_R_SbnqDbRmYsuIGJP0NNA8WbFYA",
    "author": "Presleigh Cramer",
    "avatar": "/images/reviews/AbFvOqmIruSpGjKsnDBijF3kx_ABhPVzn02vRE4rVqVA9nBw8w_R_SbnqDbRmYsuIGJP0NNA8WbFYA.jpg",
    "rating": 5,
    "text": "My facial with Kiki was such an amazing experience from start to finish. She was incredibly knowledgeable and took the time to ask questions about my skin, my skincare routine, and the products I currently use. I loved that she explained each step of the treatment and talked me through the products and steps she was doing. The space was clean and so relaxing. I left feeling completely refreshed, rejuvenated, and my skin felt so soft, hydrated, and glowing. I loved every minute of it and wish I could book a facial every week lol!",
    "paragraphs": [
      "My facial with Kiki was such an amazing experience from start to finish. She was incredibly knowledgeable and took the time to ask questions about my skin, my skincare routine, and the products I currently use. I loved that she explained each step of the treatment and talked me through the products and steps she was doing. The space was clean and so relaxing. I left feeling completely refreshed, rejuvenated, and my skin felt so soft, hydrated, and glowing. I loved every minute of it and wish I could book a facial every week lol!"
    ],
    "date": "2026-08-04",
    "dateLabel": "August 2026",
    "photos": []
  },
  {
    "id": "AbFvOqny5KkySK9BLMd91Vg0NulirLBo9uxpCg0d8jrOgptIRHQud45GRvJE4AYOHK0sJJ-WNKiK-Q",
    "author": "Alyssa Madriaga",
    "avatar": "/images/reviews/AbFvOqny5KkySK9BLMd91Vg0NulirLBo9uxpCg0d8jrOgptIRHQud45GRvJE4AYOHK0sJJ-WNKiK-Q.jpg",
    "rating": 5,
    "text": "Genuinely one of the best facials I've ever had out of all the places I've been to. Kiki is super friendly and caring. She takes her time to make sure that the whole experience is enjoyable and is tailored to all of your skin needs.",
    "paragraphs": [
      "Genuinely one of the best facials I've ever had out of all the places I've been to. Kiki is super friendly and caring. She takes her time to make sure that the whole experience is enjoyable and is tailored to all of your skin needs."
    ],
    "date": "2026-03-08",
    "dateLabel": "March 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmhw_kTi07fCOPs_SzK0fM71DhCoPDf3nS6tUt3Kz1H8WQ7YRoQ9_EN4qYAlWu2ujbHFjIw",
    "author": "Black Women Adventures",
    "avatar": "/images/reviews/AbFvOqmhw_kTi07fCOPs_SzK0fM71DhCoPDf3nS6tUt3Kz1H8WQ7YRoQ9_EN4qYAlWu2ujbHFjIw.jpg",
    "rating": 5,
    "text": "I absolutely loved every minute of the hydrofacial! So relaxing. Just what i needed for my self care day!",
    "paragraphs": [
      "I absolutely loved every minute of the hydrofacial! So relaxing. Just what i needed for my self care day!"
    ],
    "date": "2026-03-01",
    "dateLabel": "March 2026",
    "photos": []
  },
  {
    "id": "AbFvOqk4vW9NBY4I4B8PM2ySD26JY2_8lJQNdkyCCkc_ZObilg_UEmI1hqhzmxKEiJbnt0gFXbyooQ",
    "author": "Brendan Walsh",
    "avatar": "/images/reviews/AbFvOqk4vW9NBY4I4B8PM2ySD26JY2_8lJQNdkyCCkc_ZObilg_UEmI1hqhzmxKEiJbnt0gFXbyooQ.jpg",
    "rating": 5,
    "text": "Kiki worked wonders for my skin! The hydrafacial is really refreshing and the my skin is looking radiant. She's also a pleasure to chat with and it's great to see local small business owners thriving :)\nHighly recommend Kiamo for all things skincare related - just a stones throw from Little Italy!",
    "paragraphs": [
      "Kiki worked wonders for my skin! The hydrafacial is really refreshing and the my skin is looking radiant. She's also a pleasure to chat with and it's great to see local small business owners thriving :)\nHighly recommend Kiamo for all things skincare related - just a stones throw from Little Italy!"
    ],
    "date": "2026-02-24",
    "dateLabel": "February 2026",
    "photos": []
  },
  {
    "id": "AbFvOqltJHGtaFApMAozSgfjJ3SLUH4_AgWZaVIbREsn_yzclK6tAjFCCphRBTACOVc1_SK1nM1qbw",
    "author": "Kayla Taliaferro",
    "avatar": "/images/reviews/AbFvOqltJHGtaFApMAozSgfjJ3SLUH4_AgWZaVIbREsn_yzclK6tAjFCCphRBTACOVc1_SK1nM1qbw.jpg",
    "rating": 5,
    "text": "Kiamo Skin got my skin looking amazing!! I highly recommend the monthly membership!! Kiki creates a comfortable environment + she’s a wonderful human being! I always look forward to my monthly hydrafacial.",
    "paragraphs": [
      "Kiamo Skin got my skin looking amazing!! I highly recommend the monthly membership!! Kiki creates a comfortable environment + she’s a wonderful human being! I always look forward to my monthly hydrafacial."
    ],
    "date": "2026-02-11",
    "dateLabel": "February 2026",
    "photos": []
  },
  {
    "id": "AbFvOqlqPugpSHz7Ybf583EKLIEHjH_ldMTjeL-JcHLPj4vowUIhFAM_k7FiKGW2oM8rt4rn5Py9pw",
    "author": "Tera Rench",
    "avatar": "/images/reviews/AbFvOqlqPugpSHz7Ybf583EKLIEHjH_ldMTjeL-JcHLPj4vowUIhFAM_k7FiKGW2oM8rt4rn5Py9pw.jpg",
    "rating": 5,
    "text": "First time visiting Kiamo Skin, and I was truly impressed. My skin has never looked or felt so radiant after a facial. Kiki’s attention to detail and her ability to assess exactly what my skin needed were impeccable. She didn’t just provide an amazing treatment, she also sent me home with a thoughtful, personalized plan to care for my skin between visits and even followed up to check on my progress. The level of care and expertise she provides is truly unmatched. High Recommend!!",
    "paragraphs": [
      "First time visiting Kiamo Skin, and I was truly impressed. My skin has never looked or felt so radiant after a facial. Kiki’s attention to detail and her ability to assess exactly what my skin needed were impeccable. She didn’t just provide an amazing treatment, she also sent me home with a thoughtful, personalized plan to care for my skin between visits and even followed up to check on my progress. The level of care and expertise she provides is truly unmatched. High Recommend!!"
    ],
    "date": "2026-01-27",
    "dateLabel": "January 2026",
    "photos": []
  },
  {
    "id": "AbFvOqltk9dDkmaaE0oVCsG_c3qhYWH9Q9moZYdcunDzU4L5oDFUkeJFw5kTaKy9uP91TfkkQ5hZ",
    "author": "Leona",
    "avatar": "/images/reviews/AbFvOqltk9dDkmaaE0oVCsG_c3qhYWH9Q9moZYdcunDzU4L5oDFUkeJFw5kTaKy9uP91TfkkQ5hZ.jpg",
    "rating": 5,
    "text": "The BEST facial in the city. Kiki is very attentive to what your skin needs specifically & really takes her time to leave you glowy✨ Will definitely be a regular",
    "paragraphs": [
      "The BEST facial in the city. Kiki is very attentive to what your skin needs specifically & really takes her time to leave you glowy✨ Will definitely be a regular"
    ],
    "date": "2026-01-27",
    "dateLabel": "January 2026",
    "photos": [
      "/images/reviews/AbFvOqltk9dDkmaaE0oVCsG_c3qhYWH9Q9moZYdcunDzU4L5oDFUkeJFw5kTaKy9uP91TfkkQ5hZ-0.jpg",
      "/images/reviews/AbFvOqltk9dDkmaaE0oVCsG_c3qhYWH9Q9moZYdcunDzU4L5oDFUkeJFw5kTaKy9uP91TfkkQ5hZ-1.jpg"
    ]
  },
  {
    "id": "AbFvOqmeDiUjwVUe3NM3G88oFGHUtk3n9AkqDTy8V3IXT6XN6M9NaXtsLBKGuqgpEax7Ra65KvrZZA",
    "author": "Brian Araujo",
    "avatar": "/images/reviews/AbFvOqmeDiUjwVUe3NM3G88oFGHUtk3n9AkqDTy8V3IXT6XN6M9NaXtsLBKGuqgpEax7Ra65KvrZZA.jpg",
    "rating": 5,
    "text": "I’ve been going to Kiamo skin for over a year now and can’t recommend it enough. I originally came in for a facial, then added scalp treatments, and now it’s part of my regular routine. Every visit is professional, relaxing, and I see results every time. Kiki is extremely knowledgeable and consistent. I always leave feeling refreshed such a game changer.",
    "paragraphs": [
      "I’ve been going to Kiamo skin for over a year now and can’t recommend it enough. I originally came in for a facial, then added scalp treatments, and now it’s part of my regular routine. Every visit is professional, relaxing, and I see results every time. Kiki is extremely knowledgeable and consistent. I always leave feeling refreshed such a game changer."
    ],
    "date": "2026-01-26",
    "dateLabel": "January 2026",
    "photos": []
  },
  {
    "id": "AbFvOqmACjQbs4WEB8w2PH_DZDdiLQz3RJzyy1DhMBQDm79hZoD9D6Ap8GVewVI4Q5fBoIKwzZoYdg",
    "author": "Nia Labriel",
    "avatar": "/images/reviews/AbFvOqmACjQbs4WEB8w2PH_DZDdiLQz3RJzyy1DhMBQDm79hZoD9D6Ap8GVewVI4Q5fBoIKwzZoYdg.jpg",
    "rating": 5,
    "text": "i’ve been going to Kiki for 3 months now & i can’t believe there was a time i didn’t. I have stubborn hormonal acne with a compromised barrier and she was able to treat me and give me what i needed. i saw improvement after our first treatment & it’s only getting better. worth every penny <3",
    "paragraphs": [
      "i’ve been going to Kiki for 3 months now & i can’t believe there was a time i didn’t. I have stubborn hormonal acne with a compromised barrier and she was able to treat me and give me what i needed. i saw improvement after our first treatment & it’s only getting better. worth every penny <3"
    ],
    "date": "2026-01-18",
    "dateLabel": "January 2026",
    "photos": []
  },
  {
    "id": "AbFvOqk2F7pch-PiDB0TuiPcII2GLMgWegr1aicyfY78Q8GyaOnLo1A9UtyEGcdhDkme4SBf50sJ",
    "author": "Danyell Welch",
    "avatar": "/images/reviews/AbFvOqk2F7pch-PiDB0TuiPcII2GLMgWegr1aicyfY78Q8GyaOnLo1A9UtyEGcdhDkme4SBf50sJ.jpg",
    "rating": 5,
    "text": "Okay, Kiki seriously worked magic on my face. The HydroFacial + extractions combo cleared up my breakouts with zero scars. My skin’s so smooth and glowy now, obsessed.\nShe was also so kind, knowledgeable, and made the whole experience relaxing. My skin has never looked this good!!  I’m already planning my next appointment! Highly recommend her if you want real results and a glow that lasts. ✨🤩",
    "paragraphs": [
      "Okay, Kiki seriously worked magic on my face. The HydroFacial + extractions combo cleared up my breakouts with zero scars. My skin’s so smooth and glowy now, obsessed.\nShe was also so kind, knowledgeable, and made the whole experience relaxing. My skin has never looked this good!!  I’m already planning my next appointment! Highly recommend her if you want real results and a glow that lasts. ✨🤩"
    ],
    "date": "2025-10-14",
    "dateLabel": "October 2025",
    "photos": []
  },
  {
    "id": "AbFvOqk6lrxMGAhBBTPBDl6FIJhIvzeUHzXF0qvNxdReCUGbnFVUq7hc4qOq_HVBG9OYCXtgI5s2PQ",
    "author": "David Ben",
    "avatar": "/images/reviews/AbFvOqk6lrxMGAhBBTPBDl6FIJhIvzeUHzXF0qvNxdReCUGbnFVUq7hc4qOq_HVBG9OYCXtgI5s2PQ.jpg",
    "rating": 5,
    "text": "Genuinely love this place! My skin has never looked better after my first hydrafacial and Kiki is so knowledgeable and friendly. Highly recommend to anyone looking for real results!",
    "paragraphs": [
      "Genuinely love this place! My skin has never looked better after my first hydrafacial and Kiki is so knowledgeable and friendly. Highly recommend to anyone looking for real results!"
    ],
    "date": "2025-09-23",
    "dateLabel": "September 2025",
    "photos": []
  },
  {
    "id": "AbFvOqkUO995WOSGtVo9SOOAnUO0sZbSJGFNIP2yZHLkgYyFIwh3wTko2XFKOY1y3Cary9wFz_4zjw",
    "author": "Victor Reyes",
    "avatar": "/images/reviews/AbFvOqkUO995WOSGtVo9SOOAnUO0sZbSJGFNIP2yZHLkgYyFIwh3wTko2XFKOY1y3Cary9wFz_4zjw.jpg",
    "rating": 5,
    "text": "Super cute salon and space. Can’t wait to come back!!",
    "paragraphs": [
      "Super cute salon and space. Can’t wait to come back!!"
    ],
    "date": "2025-09-23",
    "dateLabel": "September 2025",
    "photos": [
      "/images/reviews/AbFvOqkUO995WOSGtVo9SOOAnUO0sZbSJGFNIP2yZHLkgYyFIwh3wTko2XFKOY1y3Cary9wFz_4zjw-0.jpg"
    ]
  },
  {
    "id": "AbFvOqm7VLUayu7GSfWjZK0D1dEALYONjjVrUPhgQivRlw5UE88ZayLNs-3RiGprzBDD76JHZAiw",
    "author": "Charleen Harvey",
    "avatar": "/images/reviews/AbFvOqm7VLUayu7GSfWjZK0D1dEALYONjjVrUPhgQivRlw5UE88ZayLNs-3RiGprzBDD76JHZAiw.jpg",
    "rating": 5,
    "text": "I had a Keravive scalp treatment and it was such a good experience. I have fine curly hair and my scalp can get very dry, I noticed an immediate difference after the treatment. Kiki is friendly, knowledgeable, and makes you feel comfortable. I highly recommend.",
    "paragraphs": [
      "I had a Keravive scalp treatment and it was such a good experience. I have fine curly hair and my scalp can get very dry, I noticed an immediate difference after the treatment. Kiki is friendly, knowledgeable, and makes you feel comfortable. I highly recommend."
    ],
    "date": "2025-07-15",
    "dateLabel": "July 2025",
    "photos": []
  },
  {
    "id": "AbFvOqn_59hEWxbR-5GHqOwXlWtj73MHls7J1xNQyv5J5C37Pqbnlt7ThrsOQSQa-3EbtwKESkvn",
    "author": "Scarlett Baily",
    "avatar": "/images/reviews/AbFvOqn_59hEWxbR-5GHqOwXlWtj73MHls7J1xNQyv5J5C37Pqbnlt7ThrsOQSQa-3EbtwKESkvn.jpg",
    "rating": 5,
    "text": "Lucky is the one in the hands of Kiarra at Kiamo. I shopped around San Diego looking for a facial that would help me with my hormonal adult acne breakouts while trying to conceive and Kiki saved me. Other facials in the area covered me in slop, without any attention to my personal skin history and trends. I am 39, and chicana, with darker oily skin that tends to get pigmentation from each blemish, and Kiki got it. The icing on the cake is her beautiful space and professional spirit that makes each visit relaxing, joyful, and effective.",
    "paragraphs": [
      "Lucky is the one in the hands of Kiarra at Kiamo. I shopped around San Diego looking for a facial that would help me with my hormonal adult acne breakouts while trying to conceive and Kiki saved me. Other facials in the area covered me in slop, without any attention to my personal skin history and trends. I am 39, and chicana, with darker oily skin that tends to get pigmentation from each blemish, and Kiki got it. The icing on the cake is her beautiful space and professional spirit that makes each visit relaxing, joyful, and effective."
    ],
    "date": "2025-07-09",
    "dateLabel": "July 2025",
    "photos": []
  },
  {
    "id": "AbFvOqk6FKKDQxz9qjtHgKYMGOkIcgwPhG_LD_z7CYvck3EbBqNaTyXz9UfRQBjcrmM_sOG11sJTWQ",
    "author": "Karen Haines",
    "avatar": "/images/reviews/AbFvOqk6FKKDQxz9qjtHgKYMGOkIcgwPhG_LD_z7CYvck3EbBqNaTyXz9UfRQBjcrmM_sOG11sJTWQ.jpg",
    "rating": 5,
    "text": "This was literally the best experience, Kiki was extremely knowledgeable, the whole place was so comfy and relaxing. My skin looks and feels amazing!!!.",
    "paragraphs": [
      "This was literally the best experience, Kiki was extremely knowledgeable, the whole place was so comfy and relaxing. My skin looks and feels amazing!!!."
    ],
    "date": "2025-07-07",
    "dateLabel": "July 2025",
    "photos": []
  },
  {
    "id": "AbFvOqnox_E5WUrgxPdaOUUT1B6RSPhKWzWepI8sCFVSlrQkeGDhkiywvvaE3Z50EgF4AvOVzMtqlQ",
    "author": "nicholas krasnyckyj",
    "avatar": "/images/reviews/AbFvOqnox_E5WUrgxPdaOUUT1B6RSPhKWzWepI8sCFVSlrQkeGDhkiywvvaE3Z50EgF4AvOVzMtqlQ.jpg",
    "rating": 5,
    "text": "I was dealing with some skin issues from shaving and stress, and KIAMO Skin really helped me get things under control. KiKi is tailored the treatment to my needs and I left feeling confident. Highly recommend her services.",
    "paragraphs": [
      "I was dealing with some skin issues from shaving and stress, and KIAMO Skin really helped me get things under control. KiKi is tailored the treatment to my needs and I left feeling confident. Highly recommend her services."
    ],
    "date": "2025-07-04",
    "dateLabel": "July 2025",
    "photos": []
  },
  {
    "id": "AbFvOql5Kd8Sb5gavprhwlILpejY-NZwTIgC6dtR0W8l_7YCWUMbuGq36auWsMECdhsHF3uwyicxEA",
    "author": "Dominique Lott",
    "avatar": "/images/reviews/AbFvOql5Kd8Sb5gavprhwlILpejY-NZwTIgC6dtR0W8l_7YCWUMbuGq36auWsMECdhsHF3uwyicxEA.jpg",
    "rating": 5,
    "text": "I truly don’t have enough words to describe how amazing my experience was at Kiamo Skin. From the moment I stepped in, I felt like I was entering a sanctuary. It’s peaceful, professional, and full of intention. My skin felt SO SOFT.\n\nI received the full works: a double cleanse, dermaplane, hydra facial, ZO BrightAlive and red light therapy, microcurrent treatment, antioxidant goji berry jelly mask, DMK products and cryotherapy. Basically a full-on facial feast, and my skin is GLOWING. Each step was tailored to exactly what my skin needed, and the quality of care was unmatched.\n\nWhat sets Kiamo Skin apart is not just the incredible services and high-end products, but the level of knowledge, passion, and detail that Kiki brings to every appointment. She explained everything, checked in with me throughout, and made the whole experience feel luxurious and deeply rejuvenating.\n\nMy face feels lifted, hydrated, and bright, and my soul feels a little more nourished too. If you’ve been thinking about booking with Kiamo Skin, I 10/10 recommend. Your skin will thank you.",
    "paragraphs": [
      "I truly don’t have enough words to describe how amazing my experience was at Kiamo Skin. From the moment I stepped in, I felt like I was entering a sanctuary. It’s peaceful, professional, and full of intention. My skin felt SO SOFT.",
      "I received the full works: a double cleanse, dermaplane, hydra facial, ZO BrightAlive and red light therapy, microcurrent treatment, antioxidant goji berry jelly mask, DMK products and cryotherapy. Basically a full-on facial feast, and my skin is GLOWING. Each step was tailored to exactly what my skin needed, and the quality of care was unmatched.",
      "What sets Kiamo Skin apart is not just the incredible services and high-end products, but the level of knowledge, passion, and detail that Kiki brings to every appointment. She explained everything, checked in with me throughout, and made the whole experience feel luxurious and deeply rejuvenating.",
      "My face feels lifted, hydrated, and bright, and my soul feels a little more nourished too. If you’ve been thinking about booking with Kiamo Skin, I 10/10 recommend. Your skin will thank you."
    ],
    "date": "2025-07-03",
    "dateLabel": "July 2025",
    "photos": []
  },
  {
    "id": "AbFvOqkzUGzi1LgNsyhpo0QYUc10SNxW14AtnIi3Qb-G7lCixKIcOgeUdQoaxFiT5CIAM-eRLwCE8w",
    "author": "Mahogany",
    "avatar": "/images/reviews/AbFvOqkzUGzi1LgNsyhpo0QYUc10SNxW14AtnIi3Qb-G7lCixKIcOgeUdQoaxFiT5CIAM-eRLwCE8w.jpg",
    "rating": 5,
    "text": "I absolutely love Kiamo skin!!!!! 10/10! I visited Del Mar just to go here and it was 100% worth it!!! I’ll definitely be back!!",
    "paragraphs": [
      "I absolutely love Kiamo skin!!!!! 10/10! I visited Del Mar just to go here and it was 100% worth it!!! I’ll definitely be back!!"
    ],
    "date": "2024-11-28",
    "dateLabel": "November 2024",
    "photos": []
  },
  {
    "id": "AbFvOqnXdBsWDpnamPnCTkTw5wzR3YKwzyfIEiC8gQ6rELL98wOGAwpShMJoXTtigpg08uFiLmigqg",
    "author": "Morg A",
    "avatar": "/images/reviews/AbFvOqnXdBsWDpnamPnCTkTw5wzR3YKwzyfIEiC8gQ6rELL98wOGAwpShMJoXTtigpg08uFiLmigqg.jpg",
    "rating": 5,
    "text": "This is the only place I let touch my skin! I feel like I’ve been aging backwards since going to Kiamo Skin. My skin is so glowy and smooth 😍 100000/10 ⭐️",
    "paragraphs": [
      "This is the only place I let touch my skin! I feel like I’ve been aging backwards since going to Kiamo Skin. My skin is so glowy and smooth 😍 100000/10 ⭐️"
    ],
    "date": "2024-11-27",
    "dateLabel": "November 2024",
    "photos": []
  },
  {
    "id": "AbFvOqnOGKLuvc85lInoKgemCaV_Z2qQCxls6sgXKj6JsHOxyyeiRdMkWBU9q5Rp2xftFLpCpttpMg",
    "author": "Kamille",
    "avatar": "/images/reviews/AbFvOqnOGKLuvc85lInoKgemCaV_Z2qQCxls6sgXKj6JsHOxyyeiRdMkWBU9q5Rp2xftFLpCpttpMg.jpg",
    "rating": 5,
    "text": "I went to Kiamo for a facial and my skin has been glowing ever since",
    "paragraphs": [
      "I went to Kiamo for a facial and my skin has been glowing ever since"
    ],
    "date": "2024-11-27",
    "dateLabel": "November 2024",
    "photos": []
  },
  {
    "id": "AbFvOqntYNxjm_f8FkqTrvmfIvzKCm6y5rCFGQUxkkcJr-evpdu7kHxcSCcD4zVhseA42Y7or2ji",
    "author": "Paige Billheimer",
    "avatar": "/images/reviews/AbFvOqntYNxjm_f8FkqTrvmfIvzKCm6y5rCFGQUxkkcJr-evpdu7kHxcSCcD4zVhseA42Y7or2ji.jpg",
    "rating": 5,
    "text": "I feel so rejuvenated!! What an amazing service! My most relaxing facial yet!$",
    "paragraphs": [
      "I feel so rejuvenated!! What an amazing service! My most relaxing facial yet!$"
    ],
    "date": "2024-11-27",
    "dateLabel": "November 2024",
    "photos": []
  },
  {
    "id": "AbFvOqlghBI4IYLw_6mIrwXKX6ndohk2yt-uD1pU2UtO_uj0jbd7RcjZqtMJtjSbVQGZ5NY3iBg-QA",
    "author": "T Hart",
    "avatar": "/images/reviews/AbFvOqlghBI4IYLw_6mIrwXKX6ndohk2yt-uD1pU2UtO_uj0jbd7RcjZqtMJtjSbVQGZ5NY3iBg-QA.jpg",
    "rating": 5,
    "text": "I can't say enough about how pleased i was with KIAMO Skin with the service, professionalism, and comfortability I experienced. I'm Looking forward to my next appointment.",
    "paragraphs": [
      "I can't say enough about how pleased i was with KIAMO Skin with the service, professionalism, and comfortability I experienced. I'm Looking forward to my next appointment."
    ],
    "date": "2024-10-03",
    "dateLabel": "October 2024",
    "photos": []
  },
  {
    "id": "AbFvOqktllVPrMDYKa6xAtznbS2wXv3VPphvDQxAAGY9nKWGYZQ5F-7B2WtW4ZX51szKjVvNAazGsQ",
    "author": "Bristol Enterprise",
    "avatar": "/images/reviews/AbFvOqktllVPrMDYKa6xAtznbS2wXv3VPphvDQxAAGY9nKWGYZQ5F-7B2WtW4ZX51szKjVvNAazGsQ.jpg",
    "rating": 5,
    "text": "I had to share how amazing my skin felt after having a DMK treatment by Kiarra of KIAMO Skin! I have sensitive skin and wasn't sure if all would go well, but everything did, and I'll definitely return for another. I felt the circulation working and the glowing skin results were fabulous! Thanks Kiarra!",
    "paragraphs": [
      "I had to share how amazing my skin felt after having a DMK treatment by Kiarra of KIAMO Skin! I have sensitive skin and wasn't sure if all would go well, but everything did, and I'll definitely return for another. I felt the circulation working and the glowing skin results were fabulous! Thanks Kiarra!"
    ],
    "date": "2024-05-27",
    "dateLabel": "May 2024",
    "photos": []
  },
  {
    "id": "AbFvOqlWLIgLJu-L-Q8FvfcdQ6ZFTACn4_kB_iXVXHvMk1Tgum0Ao-bNKhRbtFZ1XRvxwKB7JH2M2g",
    "author": "Moon Terrance",
    "avatar": "/images/reviews/AbFvOqlWLIgLJu-L-Q8FvfcdQ6ZFTACn4_kB_iXVXHvMk1Tgum0Ao-bNKhRbtFZ1XRvxwKB7JH2M2g.jpg",
    "rating": 5,
    "text": "Took my sister here She loved it. Kiarra was knowledgeable, professional and a pleasure to work with. Highly recommended.",
    "paragraphs": [
      "Took my sister here She loved it. Kiarra was knowledgeable, professional and a pleasure to work with. Highly recommended."
    ],
    "date": "2024-05-20",
    "dateLabel": "May 2024",
    "photos": []
  }
];

/** How many reviews the listing held when this file was generated. */
export const reviewsFetchedAt = "2026-11-01T14:24:53.901Z";

/** The count the listing reported, which the studio's own figure tracks. */
export const reviewsListingTotal = 41;
