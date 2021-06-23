
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MTC | Military Then Code </title>
        <meta name="description" content="#1 Blog for seperating veterans & active duty military personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
