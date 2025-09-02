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
    highlight: "Pro's Choice"
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
    highlight: "Best Value"
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
    highlight: "Budget King"
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

function PaddleRatingBar({label, value}: {label: string, value: number}) {
  return (
    <div className="rating-bar">
      <span className="rating-label">{label}</span>
      <div className="rating-bar-container">
        <div 
          className="rating-bar-fill" 
          style={{width: `${(value / 5) * 100}%`}}
        />
      </div>
      <span className="rating-value">{value}</span>
    </div>
  );
}

function PaddleCard({paddle}: {paddle: typeof topPaddles[0]}) {
  return (
    <div className="paddle-card">
      <div className="paddle-image-container">
        <Image 
          src={paddle.image} 
          alt={paddle.name} 
          width={300}
          height={200}
          className="paddle-image"
          priority
        />
        <div className="paddle-highlight">{paddle.highlight}</div>
      </div>
      <div className="paddle-content">
        <h3 className="paddle-name">{paddle.name}</h3>
        <div className="paddle-price">{paddle.price}</div>
        <div className="paddle-ratings">
          <PaddleRatingBar label="Power" value={paddle.power} />
          <PaddleRatingBar label="Control" value={paddle.control} />
          <PaddleRatingBar label="Spin" value={paddle.spin} />
          <PaddleRatingBar label="Durability" value={paddle.durability} />
        </div>
        <div className="button-group">
          <Link 
            href={`/${paddle.slug}`}
            className="view-button"
          >
            See Review
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageBanner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title">
            Best Pickleball Paddles 2025 - Expert Reviews & Buying Guide
          </h1>
          <p className="banner-subtitle">
            Skip the endless research. Get expert-curated pickleball paddle recommendations tailored to your play style, skill level, and budget from our analysis of 200+ tournament-approved paddles.
          </p>
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
            <li>✅ <strong>Avoid costly mistakes</strong> with expert-tested picks</li>
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
            <cite>— Sarah M., Tournament Player</cite>
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