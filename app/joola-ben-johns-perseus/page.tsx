import { Metadata } from 'next';
import Image from 'next/image';

// CircularRating component for individual pages
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

export const metadata: Metadata = {
  title: 'JOOLA Ben Johns Perseus Review - Best Premium Carbon Fiber Paddle 2025',
  description: 'Complete JOOLA Ben Johns Perseus review - premium carbon fiber paddle with exceptional control, power, and spin generation. Detailed analysis and buying guide.',
};

export default function JoolaBenJohnsPerseusPage() {
  return (
    <div className="single-paddle-review">
      <div className="paddle-review-header">
        <h1>JOOLA Ben Johns Perseus Review - World #1's Signature Carbon Fiber Paddle (2025)</h1>
        <p className="paddle-subtitle">The World #1 ranked player's signature paddle - premium carbon fiber performance with exceptional control, power, and spin generation for tournament-level play</p>
      </div>
      
      <div className="paddle-hero-section">
        <div className="paddle-hero-image">
          <Image 
            src="/img/paddles/joola-ben-johns-perseus.jpg" 
            alt="JOOLA Ben Johns Perseus CFS - World #1 Signature Pickleball Paddle"
            width={400}
            height={300}
            className="hero-paddle-image"
            priority
          />
        </div>
        
        <div className="paddle-hero-stats">
          <div className="quick-verdict">
            <h2>Quick Verdict</h2>
            <div className="verdict-rating">⭐ Overall Assessment: 4.8/5 | ⭐ Value Rating: 9.5/10</div>
            <p>The JOOLA Ben Johns Perseus delivers on its promise as a pro-level carbon fiber paddle that doesn't sacrifice control for power. This USAPA-approved tournament paddle features the same specifications used by the World #1 ranked player, with Carbon Friction Surface (CFS) technology and Reactive Polypropylene Honeycomb core.</p>
            <div className="verdict-tags">
              <span className="tag best-for">Best For: Intermediate to advanced players (3.5+ skill level)</span>
              <span className="tag avoid-if">Avoid If: Complete beginners, maximum power seekers</span>
              <span className="tag price-range">Price Range: $279.95 - $299.95 (Premium Tier)</span>
            </div>
          </div>
          
          <div className="performance-stats">
            <h3>Performance Breakdown</h3>
            <div className="stats-grid">
              <CircularRating label="Power" value={4.9} />
              <CircularRating label="Control" value={4.7} />
              <CircularRating label="Spin" value={4.8} />
              <CircularRating label="Durability" value={4.6} />
            </div>
          </div>
        </div>
      </div>

      <div className="paddle-review-content">
        <section className="performance-details">
          <h2>Performance Analysis</h2>
          
          <div className="performance-section">
            <h3>⚡ Power: 4.9/5</h3>
            <p>Surprising pop for a control-oriented paddle. The carbon fiber surface generates excellent drive power without feeling "dead" on defensive shots.</p>
          </div>
          
          <div className="performance-section">
            <h3>🎯 Control: 4.7/5</h3>
            <p>Where this paddle truly shines. Precision dinks, resets, and touch shots feel effortless. You can place the ball exactly where you want it.</p>
          </div>
          
          <div className="performance-section">
            <h3>🌪️ Spin: 4.8/5</h3>
            <p>The Carbon Friction Surface (CFS) grips the ball beautifully. Topspin drives and slice serves get noticeably more bite.</p>
          </div>
          
          <div className="performance-section">
            <h3>🛡️ Durability: 4.6/5</h3>
            <p>Solid construction that holds up to regular play. The edge guard is robust and the surface maintains its texture over time.</p>
          </div>
        </section>

        <section className="who-should-buy">
          <h2>Who Should Buy This Paddle?</h2>
          
          <div className="pros-cons-section">
            <div className="perfect-for">
              <h3>✅ Perfect For:</h3>
              <ul>
                <li><strong>Intermediate+ players</strong> (3.5+ skill level)</li>
                <li><strong>Control-first play styles</strong></li>
                <li><strong>Tournament competitors</strong> looking for consistency</li>
                <li><strong>Players upgrading</strong> from entry-level paddles</li>
                <li><strong>Ben Johns fans</strong> who want his exact setup</li>
              </ul>
            </div>
            
            <div className="not-ideal-for">
              <h3>❌ Not Ideal For:</h3>
              <ul>
                <li><strong>Complete beginners</strong> - may be too nuanced</li>
                <li><strong>Power baseliners</strong> who want maximum pop</li>
                <li><strong>Budget-conscious players</strong> - premium pricing ($279.95+)</li>
                <li><strong>Players with arm issues</strong> - slightly less forgiving than composite</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="detailed-analysis">
          <h2>Detailed Analysis</h2>
          
          <h3>Feel & Touch</h3>
          <p>The Perseus has a crisp, responsive feel that gives excellent feedback. You know immediately when you've hit a clean shot versus mishit. The sweet spot is generous enough for intermediate players while rewarding precise contact.</p>
          
          <h3>Maneuverability</h3>
          <p>At 8.0-8.4 oz, it's perfectly balanced for quick hands exchanges. The handle length and grip circumference work well for most hand sizes.</p>
          
          <h3>Sound</h3>
          <p>Produces a satisfying "pop" on drives and a controlled "thock" on dinks. Not the loudest paddle on court, but has a premium sound signature.</p>
        </section>

        <section className="specifications">
          <h2>Specifications</h2>
          <div className="specs-table">
            <table>
              <tbody>
                <tr><td><strong>Weight</strong></td><td>8.0-8.4 oz</td></tr>
                <tr><td><strong>Length</strong></td><td>16.5"</td></tr>
                <tr><td><strong>Width</strong></td><td>7.5"</td></tr>
                <tr><td><strong>Grip Length</strong></td><td>5.5"</td></tr>
                <tr><td><strong>Grip Circumference</strong></td><td>4.25"</td></tr>
                <tr><td><strong>Core</strong></td><td>Reactive Polypropylene Honeycomb</td></tr>
                <tr><td><strong>Surface</strong></td><td>Carbon Friction Surface (CFS)</td></tr>
                <tr><td><strong>Edge Guard</strong></td><td>Specialized protective bumper</td></tr>
                <tr><td><strong>USAPA Approved</strong></td><td>Yes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="comparison">
          <h2>Comparison to Alternatives</h2>
          
          <h3>vs. Selkirk LUXX Control Air</h3>
          <p>Perseus has more power, LUXX has softer feel. Both excellent for control players.</p>
          
          <h3>vs. Engage Pursuit Pro</h3>
          <p>Perseus more durable, Engage slightly more spin. Similar control characteristics.</p>
          
          <h3>vs. CRBN-1 16mm</h3>
          <p>Perseus more forgiving, CRBN more power-focused. Both popular with tournament players.</p>
        </section>

        <section className="final-thoughts">
          <h2>Final Thoughts</h2>
          <p>The JOOLA Ben Johns Perseus lives up to its reputation as one of the best control paddles available. At $279.95+, this represents a significant investment, but the performance justifies the cost for serious players who prioritize professional-grade equipment.</p>
          
          <p><strong>Bottom Line</strong>: If you're ready to make a premium investment in a paddle that delivers world-class performance and will grow with your game, the Perseus is an excellent choice.</p>
        </section>

        <section className="where-to-buy">
          <h2>Where to Buy</h2>
          <p>Ready to get your hands on the Perseus? Check current pricing and availability:</p>
          
          <div className="buy-buttons">
            <a href="https://pickleballsuperstore.com/discount/Michael-111480" className="buy-button primary" target="_blank" rel="noopener noreferrer">
              Save 10% at Pickleball Superstore →
            </a>
            <a href="https://amazon.com/s?k=JOOLA+Ben+Johns+Perseus+pickleball+paddle&tag=getapickle-20" className="buy-button secondary" target="_blank" rel="noopener noreferrer">
              Also on Amazon →
            </a>
          </div>
        </section>

        <section className="navigation-links">
          <div className="nav-links">
            <a href="/">← Back to Home</a>
            <a href="/ultimate-guide">View All Reviews</a>
          </div>
        </section>

        <footer className="review-footer">
          <p><em>Last updated: January 2025</em></p>
        </footer>
      </div>
    </div>
  );
}