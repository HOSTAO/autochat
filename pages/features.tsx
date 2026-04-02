import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const features = [
  { icon: '🤖', title: 'No-Code Chatbot Builder', desc: 'Design powerful chatbots with our visual drag-and-drop builder. No programming required. Set up autoresponders, lead qualification flows, and FAQ bots in minutes.', tag: 'Automation' },
  { icon: '🛒', title: 'WhatsApp eCommerce', desc: 'Let customers browse products, add to cart, and checkout — all inside WhatsApp. Integrates with Shopify, WooCommerce, and custom stores.', tag: 'Commerce' },
  { icon: '📨', title: 'Bulk Messaging', desc: 'Send marketing campaigns, promotions, and updates to thousands of customers with a single click. Smart segmentation and personalization built in.', tag: 'Marketing' },
  { icon: '👥', title: 'Team Inbox', desc: 'Multiple agents handling one WhatsApp number. Smart routing, assignment, CRM notes, tags, and performance tracking — all in a WhatsApp-like interface.', tag: 'Support' },
  { icon: '🧠', title: 'ChatGPT AI Integration', desc: 'Harness the power of GPT-4 to automate intelligent conversations. Your chatbot can understand context, answer complex questions, and learn from interactions.', tag: 'AI' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Track message delivery, response times, agent performance, and campaign ROI. Beautiful dashboards with actionable insights.', tag: 'Analytics' },
  { icon: '🔗', title: 'API & Webhooks', desc: 'Connect AutoChat with any system using our powerful REST API and real-time webhooks. Build custom integrations effortlessly.', tag: 'Developer' },
  { icon: '✅', title: 'Green Tick Verification', desc: 'We help you get the official WhatsApp green tick verification badge. Build trust and credibility with your customers.', tag: 'Trust' },
  { icon: '🔔', title: 'Notifications at Scale', desc: 'Send transactional updates — order confirmations, shipping alerts, appointment reminders — instantly to thousands.', tag: 'Notifications' },
  { icon: '💳', title: 'Payment Gateways', desc: 'Accept payments directly through WhatsApp. Integrate Stripe, Razorpay, PayPal, and more for seamless in-chat checkout.', tag: 'Payments' },
  { icon: '🔄', title: 'Abandoned Cart Recovery', desc: 'Automatically send personalized WhatsApp messages to recover lost sales. Smart timing and follow-up sequences.', tag: 'Commerce' },
  { icon: '📱', title: 'Mobile & Web App', desc: 'Access AutoChat from anywhere. Our responsive web app and mobile interface give your team full control on the go.', tag: 'Platform' },
]

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | AutoChat — WhatsApp Business Automation Platform</title>
        <meta name="description" content="Explore AutoChat's powerful features: chatbot builder, bulk messaging, team inbox, WhatsApp eCommerce, ChatGPT AI, analytics, and more." />
        <link rel="canonical" href="https://autochat.in/features" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge mb-5">
            <span>⚡ Platform Features</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            Built for Businesses That Move Fast
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every feature you need to automate, engage, and grow on WhatsApp — in one powerful platform.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map(f => (
              <div key={f.title} className="group card hover:shadow-xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <span className="bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{f.tag}</span>
                </div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-card text-center">
        <div className="max-w-[550px] mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-50 tracking-tight mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-base mb-8">Experience all features with our 3-day free trial. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.autochat.in/register" className="btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn-secondary">View Pricing</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
