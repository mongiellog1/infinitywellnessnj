import React from "react";
import testimonials from "../data/testimonials.yml";
import quotes from "../data/quotes.yml";

const TestimonialFactory = ({ quote, author }, bgColor = "bg--green-fade") => () => (
  <div className={`blockquote-wrapper box-shadow ${bgColor}`}>
    <blockquote>
      {quote.split("\n").map((par) => (<p>{par}</p>))}
      {author && <p style={{ fontStyle: "italic", marginTop: "0.5rem", textIndent: "1rem" }}>~ {author}</p>}
    </blockquote>
  </div>
);

const QuoteFactory = ({ quote, author }) => () => (
  <div className="quote" style={{
    textAlign: "center",
    color: "var(--purple)",
    padding: "0 0 2rem",
    fontSize: "18px"
  }}>
    <p>"{quote}"</p>
    <p style={{ marginTop: "0.25rem"}}>~ {author}</p>
  </div>
);

export const Testimonial0 = TestimonialFactory(testimonials[0]);
export const Testimonial1 = TestimonialFactory(testimonials[1]);
export const Testimonial2 = TestimonialFactory(testimonials[2]);
export const Testimonial3 = TestimonialFactory(testimonials[3]);
export const Testimonial4 = TestimonialFactory(testimonials[4]);
export const Testimonial5 = TestimonialFactory(testimonials[5]);
export const Testimonial6 = TestimonialFactory(testimonials[6]);
export const Testimonial7 = TestimonialFactory(testimonials[7]);
export const Testimonial8 = TestimonialFactory(testimonials[8]);
export const Testimonial9 = TestimonialFactory(testimonials[9]);
export const Testimonial10 = TestimonialFactory(testimonials[10]);

export const Quote1 = QuoteFactory(quotes[0]);
export const Quote2 = QuoteFactory(quotes[1]);
