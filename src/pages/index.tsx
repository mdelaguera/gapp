import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Find Your Perfect Pickleball Paddle
        </Heading>
        <p className="hero__subtitle">
          Expert reviews, comprehensive buying guides, and affiliate recommendations 
          for the best pickleball paddles in 2025. Join 36.5 million players finding their ideal paddle.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/ultimate-guide">
            Ultimate Guide 2025 🏆
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/beginner-guide">
            New Player Guide 🎯
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Best Pickleball Paddles 2025 - Expert Reviews & Buying Guide"
      description="Find the perfect pickleball paddle with our expert reviews and comprehensive buying guides. Compare top paddles from JOOLA, Six Zero, Vatic Pro and more. Updated for 2025.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
