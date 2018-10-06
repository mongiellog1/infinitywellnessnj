import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"

import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="section z10">
      <div className="section-background blur background-cover-parent" />
      <div className="background-cover-parent darken" />
      <div className="section-content white" style={{ paddingTop: "6em" }}>
        <h1>Start Connecting Your Dots.</h1>
        {/* <p>Everyone has a voice that guides them, but not everyone knows how to listen.  Whether it's finding life purpose, living in good health, or strengthening your relationships, there is an answer of great truth within you that is waiting to be heard.</p>
        <p>Everything shows up for a reason and has a message to learn from.  Let your pain be a doorway to the life you've been searching for.</p> */}
        <p>Do you need help in life? I've got solutions that work across the board.</p>
        <p>Whether it be help with relationships, facing challenges in your business, or feeling stuck in your life path, I am certain that I am able to help.</p>
        <div>
          <Link to="/page-2/" style={{ marginRight: "1rem" }}>
            <button className="button-cta-1">
              Learn More
            </button>
          </Link>
          <Link to="/page-2/">
            <button className="button-cta-1">
              Free Ebook
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="slanted-section-decorator slanted-section-decorator--purple"/>
      <div className="section-content white-bg purple">
        <h1 className="">An Integrated Approach.</h1>
        <p>Gina uses MyoFascial Release, Healing Sound Therapy, Emotional Freedom Technique to create just the right balance of energy into a harmonious space of health and wellness.</p>
        <p>Fill this section with more things that might appeal to someone to have them realize that this is a revolutionary way of dealing with all things.  Not only can this work heal people from their stress and problems, but it can be used to connect to the deepest parts of ourselves
          so that we can find the answers we truly are looking for at the times when we need them the most.  Find anything right in the realm of your own existence, whether it be your life path, a career change, a bew business proposal, or personal achievments, there is something to be found
          from within all of ourselves.  The trick is to stop searching for the answers, and instead remove the blocks that are getting in your way.</p>
        <div>
          <Link to="/page-2/" style={{ marginRight: "1rem" }}>
            <button className="button-cta-1">
              Learn More
            </button>
          </Link>
          <Link to="/page-2/">
            <button className="button-cta-1">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="section-content purple-bg white" >
        <h1 style={{ paddingTop: "0.5rem" }}>A Seasoned Professional.</h1>
        <p>Gina has many years of experience in alternative health.  With over 1000+ degrees, 1M+ certifications, and a lightyear of professional client experience, there is nothing that she can't handle.  The very nature of her work is so powerful and far-reaching that there is no client
        that she cannot work with and get amazing results.</p>
        <div>
          <Link to="/page-2/" style={{ marginRight: "1rem" }}>
            <button className="button-cta-1">
              More on Gina
            </button>
          </Link>
          <Link to="/page-2/">
            <button className="button-cta-1">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
