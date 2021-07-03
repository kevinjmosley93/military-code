const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { price } = req.body
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        // TODO: replace line_items with your products here
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Donation'
              },
              unit_amount: price
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`
      })
      // console.log({ session })

      res.status(303).json({ sessionUrl: session.url })
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
