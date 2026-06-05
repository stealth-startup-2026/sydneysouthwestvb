import Link from "next/link";
import Image from "next/image";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { WelcomeStrip } from "@/components/home/WelcomeStrip";
import { ProgramsSnapshot } from "@/components/home/ProgramsSnapshot";
import { MembershipTeaser } from "@/components/home/MembershipTeaser";
import { CoachesSection } from "@/components/home/CoachesSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { JoinCtaBanner } from "@/components/home/JoinCtaBanner";

export default function HomePage() {
  return (
    <>
      <section aria-label="Hero" className="relative flex min-h-[90vh] items-center overflow-hidden bg-dark">
        <HeroSlideshow />
        <div aria-hidden="true" className="absolute bottom-8 right-8 z-10 opacity-20">
          <Image src="/images/logo.jpg" alt="" width={100} height={100} className="rounded-full" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Sydney South West Volleyball · Est. 2021
          </p>
          <h1 className="max-w-2xl font-heading text-5xl font-bold uppercase leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
            Where Community Meets <span className="text-gold">the Court</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
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
