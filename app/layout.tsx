import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { BASE_URL, localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const title = `${site.name} | Farm Market & Fruit Stand in ${site.region}`;
const description =
  "Fruitland Farms is a family-run farm market and fruit stand in Stoney Creek, Ontario. Visit our farmers market for fresh, locally grown fruits and vegetables — three generations strong since 1964.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [...site.keywords],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: site.name, url: BASE_URL }],
  category: "shopping",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: BASE_URL,
    siteName: site.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // Add `verification: { google: "..." }` here once you claim the site in
  // Google Search Console (Settings → Ownership verification → HTML tag).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-leaf-900">
        {/* Local business structured data — helps Google show a map card,
            hours, and rich local-search results for "farm market",
            "fruit stand", and "farmers market" queries near Stoney Creek. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
