import React from 'react';

interface ProductReviewSchemaProps {
  productName: string;
  reviewRating: number;
  maxRating?: number;
  reviewCount?: number;
  price?: string;
  brand: string;
  category: string;
  description: string;
  imageUrl?: string;
}

export function ProductReviewSchema({
  productName,
  reviewRating,
  maxRating = 5,
  reviewCount = 1,
  price,
  brand,
  category,
  description,
  imageUrl
}: ProductReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "category": category,
    "description": description,
    ...(imageUrl && { "image": imageUrl }),
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewRating,
      "bestRating": maxRating,
      "reviewCount": reviewCount
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  description: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  name,
  url,
  logo,
  description,
  sameAs = []
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "description": description,
    ...(logo && { "logo": logo }),
    ...(sameAs.length > 0 && { "sameAs": sameAs })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}