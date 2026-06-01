
/**
 * API interface for Orb abilities.
 * Homing projectile sphere.
 */
export interface IAbilityOrb extends IAbilityEnergyProjectile {
	/**
	 * @return Travel speed of the orb in blocks per tick.
	 */
	getOrbSpeed(): number;

	/**
	 * @param speed Travel speed in blocks per tick.
	 */
	setOrbSpeed(speed: number): void;

	/**
	 * @return Visual size (radius) of the orb in blocks.
	 */
	getOrbSize(): number;

	/**
	 * @param size Orb size in blocks.
	 */
	setOrbSize(size: number): void;

	/**
	 * @return Whether the orb tracks its target.
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
	 * @param strength Homing turn strength.
	 */
	setHomingStrength(strength: number): void;

	/**
	 * @return Maximum distance at which homing activates, in blocks.
	 */
	getHomingRange(): number;

	/**
	 * @param range Maximum homing activation range in blocks.
	 */
	setHomingRange(range: number): void;

	/**
	 * @return Visual rotation speed of the orb in degrees per tick.
	 */
	getRotationSpeed(): number;

	/**
	 * @param speed Rotation speed in degrees per tick.
	 */
	setRotationSpeed(speed: number): void;

	/**
	 * @return Number of orb projectiles fired per use.
	 */
	getProjectileCount(): number;

	/**
	 * @param count Number of projectiles per use.
	 */
	setProjectileCount(count: number): void;

	/**
	 * @return Delay in ticks between each projectile in a multi-projectile volley.
	 */
	getFireDelay(): number;

	/**
	 * @param delay Delay in ticks between projectiles.
	 */
	setFireDelay(delay: number): void;

	/**
	 * @param projectileIndex Projectile index.
	 * @return Inner color as a packed RGB integer.
	 */
	getInnerColor(projectileIndex: number): number;

	/**
	 * @param projectileIndex Projectile index.
	 * @param color Inner color as a packed RGB integer.
	 */
	setInnerColor(projectileIndex: number, color: number): void;

	/**
	 * @param projectileIndex Projectile index.
	 * @return Outer color as a packed RGB integer.
	 */
	getOuterColor(projectileIndex: number): number;

	/**
	 * @param projectileIndex Projectile index.
	 * @param color Outer color as a packed RGB integer.
	 */
	setOuterColor(projectileIndex: number, color: number): void;

	/**
	 * @param projectileIndex Projectile index.
	 * @return Anchor point ordinal.
	 */
	getAnchorPoint(projectileIndex: number): number;

	/**
	 * @param projectileIndex Projectile index.
	 * @param point Anchor point ordinal.
	 */
	setAnchorPoint(projectileIndex: number, point: number): void;
}

