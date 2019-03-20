import React from "react";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";
import Form from "./footer_form";
import FooterLinks from "./footer_links";

const Footer = () => (
  <div id="footer">
    <div className="container--max-width">
      <div className="footer-grid">
        <div className="grid__element grid-one">
          <SiteLogo />
        </div>
        <div className="grid__element grid-two social-buttons">
          <FacebookButtonRound />
          <InstagramButtonRound />
          <YoutubeButtonRound />
        </div>
      </div>

      <div  style={{ paddingBottom: "1rem"}}>
        <div style={{ textAlign: "center" }}>
          <h1>Let's Connect.</h1>
          <p className="form-container">
            Whether you're in the middle of a personal struggle, curious about
            inner transformation and expansion, or stressing about a business
            challenge, together we can create a space that will bring insight,
            clarity, wellness, and next steps.
          </p>
          <div>
            <span style={{ fontSize: "1.2rem" }}>201.396.0909</span>
          </div>
        </div>

        <Form />
      </div>
      <FooterLinks />
    </div>
  </div>
);

export default Footer;
