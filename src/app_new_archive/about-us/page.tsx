import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutoChat</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're on a mission to transform how businesses communicate with their customers through WhatsApp
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              AutoChat was founded with a simple vision: to make WhatsApp Business automation accessible, powerful, and 
              affordable for businesses of all sizes. As an official Meta Business Partner, we're proud to be the first 
              startup from Kerala to receive this prestigious partnership.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We understand that meaningful customer conversations drive business growth. That's why we've built a platform 
              that combines the power of AI with the simplicity of WhatsApp, enabling businesses to engage with customers 
              at scale while maintaining that personal touch.
            </p>
            <p className="text-lg text-gray-700">
              Today, AutoChat serves over 5,000 businesses across the Middle East and Southeast Asia, helping them automate 
              customer support, drive sales, and deliver exceptional experiences 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
              <div className="text-gray-600">Messages Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Recognition & Partnerships</h2>
            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Official Meta Business Partner</h3>
              <p className="text-gray-700 mb-4">
                First startup from Kerala to receive Meta's WhatsApp Business Partnership
              </p>
              <p className="text-sm text-gray-600">
                As Featured In: 
                <Link href="https://www.manoramaonline.com/technology/gadgets/2025/06/05/malayalam-autochat-meta-partnership.amp.html" 
                      target="_blank" 
                      className="text-purple-600 hover:text-purple-700 font-semibold ml-2">
                  Manorama Online
                </Link>
              </p>
            </div>
            <p className="text-lg text-gray-700">
              Backed by Hostao LLC, we combine technical expertise with business understanding to deliver 
              solutions that actually work for real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Driven by passion, powered by expertise</p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Reji Modiyil</h3>
              <p className="text-purple-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-700">
                Visionary entrepreneur with deep expertise in WhatsApp Business automation and AI-powered 
                customer engagement solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-700">
                Every feature we build, every decision we make is guided by how it helps our customers succeed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We push boundaries to bring cutting-edge AI and automation capabilities to WhatsApp Business.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Transparency</h3>
              <p className="text-gray-700">
                We build lasting relationships through honest communication and reliable service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the WhatsApp automation revolution. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://panel.autochat.in/signup" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Start Free Trial
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}