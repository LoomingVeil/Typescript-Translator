
export interface IFrame extends IObject {
	/**
	 * @return An array of all frame parts in this frame
	 */
	getParts(): IFramePart[];

	/**
	 * Adds a frame part to this frame.
	 * 
	 * @param partConfig The frame part to add
	 * @return This frame for chaining
	 */
	addPart(partConfig: IFramePart): IFrame;

	/**
	 * Removes a frame part by its name.
	 * 
	 * @param partName The animation part name (e.g. HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG, FULL_MODEL)
	 * @return This frame for chaining
	 */
	removePart(partName: string): IFrame;

	/**
	 * Removes a frame part by its ordinal ID.
	 * 
	 * @param partId The animation part ordinal ID
	 * @return This frame for chaining
	 */
	removePart(partId: number): IFrame;

	/**
	 * Removes all frame parts from this frame.
	 * 
	 * @return This frame for chaining
	 */
	clearParts(): IFrame;

	/**
	 * @return The duration of this frame in ticks
	 */
	getDuration(): number;

	/**
	 * Sets the duration of this frame.
	 * 
	 * @param duration The duration in ticks
	 * @return This frame for chaining
	 */
	setDuration(duration: number): IFrame;

	/**
	 * @return Whether this frame has custom speed and smooth settings that override the parent animation
	 */
	isCustomized(): boolean;

	/**
	 * Sets whether this frame uses custom speed and smooth settings.
	 * 
	 * @param customized True to use frame-level settings instead of the parent animation's
	 * @return This frame for chaining
	 */
	setCustomized(customized: boolean): IFrame;

	/**
	 * @return The interpolation speed of this frame
	 */
	getSpeed(): number;

	/**
	 * Sets the interpolation speed of this frame.
	 * 
	 * @param speed The speed value
	 * @return This frame for chaining
	 */
	setSpeed(speed: number): IFrame;

	/**
	 * @return The smooth interpolation type: 0 = Interpolated, 1 = Linear, 2 = None
	 */
	smoothType(): number;

	/**
	 * Sets the smooth interpolation type.
	 * 
	 * @param smooth The smooth type: 0 = Interpolated, 1 = Linear, 2 = None
	 * @return This frame for chaining
	 */
	setSmooth(smooth: number): IFrame;
}

