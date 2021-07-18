import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import FeaturedJobs from '../components/FeaturedJobs'

import { loadStripe } from '@stripe/stripe-js'
import Video from '../components/Video'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Home() {
  return (
    <>
      <main className='bg-light'>
        <Hero />
        <About />
        <Services />
        <Blog />
        <FeaturedJobs />
        <Video />
        <Subscribe />
      </main>
    </>
  )
}
