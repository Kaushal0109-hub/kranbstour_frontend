import tajMahal from "@/assets/taj-mahal.jpg";
import indiaGate from "@/assets/india-gate.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import redFort from "@/assets/red-fort.jpg";
import agraFort from "@/assets/agra-fort.jpg";
import cityPalace from "@/assets/city-palace.jpg";
import humayunsTomb from "@/assets/humayuns-tomb.jpg";
import amberFort from "@/assets/amber-fort-dusk.jpg";
import tajGoldenHour from "@/assets/taj-golden-hour.jpg";
import tajArchway from "@/assets/taj-archway.jpg";
import qutubMinar from "@/assets/qutub-minar.jpg";
import jalMahal from "@/assets/jal-mahal.jpg";

const toSrc = (img) => (img && typeof img === "object" && img.src ? img.src : img);

export const images = {
  tajMahal: toSrc(tajMahal),
  indiaGate: toSrc(indiaGate),
  hawaMahal: toSrc(hawaMahal),
  redFort: toSrc(redFort),
  agraFort: toSrc(agraFort),
  cityPalace: toSrc(cityPalace),
  humayunsTomb: toSrc(humayunsTomb),
  amberFort: toSrc(amberFort),
  tajGoldenHour: toSrc(tajGoldenHour),
  tajArchway: toSrc(tajArchway),
  qutubMinar: toSrc(qutubMinar),
  jalMahal: toSrc(jalMahal),
};

export const categoryLabels = {
  agra: "Agra Tours",
  delhi: "Delhi Tours",
  jaipur: "Jaipur Tours",
  "golden-triangle": "Golden Triangle",
};

export const isTourCategory = (value) =>
  typeof value === "string" && value in categoryLabels;

export const destinations = [
  {
    id: "agra",
    city: "Agra",
    title: "Agra",
    tagline: "The City of Love",
    description:
      "Discover the timeless beauty of the Taj Mahal and the magnificent Mughal heritage.",
    cta: "Explore Agra",
    landmark: "Taj Mahal",
    image: toSrc(tajArchway),
    href: "/agra-tours",
  },
  {
    id: "delhi",
    city: "Delhi",
    title: "Delhi",
    tagline: "Where History Meets Modernity",
    description:
      "Experience historic monuments, vibrant culture, and the energy of India's capital.",
    cta: "Explore Delhi",
    landmark: "Qutub Minar",
    image: toSrc(qutubMinar),
    href: "/delhi-tours",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    title: "Jaipur",
    tagline: "The Royal Pink City",
    description:
      "Discover magnificent palaces, colourful streets, and Rajasthan's royal heritage.",
    cta: "Explore Jaipur",
    landmark: "Jal Mahal",
    image: toSrc(jalMahal),
    href: "/jaipur-tours",
  },
];

/** Things to explore per city, shown in the destination discovery tabs. */
export const exploreSpots = {
  agra: [
    {
      title: "Taj Mahal",
      text: "The marble wonder glowing gold at sunset and soft pink at dawn.",
      image: toSrc(tajGoldenHour),
      alt: "Taj Mahal at golden hour across the reflecting pool",
    },
    {
      title: "Agra Fort",
      text: "Red sandstone palaces with views across the Yamuna to the Taj.",
      image: toSrc(agraFort),
      alt: "Agra Fort ramparts",
    },
    {
      title: "Mughal Heritage",
      text: "Carved arches, gardens and inlay craft from the Mughal age.",
      image: toSrc(tajArchway),
      alt: "The Taj Mahal framed by a carved sandstone arch",
    },
  ],
  delhi: [
    {
      title: "India Gate",
      text: "The grand war memorial at the heart of New Delhi's boulevards.",
      image: toSrc(indiaGate),
      alt: "India Gate lit up at blue hour",
    },
    {
      title: "Red Fort",
      text: "The Mughal citadel beside the lively lanes of Old Delhi.",
      image: toSrc(redFort),
      alt: "Red Fort's Lahori Gate",
    },
    {
      title: "Humayun's Tomb",
      text: "The garden tomb that inspired the Taj Mahal itself.",
      image: toSrc(humayunsTomb),
      alt: "Humayun's Tomb reflected in its water channel",
    },
  ],
  jaipur: [
    {
      title: "Hawa Mahal",
      text: "The honeycomb Palace of Winds in pink sandstone.",
      image: toSrc(hawaMahal),
      alt: "Hawa Mahal's pink facade",
    },
    {
      title: "City Palace",
      text: "Royal courtyards and the famous jewel-toned Peacock Gate.",
      image: toSrc(cityPalace),
      alt: "Peacock gate at the City Palace, Jaipur",
    },
    {
      title: "Amber Fort",
      text: "A hilltop fort of mirrors and ramparts above Maota Lake.",
      image: toSrc(amberFort),
      alt: "Amber Fort reflected in Maota Lake at dusk",
    },
  ],
};

const commonInclusions = [
  "Private air-conditioned car with chauffeur",
  "Licensed English-speaking local guide",
  "Bottled water & hand-picked refreshments",
  "All tolls, parking and driver allowances",
];

const commonExclusions = [
  "Monument entrance tickets (can be arranged upon request)",
  "Personal expenses & gratuities",
  "Flights and train tickets (unless specified)",
  "Anything not mentioned in inclusions",
];

