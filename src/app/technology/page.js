import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import TechProcess from '@/components/TechProcess';
import FeedbackLoop from '@/components/FeedbackLoop';
import ClosedVsLine from '@/components/ClosedVsLine';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

export const metadata = {
  title: 'Technology',
  description:
    'How Fayanex approaches Industry 5.0: an integrated, closed-architecture machine that extrudes and converts woven bags as one intelligent system.',
};

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="An intelligent machine, not a production line"
        intro="Fayanex reimagines woven-bag manufacturing as a single, self-aware system rather than a relay of disconnected machines."
      />

      {/* intelligence layer */}
      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Industry 5.0 at the core</Eyebrow>
              <SteelHeading className="mt-5 text-3xl sm:text-4xl">
                The machine senses, decides and acts
              </SteelHeading>
              <div className="mt-6 space-y-5 leading-relaxed text-silver">
                <p>
                  Instead of running a fixed sequence, the system reads every stage through embedded
                  sensors, decides on an integrated control layer, and adjusts the process in real
                  time &mdash; a closed loop that runs continuously.
                </p>
                <p>
                  It&rsquo;s the difference between a machine that simply moves and one that
                  understands what it&rsquo;s doing: intelligence and resilience brought to a process
                  that has stayed largely mechanical for decades.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
                <FeedbackLoop className="w-full min-w-[560px]" />
              </div>
              <p className="mt-5 text-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                Sense &rarr; decide &rarr; act, continuously
              </p>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* the cycle */}
      <section className="border-t border-line py-24 sm:py-32">
        <Shell>
          <Reveal>
            <Eyebrow>The cycle</Eyebrow>
            <SteelHeading className="mt-5 max-w-2xl text-3xl sm:text-4xl">
              Four stages, one continuous system
            </SteelHeading>
            <p className="mt-6 max-w-lg leading-relaxed text-silver">
              The same machine carries material from raw polymer to finished bag, with no hand-off
              between stations. Shown here at the conceptual level &mdash; the engineering detail
              stays in-house.
            </p>
          </Reveal>
          <div className="mt-16">
            <TechProcess />
          </div>
        </Shell>
      </section>

      {/* closed architecture */}
      <section className="border-t border-line py-24 sm:py-32">
        <Shell>
          <Reveal>
            <Eyebrow>One closed architecture</Eyebrow>
            <SteelHeading className="mt-5 max-w-2xl text-3xl sm:text-4xl">
              One unit, where others connect many
            </SteelHeading>
            <p className="mt-6 max-w-xl leading-relaxed text-silver">
              A conventional plant strings together separate extrusion, weaving and conversion
              machines. Fayanex is engineering a single closed unit &mdash; fewer hand-offs, a smaller
              footprint, and a process that behaves as one.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              <ClosedVsLine className="w-full min-w-[680px]" />
            </div>
          </Reveal>
          <Blade className="mt-20" />
        </Shell>
      </section>
    </>
  );
}
