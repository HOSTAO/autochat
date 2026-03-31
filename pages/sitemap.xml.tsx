import { GetServerSideProps } from 'next'
import postsData from '../posts-data/posts-clean.json'

const BASE = 'https://autochat.in'

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/features', priority: '0.9', changefreq: 'weekly' },
  { path: '/chatgpt', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/ecommerce', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/help', priority: '0.6', changefreq: 'monthly' },
  { path: '/support', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.4', changefreq: 'yearly' },
]

interface Post {
  slug: string
  date?: string
}

function Sitemap() { return null }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const today = new Date().toISOString().split('T')[0]
  const posts: Post[] = postsData as Post[]

  const staticEntries = staticPages.map(p => `  <url>
    <loc>${BASE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')

  const blogEntries = posts.map(p => `  <url>
    <loc>${BASE}/blog/${p.slug}</loc>
    <lastmod>${p.date ? new Date(p.date).toISOString().split('T')[0] : today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${blogEntries}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default Sitemap
