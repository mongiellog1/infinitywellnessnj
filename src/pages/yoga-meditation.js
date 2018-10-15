import React from "react";
import Layout from "../components/layout/index";
import ContactGinaCta from "../components/contact_gina_cta";
import HeroSection from "../components/hero_section";
import Section from "../components/section";

import "./healing-tools.css";

const YogaMeditation = () => (
  <Layout>
    <HeroSection
      title="Yoga & Meditation"
      cssHeroType="yoga-meditation"
      subtitle="The Great Liberator"
      paragraphs={["Finding the common thread."]}
    />
    <div className="container">
      <Section
        title="Yoga & Meditation."
        subsections={[
          "Yoga & yoga meditation have been around for thousands of years. While body postures and stretches have become synonymous with the word yoga in the west, there is far more to yoga than the physical aspects. Yoga is a spiritual journey that leads us to the deepest most profound aspects of Self, which, when realized, shifts our entire vision of life and life’s situations. ",

          'Sage Patanjali gave the world “The Yoga Sutras” and in this ancient profound four part spiritual text, Sage Patanjali outlines the path from suffering to Non-suffering, darkness to Light, unreal to the Real. I have experienced many glimpses of this truth that rise from my continued study with my Beloved Guru and Yoga Master Reverend Jaganath Carrera. And this is exactly what yoga teaches us; that like a science when we practice the steps we receive the outcome. ',
          `Yoga has been known to provide people with an easeful body, a peaceful mind, and a useful life. It helps us to know the real Self, and to stop identifying with the mind made self. This very act leads to freedom. We become the rightful master of the body and the mind, rather than its slave. Liberated from victimhood and suffering we move through life as the spiritual beings that we are, steeped in the truth, that we are all One. This unity consciousness eliminates the need for divide. When we stop dividing, we are in Love, our truest state.`,

          `Each yoga or meditation session is tailor fit to the client's individual needs. It may or may not include physical postures, as some will benefit from an active practice, others a still meditative practice, and others a combination of both. We discuss what is most beneficial and things unfold from our discussion. No prior experience with yoga or meditation is necessary, and great benefit is available, even if you are a seasoned practitioner.`,

          <>“We have to realize we are the Self. We never grow old, never die, never get sick. This is where happiness comes from”<br/>~Sri Guruji Reverend Jaganath Carrera</>
        ]}
      />
      <p className="bold">Use yoga and meditation to remember who you are. The eternal, infinite, consciousness that is everywhere and is everything.</p>
      <ContactGinaCta />
    </div>
  </Layout>
);

export default YogaMeditation;
