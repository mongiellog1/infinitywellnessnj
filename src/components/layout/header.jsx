import React from 'react'
import SiteLogo from "./site_logo";
import MobileMenu from "./mobile_menu";
import DesktopMenu from "./desktop_menu";
import ReactHeadroom from "react-headroom";

const Header = () => (
  <ReactHeadroom>
    <header className="header">
      <div className="header__inner_container">
        <SiteLogo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  </ReactHeadroom>
);

export default Header
