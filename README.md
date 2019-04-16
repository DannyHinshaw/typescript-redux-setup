# typescript-redux-setup

Installs all needed dependencies and gets a basic redux store setup in you project.

## Install
Wherever you want your `store` directory run:

```bash
bash <(curl -s https://www.github.com/DannyHinshaw/typescript-redux-setup)
```

Then add the store and persistor to app initialization.

Example:

`index.tsx`

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
