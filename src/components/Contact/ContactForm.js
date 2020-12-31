import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div
          className="form-control"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div
          className="form-control"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div
          className="form-control"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message"></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-fill"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Let's get started
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
