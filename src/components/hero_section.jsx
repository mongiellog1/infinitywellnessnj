import React from "react";

const HeroContent = ({ titleClass, title, subtitle, paragraphs, children }) => (
  <>
    <h1 className="hero-content__title white">{title}</h1>
    <div className={subtitle || paragraphs[0] || children ? "hero-content__panel" : ""}>
      <p className="hero-content__subtitle">{subtitle}</p>
      {paragraphs.map((paragraph, i) => (
        <p key={`hero-content__paragraph-${i}`}>{paragraph}</p>)
      )}
      {children}
    </div>
  </>
);

export default ({ title, titleClass, subtitle, paragraphs=[], children, Background }) => (
  <div className="hero container container--hero container--pad-top white">
    <div className="fixed-scroll-bg fixed-scroll-bg__absolute-container">
      <div className="fixed-scroll-bg fixed-scroll-bg__fixed-container">
        {Background}
      </div>
    </div>
    <div className="hero-content container--max-width">
      <HeroContent
        title={title}
        titleClass={titleClass}
        subtitle={subtitle}
        paragraphs={paragraphs}
      >
      {children}
    </HeroContent>
    </div>
  </div>
);
