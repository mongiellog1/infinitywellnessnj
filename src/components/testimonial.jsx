import React from "react";

const QuoteFactory = ({ quote, author }, bgColor = "bg--green-fade") => () => (
  <div className={`blockquote-wrapper ${bgColor}`}>
    <blockquote>
      <div>
        {quote}
      </div>
      {author && <div style={{ fontStyle: "italic", marginTop: "0.25rem" }}>~ {author}</div>}
    </blockquote>
  </div>
);

const testimonial1 = {
  quote: `After the first couple of MFR treatments, I felt perplexed and tried to figure
    out how a treatment could remove pain and muscle tension with such
    ease.`,
  author: "V.M."
};
const testimonial2 = {
  quote: `[Gina's] generous and creative Spirit was a pleasure to be around these past weeks, and beautifully seeded the soil of transformation for me.`,
  author: "B.M."
};

const testimonial3 = {
  quote: `Her techniques are truly powerful.  And she knows healing, trust me, she's a pro.  I highly recommend her to anyone who, like me, seemed to exhaust all avenues towards feeling better.  I only wish I found her sooner.`,
  author: "S.N.",
};
const testimonial4 = {
  quote: `Thank you for everything. This body is grateful for the time I allowed it to rest this past week. All the physical challenges that would have thrown me into a depression and stricken me with self loathing and despair did the opposite. I know I say this a lot and yet it feels like I can’t possibly say it enough, you have changed my vision of myself on so many levels. You have helped me heal me so much. I can never thank you enough. `,
  author: "A.Y.",
};

const quote1 = "If the only prayer you said was thank you, that would be enough.";
const quote2 = "Gratitude is not only the greatest of virtues, but the parent of all others.";

export const Testimonial1 = QuoteFactory(testimonial1);
export const Testimonial2 = QuoteFactory(testimonial2);
export const Testimonial3 = QuoteFactory(testimonial3);
export const Testimonial4 = QuoteFactory(testimonial4);

export const Quote1 = QuoteFactory(quote1, "Meister Eckhart");
export const Quote2 = QuoteFactory(quote2, "Marcus Tullius Cicero");
