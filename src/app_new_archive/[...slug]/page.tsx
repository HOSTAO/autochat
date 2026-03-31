import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

type PageData = {
  title: string
  subtitle: string
  body: string[]
}

const corporatePages: Record<string, PageData> = {
  'contact-us': {
    title: 'Contact AutoChat',
    subtitle: 'Sales & Support',
    body: [
      'For product demos, sales inquiries, onboarding support, and partnerships, reach our team through the Contact page.',
      'Enterprise customers can request a dedicated onboarding and implementation workflow.'
    ]
  },
  careers: {
    title: 'Careers',
    subtitle: 'Build the Future of Business Messaging',
    body: [
      'We are building a high-performance team across product, engineering, growth, and customer success.',
      'If you are passionate about messaging automation and AI tools, we would love to hear from you.'
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common Questions About AutoChat',
    body: [
      'Find answers about setup, integrations, pricing, WhatsApp Business API usage, and migration support.',
      'If you do not find your answer, our support team can assist directly.'
    ]
  },
  press: {
    title: 'Press & Media',
    subtitle: 'Media Kit and Company Updates',
    body: [
      'For media requests, founder interviews, or product announcements, contact the AutoChat media team.',
      'Brand assets and approved logo usage are available on request.'
    ]
  },
  advertise: {
    title: 'Advertise With AutoChat',
    subtitle: 'Partnerships & Campaigns',
    body: [
      'AutoChat works with agencies, creators, and B2B marketing partners for co-branded campaigns and growth programs.',
      'Reach out with your audience profile and proposal for collaboration.'
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Data Protection & Privacy',
    body: [
      'AutoChat processes customer data in line with privacy regulations and secure handling standards.',
      'We implement role-based access, encryption, and retention controls for responsible data operations.'
    ]
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'Platform Usage Terms',
    body: [
      'These terms govern access to and use of AutoChat services, including acceptable usage, billing, and support scopes.',
      'By using the platform, customers agree to the current terms and service policies.'
    ]
  },
  'actionable-feedback-policy': {
    title: 'Actionable Feedback Policy',
    subtitle: 'How We Handle Product Feedback',
    body: [
      'We prioritize feedback that includes clear use-cases, impact context, and reproducible details.',
      'Validated feedback is routed into roadmap reviews and release planning cycles.'
    ]
  },
  'corrections-policy': {
    title: 'Corrections Policy',
    subtitle: 'Accuracy & Accountability',
    body: [
      'If published information is inaccurate, we review and correct it promptly with transparent updates.',
      'Users can report factual issues through the Contact page.'
    ]
  },
  'ethics-policy': {
    title: 'Ethics Policy',
    subtitle: 'Responsible Product Principles',
    body: [
      'AutoChat is committed to responsible AI-assisted automation, transparent usage, and customer trust.',
      'We do not support deceptive communication or abuse of platform messaging channels.'
    ]
  },
  'publishing-principles': {
    title: 'Publishing Principles',
    subtitle: 'Editorial Standards',
    body: [
      'All published content is reviewed for clarity, factual consistency, and business relevance.',
      'We aim for practical and transparent communication in all public materials.'
    ]
  },
  'diversity-policy': {
    title: 'Diversity Policy',
    subtitle: 'Inclusive Team Culture',
    body: [
      'We are committed to inclusive hiring and equal opportunity across our team and partner ecosystem.',
      'Respect, accessibility, and fairness guide our workplace and collaboration culture.'
    ]
  },
  'diversity-staffing-report': {
    title: 'Diversity Staffing Report',
    subtitle: 'Workforce Snapshot',
    body: [
      'We periodically review and improve diversity representation across teams and leadership levels.',
      'This report outlines our ongoing efforts and accountability benchmarks.'
    ]
  },
  ownership: {
    title: 'Ownership & Leadership',
    subtitle: 'Corporate Information',
    body: [
      'This section provides high-level company ownership and leadership transparency details.',
      'For formal due diligence requests, contact our corporate team through official channels.'
    ]
  }
}

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function FallbackContentPage({ params }: PageProps) {
  const { slug } = await params
  const key = (slug || []).join('/')
  const page = corporatePages[key]

  if (!page) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-gray-50 min-h-[60vh]">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded-lg">Home</Link>
                <Link href="/features" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Features</Link>
                <Link href="/pricing" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Pricing</Link>
                <Link href="/contact" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Contact</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-lg rounded-xl p-10">
            <p className="text-sm text-purple-600 font-semibold mb-2">{page.subtitle}</p>
            <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
            <div className="space-y-4 text-gray-700 leading-7">
              {page.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-lg bg-purple-50 border border-purple-100">
              <p className="text-sm text-purple-900 font-medium">Meta Business Partner Note</p>
              <p className="text-sm text-purple-800 mt-1">AutoChat supports official WhatsApp Business API workflows and Meta-aligned messaging best practices.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded-lg">Back to Home</Link>
              <Link href="/contact" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Contact Team</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}