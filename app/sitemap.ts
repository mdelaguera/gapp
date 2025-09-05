import { MetadataRoute } from 'next'
import { client } from '../sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://getapickleballpaddle.com'
  
  // Static pages with their priorities and update frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ultimate-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/beginner-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/budget-paddles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/premium-comparison`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Fetch dynamic paddle pages from Sanity
  let paddlePages: MetadataRoute.Sitemap = []
  
  try {
    const paddles = await client.fetch(`
      *[_type == "paddle" && reviewStatus in ["published", "complete"]] {
        slug,
        _updatedAt,
        reviewStatus
      }
    `)
    
    paddlePages = paddles.map((paddle: any) => ({
      url: `${baseUrl}/${paddle.slug.current}`,
      lastModified: new Date(paddle._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch (error) {
    console.log('Could not fetch paddle pages from Sanity, using static fallback')
    
    // Fallback to existing paddle pages
    const existingPaddles = [
      'joola-ben-johns-perseus',
      'six-zero-double-black-diamond', 
      'vatic-pro-prism-flash'
    ]
    
    paddlePages = existingPaddles.map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  }

  return [...staticPages, ...paddlePages]
}