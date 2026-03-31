import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Our Features</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            AutoChat provides everything you need to automate WhatsApp conversations, manage customer relationships, and scale your business.
          </p>
        </div>
      </section>

      {/* Complete WhatsApp Business Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete WhatsApp Business Solution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Omnichannel Team Inbox */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Omnichannel Team Inbox</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multi-agent collaboration</li>
                <li>• Real-time message sync</li>
                <li>• Assignment & routing rules</li>
                <li>• Internal notes & mentions</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            {/* Advanced AI Chatbot */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced AI Chatbot</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Natural language processing</li>
                <li>• Multi-language support</li>
                <li>• Context awareness</li>
                <li>• Custom training</li>
                <li>• Fallback to human agent</li>
              </ul>
            </div>

            {/* WhatsApp Flows */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3">WhatsApp Flows</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Visual flow builder</li>
                <li>• Conditional logic</li>
                <li>• Data collection forms</li>
                <li>• Payment integration</li>
                <li>• Appointment booking</li>
              </ul>
            </div>

            {/* AI Enhanced Broadcasting */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Enhanced Broadcasting</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bulk messaging campaigns</li>
                <li>• Personalization tokens</li>
                <li>• Segmentation & targeting</li>
                <li>• Schedule & automation</li>
                <li>• Campaign analytics</li>
              </ul>
            </div>

            {/* Business App Installations */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Business App Installations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CRM integrations</li>
                <li>• E-commerce platforms</li>
                <li>• Payment gateways</li>
                <li>• Calendar & booking</li>
                <li>• Custom API webhooks</li>
              </ul>
            </div>

            {/* AI Voice & Video Calling */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Voice & Video Calling</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Voice bot capabilities</li>
                <li>• Video support sessions</li>
                <li>• Call recording</li>
                <li>• Speech-to-text</li>
                <li>• Multi-language support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Standard Automation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Beyond Standard Automation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            AutoChat goes beyond basic automation with advanced features designed for enterprise-grade operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-4">Multi-Phone Number Support</h3>
              <p className="text-gray-700">Manage multiple WhatsApp Business numbers from a single dashboard. Perfect for multi-brand operations or geographic expansion.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-4">Role-Based Access Control</h3>
              <p className="text-gray-700">Define custom roles and permissions for team members. Control who can access what features and data.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-4">Advanced Analytics & Reports</h3>
              <p className="text-gray-700">Get deep insights into customer behavior, agent performance, and campaign effectiveness with customizable dashboards.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-4">White Label Solution</h3>
              <p className="text-gray-700">Rebrand AutoChat as your own product. Custom domain, branding, and complete white-label capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="font-bold mb-2">Advanced Analytics & Insights</h4>
              <p className="text-sm text-gray-600">Complete business intelligence with custom reports and real-time dashboards</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-bold mb-2">Advanced Webhook System</h4>
              <p className="text-sm text-gray-600">Real-time data sync with any external system through webhooks</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-bold mb-2">Custom Contact Management</h4>
              <p className="text-sm text-gray-600">360° customer view with tags, custom fields, and segmentation</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold mb-2">AI-Powered Automation</h4>
              <p className="text-sm text-gray-600">Smart automation with machine learning and predictive analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5000+ Integrations */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">5000+ Integrations</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Connect AutoChat with your entire business stack through native integrations and Zapier
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-white/80">Shopify</div>
            <div className="text-white/80">WooCommerce</div>
            <div className="text-white/80">Salesforce</div>
            <div className="text-white/80">HubSpot</div>
            <div className="text-white/80">Google Sheets</div>
            <div className="text-white/80">Slack</div>
            <div className="text-white/80">Zoom</div>
            <div className="text-white/80">Calendly</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your WhatsApp Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Start your free trial today and see the difference</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://panel.autochat.in/signup" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              Start Free Trial
            </a>
            <a href="/pricing" className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}