'use client';
import { motion, useReducedMotion } from 'framer-motion';

const stages = [
  {
    n: '01',
    t: 'Extrude',
    g: 'barrel',
    d: 'Polymer is processed and drawn into high-tenacity tape inside the system.',
  },
  {
    n: '02',
    t: 'Draw',
    g: 'tape',
    d: 'Tape is conditioned and stretched continuously, the process self-monitored stage to stage.',
  },
  {
    n: '03',
    t: 'Weave',
    g: 'weave',
    d: 'Tapes interlace into woven fabric — the structural heart of the bag.',
  },
  {
    n: '04',
    t: 'Convert',
    g: 'bag',
    d: 'Fabric is converted into a finished woven bag, completing the cycle in one unit.',
  },
];

function Glyph({ type }) {
  return (
    <svg viewBox="0 0 72 56" className="h-12 w-16" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`tp-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a4a51" />
          <stop offset="45%" stopColor="#a0a0a6" />
          <stop offset="100%" stopColor="#2a2a30" />
        </linearGradient>
      </defs>
      {type === 'barrel' && (
        <g>
          <rect x="10" y="22" width="44" height="16" rx="4" fill={`url(#tp-${type})`} />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={16 + i * 11} y1="22" x2={12 + i * 11} y2="38" stroke="#5a5a60" strokeWidth="1.4" />
          ))}
          <polygon points="54,24 54,36 62,30" fill="#1a1a1e" stroke="#7a7a80" strokeWidth="1" />
          <circle cx="64" cy="30" r="3" fill="#d8813f" />
        </g>
      )}
      {type === 'tape' &&
        [0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="10" y1={18 + i * 6} x2="62" y2={18 + i * 6} stroke="#9a9aa0" strokeWidth="1.6" />
        ))}
      {type === 'weave' && (
        <g stroke="#9a9aa0" strokeWidth="1.2">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`v${i}`} x1={24 + i * 6} y1="14" x2={24 + i * 6} y2="42" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`h${i}`} x1="22" y1={16 + i * 6} x2="50" y2={16 + i * 6} />
          ))}
        </g>
      )}
      {type === 'bag' && (
        <g>
          <path d="M28 14 q4 -6 8 0" fill="none" stroke="#9a9aa0" strokeWidth="1.2" />
          <path d="M36 14 q4 -6 8 0" fill="none" stroke="#9a9aa0" strokeWidth="1.2" />
          <rect x="26" y="14" width="20" height="30" rx="3" fill="#1a1a1f" stroke="#9a9aa0" strokeWidth="1.2" />
          <line x1="36" y1="14" x2="36" y2="44" stroke="#46464c" strokeWidth="0.8" />
          <line x1="26" y1="29" x2="46" y2="29" stroke="#46464c" strokeWidth="0.8" />
        </g>
      )}
    </svg>
  );
}

export default function TechProcess() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-line md:block" />
      <div className="grid gap-px overflow-hidden md:grid-cols-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.n}
            className="relative bg-void md:pr-px"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="flex h-[18px] w-[18px] items-center justify-center">
                  <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-white to-silver" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted">{s.n}</span>
              </div>
              <div className="mt-7">
                <Glyph type={s.g} />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-chrome">{s.t}</h3>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
