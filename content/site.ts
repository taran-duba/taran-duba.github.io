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
  descriptor: "Founder of Byte-Sized Python. Programming lead for FRC Team 3506.",
  /** Two sentence hero intro. */
  intro:
    "I’m a high school student in Charlotte, North Carolina. I started a nonprofit that teaches Python to students who can’t pay for classes, and I lead the programming subteam on Yeti Robotics.",
  metaDescription:
    "Taran Duba is a high school student in Charlotte, NC. He founded Byte-Sized Python, a 501(c)(3) teaching Python to students who can’t afford paid classes, and leads programming for FRC Team 3506.",

  location: "Charlotte, NC",
  school: "TODO: school name",
  gradYear: "TODO: graduation year",

  email: "TODO: public email address",
  github: "TODO: GitHub profile URL",
  linkedin: "TODO: LinkedIn profile URL",

  /** Absolute origin of the deployed site, including any base path. Set NEXT_PUBLIC_SITE_URL in CI. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://taran-duba.github.io").replace(/\/$/, ""),
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
  { value: 330, suffix: "+", label: "students reached by tools built for lower-end hardware", note: "Byte-Sized Python", countUp: true },
  { value: 140, suffix: "+", label: "volunteer hours with FRC, the most on my team", note: "Yeti Robotics", countUp: true },
  { value: 2026, label: "FIRST World Championship, Hopper Division title", note: "Team result, FRC 3506", countUp: false },
];

export const about = {
  paragraphs: [
    // The first paragraph is the large section heading. Keep it short.
    "I teach Python and write code for robots.",
    "Paid coding classes cost money a lot of students don’t have. I founded Byte-Sized Python, a 501(c)(3) nonprofit, so that cost doesn’t decide who gets to learn. As president and tech lead I run the program and build the software it runs on. We’ve taught more than 200 students around the world, and the tools we built for lower-end hardware have reached more than 330.",
    "On Yeti Robotics (FRC Team 3506) I lead a 15-person programming subteam. Robot code is software with a very honest test: the vision pipeline and the PID loops are either right on the field or they aren’t. That habit of checking work against the real world is what I bring back to the tools I build for students.",
  ],
  outsideOfCode: {
    intro: "Outside of code",
    items: [
      { topic: "Cars", detail: "TODO: what you’re into (a car, a builder, a race series)" },
      { topic: "Fashion and style", detail: "TODO: a specific detail about your style" },
      { topic: "Music", detail: "TODO: artists or what’s on repeat" },
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
