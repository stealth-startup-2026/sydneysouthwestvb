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
    body: "Coaching from Coach Ba, Rob, and Steven, combining competitive and coaching experience across all programs.",
  },
  {
    icon: "⚡",
    title: "Technical + Fun",
    body: "A combination of structured skill training and regular gameplay in every session.",
  },
  {
    icon: "👫",
    title: "Community",
    body: "Meet new people and stay active as part of a community volleyball club.",
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
            subtitle="Two membership options covering social and competitive participation."
          />
          <div className="mx-auto grid max-w-4xl divide-y divide-dark/10 border border-dark/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <TierCard
              icon="🏆"
              name="Full Membership"
              tagline="For competitive athletes playing in YSVL and SVL."
              price="TBC per season"
              features={FULL_FEATURES}
              highlighted
            />
            <TierCard
              icon="🏐"
              name="Recreational Membership"
              tagline="For players who want regular volleyball without a league commitment."
              price="TBC per season"
              features={REC_FEATURES}
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Pricing confirmed each season — contact us for current rates.
          </p>
        </Container>
      </section>

      <section aria-label="Why join SSWV" className="bg-forest py-20">
        <Container>
          <SectionHeader eyebrow="Why SSWV?" title="Why Join Us?" light />
          <div className="grid divide-y divide-white/10 border border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="bg-white/5 px-6 py-10 text-center"
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
