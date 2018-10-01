import React from "react";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";
import gina from "../images/gina2.jpg";
import Form from "./footer_form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <div className="footer">
    <h1 className="flex-row space-between" style={{ marginBottom: "3rem"}}>
      <SiteLogo />
      <div style={{ margin: "1rem 0", }}>
        <FacebookButtonRound />
        <InstagramButtonRound />
        <YoutubeButtonRound />
      </div>
    </h1>

    <div style={{ textAlign: "center" }}>
      <h2>Get in touch with Gina!</h2>
      <div style={{ margin: "0 0 2em 0" }}>
        <FontAwesomeIcon icon="phone" size="2x" style={{ marginRight: "1rem"}}/>
        <span>(201) 396 - 0970</span>
      </div>
    </div>
    <Form />

    <div>
      <ul>
        <li>
          About
        </li>
        <li>
          Services
        </li>
        <li>
          Contact
        </li>
        <li>
          Events
        </li>
      </ul>
    </div>

    <div className="footer-about-card">
      <img src={gina} />
      <p>
        Here's an about section for Gina.  This just says a couple nice things, and wishes the reader a wealth of health and abundance.  Add something that will help the viewer feel comfortable and safe contacting you.
      </p>
    </div>

  </div>
);

export default Footer;
