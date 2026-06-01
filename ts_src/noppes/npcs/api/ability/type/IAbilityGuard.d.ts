
/**
 * API interface for Guard abilities.
 * Defensive stance that reduces incoming damage.
 */
export interface IAbilityGuard extends IAbilityDefend {
	/**
	 * @return Damage reduction multiplier while guarding (0.0 = full block, 1.0 = no reduction).
	 */
	getDamageReduction(): number;

	/**
	 * @param reduction Damage reduction multiplier (0.0 = full block, 1.0 = no reduction).
	 */
	setDamageReduction(reduction: number): void;
}

