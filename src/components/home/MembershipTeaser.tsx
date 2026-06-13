import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MembershipTeaser() {
  return (
    <section className="bg-green py-20">
      <Container>
        <SectionHeader eyebrow="Membership" title="Find Your Fit" light />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-dark/40 p-8 text-center ring-1 ring-white/10">
            <span aria-hidden="true" className="mb-3 block text-4xl">🏆</span>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">Full Membership</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">For competitive athletes who want to represent SSWV in YSVL and SVL league competitions.</p>
          </div>
          <div className="rounded-xl bg-dark/40 p-8 text-center ring-1 ring-white/10">
            <span aria-hidden="true" className="mb-3 block text-4xl">🏐</span>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">Recreational Membership</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">For players who want regular volleyball without a league commitment.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/membership" variant="outline-white">View Membership Options</Button>
        </div>
      </Container>
    </section>
  );
}
