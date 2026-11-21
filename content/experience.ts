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
    years: "2025 to present",
    lines: [
      "Started teaching in summer 2025 and became a 501(c)(3) that October. Teaches Python to students who can’t afford paid classes, with 200+ students taught in Charlotte and internationally.",
      "Designed and taught the summer 2025 course: five days, 40+ exercises, 70+ students. Partners include eVidyaloka and HTI x AA8.",
    ],
    href: "/projects/byte-sized-python/",
  },
  {
    role: "Controls Manager",
    organization: "YETI Robotics, FRC Team 3506",
    years: "2024 to present",
    lines: [
      "Lead a 30-person team across programming and electrical. Write Java for every robot subsystem, plus vision, auto-alignment, and localization.",
      "600+ hours a year. First on the team in community volunteering, with 140+ hours.",
    ],
    href: "/projects/yeti-robotics/",
  },
  {
    role: "Camp Counselor, Field Coordinator, and Referee",
    organization: "FIRST LEGO League",
    years: "2024 to present",
    lines: [
      "Mentored 10+ students in grades 3 to 8 to design, build, and program SPIKE Prime robots for FLL competitions.",
      "Field coordinator and referee at North Carolina robotics competitions, with 75+ teams and 600+ students.",
    ],
  },
  {
    role: "Volunteer Math Tutor",
    organization: "ESSAM, with Dr. Harold Reiter (UNC Charlotte)",
    years: "2023 to present",
    lines: [
      "Group tutoring in AMC 8 competition math for 50+ elementary and middle school students.",
      "Year-long one-on-one tutoring for a Title I student each year, three years running.",
    ],
  },
  {
    role: "Outreach and Advocacy Volunteer",
    organization: "YETI Robotics, FRC Team 3506",
    years: "2025 to 2026",
    lines: [
      "Led robot demos and outreach reaching 120+ community members, with Wallace Pruitt Recreation Center, LPL Financial, and Big Brothers Big Sisters.",
      "Lobbied six North Carolina and South Carolina senators and representatives at the U.S. Capitol for STEM funding.",
    ],
  },
  {
    role: "Ambassador",
    organization: "Inspirit AI Ambassadors Program",
    years: "2025",
    lines: ["Led workshops for students on responsible and practical uses of AI."],
  },
  {
    role: "Student Coach",
    organization: "VEX IQ middle school robotics",
    years: "2024 to 2025",
    lines: [
      "Mentored four middle school students on programming and robot design. The team qualified for districts and advanced to the state championship.",
    ],
  },
  {
    role: "Student Leadership Team",
    organization: "Metrolina Regional Scholars Academy",
    years: "2023 to 2024",
    lines: ["Nominated by teachers. Organized school events, hosted campus tours, and welcomed new families."],
  },
  {
    role: "Volunteer, Loans Product Team",
    organization: "BlackBuck (Zinka Logistics), Bangalore",
    years: "Summer 2024",
    lines: [
      "144 hours from June 17 to July 10, 2024, with the product specialists on BlackBuck's loans business for secondhand truck buyers.",
      "Simulated the business rules engine in Python to find the best rule set for pre-approving loans, and built HTML and CSS insurance form templates and a mobile responsive loan application page from a Figma design.",
    ],
  },
];
