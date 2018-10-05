import React from "react";

const Section = ({ title, subsections, classes }) => (
  <article className={`section purple ${classes}`}>
    <h2 className="shadow">{title}</h2>
    {subsections.map((sub, i) => (
      <p key={`subsection-${i}`} className="purple1">
        {sub}
      </p>
    ))}
  </article>
);

export default Section;
