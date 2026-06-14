import Link from "next/link";
import { Alfa_Slab_One, Bricolage_Grotesque } from "next/font/google";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { WelcomeStrip } from "@/components/home/WelcomeStrip";
import { ProgramsSnapshot } from "@/components/home/ProgramsSnapshot";
import { MembershipTeaser } from "@/components/home/MembershipTeaser";
import { CoachesSection } from "@/components/home/CoachesSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { JoinCtaBanner } from "@/components/home/JoinCtaBanner";

const alfaSlab = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <section aria-label="Hero" className="relative flex min-h-[80vh] items-center overflow-hidden bg-forest">
        <HeroSlideshow />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: alfaSlab.style.fontFamily }}
            className="text-5xl uppercase leading-[1.05] tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="block">Sydney</span>
            <span className="block">South West</span>
            <span className="block text-gold">Volleyball</span>
          </h1>
          <p style={{ fontFamily: bricolage.style.fontFamily }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Social trainings, weekly scrims, and competitive teams in Fairfield &amp; Bonnyrigg, South West Sydney.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
              className="rounded bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-dark transition hover:brightness-110">
              Join the Club
            </a>
            <Link href="/about"
              className="rounded border border-white px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <WelcomeStrip />
      <ProgramsSnapshot />
      <MembershipTeaser />
      <CoachesSection />
      <LocationsSection />
      <JoinCtaBanner />
    </>
  );
}
