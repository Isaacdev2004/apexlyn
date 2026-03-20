import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Point3D = { x: number; y: number; z: number };
type Connection = { from: number; to: number; cx: number; cy: number };

const NODE_COUNT = 220;
const CONNECTION_COUNT = 36;
const RADIUS = 58;
const DOT_SPEED = 0.11;
const ROTATE_SPEED = 0.22;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function generateSpherePoints(count = NODE_COUNT, radius = RADIUS): Point3D[] {
  const rand = seededRandom(777);
  const points: Point3D[] = [];
  for (let i = 0; i < count; i += 1) {
    const u = rand();
    const v = rand();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    points.push({
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
    });
  }
  return points;
}

function rotateY(p: Point3D, a: number): Point3D {
  return {
    x: p.x * Math.cos(a) - p.z * Math.sin(a),
    y: p.y,
    z: p.x * Math.sin(a) + p.z * Math.cos(a),
  };
}

function project(p: Point3D, cx: number, cy: number) {
  const depth = 220;
  const s = depth / (depth - p.z);
  return { x: cx + p.x * s, y: cy + p.y * s, s, z: p.z };
}

export default function LensOrbitGlobe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false });
  const [t, setT] = useState(0);

  const points = useMemo(() => generateSpherePoints(), []);
  const connections = useMemo<Connection[]>(() => {
    const rand = seededRandom(31337);
    const res: Connection[] = [];
    for (let i = 0; i < CONNECTION_COUNT; i += 1) {
      const from = Math.floor(rand() * NODE_COUNT);
      let to = Math.floor(rand() * NODE_COUNT);
      if (to === from) to = (to + 17) % NODE_COUNT;
      const cx = (rand() - 0.5) * 30;
      const cy = (rand() - 0.5) * 30;
      res.push({ from, to, cx, cy });
    }
    return res;
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (inView) setT((prev) => prev + dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const cx = 200;
  const cy = 200;
  const rot = t * ROTATE_SPEED;

  const screenPoints = points.map((p) => project(rotateY(p, rot), cx, cy));

  const cyan = "rgba(14, 165, 233, 0.62)";
  const cyanSoft = "rgba(14, 165, 233, 0.2)";
  const cyanGlow = "rgba(14, 165, 233, 0.12)";

  return (
    <div ref={ref} className="flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full max-w-sm overflow-visible"
        aria-label="Lens network globe"
      >
        <defs>
          <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(14,165,233,0.2)" />
            <stop offset="75%" stopColor="rgba(14,165,233,0.06)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
          </radialGradient>
          <clipPath id="lensClip">
            <circle cx={cx} cy={cy} r={RADIUS} />
          </clipPath>
        </defs>

        <motion.circle
          cx={cx}
          cy={cy}
          r="88"
          fill="url(#lensGlow)"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <circle cx={cx} cy={cy} r="84" fill="none" stroke={cyanSoft} strokeWidth="1" strokeDasharray="5 7" />
        <circle cx={cx} cy={cy} r="122" fill="none" stroke={cyanSoft} strokeWidth="1" strokeDasharray="5 9" />

        <circle cx={cx} cy={cy} r={RADIUS} fill="none" stroke={cyan} strokeWidth="1.5" />

        <g clipPath="url(#lensClip)" opacity="0.5">
          {[-40, -20, 0, 20, 40].map((lat) => {
            const y = cy + lat;
            const hw = Math.sqrt(Math.max(0, RADIUS * RADIUS - lat * lat));
            return <line key={lat} x1={cx - hw} y1={y} x2={cx + hw} y2={y} stroke={cyanSoft} strokeWidth="0.8" />;
          })}
          {[0.25, 0.5, 0.75].map((k) => (
            <ellipse key={k} cx={cx} cy={cy} rx={RADIUS * k} ry={RADIUS} fill="none" stroke={cyanSoft} strokeWidth="0.8" />
          ))}
        </g>

        {connections.map((c, i) => {
          const a = screenPoints[c.from];
          const b = screenPoints[c.to];
          const mx = (a.x + b.x) / 2 + c.cx;
          const my = (a.y + b.y) / 2 + c.cy;
          return (
            <path
              key={`conn-${i}`}
              d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
              fill="none"
              stroke={cyanSoft}
              strokeWidth="1"
              opacity={0.45}
            />
          );
        })}

        {connections.slice(0, 10).map((c, i) => {
          const a = screenPoints[c.from];
          const b = screenPoints[c.to];
          const mx = (a.x + b.x) / 2 + c.cx;
          const my = (a.y + b.y) / 2 + c.cy;
          const p = (t * DOT_SPEED + i * 0.11) % 1;
          const qx = (1 - p) * (1 - p) * a.x + 2 * (1 - p) * p * mx + p * p * b.x;
          const qy = (1 - p) * (1 - p) * a.y + 2 * (1 - p) * p * my + p * p * b.y;
          return <circle key={`pulse-${i}`} cx={qx} cy={qy} r="2.2" fill={cyan} opacity={0.95} />;
        })}

        {screenPoints.map((p, i) => {
          const alpha = Math.max(0.18, Math.min(0.86, 0.55 + p.z / 140));
          return <circle key={`n-${i}`} cx={p.x} cy={p.y} r={1.25 * p.s} fill={cyanGlow} opacity={alpha} />;
        })}
      </svg>
    </div>
  );
}
