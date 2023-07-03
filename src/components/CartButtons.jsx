import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Wrapper as CartButtonContainer } from "../styled-components/CartButtons.styles";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  return (
    <CartButtonContainer className="cart-btn-wrapper">
      <NavLink to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">8</span>
        </span>
      </NavLink>
      <button className="auth-btn" type="button" onClick={closeSidebar}>
        Login <FaUserPlus />
      </button>
    </CartButtonContainer>
  );
};

export default CartButtons;
