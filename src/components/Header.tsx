import { useEffect, useState } from "react";
import { nav, profile } from "../content";
import { Swatch } from "./Bullet";
import { Moon, Sun } from "./Icons";

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const flip = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still flips for this visit */
    }
    setDark(next);
  };
  return (
    <button
      type="button"
      onClick={flip}
      aria-label={dark ? "Switch to day map" : "Switch to night map"}
      title={dark ? "Day map" : "Night map"}
      className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/10"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = nav.map((n) => document.querySelector(n.href)).filter((e): e is Element => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-[6px] border-ink bg-ground/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-page items-center gap-4 px-4 sm:px-8">
        <a href="#top" className="group mr-auto flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="sign grid h-9 w-9 place-items-center rounded-full bg-ink text-[15px] text-ground transition-transform group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-[17px] font-bold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href ? "location" : undefined}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-[15px] font-semibold transition-colors hover:bg-ink/10 ${
                    active === n.href ? "bg-ink/10" : ""
                  }`}
                >
                  <Swatch color={n.line} />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {profile.resume && (
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener"
          className="rounded-full border-2 border-ink px-4 py-1.5 text-[15px] font-bold transition-colors hover:bg-ink hover:text-ground"
        >
          Résumé
        </a>
        )}
        <ThemeToggle />
      </div>

      {/* Phone: the section index becomes a scrolling strip under the header. */}
      <nav aria-label="Sections" className="border-t border-hair lg:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 py-1.5 [scrollbar-width:none]">
          {nav.map((n) => (
            <li key={n.href} className="shrink-0">
              <a href={n.href} className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold">
                <Swatch color={n.line} className="w-4" />
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
