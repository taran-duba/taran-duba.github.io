import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProjects, getProject } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { CaseStudyView } from "@/components/CaseStudy";
import { socialMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    ...socialMeta({
      title: `${project.title} · ${siteConfig.name}`,
      description: project.summary,
      path: `/projects/${project.slug}/`,
      type: "article",
    }),
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();
  const i = featuredProjects.findIndex((p) => p.slug === slug);
  const next = featuredProjects[(i + 1) % featuredProjects.length];
  return <CaseStudyView project={project} next={next} />;
}
