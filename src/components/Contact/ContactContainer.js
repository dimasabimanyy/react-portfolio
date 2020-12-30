import React from "react";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div id="contact">
      <div className="contact container">
        <div className="contact-heading">
          <h1>Let's get started</h1>
          <p>
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
