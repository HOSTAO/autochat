import Link from 'next/link'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ background: '#0B0F14', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: '#25D366', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💬</div>
              <span style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 20 }}>AutoChat</span>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, maxWidth: 320, marginBottom: 16 }}>
              Product From Hostao
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 13, lineHeight: 1.7, maxWidth: 320, marginBottom: 20 }}>
              Chatbots, Bulk Messaging, Team Inbox, Integrations — Autochat offers all WhatsApp Business tools in one place.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                ['Facebook', 'https://facebook.com/AutoChat.in', 'f'],
                ['X', 'https://x.com/AutoChaat', '𝕏'],
                ['LinkedIn', 'https://www.linkedin.com/company/autochatin/', 'in'],
                ['Instagram', 'https://www.instagram.com/autochatofficial/', '📷'],
                ['YouTube', 'https://www.youtube.com/@AutoMationTool', '▶'],
              ].map(([label, href, icon]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                  width: 36, height: 36, background: 'rgba(255,255,255,0.07)', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF',
                  textDecoration: 'none', fontSize: 13, fontWeight: 700,
                }}>{icon}</a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 16, marginTop: 0 }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['360 eCommerce', 'https://ecommerce.createautochat.com'],
                ['Our Pricing', '/pricing'],
                ['Our Blogs', '/blog'],
                ['Affiliate Program', 'https://createautochat.com/affiliate-program'],
                ['Partner Program', 'https://createautochat.com/partner-program'],
                ['API & WebHooks', 'https://createautochat.com/api-webhooks'],
                ['OpenAI Chat', '/chatgpt'],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 14 }}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 16, marginTop: 0 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Meta Official Pricing', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi42DRCWBMZXNbRnONcFIeWHjN0lmFdjJxP6HOgi5HUIut1ijrKhIKybXaRkt7hH9Z4GfkCbx_LFRs/pubhtml?gid=0&single=true'],
                ['Meta Pricing Examples', 'https://drive.google.com/file/d/1pF0xnYIU6bF3bdHI5I7ZPhlpPdNNxhRd/view?usp=sharing'],
                ['Coupon Code', '/coupon'],
                ['Autochat VS Wati', 'https://createautochat.com/detailed-comparison-autochat-vs-wati/'],
                ['Autochat VS AiSensy', 'https://createautochat.com/autochat-vs-aisensy-best-aisensy-alternative/'],
                ['Autochat VS Interakt', 'https://createautochat.com/autochat-vs-interakt/'],
                ['Autochat VS Gallabox', 'https://createautochat.com/autochat-vs-gallabox-the-best-gallabox-alternative/'],
                ['Autochat VS QuickReply.ai', 'https://createautochat.com/autochat-vs-quickreply-ai-best-quickreply-ai-alternative2024/'],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 13 }}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 15, marginBottom: 16, marginTop: 0 }}>Useful Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Terms & Conditions', '/terms-of-service'],
                ['Privacy Policy', '/privacy-policy'],
                ['Refund Policy', 'https://createautochat.com/refund-policy'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 14 }}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >{label}</a>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="https://app.autochat.in/register" style={{
                display: 'inline-block', padding: '10px 20px', background: '#25D366',
                color: '#fff', textDecoration: 'none', borderRadius: 8, fontSize: 14, fontWeight: 700, textAlign: 'center',
              }}>Sign Up Free</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: 12 }}>
          <p style={{ color: '#9CA3AF', fontSize: 13, margin: 0 }}>
            Copyright © {new Date().getFullYear()} <a href="https://hostao.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Hostao LLC</a>. All Rights Reserved
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy-policy" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 13 }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 13 }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
