/**
 * Test Runner
 *
 * Runs all guard test suites with enhanced reporting.
 * Execute with: npm test
 */

import { run } from 'node:test';
import { spec } from 'node:test/reporters';
import process from 'node:process';
import { glob } from 'node:fs/promises';

// Discover all test files
const testFiles = [];
for await (const file of glob('test/*.test.js', { cwd: process.cwd() })) {
  testFiles.push(file);
}

if (testFiles.length === 0) {
  console.error('❌ No test files found in test/ directory');
  process.exit(1);
}

console.log(`\n🧪 Running ${testFiles.length} test suites...\n`);

// Run tests with spec reporter for clear output
const stream = run({
  files: testFiles,
  concurrency: true, // Run test files in parallel for speed
});

stream.compose(spec).pipe(process.stdout);

// Handle completion
let hasFailures = false;

stream.on('test:fail', () => {
  hasFailures = true;
});

stream.on('test:complete', () => {
  if (hasFailures) {
    console.log('\n❌ Some tests failed. Review errors above.\n');
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!\n');
    process.exit(0);
  }
});
