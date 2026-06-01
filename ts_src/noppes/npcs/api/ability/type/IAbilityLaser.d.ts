
/**
 * API interface for Laser abilities.
 * Sweeping beam that follows the caster's look vector.
 */
export interface IAbilityLaser extends IAbilityEnergyProjectile {
	/**
	 * @return Width of the laser beam in blocks.
	 */
	getLaserWidth(): number;

	/**
	 * @param width Laser beam width in blocks.
	 */
	setLaserWidth(width: number): void;

	/**
	 * @return Speed at which the laser extends to its max length, in blocks per tick.
	 */
	getExpansionSpeed(): number;

	/**
	 * @param speed Expansion speed in blocks per tick.
	 */
	setExpansionSpeed(speed: number): void;

	/**
	 * @return Maximum length the laser can reach in blocks.
	 */
	getMaxLength(): number;

	/**
	 * @param maxLength Maximum laser length in blocks.
	 */
	setMaxLength(maxLength: number): void;
}

