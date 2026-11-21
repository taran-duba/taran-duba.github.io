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
    "I’m a high school student in Charlotte, North Carolina. I started a nonprofit that teaches Python to students who can’t pay for classes, and I manage programming and electrical on YETI Robotics.",
  metaDescription:
    "Taran Duba is a high school student in Charlotte, NC. He founded Byte-Sized Python, a 501(c)(3) that teaches Python to students who can’t afford paid classes, and he is controls manager for FRC Team 3506, overseeing programming and electrical.",

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
  { value: 200, suffix: "+", label: "students taught Python worldwide", note: "Byte-Sized Python", countUp: true },
  { value: 330, suffix: "+", label: "students supported by Koda, our AI tutor built for lower-end hardware", note: "Byte-Sized Python", countUp: true },
  { value: 140, suffix: "+", label: "volunteer hours with FRC, the most on my team", note: "YETI Robotics", countUp: true },
  { value: 2026, label: "FIRST World Championship, Hopper Division title", note: "Team result, FRC 3506", countUp: false },
];

export const about = {
  paragraphs: [
    // The first paragraph is the large section heading. Keep it short.
    "I teach Python and write code for robots.",
    "Paid coding classes cost money a lot of students don’t have. I founded Byte-Sized Python, a 501(c)(3) nonprofit, so that cost doesn’t decide who gets to learn. In summer 2025, I designed and taught a five-day course with more than 40 exercises to over 70 students. Across Charlotte and abroad, we’ve now taught more than 200, and Koda, the AI tutor we built for lower-end hardware, has supported more than 330.",
    "On YETI Robotics (FRC Team 3506), I’m the controls manager, which means I lead a 30-person team across programming and electrical. I’ve written Java for every subsystem on the robot, from shooter flywheels to articulated arms. Our autonomous routines added about 50 points a match, part of how the team won two district championships and its division at the 2026 FIRST World Championship.",
    "I’m in the Class of 2028 at Providence High School. The areas I want to go deeper in are AI, robotics, and data science, and I’m looking for research and internship work in them.",
  ],
  outsideOfCode: {
    intro: "Outside of code",
    items: [
      { topic: "Cars", detail: "Formula 1 & BMW" },
      { topic: "Music", detail: "Don Toliver, Kanye West, Travis Scott" },
    ] satisfies OutsideItem[],
  },
};

export const navLinks = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#leadership", id: "leadership", label: "Leadership" },
  { href: "/#honors", id: "honors", label: "Honors" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export const contactCopy = {
  heading: "Get in touch",
  body: "If you’re working on something in robotics or computer science education, I’d like to hear about it. Email is the fastest way to reach me.",
};
