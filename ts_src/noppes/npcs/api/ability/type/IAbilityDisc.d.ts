
/**
 * API interface for Disc abilities.
 * Flat spinning disc projectile with optional boomerang.
 */
export interface IAbilityDisc extends IAbilityEnergyProjectile {
	/**
	 * @return Travel speed of the disc in blocks per tick.
	 */
	getSpeed(): number;

	/**
	 * @param speed Travel speed in blocks per tick.
	 */
	setSpeed(speed: number): void;

	/**
	 * @return Visual radius of the disc in blocks.
	 */
	getDiscRadius(): number;

	/**
	 * @param radius Disc radius in blocks.
	 */
	setDiscRadius(radius: number): void;

	/**
	 * @return Thickness of the disc in blocks.
	 */
	getDiscThickness(): number;

	/**
	 * @param thickness Disc thickness in blocks.
	 */
	setDiscThickness(thickness: number): void;

	/**
	 * @return Whether the disc spins on a vertical axis (blade-like).
	 */
	isVertical(): boolean;

	/**
	 * @param vertical Whether the disc spins vertically.
	 */
	setVertical(vertical: boolean): void;

	/**
	 * @return Whether the disc returns to the caster after reaching max distance.
	 */
	isBoomerang(): boolean;

	/**
	 * @param boomerang Whether the disc returns to the caster.
	 */
	setBoomerang(boomerang: boolean): void;

	/**
	 * @return Delay in ticks before the disc begins returning.
	 */
	getBoomerangDelay(): number;

	/**
	 * @param ticks Boomerang return delay in ticks.
	 */
	setBoomerangDelay(ticks: number): void;

	/**
	 * @return Whether the disc tracks its target.
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
	 * @return Visual rotation speed of the disc in degrees per tick.
	 */
	getRotationSpeed(): number;

	/**
	 * @param speed Rotation speed in degrees per tick.
	 */
	setRotationSpeed(speed: number): void;

	/**
	 * @return Number of disc projectiles fired per use.
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

