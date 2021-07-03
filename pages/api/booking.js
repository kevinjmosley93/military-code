const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Separation Employment Digtal Footprint - 1 one 1',
                description:
                  'Be on the look out for an email from ETV with your conformation and a set of times that works for us or you can reply with times that work for you.'
              },
              unit_amount: 5000
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/jobs?session_id={CHECKOUT_SESSION_ID}&success=true`,
        cancel_url: `${req.headers.origin}?canceled=true`
      })
      console.log({ session })

      res.status(303).json({ sessionUrl: session.url })
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
