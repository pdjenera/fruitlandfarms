/**
 * Shared site configuration. Update business details here in one place
 * and they propagate through the header, footer, location, and SEO.
 */

export const BASE_URL = "https://www.fruitlandfarms.ca" as const;

export const site = {
  name: "Fruitland Farms",
  tagline: "Serving Nature's Best Since 1964",
  description:
    "Fruitland Farms is a family-run farm market and fruit stand in Stoney Creek, Ontario, serving fresh, locally grown fruits and vegetables since 1964.",
  /** Search terms this business should rank for locally. */
  keywords: [
    "farm market",
    "fruit stand",
    "farmers market",
    "farm market Stoney Creek",
    "fruit stand Stoney Creek",
    "farmers market Hamilton",
    "fresh produce Ontario",
    "u-pick strawberries",
    "local fruits and vegetables",
    "Fruitland Farms",
  ],
  established: 1964,
  generations: 3,
  region: "Stoney Creek, Ontario",
  address: {
    street: "846 Highway 8",
    city: "Stoney Creek",
    province: "Ontario",
    postalCode: "L8E 5J3",
    country: "Canada",
  },
  // Coordinates near 846 Highway 8, Stoney Creek (Fruitland area).
  // Update if you have an exact pin from Google Maps.
  coordinates: {
    lat: 43.226,
    lng: -79.682,
  },
  social: {
    instagram: "https://www.instagram.com/fruitlandfarms/",
    instagramHandle: "@fruitlandfarms",
    facebook: "https://www.facebook.com/fruitlandfarms64/",
  },
  contact: {
    // Replace with the real phone/email when ready. Leave empty to hide.
    phone: "" as string,
    email: "" as string,
  },
} as const;

/** Header logo (cropped / variant for nav). */
export const siteLogoSrc = "/images/fruitland-logo-lockup.png" as const;

/** Footer logo (e.g. light wordmark on black — reads on dark green bar). */
export const siteLogoFooterSrc = "/images/fruitland-logo-footer.png" as const;

export const navSections = [
  { id: "story", label: "Our Story" },
  { id: "in-season", label: "In Season" },
  { id: "instagram", label: "Latest" },
  { id: "visit", label: "Visit Us" },
] as const;

export type SectionId = (typeof navSections)[number]["id"];

export function fullAddress(): string {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.province} ${a.postalCode}, ${a.country}`;
}

export function googleMapsDirectionsUrl(): string {
  const dest = encodeURIComponent(fullAddress());
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
}

export function googleMapsEmbedUrl(): string {
  const q = encodeURIComponent(fullAddress());
  // Using the public maps embed (no API key required for the basic q= form)
  return `https://www.google.com/maps?q=${q}&hl=en&z=15&output=embed`;
}

/**
 * JSON-LD structured data (schema.org) describing the business as a local
 * grocery/farm market. Helps search engines show rich results (map card,
 * hours, rating stars if reviews are later linked) for local queries like
 * "farm market near me" or "fruit stand Stoney Creek".
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["GroceryStore", "LocalBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: site.name,
    alternateName: ["Fruitland Farms Market", "Fruitland Farms Fruit Stand"],
    description: site.description,
    slogan: site.tagline,
    url: BASE_URL,
    image: `${BASE_URL}/images/hero-barn-portrait.png`,
    logo: `${BASE_URL}/images/fruitland-logo-lockup.png`,
    telephone: site.contact.phone || undefined,
    email: site.contact.email || undefined,
    priceRange: "$$",
    foundingDate: String(site.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: "ON",
      postalCode: site.address.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    },
    areaServed: [
      "Stoney Creek",
      "Hamilton",
      "Niagara Region",
      "Greater Toronto and Hamilton Area",
    ],
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
  } as const;
}
