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
            content='/favicon.png'
          />
          <meta
            property='og:keywords'
            name='keywords'
            content='Tech, Software, Coding, Blog, Veterans, Hiring Veterans, Employment, Jobs, USAJobs, Government, GiBill, Military, Army, Navy, Marines, Coast Guard '
          />
          <meta property='og:author' name='author' content='MMGThemes' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          {/* LinkedIn Insight Tag*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
               _linkedin_partner_id = ${process.env.NEXT_PUBLIC_LINKEDIN_TAG}; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
          `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();  
          `
            }}
          />
          <noscript>
            {' '}
            <img
              height='1'
              width='1'
              style={{ display: 'none', zIndex: '-1234' }}
              alt='LinkedIn Tag Image'
              src='https://px.ads.linkedin.com/collect/?pid=3705769&fmt=gif'
            />{' '}
          </noscript>
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
