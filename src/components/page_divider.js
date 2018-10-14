import React from "react";
import logoFile from "../images/logo.png";

const styles = {
  container: {
    width: "100%",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3rem"
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

const PageDivider = ({ showLines=true, showLogo=true }) => {
  const linesClass = showLines ? "bg--green" : "";
  const logoElement = showLogo && <img src={logoFile} style={styles.img} />;
  const lineElement = <div className={linesClass} style={styles.lines} />

  return (
    <div style={styles.container}>
      {lineElement}
      {logoElement}
      {lineElement}
    </div>
  );
};


export default PageDivider;
