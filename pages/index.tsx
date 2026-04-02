import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
  { name: 'Akhil Shyam', role: 'Founder, The Cozy Corner', quote: 'Autochat helped us streamline our communication and boost sales by 20%. Our customers love the convenience of shopping directly on WhatsApp!' },
  { name: 'Remya Santhosh', role: 'CEO, TechByte Solutions', quote: "Autochat's chatbots and team inbox have revolutionized our customer support. We now respond to inquiries faster and have happier customers." },
  { name: 'Priya Raman', role: 'Marketing Manager, GreenVibes', quote: 'I love the ease of use of Autochat! The no-code chatbot builder and native WhatsApp integration have saved me hours and provided immense value.' },
  { name: 'Vikram Singh', role: 'Head of Marketing, EduConnect', quote: 'Sending bulk messages with Autochat has been a game-changer. We can now reach thousands of potential customers with ease, saving us time and resources.' },
  { name: "Riya Sharma", role: "Founder, Rida's Boutique", quote: "Autochat's chatbots helped us personalize communication and connect with customers on a deeper level. We've seen a significant increase in customer satisfaction and loyalty." },
  { name: 'Akash Menon', role: 'CTO, FitForLife', quote: 'The team inbox feature in Autochat has revolutionized our internal communication. We can now collaborate seamlessly and respond to customer inquiries promptly, leading to improved efficiency.' },
]

const features4 = [
  { icon: '🤖', title: 'No Code Chatbot Builder', desc: 'Build powerful chatbots without any programming knowledge. Autorespond, qualify leads, and answer FAQs 24/7.', gradient: 'from-brand/10 to-transparent' },
  { icon: '🛒', title: 'WhatsApp Commerce', desc: 'Offer products directly within WhatsApp. Integrate seamlessly with WooCommerce, Shopify, or custom platforms.', gradient: 'from-purple-600/10 to-transparent' },
  { icon: '📨', title: 'Bulk Messaging & Team Inbox', desc: 'Reach thousands of customers with a single click. Assign chats to multiple agents for seamless support.', gradient: 'from-blue-600/10 to-transparent' },
  { icon: '✨', title: 'GPT-4 AI Chatbot', desc: 'Autorespond, qualify leads, and answer FAQs intelligently with the power of GPT-4 AI.', gradient: 'from-amber-500/10 to-transparent' },
]

