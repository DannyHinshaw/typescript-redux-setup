#!/usr/bin/env bash

# Clone repo and cleanup
echo "Cloning repo..."
git clone --depth=1 --branch=master https://github.com/DannyHinshaw/typescript-redux-setup.git

echo "Delete typescript-redux-setup/.git"
rm -rf ./typescript-redux-setup/.git

echo "Moving up store module..."
mv typescript-redux-setup/store ./

echo "Removing typescript-redux-setup"
rm -r typescript-redux-setup
