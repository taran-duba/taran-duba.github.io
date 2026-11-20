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
    timeframe: "TODO: founding year to present",
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
          "TODO: officer team size and how the team is organized.",
        ],
        bullets: [
          { term: "Koda Studio", detail: "A browser-based coding environment with an AI coding tutor." },
          { term: "Koda Live", detail: "TODO: one line on what Koda Live does." },
          { term: "BSP Stats", detail: "A dashboard for the program’s numbers. TODO: what it tracks." },
          { term: "Chapter Starter Kit", detail: "TODO: one line on what the kit includes and who it is for." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Students learn in Koda Studio, which runs in the browser, so there is nothing to install. An AI coding tutor is built into the editor.",
          "Partnerships carry the curriculum further than we could alone:",
        ],
        bullets: [
          { term: "eVidyaloka", detail: "Translating the curriculum into Hindi, Telugu, and Tamil." },
          { term: "HTI x AA8", detail: "Delivering Koda Studio and digital literacy in rural North Carolina." },
          { term: "Charlotte-Mecklenburg Schools", detail: "Outreach to Title I summer camps." },
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
        paragraphs: ["TODO: any outcome you can verify beyond the reach numbers (completion, chapters started, etc.)."],
        metrics: [
          { value: "200+", label: "students taught globally" },
          { value: "330+", label: "students reached by tools built for lower-end hardware" },
          { value: "3", label: "languages the curriculum is being translated into", note: "Hindi, Telugu, Tamil" },
        ],
      },
      learned: {
        paragraphs: ["TODO: two or three sentences on what running BSP has taught you. Specific beats general."],
      },
      callout: { text: "Tools built for lower-end hardware have reached more than 330 students." },
      gallery: [
        { src: "TODO: gallery image", alt: "Koda Studio editor with the AI tutor open", width: 1600, height: 1000, caption: "Screenshot: Koda Studio with the AI tutor" },
        { src: "TODO: gallery image", alt: "BSP Stats dashboard", width: 1600, height: 1000, caption: "Screenshot: BSP Stats dashboard" },
      ],
    },
  },
  {
    slug: "yeti-robotics",
    title: "Yeti Robotics programming",
    kind: "FRC Team 3506",
    summary: "Leading a 15-person programming subteam on a team that won its division at the 2026 FIRST World Championship.",
    role: "Programming Lead",
    timeframe: "TODO: years on the team",
    tags: ["FRC", "WPILib", "Computer vision", "Controls"],
    links: [],
    featured: true,
    cover: cover("Yeti Robotics robot", "Yeti Robotics robot on the field"),
    href: "/projects/yeti-robotics/",
    caseStudy: {
      problem: {
        paragraphs: [
          "An FRC robot has to know where it is on the field, drive precisely, and keep doing both through a full match without its battery voltage sagging into a brownout.",
          "I lead a 15-person programming subteam, so the work is as much about splitting problems up and reviewing code as writing it.",
        ],
      },
      built: {
        paragraphs: ["The pieces of the robot code I built or led:"],
        bullets: [
          { term: "AprilTag vision", detail: "A vision pipeline built after evaluating PhotonVision against Limelight, with ChArUco board calibration. TODO: which you chose and why." },
          { term: "Swerve drive tuning", detail: "PID tuning for a swerve drive on Kraken X60 motors with TalonFX controllers." },
          { term: "Brownout prevention", detail: "Keeping the robot’s power draw from dropping battery voltage into brownout during a match. TODO: the approach." },
          { term: "Localization", detail: "Vision-based localization that fuses sensor data with a Kalman filter." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Cameras detect AprilTags on the field. Each detection gives a pose estimate, which is fused with the drivetrain’s own odometry through a Kalman filter, so the robot’s position stays stable when tags drop out of view.",
          "To test without a robot, I built sim-sandbox, an open-source template for simulating FRC mechanisms, and ported MapleSim in our team repo to support the WPILib 2027 alpha 2 release.",
        ],
        diagram: {
          src: "TODO: diagram image",
          alt: "Diagram of the localization pipeline from cameras to pose estimate",
          width: 1600,
          height: 900,
          caption: "Diagram: AprilTag detections and odometry fused into one pose estimate",
        },
      },
      results: {
        paragraphs: ["These are team results. Every subteam on Yeti Robotics contributed to them."],
        metrics: [
          { value: "2026", label: "FIRST World Championship, Hopper Division title", note: "Team" },
          { value: "2", label: "district championship titles", note: "Team" },
          { value: "140+", label: "volunteer hours, the most on the team", note: "Individual" },
        ],
        bullets: [
          { term: "Engineering Inspiration Award", detail: "FIRST Championship. Team award." },
          { term: "Innovation in Controls Award", detail: "District event. Team award." },
        ],
      },
      learned: {
        paragraphs: ["TODO: two or three sentences on what leading the programming subteam taught you."],
      },
      callout: { text: "Hopper Division champions at the 2026 FIRST World Championship.", attribution: "Team result, FRC 3506" },
      gallery: [
        { src: "TODO: gallery image", alt: "Robot lining up on an AprilTag", width: 1600, height: 1000, caption: "Photo: robot aligning with vision" },
        { src: "TODO: gallery image", alt: "Simulation of a robot mechanism in sim-sandbox", width: 1600, height: 1000, caption: "Screenshot: sim-sandbox mechanism simulation" },
      ],
    },
  },
  {
    slug: "aid-compass",
    title: "Aid Compass",
    kind: "Congressional App Challenge, NC-08",
    summary: "A FEMA disaster aid navigator, with the NC VOAD member directory scraped and structured so people can find help.",
    role: "TODO: your role on the team of four",
    timeframe: "TODO: year",
    tags: ["Next.js", "Tailwind", "Gemini API", "Mapbox GL JS", "Vercel"],
    links: [],
    featured: false,
    cover: cover("Aid Compass", "Aid Compass map of disaster aid organizations"),
    href: "TODO: live site or repo URL",
  },
  {
    slug: "shadowline",
    title: "Shadowline",
    kind: "Team hackathon project",
    summary: "Lunar south pole mission planning in the browser, with Story Mode for learners and Mission Control for experts.",
    role: "TODO: your role",
    timeframe: "TODO: hackathon name and date",
    tags: ["Web app", "Hackathon", "Space"],
    links: [],
    featured: false,
    cover: cover("Shadowline", "Shadowline mission planning view of the lunar south pole"),
    href: "TODO: demo or repo URL",
  },
  {
    slug: "sim-sandbox",
    title: "sim-sandbox",
    kind: "Open source",
    summary: "A template for simulating FRC mechanisms, so teams can test robot code before the robot exists.",
    role: "Author",
    timeframe: "TODO: year",
    tags: ["Open source", "FRC", "Simulation"],
    links: [],
    featured: false,
    cover: cover("sim-sandbox", "sim-sandbox simulation of an FRC mechanism"),
    href: "TODO: GitHub repo URL",
  },
  {
    slug: "koda-studio",
    title: "Koda Studio and BSP tools",
    kind: "Byte-Sized Python",
    summary: "A browser-based coding environment with an AI tutor, plus Koda Live, BSP Stats, and the Chapter Starter Kit.",
    role: "Tech Lead",
    timeframe: "TODO: year",
    tags: ["Education", "AI tutor", "Browser IDE"],
    links: [],
    featured: false,
    cover: cover("Koda Studio", "Koda Studio editor"),
    href: "/projects/byte-sized-python/",
  },
  {
    slug: "permafrost",
    title: "Permafrost",
    kind: "Tool for FRC teams",
    summary: "TODO: one line on what Permafrost does and who uses it.",
    role: "Designer",
    timeframe: "TODO: year",
    tags: ["FRC", "Tooling"],
    links: [],
    featured: false,
    cover: cover("Permafrost", "Permafrost interface"),
    href: "TODO: link",
  },
  {
    slug: "lineweave",
    title: "Lineweave",
    kind: "Tool for FRC teams",
    summary: "TODO: one line on what Lineweave does and who uses it.",
    role: "Designer",
    timeframe: "TODO: year",
    tags: ["FRC", "Tooling"],
    links: [],
    featured: false,
    cover: cover("Lineweave", "Lineweave interface"),
    href: "TODO: link",
  },
];

export const featuredProjects = projects.filter((p) => p.featured && p.caseStudy);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
