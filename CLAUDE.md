# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Taran Duba. Next.js App Router + TypeScript + Tailwind v4, built as a fully static export (`output: "export"`) and deployed to GitHub Pages. No server, database, or runtime API calls. `legacy/` holds the old hand-written site for reference only; it is not built or deployed.

`AGENTS.md` warns that this Next.js version (16.x) has breaking changes from what you may know. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code.

## Commands

```bash
npm run dev         # http://localhost:3000, placeholders visible
npm run build       # static export into out/
npm start           # serve out/ (npx serve) to check the production build
npm run lint
npm run typecheck
```

There is no test suite. CI (`.github/workflows/deploy.yml`, on push to `main`) runs `npm ci`, `npm run lint`, then `npm run build`; it does not run typecheck, so run it yourself.

Asset generation (`public/og.png`, favicons, placeholder `resume.pdf`) comes from templates in `scripts/assets/`: `bash scripts/generate-assets.sh` (needs Google Chrome and Python 3 with Pillow). Re-run if the name or descriptor changes.

## Architecture

**Content is data, components hold no copy.** All text and facts live in typed files in `content/` (`site.ts`, `projects.ts`, `experience.ts`, `honors.ts`). `components/` and `components/home/*` render them; `app/page.tsx` composes the home page. Edit copy in `content/`, not in components.

**Case studies are generated from data.** `app/projects/[slug]/page.tsx` statically generates a page for every project in `content/projects.ts` with `featured: true` (rendered by `components/CaseStudy.tsx`). Non-featured projects only appear in the "More things I've built" grid. The `CaseStudy` and `ImageSlot` types in `content/projects.ts` define the shape.

**Placeholder system (`lib/todo.ts`).** Any content string starting with `TODO` (or ending with `TODO: hint`) is a placeholder. In dev (or with `NEXT_PUBLIC_SHOW_TODOS=1`) it renders as a dotted mono tag; in production builds it is hidden, so unfinished fields disappear instead of shipping. Use `hasValue`, `isRenderable`, `splitTodo` when rendering content fields, and the `Todo` component. An image slot with `src: "TODO"` renders a neutral placeholder block. `TODO.md` tracks outstanding placeholders (`grep -n "TODO" content/*.ts`).

**Base path.** `next.config.ts` resolves `basePath` from `NEXT_PUBLIC_BASE_PATH`, else from `GITHUB_REPOSITORY` (empty for `<owner>.github.io` repos). `next/link` adds the base path itself, but raw `<a href>` / `<img src>` pointing into `public/` must go through `withBase()` from `lib/paths.ts`.

**Static export constraints.** `trailingSlash: true` and `images.unoptimized: true`, so images are not resized at build time: size them before adding (covers/gallery 16:10, 1600x1000 WebP under ~200 KB; diagrams 16:9; headshot ~800x1000). Keep `width`/`height` in the data file equal to the real pixel size. `sitemap.ts` and `robots.ts` are static routes.

**Styling.** Design tokens are CSS variables in `app/globals.css`, exposed to Tailwind via `@theme inline` (`bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `bg-accent-soft`, `bg-band`). Never use raw hex values in components. Harbor blue (`--accent`) is the only chromatic color. Light/dark theme: system by default, toggle persisted in `localStorage`, applied by an inline `<head>` script to avoid a flash. Tailwind is wired through `@tailwindcss/turbopack` rules in `next.config.ts`. Fonts (Young Serif, Schibsted Grotesk, Fragment Mono) are self-hosted via `next/font`. Motion (`Reveal`, `CountUp`, hero entrance) must respect `prefers-reduced-motion`.

**Env vars** (see `.env.example`): `NEXT_PUBLIC_SITE_URL` (canonicals, OG, sitemap), `NEXT_PUBLIC_BASE_PATH`, `NEXT_PUBLIC_ANALYTICS_PROVIDER` / `NEXT_PUBLIC_ANALYTICS_ID` (GoatCounter or Plausible; script loads only when both are set), `NEXT_PUBLIC_SHOW_TODOS`. In CI these come from repo variables.

## Site copy rules

First person, specific, checkable. No em dashes. Label team results as team results (honors are always marked `Team` or `Individual`). No GPA, test scores, class rank, or anything about college applications.

## Branches

Active work is on `develop-react`; `main` is the deploy branch.
