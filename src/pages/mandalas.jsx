import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";

import MandalaGallery from "../components/mandala_gallery";
import MandalaBanner from "../components/mandala_banner";
import "react-image-gallery/styles/css/image-gallery.css";

const MandalaPage = () => (
  <Layout>
    <HeroSection
      cssHeroType="mandalas-page"
      title="Mandalas"
      subtitle="Unleash your inner creative."
    >
      <div className="background-cover-parent bg-darken">
          <MandalaBanner />
      </div>
    </HeroSection>

    <div className="container container--max-width">
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
      <div className="section">
        <div className="mandala-gallery">
          <MandalaGallery />
        </div>
        <h2>Pure, Simple Beauty</h2>
        <p>
          I began making mandalas while running a kids club at the nature center, as another way to help children express freely, but with some guidelines. A lot of children and adults feel afraid or uninterested in art and they don’t know how to start drawing without a guideline. Mandalas are the perfect thing, we start with a circle, and make symmetrical sections of the circle. When starting with this guideline everyone is inspired to create.
        </p>
        <p>
          In the making of my first mandala I was not expecting to find something so powerful. I continued drawing them well beyond the club meeting and, much to my surprise, I noticed I was peacefully meditating while creating each one.
        </p>
        <p>
          They are simple to draw, and there is no such thing as a mistake. There is no expected outcome which I love, and I can be as creative and free as I want. Due to the nature of symmetry, each piece comes out magnificent and totally revealing of where I was during each one. Each one communicates a deep message, bringing insights from the farthest corners of my existence. It truly is my inner nature coming to light.
        </p>
        <p>
          At some point, I found Dr Carl Jung’s writings on mandalas. He explains how mandalas are like a gateway to the unseen and unspoken parts of the psyche. In fact, in the latter part of his career he would have clients make mandalas as therapy. He would analyze each one, and notice how the very act of creating them was part of the healing process, revealing things to be healed.
        </p>
        <p>
          Tibetan buddhists make mandalas as a spiritual practice, native americans make mandalas with a medicine wheel, many ancient religions use labyrinths (mandalas) as a spiritual activity, and in fact humans see the world through a circular field of vision. Yes, we see in circles! We feel contained in circles. Circles give us a boundary, a here and a there. Community’s are circles. Much of our life is circular, and so this drawing of circles is a quite natural and beneficial process for us, therapeutic and meditative.
        </p>
        <p>
          Mandalas, once made, can also have a therapeutic and meditative effect on us. Gazing at one can bring up harmony or discord. Both these uprisings can lead us into places within that we might not have seen otherwise. This new awareness leads us to choice, where there previously was none.
        </p>
        <p>
          Connect with me now to setup a mandala workshop, or to purchase mandala cards!
        </p>
      </div>
      <ContactGinaCta />
    </div>
  </Layout>
);

export default MandalaPage;
