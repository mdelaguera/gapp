import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main sidebar with all our content
  paddleGuides: [
    'intro',
    {
      type: 'category',
      label: '2025 Buying Guides',
      collapsed: false,
      items: [
        'ultimate-guide',
        'beginner-guide',
        'budget-paddles',
      ],
    },
    {
      type: 'category',
      label: 'Premium Analysis',
      collapsed: false,
      items: [
        'premium-comparison',
      ],
    },
  ],

  // Placeholder sidebars for future content
  comparisons: [
    'premium-comparison',
  ],

  reviews: [
    'ultimate-guide',
  ],
};

export default sidebars;
