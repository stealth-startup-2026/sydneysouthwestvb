import Image from "next/image";

interface TeamCardProps {
  name: string;
  league: string;
  description: string;
  image: string;
  imageAlt: string;
  division?: string;
}

export function TeamCard({
  name,
  league,
  description,
  image,
  imageAlt,
  division,
}: TeamCardProps) {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {division && (
          <span className="absolute left-4 top-4 bg-gold px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-dark">
            {division}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-widest text-green">
          {league}
        </p>
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
