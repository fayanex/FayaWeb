import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import MysoreMap from '@/components/MysoreMap';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

export const metadata = {
  title: 'About',
  description:
    'Fayanex Ventures is a deep-tech industrial machinery company based in Mysore, bringing Industry 5.0 to technical-textile manufacturing.',
};

const distinctions = [
  {
    t: 'Deep-tech, not assembly',
    d: 'We engineer machinery from first principles rather than reselling or integrating existing equipment.',
  },
  {
    t: 'Whole-system thinking',
    d: 'Our advantage comes from designing the entire process as one machine, where others connect many.',
  },
  {
    t: 'Built in India',
    d: 'Developed in Mysore, advancing domestic capability in a field long dependent on imported machinery.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Rethinking how technical textiles are made"
        intro="Fayanex Ventures is a deep-tech industrial machinery company on a focused mission: bring Industry 5.0 to woven-bag manufacturing."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-medium leading-snug text-chrome">
                A Mysore-based team building machinery that thinks
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-silver">
                <p>
                  Fayanex was founded to close a gap in Indian manufacturing: the machinery behind
                  technical textiles has stayed mechanical and fragmented while the rest of industry
                  moved toward intelligent, connected systems.
                </p>
                <p>
                  We&rsquo;re a small, technical team working at the intersection of mechanical
                  engineering, materials and automation &mdash; designing a machine that owns the full
                  path from polymer to finished woven bag.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Eyebrow>Our vision</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-medium leading-snug text-chrome">
                Industry 5.0 for an industry that hasn&rsquo;t had it
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-silver">
                <p>
                  We believe the next leap in woven-bag production isn&rsquo;t a faster line &mdash;
                  it&rsquo;s a smarter, self-contained machine that removes the seams between stages
                  entirely.
                </p>
                <p>
                  Our long-term aim is to make that capability and to set a new reference point for
                  what a single piece of technical-textile machinery can do.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24">
            <Reveal>
              <SteelHeading className="text-3xl sm:text-4xl">What sets us apart</SteelHeading>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {distinctions.map((d, i) => (
                <Reveal key={d.t} delay={i * 0.08}>
                  <div className="panel h-full border-0 bg-void p-8">
                    <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-white to-silver" />
                    <h3 className="mt-6 font-display text-lg font-medium text-chrome">{d.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{d.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* location */}
      <section className="border-t border-line py-24 sm:py-32">
        <Shell>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Where we are</Eyebrow>
              <SteelHeading className="mt-5 text-3xl sm:text-4xl">
                Engineered in Mysore, Karnataka
              </SteelHeading>
              <p className="mt-6 max-w-md leading-relaxed text-silver">
                Our work is rooted in Mysore &mdash; a centre of engineering and manufacturing in
                southern India. Building here is deliberate: it advances domestic capability in a
                field that has long depended on imported machinery.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <MysoreMap className="mx-auto w-full max-w-md" />
            </Reveal>
          </div>
          <Blade className="mt-24" />
        </Shell>
      </section>
    </>
  );
}
