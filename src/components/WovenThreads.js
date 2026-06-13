'use client';
import { motion, useReducedMotion } from 'framer-motion';

// Abstract nod to the machine: tape threads interlacing into woven fabric.
export default function WovenThreads({ className = '' }) {
  const reduce = useReducedMotion();
  const warp = Array.from({ length: 9 });
  const weft = Array.from({ length: 6 });

  const draw = (i) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 0.9 },
    viewport: { once: true },
    transition: reduce
      ? { duration: 0 }
      : { duration: 1.6, delay: i * 0.08, ease: 'easeInOut' },
  });

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="thread" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="260">
          <stop offset="0%" stopColor="#5a5a60" />
          <stop offset="50%" stopColor="#e8e8ec" />
          <stop offset="100%" stopColor="#5a5a60" />
        </linearGradient>
      </defs>
      {warp.map((_, i) => (
        <motion.line
          key={`w${i}`}
          x1={30 + i * 42.5}
          y1={10}
          x2={30 + i * 42.5}
          y2={250}
          stroke="url(#thread)"
          strokeWidth="1.4"
          {...draw(i)}
        />
      ))}
      {weft.map((_, i) => (
        <motion.line
          key={`f${i}`}
          x1={10}
          y1={30 + i * 40}
          x2={390}
          y2={30 + i * 40}
          stroke="url(#thread)"
          strokeWidth="1.4"
          {...draw(i + 4)}
        />
      ))}
    </svg>
  );
}
