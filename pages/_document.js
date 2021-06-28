import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
