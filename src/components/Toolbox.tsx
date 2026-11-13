import { toolbox } from "../content";
import { Swatch } from "./Bullet";

export default function Toolbox() {
  return (
    <section id="toolbox" aria-labelledby="tool-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="tool-title" className="sign text-[clamp(2.4rem,5vw,4rem)]">
            Toolbox
          </h2>
          <p className="max-w-[44ch] text-[17px] text-quiet">
            Read it like a station index. <span className="font-bold text-ink">Bold</span> is in daily production use; the rest I’ve
            shipped with and can pick back up fast.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-10 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((g) => (
            <div key={g.name} className="border-b border-hair py-6">
              <dt className="flex items-center gap-3 text-[15px] font-extrabold uppercase tracking-wide">
                <Swatch color={g.color} />
                {g.name}
              </dt>
              <dd className="mt-3 text-[17px] leading-[1.7]">
                {g.daily.map((t) => (
                  <span key={t} className="mr-3 inline-block font-bold">
                    {t}
                  </span>
                ))}
                {g.also.map((t) => (
                  <span key={t} className="mr-3 inline-block text-quiet">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
