import { honors } from "@/content/honors";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Text } from "@/components/Todo";
import { hasValue, showTodos } from "@/lib/todo";

export function Honors() {
  const rows = honors.filter((h) => hasValue(h.award) || showTodos);
  return (
    <Section id="honors" number="04" label="Honors" title="Honors and awards">
      <Reveal>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Honors and awards, with whether each was a team or individual result, its level, and year
          </caption>
          <thead className="label hidden uppercase text-muted md:table-header-group">
            <tr className="border-b border-ink">
              <th scope="col" className="pb-3 font-normal">Award</th>
              <th scope="col" className="pb-3 font-normal">Team or individual</th>
              <th scope="col" className="pb-3 font-normal">Level</th>
              <th scope="col" className="pb-3 text-right font-normal">Year</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((h, i) => (
              <tr
                key={i}
                className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-line py-5 md:table-row md:py-0"
              >
                <th scope="row" className="col-span-2 font-normal md:py-5 md:pr-6">
                  <span className="font-display text-xl text-ink">
                    <Text value={h.award} />
                  </span>
                  {h.context && <span className="mt-1 block text-[0.9375rem] text-muted">{h.context}</span>}
                </th>
                <td className="label uppercase md:py-5 md:pr-6">
                  <span className={`rounded-sm px-2 py-1 ${h.holder === "Team" ? "bg-accent-soft text-ink" : "border border-line text-ink"}`}>
                    <Text value={h.holder} />
                  </span>
                </td>
                <td className="label row-start-2 uppercase text-muted md:py-5 md:pr-6">
                  <Text value={h.level} />
                </td>
                <td className="label tabular col-start-2 row-start-2 text-right text-ink md:py-5">
                  <Text value={h.year} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
