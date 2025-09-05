/**
 * Script to upload site content to Algolia search index
 * Run with: node scripts/upload-to-algolia.js
 */

const { algoliasearch } = require('algoliasearch');

// Initialize Algolia client
const client = algoliasearch(
  '02AH4INZGM', // Your Application ID
  'YOUR_WRITE_API_KEY_HERE' // Replace with your Write API Key (different from search key)
);

// Get the index
const index = client.initIndex('pages'); // Make sure this matches your index name

// Your site content to upload
const siteContent = [
  {
    objectID: 'home',
    title: 'Best Pickleball Paddles 2025 - Expert Reviews & Buying Guide',
    content: 'Find the perfect pickleball paddle with our expert reviews. Compare top brands like JOOLA, CRBN, Selkirk, and more.',
    path: '/',
    type: 'Home',
    categories: ['home', 'reviews', 'guide'],
    keywords: ['pickleball paddle', 'best paddle', 'paddle reviews', 'buying guide']
  },
  {
    objectID: 'joola-ben-johns-perseus',
    title: 'JOOLA Ben Johns Perseus CFS Review 2025',
    content: 'Professional tournament paddle with Carbon-Flex5 technology and raw carbon fiber surface. Used by Ben Johns.',
    path: '/joola-ben-johns-perseus',
    type: 'Paddle Review',
    brand: 'JOOLA',
    categories: ['paddle', 'review', 'professional', 'tournament'],
    keywords: ['JOOLA', 'Ben Johns', 'Perseus', 'carbon fiber', 'professional paddle', 'tournament paddle']
  },
  {
    objectID: 'joola-ben-johns-perseus-test',
    title: 'JOOLA Ben Johns Perseus Test - In-Depth Analysis',
    content: 'Comprehensive testing and analysis of the popular JOOLA Perseus paddle performance.',
    path: '/joola-ben-johns-perseus-test',
    type: 'Paddle Review',
    brand: 'JOOLA',
    categories: ['paddle', 'review', 'test', 'analysis'],
    keywords: ['JOOLA', 'Perseus test', 'paddle analysis', 'performance test']
  },
  {
    objectID: 'six-zero-double-black-diamond',
    title: 'Six Zero Double Black Diamond Review',
    content: 'Premium T700 carbon fiber paddle with lifetime warranty and exceptional control.',
    path: '/six-zero-double-black-diamond',
    type: 'Paddle Review',
    brand: 'Six Zero',
    categories: ['paddle', 'review', 'premium', 'control'],
    keywords: ['Six Zero', 'Double Black Diamond', 'T700 carbon', 'control paddle', 'lifetime warranty']
  },
  {
    objectID: 'vatic-pro-prism-flash',
    title: 'Vatic Pro Prism Flash Review',
    content: 'Budget-friendly raw carbon fiber paddle made in California with excellent value.',
    path: '/vatic-pro-prism-flash',
    type: 'Paddle Review',
    brand: 'Vatic',
    categories: ['paddle', 'review', 'budget', 'value'],
    keywords: ['Vatic Pro', 'Prism Flash', 'budget paddle', 'california made', 'raw carbon']
  },
  {
    objectID: 'selkirk-amped-omni-weight',
    title: 'Selkirk Amped Omni Weight Review',
    content: 'Versatile paddle with omni weight technology for customizable feel and performance.',
    path: '/selkirk-amped-omni-weight',
    type: 'Paddle Review',
    brand: 'Selkirk',
    categories: ['paddle', 'review', 'versatile', 'customizable'],
    keywords: ['Selkirk', 'Amped', 'Omni Weight', 'customizable', 'versatile paddle']
  },
  {
    objectID: 'crbn-genesis-power-series-16mm',
    title: 'CRBN Genesis Power Series 16mm Review',
    content: 'Powerful paddle with T700 carbon fiber face and 16mm thickness for maximum power.',
    path: '/crbn-genesis-power-series-16mm',
    type: 'Paddle Review',
    brand: 'CRBN',
    categories: ['paddle', 'review', 'power', 'thick'],
    keywords: ['CRBN', 'Genesis', 'Power Series', '16mm', 'power paddle', 'T700 carbon']
  },
  {
    objectID: 'ultimate-guide',
    title: 'Ultimate Pickleball Paddle Guide 2025',
    content: 'Complete guide to the best pickleball paddles with expert reviews, rankings, and buying advice.',
    path: '/ultimate-guide',
    type: 'Guide',
    categories: ['guide', 'comprehensive', 'buying', 'rankings'],
    keywords: ['paddle guide', 'buying guide', 'best paddles', 'paddle rankings', '2025 guide']
  },
  {
    objectID: 'beginner-guide',
    title: 'Beginner Pickleball Paddle Guide',
    content: 'Complete beginner guide to choosing your first pickleball paddle with tips and recommendations.',
    path: '/beginner-guide',
    type: 'Guide',
    categories: ['guide', 'beginner', 'first paddle', 'tips'],
    keywords: ['beginner paddle', 'first paddle', 'beginner guide', 'paddle tips', 'new player']
  },
  {
    objectID: 'budget-paddles',
    title: 'Best Budget Pickleball Paddles Under $100',
    content: 'Top budget pickleball paddles that deliver premium performance without breaking the bank.',
    path: '/budget-paddles',
    type: 'Guide',
    categories: ['guide', 'budget', 'affordable', 'value'],
    keywords: ['budget paddles', 'cheap paddles', 'affordable paddles', 'under 100', 'value paddles']
  },
  {
    objectID: 'premium-comparison',
    title: 'Premium Pickleball Paddle Comparison',
    content: 'Head-to-head comparison of JOOLA, CRBN, Selkirk, and Engage premium paddles.',
    path: '/premium-comparison',
    type: 'Comparison',
    categories: ['comparison', 'premium', 'brands', 'head-to-head'],
    keywords: ['paddle comparison', 'premium paddles', 'JOOLA vs CRBN', 'brand comparison', 'paddle brands']
  },
  {
    objectID: 'about',
    title: 'About - Paddle Review Process & Testing',
    content: 'Learn about our comprehensive paddle review process, testing methodology, and expert team.',
    path: '/about',
    type: 'Page',
    categories: ['about', 'process', 'testing', 'methodology'],
    keywords: ['about us', 'review process', 'testing method', 'paddle testing', 'expert reviews']
  },
  {
    objectID: 'contact',
    title: 'Contact - Get in Touch',
    content: 'Contact our paddle review team for questions, suggestions, or paddle recommendations.',
    path: '/contact',
    type: 'Page',
    categories: ['contact', 'support', 'questions'],
    keywords: ['contact us', 'paddle questions', 'recommendations', 'support']
  }
];

async function uploadToAlgolia() {
  try {
    console.log('Starting upload to Algolia...');
    console.log(`Uploading ${siteContent.length} items to index: pages`);
    
    // Clear the index first (optional)
    // await index.clearObjects();
    
    // Upload the objects
    const { objectIDs } = await index.saveObjects(siteContent);
    
    console.log('✅ Successfully uploaded to Algolia!');
    console.log(`Uploaded ${objectIDs.length} objects`);
    console.log('Object IDs:', objectIDs);
    
    // Configure index settings for better search
    await index.setSettings({
      searchableAttributes: [
        'title',
        'content', 
        'keywords',
        'brand',
        'type'
      ],
      attributesForFaceting: [
        'type',
        'brand', 
        'categories'
      ],
      ranking: [
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
        'custom'
      ]
    });
    
    console.log('✅ Index settings configured successfully!');
    
  } catch (error) {
    console.error('❌ Error uploading to Algolia:', error);
  }
}

// Run the upload
uploadToAlgolia();