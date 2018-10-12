import React from "react";

const Button = ({ text }) => (
  <button>
    {text}
    <span style={{ fontWeight: "bold", color: "black", position: "absolute", display: "block", width: "100%", height: "100%", top: 0, left: 0, zIndex: 10, padding: "0.5rem 1rem" }}>{text}</span>
  </button>
);

export default Button;
