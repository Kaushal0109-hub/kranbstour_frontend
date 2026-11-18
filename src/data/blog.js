import { images } from "./tours";

export const authors = {
  "rajesh-sharma": {
    id: "rajesh-sharma",
    name: "Rajesh Sharma",
    role: "Senior Heritage Historian & Agra Specialist",
    avatar: "/avatars/avatar-1.jpg",
    bio: "Historian and storyteller with over 15 years guiding cultural travellers through the Mughal architectural monuments of Agra and Fatehpur Sikri.",
  },
  "priya-sen": {
    id: "priya-sen",
    name: "Priya Sen",
    role: "Cultural Travel Journalist & Food Explorer",
    avatar: "/avatars/avatar-2.jpg",
    bio: "Architectural writer and culinary explorer based in Delhi, specializing in 17th-century Mughal heritage, Persian Charbagh gardens, and Old Delhi street food.",
  },
  "vikram-rathore": {
    id: "vikram-rathore",
    name: "Vikram Rathore",
    role: "Rajasthan Heritage Specialist & Trip Designer",
    avatar: "/avatars/avatar-3.jpg",
    bio: "Jaipur native passionate about Rajput military fortification, Vastu Shastra urban architecture, and traditional hand-block printing guilds.",
  },
};

export const blogCategories = [
  { id: "all", label: "All Articles" },
  { id: "agra", label: "Agra Travel" },
  { id: "delhi", label: "Delhi Travel" },
  { id: "jaipur", label: "Jaipur Travel" },
  { id: "golden-triangle", label: "Golden Triangle" },
  { id: "travel-tips", label: "Travel Tips" },
  { id: "travel-guides", label: "Travel Guides" },
  { id: "heritage-culture", label: "Heritage & Culture" },
];

