import React from "react";

const Section = ({ title, subsections, classes }) => (
  <article className={`section ${classes}`}>
    <h1 className="shadow">{title}</h1>
    {subsections.map((sub, i) => (
      <p key={`subsection-${i}`}>
        {sub}
      </p>
    ))}
  </article>
);

export default Section;
