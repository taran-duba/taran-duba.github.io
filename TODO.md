# TODO: content Taran needs to supply

Every placeholder on the site is the literal string `TODO` (often `TODO: hint`) in a file under `content/`.
In `npm run dev` each one shows as a small dotted mono tag. In the production build they are hidden, so
nothing half-finished ships. Replace the string, and the tag disappears.

To find them all at any time:

```bash
grep -n "TODO" content/*.ts
```

## Identity and contact (`content/site.ts`)

| Field | What is needed |
| --- | --- |
| `siteConfig.school` | School name. Shown in the hero status line and the About facts list. |
| `siteConfig.gradYear` | Graduation year, e.g. `2028`. Shown as "Class of 2028". |
| `siteConfig.email` | Public email address. Powers the Email link in the hero and the large link in Contact. |
| `siteConfig.github` | Full GitHub profile URL. |
| `siteConfig.linkedin` | Full LinkedIn profile URL. |
| `siteConfig.headshot.src` | Headshot path, e.g. `/images/headshot.webp` (portrait, about 800x1000, WebP). Until set, the hero shows a "TD." monogram. |
| `about.outsideOfCode.items[].detail` | One specific detail each for Cars, Fashion and style, Music. |

Also review the three `about.paragraphs`. They were written only from the facts provided, but the
voice should be yours. Change anything that doesn't sound like you.

## Files in `public/`

| File | What is needed |
| --- | --- |
| `public/resume.pdf` | Real resume. The current file is a one-line placeholder. |
| `public/images/projects/*` | Screenshots and photos for every project (see below). |

## Byte-Sized Python case study (`content/projects.ts`, slug `byte-sized-python`)

| Field | What is needed |
| --- | --- |
| `timeframe` | Founding year, e.g. `2023 to present`. |
| `caseStudy.problem.paragraphs[1]` | Founding story: when and why you started BSP, two or three sentences. |
| `caseStudy.built.paragraphs[1]` | Officer team size and how the team is organized. |
| `caseStudy.built.bullets` Koda Live | One line on what Koda Live does. |
| `caseStudy.built.bullets` BSP Stats | What the dashboard tracks. |
| `caseStudy.built.bullets` Chapter Starter Kit | What the kit includes and who it is for. |
| `caseStudy.results.paragraphs` | Any verifiable outcome beyond reach numbers (completion, chapters started). |
| `caseStudy.learned.paragraphs` | Two or three sentences on what running BSP has taught you. |
| `cover.src`, `howItWorks.diagram.src`, `gallery[].src` | Cover screenshot, a simple diagram of the student path, two gallery screenshots (Koda Studio with tutor, BSP Stats). |

## Yeti Robotics case study (`content/projects.ts`, slug `yeti-robotics`)

| Field | What is needed |
| --- | --- |
| `timeframe` | Years on the team. |
| `links` | Any public links (team site, repo, match video). Currently none. |
| `caseStudy.built.bullets` AprilTag vision | Which you chose (PhotonVision or Limelight) and why. |
| `caseStudy.built.bullets` Brownout prevention | The approach (current limits, load shedding, etc.). |
| `caseStudy.howItWorks.paragraphs` | Confirm the localization description (AprilTag pose fused with odometry via Kalman filter) matches what the robot actually does. |
| `caseStudy.learned.paragraphs` | Two or three sentences on what leading the subteam taught you. |
| `cover.src`, `howItWorks.diagram.src`, `gallery[].src` | Robot photo, localization pipeline diagram, two gallery images. |

## Other projects (`content/projects.ts`)

| Project | Fields | What is needed |
| --- | --- | --- |
| Aid Compass | `role`, `timeframe`, `href`, `cover.src` | Your role on the team of four, the year and challenge outcome, a live or repo link, a screenshot. |
| Shadowline | `role`, `timeframe`, `href`, `cover.src` | Your role, hackathon name, date and result, a demo or repo link, a screenshot. |
| sim-sandbox | `timeframe`, `href`, `cover.src` | Year, GitHub repo URL, a screenshot. |
| Koda Studio and BSP tools | `timeframe`, `cover.src` | Year, a screenshot. |
| Permafrost | `summary`, `timeframe`, `href`, `cover.src` | One line on what it does and who uses it, year, link, screenshot. |
| Lineweave | `summary`, `timeframe`, `href`, `cover.src` | One line on what it does and who uses it, year, link, screenshot. |

## Leadership (`content/experience.ts`)

| Entry | Field | What is needed |
| --- | --- | --- |
| Byte-Sized Python | `years` | Start year. |
| Yeti Robotics | `years` | Years on the team. |
| FIRST LEGO League | `years` | Years volunteering. |
| Fourth row | `role`, `organization`, `years`, `lines` | Any other activity worth listing, or delete the row. |

## Honors (`content/honors.ts`)

| Entry | Field | What is needed |
| --- | --- | --- |
| District championship titles | `year` | The two years. |
| Engineering Inspiration Award | `year` | Year. |
| Innovation in Controls Award | `year` | Year, and the district event name if you want it in `context`. |
| Last row | `award`, `level`, `year` | Any individual honors, or delete the row. |

## Optional

- Analytics: set `ANALYTICS_PROVIDER` and `ANALYTICS_ID` repo variables (see README).
- Custom domain: set the `SITE_URL` repo variable and add a `public/CNAME` file.
