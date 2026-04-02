import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function ChatGPT() {
  return (
    <>
      <Head>
        <title>ChatGPT AI for WhatsApp | AutoChat — AI-Powered Chatbot</title>
        <meta name="description" content="Integrate ChatGPT AI with your WhatsApp business. Intelligent automated conversations, smart lead qualification, and 24/7 AI-powered customer support." />
        <link rel="canonical" href="https://autochat.in/chatgpt" />
      </Head>
      <Nav />

      <section className="hero-gradient-purple py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge-purple mb-5">
            <span>🧠 AI-Powered</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            ChatGPT Meets WhatsApp
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Supercharge your WhatsApp with GPT-4 AI. Smart conversations that understand context, qualify leads, and support customers 24/7.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-dark">
        <div className="container-lg">
          <div className="text-center mb-14">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subtext">Three steps to AI-powered WhatsApp conversations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['1️⃣', 'Connect', 'Link your WhatsApp Business account with AutoChat and enable the ChatGPT module.'],
              ['2️⃣', 'Train', 'Feed your AI with business knowledge — products, FAQs, pricing, policies. It learns your brand voice.'],
              ['3️⃣', 'Go Live', 'Your AI chatbot starts handling conversations instantly. Monitor, tweak, and let it evolve.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card-glow-purple text-center p-8">
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-gray-50 font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-card">
        <div className="container-lg">
          <div className="text-center mb-14">
            <h2 className="section-heading">What Your AI Can Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              ['💬', 'Intelligent Conversations', 'Your AI understands context, remembers conversation history, and responds naturally — just like a human agent.'],
              ['🎯', 'Lead Qualification', 'Automatically qualify leads by asking the right questions, scoring responses, and routing hot leads to your sales team.'],
              ['📚', 'Instant FAQ Answers', 'Train your AI on your knowledge base. It answers customer questions instantly, reducing support tickets by up to 80%.'],
              ['🌍', 'Multi-Language Support', 'Communicate with customers in their preferred language. GPT-4 supports 90+ languages out of the box.'],
              ['🔄', 'Smart Handoff', 'AI handles routine queries. When things get complex, it seamlessly transfers to a human agent with full context.'],
              ['📈', 'Continuous Learning', 'Your AI improves over time. Review conversations, add corrections, and watch response quality climb.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="group flex gap-5 bg-dark rounded-2xl p-7 border border-white/[0.07] hover:border-purple-600/20 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-purple-600/20 transition-colors duration-300">{icon}</div>
                <div>
                  <h3 className="text-gray-50 font-bold text-[16px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="section-dark">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="tag-purple">Live Example</div>
            <h2 className="section-heading leading-tight mb-5">See AI in Action</h2>
            <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
              Your AI chatbot handles complex queries, understands intent, and provides accurate responses — just like your best support agent, but available 24/7.
            </p>
            <a href="https://app.autochat.in/register" className="btn-primary">Try It Free →</a>
          </div>
          <div className="card-glow-purple rounded-2xl p-6 md:p-8">
            <div className="bg-dark rounded-xl p-5 space-y-3">
              <div className="text-purple-400 font-bold text-sm mb-4 flex items-center gap-2">🧠 AI-Powered Chat</div>
              <div className="bg-purple-600/80 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[80%]">
                What are your pricing plans?
              </div>
              <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                Great question! We have 3 plans:<br /><br />
                💰 <strong>Starter</strong> — $50/mo<br />
                🚀 <strong>Growth</strong> — $100/mo<br />
                🏢 <strong>Enterprise</strong> — $350/mo<br /><br />
                All include a 3-day free trial. Want me to help you pick the right one?
              </div>
              <div className="bg-purple-600/80 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[80%]">
                I have a team of 15 agents
              </div>
              <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                For 15 agents, the <strong>Growth plan ($100/mo)</strong> is perfect — it supports up to 20 agents! 🎯<br /><br />
                Shall I sign you up for a free trial?
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
