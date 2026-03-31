import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

export default function ThanksPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <Head>
        <title>Thank You | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Thank you for contacting AutoChat. We will get back to you shortly." />
        <meta name="robots" content="noindex" />
      </Head>
      <Nav />

      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '100px 24px 80px' : '140px 24px 120px', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎉</div>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Thank You!
          </h1>
          <p style={{ fontSize: 18, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 40 }}>
            We&apos;ve received your message and will get back to you shortly. Our team typically responds within a few hours.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center' }}>
            <Link href="/" style={{
              padding: '14px 32px', background: '#25D366', color: '#fff',
              textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800,
              boxShadow: '0 0 30px rgba(37,211,102,0.35)',
            }}>← Back to Home</Link>
            <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 32px', border: '1.5px solid rgba(255,255,255,0.2)',
              color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700,
            }}>Start Free Trial</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
