import Image from "next/image";
import { site, siteLogoSrc } from "@/lib/site";

type Props = {
  className?: string;
  /** LCP: set on the primary header mark only */
  priority?: boolean;
  sizes?: string;
  /** Defaults to header lockup; footer passes footer asset */
  src?: string;
};

/**
 * Brand lockup from /public. Pass `src` for a different mark (e.g. footer variant).
 */
export function SiteLogo({
  className,
  priority = false,
  sizes,
  src = siteLogoSrc,
}: Props) {
  return (
    <span
      className={`inline-flex shrink-0 items-center overflow-hidden rounded-md ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={`${site.name} — FRUITLAND FARMS logo with cherries`}
        width={1024}
        height={512}
        priority={priority}
        sizes={sizes}
        className="h-full w-auto max-w-full object-contain object-left"
      />
    </span>
  );
}
