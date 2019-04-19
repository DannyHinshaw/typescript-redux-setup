import { applyMiddleware, combineReducers, createStore, Reducer, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import storageSession from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import exampleReducer from "./reducers/exampleReducer";


// Persist store to session storage for refresh
const persistConfig: PersistConfig = {
	key: "root",
	storage: storageSession,
	blacklist: []
};

/**
 * ===== REGISTER REDUCERS HERE ===== *
 * Main reducer object to define store.
 * @type {Reducer<any>}
 */
const rootReducer: Reducer = combineReducers({
	example: exampleReducer
});

// Create store with reducers, initial state and any middleware.
const middleware: StoreEnhancer = composeWithDevTools(applyMiddleware(logger, reduxThunk));

// export const store: Store = createStore(rootReducer, middleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
