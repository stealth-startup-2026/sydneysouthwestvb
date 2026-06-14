import Image from "next/image";
import { Container } from "./Container";

export function PageHero({
  title, subtitle, imageSrc, imageAlt = "",
}: {
  title: string; subtitle?: string; imageSrc?: string; imageAlt?: string;
}) {
  return (
    <section className="relative flex h-64 items-end bg-forest md:h-80">
      {imageSrc && (
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover opacity-30" preload sizes="100vw" />
      )}
      <div className="relative z-10 w-full border-b-4 border-green pb-8 pt-24">
        <Container>
          {subtitle && (
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-gold">{subtitle}</p>
          )}
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl">
            {title}
          </h1>
        </Container>
      </div>
    </section>
  );
}
