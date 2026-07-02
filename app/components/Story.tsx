import Image from "next/image";
import { site } from "@/lib/site";

const stats = [
  { value: "1964", label: "Year Founded" },
  { value: "3", label: "Generations" },
  { value: "60+", label: "Harvests" },
  { value: "Local", label: "Growers Network" },
];

export function Story() {
  const currentYear = new Date().getFullYear();
  const yearsRunning = currentYear - site.established;

  return (
    <section id="story" className="relative py-12 sm:py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Imagery column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-leaf-900/10 shadow-2xl shadow-leaf-900/10">
              <Image
                src="/images/story-family-field.png"
                alt="Two generations of the family together in the field beside a green tractor at golden hour"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
            </div>

            {/* Vintage-feeling badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 lg:-right-10 rotate-3">
              <div className="rounded-full bg-cream-deep ring-1 ring-leaf-900/15 shadow-xl shadow-leaf-900/15 px-6 py-5 text-center w-36 h-36 grid place-items-center">
                <div>
                  <p className="font-display text-3xl text-leaf-900 leading-none">
                    {yearsRunning}
                  </p>
                  <p className="mt-1.5 text-[10px] tracking-[0.18em] uppercase text-leaf-700 font-medium">
                    Years Growing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 lg:pl-6">
            <p className="inline-flex items-center gap-3 text-leaf-700">
              <span className="h-px w-10 bg-harvest-500" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em]">
                Our Story
              </span>
            </p>

            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-leaf-900 leading-[1.05]">
              <span className="accent-underline">Three generations</span> of
              farming in <span className="italic">Stoney Creek.</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-leaf-900/80 max-w-prose">
              <p>
                Fruitland Farms was founded in {site.established}, when our
                family first put down roots in Stoney Creek and began working
                the rich Niagara soil. What started as a roadside fruit stand
                selling produce picked that morning has grown into a beloved
                farm market — but the heart of it has never changed.
              </p>
              <p>
                For more than {Math.floor(yearsRunning / 10) * 10} years, three
                generations of our family have woken before sunrise, walked the
                rows, and chosen each crate of produce by hand. We grow a wide
                range of fruits and vegetables right here on the farm.
              </p>
              <p>
                What we don&rsquo;t grow ourselves, we source from farmers and
                growers we know personally — neighbours across Ontario whose
                values and care match our own. When you stop in at the barn,
                you&rsquo;re tasting our community.
              </p>
            </div>

            {/* Stats row */}
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-leaf-100 ring-1 ring-leaf-100">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-cream-deep/50 px-5 py-6 text-center"
                >
                  <dt className="font-display text-3xl sm:text-4xl text-leaf-900">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm uppercase tracking-[0.14em] text-leaf-700">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
