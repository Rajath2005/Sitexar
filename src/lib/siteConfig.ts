export const SITE_CONFIG = {
  companyName: "Sitexar",
  email: "sitexar.team@gmail.com",
  phoneDisplay: "Call Us",
  phoneHref: "tel:+917483975463",
  whatsappNumber: "+917483975463",
  whatsappMessage:
    "Hi Sitexar, I want to discuss a project. Please share next steps.",
  location: "Mangalore, Puttur, Karnataka",
  social: {
    linkedin: "https://github.com/Rajath2005",
    github: "https://github.com/Rajath2005",
    twitter: "https://github.com/Rajath2005",
  },
};

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
