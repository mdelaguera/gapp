# Sanity Agent Guide: Using AI to Find Reviews and Images

This guide explains how to use the Claude Code web-content-harvester agent and the built-in paddle monitoring system to automatically find product reviews and images for your pickleball paddle site.

## Overview

The system combines two powerful AI agents:
1. **Claude Code's web-content-harvester agent** - For comprehensive web scraping and content archiving
2. **Built-in paddle-monitor-agent** - For specific paddle product monitoring and review aggregation

## Setup

### Prerequisites

1. **Claude Code** installed and configured
2. **Environment variables** set in your `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_read_token
   SANITY_API_WRITE_TOKEN=your_write_token
   ```

### Agent Configuration

The paddle monitor agent is configured in `lib/agents/paddle-monitor-agent.ts` with these default sources:

**Partner Sites:**
- https://www.joola.com
- https://crbnpaddles.com  
- https://selkirkpaddles.com
- https://engagepaddles.com
- https://vaticsportspickeball.com

**Review Sources:**
- amazon.com
- pickleballcentral.com
- justpaddles.com

## Using the Web Content Harvester Agent

### Finding Product Reviews

To use Claude Code's web-content-harvester agent to find reviews for a specific paddle:

```bash
# In Claude Code terminal
/agent web-content-harvester "I need to research reviews for the JOOLA Ben Johns Hyperion paddle. Please visit relevant review sites like Amazon, PickleballCentral, and paddle review blogs. Capture their content about the Hyperion paddle, save any product images, and compile everything into organized markdown files."
```

**The agent will:**
1. Visit multiple review sites
2. Capture product information and reviews
3. Save product images to `/public/img/paddles/`
4. Create organized markdown files with all findings
5. Provide structured data for integration

### Example Agent Usage

```bash
# Research competitor analysis
/agent web-content-harvester "Analyze the top 5 pickleball paddle manufacturers' product pages. Capture product specs, pricing, images, and customer reviews. Focus on paddles in the $200-300 price range."

# Deep dive on specific paddle
/agent web-content-harvester "Research everything available about the Six Zero Double Black Diamond paddle. Visit manufacturer site, Amazon reviews, YouTube reviews, and paddle review blogs. Save all images and create comprehensive analysis."
```

## Adding URLs to Monitor

### Method 1: Update Agent Configuration

Edit `lib/agents/paddle-monitor-agent.ts`:

```typescript
private partners: string[] = [
  'https://www.joola.com',
  'https://crbnpaddles.com',
  'https://selkirkpaddles.com',
  'https://engagepaddles.com',
  'https://vaticsportspickeball.com',
  // Add new partners here
  'https://www.paddletek.com',
  'https://www.prokennex.com',
];

private reviewSources = [
  'amazon.com',
  'pickleballcentral.com', 
  'justpaddles.com',
  // Add new review sources
  'dickssportinggoods.com',
  'tenniswarehouse.com',
];
```

### Method 2: Use Web-Content-Harvester for Specific Sites

```bash
# Add a new manufacturer
/agent web-content-harvester "Visit PaddleTek's website and catalog all their paddle models. Extract product specifications, pricing, and images. Create individual product pages for each paddle found."

# Monitor specific product categories
/agent web-content-harvester "Monitor the 'new arrivals' section on PickleballCentral.com for any new paddle releases. Extract full product details and reviews for each new paddle."
```

## Image Storage and Management

### Automated Image Storage

**Storage Location:** `/public/img/paddles/`

**Naming Convention:**
- Primary image: `{brand-model-slug}.jpg`
- Additional images: `{brand-model-slug}-{number}.jpg`

**Example:**
```
/public/img/paddles/
├── joola-ben-johns-perseus.jpg
├── joola-ben-johns-perseus-2.jpg
├── six-zero-double-black-diamond.jpg
├── vatic-pro-prism-flash.jpg
```

### Manual Image Addition

1. Add images to `/public/img/paddles/`
2. Update the paddle's MDX file:

```mdx
export const metadata = {
  title: 'JOOLA Ben Johns Perseus - Complete Review 2025',
  description: 'Expert analysis of the JOOLA Ben Johns Perseus paddle...',
}

# JOOLA Ben Johns Perseus Review

![JOOLA Ben Johns Perseus](/img/paddles/joola-ben-johns-perseus.jpg)

## Additional Images

![JOOLA Perseus Detail](/img/paddles/joola-ben-johns-perseus-2.jpg)
![JOOLA Perseus In Action](/img/paddles/joola-ben-johns-perseus-3.jpg)
```

## Automatic Product Integration

### Paddle Page Generation

