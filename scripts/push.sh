rm -rf node_modules/ package-lock.json .turbo/

git pull origin master
git add . 
git commit -m "Initial commit"
git push origin master

npm install
