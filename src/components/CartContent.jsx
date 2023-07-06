import React from "react";
import { Wrapper as CartContentContainer } from "../styled-components/CartContent.styles";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  return <CartContentContainer>cart content </CartContentContainer>;
};

export default CartContent;
