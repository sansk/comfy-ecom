import React from "react";
import { Wrapper as CartTotalsContainer } from "../styled-components/CartTotals.styles";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <CartTotalsContainer>
      <div>
        <article>
          <h5>
            Subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            Shipping Fee : <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            Order Total : <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Login to Checkout
          </button>
        )}
      </div>
    </CartTotalsContainer>
  );
};

export default CartTotals;
