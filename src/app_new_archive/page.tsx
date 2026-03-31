import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      message: "AutoChat has transformed how we handle customer support. Our response time improved by 80%!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Director, RetailPlus",
      message: "The best WhatsApp automation tool we've used. Easy to set up and powerful features.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Founder, ServicePro",
      message: "Incredible ROI! We're now handling 5x more inquiries with the same team size.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Mobile First */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              {/* Logo - Mobile */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 lg:hidden">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold">
                  <span className="text-accent-500">Auto</span>
                  <span className="text-primary-500">Chat</span>
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div>
                  {/* Logo - Desktop */}
                  <div className="hidden lg:flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                      </svg>
                    </div>
                    <span className="text-3xl font-bold">
                      <span className="text-accent-500">Auto</span>
                      <span className="text-primary-500">Chat</span>
                    </span>
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">®</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Turn Conversations into Conversions with{' '}
                    <span className="text-primary-500">AI-Driven WhatsApp</span>{' '}
                    Automation
                  </h1>
                  
                  <p className="text-base lg:text-lg text-gray-600 mb-8">
                    Experience the future of WhatsApp Business with Autochat. Automate workflows, resolve queries instantly, and scale revenue to boost loyalty and drive repeat sales.
                  </p>

                  <Link href="/pricing" className="inline-block bg-[#1e3a8a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#1e3a8a]/90 transition-all text-base sm:text-lg font-semibold mb-8">
                    Start 3-Days Free Trial
                  </Link>

                  {/* Trust Badges */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
                      <span className="text-base lg:text-lg font-semibold">Trusted by Top Brands</span>
                      <div className="flex items-center">
                        <span className="text-base lg:text-lg">5/5 (5 Star Reviews)</span>
                        <div className="flex ml-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="border rounded px-3 py-2 flex items-center space-x-2">
                          <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.9 7c.6 0 1.1.5 1.1 1.1v9.8c0 .6-.5 1.1-1.1 1.1h-5.4L8 13.5V19H5.1c-.6 0-1.1-.5-1.1-1.1V8.1C4 7.5 4.5 7 5.1 7h13.8m0-2H5.1C3.4 5 2 6.4 2 8.1v9.8C2 19.6 3.4 21 5.1 21H8v2l7.5-7.5h3.4c1.7 0 3.1-1.4 3.1-3.1V8.1C22 6.4 20.6 5 18.9 5z"/>
                            <path d="M15 10.5c0 .8-.7 1.5-1.5 1.5S12 11.3 12 10.5 12.7 9 13.5 9s1.5.7 1.5 1.5m-6 0c0 .8-.7 1.5-1.5 1.5S6 11.3 6 10.5 6.7 9 7.5 9 9 9.7 9 10.5m9 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5"/>
                          </svg>
                          <span className="text-sm font-medium">Meta</span>
                          <span className="text-xs text-gray-600 hidden sm:inline">Business Partner</span>
                        </div>
                        <div>
                          <span className="text-xl lg:text-2xl font-bold">200+</span>
                          <span className="text-xs lg:text-sm text-gray-600 ml-1">Happy Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image - Hidden on Mobile */}
                <div className="relative hidden lg:block">
                  <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                    <p className="text-gray-500">Hero Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">5000+</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1 lg:mt-2">Active Businesses</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">10M+</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1 lg:mt-2">Messages Sent</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">98%</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1 lg:mt-2">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 lg:mb-4">Chatbots, Bulk Messaging, Team Inbox, Integrations</h2>
          <p className="text-base lg:text-xl text-gray-600 text-center mb-8 lg:mb-12 max-w-3xl mx-auto">
            AutoChat offers all WhatsApp Business tools in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Smart AI Chatbot</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Build intelligent chatbots that understand customer intent and provide instant responses 24/7.</p>
              <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 text-sm lg:text-base">Learn more →</a>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Team Collaboration</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Manage conversations together with your team. Assign chats, add notes, and track performance.</p>
              <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 text-sm lg:text-base">Learn more →</a>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Broadcast Campaigns</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Send personalized messages to thousands at once. Schedule campaigns and track engagement.</p>
              <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 text-sm lg:text-base">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">5000+ Integrations</h2>
          <p className="text-base lg:text-xl text-gray-600 mb-8 lg:mb-12">Connect AutoChat with your entire business stack</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 max-w-4xl mx-auto">
            <div className="text-gray-400">
              <span className="text-lg lg:text-2xl font-bold">Shopify</span>
            </div>
            <div className="text-gray-400">
              <span className="text-lg lg:text-2xl font-bold">WooCommerce</span>
            </div>
            <div className="text-gray-400">
              <span className="text-lg lg:text-2xl font-bold">HubSpot</span>
            </div>
            <div className="text-gray-400">
              <span className="text-lg lg:text-2xl font-bold">Zapier</span>
            </div>
            <div className="text-gray-400 hidden lg:block">
              <span className="text-lg lg:text-2xl font-bold">Salesforce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">"{testimonial.message}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <span className="text-primary-600 font-semibold text-sm lg:text-base">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm lg:text-base">{testimonial.name}</p>
                    <p className="text-xs lg:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AutoChat to automate their WhatsApp communications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-white text-primary-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 text-base lg:text-lg font-semibold inline-block shadow-lg">
              Start Free Trial
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 text-base lg:text-lg font-semibold inline-block">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all p-3 lg:p-4">
          <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-1 text-right mr-2 hidden lg:block">need help? chat with us</p>
      </div>
    </div>
  );
}