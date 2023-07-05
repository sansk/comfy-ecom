import React from "react";
import { Wrapper as StarsContainer } from "../styled-components/Stars.styles";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const displayStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsContainer>
      <div className="stars">{displayStars}</div>
      <p className="reviews">({reviews} Customer Reviews)</p>
    </StarsContainer>
  );
};

export default Stars;
