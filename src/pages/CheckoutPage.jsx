import React from "react";
import { Wrapper as CheckoutContainer } from "../styled-components/CheckoutPage.styles";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <CheckoutContainer className="page">
        <h1>Checkout Here!</h1>
      </CheckoutContainer>
    </main>
  );
};

export default CheckoutPage;
