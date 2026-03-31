import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const features = [
  {
    icon: '🤖',
    title: 'No Code Chatbot Builder',
    desc: 'Build sophisticated WhatsApp chatbots visually with our drag-and-drop interface. No programming skills required.',
    bullets: [
      'Drag & drop flow builder',
      'Conditional logic & branching',
      'Multi-language support',
      'Media message support (images, videos, docs)',
      'Interactive buttons & list menus',
      'Product catalog integration',
    ],
  },
  {
    icon: '👥',
    title: 'Team Inbox / Multi-Agent',
    desc: 'Manage all WhatsApp conversations in one unified inbox. Assign chats to agents, track performance, and collaborate.',
    bullets: [
      'Unlimited agent seats (per plan)',
      'Chat assignment & reassignment',
      'Agent performance analytics',
      'Internal notes & team chat',
      'Mobile app for agents on the go',
      'Override bot with live agent',
    ],
  },
  {
    icon: '📨',
    title: 'Bulk Messaging & Broadcast',
    desc: 'Reach thousands of customers instantly with targeted WhatsApp broadcasts. Perfect for promotions and announcements.',
    bullets: [
      'Send to unlimited contacts',
      'Schedule broadcasts',
      'Message templates (pre-approved)',
      'Delivery & read receipts',
      'Segmented audience targeting',
      'Campaign analytics',
    ],
  },
  {
    icon: '🛒',
    title: 'WhatsApp eCommerce',
    desc: 'Transform WhatsApp into a full-featured sales channel. Let customers browse, order, and pay without leaving the app.',
    bullets: [
      'Shopify & WooCommerce integration',
      'Automated checkout flow',
      'Abandoned cart recovery',
      'Product catalog messaging',
      'Order tracking updates',
      'Payment gateway integration',
    ],
  },
  {
    icon: '✨',
    title: 'ChatGPT / AI Integration',
    desc: 'Power your chatbot with GPT-4 AI. Train on your business data and provide intelligent, human-like responses.',
    bullets: [
      'GPT-4 powered responses',
      'Train on your own data',
      'Voice & text AI conversation',
      'Context-aware replies',
      'Lead qualification automation',
      'FAQ auto-resolution',
    ],
  },
  {
    icon: '✅',
    title: 'Green Tick Verification',
    desc: 'Get your business officially verified on WhatsApp with the coveted green tick badge.',
    bullets: [
      'Official WhatsApp Business Account',
      'Green tick verification mark',
      'Brand protection from impersonation',
      'Setup in as little as 2 business days',
      'Expert guidance throughout',
      'Ongoing compliance support',
    ],
  },
  {
    icon: '🔌',
    title: 'API & Webhooks',
    desc: 'Connect AutoChat to any platform with our powerful REST API and real-time webhooks.',
    bullets: [
      'Full REST API access',
      'Real-time webhook events',
      'Send & receive messages via API',
      'Contact management API',
      'Sandbox environment for testing',
      'Comprehensive documentation',
    ],
  },
  {
    icon: '📊',
    title: 'CRM Integration',
    desc: 'Sync your WhatsApp conversations with your CRM for a complete view of every customer.',
    bullets: [
      'HubSpot, Salesforce, Zoho support',
      'Contact sync & enrichment',
      'Deal/pipeline management',
      'Custom field mapping',
      'Activity logging',
      'Lead capture automation',
    ],
  },
  {
    icon: '📈',
    title: 'Analytics & Reports',
    desc: 'Get deep insights into your WhatsApp performance with real-time dashboards and reports.',
    bullets: [
      'Message delivery & open rates',
      'Chatbot conversation analytics',
      'Agent performance reports',
      'Campaign ROI tracking',
      'Export to CSV/Excel',
      'Custom date range filters',
    ],
  },
  {
    icon: '💳',
    title: 'Payment Gateway Integration',
    desc: 'Accept payments directly in WhatsApp. Integrated with leading payment providers.',
    bullets: [
      'Stripe & PayPal support',
      'Razorpay, Paytm (India)',
      'Secure payment links in chat',
      'Automated receipts',
      'Refund management',
      'Multi-currency support',
    ],
  },
]

export default function Features() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>Features | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Explore AutoChat's full feature set: chatbot builder, team inbox, bulk messaging, WhatsApp eCommerce, ChatGPT AI integration, analytics, and more." />
        <link rel="canonical" href="https://autochat.in/features" />
        <meta property="og:title" content="Features | AutoChat — WhatsApp Business Automation" />
        <meta property="og:description" content="Complete WhatsApp Business automation features: chatbots, AI, eCommerce, team inbox, bulk messaging, and more." />
        <meta property="og:url" content="https://autochat.in/features" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 14px', marginBottom: 24 }}>All Features</div>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Everything You Need to Win on WhatsApp
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            AutoChat gives you a complete toolkit to automate conversations, sell products, support customers, and grow your business — all through WhatsApp.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {features.map((f, i) => (
              <div key={f.title} style={{
                background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20,
                padding: isMobile ? '28px' : '36px 40px',
                display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32, alignItems: 'start',
              }}>
                <div>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                  <h2 style={{ color: '#F9FAFB', fontWeight: 800, fontSize: isMobile ? 22 : 26, marginBottom: 14 }}>{f.title}</h2>
                  <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {f.bullets.map(b => (
                      <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#9CA3AF', fontSize: 15 }}>
                        <span style={{ color: '#25D366', fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 32 }}>Try AutoChat free for 3 days. No credit card required.</p>
          <a href="https://app.autochat.in/register" style={{ display: 'inline-block', padding: '14px 36px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(37,211,102,0.3)' }}>
            Start 3-Days Free Trial →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
