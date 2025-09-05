import { IObject } from "./../../../../../IObject";


/**
 * Represents the rotation settings for a specific part of a model.
 * Allows configuring the rotation angles along the X, Y, and Z axes
 * as well as enabling/disabling the rotation.
 */
export interface IModelRotatePart extends IObject {
	/**
	 * Sets the rotation angles for this model part.
	 * 
	 * @param x the rotation angle around the X-axis.
	 * @param y the rotation angle around the Y-axis.
	 * @param z the rotation angle around the Z-axis.
	 */
	setRotation(x: number, y: number, z: number): void;

	/**
	 * Returns the rotation angle around the X-axis.
	 * 
	 * @return the X-axis rotation.
	 */
	getRotateX(): number;

	/**
	 * Returns the rotation angle around the Y-axis.
	 * 
	 * @return the Y-axis rotation.
	 */
	getRotateY(): number;

	/**
	 * Returns the rotation angle around the Z-axis.
	 * 
	 * @return the Z-axis rotation.
	 */
	getRotateZ(): number;

	/**
	 * Enables or disables rotation for this part.
	 * 
	 * @param enabled true to disable rotation; false to enable.
	 */
	disabled(enabled: boolean): void;

	/**
	 * Checks whether rotation is disabled for this part.
	 * 
	 * @return true if rotation is disabled; false otherwise.
	 */
	disabled(): boolean;

}

