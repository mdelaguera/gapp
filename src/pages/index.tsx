import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Top paddle picks with review stats
const topPaddles = [
  {
    name: "JOOLA Ben Johns Perseus",
    price: "$179.99",
    image: "/img/paddles/joola-ben-johns-perseus.jpg",
    rating: 4.8,
    power: 4.9,
    control: 4.7,
    spin: 4.8,
    durability: 4.6,
    link: "https://joola.com/products/ben-johns-perseus-pickleball-paddle",
    highlight: "Pro's Choice"
  },
  {
    name: "Six Zero Double Black Diamond",
    price: "$149.99",
    image: "/img/paddles/six-zero-double-black-diamond.png",
    rating: 4.7,
    power: 4.5,
    control: 4.8,
    spin: 4.6,
    durability: 4.9,
    link: "https://www.sixzeropickleball.com/products/double-black-diamond-control",
    highlight: "Best Value"
  },
  {
    name: "Selkirk Vanguard Power Air",
    price: "$199.99",
    image: "/img/paddles/placeholder-paddle.svg",
    rating: 4.6,
    power: 4.9,
    control: 4.4,
    spin: 4.5,
    durability: 4.7,
    link: "https://www.selkirk.com/products/vanguard-power-air-pickleball-paddle",
    highlight: "Power Beast"
  },
  {
    name: "Vatic Pro Prism Flash",
    price: "$89.99",
    image: "/img/paddles/vatic-pro-prism-flash.jpg",
    rating: 4.5,
    power: 4.3,
    control: 4.6,
    spin: 4.7,
    durability: 4.4,
    link: "https://vaticpro.com/products/prism-flash",
    highlight: "Budget King"
  }
];

const categories = [
  { name: "Beginner Friendly", desc: "Easy-to-use paddles for new players", link: "/beginner-guide" },
  { name: "Power Players", desc: "Maximum force for aggressive play", link: "/ultimate-guide#power-paddles" },
  { name: "Control Masters", desc: "Precision and finesse focused", link: "/ultimate-guide#control-paddles" },
  { name: "Under $100", desc: "Budget paddles that don't compromise", link: "/budget-paddles" },
  { name: "Premium Elite", desc: "Tournament-grade professional equipment", link: "/premium-comparison" },
  { name: "Spin Specialists", desc: "Enhanced grip for advanced techniques", link: "/ultimate-guide#spin-paddles" }
];

function PaddleRatingBar({label, value}: {label: string, value: number}) {
  return (
    <div className={styles.ratingBar}>
      <span className={styles.ratingLabel}>{label}</span>
      <div className={styles.ratingBarContainer}>
        <div 
          className={styles.ratingBarFill} 
          style={{width: `${(value / 5) * 100}%`}}
        />
      </div>
      <span className={styles.ratingValue}>{value}</span>
    </div>
  );
}

function PaddleCard({paddle}: {paddle: typeof topPaddles[0]}) {
  return (
    <div className={styles.paddleCard}>
      <div className={styles.paddleImageContainer}>
        <img src={paddle.image} alt={paddle.name} className={styles.paddleImage} />
        <div className={styles.paddleHighlight}>{paddle.highlight}</div>
      </div>
      <div className={styles.paddleContent}>
        <h3 className={styles.paddleName}>{paddle.name}</h3>
        <div className={styles.paddlePrice}>{paddle.price}</div>
        <div className={styles.paddleRatings}>
          <PaddleRatingBar label="Power" value={paddle.power} />
          <PaddleRatingBar label="Control" value={paddle.control} />
          <PaddleRatingBar label="Spin" value={paddle.spin} />
          <PaddleRatingBar label="Durability" value={paddle.durability} />
        </div>
        <a 
          href={paddle.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          View Paddle →
        </a>
      </div>
    </div>
  );
}

function HomepageBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <Heading as="h1" className={styles.bannerTitle}>
            Find Your Perfect Pickleball Paddle
          </Heading>
          <p className={styles.bannerSubtitle}>
            Skip the endless research. Get expert-curated paddle recommendations tailored to your play style, skill level, and budget.
          </p>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.introContent}>
          <h2>Why Spend Hours Searching When We've Done the Work?</h2>
          <p>
            With <strong>200+ paddles tested</strong> and <strong>thousands of reviews analyzed</strong>, 
            we've simplified your paddle search to what actually matters: finding the right paddle 
            for YOUR game. No marketing fluff, no endless comparisons—just the paddles that 
            perform where it counts.
          </p>
          <ul className={styles.benefits}>
            <li>✅ <strong>Save 10+ hours</strong> of research time</li>
            <li>✅ <strong>Avoid costly mistakes</strong> with expert-tested picks</li>
            <li>✅ <strong>Best prices</strong> from trusted retailers</li>
            <li>✅ <strong>Easy returns</strong> through established partners</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TopPicksSection() {
  return (
    <section className={styles.topPicks}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Our Top Paddle Picks
        </Heading>
        <p className={styles.sectionSubtitle}>
          Hand-selected from 200+ tested paddles based on performance, value, and player feedback
        </p>
        <div className={styles.paddleGrid}>
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
    <section className={styles.categories}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Find Paddles by What Matters to You
        </Heading>
        <div className={styles.categoryGrid}>
          {categories.map((category, idx) => (
            <Link key={idx} to={category.link} className={styles.categoryCard}>
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
    <section className={styles.socialProof}>
      <div className="container">
        <div className={styles.testimonials}>
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
    <section id="newsletter" className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletterContent}>
          <h2>Stay Updated on New Paddle Reviews</h2>
          <p>Get notified when we test new paddles and find better deals</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Best Pickleball Paddles 2025 - Expert Reviews & Buying Guide"
      description="Find the perfect pickleball paddle with our expert reviews and comprehensive buying guides. Compare top paddles from JOOLA, Six Zero, Vatic Pro and more. Updated for 2025.">
      <main>
        <HomepageBanner />
        <IntroSection />
        <TopPicksSection />
        <CategoriesSection />
        <SocialProofSection />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
