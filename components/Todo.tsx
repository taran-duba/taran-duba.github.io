import { showTodos, splitTodo } from "@/lib/todo";

/**
 * Renders a content string. A "TODO: hint" anywhere in the string marks the rest
 * of it as a placeholder: shown as a small dotted mono tag in development, and
 * removed in production (falling back to `fallback` if nothing real is left).
 */
export function Text({
  value,
  fallback = null,
}: {
  value: string;
  fallback?: React.ReactNode;
}) {
  const { text, hint } = splitTodo(value);
  if (hint === null) return <>{text}</>;
  if (!showTodos) return text ? <>{text}</> : <>{fallback}</>;
  return (
    <>
      {text}
      {text ? " " : null}
      <TodoMark hint={hint} />
    </>
  );
}

export function TodoMark({ hint }: { hint: string }) {
  if (!showTodos) return null;
  return (
    <span className="todo-mark" title={`TODO: ${hint}`}>
      TODO: {hint}
    </span>
  );
}
