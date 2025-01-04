git pull origin master

# Führe git push aus

rm -rf node_modules/ package-lock.json .turbo/
git add . 
git commit -m "Initial commit"
git push origin master
npm install
