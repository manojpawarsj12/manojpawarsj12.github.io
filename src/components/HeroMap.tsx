import { useEffect, useState, type KeyboardEvent } from "react";
import { route } from "../content";

// The hero draws the backend layers I work across as one route, edge to people.
const stations = route.stations;
const n = stations.length;

type Layout = {
  w: number;
  h: number;
  pos: { x: number; y: number }[];
  path: string;
  vertical: boolean;
  label: (i: number) => { x: number; y: number; anchor: "start" | "middle" | "end" };
  terminus: { x: number; y: number };
};

const wide: Layout = (() => {
  const y = 150;
  const xs = Array.from({ length: n }, (_, i) => 70 + (i * 1060) / (n - 1));
  const pos = xs.map((x) => ({ x, y }));
  return {
    w: 1200,
    h: 230,
    pos,
    vertical: false,
    path: `M${xs[0]} ${y} H${xs[n - 1]}`,
    label: (i) => ({ x: i === 0 ? xs[0] - 16 : i === n - 1 ? xs[i] + 16 : xs[i], y: y - 70, anchor: i === 0 ? "start" : i === n - 1 ? "end" : "middle" }),
    terminus: { x: xs[n - 1], y },
  };
})();

const tall: Layout = (() => {
  const x = 40;
  const ys = Array.from({ length: n }, (_, i) => 30 + i * 76);
  const pos = ys.map((y) => ({ x, y }));
  return {
    w: 360,
    h: ys[n - 1] + 40,
    pos,
    vertical: true,
    path: `M${x} ${ys[0]} V${ys[n - 1]}`,
    label: (i) => ({ x: x + 44, y: ys[i] - 4, anchor: "start" }),
    terminus: { x, y: ys[n - 1] },
  };
})();

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return reduced;
}

function Map({ L, sel, setSel, reduced, className }: { L: Layout; sel: number; setSel: (i: number) => void; reduced: boolean; className: string }) {
  const onKey = (i: number) => (e: KeyboardEvent) => {
    const next = e.key === "ArrowRight" || e.key === "ArrowDown" ? i + 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? i - 1 : null;
    if (next !== null && next >= 0 && next < n) {
      e.preventDefault();
      setSel(next);
      (e.currentTarget.parentNode?.querySelectorAll<SVGGElement>("[data-station]")[next])?.focus();
    }
  };
  return (
    <svg viewBox={`0 0 ${L.w} ${L.h}`} className={className} aria-label={`${route.name}, drawn as a route`}>
      <path d={L.path} fill="none" strokeWidth={12} strokeLinecap="round" className="draw stroke-red" style={{ ["--len" as string]: 1200 }} />

      {/* The train only moves when the visitor does: it travels to the selected station and waits there. */}
      <g
        aria-hidden
        style={{
          transform: `translate(${L.pos[sel].x}px, ${L.pos[sel].y}px)`,
          transition: reduced ? "none" : "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <rect
          width={L.vertical ? 14 : 44}
          height={L.vertical ? 44 : 14}
          x={L.vertical ? 24 : -22}
          y={L.vertical ? -22 : 26}
          rx={7}
          className="fill-red"
        />
      </g>

      {stations.map((s, i) => {
        const p = L.pos[i];
        const lab = L.label(i);
        const on = sel === i;
        const big = s.interchange || i === n - 1;
        return (
          <g
            key={s.name}
            data-station
            role="button"
            tabIndex={on ? 0 : -1}
            aria-pressed={on}
            aria-label={`${s.name}: ${s.note}`}
            onClick={() => setSel(i)}
            onMouseEnter={() => setSel(i)}
            onFocus={() => setSel(i)}
            onKeyDown={onKey(i)}
            className="pop cursor-pointer outline-none [&:focus-visible>.halo]:opacity-100"
            style={{ ["--delay" as string]: `${0.2 + i * 0.12}s` }}
          >
            <rect
              x={L.vertical ? 0 : p.x - 120}
              y={L.vertical ? p.y - 38 : lab.y - 30}
              width={L.vertical ? L.w : 240}
              height={L.vertical ? 76 : 140}
              className="fill-transparent"
            />
            <circle className="halo fill-none stroke-blue opacity-0 transition-opacity" strokeWidth={3} cx={p.x} cy={p.y} r={big ? 30 : 26} />
            <circle
              cx={p.x}
              cy={p.y}
              r={big ? 20 : 15}
              strokeWidth={6}
              className={`stroke-ink transition-colors duration-300 ${on ? "fill-ink" : "fill-ground"}`}
            />
            <text x={lab.x} y={lab.y} textAnchor={lab.anchor} className="fill-ink text-[23px] font-extrabold" style={{ fontVariationSettings: '"wdth" 88' }}>
              {s.name}
            </text>
            <text x={lab.x} y={lab.y + 25} textAnchor={lab.anchor} className={`text-[17px] font-semibold transition-colors ${on ? "fill-red" : "fill-quiet"}`}>
              {s.tag}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function HeroMap() {
  const [sel, setSel] = useState(1);
  const reduced = useReducedMotion();
  const s = stations[sel];

  return (
    <figure className="mx-auto max-w-page px-4 sm:px-8">
      <figcaption className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span aria-hidden className="h-[8px] w-10 rounded-full bg-red" />
        <span className="text-[17px] font-extrabold">{route.name}</span>
        <span className="text-[17px] font-semibold text-quiet">{route.caption}</span>
      </figcaption>

      <div role="group" aria-label="Pipeline stations. Use arrow keys to move between them.">
        <Map L={wide} sel={sel} setSel={setSel} reduced={reduced} className="hidden h-auto w-full lg:block" />
        <Map L={tall} sel={sel} setSel={setSel} reduced={reduced} className="h-auto w-full max-w-[420px] lg:hidden" />
      </div>

      <p aria-live="polite" className="mt-4 min-h-[3.2em] max-w-prose border-t-2 border-ink pt-4 text-[17px] leading-relaxed">
        <span className="font-extrabold">{s.name}.</span> <span className="text-quiet">{s.note}</span>
      </p>
    </figure>
  );
}
