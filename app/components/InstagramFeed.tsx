import Image from "next/image";
import { getInstagramPosts } from "@/lib/instagram-live";
import { site } from "@/lib/site";
import { ArrowUpRight, Instagram as IgIcon } from "./Icons";

export async function InstagramFeed() {
  const { posts } = await getInstagramPosts();

  return (
    <section
      id="instagram"
      className="relative py-24 sm:py-32 bg-cream-deep/60 bg-grain"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-leaf-700">
              <span className="h-px w-10 bg-harvest-500" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em]">
                Latest from the Farm
              </span>
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-leaf-900 leading-[1.05]">
              Follow along on{" "}
              <span className="italic">Instagram</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-leaf-900/75">
              From the first strawberry of June to the last pumpkin in October,
              we share the season as it happens. Tap a post to see it on
              Instagram.
            </p>
          </div>

          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2.5 rounded-full bg-leaf-700 px-5 py-3 text-sm font-medium text-cream hover:bg-leaf-900 transition-colors"
          >
            <IgIcon className="h-4 w-4" />
            {site.social.instagramHandle}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-12 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <li
              key={post.id}
              className={
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : index === 3
                    ? "lg:col-span-2"
                    : ""
              }
            >
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl ring-1 ring-leaf-900/10 bg-leaf-100"
                aria-label={`View on Instagram: ${post.caption}`}
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  unoptimized={
                    post.image.includes("cdninstagram.com") ||
                    post.image.includes("fbcdn.net")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/85 via-leaf-900/0 to-leaf-900/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-cream translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <IgIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    <p className="text-xs sm:text-sm leading-snug line-clamp-3">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
