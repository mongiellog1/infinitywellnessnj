import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
const basePath = "mandalas/landscape";

const MandalaSlideshow = () => (
  <StaticQuery
    query={graphql`
      query {
        divine_order: file(relativePath: { eq: "mandalas/landscape/divine_order.jpg" }) {
          ...fluidImage
        }
        gratitude: file(relativePath: { eq: "mandalas/landscape/gratitude.jpg" }) {
          ...fluidImage
        }
        grief_to_gold: file(relativePath: { eq: "mandalas/landscape/grief_to_gold.jpg" }) {
          ...fluidImage
        }
        infinity_wellness: file(relativePath: { eq: "mandalas/landscape/infinity_wellness.jpg" }) {
          ...fluidImage
        }
        inner_calling: file(relativePath: { eq: "mandalas/landscape/inner_calling.jpg" }) {
          ...fluidImage
        }
        love: file(relativePath: { eq: "mandalas/landscape/love.jpg" }) {
          ...fluidImage
        }
        soul_dance: file(relativePath: { eq: "mandalas/landscape/soul_dance.jpg" }) {
          ...fluidImage
        }
        unresolved_matter: file(relativePath: { eq: "mandalas/landscape/unresolved_matter.jpg" }) {
          ...fluidImage
        }
        vibrations_abound: file(relativePath: { eq: "mandalas/landscape/vibrations_abound.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={(props) => {
      const items = Object.keys(props).map((key) => ({
        original: props[key].childImageSharp.fluid.src
      }))
      return (
        <div className="background-cover-parent mandala-slideshow">
          <ImageGallery
            items={items}
            showThumbnails={false}
            autoPlay={true}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      );
    }}
  />
);

export default MandalaSlideshow;
