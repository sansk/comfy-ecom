import React from "react";
import { Wrapper as CartColumnContainer } from "../styled-components/CartColumns.styles";

const CartColumns = () => {
  return (
    <CartColumnContainer>
      <div className="content">
        <h5>Item</h5>
        <h5>price</h5>
        <h5>Quantity</h5>
        <h5>subtotal</h5>
        <span></span>
        <hr />
      </div>
    </CartColumnContainer>
  );
};

export default CartColumns;
