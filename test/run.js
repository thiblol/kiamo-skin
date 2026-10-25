/**
 * Test Runner
 *
 * Runs all guard test suites with enhanced reporting.
 * Execute with: npm test
 */

import { spawn } from 'node:child_process';
import process from 'node:process';
import { glob } from 'node:fs/promises';

// Discover test files
const testFiles = [];
for await (const file of glob('test/*.test.js', { cwd: process.cwd() })) {
  testFiles.push(file);
}

if (testFiles.length === 0) {
  console.error('❌ No test files found in test/ directory');
  process.exit(1);
}

console.log(`\n🧪 Running ${testFiles.length} test suites...\n`);

/**
 * Each suite runs as its own `node --test` process and the exit code is the
 * verdict. A suite that fails to even load — a syntax error, a bad import —
 * exits non-zero, which is the case the previous stream-based runner missed:
 * it only listened for 'test:fail', so a suite that never started was reported
 * as a pass. A broken guard file must never read as a green build.
 */
function runSuite(file) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ['--test', file], {
      cwd: process.cwd(),
      stdio: 'inherit',
    });
    child.on('error', () => resolve(1));
    child.on('close', (code) => resolve(code ?? 1));
  });
}

let failed = 0;
const failedSuites = [];

for (const file of testFiles) {
  const code = await runSuite(file);
  if (code !== 0) {
    failed++;
    failedSuites.push(file);
  }
}

if (failed > 0) {
  console.log(`\n❌ ${failed} of ${testFiles.length} test suites failed:\n`);
  for (const file of failedSuites) {
    console.log(`   ✖ ${file}`);
  }
  console.log('\n❌ Some tests failed. Review errors above.\n');
  process.exit(1);
}

console.log(`\n✅ All ${testFiles.length} test suites passed!\n`);
process.exit(0);
