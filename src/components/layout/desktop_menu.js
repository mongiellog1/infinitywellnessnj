import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import scrollToElement from "scroll-to-element";

const DesktopMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            internalRoutes {
              healingTools,
              myofascialRelease,
              emotionalFreedomTechniques,
              yogaMeditation,
              soundBathingGratitude,
              purchases,
              mandalas,
              about,
              packages,
              basicPackage,
              transformationPackage,
              innerDivineMotheringPackage,
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { internalRoutes: {
      healingTools,
      myofascialRelease,
      emotionalFreedomTechniques,
      yogaMeditation,
      soundBathingGratitude,
      purchases,
      mandalas,
      about,
      packages,
      basicPackage,
      transformationPackage,
      innerDivineMotheringPackage,
    } } } }) => (
      <ul className="desktop-menu mobile-hidden">
        <li><Link className="inline-anchor" to="/">Home</Link></li>
        <li>
          <Link className="inline-anchor" to={healingTools}>Healing Tools</Link>
          <ul>
            <li><Link className="inline-anchor" to={myofascialRelease}>Myofascial Release</Link></li>
            <li><Link className="inline-anchor" to={emotionalFreedomTechniques}>Emotional Freedom Techniques</Link></li>
            <li><Link className="inline-anchor" to={yogaMeditation}>Yoga & Meditation</Link></li>
            <li><Link className="inline-anchor" to={soundBathingGratitude}>Sound Bathing & Gratitude</Link></li>
          </ul>
        </li>
        <li>
          <Link className="inline-anchor" to={packages}>Packages</Link>
          <ul>
            <li><Link className="inline-anchor" to={basicPackage}>Basic Package: Beginner Special</Link></li>
            <li><Link className="inline-anchor" to={transformationPackage}>Transformation Package</Link></li>
            <li><Link className="inline-anchor" to={innerDivineMotheringPackage}>Inner Divine Mothering Package</Link></li>
          </ul>
        </li>
        <li><Link className="inline-anchor" to={mandalas}>Mandalas</Link></li>
        <li><Link className="inline-anchor" to={purchases}>Purchases</Link></li>
        <li><Link className="inline-anchor" to={about}>About</Link></li>
        <li className="inline-anchor" onClick={() => scrollToElement("#contact", { offset: -50, duration: 500 } )}>Connect</li>
      </ul>
    )}
  />
);

export default DesktopMenu;