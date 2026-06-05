// src/app/about/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const VALUES = [
  { icon: "🤝", title: "Community", body: "We believe sport is a vehicle for connection. SSWV is a place where players from all walks of life come together, support each other, and grow." },
  { icon: "📈", title: "Development", body: "Every player deserves quality coaching. We invest in structured skill development at every level — from first touches to competitive play." },
  { icon: "😄", title: "Fun", body: "Volleyball should be enjoyable. We balance serious training with an atmosphere that keeps every session something to look forward to." },
];

const COACHES = [
  { name: "Coach Ba", role: "Head Coach", initials: "B", bio: "Coach Ba is the driving force behind SSWV's technical programs. With competitive and coaching experience, Ba leads with a focus on fundamentals, court awareness, and player confidence. Known for a patient, detail-oriented style that brings out the best in players at every stage." },
  { name: "Rob", role: "Assistant Coach", initials: "R", bio: "Rob brings a deep understanding of match-play to every session. His competitive background means he knows what it takes to perform under pressure — and he channels that into preparing SSWV players for game day. Known for his energy and genuine encouragement." },
  { name: "Steven", role: "Skills Coach", initials: "S", bio: "Steven works primarily with beginner and intermediate groups, building the foundational skills that make the rest of the game click. His approachable style and structured progressions have helped dozens of first-time players fall in love with volleyball." },
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
              <p>Sydney South West Volleyball was founded in 2021 with a simple mission: give the South West Sydney community access to quality volleyball, without the barriers. Whether you&apos;re a complete beginner, a returning player, or a competitive athlete chasing a league title — SSWV has a place for you.</p>
              <p>We operate across two venues in Fairfield and Bonnyrigg, making us accessible to players right across the south west corridor. In just a few years, we&apos;ve grown from a small training group into a club with competitive YSVL and SVL teams, a thriving social program, and a coaching staff that genuinely cares about player development.</p>
              <p>At SSWV, the scoreline matters — but so does the person celebrating beside you after the rally.</p>
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
            subtitle="Three coaches, one shared goal — making you a better player and making SSWV a club you're proud to be part of." />
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
