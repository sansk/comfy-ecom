import React from "react";
import { Wrapper as AmountBtnContainer } from "../styled-components/AmountButtons.styles";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <AmountBtnContainer className="amount-btns">
      <button className="amount-btn" type="button" onClick={decreaseAmount}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" type="button" onClick={increaseAmount}>
        <FaPlus />
      </button>
    </AmountBtnContainer>
  );
};

export default AmountButtons;
