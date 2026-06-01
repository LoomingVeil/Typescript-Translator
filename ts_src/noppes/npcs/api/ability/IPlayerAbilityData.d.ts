
/**
 * Interface for managing player abilities.
 * Players reference abilities by key (built-in names or custom UUIDs).
 * <p>
 * Access via IPlayerData.getAbilityData()
 */
export interface IPlayerAbilityData extends IObject {
	/**
	 * Get all unlocked ability keys.
	 * 
	 * @return array of ability keys
	 */
	getUnlockedAbilities(): string[];

	/**
	 * Unlock an ability for this player.
	 * 
	 * @param key The ability key (built-in name or custom UUID)
	 */
	unlockAbility(key: string): void;

	/**
	 * Lock (remove) an ability from this player.
	 * 
	 * @param key the ability key
	 */
	lockAbility(key: string): void;

	/**
	 * Check if the player has unlocked a specific ability.
	 * 
	 * @param key the ability key
	 * @return true if unlocked
	 */
	hasUnlockedAbility(key: string): boolean;

	/**
	 * Get the currently selected ability index.
	 * 
	 * @return the selected index
	 */
	getSelectedIndex(): number;

	/**
	 * Set the selected ability index.
	 * 
	 * @param index the ability index
	 */
	setSelectedIndex(index: number): void;

	/**
	 * Get the key of the currently selected ability.
	 * 
	 * @return the selected ability key
	 */
	getSelectedAbilityKey(): string;

	/**
	 * Select the next ability in the list.
	 */
	selectNext(): void;

	/**
	 * Select the previous ability in the list.
	 */
	selectPrevious(): void;

	/**
	 * Check if the player is currently executing an ability.
	 * 
	 * @return true if executing
	 */
	isExecutingAbility(): boolean;

	/**
	 * Get the currently executing ability.
	 * 
	 * @return the current ability, or null
	 */
	getCurrentAbility(): IAbility;

	/**
	 * Interrupt the currently executing ability.
	 */
	interruptCurrentAbility(): void;

	/**
	 * Signal the current ability to complete immediately.
	 */
	completeCurrentAbility(): void;

	/**
	 * Check if the player is on universal cooldown.
	 * 
	 * @return true if on cooldown
	 */
	isOnCooldown(): boolean;

	/**
	 * Check if a specific ability is on cooldown.
	 * 
	 * @param key The ability key
	 * @return true if on cooldown
	 */
	isOnCooldown(key: string): boolean;

	/**
	 * Reset the universal cooldown.
	 */
	resetCooldown(): void;

	/**
	 * Reset cooldown for a specific ability key.
	 * 
	 * @param key The ability key
	 */
	resetCooldown(key: string): void;

	/**
	 * Reset all cooldowns.
	 */
	resetAllCooldowns(): void;

	/**
	 * Activate the currently selected ability.
	 * 
	 * @return true if activated
	 */
	activateAbility(): boolean;

	/**
	 * Activate a specific ability by key.
	 * 
	 * @param key the ability key
	 * @return true if activated
	 */
	activateAbility(key: string): boolean;

	/**
	 * Cycle a toggle ability to its next state.
	 * Off -&gt; State 1 -&gt; State 2 -&gt; ... -&gt; State N -&gt; Off
	 * 
	 * @param key the ability key
	 * @return The new state (0 = off, 1+ = active state number)
	 */
	toggleAbility(key: string): number;

	/**
	 * Get the current toggle state for an ability.
	 * 
	 * @param key the ability key
	 * @return 0 if not active, 1+ for active state
	 */
	getToggleState(key: string): number;

	/**
	 * Set a toggle to a specific state. 0 = deactivate, 1+ = specific state.
	 * 
	 * @param key the ability key
	 * @param state the toggle state
	 */
	setToggleState(key: string, state: number): void;

	/**
	 * Check if a toggle ability is currently active (any state &gt; 0).
	 * 
	 * @param key the ability key
	 * @return true if toggled on
	 */
	isAbilityToggled(key: string): boolean;
}

