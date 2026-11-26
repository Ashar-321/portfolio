"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    focus: "Reliable Backend Developer",
    quote:
      "Ashar did an excellent job developing our backend systems. His Laravel expertise, problem-solving skills, and attention to detail made a real difference in our project. He consistently delivered clean, reliable, and maintainable code.",
    name: "James Wilson",
    role: "Project Manager",
    company: "TechNova Solutions",
    location: "London, United Kingdom",
  },
  {
    focus: "Shopify & E-commerce Development",
    quote:
      "Working with Ashar was a great experience. He understood our e-commerce requirements quickly and delivered custom Shopify functionality that improved our store workflow. He is responsive, technically strong, and easy to collaborate with.",
    name: "Daniel Carter",
    role: "E-commerce Director",
    company: "Urban Commerce Studio",
    location: "New York, USA",
  },
  {
    focus: "Full-Stack Web Development",
    quote:
      "Ashar is a skilled developer who can handle both backend functionality and modern frontend requirements. He approached complex tasks professionally and always focused on delivering practical solutions with a great user experience.",
    name: "Michael Anderson",
    role: "Product Owner",
    company: "DigitalWorks Agency",
    location: "Dubai, UAE",
  },
  {
    focus: "AI & Automation Solutions",
    quote:
      "We needed someone who could understand our business workflow and turn it into an efficient technical solution. Ashar brought a strong development mindset, excellent communication, and a genuine interest in building smart, scalable automation.",
    name: "Sophia Bennett",
    role: "Operations Manager",
    company: "Elevate Digital",
    location: "Manchester, United Kingdom",
  },
  {
    focus: "Long-Term Development Partner",
    quote:
      "Ashar is a dependable developer with a strong understanding of modern web technologies. He takes ownership of his work, communicates clearly, and is always looking for ways to improve the product. I would confidently recommend him for web development projects.",
    name: "Alex Morgan",
    role: "Founder",
    company: "NextGen Software",
    location: "Austin, USA",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
      <article className="testimonial-card" role="group" aria-roledescription="slide" aria-label={`${activeIndex + 1} of ${testimonials.length}`} key={activeIndex}>
        <div className="testimonial-card-top">
          <span className="testimonial-quote-mark" aria-hidden="true">“</span>
          <span className="testimonial-focus">{testimonial.focus}</span>
        </div>
        <blockquote>{testimonial.quote}</blockquote>
        <footer className="testimonial-attribution">
          <div>
            <b>{testimonial.name}</b>
            <span>{testimonial.role} · {testimonial.company}</span>
          </div>
          <small>{testimonial.location}</small>
        </footer>
      </article>
      <div className="testimonial-controls">
        <span className="testimonial-count"><b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(testimonials.length).padStart(2, "0")}</span>
        <div className="testimonial-dots" role="group" aria-label="Choose a testimonial">
          {testimonials.map((item, index) => (
            <button
              className={index === activeIndex ? "testimonial-dot active" : "testimonial-dot"}
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="testimonial-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ChevronLeft size={17} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ChevronRight size={17} /></button>
        </div>
      </div>
    </div>
  );
}
