import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const ogImage = {
  url: `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: ${siteConfig.descriptor}`,
};

/**
 * Per-page Open Graph and Twitter tags. Next replaces (does not merge) nested
 * openGraph/twitter objects, so every page sets the full set here.
 */
export function socialMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const url = `${siteConfig.siteUrl}${path}`;
  return {
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
