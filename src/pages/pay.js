import React from "react";
import Layout from "../components/layout/index";
import PageDivider from "../components/page_divider";
import Testimonial from "../components/testimonial";
import Banner from "../components/banner";

const PayPage = () => (
  <Layout>
    <Banner flag="pay" />
    <div className="container container--pad-top">
      <div className="section">
        <h1 className="purple">Single Sessions</h1>
        <div style={{ fontSize: "20px", paddingBottom: "1rem" }}>
          <div>Myofasical Release</div>
          <div>Emotional Freedom Techniques</div>
          <div>Yoga & Meditation</div>
          <div>Sound Healing & Gratitude</div>
        </div>
        <h3>Any Single Session - <span className="green">$120</span></h3>
        <p></p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="7RK4SYFN86H5E" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="Purchase Single Myo Fascial Release (MFR) session" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <PageDivider />
      <div className="section">
        <h1 className="purple">Series Packages</h1>
        <h2>Basic Package</h2>
        <p>If you're just getting started but you know you are ready to start the road to mastery of your own life, this basic series
          will get you equipped to step out of old habits and usher in each day anew like never before.
          For more information <a href="/healing-tools">click here</a>
        </p>
        <h3>Price - <span className="green">$360</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="FU97Y7HA9GEPU" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <PageDivider showLogo={false} />
      <div className="section">
        <h2>Transformation Package</h2>
        <p>Go deep with this 10 session package to totally and completely transform your current circumstances and get a refreshed, renewed, reinvigorated sense of life and possibility.
          For more information <a href="/healing-tools">click here</a>
        </p>
        <h3>Price - <span className="green">$1080</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="88N98VWWPFWHE" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="Purchase Transformation Series Package" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <PageDivider showLogo={false} />
      <div className="section">
        <h2>Divine Mothering</h2>
        <p>Three months of coaching and mentorship through an amazing discovery of our own ability to become whole and complete.
          For more information on this revolutionary, life-changing package <a href="/healing-tools">click here</a>
        </p>
        <h3>Price - <span className="green">$3240</span></h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="9SVZXTPMSLWNS" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="Purchase Divine Mothering Package" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
    <Testimonial />
  </Layout>
);

export default PayPage;
