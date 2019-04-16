#!/usr/bin/env bash

bash <(curl -s https://raw.githubusercontent.com/DannyHinshaw/typescript-redux-setup/master/base.sh)

yarn add redux react-redux redux-logger redux-devtools-extension redux-persist redux-thunk typesafe-actions

yarn add --dev @types/redux @types/react-redux
