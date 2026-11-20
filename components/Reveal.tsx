"use client";

import { useEffect, useRef } from "react";

/**
 * Fades and lifts children into place once, when they enter the viewport.
 * The hidden state only applies when JS is running and reduced motion is off
 * (see globals.css), so content is never lost.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.visible = "true";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal=""
      className={className}
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
