import Image from 'next/image';
import PaddleCard, { PaddleData } from './PaddleCard';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  paddles?: PaddleData[];
  showFeaturedPaddles?: boolean;
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

function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="banner-new">
      <div className="container">
        <div className="banner-content-new">
          <h1 className="banner-title-new">
            {title}
          </h1>
          {subtitle && (
            <p className="banner-subtitle-new">
              {subtitle}
            </p>
          )}
          <AuthorSection />
        </div>
      </div>
    </section>
  );
}

function FeaturedPaddlesSection({ paddles }: { paddles: PaddleData[] }) {
  if (!paddles || paddles.length === 0) return null;
  
  return (
    <section className="top-picks">
      <div className="container">
        <h2 className="section-title">
          Featured Paddle Recommendations
        </h2>
        <p className="section-subtitle">
          Hand-selected from our comprehensive testing based on performance, value, and player feedback
        </p>
        <div className="paddle-grid">
          {paddles.map((paddle, idx) => (
            <PaddleCard key={idx} paddle={paddle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="content-wrapper">
      <div className="article-content">
        {children}
      </div>
    </section>
  );
}

export default function PageLayout({ title, subtitle, children, paddles, showFeaturedPaddles = true }: PageLayoutProps) {
  return (
    <main>
      <PageBanner title={title} subtitle={subtitle} />
      {showFeaturedPaddles && paddles && <FeaturedPaddlesSection paddles={paddles} />}
      <ContentSection>
        {children}
      </ContentSection>
    </main>
  );
}