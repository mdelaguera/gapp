'use client';

import { useState, useEffect, useRef } from 'react';
import { algoliasearch } from 'algoliasearch';
import Link from 'next/link';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '02AH4INZGM',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || 'aa414ecd747f987b896d2041ccafe33b'
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

  // Perform search
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          const { hits } = await client.searchSingleIndex({
            indexName: 'paddle_reviews',
            searchParams: {
              query: query,
              hitsPerPage: 8,
              attributesToHighlight: ['title', 'content'],
              attributesToSnippet: ['content:30'],
            }
          });
          setResults(hits as SearchHit[]);
          setIsOpen(true);
        } catch (error) {
          console.log('Search unavailable:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
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