'use client';
import { motion, useReducedMotion } from 'framer-motion';

const stages = [
  {
    n: '01',
    t: 'Extrude',
    d: 'Polymer is processed and drawn into high-tenacity tape inside the system.',
  },
  {
    n: '02',
    t: 'Form',
    d: 'Tape is conditioned and prepared continuously, with the process self-monitored stage to stage.',
  },
  {
    n: '03',
    t: 'Weave',
    d: 'Tapes interlace into woven fabric — the structural heart of the bag.',
  },
  {
    n: '04',
    t: 'Convert',
    d: 'Fabric is converted into a finished woven bag, completing the cycle in one unit.',
  },
];

export default function TechProcess() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* connecting line */}
      <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-line md:block" />
      <div className="grid gap-px overflow-hidden md:grid-cols-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.n}
            className="relative bg-void md:pr-px"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="flex h-[18px] w-[18px] items-center justify-center">
                  <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-white to-silver" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-chrome">
                {s.t}
              </h3>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted">
                {s.d}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
