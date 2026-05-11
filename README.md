# Fruitland Farms

A modern, single-page website for our family's farm shop in Stoney Creek, Ontario.

> _Serving Nature's Best Since 1964._

Built with [Next.js 16](https://nextjs.org), TypeScript, and Tailwind CSS v4.

## Sections

The site is one page with a sticky header that smooth-scrolls between:

1. **Hero** — barn photo + the family tagline
2. **Our Story** — three generations of farming since 1964
3. **In Season** — produce grid that automatically updates based on the current month
4. **Latest** — Instagram-style grid linking to [@fruitlandfarms](https://www.instagram.com/fruitlandfarms/)
5. **Visit Us** — interactive Google Maps embed with a "Get Directions" CTA
6. **Footer** — section links + Facebook + Instagram

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Where to edit content

Most copy and configuration lives in `lib/`:

- `lib/site.ts` — business name, address, social links, navigation sections.
  Update the address or coordinates here and the header, footer, and map all
  follow.
- `lib/seasonal.ts` — produce list and which months each item is available.
  The "In Season" section reads the visitor's current month and filters this
  list automatically.
- `lib/instagram.ts` — placeholder Instagram posts. See the comment at the top
  of the file for two ways to keep this current (manual updates, or wiring up
  [Behold.so](https://behold.so) for an auto-syncing widget).

## Replacing images

The hero, story, and Instagram sections currently use high-quality
placeholder photos from Unsplash so the site looks great out of the box.
To use real Fruitland Farms photography:

1. Drop image files into `public/images/`.
2. Replace the `src` URL in `app/components/Hero.tsx`, `Story.tsx`, and the
   `image` field in `lib/instagram.ts`.

## Design system

A small custom palette is defined in `app/globals.css`:

- `cream` / `cream-deep` / `paper` — warm backgrounds
- `leaf-50…900` — brand greens (deep farm green for primary surfaces)
- `barn-500…900` — earthy browns
- `harvest-400…600` — warm orange accents

Typography:

- Display: **Fraunces** (Google Fonts) for headings
- Body: **Inter** (Google Fonts)

## Deploying

This is a standard Next.js app and can be deployed to Vercel, Netlify, or
any Node-capable host with `npm run build && npm start`.
