# TODO: content Taran still needs to supply

Every placeholder on the site is the literal string `TODO` (often `TODO: hint`) in a file under `content/`.
In `npm run dev` each one shows as a small dotted mono tag. In the production build they are hidden, so
nothing half-finished ships. Replace the string, and the tag disappears.

To find them all at any time:

```bash
grep -n "TODO" content/*.ts
```

Filled in from the resume (v6) and public repos: school, class year, email, GitHub, LinkedIn, BSP and
YETI timeframes and details, sim-sandbox, Clairify, Permafrost, Lineweave, leadership rows,
and most honors.

## Resume PDF (`content/site.ts`, `public/resume.pdf`)

Both resume buttons are hidden until this is done.

1. In Word, open `Taran_Duba_v6.docx` and choose File, Save As, PDF.
2. Save it over `public/resume.pdf`.
3. In `content/site.ts`, set `resumePath` to `"/resume.pdf"`.

## Identity (`content/site.ts`)

| Field | What is needed |
| --- | --- |
| `siteConfig.headshot.src` | Headshot path, e.g. `/images/headshot.webp` (portrait, about 800x1000, WebP). Until set, the hero shows a "TD." monogram. |
| `about.outsideOfCode.items[].detail` | One specific detail each for Cars, Fashion and style, Music. |

Also review the `about.paragraphs` for voice.

## Images (`public/images/projects/`)

Screenshots are in for Byte-Sized Python, Koda Studio, Aid Compass, Lunaris360, FileAtlas, Clairify,
Permafrost, and Lineweave (taken from the live sites; FileAtlas is a demo project built by hand in the
local no-login mode). Still missing, each `src` is `TODO` in `content/projects.ts`:

- One YETI Robotics gallery photo: the second slot is a sim-sandbox PID tuning capture. The YETI photos are about 650px wide, so larger originals would look sharper.
- sim-sandbox cover (needs a screen capture of the simulator running on your machine).
- Both case study diagrams.

## Byte-Sized Python case study

All written. The officer paragraph uses roles only, no names. Add names in `content/projects.ts` if you want them.

## YETI Robotics case study

All written. Still worth a read: `caseStudy.howItWorks.paragraphs` (pose fused with odometry via a Kalman filter, then used to aim and pick flywheel speed) should match the robot.

## Other projects (`content/projects.ts`)

| Project | Fields | What is needed |
| --- | --- | --- |
| Lunaris360 (formerly Shadowline) | `summary` | Optional: add any placement or result. |

## Optional

- Analytics: set `ANALYTICS_PROVIDER` and `ANALYTICS_ID` repo variables (see README).
- Custom domain: set the `SITE_URL` repo variable and add a `public/CNAME` file.
