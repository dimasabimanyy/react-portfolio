import React from "react";

const ServicesItem = ({
  id,
  title,
  description,
  dataAos,
  aosDuration,
  aosDelay,
}) => {
  return (
    <div
      className="service"
      data-aos={dataAos}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
    >
      <h1 className="service-number">0{id}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesItem;
