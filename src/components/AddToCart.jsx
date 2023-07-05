import React, { useState } from "react";
import { Wrapper as AddToCartContainer } from "../styled-components/AddToCart.styles";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((oldVal) => (oldVal >= stock ? oldVal : oldVal + 1));
  };

  const decreaseAmount = () => {
    setAmount((oldVal) => (oldVal <= 1 ? oldVal : oldVal - 1));
  };

  return (
    <AddToCartContainer>
      <div className="colors">
        <span>Colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                style={{ background: color }}
                onClick={() => setMainColor(color)}>
                {mainColor === color && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link to="/cart" className="btn">
          Add to Cart
        </Link>
      </div>
    </AddToCartContainer>
  );
};

export default AddToCart;
