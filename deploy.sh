#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/BalanarUnity1337/BalanarUnity1337.github.io.git

git push -u origin master

cd -
