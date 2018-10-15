import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";

import burstingly_interwoven from "../images/mandalas/burstingly_interwoven.jpg";
import divine_order from "../images/mandalas/divine_order.jpg";
import gratitude from "../images/mandalas/gratitude.jpg";
import grief_to_gold from "../images/mandalas/grief_to_gold.jpg";
import infinity_wellness from "../images/mandalas/infinity_wellness.jpg";
import inner_calling from "../images/mandalas/inner_calling.jpg";
import love from "../images/mandalas/love.jpg";
import soul_dance from "../images/mandalas/soul_dance.jpg";
import unresolved_matter from "../images/mandalas/unresolved_matter.jpg";
import vibrations_abound from "../images/mandalas/vibrations_abound.jpg";

import burstingly_interwoven_thumb from "../images/mandalas/thumbnails/burstingly_interwoven.jpg";
import divine_order_thumb from "../images/mandalas/thumbnails/divine_order.jpg";
import gratitude_thumb from "../images/mandalas/thumbnails/gratitude.jpg";
import grief_to_gold_thumb from "../images/mandalas/thumbnails/grief_to_gold.jpg";
import infinity_wellness_thumb from "../images/mandalas/thumbnails/infinity_wellness.jpg";
import inner_calling_thumb from "../images/mandalas/thumbnails/inner_calling.jpg";
import love_thumb from "../images/mandalas/thumbnails/love.jpg";
import soul_dance_thumb from "../images/mandalas/thumbnails/soul_dance.jpg";
import unresolved_matter_thumb from "../images/mandalas/thumbnails/unresolved_matter.jpg";
import vibrations_abound_thumb from "../images/mandalas/thumbnails/vibrations_abound.jpg";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const MandalaPage = () => (
  <Layout>
    <HeroSection
      cssHeroType="mandalas-page"
      title="Mandalas"
      subtitle="Unleash your inner creative."
    />
    <div className="container">
      <Section
        title="Mandalas"
        subsections={[
          `We communicate with hidden aspects of the self through the creation of
          mandalas. Gazing at mandalas shifts our energy and opens us up to a
          dialogue between the conscious and unconscious mind. The language of
          our non-linear intuitive mind is symbols, shapes, and colors. All
          imagery helps to balance out the overactive linear parts of our brain
          and allows repressed parts expression. Imagery also invites the soul
          to come through. Mandala’s are beautiful insights and expressions of
          our inner being.`
        ]}
      />
      <div style={{ padding: "2rem", maxWidth: "25rem" }}>
        <ImageGallery
          items={[
            { original: burstingly_interwoven, thumbnail: burstingly_interwoven_thumb },
            { original: divine_order, thumbnail: divine_order_thumb },
            { original: gratitude, thumbnail: gratitude_thumb },
            { original: grief_to_gold, thumbnail: grief_to_gold_thumb },
            { original: infinity_wellness, thumbnail: infinity_wellness_thumb },
            { original: inner_calling, thumbnail: inner_calling_thumb },
            { original: love, thumbnail: love_thumb },
            { original: soul_dance, thumbnail: soul_dance_thumb },
            { original: unresolved_matter, thumbnail: unresolved_matter_thumb },
            { original: vibrations_abound, thumbnail: vibrations_abound_thumb },
          ]}
        />
      </div>
    </div>
  </Layout>
);

export default MandalaPage;

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "flowers1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
