'use client';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * R&D phase timeline (no dates/figures — direction only). What We're Building page.
 * Current phase is highlighted.
 */
const phases = [
  { n: '01', x: 150, title: 'Architecture', d: ['Closed-system architecture', 'defined and simulated'] },
  { n: '02', x: 370, title: 'Prototyping', d: ['Extrusion, drawing & weaving', 'modules built and proven'], current: true },
  { n: '03', x: 590, title: 'Integration', d: ['Stages unified under one', 'control layer'] },
  { n: '04', x: 810, title: 'Pilot', d: ['Run end to end, then', 'hardened for the field'] },
];

export default function Roadmap({ className = '' }) {
  const reduce = useReducedMotion();
  const spineY = 84;
  const current = phases.find((p) => p.current);

  return (
    <svg viewBox="0 0 960 210" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Development roadmap</title>
      <desc>Four R&amp;D phases from architecture to a field pilot, with prototyping currently in progress.</desc>

      {/* spine */}
      <line x1="80" y1={spineY} x2="880" y2={spineY} stroke="#2a2a2e" strokeWidth="1.5" />
      <line x1="80" y1={spineY} x2={current.x} y2={spineY} stroke="#7a7a80" strokeWidth="1.5" />
      {!reduce && (
        <motion.circle
          r="3"
          cy={spineY}
          fill="#e8e8ec"
          animate={{ cx: [80, current.x], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      )}

      {phases.map((p, i) => {
        const done = i < phases.findIndex((q) => q.current);
        const active = p.current;
        return (
          <g key={p.n}>
            {active && !reduce && (
              <motion.circle
                cx={p.x}
                cy={spineY}
                r="10"
                fill="none"
                stroke="#9fb0c0"
                strokeWidth="1"
                animate={{ r: [7, 16], opacity: [0.7, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
              />
            )}
            <rect
              x={p.x - 5}
              y={spineY - 5}
              width="10"
              height="10"
              transform={`rotate(45 ${p.x} ${spineY})`}
              fill={active ? '#e8e8ec' : done ? '#9a9aa0' : '#141417'}
              stroke={active ? '#ffffff' : '#5a5a60'}
              strokeWidth="1"
            />
            {active && (
              <text x={p.x} y={spineY - 22} fontSize="11" fill="#cfe2e8" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="1">
                &#9679; in progress
              </text>
            )}
            <text x={p.x} y={spineY + 30} fontSize="11" fill="#6e6e73" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="2">
              {p.n}
            </text>
            <text x={p.x} y={spineY + 52} fontSize="15" fill={active ? '#ffffff' : '#d7d7da'} textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontWeight="500">
              {p.title}
            </text>
            <text x={p.x} y={spineY + 74} fontSize="11" fill="#6e6e73" textAnchor="middle" fontFamily="var(--font-mono), monospace">
              {p.d[0]}
              <tspan x={p.x} dy="15">{p.d[1]}</tspan>
            </text>
          </g>
        );
      })}
    </svg>
  );
}
