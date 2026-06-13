// src/app/about/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const VALUES = [
  { icon: "🤝", title: "Community", body: "SSWV brings together players of all backgrounds and levels through regular training and competition." },
  { icon: "📈", title: "Development", body: "Structured skill development is offered at every level, from introductory sessions to competitive play." },
  { icon: "😄", title: "Fun", body: "Sessions balance structured training with an accessible, enjoyable environment." },
];

const COACHES = [
  { name: "Coach Ba", role: "Head Coach", initials: "B", bio: "Coach Ba leads SSWV's technical programs, drawing on competitive playing and coaching experience. The focus is on fundamentals, court awareness, and player development, using a patient, detail-oriented coaching approach." },
  { name: "Rob", role: "Assistant Coach", initials: "R", bio: "Rob brings match-play experience to every session. His competitive background informs how SSWV players are prepared for game day, with a focus on performing under pressure." },
  { name: "Steven", role: "Skills Coach", initials: "S", bio: "Steven works primarily with beginner and intermediate groups, building the foundational skills needed for the rest of the game. He uses structured progressions suited to new and developing players." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About SSWV" subtitle="Our Story" imageSrc="/images/about-hero.jpg" imageAlt="SSWV players on court" />

      <section aria-label="Our Story" className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="Who We Are" title="Our Story" />
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>Sydney South West Volleyball was founded in 2021 to provide access to volleyball training and competition in the South West Sydney community. The club caters to players at all levels, from beginners to competitive athletes.</p>
              <p>The club operates across two venues in Fairfield and Bonnyrigg. It has grown from a small training group into a club with competitive YSVL and SVL teams, a social program, and a dedicated coaching staff.</p>
              <p>SSWV accepts new members throughout the year across all of its programs.</p>
            </div>
            <blockquote className="mt-10 border-l-4 border-green pl-6">
              <p className="font-heading text-2xl font-bold uppercase tracking-wide text-green">&ldquo;Volleyball for everyone in South West Sydney.&rdquo;</p>
            </blockquote>
          </div>
        </Container>
      </section>

      <section aria-label="Our Values" className="bg-dark py-20">
        <Container>
          <SectionHeader eyebrow="What We Stand For" title="Our Values" light />
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center">
                <span aria-hidden="true" className="mb-4 block text-4xl">{v.icon}</span>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Our Coaching Team" className="bg-surface py-20">
        <Container>
          <SectionHeader eyebrow="The People Behind SSWV" title="Our Coaching Team"
            subtitle="Three coaches working across the club's social, development, and competitive programs." />
          <div className="grid gap-10 sm:grid-cols-3">
            {COACHES.map((coach) => (
              <div key={coach.name} className="text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-green font-heading text-4xl font-bold text-white ring-4 ring-green/20">
                  {coach.initials}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">{coach.name}</h3>
                <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">{coach.role}</p>
                <p className="text-sm leading-relaxed text-muted">{coach.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
