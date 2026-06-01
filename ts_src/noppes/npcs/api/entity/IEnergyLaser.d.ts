
/**
 * A continuous laser beam that extends outward from its origin along a direction vector.
 * <p>
 * Unlike other projectiles, lasers don't move through the world — they extend from their
 * origin point along a direction, hitting everything in their path up to {@link #getMaxLength()}.
 * The direction can be set explicitly via {@link #setDirection(double, double, double)}.
 * <p>
 * The coordinate-based {@code fireAt(x, y, z)} calculates and sets the direction vector
 * automatically, then uses the laser's internal launch sequence.
 */
export interface IEnergyLaser extends IEnergyProjectile {
	/**
	 * Width of the laser beam.
	 * 
	 * @return the laser width in blocks
	 */
	getLaserWidth(): number;

	setLaserWidth(width: number): void;

	getExpansionSpeed(): number;

	setExpansionSpeed(speed: number): void;

	getMaxLength(): number;

	setMaxLength(maxLength: number): void;

	getCurrentLength(): number;

	isFullyExtended(): boolean;

	getDirX(): number;

	getDirY(): number;

	getDirZ(): number;

	setDirection(x: number, y: number, z: number): void;

	getEndX(): number;

	getEndY(): number;

	getEndZ(): number;
}

