import React from "react";
import { Link } from "gatsby";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";
import gina from "../../images/gina2.jpg";
import Form from "./footer_form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <h1 className="flex-row space-between" style={{ marginBottom: "3rem"}}>
        <SiteLogo />
        <div style={{ margin: "1rem 0", }}>
          <FacebookButtonRound />
          <InstagramButtonRound />
          <YoutubeButtonRound />
        </div>
      </h1>

      <div id="contact" style={{ paddingBottom: "1rem"}}>
        <div style={{ textAlign: "center" }}>
          <h2 >Get in touch!</h2>
          <div style={{ margin: "0 0 2em 0" }}>
            <FontAwesomeIcon icon="phone" size="2x" style={{ marginRight: "2rem"}}/>
            <span style={{ fontSize: 20 }}>(201) 396 - 0970</span>
          </div>
        </div>
        <Form />
      </div>
      <div>
        <ul className="purple" style={{ marginBottom: "0.25rem", display: "flex", justifyContent: "space-around"}}>
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
