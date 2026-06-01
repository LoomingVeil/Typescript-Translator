
/**
 * API interface for chained abilities - ordered sequences of ability references
 * that execute one after another with configurable delays.
 */
export interface IChainedAbility extends IAbilityAction {
	/**
	 * @return Whether all entries wind up simultaneously before execution begins.
	 */
	isWindUpAll(): boolean;

	/**
	 * @return The number of ability entries in this chain.
	 */
	getEntryCount(): number;

	/**
	 * @param index Entry index in the chain.
	 * @return The ability reference ID at the given index.
	 */
	getEntryReference(index: number): string;

	/**
	 * @param index Entry index in the chain.
	 * @return The delay in ticks before executing this entry.
	 */
	getEntryDelay(index: number): number;

	/**
	 * @param index Entry index in the chain.
	 * @return Whether this entry executes inline (overlapping with previous).
	 */
	isEntryInline(index: number): boolean;
}

