import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useIsMobile } from '../../hooks/useIsMobile'

interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  content: string
}

interface Props {
  post: Post
  related: { title: string; slug: string }[]
}

const PRIMARY = '#25D366'
const BG = '#0A0E1A'
const TEXT = '#F9FAFB'
const MUTED = '#9CA3AF'

export default function BlogPost({ post, related }: Props) {
  const isMobile = useIsMobile()
  const S = { maxWidth: 800, margin: '0 auto' }
  const dateStr = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const renderContent = (text: string) => {
    const paragraphs = text.split('\n\n').filter(p => p.trim())
    return paragraphs.map((para, i) => {
      const t = para.trim()
      if (t.startsWith('#### ')) return <h4 key={i} style={{ fontSize: 18, fontWeight: 700, color: TEXT, margin: '28px 0 12px', lineHeight: 1.4 }}>{t.slice(5)}</h4>
      if (t.startsWith('### ')) return <h3 key={i} style={{ fontSize: 22, fontWeight: 700, color: TEXT, margin: '32px 0 12px', lineHeight: 1.4 }}>{t.slice(4)}</h3>
      if (t.startsWith('## ')) return <h2 key={i} style={{ fontSize: 26, fontWeight: 800, color: TEXT, margin: '40px 0 14px', lineHeight: 1.3 }}>{t.slice(3)}</h2>
      if (t.startsWith('# ')) return <h1 key={i} style={{ fontSize: 32, fontWeight: 900, color: TEXT, margin: '40px 0 16px', lineHeight: 1.2 }}>{t.slice(2)}</h1>
      if (t.startsWith('**') && t.endsWith('**')) {
        return <p key={i} style={{ fontSize: 16, color: TEXT, fontWeight: 700, lineHeight: 1.8, marginBottom: 12 }}>{t.slice(2, -2)}</p>
      }
      if (t.length < 5) return null
      return <p key={i} style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, marginBottom: 20 }}>{t}</p>
    })
  }

  return (
    <>
      <Head>
        <title>{post.title} — AutoChat</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content="AutoChat Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://autochat.in/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} — AutoChat`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://autochat.in/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>
      <div style={{ background: BG, minHeight: '100vh', color: TEXT }}>
        <Nav />
        <main style={{ padding: isMobile ? '32px 20px' : '60px 24px' }}>
          <div style={S}>
            <Link href="/blog" style={{ color: PRIMARY, fontSize: 14, textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>
              ← Back to Blog
            </Link>
            <div style={{ marginBottom: 12 }}>
              <span style={{ background: `${PRIMARY}20`, color: PRIMARY, fontSize: 13, fontWeight: 600, padding: '4px 12px', borderRadius: 20 }}>
                {post.categories?.[0] || 'WhatsApp Automation'}
              </span>
            </div>
            <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 900, color: TEXT, lineHeight: 1.2, margin: '16px 0 12px' }}>
              {post.title}
            </h1>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 40 }}>
              AutoChat Team · {dateStr}
            </p>
            <div style={{ fontSize: 18, color: MUTED, fontStyle: 'italic', borderLeft: `3px solid ${PRIMARY}`, paddingLeft: 20, marginBottom: 40, lineHeight: 1.7 }}>
              {post.excerpt}
            </div>
            <article>
              {renderContent(post.content)}
            </article>
            {related.length > 0 && (
              <div style={{ marginTop: 64, borderTop: '1px solid #1F2937', paddingTop: 40 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 24 }}>Related Articles</h3>
                <div style={{ display: 'grid', gap: 16 }}>
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} style={{ color: PRIMARY, textDecoration: 'none', fontSize: 15 }}>
                      → {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const path = require('path')
  const posts: Post[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'posts-data/posts-clean.json'), 'utf-8'))
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const path = require('path')
  const posts: Post[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'posts-data/posts-clean.json'), 'utf-8'))
  const post = posts.find(p => p.slug === params?.slug)
  if (!post) return { notFound: true }

  const related = posts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3)
    .map(p => ({ title: p.title, slug: p.slug }))

  return { props: { post, related } }
}
