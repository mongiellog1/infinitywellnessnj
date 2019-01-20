import React from "react";

const noop = function() {};

const Button = ({ text, onClick = noop, className = "" }) => (
  <button className={`button ${ className}`} onClick={onClick}>
    {text}
    <span>{text}</span>
  </button>
);

export default Button;
