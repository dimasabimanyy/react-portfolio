import React from "react";

const ServicesItem = ({ image, title, description }) => {
  return (
    <div className="service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServicesItem;
