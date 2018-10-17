import React from "react";

export default ({ background, cssHeroType, title, titleClass, subtitle, paragraphs=[], darken }) => (
  <div className="hero container container--hero container--pad-top white">
    {background}
    {cssHeroType && <div className={`background--${cssHeroType}-hero background-cover-parent`} />}
    {darken && <div className="background-cover-parent background-cover--darken" />}
    <h1 style={{ textShadow: "2px 2px black", color: "white" }} className={titleClass ? `hero__title--${titleClass}` : ""}>{title}</h1>
    <p style={{ fontSize: "1.2rem", textShadow: "2px 2px black"}}>
      {subtitle}
    </p>
    {paragraphs.map((paragraph, i) => <p key={`paragraph-${i}`}>{paragraph}</p>)}
  </div>
);
