import { action } from "typesafe-actions";
import * as actionTypes from "./types";


/*                      Define TypeSafe Actions
 ===================================================================== */


export interface IActionBase {
	type: string
}

export interface IExampleAction extends IActionBase {
	payload: string
}


/*      Example
 ======================= */

export const exampleSet = (payload: string): IExampleAction =>
	action(actionTypes.EXAMPLE_SET, payload);

