// Every word on the site lives here. Components only draw what this file says.
// Metrics are résumé-backed only; do not add numbers that can't be defended in an interview.

export type LineColor = "red" | "blue" | "green" | "amber";

export const profile = {
  name: "Manoj Pawar SJ",
  initials: "MP",
  role: "Software Development Engineer 2",
  company: "Digantara",
  location: "Bangalore, India",
  headline: "Backend & distributed systems engineer",
  title: "Backends for live data, from satellite orbits to the checkout page.",
  intro:
    "I’m a backend and distributed systems engineer with five years in Go, Python and TypeScript. Right now I’m building real-time monitoring and control software for satellite ground stations.",
  proof: [
    { value: "6×", text: "faster satellite collision screening" },
    { value: "−40%", text: "cloud cost on orbit-prediction APIs" },
    { value: "−90%", text: "manual ops work after a self-serve scheduler" },
  ],
  availability: "Open to senior backend and distributed systems roles.",
  email: "manojpawarsj.mp11@gmail.com",
  phone: "+91 99808 68514",
  phoneHref: "tel:+919980868514",
  // Résumé download is off until an NDA-safe PDF exists. To turn it back on, put the file in
  // public/ and set this to its path, e.g. "/Manoj_Pawar_Resume.pdf".
  resume: "" as string,
  github: "https://github.com/manojpawarsj12",
  linkedin: "https://www.linkedin.com/in/manojpawarsj",
};

export const nav: { href: string; label: string; line: LineColor }[] = [
  { href: "#work", label: "Work", line: "red" },
  { href: "#experience", label: "Experience", line: "blue" },
  { href: "#toolbox", label: "Toolbox", line: "green" },
  { href: "#about", label: "About", line: "blue" },
  { href: "#contact", label: "Contact", line: "amber" },
];

export type Station = { name: string; note: string; tag?: string; interchange?: boolean };

export type Line = {
  id: string;
  letter: string;
  color: LineColor;
  name: string;
  where: string;
  summary: string;
  stations: Station[];
  outcome?: { value: string; label: string };
  facts: string[];
  stack: string[];
  link?: { href: string; label: string };
};

export const lines: Line[] = [
  {
    id: "conjunction",
    letter: "C",
    color: "red",
    name: "Satellite conjunction screening",
    where: "Digantara · SPACEMAP & FDS · 2023–2026",
    summary:
      "The pipeline that predicts where satellites will be and flags pairs at risk of collision. I rewrote the screening algorithm from published research and moved the Go APIs onto bounded worker pools.",
    stations: [
      { name: "Catalogue", tag: "every object", note: "Every tracked object’s orbit, ready for screening." },
      { name: "SGP4 batch", tag: "propagate", note: "Pre-propagate all orbits in bulk instead of once per candidate pair." },
      { name: "Velocity prune", tag: "narrow", note: "Relative-velocity analysis discards pairs that can’t meet before any expensive search." },
      { name: "SciPy TCA", tag: "closest approach", note: "Optimisers find closest-approach minima reliably, even on non-continuous distance functions.", interchange: true },
      { name: "Go API", tag: "serve", note: "Goroutine and channel worker pools with tight memory bounds serve the predictions." },
    ],
    outcome: { value: "6h → 1h", label: "per screening run, and −40% cloud cost on the Go APIs" },
    facts: ["2 commercial products served", "Gitea CI/CD to AWS ECS", "FDS web app in React"],
    stack: ["Python", "SGP4", "SciPy", "Go", "AWS ECS"],
  },
  {
    id: "ground-station",
    letter: "G",
    color: "blue",
    name: "Ground station monitoring & control",
    where: "Digantara · onsite contract · 2026–",
    summary:
      "Backend services for a real-time platform that lets operators monitor and control satellite ground station equipment from one place, with live data streamed to their screens.",
    stations: [],
    facts: ["Python and Node.js services", "Real-time streaming to operators", "Secure, offline Linux environment"],
    stack: ["Python", "Node.js", "Real-time streaming", "Linux"],
  },
  {
    id: "gobber",
    letter: "B",
    color: "green",
    name: "Gobber",
    where: "Open source · Go",
    summary: "A Node.js package manager written in Go that installs packages significantly faster than npm.",
    stations: [
      { name: "package.json", note: "Reads the project’s dependencies." },
      { name: "Resolve + fetch", note: "Goroutines overlap network and disk work instead of waiting on each step.", interchange: true },
      { name: "node_modules", note: "Installed tree, from a single compiled binary." },
    ],
    facts: [],
    stack: ["Go", "Concurrency"],
    link: { href: "https://github.com/manojpawarsj12/gobber", label: "Source on GitHub" },
  },
];

export const branchLines: { name: string; blurb: string; stack: string; href?: string; color: LineColor }[] = [
  {
    name: "smolie-js",
    blurb: "Reactive UI library under 1 KB: signals, effects and DOM helpers.",
    stack: "TypeScript",
    href: "https://github.com/manojpawarsj12/smolie-js",
    color: "blue",
  },
  {
    name: "App Tracker",
    blurb: "Logs time per app and website and charts it by day, week or month. Published on PyPI.",
    stack: "Python · Plotly",
    href: "https://github.com/manojpawarsj12/apptracker",
    color: "amber",
  },
  {
    name: "Vent-Chat",
    blurb: "Real-time chat and social app with persistent message history.",
    stack: "Node.js · WebSockets · MongoDB",
    color: "red",
  },
];

