import React from "react";
import logo from "../images/logo.png";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "3rem"
  },
  lines: {
    width: "calc(50% - 5rem)",
    height: 4,
  },
  img: {
    width: "3rem",
    height: "3rem"
  },
}

const PageDivider = ({ showLines=true, showLogo=true }) => (
  <div style={styles.container}>
    <div className={showLines ? "bg--green" : ""} style={styles.lines} />
    {showLogo && <img src={logo} style={styles.img} />}
    <div className={showLines ? "bg--green" : ""} style={styles.lines} />
  </div>
);


export default PageDivider;
