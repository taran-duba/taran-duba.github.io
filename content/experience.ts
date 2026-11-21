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
      "Founded Byte-Sized Python in 2025 and established it as a 501(c)(3) nonprofit that October. The program provides accessible Python instruction, reaching 200+ students in Charlotte and internationally.",
      "Designed and taught a five-day Python course with 40+ exercises for 70+ students, and developed partnerships including eVidyaloka and HTI x AA8.",
    ],
    href: "/projects/byte-sized-python/",
  },
  {
    role: "Controls Manager",
    organization: "YETI Robotics, FRC Team 3506",
    years: "2024 to present",
    lines: [
      "Lead a 30-person programming and electrical team, developing robot software across mechanisms, vision, localization, and autonomous systems.",
      "Contribute 600+ hours annually and logged 140+ community volunteer hours in 2026, the highest on the team.",
    ],
    href: "/projects/yeti-robotics/",
  },
  {
    role: "Camp Counselor, Field Coordinator, and Referee",
    organization: "FIRST LEGO League",
    years: "2024 to present",
    lines: [
      "Mentored 10+ students in grades 3 to 8 in robot design, construction, and SPIKE Prime programming.",
      "Served as field coordinator and referee at North Carolina competitions involving 75+ teams and 600+ students.",
    ],
  },
  {
    role: "Volunteer Math Tutor",
    organization: "ESSAM, with Dr. Harold Reiter (UNC Charlotte)",
    years: "2023 to present",
    lines: [
      "Tutored 50+ elementary and middle school students in AMC 8 competition mathematics.",
      "Provided year-long, one-on-one tutoring to a Title I student for three consecutive years.",
    ],
  },
  {
    role: "Outreach and Advocacy Volunteer",
    organization: "YETI Robotics, FRC Team 3506",
    years: "2025 to 2026",
    lines: [
      "Led robotics demonstrations and outreach reaching 120+ community members through events with Wallace Pruitt Recreation Center, LPL Financial, and Big Brothers Big Sisters.",
      "Advocated for STEM funding at the U.S. Capitol, meeting with six legislators from North Carolina and South Carolina.",
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
    lines: ["Selected through teacher nomination to organize school events, host campus tours, and welcome incoming families."],
  },
  {
    role: "Volunteer, Loans Product Team",
    organization: "BlackBuck (Zinka Logistics), Bangalore",
    years: "Summer 2024",
    lines: [
      "Contributed 144 hours with the product team supporting BlackBuck’s loans business for used-truck buyers.",
      "Built a Python simulation of business-rule scenarios and developed responsive insurance form templates and a loan application interface from Figma designs.",
    ],
  },
];
