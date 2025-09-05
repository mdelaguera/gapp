/**
 * SEO Optimization Agent
 * 
 * This agent ensures SEO best practices are followed across the site
 * based on Next.js SEO optimization strategies.
 */

// import { createClient } from '@sanity/client'; // Disabled for MDX blog
import { MetadataRoute } from 'next';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface SEOAnalysis {
  url: string;
  title: {
    length: number;
    hasKeywords: boolean;
    isUnique: boolean;
    suggestions: string[];
  };
  description: {
    length: number;
    hasKeywords: boolean;
    suggestions: string[];
  };
  headings: {
    h1Count: number;
    h2Count: number;
    hasProperHierarchy: boolean;
    suggestions: string[];
  };
  images: {
    totalImages: number;
    missingAlt: number;
    suggestions: string[];
  };
  performance: {
    loadTime: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
    suggestions: string[];
  };
  content: {
    wordCount: number;
    keywordDensity: number;
    readabilityScore: number;
    suggestions: string[];
  };
  technical: {
    hasCanonical: boolean;
    hasRobots: boolean;
    hasStructuredData: boolean;
    hasSitemap: boolean;
    suggestions: string[];
  };
  score: number;
}

class SEOOptimizationAgent {
  // private sanityClient; // Disabled for MDX blog
  private baseUrl: string;
  private targetKeywords = [
    'pickleball paddle',
    'best pickleball paddle',
    'pickleball paddle review',
    'paddle comparison',
    'beginner pickleball paddle'
  ];

  constructor(baseUrl: string = 'https://getapickleballpaddle.com') {
    this.baseUrl = baseUrl;
    // For MDX blog, we don't need Sanity client
    // this.sanityClient = createClient({
    //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    //   token: process.env.SANITY_API_WRITE_TOKEN!,
    //   apiVersion: '2024-10-28',
    //   useCdn: false
    // });
  }

  /**
   * Analyze SEO for all pages on the site
   */
  async analyzeSiteSeO(): Promise<SEOAnalysis[]> {
    console.log('Starting comprehensive SEO analysis...');
    
    const pages = await this.getAllPages();
    const analyses: SEOAnalysis[] = [];
    
    for (const page of pages) {
      try {
        const analysis = await this.analyzePage(page);
        analyses.push(analysis);
        
        // Rate limit between requests
        await this.delay(1000);
        
      } catch (error) {
        console.error(`Error analyzing page ${page}:`, error);
      }
    }
    
    return analyses;
  }

  /**
   * Generate optimized meta tags for pages
   */
  async generateOptimizedMetadata(pageData: any): Promise<{
    title: string;
    description: string;
    keywords: string[];
    openGraph: any;
    twitter: any;
  }> {
    const paddleName = pageData.name || pageData.title;
    const brand = pageData.brand;
    const type = pageData._type;
    
    let optimizedTitle = '';
    let optimizedDescription = '';
    let keywords: string[] = [];
    
    switch (type) {
      case 'paddle':
        optimizedTitle = `${paddleName} Review 2025 - Complete ${brand} Paddle Analysis | Paddles.gg`;
        optimizedDescription = `Expert review of the ${paddleName} pickleball paddle. Get specs, pros & cons, pricing, and comparison with other ${brand} paddles. Updated 2025.`;
        keywords = [
          `${paddleName} review`,
          `${brand} paddle`,
          'pickleball paddle review',
          `${paddleName} specs`,
          `best ${brand} paddle`
        ];
        break;
        
      case 'guide':
        optimizedTitle = `${paddleName} - Complete Pickleball Paddle Guide 2025 | Paddles.gg`;
        optimizedDescription = `${paddleName}. Expert guide covering everything you need to know about choosing the right pickleball paddle. Updated for 2025.`;
        keywords = [
          'pickleball paddle guide',
          'best pickleball paddle',
          'paddle buying guide',
          'beginner paddle guide'
        ];
        break;
        
      default:
        optimizedTitle = `${paddleName} | Paddles.gg - Expert Pickleball Paddle Reviews`;
        optimizedDescription = `${paddleName}. Expert analysis and reviews of the best pickleball paddles. Find your perfect paddle with our comprehensive guides.`;
        keywords = ['pickleball paddle', 'paddle review', 'best paddle'];
    }

    // Ensure title is within optimal length (50-60 characters)
    if (optimizedTitle.length > 60) {
      optimizedTitle = optimizedTitle.substring(0, 57) + '...';
    }

    // Ensure description is within optimal length (150-160 characters)
    if (optimizedDescription.length > 160) {
      optimizedDescription = optimizedDescription.substring(0, 157) + '...';
    }

    return {
      title: optimizedTitle,
      description: optimizedDescription,
      keywords,
      openGraph: {
        title: optimizedTitle,
        description: optimizedDescription,
        type: 'article',
        url: `${this.baseUrl}/${pageData.slug?.current || ''}`,
        images: pageData.images?.map((img: any) => ({
          url: img.asset?.url || '',
          width: 1200,
          height: 630,
          alt: optimizedTitle
        })) || [],
        siteName: 'Paddles.gg'
      },
      twitter: {
        card: 'summary_large_image',
        title: optimizedTitle,
        description: optimizedDescription,
        images: pageData.images?.[0]?.asset?.url ? [pageData.images[0].asset.url] : []
      }
    };
  }

