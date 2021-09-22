import { JobProvider } from '../contexts/JobContext.js'
import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import * as ga from '../lib/ga'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import 'react-toastify/dist/ReactToastify.css'
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
  }, [router.events, user])
  return (
    <JobProvider>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <link rel='icon' href='/favicon.png' />
        <link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' href='/android-chrome-192x192.png' sizes='192x192' />
        <link rel='icon' href='/android-chrome-512x512.png' sizes='512x512' />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          sizes='180x180'
        />
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
      </Head>
      <ScrollToTop smooth />
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </JobProvider>
  )
}

export default MyApp
