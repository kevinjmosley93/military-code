import { JobProvider } from '../contexts/JobContext.js'
import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import * as ga from '../lib/ga'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/globals.css'
import '../styles/paginate.css'

import { useUser } from '../lib/hooks'

function MyApp({ Component, pageProps }) {
  const user = useUser()
  // console.log({ userFront: user })

  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <JobProvider>
      <Head>
        <title>
          ETV | Employ The V.E.T.S - Veterans Equally Trying To Survive - #1 Job
          board for separating veterans & active duty military personnel to find
          available jobs and resources to find employment before their
          separation date.
        </title>
        <link rel='canonical' href='https://employthevets.com' />
        <link rel='icon' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          name='title'
          content='ETV | Employ The V.E.T.S - Veterans Equally Trying To Survive - #1 Job board for separating veterans & active duty military personnel to find available jobs and resources to find employment before their separation date.'
        />
        <meta
          property='og:description'
          name='description'
          content='ETV | Employ The V.E.T.S - Veterans Equally Trying To Survive is the #1 Job board for separating veterans & active duty military personnel to find available jobs and resources to find employment before their separation date.'
        />
        <meta
          property='og:image'
          itemProp='image'
          name='image'
          content='/soldier.png'
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
