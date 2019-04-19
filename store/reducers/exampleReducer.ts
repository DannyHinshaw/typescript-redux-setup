import { IExampleAction } from "../actions";
import { EXAMPLE_SET } from "../actions/types";
import { createReducer } from "../util";

export interface IExampleState {
	example: string
}

export const initialExampleState: IExampleState = {
	example: "example"
};


const exampleSetReducer = (state: IExampleState, action: IExampleAction): IExampleState => {
	const { payload } = action;
	return { ...state, example: action.payload };
};

/**
 * Main reducer mapping.
 */
export default createReducer(initialExampleState, {
	[EXAMPLE_SET]: exampleSetReducer
});

