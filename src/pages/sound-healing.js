import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";
import "./healing-tools.css";

const SoundHealing = () => (
  <Layout>
    <HeroSection
      title="Sound Healing"
      cssHeroType="sound-healing"
      subtitle="Lay your head to rest while I vibrate in resonance with your most tender areas."
    />
    <div className="container container--pad-top">
      <Section
        title="Calm your mind to the sound of angels."
        classes="big-lines"
        subsections={[
          `This therapy is so simple yet so profound that I fall in love with it each and every time.
            Sound is a profound`
        ]}
      />
    </div>
  </Layout>
);

export default SoundHealing;
