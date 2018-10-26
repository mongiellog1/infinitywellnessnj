import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/index"
import Divider from "../components/page_divider";
import HeroSection from "../components/hero_section";
import Img from "gatsby-image";

import "./index.css";

const IndexPage = ({ data}) => (
  <Layout>
    <HeroSection
      title="Reclaim Wellness."
      titleClass="home-page"
      subtitle="Start living in a way that is true to your core. A life where you know who you are and your actions follow in alignment."
      background={<Img className="background-cover-parent" fluid={data.imageOne.childImageSharp.fluid} />}
    />
    <div className="slanted-section-decorator slanted-section-decorator--purple"/>
    <div className="container container--max-width">
      <div className="section" >
        <h2>Wellness Is A State Of Mind</h2>
        <p>
          A lot of us feel victim to our circumstances. We enjoy the good times in
          life, and feel bad or unwell during the bad times, never realizing that
          we can choose to be well in all times. When we give our power away to
          situations and life events, we find ourselves in the same old cycles,
          perhaps with new faces and places, but the patterns of the past repeat,
          and nothing much changes.
        </p>
        <p>
          Instead of living in this cycle of powerlessness and wondering when our day will come we can choose goodness and growth in all situations regardless of the external circumstances! And with this choosing there are no more cycles, no more repeats. We consciously choose our response to life’s events and become the master of our life.
        </p>
        <p>Welcome to wellness. A state of being, out of which, all things flow. Wellness is a state that we can tap into at any given time. Infinity Wellness is a phrase to help us remember that Wellness is of the Infinite Realm, and is not dependent upon current conditions or situations. When we live from this infinite well, happiness, that is not dependent on anything follows. </p>
      </div>
      <Divider />
      <div className="section">
        <h2 className="">An Integrated Approach</h2>
        <p>
          I use MyoFascial Release, Emotional Freedom Techniques, Sound Baths, and Yoga & Meditation as a multi-pronged approach, creating a balanced harmonious space for health and wellness to rebirth itself and thrive.
        </p>
        <p>
          These chosen healing modalities all tap into the non-linear, intuitive aspects of our lives so that we can ask and answer questions from a place beyond the mind. The mind is limited and can only stretch so far. Our questions and answers therefore need to be directed and received from outside of the everyday thinking mind.
        </p>
        <p>
          Not only can this non-linear approach help us with our stress and problems,  it can be used to connect to the deepest parts of ourselves so that we can find the questions and answers we truly are looking for at the times when we need them the most.
        </p>
        <p>
          The realm of  intuitive, imaginative wellness can help us form beneficial and appropriate questions, and the appropriate questions will give us the best answers. Whether it be a question about life path, past trauma, career change, new business proposal, or personal achievements, things come together when we begin with the right question. The key is that we stop searching for questions and answers of the mind, and instead unblock and lift the floodgates to what is beyond the mind.
        </p>
        <p>Check out how I create a healing space with my <Link className="inline-anchor" to="/healing-tools">healing tools</Link></p>
      </div>
      <Divider />
      <div className="section">
        <h2>A Seasoned Professional</h2>
        <p>
          Feeling so unwell in my teen years is what began my search for health and wellness. Over the next fifteen years I accumulated a lot of information and experienced a lot of healing modalities. While all that I learned and experienced over this time period was an incredibly valuable and necessary part of what I use and offer today, the healing modalities I learned in my early thirties are what took me to the places I was looking to go.
        </p>
        <p>
          These same modalities I used and still use for my own wellness are what I bring to clients. I found the tools that I could apply across all areas of life and in all situations with levels of effectiveness I did not find elsewhere. As new challenges appear in life, which they always do, these select modalities are the ones I continue to turn to for comfort, insight, and lasting change.
        </p>
        <p>
          I have experienced and risen above a great many physical and emotional challenges in this lifetime, as well as helped many clients do the same. The very nature of coming together to heal is powerful and far-reaching, there is no issue too big or small, amazing results can be realized. Wellness Awaits Us All.
        </p>
        <p>
          My education and training is as follows: I hold a BA in Psychology, MA in Environmental Studies/Environmental Education, multiple Yoga and Meditation certifications including that of being an ordained Yoga Minister, am a Licensed Massage Therapist, have hundreds of hours of Myofascial Release training, am trained and mentored in Emotional Freedom Techniques, trained as a detox specialist by Dr. Robert Morse, as well as trained in the raw food lifestyle from expert Viktoris Kulvinskas, and energy and herbal expert Margabandhu Martarano.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "flowers2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
