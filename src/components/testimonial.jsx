import React from "react";

const QuoteFactory = (quote, author="", bgColor = "bg--green-fade") => () => (
  <div className={`blockquote-wrapper ${bgColor}`}>
    <blockquote>
      <div>
        {quote}
      </div>
      {author && <div style={{ fontStyle: "italic", marginTop: "0.25rem" }}>{author}</div>}
    </blockquote>
  </div>
);

const testimonial1 = `After the first couple of MFR treatments, I felt perplexed and tried to figure
  out how a treatment could remove pain and muscle tension with such
  ease.`
const testimonial2 = `[Gina's] generous and creative Spirit was a pleasure to be around these past weeks, and beautifully seeded the soil of transformation for me.`;
const quote1 = "If the only prayer you said was thank you, that would be enough.";
const quote2 = "Gratitude is not only the greatest of virtues, but the parent of all others.";

export const Testimonial1 = QuoteFactory(testimonial1);
export const Testimonial2 = QuoteFactory(testimonial2);

export const Quote1 = QuoteFactory(quote1, "Meister Eckhart");
export const Quote2 = QuoteFactory(quote2, "Marcus Tullius Cicero");
