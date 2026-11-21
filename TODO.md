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

## Identity (`content/site.ts`)

| Field | What is needed |
| --- | --- |
| `siteConfig.headshot.src` | Headshot path, e.g. `/images/headshot.webp` (portrait, about 800x1000, WebP). Until set, the hero shows a "TD." monogram. |

Also review the `about.paragraphs` for voice.

## Images (`public/images/projects/`)

Every image slot is filled. The project screenshots come from the live sites, except FileAtlas (a demo
project built by hand in its local no-login mode), BSP Stats, and sim-sandbox (your own captures). Optional:

- Larger originals of the two YETI photos, if you have them (they are about 650px wide, so they look a little soft at full width).

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
