import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="robots" content="max-image-preview:large" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#25D366" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
