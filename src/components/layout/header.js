import React from 'react'
import SiteLogo from "./site_logo";
import MobileMenu from "./mobile_menu";

const Header = () => (
  <header className="header">
    <div className="header__inner_container">
      <SiteLogo />
      <MobileMenu />
    </div>
  </header>
);

export default Header
