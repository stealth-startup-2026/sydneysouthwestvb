import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TierCard } from "@/components/membership/TierCard";
import { FaqAccordion } from "@/components/membership/FaqAccordion";

const FULL_FEATURES = [
  { label: "All social training sessions", included: true },
  { label: "Weekly scrims", included: true },
  { label: "Beginner & Intermediate classes", included: true },
  { label: "YSVL league competition", included: true },
  { label: "SVL league competition", included: true },
  { label: "Coaching from Ba, Rob & Steven", included: true },
  { label: "Club jersey eligibility", included: true },
];

const REC_FEATURES = [
  { label: "All social training sessions", included: true },
  { label: "Weekly scrims", included: true },
  { label: "Beginner & Intermediate classes", included: true },
  { label: "YSVL league competition", included: false },
  { label: "SVL league competition", included: false },
  { label: "Coaching from Ba, Rob & Steven", included: true },
  { label: "Club jersey eligibility", included: false },
];

const WHY = [
  {
    icon: "🧠",
    title: "Expert Coaching",
    body: "Learn from Coach Ba, Rob, and Steven — combining competitive experience with a genuine passion for player development.",
  },
  {
    icon: "⚡",
    title: "Technical + Fun",
    body: "The perfect mix of structured skill training and enjoyable gameplay. You'll improve every session and actually look forward to coming back.",
  },
  {
    icon: "👫",
    title: "Community",
    body: "Meet new people, stay active, and become part of a club that genuinely looks out for one another on and off the court.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Join the Club"
        subtitle="Membership"
        imageSrc="/images/hero-4.jpg"
        imageAlt="SSWV members"
      />

      <section aria-label="Membership tiers" className="bg-surface py-20">
        <Container>
          <SectionHeader
            eyebrow="Choose Your Membership"
            title="Find Your Fit"
            subtitle="Two membership options — both built around a love of volleyball and a great community."
          />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <TierCard
              icon="🏆"
              name="Full Membership"
              tagline="For competitive athletes hitting the courts in YSVL & SVL."
              price="TBC per season"
              features={FULL_FEATURES}
              highlighted
            />
            <TierCard
              icon="🏐"
              name="Recreational Membership"
              tagline="For players who love the sport without the league commitment."
              price="TBC per season"
              features={REC_FEATURES}
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Pricing confirmed each season — contact us for current rates.
          </p>
        </Container>
      </section>

      <section aria-label="Why join SSWV" className="bg-dark py-20">
        <Container>
          <SectionHeader eyebrow="Why SSWV?" title="Why Join Us?" light />
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center"
              >
                <span aria-hidden="true" className="mb-4 block text-4xl">
                  {w.icon}
                </span>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">
                  {w.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-label="Frequently asked questions"
        className="bg-white py-20"
      >
        <Container>
          <SectionHeader eyebrow="Questions?" title="Frequently Asked" />
          <FaqAccordion />
        </Container>
      </section>
    </>
  );
}
