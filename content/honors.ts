/**
 * Honors and awards. Always say whether a result belongs to the team or to you.
 */
export type Honor = {
  award: string;
  /** "Team" or "Individual" */
  holder: "Team" | "Individual" | "TODO";
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
    context: "FIRST World Championship, Yeti Robotics (FRC 3506)",
  },
  {
    award: "District championship titles (2)",
    holder: "Team",
    level: "District",
    year: "TODO: years",
    context: "Yeti Robotics (FRC 3506)",
  },
  {
    award: "Engineering Inspiration Award",
    holder: "Team",
    level: "International",
    year: "TODO: year",
    context: "FIRST Championship, Yeti Robotics (FRC 3506)",
  },
  {
    award: "Innovation in Controls Award",
    holder: "Team",
    level: "District",
    year: "TODO: year",
    context: "District event, Yeti Robotics (FRC 3506)",
  },
  {
    award: "TODO: individual honor",
    holder: "Individual",
    level: "TODO: level",
    year: "TODO: year",
  },
];
