import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo_no_subtitle.png"

const SiteLogo = () => (
  <div className="site-logo">
    <Link to="/" className="link" >
      <img src={logo} alt="" />
    </Link>
  </div>
);

export default SiteLogo;
