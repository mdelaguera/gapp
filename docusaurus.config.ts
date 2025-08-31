import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Get A Pickleball Paddle',
  tagline: 'Expert Reviews & Buying Guides for the Best Pickleball Paddles in 2025',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://getapickleballpaddle.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'getapickleballpaddle',
  projectName: 'paddle-reviews',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Custom fields for SEO metadata
  customFields: {
    metadata: [
      {name: 'keywords', content: 'pickleball paddles, paddle reviews, best pickleball paddles 2025, beginner paddles, premium paddles'},
      {name: 'description', content: 'Expert reviews and buying guides for the best pickleball paddles in 2025. Find your perfect paddle with our comprehensive comparisons and affiliate recommendations.'},
      {name: 'author', content: 'Paddle Experts'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Get A Pickleball Paddle'},
    ],
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: false, // Disable sidebar completely
          routeBasePath: '/',
          editUrl: undefined, // Remove edit links for affiliate site
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false, // Disable blog for affiliate site
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-3XE6YZV4HJ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/paddle-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Get A Pickleball Paddle',
      items: [
        {
          to: '/ultimate-guide',
          position: 'left',
          label: 'Ultimate Guide',
        },
        {
          to: '/beginner-guide',
          position: 'left',
          label: 'Beginner Guide',
        },
        {
          to: '/budget-paddles',
          position: 'left',
          label: 'Budget Paddles',
        },
        {
          to: '/premium-comparison',
          position: 'left',
          label: 'Premium Paddles',
        },
        {
          href: '/ultimate-guide?search=true',
          label: '🔍 Search',
          position: 'right',
        },
        {
          href: '/affiliate-disclosure',
          label: 'Disclosure',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Paddle Guides',
          items: [
            {
              label: 'Ultimate Guide 2025',
              to: '/ultimate-guide',
            },
            {
              label: 'Beginner Guide',
              to: '/beginner-guide',
            },
            {
              label: 'Budget Paddles',
              to: '/budget-paddles',
            },
          ],
        },
        {
          title: 'Comparisons',
          items: [
            {
              label: 'Premium Paddles',
              to: '/premium-comparison',
            },
            {
              label: 'Budget vs Premium',
              to: '/budget-paddles',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Contact Us',
              to: '/contact',
            },
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'Newsletter',
              to: '/#newsletter',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter/X',
              href: 'https://twitter.com/getpicklepaddle',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/getpicklepaddle',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/getpicklepaddle',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Affiliate Disclosure',
              to: '/affiliate-disclosure',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Get A Pickleball Paddle. All rights reserved. | We may earn commission from purchases made through our affiliate links.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
