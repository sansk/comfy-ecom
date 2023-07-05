import React from "react";
import { Wrapper as PageHeroContainer } from "../styled-components/PageHero.styles";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <PageHeroContainer>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          { product && <Link to="/products">/ Products</Link>}
          / {title}
        </h3>
      </div>
    </PageHeroContainer>
  );
};

export default PageHero;
