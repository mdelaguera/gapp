import { PaddleData } from '../components/PaddleCard';

// List of paddles with placeholder or broken images that should be hidden
const PLACEHOLDER_IMAGES = [
  '/img/paddles/placeholder-paddle.svg',
  '/img/paddles/crbn-power-series.jpg', // Only 22 bytes - broken
  '/img/paddles/engage-pursuit-pro-ex.svg', // Using generic SVG
  '/img/paddles/crbn-trufoam-genesis.svg', // Using generic SVG
];

// Filter function to remove paddles with placeholder images
function filterValidPaddles(paddles: PaddleData[]): PaddleData[] {
  return paddles.filter(paddle => !PLACEHOLDER_IMAGES.includes(paddle.image));
}

// Featured paddles for different categories (internal - may contain placeholders)
const topPaddlesRaw: PaddleData[] = [
  {
    name: "JOOLA Ben Johns Perseus",
    price: "$279.95",
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
    price: "$99.00",
    image: "/img/paddles/vatic-pro-prism-flash.jpg",
    rating: 4.5,
    power: 4.3,
    control: 4.6,
    spin: 4.7,
    durability: 4.4,
    slug: "vatic-pro-prism-flash",
    highlight: "Budget Pick",
    pros: ["Affordable carbon fiber", "Good spin generation", "Lightweight design"],
    cons: ["Less durable than premium paddles", "Limited power for aggressive play"],
    bestFor: "Beginners to Intermediate"
  }
];

const beginnerPaddlesRaw: PaddleData[] = [
  {
    name: "Vatic Pro Prism Flash",
    price: "$99.00",
    image: "/img/paddles/vatic-pro-prism-flash.jpg",
    rating: 4.5,
    power: 4.3,
    control: 4.6,
    spin: 4.7,
    durability: 4.4,
    slug: "vatic-pro-prism-flash",
    highlight: "Growth Paddle",
    pros: ["Real carbon fiber surface", "Perfect weight for beginners", "Grows with your game"],
    cons: ["Higher initial cost", "May be overwhelming for absolute beginners"],
    bestFor: "New Players Planning to Improve"
  },
  {
    name: "Franklin Signature Pro",
    price: "$35.99",
    image: "/img/paddles/franklin-signature-pro.svg",
    rating: 4.3,
    power: 4.0,
    control: 4.4,
    spin: 4.2,
    durability: 4.0,
    slug: "franklin-signature-pro",
    highlight: "Budget Champion",
    pros: ["Unbeatable price", "Ben Johns technology", "USAPA approved"],
    cons: ["Limited longevity", "Basic construction", "May need upgrading soon"],
    bestFor: "Testing Interest in Pickleball"
  },
  {
    name: "Wilson Energy Pro",
    price: "$79.95",
    image: "/img/paddles/wilson-energy-pro.svg",
    rating: 4.4,
    power: 4.1,
    control: 4.6,
    spin: 4.0,
    durability: 4.3,
    slug: "wilson-energy-pro",
    highlight: "Comfort Focus",
    pros: ["Wide sweet spot", "Comfortable feel", "Brand reliability"],
    cons: ["Less spin generation", "Limited advanced features", "Heavier than optimal"],
    bestFor: "Comfort-Focused Beginners"
  }
];

const budgetPaddlesRaw: PaddleData[] = [
  {
    name: "Vatic Pro Prism Flash",
    price: "$99.00",
    image: "/img/paddles/vatic-pro-prism-flash.jpg",
    rating: 4.5,
    power: 4.3,
    control: 4.6,
    spin: 4.7,
    durability: 4.4,
    slug: "vatic-pro-prism-flash",
    highlight: "Carbon Miracle",
    pros: ["Raw carbon fiber at budget price", "California manufacturing", "Professional grip"],
    cons: ["Limited availability", "May sell out quickly", "Higher than other budget options"],
    bestFor: "Budget-Conscious Carbon Fiber Seekers"
  },
  {
    name: "Franklin Signature Pro",
    price: "$35.99",
    image: "/img/paddles/franklin-signature-pro.svg",
    rating: 4.3,
    power: 4.0,
    control: 4.4,
    spin: 4.2,
    durability: 4.0,
    slug: "franklin-signature-pro",
    highlight: "Unbeatable Value",
    pros: ["Ben Johns technology", "MaxGrit surface", "Tournament legal"],
    cons: ["Basic construction", "Limited longevity", "May need upgrading"],
    bestFor: "Budget-Conscious Beginners"
  },
  {
    name: "HEAD Gravity Tour",
    price: "$89.99",
    image: "/img/paddles/head-gravity-tour.svg",
    rating: 4.4,
    power: 4.2,
    control: 4.5,
    spin: 4.1,
    durability: 4.4,
    slug: "head-gravity-tour",
    highlight: "Brand Name",
    pros: ["Trusted HEAD brand", "Graphite surface", "All skill level versatility"],
    cons: ["Higher price for features", "Traditional feel only", "Limited innovation"],
    bestFor: "Brand-Conscious Budget Buyers"
  }
];

const premiumPaddlesRaw: PaddleData[] = [
  {
    name: "JOOLA Ben Johns Perseus",
    price: "$279.95",
    image: "/img/paddles/joola-ben-johns-perseus.jpg",
    rating: 4.8,
    power: 4.9,
    control: 4.7,
    spin: 4.8,
    durability: 4.6,
    slug: "joola-ben-johns-perseus",
    highlight: "World #1 Choice",
    pros: ["Carbon-Flex5 technology", "Pro player input", "Tournament proven"],
    cons: ["Premium investment", "Advanced player focused", "Requires good technique"],
    bestFor: "Serious Competitive Players"
  },
  {
    name: "CRBN Genesis Power Series",
    price: "$279.99",
    image: "/img/paddles/crbn-trufoam-genesis.svg",
    rating: 4.7,
    power: 4.6,
    control: 4.8,
    spin: 4.9,
    durability: 4.9,
    slug: "crbn-genesis-power-series-16mm",
    highlight: "Innovation Leader",
    pros: ["TruFoam technology", "Exceptional durability", "Cutting-edge materials"],
    cons: ["High price point", "Learning curve", "May be overkill for recreational"],
    bestFor: "Technology-Focused Advanced Players"
  },
  {
    name: "Engage Pursuit Pro EX",
    price: "$199.99",
    image: "/img/paddles/engage-pursuit-pro-ex.svg",
    rating: 4.6,
    power: 4.4,
    control: 4.9,
    spin: 4.7,
    durability: 4.5,
    slug: "engage-pursuit-pro",
    highlight: "Control Master",
    pros: ["Ultimate precision", "Control Pro core", "Raw T700 carbon"],
    cons: ["Less power generation", "Control-focused design", "May lack offensive punch"],
    bestFor: "Precision and Touch Players"
  }
];

// Export filtered paddle arrays (only paddles with real images)
export const topPaddles = filterValidPaddles(topPaddlesRaw);
export const beginnerPaddles = filterValidPaddles(beginnerPaddlesRaw);
export const budgetPaddles = filterValidPaddles(budgetPaddlesRaw);
export const premiumPaddles = filterValidPaddles(premiumPaddlesRaw);