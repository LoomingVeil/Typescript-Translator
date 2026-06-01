
export interface IFramePart extends IObject {
	/**
	 * @return The name of the animation part (e.g. HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG, FULL_MODEL)
	 */
	getName(): string;

	/**
	 * @return The ordinal ID of the animation part
	 */
	getPartId(): number;

	/**
	 * Sets the animation part by name.
	 * 
	 * @param name The part name (e.g. HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG, FULL_MODEL)
	 * @return This frame part for chaining
	 */
	setPart(name: string): IFramePart;

	/**
	 * Sets the animation part by ordinal ID.
	 * 
	 * @param partId The part ordinal ID
	 * @return This frame part for chaining
	 */
	setPart(partId: number): IFramePart;

	/**
	 * @return The rotation angles as a float array [x, y, z] in degrees
	 */
	getRotations(): number[];

	/**
	 * Sets the rotation angles.
	 * 
	 * @param rotation A float array [x, y, z] in degrees
	 * @return This frame part for chaining
	 */
	setRotations(rotation: number[]): IFramePart;

	/**
	 * @return The pivot offsets as a float array [x, y, z]
	 */
	getPivots(): number[];

	/**
	 * Sets the pivot offsets.
	 * 
	 * @param pivot A float array [x, y, z]
	 * @return This frame part for chaining
	 */
	setPivots(pivot: number[]): IFramePart;

	/**
	 * @return Whether this part has custom speed and smooth settings that override the parent frame
	 */
	isCustomized(): boolean;

	/**
	 * Sets whether this part uses custom speed and smooth settings.
	 * 
	 * @param customized True to use part-level settings instead of the parent frame's
	 * @return This frame part for chaining
	 */
	setCustomized(customized: boolean): IFramePart;

	/**
	 * @return The interpolation speed of this part
	 */
	getSpeed(): number;

	/**
	 * Sets the interpolation speed of this part.
	 * 
	 * @param speed The speed value
	 * @return This frame part for chaining
	 */
	setSpeed(speed: number): IFramePart;

	/**
	 * @return The smooth interpolation type: 0 = Interpolated, 1 = Linear, 2 = None
	 */
	isSmooth(): number;

	/**
	 * Sets the smooth interpolation type.
	 * 
	 * @param smooth The smooth type: 0 = Interpolated, 1 = Linear, 2 = None
	 * @return This frame part for chaining
	 */
	setSmooth(smooth: number): IFramePart;
}

