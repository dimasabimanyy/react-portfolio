import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-control">
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-control">
          <label for="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-control">
          <label for="message">Message</label>
          <textarea type="text" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-fill">
          Let's get started
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
