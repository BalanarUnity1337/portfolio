#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:BalanrUnity1337/BalanrUnity1337.github.io.git master

cd -
