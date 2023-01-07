import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51MNDh6FvZ0hFCPGoIq1Sw5flDwbEe7vHKnXncKkaUO63Y8o7zsY36XLtccxMUsCh6LUykpUbF2n94cJHG2z8Etr400coKq9Qyh";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
