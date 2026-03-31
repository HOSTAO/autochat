'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { detectGeoLocation, getPricingForRegion, formatPrice, type PricingTier } from '../lib/geo';

export default function GeoPricing() {
  const [pricing, setPricing] = useState<PricingTier | null>(null);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    async function loadPricing() {
      try {
        const geo = await detectGeoLocation();
        const pricingTier = getPricingForRegion(geo.countryCode);
        setPricing(pricingTier);
        setCountry(geo.country);
      } catch (error) {
        console.error('Failed to load geo pricing:', error);
        // Fallback to default pricing
        const defaultPricing = getPricingForRegion('US');
        setPricing(defaultPricing);
        setCountry('International');
      } finally {
        setLoading(false);
      }
    }

    loadPricing();
  }, []);

  if (loading || !pricing) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-12 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2">
                      {[...Array(8)].map((_, j) => (
                        <div key={j} className="h-4 bg-gray-300 rounded"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Pricing & Plans</h2>
        <p className="text-center text-gray-600 mb-2">
          Special pricing for {country} customers
        </p>
        <p className="text-center text-gray-600 mb-12">
          Transform your WhatsApp business with our comprehensive automation platform.{' '}
          <Link href="/features" className="text-blue-600 hover:underline">
            Explore all features
          </Link>{' '}
          and choose the plan that fits your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <h6 className="text-gray-500 mb-4">For Small Businesses</h6>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">{formatPrice(pricing.starter, pricing.currency)}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>1,000 Free Conversations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Up to 5 User Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>20K Conversations/month</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>5 Chatbot Flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>API & Webhooks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Basic eCommerce</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>50K Contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Email Support</span>
              </li>
            </ul>

            <Link 
              href="https://panel.autochat.in/signup" 
              className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-center block text-sm"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Medium Plan - Most Popular */}
          <div className="bg-white rounded-lg p-6 shadow-xl border-2 border-blue-500 relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <h6 className="text-gray-500 mb-4">For Growing Businesses</h6>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">{formatPrice(pricing.medium, pricing.currency)}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>2,000 Free Conversations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Up to 20 User Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>50K Conversations/month</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>25 Chatbot Flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Advanced API & Webhooks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Full eCommerce Suite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>AI Chatbots (ChatGPT)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>100K Contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Priority Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Multi-channel Inbox</span>
              </li>
            </ul>

            <Link 
              href="https://panel.autochat.in/signup" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center block text-sm"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <h6 className="text-gray-500 mb-4">For Large Businesses</h6>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">{formatPrice(pricing.premium, pricing.currency)}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>5,000 Free Conversations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Up to 100 User Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>150K Conversations/month</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>100 Chatbot Flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Enterprise API Access</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Advanced eCommerce</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>AI Voice Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>500K Contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Dedicated Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>White-label Option</span>
              </li>
            </ul>

            <Link 
              href="https://panel.autochat.in/signup" 
              className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-center block text-sm"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <h6 className="text-gray-500 mb-4">For Large Corporations</h6>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">{formatPrice(pricing.enterprise, pricing.currency)}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited Conversations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited User Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited Phone Numbers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited Chatbot Flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Custom Integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>AI Voice & Video Calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited Contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>24/7 Dedicated Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Full White-label</span>
              </li>
            </ul>

            <Link 
              href="mailto:hello@autochat.in" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-center block text-sm"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            All plans include: Official WhatsApp Business API • Green Tick Verification • 24/7 Support • Free Setup
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Prices shown in {pricing.currency} for {country} customers. Meta conversation charges apply separately.
          </p>
        </div>
      </div>
    </div>
  );
}