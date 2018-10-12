import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./social_buttons.css";

library.add(fab, fas);

const buttonFactory = (style, iconType, address) => () => (
  <StaticQuery
    query={graphql`
      query SocialMediaQuery {
        site {
          siteMetadata {
            socialMediaLinks {
              facebook
              youtube
              instagram
            }
          }
        }
      }`
    }
    render={ data  => (
      <a href={data.site.siteMetadata.socialMediaLinks[address]} >
        <div className={`${iconType} social-button`} style={style}>
          <FontAwesomeIcon icon={["fab", iconType]} className="social-icon" />
        </div>
      </a>
    )}
  />
);

export const FacebookButtonRound = buttonFactory({ backgroundColor: "blue" }, "facebook-f", "facebook");
export const InstagramButtonRound = buttonFactory({ backgroundColor: "gray" }, "instagram", "instagram");
export const YoutubeButtonRound = buttonFactory({ backgroundColor: "red" }, "youtube", "youtube");
