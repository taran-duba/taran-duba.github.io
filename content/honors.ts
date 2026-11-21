/**
 * Honors and awards. Always say whether a result belongs to the team or to you.
 */
export type Honor = {
  award: string;
  /** "Team" or "Individual" */
  holder: "Team" | "Individual";
  /** e.g. "International", "District" */
  level: string;
  year: string;
  context?: string;
};

export const honors: Honor[] = [
  {
    award: "Hopper Division title",
    holder: "Team",
    level: "International",
    year: "2026",
    context: "FIRST World Championship, YETI Robotics (FRC 3506)",
  },
  {
    award: "Engineering Inspiration Award",
    holder: "Team",
    level: "International",
    year: "2026",
    context: "FIRST Championship, YETI Robotics (FRC 3506)",
  },
  {
    award: "District championship titles (2)",
    holder: "Team",
    level: "District",
    year: "2026",
    context: "YETI Robotics (FRC 3506)",
  },
  {
    award: "Innovation in Controls Award",
    holder: "Team",
    level: "District",
    year: "2026",
    context: "District event, YETI Robotics (FRC 3506)",
  },
  {
    award: "Presidential Volunteer Service Award, Gold",
    holder: "Individual",
    level: "National",
    year: "2025",
  },
  {
    award: "Invented for Life Award",
    holder: "Team",
    level: "Local",
    year: "2025",
    context: "NASA Space Apps Challenge, Charlotte chapter. Won with Clairify, a team formed on-site.",
  },
  {
    award: "2nd place, International Conference",
    holder: "Team",
    level: "International",
    year: "TODO: year",
    context: "Future Problem Solving Program International, Global Issues Problem Solving",
  },
  {
    award: "2nd place, NC State Tournament (Elementary)",
    holder: "Team",
    level: "State",
    year: "TODO: year",
    context: "Future Problem Solving Program International",
  },
  {
    award: "10th place, Experimental Design (Div. B)",
    holder: "Team",
    level: "State",
    year: "2024",
    context: "Science Olympiad, NC State",
  },
];
