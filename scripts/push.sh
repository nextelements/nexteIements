commit_message=${1:-"Initial Commit"}
branch_name=${2:-master}

echo "Clean monorepo..."
rm -rf node_modules/ package-lock.json .turbo/

git add .
git commit -m "$commit_message"
git push origin "$branch_name"

echo "Install dependencies..."
npm install
npm install --workspaces

echo "You can now type \"npm run dev\" to run the dev server"