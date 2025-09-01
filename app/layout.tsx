import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import TableOfContents from './components/TableOfContents';

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
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2C10.5 2 9.5 3 9.5 4.5V6H8C6.5 6 5.5 7 5.5 8.5V19.5C5.5 21 6.5 22 8 22H16C17.5 22 18.5 21 18.5 19.5V8.5C18.5 7 17.5 6 16 6H14.5V4.5C14.5 3 13.5 2 12 2Z" 
        fill="currentColor"
      />
      <circle cx="12" cy="14" r="3" fill="white" fillOpacity="0.3"/>
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
            <a href="/ultimate-guide?search=true" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>🔍 Search</a>
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
