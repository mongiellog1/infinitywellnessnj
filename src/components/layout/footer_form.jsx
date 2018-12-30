import React from "react";
import { StaticQuery, graphql } from "gatsby";
import fetch from "node-fetch";
import FooterForm from "./footer_form_view";

const GINAS_MAIL_SERVER = "https://ginas-form-server.herokuapp.com/api/emailForm";
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

  onSubmit = (api) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setSending();

    fetch(GINAS_MAIL_SERVER, {
      method: "POST",
      body: JSON.stringify(this.formatPostRequest()),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.statusText);
        }

        this.setSuccess();
      })
      .catch(this.setError)
  }

  formatPostRequest = () => {
    const { firstName, lastName, email, message } = this.state;
    const fullName = `${firstName} ${lastName}`;
    const body = `Name:
    ${fullName}

    Email:
    ${email}

    Message
    ${message}`;

    const subject = `${fullName} sent you a message from your website, InfinityWellnessNJ!`;

    return { body, subject };
  }

  setSending = () => {
    this.setState({ isSending: true });
  }

  setSuccess = () => {
    this.setState({
      ...initState,
      isErrors: false,
      isSending: false,
      fetchMessage: "Success! Gina will be in touch within 24 hours. ",
    });
  }

  setError = () => {
    this.setState({
      isErrors: true,
      isSending: false,
      fetchMessage: "There was an error in sending your email.  Please check your info & try again."
    });
  }

  closeMessage = () => {
    this.setState({ isErrors: false, fetchMessage: "" });
  }

  render = () => {
    const {
      firstName,
      lastName,
      email,
      message,
      fetchMessage,
      isErrors,
      isSending,
    } = this.state;
    const { onSubmit, closeMessage, updateField } = this;
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
          <FooterForm
            onSubmit={onSubmit(site.siteMetadata.contactFormUrl)}
            fetchMessage={fetchMessage}
            messageFlag={messageFlag}
            updateField={updateField}
            firstName={firstName}
            lastName={lastName}
            message={message}
            email={email}
            isSending={isSending}
            closeMessage={closeMessage}
          />
        )}
      />
    );
  }
};

export default Form;
