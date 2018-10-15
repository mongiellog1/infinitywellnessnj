import React from "react";
import { Link } from "gatsby";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";
import Form from "./footer_form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <div id="contact" className="footer">
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
        <div style={{ margin: "0 0 2rem 0" }}>
          <FontAwesomeIcon icon="phone" size="2x" style={{ marginRight: "2rem" }}/>
          <span style={{ fontSize: "1.2rem" }}>+1 <span style={{ margin: "0 0.35rem"}}>(201)</span> 396 - 0970</span>
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
);

export default Footer;
