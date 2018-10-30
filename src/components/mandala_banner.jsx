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
      }
    `}
    render={({ burstingly_interwoven }) => {
      const fluid = burstingly_interwoven.childImageSharp.fluid;
      return (
        <Img style={{height: "100%", width: "auto"}} fluid={fluid} />
      );
    }}
  />
);

export default MandalaSlideshow;
