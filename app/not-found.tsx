import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-page py-32 md:py-48">
      <p className="label uppercase text-accent">404</p>
      <h1 className="mt-4 text-h2 text-ink">This page doesn’t exist.</h1>
      <p className="mt-6 text-muted">
        It may have moved. The{" "}
        <Link href="/" className="link-underline text-ink">
          home page
        </Link>{" "}
        has everything.
      </p>
    </div>
  );
}
