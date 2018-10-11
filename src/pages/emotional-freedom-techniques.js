import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";
import Divider from "../components/page_divider";

export default () => (
  <Layout>
    <HeroSection
      cssHeroType="eft"
      title="Emotional Freedom Techniques"
      subtitle="Tapping into roots that exist for a reason."
      paragraphs={[`Whether we like it or not, there's parts of us that exist AND they have a huge on
      everything we do in life.`]}
    />
    <div className="container container--pad-top">
      <Section
        title="Tap into your dreams"
        classes="big-lines"
        subsections={[
          `Everyone comes into this world pure.  Somehow or other, the dust builds up along the way and start obfuscating the path
          that once was so clear in front of it.  Confrontations come up, relationships break down, we lose sight of whats important to us
          while climbing towards our highest goals.  In short, we lose sight of ourselves.  EFT is the quickest and simplest doorway
          back into our pure form.  We can put down the layers of confusion for just a moment and see things for what they really are
          with simple techniques.`
        ]}
      />

      <Divider showLogo={false} />

      <Section
        title="Another section here"
        subsections={[
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        ]}
      />
      <Divider showLogo={false} />

      <Section
        title="Another section here"
        subsections={[
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        ]}
      />
      <ContactGinaCta />
    </div>

  </Layout>
);
