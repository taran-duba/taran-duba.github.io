# TODO: content Taran still needs to supply

Every placeholder on the site is the literal string `TODO` (often `TODO: hint`) in a file under `content/`.
In `npm run dev` each one shows as a small dotted mono tag. In the production build they are hidden, so
nothing half-finished ships. Replace the string, and the tag disappears.

To find them all at any time:

```bash
grep -n "TODO" content/*.ts
```

Filled in from the resume (v6) and public repos: school, class year, email, GitHub, LinkedIn, BSP and
YETI timeframes and details, sim-sandbox, Polar Edge, Clairify, Permafrost, Lineweave, leadership rows,
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

Screenshots or photos for every project cover, both case study diagrams, and the four case study
gallery slots. Sizes are in the README. Each slot's `src` in `content/projects.ts` is `TODO` until set.

## Byte-Sized Python case study (`content/projects.ts`, slug `byte-sized-python`)

| Field | What is needed |
| --- | --- |
| `timeframe` | Set to `2025 to present` from the resume. Change it if BSP started earlier than the summer 2025 course. |
| `caseStudy.problem.paragraphs[1]` | Founding story: when and why you started BSP, two or three sentences. |
| `caseStudy.built.paragraphs[2]` | Officer team size and how the team is organized. |
| `caseStudy.built.bullets` Koda Live | One line on what Koda Live does. |
| `caseStudy.built.bullets` BSP Stats | What the dashboard tracks. |
| `caseStudy.built.bullets` Chapter Starter Kit | What the kit includes and who it is for. |
| `caseStudy.learned.paragraphs` | Two or three sentences on what running BSP has taught you. |

## YETI Robotics case study (`content/projects.ts`, slug `yeti-robotics`)

| Field | What is needed |
| --- | --- |
| `caseStudy.built.bullets` Brownout prevention | The approach (current limits, load shedding, etc.). |
| `caseStudy.howItWorks.paragraphs` | Confirm the description (pose fused with odometry via Kalman filter, then used to aim and pick flywheel speed) matches the robot. |
| `caseStudy.learned.paragraphs` | Two or three sentences on what managing programming and electrical taught you. |

## Other projects (`content/projects.ts`)

| Project | Fields | What is needed |
| --- | --- | --- |
| Aid Compass | `timeframe`, `href` | The year and a live or repo link. |
| Lunaris360 (formerly Shadowline) | `href` | A demo or repo link. Add any placement to `timeframe` or `summary`. |
| Koda Studio and BSP tools | `timeframe` | Year. |

## Optional

- Analytics: set `ANALYTICS_PROVIDER` and `ANALYTICS_ID` repo variables (see README).
- Custom domain: set the `SITE_URL` repo variable and add a `public/CNAME` file.
