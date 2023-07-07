import React, { useState, useEffect } from "react";
import { Wrapper as CheckoutContainer } from "../styled-components/StripeCheckout.styles";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
// import { useHistory } from 'react-router-dom'

const CheckoutForm = () => {
  return <h4>hello from Stripe Checkout </h4>;
};

const StripeCheckout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />
    </CheckoutContainer>
  );
};

export default StripeCheckout;
