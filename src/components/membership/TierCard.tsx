interface Feature {
  label: string;
  included: boolean;
}

interface TierCardProps {
  icon: string;
  name: string;
  tagline: string;
  price: string;
  features: Feature[];
  highlighted?: boolean;
}

export function TierCard({
  icon,
  name,
  tagline,
  price,
  features,
  highlighted = false,
}: TierCardProps) {
  return (
    <div
      className={`flex flex-col p-8 ${
        highlighted ? "bg-green" : "bg-white"
      }`}
    >
      <span aria-hidden="true" className="mb-3 block text-4xl">
        {icon}
      </span>
      <h3
        className={`font-heading text-2xl font-bold uppercase tracking-wide ${
          highlighted ? "text-white" : "text-dark"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-1 text-sm ${
          highlighted ? "text-white/80" : "text-muted"
        }`}
      >
        {tagline}
      </p>
      <p
        className={`mt-5 font-heading text-3xl font-bold ${
          highlighted ? "text-gold" : "text-dark"
        }`}
      >
        {price}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-3 text-sm">
            <span
              aria-hidden="true"
              className={`mt-0.5 shrink-0 ${
                f.included
                  ? highlighted
                    ? "text-gold"
                    : "text-green"
                  : "text-dark/20"
              }`}
            >
              {f.included ? "✓" : "✗"}
            </span>
            <span
              className={
                f.included
                  ? highlighted
                    ? "text-white"
                    : "text-dark"
                  : "text-muted/50"
              }
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="https://www.revolutionise.com.au/sswv"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 block rounded py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider transition ${
          highlighted
            ? "bg-gold text-dark hover:brightness-110"
            : "bg-forest text-white hover:bg-green"
        }`}
      >
        Join Now
      </a>
    </div>
  );
}
