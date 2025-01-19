const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RED = '\033[0;31m';
const GREEN = '\033[0;32m';
const YELLOW = '\033[0;33m';
const BLUE = '\033[0;34m';
const RESET = '\033[0m';

const BOLD = '\033[1m';
const UNDERLINE = '\033[4m';

// Pull from the master branch
execSync('git pull origin master');

// Fetch the latest changes from the repository
// execSync('git fetch origin');

// Get commit message and branch name from arguments or use default
const commitMessage = process.argv[2] || 'Initial Commit';
const branchName = process.argv[3] || 'master';

if (!commitMessage) {
  console.error('Error: Commit message is required!');
  process.exit(1);
}

if (!branchName) {
  console.warn('Warning: No branch name provided. Using default "master".');
}

console.log('[1/4] Cleaning monorepo...');
try {
  fs.rmSync('node_modules', { recursive: true, force: true });
  fs.rmSync('package-lock.json', { force: true });
  fs.rmSync('.turbo', { recursive: true, force: true });
} catch (error) {
  console.error('Error: Failed to clean the monorepo.');
  process.exit(1);
}

console.log('[2/4] Adding and committing changes...');
try {
  execSync('git add .');
  execSync(`git commit -m "${commitMessage}"`);
} catch (error) {
  console.error('Error: Git commit failed.');
  process.exit(1);
}

console.log(`[3/4] Pushing to branch '${branchName}'...`);
try {
  execSync(`git push origin ${branchName}`);
} catch (error) {
  console.error('Error: Git push failed.');
  process.exit(1);
}

console.log('[4/4] Installing dependencies...');
try {
  execSync('npm install');
} catch (error) {
  console.error('Error: npm install failed.');
  process.exit(1);
}

console.log(`You can now type ${GREEN}${BOLD}npm run dev${RESET} to run the dev server.`);
