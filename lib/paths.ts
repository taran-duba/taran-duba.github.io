/** Base path the site is served under ("" for a user/organization GitHub Pages site). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a root-relative path with the base path. Use for raw <a href> and <img src>
 * that point at files in /public. next/link adds the base path on its own.
 */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
