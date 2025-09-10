'use client';

import Link from 'next/link';
import Image from 'next/image';
import { buildAffiliateLink, getPartnerPromoText } from '../../lib/affiliateLinks';

interface PaddleData {
  name: string;
  price: string;
  image: string;
  rating: number;
  power: number;
  control: number;
  spin: number;
  durability: number;
  slug: string;
  highlight: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

function CircularRating({label, value}: {label: string, value: number}) {
  const percentage = (value / 5) * 100;
  const circumference = 2 * Math.PI * 20;
  const strokeDasharray = (percentage / 100) * circumference;
  
  return (
    <div className="circular-rating">
      <div className="rating-circle">
        <svg width="50" height="50" className="rating-svg">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="#0891b2"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${strokeDasharray} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 25 25)"
            className="rating-progress"
          />
        </svg>
        <span className="rating-number">{value}</span>
      </div>
      <span className="rating-label">{label}</span>
    </div>
  );
}

export default function PaddleCard({paddle}: {paddle: PaddleData}) {
  return (
    <div className="paddle-card-new">
      <div className="paddle-header">
        <div className="paddle-image-container-new">
          <Image 
            src={paddle.image} 
            alt={paddle.name} 
            width={200}
            height={150}
            className="paddle-image-new"
            priority
          />
          <div className="paddle-highlight-new">{paddle.highlight}</div>
        </div>
        <div className="paddle-info">
          <h3 className="paddle-name-new">{paddle.name}</h3>
          <div className="paddle-price-new">{paddle.price}</div>
          <div className="paddle-best-for">Best for: {paddle.bestFor}</div>
        </div>
      </div>
      
      <div className="paddle-ratings-circular">
        <CircularRating label="Power" value={paddle.power} />
        <CircularRating label="Control" value={paddle.control} />
        <CircularRating label="Spin" value={paddle.spin} />
        <CircularRating label="Durability" value={paddle.durability} />
      </div>
      
      <div className="paddle-pros-cons">
        <div className="pros-section">
          <h4 className="pros-title">✅ Pros</h4>
          <ul className="pros-list">
            {paddle.pros.map((pro, idx) => (
              <li key={idx}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="cons-section">
          <h4 className="cons-title">❌ Cons</h4>
          <ul className="cons-list">
            {paddle.cons.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="button-group-new">
        <Link 
          href={`/${paddle.slug}`}
          className="view-button-new primary"
        >
          Read Full Review
        </Link>
        <Link 
          href={buildAffiliateLink('pickleballSuperstore')}
          className="view-button-new secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getPartnerPromoText('pickleballSuperstore')}
        </Link>
      </div>
    </div>
  );
}

export type { PaddleData };