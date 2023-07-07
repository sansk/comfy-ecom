import React from "react";
import { Wrapper as CheckoutContainer } from "../styled-components/CheckoutPage.styles";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="Checkout" />
      <CheckoutContainer
        className="page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {cart.length < 1 ? (
          <div className="empty" style={{ textAlign: "center" }}>
            <h2>Your Cart is Empty</h2>
            <Link to="/products" className="btn">
              Fill the Cart
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </CheckoutContainer>
    </main>
  );
};

export default CheckoutPage;
