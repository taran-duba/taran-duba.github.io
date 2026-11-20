import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="band bg-band text-band-muted">
      <div className="container-page flex flex-col gap-3 border-t border-band-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {year} {siteConfig.name}. Built with Next.js, hosted on GitHub Pages.
        </p>
        <a href="#top" className="label link-underline self-start text-band-fg hover:!text-band-accent sm:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
