'use client';

import { useState, useEffect, useRef } from 'react';
import { algoliasearch } from 'algoliasearch';
import Link from 'next/link';

// Initialize client conditionally to avoid build errors when env vars are missing
const client = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID && process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  ? algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
    )
  : null;

interface SearchHit {
  objectID: string;
  title: string;
  content: string;
  path: string;
  type: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchHit[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality with Algolia fallback
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        
        // Always use local search for now until Algolia is properly configured
        // TODO: Re-enable Algolia when index is created and properly configured
        try {
          // Temporarily disable Algolia search
          // if (client) {
          //   const searchResult = await client.searchSingleIndex({
          //     indexName: 'pages',
          //     searchParams: {
          //       query: query,
          //       hitsPerPage: 10
          //     }
          //   });
          //   
          //   const hits = searchResult.hits as SearchHit[];
          //   setResults(hits);
          //   setIsOpen(true);
          // } else {
          //   throw new Error('Algolia client not initialized');
          // }
          
          // Use local search as primary option for now
          throw new Error('Using local search by design');
        } catch (error) {
          console.log('Using local search fallback');
          // Local search implementation
          const searchData = [
            {
              objectID: '1',
              title: 'JOOLA Ben Johns Perseus CFS',
              content: 'Professional tournament paddle with Carbon-Flex5 technology and raw carbon fiber surface',
              path: '/joola-ben-johns-perseus',
              type: 'Paddle Review'
            },
            {
              objectID: '2',
              title: 'JOOLA Ben Johns Perseus Test',
              content: 'In-depth testing and analysis of the popular JOOLA Perseus paddle',
              path: '/joola-ben-johns-perseus-test',
              type: 'Paddle Review'
            },
            {
              objectID: '3',
              title: 'Six Zero Double Black Diamond',
              content: 'Premium T700 carbon fiber paddle with lifetime warranty and exceptional control',
              path: '/six-zero-double-black-diamond',
              type: 'Paddle Review'
            },
            {
              objectID: '4',
              title: 'Vatic Pro Prism Flash',
              content: 'Budget-friendly raw carbon fiber paddle made in California with great value',
              path: '/vatic-pro-prism-flash',
              type: 'Paddle Review'
            },
            {
              objectID: '5',
              title: 'Selkirk Amped Omni Weight',
              content: 'Versatile paddle with omni weight technology for customizable feel',
              path: '/selkirk-amped-omni-weight',
              type: 'Paddle Review'
            },
            {
              objectID: '6',
              title: 'CRBN Genesis Power Series 16mm',
              content: 'Powerful paddle with T700 carbon fiber face and 16mm thickness',
              path: '/crbn-genesis-power-series-16mm',
              type: 'Paddle Review'
            },
            {
              objectID: '7',
              title: 'Ultimate Guide 2025',
              content: 'Complete guide to the best pickleball paddles with expert reviews and rankings',
              path: '/ultimate-guide',
              type: 'Guide'
            },
            {
              objectID: '8',
              title: 'Beginner Guide',
              content: 'Complete beginner guide to choosing your first pickleball paddle',
              path: '/beginner-guide',
              type: 'Guide'
            },
            {
              objectID: '9',
              title: 'Budget Paddles Under $100',
              content: 'Best budget pickleball paddles that deliver premium performance without breaking the bank',
              path: '/budget-paddles',
              type: 'Guide'
            },
            {
              objectID: '10',
              title: 'Premium Paddle Comparison',
              content: 'Head-to-head comparison of JOOLA, CRBN, Selkirk, and Engage premium paddles',
              path: '/premium-comparison',
              type: 'Comparison'
            },
            {
              objectID: '11',
              title: 'About',
              content: 'Learn about our paddle review process and testing methodology',
              path: '/about',
              type: 'Page'
            },
            {
              objectID: '12',
              title: 'Contact',
              content: 'Get in touch with our paddle review team',
              path: '/contact',
              type: 'Page'
            }
          ];
          
          const filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
          );
          
          setResults(filtered);
          setIsOpen(true);
        }
        
        setIsLoading(false);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search paddles, reviews, guides..."
          className="search-input"
          onFocus={() => query.length > 2 && setIsOpen(true)}
        />
        <div className="search-icon">🔍</div>
      </div>

      {isOpen && (
        <div className="search-results">
          {isLoading ? (
            <div className="search-loading">Searching...</div>
          ) : results.length > 0 ? (
            <div className="search-hits">
              {results.map((hit) => (
                <Link
                  key={hit.objectID}
                  href={hit.path}
                  className="search-hit"
                  onClick={handleLinkClick}
                >
                  <div className="search-hit-title">{hit.title}</div>
                  <div className="search-hit-content">
                    {hit.content.substring(0, 100)}...
                  </div>
                  <div className="search-hit-type">{hit.type}</div>
                </Link>
              ))}
            </div>
          ) : query.length > 2 ? (
            <div className="search-no-results">
              No results found for "{query}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}