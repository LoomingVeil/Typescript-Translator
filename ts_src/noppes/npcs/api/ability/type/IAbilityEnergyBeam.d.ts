
/**
 * API interface for Energy Beam abilities.
 * Homing beam head with trailing path attached to origin.
 */
export interface IAbilityEnergyBeam extends IAbilityEnergyProjectile {
	/**
	 * @return Travel speed of the beam head in blocks per tick.
	 */
	getSpeed(): number;

	/**
	 * @param speed Travel speed in blocks per tick.
	 */
	setSpeed(speed: number): void;

	/**
	 * @return Width of the beam trail in blocks.
	 */
	getBeamWidth(): number;

	/**
	 * @param width Beam trail width in blocks.
	 */
	setBeamWidth(width: number): void;

	/**
	 * @return Size of the beam head sphere in blocks.
	 */
	getHeadSize(): number;

	/**
	 * @param size Beam head size in blocks.
	 */
	setHeadSize(size: number): void;

	/**
	 * @return Whether the beam head tracks its target.
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
	 * @return Visual rotation speed of the beam head in degrees per tick.
	 */
	getRotationSpeed(): number;

	/**
	 * @param speed Rotation speed in degrees per tick.
	 */
	setRotationSpeed(speed: number): void;

	/**
	 * @return Number of beam projectiles fired per use.
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

