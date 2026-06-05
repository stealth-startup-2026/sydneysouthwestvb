import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LOCATIONS = [
  { name: "Fairfield", address: "Fairfield, NSW 2165", detail: "Check our socials for current session schedule" },
  { name: "Bonnyrigg", address: "Bonnyrigg, NSW 2177", detail: "Check our socials for current session schedule" },
];

export function LocationsSection() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader eyebrow="Where to Find Us" title="Our Locations"
          subtitle="We run sessions across two venues in South West Sydney — close to home for our community." />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-dark/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green text-xl">📍</div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">{loc.name}</h3>
              <p className="mt-1 text-sm text-muted">{loc.address}</p>
              <div className="mt-4 flex h-36 items-center justify-center rounded-lg bg-dark/8 text-sm text-muted">Map placeholder</div>
              <p className="mt-3 text-xs text-muted">{loc.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
