import React from "react";
import { Wrapper as CartTotalsContainer } from "../styled-components/CartTotals.styles";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();

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
        <Link to="/checkout" className="btn">
          Checkout
        </Link>
      </div>
    </CartTotalsContainer>
  );
};

export default CartTotals;
