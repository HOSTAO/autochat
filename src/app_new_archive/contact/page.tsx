import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our team for sales inquiries, support, or partnerships
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sales Inquiries</h3>
                    <p className="text-gray-600">Interested in AutoChat for your business? Our sales team is here to help.</p>
                    <p className="text-purple-600 font-semibold mt-2">sales@autochat.in</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                    <p className="text-gray-600">Need help with your AutoChat account? We're here 24/7.</p>
                    <p className="text-purple-600 font-semibold mt-2">support@autochat.in</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Partnerships</h3>
                    <p className="text-gray-600">Interested in partnering with AutoChat? Let's talk.</p>
                    <p className="text-purple-600 font-semibold mt-2">partners@autochat.in</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Media Inquiries</h3>
                    <p className="text-gray-600">For press releases and media coverage.</p>
                    <p className="text-purple-600 font-semibold mt-2">media@autochat.in</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM (IST)</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">More Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-4">See AutoChat in action with a personalized demo</p>
                  <a href="https://panel.autochat.in/demo" className="text-purple-600 hover:text-purple-700 font-semibold">
                    Book Demo →
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                  <a href="https://wa.me/918089066666" className="text-purple-600 hover:text-purple-700 font-semibold">
                    Start Chat →
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Help Center</h3>
                  <p className="text-gray-600 mb-4">Browse our knowledge base and documentation</p>
                  <a href="https://help.autochat.in" className="text-purple-600 hover:text-purple-700 font-semibold">
                    Visit Help Center →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}