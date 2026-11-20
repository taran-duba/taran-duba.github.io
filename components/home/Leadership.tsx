import Link from "next/link";
import { experience } from "@/content/experience";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Text } from "@/components/Todo";
import { hasValue, showTodos } from "@/lib/todo";

export function Leadership() {
  const rows = experience.filter((e) => hasValue(e.organization) || showTodos);
  return (
    <Section id="leadership" number="03" label="Leadership" title="Leadership and service">
      <ol className="border-b border-line">
        {rows.map((e, i) => (
          <Reveal as="li" key={i} index={i} className="grid gap-3 border-t border-line py-8 md:grid-cols-9 md:gap-8">
            <p className="label tabular pt-1.5 uppercase text-muted md:col-span-2">
              <Text value={e.years} fallback="Present" />
            </p>
            <div className="md:col-span-7">
              <h3 className="font-display text-2xl text-ink md:text-[1.75rem]">
                {e.href ? (
                  <Link href={e.href} className="link-reveal">
                    <Text value={e.organization} />
                  </Link>
                ) : (
                  <Text value={e.organization} />
                )}
              </h3>
              <p className="mt-1 font-medium text-accent">
                <Text value={e.role} />
              </p>
              <ul className="mt-3 space-y-1.5">
                {e.lines.map((line, j) => (
                  <li key={j} className="measure text-muted">
                    <Text value={line} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
