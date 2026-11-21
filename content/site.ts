/**
 * Site-wide facts and copy. Edit here and the whole site updates.
 * Any value set to "TODO" (or "TODO: hint") is a placeholder. See TODO.md.
 */

export type Stat = {
  /** Number shown large. Counts up from 0 when `countUp` is true. */
  value: number;
  /** Text after the number, e.g. "+" */
  suffix?: string;
  label: string;
  /** Short qualifier shown under the label, e.g. "Team result" */
  note?: string;
  countUp: boolean;
};

export type OutsideItem = { topic: string; detail: string };

export const siteConfig = {
  name: "Taran Duba",
  shortName: "TD",
  /** One line under the name in the hero, and the default meta description lead. */
  descriptor: "Founder of Byte-Sized Python. Controls manager for FRC Team 3506.",
  /** Two sentence hero intro. */
  intro:
    "From robot localization systems to browser-based coding tools, I like building software that solves real problems. I founded Byte-Sized Python to make programming education more accessible and lead programming and electrical at YETI Robotics, FRC Team 3506.",
  metaDescription:
    "Taran Duba is a high school student in Charlotte, NC. Founder of Byte-Sized Python, a 501(c)(3) that teaches Python, and controls manager for FRC Team 3506.",

  location: "Charlotte, NC",
  school: "Providence High School",
  gradYear: "2028",

  email: "taran.duba3@gmail.com",
  github: "https://github.com/taran-duba",
  linkedin: "https://www.linkedin.com/in/taran-duba/",

  /** Absolute origin of the deployed site, including any base path. Set NEXT_PUBLIC_SITE_URL in CI. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://taran-duba.github.io").replace(/\/$/, ""),
  /**
   * Resume button target. While this is "TODO", both resume buttons are hidden.
   * Export the resume from Word as public/resume.pdf, then set this to "/resume.pdf".
   */
  resumePath: "/resume.pdf",
  ogImagePath: "/og.png",

  /**
   * Headshot in /public, e.g. "/images/headshot.webp" (portrait, about 800x1000).
   * While this is "TODO", the hero shows a typographic monogram instead.
   */
  headshot: {
    src: "TODO: headshot image path",
    alt: "Portrait of Taran Duba",
    width: 800,
    height: 1000,
  },
} as const;

export const stats: Stat[] = [
  { value: 200, suffix: "+", label: "students taught Python, in Charlotte and internationally", note: "Byte-Sized Python", countUp: true },
  { value: 330, suffix: "+", label: "students reached by Koda, our AI coding tutor", note: "Byte-Sized Python", countUp: true },
  { value: 140, suffix: "+", label: "community volunteer hours through FRC", note: "YETI Robotics, highest on team in 2026", countUp: true },
  { value: 2026, label: "FIRST World Championship, Hopper Division champion", note: "Team result, FRC 3506", countUp: false },
];

export const about = {
  paragraphs: [
    // The first paragraph is the large section heading. Keep it short.
    "I teach Python and write code for robots.",
    "Access to computer science education shouldn’t depend on what a student can afford. I founded Byte-Sized Python, a 501(c)(3) nonprofit, to make learning Python more accessible. In summer 2025, I designed and taught a five-day course with 40+ exercises to more than 70 students. Since then, our program has reached 200+ students in Charlotte and internationally, and Koda, our AI coding tutor, has reached 330+.",
    "On YETI Robotics (FRC Team 3506), I lead a 30-person programming and electrical team as controls manager. I develop Java-based robot systems, including vision, localization, auto-alignment, and mechanism control. Our autonomous routines contributed roughly 50 points per match, helping the team earn two district championships and the 2026 FIRST World Championship Hopper Division title.",
    "I’m interested in the intersection of robotics, AI, and software engineering, especially problems where computation has to interact with the real world. I’m continuing to explore those areas through robotics, independent projects, and technical experimentation.",
  ],
  outsideOfCode: {
    intro: "When I’m not building",
    items: [
      { topic: "Cars", detail: "Formula 1 & BMW" },
      { topic: "Music", detail: "Don Toliver, Kanye West, Travis Scott" },
    ] satisfies OutsideItem[],
  },
};

export const navLinks = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#leadership", id: "leadership", label: "Leadership" },
  { href: "/#honors", id: "honors", label: "Honors" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export const contactCopy = {
  heading: "Get in touch",
  body: "I’m always interested in conversations about robotics, software engineering, computer science education, and projects that make technology more accessible. Email is the easiest way to reach me.",
};
