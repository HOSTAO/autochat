import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const ecomFeatures = [
  { icon: '🔗', title: 'Shopify & WooCommerce Integration', desc: 'Connect your existing online store in minutes. Sync products, inventory, and orders automatically with Shopify, WooCommerce, or any custom platform via API.' },
  { icon: '🛒', title: 'Automated Checkout in WhatsApp', desc: 'Guide customers through a complete purchase flow entirely within WhatsApp. Product selection → cart → payment → confirmation, all in one chat.' },
  { icon: '🔄', title: 'Abandoned Cart Recovery', desc: 'Automatically send personalized WhatsApp messages to customers who left items in their cart. Recover lost revenue with one-click retargeting.' },
  { icon: '📦', title: 'Product Catalog in Chat', desc: 'Display your full product catalog natively inside WhatsApp. Customers can browse, filter, and add to cart without visiting your website.' },
  { icon: '📍', title: 'Order Tracking via WhatsApp', desc: 'Send real-time order status updates and shipping notifications via WhatsApp. Customers get delivery alerts without needing to check email.' },
  { icon: '💳', title: 'Payment Gateway Integration', desc: 'Accept payments via Stripe, PayPal, Razorpay, and more — directly inside the WhatsApp conversation. Secure, fast, and frictionless.' },
]

const stats = [
  { value: '3x', label: 'Higher conversion than email' },
  { value: '98%', label: 'WhatsApp message open rate' },
  { value: '45%', label: 'Avg abandoned cart recovery' },
  { value: '24/7', label: 'Automated selling, always on' },
]

export default function Ecommerce() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>WhatsApp eCommerce | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Sell directly on WhatsApp with AutoChat eCommerce. Shopify & WooCommerce integration, automated checkout, abandoned cart recovery, product catalog, and payment gateways." />
        <link rel="canonical" href="https://autochat.in/ecommerce" />
        <meta property="og:title" content="WhatsApp eCommerce | AutoChat" />
        <meta property="og:description" content="Turn WhatsApp into your highest-converting sales channel. Automated checkout, catalog browsing, and cart recovery." />
        <meta property="og:url" content="https://autochat.in/ecommerce" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 60%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ fontSize: 14, color: '#25D366', fontWeight: 600 }}>🛒 WhatsApp eCommerce</span>
          </div>
          <h1 style={{ fontSize: isMobile ? 32 : 54, fontWeight: 900, color: '#F9FAFB', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 24 }}>
            WhatsApp eCommerce —<br />
            <span style={{ color: '#25D366' }}>Sell Directly in WhatsApp</span>
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 19, color: '#9CA3AF', lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px' }}>
            Transform your WhatsApp into a fully automated sales machine. From product discovery to payment — all inside the world&apos;s most popular messaging app.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center' }}>
            <a href="https://app.autochat.in/register" style={{ padding: '15px 32px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(37,211,102,0.35)' }}>
              🚀 Start Free Trial
            </a>
            <a href="mailto:support@autochat.in?subject=Demo Request" style={{ padding: '15px 32px', border: '1.5px solid rgba(255,255,255,0.2)', color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700 }}>
              📅 Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#111827', padding: isMobile ? '40px 24px' : '52px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 24 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 36 : 44, fontWeight: 900, color: '#25D366', letterSpacing: '-1px', marginBottom: 6 }}>{s.value}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>
              Everything You Need to Sell on WhatsApp
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 540, margin: '0 auto' }}>Complete eCommerce automation from product browse to post-purchase support.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {ecomFeatures.map(f => (
              <div key={f.title} style={{ background: '#111827', border: '1px solid rgba(37,211,102,0.15)', borderRadius: 16, padding: '28px' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={{ ...W, textAlign: 'center', maxWidth: 800 }}>
          <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 16 }}>
            Works With Your Existing Store
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 40 }}>No need to rebuild your store. AutoChat plugs into your existing eCommerce platform.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 48 }}>
            {['Shopify', 'WooCommerce', 'Magento', 'Custom API', 'BigCommerce', 'PrestaShop', 'OpenCart', 'Any Platform'].map(p => (
              <div key={p} style={{ background: '#0B0F14', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 10, padding: '12px 22px', color: '#F9FAFB', fontSize: 14, fontWeight: 600 }}>{p}</div>
            ))}
          </div>
          <a href="https://app.autochat.in/register" style={{ display: 'inline-block', padding: '14px 36px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(37,211,102,0.3)' }}>
            Start Selling on WhatsApp Today →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
