import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — AutoChat WhatsApp Business Automation</title>
        <meta name="description" content="AutoChat Terms of Service. Read the terms and conditions governing the use of our WhatsApp Business automation platform." />
        <link rel="canonical" href="https://autochat.in/terms-of-service" />
      </Head>
      <div style={{ background: '#0B0F14', color: '#F9FAFB', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
        <Nav />
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 24px' }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 8 }}>Terms of Service</h1>
          <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 48 }}>Last updated: January 1, 2025</p>

          {[
            {
              title: '1. Acceptance of Terms',
              content: `By accessing or using AutoChat ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms apply to all users, including businesses and individuals who access the platform.`,
            },
            {
              title: '2. Description of Service',
              content: `AutoChat is a WhatsApp Business API automation platform that allows businesses to automate customer communication, build chatbots, send bulk messages, manage team inboxes, and integrate with eCommerce platforms. AutoChat is an authorized WhatsApp Business Solution Provider.`,
            },
            {
              title: '3. WhatsApp Business Policy Compliance',
              content: `By using AutoChat, you agree to comply with WhatsApp's Business Policy, Commerce Policy, and all applicable usage guidelines. You may not use AutoChat to send spam, unsolicited messages, or any content that violates WhatsApp's terms. Violations may result in immediate account suspension.`,
            },
            {
              title: '4. Account Registration',
              content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use at support@autochat.in.`,
            },
            {
              title: '5. Subscription and Billing',
              content: `AutoChat offers paid subscription plans. By subscribing, you authorize us to charge your payment method on a recurring basis. Subscription fees are billed in advance. You may cancel at any time; cancellation takes effect at the end of the current billing period. No refunds are issued for partial periods unless required by law.`,
            },
            {
              title: '6. Free Trial',
              content: `New accounts may be eligible for a 3-day free trial. At the end of the trial period, your account will automatically transition to the selected paid plan unless you cancel. No charge is made during the trial period.`,
            },
            {
              title: '7. Acceptable Use',
              content: `You agree not to: use the Service to send spam or unsolicited messages; violate any applicable laws or regulations; attempt to gain unauthorized access to any portion of the Service; use the Service to harm, harass, or defraud others; or reverse engineer or copy any aspect of the Service.`,
            },
            {
              title: '8. Data and Privacy',
              content: `Your use of AutoChat is also governed by our Privacy Policy, which is incorporated by reference into these Terms. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.`,
            },
            {
              title: '9. Intellectual Property',
              content: `AutoChat and its original content, features, and functionality are owned by AutoChat and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of any content you submit through the Service.`,
            },
            {
              title: '10. Service Availability',
              content: `We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with reasonable notice. We are not liable for any modification, suspension, or discontinuance of the Service.`,
            },
            {
              title: '11. Limitation of Liability',
              content: `To the maximum extent permitted by law, AutoChat shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.`,
            },
            {
              title: '12. Termination',
              content: `We may terminate or suspend your account at any time for violation of these Terms or WhatsApp's policies. Upon termination, your right to use the Service ceases immediately. You may also terminate your account at any time by contacting support@autochat.in.`,
            },
            {
              title: '13. Changes to Terms',
              content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or in-app notification. Your continued use of the Service after changes take effect constitutes your acceptance of the new terms.`,
            },
            {
              title: '14. Contact',
              content: `For questions about these Terms, contact us at:\n\nEmail: support@autochat.in\nWebsite: https://autochat.in/contact`,
            },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#F9FAFB', marginBottom: 16 }}>{section.title}</h2>
              {section.content.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}
