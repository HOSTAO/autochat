import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const plans = [
  {
    name: 'Starter',
    price: '$50',
    period: '/mo',
    popular: false,
    tagline: 'Perfect for small businesses',
    features: [
      '1,000 Free Conversations/mo',
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
      'Email Support',
      'Review Management',
    ],
  },
  {
    name: 'Growth',
    price: '$100',
    period: '/mo',
    popular: true,
    tagline: 'Best for growing teams',
    features: [
      '1,000 Free Conversations/mo',
      '20 User Agents',
      '50,000 Conversations/month',
      '20 Chatbots',
      'Everything in Starter',
      'Advanced Integrations',
      'Priority Support',
      'Team Collaboration Tools',
      'Advanced Analytics',
      'Custom Branding',
    ],
  },
  {
    name: 'Enterprise',
    price: '$350',
    period: '/mo',
    popular: false,
    tagline: 'For large-scale operations',
    features: [
      '1,000 Free Conversations/mo',
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

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes! All plans include a 3-day free trial. No credit card required to get started.' },
  { q: 'What are the Meta WhatsApp API charges?', a: 'Meta charges separately for conversations over and above 1,000/month. These rates vary by country and conversation type. AutoChat\'s subscription fee covers platform access; Meta charges cover actual message delivery.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely. You can change your plan at any time from your dashboard. Upgrades take effect immediately; downgrades at the next billing cycle.' },
  { q: 'Do I need technical skills to get started?', a: 'No! AutoChat is designed for non-technical users. Our drag-and-drop chatbot builder and intuitive dashboard require zero coding knowledge.' },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>Pricing | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="AutoChat pricing plans starting at $50/mo. Starter, Growth, and Enterprise plans for WhatsApp Business automation. Try free for 3 days." />
        <link rel="canonical" href="https://autochat.in/pricing" />
        <meta property="og:title" content="Pricing | AutoChat — WhatsApp Business Automation" />
        <meta property="og:description" content="Simple, transparent pricing. Start at $50/mo. 3-day free trial included." />
        <meta property="og:url" content="https://autochat.in/pricing" />
      </Head>
      <Nav />

      {/* Hero */}
      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge mb-5">
            <span>💰 Simple Pricing</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            Plans That Scale With You
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Start free for 3 days. No credit card required. Upgrade when you&apos;re ready.
          </p>
          <div className="inline-block px-5 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <p className="text-amber-400 text-sm font-medium">
              ⚠️ Meta WhatsApp API charges apply separately based on conversation volume
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-dark -mt-4">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map(plan => (
              <div key={plan.name}
                className={`relative flex flex-col bg-dark-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-2 border-brand shadow-[0_0_40px_rgba(37,211,102,0.12)] md:scale-105'
                    : 'border border-white/[0.07]'
                }`}
              >
                {plan.popular && (
                  <div className="bg-brand text-white text-center text-xs font-extrabold py-2 tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className="mb-7">
                    <h3 className="text-gray-50 font-extrabold text-2xl mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-5">{plan.tagline}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-5xl font-black tracking-[-2px] ${plan.popular ? 'text-brand' : 'text-gray-50'}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-base font-medium">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-xs mt-2">+ Meta API charges</p>
                  </div>

                  <a href="https://app.autochat.in/register"
                    className={`block text-center py-3.5 rounded-xl text-[15px] font-extrabold no-underline transition-all duration-300 hover:-translate-y-0.5 mb-7 ${
                      plan.popular
                        ? 'bg-brand text-white shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]'
                        : 'border-2 border-white/20 text-gray-50 hover:border-white/40 hover:bg-white/[0.03]'
                    }`}
                  >
                    Start Free Trial
                  </a>

                  <div className="flex-1 flex flex-col gap-3.5">
                    {plan.features.map(f => (
                      <div key={f} className="flex gap-3 items-start text-sm">
                        <span className={`shrink-0 mt-0.5 ${plan.popular ? 'text-brand' : 'text-gray-500'}`}>✓</span>
                        <span className="text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Meta note */}
          <div className="card mt-12 text-center">
            <p className="text-gray-400 text-sm leading-relaxed max-w-[700px] mx-auto">
              <strong className="text-gray-200">Note:</strong> Meta charges separately for WhatsApp Business API conversations. The first 1,000 conversations/month are free from Meta. Additional charges vary by country and conversation type.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-card">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="section-heading text-center mb-10">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-dark border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/[0.12] transition-colors duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="text-gray-50 font-semibold text-[15px] pr-6">{faq.q}</span>
                  <span className={`text-gray-400 text-lg shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark text-center">
        <div className="max-w-[500px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-50 mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">Our team is here to help. Get in touch and we&apos;ll get back to you within 24 hours.</p>
          <a href="/contact" className="btn-primary">Contact Us →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
