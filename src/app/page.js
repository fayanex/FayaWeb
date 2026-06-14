import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import WovenThreads from '@/components/WovenThreads';
import ClosedVsLine from '@/components/ClosedVsLine';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

const highlights = [
  {
    k: 'Industry 5.0',
    t: 'Intelligent by architecture',
    d: 'Built on an Industry 5.0 foundation — sensing, adapting and coordinating its own process rather than running a fixed line.',
  },
  {
    k: 'Closed design',
    t: 'A single, self-contained unit',
    d: 'Not a chain of separate machines bolted together. One closed-architecture system where every stage works as a whole.',
  },
  {
    k: 'Extrude to bag',
    t: 'The full cycle, end to end',
    d: 'Polymer tape is extruded and converted into a finished woven bag inside the same system — with no hand-off between stations.',
  },
  {
    k: 'Made in India',
    t: 'Engineered in Mysore',
    d: 'Designed and developed in-house, advancing domestic capability in technical-textile machinery.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* positioning strip */}
      <section className="relative border-y border-line bg-surface/40">
        <Shell className="py-10">
          <Reveal>
            <p className="font-display text-lg font-medium leading-relaxed text-silver sm:text-xl">
              Fayanex is a deep-tech industrial machinery company building{' '}
              <span className="text-chrome">
                an integrated woven-bag machine that thinks, extrudes and converts
              </span>{' '}
              &mdash; in one closed Industry 5.0 system.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* the system: closed vs line */}
      <section className="relative py-24 sm:py-32">
        <Shell>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The system</Eyebrow>
              <SteelHeading className="mt-5 text-4xl sm:text-5xl">
                Engineering past the production line
              </SteelHeading>
              <p className="mt-6 max-w-xl leading-relaxed text-silver">
                Conventional woven-bag production is a relay of disconnected machines, losing time,
                material and quality at every hand-off. We are designing a single intelligent system
                that owns the entire process.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-14">
            <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              <ClosedVsLine className="w-full min-w-[680px]" />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.k} delay={i * 0.07}>
                <div className="panel h-full border-0 bg-void p-7">
                  <p className="eyebrow">{h.k}</p>
                  <h3 className="mt-4 font-display text-lg font-medium text-chrome">{h.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{h.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <Link href="/technology/" className="btn-ghost">
              How it works
            </Link>
          </Reveal>
        </Shell>
      </section>

      {/* products preview */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
        <div className="pointer-events-none absolute right-[-60px] top-1/2 hidden w-[440px] -translate-y-1/2 opacity-30 lg:block">
          <WovenThreads className="w-full" />
        </div>
        <Shell>
          <Reveal>
            <Eyebrow>What we&rsquo;re building</Eyebrow>
            <SteelHeading className="mt-5 max-w-2xl text-4xl sm:text-5xl">
              A machine still taking shape in R&amp;D
            </SteelHeading>
            <p className="mt-6 max-w-lg leading-relaxed text-silver">
              Our first system is in active research and development. We&rsquo;re not publishing model
              names or specifications yet &mdash; but the direction is set: one integrated, autonomous,
              closed-architecture machine.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <Link href="/products/" className="btn-chrome">
              See the vision
            </Link>
          </Reveal>
          <Blade className="mt-20" />
        </Shell>
      </section>
    </>
  );
}
