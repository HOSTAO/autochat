import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 lg:py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">
                  <span className="text-accent-500">Auto</span>
                  <span className="text-primary-500">Chat</span>
                </span>
              </div>
              <p className="mb-6">AutoChat is an official Meta WhatsApp Business Solution Provider</p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://wa.me/971508351336" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Placeholder */}
            <div>
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/integrations" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="/tutorials" className="hover:text-white transition-colors">Video Tutorials</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/meta-pricing" className="hover:text-white transition-colors">Meta Official Pricing</a></li>
                <li><a href="/meta-pricing-examples" className="hover:text-white transition-colors">Meta Official Pricing Examples</a></li>
                <li><a href="/coupon-code" className="hover:text-white transition-colors">Coupon Code</a></li>
                <li><a href="/autochat-vs-wati" className="hover:text-white transition-colors">Autochat VS Wati</a></li>
                <li><a href="/autochat-vs-aisensy" className="hover:text-white transition-colors">Autochat VS AiSensy</a></li>
                <li><a href="/autochat-vs-interakt" className="hover:text-white transition-colors">Autochat VS Interakt</a></li>
                <li><a href="/autochat-vs-gallabox" className="hover:text-white transition-colors">Autochat VS Gallabox</a></li>
                <li><a href="/autochat-vs-quickreply" className="hover:text-white transition-colors">Autochat VS QuickReply.ai</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Useful Links</h4>
              <ul className="space-y-2 mb-6">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>

              {/* App Store Links */}
              <div className="space-y-3">
                <a href="#" className="block">
                  <img 
                    src="data:image/svg+xml,%3Csvg width='150' height='50' viewBox='0 0 150 50' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='150' height='50' rx='8' fill='black'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='14'%3EGET IT ON%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='18' font-weight='bold'%3EGoogle Play%3C/text%3E%3C/svg%3E"
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="data:image/svg+xml,%3Csvg width='150' height='50' viewBox='0 0 150 50' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='150' height='50' rx='8' fill='black'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='12'%3EDownload on the%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='18' font-weight='bold'%3EApp Store%3C/text%3E%3C/svg%3E"
                    alt="Download on App Store" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-900 text-sm font-semibold">Mastercard</span>
                <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-900 text-sm font-semibold">VISA</span>
                <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-900 text-sm font-semibold">🍎 Pay</span>
                <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-900 text-sm font-semibold">G Pay</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm">Copyright © 2026 Hostao LLC. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Support Float */}
      <a 
        href="https://wa.me/971508351336" 
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center p-4 group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </footer>
  );
}