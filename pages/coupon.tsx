import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const coupons = [
  { code: 'AUTOCHAT10', discount: '10% Off', description: 'Get 10% off on any plan for your first 3 months', valid: 'Valid for new users' },
  { code: 'WHATSAPP20', discount: '20% Off', description: '20% discount on the Medium or Premium plan', valid: 'Valid for annual subscriptions' },
  { code: 'TRIAL3', discount: '3-Day Free Trial', description: 'Start your free trial on any plan — no credit card required', valid: 'Always valid for new accounts' },
]

export default function CouponCode() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>Autochat Coupon Code | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Save big on AutoChat with exclusive coupon codes! Unlock powerful WhatsApp automation tools and streamline your business today." />
        <link rel="canonical" href="https://autochat.in/coupon" />
        <meta property="og:title" content="Autochat Coupon Code | AutoChat" />
        <meta property="og:description" content="Exclusive coupon codes for AutoChat — save on WhatsApp automation plans." />
        <meta property="og:url" content="https://autochat.in/coupon" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 14px', marginBottom: 24 }}>🎟️ Coupon Code</div>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Autochat Coupon Code
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            Save big on AutoChat with exclusive coupon codes! Unlock powerful WhatsApp automation tools and streamline your business today.
          </p>
        </div>
      </section>

      {/* Coupon Content */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, maxWidth: 860 }}>
          <div style={{ background: '#111827', borderRadius: 16, padding: isMobile ? '28px' : '40px', border: '1px solid rgba(37,211,102,0.2)', marginBottom: 40 }}>
            <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, color: '#F9FAFB', marginBottom: 16 }}>Exclusive Coupon Codes for AutoChat</h2>
            <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              Unlock powerful WhatsApp automation tools and save big with our exclusive coupon codes! Whether you&apos;re a small business or a large enterprise, AutoChat has the perfect solution to streamline your communication and boost customer engagement.
            </p>

            {/* Coupons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {coupons.map(c => (
                <div key={c.code} style={{ background: '#0B0F14', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 12, padding: '20px 24px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: 16, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#25D366', fontWeight: 800, fontSize: 20, letterSpacing: '2px', marginBottom: 6 }}>{c.code}</div>
                    <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.discount}</div>
                    <div style={{ color: '#9CA3AF', fontSize: 14 }}>{c.description}</div>
                    <div style={{ color: '#6B7280', fontSize: 12, marginTop: 4 }}>{c.valid}</div>
                  </div>
                  <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{
                    padding: '11px 24px', background: '#25D366', color: '#fff',
                    textDecoration: 'none', borderRadius: 8, fontSize: 14, fontWeight: 700,
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}>Use Code →</a>
                </div>
              ))}
            </div>
          </div>

          {/* How to Redeem */}
          <div style={{ background: '#111827', borderRadius: 16, padding: isMobile ? '28px' : '36px', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 800, color: '#F9FAFB', marginBottom: 24 }}>How to Redeem Your Coupon Code</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { step: '1', text: 'Sign Up or Log In to your AutoChat account.' },
                { step: '2', text: 'Choose Your Plan that best fits your business needs.' },
                { step: '3', text: 'Enter the Coupon Code at checkout and enjoy instant savings!' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 32, height: 32, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.6, paddingTop: 6 }}>{item.text}</div>
                </div>
              ))}
            </div>
            <p style={{ color: '#6B7280', fontSize: 13, marginTop: 20 }}>*Terms and conditions apply. Offers valid for a limited time only.</p>
            <p style={{ color: '#9CA3AF', fontSize: 15, marginTop: 16, lineHeight: 1.7 }}>
              Don&apos;t miss out! Use these coupon codes to get started with the most advanced WhatsApp automation platform today.
            </p>
            <a href="https://panel.autochat.in/signup" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: 24, padding: '13px 32px', background: '#25D366',
              color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 15, fontWeight: 800,
              boxShadow: '0 0 30px rgba(37,211,102,0.3)',
            }}>Sign Up Now →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
