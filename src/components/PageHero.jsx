import React from "react";
import { Wrapper as PageHeroContainer } from "../styled-components/PageHero.styles";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <PageHeroContainer>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> / {title}
        </h3>
      </div>
    </PageHeroContainer>
  );
};

export default PageHero;
