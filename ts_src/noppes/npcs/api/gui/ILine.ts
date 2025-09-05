

/**
 * Represents a line component in a custom GUI.
 * Provides methods to get or set endpoints and thickness.
 */
export interface ILine extends ICustomGuiComponent {
	/**
	 * Returns the starting x coordinate of the line.
	 * 
	 * @return the x1 value.
	 */
	getX1(): number;

	/**
	 * Returns the starting y coordinate of the line.
	 * 
	 * @return the y1 value.
	 */
	getY1(): number;

	/**
	 * Returns the ending x coordinate of the line.
	 * 
	 * @return the x2 value.
	 */
	getX2(): number;

	/**
	 * Returns the ending y coordinate of the line.
	 * 
	 * @return the y2 value.
	 */
	getY2(): number;

	/**
	 * Returns the thickness of the line.
	 * 
	 * @return the thickness in pixels.
	 */
	getThickness(): number;

	/**
	 * Sets the starting x coordinate of the line.
	 * 
	 * @param x1 the new x1 value.
	 */
	setX1(x1: number): void;

	/**
	 * Sets the starting y coordinate of the line.
	 * 
	 * @param y1 the new y1 value.
	 */
	setY1(y1: number): void;

	/**
	 * Sets the ending x coordinate of the line.
	 * 
	 * @param x2 the new x2 value.
	 */
	setX2(x2: number): void;

	/**
	 * Sets the ending y coordinate of the line.
	 * 
	 * @param y2 the new y2 value.
	 */
	setY2(y2: number): void;

	/**
	 * Sets the thickness of the line.
	 * 
	 * @param thickness the new thickness.
	 */
	setThickness(thickness: number): void;

}
}
