import React, { useContext } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import FeaturedJobs from '../components/FeaturedJobs'

import { JobContext } from '../contexts/JobContext'

export default function Home() {
  const { jobs, getJobs } = useContext(JobContext)

  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Blog /> */}
        <FeaturedJobs jobs={jobs} getJobs={getJobs} />
        <Subscribe />
      </main>
    </>
  )
}
