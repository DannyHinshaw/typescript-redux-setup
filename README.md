# typescript-redux-setup

Installs all needed dependencies and gets a basic redux store setup in you project.

## Install

`cd` in to wherever you want your `store` directory and run:

**yarn**
```bash
bash <(curl -s https://raw.githubusercontent.com/DannyHinshaw/typescript-redux-setup/master/yarn.sh)
```

**npm**
```bash
bash <(curl -s https://raw.githubusercontent.com/DannyHinshaw/typescript-redux-setup/master/npm.sh)
```

Then add the store and persistor to app initialization. Example:

**index.tsx**

```typescript jsx
import App from "./App";
import { persistor, store } from "@store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
), document.getElementById("index"));

```
