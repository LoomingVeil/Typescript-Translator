
/**
 * Interface for an NPC's ability data manager.
 * Provides access to the NPC's abilities and execution state.
 */
export interface IDataAbilities extends IObject {
	/**
	 * Check if the ability system is enabled for this NPC.
	 * 
	 * @return true if enabled
	 */
	isEnabled(): boolean;

	/**
	 * Enable or disable the ability system for this NPC.
	 * 
	 * @param enabled whether to enable
	 */
	setEnabled(enabled: boolean): void;

	/**
	 * Get all abilities assigned to this NPC (resolved from slots).
	 * Returns safe deep copies. Use {@link #getSourceAbility(String)} for live references.
	 * 
	 * @return array of abilities
	 */
	getAbilities(): IAbility[];

	/**
	 * Add an inline ability to this NPC.
	 * 
	 * @param ability the ability to add
	 */
	addAbility(ability: IAbility): void;

	/**
	 * Add a reference ability by key (built-in name or custom UUID).
	 * 
	 * @param key the ability reference key
	 */
	addAbilityReference(key: string): void;

	/**
	 * Remove an ability by ID.
	 * 
	 * @param abilityId the ability ID to remove
	 */
	removeAbility(abilityId: string): void;

	/**
	 * Get an ability by ID.
	 * Returns a safe deep copy. Use {@link #getSourceAbility(String)} for the live reference.
	 * 
	 * @param abilityId the ability ID
	 * @return the ability, or null
	 */
	getAbility(abilityId: string): IAbility;

	/**
	 * Check if the NPC has an ability with the given ID.
	 * 
	 * @param abilityId the ability ID
	 * @return true if found
	 */
	hasAbility(abilityId: string): boolean;

	/**
	 * Check if a slot is a reference (by ability ID).
	 * 
	 * @param abilityId the ability ID
	 * @return true if reference
	 */
	isAbilityReference(abilityId: string): boolean;

	/**
	 * Convert a reference slot to inline (by ability ID).
	 * Returns false if the reference cannot be resolved.
	 * 
	 * @param abilityId the ability ID
	 * @return true if converted successfully
	 */
	convertToInline(abilityId: string): boolean;

	/**
	 * Clear all abilities from this NPC.
	 */
	clearAbilities(): void;

	/**
	 * Get the currently executing ability, or null if none.
	 * Returns a safe deep copy. Use {@link #getSourceCurrentAbility()} for the live reference.
	 * 
	 * @return the current ability, or null
	 */
	getCurrentAbility(): IAbility;

	/**
	 * Check if any ability is currently executing.
	 * 
	 * @return true if executing
	 */
	isExecutingAbility(): boolean;

	/**
	 * Interrupt the current ability if one is executing.
	 */
	interruptCurrentAbility(): void;

	/**
	 * Signal the current ability to complete immediately.
	 */
	completeCurrentAbility(): void;

	/**
	 * Get the global cooldown timer in ticks.
	 * 
	 * @return cooldown in ticks
	 */
	getGlobalCooldown(): number;

	/**
	 * Set the global cooldown timer in ticks.
	 * 
	 * @param ticks cooldown in ticks
	 */
	setGlobalCooldown(ticks: number): void;

	/**
	 * Reset all ability cooldowns.
	 */
	resetCooldowns(): void;

	/**
	 * Force start an ability on this NPC.
	 * If an ability is currently executing, it will be cancelled.
	 * 
	 * @param abilityId The ID of the ability to start
	 * @return true if the ability was started successfully
	 */
	forceStartAbility(abilityId: string): boolean;

	/**
	 * Force start an ability on this NPC with a specific target.
	 * If an ability is currently executing, it will be cancelled.
	 * 
	 * @param abilityId The ID of the ability to start
	 * @param target The target entity (can be null for self-targeted abilities)
	 * @return true if the ability was started successfully
	 */
	forceStartAbility(abilityId: string, target: any): boolean;

	/**
	 * Execute an ability on this NPC by key (built-in name or custom UUID).
	 * The NPC does NOT need to have this ability assigned.
	 * If an ability is currently executing, it will be cancelled.
	 * 
	 * @param key The ability key (built-in name or custom UUID)
	 * @return true if the ability was started successfully
	 */
	executeAbility(key: string): boolean;

	/**
	 * Execute an ability on this NPC with a specific target.
	 * The NPC does NOT need to have this ability assigned.
	 * If an ability is currently executing, it will be cancelled.
	 * 
	 * @param key The ability key (built-in name or custom UUID)
	 * @param target The target entity (can be null for self-targeted abilities)
	 * @return true if the ability was started successfully
	 */
	executeAbility(key: string, target: any): boolean;

	/**
	 * Create a new ability instance by type ID.
	 * The ability is not assigned to this NPC - use addAbility() to assign it.
	 * 
	 * @param typeId The type ID (e.g., "cnpc:slam", "cnpc:projectile")
	 * @return The new ability, or null if the type is unknown
	 */
	createAbility(typeId: string): IAbility;

	/**
	 * Get the live source reference of an ability by ID.
	 * Unlike {@link #getAbility(String)} which returns a safe copy,
	 * this returns the actual ability object. Modifications will permanently
	 * affect the NPC's ability configuration.
	 * 
	 * @param abilityId The ID of the ability
	 * @return The live ability reference, or null if not found
	 */
	getSourceAbility(abilityId: string): IAbility;

	/**
	 * Get the live source reference of the currently executing ability.
	 * Unlike {@link #getCurrentAbility()} which returns a safe copy,
	 * this returns the actual ability object. Modifications will permanently
	 * affect the NPC's ability configuration.
	 * 
	 * @return The live ability reference, or null if no ability is executing
	 */
	getSourceCurrentAbility(): IAbility;
}

