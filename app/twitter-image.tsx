import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { SocialImageContent } from "./social-image";

export const alt = `${site.name} — Farm Market, Fruit Stand & Farmers Market in ${site.region}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialImageContent />, { ...size });
}
