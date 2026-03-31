import Script from "next/script";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0; padding: 0;
          background: #0B0F14;
          color: #F9FAFB;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a { color: inherit; }
        img { max-width: 100%; height: auto; }
        h1,h2,h3,h4,h5,h6 { margin: 0; }
        p { margin: 0; }
        button { font-family: inherit; }
      `}</style>
      <Component {...pageProps} />
    
      <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WH3PL3WL');` }} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SEMKGKRY1G" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SEMKGKRY1G');` }} />
      </>
  )
}
