import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { num: "01", label: "Fill out the EOI form via our contact page" },
  { num: "02", label: "We'll email you the trial date and details" },
  { num: "03", label: "Attend the trial on the scheduled date" },
  { num: "04", label: "Successful players are notified and onboarded" },
];

export function TrialsCta() {
  return (
    <section aria-label="Trials process" className="bg-green py-20">
      <Container>
        <div className="text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-white/70">
            Want to Compete?
          </p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Express Your Interest
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
            Trials for YSVL and SVL teams are held each season. Here&apos;s how it works:
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex gap-4 rounded-xl bg-dark/30 px-6 py-5"
            >
              <span className="font-heading text-3xl font-bold text-gold/50">
                {step.num}
              </span>
              <p className="text-sm leading-relaxed text-white">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" variant="outline-white">
            Express Interest
          </Button>
        </div>
      </Container>
    </section>
  );
}
