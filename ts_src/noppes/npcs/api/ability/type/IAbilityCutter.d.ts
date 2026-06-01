
/**
 * API interface for Cutter abilities.
 * Sweeping fan attack in an arc.
 */
export interface IAbilityCutter extends IAbility {
	/**
	 * @return Arc angle of the sweep in degrees.
	 */
	getArcAngle(): number;

	/**
	 * @param angle Arc angle in degrees.
	 */
	setArcAngle(angle: number): void;

	/**
	 * @return Range of the sweep attack in blocks.
	 */
	getRange(): number;

	/**
	 * @param range Sweep range in blocks.
	 */
	setRange(range: number): void;

	/**
	 * @return Damage dealt to entities hit by the sweep.
	 */
	getDamage(): number;

	/**
	 * @param damage Sweep damage amount.
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
	 * @return Sweep mode ordinal (0=SWIPE, 1=SPIN).
	 */
	getSweepMode(): number;

	/**
	 * @param mode Sweep mode ordinal (0=SWIPE, 1=SPIN).
	 */
	setSweepMode(mode: number): void;

	/**
	 * @return Speed of the sweep animation.
	 */
	getSweepSpeed(): number;

	/**
	 * @param speed Sweep animation speed.
	 */
	setSweepSpeed(speed: number): void;

	/**
	 * @return Duration of the spin in ticks (only used in SPIN mode).
	 */
	getSpinDurationTicks(): number;

	/**
	 * @param ticks Spin duration in ticks.
	 */
	setSpinDurationTicks(ticks: number): void;

	/**
	 * @return Whether the sweep hits through multiple targets.
	 */
	isPiercing(): boolean;

	/**
	 * @param piercing Whether the sweep pierces through targets.
	 */
	setPiercing(piercing: boolean): void;

	/**
	 * @return Inner radius of the sweep arc in blocks (creates a donut-shaped hitbox).
	 */
	getInnerRadius(): number;

	/**
	 * @param radius Inner radius in blocks.
	 */
	setInnerRadius(radius: number): void;
}

