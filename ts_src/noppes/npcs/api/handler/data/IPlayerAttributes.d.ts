
/**
 * Represents a collection of a player's custom attributes.
 * <p>
 * Expose methods to retrieve all attribute instances as an array, look up individual attributes by key,
 * and check for the presence of a specific attribute.
 * </p>
 */
export interface IPlayerAttributes extends IObject {
	/**
	 * Recalulates Item Attributes on a Player
	 * 
	 * @param player the player whose attributes to recalculate
	 */
	recalculate(player: IPlayer): void;

	/**
	 * Returns an array of all custom attribute instances associated with the player.
	 * 
	 * @return an array of {@link ICustomAttribute} objects
	 */
	getAttributes(): ICustomAttribute[];

	/**
	 * Returns the value of the attribute identified by the given key.
	 * 
	 * @param key the attribute key (e.g., "health", "movement_speed")
	 * @return the float value of the attribute, or 0 if the attribute is not found
	 */
	getAttributeValue(key: string): number;

	/**
	 * Checks whether an attribute with the given key exists.
	 * 
	 * @param key the attribute key to check
	 * @return true if the attribute exists, false otherwise
	 */
	hasAttribute(key: string): boolean;

	/**
	 * Returns the custom attribute instance identified by the given key.
	 * 
	 * @param key the attribute key (e.g., "health", "movement_speed")
	 * @return the corresponding {@link ICustomAttribute} instance, or null if not found
	 */
	getAttribute(key: string): ICustomAttribute;

	getAttributeKeys(): string;

	getCoreAttributeKeys(): string;

	hasCoreAttribute(key: string): boolean;

	/**
	 * Gets the attribute core as an item that can be given to the player.
	 * 
	 * @param canBeRedeemed When true and right-clicking the core for 3 seconds will give you all the attributes associated with the core.
	 */
	getAttributeCore(canBeRedeemed: boolean): IItemStack;

	/**
	 * Gets the attribute core as an item that can be given to the player.
	 */
	getAttributeCore(): IItemStack;

	resetCoreAttributes(): void;

	/**
	 * Gets core attributes. These attributes are separate from equipment attributes.
	 */
	getCoreAttribute(key: string): number;

	modifyCoreAttribute(key: string, delta: number): void;

	/**
	 * Gives attributes to the player. These attributes are the same that can be applied to item except these attributes are always active until removed.
	 */
	setCoreAttribute(key: string, value: number): void;
}