  /**
   * Generate optimized structured data (JSON-LD)
   */
  generateStructuredData(pageData: any): any {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Paddles.gg',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
      description: 'Expert pickleball paddle reviews and guides'
    };

    if (pageData._type === 'paddle') {
      return [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: pageData.name,
          brand: {
            '@type': 'Brand',
            name: pageData.brand
          },
          description: pageData.description,
          image: pageData.images?.map((img: any) => img.asset?.url).filter(Boolean) || [],
          offers: {
            '@type': 'Offer',
            price: pageData.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: pageData.aggregatedRating ? {
            '@type': 'AggregateRating',
            ratingValue: pageData.aggregatedRating,
            ratingCount: pageData.reviewCount || 1
          } : undefined,
          review: pageData.reviews?.map((review: any) => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: review.author || 'Paddles.gg Team'
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: review.rating
            },
            reviewBody: review.summary
          })) || []
        }
      ];
    }

    if (pageData._type === 'guide') {
      return [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: pageData.title,
          description: pageData.description,
          image: pageData.images?.[0]?.asset?.url,
          author: {
            '@type': 'Organization',
            name: 'Paddles.gg'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Paddles.gg',
            logo: {
              '@type': 'ImageObject',
              url: `${this.baseUrl}/logo.png`
            }
          },
          datePublished: pageData._createdAt,
          dateModified: pageData._updatedAt
        }
      ];
    }

    return [baseSchema];
  }

  /**
   * Generate optimized sitemap
   */
  async generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = await this.getAllPagesFromSanity();
    const sitemap: MetadataRoute.Sitemap = [];

    // Add static pages
    sitemap.push(
      {
        url: this.baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${this.baseUrl}/ultimate-guide`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/beginner-guide`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }
    );

    // Add dynamic pages
    for (const page of pages) {
      let priority = 0.7;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (page._type === 'paddle') {
        priority = 0.8;
        changeFrequency = 'monthly';
      } else if (page._type === 'guide') {
        priority = 0.7;
        changeFrequency = 'weekly';
      }

      sitemap.push({
        url: `${this.baseUrl}/${page.slug?.current}`,
        lastModified: new Date(page._updatedAt),
        changeFrequency,
        priority,
      });
    }

    return sitemap;
  }

  /**
   * Optimize images for SEO and performance
   */
  async optimizeImages(): Promise<void> {
    console.log('Optimizing images for SEO and performance...');
    
    const pages = await this.getAllPagesFromSanity();
    
    for (const page of pages) {
      if (page.images && page.images.length > 0) {
        for (let i = 0; i < page.images.length; i++) {
          const image = page.images[i];
          
          if (!image.alt || image.alt === '') {
            // Generate SEO-optimized alt text
            const optimizedAlt = this.generateOptimizedAltText(page, i);
            
            // TODO: Update image in filesystem (MDX blog)
            // await this.updateImageAltInFileSystem(page, i, optimizedAlt);
            console.log(`Would update alt text for ${page.name} image ${i}: ${optimizedAlt}`);
          }
        }
      }
    }
  }

  /**
   * Generate internal linking suggestions
   */
  async generateInternalLinks(): Promise<{
    page: string;
    suggestions: Array<{
      targetPage: string;
      anchorText: string;
      context: string;
    }>;
  }[]> {
    const pages = await this.getAllPagesFromSanity();
    const linkSuggestions = [];

    for (const page of pages) {
      const suggestions = [];
      
      // Find related paddles for guides
      if (page._type === 'guide') {
        const relatedPaddles = [
          { name: 'JOOLA Ben Johns Perseus', slug: { current: 'joola-ben-johns-perseus' } },
          { name: 'Six Zero Double Black Diamond', slug: { current: 'six-zero-double-black-diamond' } }
        ];
        
        for (const paddle of relatedPaddles) {
          suggestions.push({
            targetPage: `/${paddle.slug.current}`,
            anchorText: `${paddle.name} review`,
            context: `Learn more about the ${paddle.name} in our detailed review.`
          });
        }
      }
      
      // Find related guides for paddles
      if (page._type === 'paddle') {
        const relatedGuides = [
          { title: 'Ultimate Guide 2025', slug: { current: 'ultimate-guide' } },
          { title: 'Beginner Guide', slug: { current: 'beginner-guide' } }
        ];
        
        for (const guide of relatedGuides) {
          suggestions.push({
            targetPage: `/${guide.slug.current}`,
            anchorText: guide.title,
            context: `Check out our ${guide.title} for more insights.`
          });
        }
      }
      
      linkSuggestions.push({
        page: `/${page.slug?.current}`,
        suggestions
      });
    }

    return linkSuggestions;
  }

  /**
   * Monitor and report SEO performance
   */
  async generateSEOReport(): Promise<void> {
    console.log('Generating SEO performance report...');
    
    const analyses = await this.analyzeSiteSeO();
    const averageScore = analyses.reduce((sum, analysis) => sum + analysis.score, 0) / analyses.length;
    
    const report = {
      timestamp: new Date().toISOString(),
      totalPages: analyses.length,
      averageScore: Math.round(averageScore * 10) / 10,
      issues: {
        critical: analyses.filter(a => a.score < 60).length,
        warning: analyses.filter(a => a.score >= 60 && a.score < 80).length,
        good: analyses.filter(a => a.score >= 80).length
      },
      recommendations: this.generateTopRecommendations(analyses),
      pageAnalyses: analyses
    };
    
    // Save report
    await writeFile(
      join(process.cwd(), 'seo-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log(`SEO Report generated. Average score: ${averageScore}/100`);
  }

  /**
   * Main execution function
   */
  async run(): Promise<void> {
    console.log('Starting SEO Optimization Agent...');
    
    try {
      // Generate optimized sitemap
      await this.generateSitemap();
      
      // Optimize images
      await this.optimizeImages();
      
      // Generate internal linking suggestions
      const linkSuggestions = await this.generateInternalLinks();
      console.log(`Generated ${linkSuggestions.length} internal linking suggestions`);
      
      // Generate comprehensive SEO report
      await this.generateSEOReport();
      
      console.log('SEO Optimization Agent completed successfully');
      
    } catch (error) {
      console.error('Error in SEO Optimization Agent:', error);
    }
  }

  // Helper methods
  private async getAllPages(): Promise<string[]> {
    // Implementation to get all page URLs
    return [];
  }

  private async getAllPagesFromSanity(): Promise<any[]> {
    // For MDX blog, return static page data
    return [
      {
        _id: '1',
        _type: 'paddle',
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        name: 'JOOLA Ben Johns Perseus CFS',
        title: 'JOOLA Ben Johns Perseus CFS Review',
        brand: 'JOOLA',
        slug: { current: 'joola-ben-johns-perseus' },
        images: [],
        aggregatedRating: 4.5,
        reviewCount: 125
      },
      // Add more static paddle data as needed
    ];
  }

  private async analyzePage(url: string): Promise<SEOAnalysis> {
    // Implementation to analyze individual page SEO
    // This would use tools like Puppeteer or similar to analyze the page
    return {
      url,
      title: {
        length: 0,
        hasKeywords: false,
        isUnique: true,
        suggestions: []
      },
      description: {
        length: 0,
        hasKeywords: false,
        suggestions: []
      },
      headings: {
        h1Count: 0,
        h2Count: 0,
        hasProperHierarchy: true,
        suggestions: []
      },
      images: {
        totalImages: 0,
        missingAlt: 0,
        suggestions: []
      },
      performance: {
        loadTime: 0,
        coreWebVitals: {
          lcp: 0,
          fid: 0,
          cls: 0
        },
        suggestions: []
      },
      content: {
        wordCount: 0,
        keywordDensity: 0,
        readabilityScore: 0,
        suggestions: []
      },
      technical: {
        hasCanonical: true,
        hasRobots: true,
        hasStructuredData: true,
        hasSitemap: true,
        suggestions: []
      },
      score: 85
    };
  }

  private generateOptimizedAltText(page: any, imageIndex: number): string {
    const baseName = page.name || page.title;
    const brand = page.brand;
    
    if (page._type === 'paddle') {
      const descriptions = [
        `${baseName} pickleball paddle`,
        `${brand} ${baseName} paddle close-up view`,
        `${baseName} paddle specifications and features`,
        `Professional ${baseName} paddle in action`,
        `${baseName} paddle design and build quality`
      ];
      
      return descriptions[imageIndex % descriptions.length];
    }
    
    return `${baseName} - Expert pickleball paddle guide image`;
  }

  private generateTopRecommendations(analyses: SEOAnalysis[]): string[] {
    const recommendations = [];
    
    const avgTitleLength = analyses.reduce((sum, a) => sum + a.title.length, 0) / analyses.length;
    if (avgTitleLength > 60) {
      recommendations.push('Optimize title tags - many are too long (>60 characters)');
    }
    
    const avgDescLength = analyses.reduce((sum, a) => sum + a.description.length, 0) / analyses.length;
    if (avgDescLength > 160) {
      recommendations.push('Optimize meta descriptions - many are too long (>160 characters)');
    }
    
    const missingAltImages = analyses.reduce((sum, a) => sum + a.images.missingAlt, 0);
    if (missingAltImages > 0) {
      recommendations.push(`Add alt text to ${missingAltImages} images`);
    }
    
    const lowScorePages = analyses.filter(a => a.score < 70).length;
    if (lowScorePages > 0) {
      recommendations.push(`${lowScorePages} pages have low SEO scores and need attention`);
    }
    
    return recommendations;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default SEOOptimizationAgent;