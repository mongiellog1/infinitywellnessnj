import React from "react";
import { Link } from "gatsby";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";
import Form from "./footer_form";

const Footer = () => (
  <div id="contact" className="footer">
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
          <h2>Let's Connect.</h2>
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
      <div>
        <ul className="purple" style={{ marginBottom: "0.25rem", display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to="about">
              About
            </Link>
          </li>
          <li>
            <Link to="healing-tools">
              Healing Tools
            </Link>
          </li>
          <li>
            <Link to="packages">
              Packages
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
