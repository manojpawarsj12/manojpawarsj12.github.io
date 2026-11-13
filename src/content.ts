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
    "I’m a backend and distributed systems engineer with five years in Go, Python and TypeScript. Right now I’m onsite at ISTRAC, ISRO, building real-time monitoring and control software for its ground station network.",
  proof: [
    { value: "−40%", text: "cloud cost on concurrent Go APIs" },
    { value: "−90%", text: "manual ops work with a self-serve job scheduler" },
    { value: "6×", text: "faster batch pipeline: 6 hours down to 1" },
    { value: "+5%", text: "checkout conversion from a coupon service" },
  ],
  availability: "Open to senior backend and distributed systems roles.",
  email: "manojpawarsj.mp11@gmail.com",
  phone: "+91 99808 68514",
  phoneHref: "tel:+919980868514",
  // Path of the résumé in public/. Set to "" to hide every résumé button.
  resume: "/Manoj_Pawar_Resume.pdf" as string,
  github: "https://github.com/manojpawarsj12",
  linkedin: "https://www.linkedin.com/in/manojpawarsj",
};

export const nav: { href: string; label: string; line: LineColor }[] = [
  { href: "#skills", label: "Skills", line: "green" },
  { href: "#experience", label: "Experience", line: "blue" },
  { href: "#work", label: "Work", line: "red" },
  { href: "#projects", label: "Projects", line: "amber" },
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

/** The hero map: the backend layers I work across, edge to people, with where I did each. */
export const route: { name: string; caption: string; stations: Station[] } = {
  name: "The backend, end to end",
  caption: "Five years across space tech, e-commerce, gaming and CRM",
  stations: [
    {
      name: "Sockets",
      tag: "TCP/IP · binary",
      note: "Integrating hardware over raw TCP/IP and Telnet sockets and decoding binary and ASCII data at the bit level, at ISTRAC, ISRO.",
    },
    {
      name: "APIs",
      tag: "Go · Nest.js",
      note: "Microservices and REST APIs: concurrent Go APIs at Digantara, Nest.js platforms for FDS and SPACEMAP, an Express.js CRM backend at Sunstone.",
      interchange: true,
    },
    {
      name: "Events",
      tag: "MQTT · SQS",
      note: "Event-driven services: bandwidth-optimised MQTT pub/sub at ISRO, and Lambda + SQS messaging between e-commerce services.",
    },
    {
      name: "Data & jobs",
      tag: "Postgres · Redis",
      note: "PostgreSQL, MongoDB and Redis; a self-serve job scheduler that cut manual work 90%; a batch pipeline cut from 6 hours to 1.",
      interchange: true,
    },
    {
      name: "Live",
      tag: "SSE · WebSockets",
      note: "Real-time delivery: SSE streams to operators with RBAC, multiplayer game backends on Azure PlayFab, WebSocket chat.",
    },
    {
      name: "Cloud",
      tag: "AWS · Docker · CI/CD",
      note: "Gitea CI/CD pipelines to AWS ECS, Docker and Terraform, and Go services tuned to cut cloud cost 40%.",
    },
  ],
};

export const lines: Line[] = [
  {
    id: "ground-station",
    letter: "G",
    color: "red",
    name: "Ground station monitoring & control",
    where: "Digantara · onsite at ISTRAC, ISRO · 2026–",
    summary:
      "Backend for a distributed, real-time monitoring and control platform across ISRO’s ground station network, developed on an offline, air-gapped RHEL 9 network under ISRO security rules.",
    stations: [],
    facts: [
      "Hardware integration over raw TCP/IP and Telnet sockets",
      "Binary and ASCII protocol parsing with bit masks, offsets and bitwise decoding",
      "Config-driven (XML) design: new device types and rules without code changes",
      "Rules engine evaluating live data for alarms, editable by operators",
      "Real-time streaming to operators over SSE, with user management and RBAC",
      "Bandwidth-optimised MQTT pub/sub with delta updates",
    ],
    stack: ["Python", "asyncio", "Node.js", "MQTT", "SSE", "TCP/IP", "RHEL 9"],
  },
  {
    id: "orbit-services",
    letter: "O",
    color: "blue",
    name: "Orbit prediction & collision-check services",
    where: "Digantara · SPACEMAP & FDS · 2023–2026",
    summary:
      "Backend services that predict where satellites will be and check whether any two could collide, for two commercial products. I made the Go APIs concurrent and cheap to run, and rebuilt the slow batch pipeline behind them.",
    stations: [
      { name: "Go APIs", note: "Goroutine and channel worker pools process requests concurrently while keeping memory use low.", interchange: true },
      { name: "Batch precompute", note: "Every orbit is propagated once, in bulk, so later stages read results instead of recomputing them." },
      { name: "Early filtering", note: "Pairs that can’t come close are dropped before any expensive work runs." },
      { name: "Optimised search", note: "Rewrote the slowest stage from published techniques, so a full run takes 1 hour instead of 6." },
      { name: "Ship", note: "Microservices deployed to AWS ECS through Gitea CI/CD pipelines I set up." },
    ],
    outcome: { value: "−40%", label: "cloud cost on the Go APIs, and the batch run cut from 6 hours to 1" },
    facts: ["2 commercial products: FDS and SPACEMAP", "Gitea CI/CD to AWS ECS", "FDS web app in React"],
    stack: ["Go", "Python", "Microservices", "AWS ECS", "Docker", "Gitea CI/CD"],
  },
  {
    id: "scheduler",
    letter: "J",
    color: "green",
    name: "Self-serve job scheduler",
    where: "Digantara · Nest.js · 2023–2026",
    summary:
      "A scheduling service that lets teams change when jobs run without a redeploy, with its own signup and role-based access, so routine changes stopped coming to engineering.",
    stations: [
      { name: "Signup", note: "Teams onboard themselves with user signup." },
      { name: "RBAC", note: "Role-based access control decides who can change which jobs.", interchange: true },
      { name: "Runtime schedules", note: "Schedules change at runtime, with no redeploy." },
      { name: "Jobs run", note: "Jobs pick up the new timing on their own." },
    ],
    outcome: { value: "−90%", label: "manual operations work" },
    facts: [],
    stack: ["Nest.js", "TypeScript", "PostgreSQL", "RBAC"],
  },
  {
    id: "checkout",
    letter: "E",
    color: "amber",
    name: "Event-driven checkout & coupons",
    where: "Elite Competitions · contract · 2023",
    summary:
      "A coupon system and the event plumbing around checkout for a UK e-commerce business, plus the dashboards to see what it changed.",
    stations: [
      { name: "Checkout", note: "Next.js storefront and Nest.js services." },
      { name: "Coupon service", note: "Single-use, per-user and newsletter codes, validated at checkout.", interchange: true },
      { name: "Events", note: "Services talk through AWS Lambda and SQS instead of direct calls." },
      { name: "Metabase", note: "Dashboards for customer lifetime value, cart abandonment and average order value." },
    ],
    outcome: { value: "+5%", label: "checkout conversion" },
    facts: [],
    stack: ["Nest.js", "Next.js", "AWS Lambda", "SQS", "Metabase"],
  },
];

export const branchLines: { name: string; blurb: string; stack: string; href?: string; color: LineColor }[] = [
  {
    name: "Gobber",
    blurb: "A Node.js package manager written in Go that installs packages significantly faster than npm.",
    stack: "Go",
    href: "https://github.com/manojpawarsj12/gobber",
    color: "green",
  },
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
    place: "Bangalore · onsite at ISTRAC, ISRO",
    points: [
      "Building the backend of a distributed, real-time monitoring and control platform for ISRO’s ground station network, in Python and Node.js.",
      "Integrating heterogeneous station hardware over TCP/IP and Telnet sockets, decoding binary and ASCII data at the bit level.",
      "Designing config-driven services and a rules engine so operators change alarm logic without code; live data reaches them over SSE and MQTT.",
      "Developing on an offline, air-gapped RHEL 9 network under ISRO security rules.",
    ],
  },
  {
    company: "Digantara",
    url: "https://www.digantara.co.in",
    title: "Software Engineer",
    period: "Oct 2023 – Feb 2026",
    place: "Bangalore · space situational awareness",
    metric: { value: "−40%", label: "cloud cost on Go APIs" },
    points: [
      "Turned business requirements into scalable microservices for FDS (orbit and manoeuvre planning) and SPACEMAP (space object tracking), shipped through Gitea CI/CD to AWS ECS.",
      "Cut cloud cost on the Go orbit-prediction APIs by 40% with goroutine and channel worker pools and low memory use.",
      "Built a Nest.js job scheduler with RBAC and signup that lets teams change schedules without a deploy, cutting manual work 90%.",
      "Rebuilt the batch collision-check pipeline (bulk precompute, early filtering, an optimised search): 6 hours down to 1.",
      "Built the FDS web app in React and Tailwind CSS.",
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
    also: ["GCP", "Terraform", "Gitea CI/CD", "Git"],
  },
  {
    name: "Observability & testing",
    color: "amber",
    daily: ["Grafana", "Loki", "OpenObserve", "pytest", "Vitest"],
    also: [],
  },
  {
    name: "Frontend & other",
    color: "amber",
    daily: ["React", "Tailwind CSS"],
    also: ["Next.js", "SciPy", "SGP4", "Azure PlayFab", "Firebase", "Metabase"],
  },
];

export const principles = [
  {
    name: "Make the service do less",
    body: "The 40% cloud saving came from Go services doing less work per request, and the 6× faster pipeline from computing things once instead of over and over. Cheaper beats bigger.",
  },
  {
    name: "Let people change it without a deploy",
    body: "When the people closest to a problem can change behaviour themselves, whether that’s a job schedule (90% less manual work) or an alarm rule at a ground station, engineering stops being the bottleneck.",
  },
  {
    name: "Measure the outcome, not the service",
    body: "I wire up the numbers the business cares about, like conversion, cart abandonment and call pickup, so a change is judged by what it moved.",
  },
];

export const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  period: "2018 – 2022",
  detail: "CGPA 8.2 / 10",
};
