import { contactCopy, siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { ButtonLink, TextLink } from "@/components/Links";
import { TodoMark } from "@/components/Todo";
import { hasValue, showTodos } from "@/lib/todo";

export function Contact() {
  const socials = [
    { label: "GitHub", href: siteConfig.github },
    { label: "LinkedIn", href: siteConfig.linkedin },
  ];
  return (
    <Section id="contact" number="05" label="Contact" title={contactCopy.heading} tone="band">
      <p className="measure text-lede text-band-muted">{contactCopy.body}</p>

      <div className="mt-12">
        {hasValue(siteConfig.email) ? (
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-display text-[clamp(1.75rem,1rem+3vw,3.5rem)] leading-tight break-all text-band-accent underline decoration-1 underline-offset-[0.18em] transition-colors hover:text-band-fg"
          >
            {siteConfig.email}
          </a>
        ) : (
          showTodos && <TodoMark hint="public email address (siteConfig.email)" />
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        {hasValue(siteConfig.resumePath) ? (
          <ButtonLink href={siteConfig.resumePath} variant="band">
            Download resume <span className="label">PDF</span>
          </ButtonLink>
        ) : (
          <TodoMark hint="resume PDF (siteConfig.resumePath)" />
        )}
        {socials.map((s) =>
          hasValue(s.href) ? (
            <TextLink key={s.label} href={s.href} className="text-band-fg hover:!text-band-accent">
              {s.label}
            </TextLink>
          ) : showTodos ? (
            <span key={s.label} className="text-band-muted">
              {s.label} <TodoMark hint={`${s.label} URL`} />
            </span>
          ) : null,
        )}
      </div>
    </Section>
  );
}
