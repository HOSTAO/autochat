import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const useCases = [
  { icon: '🏠', title: 'Real Estate VA', desc: 'Deliver 24/7 support and property info via WhatsApp chatbot with integrated real estate data.', img: '/images/Real-Estate-1.png' },
  { icon: '🎓', title: 'School Chatbot', desc: 'Enhance student experience with a WhatsApp chatbot for course schedules, assignments, and grades.', img: '/images/School-Chatbot.png' },
  { icon: '⚖️', title: 'Law Firm Chatbot', desc: 'Enhance client communication and streamline processes with a legal chatbot providing FAQs answers and case updates.', img: '/images/Law-Firm.png' },
  { icon: '🏦', title: 'Banking Chatbot', desc: 'Offer financial support via a WhatsApp chatbot integrating banking data for inquiries on accounts, transactions, and loans.', img: '/images/Banking-Chatbot.png' },
  { icon: '✈️', title: 'Travel Planning Chatbot', desc: 'Help customers plan their trip with a travel planning chatbot that can answer questions about travel itineraries and local attractions.', img: '/images/Travel-Planning-Chatbot.png' },
  { icon: '🎧', title: 'Support Chatbot', desc: 'Boost efficiency and cut costs with a WhatsApp chatbot for customer assistance and troubleshooting.', img: '/images/Support-Chatbot.png' },
  { icon: '🏨', title: 'Hotel Concierge Chatbot', desc: 'Enhance guest experience with a WhatsApp chatbot for room service, recommendations, and FAQs.', img: '/images/Hotel-chatbot.png' },
  { icon: '💼', title: 'Business Services Chatbot', desc: 'Enhance engagement with a WhatsApp chatbot answering queries, giving updates, and scheduling appointments.', img: '/images/Business-Services.png' },
]

const aiFeatures = [
  { icon: '🤖', title: 'No Code Chatbot Builder', desc: 'Build powerful chatbots without programming. Autorespond, qualify leads, answer FAQs, and more.' },
  { icon: '🛒', title: 'WhatsApp Commerce', desc: 'Offer products directly within WhatsApp. Integrate with WooCommerce, Shopify, or custom platforms.' },
  { icon: '📨', title: 'Bulk Messaging & Team Inbox', desc: 'Reach thousands with a click. Assign incoming chats to multiple agents for efficient support.' },
  { icon: '✨', title: 'GPT-4 AI Chatbot', desc: 'Build powerful chatbots without programming. Autorespond, qualify leads, answer FAQs, and more.' },
]

const faqs = [
  { q: "What is AutoChat's OpenAI ChatGPT Integration?", a: "AutoChat's OpenAI ChatGPT Integration is a cutting-edge feature that revolutionizes customer service by leveraging the capabilities of OpenAI GPT artificial intelligence. This empowers businesses to provide interactive customer support without requiring technical expertise." },
  { q: 'How can I incorporate my business data into the Chatbot?', a: "AutoChat allows businesses to effortlessly incorporate their data sources, such as PDFs, Word documents, or websites, into the Chatbot. This enables the Chatbot to provide answers directly from these sources, all without requiring technical expertise." },
  { q: 'How does the long memory feature improve conversations?', a: "AutoChat's ChatGPT Integration feature boasts a long memory, enhancing the Chatbot's ability to provide a more natural and conversational experience to customers. This ensures a smoother and more personalized interaction." },
  { q: 'What industries can benefit from AI-powered chatbots?', a: "AutoChat's OpenAI-powered Chatbots cater to diverse industries, including real estate, education, law, banking, travel planning, support, hotels, and business services. These chatbots are designed to deliver 24/7 support and streamline processes across all sectors." },
]

export default function AIChatbot() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>Open AI Chat | ChatGPT OpenAI Chat Integration | AutoChat</title>
        <meta name="description" content="Unlock the future of customer interactions with OpenAI-powered AI chatbots on Autochat. Business data as source, long memory chats, and GPT-4 AI." />
        <link rel="canonical" href="https://autochat.in/ai-chatbot" />
        <meta property="og:title" content="Open AI Chat | ChatGPT OpenAI Chat Integration | AutoChat" />
        <meta property="og:description" content="OpenAI-powered AI chatbots for WhatsApp. Train on your business data, long memory conversations, GPT-4 integration." />
        <meta property="og:url" content="https://autochat.in/ai-chatbot" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #1a0b2e 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ fontSize: 14, color: '#7C3AED', fontWeight: 600 }}>✦ Open AI Chat</span>
          </div>
          <h1 style={{ fontSize: isMobile ? 32 : 54, fontWeight: 900, color: '#F9FAFB', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 12 }}>
            Unlock the future of customer interactions
          </h1>
          <h2 style={{ fontSize: isMobile ? 20 : 28, fontWeight: 700, color: '#7C3AED', marginBottom: 24 }}>
            with OpenAI-powered AI chatbots on Autochat.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, textAlign: 'left', marginBottom: 36 }}>
            <div style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: '20px' }}>
              <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Business Data as Source</h3>
              <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.6 }}>Effortlessly incorporate your business data sources, such as PDFs, Word documents, or your website, into the Chatbot, enabling it to provide answers directly from those sources.</p>
            </div>
            <div style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: '20px' }}>
              <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Long Memory Chats</h3>
              <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.6 }}>AutoChat&apos;s ChatGPT Integration feature has a long memory, allowing it to provide a more natural and conversational experience to the customer.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center' }}>
            <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 32px', background: '#7C3AED', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}>
              🚀 Start Free Trial
            </a>
            <a href="/contact" style={{ padding: '15px 32px', border: '1.5px solid rgba(255,255,255,0.2)', color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700 }}>
              📅 Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>FUTURE OF CUSTOMER ENGAGEMENT</div>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px' }}>Let&apos;s Check The Possibilities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 20 }}>
            {useCases.map(u => (
              <div key={u.title} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{u.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{u.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 13, lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>What we are offering</div>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px' }}>Powerful WhatsApp Solutions for Enhanced Business Performance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
            {aiFeatures.map(f => (
              <div key={f.title} style={{ background: '#0B0F14', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 36, textAlign: 'center' }}>Most Popular Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: '#111827', borderRadius: 12, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{faq.a}</div>
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
          <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '14px 36px', background: '#7C3AED', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}>
            Start 3-Days Free Trial →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
