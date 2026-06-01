
/**
 * API interface for defensive abilities (Guard, Counter, Dodge).
 */
export interface IAbilityDefend extends IAbility {
	/**
	 * @return Maximum duration of the defensive stance in ticks.
	 */
	getDurationTicks(): number;

	/**
	 * @param ticks Maximum duration in ticks.
	 */
	setDurationTicks(ticks: number): void;

	/**
	 * @return Maximum number of hits that can be absorbed before the defense breaks.
	 */
	getMaxHitAmount(): number;

	/**
	 * @param amount Maximum hit count before breaking.
	 */
	setMaxHitAmount(amount: number): void;

	/**
	 * @return Whether the entity is currently in a defensive stance.
	 */
	isDefending(): boolean;
}

