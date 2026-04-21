// SEO Utilities for meta tags, JSON-LD schema, and other SEO enhancements
import { SITE_CONFIG } from "@/lib/siteConfig";

export interface PageMetaData {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
}

const DEFAULT_OG_IMAGE = "https://sitexar.com/Sitexar.png";

// Set document head meta tags
export function setPageMeta(meta: PageMetaData) {
  // Set title
  document.title = meta.title;

  // Set or update meta description
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.setAttribute("name", "description");
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute("content", meta.description);

  // Set keywords if provided
  if (meta.keywords) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement("meta");
      keywordsTag.setAttribute("name", "keywords");
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute("content", meta.keywords);
  }

  // Set canonical URL if provided
  const canonicalHref = meta.canonicalUrl || window.location.href;
  if (canonicalHref) {
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalHref);
  }

  // Set OG tags for social sharing
  const ogTitle = meta.ogTitle || meta.title;
  setOrCreateMetaTag("property", "og:title", ogTitle);

  const ogDescription = meta.ogDescription || meta.description;
  setOrCreateMetaTag("property", "og:description", ogDescription);

  if (meta.ogImage) {
    setOrCreateMetaTag("property", "og:image", meta.ogImage);
  } else {
    setOrCreateMetaTag("property", "og:image", DEFAULT_OG_IMAGE);
  }

  setOrCreateMetaTag("property", "og:url", canonicalHref);
  setOrCreateMetaTag("property", "og:type", "website");
  setOrCreateMetaTag("property", "og:site_name", SITE_CONFIG.companyName);
  setOrCreateMetaTag("name", "robots", "index, follow, max-image-preview:large");
  setOrCreateMetaTag("name", "twitter:card", "summary_large_image");
  setOrCreateMetaTag("name", "twitter:site", "@Sitexar");
  setOrCreateMetaTag("name", "twitter:title", ogTitle);
  setOrCreateMetaTag("name", "twitter:description", ogDescription);
  if (meta.ogImage) {
    setOrCreateMetaTag("name", "twitter:image", meta.ogImage);
  } else {
    setOrCreateMetaTag("name", "twitter:image", DEFAULT_OG_IMAGE);
  }
}

function setOrCreateMetaTag(attribute: string, attrValue: string, content: string) {
  let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// JSON-LD Schema Generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sitexar",
    description:
      "Full-stack web development agency specializing in high-performance digital experiences and business solutions.",
    url: "https://sitexar.com",
    logo: "https://sitexar.com/logo.png",
    sameAs: [
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github,
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sitexar",
    description: "Web Development & Digital Solutions",
    url: "https://sitexar.com",
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.companyName,
    url: "https://sitexar.com",
    description:
      "Sitexar builds high-performance websites, SaaS platforms, and growth-focused digital products.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sitexar.com/services",
      "query-input": "required name=service",
    },
  };
}

export function generateServiceSchema(services: Array<{ name: string; description: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sitexar",
    hasOfferingType: "Service",
    areaServed: "IN",
    offersCustomers: services.map((service) => ({
      "@type": "Offer",
      name: service.name,
      description: service.description,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    })),
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateCaseStudySchema(data: {
  title: string;
  description: string;
  client: string;
  datePublished: string;
  image?: string;
  metrics: Array<{ label: string; value: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    author: {
      "@type": "Organization",
      name: "Sitexar",
    },
    publisher: {
      "@type": "Organization",
      name: "Sitexar",
      logo: {
        "@type": "ImageObject",
        url: "https://sitexar.com/logo.png",
      },
    },
  };
}

// Inject schema into head
export function injectSchemaMarkup(schema: object, id?: string) {
  // Remove existing schema if id is provided
  if (id) {
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  if (id) {
    script.id = id;
  }
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Page-specific meta data
export const pageMetaData = {
  home: {
    title: "Sitexar — Digital Solutions & Web Development",
    description:
      "Scale your business with high-performance web applications. Expert full-stack development, responsive design, and AI-powered solutions for modern enterprises.",
    keywords:
      "web development, digital solutions, full-stack development, React, TypeScript, responsive design",
    canonicalUrl: "https://sitexar.com/",
  },
  about: {
    title: "About Sitexar — Our Team & Mission",
    description:
      "Meet the expert team behind Sitexar. We build innovative digital solutions that help businesses grow and succeed in the digital age.",
    keywords: "about us, web development team, software development, our mission, values",
  },
  services: {
    title: "Web Development & Digital Services | Sitexar",
    description:
      "We offer full-stack web development, UI/UX design, SEO optimization, performance tuning, and AI integration. Discover our complete range of services.",
    keywords: "web development, UI/UX design, SEO, performance optimization, AI integration",
  },
  portfolio: {
    title: "Portfolio | Our Work & Case Studies | Sitexar",
    description:
      "Explore our portfolio of successful projects across healthcare, education, food, and more. See how we've helped businesses scale with innovative solutions.",
    keywords: "portfolio, case studies, projects, web applications, successful projects",
  },
  testimonials: {
    title: "Client Testimonials & Success Stories | Sitexar",
    description:
      "Read what our clients say about working with us. Discover how we've impacted their businesses with measurable results.",
    keywords: "testimonials, client reviews, success stories, client feedback",
  },
  contact: {
    title: "Contact Sitexar — Get Your Free Consultation",
    description:
      "Ready to start your project? Contact us for a free 15-minute consultation. Let's discuss how we can help your business grow.",
    keywords: "contact us, consultation, quote, web development inquiry",
  },
};
