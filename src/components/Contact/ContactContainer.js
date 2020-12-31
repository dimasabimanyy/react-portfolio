import React from "react";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div id="contact">
      <div className="contact container">
        <div className="contact-heading">
          <h1 data-aos="fade-up" data-aos-duration="600">
            Let's get started
          </h1>
          <p data-aos="fade-up" data-aos-duration="600">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
          <div
            className="contact-heading-icons"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <a href="" alt="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" alt="">
              <i className="fab fa-github"></i>
            </a>
            <a href="" alt="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" alt="">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" alt="">
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
