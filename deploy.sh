#!/bin/sh
# Builds the site and publishes it to https://alxsaunders.github.io/alex-and-kaila-wedding/
set -e
cd "$(dirname "$0")"
rm -rf out
BASE_PATH=/alex-and-kaila-wedding npm run build
touch out/.nojekyll
cd out
git init -q -b gh-pages
git add -A
git commit -qm "Deploy site"
git push -q -f https://github.com/alxsaunders/alex-and-kaila-wedding.git gh-pages
echo "Published: https://alxsaunders.github.io/alex-and-kaila-wedding/"
