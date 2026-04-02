import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You | AutoChat</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Nav />

      <section className="hero-gradient py-24 px-6 md:py-36 text-center">
        <div className="max-w-[500px] mx-auto">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-[34px] md:text-[44px] font-black text-gray-50 tracking-tight mb-5">Thank You!</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <a href="https://app.autochat.in/register" className="btn-secondary">Start Free Trial</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
