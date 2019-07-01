import React from "react";
import Layout from "../components/layout/index"
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "../components/button";
import scrollToElement from "scroll-to-element";
import Divider from "../components/page_divider";
import { Testimonial0, Testimonial3 } from "../components/testimonial";
import "./healing-tools.css";
import HeroSection from "../components/hero_section";

const HealingTools = ({ data }) => (
  <Layout>
    <div className="healing-tools-section">
      <HeroSection
        title="Life Long Healing Tools"
        subtitle="Have you ever longed for tools that would never dull, and instead sharpen with use?"
        paragraphs={["If YES, then allow your journey to begin. These healing tools when used and practiced can be applied to all of life’s challenges."]}
        Background={<Img style={{ background: "fff"}} className="background-cover-parent" fluid={data.image.childImageSharp.fluid} />}
      />

      <div className="slanted-section-decorator slanted-section-decorator--green"/>
      <div className="container container--max-width">
        <article className="section">
          <h2>Gina's Chosen Tools</h2>
          <p>
            I have chosen tools that are incredibly effective at dealing with life,
            consistently, day-in and day-out, so that when something comes up we have
            the capability to handle it in a way that provides insight and meaningful
            direction, guiding our next steps.
          </p>
          <p>
            Challenges and pain come and go in life, and will continue as such!
            Suffering along with them is optional!!
          </p>
          <p>
            Cavemen and cavewomen probably thought that discovering fire would
            put an end to all their troubles. It’s the nature of the mind to think
            that any one external thing will solve all of our problems forever.
            This doesn’t happen, because it would halt our evolution, our expanding
            consciousness, and the realm of infinite possibility. Cave people surely
            soon realized there were more challenges to come.
          </p>
          <p>
            What did happen though was the cavepeople evolved, and because they
            mastered fire, they became ready for their next challenge, their next
            opportunity for growth. THIS, is the realm that I work in, where new
            things become possible, where growth is inevitable, and challenges are
            opportunities. We evolve and grow in ways that benefit us and the collective.
            New challenges will always come, but with them comes opportunity,
            expanded seeing and a blossoming of who you are.
          </p>
          <p>
            I lead you through the occurences of your life with new eyes so you
            can see and feel past events for the gifts they are, receive and
            integrate with the lesson or insight, and identify a doorway through
            your own evolution. Everything that comes to us, no matter how we
            judge it as good or bad, is truly here for our benefit.
          </p>
          <p>
            The tools I offer help to transform coals into diamonds; grief into gold.
          </p>
          <p>
            SO! If you are ready for diamonds and gold, ready to see your life as
            brand new and step out of your comfort zone into a place like never
            before, where you can literally be the master of your own journey and
            create the life you want, then I would LOVE to work with YOU!
          </p>
          <p>
            Below is an outline of the tools that I use, and the packages I offer
            to give you the best balance of depth, insight, and clarity into your life.
          </p>
          <Button text="Work with Gina" onClick={() => scrollToElement("#footer", { duration: "750" })} />
        </article>
      </div>
      <Testimonial0 />
      <div className="container container--max-width">
        <article>
          <div className="section healing-tools-teaser">
            <h2>Myofascial Release</h2>
            <p>
              For deep body healing, resolving of chronic pains, releasing of tension.
            </p>
            <ul>
              <li>Deep bodymind healing</li>
              <li>Resolution of chronic pains</li>
              <li>Release of tension and strain</li>
              <li>Subtle insights</li>
              <li>New levels of awareness</li>
              <li>Healing of past trauma </li>
            </ul>
            <Link to="myofascial-release"><Button text="Myofascial Release" /></Link>
          </div>
          <Divider />
          <div className="section healing-tools-teaser">
            <h2>Emotional Freedom Techniques</h2>
            <p>
              For letting go of the past, strengthening empowering beliefs, and
              opening up the doors for creativity, vitality, and overall wellness.
            </p>
            <ul>
              <li>An integration of the lessons from past events</li>
              <li>Insight and release of detrimental feelings around past trauma</li>
              <li>Releases negative mind scripts</li>
              <li>Grows and strengthens love and acceptance for oneself</li>
              <li>Opens up doors for creativity, vitality, and overall wellness</li>
            </ul>
            <Link to="emotional-freedom-techniques"><Button text="Emotional Freedom Techniques"/></Link>
          </div>
          <Divider />
          <div className="section healing-tools-teaser">
            <h2>Yoga & Meditation</h2>
            <p>
              Reconnecting with the rhythym of life, increasing your capacity to breathe in each moment and take all there is in life.
            </p>
            <ul>
              <li>Loosens the body</li>
              <li>Calms the mind</li>
              <li>Reconnect us with the rhythm of life</li>
              <li>Helps us to discern suffering from pain, thereby ending suffering</li>
              <li>Increases our capacity to breathe in each moment and receive all that is here in life</li>
            </ul>
            <Link to="yoga-meditation"><Button text="Yoga & Meditation" /></Link>
          </div>

          <Divider />
          <div className="section healing-tools-teaser">
            <h2>Sound Healing & Gratitude</h2>
            <p>
              For a pleasure beyond delight and taking a dive into the most serene
              places of your mind where your most harmonious self resides.
            </p>
            <ul>
              <li>A pleasure beyond delight</li>
              <li>Takes us into the most serene of places where our most harmonious self resides</li>
              <li>It spikes nitric oxide levels which balances the autonomic nervous
                system and signals a natural release of anti-bacterial and anti-virals
                on a microcellular level</li>
              <li>Gratitude is strongly linked to mental health and life satisfaction</li>

            </ul>
            <Link to="sound-therapy"><Button text="Sound Therapy & Gratitude"/></Link>
          </div>
        </article>
      </div>
        <Testimonial3 />
      <div className="container container--max-width">
        <article className="section ">
          <h2 className="title purple">Business Programs</h2>
          <p>
            My skills are diverse, and I have a broad range of experiences that allow
            me to work well with multiple communities. I have been an environmental
            educator since 2005, and a yoga teacher since 2009. I have worked with
            and taught people ages 2-90+, worked in affluent and low-income neighborhoods,
            taught in rural and urban settings, corporate and park atmospheres,
            worked with those in recovery, and have worked with all ranges of
            special needs including autistic, behaviorally challenged, and cerebral
            palsy populations. I have used my skills in many settings to reach
            and inspire those present.
          </p>
          <p>
            Because of my ability and effectiveness to reach and help a large range of people and communities,
            I offer packages and custom-tailor services to businesses and other organizations to do
            anything from increasing productivity, to resolving conflict, to creating pleasant work
            atmospheres, to giving employees a reason to enjoy work.
          </p>
          <p>
            <span className="inline-anchor" onClick={() => scrollToElement("#footer", { duration: "750" })}>Connect with me</span> to customize your program.
          </p>
        </article>
      </div>
    </div>
  </Layout>
);

export default HealingTools;

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "gina/067.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
