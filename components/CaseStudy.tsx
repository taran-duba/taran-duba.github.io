import Link from "next/link";
import type { Project, ProseBlock } from "@/content/projects";
import { Figure } from "@/components/Figure";
import { Tags } from "@/components/Tags";
import { Text, TodoMark } from "@/components/Todo";
import { Reveal } from "@/components/Reveal";
import { Arrow, TextLink } from "@/components/Links";
import { hasValue, isRenderable, showTodos } from "@/lib/todo";

function blockHasContent(block: ProseBlock) {
  return (
    block.paragraphs.some(isRenderable) ||
    (block.bullets ?? []).some((b) => isRenderable(b.detail))
  );
}

function Prose({ block }: { block: ProseBlock }) {
  return (
    <div className="space-y-5">
      {block.paragraphs.filter(isRenderable).map((p, i) => (
        <p key={i} className="measure text-ink">
          <Text value={p} />
        </p>
      ))}
      {block.bullets && (
        <dl className="mt-8 border-t border-line">
          {block.bullets
            .filter((b) => isRenderable(b.detail))
            .map((b) => (
              <div key={b.term} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-medium text-ink">{b.term}</dt>
                <dd className="text-muted">
                  <Text value={b.detail} />
                </dd>
              </div>
            ))}
        </dl>
      )}
    </div>
  );
}

function Part({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-line py-16 md:py-24">
      <Reveal className="grid gap-8 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="label tabular text-accent">{number}</p>
          <h2 id={`${id}-h`} className="mt-2 text-h3 text-ink">
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </Reveal>
    </section>
  );
}

export function CaseStudyView({ project, next }: { project: Project; next: Project }) {
  const cs = project.caseStudy!;
  const parts: { id: string; title: string; render: () => React.ReactNode; show: boolean }[] = [
    { id: "problem", title: "The problem", show: blockHasContent(cs.problem), render: () => <Prose block={cs.problem} /> },
    { id: "built", title: "What I built and led", show: blockHasContent(cs.built), render: () => <Prose block={cs.built} /> },
    {
      id: "how",
      title: "How it works",
      show: true,
      render: () => (
        <>
          <Prose block={cs.howItWorks} />
          <Figure image={cs.howItWorks.diagram} ratio="16 / 9" className="mt-10" />
        </>
      ),
    },
    {
      id: "results",
      title: "Results",
      show: true,
      render: () => (
        <>
          <dl className="grid gap-8 sm:grid-cols-3">
            {cs.results.metrics.map((m) => (
              <div key={m.label} className="flex flex-col border-t border-ink pt-4">
                <dt className="order-2 mt-3 text-[0.9375rem] text-ink">{m.label}</dt>
                <dd className="order-1 font-display text-[clamp(2.5rem,2rem+1.5vw,3.5rem)] leading-none tabular text-ink">
                  {m.value}
                </dd>
                {m.note && <dd className="label order-3 mt-2 uppercase text-muted">{m.note}</dd>}
              </div>
            ))}
          </dl>
          {blockHasContent({ paragraphs: cs.results.paragraphs, bullets: cs.results.bullets }) && (
            <div className="mt-12">
              <Prose block={{ paragraphs: cs.results.paragraphs, bullets: cs.results.bullets }} />
            </div>
          )}
        </>
      ),
    },
    { id: "learned", title: "What I learned", show: blockHasContent(cs.learned), render: () => <Prose block={cs.learned} /> },
  ];
  const visibleParts = parts.filter((p) => p.show);
  const linkItems = project.links.filter((l) => hasValue(l.href));

  return (
    <article>
      <header className="container-page pt-12 md:pt-20">
        <Link href="/#projects" className="label inline-flex items-center gap-2 uppercase text-muted transition-colors hover:text-accent">
          <Arrow className="rotate-180" /> All projects
        </Link>
        <p className="label mt-12 uppercase text-accent md:mt-16">{project.kind}</p>
        <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(3rem,1.5rem+5vw,6.5rem)] leading-[0.98] tracking-[-0.025em] text-ink">
          {project.title}
        </h1>
        <p className="measure mt-8 text-lede text-ink">{project.summary}</p>

        <dl className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="label uppercase text-muted">Role</dt>
            <dd className="mt-2 text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="label uppercase text-muted">Timeframe</dt>
            <dd className="mt-2 text-ink">
              <Text value={project.timeframe} fallback="Ongoing" />
            </dd>
          </div>
          <div>
            <dt className="label uppercase text-muted">Tags</dt>
            <dd className="mt-2">
              <Tags tags={project.tags} />
            </dd>
          </div>
          {(linkItems.length > 0 || showTodos) && (
            <div>
              <dt className="label uppercase text-muted">Links</dt>
              <dd className="mt-2 flex flex-col items-start gap-1">
                {linkItems.length ? (
                  linkItems.map((l) => (
                    <TextLink key={l.href} href={l.href} className="text-ink">
                      {l.label}
                    </TextLink>
                  ))
                ) : (
                  <TodoMark hint="public links (repo, video, team site)" />
                )}
              </dd>
            </div>
          )}
        </dl>

        <Figure image={project.cover} priority className="mt-12 md:mt-16" sizes="(min-width: 75rem) 1120px, 100vw" />
      </header>

      <div className="container-page mt-16 md:mt-24">
        {visibleParts.map((part, i) => (
          <div key={part.id}>
            <Part id={part.id} number={String(i + 1).padStart(2, "0")} title={part.title}>
              {part.render()}
            </Part>
            {part.id === "built" && (
              <Reveal as="div" className="border-t border-line py-16 md:py-24">
                <blockquote className="md:ml-[33.333%] md:pl-8">
                  <p className="border-l-2 border-accent pl-6 font-display text-[clamp(1.875rem,1.2rem+2vw,3rem)] leading-[1.15] text-ink">
                    {cs.callout.text}
                  </p>
                  {cs.callout.attribution && (
                    <footer className="label mt-4 pl-6 uppercase text-muted">{cs.callout.attribution}</footer>
                  )}
                </blockquote>
              </Reveal>
            )}
          </div>
        ))}

        <section aria-labelledby="gallery-h" className="border-t border-line py-16 md:py-24">
          <h2 id="gallery-h" className="label uppercase text-muted">
            Gallery
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {cs.gallery.map((img, i) => (
              <Reveal key={i} index={i}>
                <Figure image={img} sizes="(min-width: 64rem) 560px, 100vw" />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <nav aria-label="Next project" className="band mt-8 bg-band text-band-fg">
        <Link href={`/projects/${next.slug}/`} className="group container-page flex flex-col gap-4 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <span>
            <span className="label block uppercase text-band-muted">Next project</span>
            <span className="mt-3 block font-display text-h2 text-band-fg transition-colors group-hover:text-band-accent">
              {next.title}
            </span>
          </span>
          <Arrow className="size-8 text-band-accent transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </nav>
    </article>
  );
}
