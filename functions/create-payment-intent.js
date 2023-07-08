// => domain.com/.netlify/functions/create-payment-intent
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
    if (event.body) {
        const { cart, shippingFee, totalAmount } = JSON.parse(event.body);

        const calculateOrderAmount = () => shippingFee + totalAmount;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: 'usd',
                description: 'ECommerce Services - Comfy Furniture Payment',
                shipping: {
                    name: 'Jenny Rosen',
                    address: {
                        line1: '510 Townsend St',
                        postal_code: '98140',
                        city: 'San Francisco',
                        state: 'CA',
                        country: 'US',
                    },
                },
            })
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            }
        }
    }
}