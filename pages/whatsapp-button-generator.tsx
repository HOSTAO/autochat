import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'

export default function WhatsAppButtonGenerator() {
  const isMobile = useIsMobile()
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('Hello! I found you on your website.')
  const [buttonText, setButtonText] = useState('Chat on WhatsApp')
  const [copied, setCopied] = useState(false)

  const cleanPhone = phone.replace(/[^0-9]/g, '')
  const encodedMsg = encodeURIComponent(message)
  const waLink = `https://wa.me/${cleanPhone}${message ? `?text=${encodedMsg}` : ''}`
  const htmlCode = `<a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-family:sans-serif;font-weight:700;font-size:15px;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  ${buttonText}
</a>`

  const copyCode = () => {
    navigator.clipboard.writeText(htmlCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Head>
        <title>WhatsApp Button Generator — Free Click-to-Chat | AutoChat</title>
        <meta name="description" content="Generate a free WhatsApp chat button for your website. Customize your WhatsApp link, pre-fill message, and get the embed code instantly." />
        <link rel="canonical" href="https://autochat.in/whatsapp-button-generator" />
        <meta property="og:title" content="Free WhatsApp Button Generator | AutoChat" />
        <meta property="og:description" content="Create a click-to-chat WhatsApp button for your website in seconds." />
        <meta property="og:url" content="https://autochat.in/whatsapp-button-generator" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 14px', marginBottom: 24 }}>💬 Free Tool</div>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            WhatsApp Button Generator
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            Create a free WhatsApp chat button for your website. Customize the link and pre-filled message, then copy the HTML embed code.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32 }}>
            {/* Form */}
            <div style={{ background: '#111827', borderRadius: 16, padding: '28px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 20, marginBottom: 24 }}>Configure Your Button</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900 (with country code)"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: '#0B0F14', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#F9FAFB', fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Pre-filled Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Hello! I found you on your website."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: '#0B0F14', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#F9FAFB', fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Button Text</label>
                  <input
                    type="text"
                    value={buttonText}
                    onChange={e => setButtonText(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: '#0B0F14', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#F9FAFB', fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  />
                </div>
              </div>
            </div>

            {/* Preview & Code */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Preview */}
              <div style={{ background: '#111827', borderRadius: 16, padding: '24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>Preview</h3>
                <a
                  href={cleanPhone ? waLink : '#'}
                  target={cleanPhone ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={e => !cleanPhone && e.preventDefault()}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#25D366', color: '#fff', padding: '12px 24px',
                    borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {buttonText || 'Chat on WhatsApp'}
                </a>
              </div>

              {/* Generated Link */}
              {cleanPhone && (
                <div style={{ background: '#111827', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>WhatsApp Link</h3>
                  <code style={{ color: '#25D366', fontSize: 12, wordBreak: 'break-all', display: 'block', lineHeight: 1.6 }}>{waLink}</code>
                </div>
              )}

              {/* HTML Code */}
              <div style={{ background: '#111827', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 14 }}>HTML Embed Code</h3>
                  <button
                    onClick={copyCode}
                    style={{
                      padding: '6px 14px', background: copied ? '#25D366' : 'rgba(37,211,102,0.15)',
                      color: '#25D366', border: '1px solid rgba(37,211,102,0.3)',
                      borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >{copied ? '✓ Copied!' : 'Copy Code'}</button>
                </div>
                <pre style={{ color: '#9CA3AF', fontSize: 11, overflow: 'auto', maxHeight: 160, margin: 0, lineHeight: 1.5, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{htmlCode}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 24px', background: '#111827' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? 22 : 32, fontWeight: 800, color: '#F9FAFB', marginBottom: 12 }}>
            Want More Advanced WhatsApp Tools?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, marginBottom: 28, lineHeight: 1.7 }}>
            AutoChat gives you advanced WhatsApp automation tools — chatbots, bulk messaging, team inbox, AI chatbot, and more.
          </p>
          <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '13px 32px', background: '#25D366',
            color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 15, fontWeight: 800,
            boxShadow: '0 0 30px rgba(37,211,102,0.3)',
          }}>Start Free Trial →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
