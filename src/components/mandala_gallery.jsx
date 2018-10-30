import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

const MandalaGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        burstingly_interwoven: file(relativePath: { eq: "mandalas/burstingly_interwoven.jpg" }) {
          ...fluidImage
        }
        divine_order: file(relativePath: { eq: "mandalas/divine_order.jpg" }) {
          ...fluidImage
        }
        gratitude: file(relativePath: { eq: "mandalas/gratitude.jpg" }) {
          ...fluidImage
        }
        grief_to_gold: file(relativePath: { eq: "mandalas/grief_to_gold.jpg" }) {
          ...fluidImage
        }
        infinity_wellness: file(relativePath: { eq: "mandalas/infinity_wellness.jpg" }) {
          ...fluidImage
        }
        inner_calling: file(relativePath: { eq: "mandalas/inner_calling.jpg" }) {
          ...fluidImage
        }
        love: file(relativePath: { eq: "mandalas/love.jpg" }) {
          ...fluidImage
        }
        soul_dance: file(relativePath: { eq: "mandalas/soul_dance.jpg" }) {
          ...fluidImage
        }
        unresolved_matter: file(relativePath: { eq: "mandalas/unresolved_matter.jpg" }) {
          ...fluidImage
        }
        vibrations_abound: file(relativePath: { eq: "mandalas/vibrations_abound.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={(props) => {;
      const items = Object.keys(props).map((key) => ({
        original: props[key].childImageSharp.fluid.src,
        thumbnail: props[key].childImageSharp.fluid.src
      }))
      return (
        <ImageGallery
          items={items}
          startIndex={3}
        />
      )
    }
  }
  />
);

export default MandalaGallery;
