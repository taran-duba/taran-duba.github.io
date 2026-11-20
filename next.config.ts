import type { NextConfig } from "next";

/**
 * Base path resolution for GitHub Pages.
 * - NEXT_PUBLIC_BASE_PATH wins if set explicitly (e.g. "/portfolio").
 * - Otherwise, derive it from GITHUB_REPOSITORY ("owner/repo") in CI.
 *   A repo named "<owner>.github.io" is served from the domain root, so the base path is empty.
 */
function resolveBasePath(): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_PATH;
  if (explicit !== undefined) return explicit.replace(/\/$/, "");
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo || repo.endsWith(".github.io")) return "";
  return `/${repo}`;
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
