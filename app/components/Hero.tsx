import Image from "next/image";
import { ArrowDown } from "./Icons";
import { site } from "@/lib/site";

const heroCtaClassName =
  "inline-flex items-center gap-2 rounded-full bg-leaf-900 px-6 py-3.5 text-base font-semibold text-cream shadow-md shadow-leaf-900/25 hover:bg-leaf-700 transition-colors";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex items-start overflow-hidden"
    >
      <Image
        src="/images/hero-barn-portrait.png"
        alt={`${site.name} storefront: yellow barn with red trim, oval Fruitland Farms sign, plant racks, and strawberry cutout out front`}
        priority
        fill
        sizes="100vw"
        className="object-cover object-[50%_42%] sm:object-[50%_38%] lg:object-[50%_40%] -z-20"
      />

      <div className="relative min-h-[100svh] w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 lg:pb-16">
          <div
            className={[
              "max-w-3xl rounded-[2rem] px-6 py-8 sm:px-9 sm:py-10",
              "border border-white/25 bg-white/[0.03] backdrop-blur-md",
              "shadow-lg shadow-black/[0.04]",
            ].join(" ")}
          >
            <p className="fade-up inline-flex items-center gap-3 text-black font-medium">
              <span className="h-px w-10 bg-barn-600" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em]">
                {site.region} · Est. {site.established}
              </span>
            </p>

            <h1 className="fade-up mt-5 max-w-2xl font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tight text-black">
              Serving Nature&rsquo;s
              <br />
              Best Since{" "}
              <span className="italic text-black font-light">1964</span>
            </h1>

            <p className="fade-up mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-black">
              Our farm market and fruit stand bring you the best of
              Ontario&rsquo;s produce: fresh, vibrant, and brimming with
              flavour. Discover the difference of fruit picked daily and
              delivered straight to you.
            </p>

            <div className="fade-up mt-9 flex flex-wrap items-center gap-4">
              <a href="#in-season" className={heroCtaClassName}>
                See What&rsquo;s in Season
              </a>
              <a href="#story" className={heroCtaClassName}>
                Our Story
              </a>
            </div>
          </div>
        </div>

        <a
          href="#story"
          aria-label="Scroll to our story"
          className="hidden lg:flex absolute right-12 bottom-10 h-12 w-12 items-center justify-center rounded-full ring-2 ring-black/15 text-black hover:bg-cream/95 hover:ring-black/25 transition-colors bg-cream/90 shadow-lg backdrop-blur-sm"
        >
          <ArrowDown className="h-5 w-5 animate-bounce [animation-duration:2.5s]" />
        </a>
      </div>
    </section>
  );
}
