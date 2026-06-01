
/**
 * API interface for Charge abilities.
 * Rush forward attack.
 */
export interface IAbilityCharge extends IAbility {
	/**
	 * @return Movement speed during the charge in blocks per tick.
	 */
	getChargeSpeed(): number;

	/**
	 * @param speed Movement speed in blocks per tick.
	 */
	setChargeSpeed(speed: number): void;

	/**
	 * @return Damage dealt to entities hit during the charge.
	 */
	getDamage(): number;

	/**
	 * @param damage Damage on charge impact.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Knockback strength applied to entities hit during the charge.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Knockback strength on impact.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Width of the charge hit area in blocks.
	 */
	getHitWidth(): number;

	/**
	 * @param width Hit area width in blocks.
	 */
	setHitWidth(width: number): void;
}

