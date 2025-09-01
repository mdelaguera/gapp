const SITE_URL = 'https://getapickleballpaddle.com';

export default async function sitemap() {
  // Define static routes
  const routes = [
    '',
    '/joola-ben-johns-perseus',
    '/six-zero-double-black-diamond', 
    '/vatic-pro-prism-flash',
    '/ultimate-guide',
    '/beginner-guide',
    '/budget-paddles',
    '/premium-comparison',
    '/about',
    '/contact',
    '/affiliate-disclosure',
    '/privacy'
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('joola-ben-johns-perseus') || route.includes('six-zero-double-black-diamond') || route.includes('vatic-pro-prism-flash') ? 0.8 : 0.6
  }));

  return routes;
}
