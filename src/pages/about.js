import React from "react"
import { Link } from "gatsby"

import "./about.css";

import Layout from "../components/layout/index";

const AboutPage = () => (
  <Layout>
    <div className="">
      <h1 className="title">Bio & Credentials</h1>
      <article className="bio">
        <h2 className="subtitle purple">About Gina </h2>

        <img className="bio__portrait" src="https://dummyimage.com/400x600/000/fff&text=portrait" />
        <div>
          <p>
            Here is text about gina as a person, that speaks about her journey and how she came to be a
            holistic & alernative health practitioner.  It also speaks about what events she hosts frequently,
            what trainings she goes to including sound healing workshops, and what her education is in the past.
          </p>
          <p>
            This is a good section to sell herself as a compassionate earth citizen with a mission to heal herself and the world around herself
            Let people know that no matter what walk of life they are from, they have the power to heal themselves through
            listening and connecting with their inner nature.  Everyone has the keys to their own success.  This is a good opportunity
            to talk about how you came across your techinques and what differentiates them from you!
          </p>
        </div>
      </article>
      <article className="training">
        <h2 className="subtitle purple">Training & Certifications</h2>
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
        </ul>
        <h4>Emotion Freedom Techniques (AKA "Tappping" or EFT) </h4>
        <ul>
          <li>EFT Level 1 (x2) - EFT Universe, 2015</li>
          <li>EFT Level 2 (x2) - EFT Universe, 2015</li>
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

    </div>
  </Layout>
);

export default AboutPage;
