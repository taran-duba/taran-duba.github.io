/**
 * Placeholder system. Any field in /content can hold the literal string "TODO"
 * (optionally followed by ": a hint", e.g. "TODO: school name").
 *
 * In development, placeholders render as a small dotted mono tag so they are easy
 * to spot. In production they are hidden, so nothing fabricated or half-finished
 * ships. Set NEXT_PUBLIC_SHOW_TODOS=1 to show them in a production build (useful
 * for a preview deploy).
 */
export function isTodo(value: unknown): boolean {
  return typeof value === "string" && /^TODO\b/.test(value.trim());
}

export function todoHint(value: string): string {
  const hint = value.replace(/^TODO:?\s*/, "").trim();
  return hint || "Placeholder";
}

export const showTodos =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_TODOS === "1";

/** True when a value is real content (not a placeholder and not empty). */
export function hasValue<T>(value: T | undefined | null): value is T {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim() !== "" && !isTodo(value);
  return true;
}

/** Split "Real text. TODO: hint" into its real part and the placeholder hint (null if none). */
export function splitTodo(value: string): { text: string; hint: string | null } {
  const i = value.search(/\bTODO\b/);
  if (i === -1) return { text: value, hint: null };
  return { text: value.slice(0, i).trim(), hint: todoHint(value.slice(i)) };
}

/** Whether a string has anything to show: real text, or a placeholder while TODOs are visible. */
export function isRenderable(value: string): boolean {
  return showTodos || splitTodo(value).text !== "";
}
