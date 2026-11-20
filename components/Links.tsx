import Link from "next/link";
import { withBase } from "@/lib/paths";

const isInternal = (href: string) => href.startsWith("/") && !href.endsWith(".pdf");

/** Text link with the accent underline. Handles internal, external, mailto and file links. */
export function TextLink({
  href,
  children,
  className = "",
  variant = "underline",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "reveal";
}) {
  const cls = `${variant === "underline" ? "link-underline" : "link-reveal"} ${className}`;
  if (isInternal(href)) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={withBase(href)}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

/** Rectangular button-style link. `solid` uses the accent; `outline` uses a hairline. */
export function ButtonLink({
  href,
  children,
  variant = "outline",
  download,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "band";
  download?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-5 py-3 text-[0.9375rem] font-medium transition-colors duration-200";
  const styles = {
    solid: "bg-accent text-paper hover:bg-ink",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
    band: "bg-band-fg text-band hover:bg-band-accent",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (isInternal(href)) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={withBase(href)}
      className={cls}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 11l6-6M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
