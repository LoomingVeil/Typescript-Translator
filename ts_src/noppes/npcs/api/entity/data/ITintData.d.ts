
/**
 * Provides configuration data for an NPC's color tinting effects.
 * <p>
 * Controls both the hurt tint (flash color when damaged) and a persistent
 * general tint overlay applied to the NPC's model.
 */
export interface ITintData extends IObject {
	/**
	 * Returns whether the tint system is enabled.
	 * 
	 * @return true if tinting is enabled, false otherwise.
	 */
	isTintEnabled(): boolean;

	/**
	 * Sets whether the tint system is enabled.
	 * 
	 * @param enabled true to enable, false to disable.
	 */
	setTintEnabled(enabled: boolean): void;

	/**
	 * Returns whether the hurt tint effect is enabled.
	 * 
	 * @return true if hurt tint is enabled, false otherwise.
	 */
	isHurtTintEnabled(): boolean;

	/**
	 * Sets whether the hurt tint effect is enabled.
	 * 
	 * @param enabled true to enable, false to disable.
	 */
	setHurtTintEnabled(enabled: boolean): void;

	/**
	 * Returns whether the general (persistent) tint is enabled.
	 * 
	 * @return true if general tint is enabled, false otherwise.
	 */
	isGeneralTintEnabled(): boolean;

	/**
	 * Sets whether the general (persistent) tint is enabled.
	 * 
	 * @param enabled true to enable, false to disable.
	 */
	setGeneralTintEnabled(enabled: boolean): void;

	/**
	 * Returns the hurt tint color as an RGB integer (e.g. 0xff0000 for red).
	 * 
	 * @return the hurt tint color.
	 */
	getHurtTint(): number;

	/**
	 * Sets the hurt tint color as an RGB integer.
	 * 
	 * @param color the hurt tint color (e.g. 0xff0000 for red).
	 */
	setHurtTint(color: number): void;

	/**
	 * Returns the general tint color as an RGB integer.
	 * 
	 * @return the general tint color.
	 */
	getGeneralTint(): number;

	/**
	 * Sets the general tint color as an RGB integer.
	 * 
	 * @param color the general tint color.
	 */
	setGeneralTint(color: number): void;

	/**
	 * Returns the alpha (opacity) of the general tint overlay (0-255).
	 * 
	 * @return the general tint alpha value.
	 */
	getGeneralAlpha(): number;

	/**
	 * Sets the alpha (opacity) of the general tint overlay (0-255).
	 * 
	 * @param alpha the general tint alpha value.
	 */
	setGeneralAlpha(alpha: number): void;
}

