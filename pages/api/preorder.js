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
                name: '50% off PREORDER - Keys to Finding a Post Military Career Course',
                description:
                  'PREORDER NOW AT HALF PRICE AND BE THE FIRST TO GET THE COURSE - Topics Covered: Step by step guide to showing you what you need to find a job before you get out of the military, Finding a career path, Creating a LinkedIn, Building a Resume, Applying for jobs, Building a Network, and Mindset. *Please ensure your email is correct so you can receive your copy of the course.'
              },
              unit_amount: 2499
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/jobs?session_id={CHECKOUT_SESSION_ID}&success=true`,
        cancel_url: `${req.headers.origin}?canceled=true`
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
