export function SectionHeader({
  eyebrow, title, subtitle, light = false, className = "",
}: {
  eyebrow?: string; title: string; subtitle?: string; light?: boolean; className?: string;
}) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
      )}
      <h2 className={`font-heading text-4xl font-bold uppercase tracking-wide sm:text-5xl ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
