"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";
import { TechIcon } from "@/components/tech-icon";
import { ProjectArtwork } from "@/components/project-artwork";
import { Testimonials } from "@/components/testimonials";
import { projects, technologies, technologyDescriptions, type Project, type ProjectCategory } from "@/lib/projects";

function Icon({ name, size = 18 }: { name: "arrow" | "menu" | "close" | "spark" | "code" | "mail"; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "spark") return <svg {...common}><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>;
  if (name === "code") return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  return <svg {...common}><path d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

function LegacyProjectArtwork({ type }: { type: Project["visual"] }) {
  if (type === "pos") {
    return (
      <div className="artboard pos-art" aria-label="Illustration of a Shopify point of sale dashboard">
        <div className="mini-topbar"><span className="mini-brand"><i /> shopify</span><span className="mini-avatar">A</span></div>
        <div className="pos-content">
          <div className="mini-sidebar"><i /><i /><i /><i /></div>
          <div className="mini-main">
            <div className="mini-heading"><span><b>Good morning, Ashar</b><small>Here’s what’s happening today</small></span><i>+ New sale</i></div>
            <div className="pos-stats"><span><small>Today’s sales</small><b>$2,840</b><em>↗ 12.8%</em></span><span><small>Orders</small><b>48</b><em>↗ 8.2%</em></span><span><small>Inventory</small><b>126</b><em className="neutral">In stock</em></span></div>
            <div className="pos-chart"><div className="chart-head"><b>Sales overview</b><small>This week⌄</small></div><div className="chart-lines"><i /><i /><i /><i /></div><div className="chart-bars">{[36, 58, 43, 78, 54, 87, 68, 100, 62, 76, 51, 92].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "farm") {
    return (
      <div className="artboard farm-art" aria-label="Illustration of a livestock farm management app">
        <div className="farm-sky"><span className="sun" /><div className="hill hill-back" /><div className="hill hill-front" /><span className="cow cow-one">🐄</span><span className="cow cow-two">🐄</span><div className="farm-glass"><b>Good morning, Ashar</b><small>Your farm at a glance</small><div><span><i>🐄</i> 248 <small>Animals</small></span><span><i>🌿</i> 36 <small>Tasks</small></span><span><i>♡</i> 98% <small>Herd health</small></span></div></div></div>
      </div>
    );
  }
  if (type === "store") {
    return (
      <div className="artboard store-art" aria-label="Illustration of a modern Shopify footwear storefront">
        <div className="store-top"><b>A2<span>.</span></b><div><i>Shop</i><i>Our story</i><i>Journal</i></div><span className="bag-icon">♧</span></div>
        <div className="store-hero"><div><small>MADE TO GO PLACES</small><b>Everyday<br />leather,<br /><em>beautifully made.</em></b><span>Explore collection <Icon name="arrow" size={14} /></span></div><div className="shoe-scene"><span className="shoe-shape" /><span className="shoe-sole" /><i className="shoe-shadow" /></div></div>
        <div className="store-foot"><span>New season / 2026</span><span>01 — 04</span></div>
      </div>
    );
  }
  return (
    <div className="artboard analytics-art" aria-label="Illustration of a customer analytics dashboard">
      <div className="analytics-nav"><b><span>◈</span> orbit</b><small>OVERVIEW</small><i>Dashboard</i><i>Customers</i><i>Reports</i><i>Settings</i><div>A</div></div>
      <div className="analytics-main"><div className="analytics-top"><span><small>MONDAY, NOVEMBER 24, 2026</small><b>Overview</b></span><i>Last 30 days⌄</i></div><div className="analytics-cards"><span><small>Total revenue</small><b>$48,294</b><em>↗ 12.4%</em></span><span><small>New customers</small><b>1,284</b><em>↗ 8.1%</em></span><span><small>Conversion</small><b>3.62%</b><em>↗ 0.8%</em></span></div><div className="analytics-chart"><b>Revenue over time</b><small>↗ 12% from last month</small><div className="line-chart"><i /><svg viewBox="0 0 480 110" preserveAspectRatio="none"><path d="M0 82 C38 76, 42 65, 78 73 S118 47, 152 60 S186 69, 218 46 S254 56, 286 37 S328 48, 362 24 S408 39, 440 18 S462 28, 480 8" /></svg></div><div className="chart-months"><i>01 Nov</i><i>08 Nov</i><i>15 Nov</i><i>22 Nov</i><i>30 Nov</i></div></div></div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-art-wrap">
        <ProjectArtwork project={project} />
        <span className="project-index">{project.number} / {String(projects.length).padStart(2, "0")}</span>
        <span className={project.status === "work" ? "concept-badge work-badge" : "concept-badge"}>{project.status === "work" ? <FaCheckCircle size={12} /> : <FaLightbulb size={12} />} {project.status === "work" ? "Selected work" : "Concept"}</span>
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span><span>{project.kind}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-stack" aria-label="Technologies">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <details className="project-details">
          <summary>Project notes <Icon name="arrow" size={15} /></summary>
          <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </details>
        <Link className="project-page-link" href={`/work/${project.slug}`}>View project details <Icon name="arrow" size={15} /></Link>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<"All work" | ProjectCategory>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const shownProjects = filter === "All work" ? projects : projects.filter((project) => project.category === filter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Ashar home" onClick={closeMenu}>ashar<span>.</span></a>
          <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#top" onClick={closeMenu}>Home</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#stack" onClick={closeMenu}>Tech stack</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Let’s talk <Icon name="arrow" size={15} /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span /><span>Building thoughtful web experiences</span></div>
            <p className="eyebrow"><span>WEB DEVELOPER</span><i /> <span>PAKISTAN · AVAILABLE WORLDWIDE</span></p>
            <h1 id="hero-title">Hi, I’m Ashar.<br />I build <em>useful</em><br className="desktop-break" /> things for the web<span className="hero-period">.</span></h1>
            <p className="hero-intro">Frontend-focused developer creating considered interfaces, Shopify experiences, and web apps that make everyday work feel simpler.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore selected work <Icon name="arrow" size={16} /></a>
              <a className="button button-light" href="#contact"><Icon name="mail" size={16} /> Get in touch</a>
            </div>
            <div className="hero-notes"><span><b>01</b> Thoughtful interfaces</span><span><b>02</b> Useful products</span><span><b>03</b> Built to grow</span></div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Ashar">
            <div className="portrait-backdrop" />
            <div className="portrait-frame"><Image src="/images/ashar-portrait.jpg" alt="Ashar in a navy suit" fill priority sizes="(max-width: 760px) 84vw, 42vw" /></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="floating-note note-code"><span><Icon name="code" size={17} /></span><div><b>Built with care</b><small>From first sketch to final detail</small></div></div>
            <div className="floating-note note-stack"><i>✳</i><span>Design-minded<br />development</span></div>
            <span className="hero-side-label">GOOD WORK, MADE USEFUL</span>
          </div>
          <a className="scroll-cue" href="#work"><span /> Scroll to explore</a>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading work-heading" data-reveal>
            <div><p className="section-kicker"><span>01</span> PROJECTS & CONCEPTS</p><h2 id="work-title">Ideas turned into <em>interfaces.</em></h2><p className="section-intro">Selected Laravel and React work, plus clearly labeled product concepts across Shopify, management software, and mobile. Open a project for its detail page, technology stack, and screenshot gallery.</p></div>
            <span className="heading-side-note">{projects.length} projects <b>2026</b></span>
          </div>
          <div className="project-toolbar" data-reveal>
            <p>Browse by focus</p>
            <div className="filter-list" role="group" aria-label="Filter projects">
              {(["All work", "Shopify", "Management", "Mobile apps", "Web apps"] as const).map((item) => <button key={item} className={filter === item ? "filter-chip active" : "filter-chip"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === "All work" ? projects.length.toString().padStart(2, "0") : projects.filter((project) => project.category === item).length.toString().padStart(2, "0")}</span></button>)}
            </div>
          </div>
          <div className="projects-grid">{shownProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          <div className="work-footnote" data-reveal><span className="footnote-star">✦</span><p>Royal AI POS, Cattle ERP, and AI Smart Ledger are selected work with supplied screenshots. Newly proposed apps and systems remain marked as concepts, with designed previews ready to replace as real screens become available.</p></div>
        </section>

        <section className="about-section section-shell" id="about" aria-labelledby="about-title">
          <div className="about-marker"><span>02</span><i /></div>
          <div className="about-main" data-reveal><p className="section-kicker">A LITTLE ABOUT ME</p><h2 id="about-title">Good software should feel <em>effortless.</em></h2><p>I care about the moments that make a product feel clear: a helpful empty state, a page that works beautifully on a phone, or a routine task that takes fewer clicks.</p><p>I bring a frontend mindset to the whole build, from understanding the workflow to shaping the interface and connecting it to a reliable application.</p><a className="text-link" href="#contact">Have something in mind? <Icon name="arrow" size={16} /></a></div>
          <div className="principles-grid" data-reveal><article><span>↗</span><h3>Start with the user</h3><p>Understand the real task before choosing the interface.</p></article><article><span>⌘</span><h3>Details have a job</h3><p>Good visual design makes a product easier to use.</p></article><article><span>↻</span><h3>Build for change</h3><p>Make the code and the experience easy to extend.</p></article></div>
        </section>

        <section className="stack-section section-shell" id="stack" aria-labelledby="stack-title">
          <div className="section-heading compact-heading" data-reveal><div><p className="section-kicker"><span>03</span> THE TOOLKIT</p><h2 id="stack-title">Technologies I <em>work with.</em></h2></div><p className="stack-caption">The right tool depends on the problem. This is the toolkit I reach for to shape and ship modern web products.</p></div>
          <div className="technology-list">{technologies.map((tech, index) => <article className="technology-item" key={tech} data-reveal style={{ "--reveal-delay": `${index * 45}ms` } as CSSProperties}><TechIcon name={tech} size={34} /><b>{tech}</b><small>{technologyDescriptions[tech]}</small></article>)}</div>
          <div className="stack-note" data-reveal><span className="stack-note-icon"><Icon name="spark" size={18} /></span><p>Always learning. Currently exploring better patterns for <strong>accessible, fast, and maintainable</strong> interfaces.</p><span className="note-arrow">↘</span></div>
        </section>

        <section className="testimonials-section section-shell" id="testimonials" aria-labelledby="testimonials-title">
          <div className="section-heading testimonials-heading" data-reveal>
            <div><p className="section-kicker"><span>04</span> CLIENT FEEDBACK</p><h2 id="testimonials-title">Kind words from <em>good people.</em></h2><p className="section-intro">A text-only carousel for approved feedback from clients in the United States and Pakistan.</p></div>
            <div className="review-locations"><span><i /> United States</span><span><i /> Pakistan</span></div>
          </div>
          <div className="testimonial-wrap" data-reveal><Testimonials /></div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-decoration decoration-one" /><div className="contact-decoration decoration-two" />
          <div className="contact-eyebrow"><span>05</span> HAVE A PROJECT IN MIND?</div>
          <div className="contact-content" data-reveal><h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2><p>Tell me a little about the product, the problem, or the idea you’re exploring. I’d be glad to hear about it.</p><a className="button button-green" href="mailto:?subject=Project%20inquiry%20for%20Ashar&body=Hi%20Ashar%2C%0A%0AI%27d%20like%20to%20talk%20about%3A%20">Start a conversation <Icon name="arrow" size={16} /></a></div>
          <div className="contact-bottom"><span><i /> Open to thoughtful collaborations</span><span>Pakistan <b>·</b> Remote-friendly</span></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="brand footer-brand" href="#top">ashar<span>.</span></a><p>Thoughtful interfaces.<br />Useful products.</p><div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="#stack">Tech stack</a><a href="#testimonials">Testimonials</a><a href="#contact">Contact</a></div><a className="footer-connect" href="#contact">Let’s work together <Icon name="arrow" size={15} /></a></div><div className="footer-legal"><span>© 2026 Ashar</span><span>Designed & built with care <b>✳</b></span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
