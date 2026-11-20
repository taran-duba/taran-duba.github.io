/**
 * Editorial section: a numbered mono label with a hairline on the left (desktop),
 * content on the right. Stacks on mobile.
 */
export function Section({
  id,
  number,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-24 md:py-32 lg:py-40 ${className}`}>
      <div className="container-page">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-3">
            <p className="label flex items-center gap-3 border-t border-line pt-3 uppercase text-muted md:sticky md:top-24">
              <span className="tabular text-accent">{number}</span>
              <span aria-hidden="true">/</span>
              <span>{label}</span>
            </p>
          </div>
          <div className="md:col-span-9">
            {title ? (
              <h2 id={headingId} className="mb-12 text-h2 text-ink md:mb-16">
                {title}
              </h2>
            ) : (
              <h2 id={headingId} className="sr-only">
                {label}
              </h2>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
