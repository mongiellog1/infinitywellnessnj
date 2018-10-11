import React from "react";
import Layout from "../components/layout/index"
import { Link } from "gatsby";
import "./healing-tools.css";

const HealingTools = () => (
  <Layout>
    <div className="healing-tools-section">
      <article className="container container--pad-top light-purple bg--light-green2" style={{ zIndex: 2 }}>
        <h1 className="title purple">Work With Me!</h1>
        <p className="hero-text">When's the last time you did <i style={{ letterSpacing: "1.5px" }}>anything</i> that fixed <em>ALL</em> of your problems?</p>
        <p><span className="italic">*hint*</span> <b className="hero-text light-purple2">Never!</b></p>
        <p style={{ marginBottom: "0.25rem"}}>Because:</p>
          <ul style={{ marginLeft: "2rem"}}>
            <li>A) All of your problems will never be fixed and</li>
            <li>B) there's no one-size-fits all cure to anything.</li>
          </ul>
      </article>
      <article className="container section">
        <div className="slanted-section-decorator slanted-section-decorator--gold"/>
        <h1 className="light-green">Develop Tools</h1>
        <p>
          That's why I have chosen the tools that are the absolute most effective at dealing with life, consistenly, day-in and day-out, so that
          when something goes on you have the capabilities to handle it in a new way that provides insight and meaningful direction
          to guide you in your next steps.
        </p>
        <p>Life is painful, and it never stops!!</p>
        <p>
          Cavemen probably thought that discovering fire would put an end to all their troubles, but I bet
          There was more things to deal with later on in life.  But, what did happen was they evolved, and new things became possible.
          THIS, is the realm that i work in, where I lead you through the occurences of your life so you can
          see and feel them for what they are, take the insight and produce a doorway through your own evolution.
        </p>
        <p>
          The beautiful thing is, that it never stops.  Some people realize this unconsciously, and so they never take any steps forward.
          It's great, because they denounce themselves from having to do any work, but they are stuck forever in their own stagnant evolutionary phase.
        </p>
        <p>
          SO! If you are ready to see your life brand new and step out of your comfort zone into a place like none ever before where you can literally
          be the master of your own journey and create the life you want, then you are my ideal client.
        </p>
        <p>
          Below is an outline of the tools that I use, and the packages I offer to give you the best balance of insight, clarity, and depth into your life.
        </p>

        <button>Work with Gina</button>
      </article>
      <article className="container">
        <h1 className="title purple">Healing Tools</h1>
        <div>
          <Link to="myofascial-release"><button>Myofascial Release</button></Link>
          <p>
            For deep body healing, resolving of chronic pains, releasing of tension.
          </p>
        </div>

        <div>
          <Link to="emotional-freedom-techniques"><button>Emotional Freedom Technique (Tapping)</button></Link>
          <p>
            For letting go of the past, strengthening empowering beliefs, and opening up the doors for creativity, vitality, and overall wellness.
          </p>
        </div>

        <div>
          <Link to="yoga-meditation"><button>Yoga & Meditation</button></Link>
          <p>
            Reconnecting with the rhythym of life, increasing your capacity to breathe in each moment and take all there is in life.
          </p>
        </div>

        <div>
          <Link to="sound-therapy"><button>Sound Therapy & Gratitude</button></Link>
          <p>
            For a pleasure beyond delight and taking a dive into the most serene places of your mind where your most harmonious self resides.
          </p>
        </div>
      </article>
      <article className="container ">
        <h1 className="title purple">Business Programs</h1>
        <p>
         &lt;My skills are very diverse and I have a broad range of experience that allows me
          to work well with any number or type of people.&gt;
          As a teacher for over 5 years at yoga life society and owrking with kids, adults and seniors, I have used my skills
          in many settings to overcome borders between people.
          For this reason, I offer other packages and custom-tailer services to businesses and other organizations to
          do anything from increase productivity, to creating pleasant atmospheres to work in,
          and giving employees a reason to enjoy work.
          <Link to="/business-packages">Click here </Link> to see about my business packages.
        </p>
      </article>
    </div>
  </Layout>
);

export default HealingTools;
