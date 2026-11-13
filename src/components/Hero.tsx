import { profile } from "../content";
import HeroMap from "./HeroMap";
import { Arrow, Download } from "./Icons";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-20 pt-8 sm:pb-28 sm:pt-14">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <h1 id="hero-title" className="sign rise max-w-[22ch] text-[clamp(2.4rem,5.6vw,4.5rem)]">
          {profile.title}
        </h1>
        <p className="rise mt-4 text-lg font-semibold text-quiet sm:text-xl" style={{ ["--delay" as string]: "60ms" }}>
          {profile.headline} · {profile.role} at {profile.company}
        </p>

        <div className="rise mt-7 flex flex-wrap items-center gap-3" style={{ ["--delay" as string]: "120ms" }}>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2.5 rounded-full bg-red py-3 pl-6 pr-5 text-[17px] font-bold text-white transition-transform hover:-translate-y-0.5 dark:text-[#111214]"
          >
            See my experience
            <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          {profile.resume && (
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink px-5 py-[10px] text-[17px] font-bold transition-colors hover:bg-ink hover:text-ground"
          >
            <Download className="h-5 w-5" /> Résumé (PDF)
          </a>
          )}
        </div>
      </div>

      <div className="rise mt-10 sm:mt-12" style={{ ["--delay" as string]: "180ms" }}>
        <HeroMap />
      </div>

      <div className="mx-auto mt-14 grid max-w-page gap-8 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
        <p className="max-w-prose text-lg leading-relaxed sm:text-xl">{profile.intro}</p>
        <ul className="space-y-2.5 text-[17px]" aria-label="Results">
          {profile.proof.map((p) => (
            <li key={p.value} className="flex items-baseline gap-3 border-b border-hair pb-2.5 last:border-0">
              <span className="num w-[4.2rem] shrink-0 text-xl font-extrabold">{p.value}</span>
              <span className="text-quiet">{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