export type Role = {
  company: string;
  url: string;
  title: string;
  period: string;
  place: string;
  metric?: { value: string; label: string };
  points: string[];
};

export const roles: Role[] = [
  {
    company: "Digantara",
    url: "https://www.digantara.co.in",
    title: "Software Development Engineer 2",
    period: "Mar 2026 – now",
    place: "Bangalore · onsite contract",
    points: [
      "Building backend services for a real-time monitoring and control platform used at satellite ground stations, in Python and Node.js.",
      "Working onsite in a secure, offline Linux environment.",
    ],
  },
  {
    company: "Digantara",
    url: "https://www.digantara.co.in",
    title: "Software Engineer",
    period: "Oct 2023 – Feb 2026",
    place: "Bangalore · space situational awareness",
    metric: { value: "6×", label: "faster collision screening" },
    points: [
      "Rewrote collision screening around SGP4 batch propagation, velocity pruning and SciPy minimisation: 6 hours down to 1.",
      "Cut cloud cost on the Go orbit-prediction APIs by 40% with goroutine worker pools and low memory use.",
      "Shipped a Nest.js job scheduler with RBAC and signup that lets teams reschedule without a deploy, cutting manual work 90%.",
      "Built microservices and Gitea CI/CD to AWS ECS for FDS (orbit and manoeuvre planning) and SPACEMAP (space object tracking), and the FDS web app in React.",
    ],
  },
  {
    company: "Elite Competitions",
    url: "https://elitecompetitions.co.uk",
    title: "Software Engineer, full stack (contract)",
    period: "Feb – Jul 2023",
    place: "Remote · UK",
    metric: { value: "+5%", label: "checkout conversion" },
    points: [
      "Built a coupon system (single-use, per-user and newsletter codes) that lifted checkout conversion 5%.",
      "Connected services with events over AWS Lambda and SQS, behind Nest.js and Next.js.",
      "Set up Metabase dashboards for customer lifetime value, cart abandonment and average order value.",
    ],
  },
  {
    company: "Playshifu",
    url: "https://www.playshifu.com",
    title: "Software Engineer, full stack",
    period: "Sep 2022 – Jan 2023",
    place: "Bangalore",
    metric: { value: "3", label: "reporting bottlenecks surfaced" },
    points: [
      "Built real-time backend services for multiplayer games on Azure PlayFab.",
      "Built React dashboards for internal teams that exposed 3 major reporting bottlenecks.",
    ],
  },
  {
    company: "Sunstone",
    url: "https://sunstone.in",
    title: "Software Engineer, backend",
    period: "Jan – Aug 2022",
    place: "Gurgaon",
    metric: { value: "+35%", label: "CRM call pickup" },
    points: [
      "Integrated Airtel and Kaleyra cloud calling into the CRM, raising call pickup rates 35%.",
      "Built the CRM’s Express.js REST APIs on an MVC structure.",
    ],
  },
];

export type ToolGroup = { name: string; color: LineColor; daily: string[]; also: string[] };

export const toolbox: ToolGroup[] = [
  { name: "Languages", color: "red", daily: ["Go", "Python", "TypeScript"], also: ["JavaScript", "SQL"] },
  {
    name: "Real-time & backend",
    color: "red",
    daily: ["Node.js", "Nest.js", "MQTT", "SSE"],
    also: ["WebSockets", "Express", "Hono", "REST", "TCP/IP & Telnet sockets"],
  },
  {
    name: "Systems design",
    color: "blue",
    daily: ["Distributed systems", "Event-driven / pub-sub", "Rules engines", "Binary protocol parsing"],
    also: ["Config-driven (XML) design", "Bit manipulation", "RBAC", "Caching"],
  },
  {
    name: "Concurrency",
    color: "blue",
    daily: ["Goroutines & channels", "asyncio"],
    also: ["Threading", "Multiprocessing"],
  },
  {
    name: "Data",
    color: "green",
    daily: ["PostgreSQL", "Redis", "MongoDB"],
    also: ["MySQL", "Firestore", "TypeORM", "Drizzle", "Sequelize", "Mongoose"],
  },
  {
    name: "Cloud & ops",
    color: "green",
    daily: ["AWS", "Docker", "Linux (RHEL 9)"],
    also: ["GCP", "Terraform", "Docker Swarm", "Gitea CI/CD", "Grafana"],
  },
  { name: "Frontend", color: "amber", daily: ["React", "Tailwind CSS"], also: ["Next.js"] },
  { name: "Scientific & other", color: "amber", daily: ["SGP4", "SciPy"], also: ["Vitest", "Metabase", "Firebase", "Azure PlayFab"] },
];

export const principles = [
  {
    name: "Fix the algorithm first",
    body: "The 6× collision-screening win came from rethinking the maths, not from more machines. The 40% cloud saving came from making the Go services do less work per request.",
  },
  {
    name: "Let people change it without a deploy",
    body: "When the team closest to a problem can change behaviour themselves, as with the job scheduler that cut manual work by 90%, engineering stops being the bottleneck.",
  },
  {
    name: "Measure the outcome, not the service",
    body: "I wire up the numbers the business cares about, like conversion, cart abandonment and call pickup, so a change can be judged by what it moved.",
  },
];

export const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  period: "2018 – 2022",
  detail: "CGPA 8.2 / 10",
};
