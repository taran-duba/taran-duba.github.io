# taran-duba.github.io

Personal site for Taran Duba. Next.js (App Router) + TypeScript + Tailwind CSS, exported as a fully
static site and deployed to GitHub Pages. No server, no database, no runtime API calls.

The previous hand-written site lives in `legacy/` for reference. It is not built or deployed.

## Run it locally

Requires Node 20.9+ (CI uses Node 24).

```bash
npm install
npm run dev        # http://localhost:3000, placeholders visible
npm run build      # static export into out/
npm start          # serve out/ locally to check the production build
npm run lint
npm run typecheck
```

## Editing content

All copy and facts live in typed files under `content/`. Components never hold copy, so you can
edit text without touching layout code.

| File | What it controls |
| --- | --- |
| `content/site.ts` | `siteConfig` (name, descriptor, intro, email, GitHub, LinkedIn, school, grad year, headshot, resume path), the impact numbers, About copy, Outside of code, nav links, contact copy |
| `content/projects.ts` | Every project. `featured: true` projects get a case study page at `/projects/<slug>/`; the rest appear in the "More things I've built" grid |
| `content/experience.ts` | Leadership and extracurriculars, in display order |
| `content/honors.ts` | Honors table. Always mark each one `Team` or `Individual` |

### Placeholders

Any string that starts with `TODO` (or contains `TODO: hint` at the end) is a placeholder.

- In `npm run dev` placeholders show as a small dotted mono tag so they are easy to find.
- In production builds they are hidden. A field that is only a placeholder disappears; a sentence
  with a trailing `TODO:` keeps its real part.
- To preview placeholders in a production build, set `NEXT_PUBLIC_SHOW_TODOS=1`.

`TODO.md` lists every placeholder with its file, field, and what is needed.

### Writing rules for site copy

First person, specific, checkable. No em dashes. Label team results as team results. No GPA, test
scores, class rank, or anything about college applications.

## Images

Static export means no image optimization at build time, so size images before adding them.

- **Headshot:** portrait, about 800x1000, WebP. Save as `public/images/headshot.webp` and set
  `siteConfig.headshot.src` to `/images/headshot.webp`. Until then the hero shows a monogram.
- **Project covers and gallery images:** 16:10, 1600x1000, WebP (aim for under 200 KB). Save in
  `public/images/projects/` and set the matching `src` in `content/projects.ts`.
- **Diagrams:** 16:9, 1600x900. PNG or SVG is fine for line art.
- Keep `width` and `height` in the data file equal to the real pixel size so there is no layout shift.
- Write real `alt` text describing what the image shows.

An easy way to resize and convert: open the image in [Squoosh](https://squoosh.app), resize to the
target width, choose WebP at quality 75 to 80, and download.

Any slot whose `src` is still `TODO` renders a neutral placeholder block with a mono caption.

### Generated assets

`public/og.png` (1200x630 share image), the favicons, and the placeholder `resume.pdf` are generated
from templates in `scripts/assets/`:

```bash
bash scripts/generate-assets.sh   # needs Google Chrome and Python 3 with Pillow
```

Re-run it if the name or descriptor changes. Replace `public/resume.pdf` with the real resume
(keep the filename).

## Environment variables

Copy `.env.example` to `.env.local` for local builds. In GitHub Actions they come from repository
variables (Settings, Secrets and variables, Actions, Variables).

| Variable | Repo variable in CI | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `SITE_URL` (optional) | Absolute site origin, used for canonical URLs, Open Graph, sitemap. Defaults to the Pages URL from `actions/configure-pages`. Set it if you add a custom domain. |
| `NEXT_PUBLIC_BASE_PATH` | set automatically | Path prefix. Empty for `<owner>.github.io` repos, `/<repo>` for project sites. CI fills it from `actions/configure-pages`. |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | `ANALYTICS_PROVIDER` | `goatcounter` or `plausible`. Leave unset for no analytics. |
| `NEXT_PUBLIC_ANALYTICS_ID` | `ANALYTICS_ID` | GoatCounter site code, or the Plausible domain. |
| `NEXT_PUBLIC_SHOW_TODOS` | (not set) | `1` shows placeholders in a production build. |

### Analytics (optional, cookie free)

Both options are privacy friendly and set no cookies, so no consent banner is needed.

- **GoatCounter** (free for personal sites): create a site at goatcounter.com, then set
  `ANALYTICS_PROVIDER=goatcounter` and `ANALYTICS_ID=<your code>` (the part before `.goatcounter.com`).
- **Plausible** (paid): add the site in Plausible, then set `ANALYTICS_PROVIDER=plausible` and
  `ANALYTICS_ID=<your domain>`, e.g. `taran-duba.github.io`.

The script only loads when both variables are set.

## Deploying to GitHub Pages

1. In the repo on GitHub: Settings, Pages, Build and deployment, Source: **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` installs, lints, builds the static export, and
   deploys `out/` with `actions/upload-pages-artifact` and `actions/deploy-pages`.
3. You can also run the workflow by hand from the Actions tab (workflow_dispatch).

The repo is named `taran-duba.github.io`, so the site is served from the domain root and the base
path is empty. If the code is ever moved to a differently named repo, the workflow sets the base
path to `/<repo>` automatically. To test a base path locally:

```bash
NEXT_PUBLIC_BASE_PATH=/test npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/test && cp -r out /tmp/site/test
npx --yes serve /tmp/site    # then open http://localhost:3000/test/
```

`public/.nojekyll` stops GitHub Pages from ignoring the `_next/` folder.

### Custom domain

Add `public/CNAME` containing the domain, set the `SITE_URL` repo variable to `https://<domain>`,
and configure the domain under Settings, Pages.

## Project structure

```
app/                 routes, root layout, global styles (design tokens live in globals.css)
  projects/[slug]/   case study pages, generated from content/projects.ts
  sitemap.ts         static sitemap.xml
  robots.ts          static robots.txt
components/          UI pieces (Header, ThemeToggle, Section, Figure, CaseStudy, home/*)
content/             all copy and facts, typed
lib/                 base path helper, placeholder helpers, SEO helper
public/              og.png, favicons, resume.pdf, images, .nojekyll
scripts/             asset generation
.github/workflows/   Pages deploy
legacy/              previous static site, kept for reference only
```

## Design notes

- Colors are CSS variables in `app/globals.css`, exposed to Tailwind through `@theme inline`
  (`bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `bg-accent-soft`, `bg-band`).
  Components never use raw hex values.
- Harbor blue (`--accent`) is the only chromatic color.
- `--muted` is `#5b616a` instead of the original `#646a73` so it passes WCAG AA on the `--surface`
  panels as well as on `--paper`.
- Theme: follows the system until the visitor uses the toggle, then remembers the choice in
  `localStorage`. An inline script in `<head>` applies it before first paint, so there is no flash.
- Fonts: Young Serif (display), Schibsted Grotesk (body), Fragment Mono (labels), self-hosted by
  `next/font` at build time.
- Motion respects `prefers-reduced-motion`: reveals, the hero entrance, and the count-up are all
  skipped and final states show immediately.
