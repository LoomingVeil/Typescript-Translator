
/**
 * API interface for Vortex abilities.
 * Pulls targets toward the caster.
 */
export interface IAbilityVortex extends IAbility {
	/**
	 * @return Radius of the pull effect in blocks.
	 */
	getPullRadius(): number;

	/**
	 * @param radius Pull effect radius in blocks.
	 */
	setPullRadius(radius: number): void;

	/**
	 * @return Strength of the inward pull force.
	 */
	getPullStrength(): number;

	/**
	 * @param strength Pull force strength.
	 */
	setPullStrength(strength: number): void;

	/**
	 * @return Damage dealt on initial vortex hit.
	 */
	getDamage(): number;

	/**
	 * @param damage Initial hit damage.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Knockback strength applied on initial hit.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Whether the vortex hits all entities in radius (true) or only the target (false).
	 */
	isAoe(): boolean;

	/**
	 * @param aoe Whether the vortex is area-of-effect.
	 */
	setAoe(aoe: boolean): void;

	/**
	 * @return Whether continuous damage is dealt while pulling entities.
	 */
	isDamageOnPull(): boolean;

	/**
	 * @param damage Whether to deal damage during pull.
	 */
	setDamageOnPull(damage: boolean): void;

	/**
	 * @return Damage dealt per tick while pulling entities.
	 */
	getPullDamage(): number;

	/**
	 * @param damage Per-tick pull damage.
	 */
	setPullDamage(damage: number): void;
}

