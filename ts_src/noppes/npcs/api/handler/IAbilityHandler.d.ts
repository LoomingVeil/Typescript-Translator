
/**
 * Handler for ability management. Allows scripts to query ability types,
 * built-in abilities, and custom ability presets.
 * <p>
 * Access via API.getAbilities()
 */
export interface IAbilityHandler extends IObject {
	/**
	 * Get all registered ability type IDs.
	 * 
	 * @return array of all registered ability type IDs
	 */
	getTypes(): string[];

	/**
	 * Check if an ability type is registered.
	 * 
	 * @param typeId the ability type ID to check
	 * @return true if the type is registered
	 */
	hasType(typeId: string): boolean;

	/**
	 * Get all built-in ability names.
	 * 
	 * @return array of all registered ability names (built-in and custom)
	 */
	getAbilityNameArray(): string[];

	/**
	 * Check if a built-in ability exists by name.
	 * 
	 * @param name the ability name to check
	 * @return true if an ability with this name exists
	 */
	hasAbilityName(name: string): boolean;

	/**
	 * Get all custom ability preset names.
	 * 
	 * @return array of all custom (user-created) ability names
	 */
	getCustomAbilityNameArray(): string[];

	/**
	 * Check if a custom ability preset exists by name.
	 * 
	 * @param name the custom ability name to check
	 * @return true if a custom ability with this name exists
	 */
	hasCustomAbilityName(name: string): boolean;

	/**
	 * Delete a custom ability preset by name.
	 * 
	 * @param name the custom ability name to delete
	 * @return true if deleted successfully
	 */
	deleteCustomAbilityByName(name: string): boolean;

	/**
	 * Get all chained ability names.
	 * 
	 * @return array of all chained ability names
	 */
	getChainedAbilityNames(): string[];

	/**
	 * Check if a chained ability exists by name.
	 * 
	 * @param name the chained ability name to check
	 * @return true if a chained ability with this name exists
	 */
	hasChainedAbilityName(name: string): boolean;

	/**
	 * Delete a chained ability by name.
	 * 
	 * @param name the chained ability name to delete
	 * @return true if deleted successfully
	 */
	deleteChainedAbilityByName(name: string): boolean;

	/**
	 * Get a chained ability by name.
	 * 
	 * @param name the chained ability name
	 * @return the chained ability, or null if not found
	 */
	getChainedAbility(name: string): IChainedAbility;

	/**
	 * Save a chained ability. If a chain with the same name exists, it is overwritten.
	 * 
	 * @param chain the chained ability to save
	 * @return true if saved successfully
	 */
	saveChainedAbility(chain: IChainedAbility): boolean;

	getCustomAbilityByName(name: string): IAbility;

	getCustomAbilityByUUID(UUID: string): IAbility;
}

