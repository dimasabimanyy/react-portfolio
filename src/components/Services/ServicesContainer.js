import React from "react";
import ServicesItem from "./ServicesItem";

const ServicesContainer = () => {
  const services = [
    {
      id: 1,
      title: "PSD to HTML",
      description:
        "Do you have a nice design in figma, photoshop or adobe XD ? Contact me and I'll convert them into fully responsive, nice looking websites!",
      aosDelay: 400,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Want to turn your idea into the next big thing? I design and develop with your business in mind, putting you in control of your content.",
      aosDelay: 600,
    },
    {
      id: 3,
      title: "Wordpress Development",
      description:
        "Specialists in CMS web development using Wordpress. Millions of website today are built on top of Wordpress, yours can become the next one!",
      aosDelay: 800,
    },
  ];

  return (
    <section id="services">
      <div className="services container">
        <p
          className="services-subheading"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          My Services
        </p>
        <h1
          className="services-heading"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          What Can I Do For You ?
        </h1>
        <div className="services-items">
          {services.map((service, index) => (
            <ServicesItem
              key={index}
              id={service.id}
              title={service.title}
              description={service.description}
              dataAos="fade-up"
              aosDuration="600"
              aosDelay={service.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
