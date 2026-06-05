import { Container } from "@/components/ui/Container";

const PILLARS = [
  { icon: "🤝", title: "Community", body: "A welcoming club where beginners and seasoned players train side by side and lifelong friendships are formed." },
  { icon: "🏆", title: "Coaching", body: "Expert guidance from Coach Ba, Rob, and Steven — combining technical drills with game-sense development." },
  { icon: "⚡", title: "Competition", body: "Clear pathways into YSVL and SVL for players who want to test themselves in organised competition." },
];

export function WelcomeStrip() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Est. 2021 · Fairfield &amp; Bonnyrigg</p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Welcome to SSWV</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Sydney South West Volleyball is a community club built for everyone — whether you&apos;re picking up a ball for the first time or chasing a league title.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center">
              <span className="mb-4 block text-4xl">{p.icon}</span>
              <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