export const articles = [
  /* --------------------------------------------------------------------------
     1. AGRA: Best Time to Visit Taj Mahal
     -------------------------------------------------------------------------- */
  {
    id: "1",
    slug: "best-time-to-visit-taj-mahal",
    title: "Best Time to Visit the Taj Mahal: Seasons, Hours & Sunrise Guide",
    subtitle:
      "A complete seasonal and hourly breakdown to experience the world's most romantic monument at its quietest and most breathtaking.",
    excerpt:
      "Planning a visit to the Taj Mahal? Discover why sunrise between October and March offers the ultimate weather, ethereal light, and calmest crowds.",
    category: "Agra Travel",
    categorySlug: "agra",
    tags: ["Taj Mahal", "Agra", "Best Time to Visit", "Sunrise", "Travel Tips"],
    coverImage: images.tajGoldenHour,
    coverImageAlt: "The Taj Mahal bathed in early morning golden sunrise light",
    authorId: "rajesh-sharma",
    publishedAt: "January 10, 2025",
    updatedAt: "February 2025",
    readingTime: "6 min read",
    featured: true,
    destination: "Agra",
    seoTitle: "Best Time to Visit the Taj Mahal (2025 Guide) | KranbsTour",
    seoDescription:
      "Everything you need to know about the best season, best month, and exact time of day to visit the Taj Mahal. Includes sunrise tips and Friday closure warnings.",
    destinationInfo: {
      destination: "Agra, Uttar Pradesh",
      bestTime: "October to March (12°C to 24°C)",
      suggestedDuration: "1 to 2 Days",
      mustSeeAttractions: "Taj Mahal, Agra Fort, Baby Taj, Mehtab Bagh",
    },
    content: [
      {
        id: "seasonal-breakdown",
        heading: "Seasonal Breakdown: When is the Weather Best in Agra?",
        paragraphs: [
          "Agra experiences three distinct meteorological seasons: the mild winter (October to March), the scorching North Indian summer (April to June), and the monsoon season (July to September). For almost all international and domestic travellers, the winter months represent the undisputed golden window.",
          "Between October and March, daytime temperatures range pleasantly between 12°C and 25°C. Walking across vast open marble terraces and sprawling red sandstone courtyards is comfortable and delightful. In contrast, peak summer months regularly see mercury exceeding 42°C (108°F), turning the sun-baked marble plinth intensely hot to step on.",
        ],
        tip: "If visiting in late December or January, be mindful of early morning winter fog. While atmospheric, thick mist can sometimes obscure the monument's dome until around 9:00 AM.",
      },
      {
        id: "why-sunrise-wins",
        heading: "Why Sunrise is Unquestionably the Best Time of Day",
        paragraphs: [
          "The Taj Mahal gates open approximately 30 minutes before official sunrise. Arriving at the East or West Gate ticket barrier at first light offers two immense advantages: tranquil crowds and magical, shifting light.",
          "As dawn breaks over the Yamuna River, the translucent Makrana marble changes subtly from a cool silvery-grey to soft rose-pink, before glowing warm ochre as the sun clears the tree line. The lotus reflection pools in the central Charbagh garden are still undisturbed by ripples, creating postcard-perfect mirror reflections.",
        ],
        quote:
          "The Taj Mahal at dawn is not just a building; it is a quiet revelation of Mughal architectural harmony before the daily rush begins.",
      },
      {
        id: "friday-closure-warning",
        heading: "Crucial Rule: The Taj Mahal is Strictly Closed on Fridays",
        paragraphs: [
          "One of the most frequent travel planning mistakes is booking an Agra day trip on a Friday. The Taj Mahal complex is closed to general visitors every Friday by law, reserved solely for local Muslim worshipers attending congregational prayers at the attached mosque.",
          "However, other Agra landmarks — including Agra Fort, Itmad-ud-Daulah (Baby Taj), and Mehtab Bagh across the river — remain fully open on Fridays. If your schedule forces a Friday in Agra, you can explore Agra Fort and view the Taj Mahal from Mehtab Bagh at sunset.",
        ],
      },
      {
        id: "practical-entry-advice",
        heading: "Essential Practical Entry Advice",
        paragraphs: [
          "Foreign tourist tickets include disposable shoe covers and a complimentary bottled water bottle, obtainable near the turnstiles. Shoe covers are mandatory before ascending the raised marble terrace of the main mausoleum.",
          "Strict security protocols are enforced by the Archaeological Survey of India (ASI). Large backpacks, tripods, selfie sticks, drone cameras, tobacco products, and food items are prohibited. Bring only your smartphone, handheld camera, and passport.",
        ],
      },
    ],
    faqs: [
      {
        question: "What time do the Taj Mahal gates open in the morning?",
        answer:
          "The ticket counters and entry turnstiles open 30 minutes before official sunrise and close 30 minutes before sunset every day except Friday.",
      },
      {
        question: "Can I take photographs inside the main tomb chamber?",
        answer:
          "No. Photography and videography are strictly prohibited inside the inner cenotaph chamber where Shah Jahan and Mumtaz Mahal are commemorated. Photography is permitted everywhere across the exterior gardens, plinths, and courtyards.",
      },
      {
        question: "Is it worth visiting Mehtab Bagh across the river?",
        answer:
          "Yes, particularly for sunset! Mehtab Bagh directly aligns with the rear facade of the Taj Mahal across the Yamuna River, offering magnificent silhouette photography without crowds.",
      },
    ],
    relatedTourSlugs: ["taj-mahal-sunrise-tour", "taj-mahal-and-agra-fort-tour", "agra-mughal-heritage-escape"],
    relatedArticleSlugs: ["taj-mahal-sunrise-visit-guide", "top-places-to-visit-in-agra", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     2. AGRA: Top Places to Visit Beyond Taj Mahal
     -------------------------------------------------------------------------- */
  {
    id: "2",
    slug: "top-places-to-visit-in-agra",
    title: "Top 7 Places to Visit in Agra Beyond the Taj Mahal",
    subtitle:
      "Uncover massive imperial forts, riverside jewel-box tombs, abandoned ghost cities, and bustling bazaar quarters in India's Mughal heartland.",
    excerpt:
      "While the Taj Mahal claims world fame, Agra's formidable Mughal fortresses, Persian riverside gardens, and nearby ghost capitals make it a multi-day treasure trove.",
    category: "Agra Travel",
    categorySlug: "agra",
    tags: ["Agra Fort", "Baby Taj", "Mehtab Bagh", "Fatehpur Sikri", "Heritage & Culture"],
    coverImage: images.agraFort,
    coverImageAlt: "The red sandstone bastions and arches of Agra Fort",
    authorId: "rajesh-sharma",
    publishedAt: "January 14, 2025",
    updatedAt: "February 2025",
    readingTime: "7 min read",
    featured: false,
    destination: "Agra",
    seoTitle: "Top 7 Places to Visit in Agra Beyond the Taj Mahal | KranbsTour",
    seoDescription:
      "Discover Agra's finest historical attractions: Agra Fort, Itmad-ud-Daulah (Baby Taj), Mehtab Bagh, Fatehpur Sikri, and Kinari Bazaar.",
    destinationInfo: {
      destination: "Agra, Uttar Pradesh",
      bestTime: "October to March",
      suggestedDuration: "2 Days",
      mustSeeAttractions: "Agra Fort, Baby Taj, Mehtab Bagh, Fatehpur Sikri",
    },
    content: [
      {
        id: "agra-fort",
        heading: "1. Agra Fort: The Red Sandstone Imperial Citadel",
        paragraphs: [
          "Spanning 2.5 kilometers along the Yamuna River, Agra Fort was the principal royal residence of the Mughal emperors until 1638 when Shah Jahan relocated the capital to Delhi. Enclosed by soaring 70-foot double walls of red sandstone, the complex holds hundreds of years of dynastic drama.",
          "Inside lie exquisite marble palaces, including the Jahangiri Mahal, Khas Mahal, and the Musamman Burj — an octagonal marble tower where Shah Jahan spent his final eight years gazing mournfully across the river at the tomb of his beloved Mumtaz Mahal.",
        ],
        tip: "Allow at least 2 hours to explore Agra Fort. Afternoon light through the marble jali screens provides exceptional portrait and architectural compositions.",
      },
      {
        id: "baby-taj",
        heading: "2. Itmad-ud-Daulah (The Baby Taj)",
        paragraphs: [
          "Constructed between 1622 and 1628 by Empress Nur Jahan for her father Mirza Ghiyas Beg, this jewel-box mausoleum marks a pivotal transition in Mughal architecture: from heavy red sandstone to delicate white Makrana marble.",
          "Often called the 'Baby Taj' or the draft for the Taj Mahal, its interior walls feature some of the most intricate pietra dura stone inlays in the world, depicting cypress trees, wine carafes, and blossoming vases using semiprecious lapis lazuli, onyx, and cornelian.",
        ],
      },
      {
        id: "fatehpur-sikri",
        heading: "3. Fatehpur Sikri: The Deserted Royal Capital",
        paragraphs: [
          "Located 37 kilometers west of Agra, Fatehpur Sikri was founded in 1571 by Emperor Akbar as the grand imperial capital. Built entirely of red sandstone, it combines Hindu, Persian, and Islamic architectural idioms.",
          "Fourteen years later, chronic water shortages forced Akbar to abandon the city, preserving it as a remarkably intact Renaissance-era time capsule. Don't miss the colossal 54-meter Buland Darwaza and the white marble dargah of Sufi saint Sheikh Salim Chishti.",
        ],
      },
      {
        id: "mehtab-bagh",
        heading: "4. Mehtab Bagh: The Moonlight Garden",
        paragraphs: [
          "Situated directly opposite the Taj Mahal on the north bank of the Yamuna, this 25-acre garden was originally created by Emperor Babur. Re-excavated by the ASI, it has become the ultimate viewpoint for tranquil sunset photography.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Fatehpur Sikri from Agra?",
        answer:
          "Fatehpur Sikri is approximately 37 km from central Agra. The drive takes around 50 to 60 minutes via the NH-21 highway in a private air-conditioned vehicle.",
      },
      {
        question: "Can I visit Agra Fort and Baby Taj on a Friday?",
        answer:
          "Yes! Both Agra Fort and Itmad-ud-Daulah (Baby Taj) remain open every day of the week, including Fridays when the Taj Mahal is closed.",
      },
    ],
    relatedTourSlugs: ["full-day-agra-sightseeing-and-heritage-walk", "agra-mughal-heritage-escape", "taj-mahal-baby-taj-and-mehtab-bagh-tour"],
    relatedArticleSlugs: ["best-time-to-visit-taj-mahal", "taj-mahal-sunrise-visit-guide", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     3. AGRA: Taj Mahal Sunrise Visit Guide
     -------------------------------------------------------------------------- */
  {
    id: "3",
    slug: "taj-mahal-sunrise-visit-guide",
    title: "Taj Mahal Sunrise Visit: What to Expect, Timing & Photography Tips",
    subtitle:
      "A step-by-step walkthrough to navigate security gates early, beat the midday crowds, and capture iconic photographs at dawn.",
    excerpt:
      "Experience the magical silence of first light at the Taj Mahal. Here is your practical survival guide covering arrival gates, security rules, and best photo angles.",
    category: "Travel Tips",
    categorySlug: "travel-tips",
    tags: ["Taj Mahal", "Photography", "Sunrise", "Agra", "Travel Tips"],
    coverImage: images.tajMahal,
    coverImageAlt: "Quiet sunrise view of the Taj Mahal reflecting in water pools",
    authorId: "rajesh-sharma",
    publishedAt: "January 18, 2025",
    updatedAt: "February 2025",
    readingTime: "5 min read",
    featured: false,
    destination: "Agra",
    seoTitle: "Taj Mahal Sunrise Visit Guide (2025) | KranbsTour",
    seoDescription:
      "Learn what to expect during a sunrise tour of the Taj Mahal: gate selection, arrival timing, security rules, and photography advice.",
    destinationInfo: {
      destination: "Agra, Uttar Pradesh",
      bestTime: "Year-round (Gates open 30 min before dawn)",
      suggestedDuration: "3 Hours",
      mustSeeAttractions: "Main Mausoleum, Central Charbagh, Mosque, Mehmankhana",
    },
    content: [
      {
        id: "which-gate",
        heading: "Which Gate to Choose: East Gate vs West Gate",
        paragraphs: [
          "The Taj Mahal has two main entry gates for general visitors: the East Gate and the West Gate. (The South Gate is primarily an exit). For early sunrise arrivals, the East Gate is strongly recommended.",
          "The East Gate is closer to most boutique tourist hotels in Taj Ganj, has separate dedicated ticket queues for international tourists, and tends to experience less vehicular commotion than the bustling market-facing West Gate.",
        ],
        tip: "Vehicles are barred within 500 meters of the Taj Mahal to protect marble from pollution. Eco-friendly battery-operated electric golf carts ferry visitors from the parking depot to the gate.",
      },
      {
        id: "photography-spots",
        heading: "Best Sunrise Photography Angles",
        paragraphs: [
          "1. **The Classic Central Reflection Pool:** Walk swiftly past the main Great Gate (Darwaza-i-Rauza) to the central raised marble platform (Al Hawd al-Kawthar). Shoot low to capture uninterrupted water reflections before ripples start.",
          "2. **The Red Sandstone Mosque Archway:** Walk to the red sandstone mosque on the western flank. Frame the glowing white marble dome through one of the pointed cusped arches for stunning contrast.",
          "3. **Eastern Guest Pavilion (Mehmankhana):** Mirroring the mosque on the east, this pavilion catches morning sun directly, casting warm golden illumination across the marble facade.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are tripods allowed for sunrise photography?",
        answer:
          "No. Tripods, monopods, gimbal stabilizers, and lighting equipment are strictly banned inside ASI monument complexes. Handheld camera shooting is permitted.",
      },
      {
        question: "How early should I leave my hotel for sunrise?",
        answer:
          "We recommend departing your Agra hotel roughly 45 to 60 minutes before scheduled sunrise to allow for the short drive, battery cart transfer, and security screening.",
      },
    ],
    relatedTourSlugs: ["taj-mahal-sunrise-tour", "taj-mahal-golden-hour-photography-tour", "taj-mahal-and-agra-fort-tour"],
    relatedArticleSlugs: ["best-time-to-visit-taj-mahal", "top-places-to-visit-in-agra", "how-many-days-needed-for-golden-triangle"],
  },

  /* --------------------------------------------------------------------------
     4. DELHI: Top Places to Visit in Delhi
     -------------------------------------------------------------------------- */
  {
    id: "4",
    slug: "top-places-to-visit-in-delhi",
    title: "Top Places to Visit in Delhi: The Ultimate Capital City Itinerary",
    subtitle:
      "From medieval dynastic tombs and Mughal bazaars to grand British colonial boulevards and spiritual wonders.",
    excerpt:
      "Delhi is not just one city — it is seven ancient capitals interwoven into a vibrant modern metropolis. Here are the unmissable sights for your capital visit.",
    category: "Delhi Travel",
    categorySlug: "delhi",
    tags: ["Delhi", "Sightseeing", "Qutub Minar", "Humayun's Tomb", "Travel Guides"],
    coverImage: images.indiaGate,
    coverImageAlt: "India Gate ceremonial war memorial in New Delhi under clear skies",
    authorId: "priya-sen",
    publishedAt: "January 22, 2025",
    updatedAt: "February 2025",
    readingTime: "8 min read",
    featured: true,
    destination: "Delhi",
    seoTitle: "Top Places to Visit in Delhi: The Complete Sightseeing Guide | KranbsTour",
    seoDescription:
      "Discover the best historical, cultural, and architectural attractions in Delhi: Humayun's Tomb, Qutub Minar, Chandni Chowk, India Gate, and Lotus Temple.",
    destinationInfo: {
      destination: "Delhi NCR",
      bestTime: "October to March (15°C to 24°C)",
      suggestedDuration: "2 to 3 Days",
      mustSeeAttractions: "Humayun's Tomb, Qutub Minar, Chandni Chowk, India Gate",
    },
    content: [
      {
        id: "humayuns-tomb",
        heading: "1. Humayun's Tomb: The Mughal Architectural Masterpiece",
        paragraphs: [
          "Built in 1570 by Empress Bega Begum, this UNESCO World Heritage Site was the first grand garden-tomb on the Indian subcontinent. Designed by Persian architect Mirak Mirza Ghiyas, its harmonious red sandstone facade trimmed with white marble directly provided the architectural blueprint for the Taj Mahal sixty years later.",
          "Surrounded by thirty acres of Persian-style Charbagh gardens crisscrossed with geometric water channels, it offers one of Delhi's most tranquil and dignified heritage walks.",
        ],
        tip: "Visit between 3:30 PM and 5:30 PM. The setting sun casts a radiant amber glow across the sandstone facade.",
      },
      {
        id: "qutub-minar",
        heading: "2. Qutub Minar Archaeological Complex",
        paragraphs: [
          "Rising 72.5 meters into the sky, the Qutub Minar is the tallest brick minaret in the world. Begun in 1192 CE by Qutb-ud-din Aibak to commemorate the victory of the Delhi Sultanate, its five distinct tapering storeys are adorned with intricate fluting and carved Quranic inscriptions.",
          "In the courtyard stands the legendary 1,600-year-old Iron Pillar of Chandragupta II — an ancient metallurgical marvel that has resisted rust and corrosion despite centuries of open-air exposure.",
        ],
      },
      {
        id: "chandni-chowk",
        heading: "3. Old Delhi & Chandni Chowk",
        paragraphs: [
          "Founded by Emperor Shah Jahan in 1639, Old Delhi (Shahjahanabad) is the sensory heart of northern India. Take a traditional cycle-rickshaw through narrow lanes scented with cardamom, roasted cumin, and frying jalebis.",
          "Anchored by Jama Masjid — one of India's largest historical mosques — and Khari Baoli, Asia's largest wholesale spice market, it is an essential cultural contrast to the grand British avenues of New Delhi.",
        ],
      },
      {
        id: "lutyens-delhi",
        heading: "4. India Gate & Lutyens' Imperial Grandeur",
        paragraphs: [
          "Designed by Sir Edwin Lutyens, India Gate stands at the eastern terminus of the newly revamped Kartavya Path boulevard. Commemorating 84,000 soldiers who died in World War I, the majestic 42-meter stone archway leads toward Rashtrapati Bhavan, the official residence of the President of India.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many days are needed to explore Delhi properly?",
        answer:
          "We recommend at least 2 full days: one dedicated to Old Delhi and central Mughal monuments, and the second exploring Lutyens' New Delhi, Qutub Minar, and spiritual sanctuaries.",
      },
      {
        question: "Which days are Delhi monuments closed?",
        answer:
          "The Red Fort, Lotus Temple, Akshardham Temple, and the National Museum are closed on Mondays. However, Humayun's Tomb, Qutub Minar, and India Gate are open daily.",
      },
    ],
    relatedTourSlugs: ["old-and-new-delhi-discovery-tour", "delhi-full-day-sightseeing", "delhi-mughal-heritage-trail"],
    relatedArticleSlugs: ["old-delhi-travel-guide", "famous-historical-monuments-delhi", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     5. DELHI: Old Delhi Travel Guide
     -------------------------------------------------------------------------- */
  {
    id: "5",
    slug: "old-delhi-travel-guide",
    title: "Old Delhi Travel Guide: Chandni Chowk, Spice Markets & Street Food",
    subtitle:
      "A culinary and sensory journey through Shahjahanabad's 17th-century havelis, historic bazaars, and legendary street food stalls.",
    excerpt:
      "Step into the electric, historic labyrinth of Old Delhi. Here is how to experience Jama Masjid, the Khari Baoli spice market, and legendary street gastronomy safely.",
    category: "Delhi Travel",
    categorySlug: "delhi",
    tags: ["Old Delhi", "Chandni Chowk", "Food Walk", "Jama Masjid", "Heritage & Culture"],
    coverImage: images.redFort,
    coverImageAlt: "Vibrant crowds and heritage facades around Old Delhi and the Red Fort",
    authorId: "priya-sen",
    publishedAt: "January 26, 2025",
    updatedAt: "February 2025",
    readingTime: "7 min read",
    featured: false,
    destination: "Delhi",
    seoTitle: "Old Delhi Travel Guide: Chandni Chowk & Street Food | KranbsTour",
    seoDescription:
      "Explore Old Delhi's best experiences: cycle-rickshaw rides in Chandni Chowk, Khari Baoli spice market, Paranthe Wali Gali, and Jama Masjid.",
    destinationInfo: {
      destination: "Old Delhi (Shahjahanabad)",
      bestTime: "Morning (9:00 AM – 1:00 PM) or Late Afternoon",
      suggestedDuration: "4 to 5 Hours",
      mustSeeAttractions: "Jama Masjid, Khari Baoli, Paranthe Wali Gali, Gurudwara Sis Ganj",
    },
    content: [
      {
        id: "rickshaw-ride",
        heading: "The Cycle-Rickshaw Experience Through Chandni Chowk",
        paragraphs: [
          "Navigating the dense, energetic alleyways of Old Delhi on foot can feel exhilarating but intense. Hiring a cycle-rickshaw allows you to glide above the bustling crowds, passing beneath dangling overhead telephone wires and century-old Mughal haveli archways.",
          "The main avenue of Chandni Chowk was recently pedestrianized, making walking comfortable, but the real historical magic lives in the branching side streets: Dariba Kalan (the silver jewelry market), Kinari Bazaar (wedding trimmings and borders), and Ballimaran (historic home of Urdu poet Mirza Ghalib).",
        ],
      },
      {
        id: "khari-baoli-spices",
        heading: "Khari Baoli: Asia's Largest Wholesale Spice Market",
        paragraphs: [
          "Operating since the 17th century, Khari Baoli is an overwhelming sensory explosion. Sacks piled ten feet high spill over with whole red chillies, green cardamom pods, cinnamon bark, saffron strands, and black salt.",
          "The air carries an intense peppery fragrance that will make you cough — an authentic rite of passage for every visitor! Ascend to the upper rooftops of the old spice warehouses (Gadodia Market) for spectacular panoramic views over the domes and minarets of Jama Masjid.",
        ],
        tip: "Carry a lightweight scarf or mask to cover your nose and mouth when walking directly through the whole chilli grinding quarters of Khari Baoli.",
      },
      {
        id: "food-trail",
        heading: "Legendary Street Gastronomy",
        paragraphs: [
          "Old Delhi is the birthplace of legendary North Indian street food. Taste crispy stuffed parathas at Paranthe Wali Gali, velvety dahi bhallas at Natraj, hot jalebis fried in pure desi ghee at Old Famous Jalebi Wala, and melt-in-mouth mutton seekh kebabs near the gates of Jama Masjid.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Old Delhi safe for solo and international travellers?",
        answer:
          "Yes. Old Delhi is bustling, hospitable, and vibrant. With a licensed local guide accompanying you, you will navigate smoothly and sample food from hygienically verified heritage stalls.",
      },
      {
        question: "What is the dress code for visiting Jama Masjid?",
        answer:
          "Modest attire covering shoulders and knees is mandatory. Head coverings are required and gowns are provided at the mosque gate for tourists.",
      },
    ],
    relatedTourSlugs: ["old-delhi-bazaar-spices-and-street-food-walk", "old-and-new-delhi-discovery-tour", "delhi-full-day-sightseeing"],
    relatedArticleSlugs: ["top-places-to-visit-in-delhi", "famous-historical-monuments-delhi", "delhi-agra-jaipur-suggested-itinerary"],
  },

  /* --------------------------------------------------------------------------
     6. DELHI: Famous Historical Monuments in Delhi
     -------------------------------------------------------------------------- */
  {
    id: "6",
    slug: "famous-historical-monuments-delhi",
    title: "Famous Historical Monuments in Delhi and the Stories Behind Them",
    subtitle:
      "A deep dive into the stone marvels built by the Tomar Rajputs, the Delhi Sultanate, the Mughals, and the British Empire.",
    excerpt:
      "Uncover the epic architectural legacy of Delhi: Humayun's Tomb, Qutub Minar, Red Fort, Safdarjung Tomb, and Agrasen ki Baoli.",
    category: "Heritage & Culture",
    categorySlug: "heritage-culture",
    tags: ["Monuments", "Humayun's Tomb", "Qutub Minar", "Red Fort", "Delhi"],
    coverImage: images.humayunsTomb,
    coverImageAlt: "Intricate Persian arches and central dome of Humayun's Tomb",
    authorId: "priya-sen",
    publishedAt: "January 30, 2025",
    updatedAt: "February 2025",
    readingTime: "6 min read",
    featured: false,
    destination: "Delhi",
    seoTitle: "Famous Historical Monuments in Delhi: History & Architecture | KranbsTour",
    seoDescription:
      "Explore Delhi's most iconic historical monuments: Humayun's Tomb, Qutub Minar, Red Fort, and Safdarjung Tomb.",
    destinationInfo: {
      destination: "Delhi NCR",
      bestTime: "October to March",
      suggestedDuration: "2 Days",
      mustSeeAttractions: "Humayun's Tomb, Qutub Minar, Red Fort, Agrasen ki Baoli",
    },
    content: [
      {
        id: "seven-cities",
        heading: "The Seven Historic Cities of Delhi",
        paragraphs: [
          "Few cities in world history have been razed, rebuilt, and reimagined as repeatedly as Delhi. From the fortified 11th-century Rajput citadel of Lal Kot to the sultanates of Mehrauli, Siri, Tughlaqabad, Jahanpanah, and Ferozabad, and finally the imperial capital of Shahjahanabad, Delhi's soil is saturated with dynastic stone.",
        ],
      },
      {
        id: "monuments-lineup",
        heading: "The Essential Monument Trilogy",
        paragraphs: [
          "**1. Qutub Minar (1192 CE):** Marking the inception of Islamic architectural rule in North India, constructed using salvaged intricately carved pillars from earlier Tomar and Chauhan temples.",
          "**2. Humayun's Tomb (1570 CE):** The supreme embodiment of high Mughal symmetry, introducing the double dome and the paradise garden to Indian architecture.",
          "**3. Red Fort (1648 CE):** The crowning jewel of Shah Jahan's palace architecture, constructed from red sandstone quarried in Rajasthan and containing the fabled Diwan-i-Khas audience hall.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you visit all three UNESCO World Heritage Sites in Delhi in one day?",
        answer:
          "Yes, a full-day private tour with an early 8:30 AM start can comfortably cover Qutub Minar, Humayun's Tomb, and the Red Fort exterior.",
      },
    ],
    relatedTourSlugs: ["delhi-mughal-heritage-trail", "delhi-unesco-monuments-tour", "delhi-full-day-sightseeing"],
    relatedArticleSlugs: ["top-places-to-visit-in-delhi", "old-delhi-travel-guide", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     7. JAIPUR: Top Places to Visit in Jaipur
     -------------------------------------------------------------------------- */
  {
    id: "7",
    slug: "top-places-to-visit-in-jaipur",
    title: "Top Places to Visit in Jaipur: Forts, Palaces & Photography Spots",
    subtitle:
      "A visual and cultural guide to the Amber Fort, Hawa Mahal, City Palace, Nahargarh sunset ramparts, and Jal Mahal.",
    excerpt:
      "From hilltop Rajput bastions to the terracotta-pink honeycomb of the Palace of Winds, here are the top places to visit in Rajasthan's royal capital.",
    category: "Jaipur Travel",
    categorySlug: "jaipur",
    tags: ["Jaipur", "Amber Fort", "Hawa Mahal", "City Palace", "Travel Guides"],
    coverImage: images.hawaMahal,
    coverImageAlt: "Hawa Mahal Palace of the Winds facade in Jaipur with pink jharokha windows",
    authorId: "vikram-rathore",
    publishedAt: "February 2, 2025",
    updatedAt: "February 2025",
    readingTime: "7 min read",
    featured: true,
    destination: "Jaipur",
    seoTitle: "Top Places to Visit in Jaipur: Royal Forts & Palaces | KranbsTour",
    seoDescription:
      "Explore the best attractions in Jaipur: Amber Fort, Hawa Mahal, City Palace, Jal Mahal, Nahargarh Fort, and Jantar Mantar.",
    destinationInfo: {
      destination: "Jaipur, Rajasthan",
      bestTime: "October to March (10°C to 25°C)",
      suggestedDuration: "2 to 3 Days",
      mustSeeAttractions: "Amber Fort, Hawa Mahal, City Palace, Nahargarh, Jal Mahal",
    },
    content: [
      {
        id: "amber-fort",
        heading: "1. Amber Fort & Palace (Amer)",
        paragraphs: [
          "Perched majestically atop the rugged Aravali hills 11 kilometers north of Jaipur, Amber Fort is a masterpiece of Rajput chivalry and Mughal elegance. Reflected in the tranquil waters of Maota Lake, the fortress features four distinct courtyards.",
          "The crowning jewel inside is the Sheesh Mahal (Hall of Mirrors). Adorned with thousands of imported concave mirrors and cut glass, a single candle flickers into an entire celestial galaxy of stars across the ceiling.",
        ],
        tip: "Avoid early morning elephant ascents for ethical animal welfare reasons; comfortable 4x4 open jeeps or private chauffeur cars ascend directly to the Sun Gate.",
      },
      {
        id: "hawa-mahal",
        heading: "2. Hawa Mahal (Palace of Winds)",
        paragraphs: [
          "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal's extraordinary five-storey pink sandstone facade mimics the crown of Lord Krishna. Featuring 953 delicately carved casements (jharokhas), the structure acted as a natural air conditioner, funnelling cool breezes during hot Rajasthan summers.",
          "It was designed specifically so royal ladies could observe lively street processions and festivals below without being seen from outside.",
        ],
      },
      {
        id: "city-palace",
        heading: "3. The Royal City Palace",
        paragraphs: [
          "Occupying one-seventh of the walled Pink City, City Palace remains the ongoing residence of the Jaipur royal family. The inner courtyard of Pritam Niwas Chowk features four stunning seasonal gates, notably the peacock-adorned Autumn Gate.",
        ],
      },
      {
        id: "nahargarh-sunset",
        heading: "4. Nahargarh Fort Sunset Viewpoint",
        paragraphs: [
          "Standing on the sheer edge of the Aravali ridge, Nahargarh ('Abode of Tigers') offers the single most dramatic panoramic overlook in Rajasthan. Visit around 5:00 PM to watch the setting sun bathe the entire pink-washed city in shades of apricot, violet, and gold.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Jaipur Composite Entry Ticket?",
        answer:
          "The Rajasthan Tourism Composite Ticket covers entry to Amber Fort, Albert Hall Museum, Hawa Mahal, Jantar Mantar, and Nahargarh Fort over two consecutive days, saving time and money.",
      },
    ],
    relatedTourSlugs: ["jaipur-city-tour", "amber-fort-jal-mahal-nahargarh-sunset", "royal-jaipur-escape-tour"],
    relatedArticleSlugs: ["jaipur-travel-guide-first-time-visitors", "best-time-to-explore-pink-city", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     8. JAIPUR: First-Time Visitors Guide
     -------------------------------------------------------------------------- */
  {
    id: "8",
    slug: "jaipur-travel-guide-first-time-visitors",
    title: "Jaipur Travel Guide for First-Time Visitors: What to See and Do",
    subtitle:
      "Everything you need to know about navigating the Pink City: itinerary, shopping for blue pottery & block prints, and local cuisine.",
    excerpt:
      "Visiting Jaipur for the first time? This comprehensive guide covers top sights, fair-trade handicraft shopping, local Rajasthani delicacies, and cultural etiquette.",
    category: "Travel Guides",
    categorySlug: "travel-guides",
    tags: ["Jaipur", "First Time", "Pink City", "Rajasthan", "Travel Guides"],
    coverImage: images.cityPalace,
    coverImageAlt: "Ornate carved archway and inner courtyards of the City Palace, Jaipur",
    authorId: "vikram-rathore",
    publishedAt: "February 5, 2025",
    updatedAt: "February 2025",
    readingTime: "7 min read",
    featured: false,
    destination: "Jaipur",
    seoTitle: "Jaipur Travel Guide for First-Time Visitors (2025) | KranbsTour",
    seoDescription:
      "A complete first-timer's guide to Jaipur: how to get around, what to wear, where to eat Dal Baati Churma, and how to shop for authentic textiles.",
    destinationInfo: {
      destination: "Jaipur, Rajasthan",
      bestTime: "October to March",
      suggestedDuration: "2 to 3 Days",
      mustSeeAttractions: "Amber Fort, City Palace, Hawa Mahal, Johari Bazaar",
    },
    content: [
      {
        id: "first-timers-overview",
        heading: "Why Jaipur is the Soul of Rajasthan",
        paragraphs: [
          "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India's first planned city. Laid out according to ancient Vedic Shilpa Shastra grid principles, the wide boulevards and terracotta-pink facades create a regal, welcoming ambiance.",
          "For first-time visitors, Jaipur offers an intoxicating blend: formidable hilltop forts overlooking desert lakes, opulent royal palaces, and vibrant artisanal guilds where block-printers, gem-cutters, and rug-weavers practice ancient family crafts.",
        ],
      },
      {
        id: "authentic-shopping",
        heading: "Authentic Handicrafts: How to Shop Smart",
        paragraphs: [
          "Jaipur is a global capital for traditional artisanal crafts. Look for certified hand-block printed cotton bedspreads and clothing from the nearby villages of Sanganer and Bagru, traditional lead-free Jaipur blue pottery, and handcrafted silver jewelry in Johari Bazaar.",
          "Our licensed KranbsTour guides take you directly to verified artisan cooperatives where master craftspeople demonstrate their technique, ensuring fair wages and authentic craftsmanship.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Jaipur safe for tourists and families?",
        answer:
          "Yes, Jaipur is one of the most tourist-friendly cities in India. Standard travel common sense applies in crowded bazaars, and private chauffeur-driven vehicles provide complete comfort.",
      },
    ],
    relatedTourSlugs: ["pink-city-palace-trail", "jaipur-block-printing-and-artisan-studio-tour", "complete-jaipur-full-day-sightseeing"],
    relatedArticleSlugs: ["top-places-to-visit-in-jaipur", "best-time-to-explore-pink-city", "delhi-agra-jaipur-suggested-itinerary"],
  },

  /* --------------------------------------------------------------------------
     9. JAIPUR: Best Time to Explore the Pink City
     -------------------------------------------------------------------------- */
  {
    id: "9",
    slug: "best-time-to-explore-pink-city",
    title: "Best Time to Explore the Pink City: Weather, Festivals & Seasons",
    subtitle:
      "When to visit Jaipur for sunny days, pleasant temperatures, and colorful cultural festivals like Diwali, Holi, and the Jaipur Literature Festival.",
    excerpt:
      "Find out the best months to visit Jaipur. Discover the crisp winter charm, colorful spring festivals, and why to avoid the extreme summer heat.",
    category: "Travel Tips",
    categorySlug: "travel-tips",
    tags: ["Jaipur", "Weather", "Festivals", "Winter in Rajasthan", "Travel Tips"],
    coverImage: images.jalMahal,
    coverImageAlt: "Jal Mahal floating palace on Man Sagar Lake at golden sunset",
    authorId: "vikram-rathore",
    publishedAt: "February 8, 2025",
    updatedAt: "February 2025",
    readingTime: "5 min read",
    featured: false,
    destination: "Jaipur",
    seoTitle: "Best Time to Visit Jaipur: Weather, Seasons & Festivals | KranbsTour",
    seoDescription:
      "When is the best time to visit Jaipur? Discover weather patterns, festival dates, and travel tips for Rajasthan.",
    destinationInfo: {
      destination: "Jaipur, Rajasthan",
      bestTime: "October to March (Winter Season)",
      suggestedDuration: "2 to 3 Days",
      mustSeeAttractions: "Amber Fort, Hawa Mahal, Jal Mahal, Nahargarh",
    },
    content: [
      {
        id: "winter-glory",
        heading: "Winter (October to March): The Peak Season",
        paragraphs: [
          "Winter in Jaipur is glorious. Crisp, clear sunny days hovering between 15°C and 25°C make exploring outdoor fortresses like Amber and Nahargarh immensely enjoyable. Evenings are pleasantly cool (8°C to 12°C), perfect for rooftop dinners accompanied by traditional Rajasthani folk music and dance.",
          "Major cultural events take place during this window, including the world-famous Jaipur Literature Festival (January) and vibrant celebrations of Diwali and Holi.",
        ],
      },
    ],
    faqs: [
      {
        question: "How hot does Jaipur get in the summer?",
        answer:
          "From late April to June, temperatures regularly reach 40°C to 44°C (104°F to 111°F). Outdoor sightseeing during midday is not recommended in these months.",
      },
    ],
    relatedTourSlugs: ["royal-jaipur-escape-tour", "complete-jaipur-full-day-sightseeing", "jaipur-city-tour"],
    relatedArticleSlugs: ["top-places-to-visit-in-jaipur", "jaipur-travel-guide-first-time-visitors", "complete-golden-triangle-travel-guide"],
  },

  /* --------------------------------------------------------------------------
     10. GOLDEN TRIANGLE: Complete Guide
     -------------------------------------------------------------------------- */
  {
    id: "10",
    slug: "complete-golden-triangle-travel-guide",
    title: "The Complete Golden Triangle Travel Guide: Delhi, Agra & Jaipur",
    subtitle:
      "Everything you need to plan India's quintessential heritage circuit: route overview, driving times, pacing, and insider tips.",
    excerpt:
      "Connecting Delhi, Agra, and Jaipur, the Golden Triangle is the premier introduction to India. Here is the ultimate guide to planning this iconic 720 km circuit.",
    category: "Golden Triangle",
    categorySlug: "golden-triangle",
    tags: ["Golden Triangle", "Delhi", "Agra", "Jaipur", "Travel Guides"],
    coverImage: images.tajArchway,
    coverImageAlt: "Taj Mahal framed through an ornate Mughal red sandstone archway",
    authorId: "rajesh-sharma",
    publishedAt: "February 12, 2025",
    updatedAt: "February 2025",
    readingTime: "9 min read",
    featured: true,
    destination: "Golden Triangle",
    seoTitle: "The Complete Golden Triangle Travel Guide (Delhi Agra Jaipur) | KranbsTour",
    seoDescription:
      "A complete guide to India's Golden Triangle: route map, driving times, top sights, packing advice, and recommended itineraries.",
    destinationInfo: {
      destination: "Delhi ➔ Agra ➔ Jaipur Circuit",
      bestTime: "October to March",
      suggestedDuration: "4 to 6 Days",
      mustSeeAttractions: "Taj Mahal, Amber Fort, Qutub Minar, Fatehpur Sikri",
    },
    content: [
      {
        id: "what-is-golden-triangle",
        heading: "What Exactly is the Golden Triangle?",
        paragraphs: [
          "The Golden Triangle is named for the triangular geographical shape formed by connecting Delhi, Agra, and Jaipur on a map of northern India. Spanning approximately 720 kilometers (450 miles) in total, it links three distinct cultural capitals across two states and the National Capital Territory.",
          "Delhi showcases the grand political succession of sultanates, Mughals, and British planners. Agra encapsulates the romantic zenith of Mughal architectural marble. Jaipur reveals the vibrant, royal color and hilltop forts of the Rajput dynasties.",
        ],
      },
      {
        id: "route-and-transit",
        heading: "The Route, Roads & Modern Expressways",
        paragraphs: [
          "In recent years, modern infrastructure has made traveling the Golden Triangle faster and more comfortable than ever before:",
          "• **Delhi to Agra (230 km):** The smooth 6-lane Yamuna Expressway cuts drive time to just 3 to 3.5 hours. Alternatively, the semi-high-speed Gatimaan Express train arrives in 100 minutes.",
          "• **Agra to Jaipur (240 km):** Approximately 4.5 hours via NH-21, with scenic en-route stops at the abandoned Mughal city of Fatehpur Sikri and the ancient stepwell of Abhaneri (Chand Baori).",
          "• **Jaipur to Delhi (260 km):** The newly opened Delhi-Mumbai Expressway section allows rapid transit back to Delhi IGI airport in 4 hours.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it better to travel the Golden Triangle by train or private car?",
        answer:
          "A private chauffeur-driven vehicle for the entire circuit is significantly more comfortable and flexible. You avoid hauling luggage through crowded train stations and can make spontaneous stops at Fatehpur Sikri and stepwells.",
      },
    ],
    relatedTourSlugs: ["classic-5-days-golden-triangle-tour", "3-days-golden-triangle-tour", "6-days-in-depth-golden-triangle-discovery"],
    relatedArticleSlugs: ["how-many-days-needed-for-golden-triangle", "delhi-agra-jaipur-suggested-itinerary", "best-time-to-visit-taj-mahal"],
  },

  /* --------------------------------------------------------------------------
     11. GOLDEN TRIANGLE: How Many Days Needed
     -------------------------------------------------------------------------- */
  {
    id: "11",
    slug: "how-many-days-needed-for-golden-triangle",
    title: "How Many Days Are Needed for a Golden Triangle Tour in India?",
    subtitle:
      "Comparing 3-day express, 4-day classic, 5-day recommended, and 7-day extended itineraries to pick the right pace for your vacation.",
    excerpt:
      "Trying to decide how many days to allocate for Delhi, Agra, and Jaipur? Here is a breakdown of what you can realistically see in 3, 4, 5, or 6+ days.",
    category: "Travel Tips",
    categorySlug: "travel-tips",
    tags: ["Golden Triangle", "Trip Planning", "Itinerary", "Pacing", "Travel Tips"],
    coverImage: images.amberFort,
    coverImageAlt: "Amber Fort ramparts overlooking Maota Lake in Rajasthan",
    authorId: "priya-sen",
    publishedAt: "February 15, 2025",
    updatedAt: "February 2025",
    readingTime: "6 min read",
    featured: false,
    destination: "Golden Triangle",
    seoTitle: "How Many Days Are Needed for Golden Triangle Tour? | KranbsTour",
    seoDescription:
      "Find out the ideal duration for your Golden Triangle tour: 3-day express vs 5-day classic vs 7-day luxury wildlife itinerary.",
    destinationInfo: {
      destination: "Delhi ➔ Agra ➔ Jaipur",
      bestTime: "October to March",
      suggestedDuration: "5 Days (Recommended)",
      mustSeeAttractions: "All primary monuments across 3 cities",
    },
    content: [
      {
        id: "pacing-options",
        heading: "Comparing the Pacing Options",
        paragraphs: [
          "• **3 Days (Express Tour):** Day 1 Delhi sights, evening drive to Agra. Day 2 Sunrise at Taj Mahal, Agra Fort, drive to Jaipur. Day 3 Amber Fort, City Palace, return to Delhi. Ideal for business travellers or tight weekend holidays.",
          "• **4 to 5 Days (Classic & Most Recommended):** 1-2 nights Delhi, 1 night Agra, 2 nights Jaipur. Allows unhurried exploration, sunset at Mehtab Bagh, stopping at Fatehpur Sikri, and leisure shopping in Jaipur.",
          "• **6 to 7 Days (In-Depth or Wildlife):** Adds 2 nights in Ranthambore National Park for Royal Bengal Tiger safaris between Agra and Jaipur.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we start in Jaipur and end in Delhi instead?",
        answer:
          "Yes! Both Jaipur (JAI) and Delhi (DEL) have international airports. The circuit works equally well in reverse order.",
      },
    ],
    relatedTourSlugs: ["classic-5-days-golden-triangle-tour", "3-days-golden-triangle-tour", "golden-triangle-with-ranthambore-tiger-safari"],
    relatedArticleSlugs: ["complete-golden-triangle-travel-guide", "delhi-agra-jaipur-suggested-itinerary", "best-time-to-visit-taj-mahal"],
  },

  /* --------------------------------------------------------------------------
     12. GOLDEN TRIANGLE: Suggested 5-Day Itinerary
     -------------------------------------------------------------------------- */
  {
    id: "12",
    slug: "delhi-agra-jaipur-suggested-itinerary",
    title: "Delhi, Agra, and Jaipur: The Ideal 5-Day Suggested Itinerary",
    subtitle:
      "A day-by-day plan crafted by local travel designers to experience the best monuments, heritage dining, and scenic routes.",
    excerpt:
      "Follow our signature 5-day Golden Triangle itinerary: Old Delhi rickshaws, sunrise at the Taj Mahal, Fatehpur Sikri ghost city, and Jaipur hilltop forts.",
    category: "Golden Triangle",
    categorySlug: "golden-triangle",
    tags: ["Golden Triangle", "5-Day Itinerary", "Suggested Route", "Heritage & Culture"],
    coverImage: images.qutubMinar,
    coverImageAlt: "Qutub Minar soaring victory tower in Delhi surrounded by ancient stone arches",
    authorId: "rajesh-sharma",
    publishedAt: "February 18, 2025",
    updatedAt: "February 2025",
    readingTime: "8 min read",
    featured: false,
    destination: "Golden Triangle",
    seoTitle: "The Ideal 5-Day Golden Triangle Itinerary (Day-by-Day) | KranbsTour",
    seoDescription:
      "A complete day-by-day 5-day Golden Triangle itinerary for Delhi, Agra, and Jaipur with driving times, hotel suggestions, and monument tips.",
    destinationInfo: {
      destination: "Delhi ➔ Agra ➔ Jaipur",
      bestTime: "October to March",
      suggestedDuration: "5 Days · 4 Nights",
      mustSeeAttractions: "Qutub Minar, Taj Mahal, Agra Fort, Fatehpur Sikri, Amber Fort",
    },
    content: [
      {
        id: "day-1",
        heading: "Day 1: Arrival in Delhi & Mughal Old City",
        paragraphs: [
          "Arrive at New Delhi's IGI airport and transfer to your hotel. In the afternoon, dive into Old Delhi with a guided cycle-rickshaw ride through Chandni Chowk spice markets and visit the colossal red sandstone Jama Masjid.",
        ],
      },
      {
        id: "day-2",
        heading: "Day 2: New Delhi Monuments & Drive to Agra",
        paragraphs: [
          "Tour Humayun's Tomb and Qutub Minar in the morning, followed by a drive past India Gate and Rashtrapati Bhavan. In the afternoon, cruise smoothly down the Yamuna Expressway to Agra (3 hours). Check into your Agra hotel and catch sunset views of the Taj Mahal from Mehtab Bagh.",
        ],
      },
      {
        id: "day-3",
        heading: "Day 3: Taj Mahal at Dawn, Agra Fort & Drive to Jaipur",
        paragraphs: [
          "Experience the breathtaking sunrise at the Taj Mahal. Return to your hotel for breakfast, then explore the royal halls of Agra Fort. In the afternoon, drive toward Jaipur with an en-route stop at Akbar's abandoned royal capital of Fatehpur Sikri.",
        ],
      },
      {
        id: "day-4",
        heading: "Day 4: Royal Palaces & Fortresses of Jaipur",
        paragraphs: [
          "Ascend to the hilltop Amber Fort and marvel at the Sheesh Mahal. Pause for photos at Jal Mahal (Water Palace), visit the City Palace and Jantar Mantar, and photograph Hawa Mahal's pink facade. End the day watching sunset from Nahargarh Fort.",
        ],
      },
      {
        id: "day-5",
        heading: "Day 5: Artisan Guilds & Return to Delhi",
        paragraphs: [
          "Enjoy a morning visit to a traditional hand-block printing studio. After an early lunch, return to Delhi via the new expressway (4 hours) for your evening flight home or onward journey.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this 5-day itinerary be tailored for our family?",
        answer:
          "Yes, all KranbsTour itineraries are 100% private. We can adjust departure times, hotel tiers, and inclusions to match your preferred travel style.",
      },
    ],
    relatedTourSlugs: ["classic-5-days-golden-triangle-tour", "6-days-in-depth-golden-triangle-discovery", "5-days-royal-golden-triangle-tour"],
    relatedArticleSlugs: ["complete-golden-triangle-travel-guide", "how-many-days-needed-for-golden-triangle", "best-time-to-visit-taj-mahal"],
  },
];

/* ----------------------------------------------------------------------------
   HELPER FUNCTIONS & SLUG ALIASES
   ---------------------------------------------------------------------------- */

export const blogSlugAliases = {
  "delhi-travel-guide": "top-places-to-visit-in-delhi",
  "delhi-sightseeing-guide": "top-places-to-visit-in-delhi",
  "top-10-places-to-visit-in-jaipur": "top-places-to-visit-in-jaipur",
  "golden-triangle-tour-guide": "complete-golden-triangle-travel-guide",
  "golden-triangle-guide": "complete-golden-triangle-travel-guide",
  "old-delhi-street-food-trail": "old-delhi-travel-guide",
  "qutub-minar-and-humayuns-tomb": "famous-historical-monuments-delhi",
  "jaipur-forts-guide-amber-nahargarh-jaigarh": "top-places-to-visit-in-jaipur",
  "shopping-in-jaipur-bazaars": "jaipur-travel-guide-first-time-visitors",
  "golden-triangle-itinerary-3-4-5-days": "delhi-agra-jaipur-suggested-itinerary",
  "first-time-golden-triangle-travel-tips": "how-many-days-needed-for-golden-triangle",
};

export const getAllArticles = () => {
  return articles.filter((a) => a.status !== "draft");
};

export const getFeaturedArticle = () => {
  return articles.find((a) => a.featured) || articles[0];
};

export const getArticleBySlug = (slug) => {
  if (!slug) return null;
  const normalized = String(slug).toLowerCase().trim();
  const direct = articles.find((a) => a.slug === normalized || a.id === normalized);
  if (direct) return direct;

  const targetSlug = blogSlugAliases[normalized];
  if (targetSlug) {
    const aliased = articles.find((a) => a.slug === targetSlug || a.id === targetSlug);
    if (aliased) return aliased;
  }

  // Fallback fuzzy match
  return articles.find((a) => a.slug.includes(normalized) || normalized.includes(a.slug)) || null;
};

export const getAllArticleSlugs = () => {
  const directSlugs = articles.filter((a) => a.status !== "draft").map((a) => a.slug);
  const aliasSlugs = Object.keys(blogSlugAliases);
  return Array.from(new Set([...directSlugs, ...aliasSlugs]));
};

export const getRelatedArticles = (currentArticle, limit = 3) => {
  if (!currentArticle) return articles.slice(0, limit);

  // Match by same destination or same category, excluding current
  const related = articles.filter(
    (a) =>
      a.id !== currentArticle.id &&
      a.slug !== currentArticle.slug &&
      (a.destination === currentArticle.destination || a.categorySlug === currentArticle.categorySlug)
  );

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  // Fill from remaining articles
  const others = articles.filter(
    (a) => a.id !== currentArticle.id && a.slug !== currentArticle.slug && !related.includes(a)
  );

  return [...related, ...others].slice(0, limit);
};

export const getArticlesByCategory = (categorySlug) => {
  if (!categorySlug || categorySlug === "all") {
    return getAllArticles();
  }
  return articles.filter(
    (a) => a.categorySlug === categorySlug || a.destination.toLowerCase().replace(/\s+/g, "-") === categorySlug
  );
};

export const searchArticles = (query) => {
  if (!query || !query.trim()) return getAllArticles();
  const q = query.toLowerCase().trim();
  return articles.filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.destination.toLowerCase().includes(q)
    );
  });
};
