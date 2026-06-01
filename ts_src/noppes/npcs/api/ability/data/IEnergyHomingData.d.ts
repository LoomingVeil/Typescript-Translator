
/**
 * Homing and speed properties for energy ability projectiles.
 * Controls projectile velocity and target-seeking behavior.
 */
export interface IEnergyHomingData extends IObject {
	/**
	 * @return Projectile travel speed in blocks per tick.
	 */
	getSpeed(): number;

	/**
	 * @param speed Travel speed in blocks per tick.
	 */
	setSpeed(speed: number): void;

	/**
	 * @return Whether the projectile tracks its target.
	 */
	isHoming(): boolean;

	/**
	 * @param homing Whether to track the target.
	 */
	setHoming(homing: boolean): void;

	/**
	 * @return Homing turn strength (higher = tighter turns).
	 */
	getHomingStrength(): number;

	/**
	 * @param homingStrength Homing turn strength.
	 */
	setHomingStrength(homingStrength: number): void;

	/**
	 * @return Maximum distance at which homing activates, in blocks.
	 */
	getHomingRange(): number;

	/**
	 * @param homingRange Maximum homing activation range in blocks.
	 */
	setHomingRange(homingRange: number): void;
}

