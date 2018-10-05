import React from 'react'
import SiteLogo from "./site_logo";
import MobileMenu from "./mobile_menu";

const Header = () => (
  <header className="header-container">
    <SiteLogo />
    <MobileMenu />
  </header>
);

export default Header
