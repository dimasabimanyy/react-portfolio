import React from "react";
import ServicesItem from "./ServicesItem";
import designer from "../../images/designer.png";
import maintenance from "../../images/maintenance.png";
import wordpress from "../../images/wordpress.png";

const ServicesContainer = () => {
  const services = [
    {
      id: 1,
      image: designer,
      title: "Web Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 2,
      image: maintenance,
      title: "Web Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 3,
      image: wordpress,
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
  ];

  return (
    <section id="services">
      <div className="services container">
        <h1 className="section-title">Services</h1>
        <p className="services-subheading">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have good.
        </p>
        <div className="services-items">
          {services.map((service, index) => (
            <ServicesItem
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
