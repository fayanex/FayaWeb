import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { Shell, Blade } from '@/components/Section';

export const metadata = {
  title: 'Team',
  description: 'The founding team behind Fayanex Ventures.',
};

const founders = [
  {
    name: 'Afrid Khan',
    role: 'Co-Founder / CEO',
    photo: '/team/afrid.jpg',
    // PLACEHOLDER BIO — replace with real copy.
    bio: 'Leads Fayanex’s vision and strategy, steering the company from concept toward a working Industry 5.0 machine.',
  },
  {
    name: 'Khazi Yousuf Ali Khan',
    role: 'Co-Founder / COO',
    photo: '/team/khazi.jpg',
    bio: 'Drives operations, engineering execution and supply strategy, turning the design direction into a buildable system.',
  },
  {
    name: 'Syed Faizan Habeeb',
    role: 'Co-Founder / CMO',
    photo: '/team/faizan.jpg',
    bio: 'Shapes the Fayanex brand and market presence, connecting the technology to partners, customers and industry.',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The founders"
        intro="A focused founding team building Fayanex from the ground up."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid gap-8 md:grid-cols-3">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <article className="panel group h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.85) 100%)',
                      }}
                    />
                  </div>
                  <div className="p-7">
                    <h2 className="font-display text-xl font-medium text-chrome">
                      {f.name}
                    </h2>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-silver">
                      {f.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {f.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Blade className="mt-24" />
        </Shell>
      </section>
    </>
  );
}
