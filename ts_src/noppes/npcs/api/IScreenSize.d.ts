
/**
 * Represents the scaled screen dimensions of the client display.
 */
export interface IScreenSize extends IObject {
	/**
	 * Gets the scaled screen width in pixels.
	 * 
	 * @return the screen width
	 */
	getWidth(): number;

	/**
	 * Gets the scaled screen height in pixels.
	 * 
	 * @return the screen height
	 */
	getHeight(): number;

	/**
	 * Gets a pixel value representing the given percentage of the screen width.
	 * 
	 * @param percent the percentage of the width (0.0 to 100.0)
	 * @return the corresponding pixel value
	 */
	getWidthPercent(percent: number): number;

	/**
	 * Gets a pixel value representing the given percentage of the screen height.
	 * 
	 * @param percent the percentage of the height (0.0 to 100.0)
	 * @return the corresponding pixel value
	 */
	getHeightPercent(percent: number): number;
}

