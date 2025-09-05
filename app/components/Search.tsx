'use client';

import { useState, useEffect, useRef } from 'react';
import { algoliasearch } from 'algoliasearch';
import Link from 'next/link';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

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

  // Algolia search
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        
        try {
          const { results } = await client.search({
            requests: [
              {
                indexName: 'pages', // You might need to adjust this index name
                query: query,
                hitsPerPage: 10
              }
            ]
          });
          
          const hits = results[0].hits as SearchHit[];
          setResults(hits);
          setIsOpen(true);
        } catch (error) {
          console.error('Search error:', error);
          // Fallback to local search if Algolia fails
          const searchData = [
            {
              objectID: '1',
              title: 'JOOLA Ben Johns Perseus CFS',
              content: 'Professional tournament paddle with Carbon-Flex5 technology',
              path: '/joola-ben-johns-perseus',
              type: 'Paddle Review'
            },
            {
              objectID: '2',
              title: 'Six Zero Double Black Diamond',
              content: 'Premium T700 carbon fiber paddle with lifetime warranty',
              path: '/six-zero-double-black-diamond',
              type: 'Paddle Review'
            },
            {
              objectID: '3',
              title: 'Vatic Pro Prism Flash',
              content: 'Budget raw carbon fiber paddle made in California',
              path: '/vatic-pro-prism-flash',
              type: 'Paddle Review'
            },
            {
              objectID: '4',
              title: 'Ultimate Guide 2025',
              content: 'Complete guide to the best pickleball paddles with expert reviews',
              path: '/ultimate-guide',
              type: 'Guide'
            },
            {
              objectID: '5',
              title: 'Beginner Guide',
              content: 'Complete beginner guide to choosing your first pickleball paddle',
              path: '/beginner-guide',
              type: 'Guide'
            },
            {
              objectID: '6',
              title: 'Budget Paddles Under $100',
              content: 'Best budget pickleball paddles that deliver premium performance',
              path: '/budget-paddles',
              type: 'Guide'
            },
            {
              objectID: '7',
              title: 'Premium Paddle Comparison',
              content: 'Head-to-head comparison of JOOLA, CRBN, Selkirk, and Engage paddles',
              path: '/premium-comparison',
              type: 'Comparison'
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