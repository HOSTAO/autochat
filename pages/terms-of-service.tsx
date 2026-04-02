import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | AutoChat</title>
        <meta name="description" content="AutoChat terms of service. Read our terms and conditions for using the AutoChat WhatsApp Business automation platform." />
        <link rel="canonical" href="https://autochat.in/terms-of-service" />
      </Head>
      <Nav />

      <section className="hero-gradient py-16 px-6 md:py-20 text-center">
        <h1 className="text-[32px] md:text-[44px] font-black text-gray-50 tracking-tight mb-3">Terms of Service</h1>
        <p className="text-gray-500 text-sm">Last updated: April 2026</p>
      </section>

      <section className="section-dark">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-8 text-gray-400 text-[15px] leading-relaxed">
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p>By using AutoChat, you agree to these Terms of Service. If you don&apos;t agree, please don&apos;t use our service. These terms apply to all users including registered businesses and their agents.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">2. Service Description</h2>
              <p>AutoChat provides WhatsApp Business automation tools including chatbot builder, bulk messaging, team inbox, eCommerce features, and AI integration. Features vary by subscription plan.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">3. Account Responsibilities</h2>
              <p>You are responsible for maintaining the security of your account, all activities under your account, and ensuring your use complies with WhatsApp Business Policy and applicable laws.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">4. Payment & Billing</h2>
              <p>Subscription fees are billed in advance on a monthly basis. Meta WhatsApp API charges are separate and billed based on actual usage. Refunds are subject to our refund policy.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">5. Acceptable Use</h2>
              <p>You agree not to use AutoChat for spam, unsolicited messages, illegal activities, or any purpose that violates WhatsApp&apos;s Terms of Service or applicable laws.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">6. Limitation of Liability</h2>
              <p>AutoChat is provided &quot;as is&quot;. We are not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you in the preceding 12 months.</p>
            </div>
            <div>
              <h2 className="text-gray-50 text-xl font-bold mb-3">7. Contact</h2>
              <p>Questions? Contact us at <a href="mailto:support@autochat.in" className="text-brand hover:underline">support@autochat.in</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
