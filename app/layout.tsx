import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import TableOfContents from './components/TableOfContents';
import Search from './components/Search';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getapickleballpaddle.com'),
  title: {
    default: 'Get A Pickleball Paddle',
    template: '%s | Get A Pickleball Paddle'
  },
  description: 'Comprehensive Reviews & Buying Guides for the Best Pickleball Paddles in 2025',
  keywords: ['pickleball paddles', 'paddle reviews', 'best pickleball paddles 2025', 'JOOLA Ben Johns', 'Six Zero Double Black Diamond', 'Vatic Pro', 'carbon fiber paddles', 'polymer core', 'USAPA approved', 'tournament paddles', 'beginner paddles', 'premium paddles', 'paddle comparison', 'buying guide'],
  authors: [{ name: 'Get A Pickleball Paddle Team' }],
  openGraph: {
    type: 'website',
    siteName: 'Get A Pickleball Paddle',
    title: 'Best Pickleball Paddles 2025 | Comprehensive Reviews & Buying Guide',
    description: 'Find your perfect pickleball paddle with our detailed analysis of USAPA-approved paddles. Compare JOOLA, Six Zero, Vatic Pro & more.',
    url: 'https://www.getapickleballpaddle.com',
    images: [{
      url: '/img/paddle-social-card.jpg',
      width: 1200,
      height: 630,
      alt: 'Get A Pickleball Paddle - Expert Reviews'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pickleball Paddles 2025 | Comprehensive Reviews & Buying Guide',
    description: 'Find your perfect pickleball paddle with our detailed analysis of USAPA-approved paddles. Compare JOOLA, Six Zero, Vatic Pro & more.'
  },
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <TableOfContents />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function PaddleIcon() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 40 40" 
      fill="none" 
      className="inline-block mr-3"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for better visibility */}
      <circle cx="20" cy="18" r="18" fill="#28a745" opacity="0.1"/>
      
      {/* Paddle face - distinctive pickleball paddle shape */}
      <path 
        d="M20 4C25 4 28 7 28 12V24C28 29 25 32 20 32C15 32 12 29 12 24V12C12 7 15 4 20 4Z" 
        fill="#28a745"
        stroke="#1e7e34"
        strokeWidth="2"
      />
      
      {/* Handle */}
      <rect 
        x="17" 
        y="32" 
        width="6" 
        height="4" 
        fill="#1e7e34" 
        rx="3"
      />
      
      {/* Surface texture lines for realism */}
      <line x1="16" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="13" x2="25" y2="13" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="16" x2="25" y2="16" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="19" x2="25" y2="19" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="22" x2="25" y2="22" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="25" x2="25" y2="25" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="16" y1="28" x2="24" y2="28" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      
      {/* Sweet spot indicator */}
      <circle cx="20" cy="18" r="4" fill="none" stroke="white" strokeWidth="1.2" opacity="0.8"/>
      
      {/* Brand text */}
      <text x="20" y="19" fontSize="4" fill="white" textAnchor="middle" opacity="0.9">P</text>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
      <path d="M7.03 5.836h9.94c1.208 0 2.194.986 2.194 2.194v7.94c0 1.208-.986 2.194-2.194 2.194H7.03c-1.208 0-2.194-.986-2.194-2.194V8.03c0-1.208.986-2.194 2.194-2.194z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}


function Footer() {
  return (
    <footer className="footer footer--dark" style={{ backgroundColor: '#2d3748', color: 'white', padding: '2rem 0' }}>
      <div className="container">
        <div className="row">
          <div className="col footer__col">
            <h4 className="footer__title">Paddle Guides</h4>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a href="/ultimate-guide" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Ultimate Guide 2025</a>
              </li>
              <li className="footer__item">
                <a href="/beginner-guide" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Beginner Guide</a>
              </li>
              <li className="footer__item">
                <a href="/budget-paddles" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Budget Paddles</a>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <h4 className="footer__title">Comparisons</h4>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a href="/premium-comparison" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Premium Paddles</a>
              </li>
              <li className="footer__item">
                <a href="/budget-paddles" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Budget vs Premium</a>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <h4 className="footer__title">Connect</h4>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a href="/contact" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Contact Us</a>
              </li>
              <li className="footer__item">
                <a href="/about" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>About Us</a>
              </li>
              <li className="footer__item">
                <a href="/#newsletter" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <h4 className="footer__title">Newsletter</h4>
            <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Get the latest paddle reviews and buying guides delivered to your inbox.
            </p>
            <form className="newsletter-signup" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  style={{
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '2px solid #6b7280',
                    backgroundColor: '#374151',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <h4 className="footer__title" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>Follow Us</h4>
            <div className="social-icons">
              <a href="https://twitter.com/getpicklepaddle" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0' }} title="Follow us on Twitter/X">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com/getpicklepaddle" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0' }} title="Like us on Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/getpicklepaddle" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0' }} title="Follow us on Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com/@getpicklepaddle" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0' }} title="Subscribe to our YouTube channel">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className="col footer__col">
            <h4 className="footer__title">Legal</h4>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a href="/affiliate-disclosure" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Affiliate Disclosure</a>
              </li>
              <li className="footer__item">
                <a href="/privacy" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li className="footer__item">
                <a href="/terms" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            Copyright © 2025 Get A Pickleball Paddle. All rights reserved. | We may earn commission from purchases made through our affiliate links.
          </div>
        </div>
      </div>
    </footer>
  );
}
