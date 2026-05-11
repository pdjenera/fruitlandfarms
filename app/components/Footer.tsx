import { navSections, site } from "@/lib/site";
import { Facebook, Instagram, LeafMark } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-leaf-900 text-cream/85">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream">
                <LeafMark className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl text-cream tracking-tight">
                {site.name}
              </span>
            </a>
            <p className="mt-5 max-w-md text-cream/75 leading-relaxed">
              A family-run fruit and vegetable market in {site.region}.
              Three generations of growing, picking, and sharing the best of
              Ontario.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Fruitland Farms on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 hover:bg-barn-500 hover:text-cream transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Fruitland Farms on Facebook"
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 hover:bg-barn-500 hover:text-cream transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore (in-page links) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/60">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-cream/85 hover:text-harvest-400 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/60">
              Visit the Barn
            </h3>
            <address className="not-italic mt-5 text-cream/85 leading-relaxed">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.province}{" "}
              {site.address.postalCode}
            </address>
            {site.contact.phone && (
              <p className="mt-3">
                <a
                  href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-harvest-400 transition-colors"
                >
                  {site.contact.phone}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-cream/55">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Family-grown in {site.region} since {site.established}.
          </p>
        </div>
      </div>
    </footer>
  );
}
