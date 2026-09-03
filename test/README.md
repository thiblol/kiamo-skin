# Test Structure

Modern, maintainable test suite for KIAMO Skin using Node.js native test runner.

## Overview

The test suite validates business rules, SEO requirements, and technical implementation against the built HTML in `dist/`. Tests prevent publishing unverified facts that could create legal liability or customer confusion.

## Running Tests

```bash
npm test           # Build + run all tests
npm run test:only  # Run tests without building (faster iteration)
```

## Test Organization

### `test/test-utils.js`
Shared utilities and configuration:
- **Page loading**: Recursively scans `dist/` for HTML files
- **Helper functions**: `forEachPage()`, `getPage()`, `getJsonLdBlocks()`
- **Verified data**: Single source of truth for business facts (NAP, prices)
- **Forbidden patterns**: Regex patterns for prohibited content

### `test/factual-guards.test.js`
Validates only verified business facts appear:
- ✅ No closed Del Mar location references
- ✅ Only verified prices from `verifiedPrices` object
- ✅ No rating/review aggregates (unverified)
- ✅ No opening hours (unverified)
- ✅ Pronoun-free copy (owner hasn't published pronouns)
- ✅ No instant booking claims (booking requires approval)

### `test/seo-guards.test.js`
SEO and meta tag validation:
- ✅ Title ≤60 characters
- ✅ Meta description ≤155 characters
- ✅ Exactly one H1 per page
- ✅ Canonical and OG image tags present
- ✅ LocalBusiness schema with verified NAP
- ✅ FAQPage schema on homepage (≥4 questions)

### `test/integrity-guards.test.js`
Technical implementation validation:
- ✅ No dead internal links
- ✅ All images have alt text (accessibility)
- ✅ Before/after images include "Results vary" disclaimer
- ✅ Reveal animations gated behind `[data-js]` (no-JS fallback)
- ✅ Sitemap and robots.txt exist

### `test/run.js`
Test runner with enhanced reporting:
- Discovers all `*.test.js` files automatically
- Runs test suites in parallel for speed
- Uses Node's spec reporter for clear output
- Exits with proper status codes for CI/CD

## Key Features

### 1. Better Error Messages
```javascript
// Old (v1)
AssertionError: Expected pattern not to match

// New (v2)
AssertionError: journal\chemical-peel-cost-san-diego\index.html: unverified price $75
```

### 2. Organized by Concern
Tests are grouped by what they protect:
- **Factual**: Legal/business fact accuracy
- **SEO**: Search engine requirements
- **Integrity**: Technical implementation

### 3. Shared Constants
```javascript
import { VERIFIED, FORBIDDEN } from './test-utils.js';

// Single source of truth
VERIFIED.prices.has('$259') // true

// Reusable patterns
FORBIDDEN.ratings.stars // /[★☆]/u
```

### 4. Parallel Execution
Test files run concurrently for faster feedback (typical run: ~1-2 seconds after build).

## Adding New Tests

### 1. Choose the right file
- Business facts (prices, hours, ratings) → `factual-guards.test.js`
- SEO requirements (titles, meta, schema) → `seo-guards.test.js`
- Technical implementation (links, a11y) → `integrity-guards.test.js`

### 2. Write descriptive test names
```javascript
// Good
test('only verified prices appear', ...)

// Bad
test('prices', ...)
```

### 3. Provide context in assertions
```javascript
// Good
assert.ok(
  price <= 1000,
  `${file}: unverified price ${price}`
);

// Bad
assert.ok(price <= 1000);
```

## Migration from Old Structure

**Old (`guards.test.js`)**: Single 239-line monolithic file
**New (3 files)**: Modular, 400+ lines total with better organization

### Breaking Changes
None - all existing test assertions are preserved, just reorganized.

### Backup
Old test file preserved as `test/guards.test.js.old` for reference.

## CI/CD Integration

The test runner exits with proper status codes:
- `0` = all tests pass
- `1` = at least one test failed

```yaml
# Example GitHub Actions
- name: Run tests
  run: npm test
```

## Philosophy

These are **guards**, not unit tests. Every assertion maps to:
- A legal risk (unverified rating, closed location)
- A factual risk (invented price, wrong address)
- An SEO requirement (title length, schema validation)
- A technical requirement (accessibility, no-JS fallback)

If a test fails, something publishable is wrong - not just a code issue.

## Performance

- Build time: ~800ms (Astro static build)
- Test execution: ~50-100ms (parallel)
- Total: ~1 second end-to-end

## Future Enhancements

Possible additions:
- Visual regression tests (Playwright)
- Performance budgets (Core Web Vitals)
- Broken link checker (external links)
- Image optimization validation
- Schema.org validator integration
