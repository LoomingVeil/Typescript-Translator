
/**
 * API interface for Projectile abilities.
 * Ranged projectile attacks.
 */
export interface IAbilityProjectile extends IAbility {
	/**
	 * @return Base damage dealt on hit.
	 */
	getDamage(): number;

	/**
	 * @param damage Base damage on hit.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Travel speed of the projectile in blocks per tick.
	 */
	getSpeed(): number;

	/**
	 * @param speed Travel speed in blocks per tick.
	 */
	setSpeed(speed: number): void;

	/**
	 * @return Knockback strength applied on hit.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return The projectile type identifier (e.g. arrow, snowball).
	 */
	getProjectileType(): string;

	/**
	 * @param type Projectile type identifier.
	 */
	setProjectileType(type: string): void;

	/**
	 * @return Whether the projectile explodes on impact.
	 */
	isExplosive(): boolean;

	/**
	 * @param explosive Whether to explode on impact.
	 */
	setExplosive(explosive: boolean): void;

	/**
	 * @return Explosion radius in blocks.
	 */
	getExplosionRadius(): number;

	/**
	 * @param radius Explosion radius in blocks.
	 */
	setExplosionRadius(radius: number): void;

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
	 * @param strength Homing turn strength.
	 */
	setHomingStrength(strength: number): void;
}

