import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import TableOfContents from './components/TableOfContents';
import Search from './components/Search';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://getapickleballpaddle.com'),
  title: {
    default: 'Get A Pickleball Paddle',
    template: '%s | Get A Pickleball Paddle'
  },
  description: 'Expert Reviews & Buying Guides for the Best Pickleball Paddles in 2025',
  keywords: ['pickleball paddles', 'paddle reviews', 'best pickleball paddles 2025', 'JOOLA Ben Johns', 'Six Zero Double Black Diamond', 'Vatic Pro', 'carbon fiber paddles', 'polymer core', 'USAPA approved', 'tournament paddles', 'beginner paddles', 'premium paddles', 'paddle comparison', 'buying guide'],
  authors: [{ name: 'Get A Pickleball Paddle Expert Team' }],
  openGraph: {
    type: 'website',
    siteName: 'Get A Pickleball Paddle',
    title: 'Best Pickleball Paddles 2025 | Expert Reviews & Buying Guide',
    description: 'Find your perfect pickleball paddle with our expert reviews of 200+ tested paddles. Compare JOOLA, Six Zero, Vatic Pro & more.',
    url: 'https://getapickleballpaddle.com',
    images: [{
      url: '/img/paddle-social-card.jpg',
      width: 1200,
      height: 630,
      alt: 'Get A Pickleball Paddle - Expert Reviews'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pickleball Paddles 2025 | Expert Reviews & Buying Guide',
    description: 'Find your perfect pickleball paddle with our expert reviews of 200+ tested paddles. Compare JOOLA, Six Zero, Vatic Pro & more.'
  },
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
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
      width="28" 
      height="28" 
      viewBox="0 0 40 40" 
      fill="none" 
      className="inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paddle face - distinctive pickleball paddle shape */}
      <path 
        d="M20 4C25 4 28 7 28 12V24C28 29 25 32 20 32C15 32 12 29 12 24V12C12 7 15 4 20 4Z" 
        fill="#2d3748"
        stroke="#4a5568"
        strokeWidth="1"
      />
      {/* Handle */}
      <rect 
        x="17" 
        y="32" 
        width="6" 
        height="4" 
        fill="#2d3748" 
        rx="3"
      />
      {/* Surface texture lines for realism */}
      <line x1="16" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="15" y1="13" x2="25" y2="13" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="15" y1="16" x2="25" y2="16" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="15" y1="19" x2="25" y2="19" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="15" y1="22" x2="25" y2="22" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="15" y1="25" x2="25" y2="25" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      <line x1="16" y1="28" x2="24" y2="28" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      {/* Sweet spot indicator */}
      <circle cx="20" cy="18" r="4" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

function Header() {
  return (
    <header className="navbar navbar--fixed-top" style={{ backgroundColor: 'white', borderBottom: '1px solid #e9ecef' }}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <a href="/" className="navbar__title" style={{ color: '#2d3748', textDecoration: 'none', fontSize: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
            <PaddleIcon />
            Get A Pickleball Paddle
          </a>
        </div>
        <nav className="navbar__nav">
          <div className="navbar__items">
            <a href="/ultimate-guide" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Ultimate Guide</a>
            <a href="/beginner-guide" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Beginner Guide</a>
            <a href="/budget-paddles" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Budget Paddles</a>
            <a href="/premium-comparison" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Premium Paddles</a>
          </div>
          <div className="navbar__items navbar__items--right">
            <div className="navbar__item">
              <Search />
            </div>
            <a href="/affiliate-disclosure" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Disclosure</a>
          </div>
        </nav>
      </div>
    </header>
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
            <h4 className="footer__title">Social</h4>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a href="https://twitter.com/getpicklepaddle" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Twitter/X</a>
              </li>
              <li className="footer__item">
                <a href="https://facebook.com/getpicklepaddle" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="footer__item">
                <a href="https://instagram.com/getpicklepaddle" className="footer__link-item" style={{ color: '#e2e8f0', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
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
            Copyright © {new Date().getFullYear()} Get A Pickleball Paddle. All rights reserved. | We may earn commission from purchases made through our affiliate links.
          </div>
        </div>
      </div>
    </footer>
  );
}
