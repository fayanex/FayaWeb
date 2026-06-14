import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { Shell, Eyebrow, SteelHeading, Blade } from '@/components/Section';

export const metadata = {
  title: 'Team',
  description: 'The founding team behind Fayanex Ventures.',
};

const founders = [
  {
    name: 'Afrid Khan',
    role: 'Co-Founder / CEO',
    degree: 'BE · Electrical & Electronics Engineering',
    focus: 'Vision & strategy',
    photo: '/team/afrid.jpg',
    bio: 'Afrid grew up inside the woven-bag industry — two decades of family business in bag conversion gave him a production-floor read on buyers, rejection rates and machine failure modes long before he trained as an engineer. He founded Fayanex to solve those problems with engineering: a second-generation industry insider rebuilding the machine rather than living with its limits.',
  },
  {
    name: 'Khazi Yousuf Ali Khan',
    role: 'Co-Founder / COO',
    degree: 'BE · Electronics & Communication Engineering',
    focus: 'Embedded & operations',
    photo: '/team/khazi.jpg',
    bio: 'Khazi developed automotive embedded systems with the Volkswagen Group — functional-safety-grade software, real-time control and sensor fusion of exactly the kind that sits at the heart of Fayanex’s intelligence layer. He brings production-grade embedded and reliability discipline to the machine’s control architecture.',
  },
  {
    name: 'Syed Faizan Habeeb',
    role: 'Co-Founder / CMO',
    degree: 'BE · Mechanical Engineering',
    focus: 'Design & market',
    photo: '/team/faizan.jpg',
    bio: 'A mechanical engineer running Fayanex’s design function, Faizan bridges the commercial and the technical — turning buyer requirements and market positioning into machine architecture, and coordinating the design work behind it. In a deep-tech team, a commercial lead who can also read an assembly drawing is rare.',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The founders"
        intro="A focused founding team building Fayanex from the ground up — pairing lived industry experience with embedded and mechanical engineering."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid gap-8 md:grid-cols-3">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <article className="panel group flex h-full flex-col overflow-hidden">
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
                          'linear-gradient(180deg, transparent 50%, rgba(10,10,12,0.9) 100%)',
                      }}
                    />
                    <span className="absolute left-5 top-5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-silver">
                      {`0${i + 1}`}
                    </span>
                    <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 border border-line bg-void/70 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-silver backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-white to-silver" />
                      {f.focus}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-xl font-medium text-chrome">{f.name}</h2>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-silver">
                      {f.role}
                    </p>
                    <p className="mt-3 border-l border-line pl-3 font-mono text-[0.66rem] leading-relaxed tracking-[0.04em] text-muted">
                      {f.degree}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted">{f.bio}</p>
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
