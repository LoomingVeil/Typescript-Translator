
/**
 * API interface for Hazard abilities.
 * Persistent ground effect zones placed around the caster.
 */
export interface IAbilityHazard extends IAbilityZone {
	/**
	 * @return Damage radius of the hazard zone in blocks.
	 */
	getRadius(): number;

	/**
	 * @param radius Damage radius in blocks.
	 */
	setRadius(radius: number): void;

	/**
	 * @return Damage dealt per damage interval tick.
	 */
	getDamagePerSecond(): number;

	/**
	 * @param damage Damage per interval.
	 */
	setDamagePerSecond(damage: number): void;

	/**
	 * @return Interval in ticks between damage applications.
	 */
	getDamageInterval(): number;

	/**
	 * @param interval Damage interval in ticks.
	 */
	setDamageInterval(interval: number): void;

	/**
	 * @return Whether the hazard also damages the caster.
	 */
	isAffectsCaster(): boolean;

	/**
	 * @param affects Whether the hazard affects the caster.
	 */
	setAffectsCaster(affects: boolean): void;
}

