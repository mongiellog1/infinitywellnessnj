import React from "react";
import Button from "../components/button";
import scrollToElement from "scroll-to-element";

const ContactGinaCta = () => (
  <Button onClick={() => scrollToElement("#footer", { duration: 750 })} text="Connect With Gina" />
);

export default ContactGinaCta;
