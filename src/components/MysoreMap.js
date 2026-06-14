'use client';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * Stylized coordinate / radar panel marking Mysore — no external map tiles, fully on-brand.
 * Used on about and contact.
 */
export default function MysoreMap({ className = '' }) {
  const reduce = useReducedMotion();
  const cx = 210;
  const cy = 138;

  return (
    <svg viewBox="0 0 420 300" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Mysore, Karnataka</title>
      <desc>A coordinate panel marking Fayanex&apos;s location in Mysore, Karnataka, India.</desc>
      <defs>
        <linearGradient id="mmPin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#8a8a90" />
        </linearGradient>
        <radialGradient id="mmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9c9cd" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9c9cd" stopOpacity="0" />
        </radialGradient>
        <clipPath id="mmClip"><rect x="10" y="10" width="400" height="280" rx="12" /></clipPath>
      </defs>

      <rect x="10" y="10" width="400" height="280" rx="12" fill="#101013" stroke="#2a2a2e" strokeWidth="1" />
      <g clipPath="url(#mmClip)">
        {/* grid */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`gx${i}`} x1={10 + i * 40} y1="10" x2={10 + i * 40} y2="290" stroke="#1d1d21" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`gy${i}`} x1="10" y1={10 + i * 40} x2="410" y2={10 + i * 40} stroke="#1d1d21" strokeWidth="1" />
        ))}
        {/* radar rings */}
        {[40, 80, 120].map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#2a2a2e" strokeWidth="1" />
        ))}
        {!reduce && (
          <motion.circle
            cx={cx}
            cy={cy}
            r="20"
            fill="none"
            stroke="#7a7a80"
            strokeWidth="1"
            animate={{ r: [16, 120], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeOut' }}
          />
        )}
        {/* sweep */}
        {!reduce && (
          <motion.line
            x1={cx}
            y1={cy}
            x2={cx + 120}
            y2={cy}
            stroke="#3a3a40"
            strokeWidth="1"
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          />
        )}
        {/* crosshair */}
        <line x1={cx} y1="10" x2={cx} y2="290" stroke="#2f2f34" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="10" y1={cy} x2="410" y2={cy} stroke="#2f2f34" strokeWidth="1" strokeDasharray="3 4" />
      </g>

      {/* pin */}
      <circle cx={cx} cy={cy} r="22" fill="url(#mmGlow)" />
      <rect x={cx - 6} y={cy - 6} width="12" height="12" transform={`rotate(45 ${cx} ${cy})`} fill="url(#mmPin)" stroke="#ffffff" strokeWidth="0.8" />

      {/* labels */}
      <text x={cx} y={cy + 52} fontSize="14" fill="#ffffff" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="3">MYSORE</text>
      <text x={cx} y={cy + 72} fontSize="11" fill="#6e6e73" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="2">KARNATAKA · INDIA</text>
      <text x={cx} y={cy + 100} fontSize="11" fill="#969598" textAnchor="middle" fontFamily="var(--font-mono), monospace" letterSpacing="1">12.30° N   76.65° E</text>
    </svg>
  );
}
