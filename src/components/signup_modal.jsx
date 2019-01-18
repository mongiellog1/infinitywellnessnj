import React from "react";
import Button from "./button";
import ReactModal from "react-modal";
import Helmet from "react-helmet";

class SignupModal extends React.Component {
  state = { open: false };

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    return <>
      <Helmet>
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
          <style type="text/css">{`#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }`}</style>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' />
          <script type='text/javascript'>{`
            setTimeout(function () {
              (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);
            }, 1000);
          `}</script>
      </Helmet>
      <Button
        text="Join Mailing List and Receive Free Ebook on Soul Direction"
        onClick={this.openModal}
        className="bg-purple"
      />
      <ReactModal
        isOpen={this.state.open}
        onRequestClose={this.closeModal}
        className="signup-modal"
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
        shouldFocusAfterRender={false}
        style={{
          overlay: {
            backgroundColor: "rgba(60, 60, 60, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <div id="mc_embed_signup" style={{width: "20rem", borderRadius: "5px"}} tabIndex={-1}>
          <form
            action="https://InfinityWellnessNJ.us19.list-manage.com/subscribe/post?u=2fa6bb3d91a312eed4d5a5597&amp;id=a14d28535c"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll" style={{ color: "black" }}>
              <h2>Subscribe to the Infinity Wellness mailing list!</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span>
                </label>
                <input type="text" name="FNAME" className="required" id="mce-FNAME"/>
              </div>
              <div class="mc-field-group">
              	<label for="mce-LNAME">Last Name </label>
              	<input type="text" name="LNAME" class="" id="mce-LNAME" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none"}}></div>
                <div className="response" id="mce-success-response" style={{ display: "none"}}></div>
              </div>
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_2fa6bb3d91a312eed4d5a5597_a14d28535c" tabIndex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  }
}

export default SignupModal;
