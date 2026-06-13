import { Shell, Eyebrow, SteelHeading } from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 20% 0%, rgba(120,122,130,0.12), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <Shell className="relative z-[2]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SteelHeading as="h1" className="mt-5 max-w-3xl text-4xl sm:text-6xl">
            {title}
          </SteelHeading>
          {intro ? (
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-silver">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </Shell>
    </section>
  );
}
