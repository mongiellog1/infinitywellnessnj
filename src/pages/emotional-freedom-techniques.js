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
      subtitle="The Energy Elevator"
      paragraphs={[`Tapping into roots that exist for a reason.`]}
    />
    <div className="container">
      <Section
        title="Tap into your dreams"
        subsections={[
          'Emotional Freedom Techniques (EFT) also called “Tapping”, is an energy healing modality developed by Gary Craig that has its roots in Thought Field Therapy (TFT), created by Dr. Roger Callahan. Gary Craig studied and trained in TFT, and then changed it to make EFT. He did this as an effort to make tapping an accessible healing tool for the masses.',
          'The premise behind EFT is that our energy meridians can either be open and free-flowing allowing for wellness, or blocked and clogged up causing stagnation and despair. As we tap on certain acupoints along the 12 main meridians we release old trapped energy and invite in flow and movement. When we tap into old emotions, traumas, memories, we can see them with new eyes and make updates to our system. This leaves us feeling more open, free, and elevated.',
          'EFT has been used successfully with veterans and others experiencing post traumatic stress syndrome, those with childhood trauma, painful memories, relationship difficulties, blocks to success, health issues, pain and discomfort, food cravings, weight loss, financial troubles, dream interpretation, accidents and injuries.',
          'During a session, we first discuss what the presenting problem(s) is, then I teach you the tapping points, and then we each tap on our own acupoints while I provide the script for us to tap on. The script is based on both my intuition and your statements around the presenting problem. Every time we practice EFT, varying and sometimes unexpected things arise. I will be there to help see you through what rises, gently bring light to blind spots, and help you usher in new perspectives and paradigm shifts that serve you in your life. ',
          <>"EFT is a simple, powerful process that can profoundly influence gene activity, health and behavior."<br/>~ Bruce Lipton, PhD</>
        ]}
      />

      <Divider showLogo={false} />

      <Section
        subsections={[
          "Whether we like it or not, our past is a part of us that exists AND it has a huge impact on everything we do in life until it is seen, felt, and released.",
          `Everyone comes into this human existence whole. Somehow or other, the dust builds up along the way and starts obscuring the path that once was so clear in front of us. We start to feel unwhole. Confrontations come up, relationships break down, we lose sight of what is important to us while climbing towards our perceived goals. In short, we lose sight of our wholeness. EFT is a quick, open doorway back into our wholeness. With this simple technique we can put down the layers of confusion for long enough to see things for what they really are and get back to our wholeness and back to who we really are. `
        ]}
      />

      <ContactGinaCta />
    </div>

  </Layout>
);
