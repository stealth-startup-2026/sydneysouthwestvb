import { Container } from "@/components/ui/Container";

export function JoinCtaBanner() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Ready to Join <span className="text-gold">the Pandas?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            SSWV offers programs for both social and competitive players across South West Sydney.
          </p>
          <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block rounded bg-gold px-10 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-dark transition hover:brightness-110">
            Join Now
          </a>
        </div>
      </Container>
    </section>
  );
}
