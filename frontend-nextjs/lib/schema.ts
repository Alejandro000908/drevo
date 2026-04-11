import { siteConfig } from './config'

// Schema.org markup for Educational Organization
export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteConfig.url}/#organization`,
  "name": siteConfig.name,
  "alternateName": "Древо Познаний",
  "description": siteConfig.description,
  "url": siteConfig.url,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteConfig.url}/logo.png`,
    "width": 512,
    "height": 512,
  },
  "image": {
    "@type": "ImageObject",
    "url": siteConfig.ogImage,
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Красноармейская 105",
    "addressLocality": "Раменское",
    "addressRegion": "Московская область",
    "postalCode": "140100",
    "addressCountry": "RU",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "55.564789",
    "longitude": "38.231673",
  },
  "telephone": siteConfig.contact.phone,
  "email": siteConfig.contact.email,
  "sameAs": [
    siteConfig.links.telegram,
    siteConfig.links.vk,
  ],
  "priceRange": "₽₽",
  "areaServed": {
    "@type": "City",
    "name": "Раменское",
  },
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.url}`,
    })),
  }
}

// Event schema generator (for school events)
export function generateEventSchema(event: {
  name: string
  startDate: string
  description: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "startDate": event.startDate,
    "description": event.description,
    "location": {
      "@type": "Place",
      "name": siteConfig.name,
      "address": schoolSchema.address,
    },
    "organizer": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(event.image && {
      "image": {
        "@type": "ImageObject",
        "url": event.image,
      },
    }),
  }
}
