import React from "react";
import { StaticQuery, graphql } from "gatsby";
import fetch from "node-fetch";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

class Form extends React.Component {
  state = { ...initState };

  updateField = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  onSubmit = (e, api) => {
    e.preventDefault();
    e.stopPropagation();

    const { firstName, lastName, email, message } = this.state;
    const fullName = `${firstName} ${lastName}`;
    const body = `Name:
    ${fullName}

    Email:
    ${email}

    Message
    ${message}`;

    fetch("https://ginas-form-server.herokuapp.com/api/emailForm", {
      method: "POST",
      body: JSON.stringify({
        body,
        subject: `${fullName} sent you a message from your website, InfinityWellnessNJ!`
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.statusText);
        }
        this.setState({
          ...initState,
          isErrors: false,
          fetchMessage: "Success! Gina will be in touch within 24 hours. "
        });
      })
      .catch((error) => {
        this.setState({
          isErrors: true,
          fetchMessage: "There was an error in sending your email.  Please check your info & try again."
        });
      })
  }

  closeMessage = () => {
    this.setState({ isErrors: false, fetchMessage: "" });
  }

  render = () => {
    const { firstName, lastName, email, message, isErrors, fetchMessage } = this.state;
    const { onSubmit, closeMessage } = this;
    const messageFlag = (isErrors)
      ? "form-message--error"
      : (fetchMessage)
        ? "form-message--success"
        : "";

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                contactFormUrl
              }
            }
          }
        `}
        render={({ site }) => (
          <div className="form-container">
            <div className={`form-message ${messageFlag}` }>
              <p>{fetchMessage}</p>
              <div onClick={closeMessage} className="form-message__close">X</div>
            </div>

            <form onSubmit={(e) => onSubmit(e, site.siteMetadata.contactFormUrl)} className="footer-form">
              <label>First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={this.updateField}
                placeholder="First Name*"
                maxLength="255"
                type="text"
              />

              <label>Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={this.updateField}
                placeholder="Last Name*"
                maxLength="255"
                type="text"
              />

              <label>Email</label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={this.updateField}
                placeholder="Email*"
                type="email"
              />

              <label>How Can I Help?</label>
              <textarea
                id="how_can_i_help"
                name="message"
                value={message}
                onChange={this.updateField}
                type="textarea"
                placeholder="How Can I Help?"
                rows="5"
              />

              <button className="button form__submit" type="submit" value="Send Message to Gina">Connect With Gina<span>Connect With Gina</span></button>
            </form>
          </div>
        )}
      />
    );
  }
};

export default Form;