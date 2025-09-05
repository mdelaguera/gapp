'use client';

import Link from 'next/link';
import Image from 'next/image';

// Top paddle picks with review stats
const topPaddles = [
  {
    name: "JOOLA Ben Johns Perseus",
    price: "$279.95+",
    image: "/img/paddles/joola-ben-johns-perseus.jpg",
    rating: 4.8,
    power: 4.9,
    control: 4.7,
    spin: 4.8,
    durability: 4.6,
    slug: "joola-ben-johns-perseus",
    highlight: "Editor's Pick",
    pros: ["Exceptional power and control balance", "Tournament-grade construction", "Used by pro players"],
    cons: ["Premium price point", "May be too advanced for beginners"],
    bestFor: "Intermediate to Advanced Players"
  },
  {
    name: "Six Zero Double Black Diamond",
    price: "$180.00",
    image: "/img/paddles/six-zero-double-black-diamond.png",
    rating: 4.7,
    power: 4.5,
    control: 4.8,
    spin: 4.6,
    durability: 4.9,
    slug: "six-zero-double-black-diamond",
    highlight: "Best Value",
    pros: ["Outstanding durability", "Great control for precision shots", "Excellent value for performance"],
    cons: ["Less power than premium options", "Slightly heavier feel"],
    bestFor: "All Skill Levels"
  },
  {
    name: "Vatic Pro Prism Flash",
    price: "From $89.99",
    image: "/img/paddles/vatic-pro-prism-flash.jpg",
    rating: 4.5,
    power: 4.3,
    control: 4.6,
    spin: 4.7,
    durability: 4.4,
    slug: "vatic-pro-prism-flash",
    highlight: "Budget Pick",
    pros: ["Affordable entry point", "Good spin generation", "Lightweight design"],
    cons: ["Less durable than premium paddles", "Limited power for aggressive play"],
    bestFor: "Beginners to Intermediate"
  }
];

const categories = [
  { name: "Beginner Friendly", desc: "Easy-to-use paddles for new players starting out", link: "/beginner-guide" },
  { name: "Power Players", desc: "Maximum force for aggressive baseline play", link: "/ultimate-guide" },
  { name: "Control Masters", desc: "Precision and finesse focused tournament paddles", link: "/ultimate-guide" },
  { name: "Under $100", desc: "Budget carbon fiber paddles that don't compromise", link: "/budget-paddles" },
  { name: "Premium Elite", desc: "Tournament-grade professional equipment reviews", link: "/premium-comparison" },
  { name: "Spin Specialists", desc: "Raw carbon fiber paddles for advanced spin", link: "/ultimate-guide" }
];

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

function PaddleCard({paddle}: {paddle: typeof topPaddles[0]}) {
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
          href="https://pickleballsuperstore.com/discount/Michael-111480"
          className="view-button-new secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Save 10%
        </Link>
      </div>
    </div>
  );
}

function AuthorSection() {
  return (
    <div className="author-section">
      <div className="author-info">
        <div className="author-avatar">
          <Image 
            src="/img/author-avatar.jpg" 
            alt="Expert Author" 
            width={80} 
            height={80}
            className="author-image"
          />
        </div>
        <div className="author-details">
          <h3 className="author-name">Review Team</h3>
          <p className="author-credentials">
            Experienced players with extensive research | 200+ paddles analyzed | USAPA tournament approved
          </p>
        </div>
      </div>
    </div>
  );
}

function HomepageBanner() {
  return (
    <section className="banner-new">
      <div className="container">
        <div className="banner-content-new">
          <h1 className="banner-title-new">
            Best Pickleball Paddles 2025
          </h1>
          <p className="banner-subtitle-new">
            Comprehensive reviews and recommendations from experienced players who've analyzed 200+ USAPA-approved paddles
          </p>
          <AuthorSection />
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-content">
          <h2>Why Spend Hours Searching When We've Done the Work?</h2>
          <p>
            With <strong>200+ paddles tested</strong> and <strong>thousands of reviews analyzed</strong>, 
            we've simplified your pickleball paddle search to what actually matters: finding the right carbon fiber, 
            polymer core, or composite paddle for YOUR game. No marketing fluff, no endless comparisons—just 
            USAPA-approved tournament paddles that perform where it counts.
          </p>
          <ul className="benefits">
            <li>✅ <strong>Save 10+ hours</strong> of research time</li>
            <li>✅ <strong>Avoid costly mistakes</strong> with thoroughly researched picks</li>
            <li>✅ <strong>Best prices</strong> from trusted retailers</li>
            <li>✅ <strong>Easy returns</strong> through established partners</li>
          </ul>
          <div className="price-disclaimer">
            <p><em>*Prices subject to change. Some products may be available at discounted rates through promotional offers.</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopPicksSection() {
  return (
    <section className="top-picks">
      <div className="container">
        <h2 className="section-title">
          Our Top Paddle Picks
        </h2>
        <p className="section-subtitle">
          Hand-selected from 200+ tested paddles based on performance, value, and player feedback
        </p>
        <div className="paddle-grid">
          {topPaddles.map((paddle, idx) => (
            <PaddleCard key={idx} paddle={paddle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">
          Find Paddles by What Matters to You
        </h2>
        <div className="category-grid">
          {categories.map((category, idx) => (
            <Link key={idx} href={category.link} className="category-card">
              <h3>{category.name}</h3>
              <p>{category.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="testimonials">
          <blockquote>
            "Finally, a site that cuts through the noise. Found my perfect paddle in 5 minutes instead of 5 hours."
            <cite>— Sarah M., Competitive Player</cite>
          </blockquote>
          <blockquote>
            "Love that they include Amazon links. Easy returns were clutch when I needed to size down."
            <cite>— Mike R., Weekend Warrior</cite>
          </blockquote>
          <blockquote>
            "As a beginner, their guides saved me from buying the wrong paddle. Great recommendations!"
            <cite>— Jennifer L., New Player</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Stay Updated on New Paddle Reviews</h2>
          <p>Get notified when we test new paddles and find better deals</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HomepageBanner />
      <IntroSection />
      <TopPicksSection />
      <CategoriesSection />
      <SocialProofSection />
      <NewsletterSection />
    </main>
  );
}