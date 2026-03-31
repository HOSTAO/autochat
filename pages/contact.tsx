import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'

export default function Contact() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.slice(0, 100),
          email: form.email.slice(0, 254),
          company: form.company.slice(0, 100),
          message: form.message.slice(0, 5000),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Submission failed' }))
        throw new Error(data.error || 'Submission failed')
      }

      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', background: '#0B0F14',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10,
    color: '#F9FAFB', fontSize: 15, outline: 'none', fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  return (
    <>
      <Head>
        <title>Contact Us | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Get in touch with the AutoChat team. Contact us for support, demos, partnerships, or any questions about WhatsApp Business automation." />
        <link rel="canonical" href="https://autochat.in/contact" />
        <meta property="og:title" content="Contact Us | AutoChat — WhatsApp Business Automation" />
        <meta property="og:description" content="Reach out to AutoChat for demos, support, and partnerships." />
        <meta property="og:url" content="https://autochat.in/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            Have a question? Want to book a demo? We&apos;d love to hear from you. Our team typically responds within a few hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 48, alignItems: 'start', maxWidth: 1000 }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#F9FAFB', marginBottom: 28 }}>Contact Options</h2>

            {/* WhatsApp CTA */}
            <div style={{ background: '#111827', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 16, padding: '24px', marginBottom: 20 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>💬</div>
              <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Chat on WhatsApp</h3>
              <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                Get instant answers from our team. Click below to start a WhatsApp conversation.
              </p>
              <a href="https://wa.me/message/autochat" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 20px', background: '#25D366', color: '#fff',
                textDecoration: 'none', borderRadius: 8, fontSize: 14, fontWeight: 700,
              }}>💬 Chat with us on WhatsApp</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '📧', label: 'Email', value: 'support@autochat.in', href: 'mailto:support@autochat.in' },
                { icon: '📅', label: 'Book a Demo', value: 'Schedule a live walkthrough', href: 'mailto:support@autochat.in?subject=Demo Request' },
                { icon: '📱', label: 'Twitter / X', value: '@AutoChatOficial', href: 'https://twitter.com/AutoChatOficial' },
              ].map(c => (
                <div key={c.label} style={{ background: '#111827', borderRadius: 14, padding: '18px 20px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: '#9CA3AF', fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{c.label}</div>
                    <a href={c.href} style={{ color: '#F9FAFB', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{c.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 28px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#F9FAFB', marginBottom: 24 }}>Send Us a Message</h2>

            {status === 'error' && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '16px', marginBottom: 16, textAlign: 'center' }}>
                <div style={{ color: '#EF4444', fontWeight: 600, fontSize: 14 }}>{errorMsg || 'Something went wrong. Please try again.'}</div>
              </div>
            )}

            {status === 'success' ? (
              <div style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 12, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                <div style={{ color: '#25D366', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Message Sent!</div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>We&apos;ll get back to you within a few hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name" style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Company</label>
                  <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    placeholder="Your company name" style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your project or question..." style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" disabled={status === 'loading'} style={{
                  padding: '13px', background: '#25D366', color: '#fff', border: 'none',
                  borderRadius: 10, fontSize: 15, fontWeight: 800, cursor: 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1, fontFamily: 'inherit',
                }}>
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
