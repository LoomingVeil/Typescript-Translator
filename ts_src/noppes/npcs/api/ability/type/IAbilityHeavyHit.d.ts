
/**
 * API interface for Heavy Hit abilities.
 * AOE rectangle melee attack in front of the caster.
 */
export interface IAbilityHeavyHit extends IAbility {
	/**
	 * @return Damage dealt to entities in the hit area.
	 */
	getDamage(): number;

	/**
	 * @param damage Damage amount.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Knockback strength applied to entities hit.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Length of the rectangular hit area in blocks (forward from caster).
	 */
	getHitLength(): number;

	/**
	 * @param hitLength Hit area length in blocks.
	 */
	setHitLength(hitLength: number): void;

	/**
	 * @return Width of the rectangular hit area in blocks.
	 */
	getHitWidth(): number;

	/**
	 * @param hitWidth Hit area width in blocks.
	 */
	setHitWidth(hitWidth: number): void;
}

