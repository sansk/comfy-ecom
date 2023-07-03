import React from "react";
import { Wrapper as ServicesContainer } from "../styled-components/Services.styles";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Furniture <br /> build only for you.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab
            voluptas minima sit eius commodi accusantium quia aperiam deleniti.
            Eaque?
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
