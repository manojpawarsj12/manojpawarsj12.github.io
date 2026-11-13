import { useState } from "react";
import { lines, type Line } from "../content";
import { Bullet, lineBg, lineText } from "./Bullet";
import { GitHub } from "./Icons";

/** Line strip map, like the one above a train door: stations in order, each with its leader note. */
function Strip({ line }: { line: Line }) {
  const [hot, setHot] = useState<number | null>(null);
  const n = line.stations.length;
  return (
    <div className="relative mt-12">
      <span aria-hidden className={`absolute bottom-3 left-[13px] top-3 w-[10px] rounded-full md:hidden ${lineBg[line.color]}`} />
      <span
        aria-hidden
        className={`absolute left-[13px] top-[13px] hidden h-[10px] rounded-full md:block ${lineBg[line.color]}`}
        style={{ right: `calc((100% - ${(n - 1) * 1.5}rem) / ${n} - 23px)` }}
      />
      <ol
        aria-label={`${line.name}: stations in order`}
        className="relative grid md:grid-cols-[repeat(var(--n),minmax(0,1fr))] md:gap-6"
        style={{ ["--n" as string]: n }}
      >
        {line.stations.map((s, i) => (
          <li
            key={s.name}
            onMouseEnter={() => setHot(i)}
            onMouseLeave={() => setHot(null)}
            className="grid grid-cols-[36px_1fr] gap-x-4 pb-7 last:pb-0 md:block md:pb-0"
          >
            <span
              aria-hidden
              className={`relative z-10 block h-9 w-9 rounded-full border-[5px] border-ink transition-colors duration-300 ${
                s.interchange ? "" : "md:scale-[0.8]"
              } ${hot === i ? "bg-ink" : "bg-ground"}`}
            />
            <div className="md:mt-1">
              <span aria-hidden className="mb-3 hidden h-6 w-[2px] translate-x-[17px] bg-ink/40 md:block" />
              <h4 className="sign text-xl" style={{ fontVariationSettings: '"wdth" 90' }}>
                {s.name}
              </h4>
              <p className={`mt-1.5 text-[15px] leading-relaxed transition-colors duration-300 ${hot === i ? "text-ink" : "text-quiet"}`}>
                {s.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LineBlock({ line, lead }: { line: Line; lead: boolean }) {
  return (
    <article id={line.id} aria-labelledby={`${line.id}-name`} className="border-t-2 border-ink py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <Bullet color={line.color} letter={line.letter} size="lg" />
            <div>
              <h3 id={`${line.id}-name`} className={`sign ${lead ? "text-[clamp(1.9rem,3.6vw,3rem)]" : "text-[clamp(1.7rem,3vw,2.4rem)]"}`}>
                {line.name}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-quiet">{line.where}</p>
            </div>
          </div>
          <p className="mt-6 max-w-prose text-lg leading-relaxed">{line.summary}</p>
          {line.facts.length > 0 && line.outcome && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold">
              {line.facts.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span aria-hidden className={`h-2 w-2 rounded-full ${lineBg[line.color]}`} />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="lg:pt-2">
          {!line.outcome && line.facts.length > 0 && (
            <>
              <h4 className="text-[15px] font-extrabold uppercase tracking-wide">Technical work</h4>
              <ul className="mt-4 space-y-3 text-[16px] leading-snug">
                {line.facts.map((f) => (
                  <li key={f} className="grid grid-cols-[10px_1fr] gap-3">
                    <span aria-hidden className={`mt-[0.45em] h-2.5 w-2.5 rounded-full ${lineBg[line.color]}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {line.outcome && (
            <>
              <p className={`sign num text-[clamp(3rem,6vw,5rem)] ${lineText[line.color]}`}>{line.outcome.value}</p>
              <p className="mt-2 max-w-[24ch] text-[17px] font-semibold leading-snug">{line.outcome.label}</p>
            </>
          )}
          {line.link && (
            <a
              href={line.link.href}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 text-[15px] font-bold transition-colors hover:bg-ink hover:text-ground"
            >
              <GitHub className="h-4 w-4" /> {line.link.label}
            </a>
          )}
        </div>
      </div>

      {line.stations.length > 0 && <Strip line={line} />}

      <p className="mt-10 text-[15px] text-quiet">
        <span className="font-bold text-ink">Built with</span> {line.stack.join(" · ")}
      </p>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <h2 id="work-title" className="sign text-[clamp(2.4rem,5vw,4rem)]">
            Selected work
          </h2>
          <p className="max-w-[40ch] text-[17px] text-quiet">
            Backend systems from my roles, each drawn as a route through the steps it handles.
          </p>
        </div>

        {lines.map((l, i) => (
          <LineBlock key={l.id} line={l} lead={i === 0} />
        ))}

      </div>
    </section>
  );
}
