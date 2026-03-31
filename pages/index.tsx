import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AutoChat',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://autochat.in',
  description: 'AI-Driven WhatsApp Business Automation SaaS — chatbots, bulk messaging, eCommerce, ChatGPT integration',
  offers: { '@type': 'Offer', price: '50', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '200' },
}

const testimonials = [
  { name: 'Akhil Shyam', role: 'Founder, The Cozy Corner', quote: 'Autochat helped us streamline our communication and boost sales by 20%. Our customers love the convenience of shopping directly on WhatsApp!', img: '/images/Testimonial1.png' },
  { name: 'Remya Santhosh', role: 'CEO, TechByte Solutions', quote: "Autochat's chatbots and team inbox have revolutionized our customer support. We now respond to inquiries faster and have happier customers.", img: '/images/Testimonial2.png' },
  { name: 'Priya Raman', role: 'Marketing Manager, GreenVibes', quote: 'I love the ease of use of Autochat! The no-code chatbot builder and native WhatsApp integration have saved me hours and provided immense value.', img: '/images/Testimonial3.png' },
  { name: 'Vikram Singh', role: 'Head of Marketing, EduConnect', quote: 'Sending bulk messages with Autochat has been a game-changer. We can now reach thousands of potential customers with ease, saving us time and resources.', img: '/images/Testimonial4.png' },
  { name: "Riya Sharma", role: "Founder, Rida's Boutique", quote: "Autochat's chatbots helped us personalize communication and connect with customers on a deeper level. We've seen a significant increase in customer satisfaction and loyalty.", img: '/images/Testimonial5.png' },
  { name: 'Akash Menon', role: 'CTO, FitForLife', quote: 'The team inbox feature in Autochat has revolutionized our internal communication. We can now collaborate seamlessly and respond to customer inquiries promptly, leading to improved efficiency.', img: '/images/Testimonial6.png' },
]

const features4 = [
  { icon: '🤖', title: 'No Code Chatbot Builder', desc: 'Build powerful chatbots without any programming knowledge. Autorespond, qualify leads, and answer FAQs 24/7.' },
  { icon: '🛒', title: 'WhatsApp Commerce', desc: 'Offer products directly within WhatsApp. Integrate seamlessly with WooCommerce, Shopify, or custom platforms.' },
  { icon: '📨', title: 'Bulk Messaging & Team Inbox', desc: 'Reach thousands of customers with a single click. Assign chats to multiple agents for seamless support.' },
  { icon: '✨', title: 'GPT-4 AI Chatbot', desc: 'Autorespond, qualify leads, and answer FAQs intelligently with the power of GPT-4 AI.' },
]

const integrations = [
  'Shopify', 'WooCommerce', 'Zapier', 'Make.com', 'Google Apps', 'OpenAI', 'Stripe', 'PayPal',
]

const whyUs = [
  { icon: '⚡', title: 'Official WA Account in 2 Days', desc: 'Get your Official WhatsApp Business API account set up and running within 2 business days.' },
  { icon: '🔗', title: 'Connect POS/ERP/eCommerce', desc: 'Integrate with your existing systems — POS, ERP, WooCommerce, Shopify, and more.' },
  { icon: '🔌', title: 'Webhooks & API Integration', desc: 'Powerful REST API and webhooks to connect with any third-party platform or custom system.' },
  { icon: '🔔', title: 'Instant Notifications at Scale', desc: 'Deliver instant transactional and marketing notifications to thousands of customers at once.' },
]

