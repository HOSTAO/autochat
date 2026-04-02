import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | AutoChat</title>
        <meta name="description" content="AutoChat privacy policy. Learn how we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://autochat.in/privacy-policy" />
      </Head>
      <Nav />

      <section className="hero-gradient py-16 px-6 md:py-20 text-center">
        <h1 className="text-[32px] md:text-[44px] font-black text-gray-50 tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: April 2026</p>
      </section>

      <section className="section-dark">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 text-[15px] leading-relaxed">
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly, including your name, email address, phone number, and business information when you register for AutoChat or contact us. We also collect usage data, device information, and cookies to improve our service.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, communicate with you about your account, send service-related notifications, and for marketing purposes (with your consent).</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal data. All data transmission is encrypted using SSL/TLS protocols. We regularly review and update our security practices.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">4. Third-Party Services</h2>
              <p>We use trusted third-party services including Meta (WhatsApp Business API), payment processors, and analytics tools. Each operates under their own privacy policies.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time. Contact us at support@autochat.in for any privacy-related requests.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">6. Contact</h2>
              <p>For questions about this privacy policy, contact us at <a href="mailto:support@autochat.in" className="text-brand hover:underline">support@autochat.in</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
