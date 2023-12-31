import React from "react";
import { Wrapper as CartItemContainer } from "../styled-components/CartItem.styles";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increaseAmount = () => {
    toggleAmount(id, "increase");
  };

  const decreaseAmount = () => {
    toggleAmount(id, "decrease");
  };

  return (
    <CartItemContainer>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </CartItemContainer>
  );
};

export default CartItem;
