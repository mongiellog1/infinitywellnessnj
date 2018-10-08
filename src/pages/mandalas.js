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

const Mandala = ({ src, name }) => (
  <>
    <img src={src} style={{ width: "100%" }} />
    <h4>{name}</h4>
  </>
);

const MandalaPage = () => (
  <Layout>
    <HeroSection
      cssHeroType="mandalas-page"
      title="Mandalas"
      subtitle="Unleash your inner creative."
      paragraphs={[`Through the creation of mandalas, we create balance in our brain and allow our soul to come through,
         creating beautiful expressions of our inner being.`]}
    />
    <div className="container container--pad-top">
      <Section
        title="Mandalas"
        classes="big-lines"
        subsections={[
          `I began making mandalas in January at a time when I was absolultely not expecting
          to find something so powerful.  I was reading about Dr Carl Jung and he explains
          how mandalas are like the gateway to the soul.  I started to draw them and, much to my surprise,
          I began peacefully meditating while creating each one.  It is so simple to draw,
          and there is no such thing as a mistake.  There is no expected outcome which I love, and
          lets me be as creative and free as I want.  Due to the nature of symmetry, each piece
          comes out magnificent and totally revealing of where I was during each one.  In a way,
          they communicate a deep message that brings insights into even the farthest corners of my existence.
          It truly is my inner nature coming to light.`
        ]}
      />
      <div style={{ padding: "2rem" }}>
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
