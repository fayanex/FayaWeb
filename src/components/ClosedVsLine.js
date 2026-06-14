'use client';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * Comparison: the conventional approach (a relay of separate machines with hand-offs)
 * versus Fayanex (one closed, continuous unit). Used on home, technology and about.
 */
export default function ClosedVsLine({ className = '' }) {
  const reduce = useReducedMotion();

  const Barrel = ({ x, y }) => (
    <g>
      <rect x={x} y={y} width="40" height="16" rx="4" fill="url(#cvSteel)" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={x + 8 + i * 10} y1={y} x2={x + 4 + i * 10} y2={y + 16} stroke="#5a5a60" strokeWidth="1" />
      ))}
    </g>
  );
  const Weave = ({ x, y }) => (
    <g stroke="#9a9aa0" strokeWidth="0.9">
      {[0, 1, 2, 3].map((i) => (
        <line key={`v${i}`} x1={x + i * 9} y1={y} x2={x + i * 9} y2={y + 24} />
      ))}
      {[0, 1, 2].map((i) => (
        <line key={`h${i}`} x1={x} y1={y + i * 9} x2={x + 27} y2={y + i * 9} />
      ))}
    </g>
  );
  const Bag = ({ x, y }) => (
    <g>
      <rect x={x} y={y} width="22" height="26" rx="3" fill="url(#cvBag)" stroke="#6a6a70" strokeWidth="0.8" />
      <line x1={x + 11} y1={y} x2={x + 11} y2={y + 26} stroke="#46464c" strokeWidth="0.7" />
      <line x1={x} y1={y + 13} x2={x + 22} y2={y + 13} stroke="#46464c" strokeWidth="0.7" />
    </g>
  );

  const reveal = (i) =>
    reduce
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
      : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: i * 0.08 } };

  return (
    <svg viewBox="0 0 980 300" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Separate machines versus one closed unit</title>
      <desc>
        The conventional approach links separate extrusion, weaving and conversion machines with hand-offs;
        Fayanex unifies the whole process into one closed, continuous unit.
      </desc>
      <defs>
        <linearGradient id="cvSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a4a51" />
          <stop offset="45%" stopColor="#9c9ca2" />
          <stop offset="100%" stopColor="#2a2a30" />
        </linearGradient>
        <linearGradient id="cvBag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d3d44" />
          <stop offset="100%" stopColor="#1a1a1f" />
        </linearGradient>
        <marker id="cvArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ---- conventional: separate machines ---- */}
      <text x="70" y="34" fontSize="12" fill="#6e6e73" fontFamily="var(--font-mono), monospace" letterSpacing="2">
        TODAY — A RELAY OF SEPARATE MACHINES
      </text>
      {[
        { x: 70, label: 'Extrusion plant', glyph: 'barrel' },
        { x: 405, label: 'Weaving plant', glyph: 'weave' },
        { x: 740, label: 'Conversion plant', glyph: 'bag' },
      ].map((u, i) => (
        <motion.g key={u.label} {...reveal(i)} viewport={{ once: true, margin: '-60px' }}>
          <rect x={u.x} y="58" width="170" height="74" rx="6" fill="none" stroke="#3a3a40" strokeWidth="1" strokeDasharray="3 3" />
          <rect x={u.x} y="58" width="170" height="74" rx="6" fill="#141417" opacity="0.5" />
          {u.glyph === 'barrel' && <Barrel x={u.x + 65} y="80" />}
          {u.glyph === 'weave' && <Weave x={u.x + 71} y="76" />}
          {u.glyph === 'bag' && <Bag x={u.x + 74} y="76" />}
          <text x={u.x + 85} y="120" fontSize="12" fill="#969598" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="1">
            {u.label}
          </text>
          <rect x={u.x + 30} y="132" width="14" height="12" fill="#2a2a30" />
          <rect x={u.x + 126} y="132" width="14" height="12" fill="#2a2a30" />
        </motion.g>
      ))}
      {/* hand-off gaps */}
      {[295, 630].map((gx) => (
        <g key={gx}>
          <line x1={gx} y1="95" x2={gx + 95} y2="95" stroke="#4a4a50" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#cvArrow)" />
          <text x={gx + 47} y="80" fontSize="11" fill="#6e6e73" textAnchor="middle" fontFamily="var(--font-mono), monospace">hand-off</text>
          <line x1={gx + 44} y1="100" x2={gx + 50} y2="112" stroke="#6e6e73" strokeWidth="1" />
          <line x1={gx + 50} y1="100" x2={gx + 44} y2="112" stroke="#6e6e73" strokeWidth="1" />
        </g>
      ))}

      {/* ---- fayanex: one closed unit ---- */}
      <text x="70" y="186" fontSize="12" fill="#969598" fontFamily="var(--font-mono), monospace" letterSpacing="2">
        FAYANEX — ONE CLOSED, CONTINUOUS UNIT
      </text>
      <motion.g {...reveal(2)} viewport={{ once: true, margin: '-60px' }}>
        <rect x="70" y="202" width="840" height="78" rx="14" fill="#141417" stroke="#50505a" strokeWidth="1" />
        <rect x="86" y="214" width="808" height="2" rx="1" fill="url(#cvSteel)" opacity="0.5" />
        {[
          { cx: 175, label: 'Extrude', glyph: 'barrel' },
          { cx: 385, label: 'Draw', glyph: 'tape' },
          { cx: 595, label: 'Weave', glyph: 'weave' },
          { cx: 805, label: 'Convert', glyph: 'bag' },
        ].map((s) => (
          <g key={s.label}>
            {s.glyph === 'barrel' && <Barrel x={s.cx - 20} y="226" />}
            {s.glyph === 'tape' &&
              [0, 1, 2, 3].map((i) => <line key={i} x1={s.cx - 18} y1={226 + i * 5} x2={s.cx + 18} y2={226 + i * 5} stroke="#9a9aa0" strokeWidth="1.2" />)}
            {s.glyph === 'weave' && <Weave x={s.cx - 13} y="222" />}
            {s.glyph === 'bag' && <Bag x={s.cx - 11} y="221" />}
            <text x={s.cx} y="270" fontSize="12" fill="#969598" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="1">
              {s.label}
            </text>
          </g>
        ))}
        {/* continuous conveyor + flowing pulse */}
        <line x1="100" y1="256" x2="880" y2="256" stroke="#2f2f34" strokeWidth="1" />
        {!reduce && (
          <motion.rect
            x="96"
            y="254"
            width="14"
            height="4"
            rx="2"
            fill="#e8e8ec"
            animate={{ x: [96, 866] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          />
        )}
      </motion.g>
    </svg>
  );
}
