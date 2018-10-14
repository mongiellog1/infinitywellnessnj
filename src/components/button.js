import React from "react";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
    <span>{text}</span>
  </button>
);

export default Button;
