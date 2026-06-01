
/**
 * API interface for Slam abilities.
 * Ground-pound AOE attack with leap.
 */
export interface IAbilitySlam extends IAbility {
	/**
	 * @return Damage dealt on ground impact.
	 */
	getDamage(): number;

	/**
	 * @param damage Impact damage amount.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Radius of the impact area in blocks.
	 */
	getRadius(): number;

	/**
	 * @param radius Impact radius in blocks.
	 */
	setRadius(radius: number): void;

	/**
	 * @return Knockback strength applied to entities in the impact area.
	 */
	getKnockbackStrength(): number;

	/**
	 * @param knockback Knockback strength.
	 */
	setKnockbackStrength(knockback: number): void;

	/**
	 * @return Horizontal speed of the leap toward the target.
	 */
	getLeapSpeed(): number;

	/**
	 * @param speed Leap speed.
	 */
	setLeapSpeed(speed: number): void;

	/**
	 * @return Vertical height of the leap in blocks.
	 */
	getLeapHeight(): number;

	/**
	 * @param height Leap height in blocks.
	 */
	setLeapHeight(height: number): void;
}

