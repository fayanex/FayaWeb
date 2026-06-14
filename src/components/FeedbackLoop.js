'use client';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * The intelligence layer as a closed loop: every stage is sensed, the MCU decides,
 * and control is acted back onto the stage — continuously. Technology page.
 */
export default function FeedbackLoop({ className = '' }) {
  const reduce = useReducedMotion();

  const mcu = { x: 450, y: 92 };
  const stages = [
    { cx: 130, label: 'Extrude' },
    { cx: 360, label: 'Draw tape' },
    { cx: 590, label: 'Weave' },
    { cx: 820, label: 'Convert' },
  ];
  const stageTopY = 226;

  return (
    <svg viewBox="0 0 900 300" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
      <title>The closed-loop intelligence layer</title>
      <desc>
        Each stage of the machine is sensed; an embedded controller decides; and control is acted back onto
        the stage in a continuous loop.
      </desc>
      <defs>
        <linearGradient id="flScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16303b" />
          <stop offset="100%" stopColor="#0a1419" />
        </linearGradient>
      </defs>

      {/* radiating links */}
      {stages.map((s) => (
        <line key={`l${s.cx}`} x1={mcu.x} y1={mcu.y} x2={s.cx} y2={stageTopY} stroke="#2c2c32" strokeWidth="1" />
      ))}

      {/* sense pulses (stage -> MCU) and act pulses (MCU -> stage) */}
      {!reduce &&
        stages.map((s, i) => (
          <g key={`p${s.cx}`}>
            <motion.circle
              r="2.6"
              fill="#9fb0c0"
              animate={{ cx: [s.cx, mcu.x], cy: [stageTopY, mcu.y], opacity: [0, 1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.5, ease: 'easeInOut' }}
            />
            <motion.circle
              r="2.6"
              fill="#e8e8ec"
              animate={{ cx: [mcu.x, s.cx], cy: [mcu.y, stageTopY], opacity: [0, 1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.5 + 1.3, ease: 'easeInOut' }}
            />
          </g>
        ))}

      {/* MCU hub */}
      {!reduce && (
        <motion.rect
          x="396"
          y="32"
          width="108"
          height="60"
          rx="10"
          fill="#ffffff"
          animate={{ opacity: [0.05, 0.16, 0.05] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        />
      )}
      <rect x="402" y="38" width="96" height="48" rx="7" fill="url(#flScreen)" stroke="#3a4a52" strokeWidth="1" />
      <text x="450" y="58" fontSize="13" fill="#cfe2e8" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="2">MCU</text>
      <text x="450" y="74" fontSize="11" fill="#5fa6b8" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="1">decide</text>

      {/* sense / act micro-labels */}
      <text x="232" y="150" fontSize="11" fill="#9fb0c0" textAnchor="middle" fontFamily="var(--font-mono), monospace">sense &#8593;</text>
      <text x="690" y="150" fontSize="11" fill="#cfd0d4" textAnchor="middle" fontFamily="var(--font-mono), monospace">act &#8595;</text>

      {/* stage nodes */}
      {stages.map((s) => (
        <g key={`s${s.cx}`}>
          <rect x={s.cx - 62} y={stageTopY} width="124" height="48" rx="7" fill="#141417" stroke="#3a3a40" strokeWidth="1" />
          <circle cx={s.cx} cy={stageTopY} r="3" fill="#dfe2e8" />
          <text x={s.cx} y={stageTopY + 29} fontSize="13" fill="#d7d7da" textAnchor="middle" fontFamily="var(--font-display), sans-serif">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}
