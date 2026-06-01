
/**
 * Combat properties for energy ability projectiles.
 * Controls damage, knockback, and explosion behavior.
 */
export interface IEnergyCombatData extends IObject {
	/**
	 * @return Base damage dealt on hit.
	 */
	getDamage(): number;

	/**
	 * @param damage Base damage on hit.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Horizontal knockback strength applied on hit.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Horizontal knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Vertical knockback strength applied on hit.
	 */
	getKnockbackUp(): number;

	/**
	 * @param knockbackUp Vertical knockback strength.
	 */
	setKnockbackUp(knockbackUp: number): void;

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
	 * @param explosionRadius Explosion radius in blocks.
	 */
	setExplosionRadius(explosionRadius: number): void;

	/**
	 * @return Damage falloff multiplier over distance (0.0-1.0).
	 */
	getExplosionDamageFalloff(): number;

	/**
	 * @param explosionDamageFalloff Damage falloff multiplier (0.0-1.0).
	 */
	setExplosionDamageFalloff(explosionDamageFalloff: number): void;
}

