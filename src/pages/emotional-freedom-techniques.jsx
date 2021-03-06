import React from "react";
import { graphql, navigate } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";
import Divider from "../components/page_divider";
import { Testimonial7, Testimonial8 } from "../components/testimonial";
import Button from "../components/button";

export default ({ data }) => (
  <Layout>
    <HeroSection
      title="Emotional Freedom Techniques"
      subtitle="THE ENERGY ELEVATOR"
      paragraphs={[`Tapping into roots that exist for a reason.`]}
      Background={<Img className="background-cover-parent" fluid={data.cover.childImageSharp.fluid} />}
    />
    <div className="slanted-section-decorator slanted-section-decorator--eft"/>
    <div className="container container--max-width">
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

      <Divider />

      <article className="section purple2">
        <h2 className="purple shadow">Open Your Energy Highways</h2>
        <p style={{ marginBottom: "1rem" }}>EFT has helped many people with various problems, including:</p>
        <div className="mfr-symptoms purple0">
          <ul className="mfr-symptoms__list">
            <li>Headaches</li>
            <li>Back Pain</li>
            <li>Stiff Neck and Shoulders</li>
            <li>joint pains</li>
            <li>chronic fatigue syndrome</li>
            <li>ulcerative colitis</li>
            <li>psoriasis</li>
            <li>asthma</li>
            <li>allergies</li>
            <li>insomnia</li>
            <li>arthritis</li>
          </ul>
          <ul className="mfr-symptoms__list">
            <li>irritable bowel syndrome</li>
            <li>eyesight</li>
            <li>muscle tightness</li>
            <li>bee stings</li>
            <li>urination problems</li>
            <li>morning sickness</li>
            <li>PMS</li>
            <li>sexual dysfunction</li>
            <li>carpal tunnel syndrome</li>
            <li>stomachaches</li>
            <li>toothaches</li>
            <li>and <i style={{paddingRight: 2}}>much</i> more</li>
          </ul>
        </div>
        <p>
          "[T]here's a very good reason why EFT works on such a wide variety of issues. The reason is that they all involve stress." -Dawson Church, PhD, The Genie in Your Genes, 2014.
        </p>
        <p>
          Most individuals experience stress in one or more areas of their life. Relationships, work, health, spirituality, and finances are common life situations that contribute to stress. Regardless of the cause, stress has serious effects on the body and reducing it can lead to a healthier happier experience of life. When applying EFT to a stress that is triggered by a certain situation, it works to reduce or eliminate the stress around the situation. When we think about or physically return to an event or situation that caused us stress in the past without the accompanied stress, not only do we have a neutral feeling toward it, but the situation itself often changes.
        </p>
      </article>
      <div className="page-anchor__container">
        <div id="group-eft" className="page-anchor__anchor"/>
      </div>
      <Section
        title="Group EFT Classes"
        subsections={[
          "Group EFT classes are fun, beneficial, and uplifting. We tap on collective group issues, or interweave individual challenges to be useful for everyone present. We create the class according to the group’s goal.",
          "I have led EFT classes for many different populations including fibromyalgia, addiction recovery, yoga participants, intimate gatherings, high school enrichment programs, administrators, board members, and more.",
          "Some examples of themed intention classes are to increase cooperation, decrease animosity, relax more, increase efficiency, team build, clear obstacles around a certain goal, and soar beyond our current limitations. ",
          "Another option is to have no specific goal, but instead come together to tap into greater states of insights, relaxation, and stress release.",
          <Button
            text="Buy Group EFT Class"
            onClick={() => navigate("/services#group-eft")}
          />
        ]}
      />
    </div>
    <Testimonial7 />
    <div className="container container--max-width">
      <Section
        title="Peer Reviewed Studies"
        subsections={[
          <>There have been many peer-reviewed studies done on EFT proving its
          success with multiple issues including PTSD, phobias, pain, and more.
          If interested in learning more about the clinical effects of EFT check
          out the peer reviewed professional journal titled Energy Psychology Journal.
          Or to read about the many firsthand accounts of EFT check out the
          hundreds of case studies found at <a className="inline-anchor" href="https://eftuniverse.com/">EFTUniverse.com.</a></>
        ]}
      />
      <div style={{marginTop: "2rem" }}>
        <p>EFT Resources:</p>
        <ul>
          <li><a className="inline-anchor" href="http://optimal-eft.emofree.com/">For Beginners</a></li>
          <li><a className="inline-anchor" href="http://www.bradyates.net/videos.html">Once You Know The Tappings Points</a></li>
          <li><a className="inline-anchor" href="http://www.eftuniverse.com/">Good Information and Current Research in the Field</a></li>
        </ul>
      </div>

      <ContactGinaCta />
    </div>
    <Testimonial8 />
  </Layout>
);

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "gina/078.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
