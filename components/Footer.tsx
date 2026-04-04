import Link from 'next/link'
import NewsletterSection from './NewsletterSection'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.07]">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-lg shadow-[0_0_12px_rgba(37,211,102,0.3)]">
                💬
              </div>
              <span className="text-gray-50 font-extrabold text-xl">AutoChat</span>
            </div>
            <p className="text-gray-500 text-[13px] font-medium mb-2">A Product of Hostao LLC</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[300px] mb-6">
              AI-Driven WhatsApp Business Automation — Chatbots, Bulk Messaging, Team Inbox, eCommerce & more.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {[
                ['Facebook', 'https://facebook.com/AutoChat.in', 'f'],
                ['X', 'https://x.com/AutoChaat', '𝕏'],
                ['LinkedIn', 'https://www.linkedin.com/company/autochatin/', 'in'],
                ['Instagram', 'https://www.instagram.com/autochatofficial/', '📷'],
                ['YouTube', 'https://www.youtube.com/@AutoMationTool', '▶'],
              ].map(([label, href, icon]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 bg-white/[0.06] hover:bg-brand/20 hover:border-brand/30 border border-white/[0.08] rounded-lg flex items-center justify-center text-gray-400 hover:text-brand no-underline text-[13px] font-bold transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-gray-50 font-bold text-[15px] mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              {[
                ['360 eCommerce', 'https://ecommerce.createautochat.com'],
                ['Our Pricing', '/pricing'],
                ['Our Blogs', '/blog'],
                ['Affiliate Program', 'https://createautochat.com/affiliate-program'],
                ['Partner Program', 'https://createautochat.com/partner-program'],
                ['API & WebHooks', 'https://createautochat.com/api-webhooks'],
                ['OpenAI Chat', '/chatgpt'],
              ].map(([label, href]) => (
                <a key={label} href={href}
                  className="text-gray-400 hover:text-gray-200 no-underline text-sm transition-colors duration-200"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-50 font-bold text-[15px] mb-5">Resources</h4>
            <div className="flex flex-col gap-3">
              {[
                ['Meta Official Pricing', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi42DRCWBMZXNbRnONcFIeWHjN0lmFdjJxP6HOgi5HUIut1ijrKhIKybXaRkt7hH9Z4GfkCbx_LFRs/pubhtml?gid=0&single=true'],
                ['Meta Pricing Examples', 'https://drive.google.com/file/d/1pF0xnYIU6bF3bdHI5I7ZPhlpPdNNxhRd/view?usp=sharing'],
                ['Coupon Code', '/coupon'],
                ['AutoChat VS Wati', 'https://createautochat.com/detailed-comparison-autochat-vs-wati/'],
                ['AutoChat VS AiSensy', 'https://createautochat.com/autochat-vs-aisensy-best-aisensy-alternative/'],
                ['AutoChat VS Interakt', 'https://createautochat.com/autochat-vs-interakt/'],
                ['AutoChat VS Gallabox', 'https://createautochat.com/autochat-vs-gallabox-the-best-gallabox-alternative/'],
              ].map(([label, href]) => (
                <a key={label} href={href}
                  className="text-gray-400 hover:text-gray-200 no-underline text-[13px] transition-colors duration-200"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links + CTA */}
          <div>
            <h4 className="text-gray-50 font-bold text-[15px] mb-5">Company</h4>
            <div className="flex flex-col gap-3 mb-7">
              {[
                ['About Us', '/about'],
                ['Contact Us', '/contact'],
                ['Terms & Conditions', '/terms-of-service'],
                ['Privacy Policy', '/privacy-policy'],
                ['Refund Policy', 'https://createautochat.com/refund-policy'],
                ['Support', '/support'],
              ].map(([label, href]) => (
                <a key={label} href={href}
                  className="text-gray-400 hover:text-gray-200 no-underline text-sm transition-colors duration-200"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {label}
                </a>
              ))}
            </div>
            <a href="https://app.autochat.in/register"
              className="btn-primary-sm">
              Sign Up Free →
            </a>
          </div>
        </div>
      </div>

      <NewsletterSection />

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px]">
            © {new Date().getFullYear()} <a href="https://hostao.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 no-underline transition-colors duration-200">Hostao LLC</a>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 no-underline text-[13px] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 no-underline text-[13px] transition-colors duration-200">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
