import Link from "next/link";
import { featuredProjects, otherProjects, type Project } from "@/content/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Figure } from "@/components/Figure";
import { Tags } from "@/components/Tags";
import { Text, TodoMark } from "@/components/Todo";
import { Arrow, ArrowUpRight } from "@/components/Links";
import { isTodo, showTodos } from "@/lib/todo";

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="group relative">
      <div className="grid items-center gap-8 lg:grid-cols-9 lg:gap-10">
        <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <Figure
            image={project.cover}
            showCaption={false}
            className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
          />
        </div>
        <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
          <p className="label uppercase text-accent">{project.kind}</p>
          <h3 className="mt-3 text-h3 text-ink">
            <Link
              href={project.href ?? `/projects/${project.slug}/`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-focus-within:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 text-ink">{project.summary}</p>
          <p className="label mt-5 text-muted">
            {project.role}
            <span aria-hidden="true"> / </span>
            <Text value={project.timeframe} fallback="Ongoing" />
          </p>
          <Tags tags={project.tags} className="mt-5" />
          <p className="mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-accent">
            <span className="link-reveal">Read the case study</span>
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </p>
        </div>
      </div>
      {/* Focus ring for the stretched link, drawn around the whole card */}
      <span className="pointer-events-none absolute -inset-3 rounded-md ring-accent group-has-[a:focus-visible]:ring-2" aria-hidden="true" />
    </Reveal>
  );
}

function GridCard({ project, index }: { project: Project; index: number }) {
  const href = project.href && !isTodo(project.href) ? project.href : null;
  const external = href ? /^https?:/.test(href) : false;
  const title = href ? (
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
      >
        {project.title}
        <ArrowUpRight className="text-muted transition-colors group-hover:text-accent" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    ) : (
      <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
        {project.title}
      </Link>
    )
  ) : (
    project.title
  );

  return (
    <Reveal as="li" index={index % 2} className="group relative sm:even:mt-16">
      <article
        className={`h-full border-t border-line pt-5 transition-colors duration-300 ${
          href ? "group-hover:border-accent" : ""
        }`}
      >
        <Figure
          image={project.cover}
          showCaption={false}
          sizes="(min-width: 64rem) 420px, (min-width: 40rem) 45vw, 100vw"
          className={`mb-5 transition-transform duration-500 ease-out ${href ? "group-hover:-translate-y-0.5" : ""}`}
        />
        <p className="label uppercase text-accent">{project.kind}</p>
        <h4 className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-accent">{title}</h4>
        <p className="mt-2 text-[0.9375rem] text-muted">
          <Text value={project.summary} />
        </p>
        <Tags tags={project.tags} className="mt-4" />
        {!href && showTodos && (
          <p className="mt-3">
            <TodoMark hint="link for this project" />
          </p>
        )}
      </article>
      {href && (
        <span className="pointer-events-none absolute -inset-2 rounded-md ring-accent group-has-[a:focus-visible]:ring-2" aria-hidden="true" />
      )}
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" number="02" label="Projects" title="Selected work">
      <div className="space-y-20 md:space-y-28">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-24 md:mt-32">
        <h3 className="text-h3 text-ink">More things I’ve built</h3>
        <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {otherProjects.map((p, i) => (
            <GridCard key={p.slug} project={p} index={i} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

