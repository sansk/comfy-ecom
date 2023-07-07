import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Wrapper as CartButtonContainer } from "../styled-components/CartButtons.styles";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <CartButtonContainer className="cart-btn-wrapper">
      <NavLink to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </NavLink>
      {myUser ? (
        <button
          className="auth-btn"
          type="button"
          onClick={() => {
            localStorage.removeItem("user");
            clearCart();
            logout({ returnTo: window.location.origin });
          }}>
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className="auth-btn" type="button" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </CartButtonContainer>
  );
};

export default CartButtons;
