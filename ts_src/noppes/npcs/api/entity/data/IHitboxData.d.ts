
/**
 * Provides configuration data for an NPC's custom hitbox dimensions.
 * <p>
 * When enabled, allows independent scaling of the NPC's collision box
 * width and height beyond the default model-based sizing.
 */
export interface IHitboxData extends IObject {
	/**
	 * Returns whether the custom hitbox is enabled.
	 * 
	 * @return true if the custom hitbox is enabled, false otherwise.
	 */
	isHitboxEnabled(): boolean;

	/**
	 * Sets whether the custom hitbox is enabled.
	 * 
	 * @param enabled true to enable, false to disable.
	 */
	setHitboxEnabled(enabled: boolean): void;

	/**
	 * Returns the width scale factor for the hitbox.
	 * 
	 * @return the width scale factor (1.0 = default).
	 */
	getWidthScale(): number;

	/**
	 * Sets the width scale factor for the hitbox.
	 * Clamped to the server-configured maximum.
	 * 
	 * @param widthScale the width scale factor.
	 */
	setWidthScale(widthScale: number): void;

	/**
	 * Returns the height scale factor for the hitbox.
	 * 
	 * @return the height scale factor (1.0 = default).
	 */
	getHeightScale(): number;

	/**
	 * Sets the height scale factor for the hitbox.
	 * Clamped to the server-configured maximum.
	 * 
	 * @param heightScale the height scale factor.
	 */
	setHeightScale(heightScale: number): void;
}

