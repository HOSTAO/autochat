import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <Head>
        <title>Contact Us | AutoChat — WhatsApp Business Automation</title>
        <meta name="description" content="Get in touch with AutoChat. We're here to help with your WhatsApp Business automation needs." />
        <link rel="canonical" href="https://autochat.in/contact" />
      </Head>
      <Nav />

      {/* Hero */}
      <section className="hero-gradient py-16 px-6 md:py-24 text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-[34px] md:text-[48px] font-black text-gray-50 tracking-[-1.5px] mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg leading-relaxed">Have a question or need help? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-50 mb-6">Let&apos;s Talk</h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                Whether you need a demo, have a technical question, or want to discuss enterprise plans — we&apos;re here for you.
              </p>
              
              <div className="space-y-5">
                {[
                  ['📧', 'Email', 'support@autochat.in', 'mailto:support@autochat.in'],
                  ['📞', 'Phone', '+1 (323) 744-7383', 'tel:+13237447383'],
                  ['💬', 'WhatsApp', 'Chat with us', 'https://wa.me/13237447383'],
                  ['📍', 'Address', 'Hostao LLC, USA', null],
                ].map(([icon, label, value, href]) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-gray-200 text-[15px] font-medium no-underline hover:text-brand transition-colors duration-200">{value}</a>
                      ) : (
                        <div className="text-gray-200 text-[15px] font-medium">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-7 md:p-9">
                <h3 className="text-xl font-bold text-gray-50 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="input-dark" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Email *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="input-dark" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="input-dark" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Subject *</label>
                      <input type="text" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="input-dark" placeholder="How can we help?" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Message *</label>
                    <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="textarea-dark" rows={5} placeholder="Tell us more about what you need..." />
                  </div>
                  
                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : 'Send Message'}
                  </button>
                  
                  {status === 'sent' && <p className="text-brand text-sm text-center">Thanks! We&apos;ll get back to you within 24 hours.</p>}
                  {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
