/**
 * Shared site configuration. Update business details here in one place
 * and they propagate through the header, footer, location, and SEO.
 */

export const site = {
  name: "Fruitland Farms",
  tagline: "Serving Nature's Best Since 1964",
  established: 1964,
  generations: 3,
  region: "Stoney Creek, Ontario",
  address: {
    street: "836 Hamilton Regional Road 8",
    city: "Stoney Creek",
    province: "Ontario",
    postalCode: "L8E 5J3",
    country: "Canada",
  },
  // Coordinates near 836 Highway 8, Stoney Creek (Fruitland area).
  // Update if you have an exact pin from Google Maps.
  coordinates: {
    lat: 43.226,
    lng: -79.682,
  },
  social: {
    instagram: "https://www.instagram.com/fruitlandfarms/",
    instagramHandle: "@fruitlandfarms",
    facebook: "https://www.facebook.com/fruitlandfarms",
  },
  contact: {
    // Replace with the real phone/email when ready. Leave empty to hide.
    phone: "" as string,
    email: "" as string,
  },
} as const;

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
