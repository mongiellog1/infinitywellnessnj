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
  bar: {
    width: "calc(50% - 5rem)",
    height: "0.25rem",
  },
  img: {
    width: "3rem",
    height: "3rem"
  }
}

const PageDivider = ({ showLines=true, showLogo=true }) => (
  <div style={styles.container}>
    <div className={showLines ? "bg-green" : ""} style={styles.bar}/>
    {showLogo && <img src={logo} style={styles.img} />}
    <div className={showLines ? "bg-green" : ""} style={styles.bar}/>
  </div>
);

export default PageDivider;
