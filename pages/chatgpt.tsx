import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const aiFeatures = [
  { icon: '🧠', title: 'AI Chat Using Your Business Data', desc: 'Train AutoChat\'s AI on your FAQs, product catalog, policies, and knowledge base. Your bot answers with YOUR business knowledge, not generic responses.' },
  { icon: '🎙️', title: 'Text & Voice Conversation AI', desc: 'Customers can interact via both text and voice messages. Our AI transcribes and understands voice messages automatically.' },
  { icon: '⚡', title: 'GPT-4 Integration', desc: 'Powered by OpenAI\'s most advanced GPT-4 model for human-like, context-aware conversations that actually convert.' },
  { icon: '📚', title: 'Train on Your Own Data', desc: 'Upload documents, PDFs, URLs, or product data. The AI learns your business instantly and stays up to date.' },
  { icon: '🎯', title: 'Auto-Respond Intelligently', desc: 'Handle unlimited conversations simultaneously with intelligent routing — escalate to human agents only when truly needed.' },
]

const useCases = [
  { icon: '🎧', title: 'Customer Support', desc: 'Resolve 80% of support queries instantly without human intervention. Available 24/7/365.' },
  { icon: '🎯', title: 'Lead Qualification', desc: 'Ask the right questions, score leads, and route high-intent prospects directly to your sales team.' },
  { icon: '❓', title: 'FAQ Bot', desc: 'Answer product questions, pricing, shipping, returns — anything customers ask, answered instantly.' },
  { icon: '💰', title: 'Sales Assistant', desc: 'Recommend products, share offers, collect orders, and process payments — all automated inside WhatsApp.' },
]

export default function ChatGPT() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>ChatGPT AI WhatsApp Chatbot | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Integrate ChatGPT AI into your WhatsApp chatbot. GPT-4 powered responses, voice AI, business data training, and intelligent auto-replies with AutoChat." />
        <link rel="canonical" href="https://autochat.in/chatgpt" />
        <meta property="og:title" content="ChatGPT AI WhatsApp Chatbot | AutoChat" />
        <meta property="og:description" content="AI-powered WhatsApp chatbot with GPT-4 integration. Train on your data, respond intelligently 24/7." />
        <meta property="og:url" content="https://autochat.in/chatgpt" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #1a0b2e 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ fontSize: 14, color: '#7C3AED', fontWeight: 600 }}>✦ Powered by GPT-4</span>
          </div>
          <h1 style={{ fontSize: isMobile ? 32 : 54, fontWeight: 900, color: '#F9FAFB', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 24 }}>
            AI-Powered WhatsApp Chatbot<br />
            <span style={{ color: '#7C3AED' }}>with ChatGPT</span>
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 19, color: '#9CA3AF', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 36px' }}>
            Give your WhatsApp chatbot a brain. Powered by GPT-4, AutoChat&apos;s AI chatbot understands context, learns your business, and responds like your best support agent.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center' }}>
            <a href="https://app.autochat.in/register" style={{ padding: '15px 32px', background: '#7C3AED', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}>
              🚀 Start Free Trial
            </a>
            <a href="mailto:support@autochat.in?subject=Demo Request" style={{ padding: '15px 32px', border: '1.5px solid rgba(255,255,255,0.2)', color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700 }}>
              📅 Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>
              AI Capabilities That Set You Apart
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 540, margin: '0 auto' }}>Not just a chatbot — an AI-powered business assistant trained specifically for your company.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
            {aiFeatures.map(f => (
              <div key={f.title} style={{ background: '#111827', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16, padding: '28px' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 19, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
            {/* 5th card centered */}
            <div style={{ gridColumn: isMobile ? 'auto' : '1 / -1', display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: '#111827', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16, padding: '28px', maxWidth: 600, width: '100%' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{aiFeatures[4].icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 19, marginBottom: 10 }}>{aiFeatures[4].title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{aiFeatures[4].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>Use Cases</h2>
            <p style={{ color: '#9CA3AF', fontSize: 17 }}>How businesses use AutoChat AI to grow</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: 20 }}>
            {useCases.map(u => (
              <div key={u.title} style={{ background: '#0B0F14', borderRadius: 16, padding: '28px 22px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{u.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{u.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, textAlign: 'center', maxWidth: 760 }}>
          <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 48 }}>
            Get Your AI Chatbot Live in 3 Steps
          </h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20 }}>
            {[
              { step: '01', title: 'Connect Your Data', desc: 'Upload FAQs, product info, and business documents. The AI learns your business instantly.' },
              { step: '02', title: 'Train & Customize', desc: 'Set personality, tone, and escalation rules. Preview how the AI responds to real questions.' },
              { step: '03', title: 'Deploy & Scale', desc: 'Go live on WhatsApp. Watch the AI handle thousands of conversations simultaneously.' },
            ].map(s => (
              <div key={s.step} style={{ flex: 1, background: '#111827', borderRadius: 16, padding: '28px 24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#7C3AED', marginBottom: 12, opacity: 0.7 }}>{s.step}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <a href="https://app.autochat.in/register" style={{ display: 'inline-block', padding: '14px 36px', background: '#7C3AED', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(124,58,237,0.35)' }}>
              Start Building Your AI Chatbot →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
