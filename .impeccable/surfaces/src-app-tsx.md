---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Portfolio home

Scope: single-page portfolio (index). Visitor mode: Experience.
Audience: hiring managers and senior engineers screening for senior backend / distributed-systems roles; 5–10 s first read, then deep skim.
Action: open the work, download the résumé, email or call.
Proof: résumé-backed metrics only (see PRODUCT.md). ISRO/ISTRAC work: name the client and techniques, never the architecture (see PRODUCT.md).
Constraints: React + Vite + Tailwind, GitHub Pages user site (base `/`), dark mode required, reduced motion respected.

## Direction contract

THESIS: His work is a transit network: data rides lines through named stations that are real system components. Refuses the split hero + terminal panel + card grid of the GitHub-dark dev portfolio.

OWN-WORLD: Enamel signage white ground (night mode: deep station-tunnel navy-black with the same line colours). Heavy grotesk set like wayfinding signage, tight tracking; line colours red, blue, green, amber as the only colour; 45°/90° strokes of fixed thick weight; white station ticks, interchange rings; rounded line-bullet labels; thick black rule under the header like a platform strip.

STORY: First viewport shows the backend layers he works across (sockets → APIs → events → data & jobs → live → cloud) as a line map, each station naming where he did it; sections then follow résumé order: skills, experience, selected work, projects, about, contact; the visitor learns what he builds before reading prose. Each featured project is a line with its own diagram; experience is a single line with stations per role and a "now" marker; skills are an interchange index. Ends at a terminus: contact.

FIRST VIEWPORT: Header strip (name bullet, nav as line-coloured links, résumé). Title (the tagline) at display scale, max 4.5rem, two lines at desktop; role line under it. Primary action "See the work" as a red line bullet. Below the title and CTAs: full-width line map of the backend route (six stations); the train travels to whichever station is selected and waits there. Intro and three résumé results sit below the map as a compact ruled list (no stat-tile row). Selecting a station lights it and shows its note in a caption under the map.

FORM: Transit Line Diagram, candidate 4 of 7. seed:3a07486420eb856b. Raises: activity-only light (plankton); one label grid line/station/outcome (sneaker); one loud metric per section (raygun); leader lines station→decision (sukeban); single "now" marker on career line (drum machine).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
