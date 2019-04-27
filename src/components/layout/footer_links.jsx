import React from 'react';
import { Link } from 'gatsby';

const listStyle = {
  marginBottom: "0.25rem",
  display: "flex",
  justifyContent: "space-around"
};

const whiteLinkStyle = { color: "white", textDecoration: "none" };

export default () => (
  <ul className="white" style={listStyle}>
    <li>
      Copyright {new Date().getFullYear()} Gina Mongiello
    </li>
    <li>
      <a style={whiteLinkStyle} href="https://www.instagram.com/photographybyasiya/">@photographybyasiya</a>
    </li>
    {/* <li>
      Terms of Service
    </li>*/}
    <li>
      <Link style={{ color: "white", textDecoration: "none"}} to='/privacy-policy'>Privacy Policy</Link>
    </li>
  </ul>
);
