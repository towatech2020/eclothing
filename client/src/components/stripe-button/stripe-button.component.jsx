import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HTWlGHUWDjCHRfeHjonA452Q1F6F8jn8sq7c1AZGnQcCgurvIL2LnTxaBQiWBVSDv3wKIXUt8Rdq6YEfeVMNu5Z00oJMkWeP1';

  const onToken = (token) => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert('Payment successful'))
      .catch((err) => {
        console.log('Payment error: ', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure to use the provided card.',
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eclothing"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
