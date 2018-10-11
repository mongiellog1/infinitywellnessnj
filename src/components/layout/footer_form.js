import React from "react";

const Form = () => (
  <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); console.log("Enter!!")}}>
    <label>First Name</label>
    <input id="FirstName" name="FirstName" placeholder="First Name*" maxLength="255" type="text"></input>

    <label>Last Name</label>
    <input id="LastName" name="LastName" placeholder="Last Name*" maxLength="255" type="text"></input>

    <label>Email</label>
    <input id="Email" name="Email" placeholder="Email*" type="email"></input>

    <label>How Can I Help?</label>
    <textarea id="how_can_i_help" type="textarea" placeholder="How Can I Help?" rows="5" />

    <input style={{ borderColor: "var(--purple)"}} type="submit" value="Send Message to Gina" />
  </form>
);

export default Form;
