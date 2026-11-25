import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { TechIcon } from "@/components/tech-icon";
import { ProjectGallery } from "@/components/project-gallery";
import { getProject, projects, technologyDescriptions } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Ashar" };

  return {
    title: `${project.title} | Ashar`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const screenshotFolder = `/projects/${project.assetFolder ?? project.slug}`;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="case-page">
      <div className="case-shell">
        <header className="case-header">
          <Link className="brand" href="/" aria-label="Ashar home">ashar<span>.</span></Link>
          <Link className="case-back" href="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
        </header>

        <section className="case-hero" data-reveal>
          <div className="case-hero-copy">
            <p className="section-kicker"><span>{project.number}</span> {project.kind.toUpperCase()}</p>
            <h1>{project.title}<span>.</span></h1>
            <p>{project.description}</p>
            <div className="case-hero-tech">
              {project.stack.slice(0, 5).map((name) => <span key={name}><TechIcon name={name} size={19} />{name}</span>)}
            </div>
          </div>
          <aside className="case-facts" aria-label="Project summary">
            <div><span>Project type</span><b>{project.kind}</b></div>
            <div><span>Project status</span><b>{project.status === "work" ? "Selected work" : "Concept"}</b></div>
            <div><span>Technology</span><b>{project.stack.slice(0, 3).join(" · ")}</b></div>
          </aside>
        </section>

        <section className="case-gallery" aria-labelledby="screenshots-title">
          <div className="case-section-heading" data-reveal>
            <div><p className="section-kicker">PROJECT GALLERY</p><h2 id="screenshots-title">Screenshots & <em>product details.</em></h2></div>
            <p>Supplied project screenshots, interface previews, and clearly named slots for the remaining screens.</p>
          </div>
          <ProjectGallery project={project} screenshotFolder={screenshotFolder} />
          <p className="gallery-note">To add a screen, save it at the path shown in its frame, then set that file as the screenshot <code>src</code> in <code>lib/projects.ts</code>. The supplied screenshots are kept as extra gallery items.</p>
        </section>

        <section className="case-overview" data-reveal>
          <div><p className="section-kicker">THE PROJECT</p><h2>Designed around<br /><em>the real workflow.</em></h2></div>
          <div className="case-overview-copy"><p>{project.overview}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
        </section>

        <section className="case-stack-section" aria-labelledby="case-stack-title">
          <div className="case-section-heading" data-reveal>
            <div><p className="section-kicker">TOOLS USED</p><h2 id="case-stack-title">Technology <em>stack.</em></h2></div>
            <p>The tools used to build this {project.status === "work" ? "project" : "concept"}.</p>
          </div>
          <div className="case-stack-grid">
            {project.stack.map((name, index) => (
              <article className="case-tech-card" key={name} data-reveal style={{ "--reveal-delay": `${index * 45}ms` } as CSSProperties}>
                <TechIcon name={name} size={38} />
                <div><h3>{name}</h3><p>{technologyDescriptions[name]}</p></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="case-next" data-reveal>
          <div className="case-next-heading"><p className="section-kicker">KEEP EXPLORING</p><h2>More useful <em>work.</em></h2></div>
          <nav className="case-project-nav" aria-label="Project navigation">
            <Link href={`/work/${previousProject.slug}`}><small><span aria-hidden="true">←</span> PREVIOUS</small><b>{previousProject.title}</b></Link>
            <Link href={`/work/${nextProject.slug}`}><small>NEXT <span aria-hidden="true">→</span></small><b>{nextProject.title}</b></Link>
          </nav>
          <Link className="button button-dark" href="/#work">All projects <span aria-hidden="true">→</span></Link>
        </section>
      </div>
      <footer className="case-footer"><Link className="brand" href="/">ashar<span>.</span></Link><span>Thoughtful interfaces. Useful products.</span><Link href="/#contact">Get in touch <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}
