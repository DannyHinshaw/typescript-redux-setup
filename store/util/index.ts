import { IActionBase } from "../actions";


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

