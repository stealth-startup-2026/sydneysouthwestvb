import Image from "next/image";

interface ProgramBlockProps {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  whoFor: string;
  schedule: string;
  location: string;
  image: string;
  imageAlt: string;
  flip?: boolean;
}

export function ProgramBlock({
  id,
  title,
  eyebrow,
  description,
  whoFor,
  schedule,
  location,
  image,
  imageAlt,
  flip = false,
}: ProgramBlockProps) {
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row ${flip ? "md:flex-row-reverse" : ""}`}
    >
      <div className="relative h-72 flex-1 overflow-hidden md:h-auto">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center bg-white px-8 py-12 md:px-12">
        <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-dark sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        <dl className="mt-6 space-y-3 text-sm">
          {[
            ["Who it's for", whoFor],
            ["Schedule", schedule],
            ["Location", location],
          ].map(([dt, dd]) => (
            <div key={dt} className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-dark">{dt}</dt>
              <dd className="text-muted">{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
