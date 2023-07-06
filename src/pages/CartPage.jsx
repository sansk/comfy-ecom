import React from "react";
import { Wrapper as CartPageContainer } from "../styled-components/CartPage.styles";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <CartPageContainer className="page-100">
        <div className="empty">
          <h2>Your Cart is Empty</h2>
          <Link to="/products" className="btn">
            Fill the Cart
          </Link>
        </div>
      </CartPageContainer>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <CartPageContainer className="page">
        <CartContent />
      </CartPageContainer>
    </main>
  );
};

export default CartPage;
