import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const COACHES = [
  { name: "Coach Ba", role: "Head Coach", initials: "B", bio: "Head coach focused on technical fundamentals and game strategy, leading SSWV's player development programs." },
  { name: "Rob", role: "Assistant Coach", initials: "R", bio: "Brings competitive playing experience to sessions, focusing on team dynamics, match-play preparation, and on-court leadership." },
  { name: "Steven", role: "Skills Coach", initials: "S", bio: "Works with beginner and intermediate groups, using structured progressions to build foundational skills." },
];

export function CoachesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeader eyebrow="The People Behind SSWV" title="Meet Our Coaches"
          subtitle="Our coaching team combines competitive playing and coaching experience across all programs." />
        <div className="grid gap-8 sm:grid-cols-3">
          {COACHES.map((coach) => (
            <div key={coach.name} className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center bg-green font-heading text-3xl font-bold text-white ring-4 ring-green/20">
                {coach.initials}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-dark">{coach.name}</h3>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{coach.role}</p>
              <p className="text-sm leading-relaxed text-muted">{coach.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
