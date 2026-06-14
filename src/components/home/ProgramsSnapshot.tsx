import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PROGRAMS = [
  { title: "Social Trainings", description: "Sessions open to all skill levels, focused on staying active and playing regularly.", image: "/images/program-social.jpg", href: "/programs#social" },
  { title: "Weekly Scrims", description: "Informal match play each week, offering game experience without a league commitment.", image: "/images/program-scrims.jpg", href: "/programs#scrims" },
  { title: "Beginner & Intermediate Classes", description: "Structured sessions covering fundamentals through to tactical court positioning.", image: "/images/program-classes.jpg", href: "/programs#classes" },
];

export function ProgramsSnapshot() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader eyebrow="What We Offer" title="Programs for Every Level"
          subtitle="Programs covering all levels, from introductory sessions to competitive play." />
        <div className="grid divide-y divide-dark/10 border border-dark/10 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="group flex flex-col transition-colors hover:bg-surface">
              <div className="relative h-48 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-dark">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <Link href={p.href} className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-green hover:underline">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
