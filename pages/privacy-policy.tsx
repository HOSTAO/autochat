import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — AutoChat WhatsApp Business Automation</title>
        <meta name="description" content="AutoChat Privacy Policy. Learn how we collect, use, and protect your personal information when you use our WhatsApp Business automation platform." />
        <link rel="canonical" href="https://autochat.in/privacy-policy" />
      </Head>
      <div style={{ background: '#0B0F14', color: '#F9FAFB', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
        <Nav />
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 24px' }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 48 }}>Last updated: January 1, 2025</p>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect information you provide directly to us when you create an account, use our services, or contact us for support. This includes: name, email address, phone number, WhatsApp Business account details, business name and website, billing information, and usage data.

We also automatically collect certain information when you use our platform, including IP addresses, browser type, operating system, referring URLs, and activity logs within AutoChat.`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use the information we collect to: provide, maintain, and improve our WhatsApp automation services; process transactions and send related information; send technical notices and support messages; respond to your comments and questions; send marketing communications (with your consent); monitor and analyze trends and usage; and detect and prevent fraudulent transactions.`,
            },
            {
              title: '3. WhatsApp Data Handling',
              content: `AutoChat is an official WhatsApp Business Solution Provider. We process WhatsApp messages and conversation data strictly to provide you the automation services you request. We do not sell WhatsApp conversation data to third parties. We comply fully with WhatsApp's Business Policy and all applicable data protection regulations.`,
            },
            {
              title: '4. Information Sharing',
              content: `We do not sell, trade, or otherwise transfer your personally identifiable information to third parties except: to trusted service providers who assist us in operating our platform (under strict confidentiality agreements); when required by law or to protect our rights; in connection with a merger, acquisition, or sale of assets; or with your explicit consent.`,
            },
            {
              title: '5. Data Security',
              content: `We implement industry-standard security measures including SSL/TLS encryption, secure data centers, regular security audits, and access controls to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: '6. Data Retention',
              content: `We retain your personal information for as long as your account is active or as needed to provide you services. If you close your account, we will delete or anonymize your information within 90 days, unless we are required to retain it for legal or regulatory purposes.`,
            },
            {
              title: '7. Cookies',
              content: `We use cookies and similar tracking technologies to track activity on our platform and improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our service may not function properly.`,
            },
            {
              title: '8. Your Rights',
              content: `You have the right to: access the personal information we hold about you; correct inaccurate or incomplete information; request deletion of your personal information; object to or restrict our processing of your data; and data portability. To exercise any of these rights, contact us at support@autochat.in.`,
            },
            {
              title: '9. Third-Party Services',
              content: `Our service may contain links to third-party websites (Shopify, WooCommerce, Zapier, etc.). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
            },
            {
              title: '10. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date. Your continued use of our service after changes become effective constitutes acceptance of the updated policy.`,
            },
            {
              title: '11. Contact Us',
              content: `If you have any questions about this Privacy Policy, please contact us at:\n\nEmail: support@autochat.in\nWebsite: https://autochat.in/contact`,
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
