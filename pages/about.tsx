import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Learn about AutoChat — the AI-driven WhatsApp Business automation platform trusted by 200+ businesses worldwide. A product of Hostao LLC." />
        <link rel="canonical" href="https://autochat.in/about" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge mb-5">
            <span>🏢 About AutoChat</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            Making WhatsApp Work for Business
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            We help businesses automate conversations, close more sales, and deliver exceptional customer experiences on WhatsApp.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-dark">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="tag-green">Our Mission</div>
            <h2 className="section-heading leading-tight mb-5">Empowering Businesses Through Conversational Commerce</h2>
            <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
              AutoChat was built with a simple belief: every business deserves access to powerful WhatsApp automation — regardless of size or technical expertise.
            </p>
            <p className="text-gray-400 text-[16px] leading-relaxed">
              From startups to enterprises, our platform enables businesses to connect with their customers where they already are — on WhatsApp. With AI-powered chatbots, seamless eCommerce, and team collaboration tools, we&apos;re transforming how businesses communicate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              ['200+', 'Happy Customers'],
              ['50M+', 'Messages Sent'],
              ['99.9%', 'Platform Uptime'],
              ['24/7', 'Customer Support'],
            ].map(([num, label]) => (
              <div key={label} className="card text-center p-6">
                <div className="text-2xl md:text-3xl font-black text-brand mb-2">{num}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-card">
        <div className="container-lg">
          <div className="text-center mb-14">
            <h2 className="section-heading">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['🚀', 'Innovation First', 'We continuously push boundaries with AI, automation, and cutting-edge technology to give our customers an unfair advantage.'],
              ['🤝', 'Customer Obsession', 'Every feature we build starts with a customer problem. We listen, learn, and deliver solutions that make a real impact.'],
              ['🔒', 'Trust & Security', 'Your data is safe with us. We follow industry-best security practices and maintain official Meta partnership standards.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card p-8">
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostao */}
      <section className="section-dark">
        <div className="container-lg text-center max-w-[700px]">
          <p className="text-gray-500 text-sm font-medium mb-3">A PRODUCT OF</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-50 mb-5">Hostao LLC</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            AutoChat is proudly built and maintained by <a href="https://hostao.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Hostao LLC</a> — a technology company focused on web hosting, digital infrastructure, and SaaS product development.
          </p>
          <a href="https://app.autochat.in/register" className="btn-primary">
            Get Started with AutoChat →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
