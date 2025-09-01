'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the page
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const tocItems: TOCItem[] = headings.map((heading) => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    // Set IDs for headings that don't have them
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const id = tocItems[index].id;
        heading.id = id;
      }
    });

    setToc(tocItems);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (toc.length <= 1) return null;

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="toc-sidebar">
      <div className="toc-content">
        <h4 className="toc-title">On this page</h4>
        <ul className="toc-list">
          {toc.map((item) => (
            <li
              key={item.id}
              className={`toc-item toc-level-${item.level} ${activeId === item.id ? 'active' : ''}`}
            >
              <button
                onClick={() => scrollToElement(item.id)}
                className="toc-link"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}