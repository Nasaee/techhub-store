// domain/.netlify/functions/create-payment-intent
const stripe = require('stripe')(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'thb',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400, // bed request
      body: JSON.stringify({ error }),
    };
  }
};
