import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "./about.css";
import ContactGinaCta from "../components/contact_gina_cta";
import Layout from "../components/layout/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSection from "../components/hero_section";

const AboutPage = ({ data }) => (
  <Layout>
    <HeroSection
      title="About"
      Background={<Img className="background-cover-parent" fluid={data.coverImage.childImageSharp.fluid} />}
    />
    <div className="slanted-section-decorator slanted-section-decorator--mfr"/>
    <div className="container container--max-width">
      <div className="section">
        <article className="bio">
          <div>
            <div>
              <h2 style={{ fontSize: 24, marginBottom: "0.5rem" }}>Gina Mongiello, MA, LMT</h2>
              <h4 style={{ fontStyle: "italic", fontWeight: "200" }}>Founder of Infinity Wellness</h4>
            </div>
            <div className="bio-header">
              <Img className="bio__portrait" fluid={data.image.childImageSharp.fluid} alt="Gina Mongiello" />
            </div>
          </div>
          <div>
            <p>
              My life is devoted to helping us all live in a place of Infinite
              Wellness. Whatever the current situation, we can address it
              together. No challenge is too big or small. Together we decode
              its presence and integrate its gifts.
            </p>
            <p>
              We all have a deep center within; this is Wellness.
            </p>
            <p>
              In Love,
            </p>
            <p>
              Gina <FontAwesomeIcon icon={["fas", "heart"]} style={{ color: "red"}} />
            </p>
          </div>
        </article>
      </div>
      <article className="training">
        <h2 className="margin-top subtitle purple">Training & Certifications</h2>
        <h4>Myofascial Release</h4>
        <ul>
          <li>Trained Massage Therapist - JSG School of Massage, 2013 (550 training hours)</li>
          <li>MFR I (x2)</li>
          <li>MFR II</li>
          <li>Unwinding (x2)</li>
          <li>Advanced Unwinding</li>
          <li>Skill Enhancement Seminar</li>
          <li>Fasical Pelvis (x2)</li>
          <li>Rebounding</li>
          <li>Cervial-Thoracic (x2)</li>
          <li>Treatment for the Therapist</li>
          <li>Fascial Cranium</li>
          <li>Quantum Leap</li>
        </ul>
        <h4>Emotion Freedom Techniques (AKA "Tappping" or EFT) </h4>
        <ul>
          <li>EFT Level 1 (x2) - EFT Universe, 2015</li>
          <li>EFT Level 2 (x2) - EFT Universe, 2015</li>
          <li>6 Month Mentorship with Jan Watkins</li>
        </ul>
        <h4>Yoga & Meditation</h4>
        <ul>
          <li>200 Hour Yoga Teacher Training, YogaWorks, 2009</li>
          <li>Meditation Teacher Training, Yoga Life Society, 2010</li>
          <li>500 Hour Yoga Teacher Training, Yoga Life Society, 2012</li>
          <li>Yoga Acharya Training (3-year program), Yoga Life Society, 2016</li>
          <li>Yoga Seminarian Training (3 year program), Yoga Life Society, 2018</li>
        </ul>
        <h4>Diet & Lifestyle</h4>
        <ul>
          <li>100 Hour Holistic Wellness Certification, Integral Yoga Insitute with Margabhandu Martarano and Viktoras Kulvinskas, 2015</li>
          <li>Detox Specialist Training Level 1, International School of Detoxification with Dr. Robert Morse(ND), 2015</li>
        </ul>
        <h4>Sound Healing</h4>
        <ul>
          <li>Sonic Body: Sound Healing in Relation to Body Work, with Dr John Beaulieu Two Day Intensive, NYC, 2017</li>
          <li>Sound Healing With Tuning Forks: Sensory Kinesiology™ and Insight Intuition™ An Invitation Only Class at Dr. Beaulieu's Home, Four Day Intensive, 2017</li>
        </ul>
      </article>
      <ContactGinaCta />
    </div>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "gina/014.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coverImage: file(relativePath: { eq: "gina/034.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
