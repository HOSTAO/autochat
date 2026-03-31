import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'

const quickLinks = [
  { icon: '🚀', title: 'Getting Started', desc: 'Set up WhatsApp Business API and connect AutoChat' },
  { icon: '🤖', title: 'Chatbot Builder', desc: 'Build no-code chatbots for WhatsApp' },
  { icon: '📨', title: 'Bulk Messaging', desc: 'Send campaigns and broadcasts' },
  { icon: '🛒', title: 'WhatsApp Commerce', desc: 'Set up product catalogs and orders' },
  { icon: '💳', title: 'Billing & Plans', desc: 'Manage your subscription' },
  { icon: '🔌', title: 'Integrations', desc: 'Connect with WooCommerce, Shopify, CRMs' },
]

const faqs = [
  { q: 'How do I connect WhatsApp Business API?', a: 'Sign up on AutoChat, go to Settings → WhatsApp → Connect. Follow the wizard to verify your business number with Meta. Takes about 10 minutes.' },
  { q: 'Can I use AutoChat with my existing WhatsApp number?', a: 'Yes — you can migrate your existing WhatsApp Business number to the API. Your chat history won\'t transfer, but your number stays the same.' },
  { q: 'How does the chatbot builder work?', a: 'Use our visual drag-and-drop builder to create conversation flows. Set triggers (keywords, buttons), add responses, and deploy — no coding needed.' },
  { q: 'What are the messaging limits?', a: 'Meta sets messaging limits based on your business tier. New accounts start at 1,000 business-initiated messages/day. This increases as you build quality signals.' },
  { q: 'Can I send bulk WhatsApp messages?', a: 'Yes — use our Broadcast feature to send template-approved messages to thousands of contacts. All messages must use Meta-approved templates.' },
  { q: 'How do I integrate with WooCommerce or Shopify?', a: 'Go to Integrations → select your platform → follow the setup guide. Products sync automatically and customers can browse/order via WhatsApp.' },
  { q: 'Is the GPT-4 chatbot included?', a: 'AI chatbot is available on Pro and Enterprise plans. It uses GPT-4 to understand customer queries, answer FAQs, and qualify leads intelligently.' },
  { q: 'How much does AutoChat cost?', a: 'Plans start at $50/month. See our pricing page for full details on Starter, Pro, and Enterprise plans.' },
  { q: 'Can multiple agents handle chats?', a: 'Yes — Team Inbox lets you assign chats to different agents, track response times, and manage workload across your support team.' },
  { q: 'How do I cancel my subscription?', a: 'Go to Settings → Billing → Cancel. Your account stays active until the end of your billing period. No cancellation fees.' },
]

export default function SupportPage() {
  const isMobile = useIsMobile()
  const [search, setSearch] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Head>
        <title>Support — AutoChat | WhatsApp Automation Help Center</title>
        <meta name="description" content="Get help with AutoChat WhatsApp automation. Browse guides, FAQs, and contact support." />
      </Head>
      <Nav />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', padding: isMobile ? '60px 16px' : '80px 20px', textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 800, marginBottom: 12 }}>How can we help?</h1>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Search our help center or browse topics below
          </p>
          <div style={{ maxWidth: 500, margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search for help articles, FAQs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '16px 24px', borderRadius: 12, border: 'none', fontSize: 16, outline: 'none' }}
            />
          </div>
        </section>

        {/* Quick Links */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: isMobile ? '40px 16px' : '60px 20px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>Quick Links</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {quickLinks.map((l, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
                <span style={{ fontSize: 28 }}>{l.icon}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, margin: '10px 0 4px' }}>{l.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#f9fafb', padding: isMobile ? '40px 16px' : '60px 20px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>Frequently Asked Questions</h2>
            {filtered.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '18px 0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 16, fontWeight: 600, color: '#111', padding: 0 }}>
                  {f.q}
                  <span style={{ fontSize: 24, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.2s' }}>+</span>
                </button>
                {openFaq === i && <p style={{ color: '#4b5563', marginTop: 12, lineHeight: 1.7, fontSize: 15 }}>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ background: '#059669', textAlign: 'center', padding: '60px 20px', color: '#fff' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Still need help?</h2>
          <p style={{ opacity: 0.9, marginBottom: 24 }}>Our support team responds within 24 hours</p>
          <a href="mailto:support@autochat.in" style={{ display: 'inline-block', padding: '14px 36px', background: '#fff', color: '#059669', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>
            Contact Support
          </a>
          <p style={{ marginTop: 12, opacity: 0.7, fontSize: 14 }}>support@autochat.in</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
