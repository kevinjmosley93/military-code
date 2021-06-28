import { JobProvider } from '../contexts/JobContext.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <JobProvider>
      <Head>
        <title>
          MTC | Military Then Code - helping Veterans find jobs before their
          separation date
        </title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          name='title'
          content='MTC | Military Then Code - helping Veterans find jobs before their separation date'
        />
        <meta
          property='og:description'
          name='description'
          content='#1 Job board for separating veterans & active duty military personnel to find available jobs and resources to find employment before their separation date.'
        />
        <meta
          property='og:image'
          itemProp='image'
          name='image'
          content='/favicon.png'
        />
        <meta
          property='og:keywords'
          name='keywords'
          content='Tech, Software, Coding, Blog, Veterans, Hiring Veterans, Employment, Jobs, USAJobs, Government, GiBill, Military, Army, Navy, Marines, Coast Guard '
        />
        <meta property='og:author' name='author' content='MMGThemes' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </JobProvider>
  )
}

export default MyApp
