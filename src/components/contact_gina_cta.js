import React from "react";
import { Link } from "gatsby";
import Button from "../components/button";
import scrollToElement from "scroll-to-element";

const ContactGinaCta = () => (
  <Button onClick={() => scrollToElement("#contact", { duration: 750 })} text="Contact Gina" />
);

export default ContactGinaCta;
