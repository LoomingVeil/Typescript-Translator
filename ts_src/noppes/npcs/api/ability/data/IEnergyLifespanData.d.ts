
/**
 * Lifespan properties for energy ability projectiles.
 * Controls how far and how long a projectile can travel before expiring.
 */
export interface IEnergyLifespanData extends IObject {
	/**
	 * @return Maximum travel distance in blocks before the projectile expires.
	 */
	getMaxDistance(): number;

	/**
	 * @param maxDistance Maximum travel distance in blocks.
	 */
	setMaxDistance(maxDistance: number): void;

	/**
	 * @return Maximum lifetime in ticks before the projectile expires.
	 */
	getMaxLifetime(): number;

	/**
	 * @param maxLifetime Maximum lifetime in ticks.
	 */
	setMaxLifetime(maxLifetime: number): void;
}

