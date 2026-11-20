/**
 * Leadership and extracurriculars, in order of importance.
 * "TODO" values are placeholders (see TODO.md).
 */
export type Experience = {
  role: string;
  organization: string;
  years: string;
  lines: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    role: "Founder, President, and Tech Lead",
    organization: "Byte-Sized Python",
    years: "TODO: start year to present",
    lines: [
      "Run a 501(c)(3) that teaches Python to students who can’t afford paid classes. 200+ students taught globally.",
      "Partners include eVidyaloka and HTI x AA8. I lead the tech side, including Koda Studio, a browser-based coding environment with an AI tutor.",
    ],
    href: "/projects/byte-sized-python/",
  },
  {
    role: "Programming Lead",
    organization: "Yeti Robotics, FRC Team 3506",
    years: "TODO: years",
    lines: [
      "Lead a 15-person programming subteam: vision, swerve drive control, and localization.",
      "First on the team in volunteer hours, with 140+.",
    ],
    href: "/projects/yeti-robotics/",
  },
  {
    role: "Camp Counselor, Field Coordinator, and Referee",
    organization: "FIRST LEGO League",
    years: "TODO: years",
    lines: [
      "Counsel at FLL camps, and serve as field coordinator and referee at North Carolina competitions.",
    ],
  },
  {
    role: "TODO: role",
    organization: "TODO: other activities",
    years: "TODO: years",
    lines: ["TODO: one line on what you do there."],
  },
];
