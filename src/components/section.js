import React from "react";

const Section = ({ title, subtitle, subsections, classes }) => (
  <article className={`section ${classes}`}>
    {title && <h2 className="shadow">{title}</h2>}
    {subtitle && <h3 className="green">{subtitle}</h3>}
    {subsections.map((sub, i) => (
      <p key={`subsection-${i}`}>
        {sub}
      </p>
    ))}
  </article>
);

export default Section;
