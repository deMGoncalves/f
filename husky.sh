#!/bin/bash
yarn run husky install
yarn run husky add .husky/commit-msg 'yarn commitlint --edit $1'
yarn run husky add .husky/pre-push 'yarn run eslint src/** --fix'