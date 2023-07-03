import React from "react";
import { Wrapper as ContactContainer } from "../styled-components/Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="section-center">
        <h3>Join Our Newsletter and get 20% off!</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis at
            eaque expedita, ipsam et necessitatibus impedit tempore maxime?
            Eaque, porro?
          </p>
          <form className="contact-form">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter Email"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};
export default Contact;
