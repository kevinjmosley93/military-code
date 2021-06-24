import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import FeaturedJobs from '../components/FeaturedJobs'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
        <FeaturedJobs />
        <Subscribe />
      </main>
    </>
  )
}
