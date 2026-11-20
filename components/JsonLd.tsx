import { siteConfig } from "@/content/site";
import { hasValue } from "@/lib/todo";

/** schema.org Person data for the home page. Placeholder fields are left out. */
export function PersonJsonLd() {
  const sameAs = [siteConfig.github, siteConfig.linkedin].filter(hasValue);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/`,
    description: siteConfig.metaDescription,
    image: `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
    address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
    jobTitle: "Founder and President, Byte-Sized Python",
    worksFor: { "@type": "Organization", name: "Byte-Sized Python", url: "https://bytesizedpython.org" },
    memberOf: { "@type": "SportsTeam", name: "YETI Robotics, FRC Team 3506" },
    sameAs,
  };
  if (hasValue(siteConfig.email)) data.email = `mailto:${siteConfig.email}`;
  if (hasValue(siteConfig.school)) data.affiliation = { "@type": "EducationalOrganization", name: siteConfig.school };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
