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
              League (YSVL) and the Sydney Volleyball League (SVL). These teams
              provide a pathway for players progressing from the club&apos;s
              social programs into organised competition.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="YSVL Teams" className="bg-surface py-16">
        <Container>
          <SectionHeader
            eyebrow="Youth Competition"
            title="YSVL Teams"
            subtitle="The Youth Sydney Volleyball League — structured junior competition for players aged 12–18 in an organised setting."
          />
          <div className="grid divide-y divide-dark/10 border border-dark/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <TeamCard
              name="SSWV Youth"
              league="Youth Sydney Volleyball League"
              division="Junior"
              description="The YSVL squad competes in junior competition across the Sydney metro area. Coaching focuses on player development alongside competitive experience."
              image="/images/teams-ysvl.jpg"
              imageAlt="SSWV youth team"
            />
            <div className="flex items-center justify-center bg-white p-8 text-center">
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-dark">
                  More Teams Coming
                </p>
                <p className="mt-3 text-sm text-muted">
                  Additional YSVL divisions will be added as the club expands.
                  Check our socials for updates.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="SVL Teams" className="bg-forest py-16">
        <Container>
          <SectionHeader
            eyebrow="Adult Competition"
            title="SVL Teams"
            subtitle="The Sydney Volleyball League — adult competition for players ready to represent SSWV at a higher level."
            light
          />
          <div className="grid divide-y divide-white/10 border border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <TeamCard
              name="SSWV Men's"
              league="Sydney Volleyball League"
              division="D2 Men's"
              description="The SSWV Men's team competes in Division 2 of the SVL, focused on building consistency across the season. Expressions of interest open each season — contact us for details."
              image="/images/teams-svl.jpg"
              imageAlt="SSWV men's team match"
            />
            <div className="flex items-center justify-center bg-white/10 p-8 text-center">
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
