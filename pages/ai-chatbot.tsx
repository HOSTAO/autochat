import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function AIChatbot() {
  return (
    <>
      <Head>
        <title>AI Chatbot for WhatsApp | AutoChat — No-Code Chatbot Builder</title>
        <meta name="description" content="Build powerful AI chatbots for WhatsApp without coding. Drag-and-drop builder, GPT-4 integration, automated lead qualification, and 24/7 customer support." />
        <link rel="canonical" href="https://autochat.in/ai-chatbot" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge mb-5">
            <span>🤖 AI Chatbot</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            Build Smart Chatbots in Minutes
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            No coding required. Create WhatsApp chatbots that understand your customers, qualify leads, and close sales — automatically.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🎨', 'Visual Builder', 'Drag-and-drop interface to design conversation flows. No code, no complexity — just draw your chatbot logic visually.'],
              ['🧠', 'GPT-4 AI Brain', 'Power your chatbot with GPT-4 for natural, context-aware conversations that feel genuinely human.'],
              ['🎯', 'Lead Qualification', 'Automatically score and qualify leads based on their responses. Route hot leads directly to your sales team.'],
              ['📋', 'Interactive Messages', 'Send rich media, buttons, lists, and catalog messages. Make every interaction engaging and actionable.'],
              ['🔗', 'API Integration', 'Connect your chatbot to CRMs, ERPs, databases, and any system via REST APIs and webhooks.'],
              ['🔄', 'Human Handoff', 'Seamlessly transfer complex conversations from bot to human agent with full context preserved.'],
              ['📊', 'Analytics', 'Track bot performance, conversation metrics, drop-off points, and optimize your flows with data.'],
              ['🌍', 'Multi-Language', 'Build chatbots that speak your customers\' language. 90+ languages supported through AI translation.'],
              ['⏰', '24/7 Availability', 'Your chatbot never sleeps. Handle customer queries around the clock without hiring additional staff.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card p-7 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-card text-center">
        <div className="max-w-[550px] mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-50 mb-5">
            Build Your First Bot Today
          </h2>
          <p className="text-gray-400 text-base mb-8">3-day free trial. No credit card. Start automating in minutes.</p>
          <a href="https://app.autochat.in/register" className="btn-primary">Start Free Trial →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
