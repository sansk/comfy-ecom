import React from "react";
import { Wrapper as HeroContainer } from "../styled-components/Hero.styles";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <HeroContainer className="section-center">
      <article className="content">
        <h1>
          Design your <br /> comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          ullam sed voluptatibus molestias earum dicta delectus magni blanditiis
          quibusdam id?
        </p>
        <Link to="/products" className="hero-btn btn">
          Shop Now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="Nice Table" className="main-img" />
        <img src={heroBcg2} alt="Person Working" className="accent-img" />
      </article>
    </HeroContainer>
  );
};

export default Hero;
