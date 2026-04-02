import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | AutoChat — Help Center</title>
        <meta name="description" content="Get help with AutoChat. Contact our support team, access documentation, and find answers to common questions." />
        <link rel="canonical" href="https://autochat.in/support" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-[34px] md:text-[48px] font-black text-gray-50 tracking-[-1.5px] mb-4">How Can We Help?</h1>
          <p className="text-gray-400 text-lg leading-relaxed">We&apos;re here to ensure your success with AutoChat.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['📧', 'Email Support', 'Reach our team at support@autochat.in. We typically respond within 24 hours.', 'mailto:support@autochat.in', 'Send Email'],
              ['💬', 'WhatsApp Chat', 'Chat with us directly on WhatsApp for quick assistance.', 'https://wa.me/13237447383', 'Chat Now'],
              ['📞', 'Phone Support', 'Call us for urgent issues or enterprise inquiries.', 'tel:+13237447383', 'Call Us'],
            ].map(([icon, title, desc, href, cta]) => (
              <div key={title} className="card text-center p-8">
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
                <a href={href} className="btn-primary-sm">{cta}</a>
              </div>
            ))}
          </div>

          <div className="card mt-12 text-center p-8">
            <h3 className="text-gray-50 font-bold text-xl mb-3">Need a Demo?</h3>
            <p className="text-gray-400 text-base mb-6">Book a personalized walkthrough of AutoChat with our team.</p>
            <a href="mailto:support@autochat.in?subject=Demo Request" className="btn-primary">Book a Demo →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
