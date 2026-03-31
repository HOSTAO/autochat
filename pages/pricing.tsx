import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const plans = [
  {
    name: 'Starter',
    price: '$50',
    period: '/mo',
    popular: false,
    color: '#25D366',
    features: [
      '1,000 Free Conversations included',
      '5 User Agents',
      '20,000 Conversations/month',
      '1 Chatbot',
      'API & Webhooks',
      'Payment Gateways',
      'eCommerce Bot',
      'ChatGPT AI',
      'Text & Voice AI',
      '100K Contacts',
      'Custom Integration',
      'Support',
      'Review Management',
    ],
  },
  {
    name: 'Medium',
    price: '$100',
    period: '/mo',
    popular: true,
    color: '#7C3AED',
    features: [
      '1,000 Free Conversations included',
      '20 User Agents',
      '50,000 Conversations/month',
      '20 Chatbots',
      'Everything in Starter',
      'Advanced Integration',
      'Priority Support',
      'Team Collaboration Tools',
      'Advanced Analytics',
      'Custom Branding',
    ],
  },
  {
    name: 'Premium',
    price: '$350',
    period: '/mo',
    popular: false,
    color: '#F59E0B',
    features: [
      '1,000 Free Conversations included',
      '100 User Agents',
      '100,000 Conversations/month',
      '100 Chatbots',
      '500K Contacts',
      'Custom Integration',
      'Dedicated Support Manager',
      'Pro Review Management',
      'SLA Guarantee',
      'White-label Options',
      'Enterprise Onboarding',
    ],
  },
]

export default function Pricing() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>Pricing | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="AutoChat pricing plans starting at $50/mo. Starter, Medium, and Premium plans for WhatsApp Business automation. Try free for 3 days." />
        <link rel="canonical" href="https://autochat.in/pricing" />
        <meta property="og:title" content="Pricing | AutoChat — WhatsApp Business Automation" />
        <meta property="og:description" content="Simple, transparent pricing. Start at $50/mo. 3-day free trial included." />
        <meta property="og:url" content="https://autochat.in/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h1 style={{ fontSize: isMobile ? 32 : 52, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7 }}>
            Start free for 3 days. No credit card required. Scale as you grow.
          </p>
          <div style={{ marginTop: 20, padding: '12px 20px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, display: 'inline-block' }}>
            <p style={{ color: '#F59E0B', fontSize: 14, fontWeight: 600, margin: 0 }}>
              ⚠️ All plans shown at Official Price +. Meta WhatsApp API charges apply separately based on conversation volume.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: '#111827',
                border: plan.popular ? `2px solid ${plan.color}` : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20, padding: '32px 28px',
                position: 'relative',
                boxShadow: plan.popular ? `0 0 40px ${plan.color}22` : 'none',
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: plan.color, color: '#fff', fontSize: 12, fontWeight: 800,
                    padding: '4px 16px', borderRadius: 20, whiteSpace: 'nowrap',
                    letterSpacing: '0.5px',
                  }}>MOST POPULAR</div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 22, marginBottom: 8 }}>{plan.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, marginBottom: 2 }}>Official Price +</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, color: plan.color, letterSpacing: '-2px' }}>{plan.price}</span>
                    <span style={{ fontSize: 16, color: '#9CA3AF', fontWeight: 600 }}>{plan.period}</span>
                  </div>
                </div>

                <a href="https://app.autochat.in/register" style={{
                  display: 'block', textAlign: 'center', padding: '13px',
                  background: plan.popular ? plan.color : 'transparent',
                  border: `2px solid ${plan.color}`,
                  color: plan.popular ? '#fff' : plan.color,
                  textDecoration: 'none', borderRadius: 10, fontSize: 15, fontWeight: 800,
                  marginBottom: 28,
                }}>Sign Up</a>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#9CA3AF', fontSize: 14 }}>
                      <span style={{ color: plan.color, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Meta note */}
          <div style={{ marginTop: 40, textAlign: 'center', padding: '20px', background: '#111827', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, maxWidth: 700, margin: '0 auto' }}>
              <strong style={{ color: '#F9FAFB' }}>Note on WhatsApp API Charges:</strong> Meta charges separately for WhatsApp Business API conversations. These fees are in addition to your AutoChat subscription and vary by country and conversation type (marketing, utility, service). The first 1,000 conversations/month from Meta are free.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 36, textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is there a free trial?', a: 'Yes! All plans include a 3-day free trial. No credit card required to get started.' },
              { q: 'What are the Meta WhatsApp API charges?', a: 'Meta charges separately for conversations over and above 1,000/month. These rates vary by country and conversation type. AutoChat\'s subscription fee covers platform access; Meta charges cover actual message delivery.' },
              { q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely. You can change your plan at any time from your dashboard. Upgrades take effect immediately; downgrades at the next billing cycle.' },
              { q: 'Do I need technical skills to get started?', a: 'No! AutoChat is designed for non-technical users. Our drag-and-drop chatbot builder and intuitive dashboard require zero coding knowledge.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0B0F14', borderRadius: 12, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
