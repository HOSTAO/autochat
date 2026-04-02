import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function WhatsAppButtonGenerator() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [buttonText, setButtonText] = useState('Chat on WhatsApp')
  const [copied, setCopied] = useState(false)

  const cleanPhone = phone.replace(/\D/g, '')
  const waLink = `https://wa.me/${cleanPhone}${message ? '?text=' + encodeURIComponent(message) : ''}`
  
  const htmlCode = `<a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;font-size:16px">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.093 1.504 5.82L0 24l6.335-1.652C8.07 23.443 9.992 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.886 0-3.652-.507-5.17-1.39l-.37-.22-3.84 1.007 1.024-3.742-.24-.383A9.546 9.546 0 012.4 12c0-5.302 4.298-9.6 9.6-9.6 5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6z"/></svg>
  ${buttonText}
</a>`

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Head>
        <title>WhatsApp Button Generator | AutoChat — Free Tool</title>
        <meta name="description" content="Generate a WhatsApp chat button for your website for free. Customize phone number, message, and style. Copy the code and add to your site." />
        <link rel="canonical" href="https://autochat.in/whatsapp-button-generator" />
      </Head>
      <Nav />

      <section className="hero-gradient py-16 px-6 md:py-24 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="badge mb-5"><span>🆓 Free Tool</span></div>
          <h1 className="text-[30px] md:text-[44px] font-black text-gray-50 tracking-tight mb-4">WhatsApp Button Generator</h1>
          <p className="text-gray-400 text-lg">Create a WhatsApp chat button for your website in seconds.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg max-w-[900px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Config */}
            <div className="card p-7 md:p-8">
              <h2 className="text-gray-50 font-bold text-xl mb-6">Configure</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Phone Number *</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    className="input-dark" placeholder="919876543210 (with country code)" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Pre-filled Message</label>
                  <input type="text" value={message} onChange={e => setMessage(e.target.value)}
                    className="input-dark" placeholder="Hi! I'd like to know more about..." />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Button Text</label>
                  <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)}
                    className="input-dark" placeholder="Chat on WhatsApp" />
                </div>
              </div>
            </div>

            {/* Preview + Code */}
            <div className="space-y-6">
              <div className="card p-7 md:p-8">
                <h2 className="text-gray-50 font-bold text-xl mb-6">Preview</h2>
                <div className="flex justify-center py-4">
                  <a href={cleanPhone ? waLink : '#'} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-bold text-base no-underline hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow duration-300">
                    💬 {buttonText}
                  </a>
                </div>
              </div>

              <div className="card p-7 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-50 font-bold text-xl">HTML Code</h2>
                  <button onClick={handleCopy}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 ${
                      copied ? 'bg-brand/20 text-brand' : 'bg-white/[0.06] text-gray-400 hover:text-gray-200'
                    }`}>
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-dark rounded-xl p-4 text-[13px] text-gray-400 overflow-x-auto leading-relaxed border border-white/[0.05]">
                  <code>{htmlCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-card text-center">
        <div className="max-w-[500px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-50 mb-4">Want More Than a Button?</h2>
          <p className="text-gray-400 text-base mb-6">AutoChat gives you full WhatsApp automation — chatbots, bulk messaging, eCommerce, and AI.</p>
          <a href="https://app.autochat.in/register" className="btn-primary">Start Free Trial →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
