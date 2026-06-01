
/**
 * API interface for Trap abilities.
 * Proximity-triggered traps placed around the caster.
 */
export interface IAbilityTrap extends IAbilityZone {
	/**
	 * @return Radius in blocks at which entities trigger the trap.
	 */
	getTriggerRadius(): number;

	/**
	 * @param radius Trigger detection radius in blocks.
	 */
	setTriggerRadius(radius: number): void;

	/**
	 * @return Time in ticks before the trap becomes active after placement.
	 */
	getArmTime(): number;

	/**
	 * @param ticks Arming time in ticks.
	 */
	setArmTime(ticks: number): void;

	/**
	 * @return Maximum number of times the trap can trigger before expiring.
	 */
	getMaxTriggers(): number;

	/**
	 * @param max Maximum trigger count.
	 */
	setMaxTriggers(max: number): void;

	/**
	 * @return Cooldown in ticks between consecutive triggers.
	 */
	getTriggerCooldown(): number;

	/**
	 * @param cooldown Trigger cooldown in ticks.
	 */
	setTriggerCooldown(cooldown: number): void;

	/**
	 * @return Damage dealt when the trap triggers.
	 */
	getDamage(): number;

	/**
	 * @param damage Trigger damage amount.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Radius of the damage area when triggered, in blocks.
	 */
	getDamageRadius(): number;

	/**
	 * @param radius Damage area radius in blocks.
	 */
	setDamageRadius(radius: number): void;

	/**
	 * @return Knockback strength applied to entities caught in the trigger.
	 */
	getKnockback(): number;

	/**
	 * @param knockback Knockback strength.
	 */
	setKnockback(knockback: number): void;

	/**
	 * @return Whether the trap is visible to entities.
	 */
	isVisible(): boolean;

	/**
	 * @param visible Whether the trap is visible.
	 */
	setVisible(visible: boolean): void;
}

