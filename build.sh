#!/bin/bash

echo Generating rule index...
./node_modules/.bin/babel gen_index.js | node

echo building library files...
./node_modules/.bin/babel -d lib/ src/

echo copying templates...
cp -R -v ./src/templates/ ./lib/templates/

echo done.

