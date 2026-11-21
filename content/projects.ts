/**
 * Projects. Two are featured and get a full case study page at /projects/<slug>/.
 * The rest appear in the "More things I've built" grid.
 *
 * Images: put files in /public/images/projects/ and set `src` to e.g.
 * "/images/projects/bsp-cover.webp". Keep covers at 16:10 (1600x1000 is ideal).
 * While `src` is "TODO", a neutral placeholder with the caption is shown.
 */

export type ImageSlot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown under the image, and inside the placeholder while src is TODO. */
  caption: string;
};

export type ProjectLink = { label: string; href: string };

export type ProseBlock = {
  paragraphs: string[];
  bullets?: { term: string; detail: string }[];
};

export type Metric = { value: string; label: string; note?: string };

export type CaseStudy = {
  problem: ProseBlock;
  built: ProseBlock;
  howItWorks: ProseBlock & { diagram: ImageSlot };
  results: ProseBlock & { metrics: Metric[] };
  learned: ProseBlock;
  /** Large serif callout placed between sections. Must be a fact, not a slogan. */
  callout: { text: string; attribution?: string };
  gallery: ImageSlot[];
};

export type Project = {
  slug: string;
  title: string;
  /** One line. */
  summary: string;
  role: string;
  timeframe: string;
  tags: string[];
  links: ProjectLink[];
  featured: boolean;
  cover: ImageSlot;
  /** Small label above the title on cards, e.g. "Nonprofit" or "Team hackathon" */
  kind: string;
  /** Where a grid card points. Internal paths start with "/". "TODO" = no link yet. */
  href?: string;
  caseStudy?: CaseStudy;
};

const cover = (name: string, alt: string): ImageSlot => ({
  src: "TODO: cover image",
  alt,
  width: 1600,
  height: 1000,
  caption: `Screenshot: ${name}`,
});

