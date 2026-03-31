import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const milestones = [
  { year: '2021', title: 'AutoChat Founded', desc: 'Started with a vision to make WhatsApp Business accessible to every business.' },
  { year: '2022', title: 'First 50 Customers', desc: 'Grew to 50 happy customers across India and the Middle East.' },
  { year: '2023', title: 'ChatGPT Integration', desc: 'Launched AI-powered chatbot with GPT-4 integration — a first for WhatsApp automation.' },
  { year: '2024', title: '200+ Customers', desc: 'Crossed 200+ active customers with 5-star reviews. Expanding globally.' },
]

export default function About() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>About Us | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Learn about AutoChat — our mission to help businesses automate WhatsApp communication and grow revenue. 200+ happy customers, 5-star rated." />
        <link rel="canonical" href="https://autochat.in/about" />
        <meta property="og:title" content="About Us | AutoChat — WhatsApp Business Automation" />
        <meta property="og:description" content="AutoChat helps businesses automate WhatsApp communication and grow revenue. Trusted by 200+ businesses worldwide." />
        <meta property="og:url" content="https://autochat.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            About <span style={{ color: '#25D366' }}>AutoChat</span>
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            We&apos;re on a mission to help every business turn WhatsApp conversations into revenue — through automation, AI, and world-class tools.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#111827', padding: isMobile ? '40px 24px' : '52px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 24 }}>
            {[['200+', 'Happy Customers'], ['5/5', 'Star Rating'], ['2 Days', 'To Go Live']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 36 : 44, fontWeight: 900, color: '#25D366', letterSpacing: '-1px', marginBottom: 6 }}>{val}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 52, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 12px', marginBottom: 20 }}>Our Mission</div>
            <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 20, lineHeight: 1.2 }}>
              Helping Businesses Grow Through WhatsApp Automation
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
              At AutoChat, we believe WhatsApp is the most powerful business communication channel in the world — but most businesses barely scratch the surface of its potential.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
              We built AutoChat to change that. Our platform gives businesses of every size the tools to automate customer communication, sell products directly in chat, and deliver exceptional support — all through WhatsApp.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.7 }}>
              From solo entrepreneurs to enterprise teams, AutoChat helps you convert more conversations into customers, and more customers into loyal fans.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '🎯', title: 'Customer-First', desc: 'We build for the businesses using us, not for venture capitalists.' },
              { icon: '⚡', title: 'Speed to Value', desc: 'Get your WhatsApp Business account live and your chatbot running in days, not months.' },
              { icon: '🔒', title: 'Security & Compliance', desc: 'Official Meta Business Partner. Fully compliant with WhatsApp Business policies.' },
              { icon: '🌍', title: 'Global Reach', desc: 'Serving businesses across India, Middle East, Southeast Asia, and beyond.' },
            ].map(v => (
              <div key={v.title} style={{ background: '#111827', borderRadius: 14, padding: '18px 20px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={{ ...W, maxWidth: 800 }}>
          <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 48, textAlign: 'center' }}>Our Journey</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: i < milestones.length - 1 ? 40 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 80 }}>
                  <div style={{ background: '#25D366', color: '#fff', fontWeight: 800, fontSize: 13, padding: '6px 12px', borderRadius: 8, whiteSpace: 'nowrap' }}>{m.year}</div>
                  {i < milestones.length - 1 && <div style={{ width: 2, background: 'rgba(37,211,102,0.2)', flex: 1, minHeight: 40, marginTop: 8 }} />}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 16 }}>Join Our Growing Community</h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 32 }}>200+ businesses trust AutoChat. Start your free trial today.</p>
          <a href="https://app.autochat.in/register" style={{ display: 'inline-block', padding: '14px 36px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(37,211,102,0.3)' }}>
            Start 3-Days Free Trial →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
