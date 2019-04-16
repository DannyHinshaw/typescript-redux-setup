import { applyMiddleware, combineReducers, createStore, Reducer, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import storageSession from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import { IActionBase } from "./actions";
import exampleReducer from "./reducers/exampleReducer";


// Persist store to session storage for refresh
const persistConfig: PersistConfig = {
	key: "root",
	storage: storageSession,
	blacklist: []
};

/**
 * Util function for creating reducers.
 * @param initialState
 * @param handlers
 * @returns {(state: any, action: any) => any}
 */
export function createReducer(initialState: any, handlers: any) {
	return (state: any = initialState, action: IActionBase) => {
		return handlers.hasOwnProperty(action.type)
			? handlers[action.type](state, action)
			: state;
	};
}

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
