# manojpawarsj12.github.io

Portfolio of **Manoj Pawar SJ**, backend and distributed systems engineer (SDE 2 at Digantara).
Live at **https://manojpawarsj12.github.io**.

The site is drawn as a transit network. Each project is a line, and its stations are the real system components in the order data passes through them:

Sections follow the résumé's order:

- **Hero:** the backend layers I work across (sockets, APIs, events, data & jobs, live delivery, cloud) drawn as one line. Select a station (click, hover or arrow keys) to see where I did that work; the train travels to it.
- **Skills:** a station index of the stack. Bold means in daily production use.
- **Experience:** a single line with a stop per role.
- **Selected work:** backend systems from those roles (ISRO ground station platform, Go orbit-prediction services, self-serve job scheduler, event-driven checkout), each with its route and outcome.
- **Projects:** Gobber, smolie-js, App Tracker, Vent-Chat.
- **About:** working principles and education.
- **Contact:** the terminus, with email, phone, LinkedIn and GitHub.

Day map by default; night map follows the system dark-mode setting or the toggle in the header. Motion is limited to the map and respects `prefers-reduced-motion`.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS 3 · Archivo (self-hosted via Fontsource). No backend and no environment variables.

## Run locally

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173).

```bash
npm run build     # type-check and build the static site into dist/
npm run preview   # serve dist/ locally
```

## Deploying

Every push to `master` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

## Editing content

All copy lives in [`src/content.ts`](src/content.ts). Components only draw what is there.

| Export        | What it controls                                              |
| ------------- | ------------------------------------------------------------- |
| `profile`     | Name, headline, intro, the three results, contact details     |
| `route`       | The hero map's stations                                       |
| `lines`       | Selected work: stations, outcome, facts, stack                |
| `branchLines` | Personal projects                                             |
| `roles`       | Experience                                                    |
| `toolbox`     | Skills (`daily` = bold, `also` = regular)                     |
| `principles`, `education` | "How I work"                                      |

Only use numbers you can back up in an interview.

**Résumé download** is currently off. To enable it, add an NDA-safe PDF to `public/` and set `profile.resume` to its path (for example `"/Manoj_Pawar_Resume.pdf"`); the header, hero and contact buttons appear automatically.

Colours are RGB triplets in [`src/index.css`](src/index.css): `:root` for the day map, `.dark` for the night map. The four line colours (`red`, `blue`, `green`, `amber`) are the only accent colours.

## Project layout

```
index.html              entry, meta tags, pre-paint theme script
src/
  main.tsx              mounts the app, loads the font
  App.tsx               section order
  content.ts            all copy
  index.css             tokens, base styles, map animation
  components/
    Header.tsx          sticky platform strip, section nav, theme toggle
    Hero.tsx            headline, intro, results, actions
    HeroMap.tsx         interactive backend route map (wide and phone layouts)
    Work.tsx            selected work with strip maps
    Projects.tsx        personal projects
    Experience.tsx      career line
    Toolbox.tsx         skills index
    About.tsx           working principles, education
    Contact.tsx         terminus band and footer
    Bullet.tsx, Icons.tsx
public/                 favicons
PRODUCT.md              product facts the design must respect
```

## License

GPL-3.0. See [LICENSE](LICENSE).
