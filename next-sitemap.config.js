/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.getapickleballpaddle.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    '/admin',
    '/api/*',
    '/test*',
    '/*-test*'
  ],
  
  // Custom transformation for paddle pages
  transform: async (config, path) => {
    // Static pages
    const staticPages = [
      '/',
      '/ultimate-guide',
      '/beginner-guide', 
      '/budget-paddles',
      '/premium-comparison',
      '/about',
      '/contact',
      '/affiliate-disclosure',
      '/privacy',
      '/terms'
    ]
    
    // Paddle review pages (higher priority)
    const isPaddlePage = !staticPages.includes(path) && 
                        !path.includes('/admin') && 
                        !path.includes('/api') &&
                        !path.includes('-test')
    
    return {
      loc: path,
      changefreq: isPaddlePage ? 'weekly' : 'monthly',
      priority: isPaddlePage ? 0.8 : staticPages.includes(path) ? 0.9 : 0.6,
      lastmod: new Date().toISOString(),
      ...(isPaddlePage && {
        // Add news sitemap for paddle reviews
        news: {
          publication: {
            name: 'Get A Pickleball Paddle',
            language: 'en'
          },
          publication_date: new Date().toISOString().split('T')[0],
          title: path.replace(/[-\/]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        }
      })
    }
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/*-test*']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/api/', '/*-test*']
      }
    ],
    additionalSitemaps: [
      'https://www.getapickleballpaddle.com/sitemap.xml',
    ]
  },
  
  // Additional options
  additionalPaths: async (config) => {
    // If you have Sanity CMS, fetch dynamic paddle pages
    try {
      // This would fetch from Sanity in production
      const paddlePages = [
        '/joola-ben-johns-perseus',
        '/six-zero-double-black-diamond',
        '/vatic-pro-prism-flash'
      ]
      
      return paddlePages.map(path => ({
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      }))
    } catch (error) {
      console.log('Could not fetch dynamic pages for sitemap')
      return []
    }
  }
}