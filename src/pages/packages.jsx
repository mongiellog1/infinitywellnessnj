import React from "react";
import Layout from "../components/layout/index";
import Banner from "../components/banner";
import Divider from "../components/page_divider";
import ContactCta from "../components/contact_gina_cta";
import Section from "../components/section";
import scrollToElement from "scroll-to-element";

class PackagesPage extends React.Component {
  componentDidMount() {
    const { hash } = this.props.location;
    if (hash) {
      scrollToElement(hash, { duration: 100 } )
    }
  }

  render = () => (
    <Layout>
      <Banner flag="packages" />
      <div className="container container--max-width">
        <Section
          title={"Packages"}
          classes="big-lines"
          subsections={[`The quickest way to transform your life is to commit to something beneficial and then see it through. By choosing one of these packages and committing to it, you are increasing your chances exponentially to realize life-changing breakthroughs and the results you desire.`]}
          CTA={true}
        />
        <Divider />
        <div className="section page-anchor__container">
          <div id="basic-package" className="page-anchor__anchor"/>
          <h2>Basic Series: Beginner Package</h2>
          <h3 className="green">Taste Freedom!</h3>
          <p className="light-green">Session Intervals: 6 session hours over three consecutive weeks (3 meetings)</p>
          <p>
            This program is for those wanting to experience a deepening within themselves, to reveal what’s really going on with a current issue or feelings inside.
          </p>
          <p>
            Healing is a process and when we treat it as such we give ourselves the chance to heal, and to reveal how our current situation is showing up for our benefit. So common is the mindset today that healing is a one time event, like a revolving door. This keeps us at a surface level.  It can even be a disempowering act. To see healing as a process will foster a new relationship with our thoughts, feelings, and life’s many situations.
          </p>
          <p>
            This series goes deep in a short amount of time, and because we meet for three consecutive weeks, two sessions each time, it is offered for less than the cost for six individual sessions. A great benefit being the intensity of the six sessions in a short period of time. It’s like a mini-intensive with powerful results.
          </p>
          <p>
            These six sessions offer insights, a shift in relationship with self and others, and most importantly will lay the groundwork for establishing a deep practice that can be continued for life.
          </p>
          <div className="package-series-list">
            <h3>Who this series is for:</h3>
            <ul>
              <li>You are a new client</li>
              <li>You feel unfulfilled in life, job, or relationships</li>
              <li>You experience physical or emotional pain</li>
              <li>You are interested in deepening the mind/body connection</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>Result:</h3>
            <ul>
              <li>Increased body/mind awareness</li>
              <li>New perspective of current challenges</li>
              <li>Less stress</li>
              <li>Clarity on next steps</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>You Receive:</h3>
            <ul>
              <li>(3) Myofascial release (MFR) sessions</li>
              <li>(3) Emotional freedom techniques (EFT) sessions. <br/>MFR and EFT sessions are back to back, for three consecutive weeks</li>
              <li>Home play techniques to increase wellness in between sessions</li>
            </ul>
          </div>

          <p className="light-green">Start here if you are in the beginnings of wanting to grow your relationship with your inner self!</p>
          <ContactCta />
        </div>

        <Divider showLogo={false} />
        <div className="section page-anchor__container">
          <div id="transformation-package" className="page-anchor__anchor"/>
          <h2>Transformation Package</h2>
          <h3 className="green">Release, Reset, Renew!</h3>
          <p className="light-green">Session Intervals:10 session hours over ten consecutive weeks (10 meetings)</p>

          <p>
            Experience Greater Health and Wellness; An Opportunity to Transform!
          </p>
          <p>
            This program is created for those ready to go deep with a particular issue
            (physical/mental/spiritual) so that lessons can be seen, roots found,
            and symptoms transformed. This program is also be beneficial for those
            interested in deepening layers of awareness and inner-understanding.
            The below ten sessions occur over the course of a three month period or
            less, so as to keep the energy and intensity. This commitment in a set
            time frame is wonderfully beneficial for the client and helps the process take form.
          </p>

          <div className="package-series-list">
            <h3>Who this series is for:</h3>
            <ul>
              <li>You are ready to explore a physical or emotional issue at a new level of depth</li>
              <li>You are ready to commit to a new level of well being</li>
              <li>You are interested in shifting a habitual pattern</li>
              <li>You would like to know yourself on a deeper level</li>
              <li>You would like to transform a relationship with yourself or others</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>Result:</h3>
            <ul>
              <li>A transformation of the original issue</li>
              <li>Expanded self awareness</li>
              <li>Clear path of action for continued wellness</li>
              <li>Greater depth, clarity, and intuition</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>You Receive:</h3>
            <ul>
              <li>(2) Non-linear intuition sessions (in nature if time and circumstance allows)<span className="green">*</span> </li>
              <li>(2) Myofascial release sessions</li>
              <li>(2) Emotional freedom techniques sessions</li>
              <li>(2) Diet and lifestyle sessions</li>
              <li>(2) Yoga and meditation sessions</li>
              <li>Homeplay techniques to increase wellness in between sessions</li>
            </ul>
          </div>
          <p>
            <span className="green">*</span> We use journaling, imagery, metaphors,
            and simple nature practices to activate the non-linear creative brain.
            Like bookends, the first and last sessions of the Transformation Series
            hold together all that's inside. The first session gives meaning and
            intention for what’s to come and the last session helps us reflect
            on all that has come, as well as it sets the tone for lasting wellness.
          </p>
          <p className="light-green">
            Start here  if you are ready for major change, deep work, healing from childhood wounds, and all the benefits that come from taking full responsibility for your life's creations!
          </p>
          <ContactCta />
        </div>

        <Divider showLogo={false} />
        <div className="section page-anchor__container">
          <div id="inner-divine-mothering-package" className="page-anchor__anchor"/>
          <h2>Divine Inner Mothering Package: Loving Our Inner Child</h2>
          <h3 className="green">Shadow and Light Unite!</h3>
          <p className="light-green">Session Intervals: 27 session hours over twelve consecutive weeks (15 meetings)</p>
          <p>In this series, we connect with the parts of us that have been repressed, left behind, hurt and hidden. What uprises is our inner child, an innocent, sweet-hearted being who got lost in the ups and downs of life and life’s situations.</p>
          <p>With our own hand at being divine mother, we nurture the inner child into a place of love and acceptance as we integrate all the fragmented pieces of our life back into the whole of who we are. Acting as a divine mother we care, love, provide, teach, nurture, and celebrate ourselves with infinite and powerful energy our whole lives through.</p>
          <p>Our birth mothers and fathers provided this care when we were young, and acted as the physical manifestation of the unseen mother aspect. Whether our caregivers filled this role with mild, medium, or intense enthusiasm, likely there were parts of us that went unseen or unheard, or parts that felt frightened, hurt, misunderstood, or traumatized. There is so much that goes on inside a child’s mind and heart that is inexpressible with that child’s intelligence, vocabulary, and emotional maturity.</p>
          <p>The many disowned parts of us that coalesce into our inner child are but hidden treasures within us, they are our emotional needs unmet, waiting to be met, by us, their Beloved Parent. To touch the child within, to hear and know these unmet needs, and to build a conscious relationship between the inner child and inner mother is a union like no other. It forms a bond that can help us in every situation. When our adult self and awareness unite with the pain of the child, without judgement, we automatically feel cared for, seen, heard, loved, and befriended.</p>
          <p>We reveal what has long been buried to discover the teachings and integrate the lessons and gifts that only the inner child can so innocently illumine.</p>
          <div className="package-series-list">
            <h3>Who this series is for:</h3>
            <ul>
              <li>You are aware of self defeating habits and would like to shift them</li>
              <li>You are interested in exploring shadow aspects for fuller integration of self</li>
              <li>You feel grief, shame, anger, fear, or guilt</li>
              <li>You would like to enjoy better relationships with yourself and others</li>
              <li>You would like to open up to your inner gifts and talents</li>
              <li>You would like to be free from the confines of your emotional state</li>
              <li>You would like to increase your intuitive abilities</li>
              <li>You feel called to heal childhood trauma</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>Result:</h3>
            <ul>
              <li>Increased emotional awareness</li>
              <li>Increased depth of clarity</li>
              <li>Greater confidence</li>
              <li>Greater peace with the people in your life</li>
              <li>Greater knowing of your role as co-creator</li>
              <li>Increased ability to address situations</li>
              <li>Increased ability to choose what is in alignment with you, and to walk away lovingly from what is not</li>
              <li>Increased ability for intimacy</li>
              <li>Heart energy expansion</li>
              <li>Embodiment of the divine feminine</li>
            </ul>
          </div>
          <div className="package-series-list">
            <h3>You Receive:</h3>
            <p style={{ marginBottom: "0.25rem"}}>Three modules each consisting of:</p>
            <ul>
              <li>right brain intuition session</li>
              <li>myofascial release session</li>
              <li>emotional freedom techniques session</li>
              <li>sound healing (tuning forks) session</li>
              <li>VIP day, a 3.5 hour outing for your most innocent and playful aspect of your inner child</li>
              <li>home play techniques to increase wellness in between sessions</li>
            </ul>
          </div>
        </div>
        <ContactCta />
      </div>
    </Layout>
  );
}

export default PackagesPage;
