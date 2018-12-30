import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/index";
import Divider from "../components/page_divider";
import { Testimonial1 } from "../components/testimonial";
import HeroSection from "../components/hero_section";

const styles = {
  ul: {
    fontSize: "20px",
    listStyleType: "disc",
    marginLeft: "1.5rem",
  },
  li: {
    marginBottom: 0,
    lineHeight: "24px"
  }
};

const PayPage = () => (
  <Layout>
    <HeroSection
      title="Services"
      Background={<div className="background-cover-parent background--services-hero" />}
    />
    <div className="slanted-section-decorator slanted-section-decorator--eft"/>
    <div className="container container--max-width">
      <div className="section">
        <h2 className="purple">Single Sessions</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Myofascial Release</li>
          <li style={styles.li}>Emotional Freedom Techniques</li>
          <li style={styles.li}>Yoga & Meditation</li>
          <li style={styles.li}>Sound Healing & Gratitude</li>
        </ul>
        <h3>Any Single Session - <span className="green">$120</span></h3>
        <p></p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="9J9BD37J8PGZY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>

      <Divider showLogo={false} />

      <div className="section">
        <div className="page-anchor__container">
          <div id="group-eft" className="page-anchor__anchor"/>
        </div>
        <h2 className="purple">Group EFT Class</h2>
        <p>
          Group EFT classes are extremely powerful and versatile enough to
          give every participant a chance to tap into their underlying patterns and clear up extra space!
        </p>
        <p>
          For more information, visit the <Link className="inline-anchor"to="/emotional-freedom-techniques#group-eft">EFT page!</Link>
        </p>
        <h3>Price - <span className="green">$153</span></h3>
        <p></p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="UWSBZU482BKQW" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>

      <Divider showLogo={false} />

      <div className="page-anchor__container">
        <div id="basic-package" className="page-anchor__anchor"/>
      </div>
      <div className="section">
        <h2>Basic Series: Beginner Package</h2>
        <p>
          If you’re curious or just starting to see how underlying aspects are
          driving your behavior, your unrest, and your life situations, and you’d
          like to be the driver instead, then this basic series is for you.
        </p>
        <p>
          For more information on the Basic Series Package <Link className="inline-anchor" to="/packages#basic-package">click here</Link>
        </p>
        <h3>Price - <span className="green">$560</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="E3XS8KYQPGF7W" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </div>
      <Divider showLogo={false} />
      <div className="page-anchor__container">
        <div id="transformation-package" className="page-anchor__anchor"/>
      </div>
      <div className="section">
        <h2>Transformation Package</h2>
        <p>
          Go deep with this 10 session package to transform your current
          circumstances and get a refreshed, renewed, reinvigorated sense of
          life and possibility.  The series will provide the door to step out
          of old habits and usher in each day anew like never before.
        </p>
        <p>
          For more information on the Transformation Package <Link className="inline-anchor" to="/packages#transformation-package">click here</Link>
        </p>
        <h3>Price - <span className="green">$1080</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="PTJLKQWVJNVUG" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </div>
      <Divider showLogo={false} />
      <div className="page-anchor__container">
        <div id="divine-inner-child-package" className="page-anchor__anchor"/>
      </div>
      <div className="section">
        <h2>Divine Inner Mothering Package</h2>
        <p>
          Three months of coaching and mentorship through an amazing discovery of
          your own ability to live whole and complete. In Divine Mothering we
          shine light on and integrate with shadow aspects which automatically
          increases consciousness. From here we live without fear, and have the
          tools to see ourselves through any situation.
        </p>
        <p>
          For more information on this revolutionary, life-changing package <Link className="inline-anchor" to="/packages#inner-divine-mothering-package">click here</Link>
        </p>
        <h3>Price - <span className="green">$3240</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="DZEA8B4Z6VASW" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </div>
    </div>
    <Testimonial1 />
  </Layout>
);

export default PayPage;
