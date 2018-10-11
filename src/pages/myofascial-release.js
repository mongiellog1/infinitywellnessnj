import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";
import Divider from "../components/page_divider";

import "./healing-tools.css";

export default () => (
  <Layout>
    <HeroSection
      cssHeroType="mfr"
      title="Myofascial Release"
      subtitle="Dissolve all the years of tension you've been building up."
      paragraphs={["Create a new balance of space and harmony deep within your tissue."]}
    />
    <div className="container container--pad-top">
      <Section
        title="Unwind into a new space."
        classes="big-lines"
        subsections={[
          <>
            MyoFascial Release is often used to help relieve physical pain in the body.
            It also can serve to give a voice to old emotions and patterns that keep us stuck
            and/or prevent us from soaring. It can <b className="purple">restore energy, balance, and stability</b>.
            It can help the body/mind to process old traumas and accidents in order
            to <b className="purple">free</b> us from the weight of the past. There are an <i className="purple">incredible</i> amount
             of freeing possibilities.
          </>
        ]}
      />

      <Divider showLogo={false} />

      <article className="section purple2">
        <h1 className="purple shadow">Incredibly Versatile</h1>
        <p>MFR has been known to help many who suffer with:</p>
        <div className="mfr-symptoms purple0">
          <ul className="mfr-symptoms__list ">
            <li>Accidents</li>
            <li>Back Pain</li>
            <li>Carpal Tunnel</li>
            <li>Chronic Fatigue</li>
            <li>Chronic Pain</li>
            <li>Digestive Issues</li>
            <li>Headaches</li>
          </ul>
          <ul className="mfr-symptoms__list">
            <li>Injuries (From Sports and Other Activities)</li>
            <li>Jaw Pain</li>
            <li>Scar Sensitivity</li>
            <li>Sciatica</li>
            <li>Tightness / Stiffness</li>
            <li>And More!</li>
          </ul>
        </div>
      </article>

      <Divider showLogo={false} />

      <Section
        title={<>Sounds Like Fantasy.<br/>Backed By Science.</>}
        subsections={[
          `In my own search for deeper levels of healing and wellness I discovered the Myofascial Release
          (MFR) Approach. I felt deep love, reverence, and connection with the principles and the practices of
          MFR immediately; a love that grows daily. The fascial system is intelligent, supportive, adaptive,
          and responsive to life and life's circumstances. Its a vessel for our very consciousness.`,
          `Structurally, fascia is an interconnected web of connective tissue that weaves in/around every
          single aspect of the body/mind. When restricted, the fascia can harden and/or lead to painful sensations
          and or chronic problems in the body/mind. Old traumas or hurts can get trapped in the fascial tissue and
          create pain and limitation in the body. When fascial restrictions are released, a renewed sense of mental
          and physical health and wellness can follow.`,
          `MFR helps clients with pain and discomfort. As we deepen and soften our inner awareness, we sense
          the subtle inward journey that continued practice of MFR facilitates. We make little steps toward
          reclaiming and/or owning all the experiences and feelings that make us who we are today. We learn to
          judge less and feel more. This helps us to stand strong in who we are, not who we ought to be. The
          client determines how deep they want to go, through their ability to let go and to feel and to recognize
          and release unconscious holding patterns.`,
          "Be. Feel. Heal."
        ]}
      />
        {/* <p>
          This work is a saving grace for the planet. John Barnes is a brilliant, courageous, loving
          being who has opened the door for us all; even just standing in the doorway we begin to discover
          who we are.
        </p> */}

      <ContactGinaCta />
    </div>
  </Layout>
);
