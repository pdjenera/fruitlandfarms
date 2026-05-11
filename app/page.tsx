import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InSeason } from "./components/InSeason";
import { InstagramFeed } from "./components/InstagramFeed";
import { Location } from "./components/Location";
import { Story } from "./components/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <InSeason />
        <InstagramFeed />
        <Location />
      </main>
      <Footer />
    </>
  );
}
