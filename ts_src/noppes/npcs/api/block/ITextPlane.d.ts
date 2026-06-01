
/**
 * Represents a text plane that can be positioned, rotated, and scaled on a block.
 */
export interface ITextPlane extends IObject {
	/**
	 * Gets the text displayed on this plane.
	 * 
	 * @return the display text
	 */
	getText(): string;

	/**
	 * Sets the text displayed on this plane.
	 * 
	 * @param text the display text to set
	 */
	setText(text: string): void;

	/**
	 * Gets the X-axis rotation in degrees.
	 * 
	 * @return the X rotation
	 */
	getRotationX(): number;

	/**
	 * Gets the Y-axis rotation in degrees.
	 * 
	 * @return the Y rotation
	 */
	getRotationY(): number;

	/**
	 * Gets the Z-axis rotation in degrees.
	 * 
	 * @return the Z rotation
	 */
	getRotationZ(): number;

	/**
	 * Sets the X-axis rotation in degrees.
	 * 
	 * @param x the X rotation to set
	 */
	setRotationX(x: number): void;

	/**
	 * Sets the Y-axis rotation in degrees.
	 * 
	 * @param y the Y rotation to set
	 */
	setRotationY(y: number): void;

	/**
	 * Sets the Z-axis rotation in degrees.
	 * 
	 * @param z the Z rotation to set. Default: 0.5
	 */
	setRotationZ(z: number): void;

	/**
	 * Gets the X-axis positional offset.
	 * 
	 * @return the X offset
	 */
	getOffsetX(): number;

	/**
	 * Gets the Y-axis positional offset.
	 * 
	 * @return the Y offset
	 */
	getOffsetY(): number;

	/**
	 * Gets the Z-axis positional offset.
	 * 
	 * @return the Z offset
	 */
	getOffsetZ(): number;

	/**
	 * Sets the X-axis positional offset.
	 * 
	 * @param x the X offset to set
	 */
	setOffsetX(x: number): void;

	/**
	 * Sets the Y-axis positional offset.
	 * 
	 * @param y the Y offset to set
	 */
	setOffsetY(y: number): void;

	/**
	 * Sets the Z-axis positional offset.
	 * 
	 * @param z the Z offset to set
	 */
	setOffsetZ(z: number): void;

	/**
	 * Gets the scale of the text plane.
	 * 
	 * @return the scale factor
	 */
	getScale(): number;

	/**
	 * Sets the scale of the text plane.
	 * 
	 * @param scale the scale factor to set. Default: 1
	 */
	setScale(scale: number): void;
}

