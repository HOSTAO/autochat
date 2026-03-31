#!/usr/bin/env node
/**
 * Copies WordPress mirror HTML files to public/wp-pages/ with URL transformation.
 * Run: node scripts/generate-wp-pages.js
 */
const fs = require('fs');
const path = require('path');

const MIRROR_DIR = '/tmp/mirrors/createautochat.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'wp-pages');

// [outputName, htmlFilePath]
const PAGE_MAP = [
  ['home', 'index.html'],
  ['about-us', 'about-us/index.html'],
  ['affiliate-program', 'affiliate-program/index.html'],
  ['ai-chatbot', 'ai-chatbot/index.html'],
  ['autochat-coupon-code', 'autochat-coupon-code/index.html'],
  ['autochat-vs-aisensy-best-aisensy-alternative', 'autochat-vs-aisensy-best-aisensy-alternative/index.html'],
  ['autochat-vs-gallabox-the-best-gallabox-alternative', 'autochat-vs-gallabox-the-best-gallabox-alternative/index.html'],
  ['autochat-vs-interakt', 'autochat-vs-interakt/index.html'],
  ['autochat-vs-quickreply-ai-best-quickreply-ai-alternative2024', 'autochat-vs-quickreply-ai-best-quickreply-ai-alternative2024/index.html'],
  ['blogs', 'blogs/index.html'],
  ['blogs-2', 'blogs/2/index.html'],
  ['blogs-3', 'blogs/3/index.html'],
  ['blogs-4', 'blogs/4/index.html'],
  ['click-to-whatsapp-ads-boosting-sales-with-a-single-tap', 'click-to-whatsapp-ads-boosting-sales-with-a-single-tap/index.html'],
  ['common-whatsapp-automation-mistakes-and-how-to-fix-them', 'common-whatsapp-automation-mistakes-and-how-to-fix-them/index.html'],
  ['contact', 'contact/index.html'],
  ['detailed-comparison-autochat-vs-wati', 'detailed-comparison-autochat-vs-wati/index.html'],
  ['ecommerce', 'ecommerce/index.html'],
  ['features', 'features/index.html'],
  ['how-to-create-a-virtual-number-for-whatsapp-business', 'how-to-create-a-virtual-number-for-whatsapp-business/index.html'],
  ['how-to-set-auto-reply-in-whatsapp-business', 'how-to-set-auto-reply-in-whatsapp-business/index.html'],
  ['how-to-set-up-click-to-whatsapp-ads-a-complete-guide', 'how-to-set-up-click-to-whatsapp-ads-a-complete-guide/index.html'],
  ['partner-program', 'partner-program/index.html'],
  ['pricing', 'pricing/index.html'],
  ['pricing-us', 'pricing-us/index.html'],
  ['pricing-redirect', 'pricing-redirect/index.html'],
  ['privacy-policy', 'privacy-policy/index.html'],
  ['refund-policy', 'refund-policy/index.html'],
  ['terms-and-conditions', 'terms-and-conditions/index.html'],
  ['the-evolution-of-whatsapp-from-messaging-app-to-platform', 'the-evolution-of-whatsapp-from-messaging-app-to-platform/index.html'],
  ['understanding-whatsapp-green-tick-verification-why-it-matters', 'understanding-whatsapp-green-tick-verification-why-it-matters/index.html'],
  ['virtual-number', 'virtual-number/index.html'],
  ['webhook-integration', 'webhook-integration/index.html'],
  ['what-are-ai-agents-types-tips-benefits', 'what-are-ai-agents-types-tips-benefits/index.html'],
  ['whatsapp-account', 'whatsapp-account/index.html'],
  ['whatsapp-ai-integration', 'whatsapp-ai-integration/index.html'],
  ['whatsapp-audience', 'whatsapp-audience/index.html'],
  ['whatsapp-bot-automation-what-is-it-and-what-are-the-use-cases', 'whatsapp-bot-automation-what-is-it-and-what-are-the-use-cases/index.html'],
  ['whatsapp-chatbots-for-e-commerce-from-browse-to-buy', 'whatsapp-chatbots-for-e-commerce-from-browse-to-buy/index.html'],
  ['whatsapp-chatbots-the-ultimate-tool-for-business-communication', 'whatsapp-chatbots-the-ultimate-tool-for-business-communication/index.html'],
  ['whatsapp-for-fitness-centers-use-cases-benefits', 'whatsapp-for-fitness-centers-use-cases-benefits/index.html'],
  ['whatsapp-healthcare', 'whatsapp-healthcare/index.html'],
  ['whatsapp-marketing', 'whatsapp-marketing/index.html'],
  ['whatsapp-promotion', 'whatsapp-promotion/index.html'],
  ['whatsapp-vs-email-marketing', 'whatsapp-vs-email-marketing/index.html'],
  ['why-automate-whatsapp-messages-benefits-for-small-businesses-with-use-cases', 'why-automate-whatsapp-messages-benefits-for-small-businesses-with-use-cases/index.html'],
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function transformHtml(html) {
  return html
    .replace(/https?:\/\/createautochat\.com\//g, '/')
    .replace(/http:\/\/createautochat\.com\//g, '/');
}

let generated = 0;
let skipped = 0;

for (const [outputName, htmlFile] of PAGE_MAP) {
  const htmlPath = path.join(MIRROR_DIR, htmlFile);

  if (!fs.existsSync(htmlPath)) {
    console.log(`SKIP (not found): ${htmlFile}`);
    skipped++;
    continue;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const transformed = transformHtml(htmlContent);
  const outputPath = path.join(OUTPUT_DIR, `${outputName}.html`);

  fs.writeFileSync(outputPath, transformed, 'utf8');
  console.log(`Written: wp-pages/${outputName}.html`);
  generated++;
}

console.log(`\nDone! Generated ${generated} HTML files, skipped ${skipped}.`);

// Output the rewrites config for next.config.ts
console.log('\n--- Rewrites for next.config.ts ---');
const rewrites = PAGE_MAP.map(([name, _]) => {
  const source = name === 'home' ? '/' : `/${name}`;
  return `{ source: '${source}', destination: '/wp-pages/${name}.html' }`;
});
console.log(rewrites.join(',\n'));
