export const SITE_CONFIG = {
  companyName: "Sitexar",
  email: "sitexar.team@gmail.com",
  phoneDisplay: "+91 74839 75463",
  phoneHref: "tel:+917483975463",
  whatsappNumber: "917483975463",
  whatsappMessage:
    "Hi Sitexar, I want to discuss a project. Please share next steps.",
  location: "Mangalore, Puttur, Karnataka",
  social: {
    linkedin: "https://www.linkedin.com/company/sitexar",
    github: "https://github.com/Sitexar",
    twitter: "https://twitter.com/Sitexar",
  },
};

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
