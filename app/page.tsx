import { Hero } from "@/components/home/Hero";
import { StatStrip } from "@/components/home/StatStrip";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Leadership } from "@/components/home/Leadership";
import { Honors } from "@/components/home/Honors";
import { Contact } from "@/components/home/Contact";
import { PersonJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name}: ${siteConfig.descriptor}` },
  ...socialMeta({ title: siteConfig.name, description: siteConfig.metaDescription, path: "/" }),
};

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <StatStrip />
      <About />
      <Projects />
      <Leadership />
      <Honors />
      <Contact />
    </>
  );
}
