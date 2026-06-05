import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/teams/TeamCard";
import { TrialsCta } from "@/components/teams/TrialsCta";

export default function TeamsPage() {
  return (
    <>
      <PageHero
        title="Our Teams"
        subtitle="Competitive Volleyball"
        imageSrc="/images/hero-3.jpg"
        imageAlt="SSWV team"
      />

      <section
        aria-label="Competitive pathways overview"
        className="bg-white py-16"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Pathways at SSWV" title="From Social to Competitive" />
            <p className="text-base leading-relaxed text-muted">
              SSWV runs competitive teams in both the Youth Sydney Volleyball
              League (YSVL) and the Sydney Volleyball League (SVL). If
              you&apos;ve been building your game through our social programs
              and want to take the next step, our competitive teams are the
              natural pathway.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="YSVL Teams" className="bg-surface py-16">
        <Container>
          <SectionHeader
            eyebrow="Youth Competition"
            title="YSVL Teams"
            subtitle="The Youth Sydney Volleyball League — structured junior competition for players aged 12–18 looking to test themselves in an organised setting."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <TeamCard
              name="SSWV Youth"
              league="Youth Sydney Volleyball League"
              division="Junior"
              description="Our YSVL squad competes in organised junior competition across the Sydney metro area. Coached with a development-first mindset, players build competitive experience while continuing to grow technically and as teammates."
              image="/images/teams-ysvl.jpg"
              imageAlt="SSWV youth team"
            />
            <div className="flex items-center justify-center rounded-xl bg-white p-8 ring-1 ring-dark/5 text-center">
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-dark">
                  More Teams Coming
                </p>
                <p className="mt-3 text-sm text-muted">
                  We&apos;re growing. Additional YSVL divisions will be added
                  as the club expands. Check our socials for updates.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="SVL Teams" className="bg-dark py-16">
        <Container>
          <SectionHeader
            eyebrow="Adult Competition"
            title="SVL Teams"
            subtitle="The Sydney Volleyball League — adult competition for players ready to represent SSWV at a higher level."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <TeamCard
              name="SSWV Men's"
              league="Sydney Volleyball League"
              division="D2 Men's"
              description="The SSWV Men's team competes in Division 2 of the SVL. A tight-knit squad focused on building consistency and pushing for promotion. EOIs open each season — contact us to find out more."
              image="/images/teams-svl.jpg"
              imageAlt="SSWV men's team match"
            />
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-8 ring-1 ring-white/10 text-center">
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                  Women&apos;s Team — Coming Soon
                </p>
                <p className="mt-3 text-sm text-white/60">
                  We&apos;re working on establishing a Women&apos;s SVL team.
                  Register your interest through our contact page.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrialsCta />
    </>
  );
}
