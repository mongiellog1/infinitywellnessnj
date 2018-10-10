import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Divider from "../components/page_divider";

import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="section z10">
      <div className="section-background blur background-cover-parent" />
      <div className="background-cover-parent darken" />
      <div className="section-content white" style={{ paddingTop: "6em" }}>
        <h1 style={{fontSize: "3.5em"}}>Reclaim Your Wellness.</h1>
        {/* <p>Everyone has a voice that guides them, but not everyone knows how to listen.  Whether it's finding life purpose, living in good health, or strengthening your relationships, there is an answer of great truth within you that is waiting to be heard.</p>
        <p>Everything shows up for a reason and has a message to learn from.  Let your pain be a doorway to the life you've been searching for.</p> */}
        <p style={{ fontSize: "22px" }}>Start living in a way that is true to your core.  A life where you know
          what you want and your actions follow in alignment.
        </p>
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

    <div className="section section-content purple" >
      <div className="slanted-section-decorator slanted-section-decorator--purple"/>
      <h1>Wellness Is A State Of Mind</h1>
      <p>
        A lot of people feel victim to their circumstances, and often going around
        enjoying the good times, and feeling bad during the bad times, never realizing
        that they have the choice to be well in all circumstances.
        Living an unwell life, you may find yourself going around in the same old cycles,
        with new people and places that seem to repeat the patterns of the past.
      </p>
      <p>
        Instead of accepting things like a matter of fate, you have the power to choose!
        It is my work that I have developed a way of empowering ourselves to consciously
        choose and master our life.
      </p>
    </div>

    <div className="container">
      <Divider />
      <div className="section bg--white purple">
        <h1 className="">An Integrated Approach.</h1>
        <p>
          I use MyoFascial Release, Sound Bathing, Emotional Freedom Techniques,
          and Yoga & Meditation to create just the right balance of energy into a
          harmonious space of health and wellness.
        </p>
        <p>
          Fill this section with more things that might appeal to someone to have
          them realize that this is a revolutionary way of dealing with all things.
          Not only can this work heal people from their stress and problems, but
          it can be used to connect to the deepest parts of ourselves so that we
          can find the answers we truly are looking for at the times when we need
          them the most.  Find anything right in the realm of your own existence,
          whether it be your life path, a career change, a bew business proposal,
          or personal achievments, there is something to be found from within all
          of ourselves.  The trick is to stop searching for the answers, and
          instead remove the blocks that are getting in your way.
        </p>
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
    <div className="container container--pad-top container--pad-bottom-extra bg--purple white" >
      <h1>A Seasoned Professional.</h1>
      <p>
        Gina has many years of experience in alternative health.  With over 1000+ degrees, 1M+ certifications, and a lightyear of professional client experience, there is nothing that she can't handle.  The very nature of her work is so powerful and far-reaching that there is no client
        that she cannot work with and get amazing results.
      </p>
      <p>The World Awaits You.</p>
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
  </Layout>
)

export default IndexPage
