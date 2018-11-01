import React from "react"
import GinaPortrait from "../images/gina2.jpg";
import "./about.css";
import ContactGinaCta from "../components/contact_gina_cta";
import Layout from "../components/layout/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSection from "../components/hero_section";

const AboutPage = () => (
  <Layout>
    <HeroSection
      title="About"
    >
      <div className="background-cover-parent background--about-hero" />
    </HeroSection>
    <div className="slanted-section-decorator slanted-section-decorator--mfr"/>
    <div className="container container--max-width">
      <div className="section overflow-hidden">
        <article className="bio">
          <div>
            <div className="bio-header">
              <img className="bio__portrait" src={GinaPortrait} alt="Gina Mongiello" />
              <div>
                <h2 style={{ fontSize: 24, marginBottom: "0.5rem" }}>Gina Mongiello, MA, LMT</h2>
                <h4 style={{ fontStyle: "italic", fontWeight: "200" }}>Founder of Infinity Wellness</h4>
              </div>
            </div>
          </div>
          <div>
            <p>
              Welcome! I am so glad you landed here and are interested in my services.
              It is my greatest pleasure to serve and guide you through your most
              challenging times.  Having been through years of my own struggle and
              pain, having gone up and down through many cycles, seeking answers,
              and wanting desperately to feel whole and complete, I know just how
              challenging it can be.
            </p>
            <p>
              Having been introduced to lots of systems and methods in the
              alternative world I have gathered some incredibly life changing
              and monumental practices to share with you. The modalities and
              tools that I work with are true gems that have the ability to
              open up a doorway to <strong>live a life on purpose.</strong> This way we have a
              creative hand in our life rather than just passing through as a
              by-stander. I sincerely offer my services to those who feel unwell
              and to those who truly seek out answers from a deep place within themselves.
              It is my honor to be here now and to create a space of infinite wellness
              for me, you, and the world.
            </p>
            <p>
              Be. Feel. Love,
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
