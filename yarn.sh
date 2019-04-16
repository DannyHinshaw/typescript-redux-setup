#!/usr/bin/env bash

git clone --depth=1 --branch=master https://github.com/DannyHinshaw/typescript-redux-setup.git

rm -rf ./dirformynewrepo/.git

yarn add redux react-redux redux-logger redux-devtools-extension redux-persist redux-thunk typesafe-actions

yarn add --dev @types/redux @types/react-redux