export default function Home() {
  const isMobile = useIsMobile()
  const W = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }

  return (
    <>
      <Head>
        <title>AutoChat — WhatsApp Business Automation | AI-Driven WhatsApp Chatbot & Bulk Messaging</title>
        <meta name="description" content="AutoChat is the leading WhatsApp Business automation platform. Build chatbots, send bulk messages, sell via WhatsApp eCommerce, and integrate ChatGPT AI. Start free trial today." />
        <meta name="keywords" content="WhatsApp automation, WhatsApp chatbot, WhatsApp Business API, bulk messaging, WhatsApp eCommerce, ChatGPT WhatsApp, WhatsApp marketing" />
        <link rel="canonical" href="https://autochat.in" />
        <meta property="og:title" content="AutoChat — AI-Driven WhatsApp Business Automation" />
        <meta property="og:description" content="Turn Conversations into Conversions with AI-Driven WhatsApp Automation. 200+ happy customers." />
        <meta property="og:url" content="https://autochat.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AutoChat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutoChatOficial" />
        <meta name="twitter:title" content="AutoChat — AI-Driven WhatsApp Business Automation" />
        <meta name="twitter:description" content="Turn Conversations into Conversions with AI-Driven WhatsApp Automation." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0B0F14 0%, #0d1f17 50%, #0B0F14 100%)', padding: isMobile ? '72px 24px 60px' : '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ fontSize: 14, color: '#25D366', fontWeight: 600 }}>✦ AI-Driven WhatsApp Automation</span>
          </div>
          <h1 style={{ fontSize: isMobile ? 32 : 56, fontWeight: 900, color: '#F9FAFB', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 24 }}>
            Turn Conversations into<br />
            <span style={{ color: '#25D366' }}>Conversions</span> with AI-Driven<br />WhatsApp Automation
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 19, color: '#9CA3AF', lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px' }}>
            Experience the future of WhatsApp Business with AutoChat. Automate workflows, resolve queries instantly, and scale revenue to boost loyalty and drive repeat sales.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center', marginBottom: 52 }}>
            <a href="https://app.autochat.in/register" style={{
              padding: '15px 32px', background: '#25D366', color: '#fff', textDecoration: 'none',
              borderRadius: 10, fontSize: 16, fontWeight: 800, letterSpacing: '-0.3px',
              boxShadow: '0 0 30px rgba(37,211,102,0.35)',
            }}>🚀 Start 3-Days Free Trial</a>
            <a href="mailto:support@autochat.in?subject=Demo Request" style={{
              padding: '15px 32px', border: '1.5px solid rgba(255,255,255,0.2)',
              color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700,
            }}>📅 Book a Demo</a>
          </div>
          {/* Trust Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {[
              ['🏆', 'Trusted by Top Brands'],
              ['⭐', '5/5 (5 Star Reviews)'],
              ['😊', '200+ Happy Customers'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 8, padding: '8px 16px' }}>
                <span style={{ fontSize: 16 }}>{icon}</span>
                <span style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features 4-card section */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>
              Powerful WhatsApp Solutions for<br />Enhanced Business Performance
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>Everything you need to automate, scale, and convert on WhatsApp.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
            {features4.map(f => (
              <div key={f.title} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px 28px', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 19, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 12 }}>Native Integrations</h2>
            <p style={{ color: '#9CA3AF', fontSize: 16 }}>Connect AutoChat with your favorite tools and platforms</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            {integrations.map(name => (
              <div key={name} style={{
                background: '#0B0F14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
                padding: '12px 24px', color: '#F9FAFB', fontSize: 15, fontWeight: 600,
              }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Shopping */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 52, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 12px', marginBottom: 20 }}>WhatsApp eCommerce</div>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 20, lineHeight: 1.15 }}>
              Native WhatsApp Shopping Experience
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
              Revamp your online retail experience with WhatsApp eCommerce. Let customers browse, order, and pay — all without leaving WhatsApp.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['🔗', 'Integration with Shopify / WooCommerce / Any Platform', 'Plug into your existing store with zero disruption.'],
                ['🛒', 'Fully Automated Checkout', 'Guide customers through the complete purchase journey inside WhatsApp.'],
                ['🔄', 'Best-in-Class Abandoned Cart Recovery', 'Automatically recover lost sales with smart WhatsApp nudges.'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                  <div>
                    <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{title}</div>
                    <div style={{ color: '#9CA3AF', fontSize: 14 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#111827', borderRadius: 20, padding: '36px 32px', border: '1px solid rgba(37,211,102,0.2)' }}>
            <div style={{ background: '#0B0F14', borderRadius: 14, padding: '20px', marginBottom: 16 }}>
              <div style={{ color: '#25D366', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>💬 WhatsApp Chat</div>
              <div style={{ background: '#25D366', borderRadius: '10px 10px 10px 2px', padding: '10px 14px', color: '#fff', fontSize: 13, marginBottom: 8, maxWidth: '85%' }}>Hi! I want to order the Blue Sneakers (Size 42)</div>
              <div style={{ background: '#1f2d24', borderRadius: '10px 10px 2px 10px', padding: '10px 14px', color: '#F9FAFB', fontSize: 13, marginLeft: 'auto', maxWidth: '85%' }}>Great choice! 👟 Blue Sneakers — $89.00<br />Add to cart? Reply YES to confirm</div>
              <div style={{ background: '#25D366', borderRadius: '10px 10px 10px 2px', padding: '10px 14px', color: '#fff', fontSize: 13, marginTop: 8, maxWidth: '85%' }}>YES</div>
              <div style={{ background: '#1f2d24', borderRadius: '10px 10px 2px 10px', padding: '10px 14px', color: '#F9FAFB', fontSize: 13, marginLeft: 'auto', maxWidth: '85%', marginTop: 8 }}>✅ Order confirmed! Pay via link: pay.autochat.in/abc123</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Builder */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-block', background: 'rgba(124,58,237,0.12)', color: '#7C3AED', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 12px', marginBottom: 20 }}>Advanced Chatbot Builder</div>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>
              Create Interactive Chatbots Effortlessly<br />with Drag &amp; Drop Design
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>Build sophisticated WhatsApp chatbots visually — no code required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: '🎨', title: 'Rich Message Support', desc: 'Media, Interactive Lists, Buttons, and Catalog Messages — all supported out of the box.' },
              { icon: '🔌', title: 'API & Webhook Integration', desc: 'Connect your chatbot to any backend system with powerful REST APIs and webhooks.' },
              { icon: '🤖', title: 'AI & Automation Add-ons', desc: 'Extend with OpenAI ChatGPT, Zapier, Make.com, and Google Apps integrations.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#0B0F14', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16, padding: '28px' }}>
                <div style={{ fontSize: 34, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Inbox */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={{ ...W, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 52, alignItems: 'center' }}>
          <div style={{ background: '#111827', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.07)', order: isMobile ? 2 : 1 }}>
            <div style={{ marginBottom: 16, color: '#9CA3AF', fontSize: 14, fontWeight: 600 }}>Team Inbox — 3 Active Chats</div>
            {[
              { name: 'Sarah K.', msg: 'When will my order arrive?', agent: 'Agent: Emma', color: '#25D366' },
              { name: 'Raj M.', msg: 'Can I get a refund?', agent: 'Agent: Tom', color: '#7C3AED' },
              { name: 'Ali H.', msg: 'Need help with setup', agent: 'Unassigned', color: '#F59E0B' },
            ].map(c => (
              <div key={c.name} style={{ background: '#0B0F14', borderRadius: 10, padding: '14px 16px', marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#F9FAFB', fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 13, marginTop: 3 }}>{c.msg}</div>
                </div>
                <div style={{ background: `${c.color}22`, color: c.color, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{c.agent}</div>
              </div>
            ))}
          </div>
          <div style={{ order: isMobile ? 1 : 2 }}>
            <div style={{ display: 'inline-block', background: 'rgba(37,211,102,0.12)', color: '#25D366', fontSize: 13, fontWeight: 700, borderRadius: 6, padding: '4px 12px', marginBottom: 20 }}>Unified Team Inbox</div>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 20, lineHeight: 1.15 }}>
              Enhance Sales &amp; Support Collaboration
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
              Manage all customer conversations in one place. Assign, reassign, and collaborate with your team effortlessly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                '📱 WhatsApp-like Web & Mobile App',
                '👥 CRM-Specific Features Built-in',
                '🔄 Agent Assignment / Reassignment / Team Management',
                '🤖 Override Bot Functionality with Human Agent',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#9CA3AF', fontSize: 15 }}>
                  <span style={{ color: '#25D366', flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>
              Why Choose Us
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 580, margin: '0 auto' }}>
              Elevate Your Customer Service with Enterprise-Grade WhatsApp Integration
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ display: 'flex', gap: 18, background: '#0B0F14', borderRadius: 14, padding: '24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 30, flexShrink: 0 }}>{w.icon}</div>
                <div>
                  <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{w.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Tick */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: 'linear-gradient(135deg, #0d1f17 0%, #0B0F14 100%)' }}>
        <div style={{ ...W, textAlign: 'center', maxWidth: 760 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontSize: isMobile ? 26 : 40, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 16 }}>
            Get Verified — Earn the Green Tick<br />Verification Mark
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
            Stand out from the crowd with the official WhatsApp Business green tick. Build trust, protect your brand, and show customers you&apos;re the real deal.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, justifyContent: 'center', marginBottom: 40 }}>
            {[
              ['🛡️', 'Establish Authenticity', 'Prove you\'re a verified, legitimate business'],
              ['🔒', 'Protect Your Brand', 'Prevent impersonation and fraud'],
              ['💚', 'Enhance Trust', 'Customers engage more with verified businesses'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: '#111827', borderRadius: 14, padding: '24px 20px', border: '1px solid rgba(37,211,102,0.15)', flex: 1 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>{desc}</div>
              </div>
            ))}
          </div>
          <a href="https://app.autochat.in/register" style={{
            display: 'inline-block', padding: '14px 36px', background: '#25D366', color: '#fff',
            textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800,
            boxShadow: '0 0 30px rgba(37,211,102,0.35)',
          }}>Get Started Today →</a>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: isMobile ? 26 : 38, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 14 }}>Testimonials</h2>
            <p style={{ color: '#F9FAFB', fontSize: isMobile ? 18 : 22, fontWeight: 700, marginBottom: 12 }}>See what our happy customers are saying!</p>
            <p style={{ color: '#9CA3AF', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
              Don&apos;t just take our word for it. Hear how real businesses are using Autochat to achieve success and transform their customer interactions on WhatsApp.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px' }}>
                <div style={{ color: '#25D366', fontSize: 24, marginBottom: 12 }}>&ldquo;</div>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1F2937', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                    👤
                  </div>
                  <div>
                    <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: '#9CA3AF', fontSize: 12 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#111827' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: isMobile ? 26 : 36, fontWeight: 800, color: '#F9FAFB', letterSpacing: '-1px', marginBottom: 12, textAlign: 'center' }}>Most Popular Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 36 }}>
            {[
              { q: 'What makes AutoChat a leading WhatsApp Automation Platform?', a: 'AutoChat stands out as the most advanced WhatsApp Automation Platform, offering cutting-edge cloud-based solutions to streamline operations and achieve business goals. With features like a no-code chatbot builder, bulk messaging, and seamless eCommerce integration, AutoChat is trusted by top brands worldwide.' },
              { q: 'How does AutoChat simplify chatbot development without coding?', a: 'AutoChat eliminates the need for coding with its powerful No Code Chatbot Builder. This feature enables users to build robust chatbots effortlessly, allowing for autoresponses, lead qualification, FAQ handling, and more. The platform also supports advanced functionalities like media and interactive messages.' },
              { q: 'What sets AutoChat apart in the eCommerce landscape?', a: 'AutoChat revolutionizes eCommerce with a native WhatsApp shopping experience. Businesses can integrate their online stores with WhatsApp, offering a streamlined checkout process directly within the app. With features like automated checkout, integration with platforms like Shopify and WooCommerce, and abandoned cart recovery, AutoChat drives unprecedented conversions.' },
              { q: 'How does AutoChat enhance team collaboration and support efficiency?', a: 'AutoChat introduces a Unified Team Inbox, facilitating efficient multi-agent chat solutions for both web and mobile. Multiple agents can handle incoming messages on a single WhatsApp number, complete with access control, performance monitoring, and the ability to override bot functionality.' },
              { q: 'What benefits does AutoChat offer through official WhatsApp Business integration?', a: 'AutoChat helps businesses unlock the potential of enterprise-grade WhatsApp API, redefining customer service strategies. With an official WhatsApp Business account in just 2 days, seamless connections to existing POS/ERP or eCommerce systems, and integration with various software supporting webhooks and APIs.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0B0F14', borderRadius: 12, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 24px', background: '#0B0F14', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: '#F9FAFB', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Ready to Automate Your<br /><span style={{ color: '#25D366' }}>WhatsApp Business?</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 32 }}>Join 200+ businesses already growing with AutoChat. No credit card required.</p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'center' }}>
            <a href="https://app.autochat.in/register" style={{ padding: '15px 36px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 800, boxShadow: '0 0 30px rgba(37,211,102,0.35)' }}>Start 3-Days Free Trial</a>
            <a href="mailto:support@autochat.in?subject=Demo Request" style={{ padding: '15px 36px', border: '1.5px solid rgba(255,255,255,0.2)', color: '#F9FAFB', textDecoration: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700 }}>Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
