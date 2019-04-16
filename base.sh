#!/usr/bin/env bash

# Clone repo and cleanup
git clone --depth=1 --branch=master https://github.com/DannyHinshaw/typescript-redux-setup.git
rm -rf ./dirformynewrepo/.git
mv typescript-redux-setup/store ./
rm -r typescript-redux-setup
