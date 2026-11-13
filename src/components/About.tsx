import { education, principles, profile } from "../content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t-2 border-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-page gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 id="about-title" className="sign text-[clamp(2.4rem,5vw,4rem)]">
            How I work
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-quiet">
            Based in {profile.location}. {education.degree}, {education.school}, {education.period} ({education.detail}).
          </p>
        </div>
        <ol className="grid gap-10">
          {principles.map((p) => (
            <li key={p.name} className="grid gap-3 sm:grid-cols-[14rem_1fr] sm:gap-10">
              <h3 className="sign text-[1.6rem]" style={{ fontVariationSettings: '"wdth" 90' }}>
                {p.name}
              </h3>
              <p className="max-w-prose text-lg leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
