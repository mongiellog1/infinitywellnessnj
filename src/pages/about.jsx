import React from "react"
import GinaPortrait from "../images/gina2.jpg";
import "./about.css";
import Banner from "../components/banner";
import ContactGinaCta from "../components/contact_gina_cta";
import Layout from "../components/layout/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = () => (
  <Layout>
    <Banner flag="about" />
    <div className="container container--max-width">
      <div className="section">
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
              I'm Gina Mongiello. I am so glad that you have found me. I am here
              to offer my services to the world, because I experience the deepest
              sense of fulfillment and purpose when helping others move through
              their most challenging times. I have personally been through years
              of struggle and pain, and have gone up and down through many cycles
              of seeking answers with the hope of finding something to help me feel
              whole and complete. Throughout this journey, I have been introduced
              to lots of systems and methods out there in the alternative world
              ranging from things that work momentarily or not at all, to things
              that have been incredibly life changing and monumental for myself
              and others around me.  I believe that the modalities and tools that
              I have found, learned, developed and work with are true gems that
              open up the doorway to <strong>live a life on purpose</strong> which we can create
              rather than just passing through as a by-stander. I offer the gift
              of service to those who feel unwell and to those who truly seek
              out answers from a deep place within themselves. It is my honor
              be here now and to create a space of infinite wellness.
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
