
/**
 * Events related to chained ability execution lifecycle.
 * These fire at chain-level transitions, not per-ability.
 * Unified for both NPCs and Players.
 */
export interface IChainEvent extends ICustomNPCsEvent {
	/**
	 * Get the entity executing the chain (NPC or Player).
	 * 
	 * @return the entity executing the chain
	 */
	getEntity(): IEntityLivingBase;

	/**
	 * Get the player executing the chain, or null if the caster is an NPC.
	 * 
	 * @return the player executing the chain, or null if NPC
	 */
	getPlayer(): IPlayer;

	/**
	 * Get the NPC executing the chain, or null if the caster is a player.
	 * 
	 * @return the NPC executing the chain, or null if player
	 */
	getNpc(): ICustomNpc;

	/**
	 * Whether the entity executing the chain is an NPC.
	 * 
	 * @return true if the executor is an NPC
	 */
	isNPC(): boolean;

	/**
	 * Get the chained ability being executed.
	 * 
	 * @return the chained ability being executed
	 */
	getChain(): IChainedAbility;

	/**
	 * Get the target of the chain, or null if no target.
	 * 
	 * @return the current target entity
	 */
	getTarget(): IEntityLivingBase;

	/**
	 * Get the current entry index within the chain (0-based).
	 * 
	 * @return the current entry index in the chain
	 */
	getEntryIndex(): number;
}

/**
 * Fired when a chained ability sequence starts executing.
 */
export interface StartEvent extends IChainEvent {}

/**
 * Fired when the chain advances to the next entry in the sequence.
 */
export interface NextEvent extends IChainEvent {}

/**
 * Fired when a chained ability sequence completes all entries.
 */
export interface CompleteEvent extends IChainEvent {}

/**
 * Fired when a chained ability is interrupted by damage.
 */
export interface InterruptEvent extends IChainEvent {
	/**
	 * Get the damage source that caused the interruption.
	 * 
	 * @return the damage source used for this hit
	 */
	getDamageSource(): IDamageSource;

	/**
	 * Get the amount of damage that caused the interruption.
	 * 
	 * @return the damage amount
	 */
	getDamage(): number;
}

