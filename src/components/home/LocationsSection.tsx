import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LOCATIONS = [
  {
    name: "Fairfield",
    address: "Fairfield, NSW 2165",
    detail: "Check our socials for current session schedule",
    mapQuery: "Fairfield NSW 2165",
  },
  {
    name: "Bonnyrigg",
    address: "Bonnyrigg, NSW 2177",
    detail: "Check our socials for current session schedule",
    mapQuery: "Bonnyrigg NSW 2177",
  },
];

const PinIcon = (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = (
  <svg
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export function LocationsSection() {
  return (
    <section id="locations" className="scroll-mt-16 bg-surface py-20">
      <Container>
        <SectionHeader
          eyebrow="Where to Find Us"
          title="Our Locations"
          subtitle="Sessions run across two venues in South West Sydney."
        />
        <div className="mx-auto grid max-w-4xl divide-y divide-dark/10 border border-dark/10 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="flex flex-col p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-green text-white">
                  {PinIcon}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-wide text-dark">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{loc.address}</p>
                </div>
              </div>

              <div className="group mt-6 aspect-[4/3] w-full overflow-hidden border border-dark/10">
                <iframe
                  title={`Map of ${loc.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&z=13&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                {ClockIcon}
                <span>{loc.detail}</span>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-green hover:underline"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
