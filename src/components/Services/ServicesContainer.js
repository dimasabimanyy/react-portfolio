import React from "react";
import ServicesItem from "./ServicesItem";

const ServicesContainer = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      aosDelay: 400,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      aosDelay: 600,
    },
    {
      id: 3,
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
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
