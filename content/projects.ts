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
  /** Optional dark theme version of the same image. */
  darkSrc?: string;
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
  /** Optional "Leadership and community impact" section, shown after Results. */
  community?: ProseBlock;
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

const shot = (name: string, alt: string, file: string): ImageSlot => ({
  src: `/images/projects/${file}`,
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
    summary: "A nonprofit making Python education accessible through free instruction, browser-based coding tools, and an AI tutor designed for students on lower-end hardware.",
    role: "Founder, President, and Tech Lead",
    timeframe: "2025 to present",
    tags: ["Python", "Education", "AI", "Browser IDE"],
    links: [
      { label: "bytesizedpython.org", href: "https://bytesizedpython.org" },
      { label: "Koda Studio", href: "https://studio.bytesizedpython.org" },
      { label: "Koda Live", href: "https://live.bytesizedpython.org" },
    ],
    featured: true,
    cover: shot("Byte-Sized Python", "Byte-Sized Python home page with the headline Learn Python one byte at a time", "byte-sized-python.webp"),
    href: "/projects/byte-sized-python/",
    caseStudy: {
      problem: {
        paragraphs: [
          "Paid coding classes are out of reach for many students. Even free learning tools can assume access to newer hardware, leaving students with older or lower-end computers behind.",
          "I started Byte-Sized Python after seeing how often students wanted to learn programming but lacked access to structured instruction. What began as teaching grew into an organization focused on accessible computer science education and the tools to support it.",
        ],
      },
      built: {
        paragraphs: [
          "I founded Byte-Sized Python and lead its teaching program and technical development. My responsibilities span curriculum design, software development, partnerships, and organizational operations.",
          "In summer 2025, I served as head instructor, designing a five-day Python curriculum with 40+ exercises and take-home reference materials for more than 70 students.",
        ],
        bullets: [
          { term: "Koda Studio", detail: "A browser-based coding environment with Koda, an AI coding tutor built to run well on lower-end hardware." },
          { term: "Koda Live", detail: "A classroom Python platform. A teacher starts a session, students join with a six-character code and code in the browser, and Koda gives them live feedback while the teacher watches everyone’s progress on a dashboard." },
          { term: "BSP Stats", detail: "An internal dashboard for our leadership that pulls Vercel web analytics (visitors, pageviews, bounce rate, traffic sources, and page-level stats) across our sites, plus YouTube stats." },
          { term: "Chapter Starter Kit", detail: "A kit for people launching their own peer-led chapter, such as student volunteers, parents, or teachers. It has a launch checklist, setup and facilitator guides, a 20-session curriculum outline across six units, an FAQ, and logos. The facilitator doesn’t need to know Python, and nobody needs a call with us to get started." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Students work in Koda Studio, a browser-based environment that lets them write and run Python without installing software. The Koda AI tutor is built into the editor, so students get help while they work.",
          "Where the program reaches students:",
        ],
        bullets: [
          { term: "Our classes", detail: "Directly taught instruction, including the summer 2025 course." },
          { term: "Partner programs", detail: "HTI x AA8 delivers Koda Studio and digital literacy in rural North Carolina." },
          { term: "Title I outreach", detail: "Outreach to Charlotte-Mecklenburg Schools Title I summer camps, and an expansion into Title I schools that adds robotics and AI literacy." },
          { term: "Peer-led chapters", detail: "Student volunteers, parents, and teachers can launch their own chapter with the Chapter Starter Kit." },
        ],
        diagram: {
          src: "/images/projects/bsp-flow-light.webp",
          darkSrc: "/images/projects/bsp-flow-dark.webp",
          alt: "Diagram. Students move from the curriculum (20 sessions across 6 units) to Koda Studio, where they code in the browser, then to Koda Live, where a teacher runs a session and students join with a six-character code. The Koda AI tutor gives feedback in both tools. The program reaches students through our own classes, peer-led chapters launched with the Chapter Starter Kit, and local partners (HTI x AA8 in rural NC, and Title I schools).",
          width: 1600,
          height: 900,
          caption: "Diagram: how a student learns, and how the program reaches them",
        },
      },
      results: {
        paragraphs: ["The program combines direct instruction with browser-based tools and partner-led outreach, so we can support students beyond a single classroom or course."],
        metrics: [
          { value: "200+", label: "students taught, in Charlotte and internationally" },
          { value: "330+", label: "students reached by the Koda AI tutor" },
          { value: "70+", label: "students in the five-day summer 2025 course" },
        ],
      },
      learned: {
        paragraphs: ["Building Byte-Sized Python taught me that accessibility is more than making a course free. The software, hardware assumptions, curriculum, and teaching structure all affect whether students can actually participate. That changed how I approach the tools we build: I now treat the constraints of the learner as part of the engineering problem."],
      },
      callout: { text: "Koda, our AI tutor built for lower-end hardware, has reached more than 330 students." },
      gallery: [
        { ...shot("Koda Studio with the AI tutor", "Koda Studio editor running Python, with the Koda AI tutor panel", "koda-studio.webp") },
        { ...shot("BSP Stats dashboard", "BSP Stats dashboard showing visitors, page views, traffic over time, and traffic sources for the Byte-Sized Python site", "bsp-stats.webp") },
      ],
    },
  },
  {
    slug: "yeti-robotics",
    title: "YETI Robotics Controls Team",
    kind: "FRC Team 3506",
    summary: "Leading programming and electrical for FRC Team 3506, developing robot controls, localization, vision, and autonomous systems for a championship-winning robot.",
    role: "Controls Manager (programming and electrical)",
    timeframe: "Fall 2024 to present",
    tags: ["FRC", "Java", "WPILib", "Computer vision", "Controls", "Electrical"],
    links: [
      { label: "YETI Robotics on GitHub", href: "https://github.com/yeti-robotics" },
      { label: "yetirobotics.org", href: "https://yetirobotics.org" },
      { label: "sim-sandbox", href: "https://github.com/yeti-robotics/sim-sandbox" },
    ],
    featured: true,
    cover: {
      src: "/images/projects/yeti-robotics.webp",
      alt: "YETI Robotics' robot, bumper number 3506, on the field surrounded by yellow game pieces",
      width: 653,
      height: 408,
      caption: "Photo: YETI Robotics (FRC 3506) in a match",
    },
    href: "/projects/yeti-robotics/",
    caseStudy: {
      problem: {
        paragraphs: [
          "An FRC robot has to know where it is on the field, aim and shoot accurately from anywhere, and keep doing all of it through a full match without its battery voltage sagging into a brownout.",
          "As controls manager, I lead a 30-person team across programming and electrical. The work involves coordinating subsystems, reviewing code, and distributing engineering tasks, alongside hands-on development. During build season, our team works more than 21 hours a week, and I contribute over 600 hours annually.",
        ],
      },
      built: {
        paragraphs: ["I developed and led Java-based robot systems using WPILib, including:"],
        bullets: [
          { term: "Every subsystem", detail: "Control software for the robot’s major mechanisms, including shooter flywheels, intake slides, elevators, and articulated arms." },
          { term: "AprilTag vision", detail: "A three-camera AprilTag pipeline for real-time field localization. After evaluating PhotonVision and Limelight, we selected Limelight and calibrated our cameras using ChArUco boards." },
          { term: "Auto-alignment", detail: "An automated target-alignment system that reduces the driver’s manual aiming workload and helps the robot consistently orient toward its target." },
          { term: "Flywheel lookup map", detail: "An interpolated lookup map that converts target distance into flywheel speed, helping maintain consistent shots from different positions on the field." },
          { term: "Swerve drive tuning", detail: "Tuned the swerve-drive control system using PID adjustments across Kraken X60 motors and TalonFX controllers." },
          { term: "Brownout prevention", detail: "Current-limit adjustments that help prevent voltage sag and brownouts during high-demand match conditions." },
          { term: "Simulation tooling", detail: "sim-sandbox, an open-source template for practicing PID tuning without a physical robot, and a port of MapleSim to the WPILib 2027 alpha 2 release for our team’s internal CADathon challenge." },
        ],
      },
      howItWorks: {
        paragraphs: [
          "Three cameras detect AprilTags on the field, and each detection gives a pose estimate. These estimates are fused with the drivetrain’s own odometry through a Kalman filter, so the robot’s position stays stable when tags drop out of view or readings are noisy.",
          "Knowing its position means the robot knows its distance to the target. Auto-alignment turns it to face the target, and the lookup map interpolates the flywheel speed for that distance.",
        ],
        diagram: {
          src: "/images/projects/yeti-flow-light.webp",
          darkSrc: "/images/projects/yeti-flow-dark.webp",
          alt: "Diagram. Three cameras detect AprilTags on the field, and drivetrain odometry estimates the robot's motion. A Kalman filter combines both into one stable robot pose. The pose feeds auto-alignment, which turns the robot to face the target, and a flywheel lookup map that turns shot distance into flywheel speed.",
          width: 1600,
          height: 900,
          caption: "Diagram: from cameras to a shot",
        },
      },
      results: {
        paragraphs: [
          "The team’s championship results reflect contributions across all subteams. Our autonomous routines contributed approximately 50 points per match toward the team’s overall performance.",
        ],
        metrics: [
          { value: "2026", label: "FIRST World Championship, Hopper Division title", note: "Team" },
          { value: "2", label: "district championship titles", note: "Team" },
          { value: "~50", label: "points a match from autonomous routines", note: "Programming subteam" },
        ],
        bullets: [
          { term: "Engineering Inspiration Award", detail: "FIRST Championship. Team award." },
          { term: "Innovation in Controls Award", detail: "District event. Team award." },
        ],
      },
      community: {
        paragraphs: [],
        bullets: [
          { term: "Volunteering", detail: "140+ community volunteer hours, the most on the team in 2026." },
          { term: "Outreach", detail: "Robot demos reaching 120+ community members, including events at Wallace Pruitt Recreation Center and with LPL Financial and Big Brothers Big Sisters." },
          { term: "Advocacy", detail: "Advocated for STEM funding at the U.S. Capitol, meeting with six legislators from North Carolina and South Carolina." },
        ],
      },
      learned: {
        paragraphs: ["Working on a robot with dozens of contributors taught me that engineering is as much about coordination and system integration as individual code. A subsystem can work in isolation and still fail to contribute to the robot as a whole. I learned to approach problems with both the technical system and the people building it in mind."],
      },
      callout: { text: "Our autonomous routines contributed about 50 points a match.", attribution: "YETI Robotics, FRC Team 3506" },
      gallery: [
        { src: "/images/projects/yeti-robotics-alignment.webp", alt: "Yellow game pieces in the air over the field as the robot shoots at a target marked with AprilTags", width: 653, height: 408, caption: "Photo: auto-alignment in action" },
        { ...shot("PID tuning an elevator in AdvantageScope", "AdvantageScope line graph of an elevator's position tracking its target position over time, alongside its supply current", "sim-sandbox.webp") },
      ],
    },
  },
  {
    slug: "sim-sandbox",
    title: "sim-sandbox",
    kind: "Open source",
    summary: "An open-source WPILib simulation template that lets FRC programmers practice PID tuning on mechanisms without physical hardware. Used by 20+ students in its first year.",
    role: "Author",
    timeframe: "2025 to present",
    tags: ["Open source", "Java", "WPILib", "PID tuning"],
    links: [],
    featured: false,
    cover: { ...shot("PID tuning an elevator in AdvantageScope", "AdvantageScope line graph of an elevator's position tracking its target position over time, alongside its supply current", "sim-sandbox.webp") },
    href: "https://github.com/yeti-robotics/sim-sandbox",
  },
  {
    slug: "fileatlas",
    title: "FileAtlas",
    kind: "Hackathon winner",
    summary: "An interactive graph for exploring Google Drive, with duplicate detection, natural-language search, and AI-suggested file names. Built with a four-person team and named winner of the greenCode regional hackathon.",
    role: "Lead developer",
    timeframe: "May 2026",
    tags: ["Next.js", "TypeScript", "Google Drive API", "AI"],
    links: [],
    featured: false,
    cover: shot("FileAtlas", "FileAtlas node graph showing a project, its folders, and their files", "fileatlas.webp"),
    href: "https://github.com/tralalero-tech-support/greencode-hack",
  },
  {
    slug: "clairify",
    title: "Clairify",
    kind: "NASA Space Apps, Charlotte winner",
    summary: "An air-quality application combining NASA sensor data and Gemini AI to help users interpret environmental conditions. Built with a team formed at NASA Space Apps Charlotte, where we won the Invented for Life Award.",
    role: "Co-founder and developer",
    timeframe: "Fall 2025",
    tags: ["Gemini API", "NASA data", "Web app"],
    links: [],
    featured: false,
    cover: shot("Clairify", "Clairify home page: Here to help you breathe, clear", "clairify.webp"),
    href: "https://clairify.vercel.app",
  },
  {
    slug: "permafrost",
    title: "Permafrost",
    kind: "Tool for FRC teams",
    summary: "A SolidWorks collaboration tool built around Google Drive, with check-out locks, atomic pushes, and version history. Developed in Rust and React to address the reliability problems I encountered with CacheCAD.",
    role: "Designer and developer",
    timeframe: "2026",
    tags: ["Rust", "Tauri", "React", "SolidWorks"],
    links: [],
    featured: false,
    cover: shot("Permafrost", "Permafrost app window listing shared SolidWorks files with check-out status", "permafrost.webp"),
    href: "https://permafrost-azure.vercel.app",
  },
  {
    slug: "lineweave",
    title: "Lineweave",
    kind: "Tool for FRC teams",
    summary: "A real-time collaborative diagram editor with live cursors, autosave to Google Drive, and diagrams.net-compatible files that preserve their original structure.",
    role: "Designer and developer",
    timeframe: "2026",
    tags: ["Next.js", "Yjs", "Firebase", "Google Drive"],
    links: [],
    featured: false,
    cover: shot("Lineweave", "Lineweave diagram editor showing a flowchart in the demo", "lineweave.webp"),
    href: "https://github.com/taran-duba/lineweave",
  },
  {
    slug: "aid-compass",
    title: "Aid Compass",
    kind: "Congressional App Challenge, NC-08",
    summary: "A disaster-aid navigator that helps users explore available assistance and local support organizations, using structured FEMA and North Carolina VOAD information.",
    role: "Lead developer",
    timeframe: "2026",
    tags: ["Next.js", "Tailwind", "Gemini API", "Mapbox GL JS", "Vercel"],
    links: [],
    featured: false,
    cover: shot("Aid Compass", "Aid Compass home page: Find the disaster aid you actually qualify for", "aid-compass.webp"),
    href: "https://github.com/quadruple-t/cac-2026",
  },
  {
    slug: "lunaris360",
    title: "Lunaris360",
    kind: "Team hackathon project",
    summary: "A browser-based lunar south pole exploration planner with two interfaces: Story Mode for learners and Mission Control for detailed mission planning.",
    role: "Lead developer",
    timeframe: "NASA Space Apps 2026",
    tags: ["Web app", "Hackathon", "Space"],
    links: [],
    featured: false,
    cover: shot("Lunaris360", "Lunaris360 Open Exploration view with a 3D Moon and data layers", "lunaris360.webp"),
    href: "https://github.com/quadruple-t/space-apps-2026",
  },
];

export const featuredProjects = projects.filter((p) => p.featured && p.caseStudy);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
