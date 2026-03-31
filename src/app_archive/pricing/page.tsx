'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does AutoChat help in setting up the account after purchase?",
      a: "Yes, we provide complete account setup assistance including WhatsApp Business API configuration, initial chatbot flows, and team training."
    },
    {
      q: "What are the free conversations mentioned in all plans?",
      a: "Meta provides 1,000 free conversations per month across all WhatsApp Business accounts. These are included in all our plans."
    },
    {
      q: "What is a user agent in the pricing plans?",
      a: "A user agent is a team member who can access the AutoChat dashboard to manage conversations, view analytics, and handle customer interactions."
    },
    {
      q: "What are active contacts in the pricing plans?",
      a: "Active contacts are unique WhatsApp users who have interacted with your business in the billing period. They count towards your plan limits."
    },
    {
      q: "What is the WhatsApp eCommerce bot?",
      a: "The eCommerce bot is a pre-built automation that handles product catalogs, order tracking, payment links, and cart abandonment recovery automatically."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Transparent Pricing for Your Business Needs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your WhatsApp marketing strategy
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Startup Plan */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all">
              <h3 className="text-2xl font-bold mb-4">Startup Plan</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$545</span>
                <span className="text-gray-500 text-lg">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 5 User Agents",
                  "50k Contacts",
                  "Up to 20k Conversations P/m",
                  "Choose 1 Channel: WhatsApp, Instagram, TikTok or Messenger",
                  "1 Chatbot (Flow)",
                  "Native WhatsApp Flows",
                  "Bulk Broadcast",
                  "API & Webhooks",
                  "Payment Gateways",
                  "Google Sheet Integration",
                  "WhatsApp Store",
                  "Shopify/WooCommerce/Ecwid",
                  "Fb/Instagram Lead Ad Automation",
                  "Appointment Booking System"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://panel.autochat.in/signup" className="block w-full bg-purple-600 text-white text-center py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            {/* Growth Plan */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl shadow-xl p-8 border-2 border-primary-400 relative transform scale-105">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold mb-4">Growth Plan</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$1,365</span>
                <span className="text-gray-500 text-lg">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "20 User Agents",
                  "100k Contacts",
                  "Up to 50k Conversations P/m",
                  "WhatsApp, Instagram, TikTok, Messenger",
                  "20 Chatbots (Flow)",
                  "Native WhatsApp Flows",
                  "Bulk Broadcast",
                  "API & Webhooks",
                  "Payment Gateways",
                  "Google Sheet Integration",
                  "All Integrations",
                  "WhatsApp Store",
                  "Shopify/WooCommerce/Ecwid",
                  "eCommerce Bot Included",
                  "Fb/Instagram Lead Ad Automation",
                  "Appointment Booking System",
                  "ChatGPT Integration",
                  "AI Agent",
                  "OpenAI Chat using Business Data",
                  "Text & Voice Conversation AI"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://panel.autochat.in/signup" className="block w-full bg-purple-600 text-white text-center py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$2,730</span>
                <span className="text-gray-500 text-lg">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "100 User Agents",
                  "500k Contacts",
                  "Up to 100k Conversations P/m",
                  "WhatsApp, Instagram, TikTok, Messenger",
                  "100 Chatbots (Flow)",
                  "Native WhatsApp Flows",
                  "Bulk Broadcast",
                  "API & Webhooks",
                  "Payment Gateways",
                  "Google Sheet Integration",
                  "All Integrations",
                  "WhatsApp Store",
                  "Shopify/WooCommerce/Ecwid",
                  "eCommerce Bot Included",
                  "Fb/Instagram Lead Ad Automation",
                  "Appointment Booking System",
                  "ChatGPT Integration",
                  "AI Agent",
                  "OpenAI Chat using Business Data",
                  "Text & Voice Conversation AI",
                  "Custom Integration Support",
                  "Dedicated Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://panel.autochat.in/signup" className="block w-full bg-purple-600 text-white text-center py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Add-ons</h2>
          <p className="text-gray-600 text-center mb-12">Enhance your plan with powerful extras</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">No Meta Markup</h3>
                  <p className="text-gray-600 mb-4">Pay directly to Meta for conversation charges. AutoChat adds zero markup on Meta's pricing.</p>
                  <div className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Zero markup guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Multi-Number Inbox</h3>
                  <p className="text-gray-600 mb-4">Connect multiple WhatsApp numbers to a single AutoChat account.</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold mr-2">$410</span>
                    <span className="text-gray-500">/year</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">per additional number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Enterprise / Custom Plan</h2>
          <p className="text-xl text-gray-600 mb-8">Looking for more limits? Enterprise-level data protection, dedicated support, and custom requirements?</p>
          <a href="/contact" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}