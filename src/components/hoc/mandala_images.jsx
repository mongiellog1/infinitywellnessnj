import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MandalaImages = (props) => (
  <StaticQuery
    query={graphql`
      query {
        burstingly_interwoven: file(relativePath: { eq: "mandalas/Burstingly_Interwoven.jpg" }) {
          ...fluidImage
        }
        divine_order: file(relativePath: { eq: "mandalas/Divine_Order.jpg" }) {
          ...fluidImage
        }
        gratitude: file(relativePath: { eq: "mandalas/Gratitude.jpg" }) {
          ...fluidImage
        }
        grief_to_gold: file(relativePath: { eq: "mandalas/Grief_to_Gold.jpg" }) {
          ...fluidImage
        }
        infinity_wellness: file(relativePath: { eq: "mandalas/Infinity_Wellness.jpg" }) {
          ...fluidImage
        }
        inner_calling: file(relativePath: { eq: "mandalas/Inner_Calling.jpg" }) {
          ...fluidImage
        }
        lavallette: file(relativePath: { eq: "mandalas/Lavallette.jpg" }) {
          ...fluidImage
        }
        love: file(relativePath: { eq: "mandalas/Love.jpg" }) {
          ...fluidImage
        }
        soul_dance: file(relativePath: { eq: "mandalas/Soul_Dance.jpg" }) {
          ...fluidImage
        }
        vibrations_abound: file(relativePath: { eq: "mandalas/Vibrations_Abound.jpg" }) {
          ...fluidImage
        }
        a_fathers_virtue: file(relativePath: { eq: "mandalas/A_Father's_Virtue.jpg" }) {
          ...fluidImage
        }
        a_mothers_love: file(relativePath: { eq: "mandalas/A_Mother's_Love.jpg" }) {
          ...fluidImage
        }
        abiding_beauty: file(relativePath: { eq: "mandalas/Abiding_Beauty.jpg" }) {
          ...fluidImage
        }
        community: file(relativePath: { eq: "mandalas/Community.jpg" }) {
          ...fluidImage
        }
        compassion: file(relativePath: { eq: "mandalas/Compassion.jpg" }) {
          ...fluidImage
        }
        electric: file(relativePath: { eq: "mandalas/Electric.jpg" }) {
          ...fluidImage
        }
        faith: file(relativePath: { eq: "mandalas/Faith.jpg" }) {
          ...fluidImage
        }
        freedom: file(relativePath: { eq: "mandalas/Freedom.jpg" }) {
          ...fluidImage
        }
        friend: file(relativePath: { eq: "mandalas/Friend.jpg" }) {
          ...fluidImage
        }
        manifestation: file(relativePath: { eq: "mandalas/Manifestation.jpg" }) {
          ...fluidImage
        }
        meditation: file(relativePath: { eq: "mandalas/Meditation.jpg" }) {
          ...fluidImage
        }
        mind_art: file(relativePath: { eq: "mandalas/Mind_Art.jpg" }) {
          ...fluidImage
        }
        soft_and_sweet: file(relativePath: { eq: "mandalas/Soft_and_Sweet.jpg" }) {
          ...fluidImage
        }
        the_fire_in_you: file(relativePath: { eq: "mandalas/The_Fire_in_You.jpg" }) {
          ...fluidImage
        }
        the_metal_in_you: file(relativePath: { eq: "mandalas/The_Metal_in_You.jpg" }) {
          ...fluidImage
        }
        the_wood_in_you: file(relativePath: { eq: "mandalas/The_Wood_in_You.jpg" }) {
          ...fluidImage
        }
        winter_blanket: file(relativePath: { eq: "mandalas/Winter_Blanket.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={(mandalaImages) => (
      React.Children.map(
        props.children,
        (child) => React.cloneElement(child, {
          ...child.props, mandalaImages
        })
      )
    )}
  />
);

export default MandalaImages;