const integrations = [
  { name: 'Shopify', icon: '🛍️' },
  { name: 'WooCommerce', icon: '🔌' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Make.com', icon: '🔄' },
  { name: 'Google Apps', icon: '📊' },
  { name: 'OpenAI', icon: '🧠' },
  { name: 'Stripe', icon: '💳' },
  { name: 'PayPal', icon: '💰' },
]

const whyUs = [
  { icon: '⚡', title: 'Official WA Account in 2 Days', desc: 'Get your Official WhatsApp Business API account set up and running within 2 business days.' },
  { icon: '🔗', title: 'Connect POS/ERP/eCommerce', desc: 'Integrate with your existing systems — POS, ERP, WooCommerce, Shopify, and more.' },
  { icon: '🔌', title: 'Webhooks & API Integration', desc: 'Powerful REST API and webhooks to connect with any third-party platform or custom system.' },
  { icon: '🔔', title: 'Instant Notifications at Scale', desc: 'Deliver instant transactional and marketing notifications to thousands of customers at once.' },
]

const faqs = [
  { q: 'What makes AutoChat a leading WhatsApp Automation Platform?', a: 'AutoChat stands out as the most advanced WhatsApp Automation Platform, offering cutting-edge cloud-based solutions to streamline operations and achieve business goals. With features like a no-code chatbot builder, bulk messaging, and seamless eCommerce integration, AutoChat is trusted by top brands worldwide.' },
  { q: 'How does AutoChat simplify chatbot development without coding?', a: 'AutoChat eliminates the need for coding with its powerful No Code Chatbot Builder. This feature enables users to build robust chatbots effortlessly, allowing for autoresponses, lead qualification, FAQ handling, and more. The platform also supports advanced functionalities like media and interactive messages.' },
  { q: 'What sets AutoChat apart in the eCommerce landscape?', a: 'AutoChat revolutionizes eCommerce with a native WhatsApp shopping experience. Businesses can integrate their online stores with WhatsApp, offering a streamlined checkout process directly within the app. With features like automated checkout, integration with platforms like Shopify and WooCommerce, and abandoned cart recovery, AutoChat drives unprecedented conversions.' },
  { q: 'How does AutoChat enhance team collaboration and support efficiency?', a: 'AutoChat introduces a Unified Team Inbox, facilitating efficient multi-agent chat solutions for both web and mobile. Multiple agents can handle incoming messages on a single WhatsApp number, complete with access control, performance monitoring, and the ability to override bot functionality.' },
  { q: 'What benefits does AutoChat offer through official WhatsApp Business integration?', a: 'AutoChat helps businesses unlock the potential of enterprise-grade WhatsApp API, redefining customer service strategies. With an official WhatsApp Business account in just 2 days, seamless connections to existing POS/ERP or eCommerce systems, and integration with various software supporting webhooks and APIs.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/[0.06] rounded-full blur-[120px]" />
        
        <div className="relative py-20 px-6 md:py-28 lg:py-32 text-center">
          <div className="max-w-[900px] mx-auto">
            <div className="badge animate-fade-in">
              <span>✦ AI-Driven WhatsApp Automation</span>
            </div>
            <h1 className="text-[34px] md:text-[52px] lg:text-[60px] font-black text-gray-50 leading-[1.08] tracking-[-2px] mb-6 animate-slide-up">
              Turn Conversations into{' '}
              <span className="text-gradient-green">Conversions</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-[640px] mx-auto mb-10">
              Automate workflows, resolve queries instantly, and scale revenue — all powered by AI on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a href="https://app.autochat.in/register" className="btn-primary text-base md:text-lg">
                🚀 Start 3-Days Free Trial
              </a>
              <a href="mailto:support@autochat.in?subject=Demo Request" className="btn-secondary text-base md:text-lg">
                📅 Book a Demo
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 md:gap-5 justify-center">
              {[
                ['🏆', 'Trusted by Top Brands'],
                ['⭐', '5/5 Star Reviews'],
                ['😊', '200+ Happy Customers'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 hover:border-white/[0.15] transition-colors duration-300">
                  <span className="text-base">{icon}</span>
                  <span className="text-gray-400 text-[13px] font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-dark-card border-y border-white/[0.05]">
        <div className="container-lg py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['200+', 'Happy Customers'],
              ['50M+', 'Messages Delivered'],
              ['99.9%', 'Uptime SLA'],
              ['2 Days', 'Official WA Setup'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-black text-brand mb-1">{num}</div>
                <div className="text-gray-500 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="section-dark">
        <div className="container-lg">
          <div className="text-center mb-14 md:mb-16">
            <div className="badge mb-4">
              <span>✦ Platform Features</span>
            </div>
            <h2 className="section-heading">
              Everything You Need to Win on WhatsApp
            </h2>
            <p className="section-subtext">Powerful tools to automate, engage, and convert — all in one platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {features4.map(f => (
              <div key={f.title} className="group relative bg-dark-card border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.15] hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-gray-50 font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS ═══ */}
      <section className="section-card">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="section-heading">Native Integrations</h2>
            <p className="text-gray-400 text-base">Connect AutoChat with your favorite tools and platforms</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[800px] mx-auto">
            {integrations.map(({ name, icon }) => (
              <div key={name} className="group bg-dark border border-white/[0.08] rounded-xl px-5 py-4 text-center hover:border-brand/30 hover:bg-brand/[0.03] transition-all duration-300 cursor-default">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <div className="text-gray-300 text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP SHOPPING ═══ */}
      <section className="section-dark">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="tag-green">WhatsApp eCommerce</div>
            <h2 className="section-heading leading-tight mb-5">
              Native WhatsApp Shopping Experience
            </h2>
            <p className="text-gray-400 text-[17px] leading-relaxed mb-8">
              Let customers browse, order, and pay — all without leaving WhatsApp. Seamless shopping, higher conversions.
            </p>
            <div className="flex flex-col gap-5">
              {[
                ['🔗', 'Shopify / WooCommerce / Any Platform', 'Plug into your existing store with zero disruption.'],
                ['🛒', 'Fully Automated Checkout', 'Guide customers through the complete purchase journey inside WhatsApp.'],
                ['🔄', 'Abandoned Cart Recovery', 'Automatically recover lost sales with smart WhatsApp nudges.'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-xl shrink-0 group-hover:bg-brand/20 transition-colors duration-300">{icon}</div>
                  <div>
                    <div className="text-gray-50 font-semibold text-[15px] mb-1">{title}</div>
                    <div className="text-gray-400 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat mockup */}
          <div className="card-glow-green rounded-2xl p-6 md:p-8">
            <div className="bg-dark rounded-xl p-5 space-y-3">
              <div className="text-brand font-bold text-sm mb-4 flex items-center gap-2">
                💬 <span>WhatsApp Chat</span>
              </div>
              {/* User */}
              <div className="bg-brand/90 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[85%]">
                Hi! I want to order the Blue Sneakers (Size 42)
              </div>
              {/* Bot */}
              <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                Great choice! 👟 Blue Sneakers — $89.00<br />Add to cart? Reply <strong>YES</strong> to confirm
              </div>
              {/* User */}
              <div className="bg-brand/90 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[85%]">
                YES
              </div>
              {/* Bot */}
              <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                ✅ Order confirmed!<br />Pay via link: <span className="text-brand underline">pay.autochat.in/abc123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHATBOT BUILDER ═══ */}
      <section className="section-card">
        <div className="container-lg">
          <div className="text-center mb-14">
            <div className="tag-purple">Advanced Chatbot Builder</div>
            <h2 className="section-heading">
              Build Chatbots with Drag & Drop
            </h2>
            <p className="section-subtext max-w-[560px]">Create sophisticated WhatsApp chatbots visually — no code required.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: '🎨', title: 'Rich Message Support', desc: 'Media, Interactive Lists, Buttons, and Catalog Messages — all supported out of the box.' },
              { icon: '🔌', title: 'API & Webhook Integration', desc: 'Connect your chatbot to any backend system with powerful REST APIs and webhooks.' },
              { icon: '🤖', title: 'AI & Automation', desc: 'Extend with OpenAI ChatGPT, Zapier, Make.com, and Google Apps integrations.' },
            ].map(f => (
              <div key={f.title} className="group card-glow-purple bg-dark hover:bg-dark/80">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM INBOX ═══ */}
      <section className="section-dark">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mock */}
          <div className="card rounded-2xl p-6 md:p-8 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-5">
              <span className="text-gray-400 text-sm font-semibold">Team Inbox</span>
              <span className="bg-brand/10 text-brand text-xs font-bold px-3 py-1 rounded-full">3 Active</span>
            </div>
            {[
              { name: 'Sarah K.', msg: 'When will my order arrive?', agent: 'Agent: Emma', color: 'brand' },
              { name: 'Raj M.', msg: 'Can I get a refund?', agent: 'Agent: Tom', color: 'purple' },
              { name: 'Ali H.', msg: 'Need help with setup', agent: 'Unassigned', color: 'amber' },
            ].map(c => (
              <div key={c.name} className="bg-dark rounded-xl px-4 py-4 mb-3 last:mb-0 flex justify-between items-center hover:bg-dark/80 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-dark-700 flex items-center justify-center text-sm">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-50 font-semibold text-sm">{c.name}</div>
                    <div className="text-gray-500 text-[13px] mt-0.5">{c.msg}</div>
                  </div>
                </div>
                <div className={`text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap ${
                  c.color === 'brand' ? 'bg-brand/10 text-brand' :
                  c.color === 'purple' ? 'bg-purple-600/10 text-purple-400' :
                  'bg-amber-500/10 text-amber-400'
                }`}>
                  {c.agent}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="tag-green">Unified Team Inbox</div>
            <h2 className="section-heading leading-tight mb-5">
              Collaborate Across Sales & Support
            </h2>
            <p className="text-gray-400 text-[17px] leading-relaxed mb-8">
              Manage all customer conversations in one place. Assign, reassign, and collaborate with your team effortlessly.
            </p>
            <div className="space-y-4">
              {[
                '📱 WhatsApp-like Web & Mobile App',
                '👥 Built-in CRM Features',
                '🔄 Agent Assignment & Team Management',
                '🤖 Override Bot with Human Agent',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-gray-300 text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                    <span className="text-brand text-xs">✓</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-card">
        <div className="container-lg">
          <div className="text-center mb-14">
            <h2 className="section-heading">Why Choose AutoChat</h2>
            <p className="section-subtext max-w-[580px]">
              Enterprise-Grade WhatsApp Integration for Growing Businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map(w => (
              <div key={w.title} className="group flex gap-5 bg-dark rounded-2xl p-7 border border-white/[0.07] hover:border-brand/20 transition-all duration-300">
                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                  {w.icon}
                </div>
                <div>
                  <h3 className="text-gray-50 font-bold text-[17px] mb-2">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GREEN TICK ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 green-tick-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.04] rounded-full blur-[100px]" />
        
        <div className="relative py-20 px-6 md:py-28">
          <div className="container-lg text-center max-w-[800px]">
            <div className="text-6xl mb-5">✅</div>
            <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-50 tracking-tight mb-5 leading-tight">
              Earn the Green Tick Verification
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-[600px] mx-auto">
              Build trust with the official WhatsApp Business green tick. Show customers you&apos;re the real deal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {[
                ['🛡️', 'Establish Authenticity', 'Prove you\'re a verified, legitimate business'],
                ['🔒', 'Protect Your Brand', 'Prevent impersonation and fraud'],
                ['💚', 'Enhance Trust', 'Customers engage more with verified businesses'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="card-glow-green p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <div className="text-gray-50 font-bold text-base mb-2">{title}</div>
                  <div className="text-gray-400 text-sm">{desc}</div>
                </div>
              ))}
            </div>
            <a href="https://app.autochat.in/register" className="btn-primary text-lg">
              Get Started Today →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-dark">
        <div className="container-lg">
          <div className="text-center mb-14">
            <div className="badge mb-4">
              <span>✦ Customer Stories</span>
            </div>
            <h2 className="section-heading">What Our Customers Say</h2>
            <p className="section-subtext max-w-[560px]">
              Real businesses, real results. See how teams are growing with AutoChat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="card group">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand/30 to-purple-600/30 flex items-center justify-center text-gray-50 font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-gray-50 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-card">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="section-heading text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-dark rounded-xl border border-white/[0.07] overflow-hidden hover:border-white/[0.12] transition-colors duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="text-gray-50 font-semibold text-[15px] pr-6">{faq.q}</span>
                  <span className={`text-gray-400 text-lg shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand/[0.05] rounded-full blur-[100px]" />
        
        <div className="relative py-20 px-6 md:py-28 text-center">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl md:text-[46px] font-black text-gray-50 tracking-[-1.5px] mb-5 leading-tight">
              Ready to Automate Your{' '}
              <span className="text-gradient-green">WhatsApp Business?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">Join 200+ businesses already growing with AutoChat. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.autochat.in/register" className="btn-primary text-lg">
                Start 3-Days Free Trial
              </a>
              <a href="mailto:support@autochat.in?subject=Demo Request" className="btn-secondary text-lg">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
