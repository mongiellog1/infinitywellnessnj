import React from "react";

const Section = ({ title, subsections, classes }) => (
  <article className={`section purple ${classes}`}>
    <h1 className="shadow">{title}</h1>
    {subsections.map((sub, i) => (
      <p key={`subsection-${i}`} className="purple1">
        {sub}
      </p>
    ))}
  </article>
);

export default Section;
