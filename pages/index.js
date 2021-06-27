import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import FeaturedJobs from '../components/FeaturedJobs'
import { fetchJobs } from '../lib/Jobs/fetchJobs'

export default function Home({ data }) {
  const [loading, setLoading] = useState(false)

  const [jobs, setJobs] = useState([])
  if (data.length === 0) return
  const { Jobs } = data

  console.log(data)

  useEffect(() => {
    if (!Jobs) return
    setLoading(true)
    setJobs(Jobs)
    setLoading(false)
  }, [])
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
        <FeaturedJobs jobs={jobs} loading={loading} />
        <Subscribe />
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await fetchJobs()
  return {
    props: { data }
  }
}
