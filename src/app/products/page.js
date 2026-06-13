import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

export const metadata = {
  title: 'What We’re Building',
  description:
    'Fayanex’s first system is in active R&D — an integrated, closed-architecture Industry 5.0 machine that extrudes and converts woven bags end to end.',
};

const principles = [
  {
    t: 'Integrated',
    d: 'Extrusion through conversion, unified in one machine — no relay between separate stations.',
  },
  {
    t: 'Autonomous',
    d: 'The system runs the full cycle on its own, coordinating each stage without manual hand-offs.',
  },
  {
    t: 'Closed architecture',
    d: 'A single self-contained unit engineered as a whole, not assembled from off-the-shelf parts.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We’re Building"
        title="In active research & development"
        intro="Our first machine is taking shape. We’re holding model names and specifications back while the work matures — here is the direction it’s heading."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="relative overflow-hidden border border-line bg-surface/30 p-10 sm:p-16">
            <span className="absolute right-6 top-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
              Status: R&amp;D
            </span>
            <Reveal>
              <Eyebrow>The concept</Eyebrow>
              <SteelHeading className="mt-5 max-w-3xl text-3xl sm:text-4xl">
                One machine that extrudes and converts a woven bag by itself
              </SteelHeading>
              <p className="mt-7 max-w-2xl leading-relaxed text-silver">
                Built on Industry 5.0 architecture, the system is designed to
                take polymer in and produce a finished woven bag out &mdash;
                handling the entire cycle within a single closed unit. It is the
                first product of a company set up to rethink how technical
                textiles are made.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {principles.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.08}>
                  <div className="panel h-full border-0 bg-void p-7">
                    <h3 className="font-display text-lg font-medium text-chrome">
                      {p.t}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md leading-relaxed text-silver">
                Interested in following the development, or exploring a
                partnership? We&rsquo;d like to hear from you.
              </p>
              <Link href="/contact/" className="btn-chrome shrink-0">
                Contact Fayanex
              </Link>
            </div>
          </Reveal>
          <Blade className="mt-20" />
        </Shell>
      </section>
    </>
  );
}
