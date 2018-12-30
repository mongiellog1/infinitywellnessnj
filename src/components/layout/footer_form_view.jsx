import React from "react";

const FooterFormView = ({
  onSubmit,
  fetchMessage,
  messageFlag,
  updateField,
  firstName,
  lastName,
  message,
  email,
  isSending,
  closeMessage,
}) => (
  <div className="form-container">
    <div className={`form-message ${messageFlag}`}>
      <p>{fetchMessage}</p>
      <div onClick={closeMessage} className="form-message__close">X</div>
    </div>

    <form onSubmit={onSubmit} className="footer-form">
      <label>First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={updateField}
        placeholder="First Name*"
        maxLength="255"
        type="text"
      />

      <label>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={updateField}
        placeholder="Last Name*"
        maxLength="255"
        type="text"
      />

      <label>Email</label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={updateField}
        placeholder="Email*"
        type="email"
      />

      <label>How Can I Help?</label>
      <textarea
        id="how_can_i_help"
        name="message"
        value={message}
        onChange={updateField}
        type="textarea"
        placeholder="How Can I Help?"
        rows="5"
      />

      <button
        disabled={isSending}
        className="button form__submit"
        type="submit"
        value="Send Message to Gina"
      >
        {isSending ? "Sending..." : "Connect With Gina"}<span>{isSending ? "Sending..." : "Connect With Gina"}</span>
      </button>
    </form>
  </div>
);

export default FooterFormView;
