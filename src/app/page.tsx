import { AmbientBackground } from "@/components/AmbientBackground";
import { BeingsSection } from "@/components/BeingsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LawSection } from "@/components/LawSection";
import { ThemesSection } from "@/components/ThemesSection";
import { WorldSection } from "@/components/WorldSection";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <WorldSection />
        <LawSection />
        <BeingsSection />
        <ThemesSection />
      </main>
      <Footer />
    </>
  );
}
