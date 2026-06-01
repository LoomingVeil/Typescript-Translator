
/**
 * API interface for Dodge abilities.
 * Cancels the incoming attack event entirely and plays a random dodge animation.
 */
export interface IAbilityDodge extends IAbilityDefend {
	/**
	 * @return Animation ID for dodge variant 1, or -1 for none.
	 */
	getDodgeAnimation1Id(): number;

	/**
	 * @param animationId Animation ID, or -1 for none.
	 */
	setDodgeAnimation1Id(animationId: number): void;

	/**
	 * @return Animation ID for dodge variant 2, or -1 for none.
	 */
	getDodgeAnimation2Id(): number;

	/**
	 * @param animationId Animation ID, or -1 for none.
	 */
	setDodgeAnimation2Id(animationId: number): void;

	/**
	 * @return Animation ID for dodge variant 3, or -1 for none.
	 */
	getDodgeAnimation3Id(): number;

	/**
	 * @param animationId Animation ID, or -1 for none.
	 */
	setDodgeAnimation3Id(animationId: number): void;
}

