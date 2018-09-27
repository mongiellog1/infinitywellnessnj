import React from 'react'
import hamburger from "../images/hamburger.png";
import SiteLogo from "./site_logo";

const Header = () => (
  <header className="header-container">
    <SiteLogo />
    <img className="sm-img" src={hamburger} alt="hamburger menu" />
  </header>
);

export default Header
