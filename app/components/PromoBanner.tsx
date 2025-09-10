'use client';

import { buildAffiliateLink } from '../../lib/affiliateLinks';

interface PromoBannerProps {
  className?: string;
}

export default function PromoBanner({ className = '' }: PromoBannerProps) {
  return (
    <div className={`promo-banner ${className}`}>
      <div className="promo-banner-content">
        <div className="promo-icon">
          🏓
        </div>
        <div className="promo-text">
          <span className="promo-highlight">Save $10</span>
          <span className="promo-description">on your first paddle from our partner Pickleball Superstore</span>
        </div>
        <a
          href={buildAffiliateLink('pickleballSuperstore')}
          className="promo-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claim Savings
        </a>
        <button 
          className="promo-close"
          onClick={(e) => {
            const banner = e.currentTarget.closest('.promo-banner');
            if (banner) {
              (banner as HTMLElement).style.display = 'none';
            }
          }}
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}