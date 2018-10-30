import React from "react";

const HeroContent = ({ titleClass, title, subtitle, paragraphs }) => (
  <div className="hero-content container--max-width">
    <h1 className="hero-content__title white">{title}</h1>
    <p className="hero-content__subtitle">{subtitle}</p>
    {paragraphs.map((paragraph, i) => (
      <p key={`hero-content__paragraph-${i}`}>{paragraph}</p>)
    )}
  </div>
);

export default ({ title, titleClass, subtitle, paragraphs=[], darken=false, children }) => (
  <div className="hero container container--hero container--pad-top white">
    {children}
    <HeroContent
      title={title}
      titleClass={titleClass}
      subtitle={subtitle}
      paragraphs={paragraphs}
    />
  </div>
);
