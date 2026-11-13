import { roles } from "../content";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="bg-panel py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="exp-title" className="sign text-[clamp(2.4rem,5vw,4rem)]">
            Experience
          </h2>
          <p className="max-w-[40ch] text-[17px] text-quiet">
            One line, five stops: space tech, e-commerce, gaming and CRM. Newest first.
          </p>
        </div>

        <ol className="relative mt-14">
          <span aria-hidden className="absolute bottom-6 left-[13px] top-4 w-[10px] rounded-full bg-blue md:left-[calc(11rem+2.5rem+13px)]" />
          {roles.map((r, i) => {
            const now = i === 0;
            const interchange = r.company === roles[i + 1]?.company || r.company === roles[i - 1]?.company;
            return (
              <li
                key={r.title + r.period}
                className="relative grid grid-cols-[36px_1fr] gap-x-5 pb-14 last:pb-0 md:grid-cols-[11rem_36px_minmax(0,1fr)_12rem] md:gap-x-10"
              >
                <div className="col-start-2 row-start-1 md:col-start-1 md:pt-1.5 md:text-right">
                  <p className="num text-[15px] font-bold">
                    {r.period}
                    {now && (
                      <span className="ml-2 inline-block rounded-full bg-red px-2 py-0.5 align-[2px] text-[11px] font-extrabold uppercase tracking-wide text-white dark:text-[#111214]">
                        Now
                      </span>
                    )}
                  </p>
                </div>

                <span
                  aria-hidden
                  className={`relative z-10 col-start-1 row-span-3 row-start-1 mt-0.5 block h-9 w-9 rounded-full border-[5px] border-ink md:col-start-2 ${
                    now ? "bg-ink" : "bg-panel"
                  } ${interchange ? "" : "scale-[0.8]"}`}
                >
                </span>

                <div className="col-start-2 mt-1 md:col-start-3 md:row-start-1 md:mt-0">
                  <h3 className="sign text-[1.7rem]" style={{ fontVariationSettings: '"wdth" 90' }}>
                    {r.title}
                  </h3>
                  <p className="mt-1 text-[16px] font-semibold">
                    <a href={r.url} target="_blank" rel="noopener" className="underline decoration-hair hover:decoration-ink">
                      {r.company}
                    </a>
                    <span className="text-quiet"> · {r.place}</span>
                  </p>
                  <ul className="mt-4 max-w-prose space-y-2.5 text-[16px] leading-relaxed">
                    {r.points.map((p) => (
                      <li key={p} className="grid grid-cols-[14px_1fr] gap-3">
                        <span aria-hidden className="mt-[0.7em] h-[2px] w-3 bg-quiet" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {r.metric && (
                  <div className="col-start-2 mt-5 md:col-start-4 md:row-start-1 md:mt-0 md:text-right">
                    <p className="sign num text-[2.6rem] text-blue">{r.metric.value}</p>
                    <p className="mt-1 text-[15px] font-semibold text-quiet">{r.metric.label}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
