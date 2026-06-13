'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Shell } from '@/components/Section';

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
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ '--mx': '50%', '--my': '40%' }}
    >
      {/* pointer-tracked light pooling on the metal */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(620px circle at var(--mx) var(--my), rgba(120,122,130,0.18), transparent 60%)',
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

      <Shell className="relative z-[2] py-28">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          Industrial Machinery &middot; Industry 5.0
        </motion.p>

        {/* the wordmark, lit in from darkness */}
        <motion.div
          className="mt-8"
          initial={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(14px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease }}
        >
          <img
            src="/fayanex-logo.png"
            alt="Fayanex"
            className="w-full max-w-[760px]"
            fetchPriority="high"
          />
        </motion.div>

        <motion.h1
          className="mt-10 max-w-2xl font-display text-2xl font-medium leading-[1.25] text-chrome sm:text-[2rem]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          One machine. Extrusion to finished bag, in a single closed system.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-silver"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
        >
          We are engineering an integrated, intelligent woven-bag machine built
          on Industry 5.0 architecture &mdash; designed and developed in India.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 22 }}
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

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 z-[2] -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-silver to-transparent" />
      </motion.div>
    </section>
  );
}
