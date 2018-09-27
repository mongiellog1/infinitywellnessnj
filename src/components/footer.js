import React from "react";
import { FacebookButtonRound, InstagramButtonRound, YoutubeButtonRound } from "./social_buttons";
import SiteLogo from "./site_logo";

const Footer = () => (
  <div style={{ height: "250px", padding: "1em", }}>
    <SiteLogo />
    <div style={{ margin: "1em 0", }}>
      <FacebookButtonRound />
      <InstagramButtonRound />
      <YoutubeButtonRound />
    </div>
  </div>
);

export default Footer;
