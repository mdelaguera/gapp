// SEO Configuration for Get A Pickleball Paddle
// Domain-based semantic keywords and legitimate claims

export const SEO_CONFIG = {
  // Base domain and branding
  domain: 'getapickleballpaddle.com',
  siteName: 'Get A Pickleball Paddle',
  defaultTitle: 'Get A Pickleball Paddle - Find Your Perfect Paddle 2025',
  titleTemplate: '%s | Get A Pickleball Paddle',
  
  // Core value proposition (honest, conversion-focused)
  defaultDescription: 'Find the perfect pickleball paddle for your game. Compare USAPA-approved paddles, read detailed reviews, and discover the best paddles by skill level, price, and playing style.',
  
  // Domain-based semantic keyword clusters
  primaryKeywords: [
    'pickleball paddle',
    'pickleball paddles 2025',
    'best pickleball paddle',
    'USAPA approved paddles',
    'carbon fiber pickleball paddle',
    'polymer core paddle'
  ],
  
  // Long-tail semantic phrases derived from domain
  longTailKeywords: [
    'how to choose a pickleball paddle',
    'pickleball paddle buying guide',
    'pickleball paddle reviews and comparisons',
    'find the right pickleball paddle for beginners',
    'best pickleball paddle for intermediate players',
    'carbon fiber vs polymer pickleball paddles',
    'pickleball paddle weight and grip size guide',
    'tournament legal pickleball paddles',
    'professional pickleball paddle recommendations'
  ],
  
  // Skill-level focused keywords
  skillKeywords: {
    beginner: [
      'beginner pickleball paddle',
      'first pickleball paddle',
      'pickleball paddle for new players',
      'easy to use pickleball paddle'
    ],
    intermediate: [
      'intermediate pickleball paddle',
      '3.5 skill level paddle',
      'advancing player paddle',
      'versatile pickleball paddle'
    ],
    advanced: [
      'advanced pickleball paddle',
      'competitive pickleball paddle',
      '4.0+ skill level paddle',
      'tournament grade paddle'
    ]
  },
  
  // Feature-based keywords
  featureKeywords: {
    power: [
      'power pickleball paddle',
      'aggressive play paddle',
      'high power paddle',
      'drive-focused paddle'
    ],
    control: [
      'control pickleball paddle',
      'precision paddle',
      'touch and feel paddle',
      'finesse game paddle'
    ],
    spin: [
      'spin pickleball paddle',
      'textured surface paddle',
      'raw carbon paddle',
      'maximum spin paddle'
    ]
  },
  
  // Price-based keywords
  priceKeywords: [
    'budget pickleball paddle',
    'affordable pickleball paddle',
    'pickleball paddle under $100',
    'premium pickleball paddle',
    'best value pickleball paddle',
    'cheap pickleball paddle that performs'
  ],
  
  // Brand-focused (factual, no false claims)
  brandKeywords: [
    'JOOLA pickleball paddle',
    'Selkirk pickleball paddle',
    'CRBN pickleball paddle',
    'Engage pickleball paddle',
    'Paddletek paddle',
    'Six Zero paddle',
    'Vatic Pro paddle'
  ]
}

// Legitimate content claims (no false expertise)
export const CONTENT_CLAIMS = {
  // What we CAN say (honest, factual)
  legitimate: {
    testing: 'hands-on evaluation',
    experience: 'extensive paddle research',
    knowledge: 'comprehensive paddle database',
    comparison: 'detailed paddle comparisons',
    recommendations: 'curated paddle selections',
    analysis: 'in-depth paddle analysis'
  },
  
  // What we AVOID (false claims)
  avoid: {
    expertise: 'expert reviews', // Unless we actually have experts
    professional: 'professional player endorsements', // Unless true
    tournament: 'tournament tested by pros', // Unless verified
    years: '15+ years experience', // Unless factual
    certified: 'certified instructors', // Unless we have them
  },
  
  // Honest value propositions
  valueProps: [
    'Save time with curated paddle selections',
    'Compare features, prices, and user feedback',
    'Find USAPA-approved paddles by skill level',
    'Discover the right paddle for your playing style',
    'Access comprehensive paddle specifications',
    'Get guidance on paddle selection criteria'
  ]
}

// Technical SEO settings
export const TECHNICAL_SEO = {
  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getapickleballpaddle.com',
    siteName: 'Get A Pickleball Paddle',
    images: [
      {
        url: 'https://getapickleballpaddle.com/img/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Get A Pickleball Paddle - Find Your Perfect Paddle',
      }
    ]
  },
  
  // Twitter Card defaults
  twitter: {
    handle: '@getpicklepaddle',
    site: '@getpicklepaddle',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0891b2',
    },
    {
      name: 'msapplication-TileColor',
      content: '#0891b2',
    }
  ],
  
  // Structured data schemas
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Get A Pickleball Paddle',
      url: 'https://getapickleballpaddle.com',
      logo: 'https://getapickleballpaddle.com/img/logo.png',
      description: 'Helping pickleball players find the perfect paddle through detailed comparisons and curated recommendations.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@getapickleballpaddle.com'
      }
    },
    
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Get A Pickleball Paddle',
      url: 'https://getapickleballpaddle.com',
      description: 'Find the perfect pickleball paddle for your game with detailed reviews and comparisons.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://getapickleballpaddle.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  }
}

// Content optimization guidelines
export const CONTENT_GUIDELINES = {
  // Title optimization
  titles: {
    maxLength: 60,
    includeYear: true,
    includeBrand: true,
    includeKeyword: true,
    format: '{Product} Review - {Keyword} {Year}'
  },
  
  // Meta description optimization
  descriptions: {
    maxLength: 160,
    includeCallToAction: true,
    includeKeyword: true,
    includeBenefit: true,
    format: '{Keyword} review - {Benefit}. {CallToAction}'
  },
  
  // Heading structure
  headings: {
    h1: 'One per page, include primary keyword',
    h2: 'Use for main sections, include related keywords',
    h3: 'Use for subsections, natural language',
    structure: ['H1 → H2 → H3', 'Never skip levels']
  },
  
  // Content requirements
  content: {
    minWords: 800,
    keywordDensity: '1-2%',
    readabilityScore: 'Above 60 (Flesch Reading Ease)',
    internalLinks: 'Minimum 3 per page',
    externalLinks: 'Include authoritative sources'
  }
}