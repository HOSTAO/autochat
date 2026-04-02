import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Ecommerce() {
  return (
    <>
      <Head>
        <title>WhatsApp eCommerce | AutoChat — Sell on WhatsApp</title>
        <meta name="description" content="Turn WhatsApp into your storefront. Browse products, checkout, and pay — all within WhatsApp. Integrates with Shopify, WooCommerce, and more." />
        <link rel="canonical" href="https://autochat.in/ecommerce" />
      </Head>
      <Nav />

      <section className="hero-gradient py-20 px-6 md:py-28 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="badge mb-5">
            <span>🛒 WhatsApp Commerce</span>
          </div>
          <h1 className="text-[34px] md:text-[52px] font-black text-gray-50 tracking-[-2px] mb-5 leading-tight">
            Sell Directly on WhatsApp
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Your customers are already on WhatsApp. Meet them there. Browse, order, pay — all in one chat.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-dark">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <h2 className="section-heading leading-tight mb-5">Complete Shopping Experience Inside WhatsApp</h2>
              <p className="text-gray-400 text-[16px] leading-relaxed mb-8">
                AutoChat transforms WhatsApp into a full-featured storefront. Customers can browse your catalog, add items to cart, and complete checkout — all without leaving the conversation.
              </p>
              <div className="space-y-5">
                {[
                  ['🛍️', 'Product Catalog', 'Display your full product catalog with images, descriptions, and prices right inside WhatsApp.'],
                  ['🛒', 'In-Chat Checkout', 'Customers select products, confirm orders, and pay — zero friction, zero app downloads.'],
                  ['📦', 'Order Tracking', 'Automated updates keep customers informed about their order status.'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="flex gap-4 group">
                    <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-brand/20 transition-colors duration-300">{icon}</div>
                    <div>
                      <div className="text-gray-50 font-semibold text-[15px] mb-1">{title}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-glow-green p-7 md:p-8 rounded-2xl">
              <div className="bg-dark rounded-xl p-5 space-y-3">
                <div className="text-brand font-bold text-sm mb-4 flex items-center gap-2">💬 WhatsApp Store</div>
                <div className="bg-brand/90 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[80%]">Show me your best sellers</div>
                <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                  Here are our top picks! 🔥<br /><br />
                  1️⃣ Classic Sneakers — $89<br />
                  2️⃣ Premium Hoodie — $65<br />
                  3️⃣ Sports Watch — $120<br /><br />
                  Reply with the number to order!
                </div>
                <div className="bg-brand/90 rounded-2xl rounded-bl-sm px-4 py-3 text-white text-[13px] max-w-[80%]">1</div>
                <div className="bg-dark-700 rounded-2xl rounded-br-sm px-4 py-3 text-gray-100 text-[13px] ml-auto max-w-[85%]">
                  ✅ Classic Sneakers added to cart!<br />Total: $89 — <span className="text-brand">Pay now →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="text-center mb-12">
            <h2 className="section-heading">Works With Your Store</h2>
            <p className="text-gray-400 text-base">Plug into your existing eCommerce platform in minutes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[800px] mx-auto">
            {[
              ['🛍️', 'Shopify'],
              ['🔌', 'WooCommerce'],
              ['💳', 'Stripe'],
              ['💰', 'Razorpay'],
            ].map(([icon, name]) => (
              <div key={name} className="card text-center p-6 hover:border-brand/20">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-gray-300 text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abandoned Cart */}
      <section className="section-card">
        <div className="container-lg text-center max-w-[700px]">
          <div className="text-5xl mb-5">🔄</div>
          <h2 className="section-heading mb-5">Recover Lost Sales Automatically</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            70% of shopping carts are abandoned. AutoChat sends smart, personalized WhatsApp messages at the right time to bring customers back and close the sale.
          </p>
          <a href="https://app.autochat.in/register" className="btn-primary">Start Selling on WhatsApp →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
