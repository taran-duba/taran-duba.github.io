import Image from "next/image";
import { siteConfig } from "@/content/site";
import { withBase } from "@/lib/paths";
import { hasValue, isTodo, showTodos } from "@/lib/todo";
import { Text, TodoMark } from "@/components/Todo";
import { Arrow, ButtonLink, TextLink } from "@/components/Links";

function ContactLinks() {
  const items = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "GitHub", value: siteConfig.github, href: siteConfig.github },
    { label: "LinkedIn", value: siteConfig.linkedin, href: siteConfig.linkedin },
  ];
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {items.map((item) =>
        hasValue(item.value) ? (
          <li key={item.label}>
            <TextLink href={item.href} className="text-ink">
              {item.label}
            </TextLink>
          </li>
        ) : showTodos ? (
          <li key={item.label} className="text-muted">
            {item.label} <TodoMark hint={`${item.label} link`} />
          </li>
        ) : null,
      )}
    </ul>
  );
}

function Portrait() {
  const { headshot, shortName } = siteConfig;
  if (!isTodo(headshot.src)) {
    return (
      <div className="relative">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-line" aria-hidden="true" />
        <Image
          src={withBase(headshot.src)}
          alt={headshot.alt}
          width={headshot.width}
          height={headshot.height}
          priority
          sizes="(min-width: 64rem) 300px, 50vw"
          className="relative aspect-[4/5] w-full rounded-sm object-cover"
        />
      </div>
    );
  }
  // Typographic monogram until a headshot exists.
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-line" />
      <div className="relative flex aspect-[4/5] w-full flex-col justify-between rounded-sm bg-surface p-5">
        <span className="label text-muted">
          <TodoMark hint="headshot (see README)" />
        </span>
        <span className="font-display text-[clamp(5rem,9vw,8rem)] leading-none tracking-tight text-ink">
          {shortName}
          <span className="text-accent">.</span>
        </span>
      </div>
    </div>
  );
}

/** "Charlotte, NC / School / Class of 20XX", skipping anything that is still a placeholder. */
function statusParts(): React.ReactNode[] {
  const parts: React.ReactNode[] = [siteConfig.location];
  if (hasValue(siteConfig.school) || showTodos) parts.push(<Text value={siteConfig.school} />);
  if (hasValue(siteConfig.gradYear) || showTodos)
    parts.push(
      <>
        Class of <Text value={siteConfig.gradYear} />
      </>,
    );
  return parts;
}

export function Hero() {
  const [first, ...rest] = siteConfig.name.split(" ");
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24">
      <div className="container-page">
        <p className="hero-line label flex flex-wrap items-center gap-x-3 uppercase text-muted" style={{ "--hero-i": 0 } as React.CSSProperties}>
          {statusParts().map((part, i) => (
            <span key={i} className="flex items-center gap-x-3">
              {i > 0 && <span aria-hidden="true" className="text-line">/</span>}
              {part}
            </span>
          ))}
        </p>

        <div className="mt-8 grid items-end gap-10 md:mt-10 md:grid-cols-12 md:gap-8">
          <h1 id="hero-heading" className="font-display text-hero tracking-[-0.025em] text-ink md:col-span-9">
            <span className="hero-line block" style={{ "--hero-i": 1 } as React.CSSProperties}>
              {first}
            </span>
            <span className="hero-line block" style={{ "--hero-i": 2 } as React.CSSProperties}>
              {rest.join(" ")}
            </span>
          </h1>
          <div
            className="hero-line w-40 sm:w-48 md:col-span-3 md:w-full md:max-w-[17rem] md:justify-self-end"
            style={{ "--hero-i": 3 } as React.CSSProperties}
          >
            <Portrait />
          </div>
        </div>

        <div
          className="hero-line mt-12 grid gap-8 border-t border-line pt-8 md:mt-16 md:grid-cols-12 md:gap-8"
          style={{ "--hero-i": 3 } as React.CSSProperties}
        >
          <p className="text-lede text-ink md:col-span-5">{siteConfig.descriptor}</p>
          <div className="md:col-span-6 md:col-start-7">
            <p className="measure text-muted">{siteConfig.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#work" variant="solid">
                See my work <Arrow />
              </ButtonLink>
              {hasValue(siteConfig.resumePath) ? (
                <ButtonLink href={siteConfig.resumePath} variant="outline">
                  Resume <span className="label text-muted">PDF</span>
                </ButtonLink>
              ) : (
                <TodoMark hint="resume PDF" />
              )}
            </div>
            <div className="mt-6">
              <ContactLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
