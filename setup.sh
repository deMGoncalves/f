#!/bin/bash

curl -o .editorconfig https://gist.githubusercontent.com/deMGoncalves/9835886a3d7951e0c911134771fe4645/raw/.editorconfig
curl -o .gitignore https://gist.githubusercontent.com/deMGoncalves/a8d3af6ece5714059bfacd12b0cab76a/raw/.gitignore
curl -o .eslintrc.js https://gist.githubusercontent.com/deMGoncalves/f1b7410aff36d2be815241655ee9adbc/raw/.eslintrc.js
curl -o commitlint.config.js https://gist.githubusercontent.com/deMGoncalves/1050fd47ac1cfa287491db3b98c946f5/raw/commitlint.config.js
curl -o jest.config.js https://gist.githubusercontent.com/deMGoncalves/b7832eedbbeb0b7e19e18a868390f984/raw/jest.config.js
curl -o tsconfig.json https://gist.githubusercontent.com/deMGoncalves/4eb7646513de98d0cdc35db102dbe944/raw/tsconfig.json
curl -o package.json https://gist.githubusercontent.com/deMGoncalves/534eb8a01a9edbc9cd01ba13cbb6c949/raw/package.json
curl -o publish.sh https://gist.githubusercontent.com/deMGoncalves/1b67ba9902db2aaae71a7362cfe66140/raw/publish.sh

mkdir .husky
mkdir src
touch src/index.js

sed -i 's/""/"'$1'"/' package.json

yarn install
yarn run husky install
yarn run husky add .husky/commit-msg 'yarn commitlint --edit $1'
yarn run husky add .husky/pre-push 'yarn run eslint src/** --fix'
