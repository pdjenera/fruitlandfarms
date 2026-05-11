import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Fruitland Farms — Serving Nature's Best Since 1964",
  description:
    "Three generations of family farming in Stoney Creek, Ontario. Fresh fruits and vegetables grown on-farm, alongside the best produce from our neighbours.",
  metadataBase: new URL("https://www.fruitlandfarms.ca"),
  openGraph: {
    title: "Fruitland Farms — Serving Nature's Best Since 1964",
    description:
      "Three generations of family farming in Stoney Creek, Ontario. Fresh fruits and vegetables grown on-farm, alongside the best produce from our neighbours.",
    type: "website",
    locale: "en_CA",
  },
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
        {children}
      </body>
    </html>
  );
}
