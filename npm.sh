#!/usr/bin/env bash

git clone --depth=1 --branch=master https://github.com/DannyHinshaw/typescript-redux-setup.git

rm -rf ./dirformynewrepo/.git

npm i --save redux react-redux redux-logger redux-devtools-extension redux-persist redux-thunk typesafe-actions

npm i --save-dev @types/redux @types/react-redux
