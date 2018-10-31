import React from "react";
import Cta from "./contact_gina_cta";

const Section = ({ title, subtitle, subsections, classes="", CTA=false }) => (
  <article className={`section overflow-hidden ${classes}`}>
    {title && <h2 className="shadow">{title}</h2>}
    {subtitle && <h3 className="green">{subtitle}</h3>}
    {subsections.map((sub, i) => (
      <p key={`subsection-${i}`}>
        {sub}
      </p>
    ))}
    {CTA && <Cta />}
  </article>
);

export default Section;
