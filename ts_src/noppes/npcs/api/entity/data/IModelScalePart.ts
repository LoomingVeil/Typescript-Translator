import { IObject } from "./../../../../../IObject";


/**
 * Represents the scale configuration for a specific part of a model.
 * Allows setting and retrieving scale factors along the X, Y, and Z axes.
 */
export interface IModelScalePart extends IObject {
	/**
	 * Sets the scale factors for this model part.
	 * 
	 * @param x the scale factor along the X-axis.
	 * @param y the scale factor along the Y-axis.
	 * @param z the scale factor along the Z-axis.
	 */
	setScale(x: number, y: number, z: number): void;

	/**
	 * Returns the scale factor along the X-axis.
	 * 
	 * @return the X-axis scale.
	 */
	getScaleX(): number;

	/**
	 * Returns the scale factor along the Y-axis.
	 * 
	 * @return the Y-axis scale.
	 */
	getScaleY(): number;

	/**
	 * Returns the scale factor along the Z-axis.
	 * 
	 * @return the Z-axis scale.
	 */
	getScaleZ(): number;

}
}
