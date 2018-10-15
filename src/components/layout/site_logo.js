import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo2--justin-porro.png"

const SiteLogo = () => (
  <div className="site-logo">
    <Link to="/" className="link" >
      <img src={logo} alt="" />
    </Link>
  </div>
);

export default SiteLogo;
