import React from "react";

export default ({ cssHeroType, title, subtitle, paragraphs }) => (
  <div className="container container--pad-top white" style={{ fontSize: 24 }}>
    <div className={`background--${cssHeroType}-hero background-cover-parent`} />
    <div className="background-cover-parent background-cover--darken" />
    <h1 style={{ textShadow: "2px 2px black"}} className="subtitle">{title}</h1>
    <h2 style={{ textShadow: "2px 2px black", fontSize: 20 }}>
      {subtitle}
    </h2>
    {paragraphs.map((paragraph, i) => <p key={`paragraph-${i}`}>{paragraph}</p>)}
  </div>
);
