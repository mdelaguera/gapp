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