When the agent finds a new paddle, it automatically:

1. **Creates MDX file** in `/app/{paddle-slug}/page.mdx`
2. **Downloads and optimizes images**
3. **Generates structured content** with:
   - Product specifications
   - Aggregated ratings
   - Review summaries
   - Buy links
   - Comparison data

### Example Generated Page Structure

```mdx
export const metadata = {
  title: 'Paddle Name - Expert Review 2025',
  description: 'Complete analysis and buying guide...',
}

# Paddle Name Review (2025)

![Paddle Image](/img/paddles/paddle-slug.jpg)

## Quick Summary

**Brand**: Brand Name  
**Price**: $XXX.XX  
**Rating**: ★★★★☆ (4.2/5)  
**Best For**: Player type and skill level

## Where to Buy

**[Buy on Amazon →](affiliate-link)**
**[Check PaddleTek →](affiliate-link)**

## Specifications

| Spec | Value |
|------|--------|
| Weight | 8.0-8.2 oz |
| Thickness | 16mm |
| Material | Carbon Fiber |

## Pros & Cons

### Pros ✓
- Excellent power and control balance
- Durable construction
- Great sweet spot

### Cons ✗
- Higher price point
- May be too powerful for beginners

## Reviews Summary

Based on analysis of 47 reviews from Amazon, PickleballCentral, and expert sources...
```

## Updating Existing Paddles

### Adding New Reviews

```bash
/agent web-content-harvester "Find the latest reviews for the JOOLA Ben Johns Perseus paddle. Check Amazon, Google reviews, YouTube reviews from the past 3 months. Update the existing paddle page with new review data."
```

### Updating Images

```bash
/agent web-content-harvester "Find higher quality images for the Six Zero Double Black Diamond paddle. Look for official product photos, action shots, and detail images. Replace existing images with better quality versions."
```

## Running the Monitor Agent

### Manual Execution

```bash
# In your project directory
npm run agent:monitor
```

### Scheduled Execution

The agent can be scheduled to run automatically using the built-in scheduler in `lib/agents/scheduler.ts`:

```typescript
// Runs every 24 hours
scheduler.schedule('0 0 * * *', async () => {
  const agent = new PaddleMonitorAgent();
  await agent.run();
});
```

## Configuration Options

### Agent Settings

Edit `lib/agents/paddle-monitor-agent.ts`:

```typescript
// Rate limiting between requests (milliseconds)
private rateLimitDelay = 2000;

// Maximum images per paddle
private maxImagesPerPaddle = 5;

// Review sources priority (higher = more weight)
private sourcePriority = {
  'amazon.com': 1.0,
  'pickleballcentral.com': 1.2,
  'expert-reviews': 1.5
};
```

### Search Configuration

```typescript
// Keywords for product searches
private searchKeywords = [
  'pickleball paddle',
  'USAPA approved',
  'tournament legal',
  'paddle review',
  'carbon fiber paddle'
];
```

## Monitoring and Logs

### Check Agent Activity

```bash
# View recent agent runs
tail -f logs/paddle-agent.log

# Check for errors
grep ERROR logs/paddle-agent.log
```

### Status Dashboard

The agent provides status information:

```bash
curl localhost:3000/api/agent-status
```

Response:
```json
{
  "lastRun": "2025-09-08T10:30:00Z",
  "paddlesFound": 3,
  "reviewsAggregated": 47,
  "imagesDownloaded": 12,
  "errors": []
}
```

## Troubleshooting

### Common Issues

1. **Rate Limiting**: Increase delays between requests
2. **Image Download Fails**: Check image URLs and permissions
3. **Review Parsing Errors**: Update CSS selectors for review sites

### Debug Mode

```bash
DEBUG=paddle-agent npm run agent:monitor
```

### Reset Agent Data

```bash
# Clear cached data and start fresh
npm run agent:reset
```

## Best Practices

1. **Respect robots.txt** - Always check site policies
2. **Rate limit requests** - Don't overwhelm target sites
3. **Validate images** - Ensure images match the actual product
4. **Review accuracy** - Manually verify auto-generated content
5. **Update regularly** - Keep review data current

## API Integration

### Webhook Notifications

Set up webhooks to be notified when new paddles are found:

```typescript
// In your webhook handler
app.post('/webhook/new-paddle', (req, res) => {
  const { paddleName, brand, price, images } = req.body;
  
  // Send notification to your team
  sendSlackNotification(`New paddle found: ${paddleName}`);
  
  res.json({ status: 'received' });
});
```

This guide provides comprehensive coverage of using AI agents to automate paddle review and image collection for your Sanity CMS-powered pickleball paddle site.