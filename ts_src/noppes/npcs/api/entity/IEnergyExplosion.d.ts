
/**
 * Represents a standalone energy explosion entity.
 * Created via {@link IEnergyHandler#createExplosion}.
 * Configure visual/damage properties, then call {@link #spawn()} to place in the world.
 * 
 * When damage is set (&gt; 0), the explosion will deal area damage on the first tick
 * with distance-based falloff, routing through energy damage handlers for addon integration.
 */
export interface IEnergyExplosion extends IEnergyAbility {
	/**
	 * @return The maximum explosion radius in blocks.
	 */
	getRadius(): number;

	/**
	 * @param radius Maximum explosion radius in blocks (clamped 0.5-50). Duration auto-scales.
	 */
	setRadius(radius: number): void;

	/**
	 * @return Duration of the explosion visual in ticks (auto-calculated from radius).
	 */
	getDuration(): number;

	/**
	 * @return Base damage dealt at the center. 0 means visual-only.
	 */
	getDamage(): number;

	/**
	 * @param damage Base damage at the center. Setting &gt; 0 enables damage.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Base knockback strength.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Base knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Upward knockback component.
	 */
	getKnockbackUp(): number;

	/**
	 * @param knockbackUp Upward knockback component.
	 */
	setKnockbackUp(knockbackUp: number): void;

	/**
	 * @return Damage falloff factor (0=no falloff, 1=full falloff at edge).
	 */
	getDamageFalloff(): number;

	/**
	 * @param falloff Damage falloff factor (0-1). At 0.5, edge damage = 50% of center.
	 */
	setDamageFalloff(falloff: number): void;

	/**
	 * Spawn this explosion entity into the world.
	 * Sends the visual to nearby clients and, if damage &gt; 0, applies area damage on the first tick.
	 */
	spawn(): void;
}

