import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PROGRAMS = [
  { title: "Social Trainings", description: "Low-pressure, high-fun sessions open to all levels. Stay active and meet the SSWV community.", image: "/images/program-social.jpg", href: "/programs#social" },
  { title: "Weekly Scrims", description: "Informal match play every week. Sharpen your game-sense in real rallies without the league commitment.", image: "/images/program-scrims.jpg", href: "/programs#scrims" },
  { title: "Beginner & Intermediate Classes", description: "Structured sessions from your first serve to tactical court positioning.", image: "/images/program-classes.jpg", href: "/programs#classes" },
];

export function ProgramsSnapshot() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader eyebrow="What We Offer" title="Programs for Every Level"
          subtitle="From your very first touch of the ball to stepping onto a competitive court — we have a program for you." />
        <div className="grid gap-6 sm:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-dark/5 transition hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
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
