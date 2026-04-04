'use client'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('https://bestemail.in/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'autochat' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ background: '#0a1628', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: 'inherit' }}>
          WhatsApp automation tips, weekly
        </h3>
        <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
          Practical insights on WhatsApp marketing, chatbots, and business automation — straight to your inbox.
        </p>

        {status === 'success' ? (
          <div style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 12, padding: '14px 24px', color: '#25D366', fontWeight: 600 }}>
            ✓ You&apos;re in! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: 10, maxWidth: 460, margin: '0 auto 16px', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{ flex: 1, minWidth: 200, padding: '13px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: '#fff', fontSize: 15, outline: 'none' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{ padding: '13px 24px', background: '#25D366', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', whiteSpace: 'nowrap', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p style={{ color: '#f87171', fontSize: 13, marginTop: 8 }}>Something went wrong. Please try again.</p>
        )}

        <p style={{ color: '#475569', fontSize: 12, marginTop: 14 }}>
          No spam · Unsubscribe anytime ·{' '}
          <a href="https://bestemail.in" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>
            Powered by BestEmail.in
          </a>
        </p>
      </div>
    </section>
  )
}
