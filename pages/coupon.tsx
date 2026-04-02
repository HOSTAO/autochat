import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Coupon() {
  const [copied, setCopied] = useState(false)
  const code = 'AUTOCHAT20'

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Head>
        <title>Coupon Code | AutoChat — Get 20% Off</title>
        <meta name="description" content="Use coupon code AUTOCHAT20 to get 20% off on AutoChat WhatsApp Business automation plans. Limited time offer." />
        <link rel="canonical" href="https://autochat.in/coupon" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-[34px] md:text-[48px] font-black text-gray-50 tracking-[-1.5px] mb-5">
            Special Offer
          </h1>
          <p className="text-lg text-gray-400 mb-10">Get 20% off on any AutoChat plan with this exclusive coupon code.</p>

          <div className="card p-8 md:p-10 max-w-[450px] mx-auto">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">Your Coupon Code</p>
            <div className="bg-dark border-2 border-brand/30 rounded-xl px-6 py-4 mb-5">
              <span className="text-brand text-3xl md:text-4xl font-black tracking-widest">{code}</span>
            </div>
            <button onClick={handleCopy}
              className={`w-full py-3.5 rounded-xl text-[15px] font-bold transition-all duration-300 ${
                copied 
                  ? 'bg-brand/20 text-brand border border-brand/30' 
                  : 'bg-brand text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]'
              }`}>
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
          </div>

          <div className="mt-10">
            <a href="https://app.autochat.in/register" className="btn-primary text-lg">
              Sign Up & Apply Code →
            </a>
          </div>
        </div>
      </section>

      <section className="section-dark text-center">
        <div className="max-w-[500px] mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-50 mb-3">How to use</h2>
          <div className="space-y-3 text-gray-400 text-sm text-left">
            <div className="flex gap-3"><span className="text-brand shrink-0">1.</span> Sign up at app.autochat.in</div>
            <div className="flex gap-3"><span className="text-brand shrink-0">2.</span> Choose your plan (Starter, Growth, or Enterprise)</div>
            <div className="flex gap-3"><span className="text-brand shrink-0">3.</span> Enter code <strong className="text-gray-200">{code}</strong> at checkout</div>
            <div className="flex gap-3"><span className="text-brand shrink-0">4.</span> Enjoy 20% off your subscription!</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
