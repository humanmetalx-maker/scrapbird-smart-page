/**
 * Scrapbird - Basic Scraping Example
 * Demonstrates how to use Scrapbird for web scraping
 */

const Scrapbird = require('../src/Scrapbird');

// Example 1: Scrape a simple webpage
async function scrapeExample() {
  const scraper = new Scrapbird({
    url: 'https://example.com',
    selectors: {
      title: 'h1',
      paragraphs: 'p',
      links: 'a'
    }
  });

  try {
    const result = await scraper.scrape();
    console.log('Scraping Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 2: Scrape with custom headers
async function scrapeWithHeaders() {
  const scraper = new Scrapbird({
    url: 'https://example.com',
    selectors: {
      title: 'title',
      content: '.main-content'
    }
  });

  // Set custom headers
  scraper.setHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://example.com'
  });

  const result = await scraper.scrape();
  console.log('Result with custom headers:', result);
}

// Example 3: Update selectors dynamically
async function dynamicSelectors() {
  const scraper = new Scrapbird({
    url: 'https://example.com'
  });

  // Add selectors dynamically
  scraper.setSelectors({
    headline: 'h1',
    description: '.description',
    images: 'img'
  });

  const result = await scraper.scrape();
  console.log('Dynamic selector result:', result);
}

// Run example
if (require.main === module) {
  scrapeExample();
}

module.exports = { scrapeExample, scrapeWithHeaders, dynamicSelectors };
