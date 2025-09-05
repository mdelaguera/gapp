// SEO utility functions and generators
import { SEO_CONFIG, CONTENT_CLAIMS, CONTENT_GUIDELINES } from './config'

interface PaddleData {
  name: string
  brand: string
  price?: { current: number }
  categories?: string[]
  skillLevel?: string[]
}

interface SEOData {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    images: Array<{ url: string; alt: string }>
  }
  structuredData: any
}

/**
 * Generate SEO-optimized title for paddle reviews
 */
export function generatePaddleTitle(paddle: PaddleData): string {
  const { name, brand, categories = [] } = paddle
  const year = new Date().getFullYear()
  
  // Determine primary keyword based on categories
  let keyword = 'Pickleball Paddle'
  if (categories.includes('budget')) keyword = 'Budget Paddle'
  else if (categories.includes('premium')) keyword = 'Premium Paddle'
  else if (categories.includes('power')) keyword = 'Power Paddle'
  else if (categories.includes('control')) keyword = 'Control Paddle'
  else if (categories.includes('spin')) keyword = 'Spin Paddle'
  
  // Format: "JOOLA Perseus Review - Best Premium Paddle 2025"
  return `${name} Review - Best ${keyword} ${year}`
}

/**
 * Generate SEO-optimized meta description
 */
export function generatePaddleDescription(paddle: PaddleData): string {
  const { name, brand, price, categories = [], skillLevel = [] } = paddle
  
  // Build benefit statement
  let benefit = 'detailed analysis and buying guide'
  if (categories.includes('budget')) benefit = 'exceptional value at an affordable price'
  else if (categories.includes('premium')) benefit = 'professional-grade performance and features'
  else if (categories.includes('power')) benefit = 'maximum power for aggressive play'
  else if (categories.includes('control')) benefit = 'precision control and touch'
  
  // Build skill level context
  const skillContext = skillLevel.length > 0 
    ? ` Perfect for ${skillLevel.join(' to ')} players.`
    : ''
  
  // Build price context
  const priceContext = price 
    ? ` Starting at $${price.current}.`
    : ''
  
  // Format: "Complete JOOLA Perseus review - professional-grade performance. Perfect for intermediate to advanced players. Compare features, read analysis."
  return `Complete ${name} review - ${benefit}.${skillContext}${priceContext} Compare features and find the best deal.`
}

/**
 * Generate semantic keywords for paddle content
 */
export function generatePaddleKeywords(paddle: PaddleData): string[] {
  const { name, brand, categories = [], skillLevel = [] } = paddle
  const keywords: string[] = []
  
  // Add primary keywords
  keywords.push(...SEO_CONFIG.primaryKeywords)
  
  // Add brand-specific
  const brandKey = `${brand.toLowerCase()} pickleball paddle`
  if (!keywords.includes(brandKey)) {
    keywords.push(brandKey)
  }
  
  // Add category-specific keywords
  categories.forEach(category => {
    switch(category) {
      case 'budget':
        keywords.push(...SEO_CONFIG.priceKeywords.filter(k => k.includes('budget') || k.includes('affordable')))
        break
      case 'premium':
        keywords.push(...SEO_CONFIG.priceKeywords.filter(k => k.includes('premium')))
        break
      case 'power':
        keywords.push(...SEO_CONFIG.featureKeywords.power)
        break
      case 'control':
        keywords.push(...SEO_CONFIG.featureKeywords.control)
        break
      case 'spin':
        keywords.push(...SEO_CONFIG.featureKeywords.spin)
        break
    }
  })
  
  // Add skill level keywords
  skillLevel.forEach(skill => {
    if (SEO_CONFIG.skillKeywords[skill as keyof typeof SEO_CONFIG.skillKeywords]) {
      keywords.push(...SEO_CONFIG.skillKeywords[skill as keyof typeof SEO_CONFIG.skillKeywords])
    }
  })
  
  // Add long-tail variations
  keywords.push(`${name.toLowerCase()} review`)
  keywords.push(`${brand.toLowerCase()} ${name.split(' ').pop()?.toLowerCase()} paddle`)
  
  // Remove duplicates and return
  return [...new Set(keywords)]
}

/**
 * Generate Open Graph data
 */
