#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
RESET='\033[0m'

BOLD='\033[1m'
UNDERLINE='\033[4m'

# Standardwerte für commit_message und branch_name, falls keine übergeben wurden
commit_message=${1:-"Initial Commit"}
branch_name=${2:-"master"}

# Überprüfen, ob ein Commit-Nachricht übergeben wurde
if [ -z "$commit_message" ]; then
  echo "Error: Commit message is required!"
  exit 1
fi

# Überprüfen, ob ein Branch-Name übergeben wurde
if [ -z "$branch_name" ]; then
  echo "Warning: No branch name provided. Using default 'master'."
fi

# Schritt 1: Monorepo bereinigen
echo "[1 / 4] Cleaning monorepo..."
rm -rf node_modules/ package-lock.json .turbo/
if [ $? -ne 0 ]; then
  echo "Error: Failed to clean the monorepo."
  exit 1
fi

# Schritt 2: Dateien zum Repository hinzufügen und committen
echo "[2 / 4] Adding and committing changes..."
git add .
git commit -m "$commit_message"
if [ $? -ne 0 ]; then
  echo "Error: Git commit failed."
  exit 1
fi

# Pushen zum angegebenen Branch
echo "[3 / 4] Pushing to branch '$branch_name'..."
git push origin "$branch_name"
if [ $? -ne 0 ]; then
  echo "Error: Git push failed."
  exit 1
fi

# Schritt 3: Abhängigkeiten installieren
echo "[4 / 4] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
  echo "Error: npm install failed."
  exit 1
fi

# Abschlussmeldung
echo -e "You can now type ${GREEN}${BOLD}npm run dev${RESET}' to run the dev server."