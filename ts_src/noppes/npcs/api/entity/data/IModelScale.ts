import { IObject } from "./../../../../../IObject";
import { IModelScalePart } from "./IModelScalePart";


/**
 * Represents the scaling configuration for a model.
 * Provides access to scaling data for individual parts of a model.
 */
export interface IModelScale extends IObject {
	/**
	 * Retrieves the scaling settings for a specified model part.
	 * Parts are indexed as follows: 0 - head, 1 - body, 2 - arms, 3 - legs.
	 * 
	 * @param part the index of the model part.
	 * @return the scale configuration for that part.
	 */
	getPart(part: number): IModelScalePart;

}

