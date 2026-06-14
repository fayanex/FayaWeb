'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Shell } from '@/components/Section';
import MachineCutaway from '@/components/MachineCutaway';

const stages = ['Polymer in', 'Extrude', 'Draw tape', 'Weave', 'Woven bag'];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    ref.current.style.setProperty('--mx', `${x}%`);
    ref.current.style.setProperty('--my', `${y}%`);
  };

  const ease = [0.2, 0.8, 0.2, 1];

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden"
      style={{ '--mx': '50%', '--my': '32%' }}
    >
      {/* pointer-tracked light pooling on the metal */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(640px circle at var(--mx) var(--my), rgba(120,122,130,0.18), transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, transparent 45%, rgba(0,0,0,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      <Shell className="relative z-[2] pb-20 pt-36">
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            Industrial Machinery &middot; Industry 5.0
          </motion.p>

          <motion.div
            className="mt-7"
            initial={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(14px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease }}
          >
            <img src="/fayanex-logo.png" alt="Fayanex" className="w-full max-w-[440px]" fetchPriority="high" />
          </motion.div>

          <motion.h1
            className="mt-9 max-w-2xl font-display text-2xl font-medium leading-[1.25] text-chrome sm:text-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
          >
            One machine. Extrusion to finished bag, in a single closed system.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-silver"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            An integrated, intelligent woven-bag machine built on Industry 5.0 architecture
            &mdash; sensing and coordinating its own process, end to end. Designed and developed in India.
          </motion.p>
        </div>

        {/* the machine */}
        <motion.div
          className="mt-14 sm:mt-16"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.85, ease }}
        >
          <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <MachineCutaway className="w-full min-w-[720px] sm:min-w-0" />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-5">
            {stages.map((s, i) => (
              <div key={s} className="flex items-center gap-2.5">
                <span className="font-mono text-[0.62rem] text-muted">{`0${i + 1}`}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-white to-silver" />
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-silver">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease }}
        >
          <Link href="/technology/" className="btn-chrome">
            Explore the technology
          </Link>
          <Link href="/contact/" className="btn-ghost">
            Get in touch
          </Link>
        </motion.div>
      </Shell>
    </section>
  );
}
