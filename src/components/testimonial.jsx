import React from "react";
import testimonials from "../data/testimonials.yml";
import quotes from "../data/quotes.yml";

const QuoteFactory = ({ quote, author }, bgColor = "bg--green-fade") => () => (
  <div className={`blockquote-wrapper box-shadow ${bgColor}`}>
    <blockquote>
      <div>
        {quote}
      </div>
      {author && <div style={{ fontStyle: "italic", marginTop: "0.5rem", textIndent: "1rem" }}>~ {author}</div>}
    </blockquote>
  </div>
);

export const Testimonial0 = QuoteFactory(testimonials[0]);
export const Testimonial1 = QuoteFactory(testimonials[1]);
export const Testimonial2 = QuoteFactory(testimonials[2]);
export const Testimonial3 = QuoteFactory(testimonials[3]);
export const Testimonial4 = QuoteFactory(testimonials[4]);
export const Testimonial5 = QuoteFactory(testimonials[5]);
export const Testimonial6 = QuoteFactory(testimonials[6]);
export const Testimonial7 = QuoteFactory(testimonials[7]);
export const Testimonial8 = QuoteFactory(testimonials[8]);
export const Testimonial9 = QuoteFactory(testimonials[9]);

export const Quote1 = QuoteFactory(quotes[0]);
export const Quote2 = QuoteFactory(quotes[1]);
