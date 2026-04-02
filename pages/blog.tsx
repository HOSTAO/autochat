import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import postsData from '../posts-data/posts-clean.json'

interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
}

export default function Blog() {
  const posts = (postsData as Post[]).slice(0, 30)

  return (
    <>
      <Head>
        <title>Blog | AutoChat — WhatsApp Business Tips & Insights</title>
        <meta name="description" content="Read the latest tips, guides, and insights on WhatsApp Business automation, chatbots, eCommerce, and AI-powered customer engagement." />
        <link rel="canonical" href="https://autochat.in/blog" />
      </Head>
      <Nav />

      <section className="hero-gradient py-16 px-6 md:py-24 text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-[34px] md:text-[48px] font-black text-gray-50 tracking-[-1.5px] mb-4">Blog</h1>
          <p className="text-gray-400 text-lg leading-relaxed">Tips, guides, and insights on WhatsApp Business automation.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-lg">
          {posts.length === 0 ? (
            <div className="card text-center p-12">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-gray-50 font-bold text-xl mb-3">Coming Soon</h2>
              <p className="text-gray-400">We&apos;re working on great content. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline group">
                  <div className="card h-full flex flex-col group-hover:border-brand/20 group-hover:-translate-y-0.5 transition-all duration-300">
                    {post.categories?.[0] && (
                      <span className="inline-block bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                        {post.categories[0]}
                      </span>
                    )}
                    <h3 className="text-gray-50 font-bold text-[17px] mb-3 group-hover:text-brand transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-gray-600 text-xs">{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
