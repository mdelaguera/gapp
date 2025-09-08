import { Metadata } from 'next';
import PageLayout from '../components/PageLayout';
import PaddleCard from '../components/PaddleCard';
import { beginnerPaddles } from '../data/paddles';

export const metadata: Metadata = {
  title: 'Complete Beginner\'s Guide to Choosing Your First Pickleball Paddle',
  description: 'New to pickleball? Find the perfect starter paddle with our comprehensive beginner\'s guide. Avoid common mistakes and get curated recommendations for 2025.',
  keywords: ['beginner pickleball paddles', 'first pickleball paddle', 'pickleball paddle for beginners', 'new player paddle guide', 'starter paddle recommendations']
};

export default function BeginnerGuidePage() {
  return (
    <PageLayout 
      title="Complete Beginner's Guide to Choosing Your First Pickleball Paddle (2025)"
      subtitle="New to pickleball? This comprehensive guide will help you choose the perfect starter paddle without breaking the bank or getting overwhelmed by technical jargon."
      paddles={beginnerPaddles}
    >
      <h2>Don't Make These Common Beginner Mistakes</h2>

      <p>Before we dive into recommendations, here are the top mistakes new players make when buying their first paddle:</p>

      <p>❌ <strong>Going too cheap</strong> - $20 paddles will hurt your learning curve<br />
      ❌ <strong>Going too expensive</strong> - You don't need a $300 paddle to start<br />
      ❌ <strong>Ignoring weight</strong> - Too heavy will tire you out, too light won't give you control<br />
      ❌ <strong>Buying the wrong grip size</strong> - Comfort is crucial for learning proper technique<br />
      ❌ <strong>Focusing only on looks</strong> - Performance matters more than pretty graphics</p>

      <h2>The Perfect Beginner Paddle: What You Actually Need</h2>

      <h3>Key Features for New Players</h3>

      <p><strong>1. Forgiving Sweet Spot</strong><br />
      As a beginner, you won't hit the center of the paddle every time. A larger sweet spot means off-center hits won't feel terrible or send the ball flying wildly.</p>

      <p><strong>2. Manageable Weight (7.2-7.8 oz)</strong><br />
      Heavy paddles tire you out quickly and make it harder to develop proper technique. Lighter paddles give you better control as you learn.</p>

      <p><strong>3. Medium Core Thickness (14-16mm)</strong><br />
      Thicker cores provide better control and softer feel - exactly what beginners need to develop touch and placement.</p>

      <p><strong>4. Textured Surface</strong><br />
      Helps generate spin and gives you more control over ball placement. Don't worry about "raw" vs "coated" surfaces yet - any texture helps.</p>

      <p><strong>5. Reasonable Price ($50-150)</strong><br />
      You want quality construction that won't break, but you don't need pro-level features you can't use yet.</p>

      <h2>Top Beginner Paddle Recommendations</h2>
      
      <div className="comparison-cards">
        {beginnerPaddles.map((paddle, index) => (
          <PaddleCard key={index} paddle={paddle} />
        ))}
      </div>

      <h2>How to Choose: Decision Tree</h2>

      <p><strong>Step 1: What's your budget?</strong></p>
      <ul>
        <li><strong>Under $50</strong>: Franklin Signature Pro Series</li>
        <li><strong>$50-$100</strong>: Vatic Pro Prism Flash or Wilson Energy Pro</li>
        <li><strong>$100-$200</strong>: Six Zero Double Black Diamond or HEAD Gravity Tour</li>
      </ul>

      <p><strong>Step 2: How committed are you?</strong></p>
      <ul>
        <li><strong>Just trying it out</strong>: Franklin Signature Pro</li>
        <li><strong>Pretty sure I'll keep playing</strong>: Vatic Pro Prism Flash</li>
        <li><strong>I'm all-in, want the best beginner experience</strong>: Six Zero Double Black Diamond</li>
      </ul>

      <p><strong>Step 3: What's your playing style likely to be?</strong></p>
      <ul>
        <li><strong>Social, recreational</strong>: Wilson Energy Pro or Franklin Signature Pro</li>
        <li><strong>Want to improve and compete eventually</strong>: Vatic Pro Prism Flash or Six Zero</li>
        <li><strong>Brand preference matters</strong>: HEAD Gravity Tour</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Do I need an expensive paddle as a beginner?</h3>
      <p>No! The sweet spot for beginners is $70-150. Anything over $200 has features you won't be able to utilize yet.</p>

      <h3>What's the most important feature for beginners?</h3>
      <p>A large, forgiving sweet spot. This makes learning much more enjoyable and helps you develop proper technique.</p>

      <h3>Should I buy a paddle with a warranty?</h3>
      <p>It's nice to have, but not essential for paddles in this price range. Focus on proven durability instead.</p>

      <h3>Can I use a tennis grip on my pickleball paddle?</h3>
      <p>You can, but most paddles come with perfectly good grips. Save the customization for when you know your preferences better.</p>

      <h2>Next Steps: After You Buy Your First Paddle</h2>

      <ol>
        <li><strong>Play regularly</strong> - At least 2-3 times per week if possible</li>
        <li><strong>Take a lesson</strong> - Proper technique matters more than equipment</li>
        <li><strong>Join a beginner group</strong> - Most clubs have beginner-friendly sessions</li>
        <li><strong>Learn the rules</strong> - Understanding scoring and positioning helps immensely</li>
        <li><strong>Don't upgrade too quickly</strong> - Give yourself 6+ months with your first paddle</li>
      </ol>

      <h2>When to Upgrade</h2>

      <p>You'll know it's time to upgrade when:</p>
      <ul>
        <li>You're consistently hitting the sweet spot</li>
        <li>You want more power or spin than your current paddle provides</li>
        <li>You're playing 4+ times per week regularly</li>
        <li>You're considering tournament play</li>
        <li>Your current paddle shows significant wear</li>
      </ul>

      <p>Most beginners should plan to upgrade after 8-12 months of regular play.</p>

      <hr />

      <p><em>Ready to start your pickleball journey? Our featured paddles above represent the best options for new players in 2025. Each has been tested by beginners and comes with our confidence guarantee.</em></p>

      <p><strong>Next:</strong> Once you're comfortable with your first paddle, check out our <strong><a href="/ultimate-guide">Ultimate Guide</a></strong> for advanced paddle recommendations, or explore our <strong><a href="/budget-paddles">Budget Paddle Guide</a></strong> for more affordable options.</p>
    </PageLayout>
  );
}