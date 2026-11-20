import { Hero } from "@/components/home/Hero";
import { StatStrip } from "@/components/home/StatStrip";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Leadership } from "@/components/home/Leadership";
import { Honors } from "@/components/home/Honors";
import { Contact } from "@/components/home/Contact";
import { PersonJsonLd } from "@/components/JsonLd";

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
