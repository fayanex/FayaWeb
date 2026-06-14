'use client';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * Engineering-style cutaway of the integrated Fayanex line, drawn as one closed unit:
 *   hopper → extruder (screw + heater bands) → die → chill roll → slit + drawn tape
 *   through the heat oven → circular weaving loom → finished woven bag,
 * with an embedded control/sensor layer reading every stage.
 * All motion is gated behind prefers-reduced-motion.
 */
export default function MachineCutaway({ className = '' }) {
  const reduce = useReducedMotion();

  const spin = (dur, dir = 1) =>
    reduce ? {} : { animate: { rotate: 360 * dir }, transition: { repeat: Infinity, duration: dur, ease: 'linear' } };

  // Round computed coordinates so server and client render byte-identical strings (no hydration mismatch).
  const q = (n) => Number(n.toFixed(2));

  // 7 tapes: straight through the oven, then converging into the loom (these are the warp).
  const tapeY = [307, 311, 315, 319, 323, 327, 331];
  const loomCx = 820;
  const loomCy = 250;
  const loomR = 78;
  const warpPts = tapeY.map((y, i) => {
    const a = (150 + (i * 60) / 6) * (Math.PI / 180); // 150°..210° on the loom's left arc
    return { y, lx: loomCx + loomR * Math.cos(a), ly: loomCy + loomR * Math.sin(a) };
  });

  // Heater bands along the barrel
  const bands = [156, 190, 224, 258, 292];

  const Sensor = ({ x, y }) => (
    <g>
      <circle cx={x} cy={y} r="3" fill="#dfe2e8" />
      {!reduce && (
        <motion.circle
          cx={x}
          cy={y}
          r="3"
          fill="none"
          stroke="#9fb0c0"
          strokeWidth="1"
          animate={{ r: [3, 12], opacity: [0.75, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeOut' }}
        />
      )}
    </g>
  );

  return (
    <svg
      viewBox="0 0 1200 440"
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>The Fayanex machine</title>
      <desc>
        A cutaway of one closed unit that carries polymer through extrusion, tape drawing, weaving
        and conversion into a finished woven bag, supervised by an embedded control and sensor layer.
      </desc>

      <defs>
        <linearGradient id="gSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#454550" />
          <stop offset="16%" stopColor="#bdbdc2" />
          <stop offset="40%" stopColor="#eaeaee" />
          <stop offset="62%" stopColor="#83838a" />
          <stop offset="100%" stopColor="#2b2b31" />
        </linearGradient>
        <linearGradient id="gSteelDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b3b42" />
          <stop offset="50%" stopColor="#54545b" />
          <stop offset="100%" stopColor="#1f1f24" />
        </linearGradient>
        <linearGradient id="gHopper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b5b62" />
          <stop offset="100%" stopColor="#2c2c32" />
        </linearGradient>
        <radialGradient id="gRoll" cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ededf1" />
          <stop offset="44%" stopColor="#9a9aa0" />
          <stop offset="100%" stopColor="#28282d" />
        </radialGradient>
        <linearGradient id="gOven" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d130b" />
          <stop offset="100%" stopColor="#0b0806" />
        </linearGradient>
        <radialGradient id="gEmber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffba68" />
          <stop offset="38%" stopColor="#df7d27" />
          <stop offset="100%" stopColor="#df7d27" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gBag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d3d44" />
          <stop offset="100%" stopColor="#1a1a1f" />
        </linearGradient>
        <linearGradient id="gScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16303b" />
          <stop offset="100%" stopColor="#0a1419" />
        </linearGradient>
        <marker id="mcArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <clipPath id="screwClip"><rect x="140" y="312" width="176" height="18" /></clipPath>
        <clipPath id="ovenClip"><rect x="536" y="292" width="150" height="58" rx="6" /></clipPath>
        <clipPath id="bagClip"><rect x="1035" y="255" width="84" height="96" rx="6" /></clipPath>
      </defs>

      {/* floor shadow */}
      <ellipse cx="600" cy="424" rx="540" ry="13" fill="#000000" opacity="0.4" />

      {/* machine bed + legs */}
      <rect x="70" y="348" width="1066" height="16" rx="3" fill="url(#gSteelDark)" />
      {[150, 432, 712, 1012].map((x) => (
        <rect key={x} x={x} y="362" width="18" height="50" rx="2" fill="url(#gSteelDark)" />
      ))}

      {/* ---- control / intelligence layer ---- */}
      <line x1="210" y1="130" x2="892" y2="130" stroke="#2f2f34" strokeWidth="1" strokeDasharray="2 5" />
      <line x1="228" y1="138" x2="228" y2="296" stroke="#33333a" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.55" />
      <line x1="611" y1="138" x2="611" y2="292" stroke="#33333a" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.55" />
      <line x1="820" y1="138" x2="820" y2="178" stroke="#33333a" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.55" />
      {/* HMI control unit */}
      <rect x="556" y="92" width="58" height="42" rx="4" fill="url(#gScreen)" stroke="#3a4a52" strokeWidth="0.8" />
      <line x1="563" y1="104" x2="600" y2="104" stroke="#5fb8cc" strokeWidth="1.4" opacity="0.8" />
      <line x1="563" y1="112" x2="592" y2="112" stroke="#3c8294" strokeWidth="1.4" opacity="0.7" />
      <line x1="563" y1="120" x2="604" y2="120" stroke="#3c8294" strokeWidth="1.4" opacity="0.55" />
      <line x1="585" y1="134" x2="585" y2="130" stroke="#3a4a52" strokeWidth="6" />
      {!reduce && (
        <motion.circle
          cy="130"
          r="2.4"
          fill="#74cfe0"
          animate={{ cx: [214, 888], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
        />
      )}

      {/* ---- A. drive + hopper + extruder ---- */}
      <rect x="70" y="300" width="26" height="40" rx="6" fill="url(#gSteel)" />
      <rect x="96" y="288" width="34" height="58" rx="4" fill="url(#gSteelDark)" stroke="#5a5a60" strokeWidth="0.5" />
      {[[104, 296], [122, 296], [104, 338], [122, 338]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#1a1a1e" />
      ))}

      {/* barrel */}
      <rect x="130" y="300" width="196" height="42" rx="12" fill="url(#gSteel)" />
      {/* cutaway interior + screw */}
      <rect x="140" y="312" width="176" height="18" fill="#0c0c10" />
      <g clipPath="url(#screwClip)">
        <line x1="140" y1="321" x2="316" y2="321" stroke="#46464c" strokeWidth="3" />
        <motion.g {...(reduce ? {} : { animate: { x: [0, -15] }, transition: { repeat: Infinity, duration: 0.7, ease: 'linear' } })}>
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1={128 + i * 15} y1="312" x2={120 + i * 15} y2="330" stroke="#8a8a90" strokeWidth="2.4" strokeLinecap="round" />
          ))}
        </motion.g>
      </g>
      {/* heater bands */}
      {bands.map((x) => (
        <g key={x}>
          <rect x={x} y="296" width="12" height="50" rx="2" fill="#34343a" stroke="#5a5a60" strokeWidth="0.5" />
          <rect x={x} y="298" width="12" height="3" fill="#6e6e74" />
        </g>
      ))}

      {/* hopper */}
      <polygon points="168,200 228,200 214,300 182,300" fill="url(#gHopper)" stroke="#5a5a60" strokeWidth="0.6" />
      <rect x="168" y="196" width="60" height="8" rx="2" fill="url(#gSteelDark)" />
      {[[186, 224], [196, 230], [206, 224], [191, 244], [201, 246]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill="#b9b9be" opacity="0.85" />
      ))}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={190 + i * 9}
            r="2.3"
            fill="#cdced2"
            initial={{ cy: 210, opacity: 0 }}
            animate={{ cy: [210, 292], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, delay: i * 0.55, ease: 'easeIn' }}
          />
        ))}

      {/* die head */}
      <rect x="326" y="284" width="26" height="74" rx="3" fill="url(#gSteel)" />
      <rect x="350" y="312" width="8" height="12" rx="1" fill="#5a5a60" />

      {/* ---- B. chill roll + sheet + slitter ---- */}
      <g transform="translate(424,318)">
        <circle r="44" fill="url(#gRoll)" stroke="#26262b" strokeWidth="1" />
        <motion.g {...spin(7)}>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45) * (Math.PI / 180);
            return (
              <line key={i} x1={q(26 * Math.cos(a))} y1={q(26 * Math.sin(a))} x2={q(40 * Math.cos(a))} y2={q(40 * Math.sin(a))} stroke="#3a3a40" strokeWidth="1.2" />
            );
          })}
          <circle r="7" fill="url(#gSteelDark)" />
        </motion.g>
      </g>
      {/* cooled sheet running over the roll into the slitter */}
      <rect x="352" y="311" width="140" height="9" fill="#73737a" opacity="0.6" />
      {/* slitter */}
      <rect x="490" y="300" width="6" height="34" rx="1" fill="url(#gSteelDark)" />
      {[306, 314, 322, 330].map((y) => (
        <line key={y} x1="490" y1={y} x2="496" y2={y} stroke="#9a9aa0" strokeWidth="0.6" />
      ))}

      {/* ---- C. drawn tape through heat oven ---- */}
      <g transform="translate(516,332)">
        <circle r="15" fill="url(#gRoll)" stroke="#26262b" strokeWidth="0.8" />
        <motion.g {...spin(4)}>
          {[0, 60, 120].map((d) => {
            const a = d * (Math.PI / 180);
            return <line key={d} x1={q(5 * Math.cos(a))} y1={q(5 * Math.sin(a))} x2={q(12 * Math.cos(a))} y2={q(12 * Math.sin(a))} stroke="#3a3a40" strokeWidth="1" />;
          })}
        </motion.g>
      </g>
      <rect x="536" y="292" width="150" height="58" rx="6" fill="url(#gOven)" stroke="#3a2a1e" strokeWidth="1" />
      <g clipPath="url(#ovenClip)">
        <motion.ellipse cx="611" cy="321" rx="60" ry="20" fill="url(#gEmber)" animate={reduce ? {} : { opacity: [0.45, 0.9, 0.45] }} transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }} />
        <line x1="544" y1="300" x2="678" y2="300" stroke="#c97a30" strokeWidth="1" opacity="0.5" />
        <line x1="544" y1="342" x2="678" y2="342" stroke="#c97a30" strokeWidth="1" opacity="0.5" />
      </g>
      <rect x="536" y="292" width="150" height="58" rx="6" fill="none" stroke="#3a2a1e" strokeWidth="1" />
      <g transform="translate(700,332)">
        <circle r="15" fill="url(#gRoll)" stroke="#26262b" strokeWidth="0.8" />
        <motion.g {...spin(4)}>
          {[0, 60, 120].map((d) => {
            const a = d * (Math.PI / 180);
            return <line key={d} x1={q(5 * Math.cos(a))} y1={q(5 * Math.sin(a))} x2={q(12 * Math.cos(a))} y2={q(12 * Math.sin(a))} stroke="#3a3a40" strokeWidth="1" />;
          })}
        </motion.g>
      </g>

      {/* ---- tapes / warp: straight through oven, then converging into the loom ---- */}
      {warpPts.map((p, i) => (
        <motion.polyline
          key={i}
          points={`496,${p.y} 700,${p.y} ${p.lx.toFixed(1)},${p.ly.toFixed(1)}`}
          fill="none"
          stroke="#b4b4b9"
          strokeWidth="1.1"
          strokeDasharray="14 7"
          animate={reduce ? {} : { strokeDashoffset: [0, -42] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
          opacity="0.9"
        />
      ))}

      {/* ---- D. circular weaving loom ---- */}
      <circle cx={loomCx} cy={loomCy} r={loomR} fill="url(#gSteelDark)" stroke="#5a5a60" strokeWidth="1" />
      <circle cx={loomCx} cy={loomCy} r={loomR} fill="none" stroke="#9a9aa0" strokeWidth="1.4" opacity="0.5" />
      <g transform={`translate(${loomCx},${loomCy})`}>
        <motion.g {...spin(9)}>
          {[0, 120, 240].map((d) => {
            const a = d * (Math.PI / 180);
            const sx = q(67 * Math.cos(a));
            const sy = q(67 * Math.sin(a));
            return (
              <g key={d} transform={`translate(${sx},${sy})`}>
                <rect x="-7" y="-4" width="14" height="8" rx="2" fill="url(#gSteel)" stroke="#26262b" strokeWidth="0.5" />
              </g>
            );
          })}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = i * 30 * (Math.PI / 180);
            return <line key={i} x1={q(56 * Math.cos(a))} y1={q(56 * Math.sin(a))} x2={q(78 * Math.cos(a))} y2={q(78 * Math.sin(a))} stroke="#46464c" strokeWidth="0.8" />;
          })}
        </motion.g>
      </g>
      <circle cx={loomCx} cy={loomCy} r="56" fill="#0d0d11" stroke="#3a3a40" strokeWidth="0.8" />
      {/* take-up: woven tube flattened and drawn down to the conversion line */}
      <path d={`M${loomCx + 56} ${loomCy} C 905 ${loomCy}, 905 300, 916 312`} fill="none" stroke="#7a7a80" strokeWidth="9" opacity="0.5" />
      <g transform="translate(905,300)">
        <circle r="13" fill="url(#gRoll)" stroke="#26262b" strokeWidth="0.8" />
        <motion.g {...spin(5)}>
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#3a3a40" strokeWidth="1" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#3a3a40" strokeWidth="1" />
        </motion.g>
      </g>

      {/* ---- E. conversion + finished woven bag ---- */}
      <rect x="916" y="306" width="74" height="14" fill="#5c5c63" opacity="0.55" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={920 + i * 9} y1="306" x2={920 + i * 9} y2="320" stroke="#3a3a40" strokeWidth="0.5" />
      ))}
      <rect x="986" y="288" width="18" height="44" rx="2" fill="url(#gSteelDark)" stroke="#5a5a60" strokeWidth="0.5" />

      {/* the bag */}
      <rect x="1033" y="250" width="88" height="10" rx="3" fill="url(#gSteelDark)" />
      {[1045, 1062, 1079, 1096, 1109].map((x) => (
        <line key={x} x1={x} y1="251" x2={x} y2="259" stroke="#1a1a1e" strokeWidth="0.8" />
      ))}
      <rect x="1035" y="255" width="84" height="96" rx="6" fill="url(#gBag)" stroke="#5a5a60" strokeWidth="1" />
      <g clipPath="url(#bagClip)">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={1035 + i * 8} y1="255" x2={1035 + i * 8} y2="351" stroke="#4a4a52" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="1035" y1={258 + i * 9} x2="1119" y2={258 + i * 9} stroke="#4a4a52" strokeWidth="0.5" />
        ))}
      </g>
      {/* printed label panel echoing the brand slash */}
      <rect x="1052" y="284" width="50" height="34" rx="2" fill="#141417" stroke="#46464c" strokeWidth="0.8" />
      <line x1="1062" y1="312" x2="1092" y2="290" stroke="#e8e8ec" strokeWidth="1.4" />

      {/* sensors on key stages */}
      <Sensor x={228} y={300} />
      <Sensor x={424} y={290} />
      <Sensor x={611} y={300} />
      <Sensor x={820} y={186} />
    </svg>
  );
}
