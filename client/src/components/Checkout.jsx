import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE =
  'pk_test_51JY8axKzm6PGodoxh14QrkunZH89B9kqExHtz6cwuyiPDnWA0isU2H9cap5xslMSpfADxqmQFOJ2DVYHWF5DUmWP00G6UMUmGj';

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency='EUR'
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
