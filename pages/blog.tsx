import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useIsMobile } from '../hooks/useIsMobile'
import postsData from '../posts-data/posts-clean.json'

const PRIMARY = '#25D366'
const BG = '#0A0E1A'
const CARD = '#111827'
const TEXT = '#F9FAFB'
const MUTED = '#9CA3AF'

interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  content: string
}

const posts = (postsData as Post[]).slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function BlogPage() {
  const isMobile = useIsMobile()
  return (
    <>
      <Head>
        <title>AutoChat Blog — WhatsApp Automation Tips & Guides</title>
        <meta name="description" content="Practical guides on WhatsApp Business API, chatbots, automation workflows, and business messaging for Indian businesses." />
        <meta property="og:title" content="AutoChat Blog — WhatsApp Automation Tips & Guides" />
        <meta property="og:description" content="Practical guides on WhatsApp Business API, chatbots, and automation." />
      </Head>
      <div style={{ background: BG, minHeight: '100vh', color: TEXT }}>
        <Nav />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: isMobile ? '80px 20px 60px' : '100px 24px 80px' }}>
          <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: TEXT, marginBottom: 8 }}>AutoChat Blog</h1>
          <p style={{ color: MUTED, fontSize: 16, marginBottom: 48 }}>WhatsApp automation guides, business messaging tips, and API tutorials.</p>
          <div style={{ display: 'grid', gap: 24 }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: CARD, borderRadius: 12, padding: isMobile ? 20 : 28, border: '1px solid #1F2937', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                    {(post.categories || []).slice(0, 2).map(cat => (
                      <span key={cat} style={{ background: PRIMARY + '22', color: PRIMARY, fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{cat}</span>
                    ))}
                  </div>
                  <h2 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, color: TEXT, marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{post.excerpt}</p>
                  <span style={{ color: MUTED, fontSize: 13 }}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
