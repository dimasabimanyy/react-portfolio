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
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          <div
            className="contact-heading-icons"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <a
              href="https://twitter.com/dimasabimanyy"
              alt="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/dimasabimanyy"
              alt="Github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/dimasabimanyy_/"
              alt="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://codepen.io/dimasabimanyu"
              alt="Codepen"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dimasabimanyu/"
              alt="Linked In"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
