import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import IWLogo from "../../images/logo.png"

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title,
            subTitle
          }
        }
      }
    `}
    render = {({ site: { siteMetadata: { title, subTitle }}}) => (
      <Link to="/" className="link" >
        <div className="flex--row purple">
          <img src={IWLogo} className="header-logo" alt="Infinity Wellness Logo"/>
          <div className="logo-text">
              <h1 className="site-title">
                <div>
                  {title.split(" ")[0].toUpperCase()}
                </div>
                <div>
                  {title.split(" ")[1].toUpperCase()}
                </div>
              </h1>
            <h4 className="logo__subtitle mobile-hidden">
              {subTitle}
            </h4>
          </div>
        </div>
      </Link>
    )}
  />
);

export default SiteLogo;
