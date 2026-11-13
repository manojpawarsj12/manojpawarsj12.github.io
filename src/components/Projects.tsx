import { branchLines } from "../content";
import { lineBg } from "./Bullet";
import { External } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="proj-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-page px-4 sm:px-8">
      <div className="border-t-2 border-ink pt-14 sm:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="proj-title" className="sign text-[clamp(2.4rem,5vw,4rem)]">
            Projects
          </h2>
          <p className="max-w-[40ch] text-[17px] text-quiet">Personal and open-source work.</p>
        </div>
          <ul className="mt-12 divide-y divide-hair border-y border-hair">
            {branchLines.map((b) => {
              const inner = (
                <>
                  <span aria-hidden className={`mt-2 h-[6px] w-8 shrink-0 rounded-full ${lineBg[b.color]}`} />
                  <span className="grid flex-1 gap-1 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-8">
                    <span className="text-lg font-extrabold">{b.name}</span>
                    <span className="text-quiet">{b.blurb}</span>
                    <span className="text-sm font-semibold text-quiet">{b.stack}</span>
                  </span>
                  {b.href ? <External className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : <span className="w-5" />}
                </>
              );
              return (
                <li key={b.name}>
                  {b.href ? (
                    <a href={b.href} target="_blank" rel="noopener" className="group flex gap-5 py-5 transition-colors hover:bg-ink/[0.04]">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex gap-5 py-5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
      </div>
      </div>
    </section>
  );
}
