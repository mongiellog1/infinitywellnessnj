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
      subtitle="THE WEB UNTANGLER"
      paragraphs={["Create a new balance of space and harmony deep within your tissue"]}
    />
    <div className="container container--max-width">
      <Section
        title="Unwind into a new space."
        subsections={[
          "Myofascial Release was developed and is taught by John Barnes, PT, and has been used to heal for decades by thousands of trained practitioners from across the world. John Barnes had a traditional physical therapy practice for years before creating the myofascial release theories and practices, due to his own crippling back pain that was in need of healing. He brought this healing modality to the world after he used it successfully on himself and his patients. He is still actively teaching and practicing myofascial release countrywide, now in his mid seventies.",
          "Myofascial Release works on the premise that the body has an interconnected web of fascia that runs throughout. It circles every muscle, bone, nerve, blood vessel, and cell. When healthy and unrestricted, we move freely and energy and information flows through us freely. When this web is restricted in any one spot, it can cause tremendous pain and dysfunction as well as pull on other areas of the web. One restriction or ‘tangle’ affects the entire web and the body systems that are woven throughout. ",
          "Most people find their way to Myofascial Release because of unresolved pain. A common story of someone who finds their way, is that they have tried a many number of things and nothing has helped.  They have either gotten a diagnosis with no known cure, or their doctor doesn't have a diagnosis for their given set of symptoms, yet they desperately want help to lessen pain and dysfunction. Myofascial Release is very effective at addressing back pain, stiffness, tightness, headaches, jaw pain, dysfunctional patterns in the physical body, pelvic tilts and/or rotations, pain from injuries and accidents, of physical pain, injuries, and so much more.",
        ]}
      />

      <Divider showLogo={false} />

      <article className="section purple2">
        <h2 className="purple shadow">Incredibly Versatile</h2>
        <p>While Myofascial Release can indeed address this level of pain and dysfunction in the body, it has many other extraordinary benefits for humans. It helps with emotions, trapped feelings, past traumas, relationship patterns, and can provide insights and a deepening of awareness which leads to greater and greater levels of choice in life. </p>
        <p style={{ marginBottom: "1rem" }}>MFR has been known to help many who suffer with:</p>
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
        <p>When fascial restrictions are released, a renewed sense of mental and physical health and wellness follows.  The fascial system is intelligent, supportive, adaptive, and responsive to life and life's circumstances. It is a vessel for our very consciousness.</p>
      </article>

      <Divider showLogo={false} />

      <Section
        title={<>Sounds Like Fantasy... Backed By Science!</>}
        subsections={[
          `Science has come to discover what John Barnes, PT has been teaching for 40 years!! `,
          '“[That]” symptoms, diagnostic labels, and diseases are a blockage of our bio-energy caused by a prolonged inflammatory response. Trauma and the resultant inflammatory response create Myofascial restrictions that ultimately create the symptoms of pain and disease',
          '“Trauma and inflammatory responses create myofascial restrictions that can produce pressures of approximately 2,000 pounds per square inch on pain sensitive structures that do not show up in any of the standard tests. This enormous pressure acts like a ‘straight jacket’ on muscles, nerves, blood vessels and osseous structures producing the symptoms of pain, headaches, and restriction of motion, and disease.”',
          '“Myofascial Release structurally and energetically opens and rehydrates the human fascial system of liquid light for the coherent flow of frequency, vibration, information and organization necessary for the health and quality of life.”',
          '“It incorporates quantum theory and systems theory into practice, but it does not necessitate the dismantling of traditional healthcare. Rather, Myofascial Release represents a powerfully effective addition of a series of concepts and techniques that enhance and mesh with our traditional medical, dental, and therapeutic training.”',
          '“Feeling is Healing”',
          "~John Barnes, PT"
        ]}
      />
      <p>
        During a session, you, the client, are comfortable on a massage table in shorts and a tank top, with a cover, and heat is optional. I, the practitioner, use various techniques to release fascial tissue. Most of the techniques require long holds in one position, as the fascia takes much longer to respond than muscle. This is typically considered quite enjoyable by the client,  it often is quoted as feeling ‘like such a good stretch’. There are times when therapeutic pain is present, but the client is always in full control, and has the ability to say ‘ease up’ or ‘halt’ at any time. The key is to feel what comes up, and as we feel, it releases.
      </p>
      <ContactGinaCta />
    </div>
  </Layout>
);