export const projects: Project[] = [
  {
    slug: "byte-sized-python",
    title: "Byte-Sized Python",
    kind: "Nonprofit, 501(c)(3)",
    summary: "A nonprofit that teaches Python to students who can’t afford paid classes, and builds the tools to do it.",
    role: "Founder, President, and Tech Lead",
    timeframe: "2025 to present",
    tags: ["Nonprofit", "Python", "Curriculum", "Koda Studio"],
    links: [{ label: "bytesizedpython.org", href: "https://bytesizedpython.org" }],
    featured: true,
    cover: cover("Byte-Sized Python", "Byte-Sized Python website and Koda Studio"),
    href: "/projects/byte-sized-python/",
    caseStudy: {
      problem: {
        paragraphs: [
          "Paid coding classes are out of reach for a lot of students. Many free options assume a recent computer, which leaves out students working on older or lower-end machines.",
          "TODO: founding story. When and why you started BSP, in two or three sentences.",
        ],
      },
      built: {
        paragraphs: [
          "I founded Byte-Sized Python and lead it as president and tech lead. That means running the teaching program and building the software it depends on.",
          "In summer 2025, I was also head instructor. I designed a five-day Python curriculum with more than 40 exercises and take-home reference materials, and taught it to over 70 students.",
          "TODO: officer team size and how the team is organized.",
        ],
        bullets: [
          { term: "Koda Studio", detail: "A browser-based coding environment with Koda, an AI coding tutor built to run well on lower-end hardware." },
          { term: "Koda Live", detail: "TODO: one line on what Koda Live does." },
          { term: "BSP Stats", detail: "A dashboard for the program’s numbers. TODO: what it tracks." },
          { term: "Chapter Starter Kit", detail: "TODO: one line on what the kit includes and who it is for." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Students learn in Koda Studio, which runs in the browser, so there is nothing to install. The Koda AI tutor is built into the editor.",
          "Partnerships carry the curriculum further than we could alone:",
        ],
        bullets: [
          { term: "HTI x AA8", detail: "Delivering Koda Studio and digital literacy in rural North Carolina." },
          { term: "Title I schools", detail: "Outreach to Charlotte-Mecklenburg Schools Title I summer camps, and an expansion into Title I schools that adds robotics and AI literacy." },
        ],
        diagram: {
          src: "TODO: diagram image",
          alt: "Diagram of how a student moves through Byte-Sized Python",
          width: 1600,
          height: 900,
          caption: "Diagram: student path from first lesson to Koda Studio",
        },
      },
      results: {
        paragraphs: ["Students have come from Charlotte and from other countries. The summer 2025 course alone ran five days, with more than 40 exercises."],
        metrics: [
          { value: "200+", label: "students taught, in Charlotte and internationally" },
          { value: "330+", label: "students supported by the Koda AI tutor" },
          { value: "70+", label: "students in the five-day summer 2025 course" },
        ],
      },
      learned: {
        paragraphs: ["TODO: two or three sentences on what running BSP has taught you. Specific beats general."],
      },
      callout: { text: "Koda, our AI tutor built for lower-end hardware, has supported more than 330 students." },
      gallery: [
        { src: "TODO: gallery image", alt: "Koda Studio editor with the AI tutor open", width: 1600, height: 1000, caption: "Screenshot: Koda Studio with the AI tutor" },
        { src: "TODO: gallery image", alt: "BSP Stats dashboard", width: 1600, height: 1000, caption: "Screenshot: BSP Stats dashboard" },
      ],
    },
  },
  {
    slug: "yeti-robotics",
    title: "YETI Robotics Controls Team",
    kind: "FRC Team 3506",
    summary: "Managing programming and electrical, and leading a 30-person team on a squad that won its division at the 2026 FIRST World Championship.",
    role: "Controls Manager (programming and electrical)",
    timeframe: "Fall 2024 to present",
    tags: ["FRC", "Java", "WPILib", "Computer vision", "Controls", "Electrical"],
    links: [
      { label: "sim-sandbox on GitHub", href: "https://github.com/yeti-robotics/sim-sandbox" },
      { label: "MapleSim port for WPILib 2027", href: "https://github.com/yeti-robotics/maple-sim-2027-alpha2" },
    ],
    featured: true,
    cover: cover("YETI Robotics robot", "YETI Robotics robot on the field"),
    href: "/projects/yeti-robotics/",
    caseStudy: {
      problem: {
        paragraphs: [
          "An FRC robot has to know where it is on the field, aim and shoot accurately from anywhere, and keep doing all of it through a full match without its battery voltage sagging into a brownout.",
          "As controls manager, I lead a 30-person team across programming and electrical, so the work is as much about splitting problems up and reviewing code as writing it. Build season runs more than 21 hours a week, and I put in over 600 hours a year alongside a full course load.",
        ],
      },
      built: {
        paragraphs: ["The robot code I wrote or led, all in Java on WPILib:"],
        bullets: [
          { term: "Every subsystem", detail: "Shooter flywheels, intake slides, elevators, and articulated arms." },
          { term: "AprilTag vision", detail: "A three-camera AprilTag pipeline for real-time field localization, built after evaluating PhotonVision against Limelight. We went with Limelight, and calibrated the cameras with ChArUco boards." },
          { term: "Auto-alignment", detail: "Automated target alignment, so the robot aims without driver input. It cut cycle time." },
          { term: "Flywheel lookup map", detail: "An interpolated map from shot distance to flywheel speed in rotations per second, so shots stay accurate from different spots on the field." },
          { term: "Swerve drive tuning", detail: "PID tuning for a swerve drive on Kraken X60 motors with TalonFX controllers." },
          { term: "Brownout prevention", detail: "Keeping the robot’s power draw from dropping battery voltage into brownout during a match. TODO: the approach." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Three cameras detect AprilTags on the field. Each detection gives a pose estimate, which is fused with the drivetrain’s own odometry through a Kalman filter, so the robot’s position stays stable when tags drop out of view.",
          "Knowing its position means the robot knows its distance to the target. Auto-alignment turns it to face the target, and the lookup map interpolates the flywheel speed for that distance.",
          "To test without a robot, I built sim-sandbox, an open-source template for simulating FRC mechanisms, and ported MapleSim in our team repo to support the WPILib 2027 alpha 2 release.",
        ],
        diagram: {
          src: "TODO: diagram image",
          alt: "Diagram of the pipeline from cameras to pose estimate to aiming and flywheel speed",
          width: 1600,
          height: 900,
          caption: "Diagram: AprilTag detections and odometry fused into one pose, then used to aim and set flywheel speed",
        },
      },
      results: {
        paragraphs: [
          "Titles and awards are team results. Every subteam on YETI Robotics contributed to them. Our autonomous routines added about 50 points a match toward them.",
        ],
        metrics: [
          { value: "2026", label: "FIRST World Championship, Hopper Division title", note: "Team" },
          { value: "2", label: "district championship titles", note: "Team" },
          { value: "~50", label: "points a match from autonomous routines", note: "Programming subteam" },
        ],
        bullets: [
          { term: "Engineering Inspiration Award", detail: "FIRST Championship. Team award." },
          { term: "Innovation in Controls Award", detail: "District event. Team award." },
          { term: "Volunteering", detail: "First on the team in community volunteering, with 140+ hours." },
          { term: "Outreach", detail: "Robot demos reaching 120+ community members, including events at Wallace Pruitt Recreation Center and with LPL Financial and Big Brothers Big Sisters." },
          { term: "Advocacy", detail: "Lobbied six North Carolina and South Carolina senators and representatives at the U.S. Capitol for STEM funding." },
        ],
      },
      learned: {
        paragraphs: ["TODO: two or three sentences on what managing programming and electrical taught you."],
      },
      callout: { text: "Our autonomous routines added about 50 points a match.", attribution: "YETI Robotics, FRC Team 3506" },
      gallery: [
        { src: "TODO: gallery image", alt: "Robot lining up on an AprilTag", width: 1600, height: 1000, caption: "Photo: robot aligning with vision" },
        { src: "TODO: gallery image", alt: "Simulation of a robot mechanism in sim-sandbox", width: 1600, height: 1000, caption: "Screenshot: sim-sandbox mechanism simulation" },
      ],
    },
  },
  {
    slug: "sim-sandbox",
    title: "sim-sandbox",
    kind: "Open source",
    summary: "A template and step-by-step guide for simulating and tuning FRC mechanisms (arm, elevator, wrist), using YETI’s 2025 robot as the example. 20+ students used it in its first year.",
    role: "Author",
    timeframe: "2025 to present",
    tags: ["Open source", "Java", "WPILib", "Simulation"],
    links: [],
    featured: false,
    cover: cover("sim-sandbox", "sim-sandbox simulation of an FRC mechanism"),
    href: "https://github.com/yeti-robotics/sim-sandbox",
  },
  {
    slug: "polar-edge",
    title: "Polar Edge",
    kind: "Open source, FRC scouting",
    summary: "Analytics features and UI for a full-stack FRC scouting platform, including charts and team comparison tools for alliance selection. Used by 100+ teams.",
    role: "Contributor",
    timeframe: "2024 to present",
    tags: ["TypeScript", "React", "Next.js", "PostgreSQL"],
    links: [],
    featured: false,
    cover: cover("Polar Edge", "Polar Edge scouting analytics charts"),
    href: "https://github.com/yeti-robotics/polar-edge",
  },
  {
    slug: "clairify",
    title: "Clairify",
    kind: "NASA Space Apps, Charlotte winner",
    summary: "NASA air quality sensor data plus Gemini AI, turned into personal respiratory health guidance. Won the Invented for Life Award with a team formed on-site.",
    role: "Co-founder and developer",
    timeframe: "Fall 2025",
    tags: ["Gemini API", "NASA data", "Web app"],
    links: [],
    featured: false,
    cover: cover("Clairify", "Clairify air quality guidance screen"),
    href: "https://clairify.vercel.app",
  },
  {
    slug: "permafrost",
    title: "Permafrost",
    kind: "Tool for FRC teams",
    summary: "SolidWorks file sharing over Google Drive, with check-out locks, atomic pushes, and full history. Built in Rust and React to fix what went wrong with CacheCAD.",
    role: "Designer and developer",
    timeframe: "2026",
    tags: ["Rust", "Tauri", "React", "SolidWorks"],
    links: [],
    featured: false,
    cover: cover("Permafrost", "Permafrost interface"),
    href: "https://github.com/taran-duba/permafrost",
  },
  {
    slug: "lineweave",
    title: "Lineweave",
    kind: "Tool for FRC teams",
    summary: "A real-time collaborative take on draw.io: live cursors, autosave to Google Drive, and files that open in diagrams.net without losing anything.",
    role: "Designer and developer",
    timeframe: "2026",
    tags: ["Next.js", "Yjs", "Firebase", "Google Drive"],
    links: [],
    featured: false,
    cover: cover("Lineweave", "Lineweave diagram editor"),
    href: "https://lineweave-weld.vercel.app",
  },
  {
    slug: "aid-compass",
    title: "Aid Compass",
    kind: "Congressional App Challenge, NC-08",
    summary: "A FEMA disaster aid navigator, with the NC VOAD member directory scraped and structured so people can find help.",
    role: "Lead developer",
    timeframe: "TODO: year",
    tags: ["Next.js", "Tailwind", "Gemini API", "Mapbox GL JS", "Vercel"],
    links: [],
    featured: false,
    cover: cover("Aid Compass", "Aid Compass map of disaster aid organizations"),
    href: "TODO: live site or repo URL",
  },
  {
    slug: "lunaris360",
    title: "Lunaris360",
    kind: "Team hackathon project",
    summary: "Lunar south pole mission planning in the browser, with Story Mode for learners and Mission Control for experts.",
    role: "Lead developer",
    timeframe: "NASA Space Apps 2026",
    tags: ["Web app", "Hackathon", "Space"],
    links: [],
    featured: false,
    cover: cover("Lunaris360", "Lunaris360 mission planning view of the lunar south pole"),
    href: "TODO: demo or repo URL",
  },
  {
    slug: "koda-studio",
    title: "Koda Studio and BSP tools",
    kind: "Byte-Sized Python",
    summary: "A browser-based coding environment with the Koda AI tutor, plus Koda Live, BSP Stats, and the Chapter Starter Kit.",
    role: "Tech Lead",
    timeframe: "TODO: year",
    tags: ["Education", "AI tutor", "Browser IDE"],
    links: [],
    featured: false,
    cover: cover("Koda Studio", "Koda Studio editor"),
    href: "/projects/byte-sized-python/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured && p.caseStudy);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
