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
      subtitle="THE GREAT LIBERATOR"
      paragraphs={["Find the common thread."]}
    />
    <div className="container">
      <Section
        title="Equanimity of Mind is Yoga ~ Bhagavad Gita"
        subsections={[
          `Yoga & meditation have been around for thousands of years. While
          body postures and stretches have become synonymous with the word yoga
          in the west, there is far more to yoga than the physical aspects. Yoga
          is a spiritual journey that leads us to the deepest most profound aspects
          of Self, which, when realized, shifts our entire vision of life and life’s
          situations. `,

          `Yoga has been known to provide people with an easeful body, a peaceful
          mind, and a useful life. It helps us to know the real Self, and to stop
          identifying with the mind made self. This very act leads to freedom. We
          become the rightful master of the body and the mind, rather than its slave.
          Liberated from victimhood and suffering we move through life as the spiritual
          beings that we are, steeped in the truth, that we are all One. This unity
          consciousness eliminates the need for divide. When we stop dividing, we are
          in Love, our truest state.`,
        ]}
      />
      <Section
        title={"Passed on Through Lineage"}
        subsections={[
          `Sage Patanjali gave the world “The Yoga Sutras”.  In this ancient
          profound four part spiritual text, Sage Patanjali outlines the path from
          suffering to Non-suffering, darkness to Light, unreal to the Real. I have
          experienced many glimpses of this truth that rise from my continued study.
          Like a science, when we practice the steps, we receive the outcome.`,

          `My yoga studies have deepened over this last decade thanks to my Beloved
          Guruji, Reverend Jaganath Carrera, the Spritual Head and Founder of
          Yoga Life Society. It is through this Guru/Disciple relationship
          that the teachings continue to be passed on to me. This is how I
          continue to learn and grow in yoga. I share yoga with people of all
          ages and abilities; public/private classes, mat classes, chair classes,
          library classes, meditation classes, outdoor and indoor classes.`,

          `Each yoga or meditation session is tailor fit to the client's individual needs.
          It may or may not include physical postures, as some will benefit from an
          active practice, others a still meditative practice, and others a combination
          of both. We discuss what is most beneficial and things unfold from our discussion.
          No prior experience with yoga or meditation is necessary, and great benefit is
          available, even if you are a seasoned practitioner.`,

          <>“We have to realize we are the Self. We never grow old, never die, never get
          sick. This is where happiness comes from”<br/>~Sri Guruji Reverend Jaganath Carrera</>
        ]}
      />
      <Section
        title="Movement; More Than Physical"
        subsections={[
          `Many of us begin practicing yoga by way of the physical postures. This is
          how I started back in the late 1990’s. The feel-good movements, the
          fun-sequencing, the healing-space and the relaxation benefits are easy
          to see and feel from the start. For those that wish to go deeper there
          is so much more!`,

          <>Use yoga and meditation to <i>remember who you are</i>. The eternal,
          infinite, consciousness that is everywhere and is everything.</>

        ]}
      />
      <ContactGinaCta />
    </div>
  </Layout>
);

export default YogaMeditation;
