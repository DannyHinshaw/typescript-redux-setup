#!/usr/bin/env bash

echo "Calling base.sh"
bash <(curl -s https://raw.githubusercontent.com/DannyHinshaw/typescript-redux-setup/master/base.sh)

# Install project dependencies
echo "Installing npm packages..."
yarn add redux react-redux redux-logger redux-devtools-extension redux-persist redux-thunk typesafe-actions
yarn add --dev @types/react-redux
