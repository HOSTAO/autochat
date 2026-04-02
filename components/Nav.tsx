import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: [string, string][] = [
    ['Pricing', '/pricing'],
    ['Features', '/features'],
    ['Ecommerce', '/ecommerce'],
    ['AI Chatbot', '/chatgpt'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      scrolled ? 'bg-dark/98 border-white/10 shadow-lg shadow-black/20' : 'bg-dark/95 border-white/[0.05]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-lg shrink-0 shadow-[0_0_12px_rgba(37,211,102,0.3)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow duration-300">
            💬
          </div>
          <span className="text-gray-50 font-extrabold text-[22px] tracking-tight">AutoChat</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(([label, href]) => (
            <Link key={href} href={href}
              className="text-gray-400 no-underline text-[14px] font-medium px-4 py-2 rounded-lg hover:text-gray-50 hover:bg-white/[0.05] transition-all duration-200">
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex gap-3 items-center">
          <a href="https://app.autochat.in/login"
            className="px-5 py-2.5 border border-white/[0.15] rounded-lg text-gray-50 no-underline text-sm font-semibold hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200">
            Login
          </a>
          <a href="https://app.autochat.in/register"
            className="px-5 py-2.5 bg-brand rounded-lg text-white no-underline text-sm font-bold shadow-[0_0_15px_rgba(37,211,102,0.25)] hover:shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:bg-brand-dark transition-all duration-300">
            Start Free Trial
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-transparent border-none text-gray-50 cursor-pointer text-2xl p-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-200">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-dark-card border-t border-white/[0.07] px-6 py-5 flex flex-col gap-1">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="text-gray-400 no-underline text-[15px] font-medium py-3 px-3 rounded-lg hover:text-gray-50 hover:bg-white/[0.05] transition-all duration-200">
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/[0.07]">
            <a href="https://app.autochat.in/login"
              className="flex-1 text-center py-3 border border-white/[0.15] rounded-xl text-gray-50 no-underline text-sm font-semibold hover:bg-white/[0.04] transition-colors duration-200">
              Login
            </a>
            <a href="https://app.autochat.in/register"
              className="flex-1 text-center py-3 bg-brand rounded-xl text-white no-underline text-sm font-bold shadow-[0_0_15px_rgba(37,211,102,0.25)]">
              Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
