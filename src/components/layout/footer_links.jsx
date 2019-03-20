import React from 'react';

const listStyle = {
  marginBottom: "0.25rem",
  display: "flex",
  justifyContent: "space-around"
};

export default () => (
  <ul className="white" style={listStyle}>
    <li>
      Copyright {new Date().getFullYear()} Gina Mongiello
    </li>
    <li>
      <a style={{ color: "white", textDecoration: "none"}} href="https://www.instagram.com/photographybyasiya/">@photographybyasiya</a>
    </li>
    {/* <li>
      Terms of Service
    </li>
    <li>
      Privacy Policy
    </li> */}
  </ul>
);
