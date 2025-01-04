#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
RESET='\033[0m'

BOLD='\033[1m'
UNDERLINE='\033[4m'

commit_message=${1:-"Initial Commit"}
branch_name=${2:-"master"}

if [ -z "$commit_message" ]; then
  echo "Error: Commit message is required!"
  exit 1
fi

if [ -z "$branch_name" ]; then
  echo "Warning: No branch name provided. Using default 'master'."
fi

echo "[1/4] Cleaning monorepo..."
rm -rf node_modules/ package-lock.json .turbo/
if [ $? -ne 0 ]; then
  echo "Error: Failed to clean the monorepo."
  exit 1
fi

echo "[2/4] Adding and committing changes..."
git add .
git commit -m "$commit_message"
if [ $? -ne 0 ]; then
  echo "Error: Git commit failed."
  exit 1
fi

echo "[3/4] Pushing to branch '$branch_name'..."
git push origin "$branch_name"
if [ $? -ne 0 ]; then
  echo "Error: Git push failed."
  exit 1
fi

echo "[4/4] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
  echo "Error: npm install failed."
  exit 1
fi

echo "You can now type ${GREEN}${BOLD}npm run dev${RESET} to run the dev server."