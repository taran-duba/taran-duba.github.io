import { about, siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Text } from "@/components/Todo";
import { hasValue, showTodos } from "@/lib/todo";

export function About() {
  const [lead, ...rest] = about.paragraphs;
  const facts = [
    { term: "Location", value: siteConfig.location },
    { term: "School", value: siteConfig.school },
    { term: "Class of", value: siteConfig.gradYear },
  ].filter((f) => hasValue(f.value) || showTodos);
  const outside = about.outsideOfCode.items.filter((i) => hasValue(i.detail) || showTodos);

  return (
    <Section id="about" number="01" label="About" title={lead}>
      <div className="grid gap-12 lg:grid-cols-9 lg:gap-8">
        <div className="space-y-6 lg:col-span-5">
          {rest.map((p, i) => (
            <Reveal key={i} index={i}>
              <p className="measure text-ink">{p}</p>
            </Reveal>
          ))}
        </div>

        <aside className="space-y-10 lg:col-span-3 lg:col-start-7" aria-label="Quick facts and interests">
          <Reveal>
            <dl className="label divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.term} className="flex justify-between gap-4 py-3">
                  <dt className="uppercase text-muted">{f.term}</dt>
                  <dd className="text-right text-ink">
                    <Text value={f.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {outside.length > 0 && (
            <Reveal index={1}>
              <h3 className="font-display text-2xl text-ink">{about.outsideOfCode.intro}</h3>
              <dl className="mt-4 space-y-4">
                {outside.map((item) => (
                  <div key={item.topic}>
                    <dt className="label uppercase text-accent">{item.topic}</dt>
                    <dd className="mt-1 text-[0.9375rem] text-muted">
                      <Text value={item.detail} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </aside>
      </div>
    </Section>
  );
}
