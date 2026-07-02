import {
  fullAddress,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  site,
} from "@/lib/site";
import { ArrowUpRight, MapPin } from "./Icons";

export function Location() {
  const directionsUrl = googleMapsDirectionsUrl();

  return (
    <section id="visit" className="relative py-12 sm:py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-3 text-leaf-700">
              <span className="h-px w-10 bg-harvest-500" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em]">
                Visit Us
              </span>
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-leaf-900 leading-[1.05]">
              Come see the{" "}
              <span className="italic">barn.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-leaf-900/80 max-w-prose">
              Find our farm market and farmers market stand along Highway 8
              in Stoney Creek, between Hamilton and Niagara. We&rsquo;d love
              to welcome you in for a basket of whatever&rsquo;s freshest
              that day.
            </p>

            <div className="mt-10 rounded-3xl bg-cream-deep/60 ring-1 ring-leaf-900/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf-700 text-cream">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl text-leaf-900">
                    {site.name}
                  </p>
                  <address className="mt-1 not-italic text-leaf-900/75 leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.province}{" "}
                    {site.address.postalCode}
                  </address>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-barn-500 px-5 py-3 text-sm font-medium text-cream hover:bg-barn-600 transition-colors"
                >
                  Get Directions
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    fullAddress(),
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-5 py-3 text-sm font-medium text-leaf-900 hover:bg-leaf-100/70 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-leaf-900/10 shadow-2xl shadow-leaf-900/15">
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full bg-leaf-100">
                <iframe
                  title="Map showing Fruitland Farms in Stoney Creek, Ontario"
                  src={googleMapsEmbedUrl()}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>

              {/* Floating directions CTA — sits above the iframe so the map
                  itself stays pannable/zoomable, but visitors always have a
                  clear, tappable shortcut to Google Maps directions. */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Fruitland Farms in Google Maps for directions"
                className="group absolute right-5 bottom-5 sm:right-6 sm:bottom-6 inline-flex items-center gap-2 rounded-full bg-leaf-900/95 px-5 py-3 text-sm font-medium text-cream backdrop-blur-sm shadow-lg shadow-leaf-900/30 hover:bg-leaf-900 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