export function generateOpenGraphData(paddle: PaddleData, imageUrl?: string): any {
  const title = generatePaddleTitle(paddle)
  const description = generatePaddleDescription(paddle)
  const slug = generateSlug(paddle.name)
  
  return {
    title,
    description,
    url: `https://getapickleballpaddle.com/${slug}`,
    type: 'article',
    images: [
      {
        url: imageUrl || `https://getapickleballpaddle.com/img/paddles/${slug}.jpg`,
        width: 1200,
        height: 630,
        alt: `${paddle.name} - ${paddle.brand} Pickleball Paddle Review`
      }
    ],
    article: {
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      section: 'Pickleball Paddle Reviews',
      tags: generatePaddleKeywords(paddle).slice(0, 10)
    }
  }
}

/**
 * Generate product structured data (Schema.org)
 */
export function generateProductSchema(paddle: PaddleData): any {
  const { name, brand, price } = paddle
  const slug = generateSlug(name)
  
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: name,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    description: generatePaddleDescription(paddle),
    image: `https://getapickleballpaddle.com/img/paddles/${slug}.jpg`,
    url: `https://getapickleballpaddle.com/${slug}`,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price.current,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Get A Pickleball Paddle'
        }
      }
    }),
    review: {
      '@type': 'Review',
      reviewBody: `Comprehensive analysis of the ${name} covering performance, features, and value.`,
      author: {
        '@type': 'Organization',
        name: 'Get A Pickleball Paddle'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Get A Pickleball Paddle'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '1'
    }
  }
}

/**
 * Generate complete SEO data package
 */
export function generatePaddleSEO(paddle: PaddleData, imageUrl?: string): SEOData {
  return {
    title: generatePaddleTitle(paddle),
    description: generatePaddleDescription(paddle),
    keywords: generatePaddleKeywords(paddle),
    openGraph: generateOpenGraphData(paddle, imageUrl),
    structuredData: generateProductSchema(paddle)
  }
}

/**
 * Generate URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Validate SEO content against guidelines
 */
export function validateSEOContent(content: {
  title: string
  description: string
  headings: string[]
  wordCount: number
  keywords: string[]
}): {
  valid: boolean
  issues: string[]
  suggestions: string[]
} {
  const issues: string[] = []
  const suggestions: string[] = []
  
  // Title validation
  if (content.title.length > CONTENT_GUIDELINES.titles.maxLength) {
    issues.push(`Title too long: ${content.title.length} characters (max ${CONTENT_GUIDELINES.titles.maxLength})`)
  }
  
  // Description validation
  if (content.description.length > CONTENT_GUIDELINES.descriptions.maxLength) {
    issues.push(`Meta description too long: ${content.description.length} characters (max ${CONTENT_GUIDELINES.descriptions.maxLength})`)
  }
  
  if (content.description.length < 120) {
    suggestions.push('Meta description could be longer for better SERP presence')
  }
  
  // Content length validation
  if (content.wordCount < CONTENT_GUIDELINES.content.minWords) {
    issues.push(`Content too short: ${content.wordCount} words (min ${CONTENT_GUIDELINES.content.minWords})`)
  }
  
  // Heading structure validation
  if (!content.headings.some(h => h.includes('H1'))) {
    issues.push('Missing H1 tag')
  }
  
  // Keyword analysis
  const primaryKeyword = content.keywords[0]
  if (primaryKeyword && !content.title.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    suggestions.push(`Consider including primary keyword "${primaryKeyword}" in title`)
  }
  
  return {
    valid: issues.length === 0,
    issues,
    suggestions
  }
}

/**
 * Generate honest, conversion-focused content claims
 */
export function generateContentClaims(paddle: PaddleData): {
  headline: string
  valueProps: string[]
  callToAction: string
} {
  const { categories = [], skillLevel = [] } = paddle
  
  // Generate honest headline
  let headline = 'Detailed Analysis & Comparison'
  if (categories.includes('budget')) headline = 'Best Value Analysis'
  else if (categories.includes('premium')) headline = 'Premium Performance Review'
  
  // Select appropriate value props
  const relevantProps = CONTENT_CLAIMS.valueProps.filter(prop => {
    if (categories.includes('budget') && prop.includes('time')) return true
    if (categories.includes('premium') && prop.includes('comprehensive')) return true
    return true
  }).slice(0, 3)
  
  // Generate appropriate CTA
  const callToAction = categories.includes('budget')
    ? 'Find the best value for your budget'
    : categories.includes('premium')
    ? 'Discover professional-grade performance'
    : 'Find your perfect paddle match'
  
  return {
    headline,
    valueProps: relevantProps,
    callToAction
  }
}