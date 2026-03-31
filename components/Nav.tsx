import Link from 'next/link'
import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const links: [string, string][] = [
    ['Pricing', '/pricing'],
    ['Ecommerce', '/ecommerce'],
    ['Features', '/features'],
    ['ChatGPT', '/chatgpt'],
    ['About Us', '/about'],
    ['Contact Us', '/contact'],
  ]

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(11,15,20,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: '#25D366', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
          }}>💬</div>
          <span style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 20, letterSpacing: '-0.5px' }}>AutoChat</span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(([label, href]) => (
              <Link key={href} href={href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >{label}</Link>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://app.autochat.in/login" style={{
              padding: '9px 20px', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8, color: '#F9FAFB', textDecoration: 'none', fontSize: 14, fontWeight: 600,
            }}>Login</a>
            <a href="https://app.autochat.in/register" style={{
              padding: '9px 20px', background: '#25D366', border: 'none',
              borderRadius: 8, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700,
            }}>Start Free Trial</a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: '#F9FAFB', cursor: 'pointer', fontSize: 24, padding: 4,
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 15, fontWeight: 500, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            <a href="https://app.autochat.in/login" style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#F9FAFB', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Login</a>
            <a href="https://app.autochat.in/register" style={{ flex: 1, textAlign: 'center', padding: '10px', background: '#25D366', borderRadius: 8, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>Free Trial</a>
          </div>
        </div>
      )}
    </nav>
  )
}
