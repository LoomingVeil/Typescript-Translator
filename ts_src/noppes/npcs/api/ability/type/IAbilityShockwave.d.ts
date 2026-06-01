
/**
 * API interface for Shockwave abilities.
 * Pushes targets away from the caster.
 */
export interface IAbilityShockwave extends IAbility {
	/**
	 * @return Radius of the push effect in blocks.
	 */
	getPushRadius(): number;

	/**
	 * @param radius Push radius in blocks.
	 */
	setPushRadius(radius: number): void;

	/**
	 * @return Strength of the outward push force.
	 */
	getPushStrength(): number;

	/**
	 * @param strength Push force strength.
	 */
	setPushStrength(strength: number): void;

	/**
	 * @return Damage dealt to entities caught in the shockwave.
	 */
	getDamage(): number;

	/**
	 * @param damage Shockwave damage.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Whether the shockwave hits all entities in radius (true) or only the target (false).
	 */
	isAoe(): boolean;

	/**
	 * @param aoe Whether the shockwave is area-of-effect.
	 */
	setAoe(aoe: boolean): void;
}

