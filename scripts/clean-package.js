const fs = require('fs')

try {
  fs.rmSync('node_modules', { recursive: true, force: true });
  fs.rmSync('package-lock.json', { force: true });
  fs.rmSync('.turbo', { recursive: true, force: true });
  console.error('cleared');
} catch (error) {
  console.error('Error: Failed to clean the monorepo.');
  process.exit(1);
}