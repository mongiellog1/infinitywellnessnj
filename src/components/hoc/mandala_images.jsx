import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MandalaImages = (props) => (
  <StaticQuery
    query={graphql`
      query {
        burstingly_interwoven: file(relativePath: { eq: "mandalas/Burstingly Interwoven.jpg" }) {
          ...fluidImage
        }
        divine_order: file(relativePath: { eq: "mandalas/Divine Order.jpg" }) {
          ...fluidImage
        }
        gratitude: file(relativePath: { eq: "mandalas/Gratitude.jpg" }) {
          ...fluidImage
        }
        grief_to_gold: file(relativePath: { eq: "mandalas/Grief to Gold.jpg" }) {
          ...fluidImage
        }
        infinity_wellness: file(relativePath: { eq: "mandalas/Infinity Wellness.jpg" }) {
          ...fluidImage
        }
        inner_calling: file(relativePath: { eq: "mandalas/Inner Calling.jpg" }) {
          ...fluidImage
        }
        lavallette: file(relativePath: { eq: "mandalas/Lavallette.jpg" }) {
          ...fluidImage
        }
        love: file(relativePath: { eq: "mandalas/Love.jpg" }) {
          ...fluidImage
        }
        soul_dance: file(relativePath: { eq: "mandalas/Soul Dance.jpg" }) {
          ...fluidImage
        }
        vibrations_abound: file(relativePath: { eq: "mandalas/Vibrations Abound.jpg" }) {
          ...fluidImage
        }
        a_fathers_virtue: file(relativePath: { eq: "mandalas/A Father's Virtue.jpg" }) {
          ...fluidImage
        }
        a_mothers_love: file(relativePath: { eq: "mandalas/A Mother's Love.jpg" }) {
          ...fluidImage
        }
        abiding_beauty: file(relativePath: { eq: "mandalas/Abiding Beauty.jpg" }) {
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
        mind_art: file(relativePath: { eq: "mandalas/Mind Art.jpg" }) {
          ...fluidImage
        }
        soft_and_sweet: file(relativePath: { eq: "mandalas/Soft and Sweet.jpg" }) {
          ...fluidImage
        }
        the_fire_in_you: file(relativePath: { eq: "mandalas/The Fire in You.jpg" }) {
          ...fluidImage
        }
        the_metal_in_you: file(relativePath: { eq: "mandalas/The Metal in You.jpg" }) {
          ...fluidImage
        }
        the_wood_in_you: file(relativePath: { eq: "mandalas/The Wood in You.jpg" }) {
          ...fluidImage
        }
        winter_blanket: file(relativePath: { eq: "mandalas/Winter Blanket.jpg" }) {
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
