import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./social_buttons.css";

library.add(fab, fas);

const buttonStyle = {
  borderRadius: "100%",
  position: "relative",
  display: "inline-block",
  marginRight: "0.75rem",
  width: 32,
  height: 32,
  cursor: "pointer",
};

const iconStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: 16,
};

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
        <div className={iconType} style={{ ...buttonStyle,  ...style }}>
          <FontAwesomeIcon icon={["fab", iconType]} style={iconStyle} />
        </div>
      </a>
    )}
  />
);

export const FacebookButtonRound = buttonFactory({ backgroundColor: "blue" }, "facebook-f", "facebook");
export const InstagramButtonRound = buttonFactory({ backgroundColor: "gray" }, "instagram", "instagram");
export const YoutubeButtonRound = buttonFactory({ backgroundColor: "red" }, "youtube", "youtube");
