
/**
 * Common API interface for all combat actions (abilities and chained abilities).
 * Both {@link IAbility} and {@link IChainedAbility} extend this interface.
 */
export interface IAbilityAction extends IObject {
	/**
	 * @return The unique identifier/name of this action.
	 */
	getName(): string;

	/**
	 * @return Whether this action is enabled.
	 */
	isEnabled(): boolean;

	/**
	 * @return Selection weight for random ability selection (higher = more likely).
	 */
	getWeight(): number;

	/**
	 * @return Cooldown duration in ticks after this action is used.
	 */
	getCooldownTicks(): number;

	/**
	 * @return Minimum range in blocks at which this action can be used.
	 */
	getMinRange(): number;

	/**
	 * @return Maximum range in blocks at which this action can be used.
	 */
	getMaxRange(): number;

	/**
	 * @return Whether this action is a chained ability (sequence) vs an individual ability.
	 */
	isChain(): boolean;
}

