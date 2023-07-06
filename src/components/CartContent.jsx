import React from "react";
import { Wrapper as CartContentContainer } from "../styled-components/CartContent.styles";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <CartContentContainer className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </CartContentContainer>
  );
};

export default CartContent;
