export function Tags({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Tags">
      {tags.map((t) => (
        <li key={t} className="label rounded-sm bg-accent-soft px-2 py-1 text-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}
