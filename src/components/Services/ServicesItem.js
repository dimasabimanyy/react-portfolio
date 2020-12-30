import React from "react";

const ServicesItem = ({ id, title, description }) => {
  return (
    <div className="service">
      <h1 className="service-number">0{id}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesItem;
