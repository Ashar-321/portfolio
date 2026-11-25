"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import type { Project } from "@/lib/projects";

export function ProjectGallery({ project, screenshotFolder }: { project: Project; screenshotFolder: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeImage = activeIndex === null ? undefined : project.screenshots[activeIndex];
  const imageIndexes = useMemo(() => project.screenshots.flatMap((screen, index) => screen.src ? [index] : []), [project.screenshots]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const current = imageIndexes.indexOf(activeIndex);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const next = (current + direction + imageIndexes.length) % imageIndexes.length;
        setActiveIndex(imageIndexes[next]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, imageIndexes]);

  const moveImage = (direction: -1 | 1) => {
    if (activeIndex === null || imageIndexes.length < 2) return;
    const current = imageIndexes.indexOf(activeIndex);
    const next = (current + direction + imageIndexes.length) % imageIndexes.length;
    setActiveIndex(imageIndexes[next]);
  };

  return (
    <>
      <div className="case-screenshot-grid">
        {project.screenshots.map((screenshot, index) => {
          const expectedPath = screenshot.expectedPath ?? `${screenshotFolder}/screen-${index + 1}.png`;
          return (
            <figure className={index === 0 ? "case-screenshot primary-shot" : "case-screenshot"} key={screenshot.label} data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
              <div className={`screenshot-stage screenshot-${project.visual}`}>
                <div className="screenshot-chrome"><span /><span /><span /><i>{project.title}</i></div>
                {screenshot.src ? (
                  <div className="screenshot-image">
                    <button className="gallery-image-button" type="button" onClick={() => setActiveIndex(index)} aria-label={`Open ${screenshot.label} image`}>
                      <Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 760px) 100vw, 60vw" />
                      <span><Expand size={13} /> Click to enlarge</span>
                    </button>
                  </div>
                ) : screenshot.preview ? (
                  <div className="screenshot-preview"><ProjectArtwork project={project} useCover={false} /><code>{expectedPath}</code></div>
                ) : (
                  <div className="screenshot-empty">
                    <span className="screenshot-glyph" aria-hidden="true">+</span>
                    <b>Project screenshot</b>
                    <span>{screenshot.label}</span>
                    <code>{expectedPath}</code>
                  </div>
                )}
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{screenshot.label}</figcaption>
            </figure>
          );
        })}
      </div>

      <AnimatePresence>
        {activeImage?.src && (
          <motion.div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`} onClick={() => setActiveIndex(null)} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
            <button className="lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setActiveIndex(null)}><X size={22} /></button>
            {imageIndexes.length > 1 && <button className="lightbox-arrow lightbox-prev" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); moveImage(-1); }}><ChevronLeft size={25} /></button>}
            <motion.div className="lightbox-image" key={activeImage.src} onClick={(event) => event.stopPropagation()} initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" priority />
              <p>{activeImage.label}</p>
            </motion.div>
            {imageIndexes.length > 1 && <button className="lightbox-arrow lightbox-next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); moveImage(1); }}><ChevronRight size={25} /></button>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

