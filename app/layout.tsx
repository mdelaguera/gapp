import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://getapickleballpaddle.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Get A Pickleball Paddle - Best Paddle Reviews & Buying Guide 2025',
    template: '%s | Get A Pickleball Paddle'
  },
  description: 'Expert pickleball paddle reviews and buying guides. Find your perfect paddle with our analysis of 200+ tested paddles. JOOLA, Six Zero, Vatic Pro & more.',
  keywords: ['pickleball paddles', 'paddle reviews', 'best pickleball paddles 2025', 'buying guide', 'JOOLA', 'Six Zero', 'Vatic Pro'],
  openGraph: {
    title: 'Get A Pickleball Paddle - Best Paddle Reviews 2025',
    description: 'Expert pickleball paddle reviews and buying guides. Find your perfect paddle with our analysis of 200+ tested paddles.',
    url: 'https://getapickleballpaddle.com',
    siteName: 'Get A Pickleball Paddle',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get A Pickleball Paddle - Best Paddle Reviews 2025',
    description: 'Expert pickleball paddle reviews and buying guides. Find your perfect paddle with our analysis of 200+ tested paddles.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <Header />
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
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
    <header className="max-w-[60ch] mx-auto w-full mb-8">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center text-xl font-semibold hover:text-blue-500 transition-colors duration-200">
          <PaddleIcon />
          <span className="hidden sm:inline">Get A Pickleball Paddle</span>
          <span className="sm:hidden">GAPP</span>
        </a>
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="/ultimate-guide" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Ultimate Guide</a>
          <a href="/beginner-guide" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Beginner Guide</a>
          <a href="/budget-paddles" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Budget Paddles</a>
          <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const links = [
    { name: 'about', url: '/about' },
    { name: 'contact', url: '/contact' },
    { name: 'affiliate disclosure', url: '/affiliate-disclosure' },
    { name: 'privacy policy', url: '/privacy' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
