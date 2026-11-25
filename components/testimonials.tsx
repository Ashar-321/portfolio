"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    region: "United States",
    quote: "Add a genuine client review about working with Ashar here.",
  },
  {
    region: "Pakistan",
    quote: "Add a genuine client review about working with Ashar here.",
  },
  {
    region: "United States",
    quote: "Add a second client review here when the client approves it.",
  },
  {
    region: "Pakistan",
    quote: "Add another approved client review here.",
  },
];

export function Testimonials() {
  const [activeReview, setActiveReview] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const previous = () => setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setActiveReview((current) => (current + 1) % reviews.length);
  const review = reviews[activeReview];

  return (
    <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="testimonial-card" role="group" aria-roledescription="slide" aria-label={`${activeReview + 1} of ${reviews.length}`} key={activeReview}>
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote>{review.quote}</blockquote>
        <div className="testimonial-attribution">
          <span className="reviewer-mark" aria-hidden="true">A<span>.</span></span>
          <span><b>Client review</b><small>{review.region}</small></span>
          <span className="review-placeholder-label">Replace with approved feedback</span>
        </div>
      </div>
      <div className="testimonial-controls">
        <span className="review-count"><b>{String(activeReview + 1).padStart(2, "0")}</b> / {String(reviews.length).padStart(2, "0")}</span>
        <div className="review-dots" role="group" aria-label="Choose a review">
          {reviews.map((item, index) => (
            <button
              className={index === activeReview ? "review-dot active" : "review-dot"}
              key={`${item.region}-${index}`}
              type="button"
              aria-label={`Show review ${index + 1} from ${item.region}`}
              aria-pressed={index === activeReview}
              onClick={() => setActiveReview(index)}
            />
          ))}
        </div>
        <div className="review-arrows">
          <button type="button" onClick={previous} aria-label="Previous review">←</button>
          <button type="button" onClick={next} aria-label="Next review">→</button>
          <button className="review-play" type="button" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause automatic reviews" : "Play automatic reviews"}>
            {isPlaying ? "Ⅱ" : "▶"}
          </button>
        </div>
      </div>
    </div>
  );
}
