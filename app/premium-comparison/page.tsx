import { Metadata } from 'next';
import PageLayout from '../components/PageLayout';
import PaddleCard from '../components/PaddleCard';
import { premiumPaddles } from '../data/paddles';

export const metadata: Metadata = {
  title: 'Premium Pickleball Paddles 2025 - JOOLA vs CRBN vs Engage Head-to-Head',
  description: 'Comprehensive comparison of the top 3 premium pickleball paddles in 2025. Detailed analysis of JOOLA Ben Johns, CRBN Genesis, and Engage Pursuit Pro.',
  keywords: ['premium pickleball paddles', 'JOOLA Ben Johns Perseus', 'CRBN Genesis', 'Engage Pursuit Pro', 'paddle comparison', 'tournament paddles']
};

export default function PremiumComparisonPage() {
  return (
    <PageLayout 
      title="Premium Pickleball Paddles 2025: JOOLA vs CRBN vs Engage Head-to-Head"
      subtitle="Looking to invest in a premium paddle? This comprehensive comparison breaks down the top 3 premium paddles to help you choose the right one for your advanced game."
      paddles={premiumPaddles}
    >
      <h2>Why Premium Paddles Matter for Serious Players</h2>

      <p>If you're rated 4.0+ or play competitively, your paddle becomes critical to performance. Premium paddles offer:</p>

      <ul>
        <li><strong>Consistent performance</strong> under pressure</li>
        <li><strong>Advanced materials</strong> that maintain characteristics over time</li>
        <li><strong>Tournament-grade construction</strong> for competitive reliability</li>
        <li><strong>Cutting-edge technology</strong> for competitive advantages</li>
        <li><strong>Enhanced durability</strong> for frequent, intense play</li>
      </ul>

      <p>The question isn't whether to invest in premium equipment - it's which premium paddle matches your playing style and goals.</p>

      <h2>The Premium Three: Our Testing Methodology</h2>

      <p>We've selected three paddles that represent the pinnacle of current pickleball technology:</p>

      <ol>
        <li><strong>JOOLA Ben Johns Perseus CFS 16mm</strong> - World #1 player's choice</li>
        <li><strong>CRBN TruFoam Genesis Series</strong> - Revolutionary innovation</li>
        <li><strong>Engage Pursuit Pro EX 6.0</strong> - Control specialist's dream</li>
      </ol>

      <p>Each paddle was evaluated across 8 critical performance categories by advanced players (4.0+ rating) over a 6-week testing period.</p>

      <h2>Premium Paddle Visual Comparison</h2>
      
      <div className="comparison-cards">
        {premiumPaddles.map((paddle, index) => (
          <PaddleCard key={index} paddle={paddle} />
        ))}
      </div>
      
      <h2>Technical Specifications Comparison</h2>
      
      <div className="specs-comparison-table">
        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>JOOLA Perseus CFS</th>
              <th>CRBN Genesis</th>
              <th>Engage Pursuit Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Price</strong></td>
              <td>$279.95</td>
              <td>$279.99</td>
              <td>$199.99</td>
            </tr>
            <tr>
              <td><strong>Weight</strong></td>
              <td>8.0-8.2 oz</td>
              <td>Varies by model</td>
              <td>7.6-8.4 oz</td>
            </tr>
            <tr>
              <td><strong>Core Technology</strong></td>
              <td>16mm Thermoformed</td>
              <td>TruFoam 100%</td>
              <td>Control Pro Black</td>
            </tr>
            <tr>
              <td><strong>Surface Material</strong></td>
              <td>Carbon-Flex5</td>
              <td>Raw Carbon</td>
              <td>Raw T700 Carbon</td>
            </tr>
            <tr>
              <td><strong>Best For</strong></td>
              <td>Tournament competitors</td>
              <td>Technology enthusiasts</td>
              <td>Control specialists</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Playing Style Match Guide</h2>

      <h3><strong>Power Players → JOOLA Ben Johns Perseus</strong></h3>
      <ul>
        <li>Exceptional power with control balance</li>
        <li>Tournament-proven performance</li>
        <li>World #1 player's choice</li>
        <li>Professional-grade features</li>
      </ul>

      <h3><strong>Control Players → JOOLA Perseus CFS or Engage Pursuit Pro EX</strong></h3>
      <ul>
        <li><strong>JOOLA</strong> for tournament-proven performance</li>
        <li><strong>Engage</strong> for ultimate precision and touch</li>
      </ul>

      <h3><strong>Innovation Seekers → CRBN Genesis</strong></h3>
      <ul>
        <li>Cutting-edge TruFoam technology</li>
        <li>Future-focused construction</li>
        <li>Maximum durability focus</li>
        <li>Revolutionary materials</li>
      </ul>

      <h2>Cost Per Hour Analysis</h2>

      <h3><strong>Casual Players (1-2 times/week)</strong></h3>
      <ul>
        <li><strong>Annual hours</strong>: 50-100 hours</li>
        <li><strong>Cost per hour</strong>: $2.00-5.60</li>
        <li><strong>Recommendation</strong>: Engage Pursuit Pro (best value) or JOOLA Perseus (best overall)</li>
      </ul>

      <h3><strong>Regular Players (3-4 times/week)</strong></h3>
      <ul>
        <li><strong>Annual hours</strong>: 150-200 hours</li>
        <li><strong>Cost per hour</strong>: $1.00-1.87</li>
        <li><strong>Recommendation</strong>: JOOLA Perseus (best overall) or CRBN Genesis (innovation)</li>
      </ul>

      <h3><strong>Tournament Players (Variable frequency)</strong></h3>
      <ul>
        <li><strong>Performance priority</strong>: Maximum</li>
        <li><strong>Reliability needs</strong>: Critical</li>
        <li><strong>Recommendation</strong>: JOOLA Perseus (proven tournament success)</li>
      </ul>

      <h2>Final Recommendations by Category</h2>

      <h3><strong>🏆 Best Overall: JOOLA Ben Johns Perseus CFS</strong></h3>
      <ul>
        <li>World #1 player's input and design</li>
        <li>Perfect balance of power and control</li>
        <li>Tournament-proven performance</li>
        <li>Professional construction quality</li>
      </ul>

      <h3><strong>🔬 Most Innovative: CRBN TruFoam Genesis</strong></h3>
      <ul>
        <li>Revolutionary foam technology</li>
        <li>Long-term performance consistency</li>
        <li>30-day risk-free trial</li>
        <li>Investment in the future</li>
      </ul>

      <h3><strong>⚡ Most Balanced: JOOLA Ben Johns Perseus</strong></h3>
      <ul>
        <li>Exceptional power-control balance</li>
        <li>World #1 player design</li>
        <li>Perfect for tournament play</li>
        <li>Carbon-Flex5 technology</li>
      </ul>

      <h3><strong>🎯 Ultimate Control: Engage Pursuit Pro EX 6.0</strong></h3>
      <ul>
        <li>Surgical precision</li>
        <li>Best value at $199.99</li>
        <li>Control Pro core technology</li>
        <li>Finesse player's dream</li>
      </ul>

      <h2>Where to Buy: Premium Paddle Retailers</h2>

      <p>For premium paddles, buy from authorized dealers to ensure:</p>
      <ul>
        <li><strong>Authentic products</strong> with full warranties</li>
        <li><strong>Best prices</strong> and promotional offers</li>
        <li><strong>Expert customer service</strong> and support</li>
        <li><strong>Easy returns</strong> within 30 days</li>
      </ul>

      <h3><strong>Authorized Premium Dealers:</strong></h3>
      <ul>
        <li><strong><a href="https://pickleballsuperstore.com?ref=getapickle">Pickleball Superstore</a></strong> - Largest selection, expert advice</li>
        <li><strong><a href="https://amazon.com/s?k=premium+pickleball+paddles&tag=getapickle-20">Amazon</a></strong> - Fast shipping, easy returns</li>
        <li><strong><a href="https://luxurypickleball.com?affiliate=getapickle">Luxury Pickleball</a></strong> - Premium brand specialists</li>
        <li><strong><a href="/">Manufacturer Direct</a></strong> - Best for warranty and authenticity</li>
      </ul>

      <h2>Making Your Final Decision</h2>

      <p>Premium paddles are an investment in your game. Consider:</p>

      <ol>
        <li><strong>Your current skill level</strong> - 4.0+ recommended for premium features</li>
        <li><strong>Playing frequency</strong> - More play = better cost per hour value</li>
        <li><strong>Playing style</strong> - Power, control, or balanced preference</li>
        <li><strong>Tournament aspirations</strong> - Competitive play benefits most from premium equipment</li>
        <li><strong>Budget reality</strong> - Premium paddles are 2-year investments</li>
      </ol>

      <p>All three paddles in this comparison will elevate your game. The question is which one matches your specific needs and playing style best.</p>

      <hr />

      <p><em>Still deciding? Start with our <strong><a href="/ultimate-guide">Ultimate Guide</a></strong> for more paddle options, or check our <strong><a href="/beginner-guide">Beginner Guide</a></strong> if you're newer to the sport.</em></p>

      <p><strong>Affiliate Disclosure:</strong> We may earn commission from purchases made through our links. This helps us maintain our testing and review process while providing unbiased, expert recommendations.</p>
    </PageLayout>
  );
}