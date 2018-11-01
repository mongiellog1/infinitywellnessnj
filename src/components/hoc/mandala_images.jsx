import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MandalaImages = (props) => (
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
        lavallette: file(relativePath: { eq: "mandalas/lavallette.jpg" }) {
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
    render={(staticProps) => (
      React.Children.map(props.children, (child) => React.cloneElement(child, { ...child.props, mandalaImages: staticProps }))
    )}
  />
);

export default MandalaImages;