const rawPackages = [
  /* ========================================================================
     AGRA TOURS
     ======================================================================== */
  {
    id: "sunrise-taj",
    category: "agra",
    title: "Sunrise at the Taj Mahal",
    duration: "1 Day",
    durationType: "half-day",
    durationHours: 6,
    tourType: "Sunrise",
    startingPoint: "Agra",
    route: "Taj Mahal → Agra Fort → Artisan Walk",
    summary: "Witness the marble glow pink at dawn, then explore Agra Fort at leisure.",
    overview:
      "A gently paced day that begins in the soft light of sunrise at the Taj Mahal, before the crowds arrive. Continue to the red sandstone grandeur of Agra Fort and end with a Mughal lunch overlooking the city.",
    price: 6499,
    image: toSrc(tajMahal),
    imageAlt: "Taj Mahal at sunrise reflected in the long pool",
    highlights: [
      "Sunrise entry to the Taj Mahal with historian",
      "Guided walk through Agra Fort's palaces",
      "Traditional Mughlai lunch at a heritage restaurant",
      "Pietra dura marble inlay artisan workshop visit",
    ],
    pickup: "Hotel or Railway Station pickup in Agra",
    itinerary: [
      {
        day: "Dawn",
        title: "Taj Mahal at sunrise",
        detail: "Early pick-up and a quiet, guided first light at the Taj Mahal.",
      },
      {
        day: "Morning",
        title: "Agra Fort",
        detail: "Explore palaces, courtyards and the view Shah Jahan gazed upon.",
      },
      {
        day: "Afternoon",
        title: "Mughal flavours",
        detail: "Lunch, a marble inlay workshop, and drop-off at your hotel.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "agra-heritage",
    category: "agra",
    title: "Agra Mughal Heritage Escape",
    duration: "2 Days · 1 Night",
    durationType: "multi-day",
    durationHours: 36,
    tourType: "Heritage",
    startingPoint: "Agra",
    route: "Taj Mahal (Sunset & Dawn) → Agra Fort → Baby Taj",
    summary: "Two unhurried days among Agra's Mughal masterpieces and riverside views.",
    overview:
      "Stay overnight in Agra to experience the Taj Mahal at both sunset and sunrise, explore Agra Fort, and discover the jewel-like Itmad-ud-Daulah, often called the Baby Taj.",
    price: 14999,
    image: toSrc(agraFort),
    imageAlt: "Agra Fort ramparts with the Taj Mahal across the river",
    highlights: [
      "Taj Mahal at sunset (Mehtab Bagh) and sunrise",
      "Itmad-ud-Daulah (Baby Taj) marble mausoleum",
      "In-depth Agra Fort royal quarters exploration",
      "1 Night boutique heritage hotel stay with breakfast",
    ],
    pickup: "Agra Hotel or Train Station pickup included",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & sunset",
        detail: "Check in, visit Agra Fort, and watch the Taj turn gold from Mehtab Bagh.",
      },
      {
        day: "Day 2",
        title: "Sunrise & Baby Taj",
        detail: "Sunrise at the Taj Mahal, breakfast, then Itmad-ud-Daulah before departure.",
      },
    ],
    inclusions: [...commonInclusions, "1 night boutique hotel with breakfast"],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "taj-agra-fort",
    category: "agra",
    title: "Taj Mahal & Agra Fort Private Day Tour",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Private",
    startingPoint: "Agra",
    route: "Taj Mahal → Agra Fort → Local Bazaars",
    summary: "The quintessential Agra discovery covering two world-famous UNESCO Heritage sites.",
    overview:
      "Experience the pinnacle of Mughal architecture in one seamless, private guided tour. Marvel at the Taj Mahal's symmetrical beauty, explore the red sandstone courtyards of Agra Fort, and browse Agra's heritage craft markets.",
    price: 5999,
    image: toSrc(tajArchway),
    imageAlt: "The Taj Mahal framed by an ornate archway",
    highlights: [
      "Guided private visit to Taj Mahal and Agra Fort",
      "Fascinating stories of Mughal court intrigues",
      "Air-conditioned chauffeur-driven vehicle for the day",
      "Stroll through old Agra spice and craft bazaars",
    ],
    pickup: "Pickup and drop-off from any Agra location",
    itinerary: [
      {
        day: "Morning",
        title: "Taj Mahal Exploration",
        detail: "Comprehensive guided tour of the main mausoleum and riverfront plinth.",
      },
      {
        day: "Midday",
        title: "Agra Fort",
        detail: "Explore Diwan-i-Am, Diwan-i-Khas, and Jahangir's Palace with your guide.",
      },
      {
        day: "Afternoon",
        title: "Local Heritage & Drop-off",
        detail: "Browse local handicrafts and return to your accommodation or station.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "taj-baby-taj-mehtab",
    category: "agra",
    title: "Taj Mahal, Baby Taj & Mehtab Bagh Sunset",
    duration: "1 Day",
    durationType: "day",
    durationHours: 9,
    tourType: "Heritage",
    startingPoint: "Agra",
    route: "Taj Mahal → Itmad-ud-Daulah → Mehtab Bagh",
    summary: "A photographer's dream tour culminating in sunset views of the Taj across the Yamuna.",
    overview:
      "Beyond the Taj Mahal, Agra holds hidden architectural gems. This tour includes the delicate marble lace of Itmad-ud-Daulah (Baby Taj) and ends at the riverside gardens of Mehtab Bagh for a peaceful sunset perspective.",
    price: 6999,
    image: toSrc(tajGoldenHour),
    imageAlt: "Taj Mahal at sunset from across the Yamuna River",
    highlights: [
      "Golden hour sunset across the Yamuna at Mehtab Bagh",
      "Delicate marble inlay work at Itmad-ud-Daulah",
      "Complete guided exploration of the Taj Mahal",
      "Photography assistance at the best scenic viewpoints",
    ],
    pickup: "Hotel or Railway Station pickup included",
    itinerary: [
      {
        day: "Morning",
        title: "Taj Mahal Tour",
        detail: "Marvel at the marble monument with detailed architectural narration.",
      },
      {
        day: "Afternoon",
        title: "Baby Taj (Itmad-ud-Daulah)",
        detail: "Admire the delicate Persian-style pietra dura inlay work.",
      },
      {
        day: "Sunset",
        title: "Mehtab Bagh Views",
        detail: "Unobstructed sunset reflections of the Taj Mahal across the river.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "agra-gatimaan-express",
    category: "agra",
    title: "Same Day Agra Tour by Gatimaan Express from Delhi",
    duration: "1 Day",
    durationType: "day",
    durationHours: 12,
    tourType: "Express",
    startingPoint: "Delhi (Nizamuddin Station)",
    route: "Delhi → Fast Train → Taj Mahal → Agra Fort → Delhi",
    summary: "Travel from Delhi to Agra on India's fastest train for a hassle-free day tour.",
    overview:
      "Board the air-conditioned Gatimaan Express in Delhi and arrive in Agra in just 100 minutes. Enjoy breakfast on board, meet your private guide and car on arrival, visit the Taj Mahal and Agra Fort, and return to Delhi by dinner.",
    price: 8999,
    image: toSrc(tajMahal),
    imageAlt: "Taj Mahal reflected in the morning light",
    highlights: [
      "Fastest train travel (Gatimaan Express) with reserved AC seats",
      "Hot meals served on board the train",
      "Private AC car and guide waiting at Agra Cantt station",
      "Guided tours of Taj Mahal and Agra Fort with lunch",
    ],
    pickup: "Delhi hotel transfer to railway station included",
    itinerary: [
      {
        day: "07:00 AM",
        title: "Delhi to Agra Train",
        detail: "Board Gatimaan Express with onboard breakfast; arrive in Agra at 09:50 AM.",
      },
      {
        day: "10:30 AM",
        title: "Taj Mahal & Agra Fort",
        detail: "Private guided visits to both UNESCO monuments with lunch break.",
      },
      {
        day: "05:50 PM",
        title: "Return to Delhi",
        detail: "Evening train back to Nizamuddin station with onboard dinner.",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Roundtrip Gatimaan Express AC train tickets",
      "Onboard train meals",
    ],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "agra-full-day",
    category: "agra",
    title: "Full Day Agra Sightseeing & Heritage Walk",
    duration: "1 Day",
    durationType: "day",
    durationHours: 10,
    tourType: "Cultural",
    startingPoint: "Agra",
    route: "Taj Mahal → Agra Fort → Sikandra → Kinari Bazaar",
    summary: "A deep dive into Agra's history including Akbar's grand tomb at Sikandra.",
    overview:
      "Discover Agra's imperial legacy beyond the surface. Visit the Taj Mahal, explore Agra Fort, discover Emperor Akbar's massive red sandstone and white marble tomb at Sikandra, and wander through old Kinari Bazaar.",
    price: 7499,
    image: toSrc(agraFort),
    imageAlt: "Agra Fort red sandstone pavilion",
    highlights: [
      "Akbar's magnificent garden tomb at Sikandra",
      "Private guided visits to Taj Mahal and Agra Fort",
      "Authentic Mughlai culinary lunch experience",
      "Atmospheric stroll through historical spice and textile markets",
    ],
    pickup: "Pickup from any Agra hotel or residence",
    itinerary: [
      {
        day: "Morning",
        title: "Taj Mahal & Agra Fort",
        detail: "Explore the two premier monuments with expert commentary.",
      },
      {
        day: "Midday",
        title: "Heritage Lunch & Sikandra",
        detail: "Dine on traditional flavors, then visit Akbar's serene tomb complex.",
      },
      {
        day: "Late Afternoon",
        title: "Kinari Bazaar Heritage Walk",
        detail: "Experience the vibrant old city lanes before evening drop-off.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "taj-photography",
    category: "agra",
    title: "Taj Mahal Golden Hour & Photography Tour",
    duration: "Half Day",
    durationType: "half-day",
    durationHours: 5,
    tourType: "Photography",
    startingPoint: "Agra",
    route: "Taj Mahal (East Gate) → Riverfront Vantage Points",
    summary: "Curated for photography lovers seeking unique compositions and magic light.",
    overview:
      "Capture the Taj Mahal at its most photogenic. Guided by a local expert who knows the exact angles, symmetry reflections, and off-beat riverbank viewpoints where you can capture memorable photographs without crowds in your frame.",
    price: 5499,
    image: toSrc(tajGoldenHour),
    imageAlt: "Golden hour view of the Taj Mahal",
    highlights: [
      "Early morning entrance for the purest golden light",
      "Assistance with optimal photography angles and reflections",
      "Access to lesser-known viewpoints along the Yamuna",
      "Private transport and relaxed, unhurried pacing",
    ],
    pickup: "Early morning pickup from your Agra hotel",
    itinerary: [
      {
        day: "05:30 AM",
        title: "First Light Entry",
        detail: "Capture pristine reflection pool shots before crowds gather.",
      },
      {
        day: "08:30 AM",
        title: "Architectural Framing",
        detail: "Shoot detailed marble inlays, minaret perspectives, and archways.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "agra-from-jaipur",
    category: "agra",
    title: "Private Agra Tour from Jaipur via Fatehpur Sikri",
    duration: "1 Day",
    durationType: "day",
    durationHours: 14,
    tourType: "Private",
    startingPoint: "Jaipur",
    route: "Jaipur → Fatehpur Sikri → Taj Mahal → Agra Fort → Jaipur",
    summary: "Seamless private day excursion from the Pink City to the Taj Mahal.",
    overview:
      "Depart Jaipur early in a comfortable private vehicle. Stop en route at the UNESCO-listed ghost city of Fatehpur Sikri, explore the Taj Mahal and Agra Fort with a dedicated local guide, and return to Jaipur the same night.",
    price: 9999,
    image: toSrc(tajArchway),
    imageAlt: "Carved archway looking towards the Taj",
    highlights: [
      "Roundtrip private chauffeured transfer from Jaipur",
      "En-route guided tour of Emperor Akbar's Fatehpur Sikri",
      "Afternoon guided tours of Taj Mahal and Agra Fort",
      "Buffet lunch in Agra included",
    ],
    pickup: "Jaipur hotel pickup at 06:00 AM",
    itinerary: [
      {
        day: "06:00 AM",
        title: "Drive Jaipur to Agra",
        detail: "Scenic morning highway drive with stop at Fatehpur Sikri.",
      },
      {
        day: "11:30 AM",
        title: "Agra Monuments Tour",
        detail: "Guided visits to Taj Mahal and Agra Fort with lunch.",
      },
      {
        day: "04:30 PM",
        title: "Return Drive to Jaipur",
        detail: "Comfortable drive back, arriving in Jaipur by 08:30 PM.",
      },
    ],
    inclusions: [...commonInclusions, "Buffet lunch in Agra"],
    exclusions: commonExclusions,
    featured: false,
  },

  /* ========================================================================
     DELHI TOURS
     ======================================================================== */
  {
    id: "old-new-delhi",
    category: "delhi",
    title: "Old & New Delhi Discovery",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Private",
    startingPoint: "Delhi",
    route: "Red Fort → Chandni Chowk → India Gate → Humayun's Tomb",
    summary: "From the Red Fort's ramparts to the grand boulevards of Lutyens' Delhi.",
    overview:
      "Experience two Delhis in a single day: the bustling lanes of Old Delhi around the Red Fort and Jama Masjid, and the stately avenues of New Delhi with India Gate and Humayun's Tomb.",
    price: 4999,
    image: toSrc(redFort),
    imageAlt: "Red Fort's Lahori Gate in golden afternoon light",
    highlights: [
      "Red Fort & Chandni Chowk bazaar exploration",
      "Cycle rickshaw through Old Delhi spice market",
      "India Gate & Kartavya Path imperial drive",
      "UNESCO-listed Humayun's Tomb gardens",
    ],
    pickup: "Pickup from any hotel or airport in Delhi NCR",
    itinerary: [
      {
        day: "Morning",
        title: "Old Delhi",
        detail: "Red Fort, Jama Masjid, and a rickshaw ride through spice markets.",
      },
      {
        day: "Afternoon",
        title: "New Delhi",
        detail: "India Gate, Rashtrapati Bhavan views, and Humayun's Tomb at golden hour.",
      },
    ],
    inclusions: [...commonInclusions, "Cycle rickshaw ride in Old Delhi"],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "delhi-mughal-trail",
    category: "delhi",
    title: "Delhi Mughal Heritage Trail",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Heritage",
    startingPoint: "Delhi",
    route: "Humayun's Tomb → Lodhi Gardens → Nizamuddin Dargah",
    summary: "Gardens, tombs and timeless architecture across India's historic capital.",
    overview:
      "A curated heritage day for architecture lovers, tracing Delhi's Mughal legacy through Humayun's Tomb, the Sufi shrine of Nizamuddin and the serene Lodhi Gardens.",
    price: 5499,
    image: toSrc(humayunsTomb),
    imageAlt: "Humayun's Tomb reflected in its garden water channel",
    highlights: [
      "Humayun's Tomb with expert historian guide",
      "Nizamuddin Dargah evening Sufi qawwali atmosphere",
      "Lodhi Gardens heritage walk among 15th-century tombs",
      "Curated Delhi street-food or heritage lunch tasting",
    ],
    pickup: "Delhi hotel or airport pickup",
    itinerary: [
      {
        day: "Morning",
        title: "Humayun's Tomb",
        detail: "An in-depth guided visit to the garden tomb that inspired the Taj.",
      },
      {
        day: "Afternoon",
        title: "Lodhi Gardens",
        detail: "A shaded walk among 15th-century tombs, followed by lunch.",
      },
      {
        day: "Evening",
        title: "Nizamuddin",
        detail: "Soulful qawwali at the dargah and a street-food tasting trail.",
      },
    ],
    inclusions: [...commonInclusions, "Food tasting experience"],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "old-delhi-heritage-walk",
    category: "delhi",
    title: "Old Delhi Bazaar, Spices & Street Food Walk",
    duration: "Half Day",
    durationType: "half-day",
    durationHours: 4,
    tourType: "Walking",
    startingPoint: "Old Delhi (Jama Masjid)",
    route: "Jama Masjid → Dariba Kalan → Khari Baoli Spice Market",
    summary: "An exhilarating sensory walk through 350 years of Shahjahanabad heritage.",
    overview:
      "Venture deep into the medieval walled city of Old Delhi on foot and by cycle rickshaw. Smell the fragrant heaps at Asia's largest spice market, admire ornate old haveli doorways, and taste legendary century-old street snacks.",
    price: 3499,
    image: toSrc(redFort),
    imageAlt: "Bustling lanes and red walls of Old Delhi",
    highlights: [
      "Cycle rickshaw ride through bustling Chandni Chowk",
      "Rooftop panoramic view of Khari Baoli spice market",
      "Curated tastings of jalebis, kachoris, and chai",
      "Engaging cultural narration from an Old Delhi native guide",
    ],
    pickup: "Hotel transfer to starting point included",
    itinerary: [
      {
        day: "Start",
        title: "Jama Masjid & Rickshaw Ride",
        detail: "Visit India's grand congregational mosque and hop on a rickshaw.",
      },
      {
        day: "Walk",
        title: "Bazaars & Spice Market",
        detail: "Wander jewelers' lane and the aromatic wholesale spice market.",
      },
    ],
    inclusions: [...commonInclusions, "Street food tastings & rickshaw ride"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "new-delhi-imperial",
    category: "delhi",
    title: "Lutyens' Delhi & Monument Trail",
    duration: "1 Day",
    durationType: "day",
    durationHours: 7,
    tourType: "Private",
    startingPoint: "Delhi",
    route: "Qutub Minar → Humayun's Tomb → India Gate → Bangla Sahib",
    summary: "The majestic highlights of southern and central New Delhi in total comfort.",
    overview:
      "Explore Delhi's most striking architectural landmarks in a private AC car. Admire the soaring minaret of Qutub Minar, the Mughal geometry of Humayun's Tomb, and experience the warm community kitchen of Gurudwara Bangla Sahib.",
    price: 4799,
    image: toSrc(qutubMinar),
    imageAlt: "Qutub Minar tower against clear blue sky",
    highlights: [
      "Qutub Minar UNESCO World Heritage complex",
      "Humayun's Tomb and Persian-style water gardens",
      "Gurudwara Bangla Sahib and community kitchen (Langar)",
      "Drive along India Gate and the central government vista",
    ],
    pickup: "Pickup from any hotel or airport in Delhi NCR",
    itinerary: [
      {
        day: "Morning",
        title: "Qutub Minar Complex",
        detail: "Explore the 12th-century victory tower and iron pillar.",
      },
      {
        day: "Afternoon",
        title: "Imperial Monuments & Temple",
        detail: "Visit Humayun's Tomb, India Gate, and the sacred Sikh shrine.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "delhi-spiritual-wonders",
    category: "delhi",
    title: "Spiritual Delhi – Temples, Shrines & Art Walk",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Cultural",
    startingPoint: "Delhi",
    route: "Lotus Temple → Akshardham → Bangla Sahib → Lodhi Murals",
    summary: "A peaceful, inspiring journey through Delhi's rich spiritual and modern art traditions.",
    overview:
      "Discover the diverse faiths that thrive side by side in India's capital. Marvel at the lotus-shaped Baha'i House of Worship, the grand carved stone pavilions of Akshardham, and conclude with the vibrant open-air murals of Lodhi Art District.",
    price: 4499,
    image: toSrc(indiaGate),
    imageAlt: "Monumental architecture of Delhi",
    highlights: [
      "Lotus Temple iconic white marble petal structure",
      "Akshardham Temple intricate stone carvings and gardens",
      "Langar experience at Gurudwara Bangla Sahib",
      "Contemporary street art walk in Lodhi Colony",
    ],
    pickup: "Door-to-door hotel pickup in Delhi",
    itinerary: [
      {
        day: "Morning",
        title: "Lotus Temple & Bangla Sahib",
        detail: "Experience the tranquility of two major spiritual sanctuaries.",
      },
      {
        day: "Afternoon",
        title: "Akshardham & Open-Air Art",
        detail: "Tour the grand Hindu temple complex followed by a mural walk.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "delhi-photography-tour",
    category: "delhi",
    title: "Delhi Heritage Architecture & Photography Tour",
    duration: "Half Day",
    durationType: "half-day",
    durationHours: 5,
    tourType: "Photography",
    startingPoint: "Delhi",
    route: "Agrasen ki Baoli → Lodhi Gardens → Safdarjung Tomb",
    summary: "Capture Delhi's most striking geometric stepwells and Mughal domes in golden light.",
    overview:
      "A photography-focused trail designed for enthusiasts seeking symmetry, shadows, and heritage textures. Visit the dramatic 14th-century stepwell Agrasen ki Baoli, the ancient tombs of Lodhi Gardens, and Safdarjung Tomb at golden hour.",
    price: 3999,
    image: toSrc(humayunsTomb),
    imageAlt: "Symmetrical Mughal garden architecture",
    highlights: [
      "Agrasen ki Baoli deep ancient stepwell angles",
      "Lodhi Gardens shaded arched stone corridors",
      "Golden hour lighting at Safdarjung's red-and-buff sandstone",
      "Guidance from a photography-savvy local host",
    ],
    pickup: "Central Delhi hotel pickup and drop-off",
    itinerary: [
      {
        day: "Afternoon",
        title: "Stepwell & Lodhi Walk",
        detail: "Capture dramatic perspectives at the stepwell and medieval tombs.",
      },
      {
        day: "Golden Hour",
        title: "Safdarjung Sunset",
        detail: "Warm golden light reflections on the final great Mughal tomb.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "delhi-full-day-custom",
    category: "delhi",
    title: "Private Custom Delhi Sightseeing Experience",
    duration: "1 Day",
    durationType: "day",
    durationHours: 9,
    tourType: "Private",
    startingPoint: "Delhi",
    route: "Tailored to your preferences (Select up to 5 monuments)",
    summary: "A 100% personalized tour crafted around your personal interests and pace.",
    overview:
      "Choose exactly what you wish to see with a dedicated chauffeur and guide at your service for 9 hours. Whether your focus is shopping for textiles, exploring hidden stepwells, tasting gourmet food, or visiting museums, we shape the day around you.",
    price: 5999,
    image: toSrc(qutubMinar),
    imageAlt: "Qutub Minar heritage park in Delhi",
    highlights: [
      "Full flexibility to choose your monuments and stops",
      "Private air-conditioned vehicle at your disposal for 9 hours",
      "Personalized recommendations from an experienced guide",
      "Assistance with shopping, dining, and admission tickets",
    ],
    pickup: "Any hotel, airport, or train station in Delhi NCR",
    itinerary: [
      {
        day: "Flexible",
        title: "Custom Day Plan",
        detail: "Consult with your guide in the morning and explore at your rhythm.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "delhi-agra-combined",
    category: "delhi",
    title: "Delhi & Agra Same-Day Express Tour",
    duration: "1 Day",
    durationType: "day",
    durationHours: 13,
    tourType: "Express",
    startingPoint: "Delhi",
    route: "Delhi → Yamuna Expressway → Taj Mahal → Agra Fort → Delhi",
    summary: "See the Taj Mahal and Agra Fort in a private car with same-day return to Delhi.",
    overview:
      "Ideal for business travelers or short-stay visitors in Delhi. Travel via the modern Yamuna Expressway in a comfortable private sedan, enjoy priority guided visits to the Taj Mahal and Agra Fort, and return to Delhi by late evening.",
    price: 8999,
    image: toSrc(indiaGate),
    imageAlt: "India Gate memorial at blue hour",
    highlights: [
      "Door-to-door private highway transfer from Delhi to Agra",
      "Complete guided visits to the Taj Mahal and Agra Fort",
      "Buffet lunch at a reputable multi-cuisine heritage hotel",
      "Comfortable return drive back to Delhi the same day",
    ],
    pickup: "Delhi NCR hotel pickup at 06:00 AM",
    itinerary: [
      {
        day: "06:00 AM",
        title: "Departure from Delhi",
        detail: "Fast morning drive along the Yamuna Expressway.",
      },
      {
        day: "10:00 AM",
        title: "Taj Mahal & Agra Fort",
        detail: "Private guided visits to both world-famous monuments with lunch.",
      },
      {
        day: "04:00 PM",
        title: "Return to Delhi",
        detail: "Comfortable drive back, arriving at your hotel by 08:00 PM.",
      },
    ],
    inclusions: [...commonInclusions, "Buffet lunch in Agra"],
    exclusions: commonExclusions,
    featured: false,
  },

  /* ========================================================================
     JAIPUR TOURS
     ======================================================================== */
  {
    id: "royal-jaipur",
    category: "jaipur",
    title: "Royal Jaipur Escape",
    duration: "2 Days · 1 Night",
    durationType: "multi-day",
    durationHours: 36,
    tourType: "Royal",
    startingPoint: "Jaipur",
    route: "Amber Fort → City Palace → Hawa Mahal → Nahargarh",
    summary: "Forts on the hills, palaces in the city, and the glow of the Pink City.",
    overview:
      "Discover Jaipur's royal heart: Amber Fort high above Maota Lake, the City Palace, the observatory of Jantar Mantar, and the honeycomb facade of Hawa Mahal.",
    price: 15999,
    image: toSrc(amberFort),
    imageAlt: "Amber Fort reflected in Maota Lake at dusk",
    highlights: [
      "Amber Fort & Sheesh Mahal mirror palace",
      "City Palace royal courtyards & museum",
      "Hawa Mahal photo stop and Johari Bazaar walk",
      "Evening sunset at Nahargarh hilltop fort viewpoint",
    ],
    pickup: "Jaipur airport, railway station, or hotel pickup",
    itinerary: [
      {
        day: "Day 1",
        title: "Amber & Nahargarh",
        detail: "Amber Fort in the morning, Jal Mahal views, and sunset from Nahargarh.",
      },
      {
        day: "Day 2",
        title: "The Pink City",
        detail: "City Palace, Jantar Mantar, Hawa Mahal and the bazaars of Johari.",
      },
    ],
    inclusions: [...commonInclusions, "1 night heritage haveli stay with breakfast"],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "pink-city-palaces",
    category: "jaipur",
    title: "Pink City Palace Trail",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Heritage",
    startingPoint: "Jaipur",
    route: "City Palace → Hawa Mahal → Jantar Mantar → Bazaars",
    summary: "Peacock gates, painted courtyards and Jaipur's most beautiful palaces.",
    overview:
      "A day devoted to Jaipur's palatial architecture, from the jewel-toned gates of the City Palace to the latticed windows of Hawa Mahal and the colourful markets in between.",
    price: 5999,
    image: toSrc(cityPalace),
    imageAlt: "Peacock gate courtyard at the City Palace, Jaipur",
    highlights: [
      "City Palace & Peacock Gate courtyard",
      "Hawa Mahal latticed facade exploration",
      "Jantar Mantar UNESCO astronomical instruments",
      "Traditional Rajasthani thali lunch experience",
    ],
    pickup: "Jaipur hotel pickup and drop-off",
    itinerary: [
      {
        day: "Morning",
        title: "City Palace",
        detail: "Explore the Chandra Mahal courtyards and the famous Peacock Gate.",
      },
      {
        day: "Afternoon",
        title: "Hawa Mahal & bazaars",
        detail: "The Palace of Winds, a textile workshop and Johari Bazaar.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "jaipur-full-day",
    category: "jaipur",
    title: "Complete Jaipur Full-Day Sightseeing",
    duration: "1 Day",
    durationType: "day",
    durationHours: 9,
    tourType: "Private",
    startingPoint: "Jaipur",
    route: "Amber Fort → Jal Mahal → City Palace → Hawa Mahal",
    summary: "The ultimate one-day Jaipur tour covering forts, water palaces, and royal museums.",
    overview:
      "Cover all of Jaipur's signature landmarks in a single well-paced day. Travel in a private AC car to the hill fortress of Amber, capture pictures by the floating Water Palace, tour the City Palace, and admire Hawa Mahal.",
    price: 6499,
    image: toSrc(hawaMahal),
    imageAlt: "Hawa Mahal pink sandstone facade in Jaipur",
    highlights: [
      "Amber Fort majestic hilltop palace & Sheesh Mahal",
      "Picturesque photo stop at the floating Jal Mahal",
      "City Palace royal museum and courtyards",
      "Private air-conditioned car and approved guide all day",
    ],
    pickup: "Pickup from any Jaipur hotel or residence",
    itinerary: [
      {
        day: "09:00 AM",
        title: "Amber Fort & Jal Mahal",
        detail: "Ascend to Amber Fort, explore mirror halls, and stop by Jal Mahal.",
      },
      {
        day: "01:30 PM",
        title: "City Palace & Hawa Mahal",
        detail: "Enjoy lunch, then tour the royal palace and iconic Palace of Winds.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "amber-fort-heritage",
    category: "jaipur",
    title: "Amber Fort, Jal Mahal & Nahargarh Sunset",
    duration: "1 Day",
    durationType: "day",
    durationHours: 8,
    tourType: "Heritage",
    startingPoint: "Jaipur",
    route: "Panna Meena Stepwell → Amber Fort → Jal Mahal → Nahargarh",
    summary: "Hilltop fortresses, ancient stepwells, and sunset over the entire Pink City.",
    overview:
      "Focus on the dramatic hill architecture surrounding Jaipur. Discover the geometric stone stairs of Panna Meena Kund, tour the expansive ramparts of Amber Fort, and finish with a golden sunset from Nahargarh Fort.",
    price: 5499,
    image: toSrc(amberFort),
    imageAlt: "Amber Fort above Maota Lake",
    highlights: [
      "Panna Meena Kund 16th-century geometric stepwell",
      "Amber Fort grand courtyards and Ganesh Pol gate",
      "Relaxed view of the lakeside Jal Mahal",
      "Sunset drinks and panoramic city view at Nahargarh Fort",
    ],
    pickup: "Jaipur hotel pickup at 09:30 AM",
    itinerary: [
      {
        day: "Morning",
        title: "Stepwell & Amber Fort",
        detail: "Photograph the stepwell and explore Amber Fort's regal apartments.",
      },
      {
        day: "Late Afternoon",
        title: "Nahargarh Sunset",
        detail: "Drive up the Aravalli ridge for a sunset view over the Pink City.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "jaipur-walking-bazaars",
    category: "jaipur",
    title: "Pink City Heritage Walk & Johari Bazaars",
    duration: "Half Day",
    durationType: "half-day",
    durationHours: 4,
    tourType: "Walking",
    startingPoint: "Jaipur (New Gate)",
    route: "Bapu Bazaar → Johari Bazaar → Traditional Sweet Shops",
    summary: "An authentic on-foot immersion through Jaipur's planned pink avenues.",
    overview:
      "Stroll through the UNESCO-inscribed walled city with a passionate local guide. Meet artisans working in brass, block-printing, and jewelry, admire hidden havelis, and taste fresh lassi and pyaaz kachoris.",
    price: 3499,
    image: toSrc(hawaMahal),
    imageAlt: "Colorful streets of the Pink City Jaipur",
    highlights: [
      "Guided walk through historic craft and spice lanes",
      "Interactions with traditional tie-dye and jewelry artisans",
      "Sample famous Jaipur kachoris, lassi, and sweets",
      "Fascinating insights into Jaipur's 1727 urban planning",
    ],
    pickup: "Hotel transfer to starting point included",
    itinerary: [
      {
        day: "Morning or Afternoon",
        title: "Walled City Walk",
        detail: "Walk through Bapu Bazaar, Johari Bazaar, and lively street corners.",
      },
    ],
    inclusions: [...commonInclusions, "Snack tastings and walking guide"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "jaipur-craft-textiles",
    category: "jaipur",
    title: "Jaipur Block-Printing & Artisan Studio Tour",
    duration: "1 Day",
    durationType: "day",
    durationHours: 7,
    tourType: "Cultural",
    startingPoint: "Jaipur",
    route: "Sanganer/Bagru Village → Artisan Workshop → Jaipur",
    summary: "Hands-on textile printing workshop with master craftspeople in Bagru.",
    overview:
      "Discover the century-old art of wooden block printing. Visit rural printing villages where families have practiced natural-dye hand-block printing for generations. Carve out time to print your own cotton scarf to take home.",
    price: 4999,
    image: toSrc(cityPalace),
    imageAlt: "Royal patterns and craft details in Jaipur",
    highlights: [
      "Interactive block-printing workshop using natural dyes",
      "Keep the custom-printed scarf or tote you make",
      "Visit the handmade paper and textile drying fields",
      "Private AC car and guide for a hassle-free rural excursion",
    ],
    pickup: "Jaipur hotel pickup and drop-off",
    itinerary: [
      {
        day: "Morning",
        title: "Artisan Village Transfer",
        detail: "Drive to Bagru and observe traditional natural mud-resist printing.",
      },
      {
        day: "Midday",
        title: "Hands-on Workshop",
        detail: "Create your own printed piece under guidance from master artisans.",
      },
    ],
    inclusions: [...commonInclusions, "Workshop materials & printed souvenir"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "jaipur-photography",
    category: "jaipur",
    title: "Jaipur Golden Hour & Instagram Photography Tour",
    duration: "Half Day",
    durationType: "half-day",
    durationHours: 5,
    tourType: "Photography",
    startingPoint: "Jaipur",
    route: "Patrika Gate → Hawa Mahal → Jal Mahal → Nahargarh",
    summary: "Capture the most vibrant, picture-perfect backdrops in the Pink City.",
    overview:
      "A photography excursion hitting Jaipur's most striking visual locations. From the colorful hand-painted arches of Patrika Gate to morning reflections at Jal Mahal and the honeycomb facade of Hawa Mahal.",
    price: 4799,
    image: toSrc(jalMahal),
    imageAlt: "Jal Mahal floating palace at sunset in Jaipur",
    highlights: [
      "Patrika Gate colorful painted archway corridors",
      "Hawa Mahal unobstructed morning light perspectives",
      "Jal Mahal lakeside reflection compositions",
      "Private vehicle to move swiftly between top photo locations",
    ],
    pickup: "Early morning pickup from your Jaipur hotel",
    itinerary: [
      {
        day: "06:30 AM",
        title: "Patrika Gate & Hawa Mahal",
        detail: "Capture pristine shots before pedestrian and traffic crowds build.",
      },
      {
        day: "09:00 AM",
        title: "Jal Mahal & Old City Corners",
        detail: "Photograph lake reflections and vibrant street scenes.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    featured: false,
  },

  /* ========================================================================
     GOLDEN TRIANGLE TOURS
     ======================================================================== */
  {
    id: "classic-golden-triangle",
    category: "golden-triangle",
    title: "Classic 5 Days Golden Triangle Tour",
    duration: "5 Days · 4 Nights",
    durationType: "multi-day",
    durationHours: 120,
    tourType: "Heritage",
    startingPoint: "Delhi",
    route: "Delhi (2N) → Agra (1N) → Jaipur (1N) → Delhi",
    summary: "India's most iconic circuit — Delhi, Agra and Jaipur — beautifully paced.",
    overview:
      "The definitive introduction to North India. Explore Delhi's grand monuments, witness the Taj Mahal at sunrise, and step into Jaipur's royal forts and palaces, all with a private chauffeur and expert guides.",
    price: 34999,
    image: toSrc(indiaGate),
    imageAlt: "India Gate illuminated at blue hour in New Delhi",
    highlights: [
      "Old & New Delhi comprehensive guided tours",
      "Magical sunrise at the Taj Mahal & Agra Fort",
      "Amber Fort & City Palace in royal Jaipur",
      "Stop at Fatehpur Sikri between Agra and Jaipur",
      "Hand-picked 4-star hotels with daily breakfast",
    ],
    pickup: "Airport welcome and all intercity transfers included",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive in Delhi",
        detail: "Airport welcome, hotel check-in and an evening at India Gate.",
      },
      {
        day: "Day 2",
        title: "Delhi heritage",
        detail: "Red Fort, Chandni Chowk, Humayun's Tomb and Qutub Minar.",
      },
      {
        day: "Day 3",
        title: "Delhi to Agra",
        detail: "Drive to Agra, visit Agra Fort and Mehtab Bagh at sunset.",
      },
      {
        day: "Day 4",
        title: "Taj Mahal to Jaipur",
        detail: "Sunrise at the Taj Mahal, then onward to Jaipur via Fatehpur Sikri.",
      },
      {
        day: "Day 5",
        title: "Royal Jaipur",
        detail: "Amber Fort, City Palace and Hawa Mahal before return to Delhi.",
      },
    ],
    inclusions: [...commonInclusions, "4 nights in 4-star hotels with breakfast"],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "luxury-golden-triangle",
    category: "golden-triangle",
    title: "Royal 7 Days Golden Triangle Experience",
    duration: "7 Days · 6 Nights",
    durationType: "multi-day",
    durationHours: 168,
    tourType: "Luxury",
    startingPoint: "Delhi",
    route: "Delhi (2N) → Agra (2N) → Jaipur (2N) → Delhi",
    summary: "A slower, more indulgent journey with palace stays and private experiences.",
    overview:
      "An elevated Golden Triangle with heritage palace hotels, private after-hours experiences and extra time to savour each city — designed for travellers who want to go deeper.",
    price: 64999,
    image: toSrc(hawaMahal),
    imageAlt: "Hawa Mahal's pink honeycomb facade in Jaipur",
    highlights: [
      "Luxury 5-star palace and heritage hotel stays",
      "Private evening dinner experience in Jaipur",
      "Taj Mahal at both sunset and sunrise",
      "Personal 24/7 travel concierge and private luxury SUV",
    ],
    pickup: "VIP airport reception and seamless door-to-door service",
    itinerary: [
      {
        day: "Day 1–2",
        title: "Delhi",
        detail: "Private tours of Old & New Delhi, Humayun's Tomb and Lodhi Gardens.",
      },
      {
        day: "Day 3–4",
        title: "Agra",
        detail: "Taj Mahal at sunset and sunrise, Agra Fort and the Baby Taj.",
      },
      {
        day: "Day 5–7",
        title: "Jaipur",
        detail: "Amber Fort, City Palace, Hawa Mahal and a royal heritage dinner.",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "6 nights in luxury & palace hotels with breakfast",
      "Personal travel concierge",
    ],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    id: "golden-triangle-3days",
    category: "golden-triangle",
    title: "3 Days Golden Triangle Express",
    duration: "3 Days · 2 Nights",
    durationType: "multi-day",
    durationHours: 72,
    tourType: "Express",
    startingPoint: "Delhi",
    route: "Delhi (Day 1) → Agra (Day 2) → Jaipur (Day 3) → Delhi",
    summary: "The fast-paced highlights tour covering all 3 iconic cities in a long weekend.",
    overview:
      "Designed for travelers with limited time who don't want to miss India's top wonders. See Delhi's highlights, witness the Taj Mahal at sunrise, explore Amber Fort in Jaipur, and return comfortably to Delhi.",
    price: 22999,
    image: toSrc(tajMahal),
    imageAlt: "Taj Mahal marble facade",
    highlights: [
      "Covers Delhi, Agra, and Jaipur in 3 action-packed days",
      "Sunrise visit to the Taj Mahal",
      "Tour of Amber Fort and City Palace in Jaipur",
      "Private chauffeur-driven car throughout the entire journey",
      "2 nights 3/4-star hotel accommodation with breakfast",
    ],
    pickup: "Delhi airport or hotel pickup on Day 1",
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi to Agra",
        detail: "Morning Delhi sights, drive to Agra, sunset visit to Agra Fort.",
      },
      {
        day: "Day 2",
        title: "Agra to Jaipur",
        detail: "Sunrise at Taj Mahal, drive to Jaipur via Fatehpur Sikri.",
      },
      {
        day: "Day 3",
        title: "Jaipur & Return",
        detail: "Amber Fort and City Palace; afternoon return drive to Delhi.",
      },
    ],
    inclusions: [...commonInclusions, "2 nights hotel stay with breakfast"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "golden-triangle-4days",
    category: "golden-triangle",
    title: "4 Days Classic Golden Triangle Tour",
    duration: "4 Days · 3 Nights",
    durationType: "multi-day",
    durationHours: 96,
    tourType: "Heritage",
    startingPoint: "Delhi",
    route: "Delhi (1N) → Agra (1N) → Jaipur (1N) → Delhi",
    summary: "A balanced 4-day itinerary giving each city its well-deserved spotlight.",
    overview:
      "The perfect 4-day loop across North India. Take in Old Delhi's spice bazaar, marvel at the Taj Mahal at first light, climb Amber Fort in the Pink City, and enjoy private transfers all the way.",
    price: 28999,
    image: toSrc(redFort),
    imageAlt: "Red sandstone monument in Delhi",
    highlights: [
      "Covers all primary UNESCO monuments across Delhi, Agra, and Jaipur",
      "Sunrise entry to the Taj Mahal with historian guide",
      "Amber Fort, Hawa Mahal and City Palace in Jaipur",
      "Private AC car and driver with all toll and parking fees covered",
      "3 nights comfortable hotel accommodation with breakfast",
    ],
    pickup: "Pickup from any Delhi location",
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi Highlights",
        detail: "Tour Qutub Minar, India Gate, and Humayun's Tomb; overnight in Delhi.",
      },
      {
        day: "Day 2",
        title: "Delhi to Agra",
        detail: "Morning drive to Agra, tour Agra Fort, sunset at Mehtab Bagh.",
      },
      {
        day: "Day 3",
        title: "Taj Mahal to Jaipur",
        detail: "Sunrise at the Taj Mahal; scenic drive to Jaipur with Fatehpur Sikri.",
      },
      {
        day: "Day 4",
        title: "Jaipur Sightseeing & Return",
        detail: "Amber Fort & City Palace; afternoon return drive to Delhi.",
      },
    ],
    inclusions: [...commonInclusions, "3 nights hotel stay with breakfast"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "golden-triangle-6days",
    category: "golden-triangle",
    title: "6 Days In-Depth Golden Triangle Discovery",
    duration: "6 Days · 5 Nights",
    durationType: "multi-day",
    durationHours: 144,
    tourType: "Cultural",
    startingPoint: "Delhi",
    route: "Delhi (2N) → Agra (1N) → Jaipur (2N) → Delhi",
    summary: "More time in Delhi and Jaipur to experience local bazaars, cuisine, and crafts.",
    overview:
      "A richer, unhurried exploration. Enjoy two nights in Delhi and two nights in Jaipur, leaving ample space for village block-printing workshops, stepwell visits, evening street-food walks, and relaxed morning monument visits.",
    price: 44999,
    image: toSrc(amberFort),
    imageAlt: "Jaipur Amber Fort walls at dusk",
    highlights: [
      "Unhurried 2-night stays in both Delhi and Jaipur",
      "Sunrise Taj Mahal and sunset across the Yamuna",
      "Hands-on block printing and craft studio experience in Jaipur",
      "Stop at 1,000-year-old Chand Baori stepwell in Abhaneri",
      "5 nights in hand-picked heritage and 4-star hotels",
    ],
    pickup: "Delhi airport or hotel pickup",
    itinerary: [
      {
        day: "Day 1–2",
        title: "Deep Delhi",
        detail: "Both Old Delhi bazaar walks and New Delhi imperial architecture.",
      },
      {
        day: "Day 3",
        title: "Agra Mughal Wonder",
        detail: "Expressway drive to Agra; Agra Fort and Mehtab Bagh sunset.",
      },
      {
        day: "Day 4–5",
        title: "Jaipur Royalty & Craft",
        detail: "Sunrise at the Taj, drive to Jaipur; Amber Fort, City Palace, workshops.",
      },
      {
        day: "Day 6",
        title: "Return to Delhi",
        detail: "Leisurely breakfast, morning shopping, and return drive to Delhi.",
      },
    ],
    inclusions: [...commonInclusions, "5 nights hotel accommodation with breakfast"],
    exclusions: commonExclusions,
    featured: false,
  },
  {
    id: "golden-triangle-ranthambore",
    category: "golden-triangle",
    title: "Golden Triangle with Ranthambore Tiger Safari",
    duration: "6 Days · 5 Nights",
    durationType: "multi-day",
    durationHours: 144,
    tourType: "Cultural",
    startingPoint: "Delhi",
    route: "Delhi → Agra → Ranthambore (2N) → Jaipur → Delhi",
    summary: "Combine the Taj Mahal and royal palaces with wild Bengal tiger safaris.",
    overview:
      "The ultimate combination of culture and wilderness. Experience the monuments of Delhi and the Taj Mahal in Agra, then head into the ancient jungle of Ranthambore National Park for thrilling open-top jeep safaris, finishing in the Pink City of Jaipur.",
    price: null,
    image: toSrc(tajGoldenHour),
    imageAlt: "Golden light over historic India",
    highlights: [
      "2 open-top Jeep/Canter jungle safaris in Ranthambore Tiger Reserve",
      "Sunrise guided exploration of the Taj Mahal and Agra Fort",
      "Amber Fort and City Palace in Jaipur",
      "Jungle wildlife lodge accommodation with all meals included",
      "Dedicated chauffeur and private vehicle throughout",
    ],
    pickup: "Delhi airport or hotel pickup",
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi to Agra",
        detail: "Visit Agra Fort and sunset Taj Mahal view from Mehtab Bagh.",
      },
      {
        day: "Day 2",
        title: "Taj Mahal to Ranthambore",
        detail: "Sunrise at Taj Mahal; drive to Ranthambore jungle lodge.",
      },
      {
        day: "Day 3",
        title: "Tiger Safaris in Ranthambore",
        detail: "Morning and afternoon jungle game drives tracking Bengal tigers.",
      },
      {
        day: "Day 4",
        title: "Ranthambore to Jaipur",
        detail: "Morning drive to Jaipur; evening bazaar walk.",
      },
      {
        day: "Day 5–6",
        title: "Jaipur & Return to Delhi",
        detail: "Amber Fort & City Palace; return to Delhi on Day 6.",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "2 Jungle Safaris in Ranthambore with naturalist",
      "Ranthambore lodge stay with breakfast, lunch & dinner",
    ],
    exclusions: commonExclusions,
    featured: false,
  },
];

export const formatPrice = (value) => {
  if (value === undefined || value === null || isNaN(value)) {
    return "Enquire for Price";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

export const slugMap = {
  // Agra
  "sunrise-taj": "taj-mahal-sunrise-tour",
  "agra-heritage": "agra-mughal-heritage-escape",
  "taj-agra-fort": "taj-mahal-and-agra-fort-tour",
  "taj-baby-taj-mehtab": "taj-mahal-baby-taj-and-mehtab-bagh-tour",
  "agra-gatimaan-express": "same-day-agra-tour-by-gatimaan-express",
  "agra-full-day": "full-day-agra-sightseeing-and-heritage-walk",
  "taj-photography": "taj-mahal-golden-hour-photography-tour",
  "agra-from-jaipur": "private-agra-tour-from-jaipur",

  // Delhi
  "old-new-delhi": "old-and-new-delhi-discovery-tour",
  "delhi-mughal-trail": "delhi-mughal-heritage-trail",
  "old-delhi-heritage-walk": "old-delhi-bazaar-spices-and-street-food-walk",
  "new-delhi-imperial": "lutyens-delhi-and-monument-trail",
  "delhi-spiritual-wonders": "spiritual-delhi-temples-and-shrines-tour",
  "delhi-photography-tour": "delhi-heritage-architecture-and-photography-tour",
  "delhi-full-day-custom": "delhi-full-day-sightseeing",
  "delhi-agra-combined": "delhi-and-agra-same-day-express-tour",

  // Jaipur
  "royal-jaipur": "royal-jaipur-escape-tour",
  "pink-city-palaces": "pink-city-palace-trail",
  "jaipur-full-day": "jaipur-city-tour",
  "amber-fort-heritage": "amber-fort-jal-mahal-nahargarh-sunset",
  "jaipur-walking-bazaars": "pink-city-heritage-walk-and-johari-bazaars",
  "jaipur-craft-textiles": "jaipur-block-printing-and-artisan-studio-tour",
  "jaipur-photography": "jaipur-golden-hour-and-photography-tour",

  // Golden Triangle
  "classic-golden-triangle": "classic-5-days-golden-triangle-tour",
  "luxury-golden-triangle": "royal-7-days-golden-triangle-experience",
  "golden-triangle-3days": "3-days-golden-triangle-tour",
  "golden-triangle-4days": "4-days-classic-golden-triangle-tour",
  "golden-triangle-6days": "6-days-in-depth-golden-triangle-discovery",
  "golden-triangle-ranthambore": "golden-triangle-with-ranthambore-tiger-safari",
};

const slugAliases = {
  "agra-fort-and-taj-mahal-tour": "taj-agra-fort",
  "from-delhi-taj-mahal-and-fort-top-rated-tour-with-5-lunch": "taj-agra-fort",
  "from-delhi-taj-mahal-and-agra-fort-tour": "taj-agra-fort",
  "3-days-golden-triangle-express-tour": "golden-triangle-3days",
  "complete-jaipur-full-day-sightseeing": "jaipur-full-day",
  "taj-mahal-sunrise": "sunrise-taj",
};

export const getTourGallery = (tour) => {
  if (tour.gallery && tour.gallery.length > 0) return tour.gallery;
  switch (tour.category) {
    case "agra":
      return [
        tour.image,
        images.tajGoldenHour,
        images.agraFort,
        images.tajArchway,
        images.tajMahal,
      ];
    case "delhi":
      return [
        tour.image,
        images.indiaGate,
        images.humayunsTomb,
        images.qutubMinar,
        images.redFort,
      ];
    case "jaipur":
      return [
        tour.image,
        images.amberFort,
        images.cityPalace,
        images.jalMahal,
        images.hawaMahal,
      ];
    case "golden-triangle":
    default:
      return [
        tour.image,
        images.tajMahal,
        images.amberFort,
        images.humayunsTomb,
        images.hawaMahal,
      ];
  }
};

export const getTourReviews = (tour) => {
  const reviewsByDest = {
    agra: [
      {
        name: "Sophie Laurent",
        country: "France",
        rating: 5,
        date: "October 2024",
        tourTitle: "Sunrise at the Taj Mahal",
        comment:
          "Watching the sun rise over the Taj Mahal with our guide was pure magic. Every detail was thoughtfully arranged — from the punctual pickup to the fascinating architectural history.",
      },
      {
        name: "Daniel Okafor",
        country: "Canada",
        rating: 5,
        date: "November 2024",
        tourTitle: "Taj Mahal & Agra Fort Private Day Tour",
        comment:
          "Seeing the Taj Mahal at first light with almost no crowds was worth the early start. Our driver was safe, courteous, and the guide knew every stone and story behind the marble.",
      },
      {
        name: "Elena Rossi",
        country: "Italy",
        rating: 5,
        date: "January 2025",
        tourTitle: "Agra Mughal Heritage Escape",
        comment:
          "A truly unforgettable experience. The views of the Taj from Mehtab Bagh at sunset and Baby Taj the following morning were breathtaking. Highly recommend KranbsTour!",
      },
    ],
    delhi: [
      {
        name: "Ananya Mehta",
        country: "Singapore",
        rating: 5,
        date: "December 2024",
        tourTitle: "Old & New Delhi Discovery",
        comment:
          "A perfect day in Delhi. The rickshaw ride through Chandni Chowk and the golden hour at Humayun's Tomb were unforgettable. Our guide was incredibly knowledgeable.",
      },
      {
        name: "Michael Chen",
        country: "Australia",
        rating: 5,
        date: "November 2024",
        tourTitle: "Delhi Mughal Heritage Trail",
        comment:
          "Navigating Delhi can be overwhelming, but KranbsTour made it effortless. Clean AC car, chilled water, and a guide who brought 800 years of Delhi's history alive.",
      },
      {
        name: "Sarah Jenkins",
        country: "United Kingdom",
        rating: 5,
        date: "January 2025",
        tourTitle: "Old Delhi Bazaar & Street Food Walk",
        comment:
          "The spice market and food tastings were top notch. We felt completely safe and ate at the most hygienic, legendary spots. A must-do tour!",
      },
    ],
    jaipur: [
      {
        name: "James Whitmore",
        country: "United Kingdom",
        rating: 5,
        date: "October 2024",
        tourTitle: "Royal Jaipur Escape",
        comment:
          "Amber Fort, the City Palace, the bazaars — Jaipur felt like stepping into a storybook. Our driver and guide felt like trusted friends by the end.",
      },
      {
        name: "Mei Tanaka",
        country: "Japan",
        rating: 5,
        date: "December 2024",
        tourTitle: "Pink City Palace Trail",
        comment:
          "The City Palace and Hawa Mahal were even more colourful than the photos. A relaxed, beautifully planned day with great photography tips.",
      },
      {
        name: "Carlos Mendez",
        country: "Spain",
        rating: 5,
        date: "February 2025",
        tourTitle: "Complete Jaipur Full-Day Sightseeing",
        comment:
          "Nahargarh sunset view was the highlight of our entire Rajasthan trip. Exceptional service, no tourist traps, and very respectful guide.",
      },
    ],
    "golden-triangle": [
      {
        name: "Sophie Laurent",
        country: "France",
        rating: 5,
        date: "November 2024",
        tourTitle: "Classic 5 Days Golden Triangle Tour",
        comment:
          "Our 5-day Golden Triangle trip exceeded all expectations. Seamless car transfers, brilliant local guides in each city, and stunning hotels throughout.",
      },
      {
        name: "David & Sarah Miller",
        country: "United States",
        rating: 5,
        date: "December 2024",
        tourTitle: "6 Days In-Depth Golden Triangle Discovery",
        comment:
          "Traveling with our two kids was smooth and stress-free. The driver was exceptionally careful and kind, and the stops in Fatehpur Sikri and Abhaneri were marvelous.",
      },
      {
        name: "Liam O'Connor",
        country: "Ireland",
        rating: 5,
        date: "January 2025",
        tourTitle: "Golden Triangle with Ranthambore Tiger Safari",
        comment:
          "We spotted a royal Bengal tiger on our morning safari in Ranthambore! Combined with the Taj Mahal and Jaipur palaces, this was the trip of a lifetime.",
      },
    ],
  };

  return reviewsByDest[tour.category] || reviewsByDest["agra"];
};

export const getTourFaqs = (tour) => {
  const common = [
    {
      question: "Is hotel pickup and drop-off included in this tour?",
      answer:
        tour.pickup
          ? `Yes, ${tour.pickup}. Doorstep pickup and drop-off from your chosen hotel, airport, or railway station is included in private air-conditioned vehicles.`
          : "Yes, door-to-door pickup and drop-off from your hotel or airport is included in private air-conditioned vehicles.",
    },
    {
      question: "Can this tour itinerary be customized?",
      answer:
        "Absolutely. All KranbsTour journeys are private and 100% tailor-made. You can modify departure times, spend more time at your preferred monuments, or add optional dining experiences.",
    },
    {
      question: "What is the cancellation policy for this booking?",
      answer:
        "We offer free cancellation up to 24 hours before your scheduled tour departure time for a full refund. Cancellations made within 24 hours are subject to standard operating terms.",
    },
    {
      question: "Are monument entry tickets included?",
      answer:
        "Monument tickets can either be purchased on-site or bundled into your package upon request. Our team can pre-book official ASI electronic tickets to ensure skip-the-line entry.",
    },
    {
      question: "What should I wear during the tour?",
      answer:
        "We recommend modest, comfortable cotton clothing that covers shoulders and knees, especially when entering religious shrines or mosques. Slip-on walking shoes are recommended as shoes must be removed or covered at certain monuments.",
    },
  ];

  if (tour.category === "agra") {
    common.push({
      question: "Is this tour affected by Friday closure of the Taj Mahal?",
      answer:
        "The Taj Mahal is strictly closed to visitors every Friday. If you book an Agra tour on a Friday, we can adjust the date, or explore Agra Fort, Baby Taj, and Mehtab Bagh on Friday and visit the Taj Mahal at dawn on Saturday.",
    });
  } else if (tour.category === "delhi") {
    common.push({
      question: "Are monuments in Delhi closed on any day of the week?",
      answer:
        "The Red Fort, Lotus Temple, Akshardham Temple, and the National Museum are closed on Mondays. Other major monuments like Humayun's Tomb, Qutub Minar, and India Gate remain open all 7 days.",
    });
  } else if (tour.category === "golden-triangle") {
    common.push({
      question: "What vehicle is provided for the multi-city circuit?",
      answer:
        "For 1 to 2 guests, we provide comfortable AC Sedans (such as Toyota Etios or Maruti Dzire). For 3 to 5 guests, we provide spacious Toyota Innova Crysta MPVs. For larger families or groups, we provide luxury Tempo Travellers.",
    });
  }

  return common;
};

export const getTourOptions = (tour) => {
  if (tour.durationType === "multi-day") {
    return [
      {
        id: "heritage",
        name: "Standard Heritage Stay",
        badge: "Popular",
        description: "Comfortable boutique heritage hotels with daily breakfast included.",
      },
      {
        id: "luxury",
        name: "5-Star Luxury Palaces",
        badge: "Upgrade",
        description: "Premier 5-star heritage palace hotels with royal suites and dining privileges.",
      },
    ];
  }

  if (tour.tourType === "Sunrise" || tour.id.includes("sunrise")) {
    return [
      {
        id: "sunrise",
        name: "Sunrise Departure (05:30 AM)",
        badge: "Recommended",
        description: "First light viewing with serene atmosphere and cool morning breeze.",
      },
      {
        id: "standard",
        name: "Morning Departure (08:30 AM)",
        badge: "Relaxed",
        description: "Comfortable post-breakfast departure with full guided day itinerary.",
      },
    ];
  }

  return [
    {
      id: "standard-morning",
      name: "Morning Departure (09:00 AM)",
      badge: "Standard",
      description: "Full day private sightseeing with licensed guide and AC transport.",
    },
    {
      id: "afternoon-sunset",
      name: "Afternoon & Sunset (01:00 PM)",
      badge: "Golden Hour",
      description: "Midday start including golden hour views and illuminated monument evening.",
    },
  ];
};

const enrichPackage = (pkg) => {
  const slug = slugMap[pkg.id] || pkg.id;
  const destination = categoryLabels[pkg.category] || "India";
  return {
    ...pkg,
    slug,
    destination,
    languages: ["English", "Hindi", "Spanish (on request)", "French (on request)"],
    cancellation: "Free cancellation up to 24 hours in advance",
    rating: 4.9,
    reviewCount: 124,
    gallery: getTourGallery(pkg),
    importantInformation: {
      whatToBring: [
        "Valid passport or government photo ID (mandatory for monument entry)",
        "Comfortable walking shoes (slip-ons recommended)",
        "Sun protection: hat, sunglasses, and sunscreen",
        "Modest clothing covering shoulders and knees",
      ],
      notAllowed: [
        "Tripods, selfie sticks and drone cameras inside monument complexes",
        "Smoking, lighters, matchboxes, and tobacco items",
        "Large bags or luggage (lockers available at entry gates)",
        "Food items, chewing gum, and drinks (sealed water bottles allowed)",
      ],
      knowBeforeYouBook: [
        "The Taj Mahal is strictly closed to visitors every Friday for congregational prayers",
        "Shoe covers are mandatory to ascend the Taj Mahal marble terrace and are provided",
        "Exact driver details and pickup time will be confirmed via WhatsApp/Email 24 hours prior",
      ],
      accessibility:
        "Wheelchair accessible at outer gardens and paved courtyards; historic fortresses feature ancient ramps and stone steps.",
      pickupDetails:
        pkg.pickup ||
        "Door-to-door pickup and drop-off from your hotel, airport, or railway station.",
    },
    reviews: getTourReviews(pkg),
    faqs: getTourFaqs(pkg),
    options: getTourOptions(pkg),
  };
};

export const packages = rawPackages.map(enrichPackage);

export const getTourBySlug = (slug) => {
  if (!slug) return null;
  const normalized = String(slug).toLowerCase().trim();
  const direct = packages.find((p) => p.slug === normalized || p.id === normalized);
  if (direct) return direct;

  const targetId = slugAliases[normalized];
  if (targetId) {
    const aliased = packages.find((p) => p.id === targetId || p.slug === targetId);
    if (aliased) return aliased;
  }

  // Fallback fuzzy search by slug partial match
  return packages.find((p) => p.slug.includes(normalized) || normalized.includes(p.slug)) || null;
};

export const getAllTourSlugs = () => {
  return packages.map((p) => p.slug);
};

export const getRelatedTours = (currentTour, limit = 3) => {
  if (!currentTour) return packages.slice(0, limit);
  const sameCategory = packages.filter(
    (p) => p.category === currentTour.category && p.id !== currentTour.id && p.slug !== currentTour.slug
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = packages.filter(
    (p) => p.id !== currentTour.id && p.slug !== currentTour.slug && !sameCategory.includes(p)
  );
  return [...sameCategory, ...others].slice(0, limit);
};

