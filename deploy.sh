set -e

npm run build

cd dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/themmixproject/anggias_makeup_tracker.git master:gh-pages
