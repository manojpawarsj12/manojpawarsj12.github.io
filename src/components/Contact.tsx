import { useState } from "react";
import { profile } from "../content";
import { Check, Copy, Download, GitHub, LinkedIn, Mail, Phone } from "./Icons";

function CopyEmail() {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("done");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[15px] font-bold text-ground/80 transition-colors hover:bg-ground/10 hover:text-ground"
    >
      {state === "done" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span aria-live="polite">{state === "done" ? "Copied" : state === "failed" ? "Copy blocked: select the address" : "Copy address"}</span>
    </button>
  );
}

export default function Contact() {
  const links = [
    { href: profile.phoneHref, label: profile.phone, Icon: Phone },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn, ext: true },
    { href: profile.github, label: "GitHub", Icon: GitHub, ext: true },
    ...(profile.resume ? [{ href: profile.resume, label: "Résumé (PDF)", Icon: Download, ext: true }] : []),
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="terminus bg-ink text-ground">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-8 sm:py-28">
        {/* the line arrives at its terminus */}
        <div aria-hidden className="flex items-center">
          <span className="h-[10px] flex-1 rounded-l-full bg-amber" />
          <span className="-ml-1 block h-14 w-14 shrink-0 rounded-full border-[7px] border-amber bg-ink" />
        </div>

        <h2 id="contact-title" className="sign mt-12 max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">
          End of the line. Let’s talk.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ground/80">
          {profile.availability} If you have a system that has to be real-time, reliable or both, I’d like to hear about it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Hello%20Manoj`}
            className="group inline-flex items-center gap-3 rounded-full bg-amber px-6 py-3.5 text-lg font-extrabold text-[#111214] transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-5 w-5" />
            <span className="sm:hidden">Email me</span>
            <span className="hidden sm:inline">{profile.email}</span>
          </a>
          <CopyEmail />
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ground/20 bg-ground/20 sm:grid-cols-3">
          {links.map(({ href, label, Icon, ext }) => (
            <li key={label} className="bg-ink">
              <a
                href={href}
                {...(ext ? { target: "_blank", rel: "noopener" } : {})}
                className="flex items-center gap-3 px-5 py-5 text-[17px] font-bold transition-colors hover:bg-ground/10"
              >
                <Icon className="h-5 w-5 text-amber" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="border-t border-ground/15">
        <div className="mx-auto flex max-w-page flex-wrap justify-between gap-2 px-4 py-6 text-sm text-ground/60 sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Drawn as a network map. Built with React, Vite and Tailwind CSS.</p>
        </div>
      </footer>
    </section>
  );
}
