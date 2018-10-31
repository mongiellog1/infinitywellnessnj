import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MandalaSlideshow = () => (
  <StaticQuery
    query={graphql`
      query {
        burstingly_interwoven: file(relativePath: { eq: "mandalas/landscape/burstingly_interwoven.jpg" }) {
          ...fluidImage
        }
        love: file(relativePath: { eq: "mandalas/landscape/love.jpg" }) {
          ...fluidImage
        }
        gratitude: file(relativePath: { eq: "mandalas/landscape/gratitude.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={({ burstingly_interwoven, love, gratitude }) => {
      const fluidBurstinglyWoven = burstingly_interwoven.childImageSharp.fluid;
      const fluidLove = love.childImageSharp.fluid;
      const fluidGratitude = gratitude.childImageSharp.fluid;
      return (
        <div className="mandalas-banner">
          <div />
          <Img
            fluid={fluidLove}
            style={{height: "100%", width: "auto"}}
            imgStyle={{ objectFit: "contain" }}
          />
          <Img
            fluid={fluidBurstinglyWoven}
            style={{height: "100%", width: "auto"}}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      );
    }}
  />
);

export default MandalaSlideshow;
