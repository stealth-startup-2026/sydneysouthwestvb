import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProgramBlock } from "@/components/programs/ProgramBlock";

const PROGRAMS = [
  {
    id: "social",
    title: "Social Trainings",
    eyebrow: "Open to All",
    flip: false,
    description:
      "Our social training sessions are the heartbeat of the club. Low-pressure, high-energy — these sessions are open to players of any skill level. Come to stay active, meet the community, and touch a volleyball without any expectation beyond having fun.",
    whoFor: "Anyone — complete beginners to experienced players",
    schedule: "Check our socials for current days and times",
    location: "Fairfield & Bonnyrigg (rotating)",
    image: "/images/program-social.jpg",
    imageAlt: "Players at a social training session",
  },
  {
    id: "scrims",
    title: "Weekly Scrims",
    eyebrow: "Game Experience",
    flip: true,
    description:
      "Nothing accelerates improvement like real match play. Our weekly scrims give you structured game time without the commitment of a league team. Organised into fair matches by our coaches, these sharpen your game-sense and decision-making under pressure.",
    whoFor: "Intermediate players wanting match experience",
    schedule: "Weekly — check socials for times",
    location: "Fairfield & Bonnyrigg",
    image: "/images/program-scrims.jpg",
    imageAlt: "Scrim match in action",
  },
  {
    id: "classes",
    title: "Beginner & Intermediate Classes",
    eyebrow: "Structured Development",
    flip: false,
    description:
      "Structured skill classes covering the full spectrum from fundamental movement to tactical play. Beginner classes focus on the basics — serve, pass, and set. Intermediate classes build on that with team positioning, transition play, and consistency under pressure.",
    whoFor: "New players (Beginner) and developing players (Intermediate)",
    schedule: "Term-based — check website for current enrolment",
    location: "Fairfield",
    image: "/images/program-classes.jpg",
    imageAlt: "Coach teaching a beginner class",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs & Training"
        subtitle="What We Offer"
        imageSrc="/images/hero-2.jpg"
        imageAlt="Training session"
      />
      <div className="divide-y divide-dark/5">
        {PROGRAMS.map((p) => (
          <ProgramBlock key={p.id} {...p} />
        ))}
      </div>
      <section aria-label="Contact prompt" className="bg-dark py-16">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Not sure which program suits you?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
              Get in touch and we&apos;ll point you in the right direction.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
