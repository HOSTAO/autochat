'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
              </svg>
            </div>
            <span className="text-2xl font-bold flex">
              <span className="text-accent-500">Auto</span>
              <span className="text-primary-500">Chat</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="/integrations" className="text-gray-700 hover:text-primary-600 transition-colors">
              Integrations
            </Link>
            <Link href="/ai-first" className="text-gray-700 hover:text-primary-600 transition-colors">
              AI First
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <a href="https://www.youtube.com/@autochat/videos" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">
              Tutorials
            </a>
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://panel.autochat.in/login" className="text-gray-700 hover:text-primary-600">
              Login
            </a>
            <a href="https://panel.autochat.in/signup" className="bg-primary-500 text-white px-5 py-2 rounded-lg hover:bg-primary-600 transition-all transform hover:scale-105">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link href="/features" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link href="/integrations" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Integrations
              </Link>
              <Link href="/ai-first" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                AI First
              </Link>
              <Link href="/pricing" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <a href="https://www.youtube.com/@autochat/videos" target="_blank" rel="noopener noreferrer" className="block py-2 text-gray-700 hover:text-primary-600">
                Tutorials
              </a>
            </div>
            <div className="mt-4 pt-4 border-t space-y-2">
              <a href="https://panel.autochat.in/login" className="block w-full text-center py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
                Login
              </a>
              <a href="https://panel.autochat.in/signup" className="block w-full text-center py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                Sign Up
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}