import { stats } from "@/content/site";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export function StatStrip() {
  return (
    <section aria-labelledby="impact-heading" className="band bg-band text-band-fg">
      <div className="container-page py-20 md:py-28">
        <h2 id="impact-heading" className="label mb-12 font-mono uppercase tracking-[0.06em] text-band-muted md:mb-16">
          Impact, in numbers
        </h2>
        <dl className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="flex flex-col border-t border-band-line pt-6 sm:pr-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
              <dt className="order-2 mt-4 max-w-[22ch] text-band-fg">{s.label}</dt>
              <dd className="order-1 font-display text-stat text-band-fg">
                {s.countUp ? <CountUp value={s.value} /> : <span className="tabular">{s.value}</span>}
                {s.suffix && <span className="text-band-accent">{s.suffix}</span>}
              </dd>
              {s.note && <dd className="label order-3 mt-3 uppercase text-band-muted">{s.note}</dd>}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
