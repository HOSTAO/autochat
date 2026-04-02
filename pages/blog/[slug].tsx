import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

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

export default function BlogPost({ post, related }: Props) {
  const dateStr = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const renderContent = (text: string) => {
    const paragraphs = text.split('\n\n').filter(p => p.trim())
    return paragraphs.map((para, i) => {
      const t = para.trim()
      if (t.startsWith('#### ')) return <h4 key={i} className="text-lg font-bold text-gray-50 mt-7 mb-3 leading-snug">{t.slice(5)}</h4>
      if (t.startsWith('### ')) return <h3 key={i} className="text-[22px] font-bold text-gray-50 mt-8 mb-3 leading-snug">{t.slice(4)}</h3>
      if (t.startsWith('## ')) return <h2 key={i} className="text-[26px] font-extrabold text-gray-50 mt-10 mb-3.5 leading-tight">{t.slice(3)}</h2>
      if (t.startsWith('# ')) return <h1 key={i} className="text-[32px] font-black text-gray-50 mt-10 mb-4 leading-tight">{t.slice(2)}</h1>
      if (t.startsWith('**') && t.endsWith('**')) {
        return <p key={i} className="text-base text-gray-50 font-bold leading-relaxed mb-3">{t.slice(2, -2)}</p>
      }
      if (t.length < 5) return null
      return <p key={i} className="text-base text-gray-400 leading-[1.85] mb-5">{t}</p>
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
      <div className="bg-[#0A0E1A] min-h-screen text-gray-50">
        <Nav />
        <main className="px-5 py-8 md:px-6 md:py-16">
          <div className="max-w-[800px] mx-auto">
            <Link href="/blog" className="text-brand text-sm no-underline inline-block mb-8 hover:underline">
              ← Back to Blog
            </Link>
            <div className="mb-3">
              <span className="bg-brand/[0.13] text-brand text-[13px] font-semibold px-3 py-1 rounded-full">
                {post.categories?.[0] || 'WhatsApp Automation'}
              </span>
            </div>
            <h1 className="text-[28px] md:text-[40px] font-black text-gray-50 leading-tight mt-4 mb-3">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              AutoChat Team · {dateStr}
            </p>
            <div className="text-lg text-gray-400 italic border-l-[3px] border-brand pl-5 mb-10 leading-relaxed">
              {post.excerpt}
            </div>
            <article>
              {renderContent(post.content)}
            </article>
            {related.length > 0 && (
              <div className="mt-16 border-t border-gray-800 pt-10">
                <h3 className="text-xl font-bold text-gray-50 mb-6">Related Articles</h3>
                <div className="grid gap-4">
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="text-brand no-underline text-[15px] hover:underline">
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
