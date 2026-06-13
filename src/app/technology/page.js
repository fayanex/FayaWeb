import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import TechProcess from '@/components/TechProcess';
import WovenThreads from '@/components/WovenThreads';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

export const metadata = {
  title: 'Technology',
  description:
    'How Fayanex approaches Industry 5.0: an integrated, closed-architecture machine that extrudes and converts woven bags as one intelligent system.',
};

const pillars = [
  {
    t: 'Industry 5.0 at the core',
    d: 'The system is built to sense and adapt. Instead of a fixed sequence, it coordinates its own stages — bringing intelligence and resilience to a process that has stayed largely mechanical for decades.',
  },
  {
    t: 'One closed architecture',
    d: 'Where a conventional plant strings together separate extrusion, weaving and conversion machines, Fayanex is engineering a single closed unit. Fewer hand-offs, a smaller footprint and a process that behaves as one.',
  },
  {
    t: 'Extrusion and conversion, unified',
    d: 'Integrating extrusion through to a finished bag in the same machine removes the gaps where time, material and quality are lost between stations — the heart of what makes the design different.',
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="An intelligent machine, not a production line"
        intro="Fayanex reimagines woven-bag manufacturing as a single, self-aware system rather than a relay of disconnected machines."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-14">
              {pillars.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-white to-silver" />
                      <span className="hairline flex-1" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-medium text-chrome">
                      {p.t}
                    </h2>
                    <p className="mt-4 max-w-md leading-relaxed text-silver">
                      {p.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="sticky top-32 w-full max-w-md">
                <Reveal>
                  <WovenThreads className="w-full opacity-80" />
                  <p className="mt-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted">
                    Tape interlacing into woven fabric
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Shell>
          <Reveal>
            <Eyebrow>The cycle</Eyebrow>
            <SteelHeading className="mt-5 max-w-2xl text-3xl sm:text-4xl">
              Four stages, one continuous system
            </SteelHeading>
            <p className="mt-6 max-w-lg leading-relaxed text-silver">
              The same machine carries material from raw polymer to finished
              bag. Shown here at the conceptual level &mdash; the engineering
              detail stays in-house.
            </p>
          </Reveal>
          <div className="mt-16">
            <TechProcess />
          </div>
          <Blade className="mt-20" />
        </Shell>
      </section>
    </>
  );
}
