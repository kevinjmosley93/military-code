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
            property="og:keywords"
            name="keywords"
            content="Civilian Jobs For Veterans, Veterans Looking For Jobs, Government Jobs After Military, High Paying Jobs For Veterans, Government Jobs For Veterans, Jobs After Leaving The Military, Best Jobs After The Military, Remote Jobs For Veterans, Work From Home Jobs For Veterans"
          />
          <meta property="og:author" name="author" content="MMGThemes" />
          <meta
            name="p:domain_verify"
            content="c3113b9f8dfeee9d40c84957ae35ff1d"
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="180x180"
          />
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
          `,
            }}
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6993174805328272"
            crossOrigin="anonymous"
          />
          {/* LinkedIn Insight Tag*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
               _linkedin_partner_id = ${process.env.NEXT_PUBLIC_LINKEDIN_TAG}; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();  
          `,
            }}
          />
          <noscript>
            {" "}
            <img
              height="1"
              width="1"
              style={{ display: "none", zIndex: "-1234" }}
              alt="LinkedIn Tag Image"
              src="https://px.ads.linkedin.com/collect/?pid=3705769&fmt=gif"
            />{" "}
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
