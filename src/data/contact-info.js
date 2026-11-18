export const contactConfig = {
  companyName: "KranbsTour",
  tagline: "Your Gateway to Agra, Delhi & Jaipur",
  email: "hello@kranbstour.com",
  phone: "+91 00000 00000",
  phoneDisplay: "+91 00000 00000",
  whatsappNumber: "910000000000",
  whatsappDisplay: "+91 00000 00000",
  address: {
    street: "Near East Gate, Taj Ganj",
    city: "Agra",
    state: "Uttar Pradesh",
    postalCode: "282001",
    country: "India",
    formatted: "Taj Ganj, Agra, Uttar Pradesh 282001, India",
  },
  operatingHours: {
    weekdays: "Monday – Saturday: 8:00 AM – 8:00 PM (IST)",
    sunday: "Sunday: 9:00 AM – 6:00 PM (IST)",
    support: "24/7 on-tour driver & guide coordination for active travellers",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "X (Twitter)", href: "https://x.com" },
  ],
};

export const getWhatsAppUrl = (message = "Hello KranbsTour, I would like to enquire about your tour packages.") => {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getMailtoUrl = (subject = "Tour Enquiry - KranbsTour", body = "") => {
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
};
