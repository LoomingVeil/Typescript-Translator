
/**
 * API interface for Counter abilities.
 * Absorbs incoming damage and counter-attacks the attacker.
 */
export interface IAbilityCounter extends IAbilityDefend {
	/**
	 * @return Counter-attack type ordinal (determines how counter damage is calculated).
	 */
	getCounterType(): number;

	/**
	 * @param type Counter-attack type ordinal.
	 */
	setCounterType(type: number): void;

	/**
	 * @return Counter-attack value (meaning depends on counter type, e.g. flat damage or multiplier).
	 */
	getCounterValue(): number;

	/**
	 * @param value Counter-attack value (flat damage or multiplier).
	 */
	setCounterValue(value: number): void;

	/**
	 * @return Animation ID played when the counter-attack triggers, or -1 for none.
	 */
	getCounterAnimationId(): number;

	/**
	 * @param animationId Animation ID for the counter-attack, or -1 for none.
	 */
	setCounterAnimationId(animationId: number): void;
}

